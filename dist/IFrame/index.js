(function e(r,t){if(typeof exports==="object"&&typeof module==="object")module.exports=t();else if(typeof define==="function"&&define.amd)define([],t);else{var n=t();for(var o in n)(typeof exports==="object"?exports:r)[o]=n[o]}})(window,function(){return function(t){var n={};function o(e){if(n[e]){return n[e].exports}var r=n[e]={i:e,l:false,exports:{}};t[e].call(r.exports,r,r.exports,o);r.l=true;return r.exports}o.m=t;o.c=n;o.d=function(e,r,t){if(!o.o(e,r)){Object.defineProperty(e,r,{enumerable:true,get:t})}};o.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};o.t=function(r,e){if(e&1)r=o(r);if(e&8)return r;if(e&4&&typeof r==="object"&&r&&r.__esModule)return r;var t=Object.create(null);o.r(t);Object.defineProperty(t,"default",{enumerable:true,value:r});if(e&2&&typeof r!="string")for(var n in r)o.d(t,n,function(e){return r[e]}.bind(null,n));return t};o.n=function(r){var e=r&&r.__esModule?function e(){return r["default"]}:function e(){return r};o.d(e,"a",e);return e};o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};o.p="/";return o(o.s="./src/IFrame/index.ts")}({"./node_modules/webpack/buildin/module.js":function(e,r){e.exports=function(e){if(!e.webpackPolyfill){e.deprecate=function(){};e.paths=[];if(!e.children)e.children=[];Object.defineProperty(e,"loaded",{enumerable:true,get:function(){return e.l}});Object.defineProperty(e,"id",{enumerable:true,get:function(){return e.i}});e.webpackPolyfill=1}return e}},"./src/IFrame/IFrame.tsx":function(e,i,a){"use strict";(function(r){(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(r)})();var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal["default"].signature:function(e){return e};var l=this&&this.__assign||function(){l=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var o in r){if(Object.prototype.hasOwnProperty.call(r,o))e[o]=r[o]}}return e};return l.apply(this,arguments)};var n=this&&this.__rest||function(e,r){var t={};for(var n in e){if(Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0)t[n]=e[n]}if(e!=null&&typeof Object.getOwnPropertySymbols==="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++){if(r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o]))t[n[o]]=e[n[o]]}return t};var c=this&&this.__read||function(e,r){var t=typeof Symbol==="function"&&e[Symbol.iterator];if(!t)return e;var n=t.call(e),o,i=[],a;try{while((r===void 0||r-- >0)&&!(o=n.next()).done){i.push(o.value)}}catch(e){a={error:e}}finally{try{if(o&&!o.done&&(t=n["return"]))t.call(n)}finally{if(a)throw a.error}}return i};var f=this&&this.__spreadArray||function(e,r,t){if(t||arguments.length===2)for(var n=0,o=r.length,i;n<o;n++){if(i||!(n in r)){if(!i)i=Array.prototype.slice.call(r,0,n);i[n]=r[n]}}return e.concat(i||Array.prototype.slice.call(r))};Object.defineProperty(i,"__esModule",{value:true});i.IFrame=void 0;var d=a("react");var s=a("react");function t(e){var r=e.fallback,t=n(e,["fallback"]);return d.createElement(s.Suspense,{fallback:r||"loading..."},d.createElement(o,l({},t)))}i.IFrame=t;function o(o){var e;var i=(0,s.useRef)(null);var r=(0,s.useRef)(null);var t=c((0,s.useState)(false),2),n=t[0],a=t[1];if((e=i.current)===null||e===void 0?void 0:e.promise){throw i.current.promise}(0,s.useLayoutEffect)(function(){if(i.current===null){i.current={};i.current.promise=new Promise(function(e,r){Object.assign(i.current,{resolve:e,reject:r})});a(true)}},[]);(0,s.useEffect)(function(){var e;if(r===null||r===void 0?void 0:r.current)(e=o===null||o===void 0?void 0:o.refChanged)===null||e===void 0?void 0:e.call(o,r)},f([r===null||r===void 0?void 0:r.current],c(o===null||o===void 0?void 0:o.refDepencyList),false));var u=o.title;return d.createElement("iframe",l({},o,{ref:r,title:u,onLoad:function e(r){var t,n;i.current.promise=null;(t=i.current)===null||t===void 0?void 0:t.resolve();(n=o.onLoad)===null||n===void 0?void 0:n.call(o,r)},onError:function e(r){var t,n;i.current.promise=null;(t=i.current)===null||t===void 0?void 0:t.reject();(n=o.onError)===null||n===void 0?void 0:n.call(o,r)}}))}i["default"]=t;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(l,"__assign","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\IFrame\\IFrame.tsx");e.register(n,"__rest","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\IFrame\\IFrame.tsx");e.register(c,"__read","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\IFrame\\IFrame.tsx");e.register(f,"__spreadArray","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\IFrame\\IFrame.tsx");e.register(t,"IFrame","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\IFrame\\IFrame.tsx");e.register(o,"IFrameImplementation","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\IFrame\\IFrame.tsx")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(r)})()}).call(this,a("./node_modules/webpack/buildin/module.js")(e))},"./src/IFrame/index.ts":function(e,r,t){"use strict";var n=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal["default"].signature:function(e){return e};Object.defineProperty(r,"__esModule",{value:true});r.IFrame=void 0;var o=t("./src/IFrame/IFrame.tsx");Object.defineProperty(r,"IFrame",{enumerable:true,get:function e(){return o.IFrame}})},react:function(e,r){e.exports=require("react")}})});
//# sourceMappingURL=index.js.map