(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{5074:function(e,t,n){"use strict";var i=n(5696),r=n(7980);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(6495).Z,a=n(2648).Z,u=n(1598).Z,l=n(7273).Z,c=u(n(7294)),s=a(n(1597)),d=n(8164),f=n(2358),p=n(6650);n(3766);var h=a(n(1586)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function v(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function y(e,t,n,i,r,a,u){e&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentElement&&e.isConnected){if("blur"===n&&a(!0),null==i?void 0:i.current){var t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});var u=!1,l=!1;i.current(o({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:function(){return u},isPropagationStopped:function(){return l},persist:function(){},preventDefault:function(){u=!0,t.preventDefault()},stopPropagation:function(){l=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}}))}function b(e){var t=i(c.version.split("."),2),n=t[0],r=t[1],o=parseInt(n,10),a=parseInt(r,10);return o>18||18===o&&a>=3?{fetchPriority:e}:{fetchpriority:e}}var w=c.forwardRef(function(e,t){var n=e.imgAttributes,i=e.heightInt,r=e.widthInt,a=(e.qualityInt,e.className),u=e.imgStyle,s=e.blurStyle,d=e.isLazy,f=e.fetchPriority,p=e.fill,h=e.placeholder,g=e.loading,m=e.srcString,v=(e.config,e.unoptimized),w=(e.loader,e.onLoadRef),S=e.onLoadingCompleteRef,_=e.setBlurComplete,C=e.setShowAltText,E=(e.onLoad,e.onError),z=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=d?"lazy":g,c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},z,b(f),{loading:g,width:r,height:i,decoding:"async","data-nimg":p?"fill":"1",className:a,style:o({},u,s)},n,{ref:c.useCallback(function(e){t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&y(e,m,h,w,S,_,v))},[m,h,w,S,_,E,v,t]),onLoad:function(e){y(e.currentTarget,m,h,w,S,_,v)},onError:function(e){C(!0),"blur"===h&&_(!0),E&&E(e)}})))}),S=c.forwardRef(function(e,t){var n,a,u,y=e.src,S=e.sizes,_=e.unoptimized,C=void 0!==_&&_,E=e.priority,z=void 0!==E&&E,j=e.loading,x=e.className,I=e.quality,P=e.width,M=e.height,k=e.fill,O=e.style,A=e.onLoad,R=e.onLoadingComplete,L=e.placeholder,U=void 0===L?"empty":L,q=e.blurDataURL,F=e.fetchPriority,N=e.layout,B=e.objectFit,D=e.objectPosition,T=(e.lazyBoundary,e.lazyRoot,l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"])),W=c.useContext(p.ImageConfigContext),Z=c.useMemo(function(){var e=g||W||f.imageConfigDefault,t=[].concat(r(e.deviceSizes),r(e.imageSizes)).sort(function(e,t){return e-t}),n=e.deviceSizes.sort(function(e,t){return e-t});return o({},e,{allSizes:t,deviceSizes:n})},[W]),H=T,G=H.loader||h.default;delete H.loader;var V="__next_img_default"in G;if(V){if("custom"===Z.loader)throw Error('Image with src "'.concat(y,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{var $=G;G=function(e){return e.config,$(l(e,["config"]))}}if(N){"fill"===N&&(k=!0);var J={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];J&&(O=o({},O,J));var Y={responsive:"100vw",fill:"100vw"}[N];Y&&!S&&(S=Y)}var Q="",K=v(P),X=v(M);if("object"==typeof(n=y)&&(m(n)||void 0!==n.src)){var ee=m(y)?y.default:y;if(!ee.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(ee)));if(!ee.height||!ee.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(ee)));if(a=ee.blurWidth,u=ee.blurHeight,q=q||ee.blurDataURL,Q=ee.src,!k){if(K||X){if(K&&!X){var et=K/ee.width;X=Math.round(ee.height*et)}else if(!K&&X){var en=X/ee.height;K=Math.round(ee.width*en)}}else K=ee.width,X=ee.height}}var ei=!z&&("lazy"===j||void 0===j);(!(y="string"==typeof y?y:Q)||y.startsWith("data:")||y.startsWith("blob:"))&&(C=!0,ei=!1),Z.unoptimized&&(C=!0),V&&y.endsWith(".svg")&&!Z.dangerouslyAllowSVG&&(C=!0),z&&(F="high");var er=i(c.useState(!1),2),eo=er[0],ea=er[1],eu=i(c.useState(!1),2),el=eu[0],ec=eu[1],es=v(I),ed=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:B,objectPosition:D}:{},el?{}:{color:"transparent"},O),ef="blur"===U&&q&&!eo?{backgroundSize:ed.objectFit||"cover",backgroundPosition:ed.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(d.getImageBlurSvg({widthInt:K,heightInt:X,blurWidth:a,blurHeight:u,blurDataURL:q,objectFit:ed.objectFit}),'")')}:{},ep=function(e){var t=e.config,n=e.src,i=e.unoptimized,o=e.width,a=e.quality,u=e.sizes,l=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var c=function(e,t,n){var i=e.deviceSizes,o=e.allSizes;if(n){for(var a,u=/(^|\s)(1?\d?\d)vw/g,l=[];a=u.exec(n);a)l.push(parseInt(a[2]));if(l.length){var c=.01*Math.min.apply(Math,l);return{widths:o.filter(function(e){return e>=i[0]*c}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:r(new Set([t,2*t].map(function(e){return o.find(function(t){return t>=e})||o[o.length-1]}))),kind:"x"}}(t,o,u),s=c.widths,d=c.kind,f=s.length-1;return{sizes:u||"w"!==d?u:"100vw",srcSet:s.map(function(e,i){return"".concat(l({config:t,src:n,quality:a,width:e})," ").concat("w"===d?e:i+1).concat(d)}).join(", "),src:l({config:t,src:n,quality:a,width:s[f]})}}({config:Z,src:y,unoptimized:C,width:K,quality:es,sizes:S,loader:G}),eh=y,eg=c.useRef(A);c.useEffect(function(){eg.current=A},[A]);var em=c.useRef(R);c.useEffect(function(){em.current=R},[R]);var ev=o({isLazy:ei,imgAttributes:ep,heightInt:X,widthInt:K,qualityInt:es,className:x,imgStyle:ed,blurStyle:ef,loading:j,config:Z,fetchPriority:F,fill:k,unoptimized:C,placeholder:U,loader:G,srcString:eh,onLoadRef:eg,onLoadingCompleteRef:em,setBlurComplete:ea,setShowAltText:ec},H);return c.default.createElement(c.default.Fragment,null,c.default.createElement(w,Object.assign({},ev,{ref:t})),z?c.default.createElement(s.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+ep.src+ep.srcSet+ep.sizes,rel:"preload",as:"image",href:ep.srcSet?void 0:ep.src,imageSrcSet:ep.srcSet,imageSizes:ep.sizes,crossOrigin:H.crossOrigin},b(F)))):null)});t.default=S,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var i=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=i},1342:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,i=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==i&&i}},1597:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=s,t.default=void 0;var i=n(6495).Z,r=n(2648).Z,o=(0,n(1598).Z)(n(7294)),a=r(n(7271)),u=n(5505),l=n(236),c=n(1342);function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(3766);var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n,r,a,u,l=t.inAmpMode;return e.reduce(d,[]).reverse().concat(s(l).reverse()).filter((n=new Set,r=new Set,a=new Set,u={},function(e){var t=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;var o=e.key.slice(e.key.indexOf("$")+1);n.has(o)?t=!1:n.add(o)}switch(e.type){case"title":case"base":r.has(e.type)?t=!1:r.add(e.type);break;case"meta":for(var l=0,c=f.length;l<c;l++){var s=f[l];if(e.props.hasOwnProperty(s)){if("charSet"===s)a.has(s)?t=!1:a.add(s);else{var d=e.props[s],p=u[s]||new Set;("name"!==s||!i)&&p.has(d)?t=!1:(p.add(d),u[s]=p)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!l&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var r=i({},e.props||{});return r["data-href"]=r.href,r.href=void 0,r["data-optimized-fonts"]=!0,o.default.cloneElement(e,r)}return o.default.cloneElement(e,{key:n})})}t.default=function(e){var t=e.children,n=o.useContext(u.AmpStateContext),i=o.useContext(l.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:i,inAmpMode:c.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8164:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){var t=e.widthInt,n=e.heightInt,i=e.blurWidth,r=e.blurHeight,o=e.blurDataURL,a=e.objectFit,u=i||t,l=r||n,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return u&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(u," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&r?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}},1586:function(e,t){"use strict";function n(e){var t=e.config,n=e.src,i=e.width,r=e.quality;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},7271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,u=e.reduceComponentsToState;function l(){if(n&&n.mountedInstances){var t=i.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(u(t,e))}}return r&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),l()),o(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),o(function(){return n&&(n._pendingUpdate=l),function(){n&&(n._pendingUpdate=l)}}),a(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var i=(0,n(1598).Z)(n(7294)),r=!1,o=i.useLayoutEffect,a=r?function(){}:i.useEffect},3766:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0,t.warnOnce=function(e){}},5675:function(e,t,n){e.exports=n(5074)}}]);