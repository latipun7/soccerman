!function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(l&&l(t);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;o.push([211,2]),n()}({211:function(e,t,n){"use strict";n.r(t);n(13),n(16),n(17),n(69),n(47),n(48);var r=n(31),a=n.n(r);function o(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function c(e){o(i,r,a,c,s,"next",e)}function s(e){o(i,r,a,c,s,"throw",e)}c(void 0)}))}}var c={responseType:"text"};function s(){return(s=i(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.get("/nav-items.html",c);case 2:t=e.sent,n=t.data,document.querySelectorAll(".topnav, .sidenav, .footer-nav").forEach((function(e){e.innerHTML=n})),document.querySelectorAll(".footer-nav li a").forEach((function(e){e.classList.remove("waves-effect"),e.classList.add("grey-text"),e.classList.add("text-lighten-3")}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var u=function(){return s.apply(this,arguments)};function l(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){l(o,r,a,i,c,"next",e)}function c(e){l(o,r,a,i,c,"throw",e)}i(void 0)}))}}function f(){return p.apply(this,arguments)}function p(){return(p=d(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelectorAll(".sidenav"),M.Sidenav.init(t),e.next=4,u();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(185),n(40),n(72),n(186);var v,h="<div id=not-found-page> <h3 class=center>Page Not Found 😢</h3> <h5 class=center>Sorry, the page you are looking for is not found 🙇🏻‍♂️</h5> </div> ";function m(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){m(o,r,a,i,c,"next",e)}function c(e){m(o,r,a,i,c,"throw",e)}i(void 0)}))}}var w={},y=document.querySelector("#root-content"),b='<div class="col s12 center"> <div class="preloader-wrapper big active"> <div class="spinner-layer spinner-green-only"> <div class="circle-clipper left"> <div class=circle></div> </div> <div class=gap-patch> <div class=circle></div> </div> <div class="circle-clipper right"> <div class=circle></div> </div> </div> </div> </div> ';function x(e){w[e.name]=e}function k(){return P.apply(this,arguments)}function P(){return(P=g(regeneratorRuntime.mark((function e(){var t,n,r,a,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.length>0&&void 0!==o[0]&&o[0],n=o.length>1?o[1]:void 0,!v){e.next=12;break}if(r=v.events,!t){e.next=7;break}return e.next=7,v.controller(v.model,n);case 7:a=v.view(v.model),y.innerHTML=a.contents,r&&r(v.model).init(),e.next=13;break;case 12:y.innerHTML=h;case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return R.apply(this,arguments)}function R(){return(R=g(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v&&v.events&&v.events(v.model).teardown(),!(v=w[t])){e.next=7;break}return r=v.view({},b),y.innerHTML=r.contents,e.next=7,v.controller(v.model,n);case 7:return e.next=9,k();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function L(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){E(o,r,a,i,c,"next",e)}function c(e){E(o,r,a,i,c,"throw",e)}i(void 0)}))}}var A=[];function D(e,t){A.push({name:e,urlPattern:t})}function j(){return _.apply(this,arguments)}function _(){return(_=L(regeneratorRuntime.mark((function e(){var t,n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.location.hash,n=document.querySelector(".sidenav"),""===t&&(t="#/home"),M.Sidenav.getInstance(n).close(),!(r=A.filter((function(e){return t.match(e.urlPattern)}))[0])){e.next=11;break}return a=/\d+/.exec(t),e.next=9,S(r.name,a);case 9:e.next=13;break;case 11:return e.next=13,S();case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(75),n(77);var O='<div class="container body-content"> <h3 class=center>{{title}}</h3> <div class=row> {{content}} </div> </div> ';function U(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function C(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){U(o,r,a,i,c,"next",e)}function c(e){U(o,r,a,i,c,"throw",e)}i(void 0)}))}}var I="https://api.football-data.org/v2",T={headers:{"X-Auth-Token":"6a66976fba4c43568ac32af323de8814"}};function N(){return F.apply(this,arguments)}function F(){return(F=C(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.get("".concat(I,"/competitions/PL/standings"),T);case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function q(e){return H.apply(this,arguments)}function H(){return(H=C(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.get("".concat(I,"/teams/").concat(t),T);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function J(e){return K.apply(this,arguments)}function K(){return(K=C(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.get("".concat(I,"/teams/").concat(t,"/matches?status=SCHEDULED"),T);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var W=n(155);function $(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function B(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){$(o,r,a,i,c,"next",e)}function c(e){$(o,r,a,i,c,"throw",e)}i(void 0)}))}}function Y(e,t){return V.apply(this,arguments)}function V(){return(V=B(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(W.a)(t,1,{upgrade:function(e){e.createObjectStore(n,{keyPath:"id"}).createIndex("name","name",{unique:!1})}});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function Z(e,t,n){return X.apply(this,arguments)}function X(){return(X=B(regeneratorRuntime.mark((function e(t,n,r){var a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y(n,r);case 3:return a=e.sent,o=a.transaction(r,"readwrite"),e.next=7,o.store.put(t);case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function z(e,t){return G.apply(this,arguments)}function G(){return(G=B(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y(t,n);case 3:return r=e.sent,e.next=6,r.getAllFromIndex(n,"name");case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function Q(e,t,n){return ee.apply(this,arguments)}function ee(){return(ee=B(regeneratorRuntime.mark((function e(t,n,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y(n,r);case 3:return a=e.sent,e.next=6,a.get(r,+t);case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function te(e,t,n){return ne.apply(this,arguments)}function ne(){return(ne=B(regeneratorRuntime.mark((function e(t,n,r){var a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y(n,r);case 3:return a=e.sent,o=a.transaction(r,"readwrite"),e.next=7,o.store.delete(t);case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}n(187),n(30),n(113),n(193),n(195),n(196),n(79),n(197),n(200),n(202),n(120),n(122),n(123),n(124),n(125),n(126),n(127),n(128),n(129),n(130),n(131),n(132),n(133),n(134),n(135),n(136),n(137),n(138),n(139),n(140),n(141),n(142),n(143),n(144);function re(e){return[Object,Array].includes((e||{}).constructor)&&!Object.entries(e||{}).length}function ae(e,t){var n=e;return Object.keys(t).forEach((function(e){n=n.replace(new RegExp("{{".concat(e,"}}"),"gm"),t[e])})),n}function oe(e){return e.replace(/^http:\/\//i,"https://")}function ie(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function ce(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){ie(o,r,a,i,c,"next",e)}function c(e){ie(o,r,a,i,c,"throw",e)}i(void 0)}))}}var se,ue=function(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(t),r=new Uint8Array(n.length),a=0;a<n.length;a+=1)r[a]=n.charCodeAt(a);return r}("BFph2fgn1IcZqcLVzrUZNe1gWBv92thJxP8NESJkjmgvZaKL1HflLd0GUC9p6KLso-4P5SJx_v48XtNm_klu2rI");function le(){return de.apply(this,arguments)}function de(){return(de=ce(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Notification.requestPermission();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(){return pe.apply(this,arguments)}function pe(){return(pe=ce(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.serviceWorker.ready;case 3:return t=e.sent,e.next=6,t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ue});case 6:n=e.sent,M.toast({html:"Push notifications subscription success ✨",classes:"teal"}),console.log("User is subscribed with endpoint:",n.endpoint),console.log("User is subscribed with p256dh key:",window.btoa(String.fromCharCode.apply(null,new Uint8Array(n.getKey("p256dh"))))),console.log("User is subscribed with auth key:",window.btoa(String.fromCharCode.apply(null,new Uint8Array(n.getKey("auth"))))),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Subscription failed.",e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function ve(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function he(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){ve(o,r,a,i,c,"next",e)}function c(e){ve(o,r,a,i,c,"throw",e)}i(void 0)}))}}x({name:"dashboard",model:{following:[]},controller:(se=he(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,z("EPL","team");case 3:r=e.sent,n.following=r;case 5:case"end":return e.stop()}}),e)}))),function(e){return se.apply(this,arguments)}),view:function(e,t){var n,r;n="Notification"in window&&"PushManager"in window?ae(O,{title:"Settings",content:'<label for=push-settings class=center> <h5>Allow Push Notifications?</h5> </label> <div class="switch center"> <label> No <input id=push-settings type=checkbox /> <span class=lever></span> Yes </label> </div> '}):"",r=re(e.following)?'<h5 class="center">You don\'t have followed teams 🙅🏻‍♀️</h5>':e.following.reduce((function(e,t){return"\n          ".concat(e,"\n          ").concat(ae('<div class="col s12 m6 l4"> <div class=card> <div class=card-image> <a href=/#/team/{{id}}> <img src={{crestUrl}} alt={{name}} /> </a> <button data-id={{id}} class="btn-floating btn-large halfway-fab waves-effect waves-light red btn-follow"> <i class=material-icons>{{btnIcon}}</i> </button> </div> <div class=card-content> <a href=/#/team/{{id}} title={{name}}> <span class="card-title truncate">{{name}}</span> </a> </div> </div> </div> ',{id:t.id,crestUrl:oe(t.crestUrl),name:t.name,btnIcon:"person_remove_alt_1"}),"\n        ")}),"");var a=ae(O,{title:"Followed Teams",content:t||r});return{contents:"".concat(n).concat(a)}},events:function(){var e=document.querySelectorAll(".btn-follow"),t=document.querySelector('input[id="push-settings"]'),n="Notification"in window&&"PushManager"in window,r=function(){var e=he(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.currentTarget.dataset.id,e.next=4,q(n);case 4:return r=e.sent,e.next=7,te(r.id,"EPL","team");case 7:return e.next=9,k(!0);case 9:M.toast({html:'<strong style="font-weight:bold;">'.concat(r.name,"</strong>&nbsp;Deleted&nbsp;❌"),classes:"teal"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),M.toast({html:"Not Deleted. Something went wrong, sorry! 😢",classes:"red"});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),a=function(){var e=he(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:n=e.sent,t.checked="granted"===n;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=he(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:"granted"===(n=e.sent)?t.checked?fe():(t.checked=!0,M.toast({html:"Change consent in the browser settings. 😢",classes:"amber darken-3"})):"denied"===n?(t.checked=!1,M.toast({html:"I'm not allowed to send push notifications. 😢",classes:"red"})):(t.checked=!1,M.toast({html:"You need to click allow to show notifications ⚠",classes:"amber darken-3"}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{init:function(){e.forEach((function(e){e.addEventListener("click",r)})),n&&(a(),t.addEventListener("change",o))},teardown:function(){e.forEach((function(e){e.removeEventListener("click",r)})),n&&t.removeEventListener("change",(function(){return o}))}}}});n(145),n(148),n(149),n(150),n(151),n(152),n(153),n(154);function me(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=we(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function ge(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||we(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function we(e,t){if(e){if("string"==typeof e)return ye(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ye(e,t):void 0}}function ye(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function be(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function xe(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){be(o,r,a,i,c,"next",e)}function c(e){be(o,r,a,i,c,"throw",e)}i(void 0)}))}}x({name:"home",model:{standings:[],following:[]},controller:function(){var e=xe(regeneratorRuntime.mark((function e(t){var n,r,a,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,Promise.all([N(),z("EPL","team")]);case 3:r=e.sent,a=ge(r,2),o=a[0],i=a[1],n.standings=o.standings[0].table,n.following=i;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),view:function(e,t){var n;if(re(e.standings))n="";else{var r,a={},o=me(e.following);try{for(o.s();!(r=o.n()).done;){var i=r.value;a[i.id]=i}}catch(e){o.e(e)}finally{o.f()}var c,s=me(e.standings);try{for(s.s();!(c=s.n()).done;){var u=c.value;u.isMatch=u.team.id in a}}catch(e){s.e(e)}finally{s.f()}n=e.standings.reduce((function(e,t){return"\n          ".concat(e,"\n          ").concat(ae('<div class="col s12 m6 l4"> <div class=card> <div class=card-image> <a href=/#/team/{{id}}> <img src={{crestUrl}} alt={{name}} /> </a> <button data-id={{id}} data-followed={{followed}} class="btn-floating btn-large halfway-fab waves-effect waves-light {{btnColor}} btn-follow"> <i class=material-icons>{{btnIcon}}</i> </button> </div> <div class=card-content> <a href=/#/team/{{id}} title={{name}}> <span class="card-title truncate">{{name}}</span> </a> <p>{{points}} pts</p> </div> </div> </div> ',{id:t.team.id,crestUrl:oe(t.team.crestUrl),name:t.team.name,points:t.points,followed:t.isMatch,btnColor:t.isMatch?"red":"teal",btnIcon:t.isMatch?"person_remove_alt_1":"person_add_alt_1"}),"\n        ")}),"")}var l=ae(O,{title:"Premiere League",content:t||n});return{contents:"".concat(l)}},events:function(){var e=document.querySelectorAll(".btn-follow"),t=function(){var e=xe(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.currentTarget.dataset.id,r=t.currentTarget.dataset.followed,e.next=5,q(n);case 5:if(a=e.sent,"true"!==r){e.next=14;break}return e.next=9,te(a.id,"EPL","team");case 9:return e.next=11,k(!0);case 11:M.toast({html:'<strong style="font-weight:bold;">Unfollow&nbsp;'.concat(a.name,"</strong>&nbsp;❌"),classes:"teal"}),e.next=19;break;case 14:return e.next=16,Z(a,"EPL","team");case 16:return e.next=18,k(!0);case 18:M.toast({html:'Now following&nbsp;<strong style="font-weight:bold;">'.concat(a.name,"</strong>&nbsp;🎉"),classes:"teal"});case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),M.toast({html:"Something went wrong, sorry! 😢",classes:"red"});case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(t){return e.apply(this,arguments)}}();return{init:function(){e.forEach((function(e){e.addEventListener("click",t)}))},teardown:function(){e.forEach((function(e){e.removeEventListener("click",t)}))}}}});function ke(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Pe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Se(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function Re(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){Se(o,r,a,i,c,"next",e)}function c(e){Se(o,r,a,i,c,"throw",e)}i(void 0)}))}}function Me(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function Ee(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){Me(o,r,a,i,c,"next",e)}function c(e){Me(o,r,a,i,c,"throw",e)}i(void 0)}))}}x({name:"team",model:{teamDetail:{},teamMatches:{},isFollowing:Boolean},controller:function(){var e=Re(regeneratorRuntime.mark((function e(t,n){var r,a,o,i,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,e.next=3,Promise.all([q(n[0]),J(n[0]),Q(n[0],"EPL","team")]);case 3:a=e.sent,o=ke(a,3),i=o[0],c=o[1],s=o[2],r.teamDetail=i,r.teamMatches=c,r.isFollowing=!!s;case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),view:function(e,t){var n,r,a;re(e.teamDetail)?(n="",a=""):(r=re(e.teamMatches.matches)?"No scheduled match 🙅🏻‍♀️":e.teamMatches.matches.reduce((function(e,t){return"\n            ".concat(e,"\n            ").concat(ae("<li class=collection-item> <p class=competition>🏆 {{competition}}</p> <p class=matchday>{{matchday}}</p> <p class=vs>🥅 {{home}} vs {{away}} ⚽</p> <p>⌚ {{date}}</p> </li> ",{competition:t.competition.name,matchday:t.matchday?"matchday #".concat(t.matchday.toString()):"",home:t.homeTeam.name,away:t.awayTeam.name,date:new Date(t.utcDate).toLocaleString()}),"\n          ")}),""),a=ae('<div class=sticky-action-btn> <button {{dataset}} class="waves-effect waves-light btn-large btn {{btnColor}}"> <i class="material-icons right">{{btnIcon}}</i>{{btnCaption}} </button> </div> ',{dataset:e.isFollowing?"data-followed=true":"",btnColor:e.isFollowing?"red":"teal",btnIcon:e.isFollowing?"person_remove_alt_1":"person_add_alt_1",btnCaption:e.isFollowing?"Unfollow":"Follow"}),n=ae('<div class="col s12"> <div class=card> <a href=/#/team/{{id}}> <div class="card-image waves-effect waves-block waves-light"> <img src={{crestUrl}} alt={{name}} /> </div> </a> <div class=card-content> <table class="highlight left-heading"> <caption class=center> {{name}} ({{tla}}) </caption> <thead> <tr> <th>Country</th> <th>Address</th> <th>Phone</th> <th>Website</th> <th>E-mail</th> <th>Founded</th> <th>Club Colors</th> <th>Venue Name</th> </tr> </thead> <tbody> <tr> <td>{{country}}</td> <td>{{address}}</td> <td>{{phone}}</td> <td> <a href={{website}} target=_blank rel="noopener noreferrer"> {{website}} </a> </td> <td> <a href=mailto:{{email}}> {{email}} </a> </td> <td> {{founded}} </td> <td> {{clubColors}} </td> <td> {{venue}} </td> </tr> </tbody> </table> <ul class="collection with-header center"> <li class=collection-header><h4>Upcoming Matches</h4></li> {{teamMatches}} </ul> </div> </div> </div> ',{id:e.teamDetail.id,crestUrl:oe(e.teamDetail.crestUrl),name:e.teamDetail.name,tla:e.teamDetail.tla,country:e.teamDetail.area.name,address:e.teamDetail.address,phone:e.teamDetail.phone,email:e.teamDetail.email,founded:e.teamDetail.founded.toString(),clubColors:e.teamDetail.clubColors,venue:e.teamDetail.venue,website:e.teamDetail.website,teamMatches:r}));var o=ae(O,{title:e.teamDetail?e.teamDetail.name:"Team Details",content:t||n});return{contents:"".concat(o).concat(a)}},events:function(e){var t=document.querySelector(".btn-large.btn"),n=function(){var t=Re(regeneratorRuntime.mark((function t(n){var r,a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.teamDetail.id,a=n.target.dataset.followed,t.next=5,q(r.toString());case 5:if(o=t.sent,!a){t.next=14;break}return t.next=9,te(o.id,"EPL","team");case 9:return t.next=11,k(!0,[r.toString()]);case 11:M.toast({html:'<strong style="font-weight:bold;">Unfollow&nbsp;'.concat(o.name,"</strong>&nbsp;❌"),classes:"teal"}),t.next=19;break;case 14:return t.next=16,Z(o,"EPL","team");case 16:return t.next=18,k(!0,[r.toString()]);case 18:M.toast({html:'Now following&nbsp;<strong style="font-weight:bold;">'.concat(o.name,"</strong>&nbsp;🎉"),classes:"teal"});case 19:t.next=24;break;case 21:t.prev=21,t.t0=t.catch(0),M.toast({html:"Something went wrong, sorry! 😢",classes:"red"});case 24:case"end":return t.stop()}}),t,null,[[0,21]])})));return function(e){return t.apply(this,arguments)}}();return{init:function(){t.addEventListener("click",n)},teardown:function(){t.removeEventListener("click",n)}}}}),D("home",/^#\/home\/?$/),D("team",/^#\/team\/\d+\/?$/),D("dashboard",/^#\/dashboard\/?$/),window.addEventListener("hashchange",j),window.addEventListener("DOMContentLoaded",Ee(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:j(),t=void 0,n=void 0,t=document.getElementById("footer-date"),n=(new Date).getFullYear(),t.innerText=n;case 4:case"end":return e.stop()}var t,n}),e)})))),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js")}))}});
//# sourceMappingURL=index.js.map