!function(e){var t={};function s(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=5)}([function(e,t,s){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:routing:5.1.3"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:strategies:5.1.3"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:expiration:5.1.3"]&&_()}catch(e){}},function(e,t,s){"use strict";s.r(t),s(0);class n extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s})(e,t)),this.name=e,this.details=t}}const a=new Set,r={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},i=e=>[r.prefix,e,r.suffix].filter(e=>e&&e.length>0).join("-"),c=e=>e||i(r.precache),o=e=>e||i(r.runtime),h=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),""),l=(e,t)=>e.filter(e=>t in e),u=async({request:e,mode:t,plugins:s=[]})=>{const n=l(s,"cacheKeyWillBeUsed");let a=e;for(const e of n)a=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:a}),"string"==typeof a&&(a=new Request(a));return a},d=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:a=[]})=>{const r=await self.caches.open(e),i=await u({plugins:a,request:t,mode:"read"});let c=await r.match(i,n);for(const t of a)if("cachedResponseWillBeUsed"in t){const a=t.cachedResponseWillBeUsed;c=await a.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:c,request:i})}return c},p=async({cacheName:e,request:t,response:s,event:r,plugins:i=[],matchOptions:c})=>{const o=await u({plugins:i,request:t,mode:"write"});if(!s)throw new n("cache-put-with-no-response",{url:h(o.url)});const p=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let a=t,r=!1;for(const t of n)if("cacheWillUpdate"in t){r=!0;const n=t.cacheWillUpdate;if(a=await n.call(t,{request:e,response:a,event:s}),!a)break}return r||(a=a&&200===a.status?a:void 0),a||null})({event:r,plugins:i,response:s,request:o});if(!p)return;const f=await self.caches.open(e),g=l(i,"cacheDidUpdate"),m=g.length>0?await d({cacheName:e,matchOptions:c,request:o}):null;try{await f.put(o,p)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of a)await e()}(),e}for(const t of g)await t.cacheDidUpdate.call(t,{cacheName:e,event:r,oldResponse:m,newResponse:p,request:o})},f=d;let g;function m(e){e.then(()=>{})}class w{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=n||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:a,includeKeys:r=!1}={}){return await this.transaction([e],"readonly",(i,c)=>{const o=i.objectStore(e),h=t?o.index(t):o,l=[],u=h.openCursor(s,n);u.onsuccess=()=>{const e=u.result;e?(l.push(r?e:e.value),a&&l.length>=a?c(l):e.continue()):c(l)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,a)=>{const r=this._db.transaction(e,t);r.onabort=()=>a(r.error),r.oncomplete=()=>n(),s(r,e=>n(e))})}async _call(e,t,s,...n){return await this.transaction([t],s,(s,a)=>{const r=s.objectStore(t),i=r[e].apply(r,n);i.onsuccess=()=>a(i.result)})}close(){this._db&&(this._db.close(),this._db=null)}}w.prototype.OPEN_TIMEOUT=2e3;const y={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(y))for(const s of t)s in IDBObjectStore.prototype&&(w.prototype[s]=async function(t,...n){return await this._call(s,t,e,...n)});const _=async({request:e,fetchOptions:t,event:s,plugins:a=[]})=>{if("string"==typeof e&&(e=new Request(e)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const r=l(a,"fetchDidFail"),i=r.length>0?e.clone():null;try{for(const t of a)if("requestWillFetch"in t){const n=t.requestWillFetch,a=e.clone();e=await n.call(t,{request:a,event:s})}}catch(e){throw new n("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let n;n="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of a)"fetchDidSucceed"in e&&(n=await e.fetchDidSucceed.call(e,{event:s,request:c,response:n}));return n}catch(e){for(const t of r)await t.fetchDidFail.call(t,{error:e,event:s,originalRequest:i.clone(),request:c.clone()});throw e}};s(4);const v=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class x{constructor(e){this._cacheName=e,this._db=new w("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this._cacheName)}async setTimestamp(e,t){const s={url:e=v(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put("cache-entries",s)}async getTimestamp(e){return(await this._db.get("cache-entries",this._getId(e))).timestamp}async expireEntries(e,t){const s=await this._db.transaction("cache-entries","readwrite",(s,n)=>{const a=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),r=[];let i=0;a.onsuccess=()=>{const s=a.result;if(s){const n=s.value;n.cacheName===this._cacheName&&(e&&n.timestamp<e||t&&i>=t?r.push(s.value):i++),s.continue()}else n(r)}}),n=[];for(const e of s)await this._db.delete("cache-entries",e.id),n.push(e.url);return n}_getId(e){return this._cacheName+"|"+v(e)}}class R{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._cacheName=e,this._timestampModel=new x(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,m(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){return!!this._maxAgeSeconds&&await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}s(1);const b=[],q={get:()=>b,add(e){b.push(...e)}};function U(e){if(!e)throw new n("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new n("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),r=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:r.href}}class E{constructor(e){this._cacheName=c(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=U(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new n("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new n("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],a=await self.caches.open(this._cacheName),r=await a.keys(),i=new Set(r.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)i.has(t)?n.push(e):s.push({cacheKey:t,url:e});const c=s.map(({cacheKey:s,url:n})=>{const a=this._cacheKeysToIntegrities.get(s),r=this._urlsToCacheModes.get(n);return this._addURLToCache({cacheKey:s,cacheMode:r,event:e,integrity:a,plugins:t,url:n})});return await Promise.all(c),{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}async _addURLToCache({cacheKey:e,url:t,cacheMode:s,event:a,plugins:r,integrity:i}){const c=new Request(t,{integrity:i,cache:s,credentials:"same-origin"});let o,h=await _({event:a,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:a,request:c,response:h}):h.status<400))throw new n("bad-precaching-response",{url:t,status:h.status});h.redirected&&(h=await async function(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},a=t?t(n):n,r=function(){if(void 0===g){const e=new Response("");if("body"in e)try{new Response(e.body),g=!0}catch(e){g=!1}g=!1}return g}()?s.body:await s.blob();return new Response(r,a)}(h)),await p({event:a,plugins:r,response:h,request:e===t?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this._cacheName)).match(s)}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new n("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(s){if(e)return fetch(t);throw s}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new n("non-precached-url",{url:e});const s=this.createHandler(t),a=new Request(e);return()=>s({request:a})}}let T;const L=()=>(T||(T=new E),T);let N=!1;const C=e=>{const t=L(),s=q.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},K=e=>{const t=L();e.waitUntil(t.activate())};s(2);const M=e=>e&&"object"==typeof e?e:{handle:e};class O{constructor(e,t,s="GET"){this.handler=M(t),this.match=e,this.method=s}}class S extends O{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class A{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:a}=this.findMatchingRoute({url:s,request:e,event:t});let r,i=a&&a.handler;if(!i&&this._defaultHandler&&(i=this._defaultHandler),i){try{r=i.handle({url:s,request:e,event:t,params:n})}catch(e){r=Promise.reject(e)}return r instanceof Promise&&this._catchHandler&&(r=r.catch(n=>this._catchHandler.handle({url:s,request:e,event:t}))),r}}findMatchingRoute({url:e,request:t,event:s}){const n=this._routes.get(t.method)||[];for(const a of n){let n;const r=a.match({url:e,request:t,event:s});if(r)return n=r,(Array.isArray(r)&&0===r.length||r.constructor===Object&&0===Object.keys(r).length||"boolean"==typeof r)&&(n=void 0),{route:a,params:n}}return{}}setDefaultHandler(e){this._defaultHandler=M(e)}setCatchHandler(e){this._catchHandler=M(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new n("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new n("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let k;const P=()=>(k||(k=new A,k.addFetchListener(),k.addCacheListener()),k);function D(e,t,s){let a;if("string"==typeof e){const n=new URL(e,location.href);a=new O(({url:e})=>e.href===n.href,t,s)}else if(e instanceof RegExp)a=new S(e,t,s);else if("function"==typeof e)a=new O(e,t,s);else{if(!(e instanceof O))throw new n("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return P().registerRoute(a),a}s(3);const W={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class j{constructor(e={}){if(this._cacheName=o(e.cacheName),this._plugins=e.plugins||[],e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[W,...e.plugins]}else this._plugins=[W];this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));const s=this._getFromNetwork({request:t,event:e});let a,r=await f({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(r){if(e)try{e.waitUntil(s)}catch(a){}}else try{r=await s}catch(e){a=e}if(!r)throw new n("no-response",{url:t.url,error:a});return r}async _getFromNetwork({request:e,event:t}){const s=await _({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),n=p({cacheName:this._cacheName,request:e,response:s.clone(),event:t,plugins:this._plugins});if(t)try{t.waitUntil(n)}catch(e){}return s}}var I;self.addEventListener("push",(function(e){const{body:t,data:s,image:n,tag:a,title:r}=e.data.json(),i={body:t,data:s,vibrate:[200,100,200],tag:a,renotify:!0,image:n,icon:"/assets/android-chrome-192x192.png",badge:"/assets/android-chrome-192x192.png"};e.waitUntil(self.registration.showNotification(r,i))})),self.addEventListener("notificationclick",(function(e){e.notification.close(),e.notification.data&&e.waitUntil(clients.openWindow(e.notification.data))})),(e=>{(e=>{for(const t of Object.keys(r))e(t)})(t=>{"string"==typeof e[t]&&(r[t]=e[t])})})({prefix:"soccerman",suffix:"",precache:"app-shells",runtime:"data"}),self.addEventListener("activate",()=>self.clients.claim()),self.addEventListener("install",()=>self.skipWaiting()),function(e){L().addToCacheList(e),e.length>0&&(self.addEventListener("install",C),self.addEventListener("activate",K))}([{'revision':'d7dab6e0c6576fd2dbdcb4152d7ccb52','url':'assets/android-chrome-192x192.png'},{'revision':'fcdc3ab71bda16f9dd463afe4f7647cf','url':'assets/android-chrome-512x512.png'},{'revision':'dfddafaac6ddb0e51208e03f1df58172','url':'assets/apple-touch-icon.png'},{'revision':'bb807b3e289fb90b24bde71829d7da48','url':'assets/favicon-16x16.png'},{'revision':'1ddf36746b83e3609b029250dd2ccbba','url':'assets/favicon-32x32.png'},{'revision':'3970e824ec7df44a28775fdbfabdca18','url':'assets/images/soccerman-title.png'},{'revision':'1721d14c67ec96fb5f0df4e4a5c13173','url':'assets/maskable_soccerman_icon.png'},{'revision':'80ad8a9b1284e335847d2e8fa94bab75','url':'assets/soccerman.webmanifest'},{'revision':'6e2ddc41a3c59e58b0ba30804f0095e7','url':'favicon.ico'},{'revision':'8391802f707e55197278c239703d8a10','url':'index.html'},{'revision':'993d31371c39b0729834a14ff841f3f8','url':'nav-items.html'},{'revision':'64fc380e77a95b4bd44bdfbd23662416','url':'scripts/index-a6fc7f4f.js'},{'revision':'66125dc6ddcb626a34df4db5559b8b89','url':'scripts/materialize-e60a027f.js'},{'revision':'fb65ee937e951a29661232e6452ddfd6','url':'scripts/vendors~index-50dc82e9.js'},{'revision':'dd1994afc45b21274255b516eb86adf8','url':'scripts/vendors~materialize-6692a248.js'},{'revision':'7ffd0e0772a012c3edf3e3e0ebb0b15b','url':'scripts/vendors~materialize-6692a248.js.LICENSE.txt'},{'revision':'569417e1091e2f751fe1ad10eabff9e3','url':'styles/materialize-62c3f145.css'}]),function(e){N||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const a=c();self.addEventListener("fetch",r=>{const i=((e,t)=>{const s=L().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}})(r.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!i)return;let c=self.caches.open(a).then(e=>e.match(i)).then(e=>e||fetch(i));r.respondWith(c)})})(e),N=!0)}(void 0),D(/^https:\/\/(api\.football-data\.org|upload\.wikimedia\.org)/i,new j),D(/^https:\/\/(fonts\.googleapis\.com|fonts\.gstatic\.com)/i,new j({cacheName:"google-fonts",plugins:[new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const a=this._isResponseDateFresh(n),r=this._getCacheExpiration(s);m(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){}return a?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),a.add(t))}_getCacheExpiration(e){if(e===o())throw new n("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new R(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}({maxEntries:19,purgeOnQuotaError:!1,maxAgeSeconds:2592e3})]})),I=()=>new Response(""),P().setCatchHandler(I)}]);