define(["@grafana/data","@grafana/runtime","rxjs","react","@grafana/ui"],((t,r,e,n,o)=>(()=>{var i={6539:(t,r,e)=>{var n=e(7400).Symbol;t.exports=n},9349:t=>{t.exports=function(t,r,e){switch(e.length){case 0:return t.call(r);case 1:return t.call(r,e[0]);case 2:return t.call(r,e[0],e[1]);case 3:return t.call(r,e[0],e[1],e[2])}return t.apply(r,e)}},8213:(t,r,e)=>{var n=e(4701),o=e(2900),i=e(9785),u=e(3854),a=e(2383),c=e(8519),s=Object.prototype.hasOwnProperty;t.exports=function(t,r){var e=i(t),l=!e&&o(t),f=!e&&!l&&u(t),p=!e&&!l&&!f&&c(t),y=e||l||f||p,h=y?n(t.length,String):[],v=h.length;for(var b in t)!r&&!s.call(t,b)||y&&("length"==b||f&&("offset"==b||"parent"==b)||p&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||a(b,v))||h.push(b);return h}},9736:(t,r,e)=>{var n=e(6539),o=e(4840),i=e(1258),u=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):i(t)}},5829:(t,r,e)=>{var n=e(9736),o=e(2360);t.exports=function(t){return o(t)&&"[object Arguments]"==n(t)}},6729:(t,r,e)=>{var n=e(8338),o=e(9678),i=e(1611),u=e(6532),a=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,l=c.toString,f=s.hasOwnProperty,p=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(n(t)?p:a).test(u(t))}},6972:(t,r,e)=>{var n=e(9736),o=e(4194),i=e(2360),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!u[n(t)]}},9464:(t,r,e)=>{var n=e(1611),o=e(6016),i=e(1586),u=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return i(t);var r=o(t),e=[];for(var a in t)("constructor"!=a||!r&&u.call(t,a))&&e.push(a);return e}},1197:(t,r,e)=>{var n=e(1137),o=e(1871),i=e(3132);t.exports=function(t,r){return i(o(t,r,n),t+"")}},4459:(t,r,e)=>{var n=e(551),o=e(2630),i=e(1137),u=o?function(t,r){return o(t,"toString",{configurable:!0,enumerable:!1,value:n(r),writable:!0})}:i;t.exports=u},4701:t=>{t.exports=function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}},9334:t=>{t.exports=function(t){return function(r){return t(r)}}},4937:(t,r,e)=>{var n=e(7400)["__core-js_shared__"];t.exports=n},2630:(t,r,e)=>{var n=e(1822),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},9120:(t,r,e)=>{var n="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;t.exports=n},1822:(t,r,e)=>{var n=e(6729),o=e(5371);t.exports=function(t,r){var e=o(t,r);return n(e)?e:void 0}},4840:(t,r,e)=>{var n=e(6539),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,a=n?n.toStringTag:void 0;t.exports=function(t){var r=i.call(t,a),e=t[a];try{t[a]=void 0;var n=!0}catch(t){}var o=u.call(t);return n&&(r?t[a]=e:delete t[a]),o}},5371:t=>{t.exports=function(t,r){return null==t?void 0:t[r]}},2383:t=>{var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&r.test(t))&&t>-1&&t%1==0&&t<e}},7535:(t,r,e)=>{var n=e(5638),o=e(68),i=e(2383),u=e(1611);t.exports=function(t,r,e){if(!u(e))return!1;var a=typeof r;return!!("number"==a?o(e)&&i(r,e.length):"string"==a&&r in e)&&n(e[r],t)}},9678:(t,r,e)=>{var n,o=e(4937),i=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!i&&i in t}},6016:t=>{var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},1586:t=>{t.exports=function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r}},8125:(t,r,e)=>{t=e.nmd(t);var n=e(9120),o=r&&!r.nodeType&&r,i=o&&t&&!t.nodeType&&t,u=i&&i.exports===o&&n.process,a=function(){try{return i&&i.require&&i.require("util").types||u&&u.binding&&u.binding("util")}catch(t){}}();t.exports=a},1258:t=>{var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},1871:(t,r,e)=>{var n=e(9349),o=Math.max;t.exports=function(t,r,e){return r=o(void 0===r?t.length-1:r,0),function(){for(var i=arguments,u=-1,a=o(i.length-r,0),c=Array(a);++u<a;)c[u]=i[r+u];u=-1;for(var s=Array(r+1);++u<r;)s[u]=i[u];return s[r]=e(c),n(t,this,s)}}},7400:(t,r,e)=>{var n=e(9120),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();t.exports=i},3132:(t,r,e)=>{var n=e(4459),o=e(9591)(n);t.exports=o},9591:t=>{var r=Date.now;t.exports=function(t){var e=0,n=0;return function(){var o=r(),i=16-(o-n);if(n=o,i>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},6532:t=>{var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},551:t=>{t.exports=function(t){return function(){return t}}},236:(t,r,e)=>{var n=e(1197),o=e(5638),i=e(7535),u=e(3893),a=Object.prototype,c=a.hasOwnProperty,s=n((function(t,r){t=Object(t);var e=-1,n=r.length,s=n>2?r[2]:void 0;for(s&&i(r[0],r[1],s)&&(n=1);++e<n;)for(var l=r[e],f=u(l),p=-1,y=f.length;++p<y;){var h=f[p],v=t[h];(void 0===v||o(v,a[h])&&!c.call(t,h))&&(t[h]=l[h])}return t}));t.exports=s},5638:t=>{t.exports=function(t,r){return t===r||t!=t&&r!=r}},1137:t=>{t.exports=function(t){return t}},2900:(t,r,e)=>{var n=e(5829),o=e(2360),i=Object.prototype,u=i.hasOwnProperty,a=i.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(t){return o(t)&&u.call(t,"callee")&&!a.call(t,"callee")};t.exports=c},9785:t=>{var r=Array.isArray;t.exports=r},68:(t,r,e)=>{var n=e(8338),o=e(4194);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},3854:(t,r,e)=>{t=e.nmd(t);var n=e(7400),o=e(7714),i=r&&!r.nodeType&&r,u=i&&t&&!t.nodeType&&t,a=u&&u.exports===i?n.Buffer:void 0,c=(a?a.isBuffer:void 0)||o;t.exports=c},8338:(t,r,e)=>{var n=e(9736),o=e(1611);t.exports=function(t){if(!o(t))return!1;var r=n(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}},4194:t=>{t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},1611:t=>{t.exports=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}},2360:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},8519:(t,r,e)=>{var n=e(6972),o=e(9334),i=e(8125),u=i&&i.isTypedArray,a=u?o(u):n;t.exports=a},3893:(t,r,e)=>{var n=e(8213),o=e(9464),i=e(68);t.exports=function(t){return i(t)?n(t,!0):o(t)}},7714:t=>{t.exports=function(){return!1}},3305:r=>{"use strict";r.exports=t},3545:t=>{"use strict";t.exports=r},7388:t=>{"use strict";t.exports=o},2650:t=>{"use strict";t.exports=n},1177:t=>{"use strict";t.exports=e}},u={};function a(t){var r=u[t];if(void 0!==r)return r.exports;var e=u[t]={id:t,loaded:!1,exports:{}};return i[t](e,e.exports,a),e.loaded=!0,e.exports}a.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return a.d(r,{a:r}),r},a.d=(t,r)=>{for(var e in r)a.o(r,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var c={};return(()=>{"use strict";a.r(c),a.d(c,{plugin:()=>st});var t=a(3305),r=a(3545),e=a(1177);function n(t){return"function"==typeof t}function o(t){return function(r){if(function(t){return n(null==t?void 0:t.lift)}(r))return r.lift((function(r){try{return t(r,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}var i=function(t,r){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])},i(t,r)};function u(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}i(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}function s(t,r){var e,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(u=0)),u;)try{if(e=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,n=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=r.call(t,u)}catch(t){a=[6,t],n=0}finally{e=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function l(t){var r="function"==typeof Symbol&&Symbol.iterator,e=r&&t[r],n=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function f(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,i=e.call(t),u=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u}function p(t,r,e){if(e||2===arguments.length)for(var n,o=0,i=r.length;o<i;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return t.concat(n||Array.prototype.slice.call(r))}function y(t){return this instanceof y?(this.v=t,this):new y(t)}function h(t,r,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=e.apply(t,r||[]),i=[];return n={},u("next"),u("throw"),u("return"),n[Symbol.asyncIterator]=function(){return this},n;function u(t){o[t]&&(n[t]=function(r){return new Promise((function(e,n){i.push([t,r,e,n])>1||a(t,r)}))})}function a(t,r){try{(e=o[t](r)).value instanceof y?Promise.resolve(e.value.v).then(c,s):l(i[0][2],e)}catch(t){l(i[0][3],t)}var e}function c(t){a("next",t)}function s(t){a("throw",t)}function l(t,r){t(r),i.shift(),i.length&&a(i[0][0],i[0][1])}}Object.create,Object.create;var v,b=((v=function(t){var r;r=this,Error.call(r),r.stack=(new Error).stack,this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,r){return r+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}).prototype=Object.create(Error.prototype),v.prototype.constructor=v,v);function d(t,r){if(t){var e=t.indexOf(r);0<=e&&t.splice(e,1)}}var m=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var r;return t.prototype.unsubscribe=function(){var t,r,e,o,i;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var a=l(u),c=a.next();!c.done;c=a.next())c.value.remove(this)}catch(r){t={error:r}}finally{try{c&&!c.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}else u.remove(this);var s=this.initialTeardown;if(n(s))try{s()}catch(t){i=t instanceof b?t.errors:[t]}var y=this._finalizers;if(y){this._finalizers=null;try{for(var h=l(y),v=h.next();!v.done;v=h.next()){var d=v.value;try{x(d)}catch(t){i=null!=i?i:[],t instanceof b?i=p(p([],f(i)),f(t.errors)):i.push(t)}}}catch(t){e={error:t}}finally{try{v&&!v.done&&(o=h.return)&&o.call(h)}finally{if(e)throw e.error}}}if(i)throw new b(i)}},t.prototype.add=function(r){var e;if(r&&r!==this)if(this.closed)x(r);else{if(r instanceof t){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._finalizers=null!==(e=this._finalizers)&&void 0!==e?e:[]).push(r)}},t.prototype._hasParent=function(t){var r=this._parentage;return r===t||Array.isArray(r)&&r.includes(t)},t.prototype._addParent=function(t){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(t),r):r?[r,t]:t},t.prototype._removeParent=function(t){var r=this._parentage;r===t?this._parentage=null:Array.isArray(r)&&d(r,t)},t.prototype.remove=function(r){var e=this._finalizers;e&&d(e,r),r instanceof t&&r._removeParent(this)},t.EMPTY=((r=new t).closed=!0,r),t}();function g(t){return t instanceof m||t&&"closed"in t&&n(t.remove)&&n(t.add)&&n(t.unsubscribe)}function x(t){n(t)?t():t.unsubscribe()}m.EMPTY;var w=null,j=null,O=void 0,S=!1,_=!1,P={setTimeout:function(t,r){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];var o=P.delegate;return(null==o?void 0:o.setTimeout)?o.setTimeout.apply(o,p([t,r],f(e))):setTimeout.apply(void 0,p([t,r],f(e)))},clearTimeout:function(t){var r=P.delegate;return((null==r?void 0:r.clearTimeout)||clearTimeout)(t)},delegate:void 0};function T(t){P.setTimeout((function(){if(!w)throw t;w(t)}))}function A(){}var E=F("C",void 0,void 0);function F(t,r,e){return{kind:t,value:r,error:e}}var C=null,I=function(t){function r(r){var e=t.call(this)||this;return e.isStopped=!1,r?(e.destination=r,g(r)&&r.add(e)):e.destination=R,e}return u(r,t),r.create=function(t,r,e){return new U(t,r,e)},r.prototype.next=function(t){this.isStopped?L(function(t){return F("N",t,void 0)}(t),this):this._next(t)},r.prototype.error=function(t){this.isStopped?L(F("E",void 0,t),this):(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped?L(E,this):(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(m),k=Function.prototype.bind;function D(t,r){return k.call(t,r)}var q=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var r=this.partialObserver;if(r.next)try{r.next(t)}catch(t){M(t)}},t.prototype.error=function(t){var r=this.partialObserver;if(r.error)try{r.error(t)}catch(t){M(t)}else M(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){M(t)}},t}(),U=function(t){function r(r,e,o){var i,u,a=t.call(this)||this;return n(r)||!r?i={next:null!=r?r:void 0,error:null!=e?e:void 0,complete:null!=o?o:void 0}:a&&_?((u=Object.create(r)).unsubscribe=function(){return a.unsubscribe()},i={next:r.next&&D(r.next,u),error:r.error&&D(r.error,u),complete:r.complete&&D(r.complete,u)}):i=r,a.destination=new q(i),a}return u(r,t),r}(I);function M(t){var r;S?(r=t,S&&C&&(C.errorThrown=!0,C.error=r)):T(t)}function L(t,r){var e=j;e&&P.setTimeout((function(){return e(t,r)}))}var R={closed:!0,next:A,error:function(t){throw t},complete:A};function $(t,r,e,n,o){return new z(t,r,e,n,o)}var z=function(t){function r(r,e,n,o,i,u){var a=t.call(this,r)||this;return a.onFinalize=i,a.shouldUnsubscribe=u,a._next=e?function(t){try{e(t)}catch(t){r.error(t)}}:t.prototype._next,a._error=o?function(t){try{o(t)}catch(t){r.error(t)}finally{this.unsubscribe()}}:t.prototype._error,a._complete=n?function(){try{n()}catch(t){r.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,a}return u(r,t),r.prototype.unsubscribe=function(){var r;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var e=this.closed;t.prototype.unsubscribe.call(this),!e&&(null===(r=this.onFinalize)||void 0===r||r.call(this))}},r}(I);function B(t,r){return o((function(e,n){var o=0;e.subscribe($(n,(function(e){n.next(t.call(r,e,o++))})))}))}var Q="function"==typeof Symbol&&Symbol.observable||"@@observable";function N(t){return t}function G(t){return 0===t.length?N:1===t.length?t[0]:function(r){return t.reduce((function(t,r){return r(t)}),r)}}var V=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(r){var e=new t;return e.source=this,e.operator=r,e},t.prototype.subscribe=function(t,r,e){var o,i=this,u=(o=t)&&o instanceof I||function(t){return t&&n(t.next)&&n(t.error)&&n(t.complete)}(o)&&g(o)?t:new U(t,r,e);return function(t){if(S){var r=!C;if(r&&(C={errorThrown:!1,error:null}),t(),r){var e=C,n=e.errorThrown,o=e.error;if(C=null,n)throw o}}else t()}((function(){var t=i,r=t.operator,e=t.source;u.add(r?r.call(u,e):e?i._subscribe(u):i._trySubscribe(u))})),u},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){t.error(r)}},t.prototype.forEach=function(t,r){var e=this;return new(r=Y(r))((function(r,n){var o=new U({next:function(r){try{t(r)}catch(t){n(t),o.unsubscribe()}},error:n,complete:r});e.subscribe(o)}))},t.prototype._subscribe=function(t){var r;return null===(r=this.source)||void 0===r?void 0:r.subscribe(t)},t.prototype[Q]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return G(t)(this)},t.prototype.toPromise=function(t){var r=this;return new(t=Y(t))((function(t,e){var n;r.subscribe((function(t){return n=t}),(function(t){return e(t)}),(function(){return t(n)}))}))},t.create=function(r){return new t(r)},t}();function Y(t){var r;return null!==(r=null!=t?t:O)&&void 0!==r?r:Promise}var W="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function H(t){return new V((function(r){(function(t,r){var e,n,o,i,u,a,c,f;return u=this,a=void 0,f=function(){var u,a;return s(this,(function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),e=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,e=t[Symbol.asyncIterator];return e?e.call(t):(t=l(t),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(e){r[e]=t[e]&&function(r){return new Promise((function(n,o){!function(t,r,e,n){Promise.resolve(n).then((function(r){t({value:r,done:e})}),r)}(n,o,(r=t[e](r)).done,r.value)}))}}}(t),c.label=1;case 1:return[4,e.next()];case 2:if((n=c.sent()).done)return[3,4];if(u=n.value,r.next(u),r.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=c.sent(),o={error:a},[3,11];case 6:return c.trys.push([6,,9,10]),n&&!n.done&&(i=e.return)?[4,i.call(e)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return r.complete(),[2]}}))},new((c=void 0)||(c=Promise))((function(t,r){function e(t){try{o(f.next(t))}catch(t){r(t)}}function n(t){try{o(f.throw(t))}catch(t){r(t)}}function o(r){var o;r.done?t(r.value):(o=r.value,o instanceof c?o:new c((function(t){t(o)}))).then(e,n)}o((f=f.apply(u,a||[])).next())}))})(t,r).catch((function(t){return r.error(t)}))}))}function J(t){return o((function(r,e){var o,i=null,u=!1;i=r.subscribe($(e,void 0,void 0,(function(a){o=function(t){if(t instanceof V)return t;if(null!=t){if(function(t){return n(t[Q])}(t))return a=t,new V((function(t){var r=a[Q]();if(n(r.subscribe))return r.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if((u=t)&&"number"==typeof u.length&&"function"!=typeof u)return i=t,new V((function(t){for(var r=0;r<i.length&&!t.closed;r++)t.next(i[r]);t.complete()}));if(n(null==(o=t)?void 0:o.then))return e=t,new V((function(t){e.then((function(r){t.closed||(t.next(r),t.complete())}),(function(r){return t.error(r)})).then(null,T)}));if(function(t){return Symbol.asyncIterator&&n(null==t?void 0:t[Symbol.asyncIterator])}(t))return H(t);if(function(t){return n(null==t?void 0:t[W])}(t))return r=t,new V((function(t){var e,n;try{for(var o=l(r),i=o.next();!i.done;i=o.next()){var u=i.value;if(t.next(u),t.closed)return}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}t.complete()}));if(function(t){return n(null==t?void 0:t.getReader)}(t))return H(function(t){return h(this,arguments,(function(){var r,e,n;return s(this,(function(o){switch(o.label){case 0:r=t.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,y(r.read())];case 3:return e=o.sent(),n=e.value,e.done?[4,y(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,y(n)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return r.releaseLock(),[7];case 10:return[2]}}))}))}(t))}var r,e,o,i,u,a;throw function(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}(t)}(t(a,J(t)(r))),i?(i.unsubscribe(),i=null,o.subscribe(e)):u=!0}))),u&&(i.unsubscribe(),i=null,o.subscribe(e))}))}function K(t,r,e,n,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void e(t)}a.done?r(c):Promise.resolve(c).then(n,o)}function X(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function u(t){K(i,n,o,u,a,"next",t)}function a(t){K(i,n,o,u,a,"throw",t)}u(void 0)}))}}class Z extends t.DataSourceApi{doRequest(t){var e=this;return X((function*(){return yield(0,r.getBackendSrv)().datasourceRequest({method:"GET",url:e.url+"/api/v1/readiness",params:t})}))()}query(t){var r=this;return X((function*(){if(t.targets=t.targets.filter((t=>!t.hide)),0===t.targets.length)return Promise.resolve({data:[]});const{range:n}=t;if(!n)return Promise.resolve({data:[]});const o=n.from,i=n.to,u=t.targets.map((t=>{const n={query:t.queryText,startTime:o.toISOString(),endTime:i.toISOString()};return(0,e.lastValueFrom)(r.doFetch({url:r.url+"/api/v1/query",data:n,method:"POST"}).pipe(B((t=>r.arrayToDataFrame(t.data))),J((t=>(console.error(t),(0,e.of)({data:[]}))))))}));return{data:yield Promise.all(u)}}))()}doFetch(t){return t.withCredentials=this.withCredentials,t.headers=this.headers,(0,r.getBackendSrv)().fetch(t)}arrayToDataFrame(r){let e=new t.MutableDataFrame;if(r.length>0){const n=Object.keys(r[0]).map((e=>({name:e,type:(0,t.guessFieldTypeFromValue)(r[0][e])})));for(const r of n)("time"===r.name.toLowerCase()||"datetime"===r.name.toLowerCase()||"timestamp"===r.name.toLowerCase()||"date"===r.name.toLowerCase())&&(r.type=t.FieldType.time);e=new t.MutableDataFrame({fields:n}),r.forEach(((t,r)=>{e.appendRow(Object.values(t))}))}return e}testDatasource(){var t=this;return X((function*(){const r="Parseable server is not reachable";try{const n=yield(0,e.lastValueFrom)(t.doFetch({url:t.url+"/api/v1/readiness",method:"GET"}).pipe(B((t=>t))));return 200===n.status?{status:"success",message:"Parseable server is reachable",title:"Success"}:{message:n.statusText?n.statusText:r,status:"error",title:"Error"}}catch(t){var n,o;if("string"==typeof t)return{status:"error",message:t};let e=t;var i;let u=null!==(i=e.statusText)&&void 0!==i?i:r;return void 0!==(null===(n=e.data)||void 0===n||null===(o=n.error)||void 0===o?void 0:o.code)&&(u+=`: ${e.data.error.code}. ${e.data.error.message}`),{status:"error",message:u,title:"Error"}}}))()}constructor(t){super(t),this.url=void 0===t.url?"":t.url,this.withCredentials=void 0!==t.withCredentials,console.log("this",t)}}var tt=a(2650),rt=a.n(tt),et=a(7388);class nt extends tt.PureComponent{render(){const{onOptionsChange:t,options:r}=this.props;return rt().createElement("div",{className:"gf-form-group"},rt().createElement(et.DataSourceHttpSettings,{defaultUrl:"https://demo.parseable.io",dataSourceConfig:r,showAccessOptions:!0,onChange:t}))}}var ot=a(236),it=a.n(ot);function ut(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}const{FormField:at}=et.LegacyForms;class ct extends tt.PureComponent{render(){const t=it()(this.props.query),{queryText:r}=t;return rt().createElement("div",{className:"gf-form"},rt().createElement(at,{labelWidth:12,inputWidth:100,value:r||"",onChange:this.onQueryTextChange,label:"SQL Query",tooltip:"Enter the search SQL query here."}))}constructor(...t){super(...t),this.onQueryTextChange=t=>{const{onChange:r,query:e}=this.props;var n,o;r((n=function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},n=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),n.forEach((function(r){ut(t,r,e[r])}))}return t}({},e),o=null!=(o={queryText:t.target.value})?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):function(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e.push.apply(e,n)}return e}(Object(o)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))})),n))}}}const st=new t.DataSourcePlugin(Z).setConfigEditor(nt).setQueryEditor(ct)})(),c})()));
//# sourceMappingURL=module.js.map