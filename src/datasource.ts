import { getBackendSrv, BackendSrvRequest, FetchResponse } from "@grafana/runtime";
import {
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
  // MutableDataFrame,
  // DataFrame,
  toDataFrame,
  // FieldType,
  // guessFieldTypeFromValue,
} from '@grafana/data';
import { lastValueFrom, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { isArray, isNull } from "lodash";

import {
  MyQuery,
  MyDataSourceOptions,
  QueryEditorMode,
  StreamName,
  StreamList,
  //Fields,
  StreamSchemaResponse,
  StreamStatsResponse
} from './types';
export class DataSource extends DataSourceApi<MyQuery, MyDataSourceOptions> {
  url: string;
  withCredentials: boolean;
  headers: any;
  defaultEditorMode: QueryEditorMode;
  constructor(instanceSettings: DataSourceInstanceSettings<MyDataSourceOptions>) {
    super(instanceSettings);
    this.url = instanceSettings.url === undefined ? '' : instanceSettings.url;
    this.withCredentials = instanceSettings.withCredentials !== undefined;
    this.defaultEditorMode = instanceSettings.jsonData?.defaultEditorMode ?? "code"
  }

  async doRequest(query: MyQuery) {
    const routePath = '/api/v1'
    const result = await getBackendSrv().datasourceRequest({
      method: "GET",
      url: this.url + routePath + '/readiness',
      params: query,
    })
    return result;
  }

  async query(options: DataQueryRequest<MyQuery>): Promise<DataQueryResponse> {
    options.targets = options.targets.filter((t) => !t.hide);
    if (options.targets.length === 0) {
      return Promise.resolve({ data: [] });
    }

    const { range } = options;
    if (!range) {
      return Promise.resolve({ data: [] });
    }
    const start = range!.from;
    const end = range!.to;

    const calls = options.targets.map(target => {
      const request = {
        "query": target.queryText,
        "startTime": start.toISOString(),
        "endTime": end.toISOString(),
        "send_null": true
      };
      return lastValueFrom(
        this.doFetch<any[]>({
          url: this.url + '/api/v1/query',
          data: request,
          method: 'POST',
        }).pipe(
          map((response) => {
            return toDataFrame(response.data);
          }),
          catchError((err) => {
            return of({ data: [] });
          })
        )
      );
    });

    const data = await Promise.all(calls);
    return {
      data,
    };
  }

  doFetch<T>(options: BackendSrvRequest) {
    options.withCredentials = this.withCredentials;
    options.headers = this.headers;

    return getBackendSrv().fetch<T>(options);
  }

  // arrayToDataFrame(array: any[]): DataFrame {
  //   let dataFrame: MutableDataFrame = new MutableDataFrame();
  //   if (array.length > 0) {
  //     const fields = Object.keys(array[0]).map(field => {
  //       return { name: field, type: guessFieldTypeFromValue(array[0][field]) };
  //     });

  //     toDataFrame(array);
  //     let timeFieldFound = false;
  //     for (const field of fields) {
  //       // Check for p_timestamp first
  //       // because if it is present we want to use this field
  //       // as we know the format (ISO8601)
  //       if (field.name.toLowerCase() === 'p_timestamp') {
  //         field.type = FieldType.time;
  //         timeFieldFound = true;
  //         break;
  //       }
  //     }
  //     // fallback to other possible time fields
  //     // if p_timestamp is not present
  //     if (!timeFieldFound) {  
  //       for (const field of fields) {
  //         if (field.name.toLowerCase() === 'time') {
  //           field.type = FieldType.time;
  //         } else if (field.name.toLowerCase() === 'datetime') {
  //           field.type = FieldType.time;
  //         } else if (field.name.toLowerCase() === 'timestamp') {
  //           field.type = FieldType.time;
  //         } else if (field.name.toLowerCase() === 'date') {
  //           field.type = FieldType.time;
  //         }
  //       }
  //     }

  //     dataFrame = new MutableDataFrame({ fields });
  //     array.forEach((row, index) => {
  //       dataFrame.appendRow(Object.values(row));
  //     });
  //   }
  //   return dataFrame;
  // }

  async listStreams(): Promise<StreamList[]> {
    return lastValueFrom(
      this.doFetch({
        url: this.url + '/api/v1/logstream',
        method: 'GET',
      }).pipe(
        map((response) =>
          isArray(response.data)
            ? response.data
            : []
        ),
        catchError((err) => {
          return of([]);
        }))
    );
  }

  async streamStats(streamname: StreamName): Promise<StreamStatsResponse> {
    if (streamname) {
      return lastValueFrom(
        this.doFetch({
          url: this.url + '/api/v1/logstream/' + streamname.value + '/stats',
          method: 'GET',
        }).pipe(
          map((response) =>
            (typeof response.data === 'object' && !isNull(response.data))
              ? response.data
              : {}
          ),
          catchError((err) => {
            return of({
              status: 'error',
              message: err.statusText
            })

          }))
      )
    }
    return {}
  }

  async streamSchema(streamname: StreamName): Promise<StreamSchemaResponse> {
    if (streamname) {
      return lastValueFrom(
        this.doFetch({
          url: this.url + '/api/v1/logstream/' + streamname.value + '/schema',
          method: 'GET',
        }).pipe(
          map((response) =>
            (typeof response.data === 'object' && !isNull(response.data))
              ? response.data
              : {}
          ),
          catchError((err) => {
            return of({
              status: 'error',
              message: err.statusText
            })

          }))
      )
    }
    return { fields: [] }
  }

  async testDatasource() {
    const errorMessageBase = 'Parseable server is not reachable';
    try {
      const response = await lastValueFrom(
        this.doFetch({
          url: this.url + '/api/v1/readiness',
          method: 'GET',
        }).pipe(map((response) => response))
      );

      if (response.status === 200) {
        return { status: 'success', message: 'Parseable server is reachable', title: 'Success' };
      }

      return {
        message: response.statusText ? response.statusText : errorMessageBase,
        status: 'error',
        title: 'Error',
      };
    } catch (err) {
      if (typeof err === 'string') {
        return {
          status: 'error',
          message: err,
        };
      }

      let error = err as FetchResponse;
      let message = error.statusText ?? errorMessageBase;
      if (error.data?.error?.code !== undefined) {
        message += `: ${error.data.error.code}. ${error.data.error.message}`;
      }

      return { status: 'error', message, title: 'Error' };
    }
  }
}
