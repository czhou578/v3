(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[635,731],{1049:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});var r=function(e){}},2164:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return r(2635)}])},2635:(e,t,r)=>{"use strict";var n=r(6097),o=r(5835),i=r(2249),u=r(7936),a=r(3922);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});var c=r(4252),s=r(7876),l=c._(r(4232)),d=c._(r(5237)),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){e.req;var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404,hostname:window.location.hostname}}var h={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}},y=function(e){i(c,e);var t,r=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=a(c);return e=t?Reflect.construct(r,arguments,a(this).constructor):r.apply(this,arguments),u(this,e)});function c(){return n(this,c),r.apply(this,arguments)}return o(c,[{key:"render",value:function(){var e=this.props,t=e.statusCode,r=e.withDarkMode,n=this.props.title||f[t]||"An unexpected error has occurred";return(0,s.jsxs)("div",{style:h.error,children:[(0,s.jsx)(d.default,{children:(0,s.jsx)("title",{children:t?t+": "+n:"Application error: a client-side exception has occurred"})}),(0,s.jsxs)("div",{style:h.desc,children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(void 0===r||r?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?(0,s.jsx)("h1",{className:"next-error-h1",style:h.h1,children:t}):null,(0,s.jsx)("div",{style:h.wrap,children:(0,s.jsxs)("h2",{style:h.h2,children:[this.props.title||t?n:(0,s.jsxs)(s.Fragment,{children:["Application error: a client-side exception has occurred"," ",!!this.props.hostname&&(0,s.jsxs)(s.Fragment,{children:["while loading ",this.props.hostname]})," ","(see the browser console for more information)"]}),"."]})})]})]})}}]),c}(l.default.Component);y.displayName="ErrorPage",y.getInitialProps=p,y.origGetInitialProps=p,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5237:(e,t,r)=>{"use strict";var n=r(5364),o=r(3095);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return h}});var u=r(4252),a=r(8365),c=r(7876),s=a._(r(4232)),l=u._(r(7666)),d=r(6781),f=r(7405),p=r(5441);function h(e){void 0===e&&(e=!1);var t=[(0,c.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,c.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function y(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}r(1049);var v=["name","httpEquiv","charSet","itemProp"];function m(e,t){var r,u,a,c,l=t.inAmpMode;return e.reduce(y,[]).reverse().concat(h(l).reverse()).filter((r=new Set,u=new Set,a=new Set,c={},function(e){var t=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;var o=e.key.slice(e.key.indexOf("$")+1);r.has(o)?t=!1:r.add(o)}switch(e.type){case"title":case"base":u.has(e.type)?t=!1:u.add(e.type);break;case"meta":for(var i=0,s=v.length;i<s;i++){var l=v[i];if(e.props.hasOwnProperty(l)){if("charSet"===l)a.has(l)?t=!1:a.add(l);else{var d=e.props[l],f=c[l]||new Set;("name"!==l||!n)&&f.has(d)?t=!1:(f.add(d),c[l]=f)}}}}return t})).reverse().map(function(e,t){var r=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!l&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){o(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,s.default.cloneElement(e,u)}return s.default.cloneElement(e,{key:r})})}var g=function(e){var t=e.children,r=(0,s.useContext)(d.AmpStateContext),n=(0,s.useContext)(f.HeadManagerContext);return(0,c.jsx)(l.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,p.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5364:(e,t,r)=>{"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(5861)},5441:(e,t)=>{"use strict";function r(e){var t=void 0===e?{}:e,r=t.ampFirst,n=t.hybrid,o=t.hasQuery;return void 0!==r&&r||void 0!==n&&n&&void 0!==o&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},5861:e=>{!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var c=[],s=!1,l=-1;function d(){s&&n&&(s=!1,n.length?c=n.concat(c):l=-1,c.length&&f())}function f(){if(!s){var e=a(d);s=!0;for(var t=c.length;t;){for(n=c,c=[];++l<t;)n&&n[l].run();l=-1,t=c.length}n=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||s||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},u=!0;try{t[e](i,i.exports,n),u=!1}finally{u&&delete r[e]}return i.exports}n.ab="//",e.exports=n(229)}()},6781:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});var n=r(4252)._(r(4232)).default.createContext({})},7666:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});var n=r(4232),o=n.useLayoutEffect,i=n.useEffect;function u(e){var t=e.headManager,r=e.reduceComponentsToState;function u(){if(t&&t.mountedInstances){var o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}return o(function(){var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),function(){var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=u),function(){t&&(t._pendingUpdate=u)}}),i(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(2164)),_N_E=e.O()}]);