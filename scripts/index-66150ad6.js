!function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(l&&l(t);d.length;)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;o.push([207,2]),n()}({207:function(e,t,n){"use strict";n.r(t);n(13),n(15),n(16),n(47);var r=n(29),a=n.n(r);function o(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function c(e){o(i,r,a,c,s,"next",e)}function s(e){o(i,r,a,c,s,"throw",e)}c(void 0)}))}}var c={responseType:"text"};function s(){return(s=i(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.get("nav-items.html",c);case 2:t=e.sent,n=t.data,document.querySelectorAll(".topnav, .sidenav, .footer-nav").forEach((function(e){e.innerHTML=n})),document.querySelectorAll(".footer-nav li a").forEach((function(e){e.classList.remove("waves-effect"),e.classList.add("grey-text"),e.classList.add("text-lighten-3")}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var u=function(){return s.apply(this,arguments)};function l(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){l(o,r,a,i,c,"next",e)}function c(e){l(o,r,a,i,c,"throw",e)}i(void 0)}))}}function d(){return p.apply(this,arguments)}function p(){return(p=f(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelectorAll(".sidenav"),M.Sidenav.init(t),e.next=4,u();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(179),n(24),n(180),n(40);var v,h='<div id="not-found-page"> <h3 class="center">Page Not Found 😢</h3> <h5 class="center">Sorry, the page you are looking for is not found 🙇🏻‍♂️</h5> </div> ';function m(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){m(o,r,a,i,c,"next",e)}function c(e){m(o,r,a,i,c,"throw",e)}i(void 0)}))}}var w={},y=document.querySelector("#root-content"),b='<div class="col s12 center"> <div class="preloader-wrapper big active"> <div class="spinner-layer spinner-green-only"> <div class="circle-clipper left"> <div class="circle"></div> </div> <div class="gap-patch"> <div class="circle"></div> </div> <div class="circle-clipper right"> <div class="circle"></div> </div> </div> </div> </div> ';function x(e){w[e.name]=e}function k(){return P.apply(this,arguments)}function P(){return(P=g(regeneratorRuntime.mark((function e(){var t,n,r,a,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.length>0&&void 0!==o[0]&&o[0],n=o.length>1?o[1]:void 0,!v){e.next=12;break}if(r=v.events,!t){e.next=7;break}return e.next=7,v.controller(v.model,n);case 7:a=v.view(v.model),y.innerHTML=a.contents,r&&r(v.model).init(),e.next=13;break;case 12:y.innerHTML=h;case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,t){return S.apply(this,arguments)}function S(){return(S=g(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v&&v.events&&v.events(v.model).teardown(),!(v=w[t])){e.next=7;break}return r=v.view({},b),y.innerHTML=r.contents,e.next=7,v.controller(v.model,n);case 7:return e.next=9,k();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){A(o,r,a,i,c,"next",e)}function c(e){A(o,r,a,i,c,"throw",e)}i(void 0)}))}}var L=[];function j(e,t){L.push({name:e,urlPattern:t})}function O(){return D.apply(this,arguments)}function D(){return(D=E(regeneratorRuntime.mark((function e(){var t,n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.location.hash,n=document.querySelector(".sidenav"),""===t&&(t="#/home"),M.Sidenav.getInstance(n).close(),!(r=L.filter((function(e){return t.match(e.urlPattern)}))[0])){e.next=11;break}return a=/\d+/.exec(t),e.next=9,R(r.name,a);case 9:e.next=13;break;case 11:return e.next=13,R();case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(25),n(73),n(74),n(75),n(77),n(78),n(79),n(80),n(81),n(82);var _='<div class="container body-content"> <h3 class="center">{{title}}</h3> <div class="row">{{content}}</div> </div> ';function I(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function U(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){I(o,r,a,i,c,"next",e)}function c(e){I(o,r,a,i,c,"throw",e)}i(void 0)}))}}var C="https://api.football-data.org/v2";function T(){return N.apply(this,arguments)}function N(){return(N=U(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.get("".concat(C,"/competitions/PL/standings"),{headers:{"X-Auth-Token":"6a66976fba4c43568ac32af323de8814"}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function F(e){return q.apply(this,arguments)}function q(){return(q=U(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.get("".concat(C,"/teams/").concat(t),{headers:{"X-Auth-Token":"6a66976fba4c43568ac32af323de8814"}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function $(e){return B.apply(this,arguments)}function B(){return(B=U(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.get("".concat(C,"/teams/").concat(t,"/matches"),{headers:{"X-Auth-Token":"6a66976fba4c43568ac32af323de8814"}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var H=n(83);function J(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function K(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){J(o,r,a,i,c,"next",e)}function c(e){J(o,r,a,i,c,"throw",e)}i(void 0)}))}}var W,G,X=Object(H.a)("keyval-store",1,{upgrade:function(e){e.createObjectStore("keyval")}}),Y={get:(G=K(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X;case 2:return e.abrupt("return",e.sent.get("keyval",t));case 3:case"end":return e.stop()}}),e)}))),function(e){return G.apply(this,arguments)}),set:(W=K(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X;case 2:return e.abrupt("return",e.sent.put("keyval",n,t));case 3:case"end":return e.stop()}}),e)}))),function(e,t){return W.apply(this,arguments)})};function V(e,t){return Z.apply(this,arguments)}function Z(){return(Z=K(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(H.a)(t,1,{upgrade:function(e){e.createObjectStore(n,{keyPath:"id"}).createIndex("name","name",{unique:!1})}});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function z(e,t,n){return Q.apply(this,arguments)}function Q(){return(Q=K(regeneratorRuntime.mark((function e(t,n,r){var a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V(n,r);case 3:return a=e.sent,o=a.transaction(r,"readwrite"),e.next=7,o.store.put(t);case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function ee(e,t){return te.apply(this,arguments)}function te(){return(te=K(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V(t,n);case 3:return r=e.sent,e.next=6,r.getAllFromIndex(n,"name");case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function ne(e,t,n){return re.apply(this,arguments)}function re(){return(re=K(regeneratorRuntime.mark((function e(t,n,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V(n,r);case 3:return a=e.sent,e.next=6,a.get(r,+t);case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function ae(e,t,n){return oe.apply(this,arguments)}function oe(){return(oe=K(regeneratorRuntime.mark((function e(t,n,r){var a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V(n,r);case 3:return a=e.sent,o=a.transaction(r,"readwrite"),e.next=7,o.store.delete(t);case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}n(187),n(188),n(191),n(193),n(194),n(195),n(196),n(120),n(197),n(121),n(126),n(127),n(128),n(129),n(130),n(131),n(132),n(133),n(134),n(135),n(136),n(137),n(138),n(139),n(141),n(142),n(143),n(144),n(145),n(146),n(147),n(148),n(149);function ie(e){return[Object,Array].includes((e||{}).constructor)&&!Object.entries(e||{}).length}function ce(e,t){var n=e;return Object.keys(t).forEach((function(e){n=n.replace(new RegExp("{{".concat(e,"}}"),"gm"),t[e])})),n}function se(e){return ie(e)?"":e.replace(/^http:\/\//i,"https://")}function ue(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function le(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){ue(o,r,a,i,c,"next",e)}function c(e){ue(o,r,a,i,c,"throw",e)}i(void 0)}))}}var fe,de=function(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(t),r=new Uint8Array(n.length),a=0;a<n.length;a+=1)r[a]=n.charCodeAt(a);return r}("BFph2fgn1IcZqcLVzrUZNe1gWBv92thJxP8NESJkjmgvZaKL1HflLd0GUC9p6KLso-4P5SJx_v48XtNm_klu2rI");function pe(){return ve.apply(this,arguments)}function ve(){return(ve=le(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Notification.requestPermission();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(){return me.apply(this,arguments)}function me(){return(me=le(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.serviceWorker.ready;case 3:return t=e.sent,e.next=6,t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:de});case 6:n=e.sent,M.toast({html:"Push notifications subscription success ✨",classes:"teal"}),console.log("User is subscribed with endpoint:",n.endpoint),console.log("User is subscribed with p256dh key:",window.btoa(String.fromCharCode.apply(null,new Uint8Array(n.getKey("p256dh"))))),console.log("User is subscribed with auth key:",window.btoa(String.fromCharCode.apply(null,new Uint8Array(n.getKey("auth"))))),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Subscription failed.",e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function ge(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return we(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return we(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function we(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ye(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function be(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){ye(o,r,a,i,c,"next",e)}function c(e){ye(o,r,a,i,c,"throw",e)}i(void 0)}))}}x({name:"dashboard",model:{following:[],isGranted:Boolean},controller:(fe=be(regeneratorRuntime.mark((function e(t){var n,r,a,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,Promise.all([ee("EPL","team"),Y.get("notify")]);case 3:r=e.sent,a=ge(r,2),o=a[0],i=a[1],n.following=o,i&&(n.isGranted=i);case 9:case"end":return e.stop()}}),e)}))),function(e){return fe.apply(this,arguments)}),view:function(e,t){var n,r;n="Notification"in window&&"PushManager"in window?ce(_,{title:"Settings",content:'<label for="push-settings" class="center"> <h5>Allow Push Notifications?</h5> </label> <div class="switch center"> <label> No <input id="push-settings" type="checkbox"/> <span class="lever"></span> Yes </label> </div> '}):"",r=ie(e.following)?'<h5 class="center">You don\'t have followed teams 🙅🏻‍♀️</h5>':e.following.reduce((function(e,t){return"\n          ".concat(e,"\n          ").concat(ce('<div class="col s12 m6 l4"> <div class="card"> <div class="card-image"> <a href="#/team/{{id}}"> <img src="{{crestUrl}}" alt="{{name}}"/> </a> <button data-id="{{id}}" class="btn-floating btn-large halfway-fab waves-effect waves-light red btn-follow"> <i class="material-icons">{{btnIcon}}</i> </button> </div> <div class="card-content"> <a href="#/team/{{id}}" title="{{name}}"> <span class="card-title truncate">{{name}}</span> </a> </div> </div> </div> ',{id:t.id,crestUrl:se(t.crestUrl),name:t.name,btnIcon:"person_remove_alt_1"}),"\n        ")}),"");var a=ce(_,{title:"Followed Teams",content:t||r});return{contents:"".concat(n).concat(a)}},events:function(e){var t=document.querySelectorAll(".btn-follow"),n=document.querySelector('input[id="push-settings"]'),r="Notification"in window&&"PushManager"in window,a=function(){var e=be(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.currentTarget.dataset.id,e.next=4,F(n);case 4:return r=e.sent,e.next=7,ae(r.id,"EPL","team");case 7:return e.next=9,k(!0);case 9:M.toast({html:'<strong style="font-weight:bold;">'.concat(r.name,"</strong>&nbsp;Deleted&nbsp;❌"),classes:"teal"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),M.toast({html:"Not Deleted. Something went wrong, sorry! 😢",classes:"red"});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var t=be(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:!0===e.isGranted?n.checked=!0:n.checked=!1;case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var e=be(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe();case 2:"granted"===(t=e.sent)?n.checked?(he(),Y.set("notify",!0)):(n.checked=!0,M.toast({html:"Change consent in the browser settings. 😢",classes:"amber darken-3"})):"denied"===t?(n.checked=!1,Y.set("notify",!1),M.toast({html:"I'm not allowed to send push notifications. 😢",classes:"red"})):(n.checked=!1,Y.set("notify",!1),M.toast({html:"You need to click allow to show notifications ⚠",classes:"amber darken-3"}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{init:function(){t.forEach((function(e){e.addEventListener("click",a)})),r&&(o(),n.addEventListener("change",i))},teardown:function(){t.forEach((function(e){e.removeEventListener("click",a)})),r&&n.removeEventListener("change",(function(){return i}))}}}});function xe(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Pe(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function ke(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}(e,t)||Pe(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Pe(e,t){if(e){if("string"==typeof e)return Re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Re(e,t):void 0}}function Re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Se(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function Me(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){Se(o,r,a,i,c,"next",e)}function c(e){Se(o,r,a,i,c,"throw",e)}i(void 0)}))}}x({name:"home",model:{standings:[],following:[]},controller:function(){var e=Me(regeneratorRuntime.mark((function e(t){var n,r,a,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,Promise.all([T(),ee("EPL","team")]);case 3:r=e.sent,a=ke(r,2),o=a[0],i=a[1],n.standings=o.standings[0].table,n.following=i;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),view:function(e,t){var n;if(ie(e.standings))n="";else{var r,a={},o=xe(e.following);try{for(o.s();!(r=o.n()).done;){var i=r.value;a[i.id]=i}}catch(e){o.e(e)}finally{o.f()}var c,s=xe(e.standings);try{for(s.s();!(c=s.n()).done;){var u=c.value;u.isMatch=u.team.id in a}}catch(e){s.e(e)}finally{s.f()}n=e.standings.reduce((function(e,t){return"\n          ".concat(e,"\n          ").concat(ce('<div class="col s12 m6 l4"> <div class="card"> <div class="card-image"> <a href="#/team/{{id}}"> <img src="{{crestUrl}}" alt="{{name}}"/> </a> <button data-id="{{id}}" data-followed="{{followed}}" class="btn-floating btn-large halfway-fab waves-effect waves-light {{btnColor}} btn-follow"> <i class="material-icons">{{btnIcon}}</i> </button> </div> <div class="card-content"> <a href="#/team/{{id}}" title="{{name}}"> <span class="card-title truncate">{{name}}</span> </a> <p>{{points}} pts</p> </div> </div> </div> ',{id:t.team.id,crestUrl:se(t.team.crestUrl),name:t.team.name,points:t.points,followed:t.isMatch,btnColor:t.isMatch?"red":"teal",btnIcon:t.isMatch?"person_remove_alt_1":"person_add_alt_1"}),"\n        ")}),"")}var l=ce(_,{title:"Premiere League",content:t||n});return{contents:"".concat(l)}},events:function(){var e=document.querySelectorAll(".btn-follow"),t=function(){var e=Me(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.currentTarget.dataset.id,r=t.currentTarget.dataset.followed,e.next=5,F(n);case 5:if(!ie(a=e.sent)){e.next=8;break}throw new Error;case 8:if("true"!==r){e.next=16;break}return e.next=11,ae(a.id,"EPL","team");case 11:return e.next=13,k(!0);case 13:M.toast({html:'<strong style="font-weight:bold;">Unfollow&nbsp;'.concat(a.name,"</strong>&nbsp;❌"),classes:"teal"}),e.next=21;break;case 16:return e.next=18,z(a,"EPL","team");case 18:return e.next=20,k(!0);case 20:M.toast({html:'Now following&nbsp;<strong style="font-weight:bold;">'.concat(a.name,"</strong>&nbsp;🎉"),classes:"teal"});case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),M.toast({html:"Something went wrong, sorry! 😢",classes:"red"});case 26:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(t){return e.apply(this,arguments)}}();return{init:function(){e.forEach((function(e){e.addEventListener("click",t)}))},teardown:function(){e.forEach((function(e){e.removeEventListener("click",t)}))}}}});function Ae(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ee(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Le(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function je(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){Le(o,r,a,i,c,"next",e)}function c(e){Le(o,r,a,i,c,"throw",e)}i(void 0)}))}}function Oe(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function De(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){Oe(o,r,a,i,c,"next",e)}function c(e){Oe(o,r,a,i,c,"throw",e)}i(void 0)}))}}x({name:"team",model:{teamDetail:{},teamMatches:{},isFollowing:Boolean},controller:function(){var e=je(regeneratorRuntime.mark((function e(t,n){var r,a,o,i,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,e.next=3,Promise.all([F(n[0]),$(n[0]),ne(n[0],"EPL","team")]);case 3:a=e.sent,o=Ae(a,3),i=o[0],c=o[1],s=o[2],r.teamDetail=i,r.teamMatches=c,r.isFollowing=!!s;case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),view:function(e,t){var n,r,a;ie(e.teamDetail)?(n="",a=""):(r=ie(e.teamMatches.matches)?"No scheduled match 🙅🏻‍♀️":e.teamMatches.matches.reduce((function(e,t){return"\n            ".concat(e,"\n            ").concat(ce('<li class="collection-item"> <p class="competition">🏆 {{competition}}</p> <p class="matchday">{{matchday}}</p> <p class="vs">🥅 {{home}} vs {{away}} ⚽</p> <p>⌚ {{date}}</p> </li> ',{competition:t.competition.name,matchday:t.matchday?"matchday #".concat(t.matchday.toString()):"",home:t.homeTeam.name,away:t.awayTeam.name,date:new Date(t.utcDate).toLocaleString()}),"\n          ")}),""),a=ce('<div class="sticky-action-btn"> <button {{dataset}} class="waves-effect waves-light btn-large btn {{btnColor}}"> <i class="material-icons right">{{btnIcon}}</i>{{btnCaption}} </button> </div> ',{dataset:e.isFollowing?"data-followed=true":"",btnColor:e.isFollowing?"red":"teal",btnIcon:e.isFollowing?"person_remove_alt_1":"person_add_alt_1",btnCaption:e.isFollowing?"Unfollow":"Follow"}),n=ce('<div class="col s12"> <div class="card"> <a href="#/team/{{id}}"> <div class="card-image waves-effect waves-block waves-light"> <img src="{{crestUrl}}" alt="{{name}}"/> </div> </a> <div class="card-content"> <table class="highlight left-heading"> <caption class="center"> {{name}} ({{tla}}) </caption> <thead> <tr> <th>Country</th> <th>Address</th> <th>Phone</th> <th>Website</th> <th>E-mail</th> <th>Founded</th> <th>Club Colors</th> <th>Venue Name</th> </tr> </thead> <tbody> <tr> <td>{{country}}</td> <td>{{address}}</td> <td>{{phone}}</td> <td> <a href="{{website}}" target="_blank" rel="noopener noreferrer"> {{website}} </a> </td> <td> <a href="mailto:{{email}}"> {{email}} </a> </td> <td>{{founded}}</td> <td>{{clubColors}}</td> <td>{{venue}}</td> </tr> </tbody> </table> <ul class="collection with-header center"> <li class="collection-header"><h4>Upcoming Matches</h4></li> {{teamMatches}} </ul> </div> </div> </div> ',{id:e.teamDetail.id,crestUrl:se(e.teamDetail.crestUrl),name:e.teamDetail.name,tla:e.teamDetail.tla,country:e.teamDetail.area.name,address:e.teamDetail.address,phone:e.teamDetail.phone,email:e.teamDetail.email,founded:e.teamDetail.founded.toString(),clubColors:e.teamDetail.clubColors,venue:e.teamDetail.venue,website:e.teamDetail.website,teamMatches:r}));var o=ce(_,{title:e.teamDetail?e.teamDetail.name:"Team Details",content:t||n});return{contents:"".concat(o).concat(a)}},events:function(e){var t=document.querySelector(".btn-large.btn"),n=function(){var t=je(regeneratorRuntime.mark((function t(n){var r,a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.teamDetail.id,a=n.target.dataset.followed,t.next=5,F(r.toString());case 5:if(o=t.sent,!a){t.next=14;break}return t.next=9,ae(o.id,"EPL","team");case 9:return t.next=11,k(!0,[r.toString()]);case 11:M.toast({html:'<strong style="font-weight:bold;">Unfollow&nbsp;'.concat(o.name,"</strong>&nbsp;❌"),classes:"teal"}),t.next=19;break;case 14:return t.next=16,z(o,"EPL","team");case 16:return t.next=18,k(!0,[r.toString()]);case 18:M.toast({html:'Now following&nbsp;<strong style="font-weight:bold;">'.concat(o.name,"</strong>&nbsp;🎉"),classes:"teal"});case 19:t.next=24;break;case 21:t.prev=21,t.t0=t.catch(0),M.toast({html:"Something went wrong, sorry! 😢",classes:"red"});case 24:case"end":return t.stop()}}),t,null,[[0,21]])})));return function(e){return t.apply(this,arguments)}}();return{init:function(){t&&t.addEventListener("click",n)},teardown:function(){t&&t.removeEventListener("click",n)}}}}),j("home",/^#\/home\/?$/),j("team",/^#\/team\/\d+\/?$/),j("dashboard",/^#\/dashboard\/?$/),window.addEventListener("hashchange",O),window.addEventListener("DOMContentLoaded",De(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:O(),t=void 0,n=void 0,t=document.getElementById("footer-date"),n=(new Date).getFullYear(),t.innerText=n;case 4:case"end":return e.stop()}var t,n}),e)})))),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js")}))}});
//# sourceMappingURL=index-66150ad6.js.map