define(["@grafana/data","@grafana/runtime","rxjs","lodash","react","@grafana/ui"],((e,t,r,n,o,i)=>(()=>{"use strict";var a={305:t=>{t.exports=e},545:e=>{e.exports=t},388:e=>{e.exports=i},980:e=>{e.exports=n},650:e=>{e.exports=o},177:e=>{e.exports=r}},u={};function s(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={exports:{}};return a[e](r,r.exports,s),r.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{s.r(c),s.d(c,{plugin:()=>ue});var e=s(305),t=s(545),r=s(177);function n(e){return"function"==typeof e}function o(e){return function(t){if(function(e){return n(null==e?void 0:e.lift)}(t))return t.lift((function(t){try{return e(t,this)}catch(e){this.error(e)}}));throw new TypeError("Unable to lift unknown Observable type")}}var i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)};function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function u(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function l(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function f(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function p(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function h(e){return this instanceof h?(this.v=e,this):new h(e)}function d(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||u(e,t)}))})}function u(e,t){try{(r=o[e](t)).value instanceof h?Promise.resolve(r.value.v).then(s,c):l(i[0][2],r)}catch(e){l(i[0][3],e)}var r}function s(e){u("next",e)}function c(e){u("throw",e)}function l(e,t){e(t),i.shift(),i.length&&u(i[0][0],i[0][1])}}Object.create,Object.create;var v,y=((v=function(e){var t;t=this,Error.call(t),t.stack=(new Error).stack,this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}).prototype=Object.create(Error.prototype),v.prototype.constructor=v,v);function b(e,t){if(e){var r=e.indexOf(t);0<=r&&e.splice(r,1)}}var m=function(){function e(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}var t;return e.prototype.unsubscribe=function(){var e,t,r,o,i;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var u=l(a),s=u.next();!s.done;s=u.next())s.value.remove(this)}catch(t){e={error:t}}finally{try{s&&!s.done&&(t=u.return)&&t.call(u)}finally{if(e)throw e.error}}else a.remove(this);var c=this.initialTeardown;if(n(c))try{c()}catch(e){i=e instanceof y?e.errors:[e]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var d=l(h),v=d.next();!v.done;v=d.next()){var b=v.value;try{g(b)}catch(e){i=null!=i?i:[],e instanceof y?i=p(p([],f(i)),f(e.errors)):i.push(e)}}}catch(e){r={error:e}}finally{try{v&&!v.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}}if(i)throw new y(i)}},e.prototype.add=function(t){var r;if(t&&t!==this)if(this.closed)g(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(r=this._finalizers)&&void 0!==r?r:[]).push(t)}},e.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},e.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},e.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&b(t,e)},e.prototype.remove=function(t){var r=this._finalizers;r&&b(r,t),t instanceof e&&t._removeParent(this)},e.EMPTY=((t=new e).closed=!0,t),e}();function w(e){return e instanceof m||e&&"closed"in e&&n(e.remove)&&n(e.add)&&n(e.unsubscribe)}function g(e){n(e)?e():e.unsubscribe()}m.EMPTY;var S=null,x=null,T=void 0,O=!1,E=!1,_={setTimeout:function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var o=_.delegate;return(null==o?void 0:o.setTimeout)?o.setTimeout.apply(o,p([e,t],f(r))):setTimeout.apply(void 0,p([e,t],f(r)))},clearTimeout:function(e){var t=_.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function P(e){_.setTimeout((function(){if(!S)throw e;S(e)}))}function j(){}var F=A("C",void 0,void 0);function A(e,t,r){return{kind:e,value:t,error:r}}var C=null,I=function(e){function t(t){var r=e.call(this)||this;return r.isStopped=!1,t?(r.destination=t,w(t)&&t.add(r)):r.destination=G,r}return a(t,e),t.create=function(e,t,r){return new q(e,t,r)},t.prototype.next=function(e){this.isStopped?R(function(e){return A("N",e,void 0)}(e),this):this._next(e)},t.prototype.error=function(e){this.isStopped?R(A("E",void 0,e),this):(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped?R(F,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(m),k=Function.prototype.bind;function D(e,t){return k.call(e,t)}var z=function(){function e(e){this.partialObserver=e}return e.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(e){M(e)}},e.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(e){M(e)}else M(e)},e.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(e){M(e)}},e}(),q=function(e){function t(t,r,o){var i,a,u=e.call(this)||this;return n(t)||!t?i={next:null!=t?t:void 0,error:null!=r?r:void 0,complete:null!=o?o:void 0}:u&&E?((a=Object.create(t)).unsubscribe=function(){return u.unsubscribe()},i={next:t.next&&D(t.next,a),error:t.error&&D(t.error,a),complete:t.complete&&D(t.complete,a)}):i=t,u.destination=new z(i),u}return a(t,e),t}(I);function M(e){var t;O?(t=e,O&&C&&(C.errorThrown=!0,C.error=t)):P(e)}function R(e,t){var r=x;r&&_.setTimeout((function(){return r(e,t)}))}var G={closed:!0,next:j,error:function(e){throw e},complete:j};function U(e,t,r,n,o){return new V(e,t,r,n,o)}var V=function(e){function t(t,r,n,o,i,a){var u=e.call(this,t)||this;return u.onFinalize=i,u.shouldUnsubscribe=a,u._next=r?function(e){try{r(e)}catch(e){t.error(e)}}:e.prototype._next,u._error=o?function(e){try{o(e)}catch(e){t.error(e)}finally{this.unsubscribe()}}:e.prototype._error,u._complete=n?function(){try{n()}catch(e){t.error(e)}finally{this.unsubscribe()}}:e.prototype._complete,u}return a(t,e),t.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}},t}(I);function L(e,t){return o((function(r,n){var o=0;r.subscribe(U(n,(function(r){n.next(e.call(t,r,o++))})))}))}var Q="function"==typeof Symbol&&Symbol.observable||"@@observable";function N(e){return e}function Y(e){return 0===e.length?N:1===e.length?e[0]:function(t){return e.reduce((function(e,t){return t(e)}),t)}}var B=function(){function e(e){e&&(this._subscribe=e)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(e,t,r){var o,i=this,a=(o=e)&&o instanceof I||function(e){return e&&n(e.next)&&n(e.error)&&n(e.complete)}(o)&&w(o)?e:new q(e,t,r);return function(e){if(O){var t=!C;if(t&&(C={errorThrown:!1,error:null}),e(),t){var r=C,n=r.errorThrown,o=r.error;if(C=null,n)throw o}}else e()}((function(){var e=i,t=e.operator,r=e.source;a.add(t?t.call(a,r):r?i._subscribe(a):i._trySubscribe(a))})),a},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},e.prototype.forEach=function(e,t){var r=this;return new(t=W(t))((function(t,n){var o=new q({next:function(t){try{e(t)}catch(e){n(e),o.unsubscribe()}},error:n,complete:t});r.subscribe(o)}))},e.prototype._subscribe=function(e){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(e)},e.prototype[Q]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Y(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=W(e))((function(e,r){var n;t.subscribe((function(e){return n=e}),(function(e){return r(e)}),(function(){return e(n)}))}))},e.create=function(t){return new e(t)},e}();function W(e){var t;return null!==(t=null!=e?e:T)&&void 0!==t?t:Promise}var $="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function H(e){return new B((function(t){(function(e,t){var r,n,o,i,a,s,c,f;return a=this,s=void 0,f=function(){var a,s;return u(this,(function(u){switch(u.label){case 0:u.trys.push([0,5,6,11]),r=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=l(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){!function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)}(n,o,(t=e[r](t)).done,t.value)}))}}}(e),u.label=1;case 1:return[4,r.next()];case 2:if((n=u.sent()).done)return[3,4];if(a=n.value,t.next(a),t.closed)return[2];u.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=u.sent(),o={error:s},[3,11];case 6:return u.trys.push([6,,9,10]),n&&!n.done&&(i=r.return)?[4,i.call(r)]:[3,8];case 7:u.sent(),u.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}}))},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{o(f.next(e))}catch(e){t(e)}}function n(e){try{o(f.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof c?o:new c((function(e){e(o)}))).then(r,n)}o((f=f.apply(a,s||[])).next())}))})(e,t).catch((function(e){return t.error(e)}))}))}function J(e){return o((function(t,r){var o,i=null,a=!1;i=t.subscribe(U(r,void 0,void 0,(function(s){o=function(e){if(e instanceof B)return e;if(null!=e){if(function(e){return n(e[Q])}(e))return s=e,new B((function(e){var t=s[Q]();if(n(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if((a=e)&&"number"==typeof a.length&&"function"!=typeof a)return i=e,new B((function(e){for(var t=0;t<i.length&&!e.closed;t++)e.next(i[t]);e.complete()}));if(n(null==(o=e)?void 0:o.then))return r=e,new B((function(e){r.then((function(t){e.closed||(e.next(t),e.complete())}),(function(t){return e.error(t)})).then(null,P)}));if(function(e){return Symbol.asyncIterator&&n(null==e?void 0:e[Symbol.asyncIterator])}(e))return H(e);if(function(e){return n(null==e?void 0:e[$])}(e))return t=e,new B((function(e){var r,n;try{for(var o=l(t),i=o.next();!i.done;i=o.next()){var a=i.value;if(e.next(a),e.closed)return}}catch(e){r={error:e}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}e.complete()}));if(function(e){return n(null==e?void 0:e.getReader)}(e))return H(function(e){return d(this,arguments,(function(){var t,r,n;return u(this,(function(o){switch(o.label){case 0:t=e.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,h(t.read())];case 3:return r=o.sent(),n=r.value,r.done?[4,h(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,h(n)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}}))}))}(e))}var t,r,o,i,a,s;throw function(e){return new TypeError("You provided "+(null!==e&&"object"==typeof e?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}(e)}(e(s,J(e)(t))),i?(i.unsubscribe(),i=null,o.subscribe(r)):a=!0}))),a&&(i.unsubscribe(),i=null,o.subscribe(r))}))}var K=s(980);function X(e,t,r,n,o,i,a){try{var u=e[i](a),s=u.value}catch(e){return void r(e)}u.done?t(s):Promise.resolve(s).then(n,o)}function Z(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){X(i,n,o,a,u,"next",e)}function u(e){X(i,n,o,a,u,"throw",e)}a(void 0)}))}}class ee extends e.DataSourceApi{doRequest(e){var r=this;return Z((function*(){return yield(0,t.getBackendSrv)().datasourceRequest({method:"GET",url:r.url+"/api/v1/readiness",params:e})}))()}query(e){var t=this;return Z((function*(){if(e.targets=e.targets.filter((e=>!e.hide)),0===e.targets.length)return Promise.resolve({data:[]});const{range:n}=e;if(!n)return Promise.resolve({data:[]});const o=n.from,i=n.to,a=e.targets.map((e=>{const n={query:e.queryText,startTime:o.toISOString(),endTime:i.toISOString()};return(0,r.lastValueFrom)(t.doFetch({url:t.url+"/api/v1/query",data:n,method:"POST"}).pipe(L((e=>t.arrayToDataFrame(e.data))),J((e=>(console.error(e),(0,r.of)({data:[]}))))))}));return{data:yield Promise.all(a)}}))()}doFetch(e){return e.withCredentials=this.withCredentials,e.headers=this.headers,(0,t.getBackendSrv)().fetch(e)}arrayToDataFrame(t){let r=new e.MutableDataFrame;if(t.length>0){const n=Object.keys(t[0]).map((r=>({name:r,type:(0,e.guessFieldTypeFromValue)(t[0][r])})));r=new e.MutableDataFrame({fields:n}),t.forEach(((e,t)=>{r.appendRow(Object.values(e))}))}return r}listStreams(){var e=this;return Z((function*(){return(0,r.lastValueFrom)(e.doFetch({url:e.url+"/api/v1/logstream",method:"GET"}).pipe(L((e=>(0,K.isArray)(e.data)?e.data:[])),J((e=>(console.error(e),(0,r.of)([]))))))}))()}streamStats(e){var t=this;return Z((function*(){return e?(0,r.lastValueFrom)(t.doFetch({url:t.url+"/api/v1/logstream/"+e.value+"/stats",method:"GET"}).pipe(L((e=>"object"!=typeof e.data||(0,K.isNull)(e.data)?{}:e.data)),J((e=>(console.error(e),(0,r.of)({status:"error",message:e.statusText})))))):{}}))()}streamSchema(e){var t=this;return Z((function*(){return e?(0,r.lastValueFrom)(t.doFetch({url:t.url+"/api/v1/logstream/"+e.value+"/schema",method:"GET"}).pipe(L((e=>"object"!=typeof e.data||(0,K.isNull)(e.data)?{}:e.data)),J((e=>(console.error(e),(0,r.of)({status:"error",message:e.statusText})))))):{fields:[]}}))()}testDatasource(){var e=this;return Z((function*(){const t="Parseable server is not reachable";try{const n=yield(0,r.lastValueFrom)(e.doFetch({url:e.url+"/api/v1/readiness",method:"GET"}).pipe(L((e=>e))));return 200===n.status?{status:"success",message:"Parseable server is reachable",title:"Success"}:{message:n.statusText?n.statusText:t,status:"error",title:"Error"}}catch(e){var n,o;if("string"==typeof e)return{status:"error",message:e};let r=e;var i;let a=null!==(i=r.statusText)&&void 0!==i?i:t;return void 0!==(null===(n=r.data)||void 0===n||null===(o=n.error)||void 0===o?void 0:o.code)&&(a+=`: ${r.data.error.code}. ${r.data.error.message}`),{status:"error",message:a,title:"Error"}}}))()}constructor(e){var t,r;super(e),this.url=void 0===e.url?"":e.url,this.withCredentials=void 0!==e.withCredentials,this.defaultEditorMode=null!==(r=null===(t=e.jsonData)||void 0===t?void 0:t.defaultEditorMode)&&void 0!==r?r:"code"}}var te=s(650),re=s.n(te),ne=s(388);class oe extends te.PureComponent{render(){const{onOptionsChange:e,options:t}=this.props;return re().createElement("div",{className:"gf-form-group"},re().createElement(ne.DataSourceHttpSettings,{defaultUrl:"https://demo.parseable.io",dataSourceConfig:t,showAccessOptions:!0,onChange:e}))}}function ie(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const{FormField:ae}=ne.LegacyForms,ue=new e.DataSourcePlugin(ee).setConfigEditor(oe).setQueryEditor((({datasource:e,onChange:t,onRunQuery:r,query:n})=>{const{queryText:o}=n,i=re().useCallback((()=>e.listStreams().then((e=>e.map((e=>({label:e.name,value:e.name})))),(e=>{throw new Error(e.statusText)}))),[e]),[a,u]=(0,te.useState)(),[s="",c]=re().useState(),[l="",f]=re().useState(),[p="",h]=re().useState(),[d="",v]=re().useState(),[y="",b]=re().useState(),[m="",w]=re().useState(),g=re().useCallback((t=>t?e.streamSchema(t).then((e=>{if(e.fields){const t=e.fields.map((e=>e.name)),r=t.join(", ");return c(r),t}return s}),(e=>{throw new Error(e.statusText)})):""),[e,s]),S=re().useCallback((t=>t?e.streamStats(t).then((e=>{if(e.ingestion){var t;const r=e.ingestion.count,n=e.ingestion.size,o=null===(t=e.storage)||void 0===t?void 0:t.size,i=e.stream,a=e.time;return h(n),v(o),b(i),f(r),w(a),r}return l}),(e=>{throw new Error(e.statusText)})):""),[e,l]);return re().useEffect((()=>{const e=setTimeout((()=>{r()}),2e3);return()=>clearTimeout(e)}),[r,o]),re().useEffect((()=>{g(a)}),[g,a]),re().useEffect((()=>{S(a)}),[S,a]),re().createElement(re().Fragment,null,re().createElement(ne.InlineFieldRow,null,re().createElement(ne.InlineField,null,re().createElement(ne.Label,null,"Select a log stream:")),re().createElement(ne.InlineField,null,re().createElement(ne.AsyncSelect,{loadOptions:i,defaultOptions:!0,value:a,onChange:e=>{u(e)}}))),re().createElement(ne.InlineFieldRow,null,re().createElement(ne.InlineField,null,re().createElement(ne.SeriesTable,{series:[{color:"#299c46",isActive:!0,label:"Stream name",value:y},{color:"#299c46",isActive:!1,label:"Column names",value:s},{color:"#299c46",isActive:!1,label:"Total ingested event count",value:l},{color:"#299c46",isActive:!1,label:"Total ingested json size",value:p},{color:"#299c46",isActive:!1,label:"Total stored data size",value:d}],timestamp:m}))),re().createElement("br",null),re().createElement(ae,{labelWidth:12,inputWidth:100,value:o||"",onChange:e=>{var r,o;t((r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ie(e,t,r[t])}))}return e}({},n),o=null!=(o={queryText:e.target.value})?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r}(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})),r))},label:"SQL Query",tooltip:"Enter the SQL query here (use column names as above)"}))}))})(),c})()));
//# sourceMappingURL=module.js.map