(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();var wd={exports:{}},Ss={},bd={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=Symbol.for("react.element"),pm=Symbol.for("react.portal"),um=Symbol.for("react.fragment"),mm=Symbol.for("react.strict_mode"),hm=Symbol.for("react.profiler"),fm=Symbol.for("react.provider"),gm=Symbol.for("react.context"),km=Symbol.for("react.forward_ref"),_m=Symbol.for("react.suspense"),vm=Symbol.for("react.memo"),xm=Symbol.for("react.lazy"),Vl=Symbol.iterator;function ym(e){return e===null||typeof e!="object"?null:(e=Vl&&e[Vl]||e["@@iterator"],typeof e=="function"?e:null)}var Sd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cd=Object.assign,Pd={};function rr(e,t,n){this.props=e,this.context=t,this.refs=Pd,this.updater=n||Sd}rr.prototype.isReactComponent={};rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nd(){}Nd.prototype=rr.prototype;function za(e,t,n){this.props=e,this.context=t,this.refs=Pd,this.updater=n||Sd}var Oa=za.prototype=new Nd;Oa.constructor=za;Cd(Oa,rr.prototype);Oa.isPureReactComponent=!0;var Wl=Array.isArray,jd=Object.prototype.hasOwnProperty,Ha={current:null},Bd={key:!0,ref:!0,__self:!0,__source:!0};function Dd(e,t,n){var r,o={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)jd.call(t,r)&&!Bd.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:eo,type:e,key:s,ref:a,props:o,_owner:Ha.current}}function wm(e,t){return{$$typeof:eo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ga(e){return typeof e=="object"&&e!==null&&e.$$typeof===eo}function bm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ql=/\/+/g;function Ws(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bm(""+e.key):t.toString(36)}function Fo(e,t,n,r,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case eo:case pm:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Ws(a,0):r,Wl(o)?(n="",e!=null&&(n=e.replace(Ql,"$&/")+"/"),Fo(o,t,n,"",function(d){return d})):o!=null&&(Ga(o)&&(o=wm(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Ql,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Wl(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+Ws(s,l);a+=Fo(s,t,n,c,o)}else if(c=ym(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+Ws(s,l++),a+=Fo(s,t,n,c,o);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function io(e,t,n){if(e==null)return e;var r=[],o=0;return Fo(e,r,"","",function(s){return t.call(n,s,o++)}),r}function Sm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},Io={transition:null},Cm={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Io,ReactCurrentOwner:Ha};function Ad(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:io,forEach:function(e,t,n){io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return io(e,function(){t++}),t},toArray:function(e){return io(e,function(t){return t})||[]},only:function(e){if(!Ga(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=rr;M.Fragment=um;M.Profiler=hm;M.PureComponent=za;M.StrictMode=mm;M.Suspense=_m;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cm;M.act=Ad;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cd({},e.props),o=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Ha.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)jd.call(t,c)&&!Bd.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:eo,type:e.type,key:o,ref:s,props:r,_owner:a}};M.createContext=function(e){return e={$$typeof:gm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fm,_context:e},e.Consumer=e};M.createElement=Dd;M.createFactory=function(e){var t=Dd.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:km,render:e}};M.isValidElement=Ga;M.lazy=function(e){return{$$typeof:xm,_payload:{_status:-1,_result:e},_init:Sm}};M.memo=function(e,t){return{$$typeof:vm,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Io.transition;Io.transition={};try{e()}finally{Io.transition=t}};M.unstable_act=Ad;M.useCallback=function(e,t){return Ce.current.useCallback(e,t)};M.useContext=function(e){return Ce.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};M.useEffect=function(e,t){return Ce.current.useEffect(e,t)};M.useId=function(){return Ce.current.useId()};M.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return Ce.current.useMemo(e,t)};M.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};M.useRef=function(e){return Ce.current.useRef(e)};M.useState=function(e){return Ce.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return Ce.current.useTransition()};M.version="18.3.1";bd.exports=M;var D=bd.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm=D,Nm=Symbol.for("react.element"),jm=Symbol.for("react.fragment"),Bm=Object.prototype.hasOwnProperty,Dm=Pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Am={key:!0,ref:!0,__self:!0,__source:!0};function Ed(e,t,n){var r,o={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Bm.call(t,r)&&!Am.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Nm,type:e,key:s,ref:a,props:o,_owner:Dm.current}}Ss.Fragment=jm;Ss.jsx=Ed;Ss.jsxs=Ed;wd.exports=Ss;var i=wd.exports,Td={exports:{}},Oe={},Ld={exports:{}},Fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,A){var L=b.length;b.push(A);e:for(;0<L;){var H=L-1>>>1,G=b[H];if(0<o(G,A))b[H]=A,b[L]=G,L=H;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var A=b[0],L=b.pop();if(L!==A){b[0]=L;e:for(var H=0,G=b.length,ye=G>>>1;H<ye;){var Ue=2*(H+1)-1,wn=b[Ue],pt=Ue+1,bn=b[pt];if(0>o(wn,L))pt<G&&0>o(bn,wn)?(b[H]=bn,b[pt]=L,H=pt):(b[H]=wn,b[Ue]=L,H=Ue);else if(pt<G&&0>o(bn,L))b[H]=bn,b[pt]=L,H=pt;else break e}}return A}function o(b,A){var L=b.sortIndex-A.sortIndex;return L!==0?L:b.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],d=[],u=1,f=null,m=3,k=!1,_=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var A=n(d);A!==null;){if(A.callback===null)r(d);else if(A.startTime<=b)r(d),A.sortIndex=A.expirationTime,t(c,A);else break;A=n(d)}}function x(b){if(v=!1,g(b),!_)if(n(c)!==null)_=!0,yn(S);else{var A=n(d);A!==null&&ir(x,A.startTime-b)}}function S(b,A){_=!1,v&&(v=!1,h(j),j=-1),k=!0;var L=m;try{for(g(A),f=n(c);f!==null&&(!(f.expirationTime>A)||b&&!xe());){var H=f.callback;if(typeof H=="function"){f.callback=null,m=f.priorityLevel;var G=H(f.expirationTime<=A);A=e.unstable_now(),typeof G=="function"?f.callback=G:f===n(c)&&r(c),g(A)}else r(c);f=n(c)}if(f!==null)var ye=!0;else{var Ue=n(d);Ue!==null&&ir(x,Ue.startTime-A),ye=!1}return ye}finally{f=null,m=L,k=!1}}var N=!1,P=null,j=-1,W=5,F=-1;function xe(){return!(e.unstable_now()-F<W)}function Ge(){if(P!==null){var b=e.unstable_now();F=b;var A=!0;try{A=P(!0,b)}finally{A?Ct():(N=!1,P=null)}}else N=!1}var Ct;if(typeof p=="function")Ct=function(){p(Ge)};else if(typeof MessageChannel<"u"){var xn=new MessageChannel,Kt=xn.port2;xn.port1.onmessage=Ge,Ct=function(){Kt.postMessage(null)}}else Ct=function(){E(Ge,0)};function yn(b){P=b,N||(N=!0,Ct())}function ir(b,A){j=E(function(){b(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){_||k||(_=!0,yn(S))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(b){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var L=m;m=A;try{return b()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,A){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var L=m;m=b;try{return A()}finally{m=L}},e.unstable_scheduleCallback=function(b,A,L){var H=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?H+L:H):L=H,b){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=L+G,b={id:u++,callback:A,priorityLevel:b,startTime:L,expirationTime:G,sortIndex:-1},L>H?(b.sortIndex=L,t(d,b),n(c)===null&&b===n(d)&&(v?(h(j),j=-1):v=!0,ir(x,L-H))):(b.sortIndex=G,t(c,b),_||k||(_=!0,yn(S))),b},e.unstable_shouldYield=xe,e.unstable_wrapCallback=function(b){var A=m;return function(){var L=m;m=A;try{return b.apply(this,arguments)}finally{m=L}}}})(Fd);Ld.exports=Fd;var Em=Ld.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm=D,ze=Em;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Id=new Set,Ir={};function _n(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(Ir[e]=t,e=0;e<t.length;e++)Id.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ti=Object.prototype.hasOwnProperty,Lm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xl={},Yl={};function Fm(e){return Ti.call(Yl,e)?!0:Ti.call(Xl,e)?!1:Lm.test(e)?Yl[e]=!0:(Xl[e]=!0,!1)}function Im(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mm(e,t,n,r){if(t===null||typeof t>"u"||Im(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,o,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ua=/[\-:]([a-z])/g;function Va(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ua,Va);fe[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ua,Va);fe[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ua,Va);fe[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wa(e,t,n,r){var o=fe.hasOwnProperty(t)?fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mm(t,n,o,r)&&(n=null),r||o===null?Fm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=Tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),An=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),Qa=Symbol.for("react.strict_mode"),Li=Symbol.for("react.profiler"),Md=Symbol.for("react.provider"),Rd=Symbol.for("react.context"),Xa=Symbol.for("react.forward_ref"),Fi=Symbol.for("react.suspense"),Ii=Symbol.for("react.suspense_list"),Ya=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),zd=Symbol.for("react.offscreen"),Jl=Symbol.iterator;function ar(e){return e===null||typeof e!="object"?null:(e=Jl&&e[Jl]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,Qs;function kr(e){if(Qs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qs=t&&t[1]||""}return`
`+Qs+e}var Xs=!1;function Ys(e,t){if(!e||Xs)return"";Xs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),s=r.stack.split(`
`),a=o.length-1,l=s.length-1;1<=a&&0<=l&&o[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==s[l]){var c=`
`+o[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Xs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kr(e):""}function Rm(e){switch(e.tag){case 5:return kr(e.type);case 16:return kr("Lazy");case 13:return kr("Suspense");case 19:return kr("SuspenseList");case 0:case 2:case 15:return e=Ys(e.type,!1),e;case 11:return e=Ys(e.type.render,!1),e;case 1:return e=Ys(e.type,!0),e;default:return""}}function Mi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case An:return"Portal";case Li:return"Profiler";case Qa:return"StrictMode";case Fi:return"Suspense";case Ii:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rd:return(e.displayName||"Context")+".Consumer";case Md:return(e._context.displayName||"Context")+".Provider";case Xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ya:return t=e.displayName||null,t!==null?t:Mi(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return Mi(e(t))}catch{}}return null}function zm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mi(t);case 8:return t===Qa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Od(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Om(e){var t=Od(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lo(e){e._valueTracker||(e._valueTracker=Om(e))}function Hd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Od(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ri(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $l(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gd(e,t){t=t.checked,t!=null&&Wa(e,"checked",t,!1)}function zi(e,t){Gd(e,t);var n=Qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Oi(e,t.type,Qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Kl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Oi(e,t,n){(t!=="number"||Zo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _r=Array.isArray;function Vn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Qt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Hi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(_r(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Qt(n)}}function Ud(e,t){var n=Qt(t.value),r=Qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ql(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var co,Wd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=co.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hm=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){Hm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function Qd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function Xd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Qd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Gm=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ui(e,t){if(t){if(Gm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Vi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wi=null;function Ja(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qi=null,Wn=null,Qn=null;function ec(e){if(e=ro(e)){if(typeof Qi!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Bs(t),Qi(e.stateNode,e.type,t))}}function Yd(e){Wn?Qn?Qn.push(e):Qn=[e]:Wn=e}function Jd(){if(Wn){var e=Wn,t=Qn;if(Qn=Wn=null,ec(e),t)for(e=0;e<t.length;e++)ec(t[e])}}function $d(e,t){return e(t)}function Kd(){}var Js=!1;function Zd(e,t,n){if(Js)return e(t,n);Js=!0;try{return $d(e,t,n)}finally{Js=!1,(Wn!==null||Qn!==null)&&(Kd(),Jd())}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var r=Bs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Xi=!1;if(xt)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){Xi=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{Xi=!1}function Um(e,t,n,r,o,s,a,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var Nr=!1,qo=null,es=!1,Yi=null,Vm={onError:function(e){Nr=!0,qo=e}};function Wm(e,t,n,r,o,s,a,l,c){Nr=!1,qo=null,Um.apply(Vm,arguments)}function Qm(e,t,n,r,o,s,a,l,c){if(Wm.apply(this,arguments),Nr){if(Nr){var d=qo;Nr=!1,qo=null}else throw Error(w(198));es||(es=!0,Yi=d)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tc(e){if(vn(e)!==e)throw Error(w(188))}function Xm(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return tc(o),e;if(s===r)return tc(o),t;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=o,r=s;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=s;break}if(l===r){a=!0,r=o,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=o;break}if(l===r){a=!0,r=s,n=o;break}l=l.sibling}if(!a)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function ep(e){return e=Xm(e),e!==null?tp(e):null}function tp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tp(e);if(t!==null)return t;e=e.sibling}return null}var np=ze.unstable_scheduleCallback,nc=ze.unstable_cancelCallback,Ym=ze.unstable_shouldYield,Jm=ze.unstable_requestPaint,oe=ze.unstable_now,$m=ze.unstable_getCurrentPriorityLevel,$a=ze.unstable_ImmediatePriority,rp=ze.unstable_UserBlockingPriority,ts=ze.unstable_NormalPriority,Km=ze.unstable_LowPriority,op=ze.unstable_IdlePriority,Cs=null,ct=null;function Zm(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Cs,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:t0,qm=Math.log,e0=Math.LN2;function t0(e){return e>>>=0,e===0?32:31-(qm(e)/e0|0)|0}var po=64,uo=4194304;function vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ns(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=vr(l):(s&=a,s!==0&&(r=vr(s)))}else a=n&~o,a!==0?r=vr(a):s!==0&&(r=vr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),o=1<<n,r|=e[n],t&=~o;return r}function n0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function r0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-tt(s),l=1<<a,c=o[a];c===-1?(!(l&n)||l&r)&&(o[a]=n0(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Ji(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sp(){var e=po;return po<<=1,!(po&4194240)&&(po=64),e}function $s(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function to(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function o0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-tt(n),s=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~s}}function Ka(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var V=0;function ip(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ap,Za,lp,cp,dp,$i=!1,mo=[],Rt=null,zt=null,Ot=null,zr=new Map,Or=new Map,At=[],s0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rc(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(t.pointerId)}}function cr(e,t,n,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},t!==null&&(t=ro(t),t!==null&&Za(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function i0(e,t,n,r,o){switch(t){case"focusin":return Rt=cr(Rt,e,t,n,r,o),!0;case"dragenter":return zt=cr(zt,e,t,n,r,o),!0;case"mouseover":return Ot=cr(Ot,e,t,n,r,o),!0;case"pointerover":var s=o.pointerId;return zr.set(s,cr(zr.get(s)||null,e,t,n,r,o)),!0;case"gotpointercapture":return s=o.pointerId,Or.set(s,cr(Or.get(s)||null,e,t,n,r,o)),!0}return!1}function pp(e){var t=rn(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=qd(n),t!==null){e.blockedOn=t,dp(e.priority,function(){lp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ki(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Wi=r,n.target.dispatchEvent(r),Wi=null}else return t=ro(n),t!==null&&Za(t),e.blockedOn=n,!1;t.shift()}return!0}function oc(e,t,n){Mo(e)&&n.delete(t)}function a0(){$i=!1,Rt!==null&&Mo(Rt)&&(Rt=null),zt!==null&&Mo(zt)&&(zt=null),Ot!==null&&Mo(Ot)&&(Ot=null),zr.forEach(oc),Or.forEach(oc)}function dr(e,t){e.blockedOn===t&&(e.blockedOn=null,$i||($i=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,a0)))}function Hr(e){function t(o){return dr(o,e)}if(0<mo.length){dr(mo[0],e);for(var n=1;n<mo.length;n++){var r=mo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&dr(Rt,e),zt!==null&&dr(zt,e),Ot!==null&&dr(Ot,e),zr.forEach(t),Or.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)pp(n),n.blockedOn===null&&At.shift()}var Xn=St.ReactCurrentBatchConfig,rs=!0;function l0(e,t,n,r){var o=V,s=Xn.transition;Xn.transition=null;try{V=1,qa(e,t,n,r)}finally{V=o,Xn.transition=s}}function c0(e,t,n,r){var o=V,s=Xn.transition;Xn.transition=null;try{V=4,qa(e,t,n,r)}finally{V=o,Xn.transition=s}}function qa(e,t,n,r){if(rs){var o=Ki(e,t,n,r);if(o===null)ii(e,t,r,os,n),rc(e,r);else if(i0(o,e,t,n,r))r.stopPropagation();else if(rc(e,r),t&4&&-1<s0.indexOf(e)){for(;o!==null;){var s=ro(o);if(s!==null&&ap(s),s=Ki(e,t,n,r),s===null&&ii(e,t,r,os,n),s===o)break;o=s}o!==null&&r.stopPropagation()}else ii(e,t,r,null,n)}}var os=null;function Ki(e,t,n,r){if(os=null,e=Ja(r),e=rn(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return os=e,null}function up(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($m()){case $a:return 1;case rp:return 4;case ts:case Km:return 16;case op:return 536870912;default:return 16}default:return 16}}var Ft=null,el=null,Ro=null;function mp(){if(Ro)return Ro;var e,t=el,n=t.length,r,o="value"in Ft?Ft.value:Ft.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[s-r];r++);return Ro=o.slice(e,1<r?1-r:void 0)}function zo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ho(){return!0}function sc(){return!1}function He(e){function t(n,r,o,s,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ho:sc,this.isPropagationStopped=sc,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=He(or),no=te({},or,{view:0,detail:0}),d0=He(no),Ks,Zs,pr,Ps=te({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(Ks=e.screenX-pr.screenX,Zs=e.screenY-pr.screenY):Zs=Ks=0,pr=e),Ks)},movementY:function(e){return"movementY"in e?e.movementY:Zs}}),ic=He(Ps),p0=te({},Ps,{dataTransfer:0}),u0=He(p0),m0=te({},no,{relatedTarget:0}),qs=He(m0),h0=te({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),f0=He(h0),g0=te({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),k0=He(g0),_0=te({},or,{data:0}),ac=He(_0),v0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=y0[e])?!!t[e]:!1}function nl(){return w0}var b0=te({},no,{key:function(e){if(e.key){var t=v0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?x0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nl,charCode:function(e){return e.type==="keypress"?zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),S0=He(b0),C0=te({},Ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lc=He(C0),P0=te({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nl}),N0=He(P0),j0=te({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),B0=He(j0),D0=te({},Ps,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A0=He(D0),E0=[9,13,27,32],rl=xt&&"CompositionEvent"in window,jr=null;xt&&"documentMode"in document&&(jr=document.documentMode);var T0=xt&&"TextEvent"in window&&!jr,hp=xt&&(!rl||jr&&8<jr&&11>=jr),cc=" ",dc=!1;function fp(e,t){switch(e){case"keyup":return E0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tn=!1;function L0(e,t){switch(e){case"compositionend":return gp(t);case"keypress":return t.which!==32?null:(dc=!0,cc);case"textInput":return e=t.data,e===cc&&dc?null:e;default:return null}}function F0(e,t){if(Tn)return e==="compositionend"||!rl&&fp(e,t)?(e=mp(),Ro=el=Ft=null,Tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hp&&t.locale!=="ko"?null:t.data;default:return null}}var I0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!I0[e.type]:t==="textarea"}function kp(e,t,n,r){Yd(r),t=ss(t,"onChange"),0<t.length&&(n=new tl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Br=null,Gr=null;function M0(e){jp(e,0)}function Ns(e){var t=In(e);if(Hd(t))return e}function R0(e,t){if(e==="change")return t}var _p=!1;if(xt){var ei;if(xt){var ti="oninput"in document;if(!ti){var uc=document.createElement("div");uc.setAttribute("oninput","return;"),ti=typeof uc.oninput=="function"}ei=ti}else ei=!1;_p=ei&&(!document.documentMode||9<document.documentMode)}function mc(){Br&&(Br.detachEvent("onpropertychange",vp),Gr=Br=null)}function vp(e){if(e.propertyName==="value"&&Ns(Gr)){var t=[];kp(t,Gr,e,Ja(e)),Zd(M0,t)}}function z0(e,t,n){e==="focusin"?(mc(),Br=t,Gr=n,Br.attachEvent("onpropertychange",vp)):e==="focusout"&&mc()}function O0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ns(Gr)}function H0(e,t){if(e==="click")return Ns(t)}function G0(e,t){if(e==="input"||e==="change")return Ns(t)}function U0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:U0;function Ur(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ti.call(t,o)||!rt(e[o],t[o]))return!1}return!0}function hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fc(e,t){var n=hc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hc(n)}}function xp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yp(){for(var e=window,t=Zo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zo(e.document)}return t}function ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function V0(e){var t=yp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xp(n.ownerDocument.documentElement,n)){if(r!==null&&ol(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=fc(n,s);var a=fc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var W0=xt&&"documentMode"in document&&11>=document.documentMode,Ln=null,Zi=null,Dr=null,qi=!1;function gc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qi||Ln==null||Ln!==Zo(r)||(r=Ln,"selectionStart"in r&&ol(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dr&&Ur(Dr,r)||(Dr=r,r=ss(Zi,"onSelect"),0<r.length&&(t=new tl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ln)))}function fo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fn={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},ni={},wp={};xt&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function js(e){if(ni[e])return ni[e];if(!Fn[e])return e;var t=Fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wp)return ni[e]=t[n];return e}var bp=js("animationend"),Sp=js("animationiteration"),Cp=js("animationstart"),Pp=js("transitionend"),Np=new Map,kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){Np.set(e,t),_n(t,[e])}for(var ri=0;ri<kc.length;ri++){var oi=kc[ri],Q0=oi.toLowerCase(),X0=oi[0].toUpperCase()+oi.slice(1);Yt(Q0,"on"+X0)}Yt(bp,"onAnimationEnd");Yt(Sp,"onAnimationIteration");Yt(Cp,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(Pp,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));function _c(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qm(r,t,void 0,e),e.currentTarget=null}function jp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&o.isPropagationStopped())break e;_c(o,l,d),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&o.isPropagationStopped())break e;_c(o,l,d),s=c}}}if(es)throw e=Yi,es=!1,Yi=null,e}function Y(e,t){var n=t[oa];n===void 0&&(n=t[oa]=new Set);var r=e+"__bubble";n.has(r)||(Bp(t,e,2,!1),n.add(r))}function si(e,t,n){var r=0;t&&(r|=4),Bp(n,e,r,t)}var go="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[go]){e[go]=!0,Id.forEach(function(n){n!=="selectionchange"&&(Y0.has(n)||si(n,!1,e),si(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[go]||(t[go]=!0,si("selectionchange",!1,t))}}function Bp(e,t,n,r){switch(up(t)){case 1:var o=l0;break;case 4:o=c0;break;default:o=qa}n=o.bind(null,t,n,e),o=void 0,!Xi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ii(e,t,n,r,o){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;a=a.return}for(;l!==null;){if(a=rn(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Zd(function(){var d=s,u=Ja(n),f=[];e:{var m=Np.get(e);if(m!==void 0){var k=tl,_=e;switch(e){case"keypress":if(zo(n)===0)break e;case"keydown":case"keyup":k=S0;break;case"focusin":_="focus",k=qs;break;case"focusout":_="blur",k=qs;break;case"beforeblur":case"afterblur":k=qs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=u0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=N0;break;case bp:case Sp:case Cp:k=f0;break;case Pp:k=B0;break;case"scroll":k=d0;break;case"wheel":k=A0;break;case"copy":case"cut":case"paste":k=k0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=lc}var v=(t&4)!==0,E=!v&&e==="scroll",h=v?m!==null?m+"Capture":null:m;v=[];for(var p=d,g;p!==null;){g=p;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=Rr(p,h),x!=null&&v.push(Wr(p,x,g)))),E)break;p=p.return}0<v.length&&(m=new k(m,_,null,n,u),f.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&n!==Wi&&(_=n.relatedTarget||n.fromElement)&&(rn(_)||_[yt]))break e;if((k||m)&&(m=u.window===u?u:(m=u.ownerDocument)?m.defaultView||m.parentWindow:window,k?(_=n.relatedTarget||n.toElement,k=d,_=_?rn(_):null,_!==null&&(E=vn(_),_!==E||_.tag!==5&&_.tag!==6)&&(_=null)):(k=null,_=d),k!==_)){if(v=ic,x="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=lc,x="onPointerLeave",h="onPointerEnter",p="pointer"),E=k==null?m:In(k),g=_==null?m:In(_),m=new v(x,p+"leave",k,n,u),m.target=E,m.relatedTarget=g,x=null,rn(u)===d&&(v=new v(h,p+"enter",_,n,u),v.target=g,v.relatedTarget=E,x=v),E=x,k&&_)t:{for(v=k,h=_,p=0,g=v;g;g=Sn(g))p++;for(g=0,x=h;x;x=Sn(x))g++;for(;0<p-g;)v=Sn(v),p--;for(;0<g-p;)h=Sn(h),g--;for(;p--;){if(v===h||h!==null&&v===h.alternate)break t;v=Sn(v),h=Sn(h)}v=null}else v=null;k!==null&&vc(f,m,k,v,!1),_!==null&&E!==null&&vc(f,E,_,v,!0)}}e:{if(m=d?In(d):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var S=R0;else if(pc(m))if(_p)S=G0;else{S=O0;var N=z0}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=H0);if(S&&(S=S(e,d))){kp(f,S,n,u);break e}N&&N(e,m,d),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&Oi(m,"number",m.value)}switch(N=d?In(d):window,e){case"focusin":(pc(N)||N.contentEditable==="true")&&(Ln=N,Zi=d,Dr=null);break;case"focusout":Dr=Zi=Ln=null;break;case"mousedown":qi=!0;break;case"contextmenu":case"mouseup":case"dragend":qi=!1,gc(f,n,u);break;case"selectionchange":if(W0)break;case"keydown":case"keyup":gc(f,n,u)}var P;if(rl)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Tn?fp(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(hp&&n.locale!=="ko"&&(Tn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Tn&&(P=mp()):(Ft=u,el="value"in Ft?Ft.value:Ft.textContent,Tn=!0)),N=ss(d,j),0<N.length&&(j=new ac(j,e,null,n,u),f.push({event:j,listeners:N}),P?j.data=P:(P=gp(n),P!==null&&(j.data=P)))),(P=T0?L0(e,n):F0(e,n))&&(d=ss(d,"onBeforeInput"),0<d.length&&(u=new ac("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:d}),u.data=P))}jp(f,t)})}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ss(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=Rr(e,n),s!=null&&r.unshift(Wr(e,s,o)),s=Rr(e,t),s!=null&&r.push(Wr(e,s,o))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vc(e,t,n,r,o){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,o?(c=Rr(n,s),c!=null&&a.unshift(Wr(n,c,l))):o||(c=Rr(n,s),c!=null&&a.push(Wr(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var J0=/\r\n?/g,$0=/\u0000|\uFFFD/g;function xc(e){return(typeof e=="string"?e:""+e).replace(J0,`
`).replace($0,"")}function ko(e,t,n){if(t=xc(t),xc(e)!==t&&n)throw Error(w(425))}function is(){}var ea=null,ta=null;function na(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ra=typeof setTimeout=="function"?setTimeout:void 0,K0=typeof clearTimeout=="function"?clearTimeout:void 0,yc=typeof Promise=="function"?Promise:void 0,Z0=typeof queueMicrotask=="function"?queueMicrotask:typeof yc<"u"?function(e){return yc.resolve(null).then(e).catch(q0)}:ra;function q0(e){setTimeout(function(){throw e})}function ai(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Hr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Hr(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sr=Math.random().toString(36).slice(2),lt="__reactFiber$"+sr,Qr="__reactProps$"+sr,yt="__reactContainer$"+sr,oa="__reactEvents$"+sr,eh="__reactListeners$"+sr,th="__reactHandles$"+sr;function rn(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wc(e);e!==null;){if(n=e[lt])return n;e=wc(e)}return t}e=n,n=e.parentNode}return null}function ro(e){return e=e[lt]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Bs(e){return e[Qr]||null}var sa=[],Mn=-1;function Jt(e){return{current:e}}function J(e){0>Mn||(e.current=sa[Mn],sa[Mn]=null,Mn--)}function X(e,t){Mn++,sa[Mn]=e.current,e.current=t}var Xt={},ve=Jt(Xt),Ae=Jt(!1),un=Xt;function Kn(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ee(e){return e=e.childContextTypes,e!=null}function as(){J(Ae),J(ve)}function bc(e,t,n){if(ve.current!==Xt)throw Error(w(168));X(ve,t),X(Ae,n)}function Dp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(w(108,zm(e)||"Unknown",o));return te({},n,r)}function ls(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,un=ve.current,X(ve,e),X(Ae,Ae.current),!0}function Sc(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Dp(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,J(Ae),J(ve),X(ve,e)):J(Ae),X(Ae,n)}var gt=null,Ds=!1,li=!1;function Ap(e){gt===null?gt=[e]:gt.push(e)}function nh(e){Ds=!0,Ap(e)}function $t(){if(!li&&gt!==null){li=!0;var e=0,t=V;try{var n=gt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}gt=null,Ds=!1}catch(o){throw gt!==null&&(gt=gt.slice(e+1)),np($a,$t),o}finally{V=t,li=!1}}return null}var Rn=[],zn=0,cs=null,ds=0,We=[],Qe=0,mn=null,kt=1,_t="";function en(e,t){Rn[zn++]=ds,Rn[zn++]=cs,cs=e,ds=t}function Ep(e,t,n){We[Qe++]=kt,We[Qe++]=_t,We[Qe++]=mn,mn=e;var r=kt;e=_t;var o=32-tt(r)-1;r&=~(1<<o),n+=1;var s=32-tt(t)+o;if(30<s){var a=o-o%5;s=(r&(1<<a)-1).toString(32),r>>=a,o-=a,kt=1<<32-tt(t)+o|n<<o|r,_t=s+e}else kt=1<<s|n<<o|r,_t=e}function sl(e){e.return!==null&&(en(e,1),Ep(e,1,0))}function il(e){for(;e===cs;)cs=Rn[--zn],Rn[zn]=null,ds=Rn[--zn],Rn[zn]=null;for(;e===mn;)mn=We[--Qe],We[Qe]=null,_t=We[--Qe],We[Qe]=null,kt=We[--Qe],We[Qe]=null}var Re=null,Ie=null,K=!1,et=null;function Tp(e,t){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Cc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Ie=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Ie=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:kt,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Ie=null,!0):!1;default:return!1}}function ia(e){return(e.mode&1)!==0&&(e.flags&128)===0}function aa(e){if(K){var t=Ie;if(t){var n=t;if(!Cc(e,t)){if(ia(e))throw Error(w(418));t=Ht(n.nextSibling);var r=Re;t&&Cc(e,t)?Tp(r,n):(e.flags=e.flags&-4097|2,K=!1,Re=e)}}else{if(ia(e))throw Error(w(418));e.flags=e.flags&-4097|2,K=!1,Re=e}}}function Pc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function _o(e){if(e!==Re)return!1;if(!K)return Pc(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!na(e.type,e.memoizedProps)),t&&(t=Ie)){if(ia(e))throw Lp(),Error(w(418));for(;t;)Tp(e,t),t=Ht(t.nextSibling)}if(Pc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ie=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ie=null}}else Ie=Re?Ht(e.stateNode.nextSibling):null;return!0}function Lp(){for(var e=Ie;e;)e=Ht(e.nextSibling)}function Zn(){Ie=Re=null,K=!1}function al(e){et===null?et=[e]:et.push(e)}var rh=St.ReactCurrentBatchConfig;function ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var o=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=o.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nc(e){var t=e._init;return t(e._payload)}function Fp(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=Wt(h,p),h.index=0,h.sibling=null,h}function s(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,g,x){return p===null||p.tag!==6?(p=fi(g,h.mode,x),p.return=h,p):(p=o(p,g),p.return=h,p)}function c(h,p,g,x){var S=g.type;return S===En?u(h,p,g.props.children,x,g.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Bt&&Nc(S)===p.type)?(x=o(p,g.props),x.ref=ur(h,p,g),x.return=h,x):(x=Qo(g.type,g.key,g.props,null,h.mode,x),x.ref=ur(h,p,g),x.return=h,x)}function d(h,p,g,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=gi(g,h.mode,x),p.return=h,p):(p=o(p,g.children||[]),p.return=h,p)}function u(h,p,g,x,S){return p===null||p.tag!==7?(p=dn(g,h.mode,x,S),p.return=h,p):(p=o(p,g),p.return=h,p)}function f(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=fi(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ao:return g=Qo(p.type,p.key,p.props,null,h.mode,g),g.ref=ur(h,null,p),g.return=h,g;case An:return p=gi(p,h.mode,g),p.return=h,p;case Bt:var x=p._init;return f(h,x(p._payload),g)}if(_r(p)||ar(p))return p=dn(p,h.mode,g,null),p.return=h,p;vo(h,p)}return null}function m(h,p,g,x){var S=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:l(h,p,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ao:return g.key===S?c(h,p,g,x):null;case An:return g.key===S?d(h,p,g,x):null;case Bt:return S=g._init,m(h,p,S(g._payload),x)}if(_r(g)||ar(g))return S!==null?null:u(h,p,g,x,null);vo(h,g)}return null}function k(h,p,g,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,l(p,h,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ao:return h=h.get(x.key===null?g:x.key)||null,c(p,h,x,S);case An:return h=h.get(x.key===null?g:x.key)||null,d(p,h,x,S);case Bt:var N=x._init;return k(h,p,g,N(x._payload),S)}if(_r(x)||ar(x))return h=h.get(g)||null,u(p,h,x,S,null);vo(p,x)}return null}function _(h,p,g,x){for(var S=null,N=null,P=p,j=p=0,W=null;P!==null&&j<g.length;j++){P.index>j?(W=P,P=null):W=P.sibling;var F=m(h,P,g[j],x);if(F===null){P===null&&(P=W);break}e&&P&&F.alternate===null&&t(h,P),p=s(F,p,j),N===null?S=F:N.sibling=F,N=F,P=W}if(j===g.length)return n(h,P),K&&en(h,j),S;if(P===null){for(;j<g.length;j++)P=f(h,g[j],x),P!==null&&(p=s(P,p,j),N===null?S=P:N.sibling=P,N=P);return K&&en(h,j),S}for(P=r(h,P);j<g.length;j++)W=k(P,h,j,g[j],x),W!==null&&(e&&W.alternate!==null&&P.delete(W.key===null?j:W.key),p=s(W,p,j),N===null?S=W:N.sibling=W,N=W);return e&&P.forEach(function(xe){return t(h,xe)}),K&&en(h,j),S}function v(h,p,g,x){var S=ar(g);if(typeof S!="function")throw Error(w(150));if(g=S.call(g),g==null)throw Error(w(151));for(var N=S=null,P=p,j=p=0,W=null,F=g.next();P!==null&&!F.done;j++,F=g.next()){P.index>j?(W=P,P=null):W=P.sibling;var xe=m(h,P,F.value,x);if(xe===null){P===null&&(P=W);break}e&&P&&xe.alternate===null&&t(h,P),p=s(xe,p,j),N===null?S=xe:N.sibling=xe,N=xe,P=W}if(F.done)return n(h,P),K&&en(h,j),S;if(P===null){for(;!F.done;j++,F=g.next())F=f(h,F.value,x),F!==null&&(p=s(F,p,j),N===null?S=F:N.sibling=F,N=F);return K&&en(h,j),S}for(P=r(h,P);!F.done;j++,F=g.next())F=k(P,h,j,F.value,x),F!==null&&(e&&F.alternate!==null&&P.delete(F.key===null?j:F.key),p=s(F,p,j),N===null?S=F:N.sibling=F,N=F);return e&&P.forEach(function(Ge){return t(h,Ge)}),K&&en(h,j),S}function E(h,p,g,x){if(typeof g=="object"&&g!==null&&g.type===En&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ao:e:{for(var S=g.key,N=p;N!==null;){if(N.key===S){if(S=g.type,S===En){if(N.tag===7){n(h,N.sibling),p=o(N,g.props.children),p.return=h,h=p;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Bt&&Nc(S)===N.type){n(h,N.sibling),p=o(N,g.props),p.ref=ur(h,N,g),p.return=h,h=p;break e}n(h,N);break}else t(h,N);N=N.sibling}g.type===En?(p=dn(g.props.children,h.mode,x,g.key),p.return=h,h=p):(x=Qo(g.type,g.key,g.props,null,h.mode,x),x.ref=ur(h,p,g),x.return=h,h=x)}return a(h);case An:e:{for(N=g.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=o(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=gi(g,h.mode,x),p.return=h,h=p}return a(h);case Bt:return N=g._init,E(h,p,N(g._payload),x)}if(_r(g))return _(h,p,g,x);if(ar(g))return v(h,p,g,x);vo(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,g),p.return=h,h=p):(n(h,p),p=fi(g,h.mode,x),p.return=h,h=p),a(h)):n(h,p)}return E}var qn=Fp(!0),Ip=Fp(!1),ps=Jt(null),us=null,On=null,ll=null;function cl(){ll=On=us=null}function dl(e){var t=ps.current;J(ps),e._currentValue=t}function la(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yn(e,t){us=e,ll=On=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(ll!==e)if(e={context:e,memoizedValue:t,next:null},On===null){if(us===null)throw Error(w(308));On=e,us.dependencies={lanes:0,firstContext:e}}else On=On.next=e;return t}var on=null;function pl(e){on===null?on=[e]:on.push(e)}function Mp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,pl(t)):(n.next=o.next,o.next=n),t.interleaved=n,wt(e,r)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,wt(e,n)}return o=r.interleaved,o===null?(t.next=t,pl(r)):(t.next=o.next,o.next=t),r.interleaved=t,wt(e,n)}function Oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ka(e,n)}}function jc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ms(e,t,n,r){var o=e.updateQueue;Dt=!1;var s=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var c=l,d=c.next;c.next=null,a===null?s=d:a.next=d,a=c;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==a&&(l===null?u.firstBaseUpdate=d:l.next=d,u.lastBaseUpdate=c))}if(s!==null){var f=o.baseState;a=0,u=d=c=null,l=s;do{var m=l.lane,k=l.eventTime;if((r&m)===m){u!==null&&(u=u.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=e,v=l;switch(m=t,k=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){f=_.call(k,f,m);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,m=typeof _=="function"?_.call(k,f,m):_,m==null)break e;f=te({},f,m);break e;case 2:Dt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else k={eventTime:k,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(d=u=k,c=f):u=u.next=k,a|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(u===null&&(c=f),o.baseState=c,o.firstBaseUpdate=d,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);fn|=a,e.lanes=a,e.memoizedState=f}}function Bc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(w(191,o));o.call(r)}}}var oo={},dt=Jt(oo),Xr=Jt(oo),Yr=Jt(oo);function sn(e){if(e===oo)throw Error(w(174));return e}function ml(e,t){switch(X(Yr,t),X(Xr,e),X(dt,oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gi(t,e)}J(dt),X(dt,t)}function er(){J(dt),J(Xr),J(Yr)}function zp(e){sn(Yr.current);var t=sn(dt.current),n=Gi(t,e.type);t!==n&&(X(Xr,e),X(dt,n))}function hl(e){Xr.current===e&&(J(dt),J(Xr))}var q=Jt(0);function hs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ci=[];function fl(){for(var e=0;e<ci.length;e++)ci[e]._workInProgressVersionPrimary=null;ci.length=0}var Ho=St.ReactCurrentDispatcher,di=St.ReactCurrentBatchConfig,hn=0,ee=null,le=null,de=null,fs=!1,Ar=!1,Jr=0,oh=0;function ge(){throw Error(w(321))}function gl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function kl(e,t,n,r,o,s){if(hn=s,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ho.current=e===null||e.memoizedState===null?lh:ch,e=n(r,o),Ar){s=0;do{if(Ar=!1,Jr=0,25<=s)throw Error(w(301));s+=1,de=le=null,t.updateQueue=null,Ho.current=dh,e=n(r,o)}while(Ar)}if(Ho.current=gs,t=le!==null&&le.next!==null,hn=0,de=le=ee=null,fs=!1,t)throw Error(w(300));return e}function _l(){var e=Jr!==0;return Jr=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?ee.memoizedState=de=e:de=de.next=e,de}function $e(){if(le===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=de===null?ee.memoizedState:de.next;if(t!==null)de=t,le=e;else{if(e===null)throw Error(w(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},de===null?ee.memoizedState=de=e:de=de.next=e}return de}function $r(e,t){return typeof t=="function"?t(e):t}function pi(e){var t=$e(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,s=n.pending;if(s!==null){if(o!==null){var a=o.next;o.next=s.next,s.next=a}r.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,r=r.baseState;var l=a=null,c=null,d=s;do{var u=d.lane;if((hn&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,ee.lanes|=u,fn|=u}d=d.next}while(d!==null&&d!==s);c===null?a=r:c.next=l,rt(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do s=o.lane,ee.lanes|=s,fn|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ui(e){var t=$e(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do s=e(s,a.action),a=a.next;while(a!==o);rt(s,t.memoizedState)||(De=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Op(){}function Hp(e,t){var n=ee,r=$e(),o=t(),s=!rt(r.memoizedState,o);if(s&&(r.memoizedState=o,De=!0),r=r.queue,vl(Vp.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Kr(9,Up.bind(null,n,r,o,t),void 0,null),pe===null)throw Error(w(349));hn&30||Gp(n,t,o)}return o}function Gp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Up(e,t,n,r){t.value=n,t.getSnapshot=r,Wp(t)&&Qp(e)}function Vp(e,t,n){return n(function(){Wp(t)&&Qp(e)})}function Wp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function Qp(e){var t=wt(e,1);t!==null&&nt(t,e,1,-1)}function Dc(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=ah.bind(null,ee,e),[t.memoizedState,e]}function Kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Xp(){return $e().memoizedState}function Go(e,t,n,r){var o=at();ee.flags|=e,o.memoizedState=Kr(1|t,n,void 0,r===void 0?null:r)}function As(e,t,n,r){var o=$e();r=r===void 0?null:r;var s=void 0;if(le!==null){var a=le.memoizedState;if(s=a.destroy,r!==null&&gl(r,a.deps)){o.memoizedState=Kr(t,n,s,r);return}}ee.flags|=e,o.memoizedState=Kr(1|t,n,s,r)}function Ac(e,t){return Go(8390656,8,e,t)}function vl(e,t){return As(2048,8,e,t)}function Yp(e,t){return As(4,2,e,t)}function Jp(e,t){return As(4,4,e,t)}function $p(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kp(e,t,n){return n=n!=null?n.concat([e]):null,As(4,4,$p.bind(null,t,e),n)}function xl(){}function Zp(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qp(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function eu(e,t,n){return hn&21?(rt(n,t)||(n=sp(),ee.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function sh(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=di.transition;di.transition={};try{e(!1),t()}finally{V=n,di.transition=r}}function tu(){return $e().memoizedState}function ih(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nu(e))ru(t,n);else if(n=Mp(e,t,n,r),n!==null){var o=Se();nt(n,e,r,o),ou(n,t,r)}}function ah(e,t,n){var r=Vt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nu(e))ru(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(o.hasEagerState=!0,o.eagerState=l,rt(l,a)){var c=t.interleaved;c===null?(o.next=o,pl(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Mp(e,t,o,r),n!==null&&(o=Se(),nt(n,e,r,o),ou(n,t,r))}}function nu(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function ru(e,t){Ar=fs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ou(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ka(e,n)}}var gs={readContext:Je,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},lh={readContext:Je,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Ac,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Go(4194308,4,$p.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Go(4194308,4,e,t)},useInsertionEffect:function(e,t){return Go(4,2,e,t)},useMemo:function(e,t){var n=at();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=at();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ih.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:Dc,useDebugValue:xl,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=Dc(!1),t=e[0];return e=sh.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,o=at();if(K){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),pe===null)throw Error(w(349));hn&30||Gp(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,Ac(Vp.bind(null,r,s,e),[e]),r.flags|=2048,Kr(9,Up.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=at(),t=pe.identifierPrefix;if(K){var n=_t,r=kt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=oh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ch={readContext:Je,useCallback:Zp,useContext:Je,useEffect:vl,useImperativeHandle:Kp,useInsertionEffect:Yp,useLayoutEffect:Jp,useMemo:qp,useReducer:pi,useRef:Xp,useState:function(){return pi($r)},useDebugValue:xl,useDeferredValue:function(e){var t=$e();return eu(t,le.memoizedState,e)},useTransition:function(){var e=pi($r)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Op,useSyncExternalStore:Hp,useId:tu,unstable_isNewReconciler:!1},dh={readContext:Je,useCallback:Zp,useContext:Je,useEffect:vl,useImperativeHandle:Kp,useInsertionEffect:Yp,useLayoutEffect:Jp,useMemo:qp,useReducer:ui,useRef:Xp,useState:function(){return ui($r)},useDebugValue:xl,useDeferredValue:function(e){var t=$e();return le===null?t.memoizedState=e:eu(t,le.memoizedState,e)},useTransition:function(){var e=ui($r)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Op,useSyncExternalStore:Hp,useId:tu,unstable_isNewReconciler:!1};function Ze(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ca(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Es={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Vt(e),s=vt(r,o);s.payload=t,n!=null&&(s.callback=n),t=Gt(e,s,o),t!==null&&(nt(t,e,o,r),Oo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Vt(e),s=vt(r,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Gt(e,s,o),t!==null&&(nt(t,e,o,r),Oo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Vt(e),o=vt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Gt(e,o,r),t!==null&&(nt(t,e,r,n),Oo(t,e,r))}};function Ec(e,t,n,r,o,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Ur(n,r)||!Ur(o,s):!0}function su(e,t,n){var r=!1,o=Xt,s=t.contextType;return typeof s=="object"&&s!==null?s=Je(s):(o=Ee(t)?un:ve.current,r=t.contextTypes,s=(r=r!=null)?Kn(e,o):Xt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Es,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function Tc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Es.enqueueReplaceState(t,t.state,null)}function da(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ul(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=Je(s):(s=Ee(t)?un:ve.current,o.context=Kn(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ca(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Es.enqueueReplaceState(o,o.state,null),ms(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,t){try{var n="",r=t;do n+=Rm(r),r=r.return;while(r);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function mi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function pa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ph=typeof WeakMap=="function"?WeakMap:Map;function iu(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_s||(_s=!0,ya=r),pa(e,t)},n}function au(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){pa(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pa(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Lc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ph;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ch.bind(null,e,t,n),t.then(e,e))}function Fc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ic(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var uh=St.ReactCurrentOwner,De=!1;function be(e,t,n,r){t.child=e===null?Ip(t,null,n,r):qn(t,e.child,n,r)}function Mc(e,t,n,r,o){n=n.render;var s=t.ref;return Yn(t,o),r=kl(e,t,n,r,s,o),n=_l(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,bt(e,t,o)):(K&&n&&sl(t),t.flags|=1,be(e,t,r,o),t.child)}function Rc(e,t,n,r,o){if(e===null){var s=n.type;return typeof s=="function"&&!jl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,lu(e,t,s,r,o)):(e=Qo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&o)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ur,n(a,r)&&e.ref===t.ref)return bt(e,t,o)}return t.flags|=1,e=Wt(s,r),e.ref=t.ref,e.return=t,t.child=e}function lu(e,t,n,r,o){if(e!==null){var s=e.memoizedProps;if(Ur(s,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=s,(e.lanes&o)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,bt(e,t,o)}return ua(e,t,n,r,o)}function cu(e,t,n){var r=t.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Gn,Fe),Fe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Gn,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Gn,Fe),Fe|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,X(Gn,Fe),Fe|=r;return be(e,t,o,n),t.child}function du(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ua(e,t,n,r,o){var s=Ee(n)?un:ve.current;return s=Kn(t,s),Yn(t,o),n=kl(e,t,n,r,s,o),r=_l(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,bt(e,t,o)):(K&&r&&sl(t),t.flags|=1,be(e,t,n,o),t.child)}function zc(e,t,n,r,o){if(Ee(n)){var s=!0;ls(t)}else s=!1;if(Yn(t,o),t.stateNode===null)Uo(e,t),su(t,n,r),da(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Je(d):(d=Ee(n)?un:ve.current,d=Kn(t,d));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==d)&&Tc(t,a,r,d),Dt=!1;var m=t.memoizedState;a.state=m,ms(t,r,a,o),c=t.memoizedState,l!==r||m!==c||Ae.current||Dt?(typeof u=="function"&&(ca(t,n,u,r),c=t.memoizedState),(l=Dt||Ec(t,n,l,r,m,c,d))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Rp(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Ze(t.type,l),a.props=d,f=t.pendingProps,m=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Je(c):(c=Ee(n)?un:ve.current,c=Kn(t,c));var k=n.getDerivedStateFromProps;(u=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||m!==c)&&Tc(t,a,r,c),Dt=!1,m=t.memoizedState,a.state=m,ms(t,r,a,o);var _=t.memoizedState;l!==f||m!==_||Ae.current||Dt?(typeof k=="function"&&(ca(t,n,k,r),_=t.memoizedState),(d=Dt||Ec(t,n,d,r,m,_,c)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,_,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,_,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),a.props=r,a.state=_,a.context=c,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ma(e,t,n,r,s,o)}function ma(e,t,n,r,o,s){du(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Sc(t,n,!1),bt(e,t,s);r=t.stateNode,uh.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=qn(t,e.child,null,s),t.child=qn(t,null,l,s)):be(e,t,l,s),t.memoizedState=r.state,o&&Sc(t,n,!0),t.child}function pu(e){var t=e.stateNode;t.pendingContext?bc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bc(e,t.context,!1),ml(e,t.containerInfo)}function Oc(e,t,n,r,o){return Zn(),al(o),t.flags|=256,be(e,t,n,r),t.child}var ha={dehydrated:null,treeContext:null,retryLane:0};function fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function uu(e,t,n){var r=t.pendingProps,o=q.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(q,o&1),e===null)return aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Fs(a,r,0,null),e=dn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=fa(n),t.memoizedState=ha,e):yl(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return mh(e,t,a,r,l,o,n);if(s){s=r.fallback,a=t.mode,o=e.child,l=o.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Wt(o,c),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?s=Wt(l,s):(s=dn(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?fa(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=ha,r}return s=e.child,e=s.sibling,r=Wt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yl(e,t){return t=Fs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xo(e,t,n,r){return r!==null&&al(r),qn(t,e.child,null,n),e=yl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mh(e,t,n,r,o,s,a){if(n)return t.flags&256?(t.flags&=-257,r=mi(Error(w(422))),xo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,o=t.mode,r=Fs({mode:"visible",children:r.children},o,0,null),s=dn(s,o,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&qn(t,e.child,null,a),t.child.memoizedState=fa(a),t.memoizedState=ha,s);if(!(t.mode&1))return xo(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=mi(s,r,void 0),xo(e,t,a,r)}if(l=(a&e.childLanes)!==0,De||l){if(r=pe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,wt(e,o),nt(r,e,o,-1))}return Nl(),r=mi(Error(w(421))),xo(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ph.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,Ie=Ht(o.nextSibling),Re=t,K=!0,et=null,e!==null&&(We[Qe++]=kt,We[Qe++]=_t,We[Qe++]=mn,kt=e.id,_t=e.overflow,mn=t),t=yl(t,r.children),t.flags|=4096,t)}function Hc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),la(e.return,t,n)}function hi(e,t,n,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=o)}function mu(e,t,n){var r=t.pendingProps,o=r.revealOrder,s=r.tail;if(be(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hc(e,n,t);else if(e.tag===19)Hc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&hs(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),hi(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&hs(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}hi(t,!0,n,null,s);break;case"together":hi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Uo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hh(e,t,n){switch(t.tag){case 3:pu(t),Zn();break;case 5:zp(t);break;case 1:Ee(t.type)&&ls(t);break;case 4:ml(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;X(ps,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?uu(e,t,n):(X(q,q.current&1),e=bt(e,t,n),e!==null?e.sibling:null);X(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,cu(e,t,n)}return bt(e,t,n)}var hu,ga,fu,gu;hu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ga=function(){};fu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,sn(dt.current);var s=null;switch(n){case"input":o=Ri(e,o),r=Ri(e,r),s=[];break;case"select":o=te({},o,{value:void 0}),r=te({},r,{value:void 0}),s=[];break;case"textarea":o=Hi(e,o),r=Hi(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=is)}Ui(n,r);var a;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var l=o[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ir.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var c=r[d];if(l=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ir.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Y("scroll",e),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};gu=function(e,t,n,r){n!==r&&(t.flags|=4)};function mr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fh(e,t,n){var r=t.pendingProps;switch(il(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return Ee(t.type)&&as(),ke(t),null;case 3:return r=t.stateNode,er(),J(Ae),J(ve),fl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_o(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(Sa(et),et=null))),ga(e,t),ke(t),null;case 5:hl(t);var o=sn(Yr.current);if(n=t.type,e!==null&&t.stateNode!=null)fu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ke(t),null}if(e=sn(dt.current),_o(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[lt]=t,r[Qr]=s,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(o=0;o<xr.length;o++)Y(xr[o],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":$l(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":Zl(r,s),Y("invalid",r)}Ui(n,s),o=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ko(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ko(r.textContent,l,e),o=["children",""+l]):Ir.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Y("scroll",r)}switch(n){case"input":lo(r),Kl(r,s,!0);break;case"textarea":lo(r),ql(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=is)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[lt]=t,e[Qr]=r,hu(e,t,!1,!1),t.stateNode=e;e:{switch(a=Vi(n,r),n){case"dialog":Y("cancel",e),Y("close",e),o=r;break;case"iframe":case"object":case"embed":Y("load",e),o=r;break;case"video":case"audio":for(o=0;o<xr.length;o++)Y(xr[o],e);o=r;break;case"source":Y("error",e),o=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),o=r;break;case"details":Y("toggle",e),o=r;break;case"input":$l(e,r),o=Ri(e,r),Y("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=te({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Zl(e,r),o=Hi(e,r),Y("invalid",e);break;default:o=r}Ui(n,o),l=o;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Xd(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Wd(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Mr(e,c):typeof c=="number"&&Mr(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ir.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Y("scroll",e):c!=null&&Wa(e,s,c,a))}switch(n){case"input":lo(e),Kl(e,r,!1);break;case"textarea":lo(e),ql(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Qt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Vn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Vn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=is)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ke(t),null;case 6:if(e&&t.stateNode!=null)gu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=sn(Yr.current),sn(dt.current),_o(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(s=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:ko(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ko(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return ke(t),null;case 13:if(J(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ie!==null&&t.mode&1&&!(t.flags&128))Lp(),Zn(),t.flags|=98560,s=!1;else if(s=_o(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(w(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[lt]=t}else Zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ke(t),s=!1}else et!==null&&(Sa(et),et=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ce===0&&(ce=3):Nl())),t.updateQueue!==null&&(t.flags|=4),ke(t),null);case 4:return er(),ga(e,t),e===null&&Vr(t.stateNode.containerInfo),ke(t),null;case 10:return dl(t.type._context),ke(t),null;case 17:return Ee(t.type)&&as(),ke(t),null;case 19:if(J(q),s=t.memoizedState,s===null)return ke(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)mr(s,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=hs(e),a!==null){for(t.flags|=128,mr(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(q,q.current&1|2),t.child}e=e.sibling}s.tail!==null&&oe()>nr&&(t.flags|=128,r=!0,mr(s,!1),t.lanes=4194304)}else{if(!r)if(e=hs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!K)return ke(t),null}else 2*oe()-s.renderingStartTime>nr&&n!==1073741824&&(t.flags|=128,r=!0,mr(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=oe(),t.sibling=null,n=q.current,X(q,r?n&1|2:n&1),t):(ke(t),null);case 22:case 23:return Pl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Fe&1073741824&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function gh(e,t){switch(il(t),t.tag){case 1:return Ee(t.type)&&as(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(),J(Ae),J(ve),fl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hl(t),null;case 13:if(J(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(q),null;case 4:return er(),null;case 10:return dl(t.type._context),null;case 22:case 23:return Pl(),null;case 24:return null;default:return null}}var yo=!1,_e=!1,kh=typeof WeakSet=="function"?WeakSet:Set,C=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function ka(e,t,n){try{n()}catch(r){ne(e,t,r)}}var Gc=!1;function _h(e,t){if(ea=rs,e=yp(),ol(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,d=0,u=0,f=e,m=null;t:for(;;){for(var k;f!==n||o!==0&&f.nodeType!==3||(l=a+o),f!==s||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(k=f.firstChild)!==null;)m=f,f=k;for(;;){if(f===e)break t;if(m===n&&++d===o&&(l=a),m===s&&++u===r&&(c=a),(k=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=k}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},rs=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,E=_.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ze(t.type,v),E);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){ne(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return _=Gc,Gc=!1,_}function Er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&ka(t,n,s)}o=o.next}while(o!==r)}}function Ts(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function _a(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ku(e){var t=e.alternate;t!==null&&(e.alternate=null,ku(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[Qr],delete t[oa],delete t[eh],delete t[th])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _u(e){return e.tag===5||e.tag===3||e.tag===4}function Uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=is));else if(r!==4&&(e=e.child,e!==null))for(va(e,t,n),e=e.sibling;e!==null;)va(e,t,n),e=e.sibling}function xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xa(e,t,n),e=e.sibling;e!==null;)xa(e,t,n),e=e.sibling}var me=null,qe=!1;function Nt(e,t,n){for(n=n.child;n!==null;)vu(e,t,n),n=n.sibling}function vu(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Cs,n)}catch{}switch(n.tag){case 5:_e||Hn(n,t);case 6:var r=me,o=qe;me=null,Nt(e,t,n),me=r,qe=o,me!==null&&(qe?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(qe?(e=me,n=n.stateNode,e.nodeType===8?ai(e.parentNode,n):e.nodeType===1&&ai(e,n),Hr(e)):ai(me,n.stateNode));break;case 4:r=me,o=qe,me=n.stateNode.containerInfo,qe=!0,Nt(e,t,n),me=r,qe=o;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ka(n,t,a),o=o.next}while(o!==r)}Nt(e,t,n);break;case 1:if(!_e&&(Hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ne(n,t,l)}Nt(e,t,n);break;case 21:Nt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Nt(e,t,n),_e=r):Nt(e,t,n);break;default:Nt(e,t,n)}}function Vc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kh),t.forEach(function(r){var o=Nh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:me=l.stateNode,qe=!1;break e;case 3:me=l.stateNode.containerInfo,qe=!0;break e;case 4:me=l.stateNode.containerInfo,qe=!0;break e}l=l.return}if(me===null)throw Error(w(160));vu(s,a,o),me=null,qe=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(d){ne(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xu(t,e),t=t.sibling}function xu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),it(e),r&4){try{Er(3,e,e.return),Ts(3,e)}catch(v){ne(e,e.return,v)}try{Er(5,e,e.return)}catch(v){ne(e,e.return,v)}}break;case 1:Ke(t,e),it(e),r&512&&n!==null&&Hn(n,n.return);break;case 5:if(Ke(t,e),it(e),r&512&&n!==null&&Hn(n,n.return),e.flags&32){var o=e.stateNode;try{Mr(o,"")}catch(v){ne(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Gd(o,s),Vi(l,a);var d=Vi(l,s);for(a=0;a<c.length;a+=2){var u=c[a],f=c[a+1];u==="style"?Xd(o,f):u==="dangerouslySetInnerHTML"?Wd(o,f):u==="children"?Mr(o,f):Wa(o,u,f,d)}switch(l){case"input":zi(o,s);break;case"textarea":Ud(o,s);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?Vn(o,!!s.multiple,k,!1):m!==!!s.multiple&&(s.defaultValue!=null?Vn(o,!!s.multiple,s.defaultValue,!0):Vn(o,!!s.multiple,s.multiple?[]:"",!1))}o[Qr]=s}catch(v){ne(e,e.return,v)}}break;case 6:if(Ke(t,e),it(e),r&4){if(e.stateNode===null)throw Error(w(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(v){ne(e,e.return,v)}}break;case 3:if(Ke(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(v){ne(e,e.return,v)}break;case 4:Ke(t,e),it(e);break;case 13:Ke(t,e),it(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(Sl=oe())),r&4&&Vc(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(d=_e)||u,Ke(t,e),_e=d):Ke(t,e),it(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(C=e,u=e.child;u!==null;){for(f=C=u;C!==null;){switch(m=C,k=m.child,m.tag){case 0:case 11:case 14:case 15:Er(4,m,m.return);break;case 1:Hn(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(v){ne(r,n,v)}}break;case 5:Hn(m,m.return);break;case 22:if(m.memoizedState!==null){Qc(f);continue}}k!==null?(k.return=m,C=k):Qc(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{o=f.stateNode,d?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Qd("display",a))}catch(v){ne(e,e.return,v)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(v){ne(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ke(t,e),it(e),r&4&&Vc(e);break;case 21:break;default:Ke(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_u(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Mr(o,""),r.flags&=-33);var s=Uc(e);xa(e,s,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Uc(e);va(e,l,a);break;default:throw Error(w(161))}}catch(c){ne(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vh(e,t,n){C=e,yu(e)}function yu(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var o=C,s=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||yo;if(!a){var l=o.alternate,c=l!==null&&l.memoizedState!==null||_e;l=yo;var d=_e;if(yo=a,(_e=c)&&!d)for(C=o;C!==null;)a=C,c=a.child,a.tag===22&&a.memoizedState!==null?Xc(o):c!==null?(c.return=a,C=c):Xc(o);for(;s!==null;)C=s,yu(s),s=s.sibling;C=o,yo=l,_e=d}Wc(e)}else o.subtreeFlags&8772&&s!==null?(s.return=o,C=s):Wc(e)}}function Wc(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||Ts(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ze(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Bc(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Hr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}_e||t.flags&512&&_a(t)}catch(m){ne(t,t.return,m)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Qc(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Xc(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ts(4,t)}catch(c){ne(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){ne(t,o,c)}}var s=t.return;try{_a(t)}catch(c){ne(t,s,c)}break;case 5:var a=t.return;try{_a(t)}catch(c){ne(t,a,c)}}}catch(c){ne(t,t.return,c)}if(t===e){C=null;break}var l=t.sibling;if(l!==null){l.return=t.return,C=l;break}C=t.return}}var xh=Math.ceil,ks=St.ReactCurrentDispatcher,wl=St.ReactCurrentOwner,Ye=St.ReactCurrentBatchConfig,z=0,pe=null,ie=null,he=0,Fe=0,Gn=Jt(0),ce=0,Zr=null,fn=0,Ls=0,bl=0,Tr=null,Be=null,Sl=0,nr=1/0,ht=null,_s=!1,ya=null,Ut=null,wo=!1,It=null,vs=0,Lr=0,wa=null,Vo=-1,Wo=0;function Se(){return z&6?oe():Vo!==-1?Vo:Vo=oe()}function Vt(e){return e.mode&1?z&2&&he!==0?he&-he:rh.transition!==null?(Wo===0&&(Wo=sp()),Wo):(e=V,e!==0||(e=window.event,e=e===void 0?16:up(e.type)),e):1}function nt(e,t,n,r){if(50<Lr)throw Lr=0,wa=null,Error(w(185));to(e,n,r),(!(z&2)||e!==pe)&&(e===pe&&(!(z&2)&&(Ls|=n),ce===4&&Et(e,he)),Te(e,r),n===1&&z===0&&!(t.mode&1)&&(nr=oe()+500,Ds&&$t()))}function Te(e,t){var n=e.callbackNode;r0(e,t);var r=ns(e,e===pe?he:0);if(r===0)n!==null&&nc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&nc(n),t===1)e.tag===0?nh(Yc.bind(null,e)):Ap(Yc.bind(null,e)),Z0(function(){!(z&6)&&$t()}),n=null;else{switch(ip(r)){case 1:n=$a;break;case 4:n=rp;break;case 16:n=ts;break;case 536870912:n=op;break;default:n=ts}n=Bu(n,wu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wu(e,t){if(Vo=-1,Wo=0,z&6)throw Error(w(327));var n=e.callbackNode;if(Jn()&&e.callbackNode!==n)return null;var r=ns(e,e===pe?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xs(e,r);else{t=r;var o=z;z|=2;var s=Su();(pe!==e||he!==t)&&(ht=null,nr=oe()+500,cn(e,t));do try{bh();break}catch(l){bu(e,l)}while(!0);cl(),ks.current=s,z=o,ie!==null?t=0:(pe=null,he=0,t=ce)}if(t!==0){if(t===2&&(o=Ji(e),o!==0&&(r=o,t=ba(e,o))),t===1)throw n=Zr,cn(e,0),Et(e,r),Te(e,oe()),n;if(t===6)Et(e,r);else{if(o=e.current.alternate,!(r&30)&&!yh(o)&&(t=xs(e,r),t===2&&(s=Ji(e),s!==0&&(r=s,t=ba(e,s))),t===1))throw n=Zr,cn(e,0),Et(e,r),Te(e,oe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:tn(e,Be,ht);break;case 3:if(Et(e,r),(r&130023424)===r&&(t=Sl+500-oe(),10<t)){if(ns(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ra(tn.bind(null,e,Be,ht),t);break}tn(e,Be,ht);break;case 4:if(Et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-tt(r);s=1<<a,a=t[a],a>o&&(o=a),r&=~s}if(r=o,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xh(r/1960))-r,10<r){e.timeoutHandle=ra(tn.bind(null,e,Be,ht),r);break}tn(e,Be,ht);break;case 5:tn(e,Be,ht);break;default:throw Error(w(329))}}}return Te(e,oe()),e.callbackNode===n?wu.bind(null,e):null}function ba(e,t){var n=Tr;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=xs(e,t),e!==2&&(t=Be,Be=n,t!==null&&Sa(t)),e}function Sa(e){Be===null?Be=e:Be.push.apply(Be,e)}function yh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],s=o.getSnapshot;o=o.value;try{if(!rt(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Et(e,t){for(t&=~bl,t&=~Ls,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function Yc(e){if(z&6)throw Error(w(327));Jn();var t=ns(e,0);if(!(t&1))return Te(e,oe()),null;var n=xs(e,t);if(e.tag!==0&&n===2){var r=Ji(e);r!==0&&(t=r,n=ba(e,r))}if(n===1)throw n=Zr,cn(e,0),Et(e,t),Te(e,oe()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,Be,ht),Te(e,oe()),null}function Cl(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(nr=oe()+500,Ds&&$t())}}function gn(e){It!==null&&It.tag===0&&!(z&6)&&Jn();var t=z;z|=1;var n=Ye.transition,r=V;try{if(Ye.transition=null,V=1,e)return e()}finally{V=r,Ye.transition=n,z=t,!(z&6)&&$t()}}function Pl(){Fe=Gn.current,J(Gn)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,K0(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(il(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&as();break;case 3:er(),J(Ae),J(ve),fl();break;case 5:hl(r);break;case 4:er();break;case 13:J(q);break;case 19:J(q);break;case 10:dl(r.type._context);break;case 22:case 23:Pl()}n=n.return}if(pe=e,ie=e=Wt(e.current,null),he=Fe=t,ce=0,Zr=null,bl=Ls=fn=0,Be=Tr=null,on!==null){for(t=0;t<on.length;t++)if(n=on[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=o,r.next=a}n.pending=r}on=null}return e}function bu(e,t){do{var n=ie;try{if(cl(),Ho.current=gs,fs){for(var r=ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}fs=!1}if(hn=0,de=le=ee=null,Ar=!1,Jr=0,wl.current=null,n===null||n.return===null){ce=1,Zr=t,ie=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=he,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=l,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var m=u.alternate;m?(u.updateQueue=m.updateQueue,u.memoizedState=m.memoizedState,u.lanes=m.lanes):(u.updateQueue=null,u.memoizedState=null)}var k=Fc(a);if(k!==null){k.flags&=-257,Ic(k,a,l,s,t),k.mode&1&&Lc(s,d,t),t=k,c=d;var _=t.updateQueue;if(_===null){var v=new Set;v.add(c),t.updateQueue=v}else _.add(c);break e}else{if(!(t&1)){Lc(s,d,t),Nl();break e}c=Error(w(426))}}else if(K&&l.mode&1){var E=Fc(a);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Ic(E,a,l,s,t),al(tr(c,l));break e}}s=c=tr(c,l),ce!==4&&(ce=2),Tr===null?Tr=[s]:Tr.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=iu(s,c,t);jc(s,h);break e;case 1:l=c;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ut===null||!Ut.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var x=au(s,l,t);jc(s,x);break e}}s=s.return}while(s!==null)}Pu(n)}catch(S){t=S,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function Su(){var e=ks.current;return ks.current=gs,e===null?gs:e}function Nl(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||!(fn&268435455)&&!(Ls&268435455)||Et(pe,he)}function xs(e,t){var n=z;z|=2;var r=Su();(pe!==e||he!==t)&&(ht=null,cn(e,t));do try{wh();break}catch(o){bu(e,o)}while(!0);if(cl(),z=n,ks.current=r,ie!==null)throw Error(w(261));return pe=null,he=0,ce}function wh(){for(;ie!==null;)Cu(ie)}function bh(){for(;ie!==null&&!Ym();)Cu(ie)}function Cu(e){var t=ju(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?Pu(e):ie=t,wl.current=null}function Pu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gh(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,ie=null;return}}else if(n=fh(n,t,Fe),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ce===0&&(ce=5)}function tn(e,t,n){var r=V,o=Ye.transition;try{Ye.transition=null,V=1,Sh(e,t,n,r)}finally{Ye.transition=o,V=r}return null}function Sh(e,t,n,r){do Jn();while(It!==null);if(z&6)throw Error(w(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(o0(e,s),e===pe&&(ie=pe=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wo||(wo=!0,Bu(ts,function(){return Jn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ye.transition,Ye.transition=null;var a=V;V=1;var l=z;z|=4,wl.current=null,_h(e,n),xu(n,e),V0(ta),rs=!!ea,ta=ea=null,e.current=n,vh(n),Jm(),z=l,V=a,Ye.transition=s}else e.current=n;if(wo&&(wo=!1,It=e,vs=o),s=e.pendingLanes,s===0&&(Ut=null),Zm(n.stateNode),Te(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(_s)throw _s=!1,e=ya,ya=null,e;return vs&1&&e.tag!==0&&Jn(),s=e.pendingLanes,s&1?e===wa?Lr++:(Lr=0,wa=e):Lr=0,$t(),null}function Jn(){if(It!==null){var e=ip(vs),t=Ye.transition,n=V;try{if(Ye.transition=null,V=16>e?16:e,It===null)var r=!1;else{if(e=It,It=null,vs=0,z&6)throw Error(w(331));var o=z;for(z|=4,C=e.current;C!==null;){var s=C,a=s.child;if(C.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(C=d;C!==null;){var u=C;switch(u.tag){case 0:case 11:case 15:Er(8,u,s)}var f=u.child;if(f!==null)f.return=u,C=f;else for(;C!==null;){u=C;var m=u.sibling,k=u.return;if(ku(u),u===d){C=null;break}if(m!==null){m.return=k,C=m;break}C=k}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}C=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,C=a;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Er(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,C=h;break e}C=s.return}}var p=e.current;for(C=p;C!==null;){a=C;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,C=g;else e:for(a=p;C!==null;){if(l=C,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ts(9,l)}}catch(S){ne(l,l.return,S)}if(l===a){C=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,C=x;break e}C=l.return}}if(z=o,$t(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Cs,e)}catch{}r=!0}return r}finally{V=n,Ye.transition=t}}return!1}function Jc(e,t,n){t=tr(n,t),t=iu(e,t,1),e=Gt(e,t,1),t=Se(),e!==null&&(to(e,1,t),Te(e,t))}function ne(e,t,n){if(e.tag===3)Jc(e,e,n);else for(;t!==null;){if(t.tag===3){Jc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=tr(n,e),e=au(t,e,1),t=Gt(t,e,1),e=Se(),t!==null&&(to(t,1,e),Te(t,e));break}}t=t.return}}function Ch(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(he&n)===n&&(ce===4||ce===3&&(he&130023424)===he&&500>oe()-Sl?cn(e,0):bl|=n),Te(e,t)}function Nu(e,t){t===0&&(e.mode&1?(t=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):t=1);var n=Se();e=wt(e,t),e!==null&&(to(e,t,n),Te(e,n))}function Ph(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nu(e,n)}function Nh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Nu(e,n)}var ju;ju=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,hh(e,t,n);De=!!(e.flags&131072)}else De=!1,K&&t.flags&1048576&&Ep(t,ds,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Uo(e,t),e=t.pendingProps;var o=Kn(t,ve.current);Yn(t,n),o=kl(null,t,r,e,o,n);var s=_l();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(s=!0,ls(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ul(t),o.updater=Es,t.stateNode=o,o._reactInternals=t,da(t,r,e,n),t=ma(null,t,r,!0,s,n)):(t.tag=0,K&&s&&sl(t),be(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Uo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Bh(r),e=Ze(r,e),o){case 0:t=ua(null,t,r,e,n);break e;case 1:t=zc(null,t,r,e,n);break e;case 11:t=Mc(null,t,r,e,n);break e;case 14:t=Rc(null,t,r,Ze(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),ua(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),zc(e,t,r,o,n);case 3:e:{if(pu(t),e===null)throw Error(w(387));r=t.pendingProps,s=t.memoizedState,o=s.element,Rp(e,t),ms(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=tr(Error(w(423)),t),t=Oc(e,t,r,n,o);break e}else if(r!==o){o=tr(Error(w(424)),t),t=Oc(e,t,r,n,o);break e}else for(Ie=Ht(t.stateNode.containerInfo.firstChild),Re=t,K=!0,et=null,n=Ip(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zn(),r===o){t=bt(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return zp(t),e===null&&aa(t),r=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,a=o.children,na(r,o)?a=null:s!==null&&na(r,s)&&(t.flags|=32),du(e,t),be(e,t,a,n),t.child;case 6:return e===null&&aa(t),null;case 13:return uu(e,t,n);case 4:return ml(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qn(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),Mc(e,t,r,o,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,s=t.memoizedProps,a=o.value,X(ps,r._currentValue),r._currentValue=a,s!==null)if(rt(s.value,a)){if(s.children===o.children&&!Ae.current){t=bt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=vt(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),la(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(w(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),la(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}be(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Yn(t,n),o=Je(o),r=r(o),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,o=Ze(r,t.pendingProps),o=Ze(r.type,o),Rc(e,t,r,o,n);case 15:return lu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),Uo(e,t),t.tag=1,Ee(r)?(e=!0,ls(t)):e=!1,Yn(t,n),su(t,r,o),da(t,r,o,n),ma(null,t,r,!0,e,n);case 19:return mu(e,t,n);case 22:return cu(e,t,n)}throw Error(w(156,t.tag))};function Bu(e,t){return np(e,t)}function jh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(e,t,n,r){return new jh(e,t,n,r)}function jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bh(e){if(typeof e=="function")return jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xa)return 11;if(e===Ya)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=Xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qo(e,t,n,r,o,s){var a=2;if(r=e,typeof e=="function")jl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case En:return dn(n.children,o,s,t);case Qa:a=8,o|=8;break;case Li:return e=Xe(12,n,t,o|2),e.elementType=Li,e.lanes=s,e;case Fi:return e=Xe(13,n,t,o),e.elementType=Fi,e.lanes=s,e;case Ii:return e=Xe(19,n,t,o),e.elementType=Ii,e.lanes=s,e;case zd:return Fs(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Md:a=10;break e;case Rd:a=9;break e;case Xa:a=11;break e;case Ya:a=14;break e;case Bt:a=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Xe(a,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function dn(e,t,n,r){return e=Xe(7,e,r,t),e.lanes=n,e}function Fs(e,t,n,r){return e=Xe(22,e,r,t),e.elementType=zd,e.lanes=n,e.stateNode={isHidden:!1},e}function fi(e,t,n){return e=Xe(6,e,null,t),e.lanes=n,e}function gi(e,t,n){return t=Xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$s(0),this.expirationTimes=$s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$s(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Bl(e,t,n,r,o,s,a,l,c){return e=new Dh(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Xe(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ul(s),e}function Ah(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:An,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Du(e){if(!e)return Xt;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(Ee(n))return Dp(e,n,t)}return t}function Au(e,t,n,r,o,s,a,l,c){return e=Bl(n,r,!0,e,o,s,a,l,c),e.context=Du(null),n=e.current,r=Se(),o=Vt(n),s=vt(r,o),s.callback=t??null,Gt(n,s,o),e.current.lanes=o,to(e,o,r),Te(e,r),e}function Is(e,t,n,r){var o=t.current,s=Se(),a=Vt(o);return n=Du(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(o,t,a),e!==null&&(nt(e,o,a,s),Oo(e,o,a)),a}function ys(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $c(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Dl(e,t){$c(e,t),(e=e.alternate)&&$c(e,t)}function Eh(){return null}var Eu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Al(e){this._internalRoot=e}Ms.prototype.render=Al.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Is(e,t,null,null)};Ms.prototype.unmount=Al.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gn(function(){Is(null,e,null,null)}),t[yt]=null}};function Ms(e){this._internalRoot=e}Ms.prototype.unstable_scheduleHydration=function(e){if(e){var t=cp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&pp(e)}};function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kc(){}function Th(e,t,n,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var d=ys(a);s.call(d)}}var a=Au(t,r,e,0,null,!1,!1,"",Kc);return e._reactRootContainer=a,e[yt]=a.current,Vr(e.nodeType===8?e.parentNode:e),gn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var d=ys(c);l.call(d)}}var c=Bl(e,0,!1,null,null,!1,!1,"",Kc);return e._reactRootContainer=c,e[yt]=c.current,Vr(e.nodeType===8?e.parentNode:e),gn(function(){Is(t,c,n,r)}),c}function zs(e,t,n,r,o){var s=n._reactRootContainer;if(s){var a=s;if(typeof o=="function"){var l=o;o=function(){var c=ys(a);l.call(c)}}Is(t,a,e,o)}else a=Th(n,t,e,o,r);return ys(a)}ap=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vr(t.pendingLanes);n!==0&&(Ka(t,n|1),Te(t,oe()),!(z&6)&&(nr=oe()+500,$t()))}break;case 13:gn(function(){var r=wt(e,1);if(r!==null){var o=Se();nt(r,e,1,o)}}),Dl(e,1)}};Za=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=Se();nt(t,e,134217728,n)}Dl(e,134217728)}};lp=function(e){if(e.tag===13){var t=Vt(e),n=wt(e,t);if(n!==null){var r=Se();nt(n,e,t,r)}Dl(e,t)}};cp=function(){return V};dp=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Qi=function(e,t,n){switch(t){case"input":if(zi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Bs(r);if(!o)throw Error(w(90));Hd(r),zi(r,o)}}}break;case"textarea":Ud(e,n);break;case"select":t=n.value,t!=null&&Vn(e,!!n.multiple,t,!1)}};$d=Cl;Kd=gn;var Lh={usingClientEntryPoint:!1,Events:[ro,In,Bs,Yd,Jd,Cl]},hr={findFiberByHostInstance:rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fh={bundleType:hr.bundleType,version:hr.version,rendererPackageName:hr.rendererPackageName,rendererConfig:hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ep(e),e===null?null:e.stateNode},findFiberByHostInstance:hr.findFiberByHostInstance||Eh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{Cs=bo.inject(Fh),ct=bo}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lh;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!El(t))throw Error(w(200));return Ah(e,t,null,n)};Oe.createRoot=function(e,t){if(!El(e))throw Error(w(299));var n=!1,r="",o=Eu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Bl(e,1,!1,null,null,n,!1,r,o),e[yt]=t.current,Vr(e.nodeType===8?e.parentNode:e),new Al(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=ep(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return gn(e)};Oe.hydrate=function(e,t,n){if(!Rs(t))throw Error(w(200));return zs(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!El(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,o=!1,s="",a=Eu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Au(t,null,e,1,n??null,o,!1,s,a),e[yt]=t.current,Vr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ms(t)};Oe.render=function(e,t,n){if(!Rs(t))throw Error(w(200));return zs(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!Rs(e))throw Error(w(40));return e._reactRootContainer?(gn(function(){zs(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};Oe.unstable_batchedUpdates=Cl;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Rs(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return zs(e,t,n,!1,r)};Oe.version="18.3.1-next-f1338f8080-20240426";function Tu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tu)}catch(e){console.error(e)}}Tu(),Td.exports=Oe;var Ih=Td.exports,Lu,Zc=Ih;Lu=Zc.createRoot,Zc.hydrateRoot;const Fu="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='akar-icons:chevron-down-small'%3e%3cpath%20id='Vector'%20d='M6%2010L12%2016L18%2010'%20stroke='%23383852'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e";function yr({variant:e,title:t,defaultOpen:n=!1,children:r}){const[o,s]=D.useState(n),a=D.useId();return i.jsxs("section",{className:`ck-accordion ck-accordion--${e}`,children:[i.jsxs("button",{type:"button",className:"ck-accordion__header","aria-expanded":o,"aria-controls":a,onClick:()=>s(l=>!l),children:[i.jsx("span",{className:"ck-accordion__title",children:t}),i.jsx("img",{className:"ck-accordion__chevron",src:Fu,alt:"",width:"24",height:"24"})]}),o&&i.jsx("div",{id:a,className:"ck-accordion__content",children:r})]})}function wr({items:e}){return i.jsx("ul",{className:"ck-accordion__bullets",children:e.map(t=>i.jsx("li",{children:t},t))})}const Mh=""+new URL("brand-nykaa-art-5Z0eerBf.webp",import.meta.url).href,Iu=""+new URL("brand-nykaa-logo-B6VEV_bn.webp",import.meta.url).href,Rh=""+new URL("cat-fashion-DxWM_hoG.webp",import.meta.url).href,Mu=""+new URL("product-charger-1-Cz8z-qKg.png",import.meta.url).href,Ru=""+new URL("product-charger-2-Dvw2noLm.png",import.meta.url).href,zh=""+new URL("product-charger-3-D60TA9N-.png",import.meta.url).href,Oh=""+new URL("cat-food-C8enHurF.webp",import.meta.url).href,Hh="data:image/webp;base64,UklGRkYKAABXRUJQVlA4WAoAAAAQAAAAjwAAjwAAQUxQSFsCAAABoIRtkyHZ+iOizrVt27Ztc2dby/uc7bXNrW1jZdu2jYyM//Io4loRMQH43/9/m5VR/hUTURsGM1PBKIua2TCYivyKiA6mGGWdYKKJJ5lk4okmMIyy2qDyKyCm+OmIGRZcf6eDjzzn8uvvuufBp59/4cUXX3z+mYfuvfvGK847+vBdNlpkpgnwUx20NjUAky6x6/E3PvZR41j1T5665ZQ9l5sCgGphCsy48yUvBX82vDX/aR9F/2lr3vnzr1+19+yAliVY+LwPSNKb9wiO1YjuzUny0wuXhxSl2PEL0r0Hx93uTrb9oSUJ8AS/DY7z8R3fnwJSkzwSnQkj3pq2KjzCHHx7mqrk0SzvTPt7Cb85JM90VeHhLG9PVdVkL2X5ZB5oRYbt2JnSeTCGmran52g8tKojsjjPgBUkmOUTRo6Ib5eE1qNYkL3noHNtWD1QPY1JgxePJ6hYseUnEeNexDe7q6JiA7b/IgOj7QdYQQOmuIBpr5gZJsWIYcUn2bM4X9sQoqUosP/XbEzr5EjACjFMeB7ZmbgHr5gaVoZhpjvpwdTR+OiCGIowzP8MG9M3vrUirATDgq+wsUDnRyvDClDM+TKdJTo/WhqWTmTyR9lYpPPVWaDJxHApG8t03j2eSS7DAWwstPFoWCrFAl/0qCS8rwLLdS2dpTofGE8lj2FTOot17gFLI2L31NPjxUlEshg2YWe5zj1hWRQ30AuKhwaRHIpFvouoh8G1YDkGjGRjwY1nJRGxB+gVdb4yCSSDYt6vGRUxuCosxxK9qM4tsyzmZW3+v//+999f9wAAVlA4IMQHAAAwKQCdASqQAJAAPj0ci0SiIYj8axAQAeJZwDVJbw8zygHSWz0n1OfVy9AD9gPS99j/yUMcA8s/8J+PnZP+o/bvKmfmc6DwN9hPQC9m/l3+n8Mr+07or0TP97yt1AD+Z/2D/M/2D1vv9jzZ/ln+L/6P+P+Ar+Sfz7/d/sFxF/61miqfi7OW22+LPwfJ7QDkPLtxT3jYRsT86EfDtkA//sagOLkF5tqPUWDaIZJxK3fbrR74i6UoOmzN9whx6Qw1jDL6zu8699ub73nIESGmjGUNNP2MDXS2+4KRXX1hwmhRvxY+eVKAb7LrnH9U6ItrWouGOmSytGRXSQnmSL9b2bQ7ll+YV8OOJLFTBt2E13oYINeY/ccvUuNVePcduczvs3QFQrDv3ErA77Z8rRwNIvoMKI1p+SguqBKbnEJsBryuq4ks9BsVUDNe7t58d4pD6cZoAAD+/qU2AAAADh134hGZXW9WncnuB8uokF+SkOa7MEZPfgSQm98IzPsfH4Yww6rv/kd3OlBx8X2/C0LIRM/4IY1ppuIwdaxLQxYeUoJ7K89TEBNMfPlE2RYf8pk/L/E7b7Cihh7mrCG8xq95EGFBVzvvqcxf/mryQNjJZZDue9CccwhiDBB99to6F3klrw9iYVlMcmm2ueOibnGR7Enbaq9hR3s3bABrsTx2X+4beuh1XOtBJjeGuQ5aoPs4fv2DYSrLd0I+5/J8Rfvvni0zwS+1H1FTihzU71vmliL0sEoRJ6BzYbyq52MgRdAvl02XptzGKLeKXMTOkRTKopKXht33U7fsn0cRY2zq1WRdoSOL/1o9fgpHe3UNGfnYGALQAdtDz+Sy7YOfhtP8WNXqw/WSvYuBe973FbnBNkUUKLWfimFTv5h8AV81UwaZKDpcskYX4diCOML/eF/fdNN3aWfp8O8fMzYXz+iljXHiD8ZHxO9Wansota+Rlel207JNg6Me4MStOBzPhdxO6RvbU/D3A4ZglyftDKAXK15iswDMZXFPm20jfo3F0xyCL2iACpywZdeq+PtTDgU58R7gps7HEQzRQ88sigzlBbZcM36ynCDG8jwsWOTqt+qVC4bbo+PyUf0X1vsStwGL/aajESYMRlp5HInhNhH7BB7V8R89DANFwNAd4t2cA7i7JUygZ9GeDKrQbq739VbZYT9Qn/MsG7Ua6T1QnVNhyhvjOUTpVSdsNP8QaaGXWJbB7++m89CaZD0Cm/26W4+aXv6H3wdLnXTG6wwoCNTCpi62jEMDRoy3FllmjhESx+k2vpHKK4SROc0HnMwevw9bOIoAkbNJLaB+WeDoP0J+RerBPtGcl5Rt3qg/GaG/T6NJU+ukpeNAKoOpYWEYH+V5rPuoIqwj3kcPY1K8P+JudtZQkcbHduvDGAP/z99awcgqjSsLANSFuNypF9nDXl1iyzn3nF3EpR39YXe939xc0qKV3HavR4oUVykN+/H8fgtHC8hdNUg8A6q3P9WaNqW/rwu76PIC/63wYZpZCN8MhiRCKnbDifh5f/+94UUDEoHVoizFitaoC4w+GqmZzhmAOjiIu3abEKqleVJkZ+WT1ZLy/0VkPnwhPQ1YvN//bIEfQJgN9hyVvtjRrq/khIbgzEaUjtWuDpzrEXSTncmB+qtqgT6locNt2tz2uyYO3U8vNhTZuaZ78SjsqjFeMdokGozcXIDOfwrSkxMLqjN/dzu9GlDHP69Cvv4IOuZ+qm/0xlt9FL/Ir3Y3hmOzX7CUvxikEFn4laAYp7aSzWLj/ndnw1ACCkLhob+LwIn/jnyuMF466fawr+pa5B723B7Wb7WOzxobxAi90JGEvoB4rwEBlno0PFFStf/C4j443txb+CkKwsZZ1tcSx9Bdpz2Qy9djGrOd1Na2NoWArm8w7GkUJgpymP2nYjV0Lnzx55rs0zdMUcdRGm2YjSRtSSkfe/fjNJlH7jQw4/7Eqpqu+Uk/kd2Y7+ccqZt0qgz2YiHN0Y/mGZ3Ul+/ck8CwcQGdYlugowNAKzqifO0LnHPtciizb98sEDZi2CFNuW3NQUTun/tGvXDHbuvgl1H0OH+7aplDjI7CUBsUbpv8FAl0RzptM7hwvDhIIST59gQ/+uUlnA7jgO2cDjVL3pgzrS9/qJrP+Ya4cN16tDOegidswnevzXbWxpgPRPfBu/cgJzeCwvlmGUFLf//2O6iBWeNuYVhTgeHWxAlk+EO+hskoISP1CxBFu5j9rsF4Gz1TIQ+eQYWj08OJ8VFkWgEQ1wVnRe7QRJJtJQtwmkKrC7ISCvD/hj81YZSUk6jP5jaE3f80N+X0fpIFBdDKJPTlKH+EeP/8qJ/tZvhhq1OkYMG6ry2MkTgLLQdRWj9xcCrWZ8eEexMkpv0tWBUAYWVpw28AStIoEfOteRf4nJ3ilezYLNcD1ZY5o+Hor/+B6t7mN8Fj+8f/A8dfeeu3Kwgg76XXhoE3zsaemTy3PKXW4E4OXo1KeqscHNsRVm4x050Amo5N5A/iItZhX3pr0WUlzsMR3kgDeIZ3ThQ2WR2BSEdkhzd5hV0D6u0q+Wokui4zx4VxrfmU8fLfRX7fmgOu6m/yp9iF/7rd2hxhlw7WGRS5rSYQTqKG0u88FOITT5enh9ZWqVwg3/sD2xOwrRcxB3yeTx68QAAAAA==",Gh=""+new URL("cat-top-deals-DZN7q6VH.webp",import.meta.url).href,Uh=""+new URL("cat-travel-BKjFjJCG.webp",import.meta.url).href,Vh=""+new URL("category-beauty-BL7Ky39K.webp",import.meta.url).href,Wh=""+new URL("category-education-CS_xPih7.webp",import.meta.url).href,Qh="data:image/webp;base64,UklGRj4MAABXRUJQVlA4WAoAAAAQAAAAMQEA5gAAQUxQSHUEAAABCbVtJCk6yG76r/juGdKI/k+APDXTLBPxOaqV/gCTGOR9WrWji+gPcJqIcTQgQJ8OGOtS2qQnZShu2zaS9x88d9L+ImIC2LG+JvY0zh5yruOstNi9bkjPZJM2/f/44tRGTMAE0Llt29gmrX2f9/tKbduIbIdm1v0PGNpMO7QiZzUq6s5s22bZ/N7vuTv4UHjv+5xb1YqICci4/+//bV1oizM4bpKcGcgk55g1LdBst91oI2E8mT1B07I8le3crlxjoGnjJcwJZ516wM47jiQBZgo2u8eX/fnOy58gHCyZS685czYDu+aVx+ahYLHX5edAi9CWZ0wDz1xPsHc+muwkBtaZ5tPtImXNH6NtGPD+yNgSOUrWstcRgz/OO8vkIMET65KnsAbHae3jRDl9+ljKlDCnxz5JOUTi9q+L8fkdOEhHHqRUhKTDj0RBOmpmpox5RpTgAFwIcwBR3o1y7hgks0NBZoZpVkFGgwQjBenFSNAUBBwhQAVJRDkVJM4qSA5TjXXV0zYMNVYFUZhSdTEjBUlBKquitMtBqBhBFtvtVFtgbD3lVJRmzqovvV5Bwjw6s76sX1dbzG/f4roC/dX1ZdvY3mxUDMVI7HdkQVKMoL+BcipKqSlIjlKvHOLg2VkhKqg4cndilFIxIBPk1BRkuzlRSgUZb6PUFCQT5F4PlUNBWroIF8MOkVn4e0GQIwT99QURQdp5L1SMIItdi+IQwdrVlNMEuaf60lBfkwsyFiVR0B1YVTx3BBXD+rPBpWvaaPy+3XYUWVOYda3cBRqK2XD6k1glQlPk1Q8/kLpAUWfsTvkvm6ehZ379FhcDD5LRVJ6WpmW1zf13ZA07WDO/JKUXiYNbDz+xgQ4tmpkMfXeszthWmNyx1AncsdwJunZ1MVXWXswcazBba11hurbBVFhXmCprL64w28ZKXmqsK4wqzDb02trlbtCxJS8d0dvE/F1ZFaZj216oMdvEusJsI5vri/l7sioM8qIag9ekCtSlBI0WIKEO0LVFbbXqS53t9Zp2qtZ1ZM041fXmL0Go10vi6U/kzudNoMHxJpKvYLoXktrh5JJoE4An8zSEp5KRN0KgSbZEvzZLLV0vt9hTCIQmTjaAxja2sZEmmJz7Y/1+f82CP3/78avE0C5HTnPvTtlgEBIkpdQkJaXUCJEksjHIIGeQ1EAGAXbb5tY2tjHGE7IhSRiTBZKYVB5WuRjWsvmU3Ew7SWRnhnVbDCDJm0RbnDfRlJ6ktRnm4wUZJ8obCrI+SGJ5QVYHCRYVZH6YvsipEIlvgmS++EsugtNfy3CM0vy3yUXIepPUxkg8hYognkc5RGS98GpqC9COvLVELTG2xq5bnfLAZa2/gyZK5PT+1U6tB8ptr72S1CfOol0JLZIGwTYNS68l2OaTFy+bCWSwJvMU2mwJWDv3vm8ULMSXJ1589iF7zmAAx/769aW5H9MQbsuwxwE7j442yBM8iW1PRxMEeIJps8dW/roApBwvclI2g9o4E3VJg2Cb//1//y+DAFZQOCCiBwAAsDYAnQEqMgHnAD49Ho5EoiGhknk8WCADxLS3eKqq4ZYJIgySJeSk2dXwIOntoP5dup/KO61P0Gv2A6yn9wP3M+AD+Ff2HMROsZkZWQ/Df7vFNtbF8w/3nc3d0R6F/CX+oB/KP6p/jPu7+Lj/Q8yX0F/2vcQ/mP9W/4vAO/sWMVY3WsbrWN1rG61jdaxutY3WsbrWGjJJWJnWHdpjSDe5lrr1+832oviOnVZ1blUjGIoTYYE7ICdIMixgjXSOHUvmBT4hMhwcAmnThsgJ2PgfaWAM1ILLJEungnDZATsfBBNn88GBhAGoP6+urQ8nDZATsfHoxCuY29uQH+27NFzzH92hE10nbwMroPfP41/iGP1YNs/U3ObC2FqZ6uw0DgAvtnwA5lxvfEBy2fqbnQHhPWCzILtsUjubwHkitY3OtvC17Xte7vMnK5F1QSXoCdiXU2iD9UBVhp+kVUkEe6KFuHv5ADyQvKODWtY3NtiSpvqrIzKmR/7svAGyHmcGF8/0QonMxOwoclo8zDzGsbrCzjkX8QZjjjUp/YkolJpTPLxdH3P3XT4Ns8G2eDbPBtng2zwbZ4Ns8G2eDbPBpwAA/v+nVQAAlv7Spq91Xbr+tVJaaB6ApIGyLOEBHEEvv+w6Ex4aJ5xG8tfVISno7zLk1VOIMxK1fzTBwn9YefVXreTqD9UxeAc/9BTVglJ88u3Qfb/d/R+0HV0gB7/NE1olDNt+1b4du/d8g2x7/8N06jf5TPKI9FBghn3Wq/MHpJ+XPh8O7/mR2BX5FaVYls2Sj5vGZCTQbkQp5ij2J2MQBqh3gHMCR54AJx9eQJV0ZTUVnYYGyOudcAjynwKunU/OZ+OzY452ILTMJ4u56+bsnxniYHrFikQEXxgDgT4HtjX7XMKGpLpJq0J1omAUMqmupWrWfvqC9nDCAVrPg07F14H2XIj/ZHc9BFRfV4GqZVnB/4V7Q9P7jv8T9IBJNxsIBKWYeTuPi/qCMj4NVO7sQzoz/pkz4/Y36VlYG34kAqFoLbOvPrhrA0bALrEOFt7bFuoIr5AlE9fRfdPOkNPXtY6d8F1pPGbfosJE3JI9BnLggr73yEJHlD6EcZqb0e+nvZeWy/ZkEaLOeCr77Naa+TVgYvpYPHvwjUrnyj7PhGckAxVps/AjedWDlN9LJd0/OkAGYTSD2hOSesKS6qOkNDQUA/fk4IDjrKo0cRo9hQgUWf8FGKmdlA1Oj7DmjfeudHvcEZhuIAjYVnyfL9fP+Y+TfJfGlHwa8VAvkzSEP1KIGy6UMTHnT0EUzf/7qbJ87O59eD6GpT9ElPM3ttjA2VUj9F0vfB+p3i/Ejzmfe/MHcqHVm6hEnBObuHh9J6WjkfVrEe73VAJUeUlmE4JG6pJIcMN39Tgduf9i/5qqz26VMdOB19AotcBuhqwSt44hqzHYnLBTl6SVV0fgllvZBkxCEc5YmTSLNDAZm8DRv066Z0EMj5WN3/y+vUIs2KBCmh5loNyw5ntnuNqqqMeqtaHnctYhquRqnltNm6ccpLbbicT6sdFm8k8VA2JypXzkK04PhzX+l7akLokqUMGkNCqi5276Hj4tablHmxcU/WgJdbc45nT8zpWkw9F+bmtOx3C//pdX7nv9SHFwMNoOP6RkVIRYLfe+8nh7jmZNtOlpIjpYgGziz/BSQpQcna4h0cL3f+Wyk9f9tv5zwKWeB7t/llNJX+R/+TH34NYWj3qY39ZWW9wHWRywTDAnJzTjELndSrIOaq0VyxjZd7MlCKkD6hk90TiHkEL79Ixl8+BDuQ4BCUVOmKdFlnA2pjqK5FQDh80e785v+Pk96sR9q2jY+xqiRmC0wfM+gfH6hsMSdJxu0GAI5ibeBjkLYifiYh7XhFZifvT4gjc9h3gJLHZa2OjDFdKOaISsQyMQlgTofn7fUHNGhp9YDxlVur0QZtSLAeN+NOTXm6tKevDB56hTK+S4hTjj24kzs9cLvwbBnruJGiOyzsjTkYR6PU7l11IBEPG3xZ0TZJWOZoXvSkQ5g8rGnDkfOvXgZNamQ5Pg6qNDDP1Tj3ynfRviQOQRhTdpk7Zwnad5cW+Nf0e/0uPnwdnUd5n8Be7GaOzART4zD3RxmgFPPvuG07AVkKAAEtMSf7rSPvb4pSN4Ad/SK5TbjS+9i9OIAIGaApLSfYBpgDttKKZeghEQcz6VPPq1cMGXOCD3DmNNusmn/0/Z3boM38Q4pIlKc7RNP2tIp/jDTY9u01VJV68tkXKonSnuCnxlONegSELeUr0wiVcnDaw/fQycZPIzJOqqbB1MF6yKOGqHAYhsstV9Xc94U2kkHKKF47F1O2ne4c4Ohzb9F6qmj/1Kcy2jeR+PNQvKnXIVAb83wj3B60Dqo71m6FmP1WNvNYtWPQDCPoD7QE+xMR6SNS4Y/CrocZpxHKL/rq+mQIuetyzG/dhRXs4b6YycMuVJUigOprYj/spTeUEWTitguZVxjP+aFfxve8832rewnYr20TOWzIfl1bGdxSYJaQPot5I0Y6HbUaiaxuL3/Q5SNiIq2l0EWCAgLi39ybNuOaQBvvT3BMPb/Mokyq8Iii01O1hAVhy4dkUaAAAAAAAAAA==",zu=""+new URL("category-fashion-B7PZyObj.webp",import.meta.url).href,Xh=""+new URL("category-toys-B5bnijMO.webp",import.meta.url).href,Yh=""+new URL("flipkart-logo-Djlb2W7J.png",import.meta.url).href,Jh=""+new URL("product-headphones-blue-DWKwAVE-.png",import.meta.url).href,$h=""+new URL("product-earbuds-dark-DFYji89B.webp",import.meta.url).href,Tl=""+new URL("product-earbuds-B_nEvNNP.webp",import.meta.url).href,Kh=""+new URL("product-earrings-DqwrJV6R.webp",import.meta.url).href,Ou=""+new URL("product-headphones-dark-Dx7xngIx.webp",import.meta.url).href,Zh=""+new URL("product-headphones-tan-B0muFUkF.webp",import.meta.url).href,Hu=""+new URL("product-headphones-DKlbjxkb.webp",import.meta.url).href,qc=""+new URL("product-perfume-DrWyENEo.webp",import.meta.url).href,qh=""+new URL("product-phone-2-D54VF5rb.webp",import.meta.url).href,Os=""+new URL("product-phone-t4IfjjA5.webp",import.meta.url).href,ef=""+new URL("product-speaker-BSaDQyT9.webp",import.meta.url).href,tf=""+new URL("slide-boat-banner-BEwIKjlb.png",import.meta.url).href,Gu=""+new URL("spotlight-serum-BttJQwkH.webp",import.meta.url).href,nf=""+new URL("title-jaw-dropping-CKpGlAE1.webp",import.meta.url).href,rf=""+new URL("masthead-krazy-deals-D2O5A1aq.webp",import.meta.url).href;function ot(e){return{brand:e.brand,titleRest:e.name,imageSrc:e.image,imageAlt:e.imageAlt??`${e.brand} ${e.name}`,store:e.store,storeLogo:e.storeLogo,price:e.price,mrp:e.mrp,discountLabel:e.discountLabel,cashback:e.cashback,isNew:e.isNew}}function of(e,{categoryId:t,maxPrice:n}){return e.filter(r=>(t==null||r.category===t)&&(n==null||r.price<=n))}const Le=e=>`₹${e.toLocaleString("en-IN")}`,Uu=(e,t)=>t>0?Math.round((1-e/t)*100):0,So={headphones:Hu,earbuds:Tl},Ll={id:"deal-1",brand:"Edicon",name:"3-in-1 Floor Cleaning Brush with Wiper",image:Os,store:"Flipkart",storeLogo:Yh,price:80,mrp:799,cashback:110,isNew:!0,url:"https://www.flipkart.com/"},ki=["fashion","food-grocery","health-wellness","flights-travel"],ed=[80,180,280,380],Ca=[{id:"earphones",name:"Earphones",photo:Tl},{id:"headphones",name:"Headphones",photo:Hu},{id:"mobiles",name:"Mobile",photo:Os},{id:"chargers",name:"Charger",photo:Mu}],td=[Mu,Ru,zh],nd=["Edicon","boAt","Philips"],ae=Array.from({length:48},(e,t)=>{const n=Ca[Math.floor(t/3)%Ca.length];return{...Ll,id:`product-${t+1}`,brand:nd[t%nd.length],image:n.id==="chargers"?td[t%td.length]:n.photo,price:ed[Math.floor(t/ki.length)%ed.length],category:ki[t%ki.length],productCategory:n.id,productCategoryName:n.name,isNew:t%3===0}}),Fl=Ca.map(e=>({id:e.id,name:e.name==="Mobile"?"Mobiles":`${e.name}${e.name.endsWith("s")?"":"s"}`,icon:e.photo})),Vu=[{id:"boAt",name:"boAt",icon:Ou},{id:"Philips",name:"Philips",icon:Ru},{id:"Edicon",name:"Edicon",icon:Os},{id:"Nykaa",name:"Nykaa",icon:Iu}],Ve=(e,t,n,r,o=80,s=799)=>({...Ll,id:e,brand:t,name:n,image:r,price:o,mrp:s,isNew:!1}),Tt={"best-deals-strip":[Ve("strip-1","Edicon","3-in-1 Floor Cleaning Brush",Tl),Ve("strip-2","Boat","Headphone Floor Cleaning Brush",Zh),Ve("strip-3","Edicon","3-in-1 Floor Cleaning Brush",ef),Ve("strip-4","Edicon","3-in-1 Floor Cleaning Brush",Os)],"lowest-prices":[Ve("lowest-1","Edicon","3-in-1 Floor Cleaning Brush",Ou),Ve("lowest-2","Edicon","3-in-1 Floor Cleaning Brush",qh),Ve("lowest-3","Edicon","3-in-1 Floor Cleaning Brush",$h),Ve("lowest-4","Edicon","3-in-1 Floor Cleaning Brush",Kh)],spotlight:[Ve("spotlight-1","Edicon","3-in-1 Floor Cleaning Brush",Gu)],"flash-sale":[Ve("flash-1","Edicon","3-in-1 Floor Cleaning Brush",zu,400,800),Ve("flash-2","Edicon","3-in-1 Floor Cleaning Brush",qc,400,800),Ve("flash-3","Edicon","3-in-1 Floor Cleaning Brush",qc,400,800)]},qr=[{name:"fashion",image:zu,startingPrice:499},{name:"Beauty",image:Vh,startingPrice:499},{name:"Toys",image:Xh,startingPrice:499},{name:"Electronics",image:Qh,startingPrice:499},{name:"Education",image:Wh,startingPrice:499}],pn=[{id:"top-deals",name:`Top
Deals`,icon:Gh,showsAll:!0},{id:"fashion",name:"Fashion",icon:Rh},{id:"food-grocery",name:"Food & Grocery",icon:Oh},{id:"health-wellness",name:"Health & Wellness",icon:Hh},{id:"flights-travel",name:"Flights & Travel",icon:Uh}],Pa=[99,199,299,399],ws={logo:Iu,brandName:"Nykaa",headline:"Upto 60% off",subline:"on Luxury beauty & perfumes",art:Mh},Il=["boat-1","boat-2","boat-3"].map(()=>({image:tf,alt:"boAt headphones, starts with ₹499"})),Ml=[{id:"lowest-prices",kind:"priceList",title:"Lowest Prices Everyday",listId:"lowest-prices"},{id:"spotlight",kind:"spotlight",title:"Lowest Prices Everyday",listId:"spotlight",art:Gu},{id:"flash-sale",kind:"flashSale",title:`Flash
Sale`,listId:"flash-sale"}],Co={titleArt:nf,titleAlt:"Jaw Dropping Deals! Live Now",liveDot:!0},Wu={titleAlt:"Biggest Sales are LIVE. Get Krazy Deals",background:{image:rf}},T={id:"pdp-1",title:"Boat Airdopes 141 TWS earbuds, 42h playback",image:Jh,price:1299,usually:1899,note:"Cheaper today than any day in the last 2 months.",offer:"60%OFF + ₹120 cashback",ribbon:"Lowest in 60 days",rating:{value:4.2,count:"18K"},lowestPrice:1249,stats:[{label:"Highest Price",value:1299},{label:"Average Price",value:1299},{label:"Lowest Price",value:1299},{label:"GIF 2025 Price",value:1299}],aiSummary:["Great battery for the price and punchy bass.","40hr playtime with noice cancellation quality.","In built microphone with Noice cancellation and 3 meter bluetooth connection."],description:["Up to 42 hours of playback with the case; a 5 minute charge gives about 75 minutes.","8mm drivers tuned for boAt's signature bass.","ENx noise cancellation on the mic keeps calls clear on busy streets.","BEAST mode cuts latency to 50ms for games.","boAt is an Indian audio brand founded in 2016, one of the largest wearables makers in the country."],specs:[{label:"Brand",value:"boAt"},{label:"Battery",value:"Up to 42 hours with case"},{label:"Fast charge",value:"5 min for 75 min playback"},{label:"Bluetooth",value:"5.3"},{label:"Water resistance",value:"IPX4"},{label:"Warranty",value:"1 year"}],terms:["Cashback is tracked after you tap Grab deal and buy on the store in the same session.","Orders that are cancelled or returned do not earn cashback.","Cashback shows as pending first and is confirmed once the store confirms the order."],similar:ae.filter(e=>e.productCategory==="earphones"||e.productCategory==="headphones").slice(0,6)},sf={title:"Accordion",feature:"Product detail",description:"Collapsible block. card = grey card (AI summary); row = white row (cashback terms). Tap the header to open or close.",stories:[{name:"card, open",render:()=>i.jsx(yr,{variant:"card",title:"AI summary",defaultOpen:!0,children:i.jsx(wr,{items:T.aiSummary??[]})})},{name:"card, closed",render:()=>i.jsx(yr,{variant:"card",title:"AI summary",children:i.jsx(wr,{items:T.aiSummary??[]})})},{name:"row, closed (as in Figma)",render:()=>i.jsx(yr,{variant:"row",title:"CashKaro cashback terms",children:i.jsx(wr,{items:T.terms??[]})})},{name:"row, open",render:()=>i.jsx(yr,{variant:"row",title:"CashKaro cashback terms",defaultOpen:!0,children:i.jsx(wr,{items:T.terms??[]})})}]},af=Object.freeze(Object.defineProperty({__proto__:null,default:sf},Symbol.toStringTag,{value:"Module"}));function br({points:e,description:t,specs:n=[],detailsTitle:r="Description and specs",onToggle:o}){const[s,a]=D.useState(!1),l=D.useRef(null),c=D.useId(),d=Array.isArray(t)?t.filter(Boolean):[],u=typeof t=="string"?t.split(/\n\s*\n/).map(k=>k.trim()).filter(Boolean):[],f=d.length>0||u.length>0||n.length>0,m=()=>{var _;const k=!s;k||(_=l.current)==null||_.scrollIntoView({block:"nearest"}),a(k),o==null||o(k)};return i.jsxs("section",{className:"ck-ai","aria-label":"AI summary",children:[i.jsx("div",{className:"ck-ai__title",children:"AI summary"}),i.jsx("ul",{className:`ck-ai__points${s?" ck-ai__points--full":""}`,children:e.slice(0,3).map(k=>i.jsx("li",{children:k},k))}),f&&i.jsxs(i.Fragment,{children:[i.jsxs("button",{ref:l,type:"button",className:"ck-ai__header","aria-expanded":s,"aria-controls":c,onClick:m,children:[i.jsx("span",{children:r}),i.jsx("img",{className:"ck-ai__chevron",src:Fu,alt:"",width:"24",height:"24"})]}),i.jsx("div",{id:c,className:`ck-ai__panel${s?" ck-ai__panel--open":""}`,"aria-hidden":!s,children:i.jsxs("div",{className:"ck-ai__panel-inner",children:[u.map((k,_)=>i.jsx("p",{className:"ck-ai__para",children:k},_)),d.length>0&&i.jsx("ul",{className:"ck-ai__points ck-ai__points--full ck-ai__description",children:d.map(k=>i.jsx("li",{children:k},k))}),n.length>0&&i.jsx("dl",{className:"ck-ai__specs",children:n.map(k=>i.jsxs("div",{className:"ck-ai__spec",children:[i.jsx("dt",{children:k.label}),i.jsx("dd",{children:k.value})]},k.label))})]})})]})]})}const lf={title:"AiSummary",feature:"Product detail",description:"Blue-tinted AI summary card for the product detail sheet. Three summary points always show, one line each. Tap the accordion to open the full description and specs; close it to fold back. Not in Figma yet.",stories:[{name:"small state (tap to open)",render:()=>i.jsx(br,{points:T.aiSummary,description:T.description,specs:T.specs})},{name:"description as paragraphs",render:()=>i.jsx(br,{points:T.aiSummary,description:`boAt Airdopes 141 are true wireless earbuds built for long days. The case holds up to 42 hours of playback.

boAt is an Indian audio brand founded in 2016 and one of the largest wearables makers in the country.`,specs:T.specs})},{name:"summary only, no details",render:()=>i.jsx(br,{points:T.aiSummary})},{name:"specs only",render:()=>i.jsx(br,{points:T.aiSummary,specs:T.specs})}]},cf=Object.freeze(Object.defineProperty({__proto__:null,default:lf},Symbol.toStringTag,{value:"Module"})),df="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='99.5399'%20height='8.7951'%20viewBox='0%200%2099.5399%208.7951'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector%203194'%20d='M0.500035%204.26677C21.1747%202.29742%2069.9193%20-1.05049%2099.5%201.31274C88.6657%201.76031%2063.4187%203.78336%2049.1055%208.29496'%20stroke='url(%23paint0_linear_0_54)'%20stroke-linecap='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_0_54'%20x1='-12.6103'%20y1='8.29496'%20x2='99.3455'%20y2='-1.30281'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23587F01'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23587F01'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";function an({variant:e,count:t,active:n}){return t<2?null:i.jsx("span",{className:`ck-dots ck-dots--${e}`,"aria-hidden":"true",children:Array.from({length:t},(r,o)=>i.jsx("span",{className:`ck-dots__dot ${o===n?"ck-dots__dot--on":""}`},o))})}const pf="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='4.73591'%20height='6'%20viewBox='0%200%204.73591%206'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector%202757'%20d='M4.73591%200C4.73591%200%200%200%200%206V0H4.73591Z'%20fill='white'/%3e%3c/svg%3e",uf="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='143'%20height='1'%20viewBox='0%200%20143%201'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector%202755'%20d='M0.5%200.5H142.5'%20stroke='%23E0E0E0'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-dasharray='0.5%203'/%3e%3c/svg%3e",rd="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='126'%20height='1'%20viewBox='0%200%20126%201'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector%202755'%20d='M0.5%200.5H125.5'%20stroke='%23E0E0E0'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-dasharray='0.5%203'/%3e%3c/svg%3e",mf="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='41.2697'%20height='20.0527'%20viewBox='0%200%2041.2697%2020.0527'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Union'%20d='M31.9795%200V0.00195312H40.1719C41.0446%200.00195312%2041.5674%200.972677%2041.0869%201.70117L36.6357%208.44922L41.0869%2015.1973C41.5674%2015.9258%2041.0446%2016.8965%2040.1719%2016.8965H31.7188V16.8945L15.9893%2016.79H3.2627C1.46096%2016.79%20-8.79319e-06%2018.251%200%2020.0527V6.57422C4.6215e-05%202.94344%202.94342%203.4894e-06%206.57422%200H31.9795Z'%20fill='url(%23paint0_linear_0_41)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_0_41'%20x1='0.0488395'%20y1='10.8202'%20x2='33.0279'%20y2='11.1088'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23BC0000'/%3e%3cstop%20offset='0.120417'%20stop-color='%23FF8989'/%3e%3cstop%20offset='0.369136'%20stop-color='%23E02323'/%3e%3cstop%20offset='1'%20stop-color='%23BE0D0D'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Qu="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='4'%20height='8.66299'%20viewBox='0%200%204%208.66299'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Rectangle%2034629148'%20d='M9.15229e-05%203.44958C4.09766e-05%201.54444%201.54444%200%203.44958%200H4V8.66299H0L9.15229e-05%203.44958Z'%20fill='%23380303'/%3e%3c/svg%3e",hf="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='share-2%201'%20clip-path='url(%23clip0_0_44)'%3e%3cg%20id='Vector'%3e%3c/g%3e%3cpath%20id='Vector_2'%20d='M6%206.75H5.25C4.85218%206.75%204.47064%206.90804%204.18934%207.18934C3.90804%207.47064%203.75%207.85218%203.75%208.25V14.25C3.75%2014.6478%203.90804%2015.0294%204.18934%2015.3107C4.47064%2015.592%204.85218%2015.75%205.25%2015.75H12.75C13.1478%2015.75%2013.5294%2015.592%2013.8107%2015.3107C14.092%2015.0294%2014.25%2014.6478%2014.25%2014.25V8.25C14.25%207.85218%2014.092%207.47064%2013.8107%207.18934C13.5294%206.90804%2013.1478%206.75%2012.75%206.75H12'%20stroke='%23262626'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_3'%20d='M9%2010.5V2.25'%20stroke='%23262626'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_4'%20d='M6.75%204.5L9%202.25L11.25%204.5'%20stroke='%23262626'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_44'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",ff="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='28.1378'%20height='1'%20viewBox='0%200%2028.1378%201'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector%202749'%20d='M0%200.5H14.0689H28.1378'%20stroke='%23626176'/%3e%3c/svg%3e",gf="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='6.01172'%20height='10.5117'%20viewBox='0%200%206.01172%2010.5117'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='View%20All%20chevron-down'%3e%3cpath%20id='Vector'%20d='M5.7832%205.7832L1.2832%2010.2832C1.00195%2010.5879%200.509766%2010.5879%200.228516%2010.2832C-0.0761719%2010.002%20-0.0761719%209.50977%200.228516%209.22852L4.18945%205.24414L0.228516%201.2832C-0.0761719%201.00195%20-0.0761719%200.509766%200.228516%200.228516C0.509766%20-0.0761719%201.00195%20-0.0761719%201.2832%200.228516L5.7832%204.72852C6.08789%205.00977%206.08789%205.50195%205.7832%205.7832Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e";function Lt({variant:e="grab",size:t="main",children:n,onClick:r,className:o=""}){const s=n??(e==="grab"?"Grab Deal":e==="viewAllOutline"?"View All":"view all");return i.jsxs("button",{type:"button",onClick:a=>{a.stopPropagation(),r==null||r()},className:`ck-button ck-button--${e} ${e==="grab"?`ck-button--${t}`:""} ${o}`,children:[i.jsx("span",{className:"ck-button__label",children:s}),e==="viewAllOutline"&&i.jsx("span",{className:"ck-button__chevron",children:i.jsx("img",{src:gf,alt:"",width:"6.01172",height:"10.5117"})})]})}const kf={masthead:{share:!1,cta:!1,cashback:!0,chip:!1,ribbon:!1},main:{share:!0,cta:!0,cashback:!0,chip:!0,ribbon:!0},horizontal:{share:!1,cta:!0,cashback:!1,chip:!1,ribbon:!1},second:{share:!0,cta:!0,cashback:!0,chip:!0,ribbon:!1},listing:{share:!0,cta:!0,cashback:!1,chip:!1,ribbon:!1},crossSell:{share:!1,cta:!0,cashback:!1,chip:!1,ribbon:!1}},_f={main:2,second:3,masthead:2,horizontal:2,listing:2,crossSell:2};function $(e){const t=e.variant,n=kf[t];if(e.loading)return i.jsxs("article",{className:`ck-card ck-card--${t} ck-card--loading`,"aria-busy":"true",children:[i.jsx("div",{className:"ck-card__media",children:i.jsx("div",{className:"ck-card__frame"})}),i.jsxs("div",{className:"ck-card__bones",children:[i.jsx("span",{className:"ck-card__bone"}),i.jsx("span",{className:"ck-card__bone ck-card__bone--short"})]})]});const r=e.discountLabel??`${Uu(e.price,e.mrp)}% OFF`,o=i.jsxs("div",{className:"ck-card__media",children:[i.jsx("div",{className:"ck-card__frame",children:e.imageSrc&&i.jsx("img",{className:"ck-card__photo",src:e.imageSrc,alt:e.imageAlt??`${e.brand} ${e.titleRest}`})}),i.jsxs("div",{className:"ck-card__tab",children:[e.storeLogo?i.jsx("img",{className:"ck-card__tab-logo",src:e.storeLogo,alt:e.store}):i.jsx("span",{className:"ck-card__tab-text",children:e.store}),Array.from({length:_f[t]},(k,_)=>i.jsx("img",{className:`ck-card__tab-corner ck-card__tab-corner--${_+1}`,src:pf,alt:""},_))]})]}),s=i.jsxs("div",{className:"ck-card__title",children:[i.jsxs("span",{className:"ck-card__brand",children:[e.brand," "]}),i.jsx("span",{className:"ck-card__name",children:e.titleRest})]}),a=i.jsxs("div",{className:"ck-card__prices",children:[i.jsx("span",{className:"ck-card__price ck-trim",children:Le(e.price)}),i.jsxs("span",{className:"ck-card__mrp-wrap",children:[i.jsx("span",{className:"ck-card__mrp ck-trim",children:Le(e.mrp)}),i.jsx("span",{className:"ck-card__strike",children:i.jsx("img",{src:ff,alt:""})})]})]}),l=i.jsxs("div",{className:"ck-card__price-row",children:[a,i.jsx("div",{className:"ck-card__chip",children:i.jsx("span",{children:r})})]}),c=i.jsxs("div",{className:"ck-card__price-block",children:[i.jsxs("div",{className:"ck-card__off-row",children:[i.jsx("span",{className:"ck-card__off",children:r}),i.jsx("span",{className:"ck-card__dots",children:i.jsx("img",{src:rd,alt:""})})]}),a]}),d=i.jsxs("div",{className:"ck-card__price-block",children:[a,i.jsx("span",{className:"ck-card__off",children:r})]}),u=n.cashback&&e.cashback!=null&&i.jsxs("span",{className:"ck-card__cashback ck-trim",children:["+ ",Le(e.cashback)," Cashback"]}),f=e.cashback!=null&&n.cashback&&i.jsx("div",{className:"ck-card__divider",children:i.jsx("img",{src:t==="second"?rd:uf,alt:""})}),m=n.cta&&i.jsx(Lt,{size:t==="masthead"||t==="listing"?"main":t==="crossSell"?"horizontal":t,onClick:e.onGrab});return i.jsxs("article",{className:`ck-card ck-card--${t} ${e.onSelect?"ck-card--clickable":""}`,onClick:e.onSelect,children:[t==="main"&&i.jsxs(i.Fragment,{children:[o,i.jsxs("div",{className:"ck-card__body",children:[i.jsxs("div",{className:"ck-card__info",children:[s,l]}),f,u]}),i.jsx("div",{className:"ck-card__cta",children:m})]}),t==="second"&&i.jsxs("div",{className:"ck-card__column",children:[o,i.jsxs("div",{className:"ck-card__body",children:[s,i.jsxs("div",{className:"ck-card__price-block",children:[l,f,u]}),m]})]}),t==="masthead"&&i.jsxs("div",{className:"ck-card__column",children:[o,i.jsxs("div",{className:"ck-card__body",children:[i.jsxs("div",{className:"ck-card__info",children:[s,c]}),u]})]}),t==="listing"&&i.jsxs("div",{className:"ck-card__column",children:[o,i.jsxs("div",{className:"ck-card__body",children:[i.jsxs("div",{className:"ck-card__info",children:[s,c]}),m]})]}),t==="crossSell"&&i.jsxs(i.Fragment,{children:[o,i.jsxs("div",{className:"ck-card__body",children:[i.jsxs("div",{className:"ck-card__info",children:[s,d]}),m]})]}),t==="horizontal"&&i.jsxs(i.Fragment,{children:[o,i.jsxs("div",{className:"ck-card__body",children:[i.jsxs("div",{className:"ck-card__info",children:[s,c]}),m]})]}),n.ribbon&&e.isNew&&i.jsxs("div",{className:"ck-card__ribbon",children:[i.jsx("img",{className:"ck-card__ribbon-fold",src:Qu,alt:""}),i.jsx("img",{className:"ck-card__ribbon-band",src:mf,alt:""}),i.jsx("span",{className:"ck-card__ribbon-text",children:"NEW"})]}),n.share&&i.jsx("button",{type:"button",className:"ck-card__share","aria-label":`Share ${e.brand} ${e.titleRest}`,onClick:k=>{var _;k.stopPropagation(),(_=e.onShare)==null||_.call(e)},children:i.jsx("img",{src:hf,alt:""})})]})}const vf=128.077/158,xf=158/2+16+128.077/2,yf=128.077+16,wf=30;function Xo({title:e,deals:t,loading:n,onDealSelect:r,onDealShare:o,onGrabDeal:s}){const[a,l]=D.useState(1),c=Math.min(a,Math.max(0,t.length-1)),d=D.useRef(null),u=D.useRef(!1),f=v=>l(Math.max(0,Math.min(t.length-1,v))),m=v=>{d.current=v.clientX,u.current=!1},k=v=>{if(d.current==null)return;const E=v.clientX-d.current;d.current=null,Math.abs(E)>wf&&(u.current=!0,f(c-Math.sign(E)))},_=v=>{u.current&&(u.current=!1,v.stopPropagation(),v.preventDefault())};return i.jsxs("section",{className:"ck-best-deals",children:[i.jsxs("div",{className:"ck-best-deals__heading",children:[i.jsx("div",{role:"heading","aria-level":2,className:"ck-best-deals__title",children:e}),i.jsx("span",{className:"ck-best-deals__swoosh",children:i.jsx("span",{children:i.jsx("img",{src:df,alt:""})})})]}),i.jsx("div",{className:"ck-best-deals__stage",onPointerDown:m,onPointerUp:k,onPointerCancel:()=>d.current=null,onClickCapture:_,children:n?i.jsx("div",{className:"ck-best-deals__slot",children:i.jsx($,{variant:"main",...ot(bf),loading:!0})}):t.map((v,E)=>{const h=E-c;if(Math.abs(h)>2)return null;const p=h===0?0:Math.sign(h)*(xf+(Math.abs(h)-1)*yf),g=h===0;return i.jsx("div",{onClick:g?void 0:()=>f(E),style:{transform:`translateX(${p}px) scale(${g?1:vf})`,opacity:g?1:Math.abs(h)===1?.2:0},className:`ck-best-deals__slot ${g?"":"ck-best-deals__slot--side"}`,children:i.jsx($,{variant:"main",...ot(v),onSelect:r&&(()=>r(v)),onShare:o&&(()=>o(v)),onGrab:s&&(()=>s(v))})},v.id)})}),i.jsx("div",{className:"ck-best-deals__dots",children:i.jsx(an,{variant:"capsule",count:n?0:t.length,active:c})})]})}const bf={brand:"",name:"",store:"",price:0,mrp:0},Sf={title:"BestDealsCarousel",feature:"Product listing",description:"Green Best deals panel. Swipe or tap a faded card to bring it to the middle.",stories:[{name:"five products",render:()=>i.jsx(Xo,{title:"Best deals",deals:ae.slice(0,5)})},{name:"one product",render:()=>i.jsx(Xo,{title:"Best deals",deals:ae.slice(0,1)})},{name:"loading",render:()=>i.jsx(Xo,{title:"Best deals",deals:[],loading:!0})}]},Cf=Object.freeze(Object.defineProperty({__proto__:null,default:Sf},Symbol.toStringTag,{value:"Module"})),Pf="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='549.657'%20height='549.657'%20viewBox='0%200%20549.657%20549.657'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Ellipse%203048'%20filter='url(%23filter0_f_0_4)'%3e%3ccircle%20cx='274.828'%20cy='274.828'%20r='137.71'%20fill='%236739B3'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_4'%20x='0'%20y='0'%20width='549.657'%20height='549.657'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='68.5594'%20result='effect1_foregroundBlur_0_4'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",Nf="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='459.821'%20height='459.821'%20viewBox='0%200%20459.821%20459.821'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Ellipse%203047'%20filter='url(%23filter0_f_0_5)'%3e%3ccircle%20cx='229.91'%20cy='229.91'%20r='92.7916'%20fill='%236739B3'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_5'%20x='0'%20y='0'%20width='459.821'%20height='459.821'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='68.5594'%20result='effect1_foregroundBlur_0_5'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";function Na({logo:e,brandName:t,headline:n,subline:r,art:o,onSelect:s}){return i.jsxs("button",{type:"button",onClick:s,className:"ck-banner",children:[i.jsx("span",{className:"ck-banner__glow ck-banner__glow--top",children:i.jsx("span",{children:i.jsx("img",{src:Nf,alt:""})})}),i.jsx("span",{className:"ck-banner__glow ck-banner__glow--left",children:i.jsx("span",{children:i.jsx("img",{src:Pf,alt:""})})}),i.jsx("span",{className:"ck-banner__logo-box"}),i.jsx("img",{className:"ck-banner__logo",src:e,alt:t}),i.jsxs("span",{className:"ck-banner__text",children:[i.jsx("span",{className:"ck-banner__headline ck-trim",children:n}),i.jsx("span",{className:"ck-banner__subline ck-trim",children:r})]}),i.jsx("img",{className:"ck-banner__art",src:o,alt:""})]})}const jf={title:"BrandBanner",feature:"Masthead / hero",description:"Brand offer card from page type 1 (Nykaa in Figma). The admin sets logo, text and art.",stories:[{name:"Nykaa",render:()=>i.jsx(Na,{...ws})},{name:"long headline",render:()=>i.jsx(Na,{...ws,headline:"Upto 60% off + extra 10%",subline:"on Luxury beauty, perfumes and more"})}]},Bf=Object.freeze(Object.defineProperty({__proto__:null,default:jf},Symbol.toStringTag,{value:"Module"}));function ja({image:e,alt:t,onSelect:n}){return i.jsx("button",{type:"button",onClick:n,className:"ck-slide",children:i.jsx("img",{src:e,alt:t})})}const[Df]=Il,Af={title:"BrandSlide",feature:"Masthead / hero",description:"One brand slide from page type 3. Decided 6 Oct: the slide is a single banner image from the admin, not built from parts.",stories:[{name:"boAt banner (exported from Figma)",render:()=>i.jsx(ja,{...Df})},{name:"image fails to load",render:()=>i.jsx(ja,{image:"/missing.png",alt:"boAt headphones, starts with ₹499"})}]},Ef=Object.freeze(Object.defineProperty({__proto__:null,default:Af},Symbol.toStringTag,{value:"Module"})),Tf="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='670.453'%20height='670.453'%20viewBox='0%200%20670.453%20670.453'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Ellipse%2022735'%20filter='url(%23filter0_f_0_86)'%20style='mix-blend-mode:plus-lighter'%3e%3ccircle%20cx='335.227'%20cy='335.227'%20r='113.227'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_86'%20x='0'%20y='0'%20width='670.453'%20height='670.453'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='111'%20result='effect1_foregroundBlur_0_86'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",Lf=""+new URL("slides-money-left-BLOp1F4Z.svg",import.meta.url).href,Ff=""+new URL("slides-money-right-CXa-rR2p.svg",import.meta.url).href,If="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='33.9054'%20height='1.80448'%20viewBox='0%200%2033.9054%201.80448'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector%203196'%20d='M0.90224%200.90224H33.0031'%20stroke='url(%23paint0_linear_0_87)'%20stroke-width='1.80448'%20stroke-linecap='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_0_87'%20x1='0.90224'%20y1='1.40224'%20x2='33.0031'%20y2='1.40224'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Mf="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='33.9054'%20height='1.80448'%20viewBox='0%200%2033.9054%201.80448'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector%203195'%20d='M0.90224%200.90224H33.0031'%20stroke='url(%23paint0_linear_0_83)'%20stroke-width='1.80448'%20stroke-linecap='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_0_83'%20x1='0.90224'%20y1='1.40224'%20x2='33.0031'%20y2='1.40224'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Rf="modulepreload",zf=function(e,t){return new URL(e,t).href},od={},Of=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=Promise.allSettled(n.map(d=>{if(d=zf(d,r),d in od)return;od[d]=!0;const u=d.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!r)for(let _=a.length-1;_>=0;_--){const v=a[_];if(v.href===d&&(!u||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const k=document.createElement("link");if(k.rel=u?"stylesheet":Rf,u||(k.as="script"),k.crossOrigin="",k.href=d,c&&k.setAttribute("nonce",c),document.head.appendChild(k),u)return new Promise((_,v)=>{k.addEventListener("load",_),k.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return o.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};function Mt({image:e,lottie:t,onLottieError:n}){const r=D.useRef(null),[o,s]=D.useState(!1);return D.useEffect(()=>{s(!1);const a=r.current;if(!t||!a||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let l=!1,c=()=>{};return Promise.all([Of(()=>import("./lottie_light-B6Y1s5z2.js").then(d=>d.l),[],import.meta.url),fetch(t).then(d=>{if(!d.ok)throw new Error(`Lottie request failed (${d.status}): ${t}`);return d.json()})]).then(([{default:d},u])=>{if(l)return;const f=d.loadAnimation({container:a,renderer:"svg",loop:!0,autoplay:!1,animationData:u,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}});let m=!0;const k=()=>m&&!document.hidden?f.play():f.pause(),_=new IntersectionObserver(([v])=>{m=v.isIntersecting,k()});_.observe(a),document.addEventListener("visibilitychange",k),f.addEventListener("DOMLoaded",()=>{l||(s(!0),k())}),c=()=>{_.disconnect(),document.removeEventListener("visibilitychange",k),f.destroy()}}).catch(d=>n==null?void 0:n(d)),()=>{l=!0,c()}},[t]),i.jsxs("div",{className:`ck-media-bg${o?" ck-media-bg--playing":""}`,"aria-hidden":"true",children:[e&&i.jsx("img",{className:"ck-media-bg__layer ck-media-bg__image",src:e,alt:""}),t&&i.jsx("div",{ref:r,className:"ck-media-bg__layer ck-media-bg__lottie"})]})}const Hf=305+16.24;function Ba({title:e,subtitle:t,slides:n,onSlideSelect:r,topBar:o,background:s}){const[a,l]=D.useState(0),c=d=>l(Math.round(d.currentTarget.scrollLeft/Hf));return i.jsxs("section",{className:"ck-slides",children:[s?i.jsx(Mt,{...s}):i.jsx("div",{className:"ck-slides__glow",children:i.jsx("div",{children:i.jsx("img",{src:Tf,alt:""})})}),i.jsx("div",{className:"ck-slides__scroller",onScroll:c,children:i.jsx("div",{className:"ck-slides__row",children:n.map(({id:d,...u})=>i.jsx(ja,{...u,onSelect:r&&(()=>r({id:d,...u}))},d))})}),i.jsxs("div",{className:"ck-slides__heading",children:[i.jsx("div",{role:"heading","aria-level":2,className:"ck-slides__title",children:e}),i.jsx("div",{className:"ck-slides__subtitle",children:t})]}),i.jsx("div",{className:"ck-slides__line ck-slides__line--right",children:i.jsx("div",{children:i.jsx("img",{src:Mf,alt:""})})}),i.jsx("div",{className:"ck-slides__line ck-slides__line--left",children:i.jsx("div",{children:i.jsx("img",{src:If,alt:""})})}),i.jsx("div",{className:"ck-slides__money ck-slides__money--right",children:i.jsx("div",{children:i.jsx("div",{children:i.jsx("img",{src:Ff,alt:""})})})}),i.jsx("div",{className:"ck-slides__money ck-slides__money--left",children:i.jsx("div",{children:i.jsx("div",{children:i.jsx("img",{src:Lf,alt:""})})})}),i.jsx("div",{className:"ck-slides__dots",children:i.jsx(an,{variant:"bars",count:n.length,active:a})}),o&&i.jsx("div",{className:"ck-slides__topbar",children:o})]})}const Xu="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='akar-icons:arrow-down'%3e%3cpath%20id='Vector'%20d='M12%2020V4M19%2013L12%2020L5%2013'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e",Yu="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='10.5'%20cy='10.5'%20r='7'%20stroke='white'%20stroke-width='2'/%3e%3cpath%20d='M15.75%2015.75L20.5%2020.5'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e";function Me({onBack:e,onSearch:t,searchHints:n,hintIntervalMs:r=2500}){return i.jsx("div",{className:"ck-topbar",children:i.jsxs("div",{className:`ck-topbar__row${n!=null&&n.length?" ck-topbar__row--bar":""}`,children:[i.jsx(sd,{label:"Back",onClick:e,children:i.jsx("img",{className:"ck-topbar__back",src:Xu,alt:""})}),n!=null&&n.length?i.jsx(Gf,{hints:n,intervalMs:r,onClick:t}):i.jsx(sd,{label:"Search",onClick:t,children:i.jsx("img",{className:"ck-topbar__search",src:Yu,alt:""})})]})})}function Gf({hints:e,intervalMs:t,onClick:n}){const[r,o]=D.useState(0);return D.useEffect(()=>{if(o(0),e.length<2)return;const s=window.setInterval(()=>o(a=>(a+1)%e.length),t);return()=>window.clearInterval(s)},[e,t]),i.jsxs("button",{type:"button","aria-label":"Search for products",onClick:n,className:"ck-topbar__bar",children:[i.jsx("img",{className:"ck-topbar__bar-icon",src:Yu,alt:"",width:"24",height:"24"}),i.jsxs("span",{className:"ck-topbar__bar-text","aria-hidden":"true",children:[i.jsx("span",{children:"Search for"}),i.jsx("span",{className:"ck-topbar__slot",children:e.map((s,a)=>i.jsx("span",{className:`ck-topbar__hint${a===r?" ck-topbar__hint--active":""}`,children:s},s))})]})]})}function sd({label:e,onClick:t,children:n}){return i.jsx("button",{type:"button","aria-label":e,onClick:t,className:"ck-topbar__button",children:n})}const id=Il.map((e,t)=>({...e,id:`slide-${t+1}`})),ad={title:"Sale is Onnn!!",subtitle:"Starting from just ₹99"},Uf={title:"BrandSlidesHero",feature:"Masthead / hero",description:"Page type 3 top section: swipeable brand slides with dots. All admin content.",stories:[{name:"three slides (swipe)",render:()=>i.jsx(Ba,{...ad,slides:id,topBar:i.jsx(Me,{})})},{name:"one slide",render:()=>i.jsx(Ba,{...ad,slides:id.slice(0,1),topBar:i.jsx(Me,{})})}]},Vf=Object.freeze(Object.defineProperty({__proto__:null,default:Uf},Symbol.toStringTag,{value:"Module"})),_i=(e,t)=>i.jsx("div",{style:{width:e},children:t}),Wf={title:"Button",feature:"Shared",description:'Grab Deal in the three card sizes, and the white "view all" button from the BEST DEALS strip.',stories:[{name:"grab / main (in a 142px slot)",render:()=>_i(142,i.jsx(Lt,{size:"main"}))},{name:"grab / second (125px)",render:()=>_i(125,i.jsx(Lt,{size:"second"}))},{name:"grab / horizontal",render:()=>i.jsx(Lt,{size:"horizontal"})},{name:"viewAll",render:()=>i.jsx(Lt,{variant:"viewAll"})},{name:"long label",render:()=>_i(142,i.jsx(Lt,{size:"main",children:"Grab Deal Now"}))}]},Qf=Object.freeze(Object.defineProperty({__proto__:null,default:Wf},Symbol.toStringTag,{value:"Module"})),Xf="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='87.2667'%20height='88.9778'%20viewBox='0%200%2087.2667%2088.9778'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame%201991634867'%20clip-path='url(%23clip0_0_10)'%3e%3cpath%20id='Vector'%20d='M38.0671%201.97784H43.9224C44.8217%202.45019%2046.2956%202.34505%2047.2625%202.54966C48.1638%202.74038%2049.1976%203.00128%2050.0669%203.2913C58.6817%206.10298%2065.4701%2012.6146%2068.456%2020.9306C69.7898%2024.7364%2070.038%2028.0152%2070.0381%2031.9846L70.0357%2038.1693L70.0744%2062.7547C70.0419%2067.8646%2070.012%2075.6623%2072.0523%2080.391C73.2148%2083.0135%2075.2898%2085.1585%2077.9161%2086.4526C79.1098%2087.0264%2080.171%2087.3736%2081.3941%2087.7095C82.5672%2088.0316%2087.3389%2088.5604%2088%2088.9778H-1C-0.325164%2088.4974%201.70787%2087.9532%202.62019%2087.5727C4.71451%2086.699%205.8987%2085.8538%207.55227%2084.3378C13.3537%2079.0191%2012.6571%2072.0219%2012.6563%2064.989L12.6541%2037.057C12.6543%2029.0077%2011.8535%2023.519%2016.0771%2016.1227C19.0986%2010.8222%2023.8445%206.63781%2029.5762%204.2207C31.2416%203.51336%2033.2102%202.96622%2034.9772%202.54851C35.8394%202.34469%2037.2829%202.42956%2038.0671%201.97784Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_10'%3e%3crect%20width='87.2667'%20height='88.9778'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";function Rl({categories:e,selectedId:t,noneSelected:n=!1,ariaLabel:r="Categories",onSelect:o}){const s=Math.max(0,e.findIndex(a=>a.id===t));return i.jsx("nav",{"aria-label":r,className:"ck-category-row",children:i.jsx("div",{className:"ck-category-row__scroller",children:i.jsxs("div",{className:"ck-category-row__track",children:[!n&&i.jsx("img",{className:"ck-category-row__tab",src:Xf,alt:"",style:{"--ck-category-index":s}}),i.jsx("div",{className:"ck-category-row__floor"}),i.jsx("div",{className:"ck-category-row__items",children:e.map(a=>{const l=!n&&a.id===t;return i.jsxs("button",{type:"button","aria-pressed":l,onClick:()=>o==null?void 0:o(a),className:`ck-category-row__item ${l?"ck-category-row__item--on":""}`,children:[i.jsx("span",{className:"ck-category-row__icon",children:i.jsx("img",{src:a.icon,alt:""})}),i.jsx("span",{className:"ck-category-row__label",children:a.name})]},a.id)})})]})})})}function Po({categories:e,start:t}){const[n,r]=D.useState(t);return i.jsx(Rl,{categories:e,selectedId:n,onSelect:o=>r(o.id)})}const Yf=[...pn,{...pn[1],id:"beauty",name:"Beauty"},{...pn[2],id:"electronics",name:"Electronics"}],Jf={title:"CategoryRow",feature:"Browse and filter",description:"Grey category strip; the white tab moves to the tapped item. Scrolls sideways past five items.",stories:[{name:"Top Deals selected (tap to move)",render:()=>i.jsx(Po,{categories:pn,start:"top-deals"})},{name:"Fashion selected",render:()=>i.jsx(Po,{categories:pn,start:"fashion"})},{name:"seven items (scrolls)",render:()=>i.jsx(Po,{categories:Yf,start:"top-deals"})},{name:"one item",render:()=>i.jsx(Po,{categories:pn.slice(0,1),start:"top-deals"})}]},$f=Object.freeze(Object.defineProperty({__proto__:null,default:Jf},Symbol.toStringTag,{value:"Module"})),Kf=""+new URL("money-left-TUK6M18l.svg",import.meta.url).href,Zf=""+new URL("money-right-Bl0Pmve1.svg",import.meta.url).href,qf="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='779.432'%20height='747.068'%20viewBox='0%200%20779.432%20747.068'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Ellipse%2022733'%20filter='url(%23filter0_f_0_95)'%3e%3cellipse%20cx='389.716'%20cy='373.534'%20rx='189.716'%20ry='173.534'%20fill='%23FFC31D'%20fill-opacity='0.5'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_95'%20x='0'%20y='0'%20width='779.432'%20height='747.068'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='100'%20result='effect1_foregroundBlur_0_95'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",eg="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='779.432'%20height='747.068'%20viewBox='0%200%20779.432%20747.068'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Ellipse%2022733'%20filter='url(%23filter0_f_0_4)'%3e%3cellipse%20cx='389.716'%20cy='373.534'%20rx='189.716'%20ry='173.534'%20fill='%23FCDA7D'%20fill-opacity='0.28'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_4'%20x='0'%20y='0'%20width='779.432'%20height='747.068'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='100'%20result='effect1_foregroundBlur_0_4'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",ld=""+new URL("mandala-CYUYceFd.webp",import.meta.url).href,Yo=""+new URL("sale-pattern-DX_8P9Bz.webp",import.meta.url).href,tg=""+new URL("lights-wire-1-BFVqbtR6.webp",import.meta.url).href,ng=""+new URL("lights-wire-2-CnORdMhH.webp",import.meta.url).href,rg=""+new URL("lights-wire-3-CzfnsXm7.webp",import.meta.url).href,og=""+new URL("lights-wire-4-Cdg3-esH.webp",import.meta.url).href,sg=[{src:1,mirrored:!1,x:261,y:35.5,w:128.1,h:43.2},{src:2,mirrored:!1,x:296.1,y:45.4,w:112.9,h:72.8},{src:3,mirrored:!1,x:228.5,y:57.9,w:132.5,h:24.3},{src:4,mirrored:!1,x:164.3,y:32.4,w:132.1,h:28.7},{src:1,mirrored:!0,x:81.2,y:35.5,w:128.1,h:43.2},{src:2,mirrored:!0,x:46.1,y:45.4,w:112.9,h:72.8},{src:3,mirrored:!0,x:115,y:58.2,w:132.5,h:24.3},{src:4,mirrored:!0,x:177.9,y:32.4,w:132.1,h:28.7}],ig=[{x:281.6,y:55,w:26.4},{x:320.3,y:74.9,w:25.7},{x:362.5,y:78.1,w:22.6},{x:295.4,y:64.2,w:18.6},{x:336.8,y:77.5,w:16.2},{x:306.4,y:69.9,w:11.5},{x:351.1,y:78.1,w:11.5},{x:373.4,y:76,w:11.5},{x:384,y:73.1,w:11.5},{x:271.8,y:47,w:11.5},{x:381.3,y:115.5,w:25.8},{x:340.8,y:99.9,w:21.5},{x:309.8,y:70,w:20.7},{x:365.4,y:111.3,w:22.5},{x:327.8,y:89,w:18.2},{x:353.9,y:106.9,w:11.5},{x:317.6,y:78.7,w:12.3},{x:303.8,y:60.3,w:15.2},{x:298.6,y:50.3,w:11.5},{x:393.6,y:117.5,w:11.5},{x:253.6,y:75.2,w:29},{x:296.3,y:82.5,w:22.8},{x:337.5,y:72.5,w:12.3},{x:269.5,y:79.8,w:21.5},{x:312.8,y:79.8,w:16.2},{x:281.6,y:81.8,w:15.6},{x:326.6,y:76,w:12.1},{x:347.3,y:67.2,w:11.5},{x:356.7,y:61.2,w:11.5},{x:242,y:70.6,w:11.5},{x:187.8,y:48.1,w:38.6},{x:229.2,y:61,w:45.2},{x:271.3,y:56.6,w:22.3},{x:202.9,y:54.7,w:18.5},{x:245.9,y:60.6,w:16.2},{x:214.7,y:58.4,w:11.5},{x:260,y:58.6,w:11.5},{x:281.7,y:52.7,w:13},{x:291.7,y:48,w:11.5},{x:176.8,y:42,w:13.5},{x:87,y:55,w:26.4},{x:47.7,y:74.9,w:25.7},{x:2.3,y:78.1,w:22.6},{x:65.4,y:64.2,w:18.6},{x:21.6,y:77.5,w:16.2},{x:47.3,y:69.9,w:11.5},{x:2.6,y:78.1,w:11.5},{x:-19.7,y:76,w:11.5},{x:-30.4,y:73.1,w:11.5},{x:81.9,y:47,w:11.5},{x:-13.3,y:115.5,w:25.8},{x:22.9,y:99.9,w:21.5},{x:53.1,y:70,w:20.7},{x:-.6,y:111.3,w:22.5},{x:32.6,y:89,w:18.2},{x:-.2,y:106.9,w:11.5},{x:36.9,y:78.7,w:12.3},{x:53.6,y:60.3,w:15.2},{x:55.1,y:50.3,w:11.5},{x:-39.9,y:117.5,w:11.5},{x:118.8,y:75.5,w:29},{x:70,y:82.7,w:22.8},{x:18.3,y:72.8,w:12.3},{x:95.5,y:80.1,w:21.5},{x:46.8,y:80.1,w:16.2},{x:77.5,y:82.1,w:15.6},{x:29,y:76.3,w:12.1},{x:7.6,y:67.5,w:11.5},{x:-1.7,y:61.5,w:11.5},{x:112.9,y:70.9,w:11.5},{x:192.9,y:48.1,w:38.6},{x:158.2,y:61,w:45.2},{x:93.2,y:56.6,w:22.3},{x:157.8,y:54.7,w:18.5},{x:112.5,y:60.6,w:16.2},{x:139,y:58.4,w:11.5},{x:93.6,y:58.6,w:11.5},{x:73.5,y:52.7,w:13},{x:62,y:48,w:11.5},{x:178.9,y:42,w:13.5}],ag={1:tg,2:ng,3:rg,4:og};function Ju(){return i.jsxs("div",{className:"ck-lights","aria-hidden":"true",children:[sg.map((e,t)=>i.jsx("img",{className:`ck-lights__wire${e.mirrored?" ck-lights__wire--mirrored":""}`,src:ag[e.src],alt:"",style:{left:e.x,top:e.y,width:e.w,height:e.h}},t)),ig.map((e,t)=>i.jsx("span",{className:"ck-lights__bulb",style:{left:e.x-e.w/2,top:e.y-e.w/2,width:e.w,height:e.w,"--ck-light-delay":`-${(t*.37%2.6).toFixed(2)}s`,"--ck-light-speed":`${(1.8+t%5*.35).toFixed(2)}s`}},t))]})}const lg="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='66.8899'%20height='66.6238'%20viewBox='0%200%2066.8899%2066.6238'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Star%201'%20d='M32.3289%201.00553C32.9624%200.431667%2033.9278%200.43166%2034.5613%201.00553L37.532%203.69694C38.3181%204.40899%2039.4383%204.61797%2040.4285%204.23796L44.1707%202.80143C44.9687%202.49517%2045.8693%202.84414%2046.2527%203.60807L48.0506%207.19108C48.5263%208.13893%2049.495%208.73843%2050.5555%208.74186L54.5643%208.75456C55.419%208.75725%2056.133%209.40766%2056.2147%2010.2585L56.5965%2014.2497C56.6978%2015.3051%2057.3844%2016.214%2058.3719%2016.6003L62.1063%2018.0602C62.9019%2018.3716%2063.3324%2019.2357%2063.1014%2020.0583L62.0164%2023.9176C61.7294%2024.9386%2062.0406%2026.0346%2062.8221%2026.7516L65.7762%2029.4616C66.406%2030.0394%2066.495%2031.0005%2065.9822%2031.6842L63.577%2034.8913C62.9405%2035.7396%2062.8348%2036.874%2063.3045%2037.8249L65.0799%2041.4186C65.4584%2042.1849%2065.1947%2043.1137%2064.4695%2043.5661L61.0672%2045.6872C60.1673%2046.2484%2059.6602%2047.2686%2059.7547%2048.3249L60.1121%2052.318C60.1881%2053.1692%2059.606%2053.9396%2058.7664%2054.0993L54.8279%2054.8483C53.7862%2055.0465%2052.9447%2055.8137%2052.6512%2056.8327L51.5418%2060.6852C51.3053%2061.5066%2050.4841%2062.0154%2049.6434%2061.861L45.701%2061.1364C44.6579%2060.9448%2043.5957%2061.3566%2042.9539%2062.2008L40.5272%2065.3923C40.0098%2066.0726%2039.0609%2066.2501%2038.3328%2065.8024L34.9178%2063.7028C34.0143%2063.1474%2032.8749%2063.1473%2031.9715%2063.7028L28.5565%2065.8024C27.8283%2066.2499%2026.8793%2066.0727%2026.3621%2065.3923L23.9363%2062.2008C23.2945%2061.3565%2022.2324%2060.9448%2021.1893%2061.1364L17.2469%2061.861C16.4061%2062.0154%2015.585%2061.5066%2015.3484%2060.6852L14.2391%2056.8327C13.9456%2055.8138%2013.1039%2055.0466%2012.0623%2054.8483L8.12384%2054.0993C7.28423%2053.9396%206.70217%2053.1693%206.77813%2052.318L7.13555%2048.3249C7.23008%2047.2685%206.72205%2046.2483%205.82208%2045.6872L2.42071%2043.5661C1.69542%2043.1138%201.43079%2042.185%201.80938%2041.4186L3.58575%2037.8249C4.05538%2036.874%203.94972%2035.7396%203.31329%2034.8913L0.908015%2031.6842C0.395099%2031.0005%200.484209%2030.0394%201.11407%2029.4616L4.06817%2026.7516C4.84953%2026.0346%205.16083%2024.9386%204.87384%2023.9176L3.78887%2020.0583C3.55782%2019.2355%203.9881%2018.3715%204.78399%2018.0602L8.51739%2016.6003C9.50501%2016.2141%2010.1914%2015.3052%2010.2928%2014.2497L10.6756%2010.2585C10.7572%209.40781%2011.4705%208.75746%2012.325%208.75456L16.3338%208.74186C17.3943%208.73852%2018.3629%208.13891%2018.8387%207.19108L20.6375%203.60807C21.0209%202.84438%2021.9207%202.49551%2022.7186%202.80143L26.4617%204.23796C27.4518%204.61791%2028.5712%204.40874%2029.3572%203.69694L32.3289%201.00553Z'%20fill='%23FA3F93'%20stroke='%23FDADD1'%20stroke-width='1.14991'/%3e%3c/svg%3e",cg=e=>e.replace(/(^|\s)(\S)/g,(t,n,r)=>n+r.toUpperCase());function nn({variant:e,name:t,image:n,imageAlt:r,startingPrice:o,onSelect:s}){const a=Le(o);return i.jsxs("button",{type:"button",onClick:s,className:`ck-tile ck-tile--${e} ${s?"ck-tile--clickable":""}`,children:[i.jsx("img",{className:"ck-tile__image",src:n,alt:r??t}),e==="featured"?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"ck-tile__star",children:i.jsx("span",{className:"ck-tile__star-turn",children:i.jsx("span",{className:"ck-tile__star-inset",children:i.jsx("img",{src:lg,alt:""})})})}),i.jsx("span",{className:"ck-tile__badge",children:i.jsxs("span",{className:"ck-tile__badge-turn",children:[i.jsx("span",{className:"ck-tile__badge-label",children:"Starts with"}),i.jsx("span",{className:"ck-tile__badge-price",children:a})]})})]}):i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"ck-tile__strip"}),i.jsx("span",{className:"ck-tile__strip-label",children:"Starts with"}),i.jsx("span",{className:"ck-tile__chip",children:i.jsx("span",{children:a})})]}),i.jsx("span",{className:"ck-tile__name",children:cg(t)})]})}function Nn({title:e,subtitle:t,tiles:n,topBar:r,backdrop:o="swirl",background:s,onTileSelect:a}){const[l,...c]=n,d=[c.slice(0,2),c.slice(2,4)].filter(m=>m.length>0),u=m=>a?()=>a(m):void 0,f=!s&&o==="lights";return i.jsxs("section",{className:"ck-sale-zone",children:[s?i.jsx(Mt,{...s}):f?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"ck-sale-zone__glow",children:i.jsx("div",{children:i.jsx("img",{src:eg,alt:""})})}),i.jsx("img",{className:"ck-sale-zone__mandala ck-sale-zone__mandala--top",src:ld,alt:""}),i.jsx("img",{className:"ck-sale-zone__mandala ck-sale-zone__mandala--bottom",src:ld,alt:""}),i.jsx(Ju,{})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"ck-sale-zone__glow",children:i.jsx("div",{children:i.jsx("img",{src:qf,alt:""})})}),i.jsxs("div",{className:"ck-sale-zone__pattern",children:[i.jsx("img",{src:Yo,alt:""}),i.jsx("div",{className:"ck-sale-zone__fade"})]})]}),i.jsxs("div",{className:"ck-sale-zone__tiles",children:[l&&i.jsx(nn,{variant:"featured",...l,onSelect:u(l)}),d.map((m,k)=>i.jsx("div",{className:"ck-sale-zone__column",children:m.map((_,v)=>i.jsx(nn,{variant:"small",..._,onSelect:u(_)},_.id??v))},k))]}),!f&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"ck-sale-zone__money ck-sale-zone__money--left",children:i.jsx("div",{children:i.jsx("div",{children:i.jsx("img",{src:Kf,alt:""})})})}),i.jsx("div",{className:"ck-sale-zone__money ck-sale-zone__money--right",children:i.jsx("div",{children:i.jsx("div",{children:i.jsx("img",{src:Zf,alt:""})})})})]}),i.jsxs("div",{className:"ck-sale-zone__heading",children:[i.jsx("div",{role:"heading","aria-level":2,className:"ck-sale-zone__title",children:e}),i.jsx("div",{className:"ck-sale-zone__subtitle",children:t})]}),i.jsx("div",{className:"ck-sale-zone__scrim"}),r&&i.jsx("div",{className:"ck-sale-zone__topbar",children:r})]})}const Da="data:application/json;base64,eyJ2IjoiNS43LjAiLCJmciI6MzAsImlwIjowLCJvcCI6NjAsInciOjM2MCwiaCI6Mzk0LCJubSI6InB1bHNlLWRlbW8iLCJkZGQiOjAsImFzc2V0cyI6W10sImxheWVycyI6Wwp7ImRkZCI6MCwiaW5kIjoxLCJ0eSI6NCwibm0iOiJyaW5nIiwic3IiOjEsImtzIjp7Im8iOnsiYSI6MSwiayI6W3sidCI6MCwicyI6WzcwXSwiaSI6eyJ4IjpbMC41XSwieSI6WzFdfSwibyI6eyJ4IjpbMC41XSwieSI6WzBdfX0seyJ0Ijo2MCwicyI6WzBdfV19LCJyIjp7ImEiOjAsImsiOjB9LCJwIjp7ImEiOjAsImsiOlsxODAsMjMwLDBdfSwiYSI6eyJhIjowLCJrIjpbMCwwLDBdfSwicyI6eyJhIjoxLCJrIjpbeyJ0IjowLCJzIjpbMjAsMjAsMTAwXSwiaSI6eyJ4IjpbMC41XSwieSI6WzFdfSwibyI6eyJ4IjpbMC41XSwieSI6WzBdfX0seyJ0Ijo2MCwicyI6WzIyMCwyMjAsMTAwXX1dfX0sImFvIjowLCJzaGFwZXMiOlt7InR5IjoiZ3IiLCJpdCI6W3sidHkiOiJlbCIsInAiOnsiYSI6MCwiayI6WzAsMF19LCJzIjp7ImEiOjAsImsiOlsxMDAsMTAwXX19LHsidHkiOiJzdCIsImMiOnsiYSI6MCwiayI6WzEsMSwxLDFdfSwibyI6eyJhIjowLCJrIjoxMDB9LCJ3Ijp7ImEiOjAsImsiOjN9fSx7InR5IjoidHIiLCJwIjp7ImEiOjAsImsiOlswLDBdfSwiYSI6eyJhIjowLCJrIjpbMCwwXX0sInMiOnsiYSI6MCwiayI6WzEwMCwxMDBdfSwiciI6eyJhIjowLCJrIjowfSwibyI6eyJhIjowLCJrIjoxMDB9fV19XSwiaXAiOjAsIm9wIjo2MCwic3QiOjAsImJtIjowfQpdfQo=",fr={title:"Sale is Onnn!!",subtitle:"Starting from just ₹99",tiles:qr},dg={title:"CategorySaleHero",feature:"Masthead / hero",description:"Page type 1 top section. The admin sets the headline, subtitle and five tiles.",stories:[{name:"as in Figma",render:()=>i.jsx(Nn,{...fr,topBar:i.jsx(Me,{})})},{name:"lights backdrop (twinkling)",render:()=>i.jsx(Nn,{...fr,title:"Jaw Dropping Deals!!",subtitle:"Live Now",backdrop:"lights",topBar:i.jsx(Me,{searchHints:["nike shoes","tv","monitors","iphone","adidas"]})})},{name:"Lottie background",render:()=>i.jsx(Nn,{...fr,background:{lottie:Da},topBar:i.jsx(Me,{})})},{name:"three tiles",render:()=>i.jsx(Nn,{...fr,tiles:qr.slice(0,3),topBar:i.jsx(Me,{})})},{name:"one tile, no top bar",render:()=>i.jsx(Nn,{...fr,tiles:qr.slice(0,1)})}]},pg=Object.freeze(Object.defineProperty({__proto__:null,default:dg},Symbol.toStringTag,{value:"Module"})),[cd,vi]=qr,ug={title:"CategoryTile",feature:"Browse and filter",description:"Category tiles from the page type 1 sale zone: the tall featured tile and the small tiles.",stories:[{name:"featured",render:()=>i.jsx(nn,{variant:"featured",...cd})},{name:"small",render:()=>i.jsx(nn,{variant:"small",...vi})},{name:"small, long name",render:()=>i.jsx(nn,{variant:"small",...vi,name:"Home Decor"})},{name:"small, ₹1,499",render:()=>i.jsx(nn,{variant:"small",...vi,startingPrice:1499})},{name:"featured, ₹99",render:()=>i.jsx(nn,{variant:"featured",...cd,startingPrice:99})}]},mg=Object.freeze(Object.defineProperty({__proto__:null,default:ug},Symbol.toStringTag,{value:"Module"}));function hg(e){const t=new Date(e);return t.setHours(24,0,0,0),t.getTime()}function fg(e){const t=Math.floor(e/1e3),n=r=>String(r).padStart(2,"0");return`${n(Math.floor(t/3600))}:${n(Math.floor(t%3600/60))}:${n(t%60)}`}function jn({endsAt:e}){const t=e==null?void 0:new Date(e).getTime(),[n,r]=D.useState(Date.now),o=t??hg(n);D.useEffect(()=>{const a=setInterval(()=>{const l=Date.now();r(l),t!=null&&l>=t&&clearInterval(a)},1e3);return()=>clearInterval(a)},[t]);const s=Number.isFinite(o)?Math.max(0,o-n):0;return i.jsx("span",{className:"ck-countdown",role:"timer",children:fg(s)})}const xi=e=>Date.now()+e*60*1e3,gg={title:"Countdown",feature:"Masthead / hero",description:"Sale Deals timer. The admin sets the end time; it stops at 00:00:00.",stories:[{name:"56:38 left (as in Figma)",render:()=>i.jsx(jn,{endsAt:xi(56+38/60)})},{name:"over a day left",render:()=>i.jsx(jn,{endsAt:xi(36*60+5)})},{name:"ended",render:()=>i.jsx(jn,{endsAt:xi(-5)})},{name:"daily clock (no end time): counts to midnight",render:()=>i.jsx(jn,{})},{name:"invalid date",render:()=>i.jsx(jn,{endsAt:"not a date"})}]},kg=Object.freeze(Object.defineProperty({__proto__:null,default:gg},Symbol.toStringTag,{value:"Module"})),Aa=8;function Un({title:e,subtitle:t,deals:n,onDealSelect:r,onGrabDeal:o}){const s=n.slice(0,Aa);return i.jsxs("section",{className:"ck-cross-sell","aria-label":e,children:[i.jsxs("header",{className:"ck-cross-sell__header",children:[i.jsx("div",{role:"heading","aria-level":2,className:"ck-cross-sell__title",children:e}),t&&i.jsx("span",{className:"ck-cross-sell__subtitle",children:t})]}),i.jsx("div",{className:"ck-cross-sell__scroller",children:i.jsx("div",{className:"ck-cross-sell__grid",children:s.map(a=>i.jsx($,{variant:"crossSell",...ot(a),onSelect:r&&(()=>r(a)),onGrab:o&&(()=>o(a))},a.id))})})]})}const ln=ae.filter(e=>e.productCategory==="chargers"),_g=Array.from({length:8},(e,t)=>({...ln[t%ln.length],id:`${ln[t%ln.length].id}-${t}`})),yi={title:"View more charger",subtitle:"Because you viewed charger recently"},vg={title:"CrossSellSection",feature:"Cross-sell",description:"'View more {category}' (Figma 777:86926): peach gradient, a title and why, then wide cards in two rows that swipe sideways. Three to eight products; the page shows nothing when fewer than three fit.",stories:[{name:"four products, as in Figma",render:()=>i.jsx(Un,{...yi,deals:ln.slice(0,4)})},{name:"eight products (the most), swipe sideways",render:()=>i.jsx(Un,{...yi,deals:_g})},{name:"three products",render:()=>i.jsx(Un,{...yi,deals:ln.slice(0,3)})},{name:"long category name",render:()=>i.jsx(Un,{title:"View more earphones & headphones",subtitle:"Because you viewed earphones & headphones recently",deals:ln.slice(0,4)})}]},xg=Object.freeze(Object.defineProperty({__proto__:null,default:vg},Symbol.toStringTag,{value:"Module"})),yg=""+new URL("night-bag-D2ia2Yhs.webp",import.meta.url).href,wg="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='48.3178'%20height='60.7455'%20viewBox='0%200%2048.3178%2060.7455'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%202147209003'%3e%3cpath%20id='Vector'%20opacity='0.1'%20d='M30.2226%207.98755C40.2162%2012.3989%2045.6028%2023.9897%2042.2538%2033.8764C38.9049%2043.7631%2028.0886%2048.2017%2018.095%2043.7904C8.10132%2039.3791%202.71469%2027.7883%206.06363%2017.9016C9.41258%208.01491%2020.2289%203.57624%2030.2226%207.98755Z'%20fill='url(%23paint0_radial_0_206)'/%3e%3cpath%20id='Vector_2'%20opacity='0.1'%20d='M35.469%2040.443C40.1024%2042.4883%2042.5998%2047.8622%2041.0471%2052.446C39.4944%2057.0298%2034.4796%2059.0877%2029.8462%2057.0425C25.2129%2054.9972%2022.7154%2049.6233%2024.2681%2045.0395C25.8208%2040.4557%2030.8356%2038.3978%2035.469%2040.443Z'%20fill='url(%23paint1_radial_0_206)'/%3e%3c/g%3e%3cdefs%3e%3cradialGradient%20id='paint0_radial_0_206'%20cx='0'%20cy='0'%20r='1'%20gradientTransform='matrix(-19.0606%20-0.915133%20-0.946769%20-19.5812%2024.2866%2025.8562)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23E7AD4B'/%3e%3cstop%20offset='0.84'%20stop-color='%23E8A24C'/%3e%3cstop%20offset='1'%20stop-color='%23E8A24C'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint1_radial_0_206'%20cx='0'%20cy='0'%20r='1'%20gradientTransform='matrix(-8.83713%20-0.424286%20-0.438953%20-9.07849%2032.7169%2048.7276)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23E7AD4B'/%3e%3cstop%20offset='0.84'%20stop-color='%23E8A24C'/%3e%3cstop%20offset='1'%20stop-color='%23E8A24C'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e",bg="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='46.8403'%20height='56.9502'%20viewBox='0%200%2046.8403%2056.9502'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%202147209003'%3e%3cpath%20id='Vector'%20opacity='0.1'%20d='M30.0069%206.81465C39.3037%2010.5782%2043.8913%2021.4262%2040.2535%2031.0444C36.6157%2040.6626%2026.1302%2045.4088%2016.8334%2041.6452C7.53659%2037.8817%202.94899%2027.0337%206.58676%2017.4155C10.2245%207.79728%2020.7101%203.05113%2030.0069%206.81465Z'%20fill='url(%23paint0_radial_0_401)'/%3e%3cpath%20id='Vector_2'%20opacity='0.1'%20d='M33.5023%2037.6423C37.8126%2039.3872%2039.9396%2044.4167%2038.253%2048.8761C36.5664%2053.3354%2031.7049%2055.5359%2027.3946%2053.791C23.0843%2052.0461%2020.9573%2047.0166%2022.6439%2042.5572C24.3305%2038.0979%2029.192%2035.8974%2033.5023%2037.6423Z'%20fill='url(%23paint1_radial_0_401)'/%3e%3c/g%3e%3cdefs%3e%3cradialGradient%20id='paint0_radial_0_401'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(23.5432%2024.1927)%20rotate(180)%20scale(18.0762%2018.7011)'%3e%3cstop%20stop-color='%23E7AD4B'/%3e%3cstop%20offset='0.84'%20stop-color='%23E8A24C'/%3e%3cstop%20offset='1'%20stop-color='%23E8A24C'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint1_radial_0_401'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(30.5055%2045.6994)%20rotate(180)%20scale(8.38072%208.67044)'%3e%3cstop%20stop-color='%23E7AD4B'/%3e%3cstop%20offset='0.84'%20stop-color='%23E8A24C'/%3e%3cstop%20offset='1'%20stop-color='%23E8A24C'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e",Sg="data:image/webp;base64,UklGRvQMAABXRUJQVlA4WAoAAAAQAAAA2wAAwAAAQUxQSCUGAAAdsHBt29o20v28kh27Tco0zMzMzMwz+wuZmXczzMzMZQg7dqT3WWyTczzy8kTEBPBV3Z1Y1S2pvDg3OzCjZm92oVfxtf+/9v//769SrjyaxLota4tqau9MNYKMnXDJsd3w3MdvfHogR43WhXf0gfaxp6x+77lPZjxanPAIGMz6c65a99LzX/ZGifY9NQ4QZuKSG/KJ13dVo8MR54P4W2E23HDhzsfemxsZLp/mIEUWJ9145FPP7c3RYOxCW/8Ighy/7Ibtj73fGwmO2oo5eNkn3L/pief3eAQ4I9GhQI5ffe2nf/yk3/ha5+NDAcmceF938rXpprf+DJZV9sSd5774+C43u+Pby4NwnH/X1K8+Wmp0VwysZQHhIx/c8IPX3eA6Z7NsIHfvOOKbexvcWQUrKZf3DH6Zze3shRVBnjj5zX5j656EYyWADbNLjW3rkaz4dJfGfjJohfKTsrHFeUusbBbbd9LYx8/wyjgWfr25uZ1cssK93+6iuV80j7UC7v3xXTW31Wcasfzu/e79oLkfvQkvnxn8/t2gwZ+5wEr2//Bu0ODbF5DFcpnBH94qafKbTkIs+8If3gka/VkLLLeZ//0HQaPXZbW1TCz85qOg2W88lmU2i7/9SDT8MwJrWej/7m3R8OOcAWIZzeLkm6LpT5yEl8PqPfZ6SeM/fBvLaS1NvlYy5IWH32nz6NCsavKVkiFfRq3EHmqdS2sO3cpnnioZ8m1XODAeZhtPwDoUK59/osWQb5X9urBBeIitLzhkK194rMOQL7u9QVkjAjmHV78srIOz8sXJLkO+XN1b6C4RJBDGw2rK6zl4K59/tMuQj27Ot1LYkYAsD6mZN8/vWAdh5TOPdxjyWqXpQpJSxiZseTj1f7j5iq7R37Pyxckxhn1nbCYlgkgsJ6FaeBjx8u+PuOYIWX9j/NLkGMN+bHx+QEogHHVgu0jLw2jpuafaV57RxZjQ85Ndhn1rorfYSqcgCRcJxmHLQ4jqo8d3nXDhER3EwitPdRn25US1IBNkIhIIh8mw5SEEB554K446vp39jz/uMuzLdTGTtSOc4RqRcgBkqJaHEdX7z+/oC3dKhr3Wr5oe1LULRyRkElYSFnZRCw8h6H368SDE8N+8ccecUmSAARKIBMlGZljbfAVuOPrL/VGhIEFGVi1bgMBhD6uvxImT937JICSUwhJYCcogAztk42bWPXn+bSJQAHYgByZl2ZEhJ6HETax1UvHcYreMlhJkWQ4LcIIcdshWOLOBHbn5+dl2tMZM2FLKgRCqsQECIRXUddW4dOKe7V0VDisVtcJKQkA4ZSxAkjrlYHHgpjU+VXTLzMpGhBEo/4YQ5u9GGI2vWtrXc7OKXtVpl4raBkuALEvgsASSsKiLtWvm9vbcqOrFdhDRikp2yAHIsqXIMEIWSOp7w/qp3XWj8tS6zqBWlK3KxgGCILAJB4CSwspcKrd0Pu03Kj6NozpZZRSlXQWWkJUhhEA4wi5su79q447FZjX1+fhR49SVikK4xkQK5LAgQBSSsc3CYotm7b272odvICu3ikilnGGHhUBWgIsAUD31Sbth4Zkv6g2HSc5otRQ1NjICBA4pBBmh6pP9NO/57TOrt01IoLIdCU7+roQcgSwVrfj43VYDo9q7u7VpXRFIGitIahmIRCqQ0kW3FbsfH6OZz+7prdm8ujBVtEul6r+hNBJGRRHFwu8WaOqDvbPltg1F7UplWQAGMiQLiqBaevo9mnse2DfYfHS7dhVRSKguMAIKgHxjsmxwMP/l/g2nra2cjiLl0hkOpBrLn/+qS7MfbP909VnH1BUiLSscGVk7Q1O/rGn63vXSzvOvWzVwtJ0GU1e2y5z71m5GwN5nz07ccXiPooRMVZEuVPsPb2oUoNr15P7bzqqqaJEQWTit139VMhp6/7NvXHr92ICWASXWzm93GRlnX3/qmLs297NF2sDCD1qMkP2Pfld845h+HVgp/vS+RgmqHX/cfv+5SyksvfObktHSeyffvPmqMNaB76xm5Jx+dvLUu9fB9p9NMILOv/GnxS2d6V1HahRh6bOndlSdCTGaema24mv/f+3//4dcyhGGZIQ1/yEPAFZQOCCoBgAAsCoAnQEq3ADBAD49Ho1FIiGhEZnMTCADxLK3cLqoiMo/8BpuvPPyU/mf7R/J3T36P+B9/INb16/e/uA7UHmC/o5/l+qn5kP2D/aL3h/Qn6AH6+9ZV+2/sEfsN6Yv7VfBH+0v/k/2HwC/zD+qf8b8/9Fi/nfVhkf28KN0VbY4vQqzrqgX8k/q3+/9XL1q/tn7HX68CO50NACD9MK1luKwSaN1ho6k5O6GmfDSyu6GmfDSyu6GfFq24bD61hc74LLhsv8A9UsriLJt/6NnONsVaX6LG+t3Hb0oAawAkpUum9uxXUeNJiNSX6NOA/YQ3ayCB0mbRXMHDrhe3DTiwXor7nZvO7+ut+dUHgcQt+YQDY0bL4nZW2x141s/7HWDDed0LReBJOeRDeW6XFF0m2t5zqTk7nbJjYxr4TljKL59E4aOpOTuhpnw0sruhpnw0sruhpnw0sruhpnw0srucgAA/v/c//DkRLjLbD2HJZ0g7kFFgw04/ObNoJ922x5QGLuQ/wa+tlysDNgft8ccvvzH25dvsD1HR1/Eze1RuFAADC5XR984Z3HY0/XV2IjMI0fzw50DQPrBdfTgBaV9euXQdbhaKjc4X/HZN4tbSrx7pw1dPPkJ2+aqVEXR4EkLKwApeb0fq8XD1DB0wCfjptuQ9TNeK0Pu3bHkiUNPycHvB23rvd2kXg+KIH1SW38AUxEb/BCNMiL280xEFV3gqxnMV5yTNTMyrYzzut8hnk2rLd59HZnXRYYFEXDC7kgfHotZss/hfeLPK1NKa3Ci24a/ElZ/+IAEQhXVFm4TW9EVrxLjJzaWURRMeZo0teTBS5uUKS98DTmZ0eKfyAb3c/GM1sEL2oG6isW+R5nfU3OuPwBKgOEMhRx9nWGdfrzUORdE/MQTmHhhnog3NICe/X/DJg39pJ9P7W2F5XIP3j9m3JlBHRTgR/pEj9SXxPffp86oaJo2hbJhlKrI3ALFCD7vp+PBUuDAQNluUlSn1ISufpwKCPtaxzRxBy+MvilIci498ZVmg/tD79UjeR28daYHp6JNdmX0bnStEmNDcEVOO745eNbji3liWDmtlX4c/5hixhOkenP7o+o+4MU35nmV+T0cPtV1ueJ48N/z4kk/30ZIpCyZzMBNlITE5N1LJnUPgH9anKQU7gj5hD/P2UB37QpfIvxqg55CjQ9yaqq/irNMb033x12m9jZx5PX/oI49tfy+9N2LYu4QKzm+6TuuG+Dwc9svRQTM5cY63RsN936FsXyHycD/9NeKJzpRIS2QYtj8kmv/l1P/4PP/wSH/+gKfopr/y0Lq/xxlgX/jQfD62+tuqqJu4GTdKM4aPYBVhOYWYUtdlRkVHUfLihlF5eH/9PsZfME+0j+S/n23dcmGAMK2v7kYIF9fyeDo3jcedpJJHqCOXSrsL0wLQ7AnSL2K3zhjf5X3Ex16gc6gOex2yJCk6FZJr5OC2dvtSzqTeXy5YaM50R9ZWj+ewPt9cMFyvX9PH//LdSd+mOcuYPBvZBcYVm+3HsSvRhuNwLn0G1HRAj1rBtF0eRNRQNxrBpLArssXrJQzUrclmW/+fbzJKokmKx5KkGsiYP9r8UBAUNzVC4NG8ytTiQ3pGQn1RMhJjmVvfh6nhdfi7f8t9hVuHh7aCj56a6MnKSCJOd1jkRxzV72SMZl/DkgmVfOcJ8J439TQJZAtnSjBkgOrT1VgALE544OF0oqLPCK7ZoAK2gaIbuvSTdHN+x79Dt8SFTUa2ySMvQE5AC6r/E3QclG5CpHm+LvwvFDnEkPzVNgD1jy3g21UTo35W9py52gOHWrlLBT/bLfH7z7s9dLVzC5bC4/ox2iHdwAUMO7oDLH+U9l2K8hiXhyYRL7KKeuw1zyO4EwomWS5cHHvF1b2O+2LwDUg4G+0AwI9mpTC0DzE+0s8q8F1uGuSJkj5qYnChnTXo191frfhm5k3v6e/N+qriDJdkRe++pgoooDuj8gB/bDND1ju4yGw9zq6HI8lk1ZothcQJVoXEC20PMM6nuTnUPQp3xhXfZNOVGB3pB+uWkVKa4HtbVds58EwPhqo7CVZT5Q7fgF3J66zAHtkoySdVkgWD6KtLyP37Bai+0cFAHT+8gDf9miXmfbcHyE91TjYAWJGetmHoNbHohgCwfFKPTVpjsobbakPQ1qMBIydagrnKI0seXkPq/7qrgD3uuhuT8NiXTsU0ryZJXZExQB4aoYATwfywdVhKirqL2Xhu6b7tYm3tU35H2d9mqwlIpFmmAAAAAAA",dd="data:image/webp;base64,UklGRgYNAABXRUJQVlA4WAoAAAAQAAAA2wAAwAAAQUxQSOMFAAAd8G3btqvWtm3lXBuuCYFw8l7Dzv//ifnk5+xT3kuAhHcCmmrJ088pUKjTzx4RE/BtMpslSSLhH9G7KHIk/kFN8NX/X/3/1f9f/f8PIQECEPSPBl2mGGcjQvY+Hby96x8IV9yora2upNKkeT8b9Ie99tj/Y5CtbB9s5PE2SRLIuVS2kJoN253Xdt8HX1TY/3Ebr2Nv3syAKJUrlYpr5dSo/vrSGljQuY3vD3N9MzNA+PNMxeVatVqLB8+N1+7QB1tU+snxyMtEgAREAB7OmKlsbWxWsr2nZrM7sTArfVcbyIxOxJ8SAAgBMqZL+9vVNXYaz53+NMDSu9++zQXibyQAEB5Atrq9U8tb+6neGfrAija3NZUR/Bv+PAl4MR1vbm+Xsm/Pd43hPKgy31fuDUbi70uAksh0YWNvO4+Xm6f+TMHEwlFqYubwgQQhGFyutH+wHnXvH9oTH0j57WgoE/kBIP5UAqO13eOt3Fvz+mk8D6K9bxsJjPh4AoDk8lsH+0Vr3z61ZhY8bv/w1cyRiyEnU5Rb2znZ5Pjhvj7xYROVys6bHLGABAgQ8i4qbJzsrEyebxvjJGTy36gvwwITkDNYOlfZP6jMe7dP7XmwuNKP0xmMXBwAFEFJ+fLutyW17u/b80CJKjtjb45YbEIEKOUK23s76cHNXWuuAIkq1bl5EQtPgIAgV9o+2o+7d7fNqYIjPik+SVhaB0gobByfxN3ru5dZYHDlcHUiAloSAAQ98tWT/fzzL5qJQoKp1Yq8Jx2WmHAyxNvflIfnj/OQcOVaMpeBWHICxuLJSetLWwGR2duue+ETJCBbO8p1GhOFQ3q3OjBz0NKBApjbjpsdCwW6wprMROKTZGFlPA4GrG2pBSM+UcoQim7jYDwBxc9jmmSiYMjUagMvOnyGIkDfnRRdKES14jyRJz8DAQ42a82yCMV4P/si4ZMUwUnd5xGM+YNUX6A+AQGk3u6vyuGQKVWniZFcPkGO1j97SMUMBbe5NZ7Kg1h2CY6aP5zWyzGCkT+Wnr2IT1BOvnV1Ma9FCEbGu/FA5pZNkHPJ6OG8Wc4R4ZjdWJ14A5dOTknz7BGlCCG5fjQYwRPLLABw1rm+GVQzCMvd42YiLpUgMBo3rm9zeSIoXXZrdeqNWF4BcPTt66vpZoTAzBystOS1PAJAZ6Oby9eVPBGaKz+JhgKoJREAYta6vELZITTpSnvTxEhiWUXnm/cX42oW4emqVTc3TyylACGy3uNNI7uKEM3sbT3DQIlLAINzk5eLB1QiBGl2v9IXCWLhBRDOd25Op5UMgpSptRK85LD4AoBoUv/SiGMiTN3+cTKRd1h4CaSb13/66zgmQjW1td/y4uJJpFP77FcsRwhWt1KOp2bEgktwTqP6l0Yhh4DNbsU9adEE0THpnF+8VyMELEtHaMOIhZbgaMObs045JsJm930mRFogCY6w+pdbV4wQtC5XyY7NO2JxDSQ1OT0dbmUQuOmjwquHYXElEpG///VDvEqE7sq3Ky9mbnEkkpjc/Kq7FSF4o9omZh6OiyEIjpy+nJ6Vcg7hmy+7ETywGBJI2vD6S289jRDOZG2GRTU4gG+PZ/VUTATxexKlCUjuw2SOoF4uzme1CIE8maVXHADxgwQQDqPb37RLOSKUk0GUy0QC8bES6Dhv/OIhXXAIZ/Wa3FmTJID8OwlGB1r79HS2nkZQj3/WOjkpAgYQf2caQczuf9Eo5hDYs7uLXuX4ME+TAXB/kwSQ0bx1djMrOoS2pvXf3Gd3dndrkQyQ+5sARNZ//N1rMY0QTzr3l3Xuf7NfTZkkAuCfESCSSJoXV1ZwCHPN+k9PV7Odb3c28pQJEAGIAB3YPz3tbUcId72P2peX/eLh4WY5pgx/OcL44eI2jomwt0n79un5fXOvWivm0wII+GTYuL1VzSH8bdZ/fWg05sWtWpwhpMT3m63MZob4h1Dv01an2+4M3wVAkVYKhTTxj6O390F39PYuIGIm7fCPpuxdwlf/f/X/f7ADAFZQOCD8BgAAsCwAnQEq3ADBAD49Ho1FIiGhEYy0RCADxLK3cLql9HxckW+5fkbzeO+XiXhHj5dhvMB2u/MF/Q//Y9W/zCfx/+5/uJ7zvpI9AD+r/63rB/QA81j/h/uN8En7b/uV8A/7I//nObv6B+Gfb95bL2ZypMnnugWrXMV/qPqjfy//F/u3nx+hP+77gX8c/of+/9YD1m/tJ7C36wB+ba/iWFTc2Tcm5Nybk3JuTcm5Nybk3JuTcm5Nybk3Jqq094T6A/KoHDc2TU4tcgUSdOGBywIR7snG1UHYVWuqmx+Jwlyen/N/gdA5+ZAuqZk5AwJQhvzw6o0agIMs3dfTRBeQa+ZsCOVwRYiYQG5IGBFlpARHqhTOBUXKYfTVm2Ms8SNM36e47RXkbmdm7N4Q6Ow4cQf1G8jYn5t8F80cEzvUUL/AalC90Xerx0T7IBc/rFci4DAfPsOX3s/PYCwFgLAWAsBYCwFgLAWAsBYCwFgLAVYAAP3/IwYGk6R1xk9ropzaK1/wQXUIc+rtCHL2hZ/CuOyD0AAAbf+82akUSamRCVBmO9nPtvp39zAFVA+h3MeszJXpufIkJ9CK8MqvW3rXfP/hgw5DCiB30n6lvsz8dJY+Irw3Ppg0iUne4A23bJ7u1ZHcPWJ7VeT4HjLWA2WEVl4rA89IJt3dmN1d1Knb/9Q1+c5kUSLozSr5PiSzbdV+BjjcQqu5DF2/uRz2APcKaJNP3l6iN0vI/pwLKlHsSjMEICRFPIQ9+trXonS/WsstX5V0dZs1/+dYMCKu0JOabRMBwq0sLKp4bduYaho/3/aBsqLmxt3RSN6Go/GRTt5EoN+1zSgomI1jmeVm4KKdjn5ybn8/JKKT7j4mcxV2xocUWID/D0xGxp/ytezJEMVvl9EOZmQRGqhlYQ00J1FGAWoJ495re9GiFqJhn0QeT+tD9uImkyQGT2dII//N67d57jF5eS4DZ8n9aLPW1eusvWR8GcVCb4JD1atgvW3rO2m+iikp/WHvLkxLjJqgfyNqrSU49u/G4A5eZfgXeu8BmFmF3sOx/CrrmNe3UZVb6+0EZD9G5qd4uG3/+VxGSMlJWklF7s/zIY65ZtSgFGg59yY5clBy7Pmk5gPaWte/0Yc4yLnAsCnTFzqzDFv/F8TO+HWI+u5034R6/uZkFzPP3BasWyCjVGgVSGy/9bfCc+s1w0m1E/n0G7WTNRx/so0xBD0L8M89MNEFYHVVN4+kA+EIkSokGQs9TNe7osYgdoGHTiSI5u3pFyUq6gP93/99A8AbLi8z/xGbDSdB1ivKf7lGIPIyNsQ9vIZK7usTjwb/K7lrXcvH6P/mTPUKUWx7dejWJJKyjPhVpl/TrGaGn4b3pSlPys6ThZZ5v3GMi8SwKsYsw9ZUjZp7IN1V3BpV5rzWeOpyt0Ya+OZ0fC1slF8AlSIHjE4MATvVvtLko4//1V3092JABjb1vZT9+1rCjRf9vuXv9TdfbH/8THozAc/wi0LtgwZ4PeGp3MqvTIrgyFAe5dMgTczo6dIX2JySmxW1Y57ed50peGye0F/u8rfeCibJpezBz0R2Y2OHGgGmwlmzVWuVPV5iG6rsfwlPW/d7lRA7knnS1sXfvYRklur3t9Mm1HewRJQRwIfld8j+0/wJQ/OmdPVDsUkkqsT+W1dALP8NI6nNIsGdDizniEd9u25oDHvZdGpAOPbzfCmfCn0tRA056syBm0zSl0L4DofyI48d3jYaGlDuebOBeHVC/ndD2AdGeTuydBx/4rSm79JvgLnp/I0uW1n4y8eqtJEQjZboeGolzT+/8+x/ect/TW2U6xsMg5CRhnXx09dvX3OXxAjUD7extQFHKcBc73hBu40dic50zPRBv0MM19fJmzj0L8ChuMFmt/yPt1rf+FIOQie/JrtySv7e0N+UBtLvOAjhav4wcaq4znjyp02ZsQj7rbbidASYxzbxRXZGe8MVe1Mp7ww1h5bmo9SmHm7bKSWQM/UUhyOBHUsNnmXrXqISqtL7e458R4c3KGF4V7MssVPkC2T1mk9aOddLau70z3lxSnZPOldC9aflllOHZkY8jAGJswVEmwSJ+XHQHu96x/rafnTCmGBSCB+tPXcRnt0VjGe/elEv/XyQAL4Fhj7vSw5ok4j8L7CaqH7/OqP2KDsiNYL2Q41ZLhYwzgrnuMirO4ewOaxyKUTy6b0jbEoRG/9zQDm0/A1H4BGa8G0lfVfgraCTmMdU5iMRi/gDcnMy+8Ecv5dQRo58Cok2uH4JbIStvJRyuB/CTr4o1PavFJz3llaBL5/V/LiMsEG1mL9mhDLTSs/1NmSv4reWwDua6hOHU1/r8fY+h0mIUUbn1B4KOjTh8/ZReWIQcvmKJeur/eHkAAAAAAAA",wi=""+new URL("night-confetti-c-Catl1xq4.webp",import.meta.url).href,Cg="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='516.655'%20height='506.705'%20viewBox='0%200%20516.655%20506.705'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Ellipse%2022733'%20filter='url(%23filter0_f_0_373)'%3e%3cellipse%20cx='258.327'%20cy='253.352'%20rx='58.3274'%20ry='53.3524'%20fill='%23FA3F93'%20fill-opacity='0.73'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_373'%20x='0'%20y='0'%20width='516.655'%20height='506.705'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='100'%20result='effect1_foregroundBlur_0_373'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",Pg="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='128.07'%20height='95.137'%20viewBox='0%200%20128.07%2095.137'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector'%20opacity='0.3'%20d='M64.035%2095.137C99.4006%2095.137%20128.07%2073.8399%20128.07%2047.5685C128.07%2021.2971%2099.4006%200%2064.035%200C28.6694%200%200%2021.2971%200%2047.5685C0%2073.8399%2028.6694%2095.137%2064.035%2095.137Z'%20fill='url(%23paint0_radial_0_332)'%20style='mix-blend-mode:screen'/%3e%3cdefs%3e%3cradialGradient%20id='paint0_radial_0_332'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(63.9521%2047.757)%20scale(64.0229%2047.6309)'%3e%3cstop%20stop-color='%23F5763D'/%3e%3cstop%20offset='0.18'%20stop-color='%23F5763D'%20stop-opacity='0.96'/%3e%3cstop%20offset='0.27'%20stop-color='%23F5763D'/%3e%3cstop%20offset='0.45'%20stop-color='%23F5763D'%20stop-opacity='0.69'/%3e%3cstop%20offset='0.7'%20stop-color='%23F5763D'%20stop-opacity='0.32'/%3e%3cstop%20offset='0.89'%20stop-color='%23F5763D'%20stop-opacity='0.09'/%3e%3cstop%20offset='1'%20stop-color='%23F5763D'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e",pd="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='229.169'%20height='220.881'%20viewBox='0%200%20229.169%20220.881'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Ellipse%2022733'%20filter='url(%23filter0_f_0_431)'%3e%3cellipse%20cx='114.584'%20cy='110.44'%20rx='48.5843'%20ry='44.4403'%20fill='%23FA3F93'%20fill-opacity='0.8'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_431'%20x='0'%20y='0'%20width='229.169'%20height='220.881'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='33'%20result='effect1_foregroundBlur_0_431'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",Ng="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='779.432'%20height='747.068'%20viewBox='0%200%20779.432%20747.068'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Ellipse%2022733'%20filter='url(%23filter0_f_0_256)'%3e%3cellipse%20cx='389.716'%20cy='373.534'%20rx='189.716'%20ry='173.534'%20fill='%23FA3F93'%20fill-opacity='0.55'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_256'%20x='0'%20y='0'%20width='779.432'%20height='747.068'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='100'%20result='effect1_foregroundBlur_0_256'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",jg=""+new URL("night-megaphone-LnXABeMa.webp",import.meta.url).href,Bg=""+new URL("night-stars-BGwdfZbt.svg",import.meta.url).href,Dg="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='20.1201'%20height='20.1201'%20viewBox='0%200%2020.1201%2020.1201'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%202147209000'%20filter='url(%23filter0_f_0_41)'%3e%3ccircle%20id='Ellipse%2022739'%20cx='10.06'%20cy='10.06'%20r='2.06003'%20fill='%23FFF83A'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_41'%20x='0'%20y='0'%20width='20.1201'%20height='20.1201'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='4'%20result='effect1_foregroundBlur_0_41'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",Ag="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='4.12007'%20height='4.12007'%20viewBox='0%200%204.12007%204.12007'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%202147208999'%3e%3ccircle%20id='Ellipse%2022739'%20cx='2.06003'%20cy='2.06003'%20r='2.06003'%20fill='%23FFF83A'/%3e%3c/g%3e%3c/svg%3e",Eg="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='19.5595'%20height='19.5595'%20viewBox='0%200%2019.5595%2019.5595'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%202147209000'%20filter='url(%23filter0_f_0_238)'%3e%3ccircle%20id='Ellipse%2022739'%20cx='9.77976'%20cy='9.77976'%20r='1.77976'%20fill='%23FFF83A'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_238'%20x='0'%20y='0'%20width='19.5595'%20height='19.5595'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='4'%20result='effect1_foregroundBlur_0_238'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",Tg="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='3.55952'%20height='3.55952'%20viewBox='0%200%203.55952%203.55952'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%202147208999'%3e%3ccircle%20id='Ellipse%2022739'%20cx='1.77976'%20cy='1.77976'%20r='1.77976'%20fill='%23FFF83A'/%3e%3c/g%3e%3c/svg%3e",Lg=22;function zl({progress:e,thin:t=!1}){const n=Math.min(1,Math.max(0,e));return i.jsx("span",{className:`ck-scroll-indicator${t?" ck-scroll-indicator--thin":""}`,"aria-hidden":"true",children:i.jsx("span",{className:"ck-scroll-indicator__thumb",style:{transform:`translateX(${n*Lg}px)`}})})}function Bn({titleArt:e,titleAlt:t,liveDot:n=!1,deals:r,loading:o,onDealSelect:s,topBar:a,background:l}){const[c,d]=D.useState(0),u=f=>{const m=f.scrollWidth-f.clientWidth;d(m>0?f.scrollLeft/m:0)};return i.jsxs("section",{className:"ck-strip","aria-label":e?void 0:t,children:[(l==null?void 0:l.image)&&i.jsx("div",{className:"ck-strip__picture-top",style:{backgroundImage:`url("${l.image}")`},"aria-hidden":"true"}),l?i.jsx(Mt,{...l}):i.jsxs("div",{className:"ck-strip__art",children:[i.jsx("img",{className:"ck-strip__stars",src:Bg,alt:""}),i.jsx("img",{className:"ck-strip__glow-corner",src:Pg,alt:""}),i.jsx(No,{className:"ck-strip__glow-bottom",src:Cg}),i.jsx(No,{className:"ck-strip__glow-top",src:Ng}),i.jsx(jt,{className:"ck-strip__confetti ck-strip__confetti--1",src:Sg}),i.jsx(jt,{className:"ck-strip__confetti ck-strip__confetti--2",src:dd}),i.jsx("div",{className:"ck-strip__bubbles-left",children:i.jsx("img",{src:wg,alt:""})}),i.jsx(No,{className:"ck-strip__glow-pink ck-strip__glow-pink--1",src:pd}),i.jsx(No,{className:"ck-strip__glow-pink ck-strip__glow-pink--2",src:pd}),i.jsx(jt,{className:"ck-strip__megaphone",src:jg}),i.jsx(jt,{className:"ck-strip__confetti ck-strip__confetti--3",src:wi}),i.jsx(jt,{className:"ck-strip__confetti ck-strip__confetti--4",src:wi}),i.jsx("div",{className:"ck-strip__scrim"}),i.jsx("img",{className:"ck-strip__bubbles-right",src:bg,alt:""}),i.jsx(jt,{className:"ck-strip__confetti ck-strip__confetti--5",src:dd}),i.jsx(jt,{className:"ck-strip__confetti ck-strip__confetti--6",src:wi}),i.jsx(jt,{className:"ck-strip__bag",src:yg})]}),a&&i.jsx("div",{className:"ck-strip__topbar",children:a}),e&&i.jsx("img",{className:"ck-strip__title",src:e,alt:t}),e&&n&&i.jsxs("span",{className:"ck-strip__live","aria-hidden":"true",children:[i.jsx("img",{className:"ck-strip__live-glow",src:Dg,alt:""}),i.jsx("img",{className:"ck-strip__live-dot",src:Ag,alt:""}),i.jsx("img",{className:"ck-strip__live-core-glow",src:Eg,alt:""}),i.jsx("img",{className:"ck-strip__live-core",src:Tg,alt:""})]}),i.jsx("div",{className:"ck-strip__scroller",onScroll:f=>u(f.currentTarget),children:i.jsx("div",{className:"ck-strip__row",children:o?Array.from({length:3},(f,m)=>i.jsx($,{variant:"masthead",...ot(Fg),loading:!0},m)):r.map(f=>i.jsx($,{variant:"masthead",...ot(f),onSelect:s&&(()=>s(f))},f.id))})}),(o||r.length>2)&&i.jsx("div",{className:"ck-strip__dots",children:i.jsx(zl,{progress:c,thin:!0})})]})}function No({className:e,src:t}){return i.jsx("div",{className:e,children:i.jsx("img",{src:t,alt:""})})}function jt({className:e,src:t}){return i.jsx("div",{className:e,children:i.jsx("div",{children:i.jsx("img",{src:t,alt:""})})})}const Fg={brand:"",name:"",store:"",price:0,mrp:0},jo=Tt["best-deals-strip"],Bo=i.jsx(Me,{searchHints:["nike shoes","iPhone 16","smart TVs","monitors","adidas sneakers","boAt earbuds"]}),Ig={title:"DealsStripHero",feature:"Masthead / hero",description:"Page type 4 top section (Figma 1227:52155): night sky with star dust, megaphone and bag, title art with a blinking Live Now dot, a row of masthead cards and scroll dots. The search bar rotates its hints.",stories:[{name:"admin picture: Krazy Deals (title in the picture)",render:()=>i.jsx(Bn,{...Wu,deals:jo,topBar:Bo})},{name:"as in Figma (swipe the cards)",render:()=>i.jsx(Bn,{...Co,deals:jo,topBar:Bo})},{name:"two products, no dots",render:()=>i.jsx(Bn,{...Co,deals:jo.slice(0,2),topBar:Bo})},{name:"loading",render:()=>i.jsx(Bn,{...Co,deals:[],loading:!0,topBar:Bo})},{name:"round search button",render:()=>i.jsx(Bn,{...Co,deals:jo,topBar:i.jsx(Me,{})})}]},Mg=Object.freeze(Object.defineProperty({__proto__:null,default:Ig},Symbol.toStringTag,{value:"Module"})),Rg=e=>i.jsx("div",{style:{background:"#2d53cc",padding:8},children:e}),zg={title:"Dots",feature:"Shared",description:"Carousel page dots: the Best deals capsule and the brand slide bars.",stories:[{name:"capsule, 3, middle on",render:()=>i.jsx(an,{variant:"capsule",count:3,active:1})},{name:"capsule, 8",render:()=>i.jsx(an,{variant:"capsule",count:8,active:0})},{name:"bars, 3",render:()=>Rg(i.jsx(an,{variant:"bars",count:3,active:0}))},{name:"one page (renders nothing)",render:()=>i.jsx(an,{variant:"bars",count:1,active:0})}]},Og=Object.freeze(Object.defineProperty({__proto__:null,default:zg},Symbol.toStringTag,{value:"Module"})),Hg={title:"LightString",feature:"Masthead / hero",description:'Twinkling fairy lights for a masthead backdrop. Decorative, 80 bulbs, no props. Used by CategorySaleHero with backdrop="lights".',stories:[{name:"on purple",render:()=>i.jsx("div",{style:{position:"relative",width:360,height:394,background:"var(--ck-sale-zone-bg)",overflow:"clip"},children:i.jsx(Ju,{})})}]},Gg=Object.freeze(Object.defineProperty({__proto__:null,default:Hg},Symbol.toStringTag,{value:"Module"})),Do=e=>i.jsx("div",{style:{position:"relative",width:"var(--ck-page-w)",height:200,background:"var(--ck-color-accent)",overflow:"hidden",borderRadius:12},children:e}),Ug={title:"MediaBackground",feature:"Masthead / hero",description:"Masthead background: a configurable image or Lottie. Image shows first and is the fallback. Lottie loads on demand, pauses off screen, and is skipped under reduced motion.",stories:[{name:"image only",render:()=>Do(i.jsx(Mt,{image:Yo}))},{name:"lottie only",render:()=>Do(i.jsx(Mt,{lottie:Da}))},{name:"lottie over image",render:()=>Do(i.jsx(Mt,{image:Yo,lottie:Da}))},{name:"broken lottie URL falls back to image",render:()=>Do(i.jsx(Mt,{image:Yo,lottie:"/missing.json"}))}]},Vg=Object.freeze(Object.defineProperty({__proto__:null,default:Ug},Symbol.toStringTag,{value:"Module"})),Wg="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='504.831'%20height='397.999'%20viewBox='0%200%20504.831%20397.999'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Union'%20d='M420.969%200C467.284%200.000263889%20504.831%2037.5468%20504.831%2083.8623C504.831%20112.567%20490.408%20137.901%20468.416%20153.019V397.999H108.416V229.768C108.205%20229.769%20107.994%20229.771%20107.782%20229.771C48.2557%20229.771%200%20181.516%200%20121.989C0.00026389%2062.463%2048.2559%2014.207%20107.782%2014.207C133.396%2014.207%20156.923%2023.1425%20175.417%2038.0654C186.246%2028.8904%20200.259%2023.3574%20215.564%2023.3574C235.386%2023.3574%20253.04%2032.6387%20264.418%2047.0918C275.135%2038.5512%20288.711%2033.4463%20303.48%2033.4463C319.267%2033.4463%20333.691%2039.2786%20344.717%2048.9053C357.97%2020.0432%20387.129%200%20420.969%200Z'%20fill='url(%23paint0_linear_0_4)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_0_4'%20x1='252.416'%20y1='0'%20x2='252.416'%20y2='460.774'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FCF0C0'/%3e%3cstop%20offset='1'%20stop-color='white'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";function Ea({title:e,subtitle:t}){return i.jsxs("div",{className:"ck-footer",children:[i.jsx("img",{className:"ck-footer__clouds",src:Wg,alt:""}),i.jsxs("div",{className:"ck-footer__text",children:[i.jsx("div",{className:"ck-footer__title",children:e}),i.jsx("div",{className:"ck-footer__subtitle",children:t})]})]})}const Qg={title:"PageFooter",feature:"Shared",description:"Cloud footer at the end of every home page.",stories:[{name:"as in Figma",render:()=>i.jsx(Ea,{title:`Shop
Cashback
Repeat!`,subtitle:"Designed for smart shoppers"})},{name:"two lines",render:()=>i.jsx(Ea,{title:`Shop
Smart!`,subtitle:"Cashback on every order"})}]},Xg=Object.freeze(Object.defineProperty({__proto__:null,default:Qg},Symbol.toStringTag,{value:"Module"}));function bs({label:e="Grab deal",onGrab:t}){return i.jsx("div",{className:"ck-pdp-footer",children:i.jsx(Lt,{size:"sheet",onClick:t,children:e})})}const Yg={title:"PdpFooter",feature:"Product detail",description:"Pinned bar with one full-width Grab deal button (Figma 485:7679).",stories:[{name:"Grab deal",render:()=>i.jsx(bs,{})},{name:"custom label",render:()=>i.jsx(bs,{label:"Shop on Flipkart"})}]},Jg=Object.freeze(Object.defineProperty({__proto__:null,default:Yg},Symbol.toStringTag,{value:"Module"})),$g="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='89.0928'%20height='100.093'%20viewBox='0%200%2089.0928%20100.093'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Star%202'%20filter='url(%23filter0_dddd_0_35)'%3e%3cpath%20d='M32.0866%208.46574C37.4109%20-1.48858%2051.6819%20-1.48858%2057.0062%208.46574C67.8099%205.19183%2077.901%2015.283%2074.6271%2026.0866C84.5814%2031.4109%2084.5814%2045.6819%2074.6271%2051.0062C77.901%2061.8099%2067.8099%2071.901%2057.0062%2068.6271C51.6819%2078.5814%2037.4109%2078.5814%2032.0866%2068.6271C21.283%2071.901%2011.1918%2061.8099%2014.4657%2051.0062C4.51142%2045.6819%204.51142%2031.4109%2014.4657%2026.0866C11.1918%2015.283%2021.283%205.19183%2032.0866%208.46574Z'%20fill='url(%23paint0_linear_0_35)'/%3e%3cpath%20d='M33.1406%209.02926C38.0147%20-0.0830237%2051.078%20-0.0829899%2055.9521%209.02926L56.415%209.89352L57.3525%209.60934C67.2425%206.61228%2076.4804%2015.8502%2073.4834%2025.7402L73.1992%2026.6777L74.0634%2027.1406C83.1759%2032.0147%2083.1758%2045.078%2074.0634%2049.9521L73.1992%2050.415L73.4834%2051.3525C76.4804%2061.2425%2067.2425%2070.4804%2057.3525%2067.4834L56.415%2067.1992L55.9521%2068.0634C51.078%2077.1758%2038.0147%2077.1759%2033.1406%2068.0634L32.6777%2067.1992L31.7402%2067.4834C21.8502%2070.4804%2012.6123%2061.2425%2015.6093%2051.3525L15.8935%2050.415L15.0293%2049.9521C5.91701%2045.078%205.91698%2032.0147%2015.0293%2027.1406L15.8935%2026.6777L15.6093%2025.7402C12.6123%2015.8502%2021.8502%206.61228%2031.7402%209.60934L32.6777%209.89352L33.1406%209.02926Z'%20stroke='white'%20stroke-width='2.3898'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_dddd_0_35'%20x='0'%20y='0'%20width='89.0928'%20height='100.093'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_0_35'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.09%200'/%3e%3cfeBlend%20mode='normal'%20in2='effect1_dropShadow_0_35'%20result='effect2_dropShadow_0_35'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='10'/%3e%3cfeGaussianBlur%20stdDeviation='3'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.05%200'/%3e%3cfeBlend%20mode='normal'%20in2='effect2_dropShadow_0_35'%20result='effect3_dropShadow_0_35'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='17'/%3e%3cfeGaussianBlur%20stdDeviation='3.5'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.01%200'/%3e%3cfeBlend%20mode='normal'%20in2='effect3_dropShadow_0_35'%20result='effect4_dropShadow_0_35'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect4_dropShadow_0_35'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_0_35'%20x1='10.1267'%20y1='-68.2047'%20x2='104.642'%20y2='-60.3707'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2300743D'/%3e%3cstop%20offset='0.50076'%20stop-color='%2300A865'/%3e%3cstop%20offset='1'%20stop-color='%2300743D'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Kg="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='113.687'%20height='22.1406'%20viewBox='0%200%20113.687%2022.1406'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Union'%20d='M112.59%200C113.44%200.000350382%20113.967%200.928001%20113.53%201.6582L108.949%209.32324L113.53%2016.9873C113.967%2017.7175%20113.44%2018.6452%20112.59%2018.6455H104.032V18.6562L52.0156%2018.5381H3.60254C1.61323%2018.5381%20-2.86056e-05%2020.1513%207.60859e-10%2022.1406V6.57422C4.58054e-05%202.94346%202.94345%203.38433e-05%206.57422%200H112.59Z'%20fill='url(%23paint0_linear_0_28)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_0_28'%20x1='0.049148'%20y1='10.8202'%20x2='33.2365'%20y2='11.1124'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23BC0000'/%3e%3cstop%20offset='0.120417'%20stop-color='%23FF8989'/%3e%3cstop%20offset='0.369136'%20stop-color='%23E02323'/%3e%3cstop%20offset='1'%20stop-color='%23BE0D0D'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Zg="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='13.0666'%20height='12.4271'%20viewBox='0%200%2013.0666%2012.4271'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Star%201'%20d='M6.53332%200L8.43109%204.25748L13.0666%204.74673L9.60398%207.86726L10.5711%2012.4271L6.53332%2010.0982L2.49551%2012.4271L3.46266%207.86726L0%204.74673L4.63555%204.25748L6.53332%200Z'%20fill='%236C9B03'/%3e%3c/svg%3e",qg="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ci:share-ios-export'%3e%3cpath%20id='Vector'%20d='M15%206L12%203L9%206M12%203V13M7%2010C6.068%2010%205.602%2010%205.235%2010.152C4.99218%2010.2525%204.77155%2010.3999%204.58572%2010.5857C4.3999%2010.7716%204.25251%2010.9922%204.152%2011.235C4%2011.602%204%2012.068%204%2013V17.8C4%2018.92%204%2019.48%204.218%2019.908C4.40974%2020.2843%204.71569%2020.5903%205.092%2020.782C5.519%2021%206.079%2021%207.197%2021H16.804C17.922%2021%2018.481%2021%2018.908%2020.782C19.284%2020.59%2019.59%2020.284%2019.782%2019.908C20%2019.48%2020%2018.921%2020%2017.803V13C20%2012.068%2020%2011.602%2019.848%2011.235C19.7475%2010.9922%2019.6001%2010.7716%2019.4143%2010.5857C19.2284%2010.3999%2019.0078%2010.2525%2018.765%2010.152C18.398%2010%2017.932%2010%2017%2010'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e";function Sr({image:e,imageAlt:t="",ribbon:n,rating:r,lowestPrice:o,onShare:s}){return i.jsxs("div",{className:"ck-pdp-hero",children:[i.jsxs("div",{className:"ck-pdp-hero__panel",children:[i.jsx("img",{className:"ck-pdp-hero__photo",src:e,alt:t}),i.jsx("button",{type:"button",className:"ck-pdp-hero__share","aria-label":"Share",onClick:s,children:i.jsx("img",{src:qg,alt:""})}),r&&i.jsxs("div",{className:"ck-pdp-hero__rating",children:[i.jsx("img",{className:"ck-pdp-hero__star",src:Zg,alt:""}),i.jsx("span",{className:"ck-pdp-hero__rating-value",children:r.value}),i.jsxs("span",{className:"ck-pdp-hero__rating-count",children:["(",r.count,")"]})]}),o!=null&&i.jsxs("div",{className:"ck-pdp-hero__badge",children:[i.jsx("img",{src:$g,alt:""}),i.jsxs("div",{className:"ck-pdp-hero__badge-text",children:[i.jsx("span",{className:"ck-pdp-hero__badge-label",children:"Lowest price"}),i.jsx("span",{className:"ck-pdp-hero__badge-price",children:Le(o)})]})]})]}),n&&i.jsxs("div",{className:"ck-pdp-hero__ribbon",children:[i.jsx("img",{className:"ck-pdp-hero__ribbon-fold",src:Qu,alt:""}),i.jsx("img",{className:"ck-pdp-hero__ribbon-band",src:Kg,alt:""}),i.jsx("span",{className:"ck-pdp-hero__ribbon-text",children:n})]})]})}const e2={title:"PdpHero",feature:"Product detail",description:"Photo panel of the product detail sheet. Ribbon, rating and the Lowest price badge are each optional.",stories:[{name:"as in Figma",render:()=>i.jsx(Sr,{image:T.image,ribbon:T.ribbon,rating:T.rating,lowestPrice:T.lowestPrice})},{name:"photo only",render:()=>i.jsx(Sr,{image:T.image})},{name:"rating, no ribbon or badge",render:()=>i.jsx(Sr,{image:T.image,rating:T.rating})},{name:"long ribbon text",render:()=>i.jsx(Sr,{image:T.image,ribbon:"Lowest price in the last 12 months",lowestPrice:1299})}]},t2=Object.freeze(Object.defineProperty({__proto__:null,default:e2},Symbol.toStringTag,{value:"Module"}));function Jo({title:e,price:t,usually:n,note:r,offer:o}){return i.jsxs("div",{className:"ck-pdp-price",children:[i.jsxs("div",{className:"ck-pdp-price__top",children:[i.jsx("div",{role:"heading","aria-level":1,className:"ck-pdp-price__title",children:e}),i.jsxs("div",{className:"ck-pdp-price__prices",children:[i.jsxs("div",{className:"ck-pdp-price__row",children:[i.jsx("span",{className:"ck-pdp-price__price",children:Le(t)}),n!=null&&i.jsxs("span",{className:"ck-pdp-price__usually",children:["Usually ",Le(n)]})]}),r&&i.jsx("span",{className:"ck-pdp-price__note",children:r})]})]}),o&&i.jsx("span",{className:"ck-pdp-price__offer",children:o})]})}const n2={title:"PdpPriceBlock",feature:"Product detail",description:"Title, price, usual price, note and offer line.",stories:[{name:"as in Figma",render:()=>i.jsx(Jo,{title:T.title,price:T.price,usually:T.usually,note:T.note,offer:T.offer})},{name:"price only",render:()=>i.jsx(Jo,{title:T.title,price:T.price})},{name:"long title",render:()=>i.jsx(Jo,{title:"Boat Airdopes 141 TWS earbuds with 42 hours of playback, ENx noise cancellation and ASAP charge",price:1299,usually:1899,offer:T.offer})}]},r2=Object.freeze(Object.defineProperty({__proto__:null,default:n2},Symbol.toStringTag,{value:"Module"})),o2="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='20.007'%20height='20.007'%20viewBox='0%200%2020.007%2020.007'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M13.1804%206.50516L6.82664%2012.8589M6.82664%206.50516L13.1804%2012.8589'%20stroke='white'%20stroke-width='1.71489'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_2'%20d='M10.0035%2019.1496C15.0547%2019.1496%2019.1496%2015.0547%2019.1496%2010.0035C19.1496%204.95227%2015.0547%200.857443%2010.0035%200.857443C4.95227%200.857443%200.857443%204.95227%200.857443%2010.0035C0.857443%2015.0547%204.95227%2019.1496%2010.0035%2019.1496Z'%20stroke='white'%20stroke-width='1.71489'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e";function Ta({onClose:e,height:t,footer:n,children:r}){return i.jsxs("div",{className:"ck-pdp",children:[i.jsx("button",{type:"button",className:"ck-pdp__close","aria-label":"Close",onClick:e,children:i.jsx("img",{src:o2,alt:"",width:"20.007",height:"20.007"})}),i.jsxs("div",{className:"ck-pdp__sheet",style:t?{height:t}:void 0,children:[i.jsx("div",{className:"ck-pdp__body",children:r}),n]})]})}const s2=i.jsx("p",{style:{margin:16,fontSize:12},children:"Sheet content goes here."}),i2={title:"PdpSheet",feature:"Product detail",description:"Bottom sheet of the product detail page: close button, white sheet with 32px top corners, scrolling body, optional pinned footer.",stories:[{name:"content height",render:()=>i.jsx(Ta,{children:s2})},{name:"fixed height, body scrolls, footer pinned",render:()=>i.jsx(Ta,{height:320,footer:i.jsx(bs,{}),children:Array.from({length:12},(e,t)=>i.jsxs("p",{style:{margin:8,fontSize:12},children:["Line ",t+1]},t))})}]},a2=Object.freeze(Object.defineProperty({__proto__:null,default:i2},Symbol.toStringTag,{value:"Module"}));function $u({amounts:e,selected:t,onSelect:n}){return i.jsx("div",{className:"ck-pills",children:i.jsx("div",{className:"ck-pills__row",children:e.map(r=>{const o=r===t;return i.jsx("button",{type:"button","aria-pressed":o,onClick:()=>n==null?void 0:n(r),className:`ck-pills__pill ${o?"ck-pills__pill--on":""}`,children:i.jsxs("span",{className:"ck-pills__text",children:[i.jsx("span",{className:"ck-pills__under",children:"Under "}),i.jsx("span",{className:"ck-pills__amount",children:Le(r)})]})},r)})})})}function bi({amounts:e,start:t}){const[n,r]=D.useState(t);return i.jsx($u,{amounts:e,selected:n,onSelect:r})}const l2={title:"PricePills",feature:"Product listing",description:'"Under ₹…" price filter pills; one is always selected. Tap to switch.',stories:[{name:"Under ₹99 selected",render:()=>i.jsx(bi,{amounts:Pa,start:99})},{name:"Under ₹299 selected",render:()=>i.jsx(bi,{amounts:Pa,start:299})},{name:"big amounts",render:()=>i.jsx(bi,{amounts:[999,1999,4999],start:1999})}]},c2=Object.freeze(Object.defineProperty({__proto__:null,default:l2},Symbol.toStringTag,{value:"Module"}));function Dn({stats:e}){const t=e.slice(0,4);if(!t.length)return null;const n=[];for(let r=0;r<t.length;r+=2)n.push(t.slice(r,r+2));return i.jsx("div",{className:"ck-stats",children:n.map((r,o)=>r.length===2?i.jsx("div",{className:"ck-stats__row",children:r.map(s=>i.jsxs("div",{className:"ck-stats__tile",children:[i.jsx("span",{className:"ck-stats__label",children:s.label}),i.jsx("span",{className:"ck-stats__value",children:Le(s.value)})]},s.label))},o):i.jsxs("div",{className:"ck-stats__wide",children:[i.jsx("span",{className:"ck-stats__label",children:r[0].label}),i.jsx("span",{className:"ck-stats__value",children:Le(r[0].value)})]},o))})}const d2={title:"PriceStats",feature:"Product detail",description:"One to four grey price tiles. A last tile with no partner becomes a wide tile (Figma has the 4, 3 and 1 tile versions).",stories:[{name:"four tiles",render:()=>i.jsx(Dn,{stats:T.stats})},{name:"three tiles",render:()=>i.jsx(Dn,{stats:T.stats.slice(0,3)})},{name:"two tiles",render:()=>i.jsx(Dn,{stats:T.stats.slice(0,2)})},{name:"one tile",render:()=>i.jsx(Dn,{stats:T.stats.slice(0,1)})},{name:"large prices",render:()=>i.jsx(Dn,{stats:[{label:"Highest Price",value:124999},{label:"Lowest Price",value:99999}]})}]},p2=Object.freeze(Object.defineProperty({__proto__:null,default:d2},Symbol.toStringTag,{value:"Module"})),je=ot(Ll),u2={titleRest:"3-in-1 Floor Cleaning Brush with Wiper, Scrubber and Extra Long Handle for Tiles"},m2={title:"ProductCard",feature:"Product listing",description:"Deal card in the 4 Figma sizes: masthead 116 (Mast-head), main 158 (Main-card), horizontal 213 (Horizontal-card), second 141 (second card).",stories:[{name:"main (NEW)",render:()=>i.jsx($,{variant:"main",...je})},{name:"second",render:()=>i.jsx($,{variant:"second",...je,imageSrc:So.headphones})},{name:"masthead",render:()=>i.jsx($,{variant:"masthead",...je,imageSrc:So.earbuds})},{name:"horizontal",render:()=>i.jsx($,{variant:"horizontal",...je,imageSrc:So.earbuds})},{name:"listing (sub-category, brand and product detail frames)",render:()=>i.jsx($,{variant:"listing",...je,imageSrc:So.headphones})},{name:"main, long title",render:()=>i.jsx($,{variant:"main",...je,...u2})},{name:"second, no cashback",render:()=>i.jsx($,{variant:"second",...je,cashback:void 0})},{name:"masthead, no image",render:()=>i.jsx($,{variant:"masthead",...je,imageSrc:void 0})},{name:"main, no store logo",render:()=>i.jsx($,{variant:"main",...je,storeLogo:void 0})},{name:"horizontal, ₹1,299",render:()=>i.jsx($,{variant:"horizontal",...je,price:1299,mrp:4999})},{name:"main, loading",render:()=>i.jsx($,{variant:"main",...je,loading:!0})},{name:"listing, loading",render:()=>i.jsx($,{variant:"listing",...je,loading:!0})},{name:"second, loading",render:()=>i.jsx($,{variant:"second",...je,loading:!0})},{name:"horizontal, loading",render:()=>i.jsx($,{variant:"horizontal",...je,loading:!0})}]},h2=Object.freeze(Object.defineProperty({__proto__:null,default:m2},Symbol.toStringTag,{value:"Module"})),f2="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='8.14413'%20height='99.2881'%20viewBox='0%200%208.14413%2099.2881'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Star%205'%20d='M4.07207%200L4.20561%201.07196C4.47063%203.19935%206.0494%204.92787%208.14413%205.38407C6.10046%205.82916%204.63875%207.63203%204.62582%209.72357L4.07207%2099.2881L3.51831%209.72357C3.50538%207.63203%202.04368%205.82916%200%205.38407C2.09474%204.92787%203.6735%203.19935%203.93853%201.07196L4.07207%200Z'%20fill='url(%23paint0_linear_0_4)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_0_4'%20x1='2.60189'%20y1='3.00042'%20x2='2.60188'%20y2='99.2881'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%231F1F29'/%3e%3cstop%20offset='1'%20stop-color='%231F1F29'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";function Cr({title:e,subtitle:t,endsAt:n,deals:r,loading:o,onDealSelect:s,onDealShare:a,onGrabDeal:l}){const[c,d]=D.useState(0),u=m=>{const{scrollLeft:k,scrollWidth:_,clientWidth:v}=m.currentTarget,E=_-v;d(E>0?k/E:0)},f=D.useMemo(()=>o?Array.from({length:3},(m,k)=>i.jsx($,{variant:"second",...ot(g2),loading:!0},k)):r.map(m=>i.jsx($,{variant:"second",...ot(m),onSelect:s&&(()=>s(m)),onShare:a&&(()=>a(m)),onGrab:l&&(()=>l(m))},m.id)),[r,o,s,a,l]);return i.jsxs("section",{className:"ck-sale-deals",children:[i.jsx("div",{className:"ck-sale-deals__fade"}),i.jsx("div",{role:"heading","aria-level":2,className:"ck-sale-deals__title",children:e}),i.jsx("div",{className:"ck-sale-deals__timer",children:i.jsx(jn,{endsAt:n})}),i.jsxs("div",{className:"ck-sale-deals__subtitle-row",children:[i.jsx("div",{className:"ck-sale-deals__subtitle",children:t}),i.jsx("span",{className:"ck-sale-deals__sparkle",children:i.jsx("img",{src:f2,alt:""})})]}),i.jsx("div",{className:"ck-sale-deals__scroller",onScroll:u,children:i.jsx("div",{className:"ck-sale-deals__row",children:f})}),i.jsx("div",{className:"ck-sale-deals__indicator",children:i.jsx(zl,{progress:c})})]})}const g2={brand:"",name:"",store:"",price:0,mrp:0},Ao={title:"Sale Deals",subtitle:"Get Cashbacks upto 80%",endsAt:Date.now()+(56*60+38)*1e3},k2={title:"SaleDealsStrip",feature:"Product listing",description:"Yellow Sale Deals section. The admin sets title, subtitle and end time; products come from the API.",stories:[{name:"six products (swipe)",render:()=>i.jsx(Cr,{...Ao,deals:ae.slice(0,6)})},{name:"one product",render:()=>i.jsx(Cr,{...Ao,deals:ae.slice(0,1)})},{name:"loading",render:()=>i.jsx(Cr,{...Ao,deals:[],loading:!0})},{name:"sale ended",render:()=>i.jsx(Cr,{...Ao,endsAt:Date.now()-1e3,deals:ae.slice(0,3)})}]},_2=Object.freeze(Object.defineProperty({__proto__:null,default:k2},Symbol.toStringTag,{value:"Module"})),Ku="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='99.5033'%20height='68.376'%20viewBox='0%200%2099.5033%2068.376'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector%203200'%20d='M0%2068.376H99.5033L91.5047%2013.6846C90.3554%205.82601%2083.6153%200%2075.6731%200H23.8302C15.888%200%209.14794%205.82601%207.99862%2013.6846L0%2068.376Z'%20fill='url(%23paint0_linear_0_10)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_0_10'%20x1='49.7517'%20y1='0'%20x2='49.7517'%20y2='68.376'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23E0E7FF'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Zu="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='99.5033'%20height='68.376'%20viewBox='0%200%2099.5033%2068.376'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector%203201'%20d='M0%2068.376H99.5033L91.5047%2013.6846C90.3554%205.82601%2083.6153%200%2075.6731%200H23.8302C15.888%200%209.14794%205.82601%207.99862%2013.6846L0%2068.376Z'%20fill='url(%23paint0_linear_0_14)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_0_14'%20x1='49.7517'%20y1='5.99342'%20x2='49.7517'%20y2='68.376'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23E5E7EE'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",v2="M0 68.376L7.99862 13.6846C9.14794 5.82601 15.888 0 23.8302 0H75.6731C83.6153 0 90.3554 5.82601 91.5047 13.6846L99.5033 68.376";function qu({mode:e,title:t,chips:n,selectedId:r,onSelect:o}){const s=a=>o==null?void 0:o(a===r?void 0:a);return i.jsxs("section",{className:`ck-scroll-filter ck-scroll-filter--${e}`,children:[t&&i.jsx("div",{role:"heading","aria-level":2,className:"ck-scroll-filter__title",children:t}),e==="brand"?i.jsx(Rl,{categories:n.map(a=>({id:a.id,name:a.name,icon:a.icon})),selectedId:r??"",noneSelected:r==null,ariaLabel:t??"Brands",onSelect:a=>s(a.id)}):i.jsx("div",{className:"ck-scroll-filter__scroller",children:i.jsx("div",{className:"ck-scroll-filter__tabs",role:"group","aria-label":t??"Product types",children:n.map(a=>{const l=a.id===r;return i.jsxs("button",{type:"button","aria-pressed":l,onClick:()=>s(a.id),className:`ck-scroll-filter__tab ${l?"ck-scroll-filter__tab--on":""}`,children:[i.jsx("img",{className:"ck-scroll-filter__tab-bg",src:l?Ku:Zu,alt:"",width:"99.5033",height:"68.376"}),l&&i.jsx("svg",{className:"ck-scroll-filter__tab-outline",width:"99.5033",height:"68.376",viewBox:"0 0 99.5033 68.376",fill:"none","aria-hidden":"true",children:i.jsx("path",{d:v2})}),i.jsx("span",{className:"ck-scroll-filter__tab-icon",children:i.jsx("img",{src:a.icon,alt:""})}),i.jsx("span",{className:"ck-scroll-filter__tab-label",children:a.name})]},a.id)})})})]})}function em({title:e,chips:t,selectedId:n,onSelect:r,alwaysVisible:o=!1}){const s=D.useRef(null),[a,l]=D.useState(!1),c=o||a;D.useEffect(()=>{const u=s.current;if(!u||o)return;let f=0;const m=()=>{var p;f=0;const _=parseFloat(getComputedStyle(u).top)||0,v=(p=u.previousElementSibling)==null?void 0:p.getBoundingClientRect();let E=u.nextElementSibling;for(;E&&!E.hasAttribute("data-filter-end");)E=E.nextElementSibling;const h=u.getBoundingClientRect();l(h.top<=_+.5&&(!v||v.bottom<=_)&&(!E||E.getBoundingClientRect().top>_+h.height))},k=()=>{f||(f=requestAnimationFrame(m))};return m(),window.addEventListener("scroll",k,{passive:!0}),window.addEventListener("resize",k),()=>{window.removeEventListener("scroll",k),window.removeEventListener("resize",k),f&&cancelAnimationFrame(f)}},[o]);const d=u=>{const f=s.current,m=f==null?void 0:f.previousElementSibling;if(f&&m&&a){const k=parseFloat(getComputedStyle(f).top)||0;window.scrollTo({top:window.scrollY+m.getBoundingClientRect().bottom-k-f.offsetHeight+1})}r==null||r(u===n?void 0:u)};return i.jsxs("div",{ref:s,className:`ck-filter-bar ${c?"ck-filter-bar--pinned":""}`,"aria-hidden":!c,children:[e&&i.jsx("div",{className:"ck-filter-bar__title",children:e}),i.jsx("div",{className:"ck-filter-bar__tabs",children:t.map(u=>{const f=u.id===n;return i.jsxs("button",{type:"button",tabIndex:c?0:-1,"aria-pressed":f,onClick:()=>d(u.id),className:`ck-filter-bar__tab ${f?"ck-filter-bar__tab--on":""}`,children:[i.jsx("img",{className:"ck-filter-bar__tab-bg",src:f?Ku:Zu,alt:""}),i.jsx("span",{className:"ck-filter-bar__icon",children:i.jsx("img",{src:u.icon,alt:""})}),i.jsx("span",{className:"ck-filter-bar__label",children:u.name})]},u.id)})})]})}function Eo({mode:e,title:t,initial:n}){const[r,o]=D.useState(n),s=e==="brand"?Vu:Fl;return i.jsx("div",{style:{background:"var(--ck-color-surface)",paddingTop:12},children:i.jsx(qu,{mode:e,title:t,chips:s,selectedId:r,onSelect:o})})}function x2(){const[e,t]=D.useState("chargers");return i.jsx("div",{style:{height:"var(--ck-filter-bar-h)"},children:i.jsx(em,{alwaysVisible:!0,title:"Shop by type",chips:Fl,selectedId:e,onSelect:t})})}const y2={title:"ScrollFilter",feature:"Browse and filter",description:"Filter inside the product scroll. Category mode = folder tabs; brand mode = the round strip. A pick filters the grids down to the next filter; tap again to clear. Not a price filter. ScrollFilterBar is the compact copy that pins under the price pills.",stories:[{name:"category mode, nothing picked",render:()=>i.jsx(Eo,{mode:"category",title:"Top Electronic Deals"})},{name:"category mode, Earphones picked",render:()=>i.jsx(Eo,{mode:"category",title:"Top Electronic Deals",initial:"earphones"})},{name:"brand mode, no heading",render:()=>i.jsx(Eo,{mode:"brand"})},{name:"brand mode, boAt picked",render:()=>i.jsx(Eo,{mode:"brand",initial:"boAt"})},{name:"compact bar, as it looks when pinned",render:()=>i.jsx(x2,{})}]},w2=Object.freeze(Object.defineProperty({__proto__:null,default:y2},Symbol.toStringTag,{value:"Module"})),Si=e=>i.jsx("div",{style:{background:"#ffe195",padding:8},children:i.jsx(zl,{progress:e})}),b2={title:"ScrollIndicator",feature:"Browse and filter",description:"Track under the Sale Deals row; the thumb follows the swipe.",stories:[{name:"start",render:()=>Si(0)},{name:"middle",render:()=>Si(.5)},{name:"end",render:()=>Si(1)}]},S2=Object.freeze(Object.defineProperty({__proto__:null,default:b2},Symbol.toStringTag,{value:"Module"}));function tm({showAfter:e,onClick:t}){const[n,r]=D.useState(!1);D.useEffect(()=>{let s=0;const a=()=>{s=0,r(window.scrollY>(e??window.innerHeight*1.5))},l=()=>{s||(s=requestAnimationFrame(a))};return a(),window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l),s&&cancelAnimationFrame(s)}},[e]);const o=()=>{t==null||t();const s=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:0,behavior:s?"auto":"smooth"})};return i.jsx("button",{type:"button","aria-label":"Back to top",className:`ck-scroll-top${n?" ck-scroll-top--shown":""}`,onClick:o,tabIndex:n?0:-1,"aria-hidden":!n,children:i.jsx("img",{src:Xu,alt:"",width:"22",height:"22"})})}const C2={title:"ScrollTopButton",feature:"Browse and filter",description:"Back-to-top button, fixed bottom-right. Fades in after one and a half screens of scroll; tap scrolls to the top. Scroll this page down to see it. Not in Figma yet.",stories:[{name:"shows after 200px (scroll the page)",render:()=>i.jsx(tm,{showAfter:200})}]},P2=Object.freeze(Object.defineProperty({__proto__:null,default:C2},Symbol.toStringTag,{value:"Module"})),ud="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='11.9996'%20height='30'%20viewBox='0%200%2011.9996%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%201354723065'%3e%3cpath%20id='Rectangle%2034628866'%20d='M0%200C0.238826%206.46793%205.38721%2011.6775%2011.8519%2011.9928L11.9996%2012H0V0Z'%20fill='%23F1F0F5'/%3e%3cpath%20id='Rectangle%2034628867'%20d='M0%2030C0.238826%2023.5321%205.38721%2018.3225%2011.8519%2018.0072L11.9996%2018H0V30Z'%20fill='%23F1F0F5'/%3e%3c/g%3e%3c/svg%3e";function La({height:e=30}){return i.jsxs("div",{className:"ck-break","aria-hidden":"true",style:{height:e},children:[i.jsx("div",{className:"ck-break__band"}),i.jsx("img",{className:"ck-break__corner ck-break__corner--left",src:ud,alt:""}),i.jsx("img",{className:"ck-break__corner ck-break__corner--right",src:ud,alt:""})]})}const md=e=>i.jsx("div",{style:{background:"var(--ck-color-surface)",width:"var(--ck-page-w)"},children:e}),N2={title:"SectionBreak",feature:"Browse and filter",description:"Grey band between two white sections, with the sections' inverse-rounded corners.",stories:[{name:"30px (under the photo block)",render:()=>md(i.jsx(La,{}))},{name:"29px",render:()=>md(i.jsx(La,{height:29}))}]},j2=Object.freeze(Object.defineProperty({__proto__:null,default:N2},Symbol.toStringTag,{value:"Module"}));function $o({title:e="Similar deals",deals:t,onDealSelect:n,onDealShare:r,onGrabDeal:o}){const[s,a]=D.useState(0),l=Array.from({length:Math.ceil(t.length/2)},(d,u)=>t.slice(u*2,u*2+2));if(!t.length)return null;const c=d=>{const{scrollLeft:u,scrollWidth:f,clientWidth:m}=d.currentTarget,k=f-m;a(k>0&&l.length>1?Math.round(u/k*(l.length-1)):0)};return i.jsxs("section",{className:"ck-similar",children:[i.jsx("div",{role:"heading","aria-level":2,className:"ck-similar__title",children:e}),i.jsx("div",{className:"ck-similar__scroller",onScroll:c,children:i.jsx("div",{className:"ck-similar__pages",children:l.map((d,u)=>i.jsx("div",{className:"ck-similar__page",children:d.map(f=>i.jsx($,{variant:"listing",...ot(f),onSelect:n&&(()=>n(f)),onShare:r&&(()=>r(f)),onGrab:o&&(()=>o(f))},f.id))},u))})}),i.jsx(an,{variant:"slate",count:l.length,active:s})]})}const Ci=e=>i.jsx("div",{style:{background:"var(--ck-color-surface)",width:"var(--ck-page-w)"},children:e}),B2={title:"SimilarDeals",feature:"Cross-sell",description:"Heading and swipeable pairs of listing cards with a three-dot pager. Hidden with no deals.",stories:[{name:"six deals, swipe sideways",render:()=>Ci(i.jsx($o,{deals:T.similar}))},{name:"two deals, no pager",render:()=>Ci(i.jsx($o,{deals:T.similar.slice(0,2)}))},{name:"one deal",render:()=>Ci(i.jsx($o,{deals:T.similar.slice(0,1)}))}]},D2=Object.freeze(Object.defineProperty({__proto__:null,default:B2},Symbol.toStringTag,{value:"Module"})),A2={empty:"No deals in this range yet. Try another price or category.",error:"Could not load deals. Check your connection and try again."};function Fr({kind:e,message:t,onRetry:n}){return i.jsxs("div",{className:`ck-status ck-status--${e}`,role:e==="error"?"alert":"status",children:[i.jsx("div",{className:"ck-status__text",children:t??A2[e]}),e==="error"&&n&&i.jsx("div",{className:"ck-status__retry",children:i.jsx(Lt,{onClick:n,children:"Try again"})})]})}const Pi=e=>i.jsx("div",{style:{background:"#fff"},children:e}),E2={title:"StatusMessage",feature:"Shared",description:"Empty and error states for deal lists. Not in Figma; placeholders for review.",stories:[{name:"empty",render:()=>Pi(i.jsx(Fr,{kind:"empty"}))},{name:"error with retry",render:()=>Pi(i.jsx(Fr,{kind:"error",onRetry:()=>{}}))},{name:"custom text",render:()=>Pi(i.jsx(Fr,{kind:"empty",message:"No Fashion deals under ₹99 today."}))}]},T2=Object.freeze(Object.defineProperty({__proto__:null,default:E2},Symbol.toStringTag,{value:"Module"})),L2="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='433.505'%20height='433.505'%20viewBox='0%200%20433.505%20433.505'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Ellipse%2022736'%20opacity='0.7'%20filter='url(%23filter0_f_0_26)'%3e%3ccircle%20cx='216.753'%20cy='216.753'%20r='116.753'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_26'%20x='0'%20y='0'%20width='433.505'%20height='433.505'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='50'%20result='effect1_foregroundBlur_0_26'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",F2=""+new URL("flash-pattern-BBm_2d4P.webp",import.meta.url).href,I2=""+new URL("flash-ticket-a-D016FEKR.svg",import.meta.url).href,M2=""+new URL("flash-ticket-b-C-LELHVj.svg",import.meta.url).href,R2="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='344'%20height='344'%20viewBox='0%200%20344%20344'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Ellipse%2022735'%20filter='url(%23filter0_f_0_29)'%3e%3ccircle%20cx='172'%20cy='172'%20r='72'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_29'%20x='0'%20y='0'%20width='344'%20height='344'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='50'%20result='effect1_foregroundBlur_0_29'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",z2="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='98.4824'%20height='98.1254'%20viewBox='0%200%2098.4824%2098.1254'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Star%201'%20d='M44.9614%202.65038C47.3905%200.45014%2051.0918%200.45014%2053.521%202.65038C55.8616%204.77069%2059.1964%205.39416%2062.145%204.26269C65.205%203.08833%2068.6571%204.42528%2070.1274%207.35448C71.5441%2010.1771%2074.4282%2011.9635%2077.5864%2011.9736C80.864%2011.984%2083.5997%2014.4776%2083.9126%2017.7402C84.2139%2020.8841%2086.2584%2023.5919%2089.1997%2024.7422C92.2522%2025.9358%2093.9028%2029.249%2093.0161%2032.4043C92.1614%2035.4446%2093.0894%2038.7077%2095.4165%2040.8428C97.8318%2043.0586%2098.1735%2046.7453%2096.2065%2049.3672C94.3113%2051.8935%2093.9983%2055.271%2095.397%2058.1025C96.8487%2061.0412%2095.8355%2064.6026%2093.0542%2066.3369C90.3745%2068.008%2088.8627%2071.044%2089.144%2074.1894C89.4362%2077.4541%2087.2049%2080.409%2083.9848%2081.0215C80.8823%2081.6117%2078.3753%2083.8967%2077.5014%2086.9316C76.5945%2090.0814%2073.4469%2092.0306%2070.2231%2091.4385C67.1168%2090.868%2063.9537%2092.0931%2062.0425%2094.6074C60.0589%2097.2169%2056.4196%2097.8974%2053.6274%2096.1807C50.937%2094.5267%2047.5453%2094.5267%2044.855%2096.1807C42.0627%2097.8974%2038.4234%2097.2169%2036.4399%2094.6074C34.5287%2092.0931%2031.3656%2090.868%2028.2593%2091.4385C25.0355%2092.0306%2021.8879%2090.0814%2020.9809%2086.9316C20.107%2083.8967%2017.6001%2081.6117%2014.4975%2081.0215C11.2775%2080.409%209.04622%2077.4541%209.33836%2074.1894C9.61965%2071.044%208.10784%2068.008%205.4282%2066.3369C2.64687%2064.6026%201.63367%2061.0412%203.08543%2058.1025C4.48412%2055.271%204.17105%2051.8935%202.27586%2049.3672C0.308837%2046.7453%200.650595%2043.0586%203.0659%2040.8428C5.39301%2038.7077%206.32099%2035.4446%205.46629%2032.4043C4.57953%2029.249%206.2302%2025.9358%209.28269%2024.7422C12.224%2023.5919%2014.2685%2020.8841%2014.5698%2017.7402C14.8827%2014.4776%2017.6184%2011.984%2020.896%2011.9736C24.0541%2011.9635%2026.9383%2010.1771%2028.355%207.35448C29.8253%204.42528%2033.2774%203.08833%2036.3374%204.26269C39.2859%205.39416%2042.6208%204.77069%2044.9614%202.65038Z'%20fill='%2336B4F8'%20stroke='white'%20stroke-width='2'/%3e%3c/svg%3e",O2="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='53.9925'%20height='1.91886'%20viewBox='0%200%2053.9925%201.91886'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector%202749'%20d='M0%200.95943H26.9962H53.9925'%20stroke='white'%20stroke-width='1.91886'/%3e%3c/svg%3e",H2="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='28.1378'%20height='1'%20viewBox='0%200%2028.1378%201'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector%202749'%20d='M0%200.5H14.0689H28.1378'%20stroke='white'%20stroke-opacity='0.7'/%3e%3c/svg%3e";function mt(e){const{kind:t,onSelect:n}=e;return i.jsxs("div",{role:n?"link":void 0,onClick:n,className:`ck-theme ck-theme--${t} ${n?"ck-theme--clickable":""}`,children:[t==="priceList"&&i.jsx(G2,{...e}),t==="spotlight"&&i.jsx(U2,{...e}),t==="flashSale"&&i.jsx(V2,{...e})]})}function Ol({children:e}){return i.jsx("span",{className:"ck-theme__title",children:e})}function nm({deal:e,onDealSelect:t,className:n,children:r}){return i.jsx("button",{type:"button",className:n,onClick:o=>{o.stopPropagation(),t==null||t(e)},children:r})}function G2({title:e,deals:t,loading:n,onDealSelect:r}){return i.jsxs(i.Fragment,{children:[i.jsx(Ol,{children:e}),i.jsx("div",{className:"ck-theme__rows",children:n?Array.from({length:4},(o,s)=>i.jsx("span",{className:"ck-theme__row-bone"},s)):t.slice(0,4).map(o=>i.jsxs(nm,{deal:o,onDealSelect:r,className:"ck-theme__row",children:[i.jsxs("span",{className:"ck-theme__row-main",children:[i.jsx("span",{className:"ck-theme__row-photo",children:o.image&&i.jsx("img",{src:o.image,alt:o.imageAlt??`${o.brand} ${o.name}`})}),i.jsxs("span",{className:"ck-theme__row-name",children:[o.brand," ",o.name]})]}),i.jsxs("span",{className:"ck-theme__row-prices",children:[i.jsxs("span",{className:"ck-theme__row-mrp-wrap",children:[i.jsx("span",{className:"ck-theme__row-mrp ck-trim",children:Le(o.mrp)}),i.jsx("span",{className:"ck-theme__row-strike",children:i.jsx("img",{src:H2,alt:""})})]}),i.jsx("span",{className:"ck-theme__row-price ck-trim",children:Le(o.price)})]})]},o.id))})]})}function U2({title:e,deals:t,art:n,loading:r}){const o=r?void 0:t[0],s=n??(o==null?void 0:o.image);return i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"ck-theme__glow ck-theme__glow--spotlight",children:i.jsx("span",{children:i.jsx("img",{src:R2,alt:""})})}),s&&i.jsx("img",{className:"ck-theme__spotlight-art",src:s,alt:o?`${o.brand} ${o.name}`:""}),o&&i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"ck-theme__star",children:i.jsx("span",{children:i.jsx("img",{src:z2,alt:""})})}),i.jsxs("span",{className:"ck-theme__bubble",children:[i.jsxs("span",{className:"ck-theme__bubble-mrp-wrap",children:[i.jsx("span",{className:"ck-theme__bubble-mrp ck-trim",children:Le(o.mrp)}),i.jsx("span",{className:"ck-theme__bubble-strike",children:i.jsx("img",{src:O2,alt:""})})]}),i.jsx("span",{className:"ck-theme__bubble-price ck-trim",children:Le(o.price)})]})]}),i.jsx(Ol,{children:e})]})}function V2({title:e,deals:t,loading:n,onDealSelect:r}){return i.jsxs(i.Fragment,{children:[i.jsx("img",{className:"ck-theme__pattern",src:F2,alt:""}),i.jsx("span",{className:"ck-theme__glow ck-theme__glow--flash",children:i.jsx("span",{children:i.jsx("img",{src:L2,alt:""})})}),i.jsx("div",{className:"ck-theme__tiles",children:n?Array.from({length:3},(o,s)=>i.jsx("span",{className:`ck-theme__tile ck-theme__tile--${s+1}`},s)):t.slice(0,3).map((o,s)=>i.jsxs(nm,{deal:o,onDealSelect:r,className:`ck-theme__tile ck-theme__tile--${s+1}`,children:[o.image&&i.jsx("img",{className:"ck-theme__tile-photo",src:o.image,alt:o.imageAlt??`${o.brand} ${o.name}`}),i.jsx("span",{className:"ck-theme__tag",children:i.jsxs("span",{children:[Uu(o.price,o.mrp),"% off"]})})]},o.id))}),i.jsx("span",{className:"ck-theme__ticket ck-theme__ticket--a",children:i.jsx("span",{children:i.jsx("span",{children:i.jsx("img",{src:I2,alt:""})})})}),i.jsx("span",{className:"ck-theme__percent ck-theme__percent--a",children:i.jsx("span",{children:"%"})}),i.jsx("span",{className:"ck-theme__ticket ck-theme__ticket--b",children:i.jsx("span",{children:i.jsx("span",{children:i.jsx("img",{src:M2,alt:""})})})}),i.jsx("span",{className:"ck-theme__percent ck-theme__percent--b",children:i.jsx("span",{children:"%"})}),i.jsx(Ol,{children:e})]})}const[Ni,hd,ji]=Ml,W2={title:"ThemeCard",feature:"Masthead / hero",description:"Cards from page type 2's swipe row: pink price list, green spotlight, blue Flash Sale.",stories:[{name:"priceList",render:()=>i.jsx(mt,{...Ni,deals:Tt["lowest-prices"]})},{name:"spotlight (admin art)",render:()=>i.jsx(mt,{...hd,deals:Tt.spotlight})},{name:"flashSale",render:()=>i.jsx(mt,{...ji,deals:Tt["flash-sale"]})},{name:"priceList, two rows, long names",render:()=>i.jsx(mt,{...Ni,deals:Tt["lowest-prices"].slice(0,2).map(e=>({...e,name:"3-in-1 Floor Cleaning Brush with Wiper and Scrubber"}))})},{name:"spotlight, product photo, ₹1,299",render:()=>i.jsx(mt,{...hd,art:void 0,deals:[{...Tt["lowest-prices"][0],price:1299,mrp:2999}]})},{name:"priceList, loading",render:()=>i.jsx(mt,{...Ni,deals:[],loading:!0})},{name:"flashSale, loading",render:()=>i.jsx(mt,{...ji,deals:[],loading:!0})},{name:"flashSale, empty",render:()=>i.jsx(mt,{...ji,deals:[]})}]},Q2=Object.freeze(Object.defineProperty({__proto__:null,default:W2},Symbol.toStringTag,{value:"Module"})),X2=""+new URL("rays-sunburst-1G-5EUBP.webp",import.meta.url).href;function Ko({cards:e,onCardSelect:t,onDealSelect:n,topBar:r,background:o}){return i.jsxs("section",{className:"ck-theme-hero",children:[o?i.jsx(Mt,{...o}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"ck-theme-hero__rays",children:[i.jsx("img",{src:X2,alt:""}),i.jsx("div",{className:"ck-theme-hero__rays-fade"})]}),i.jsx("div",{className:"ck-theme-hero__burn"}),i.jsx("div",{className:"ck-theme-hero__sky"})]}),i.jsx("div",{className:"ck-theme-hero__scroller",children:i.jsx("div",{className:"ck-theme-hero__row",children:e.map(({id:s,...a})=>i.jsx(mt,{...a,onSelect:t&&(()=>t({id:s,...a})),onDealSelect:n},s))})}),r&&i.jsx("div",{className:"ck-theme-hero__topbar",children:r})]})}const Bi=Ml.map(e=>({...e,deals:Tt[e.listId]})),Y2={title:"ThemeCardsHero",feature:"Masthead / hero",description:"Page type 2 top section: swipe row of theme cards over blue rays.",stories:[{name:"three cards (swipe)",render:()=>i.jsx(Ko,{cards:Bi,topBar:i.jsx(Me,{})})},{name:"one card",render:()=>i.jsx(Ko,{cards:Bi.slice(0,1),topBar:i.jsx(Me,{})})},{name:"loading",render:()=>i.jsx(Ko,{cards:Bi.map(e=>({...e,deals:[],loading:!0})),topBar:i.jsx(Me,{})})}]},J2=Object.freeze(Object.defineProperty({__proto__:null,default:Y2},Symbol.toStringTag,{value:"Module"})),Di=(e,t)=>i.jsx("div",{style:{background:e,paddingBottom:8},children:i.jsx(Me,{searchHints:t})}),$2={title:"TopBar",feature:"Shared",description:"Back button and search that sit over every top section's art. Pass searchHints to get the wide white bar that rotates product names.",stories:[{name:"on purple art",render:()=>Di("#8d08ed")},{name:"on blue art",render:()=>Di("#2687ff")},{name:"rotating search bar",render:()=>Di("#8d08ed",["nike shoes","tv","monitors","iphone","adidas","laptops"])}]},K2=Object.freeze(Object.defineProperty({__proto__:null,default:$2},Symbol.toStringTag,{value:"Module"})),Z2=90*60*1e3,Fa="ck-deals:cross-sell";let rm=null;function om(e){rm=e;try{e?localStorage.setItem(Fa,JSON.stringify(e)):localStorage.removeItem(Fa)}catch{}}function Ia(e,t=Date.now()){e.productCategory&&om({categoryId:e.productCategory,categoryName:e.productCategoryName,productId:e.id,at:t})}function fd(e=Date.now()){let t=rm;try{const n=localStorage.getItem(Fa),r=n?JSON.parse(n):null;r&&(!t||r.at>t.at)&&(t=r)}catch{}return!t||typeof t.categoryId!="string"||typeof t.at!="number"?null:e-t.at>Z2||t.at>e+6e4?(om(null),null):t}const q2={appliances:["Appliances"],electronics:["Mobile & Electronics"],fashion:["Fashion","Shoes"]},ek=3,sm=5,Ma=3,tk=90*60*1e3,Hl="ck-deals:best-deals-mix",Ra=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,""),nk=new Map(Object.entries(q2).flatMap(([e,t])=>t.map(n=>[Ra(n),e])));let Gl=null;function rk(e){let t=Gl;try{const n=localStorage.getItem(Hl),r=n?JSON.parse(n):null;r&&(!t||r.at>t.at)&&(t=r)}catch{}return!t||typeof t.key!="string"||!Array.isArray(t.ids)||typeof t.at!="number"||e-t.at>tk||t.at>e+6e4?null:t}function ok(e){Gl=e;try{localStorage.setItem(Hl,JSON.stringify(e))}catch{}}function sk(e,t=ek){const n=new Map,r=new Set;return e.filter(o=>{const s=o.category?nk.get(Ra(o.category)):void 0;if(!s)return!1;const a=`${s}|${Ra(o.productCategory??o.category??"")}`,l=n.get(s)??0;return l>=t||r.has(a)?!1:(r.add(a),n.set(s,l+1),!0)})}function ik(e,t=Math.random){const n=e.slice();for(let r=n.length-1;r>0;r--){const o=Math.floor(t()*(r+1));[n[r],n[o]]=[n[o],n[r]]}return n}function ak(e,{key:t,maxPrice:n,now:r=Date.now(),random:o}){const s=e.filter(u=>u.isRealDeal!==!1&&(n==null||u.price<=n)),a=new Map(s.map(u=>[u.id,u])),l=rk(r);if(l&&l.key===t&&l.ids.length>=Ma&&l.ids.every(u=>a.has(u)))return l.ids.map(u=>a.get(u));const c=sk(s);if(c.length<Ma)return[];const d=ik(c,o).slice(0,sm);return ok({key:t,ids:d.map(u=>u.id),at:r}),d}function lk(){Gl=null;try{localStorage.removeItem(Hl)}catch{}}function ft({deals:e,status:t="ready",onRetry:n,onDealSelect:r,onDealShare:o,onGrabDeal:s}){return t==="error"?i.jsx(Fr,{kind:"error",onRetry:n}):t==="ready"&&e.length===0?i.jsx(Fr,{kind:"empty"}):i.jsx("div",{className:"ck-grid",children:t==="loading"?Array.from({length:4},(a,l)=>i.jsx($,{variant:"main",...ot(ck),loading:!0},l)):e.map(a=>i.jsx($,{variant:"main",...ot(a),onSelect:r&&(()=>r(a)),onShare:o&&(()=>o(a)),onGrab:s&&(()=>s(a))},a.id))})}const ck={brand:"",name:"",store:"",price:0,mrp:0},dk=e=>{var t;return{categoryId:((t=e.categories[0])==null?void 0:t.id)??"",maxPrice:e.priceAmounts[0]}};function im(e,t){const n=t.find(r=>r.id===e.categoryId);return{categoryId:n!=null&&n.showsAll?void 0:e.categoryId,maxPrice:e.maxPrice}}const Cn=20,gd=13,kd=6,_d={status:"ready",items:[]},pk=3,To=3,uk=88,mk=24,hk=8,fk=["nike shoes","iPhone 16","smart TVs","monitors","adidas sneakers","boAt earbuds"],am="ck-deals:page-state",gk=90*60*1e3;function kk(){try{const e=sessionStorage.getItem(am),t=e?JSON.parse(e):null;return t&&Date.now()-t.at<gk?t:null}catch{return null}}const Ai=e=>e==null?void 0:e.trim().toLowerCase();function vd(e,t){if(!t)return!0;if(t.mode==="category")return e.productCategory===t.chipId;const n=Ai(t.chipId);return Ai(e.brand)===n||Ai(e.store)===n}function _k({config:e,data:t,selection:n,onSelectionChange:r,actions:o={}}){var Ul;const{track:s}=o,[a]=D.useState(kk),l=D.useRef(a),[c,d]=D.useState(()=>(a==null?void 0:a.chips)??{}),[u,f]=D.useState(()=>fd()),m=D.useRef(null),k=D.useRef(void 0),_=D.useRef(!0),v=D.useRef(c);v.current=c,D.useEffect(()=>{const y=()=>{document.visibilityState!=="hidden"&&f(fd())};return document.addEventListener("visibilitychange",y),window.addEventListener("pageshow",y),window.addEventListener("focus",y),window.addEventListener("popstate",y),()=>{document.removeEventListener("visibilitychange",y),window.removeEventListener("pageshow",y),window.removeEventListener("focus",y),window.removeEventListener("popstate",y)}},[]),D.useEffect(()=>{const y=()=>{try{sessionStorage.setItem(am,JSON.stringify({y:window.scrollY,chips:v.current,crossSell:k.current,at:Date.now()}))}catch{}},I=()=>document.visibilityState==="hidden"&&y();return document.addEventListener("visibilitychange",I),window.addEventListener("pagehide",y),()=>{document.removeEventListener("visibilitychange",I),window.removeEventListener("pagehide",y),y()}},[]);const E=t.products.status==="ready";D.useEffect(()=>{var B;const y=l.current;if(!E||!y)return;l.current=null;const I=(B=m.current)==null?void 0:B.querySelector(".ck-home__cross-sell"),R=I?I.getBoundingClientRect().top+window.scrollY:1/0,O=I&&k.current!==y.crossSell&&R<y.y?I.offsetHeight:0;window.scrollTo(0,y.y+O)},[E]),D.useEffect(()=>{s==null||s("page_view",{masthead:e.top.type,masthead_on:e.top.enabled!==!1})},[]);const h=D.useRef(!1),p=y=>{d({}),h.current=!0,r(y)};D.useLayoutEffect(()=>{var O;if(!h.current)return;h.current=!1;const y=(O=m.current)==null?void 0:O.querySelector(".ck-home__pills"),I=y==null?void 0:y.nextElementSibling;if(!y||!I)return;const R=I.getBoundingClientRect().top-y.getBoundingClientRect().bottom;R<0&&window.scrollBy(0,R)},[n.categoryId,n.maxPrice]);const g=y=>y&&o.openLink?()=>{var I;return(I=o.openLink)==null?void 0:I.call(o,y)}:void 0,x=(y,I,R)=>{var O;s==null||s("product_click",{block:I,position:R,category:y.productCategory,deal_id:y.id}),Ia(y),(O=o.openDeal)==null||O.call(o,y)},S=(y,I,R=0)=>({onDealSelect:o.openDeal&&(O=>x(O,y,R+I.indexOf(O)+1)),onDealShare:o.shareDeal,onGrabDeal:o.grabDeal&&(O=>{var B;s==null||s("grab_deal_click",{block:y,position:R+I.indexOf(O)+1,category:O.productCategory,deal_id:O.id}),Ia(O),(B=o.grabDeal)==null||B.call(o,O)})}),N=e.top.type==="dealsStrip"?e.top.searchHints??fk:void 0,P=i.jsx(Me,{onBack:o.back,onSearch:o.search,searchHints:N}),j=e.scrollFilterMinRows??pk,W=t.products,F=new Set,xe=()=>W.items.filter(y=>!F.has(y.id));let Ge=0,Ct=!1,xn,Kt=[],yn=0;const ir=y=>H.push(i.jsx("div",{"data-filter-end":"","aria-hidden":"true"},`${y}-end`));let b,A,L=-1;const H=[],G=e.sections.find(y=>y.type==="crossSell"&&y.enabled!==!1),ye=G&&t.crossSell&&W.status==="ready"&&t.crossSell.items.length>=To?t.crossSell:void 0;if((G==null?void 0:G.type)==="crossSell"&&ye){const y=ye.categoryName??ye.items[0].productCategoryName??"this",I=(O,B)=>(O??B).replace("{category}",y.toLowerCase()),R=(O,B)=>{const se=B?ye.items.filter(re=>!B.has(re.id)):ye.items,Q=(se.length>=To?se:ye.items).slice(0,Aa);if(Q.length<To)return null;const Z=S(G.id,Q);return b=ye.forId,i.jsx("div",{style:{marginTop:O},className:"ck-home__section ck-home__cross-sell",children:i.jsx(Un,{title:I(G.titleTemplate,"View more {category}"),subtitle:I(G.subtitle,"Because you viewed {category} recently"),deals:Q,...Z,onDealSelect:Z.onDealSelect&&(re=>{var U;s==null||s("cross_sell_click",{category:y,for_deal:ye.forId,position:Q.indexOf(re)+1}),(U=Z.onDealSelect)==null||U.call(Z,re)})})},`${G.id}-cross-sell`)};A={forId:ye.forId,build:R}}for(const y of e.sections){if(y.enabled===!1)continue;const I=y.gapBefore??Cn,R=(B,se,Q=I,Z="",re=y.id)=>H.push(i.jsx("div",{style:{marginTop:Q},className:`ck-home__section ${Z}`,children:se},`${re}-${B}`)),O=B=>{ir(B.id);const se=xe(),Q=B.chips.filter(U=>se.some(ue=>vd(ue,{mode:B.mode,chipId:U.id})));if(xn=void 0,!Q.length)return;const Z=Q.some(U=>U.id===c[B.id])?c[B.id]:void 0;Z&&(xn={mode:B.mode,chipId:Z});const re=U=>{d(ue=>({...ue,[B.id]:U})),s==null||s("scroll_filter_select",{mode:B.mode,value:U??"none",filter_id:B.id})};R("filter",i.jsx(qu,{mode:B.mode,title:B.title,chips:Q,selectedId:Z,onSelect:re}),B.gapBefore??Cn,"",B.id),H.push(i.jsx(em,{title:B.barTitle??B.title,chips:Q,selectedId:Z,onSelect:re},`${B.id}-bar`))};switch(y.type){case"saleDeals":{const B=t.saleDeals;(B.status==="loading"||B.items.length>0)&&R("strip",i.jsx(Cr,{title:y.title,subtitle:y.subtitle,endsAt:y.endsAt,deals:B.items,loading:B.status==="loading",...S(y.id,B.items)}));break}case"filters":R("row",i.jsx(Rl,{categories:e.categories,selectedId:n.categoryId,onSelect:B=>p({...n,categoryId:B.id})}),void 0,"ck-home__category"),R("pills",i.jsx($u,{amounts:e.priceAmounts,selected:n.maxPrice,onSelect:B=>p({...n,maxPrice:B})}),gd-kd,"ck-home__pills");break;case"productGrid":{const B=!Ct;Ct=!0;const se=B?gd-kd:I;if(B&&W.status!=="ready"){R("grid",i.jsx(ft,{deals:[],status:W.status,onRetry:o.retryProducts}),se,"ck-home__grid");break}let Q=y.count??1/0;const Z=(U,ue,ut)=>{R(U,i.jsx(ft,{deals:ue,...S(y.id,ue,yn)}),ut,"ck-home__grid"),yn+=ue.length},re=(U,ue,ut)=>{const Ne=xe().filter(st=>vd(st,xn)).slice(0,Math.min(ue,Q));Ne.forEach(st=>F.add(st.id)),Q-=Ne.length,Ge+=Math.ceil(Ne.length/2);const Pt=A?Ne.findIndex(st=>st.id===A.forId):-1;if(Pt>=0&&A){const st=Math.min(Ne.length,Pt-Pt%2+2);Z(U,Ne.slice(0,st),ut);const Vs=A.build(Cn,new Set(Ne.slice(Pt-Pt%2,st).map(dm=>dm.id)));A=void 0,Vs&&H.push(Vs),st<Ne.length&&Z(`${U}-after-cross-sell`,Ne.slice(st),Vs?Cn:I);return}(Ne.length||B&&U==="grid")&&Z(U,Ne,ut)};Kt.length&&Ge>=j&&O(Kt.shift()),Kt.length&&Ge<j?(re("grid",(j-Ge)*2,se),Ge>=j&&(O(Kt.shift()),re("grid-rest",1/0,Cn))):re("grid",1/0,se);break}case"scrollFilter":if(W.status!=="ready")break;Ge<j?Kt.push(y):O(y);break;case"crossSell":{const B=(U,ue,ut)=>(U??ue).replace("{category}",ut.toLowerCase());if(ye){L=H.length;break}if(t.crossSell||!u||W.status!=="ready")break;const se=xe().filter(U=>U.productCategory===u.categoryId&&U.id!==u.productId);if(se.length<To)break;const Q=se.slice(0,Aa);Q.forEach(U=>F.add(U.id));const Z=u.categoryName??Q[0].productCategoryName??u.categoryId;b=u.categoryId;const re=S(y.id,Q);R("cross-sell",i.jsx(Un,{title:B(y.titleTemplate,"View more {category}",Z),subtitle:B(y.subtitle,"Because you viewed {category} recently",Z),deals:Q,...re,onDealSelect:re.onDealSelect&&(U=>{var ue;s==null||s("cross_sell_click",{category:u.categoryId,position:Q.indexOf(U)+1}),(ue=re.onDealSelect)==null||ue.call(re,U)})}),I,"ck-home__cross-sell");break}case"bestDeals":{let B=t.bestDeals.items,se=t.bestDeals.status==="loading";if(!se&&B.length===0){const Q=t.mixPool??t.products;se=Q.status==="loading",Q.status==="ready"&&(im(n,e.categories).categoryId===void 0?B=ak(Q.items,{key:String(n.maxPrice),maxPrice:n.maxPrice}):B=t.products.items.length>=Ma?t.products.items.slice(0,sm):[])}(se||B.length>0)&&R("carousel",i.jsx(Xo,{title:y.title,deals:B,loading:se,...S(y.id,B)}),I,"ck-home__best-deals");break}case"brandBanner":R("banner",i.jsx(Na,{logo:y.logo,brandName:y.brandName,headline:y.headline,subline:y.subline,art:y.art,onSelect:g(y.href)}),I,"ck-home__banner");break;case"footer":R("footer",i.jsx(Ea,{title:y.title,subtitle:y.subtitle}));break}}if(A&&G){const y=A.build(G.gapBefore??Cn);y&&H.splice(L>=0?L:H.length,0,y)}D.useLayoutEffect(()=>{var O;const y=k.current;k.current=b;const I=_.current;if(_.current=!1,I||!b||y===b)return;const R=(O=m.current)==null?void 0:O.querySelector(".ck-home__cross-sell");R&&R.getBoundingClientRect().bottom<=0&&window.scrollBy(0,R.offsetHeight)},[b]);const Ue=b&&((Ul=t.crossSell)!=null&&Ul.at)?`${t.crossSell.forId}:${t.crossSell.at}`:void 0,wn=D.useRef(void 0);D.useEffect(()=>{if(!Ue||wn.current===Ue)return;let y=0;return y=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>{var U,ue,ut,Us,Ne;wn.current=Ue;const I=(U=m.current)==null?void 0:U.querySelector(".ck-home__cross-sell");if(!I)return;const R=(ue=m.current)==null?void 0:ue.querySelector(".ck-home__pills");let O=Math.max(0,(R==null?void 0:R.getBoundingClientRect().bottom)??0);(ut=m.current)==null||ut.querySelectorAll(".ck-filter-bar").forEach(Pt=>{getComputedStyle(Pt).visibility==="visible"&&(O=Math.max(O,Pt.getBoundingClientRect().bottom))});const B=I.getBoundingClientRect(),se=B.bottom+uk-window.innerHeight,Q=B.top-(O+mk),Z=Math.min(se,Q);if(Z<hk)return;const re=((Ne=(Us=window.matchMedia)==null?void 0:Us.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:Ne.matches)??!1;window.scrollBy({top:Z,behavior:re?"auto":"smooth"})})}),()=>cancelAnimationFrame(y)},[Ue]),D.useEffect(()=>{b&&(s==null||s("cross_sell_view",{category:b}))},[b]);const pt=(y,I="masthead_click")=>{const R=g(y);return R&&(()=>{s==null||s(I,I==="masthead_click"?{type:e.top.type,target:y}:{block:"masthead",target:y}),R()})},bn=y=>{for(const I of Object.values(t.lists)){const R=I.items.indexOf(y);if(R>=0)return R+1}return 0},lm={...o,openDeal:o.openDeal&&(y=>x(y,"masthead",bn(y)))},cm=e.sections.some(y=>y.type==="filters"&&y.enabled!==!1);return i.jsxs("div",{ref:m,className:"ck-home",style:cm?void 0:{"--ck-pills-sticky-h":"0px","--ck-category-h":"0px"},children:[e.top.enabled===!1?P:i.jsx(vk,{top:e.top,lists:t.lists,topBar:P,actions:lm,link:pt}),H,i.jsx(tm,{onClick:()=>s==null?void 0:s("scroll_top_click",{from_y:Math.round(window.scrollY)})})]})}function vk({top:e,lists:t,topBar:n,actions:r,link:o}){switch(e.type){case"categorySale":return i.jsx(Nn,{title:e.title,subtitle:e.subtitle,tiles:e.tiles,background:e.background,topBar:n,onTileSelect:s=>{var a;return(a=o(s.href))==null?void 0:a()}});case"themeCards":return i.jsx(Ko,{cards:e.cards.map(s=>{const a=t[s.listId]??_d;return{...s,deals:a.items,loading:a.status==="loading"}}),onCardSelect:s=>{var a;return(a=o(s.href))==null?void 0:a()},onDealSelect:r.openDeal,background:e.background,topBar:n});case"brandSlides":return i.jsx(Ba,{title:e.title,subtitle:e.subtitle,slides:e.slides,background:e.background,onSlideSelect:s=>{var a;return(a=o(s.href))==null?void 0:a()},topBar:n});case"dealsStrip":{const s=t[e.listId]??_d;return i.jsx(Bn,{titleArt:e.titleArt,titleAlt:e.titleAlt,liveDot:e.liveDot,deals:s.items,loading:s.status==="loading",viewAllLabel:e.viewAllLabel,showViewAll:e.viewAll!==!1&&o(e.viewAllHref)!==void 0,onViewAll:o(e.viewAllHref,"view_more_click"),background:e.background,onDealSelect:r.openDeal,topBar:n})}}}const Hs=e=>({id:"sale-deals",type:"saleDeals",title:"Sale Deals",subtitle:"Get Cashbacks upto 80%",endsAt:Date.now()+(56*60+38)*1e3,gapBefore:e}),so=e=>({id:"footer",type:"footer",title:`Shop
Cashback
Repeat!`,subtitle:"Designed for smart shoppers",gapBefore:e}),Gs={categories:pn,priceAmounts:Pa},kn={...Gs,top:{type:"categorySale",title:"Sale is Onnn!!",subtitle:"Starting from just ₹99",tiles:qr},sections:[Hs(12),{id:"filters",type:"filters",gapBefore:16},{id:"grid-1",type:"productGrid",count:4},{id:"best-deals",type:"bestDeals",title:"Best deals"},{id:"grid-2",type:"productGrid",count:4},{id:"banner",type:"brandBanner",...ws},{id:"grid-3",type:"productGrid"},so(123)]},xk={...kn,top:{...kn.top,enabled:!1}},yk={...kn,sections:kn.sections.map(e=>e.type==="saleDeals"?{...e,enabled:!1}:e)},gr={...kn,scrollFilterMinRows:3,sections:[Hs(12),{id:"filters",type:"filters",gapBefore:16},{id:"grid-1",type:"productGrid",count:4},{id:"type-filter",type:"scrollFilter",mode:"category",title:"Top Electronic Deals",barTitle:"Shop by type",chips:Fl},{id:"grid-2",type:"productGrid",count:6},{id:"cross-sell",type:"crossSell"},{id:"grid-3",type:"productGrid",count:4},{id:"banner",type:"brandBanner",...ws},{id:"brand-filter",type:"scrollFilter",mode:"brand",barTitle:"Shop by brand",chips:Vu},{id:"grid-4",type:"productGrid"},so(123)]},wk={...Gs,top:{type:"themeCards",cards:Ml},sections:[{id:"filters",type:"filters",gapBefore:19},{id:"grid-1",type:"productGrid",count:4},{id:"best-deals",type:"bestDeals",title:"Best deals"},{id:"grid-2",type:"productGrid"},so(188)]},bk={...Gs,top:{type:"brandSlides",title:"Sale is Onnn!!",subtitle:"Starting from just ₹99",slides:Il.map((e,t)=>({...e,id:`slide-${t+1}`}))},sections:[Hs(12),{id:"filters",type:"filters",gapBefore:12},{id:"grid",type:"productGrid",count:4},{id:"best-deals",type:"bestDeals",title:"Best deals"},so(112)]},Lo={...Gs,top:{type:"dealsStrip",...Wu,listId:"best-deals-strip",viewAllLabel:"view all"},sections:[Hs(12),{id:"filters",type:"filters",gapBefore:16},{id:"grid",type:"productGrid"},so(202)]},Sk=ae.map((e,t)=>({...e,category:["Fashion","Mobile & Electronics","Appliances","Beauty"][t%4]}));function we({config:e,state:t="ready",maxPrice:n,tapped:r,mix:o,matched:s}){D.useState(()=>r&&Ia(r)),D.useState(()=>o&&lk());const[a,l]=D.useState(()=>({...dk(e),...n?{maxPrice:n}:{}})),c=o?Sk:ae,d=t==="empty"?[]:of(c,im(a,e.categories)),u=m=>t==="loading"||t==="error"?{status:t,items:[]}:{status:"ready",items:m},f={saleDeals:u(ae.slice(0,6)),products:u(d),bestDeals:u(o?[]:d.slice(0,5)),mixPool:o?u(t==="empty"?[]:c):void 0,lists:Object.fromEntries(Object.entries(Tt).map(([m,k])=>[m,u(k)])),crossSell:r&&s!==void 0&&t==="ready"?{forId:r.id,categoryName:r.productCategoryName,items:ae.filter(m=>m.productCategory===r.productCategory&&m.id!==r.id).sort((m,k)=>Math.abs(m.price-r.price)-Math.abs(k.price-r.price)).slice(0,s)}:void 0};return i.jsx(_k,{config:e,data:f,selection:a,onSelectionChange:l,actions:{retryProducts:()=>{},openDeal:()=>{},grabDeal:()=>{},openLink:m=>console.info("[open]",m),track:(m,k)=>console.info("[track]",m,k)}})}const Ck={title:"HomePage",feature:"Pages",description:"The four home page types built from the admin setup. The category row and price pills filter the products below them.",stories:[{name:"main deals page: scroll filters + cross-sell (after a charger tap)",render:()=>i.jsx(we,{config:gr,maxPrice:399,tapped:ae.find(e=>e.productCategory==="chargers")})},{name:"cross-sell under the tapped row: 4 matches (after a charger tap)",render:()=>i.jsx(we,{config:gr,maxPrice:399,tapped:ae.find(e=>e.productCategory==="chargers"),matched:4})},{name:"cross-sell: 8 matches, swipe the carousel",render:()=>i.jsx(we,{config:gr,maxPrice:399,tapped:ae.find(e=>e.productCategory==="chargers"),matched:8})},{name:"cross-sell: 3 matches, one card beside a full column",render:()=>i.jsx(we,{config:gr,maxPrice:399,tapped:ae.find(e=>e.productCategory==="chargers"),matched:3})},{name:"cross-sell: 2 matches, nothing shown",render:()=>i.jsx(we,{config:gr,maxPrice:399,tapped:ae.find(e=>e.productCategory==="chargers"),matched:2})},{name:"best deals mix: random across appliances, electronics and fashion",render:()=>i.jsx(we,{config:kn,maxPrice:399,mix:!0})},{name:"page type 1: category sale zone",render:()=>i.jsx(we,{config:kn})},{name:"page type 2: theme cards",render:()=>i.jsx(we,{config:wk})},{name:"page type 3: brand slides",render:()=>i.jsx(we,{config:bk})},{name:"page type 4: BEST DEALS strip",render:()=>i.jsx(we,{config:Lo})},{name:"masthead off (top bar stays)",render:()=>i.jsx(we,{config:xk})},{name:"sale deals off",render:()=>i.jsx(we,{config:yk})},{name:"loading",render:()=>i.jsx(we,{config:Lo,state:"loading"})},{name:"empty",render:()=>i.jsx(we,{config:Lo,state:"empty"})},{name:"error",render:()=>i.jsx(we,{config:Lo,state:"error"})}]},Pk=Object.freeze(Object.defineProperty({__proto__:null,default:Ck},Symbol.toStringTag,{value:"Module"})),Nk=.05,jk=(e,t)=>t!==void 0&&t>0&&e<=t*(1+Nk);function Zt({detail:e,height:t,footer:n=!0,onClose:r,onShare:o,onGrab:s,onSimilarSelect:a,onSimilarShare:l,onSimilarGrab:c,onSummaryToggle:d}){var f,m;const u=[];return e.stats.length&&u.push({key:"stats",node:i.jsx(Dn,{stats:e.stats})}),(f=e.aiSummary)!=null&&f.length&&u.push({key:"ai",node:i.jsx(br,{points:e.aiSummary,description:e.description,specs:e.specs,onToggle:d})}),(m=e.terms)!=null&&m.length&&u.push({key:"terms",breaks:2,node:i.jsx(yr,{variant:"row",title:"CashKaro cashback terms",children:i.jsx(wr,{items:e.terms})})}),e.similar.length&&u.push({key:"similar",node:i.jsx($o,{deals:e.similar,onDealSelect:a,onDealShare:l,onGrabDeal:c})}),i.jsxs(Ta,{onClose:r,height:t,footer:n?i.jsx(bs,{onGrab:s}):void 0,children:[i.jsx(Sr,{image:e.image,imageAlt:e.imageAlt??e.title,ribbon:e.ribbon,rating:e.rating,lowestPrice:jk(e.price,e.lowestPrice)?e.lowestPrice:void 0,onShare:o}),i.jsxs("div",{className:"ck-product-detail__rest",children:[i.jsx(Jo,{title:e.title,price:e.price,usually:e.usually,note:e.note,offer:e.offer}),u.map((k,_)=>i.jsxs("div",{className:"ck-product-detail__block",children:[Array.from({length:k.breaks??1},(v,E)=>i.jsx(La,{height:_===0&&E===0?30:29},E)),k.node]},k.key))]})]})}const Bk={title:"ProductDetail",feature:"Pages",description:"Product detail sheet, built from the Figma frames 671:39589 (four tiles), 703:47781 (three), 703:47551 (one) and 485:7487 (opened short, footer pinned). Blocks with no data drop out with the break above them.",stories:[{name:"four price tiles",render:()=>i.jsx(Zt,{detail:T,footer:!1})},{name:"three price tiles",render:()=>i.jsx(Zt,{detail:{...T,stats:T.stats.slice(0,3)},footer:!1})},{name:"one price tile",render:()=>i.jsx(Zt,{detail:{...T,stats:T.stats.slice(0,1)},footer:!1})},{name:"opened short, Grab deal pinned (485:7487)",render:()=>i.jsx(Zt,{detail:T,height:625})},{name:"lowest price badge: price 4% above the low (shown)",render:()=>i.jsx(Zt,{detail:{...T,price:1299,lowestPrice:1249},footer:!1})},{name:"lowest price badge: price 6% above the low (hidden)",render:()=>i.jsx(Zt,{detail:{...T,price:1299,lowestPrice:1225},footer:!1})},{name:"price only: no history, summary, terms or similar",render:()=>i.jsx(Zt,{detail:{...T,stats:[],aiSummary:[],terms:[],similar:[],ribbon:void 0,lowestPrice:void 0}})}]},Dk=Object.freeze(Object.defineProperty({__proto__:null,default:Bk},Symbol.toStringTag,{value:"Module"})),qt=e=>i.jsx("div",{style:{background:"#fff",padding:"13px 16px"},children:e}),Ak=ae.slice(0,2).map(e=>({...e,name:"3-in-1 Floor Cleaning Brush with Wiper, Scrubber and Extra Long Handle"})),Ek={title:"ProductGrid",feature:"Product listing",description:"Two-column grid of main cards used on every home page, with loading, empty and error states.",stories:[{name:"four products",render:()=>qt(i.jsx(ft,{deals:ae.slice(0,4)}))},{name:"one product",render:()=>qt(i.jsx(ft,{deals:ae.slice(0,1)}))},{name:"many products",render:()=>qt(i.jsx(ft,{deals:ae.slice(0,10)}))},{name:"long titles",render:()=>qt(i.jsx(ft,{deals:Ak}))},{name:"loading",render:()=>qt(i.jsx(ft,{deals:[],status:"loading"}))},{name:"empty",render:()=>qt(i.jsx(ft,{deals:[]}))},{name:"error",render:()=>qt(i.jsx(ft,{deals:[],status:"error",onRetry:()=>{}}))}]},Tk=Object.freeze(Object.defineProperty({__proto__:null,default:Ek},Symbol.toStringTag,{value:"Module"})),Lk=`.book { --book-bg: #f6f6f7; --book-panel: #fff; --book-line: #e3e3e6; --book-text: #1a1a1a; --book-muted: #6b6b73; --book-accent: #ff6f1f; display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; font-family: system-ui, sans-serif; color: var(--book-text); background: var(--book-bg); }
.book__nav { background: var(--book-panel); border-right: 1px solid var(--book-line); padding: 16px; position: sticky; top: 0; height: 100vh; overflow: auto; box-sizing: border-box; }
.book__nav h1 { font-size: 15px; margin: 0 0 16px; }
.book__group { font-size: 11px; text-transform: uppercase; letter-spacing: .06em; color: var(--book-muted); margin: 16px 0 6px; }
.book__link { display: block; width: 100%; text-align: left; background: none; border: 0; padding: 6px 8px; border-radius: 6px; font: inherit; font-size: 13px; cursor: pointer; color: inherit; }
.book__link[aria-current="true"] { background: #fff1e8; color: var(--book-accent); font-weight: 600; }
.book__main { padding: 24px 32px; min-width: 0; }
.book__main h2 { margin: 0 0 4px; }
.book__desc { color: var(--book-muted); margin: 0 0 20px; font-size: 14px; }
.book__stage { background: #464646; border-radius: 12px; padding: 32px; display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-start; }
.book__story { display: flex; flex-direction: column; gap: 8px; }
.book__story-name { color: #bbb; font-size: 12px; }
.book__tabs { display: flex; gap: 4px; margin: 24px 0 0; }
.book__tab { border: 1px solid var(--book-line); border-bottom: 0; background: var(--book-bg); padding: 6px 12px; border-radius: 8px 8px 0 0; font: inherit; font-size: 12px; cursor: pointer; }
.book__tab[aria-selected="true"] { background: var(--book-panel); font-weight: 600; }
.book__code { margin: 0; background: var(--book-panel); border: 1px solid var(--book-line); border-radius: 0 8px 8px 8px; padding: 16px; overflow: auto; font-size: 12px; line-height: 1.5; max-height: 480px; }
.book__copy { margin-top: 8px; font-size: 12px; }
`,Fk=`import { Accordion, AccordionBullets } from "./Accordion";
import type { BookEntry } from "../../book/types";
import { sampleProductDetail as d } from "../../data/samples";

const entry: BookEntry = {
  title: "Accordion",
  feature: "Product detail",
  description: "Collapsible block. card = grey card (AI summary); row = white row (cashback terms). Tap the header to open or close.",
  stories: [
    { name: "card, open", render: () => <Accordion variant="card" title="AI summary" defaultOpen><AccordionBullets items={d.aiSummary ?? []} /></Accordion> },
    { name: "card, closed", render: () => <Accordion variant="card" title="AI summary"><AccordionBullets items={d.aiSummary ?? []} /></Accordion> },
    { name: "row, closed (as in Figma)", render: () => <Accordion variant="row" title="CashKaro cashback terms"><AccordionBullets items={d.terms ?? []} /></Accordion> },
    { name: "row, open", render: () => <Accordion variant="row" title="CashKaro cashback terms" defaultOpen><AccordionBullets items={d.terms ?? []} /></Accordion> },
  ],
};
export default entry;
`,Ik=`/* Figma 703:47504 (card) and 671:39669 (row) */
.ck-accordion { font-family: var(--ck-font-family); }
.ck-accordion--card { width: 338px; box-sizing: border-box; padding: var(--ck-space-xl) var(--ck-space-xl) var(--ck-space-2xl); border-radius: var(--ck-radius-card-lg); background: var(--ck-pdp-surface); }
.ck-accordion--row { width: 328px; box-sizing: border-box; padding: var(--ck-space-xl) var(--ck-space-xl) var(--ck-space-xl) 0; border-radius: var(--ck-radius-card-lg); background: var(--ck-color-surface); }
.ck-accordion__header { display: flex; width: 100%; align-items: center; justify-content: space-between; padding: 0; border: 0; background: none; cursor: pointer; text-align: left; font: inherit; }
.ck-accordion__title { font-size: var(--ck-text-xl); font-weight: 700; line-height: 1.44; letter-spacing: -0.32px; color: var(--ck-pdp-title); }
.ck-accordion__chevron { display: block; flex-shrink: 0; transition: rotate 150ms; }
.ck-accordion__header[aria-expanded="true"] .ck-accordion__chevron { rotate: 180deg; }
.ck-accordion__content { margin-top: var(--ck-space-xl); font-size: var(--ck-text-md); font-weight: 500; line-height: 1.44; letter-spacing: -0.24px; color: var(--ck-pdp-label); }
.ck-accordion--row .ck-accordion__content { padding-left: var(--ck-space-2xl); }
.ck-accordion__bullets { display: flex; margin: 0; padding: 0 0 0 18px; flex-direction: column; gap: var(--ck-space-xl); list-style: disc; }
`,Mk=`import { useId, useState, type ReactNode } from "react";
import chevron from "../../assets/pdp/chevron.svg";
import "./Accordion.css";

export type AccordionVariant = "card" | "row";

export interface AccordionProps {
  /** card: grey card with bullets (AI summary). row: white row with a heading only (cashback terms). */
  variant: AccordionVariant;
  title: string;
  /** Open when the page loads. */
  defaultOpen?: boolean;
  children?: ReactNode;
}

/** Collapsible block of the product detail sheet. The whole header is the button; the chevron turns when open. */
export function Accordion({ variant, title, defaultOpen = false, children }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <section className={\`ck-accordion ck-accordion--\${variant}\`}>
      <button
        type="button"
        className="ck-accordion__header"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="ck-accordion__title">{title}</span>
        <img className="ck-accordion__chevron" src={chevron} alt="" width="24" height="24" />
      </button>
      {open && (
        <div id={id} className="ck-accordion__content">
          {children}
        </div>
      )}
    </section>
  );
}

/** Bullet list in the card's body style: one disc per line, 12px apart. */
export function AccordionBullets({ items }: { items: string[] }) {
  return (
    <ul className="ck-accordion__bullets">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
`,Rk=`import type { BookEntry } from "../../book/types";
import { sampleProductDetail as d } from "../../data/samples";
import { AiSummary } from "./AiSummary";

const entry: BookEntry = {
  title: "AiSummary",
  feature: "Product detail",
  description:
    "Blue-tinted AI summary card for the product detail sheet. Three summary points always show, one line each. Tap the accordion to open the full description and specs; close it to fold back. Not in Figma yet.",
  stories: [
    { name: "small state (tap to open)", render: () => <AiSummary points={d.aiSummary!} description={d.description} specs={d.specs} /> },
    {
      name: "description as paragraphs",
      render: () => (
        <AiSummary
          points={d.aiSummary!}
          description={"boAt Airdopes 141 are true wireless earbuds built for long days. The case holds up to 42 hours of playback.\\n\\nboAt is an Indian audio brand founded in 2016 and one of the largest wearables makers in the country."}
          specs={d.specs}
        />
      ),
    },
    { name: "summary only, no details", render: () => <AiSummary points={d.aiSummary!} /> },
    { name: "specs only", render: () => <AiSummary points={d.aiSummary!} specs={d.specs} /> },
  ],
};
export default entry;
`,zk=`/* Not in Figma: sizes follow the PDP accordion card (338px, 12px padding, 14px radius); the blue tinge is new */
.ck-ai { width: 338px; box-sizing: border-box; padding: var(--ck-space-xl) var(--ck-space-xl) var(--ck-space-md); border: 1px solid var(--ck-ai-border); border-radius: var(--ck-radius-card-lg); background: var(--ck-ai-bg); font-family: var(--ck-font-family); }
.ck-ai__title { font-size: var(--ck-text-xl); font-weight: 700; line-height: 1.44; letter-spacing: -0.32px; color: var(--ck-ai-accent); }
.ck-ai__points { display: flex; margin: var(--ck-space-md) 0 0; padding: 0; flex-direction: column; gap: var(--ck-space-xs); list-style: none; font-size: var(--ck-text-md); font-weight: 500; line-height: 1.44; letter-spacing: -0.24px; color: var(--ck-pdp-title); }
/* Small state: each point on one line; opened, points wrap in full.
   The dot is drawn, not a list marker, because a marker is clipped by the one-line overflow. */
.ck-ai__points li { position: relative; padding-left: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ck-ai__points li::before { content: ""; position: absolute; left: 2px; top: 0.55em; width: 5px; height: 5px; border-radius: 50%; background: var(--ck-ai-accent); }
.ck-ai__points--full li { white-space: normal; }
.ck-ai__description { color: var(--ck-pdp-label); }
.ck-ai__para { margin: var(--ck-space-md) 0 0; font-size: var(--ck-text-md); font-weight: 500; line-height: 1.5; letter-spacing: -0.24px; color: var(--ck-pdp-label); }

.ck-ai__header { display: flex; width: 100%; margin-top: var(--ck-space-xl); padding: var(--ck-space-md) 0 var(--ck-space-xs); align-items: center; justify-content: space-between; border: 0; border-top: 1px solid var(--ck-ai-divider); background: none; cursor: pointer; text-align: left; font: inherit; font-size: var(--ck-text-lg); font-weight: 600; letter-spacing: -0.28px; color: var(--ck-pdp-title); scroll-margin: var(--ck-space-2xl); }
.ck-ai__chevron { display: block; flex-shrink: 0; transition: rotate 200ms ease; }
.ck-ai__header[aria-expanded="true"] .ck-ai__chevron { rotate: 180deg; }

.ck-ai__panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 300ms cubic-bezier(0.2, 0, 0, 1); }
.ck-ai__panel--open { grid-template-rows: 1fr; }
.ck-ai__panel-inner { min-height: 0; overflow: hidden; opacity: 0; transition: opacity 200ms ease; }
.ck-ai__panel--open .ck-ai__panel-inner { opacity: 1; transition-delay: 100ms; }

.ck-ai__specs { display: flex; margin: var(--ck-space-xl) 0 var(--ck-space-xs); flex-direction: column; overflow: hidden; border-radius: var(--ck-radius-image); background: var(--ck-color-surface); }
.ck-ai__spec { display: flex; gap: var(--ck-space-xl); padding: var(--ck-space-md) var(--ck-space-lg); font-size: var(--ck-text-md); line-height: 1.44; }
.ck-ai__spec + .ck-ai__spec { border-top: 1px solid var(--ck-ai-divider); }
.ck-ai__spec dt { width: 40%; flex-shrink: 0; font-weight: 500; color: var(--ck-pdp-label); }
.ck-ai__spec dd { margin: 0; font-weight: 600; color: var(--ck-pdp-title); }

@media (prefers-reduced-motion: reduce) {
  .ck-ai__panel, .ck-ai__panel-inner, .ck-ai__chevron { transition: none; }
}
`,Ok=`import { useId, useRef, useState } from "react";
import chevron from "../../assets/pdp/chevron.svg";
import "./AiSummary.css";

export interface AiSpec {
  label: string;
  value: string;
}

export interface AiSummaryProps {
  /** AI summary points. The first three always show, one line each; tapping open shows them in full. */
  points: string[];
  /** Full description of the product and brand: a text (blank lines start new paragraphs) or a list of points. */
  description?: string | string[];
  /** Spec rows shown under the description, e.g. { label: "Battery", value: "42 hours" }. */
  specs?: AiSpec[];
  /** Heading of the accordion. Default "Description and specs". */
  detailsTitle?: string;
  /** Called with the new state each time the accordion opens or closes, e.g. to track it. */
  onToggle?: (open: boolean) => void;
}

/**
 * Blue-tinted AI summary card for the product detail sheet.
 * Small state: three summary points on one line each, then a closed accordion.
 * Tapping the accordion opens the full description and specs; closing it folds back to the small state.
 */
export function AiSummary({ points, description, specs = [], detailsTitle = "Description and specs", onToggle }: AiSummaryProps) {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLButtonElement>(null);
  const id = useId();
  const descriptionPoints = Array.isArray(description) ? description.filter(Boolean) : [];
  const paragraphs = typeof description === "string" ? description.split(/\\n\\s*\\n/).map((p) => p.trim()).filter(Boolean) : [];
  const hasDetails = descriptionPoints.length > 0 || paragraphs.length > 0 || specs.length > 0;

  const toggle = () => {
    const next = !open;
    // Closing from deep inside a long description: bring the header back on screen first, so the card folds up in view.
    if (!next) header.current?.scrollIntoView({ block: "nearest" });
    setOpen(next);
    onToggle?.(next);
  };

  return (
    <section className="ck-ai" aria-label="AI summary">
      <div className="ck-ai__title">AI summary</div>
      <ul className={\`ck-ai__points\${open ? " ck-ai__points--full" : ""}\`}>
        {points.slice(0, 3).map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {hasDetails && (
        <>
          <button ref={header} type="button" className="ck-ai__header" aria-expanded={open} aria-controls={id} onClick={toggle}>
            <span>{detailsTitle}</span>
            <img className="ck-ai__chevron" src={chevron} alt="" width="24" height="24" />
          </button>
          {/* Grid rows 0fr -> 1fr animates to the content's real height without measuring it */}
          <div id={id} className={\`ck-ai__panel\${open ? " ck-ai__panel--open" : ""}\`} aria-hidden={!open}>
            <div className="ck-ai__panel-inner">
              {paragraphs.map((p, i) => (
                <p key={i} className="ck-ai__para">
                  {p}
                </p>
              ))}
              {descriptionPoints.length > 0 && (
                <ul className="ck-ai__points ck-ai__points--full ck-ai__description">
                  {descriptionPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              {specs.length > 0 && (
                <dl className="ck-ai__specs">
                  {specs.map((spec) => (
                    <div key={spec.label} className="ck-ai__spec">
                      <dt>{spec.label}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
`,Hk=`import { BestDealsCarousel } from "./BestDealsCarousel";
import type { BookEntry } from "../../book/types";
import { sampleProducts } from "../../data/samples";

const entry: BookEntry = {
  title: "BestDealsCarousel",
  feature: "Product listing",
  description: "Green Best deals panel. Swipe or tap a faded card to bring it to the middle.",
  stories: [
    { name: "five products", render: () => <BestDealsCarousel title="Best deals" deals={sampleProducts.slice(0, 5)} /> },
    { name: "one product", render: () => <BestDealsCarousel title="Best deals" deals={sampleProducts.slice(0, 1)} /> },
    { name: "loading", render: () => <BestDealsCarousel title="Best deals" deals={[]} loading /> },
  ],
};
export default entry;
`,Gk=`/* Offsets are Figma coordinates inside the 340×384 frame */
.ck-best-deals { position: relative; width: 340px; height: 384px; flex-shrink: 0; overflow: clip; border-radius: var(--ck-radius-panel); background: var(--ck-best-deals-bg); font-family: var(--ck-font-family); line-height: 1.5; }

.ck-best-deals__heading { position: absolute; left: 50%; top: 20.5px; display: flex; translate: -50% 0; flex-direction: column; align-items: center; gap: 1px; }
.ck-best-deals__title { white-space: nowrap; font-size: var(--ck-text-2xl); font-weight: 800; line-height: normal; letter-spacing: -0.4px; color: var(--ck-color-cashback); }
.ck-best-deals__swoosh { position: relative; width: 99px; height: 7.795px; flex-shrink: 0; }
.ck-best-deals__swoosh > span { position: absolute; inset: -6.41% 0 -6.42% -0.51%; }
.ck-best-deals__swoosh img { display: block; width: 100%; height: 100%; max-width: none; }

.ck-best-deals__stage { position: absolute; inset: 65.5px 0 auto 0; height: 277px; touch-action: pan-y; user-select: none; }
.ck-best-deals__slot { position: absolute; left: 91px; top: 0; transition: transform 300ms, opacity 300ms; }
.ck-best-deals__slot--side { cursor: pointer; }
.ck-best-deals__slot--side > * { pointer-events: none; }

.ck-best-deals__dots { position: absolute; left: 50%; top: 359.43px; translate: -50% 0; }
`,Uk=`import { useRef, useState, type MouseEvent, type PointerEvent } from "react";
import swoosh from "../../assets/home/best-deals-swoosh.svg";
import { cardProps, type Deal } from "../../data/deal";
import { Dots } from "../Dots/Dots";
import { ProductCard } from "../ProductCard/ProductCard";
import "./BestDealsCarousel.css";

export interface BestDealsCarouselProps {
  title: string;
  deals: Deal[];
  /** Shows one placeholder card while the products load. */
  loading?: boolean;
  onDealSelect?: (deal: Deal) => void;
  onDealShare?: (deal: Deal) => void;
  onGrabDeal?: (deal: Deal) => void;
}

/** Figma draws the neighbours at 128.077px wide: the 158px card scaled down. */
const SIDE_SCALE = 128.077 / 158;
/** Centre-to-centre distance: half a full card, the 16px gap, half a side card. */
const STEP = 158 / 2 + 16 + 128.077 / 2;
/** Each card further out moves by one side card plus the gap. */
const FAR_STEP = 128.077 + 16;
/** Finger travel that counts as a swipe rather than a tap. */
const SWIPE_PX = 30;

/** Green "Best deals" panel (340×384): the focused deal in the middle, faded neighbours, swipe between them. */
export function BestDealsCarousel({ title, deals, loading, onDealSelect, onDealShare, onGrabDeal }: BestDealsCarouselProps) {
  // Figma opens on the middle of three, so a neighbour shows on each side.
  const [active, setActive] = useState(1);
  const current = Math.min(active, Math.max(0, deals.length - 1));
  const startX = useRef<number | null>(null);
  const swiped = useRef(false);

  const go = (index: number) => setActive(Math.max(0, Math.min(deals.length - 1, index)));

  const onPointerDown = (e: PointerEvent) => {
    startX.current = e.clientX;
    swiped.current = false;
  };
  const onPointerUp = (e: PointerEvent) => {
    if (startX.current == null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > SWIPE_PX) {
      swiped.current = true;
      go(current - Math.sign(dx));
    }
  };
  // A swipe ends with a click on whatever card was under the finger; swallow it.
  const onClickCapture = (e: MouseEvent) => {
    if (!swiped.current) return;
    swiped.current = false;
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <section className="ck-best-deals">
      <div className="ck-best-deals__heading">
        <div role="heading" aria-level={2} className="ck-best-deals__title">{title}</div>
        <span className="ck-best-deals__swoosh">
          <span>
            <img src={swoosh} alt="" />
          </span>
        </span>
      </div>

      <div
        className="ck-best-deals__stage"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (startX.current = null)}
        onClickCapture={onClickCapture}
      >
        {loading ? (
          <div className="ck-best-deals__slot">
            <ProductCard variant="main" {...cardProps(PLACEHOLDER)} loading />
          </div>
        ) : (
          deals.map((deal, i) => {
            const d = i - current;
            if (Math.abs(d) > 2) return null;
            const shift = d === 0 ? 0 : Math.sign(d) * (STEP + (Math.abs(d) - 1) * FAR_STEP);
            const focused = d === 0;
            return (
              <div
                key={deal.id}
                onClick={focused ? undefined : () => go(i)}
                style={{
                  transform: \`translateX(\${shift}px) scale(\${focused ? 1 : SIDE_SCALE})\`,
                  opacity: focused ? 1 : Math.abs(d) === 1 ? 0.2 : 0,
                }}
                className={\`ck-best-deals__slot \${focused ? "" : "ck-best-deals__slot--side"}\`}
              >
                <ProductCard
                  variant="main"
                  {...cardProps(deal)}
                  onSelect={onDealSelect && (() => onDealSelect(deal))}
                  onShare={onDealShare && (() => onDealShare(deal))}
                  onGrab={onGrabDeal && (() => onGrabDeal(deal))}
                />
              </div>
            );
          })
        )}
      </div>

      <div className="ck-best-deals__dots">
        <Dots variant="capsule" count={loading ? 0 : deals.length} active={current} />
      </div>
    </section>
  );
}

const PLACEHOLDER: Deal = { id: "loading", brand: "", name: "", store: "", price: 0, mrp: 0 };
`,Vk=`import { BrandBanner } from "./BrandBanner";
import type { BookEntry } from "../../book/types";
import { sampleBanner } from "../../data/samples";

const entry: BookEntry = {
  title: "BrandBanner",
  feature: "Masthead / hero",
  description: "Brand offer card from page type 1 (Nykaa in Figma). The admin sets logo, text and art.",
  stories: [
    { name: "Nykaa", render: () => <BrandBanner {...sampleBanner} /> },
    {
      name: "long headline",
      render: () => <BrandBanner {...sampleBanner} headline="Upto 60% off + extra 10%" subline="on Luxury beauty, perfumes and more" />,
    },
  ],
};
export default entry;
`,Wk=`/* Offsets are Figma coordinates inside the banner's border */
.ck-banner { position: relative; display: block; width: 344px; height: 201px; flex-shrink: 0; overflow: clip; border: 1.5px solid var(--ck-color-surface); border-radius: var(--ck-radius-banner); background: var(--ck-banner-bg); font-family: var(--ck-font-family); line-height: 1.5; text-align: left; cursor: pointer; }
.ck-banner__glow { position: absolute; }
.ck-banner__glow > span { position: absolute; }
.ck-banner__glow img { display: block; width: 100%; height: 100%; max-width: none; }
.ck-banner__glow--top { left: 237.5px; top: -35.5px; width: 185.583px; height: 185.583px; }
.ck-banner__glow--top > span { inset: -73.89%; }
.ck-banner__glow--left { left: -42.5px; top: 33.15px; width: 275.42px; height: 275.42px; }
.ck-banner__glow--left > span { inset: -49.79%; }

.ck-banner__logo-box { position: absolute; left: 14.5px; top: 8.5px; width: 112px; height: 56px; border: 1.5px solid var(--ck-banner-logo-border); border-radius: 10.666px; background: var(--ck-color-surface); }
.ck-banner__logo { position: absolute; left: 21.5px; top: 22.5px; width: 100.313px; height: 25px; object-fit: contain; }

.ck-banner__text { position: absolute; left: 14.5px; top: 106.5px; display: flex; width: 376px; flex-direction: column; align-items: flex-start; gap: var(--ck-space-lg); color: var(--ck-color-on-accent); }
.ck-banner__headline { font-size: var(--ck-text-4xl); font-weight: 800; line-height: 26.664px; }
.ck-banner__subline { font-size: var(--ck-text-xl); font-weight: 400; line-height: 21.331px; }

.ck-banner__art { position: absolute; left: 243.5px; top: 42.5px; width: 100.5px; height: 158.5px; max-width: none; object-fit: contain; }
`,Qk=`import glowLeft from "../../assets/home/banner-glow-left.svg";
import glowTop from "../../assets/home/banner-glow-top.svg";
import "./BrandBanner.css";

export interface BrandBannerProps {
  /** Brand logo in the white box (100×25 frame; supply at 3x, 301×75). */
  logo: string;
  brandName: string;
  headline: string;
  subline: string;
  /** Product art on the right, drawn into a 100.5×158.5 frame (supply at 3x, 302×476, transparent). */
  art: string;
  onSelect?: () => void;
}

/** Pink-to-purple brand offer card (344×201), e.g. Nykaa "Upto 60% off". Colours are fixed as in Figma. */
export function BrandBanner({ logo, brandName, headline, subline, art, onSelect }: BrandBannerProps) {
  return (
    <button type="button" onClick={onSelect} className="ck-banner">
      <span className="ck-banner__glow ck-banner__glow--top">
        <span>
          <img src={glowTop} alt="" />
        </span>
      </span>
      <span className="ck-banner__glow ck-banner__glow--left">
        <span>
          <img src={glowLeft} alt="" />
        </span>
      </span>
      <span className="ck-banner__logo-box" />
      <img className="ck-banner__logo" src={logo} alt={brandName} />
      <span className="ck-banner__text">
        <span className="ck-banner__headline ck-trim">{headline}</span>
        <span className="ck-banner__subline ck-trim">{subline}</span>
      </span>
      <img className="ck-banner__art" src={art} alt="" />
    </button>
  );
}
`,Xk=`import { BrandSlide } from "./BrandSlide";
import type { BookEntry } from "../../book/types";
import { sampleSlides } from "../../data/samples";

const [boat] = sampleSlides;

const entry: BookEntry = {
  title: "BrandSlide",
  feature: "Masthead / hero",
  description: "One brand slide from page type 3. Decided 6 Oct: the slide is a single banner image from the admin, not built from parts.",
  stories: [
    { name: "boAt banner (exported from Figma)", render: () => <BrandSlide {...boat} /> },
    { name: "image fails to load", render: () => <BrandSlide image="/missing.png" alt="boAt headphones, starts with ₹499" /> },
  ],
};
export default entry;
`,Yk=`/* Figma 777:92609: a 305×116 slide with a 24px radius. The banner image carries everything else. */
.ck-slide { display: block; width: 305px; height: 116px; flex-shrink: 0; overflow: clip; padding: 0; border: 0; border-radius: var(--ck-radius-section); background: var(--ck-slide-bg); cursor: pointer; }
.ck-slide img { display: block; width: 100%; height: 100%; object-fit: cover; }
`,Jk=`import "./BrandSlide.css";

export interface BrandSlideProps {
  /** The whole slide as one banner image, 305×116 (supply at 3x, 915×348). Logo, copy and art are baked in. */
  image: string;
  /** Read out for the banner, e.g. "boAt headphones, starts with ₹499". */
  alt: string;
  onSelect?: () => void;
}

/** One brand slide from page type 3: a single admin banner image (305×116) that links to a listing or product. */
export function BrandSlide({ image, alt, onSelect }: BrandSlideProps) {
  return (
    <button type="button" onClick={onSelect} className="ck-slide">
      <img src={image} alt={alt} />
    </button>
  );
}
`,$k=`import { BrandSlidesHero } from "./BrandSlidesHero";
import type { BookEntry } from "../../book/types";
import { sampleSlides } from "../../data/samples";
import { TopBar } from "../TopBar/TopBar";

const slides = sampleSlides.map((slide, i) => ({ ...slide, id: \`slide-\${i + 1}\` }));
const base = { title: "Sale is Onnn!!", subtitle: "Starting from just ₹99" };

const entry: BookEntry = {
  title: "BrandSlidesHero",
  feature: "Masthead / hero",
  description: "Page type 3 top section: swipeable brand slides with dots. All admin content.",
  stories: [
    { name: "three slides (swipe)", render: () => <BrandSlidesHero {...base} slides={slides} topBar={<TopBar />} /> },
    { name: "one slide", render: () => <BrandSlidesHero {...base} slides={slides.slice(0, 1)} topBar={<TopBar />} /> },
  ],
};
export default entry;
`,Kk=`/* Offsets are Figma coordinates inside the 360×311 frame */
.ck-slides { position: relative; width: var(--ck-page-w); height: 311px; flex-shrink: 0; overflow: clip; border-radius: 0 0 var(--ck-radius-section) var(--ck-radius-section); background: var(--ck-slides-bg); font-family: var(--ck-font-family); line-height: 1.5; }
.ck-slides__glow { position: absolute; bottom: -61.33px; left: 67.25px; width: 226.453px; height: 226.453px; mix-blend-mode: plus-lighter; }
.ck-slides__glow > div { position: absolute; inset: -98.03%; }
.ck-slides__glow img,
.ck-slides__line img,
.ck-slides__money img { display: block; width: 100%; height: 100%; max-width: none; }

.ck-slides__scroller { position: absolute; left: 0; top: 166px; width: var(--ck-page-w); height: 116px; overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding-left: var(--ck-space-3xl); scrollbar-width: none; }
.ck-slides__scroller::-webkit-scrollbar { display: none; }
.ck-slides__row { display: flex; width: max-content; height: 100%; gap: 16.24px; padding: 0 var(--ck-space-3xl); }
.ck-slides__row > * { scroll-snap-align: start; }

.ck-slides__heading { position: absolute; left: 50%; top: 68.23px; display: flex; width: 204.808px; height: 59.548px; translate: -50% 0; flex-direction: column; align-items: center; line-height: normal; color: var(--ck-color-on-accent); }
.ck-slides__title { flex-shrink: 0; margin-bottom: -13.534px; white-space: nowrap; font-family: var(--ck-font-alkatra); font-size: 34.285px; font-weight: 700; letter-spacing: -0.6857px; }
.ck-slides__subtitle { width: 100%; min-width: 100%; text-align: center; font-family: var(--ck-font-chiron); font-size: 12.631px; font-weight: 500; letter-spacing: -0.2526px; }
.ck-slides__line { position: absolute; top: 123.61px; width: 32.101px; height: 0; }
.ck-slides__line > div { position: absolute; inset: -0.9px -2.81%; }
.ck-slides__line--right { left: 246.29px; }
.ck-slides__line--left { left: 82.54px; scale: -1 1; }

/* Banknotes: Figma's container-relative sizes worked out to pixels */
.ck-slides__money { position: absolute; display: flex; width: 50.148px; align-items: center; justify-content: center; }
.ck-slides__money > div { position: relative; width: 46.347px; height: 45.465px; flex-shrink: 0; transform: skewX(1.83deg); }
.ck-slides__money > div > div { position: absolute; inset: -1.94% -10.51% -37.07% -10.4%; }
.ck-slides__money--right { left: 311.76px; top: 113.5px; height: 49.361px; }
.ck-slides__money--right > div { scale: -1 1; rotate: -95.94deg; }
.ck-slides__money--left { left: -8.1px; top: 93.33px; height: 49.362px; }
.ck-slides__money--left > div { rotate: 95.94deg; }

.ck-slides__dots { position: absolute; left: 50%; top: 293px; translate: -50% 0; }
.ck-slides__topbar { position: absolute; left: 0; top: 28px; }
`,Zk=`import { useState, type ReactNode, type UIEvent } from "react";
import glow from "../../assets/home/slides-glow.svg";
import moneyLeft from "../../assets/home/slides-money-left.svg";
import moneyRight from "../../assets/home/slides-money-right.svg";
import lineLeft from "../../assets/home/title-line-left.svg";
import lineRight from "../../assets/home/title-line-right.svg";
import { MediaBackground, type MediaBackgroundSource } from "../MediaBackground/MediaBackground";
import { BrandSlide, type BrandSlideProps } from "../BrandSlide/BrandSlide";
import { Dots } from "../Dots/Dots";
import "./BrandSlidesHero.css";

export type BrandSlideItem = Omit<BrandSlideProps, "onSelect"> & { id: string };

export interface BrandSlidesHeroProps {
  title: string;
  subtitle: string;
  slides: BrandSlideItem[];
  onSlideSelect?: (slide: BrandSlideItem) => void;
  /** Back/search bar laid over the top of the art, e.g. <TopBar />. */
  topBar?: ReactNode;
  /** Replaces the built-in backdrop art with an image or Lottie. */
  background?: MediaBackgroundSource;
}

/** One slide (305px) plus the 16.24px gap Figma leaves before the next. */
const SLIDE_STEP = 305 + 16.24;

/** Page type 3 top section (360×311): "Sale is Onnn!!" over swipeable brand slides with dots. */
export function BrandSlidesHero({ title, subtitle, slides, onSlideSelect, topBar, background }: BrandSlidesHeroProps) {
  const [active, setActive] = useState(0);
  const track = (e: UIEvent<HTMLDivElement>) => setActive(Math.round(e.currentTarget.scrollLeft / SLIDE_STEP));

  return (
    <section className="ck-slides">
      {background ? (
        <MediaBackground {...background} />
      ) : (
        <div className="ck-slides__glow">
          <div>
            <img src={glow} alt="" />
          </div>
        </div>
      )}

      <div className="ck-slides__scroller" onScroll={track}>
        <div className="ck-slides__row">
          {slides.map(({ id, ...slide }) => (
            <BrandSlide key={id} {...slide} onSelect={onSlideSelect && (() => onSlideSelect({ id, ...slide }))} />
          ))}
        </div>
      </div>

      <div className="ck-slides__heading">
        <div role="heading" aria-level={2} className="ck-slides__title">{title}</div>
        <div className="ck-slides__subtitle">{subtitle}</div>
      </div>
      <div className="ck-slides__line ck-slides__line--right">
        <div>
          <img src={lineRight} alt="" />
        </div>
      </div>
      <div className="ck-slides__line ck-slides__line--left">
        <div>
          <img src={lineLeft} alt="" />
        </div>
      </div>

      <div className="ck-slides__money ck-slides__money--right">
        <div>
          <div>
            <img src={moneyRight} alt="" />
          </div>
        </div>
      </div>
      <div className="ck-slides__money ck-slides__money--left">
        <div>
          <div>
            <img src={moneyLeft} alt="" />
          </div>
        </div>
      </div>

      <div className="ck-slides__dots">
        <Dots variant="bars" count={slides.length} active={active} />
      </div>

      {topBar && <div className="ck-slides__topbar">{topBar}</div>}
    </section>
  );
}
`,qk=`import { Button } from "./Button";
import type { BookEntry } from "../../book/types";

const box = (width: number, child: JSX.Element) => <div style={{ width }}>{child}</div>;

const entry: BookEntry = {
  title: "Button",
  feature: "Shared",
  description: "Grab Deal in the three card sizes, and the white \\"view all\\" button from the BEST DEALS strip.",
  stories: [
    { name: "grab / main (in a 142px slot)", render: () => box(142, <Button size="main" />) },
    { name: "grab / second (125px)", render: () => box(125, <Button size="second" />) },
    { name: "grab / horizontal", render: () => <Button size="horizontal" /> },
    { name: "viewAll", render: () => <Button variant="viewAll" /> },
    { name: "long label", render: () => box(142, <Button size="main">Grab Deal Now</Button>) },
  ],
};
export default entry;
`,e_=`.ck-button { display: flex; align-items: center; justify-content: center; white-space: nowrap; cursor: pointer; }

.ck-button--grab { width: 100%; padding: 11px 29px; border-radius: var(--ck-radius-button); background: var(--ck-color-accent); color: var(--ck-color-on-accent); font-family: var(--ck-font-outfit); font-size: var(--ck-text-md); font-weight: 600; line-height: 12px; }
.ck-button--grab.ck-button--second { border-radius: var(--ck-radius-button-sm); }
/* The horizontal card's button is shorter and set in Metropolis. */
.ck-button--grab.ck-button--horizontal { width: 116px; height: 29px; padding: 0 29px; border-radius: var(--ck-radius-button-sm); font-family: var(--ck-font-family); }

.ck-button--viewAll { padding: 8px 24px; border: 1px solid var(--ck-color-surface); border-radius: var(--ck-radius-card); background: var(--ck-color-surface); box-shadow: inset 0px -2px 0px 0px var(--ck-color-surface); color: var(--ck-view-all-text); font-family: var(--ck-font-family); font-size: var(--ck-text-lg); font-weight: 500; line-height: normal; }

/* Cross-sell "View All": outlined on the purple block, chevron turned to point down */
.ck-button--viewAllOutline { width: 100%; gap: var(--ck-space-sm); padding: 11px var(--ck-space-3xl); border: 1px solid var(--ck-outline-button-border); border-radius: var(--ck-radius-image); background: transparent; color: var(--ck-color-on-accent); font-family: var(--ck-font-family); font-size: var(--ck-text-md); font-weight: 600; line-height: 1.2; }
.ck-button__chevron { display: flex; width: 10.512px; height: 6.012px; align-items: center; justify-content: center; }
.ck-button__chevron img { display: block; rotate: 90deg; }

/* Product detail footer: full-width 44px "Grab deal" */
.ck-button--grab.ck-button--sheet { height: 44px; padding: 0 32px; border-radius: var(--ck-radius-card); font-size: var(--ck-text-lg); line-height: 20px; }
`,t_=`import type { ReactNode } from "react";
import chevron from "../../assets/cross-sell/chevron.svg";
import "./Button.css";

export type ButtonVariant = "grab" | "viewAll" | "viewAllOutline";
/** Grab Deal sizes, named after the Figma cards they sit in. */
export type ButtonSize = "main" | "second" | "horizontal" | "sheet";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

/** Orange Grab Deal button (fills its parent's width), the white "view all" button, or the outlined "View All" with a chevron (cross-sell). */
export function Button({ variant = "grab", size = "main", children, onClick, className = "" }: ButtonProps) {
  const label = children ?? (variant === "grab" ? "Grab Deal" : variant === "viewAllOutline" ? "View All" : "view all");
  return (
    <button
      type="button"
      // Buttons sit inside clickable cards; a tap here must not also open the card.
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      className={\`ck-button ck-button--\${variant} \${variant === "grab" ? \`ck-button--\${size}\` : ""} \${className}\`}
    >
      <span className="ck-button__label">{label}</span>
      {variant === "viewAllOutline" && (
        <span className="ck-button__chevron">
          <img src={chevron} alt="" width="6.01172" height="10.5117" />
        </span>
      )}
    </button>
  );
}
`,n_=`import { useState } from "react";
import { CategoryRow, type CategoryRowItem } from "./CategoryRow";
import type { BookEntry } from "../../book/types";
import { sampleCategories } from "../../data/samples";

function Live({ categories, start }: { categories: CategoryRowItem[]; start: string }) {
  const [selected, setSelected] = useState(start);
  return <CategoryRow categories={categories} selectedId={selected} onSelect={(c) => setSelected(c.id)} />;
}

const many: CategoryRowItem[] = [
  ...sampleCategories,
  { ...sampleCategories[1], id: "beauty", name: "Beauty" },
  { ...sampleCategories[2], id: "electronics", name: "Electronics" },
];

const entry: BookEntry = {
  title: "CategoryRow",
  feature: "Browse and filter",
  description: "Grey category strip; the white tab moves to the tapped item. Scrolls sideways past five items.",
  stories: [
    { name: "Top Deals selected (tap to move)", render: () => <Live categories={sampleCategories} start="top-deals" /> },
    { name: "Fashion selected", render: () => <Live categories={sampleCategories} start="fashion" /> },
    { name: "seven items (scrolls)", render: () => <Live categories={many} start="top-deals" /> },
    { name: "one item", render: () => <Live categories={sampleCategories.slice(0, 1)} start="top-deals" /> },
  ],
};
export default entry;
`,r_=`/* Figma sizes (360×115 strip) multiplied by --ck-category-scale, so the strip can be drawn smaller without redrawing it */
.ck-category-row { --s: var(--ck-category-scale);
  /* Five items always span the full page width: the item grows to fill what the smaller icons free up */
  --gap: calc(15px * var(--s)); --pad: calc(13.689px * var(--s)); --item-w: calc((var(--ck-page-w) - 2 * var(--pad) - 4 * var(--gap)) / 5);
  position: relative; width: var(--ck-page-w); height: var(--ck-category-h); flex-shrink: 0; overflow: clip; border-radius: var(--ck-radius-sheet) var(--ck-radius-sheet) 0 0; background: var(--ck-category-row-bg); font-family: var(--ck-font-family); line-height: 1.5; }
.ck-category-row__scroller { position: absolute; inset: calc(19px * var(--s)) 0 0 0; overflow-x: auto; overflow-y: hidden; scrollbar-width: none; }
.ck-category-row__scroller::-webkit-scrollbar { display: none; }
.ck-category-row__track { position: relative; width: max-content; min-width: 100%; height: 100%; }
/* The white tab moves one item plus one gap per item; it is 32.5px (Figma) wider than the item */
.ck-category-row__tab { position: absolute; left: calc(var(--ck-category-index) * (var(--item-w) + var(--gap))); top: calc(4.28px * var(--s)); width: calc(var(--item-w) + 32.511px * var(--s)); height: calc(88.978px * var(--s)); max-width: none; transition: left 200ms; }
.ck-category-row__floor { position: absolute; inset: auto 0 0 0; height: 4px; background: var(--ck-color-surface); }
.ck-category-row__items { position: relative; display: flex; align-items: flex-start; gap: var(--gap); padding: var(--ck-space-md) var(--pad) 0; }
.ck-category-row__item { display: flex; width: var(--item-w); height: calc(77px * var(--s)); flex-shrink: 0; flex-direction: column; align-items: center; gap: calc(3.422px * var(--s)); cursor: pointer; }
.ck-category-row__icon { width: calc(47.911px * var(--s)); height: calc(47.911px * var(--s)); flex-shrink: 0; overflow: clip; border-radius: 50%; background: var(--ck-color-surface); }
.ck-category-row__icon img { width: 100%; height: 100%; object-fit: cover; }
.ck-category-row__label { width: 100%; white-space: pre-line; text-align: center; font-size: var(--ck-text-xs); font-weight: 500; line-height: 11px; color: var(--ck-color-text-strong); }
.ck-category-row__item--on .ck-category-row__label { font-weight: 600; letter-spacing: 0.3422px; color: var(--ck-category-active); }
`,o_=`import type { CSSProperties } from "react";
import tabShape from "../../assets/home/category-tab.svg";
import "./CategoryRow.css";

export interface CategoryRowItem {
  id: string;
  /** Wraps on its own inside the 55px item; use "\\n" to force a break, e.g. "Top\\nDeals". */
  name: string;
  /** Round icon in a 48px circle. Supply a square image at 3x (144×144). */
  icon: string;
  /** True for an item like "Top Deals" that shows every category instead of filtering to one. */
  showsAll?: boolean;
}

export interface CategoryRowProps {
  categories: CategoryRowItem[];
  selectedId: string;
  /** True when nothing is picked: no item is highlighted and the white tab is hidden. */
  noneSelected?: boolean;
  /** Accessible name of the strip. Default "Categories". */
  ariaLabel?: string;
  onSelect?: (category: CategoryRowItem) => void;
}

/** Grey category strip (Figma 360×115, drawn at \`--ck-category-scale\` of that) with a white tab behind the selected item; scrolls sideways past five. */
export function CategoryRow({ categories, selectedId, noneSelected = false, ariaLabel = "Categories", onSelect }: CategoryRowProps) {
  const index = Math.max(0, categories.findIndex((category) => category.id === selectedId));

  return (
    <nav aria-label={ariaLabel} className="ck-category-row">
      <div className="ck-category-row__scroller">
        <div className="ck-category-row__track">
          {!noneSelected && <img className="ck-category-row__tab" src={tabShape} alt="" style={{ "--ck-category-index": index } as CSSProperties} />}
          {/* Joins the tab to the white page below */}
          <div className="ck-category-row__floor" />
          <div className="ck-category-row__items">
            {categories.map((category) => {
              const selected = !noneSelected && category.id === selectedId;
              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => onSelect?.(category)}
                  className={\`ck-category-row__item \${selected ? "ck-category-row__item--on" : ""}\`}
                >
                  <span className="ck-category-row__icon">
                    <img src={category.icon} alt="" />
                  </span>
                  <span className="ck-category-row__label">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
`,s_=`import { CategorySaleHero } from "./CategorySaleHero";
import type { BookEntry } from "../../book/types";
import { sampleSaleTiles } from "../../data/samples";
import pulse from "../../assets/lottie/pulse-demo.json?url";
import { TopBar } from "../TopBar/TopBar";

const base = { title: "Sale is Onnn!!", subtitle: "Starting from just ₹99", tiles: sampleSaleTiles };

const entry: BookEntry = {
  title: "CategorySaleHero",
  feature: "Masthead / hero",
  description: "Page type 1 top section. The admin sets the headline, subtitle and five tiles.",
  stories: [
    { name: "as in Figma", render: () => <CategorySaleHero {...base} topBar={<TopBar />} /> },
    { name: "lights backdrop (twinkling)", render: () => <CategorySaleHero {...base} title="Jaw Dropping Deals!!" subtitle="Live Now" backdrop="lights" topBar={<TopBar searchHints={["nike shoes", "tv", "monitors", "iphone", "adidas"]} />} /> },
    { name: "Lottie background", render: () => <CategorySaleHero {...base} background={{ lottie: pulse }} topBar={<TopBar />} /> },
    { name: "three tiles", render: () => <CategorySaleHero {...base} tiles={sampleSaleTiles.slice(0, 3)} topBar={<TopBar />} /> },
    { name: "one tile, no top bar", render: () => <CategorySaleHero {...base} tiles={sampleSaleTiles.slice(0, 1)} /> },
  ],
};
export default entry;
`,i_=`/* Offsets are Figma coordinates inside the 360×394 frame */
.ck-sale-zone { position: relative; width: var(--ck-page-w); height: 394px; flex-shrink: 0; overflow: clip; border-radius: 0 0 var(--ck-radius-section) var(--ck-radius-section); background: var(--ck-sale-zone-bg); font-family: var(--ck-font-family); line-height: 1.5; }

.ck-sale-zone__glow { position: absolute; left: 50%; top: -126.78px; width: 379.432px; height: 347.068px; translate: -50% 0; }
.ck-sale-zone__glow > div { position: absolute; inset: -57.63% -52.71%; }
.ck-sale-zone__glow img,
.ck-sale-zone__money img { display: block; width: 100%; height: 100%; max-width: none; }

/* Swirl pattern, soft-light blended into the purple */
.ck-sale-zone__pattern { position: absolute; bottom: 0; left: 0; width: var(--ck-page-w); height: 428.25px; overflow: hidden; border-radius: 0 0 var(--ck-radius-sheet) var(--ck-radius-sheet); mix-blend-mode: soft-light; }
.ck-sale-zone__pattern img { position: absolute; left: -23.48%; top: 0; width: 140.93%; height: 105.77%; max-width: none; }
.ck-sale-zone__fade { position: absolute; inset: 0; background: var(--ck-sale-zone-fade); }

/* Mandala corners: Figma 1066:10664 and 1066:10666, dodged into the purple at 30% */
.ck-sale-zone__mandala { position: absolute; width: 190.522px; height: 203.869px; max-width: none; object-fit: cover; mix-blend-mode: color-dodge; opacity: 0.3;
  /* The source art carries a stock-photo watermark along its bottom edge: cut it off */
  clip-path: inset(0 0 7% 0); }
.ck-sale-zone__mandala--top { left: 218.81px; top: -3.56px; }
.ck-sale-zone__mandala--bottom { left: -36.77px; top: 212.5px; }

.ck-sale-zone__tiles { position: absolute; left: 16px; top: 164px; display: flex; align-items: center; gap: var(--ck-space-md); }
.ck-sale-zone__column { display: flex; width: 102px; flex-shrink: 0; flex-direction: column; align-items: flex-start; gap: var(--ck-space-md); }

/* Flying banknotes: Figma's container-relative sizes worked out to pixels */
.ck-sale-zone__money { position: absolute; display: flex; align-items: center; justify-content: center; }
.ck-sale-zone__money > div { position: relative; flex-shrink: 0; }
.ck-sale-zone__money > div > div { position: absolute; }
.ck-sale-zone__money--left { left: -1.08px; top: 118.8px; width: 56.842px; height: 54.102px; }
.ck-sale-zone__money--left > div { width: 47.196px; height: 44.841px; rotate: 105.79deg; transform: skewX(4.64deg); }
.ck-sale-zone__money--left > div > div { inset: -1.34% -9.72% -36.81% -9.38%; }
.ck-sale-zone__money--right { left: 311.76px; top: 74.59px; width: 46.73px; height: 45.734px; }
.ck-sale-zone__money--right > div { width: 41.572px; height: 40.529px; scale: -1 1; rotate: -98.96deg; transform: skewX(2.34deg); }
.ck-sale-zone__money--right > div > div { inset: -1.28% -7.59% -27.29% -7.43%; }

.ck-sale-zone__heading { position: absolute; left: 50%; top: 92.92px; display: flex; width: 244px; translate: -50% 0; flex-direction: column; align-items: center; white-space: nowrap; line-height: normal; color: var(--ck-color-on-accent); }
.ck-sale-zone__title { font-size: var(--ck-text-5xl); font-weight: 800; letter-spacing: -0.64px; }
.ck-sale-zone__subtitle { text-align: center; font-family: var(--ck-font-chiron); font-size: var(--ck-text-lg); font-weight: 500; opacity: 0.7; }

.ck-sale-zone__scrim { position: absolute; left: 0; top: 0; width: var(--ck-page-w); height: 106px; background: var(--ck-sale-zone-scrim); }
.ck-sale-zone__topbar { position: absolute; left: 0; top: 31px; }
`,a_=`import type { ReactNode } from "react";
import moneyLeft from "../../assets/home/money-left.svg";
import moneyRight from "../../assets/home/money-right.svg";
import saleGlow from "../../assets/home/sale-glow.svg";
import saleGlowLight from "../../assets/home/sale-glow-light.svg";
import mandala from "../../assets/home/mandala.webp";
import salePattern from "../../assets/home/sale-pattern.webp";
import { MediaBackground, type MediaBackgroundSource } from "../MediaBackground/MediaBackground";
import { LightString } from "../LightString/LightString";
import { CategoryTile, type CategoryTileProps } from "../CategoryTile/CategoryTile";
import "./CategorySaleHero.css";

export type SaleTile = Omit<CategoryTileProps, "variant" | "onSelect"> & { id?: string };

export interface CategorySaleHeroProps {
  title: string;
  subtitle: string;
  /** Figma shows five: the first gets the tall tile, the next four fill two columns of two. Extras are ignored. */
  tiles: SaleTile[];
  /** Back/search bar laid over the top of the art, e.g. <TopBar />. */
  topBar?: ReactNode;
  /** Built-in art: "swirl" is the money and swirl backdrop, "lights" is mandala corners with twinkling fairy lights. Ignored when \`background\` is set. */
  backdrop?: "swirl" | "lights";
  /** Replaces the built-in backdrop art with an image or Lottie. */
  background?: MediaBackgroundSource;
  onTileSelect?: (tile: SaleTile) => void;
}

/** Page type 1 top section (360×394): purple sale zone with a headline, "starting from" line and category tiles. */
export function CategorySaleHero({ title, subtitle, tiles, topBar, backdrop = "swirl", background, onTileSelect }: CategorySaleHeroProps) {
  const [featured, ...rest] = tiles;
  const columns = [rest.slice(0, 2), rest.slice(2, 4)].filter((column) => column.length > 0);
  const select = (tile: SaleTile) => (onTileSelect ? () => onTileSelect(tile) : undefined);

  const lights = !background && backdrop === "lights";

  return (
    <section className="ck-sale-zone">
      {background ? (
        <MediaBackground {...background} />
      ) : lights ? (
        <>
          <div className="ck-sale-zone__glow">
            <div>
              <img src={saleGlowLight} alt="" />
            </div>
          </div>
          <img className="ck-sale-zone__mandala ck-sale-zone__mandala--top" src={mandala} alt="" />
          <img className="ck-sale-zone__mandala ck-sale-zone__mandala--bottom" src={mandala} alt="" />
          <LightString />
        </>
      ) : (
        <>
          <div className="ck-sale-zone__glow">
            <div>
              <img src={saleGlow} alt="" />
            </div>
          </div>
          <div className="ck-sale-zone__pattern">
            <img src={salePattern} alt="" />
            <div className="ck-sale-zone__fade" />
          </div>
        </>
      )}

      <div className="ck-sale-zone__tiles">
        {featured && <CategoryTile variant="featured" {...featured} onSelect={select(featured)} />}
        {columns.map((column, c) => (
          <div key={c} className="ck-sale-zone__column">
            {column.map((tile, i) => (
              <CategoryTile key={tile.id ?? i} variant="small" {...tile} onSelect={select(tile)} />
            ))}
          </div>
        ))}
      </div>

      {!lights && (
        <>
          <div className="ck-sale-zone__money ck-sale-zone__money--left">
            <div>
              <div>
                <img src={moneyLeft} alt="" />
              </div>
            </div>
          </div>
          <div className="ck-sale-zone__money ck-sale-zone__money--right">
            <div>
              <div>
                <img src={moneyRight} alt="" />
              </div>
            </div>
          </div>

        </>
      )}

      <div className="ck-sale-zone__heading">
        <div role="heading" aria-level={2} className="ck-sale-zone__title">{title}</div>
        <div className="ck-sale-zone__subtitle">{subtitle}</div>
      </div>

      {/* Lighter purple behind the phone status bar and the back/search bar */}
      <div className="ck-sale-zone__scrim" />
      {topBar && <div className="ck-sale-zone__topbar">{topBar}</div>}
    </section>
  );
}
`,l_=`import { CategoryTile } from "./CategoryTile";
import type { BookEntry } from "../../book/types";
import { sampleSaleTiles } from "../../data/samples";

const [fashion, beauty] = sampleSaleTiles;

const entry: BookEntry = {
  title: "CategoryTile",
  feature: "Browse and filter",
  description: "Category tiles from the page type 1 sale zone: the tall featured tile and the small tiles.",
  stories: [
    { name: "featured", render: () => <CategoryTile variant="featured" {...fashion} /> },
    { name: "small", render: () => <CategoryTile variant="small" {...beauty} /> },
    { name: "small, long name", render: () => <CategoryTile variant="small" {...beauty} name="Home Decor" /> },
    { name: "small, ₹1,499", render: () => <CategoryTile variant="small" {...beauty} startingPrice={1499} /> },
    { name: "featured, ₹99", render: () => <CategoryTile variant="featured" {...fashion} startingPrice={99} /> },
  ],
};
export default entry;
`,c_=`.ck-tile { position: relative; flex-shrink: 0; overflow: clip; border-radius: var(--ck-radius-card); background: var(--ck-color-surface); box-shadow: var(--ck-shadow-tile); font-family: var(--ck-font-family); line-height: 1.5; text-align: left; cursor: default; }
.ck-tile--clickable { cursor: pointer; }
.ck-tile--featured { width: 127px; height: 202px; }
.ck-tile--small { width: 102px; height: 97px; }

.ck-tile__image { position: absolute; object-fit: contain; }
.ck-tile--small .ck-tile__image { left: 0; top: 20px; width: 102px; height: 77px; }
.ck-tile--featured .ck-tile__image { left: calc(50% - 0.48px); top: calc(50% + 17.21px); width: 104.162px; height: 156.243px; translate: -50% -50%; object-fit: cover; }

.ck-tile__name { position: absolute; left: 50%; top: 12px; translate: -50% 0; white-space: nowrap; font-size: var(--ck-text-lg); font-weight: 600; line-height: normal; letter-spacing: -0.28px; color: var(--ck-color-text); }

/* Small tiles: pink strip with the price chip poking above it */
.ck-tile__strip { position: absolute; bottom: 0; left: 50%; width: 103.505px; height: 18.508px; translate: -50% 0; background: var(--ck-tile-strip); }
.ck-tile__strip-label { position: absolute; left: 6.5px; top: 82.75px; white-space: nowrap; font-size: var(--ck-text-sm); font-weight: 500; font-style: italic; line-height: normal; letter-spacing: -0.2px; color: var(--ck-color-on-accent); }
.ck-tile__chip { position: absolute; right: 4px; top: 71.75px; display: flex; align-items: center; justify-content: center; padding: var(--ck-space-xs) 2px var(--ck-space-xs) var(--ck-space-xs); border-top: 1px solid var(--ck-color-text-strong); border-right: 1px solid var(--ck-color-text-strong); border-radius: var(--ck-radius-chip); background: var(--ck-tile-chip); }
/* Fixed line height: the ₹ comes from a fallback font whose taller metrics would stretch the chip */
.ck-tile__chip span { white-space: nowrap; font-size: var(--ck-text-md); font-weight: 800; line-height: 12px; letter-spacing: -0.24px; color: var(--ck-color-on-accent); }

/* Featured tile: tilted starburst badge clipped by the bottom-left corner */
.ck-tile__star { position: absolute; left: -0.82px; top: 118.71px; display: flex; width: 87.565px; height: 87.565px; align-items: center; justify-content: center; }
.ck-tile__star-turn { position: relative; width: 68.72px; height: 68.72px; flex-shrink: 0; rotate: -19.29deg; }
.ck-tile__star-inset { position: absolute; inset: 1.14% 1.33% 1.91% 1.33%; }
.ck-tile__star-inset img { width: 100%; height: 100%; max-width: none; }
.ck-tile__badge { position: absolute; left: 16px; top: 145.31px; display: flex; width: 57.145px; height: 40.221px; align-items: center; justify-content: center; }
.ck-tile__badge-turn { display: flex; height: 24.412px; flex-shrink: 0; flex-direction: column; align-items: center; gap: 1.533px; rotate: -19.29deg; white-space: nowrap; line-height: normal; color: var(--ck-color-on-accent); }
.ck-tile__badge-label { font-size: var(--ck-text-sm); font-weight: 600; font-style: italic; letter-spacing: -0.2px; }
.ck-tile__badge-price { font-size: var(--ck-text-md); font-weight: 800; line-height: 12px; letter-spacing: -0.24px; }
`,d_=`import starburst from "../../assets/home/starburst.svg";
import { rupees } from "../../data/deal";
import "./CategoryTile.css";

export type CategoryTileVariant = "featured" | "small";

export interface CategoryTileProps {
  /** featured: the tall first tile (127×202). small: the 102×97 tiles. */
  variant: CategoryTileVariant;
  /** Shown with each word capitalised, e.g. "fashion" reads "Fashion". */
  name: string;
  /**
   * Tile art in a fixed frame: 104×156 on featured, 102×77 on small (under the name and the pink strip).
   * Supply transparent images at 3x: 312×468 and 306×231.
   */
  image: string;
  imageAlt?: string;
  /** The "Starts with" price in rupees. */
  startingPrice: number;
  onSelect?: () => void;
}

// Capitalised in code, not CSS: in Chrome, text-transform left "fashion" lowercase after the badge's "₹499".
const capitalise = (name: string) =>
  name.replace(/(^|\\s)(\\S)/g, (_, space: string, letter: string) => space + letter.toUpperCase());

/** White category tile from the page type 1 sale zone, with its "Starts with" price. */
export function CategoryTile({ variant, name, image, imageAlt, startingPrice, onSelect }: CategoryTileProps) {
  const price = rupees(startingPrice);
  return (
    <button
      type="button"
      onClick={onSelect}
      className={\`ck-tile ck-tile--\${variant} \${onSelect ? "ck-tile--clickable" : ""}\`}
    >
      <img className="ck-tile__image" src={image} alt={imageAlt ?? name} />
      {variant === "featured" ? (
        <>
          <span className="ck-tile__star">
            <span className="ck-tile__star-turn">
              <span className="ck-tile__star-inset">
                <img src={starburst} alt="" />
              </span>
            </span>
          </span>
          <span className="ck-tile__badge">
            <span className="ck-tile__badge-turn">
              <span className="ck-tile__badge-label">Starts with</span>
              <span className="ck-tile__badge-price">{price}</span>
            </span>
          </span>
        </>
      ) : (
        <>
          <span className="ck-tile__strip" />
          <span className="ck-tile__strip-label">Starts with</span>
          {/* Anchored right so a longer price grows leftwards instead of being clipped */}
          <span className="ck-tile__chip">
            <span>{price}</span>
          </span>
        </>
      )}
      <span className="ck-tile__name">{capitalise(name)}</span>
    </button>
  );
}
`,p_=`import { Countdown } from "./Countdown";
import type { BookEntry } from "../../book/types";

const inMinutes = (minutes: number) => Date.now() + minutes * 60 * 1000;

const entry: BookEntry = {
  title: "Countdown",
  feature: "Masthead / hero",
  description: "Sale Deals timer. The admin sets the end time; it stops at 00:00:00.",
  stories: [
    { name: "56:38 left (as in Figma)", render: () => <Countdown endsAt={inMinutes(56 + 38 / 60)} /> },
    { name: "over a day left", render: () => <Countdown endsAt={inMinutes(36 * 60 + 5)} /> },
    { name: "ended", render: () => <Countdown endsAt={inMinutes(-5)} /> },
    { name: "daily clock (no end time): counts to midnight", render: () => <Countdown /> },
    { name: "invalid date", render: () => <Countdown endsAt="not a date" /> },
  ],
};
export default entry;
`,u_=`/* Metropolis has no fixed-width digits, so the last digits shift slightly as they change. */
.ck-countdown { display: block; white-space: nowrap; font-family: var(--ck-font-family); font-size: var(--ck-text-xl); font-weight: 900; line-height: normal; letter-spacing: -0.32px; color: var(--ck-countdown); }
`,m_=`import { useEffect, useState } from "react";
import "./Countdown.css";

export interface CountdownProps {
  /**
   * When the sale ends. The timer counts down to it and stops at 00:00:00.
   * Leave it out for the daily clock: the timer counts down to the next local midnight and starts again (decided 6 Oct: frontend logic).
   */
  endsAt?: Date | string | number;
}

/** The next local midnight after \`now\`, in ms. */
export function nextMidnight(now: number) {
  const d = new Date(now);
  d.setHours(24, 0, 0, 0);
  return d.getTime();
}

/** "HH:MM:SS"; hours keep counting past 24, e.g. "36:05:09". */
export function formatCountdown(ms: number) {
  const total = Math.floor(ms / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return \`\${pad(Math.floor(total / 3600))}:\${pad(Math.floor((total % 3600) / 60))}:\${pad(total % 60)}\`;
}

/** Pink sale countdown from the Sale Deals strip, refreshed every second. */
export function Countdown({ endsAt }: CountdownProps) {
  const fixedEnd = endsAt == null ? undefined : new Date(endsAt).getTime();
  const [now, setNow] = useState(Date.now);
  const end = fixedEnd ?? nextMidnight(now);

  useEffect(() => {
    const id = setInterval(() => {
      const t = Date.now();
      setNow(t);
      // A fixed end stops the clock; the daily clock rolls over at midnight and keeps going.
      if (fixedEnd != null && t >= fixedEnd) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, [fixedEnd]);

  const remaining = Number.isFinite(end) ? Math.max(0, end - now) : 0;
  return (
    <span className="ck-countdown" role="timer">
      {formatCountdown(remaining)}
    </span>
  );
}
`,h_=`import { CrossSellSection } from "./CrossSellSection";
import type { BookEntry } from "../../book/types";
import { sampleProducts } from "../../data/samples";

const chargers = sampleProducts.filter((deal) => deal.productCategory === "chargers");
/** Eight distinct products, as the carousel holds at most. */
const eight = Array.from({ length: 8 }, (_, i) => ({ ...chargers[i % chargers.length], id: \`\${chargers[i % chargers.length].id}-\${i}\` }));
const base = { title: "View more charger", subtitle: "Because you viewed charger recently" };

const entry: BookEntry = {
  title: "CrossSellSection",
  feature: "Cross-sell",
  description:
    "'View more {category}' (Figma 777:86926): peach gradient, a title and why, then wide cards in two rows that swipe sideways. Three to eight products; the page shows nothing when fewer than three fit.",
  stories: [
    { name: "four products, as in Figma", render: () => <CrossSellSection {...base} deals={chargers.slice(0, 4)} /> },
    { name: "eight products (the most), swipe sideways", render: () => <CrossSellSection {...base} deals={eight} /> },
    { name: "three products", render: () => <CrossSellSection {...base} deals={chargers.slice(0, 3)} /> },
    { name: "long category name", render: () => <CrossSellSection title="View more earphones & headphones" subtitle="Because you viewed earphones & headphones recently" deals={chargers.slice(0, 4)} /> },
  ],
};
export default entry;
`,f_=`/* Figma 777:86926, 360 wide. The top is white, so the gradient fades in under the title; 40px replaces Figma's 73px, which
   included the space above the block in its page. */
.ck-cross-sell { display: flex; width: var(--ck-page-w); box-sizing: border-box; flex-direction: column; gap: var(--ck-space-2xl); padding: 40px 0 34px; border-radius: 0 0 var(--ck-radius-sheet) var(--ck-radius-sheet); background: var(--ck-cross-sell-bg); font-family: var(--ck-font-family); line-height: normal; }
.ck-cross-sell__header { display: flex; flex-direction: column; gap: var(--ck-space-md); padding: 0 var(--ck-space-2xl); color: var(--ck-cross-sell-title); }
.ck-cross-sell__title { font-size: var(--ck-text-xl); font-weight: 700; letter-spacing: -0.32px; }
.ck-cross-sell__subtitle { font-size: var(--ck-text-md); font-weight: 500; letter-spacing: -0.24px; opacity: 0.6; }

/* Two rows of wide cards, filled down each column first, swiped sideways. Padding keeps the card shadows. */
.ck-cross-sell__scroller { overflow-x: auto; overscroll-behavior-x: contain; scroll-snap-type: x proximity; scrollbar-width: none; padding-bottom: var(--ck-space-lg); margin-bottom: calc(-1 * var(--ck-space-lg)); }
.ck-cross-sell__scroller::-webkit-scrollbar { display: none; }
.ck-cross-sell__grid { display: grid; width: max-content; grid-auto-flow: column; grid-template-rows: repeat(2, auto); gap: var(--ck-space-md); padding: 0 var(--ck-space-2xl); }
.ck-cross-sell__grid > * { scroll-snap-align: start; scroll-margin-left: var(--ck-space-2xl); }
`,g_=`import type { Deal } from "../../data/deal";
import { cardProps } from "../../data/deal";
import { ProductCard } from "../ProductCard/ProductCard";
import "./CrossSellSection.css";

export interface CrossSellSectionProps {
  /** e.g. "View more charger". */
  title: string;
  /** e.g. "Because you viewed charger recently". */
  subtitle?: string;
  deals: Deal[];
  onDealSelect?: (deal: Deal) => void;
  onGrabDeal?: (deal: Deal) => void;
}

/** Most products the block shows: four columns of two cards. */
export const CROSS_SELL_MAX = 8;

/**
 * "View more {category}" (Figma 777:86926): peach gradient, a title and a line saying why, then wide cards in two rows
 * that swipe sideways. Three products give a full first column and one card beside it; eight fill four columns.
 */
export function CrossSellSection({ title, subtitle, deals, onDealSelect, onGrabDeal }: CrossSellSectionProps) {
  const shown = deals.slice(0, CROSS_SELL_MAX);
  return (
    <section className="ck-cross-sell" aria-label={title}>
      <header className="ck-cross-sell__header">
        <div role="heading" aria-level={2} className="ck-cross-sell__title">{title}</div>
        {subtitle && <span className="ck-cross-sell__subtitle">{subtitle}</span>}
      </header>
      <div className="ck-cross-sell__scroller">
        <div className="ck-cross-sell__grid">
          {shown.map((deal) => (
            <ProductCard
              key={deal.id}
              variant="crossSell"
              {...cardProps(deal)}
              onSelect={onDealSelect && (() => onDealSelect(deal))}
              onGrab={onGrabDeal && (() => onGrabDeal(deal))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
`,k_=`import { DealsStripHero } from "./DealsStripHero";
import type { BookEntry } from "../../book/types";
import { sampleLists, sampleStripPicture, sampleStripTitle } from "../../data/samples";
import { TopBar } from "../TopBar/TopBar";

const deals = sampleLists["best-deals-strip"];
const bar = <TopBar searchHints={["nike shoes", "iPhone 16", "smart TVs", "monitors", "adidas sneakers", "boAt earbuds"]} />;

const entry: BookEntry = {
  title: "DealsStripHero",
  feature: "Masthead / hero",
  description:
    "Page type 4 top section (Figma 1227:52155): night sky with star dust, megaphone and bag, title art with a blinking Live Now dot, a row of masthead cards and scroll dots. The search bar rotates its hints.",
  stories: [
    { name: "admin picture: Krazy Deals (title in the picture)", render: () => <DealsStripHero {...sampleStripPicture} deals={deals} topBar={bar} /> },
    { name: "as in Figma (swipe the cards)", render: () => <DealsStripHero {...sampleStripTitle} deals={deals} topBar={bar} /> },
    { name: "two products, no dots", render: () => <DealsStripHero {...sampleStripTitle} deals={deals.slice(0, 2)} topBar={bar} /> },
    { name: "loading", render: () => <DealsStripHero {...sampleStripTitle} deals={[]} loading topBar={bar} /> },
    { name: "round search button", render: () => <DealsStripHero {...sampleStripTitle} deals={deals} topBar={<TopBar />} /> },
  ],
};
export default entry;
`,__=`/* Figma 1227:52155. Offsets are Figma coordinates inside the 360×434 frame (its top 24px is the phone's status bar). */
.ck-strip { position: relative; width: var(--ck-page-w); height: 434px; flex-shrink: 0; overflow: clip; border-radius: 0 0 var(--ck-radius-section) var(--ck-radius-section); background: var(--ck-strip-night-bg); font-family: var(--ck-font-family); line-height: 1.5; }
.ck-strip__art { position: absolute; inset: 0; }
.ck-strip__art img { display: block; max-width: none; }

/* 547 star-dust dots in one drawing, dodged into the sky */
.ck-strip__stars { position: absolute; left: 0; top: 0; width: 360px; height: 434px; mix-blend-mode: color-dodge; opacity: 0.35; }

.ck-strip__glow-corner { position: absolute; left: -49.686px; top: 364.529px; width: 128.07px; height: 95.137px; mix-blend-mode: screen; }
.ck-strip__glow-bottom, .ck-strip__glow-top, .ck-strip__glow-pink { position: absolute; translate: -50% 0; }
.ck-strip__glow-bottom img, .ck-strip__glow-top img, .ck-strip__glow-pink img { position: absolute; width: 100%; height: 100%; }
.ck-strip__glow-bottom { left: calc(50% + 134.28px); top: 330.93px; width: 116.655px; height: 106.705px; }
.ck-strip__glow-bottom img { inset: -187.43% -171.45%; width: auto; height: auto; }
.ck-strip__glow-top { left: 50%; top: -126.78px; width: 379.432px; height: 347.068px; }
.ck-strip__glow-top img { inset: -57.63% -52.71%; width: auto; height: auto; }
.ck-strip__glow-pink { top: 85.3px; width: 97.169px; height: 88.881px; }
.ck-strip__glow-pink img { inset: -74.26% -67.92%; width: auto; height: auto; }
.ck-strip__glow-pink--1 { left: calc(50% + 25px); }
.ck-strip__glow-pink--2 { left: calc(50% - 30.6px); top: 116.61px; }

/* Turned pieces: outer box = Figma's bounds, inner box = the art before turning */
.ck-strip__confetti, .ck-strip__megaphone, .ck-strip__bag { position: absolute; display: flex; align-items: center; justify-content: center; }
.ck-strip__confetti > div, .ck-strip__megaphone > div, .ck-strip__bag > div { position: relative; flex-shrink: 0; overflow: hidden; }
.ck-strip__confetti img { position: absolute; }
.ck-strip__megaphone img, .ck-strip__bag img { width: 100%; height: 100%; object-fit: cover; }

.ck-strip__confetti--1 { left: 61.82px; top: 92.86px; width: 39.84px; height: 38.204px; }
.ck-strip__confetti--1 > div { width: 22.989px; height: 32.601px; rotate: -51.91deg; }
.ck-strip__confetti--1 img { left: -137.87%; top: 0; width: 237.87%; height: 147.59%; }
.ck-strip__confetti--2 { left: 49.48px; top: 113.56px; width: 39.846px; height: 36.898px; }
.ck-strip__confetti--2 > div { width: 22.989px; height: 32.601px; transform: scaleY(-1) rotate(122.47deg); }
.ck-strip__confetti--2 img, .ck-strip__confetti--5 img { inset: 0; width: 100%; height: 100%; object-position: bottom; }
.ck-strip__confetti--3 { left: 246.57px; top: 178.42px; width: 24.415px; height: 25.63px; }
.ck-strip__confetti--3 > div { width: 18.223px; height: 20.375px; rotate: -158.54deg; }
.ck-strip__confetti--3 img { left: -17.14%; top: 0; width: 206%; height: 190.68%; }
.ck-strip__confetti--4 { left: 260.39px; top: 174.29px; width: 15.229px; height: 15.093px; }
.ck-strip__confetti--4 > div { width: 10.962px; height: 11.317px; rotate: 60.76deg; }
.ck-strip__confetti--4 img { left: -242.45%; top: 0; width: 342.45%; height: 343.3%; }
.ck-strip__confetti--5 { left: 277.13px; top: 122.18px; width: 34.392px; height: 25.609px; }
.ck-strip__confetti--5 > div { width: 22.989px; height: 32.601px; rotate: 94.75deg; }
.ck-strip__confetti--6 { left: 278.74px; top: 101.57px; width: 20.998px; height: 21.265px; }
.ck-strip__confetti--6 > div { width: 19.188px; height: 18.882px; border-radius: 7px; rotate: 96.72deg; }
.ck-strip__confetti--6 img { left: 0; top: -29.6%; width: 231.15%; height: 243.09%; }

.ck-strip__bubbles-left { position: absolute; left: -32.004px; top: 108.413px; display: flex; width: 77.364px; height: 76.771px; align-items: center; justify-content: center; }
.ck-strip__bubbles-left img { width: 48.318px; height: 60.746px; flex-shrink: 0; transform: scaleX(-1) rotate(-47.09deg); }
.ck-strip__megaphone { left: 0.86px; top: 141.22px; width: 97.985px; height: 96.823px; }
.ck-strip__megaphone > div { width: 76.291px; height: 74.254px; rotate: -21.21deg; overflow: visible; }
.ck-strip__bag { left: 277.65px; top: 147.61px; width: 91.325px; height: 91.325px; }
.ck-strip__bag > div { width: 82.446px; height: 82.446px; rotate: 6.56deg; overflow: visible; }

.ck-strip__scrim { position: absolute; left: 0; top: 0; width: var(--ck-page-w); height: 106px; background: var(--ck-strip-night-scrim); }
/* Drawn upside down in Figma (inside a flipped group) */
.ck-strip__bubbles-right { position: absolute; left: 329.54px; top: 56.16px; width: 46.84px; height: 56.95px; scale: 1 -1; }

/* Search row at y 38 (the bar's row sits 6px into the top bar) */
.ck-strip__topbar { position: absolute; left: 0; top: 32px; }
.ck-strip__title { position: absolute; left: calc(50% - 2px); top: 94.76px; width: 199.282px; height: 99.641px; translate: -50% 0; object-fit: contain; }

/* "Live Now" dot: two glows and two cores, blinking together */
.ck-strip__live { position: absolute; left: 139.94px; top: 179.52px; width: 4.12px; height: 4.12px; animation: ck-strip-live 1.4s ease-in-out infinite; }
.ck-strip__live img { position: absolute; display: block; max-width: none; }
.ck-strip__live-glow { left: -8px; top: -8px; width: 20.12px; height: 20.12px; }
.ck-strip__live-dot { left: 0; top: 0; width: 4.12px; height: 4.12px; }
.ck-strip__live-core-glow { left: -7.72px; top: -7.72px; width: 19.56px; height: 19.56px; }
.ck-strip__live-core { left: 0.28px; top: 0.28px; width: 3.56px; height: 3.56px; }
@keyframes ck-strip-live { 0%, 100% { opacity: 1; } 50% { opacity: 0.15; } }

.ck-strip__scroller { position: absolute; left: 0; top: 216px; width: var(--ck-page-w); overflow-x: auto; padding-bottom: var(--ck-space-2xl); scroll-snap-type: x proximity; overscroll-behavior-x: contain; scrollbar-width: none; }
.ck-strip__scroller::-webkit-scrollbar { display: none; }
.ck-strip__row { display: flex; width: max-content; align-items: center; gap: var(--ck-space-md); padding: 0 var(--ck-space-xl); }
.ck-strip__row > * { scroll-snap-align: start; scroll-margin-left: var(--ck-space-xl); }
.ck-strip__dots { position: absolute; left: 50%; top: 418px; display: flex; translate: -50% 0; }

@media (prefers-reduced-motion: reduce) {
  .ck-strip__live { animation: none; }
}

/* An admin picture keeps its top edge: the title and badges sit in its upper half */
.ck-strip__picture-top { position: absolute; left: 0; top: 0; width: 100%; height: var(--ck-strip-picture-top, 0px); background-size: 100% auto; background-position: center top; background-repeat: no-repeat; transform: scaleY(-1); }
.ck-strip .ck-media-bg__image { object-position: top; }
`,v_=`import { useState, type ReactNode } from "react";
import bag from "../../assets/home/night-bag.webp";
import bubblesLeft from "../../assets/home/night-bubbles-left.svg";
import bubblesRight from "../../assets/home/night-bubbles-right.svg";
import confettiA from "../../assets/home/night-confetti-a.webp";
import confettiB from "../../assets/home/night-confetti-b.webp";
import confettiC from "../../assets/home/night-confetti-c.webp";
import glowBottom from "../../assets/home/night-glow-bottom.svg";
import glowCorner from "../../assets/home/night-glow-corner.svg";
import glowPink from "../../assets/home/night-glow-pink.svg";
import glowTop from "../../assets/home/night-glow-top.svg";
import megaphone from "../../assets/home/night-megaphone.webp";
import stars from "../../assets/home/night-stars.svg";
import liveDotGlow from "../../assets/home/live-dot-glow.svg";
import liveDot from "../../assets/home/live-dot.svg";
import liveCoreGlow from "../../assets/home/live-dot-core-glow.svg";
import liveCore from "../../assets/home/live-dot-core.svg";
import { cardProps, type Deal } from "../../data/deal";
import { ProductCard } from "../ProductCard/ProductCard";
import { MediaBackground, type MediaBackgroundSource } from "../MediaBackground/MediaBackground";
import { ScrollIndicator } from "../ScrollIndicator/ScrollIndicator";
import "./DealsStripHero.css";

export interface DealsStripHeroProps {
  /**
   * Title artwork, e.g. the "Jaw Dropping DEALS! Live Now" lettering (199.3×99.6 frame; supply at 3x, 598×299).
   * Leave it out when the admin's \`background\` picture already carries the title.
   */
  titleArt?: string;
  /** Spoken name of the title; also read out when the title is part of the background picture. */
  titleAlt: string;
  /** Draws the blinking yellow dot beside "Live Now" in the title art (Figma 1227:52768). Only for art drawn with that gap. */
  liveDot?: boolean;
  deals: Deal[];
  /** Shows three placeholder cards while the products load. */
  loading?: boolean;
  /** Kept for the admin's on/off; this design (Figma 1227:52155) has no "view all", only the scroll dots. */
  viewAllLabel?: string;
  showViewAll?: boolean;
  onViewAll?: () => void;
  onDealSelect?: (deal: Deal) => void;
  /** Back/search bar laid over the top of the art, e.g. <TopBar searchHints={[...]} />. */
  topBar?: ReactNode;
  /** Replaces the built-in backdrop art with an image or Lottie, e.g. a full 360×434 sale picture (supply at 3x, 1080×1302). */
  background?: MediaBackgroundSource;
}

/** Page type 4 top section (Figma 1227:52155, 360×434): night sky with star dust, title art, a row of masthead cards, scroll dots. */
export function DealsStripHero({ titleArt, titleAlt, liveDot: live = false, deals, loading, onDealSelect, topBar, background }: DealsStripHeroProps) {
  const [progress, setProgress] = useState(0);
  const onScroll = (el: HTMLDivElement) => {
    const room = el.scrollWidth - el.clientWidth;
    setProgress(room > 0 ? el.scrollLeft / room : 0);
  };

  return (
    <section className="ck-strip" aria-label={titleArt ? undefined : titleAlt}>
      {background?.image && (
        // A host that starts the page lower (a bar drawn over its top) shows this above the picture: the picture's
        // own top edge, mirrored, so the colour runs on without a seam. Zero tall unless the host sets --ck-strip-picture-top.
        <div className="ck-strip__picture-top" style={{ backgroundImage: \`url("\${background.image}")\` }} aria-hidden="true" />
      )}
      {background ? (
        <MediaBackground {...background} />
      ) : (
        <div className="ck-strip__art">
          <img className="ck-strip__stars" src={stars} alt="" />
          <img className="ck-strip__glow-corner" src={glowCorner} alt="" />
          <Glow className="ck-strip__glow-bottom" src={glowBottom} />
          <Glow className="ck-strip__glow-top" src={glowTop} />
          <Piece className="ck-strip__confetti ck-strip__confetti--1" src={confettiA} />
          <Piece className="ck-strip__confetti ck-strip__confetti--2" src={confettiB} />
          <div className="ck-strip__bubbles-left">
            <img src={bubblesLeft} alt="" />
          </div>
          <Glow className="ck-strip__glow-pink ck-strip__glow-pink--1" src={glowPink} />
          <Glow className="ck-strip__glow-pink ck-strip__glow-pink--2" src={glowPink} />
          <Piece className="ck-strip__megaphone" src={megaphone} />
          <Piece className="ck-strip__confetti ck-strip__confetti--3" src={confettiC} />
          <Piece className="ck-strip__confetti ck-strip__confetti--4" src={confettiC} />
          {/* Dark fade behind the status bar and the search row */}
          <div className="ck-strip__scrim" />
          <img className="ck-strip__bubbles-right" src={bubblesRight} alt="" />
          <Piece className="ck-strip__confetti ck-strip__confetti--5" src={confettiB} />
          <Piece className="ck-strip__confetti ck-strip__confetti--6" src={confettiC} />
          <Piece className="ck-strip__bag" src={bag} />
        </div>
      )}

      {topBar && <div className="ck-strip__topbar">{topBar}</div>}

      {titleArt && <img className="ck-strip__title" src={titleArt} alt={titleAlt} />}
      {titleArt && live && (
        <span className="ck-strip__live" aria-hidden="true">
          <img className="ck-strip__live-glow" src={liveDotGlow} alt="" />
          <img className="ck-strip__live-dot" src={liveDot} alt="" />
          <img className="ck-strip__live-core-glow" src={liveCoreGlow} alt="" />
          <img className="ck-strip__live-core" src={liveCore} alt="" />
        </span>
      )}

      {/* Swipes sideways when there are more cards than fit; bottom padding keeps the shadows */}
      <div className="ck-strip__scroller" onScroll={(e) => onScroll(e.currentTarget)}>
        <div className="ck-strip__row">
          {loading
            ? Array.from({ length: 3 }, (_, i) => <ProductCard key={i} variant="masthead" {...cardProps(PLACEHOLDER)} loading />)
            : deals.map((deal) => (
                <ProductCard
                  key={deal.id}
                  variant="masthead"
                  {...cardProps(deal)}
                  onSelect={onDealSelect && (() => onDealSelect(deal))}
                />
              ))}
        </div>
      </div>

      {(loading || deals.length > 2) && (
        <div className="ck-strip__dots">
          <ScrollIndicator progress={progress} thin />
        </div>
      )}
    </section>
  );
}

function Glow({ className, src }: { className: string; src: string }) {
  return (
    <div className={className}>
      <img src={src} alt="" />
    </div>
  );
}

/** A turned piece of art: Figma's positioned box, the turned inner box, and the image (cropped inside it for sprite sheets). */
function Piece({ className, src }: { className: string; src: string }) {
  return (
    <div className={className}>
      <div>
        <img src={src} alt="" />
      </div>
    </div>
  );
}

const PLACEHOLDER: Deal = { id: "loading", brand: "", name: "", store: "", price: 0, mrp: 0 };
`,x_=`import { Dots } from "./Dots";
import type { BookEntry } from "../../book/types";

const onBlue = (child: JSX.Element) => <div style={{ background: "#2d53cc", padding: 8 }}>{child}</div>;

const entry: BookEntry = {
  title: "Dots",
  feature: "Shared",
  description: "Carousel page dots: the Best deals capsule and the brand slide bars.",
  stories: [
    { name: "capsule, 3, middle on", render: () => <Dots variant="capsule" count={3} active={1} /> },
    { name: "capsule, 8", render: () => <Dots variant="capsule" count={8} active={0} /> },
    { name: "bars, 3", render: () => onBlue(<Dots variant="bars" count={3} active={0} />) },
    { name: "one page (renders nothing)", render: () => <Dots variant="bars" count={1} active={0} /> },
  ],
};
export default entry;
`,y_=`.ck-dots { display: flex; align-items: flex-start; }
.ck-dots__dot { flex-shrink: 0; transition: width 300ms; }

/* Best deals: tiny dots in a white capsule, active one a pink pill */
.ck-dots--capsule { height: 9px; gap: 2.348px; padding: 3px var(--ck-space-sm) 0; border-radius: var(--ck-radius-panel); background: var(--ck-color-surface); box-shadow: var(--ck-dots-shadow); }
.ck-dots--capsule .ck-dots__dot { width: 3.13px; height: 3.13px; border-radius: 1.565px; background: var(--ck-dots-idle); }
.ck-dots--capsule .ck-dots__dot--on { width: 7.043px; background: var(--ck-dots-active); }

/* Brand slides: white dots, active one twice as wide */
.ck-dots--bars { gap: var(--ck-space-xs); }
.ck-dots--bars .ck-dots__dot { width: 6px; height: 6px; border-radius: var(--ck-radius-chip); background: var(--ck-color-surface); transition-duration: 200ms; }
.ck-dots--bars .ck-dots__dot--on { width: 12px; }

/* Cross-sell: four thin bars filling 64px, active one solid white */
.ck-dots--lines { width: 64px; height: 4px; gap: var(--ck-space-xs); }
.ck-dots--lines .ck-dots__dot { flex: 1 0 0; height: 100%; border-radius: 29.333px; background: var(--ck-cross-sell-dot-off); }
.ck-dots--lines .ck-dots__dot--on { background: var(--ck-color-surface); }

/* Product detail Similar deals: grey dots, the active one 6px and darker */
.ck-dots--slate { align-items: center; gap: 3px; }
.ck-dots--slate .ck-dots__dot { width: 4px; height: 4px; border-radius: var(--ck-radius-chip); background: var(--ck-pdp-dot); opacity: 0.3; }
.ck-dots--slate .ck-dots__dot--on { width: 6px; height: 6px; opacity: 0.6; }
`,w_=`import "./Dots.css";

export type DotsVariant = "capsule" | "bars" | "lines" | "slate";

export interface DotsProps {
  /** capsule: tiny dots in a white pill (Best deals). bars: white dots with a long active one (brand slides). lines: thin white bars, active one solid (cross-sell). slate: three-dot grey pager, active one bigger (product detail Similar deals). */
  variant: DotsVariant;
  count: number;
  active: number;
}

/** Page dots for carousels; renders nothing for a single page. */
export function Dots({ variant, count, active }: DotsProps) {
  if (count < 2) return null;
  return (
    <span className={\`ck-dots ck-dots--\${variant}\`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className={\`ck-dots__dot \${i === active ? "ck-dots__dot--on" : ""}\`} />
      ))}
    </span>
  );
}
`,b_=`import type { BookEntry } from "../../book/types";
import { LightString } from "./LightString";

const entry: BookEntry = {
  title: "LightString",
  feature: "Masthead / hero",
  description: "Twinkling fairy lights for a masthead backdrop. Decorative, 80 bulbs, no props. Used by CategorySaleHero with backdrop=\\"lights\\".",
  stories: [
    {
      name: "on purple",
      render: () => (
        <div style={{ position: "relative", width: 360, height: 394, background: "var(--ck-sale-zone-bg)", overflow: "clip" }}>
          <LightString />
        </div>
      ),
    },
  ],
};
export default entry;
`,S_=`.ck-lights { position: absolute; inset: 0; pointer-events: none; translate: 0 var(--ck-lights-offset); }
.ck-lights__wire { position: absolute; max-width: none; }
.ck-lights__wire--mirrored { scale: -1 1; }

/* One bulb: a soft halo behind a bright disc. Sizes are shares of the glow box Figma draws around each bulb. */
.ck-lights__bulb { position: absolute; mix-blend-mode: screen; animation: ck-light-twinkle var(--ck-light-speed) ease-in-out var(--ck-light-delay) infinite; }
.ck-lights__bulb::before,
.ck-lights__bulb::after { content: ""; position: absolute; border-radius: 50%; translate: -50% -50%; left: 50%; top: 50%; }
.ck-lights__bulb::before { width: 100%; height: 100%; background: var(--ck-lights-halo); }
.ck-lights__bulb::after { width: 42%; height: 42%; background: var(--ck-lights-bulb); }

@keyframes ck-light-twinkle {
  0%, 100% { opacity: 1; }
  45% { opacity: 0.18; }
  60% { opacity: 0.9; }
}

@media (prefers-reduced-motion: reduce) {
  .ck-lights__bulb { animation: none; }
}
`,C_=`import type { CSSProperties } from "react";
import wire1 from "../../assets/home/lights-wire-1.webp";
import wire2 from "../../assets/home/lights-wire-2.webp";
import wire3 from "../../assets/home/lights-wire-3.webp";
import wire4 from "../../assets/home/lights-wire-4.webp";
import { LIGHT_BULBS, LIGHT_WIRES } from "./lightStringData";
import "./LightString.css";

const WIRES = { 1: wire1, 2: wire2, 3: wire3, 4: wire4 };

/**
 * Two crossing strings of fairy lights (Figma 1066:10675), 80 bulbs that twinkle at their own pace.
 * Decorative. Place it inside a \`position: relative\` 360×394 masthead; it keeps its own Figma coordinates.
 * Stops twinkling when the user prefers reduced motion.
 */
export function LightString() {
  return (
    <div className="ck-lights" aria-hidden="true">
      {LIGHT_WIRES.map((wire, i) => (
        <img
          key={i}
          className={\`ck-lights__wire\${wire.mirrored ? " ck-lights__wire--mirrored" : ""}\`}
          src={WIRES[wire.src]}
          alt=""
          style={{ left: wire.x, top: wire.y, width: wire.w, height: wire.h }}
        />
      ))}
      {LIGHT_BULBS.map((bulb, i) => (
        <span
          key={i}
          className="ck-lights__bulb"
          style={
            {
              left: bulb.x - bulb.w / 2,
              top: bulb.y - bulb.w / 2,
              width: bulb.w,
              height: bulb.w,
              // Spread starts and speeds so neighbours never blink together; fixed per bulb, so it never re-rolls.
              "--ck-light-delay": \`-\${((i * 0.37) % 2.6).toFixed(2)}s\`,
              "--ck-light-speed": \`\${(1.8 + (i % 5) * 0.35).toFixed(2)}s\`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
`,P_=`import { MediaBackground } from "./MediaBackground";
import type { BookEntry } from "../../book/types";
import salePattern from "../../assets/home/sale-pattern.webp";
import pulse from "../../assets/lottie/pulse-demo.json?url";

const frame = (children: React.ReactNode) => (
  <div style={{ position: "relative", width: "var(--ck-page-w)", height: 200, background: "var(--ck-color-accent)", overflow: "hidden", borderRadius: 12 }}>{children}</div>
);

const entry: BookEntry = {
  title: "MediaBackground",
  feature: "Masthead / hero",
  description:
    "Masthead background: a configurable image or Lottie. Image shows first and is the fallback. Lottie loads on demand, pauses off screen, and is skipped under reduced motion.",
  stories: [
    { name: "image only", render: () => frame(<MediaBackground image={salePattern} />) },
    { name: "lottie only", render: () => frame(<MediaBackground lottie={pulse} />) },
    { name: "lottie over image", render: () => frame(<MediaBackground image={salePattern} lottie={pulse} />) },
    { name: "broken lottie URL falls back to image", render: () => frame(<MediaBackground image={salePattern} lottie="/missing.json" />) },
  ],
};
export default entry;
`,N_=`.ck-media-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
.ck-media-bg__layer { position: absolute; inset: 0; width: 100%; height: 100%; }
.ck-media-bg__image { object-fit: cover; }
.ck-media-bg__lottie { opacity: 0; transition: opacity var(--ck-media-bg-fade, 200ms) ease; }
.ck-media-bg--playing .ck-media-bg__lottie { opacity: 1; }
`,j_=`import { useEffect, useRef, useState } from "react";
import "./MediaBackground.css";

/** What the admin configures for a masthead background. At least one of the two. */
export interface MediaBackgroundSource {
  /** Still image. Shown first, and kept as the fallback if the Lottie is missing, slow, broken or motion is reduced. */
  image?: string;
  /** URL of a Lottie JSON file. */
  lottie?: string;
}

export interface MediaBackgroundProps extends MediaBackgroundSource {
  /** Called when the Lottie cannot load or play, so the host can log it. */
  onLottieError?: (error: unknown) => void;
}

/**
 * Full-bleed, decorative masthead background: a configurable image or Lottie.
 * Place it as the first child of a \`position: relative\` container.
 * Loads lottie-web on demand, pauses when off screen or the tab is hidden,
 * and shows only the image when the user prefers reduced motion.
 */
export function MediaBackground({ image, lottie, onLottieError }: MediaBackgroundProps) {
  const host = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(false);
    const el = host.current;
    if (!lottie || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let cleanup = () => {};

    // Fetch the JSON ourselves (not lottie-web's \`path\`): a 404 or bad file becomes a catchable error.
    Promise.all([
      import("lottie-web/build/player/lottie_light"),
      fetch(lottie).then((res) => {
        if (!res.ok) throw new Error(\`Lottie request failed (\${res.status}): \${lottie}\`);
        return res.json();
      }),
    ])
      .then(([{ default: lottieWeb }, animationData]) => {
        if (cancelled) return;
        const anim = lottieWeb.loadAnimation({
          container: el,
          renderer: "svg",
          loop: true,
          autoplay: false,
          animationData,
          rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
        });

        let visible = true;
        const sync = () => (visible && !document.hidden ? anim.play() : anim.pause());
        const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
        observer.observe(el);
        document.addEventListener("visibilitychange", sync);

        anim.addEventListener("DOMLoaded", () => { if (!cancelled) { setPlaying(true); sync(); } });

        cleanup = () => {
          observer.disconnect();
          document.removeEventListener("visibilitychange", sync);
          anim.destroy();
        };
      })
      .catch((error) => onLottieError?.(error));

    return () => { cancelled = true; cleanup(); };
    // onLottieError is deliberately not a dependency: a new callback must not restart the animation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lottie]);

  return (
    <div className={\`ck-media-bg\${playing ? " ck-media-bg--playing" : ""}\`} aria-hidden="true">
      {image && <img className="ck-media-bg__layer ck-media-bg__image" src={image} alt="" />}
      {lottie && <div ref={host} className="ck-media-bg__layer ck-media-bg__lottie" />}
    </div>
  );
}
`,B_=`import { PageFooter } from "./PageFooter";
import type { BookEntry } from "../../book/types";

const entry: BookEntry = {
  title: "PageFooter",
  feature: "Shared",
  description: "Cloud footer at the end of every home page.",
  stories: [
    { name: "as in Figma", render: () => <PageFooter title={"Shop\\nCashback\\nRepeat!"} subtitle="Designed for smart shoppers" /> },
    { name: "two lines", render: () => <PageFooter title={"Shop\\nSmart!"} subtitle="Cashback on every order" /> },
  ],
};
export default entry;
`,D_=`.ck-footer { position: relative; width: var(--ck-page-w); height: 398px; flex-shrink: 0; overflow: clip; font-family: var(--ck-font-family); line-height: 1.5; }
.ck-footer__clouds { position: absolute; bottom: 0; left: -36.42px; width: 504.831px; height: 397.999px; max-width: none; scale: -1 1; }
.ck-footer__text { position: absolute; bottom: 124.89px; left: 28.5px; display: flex; width: 205px; flex-direction: column; align-items: flex-start; gap: var(--ck-space-md); color: var(--ck-footer-text); }
.ck-footer__title { white-space: pre-line; font-size: var(--ck-text-6xl); font-weight: 800; line-height: 1.2; letter-spacing: -0.88px; }
.ck-footer__subtitle { font-size: var(--ck-text-lg); font-weight: 600; line-height: 1.2; letter-spacing: -0.28px; }
`,A_=`import clouds from "../../assets/home/footer-clouds.svg";
import "./PageFooter.css";

export interface PageFooterProps {
  /** Big lines; "\\n" breaks them, e.g. "Shop\\nCashback\\nRepeat!". */
  title: string;
  subtitle: string;
}

/** Pale yellow cloud footer (360×398) that closes every home page. */
export function PageFooter({ title, subtitle }: PageFooterProps) {
  return (
    <div className="ck-footer">
      {/* Figma rotates the cloud shape 180° and flips it vertically: a mirror image */}
      <img className="ck-footer__clouds" src={clouds} alt="" />
      <div className="ck-footer__text">
        <div className="ck-footer__title">{title}</div>
        <div className="ck-footer__subtitle">{subtitle}</div>
      </div>
    </div>
  );
}
`,E_=`import { PdpFooter } from "./PdpFooter";
import type { BookEntry } from "../../book/types";

const entry: BookEntry = {
  title: "PdpFooter",
  feature: "Product detail",
  description: "Pinned bar with one full-width Grab deal button (Figma 485:7679).",
  stories: [
    { name: "Grab deal", render: () => <PdpFooter /> },
    { name: "custom label", render: () => <PdpFooter label="Shop on Flipkart" /> },
  ],
};
export default entry;
`,T_=`/* Figma 485:7681: 12px above the button, 32px below (home indicator room), 16px at the sides */
.ck-pdp-footer { position: sticky; bottom: 0; z-index: 2; box-sizing: border-box; width: var(--ck-page-w); padding: var(--ck-space-xl) var(--ck-space-2xl) 32px; background: var(--ck-color-surface); box-shadow: var(--ck-pdp-footer-shadow); }
`,L_=`import { Button } from "../Button/Button";
import "./PdpFooter.css";

export interface PdpFooterProps {
  label?: string;
  onGrab?: () => void;
}

/** White bar with a soft top shadow and one full-width orange button (Figma 485:7679). Pins to the bottom of the sheet. */
export function PdpFooter({ label = "Grab deal", onGrab }: PdpFooterProps) {
  return (
    <div className="ck-pdp-footer">
      <Button size="sheet" onClick={onGrab}>
        {label}
      </Button>
    </div>
  );
}
`,F_=`import { PdpHero } from "./PdpHero";
import type { BookEntry } from "../../book/types";
import { sampleProductDetail as d } from "../../data/samples";

const entry: BookEntry = {
  title: "PdpHero",
  feature: "Product detail",
  description: "Photo panel of the product detail sheet. Ribbon, rating and the Lowest price badge are each optional.",
  stories: [
    { name: "as in Figma", render: () => <PdpHero image={d.image} ribbon={d.ribbon} rating={d.rating} lowestPrice={d.lowestPrice} /> },
    { name: "photo only", render: () => <PdpHero image={d.image} /> },
    { name: "rating, no ribbon or badge", render: () => <PdpHero image={d.image} rating={d.rating} /> },
    { name: "long ribbon text", render: () => <PdpHero image={d.image} ribbon="Lowest price in the last 12 months" lowestPrice={1299} /> },
  ],
};
export default entry;
`,I_=`/* Offsets are Figma coordinates inside the 328×299 panel (671:39596); the ribbon hangs outside it. */
.ck-pdp-hero { position: relative; width: 328px; height: 299px; flex-shrink: 0; font-family: var(--ck-font-family); }
.ck-pdp-hero__panel { position: absolute; inset: 0; overflow: clip; border-radius: var(--ck-radius-hero); background: var(--ck-pdp-surface); }
.ck-pdp-hero__photo { position: absolute; left: 50%; top: calc(50% + 5px); width: 239px; height: 239px; translate: -50% -50%; object-fit: contain; }

.ck-pdp-hero__share { position: absolute; left: 276px; top: 16px; display: block; width: 24px; height: 24px; padding: 0; border: 0; background: none; cursor: pointer; }
.ck-pdp-hero__share img { display: block; width: 100%; height: 100%; }

.ck-pdp-hero__rating { position: absolute; left: 12px; top: 262px; display: flex; align-items: center; justify-content: center; gap: var(--ck-space-xs); padding: var(--ck-space-xs) var(--ck-space-sm); border-radius: var(--ck-radius-image); background: var(--ck-pdp-rating-fade); }
.ck-pdp-hero__star { display: block; width: 13.067px; height: 12.427px; margin: 0 0.34px 1.31px; }
.ck-pdp-hero__rating-value { font-size: var(--ck-text-md); font-weight: 600; line-height: 1.44; letter-spacing: -0.24px; color: var(--ck-color-positive); }
.ck-pdp-hero__rating-count { font-size: var(--ck-text-md); font-weight: 400; line-height: 1.44; letter-spacing: 0.12px; color: var(--ck-pdp-muted); }

/* Green clover badge (89×100 art, placed as Figma does), text tilted 14° */
.ck-pdp-hero__badge { position: absolute; left: 238.95px; top: 207.08px; width: 89.093px; height: 100.093px; }
.ck-pdp-hero__badge > img { position: absolute; inset: 0; display: block; width: 100%; height: 100%; max-width: none; }
.ck-pdp-hero__badge-text { position: absolute; left: 18.52px; top: 22.11px; display: flex; width: 48px; flex-direction: column; align-items: center; rotate: -14.04deg; color: var(--ck-color-on-accent); }
.ck-pdp-hero__badge-label { margin-bottom: -2px; font-size: var(--ck-text-2xs); font-weight: 500; line-height: normal; letter-spacing: -0.16px; white-space: nowrap; }
.ck-pdp-hero__badge-price { font-size: var(--ck-text-xl); font-weight: 800; line-height: 1.44; letter-spacing: -0.32px; white-space: nowrap; }

/* Red ribbon: Figma has it 2.5px left of the panel and 13.45px down */
.ck-pdp-hero__ribbon { position: absolute; left: -2.5px; top: 13.45px; width: 47px; height: 23.553px; pointer-events: none; }
.ck-pdp-hero__ribbon-fold { position: absolute; left: 0; top: 14.89px; width: 4px; height: 8.663px; scale: 1 -1; }
.ck-pdp-hero__ribbon-band { position: absolute; left: 0; top: -2px; width: 113.687px; height: 22.141px; max-width: none; }
.ck-pdp-hero__ribbon-text { position: absolute; left: 9.47px; top: 2.71px; white-space: nowrap; font-size: var(--ck-text-sm); font-weight: 700; line-height: normal; color: var(--ck-color-on-accent); }
`,M_=`import badge from "../../assets/pdp/lowest-price-badge.svg";
import ribbonFold from "../../assets/card/ribbon-fold.svg";
import ribbon from "../../assets/pdp/ribbon.svg";
import star from "../../assets/pdp/rating-star.svg";
import share from "../../assets/pdp/share.svg";
import { rupees } from "../../data/deal";
import "./PdpHero.css";

export interface PdpHeroProps {
  /** Product photo, drawn into a 239×239 box (supply at 3x, 717×717). */
  image: string;
  imageAlt?: string;
  /** Red ribbon text, e.g. "Lowest in 60 days". */
  ribbon?: string;
  rating?: { value: number; count: string };
  /** Shows the green "Lowest price" badge with this price. */
  lowestPrice?: number;
  onShare?: () => void;
}

/** Grey photo panel (328×299) of the product detail sheet: share, ribbon, rating and Lowest price badge. */
export function PdpHero({ image, imageAlt = "", ribbon: ribbonText, rating, lowestPrice, onShare }: PdpHeroProps) {
  return (
    <div className="ck-pdp-hero">
      <div className="ck-pdp-hero__panel">
        <img className="ck-pdp-hero__photo" src={image} alt={imageAlt} />

        <button type="button" className="ck-pdp-hero__share" aria-label="Share" onClick={onShare}>
          <img src={share} alt="" />
        </button>

        {rating && (
          <div className="ck-pdp-hero__rating">
            <img className="ck-pdp-hero__star" src={star} alt="" />
            <span className="ck-pdp-hero__rating-value">{rating.value}</span>
            <span className="ck-pdp-hero__rating-count">({rating.count})</span>
          </div>
        )}

        {lowestPrice != null && (
          <div className="ck-pdp-hero__badge">
            <img src={badge} alt="" />
            <div className="ck-pdp-hero__badge-text">
              <span className="ck-pdp-hero__badge-label">Lowest price</span>
              <span className="ck-pdp-hero__badge-price">{rupees(lowestPrice)}</span>
            </div>
          </div>
        )}
      </div>

      {ribbonText && (
        <div className="ck-pdp-hero__ribbon">
          <img className="ck-pdp-hero__ribbon-fold" src={ribbonFold} alt="" />
          <img className="ck-pdp-hero__ribbon-band" src={ribbon} alt="" />
          <span className="ck-pdp-hero__ribbon-text">{ribbonText}</span>
        </div>
      )}
    </div>
  );
}
`,R_=`import { PdpPriceBlock } from "./PdpPriceBlock";
import type { BookEntry } from "../../book/types";
import { sampleProductDetail as d } from "../../data/samples";

const entry: BookEntry = {
  title: "PdpPriceBlock",
  feature: "Product detail",
  description: "Title, price, usual price, note and offer line.",
  stories: [
    { name: "as in Figma", render: () => <PdpPriceBlock title={d.title} price={d.price} usually={d.usually} note={d.note} offer={d.offer} /> },
    { name: "price only", render: () => <PdpPriceBlock title={d.title} price={d.price} /> },
    { name: "long title", render: () => <PdpPriceBlock title="Boat Airdopes 141 TWS earbuds with 42 hours of playback, ENx noise cancellation and ASAP charge" price={1299} usually={1899} offer={d.offer} /> },
  ],
};
export default entry;
`,z_=`/* Figma 671:39613 */
.ck-pdp-price { display: flex; width: 328px; flex-direction: column; align-items: flex-start; gap: var(--ck-space-xs); font-family: var(--ck-font-family); }
.ck-pdp-price__top { display: flex; width: 100%; flex-direction: column; align-items: flex-start; gap: var(--ck-space-xl); }
.ck-pdp-price__title { width: 286.368px; font-size: var(--ck-text-xl); font-weight: 700; line-height: 1.44; letter-spacing: -0.32px; color: var(--ck-pdp-title); }
.ck-pdp-price__prices { display: flex; flex-direction: column; align-items: flex-start; }
.ck-pdp-price__row { display: flex; align-items: center; gap: var(--ck-space-md); margin-bottom: -2px; line-height: 1.44; white-space: nowrap; }
.ck-pdp-price__price { font-size: var(--ck-text-3xl); font-weight: 800; letter-spacing: -0.44px; color: var(--ck-color-text); }
.ck-pdp-price__usually { font-size: var(--ck-text-lg); font-weight: 500; letter-spacing: -0.28px; color: var(--ck-pdp-muted); }
.ck-pdp-price__note { font-size: var(--ck-text-sm); font-weight: 600; line-height: 1.44; letter-spacing: 0.1px; color: var(--ck-color-text-muted); opacity: 0.6; }
.ck-pdp-price__offer { padding: var(--ck-space-xs) 0; font-size: var(--ck-text-md); font-weight: 700; line-height: 1.44; letter-spacing: -0.24px; color: var(--ck-color-positive); white-space: nowrap; }
`,O_=`import { rupees } from "../../data/deal";
import "./PdpPriceBlock.css";

export interface PdpPriceBlockProps {
  title: string;
  price: number;
  /** Shows "Usually ₹…" next to the price. */
  usually?: number;
  /** Small grey line under the price. */
  note?: string;
  /** Green line, e.g. "60%OFF + ₹120 cashback". */
  offer?: string;
}

/** Title, price, usual price, note and offer line under the photo of the product detail sheet. */
export function PdpPriceBlock({ title, price, usually, note, offer }: PdpPriceBlockProps) {
  return (
    <div className="ck-pdp-price">
      <div className="ck-pdp-price__top">
        <div role="heading" aria-level={1} className="ck-pdp-price__title">{title}</div>
        <div className="ck-pdp-price__prices">
          <div className="ck-pdp-price__row">
            <span className="ck-pdp-price__price">{rupees(price)}</span>
            {usually != null && <span className="ck-pdp-price__usually">Usually {rupees(usually)}</span>}
          </div>
          {note && <span className="ck-pdp-price__note">{note}</span>}
        </div>
      </div>
      {offer && <span className="ck-pdp-price__offer">{offer}</span>}
    </div>
  );
}
`,H_=`import { PdpSheet } from "./PdpSheet";
import { PdpFooter } from "../PdpFooter/PdpFooter";
import type { BookEntry } from "../../book/types";

const filler = <p style={{ margin: 16, fontSize: 12 }}>Sheet content goes here.</p>;

const entry: BookEntry = {
  title: "PdpSheet",
  feature: "Product detail",
  description: "Bottom sheet of the product detail page: close button, white sheet with 32px top corners, scrolling body, optional pinned footer.",
  stories: [
    { name: "content height", render: () => <PdpSheet>{filler}</PdpSheet> },
    {
      name: "fixed height, body scrolls, footer pinned",
      render: () => (
        <PdpSheet height={320} footer={<PdpFooter />}>
          {Array.from({ length: 12 }, (_, i) => (
            <p key={i} style={{ margin: 8, fontSize: 12 }}>Line {i + 1}</p>
          ))}
        </PdpSheet>
      ),
    },
  ],
};
export default entry;
`,G_=`/* Figma 671:39589: 36px close button, 8px gap, white sheet with 32px top corners */
.ck-pdp { display: flex; width: var(--ck-page-w); flex-direction: column; align-items: center; gap: var(--ck-space-md); }
.ck-pdp__close { display: flex; width: 36px; height: 36px; flex-shrink: 0; align-items: center; justify-content: center; padding: 0; border: 0; border-radius: 75.455px; background: var(--ck-pdp-close-bg); cursor: pointer; }
.ck-pdp__close img { display: block; }
.ck-pdp__sheet { position: relative; display: flex; width: var(--ck-page-w); flex-direction: column; overflow-x: clip; overflow-y: auto; border-radius: var(--ck-radius-sheet) var(--ck-radius-sheet) 0 0; background: var(--ck-color-surface); }
.ck-pdp__body { display: flex; flex: 1 0 auto; flex-direction: column; align-items: center; gap: var(--ck-space-md); padding-top: var(--ck-space-2xl); }
`,U_=`import type { ReactNode } from "react";
import close from "../../assets/pdp/close.svg";
import "./PdpSheet.css";

export interface PdpSheetProps {
  onClose?: () => void;
  /** Sheet height in px. The body scrolls inside it. Without it the sheet is as tall as its content. */
  height?: number;
  /** Pinned under the scrolling body, e.g. <PdpFooter />. */
  footer?: ReactNode;
  children?: ReactNode;
}

/** Bottom sheet of the product detail page: a round close button above a white sheet with 32px top corners. */
export function PdpSheet({ onClose, height, footer, children }: PdpSheetProps) {
  return (
    <div className="ck-pdp">
      <button type="button" className="ck-pdp__close" aria-label="Close" onClick={onClose}>
        <img src={close} alt="" width="20.007" height="20.007" />
      </button>
      <div className="ck-pdp__sheet" style={height ? { height } : undefined}>
        <div className="ck-pdp__body">{children}</div>
        {footer}
      </div>
    </div>
  );
}
`,V_=`import { useState } from "react";
import { PricePills } from "./PricePills";
import type { BookEntry } from "../../book/types";
import { samplePriceAmounts } from "../../data/samples";

function Live({ amounts, start }: { amounts: number[]; start: number }) {
  const [selected, setSelected] = useState(start);
  return <PricePills amounts={amounts} selected={selected} onSelect={setSelected} />;
}

const entry: BookEntry = {
  title: "PricePills",
  feature: "Product listing",
  description: "\\"Under ₹…\\" price filter pills; one is always selected. Tap to switch.",
  stories: [
    { name: "Under ₹99 selected", render: () => <Live amounts={samplePriceAmounts} start={99} /> },
    { name: "Under ₹299 selected", render: () => <Live amounts={samplePriceAmounts} start={299} /> },
    { name: "big amounts", render: () => <Live amounts={[999, 1999, 4999]} start={1999} /> },
  ],
};
export default entry;
`,W_=`.ck-pills { width: var(--ck-page-w); overflow-x: auto; scrollbar-width: none; font-family: var(--ck-font-family); line-height: 1.5; }
.ck-pills::-webkit-scrollbar { display: none; }
.ck-pills__row { display: flex; width: max-content; align-items: center; gap: var(--ck-space-sm); padding: 0 var(--ck-space-2xl) 0 7px; }
.ck-pills__pill { display: flex; height: 36px; flex-shrink: 0; align-items: center; justify-content: center; padding: 0 17px; border: 1px solid var(--ck-pill-off-border); border-radius: var(--ck-radius-pill); background: var(--ck-color-surface); white-space: nowrap; font-size: var(--ck-text-md); line-height: 16px; color: var(--ck-pill-off-text); cursor: pointer; }
.ck-pills__under { font-weight: 500; }
.ck-pills__amount { font-weight: 700; }
.ck-pills__pill--on { border-color: var(--ck-pill-on-border); background: var(--ck-pill-on-bg); color: var(--ck-color-on-accent); }
.ck-pills__pill--on .ck-pills__under { font-weight: 600; color: var(--ck-pill-on-text); }
`,Q_=`import { rupees } from "../../data/deal";
import "./PricePills.css";

export interface PricePillsProps {
  /** Price ceilings in rupees, e.g. [99, 199, 299, 399]. */
  amounts: number[];
  selected: number;
  onSelect?: (amount: number) => void;
}

/** "Under ₹99 / ₹199 / …" pills. One is always selected, as in Figma; the row scrolls sideways. */
export function PricePills({ amounts, selected, onSelect }: PricePillsProps) {
  return (
    <div className="ck-pills">
      <div className="ck-pills__row">
        {amounts.map((amount) => {
          const on = amount === selected;
          return (
            <button
              key={amount}
              type="button"
              aria-pressed={on}
              onClick={() => onSelect?.(amount)}
              className={\`ck-pills__pill \${on ? "ck-pills__pill--on" : ""}\`}
            >
              {/* One inline run, so the space after "Under" survives */}
              <span className="ck-pills__text">
                <span className="ck-pills__under">Under </span>
                <span className="ck-pills__amount">{rupees(amount)}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
`,X_=`import { PriceStats } from "./PriceStats";
import type { BookEntry } from "../../book/types";
import { sampleProductDetail as d } from "../../data/samples";

const entry: BookEntry = {
  title: "PriceStats",
  feature: "Product detail",
  description: "One to four grey price tiles. A last tile with no partner becomes a wide tile (Figma has the 4, 3 and 1 tile versions).",
  stories: [
    { name: "four tiles", render: () => <PriceStats stats={d.stats} /> },
    { name: "three tiles", render: () => <PriceStats stats={d.stats.slice(0, 3)} /> },
    { name: "two tiles", render: () => <PriceStats stats={d.stats.slice(0, 2)} /> },
    { name: "one tile", render: () => <PriceStats stats={d.stats.slice(0, 1)} /> },
    { name: "large prices", render: () => <PriceStats stats={[{ label: "Highest Price", value: 124999 }, { label: "Lowest Price", value: 99999 }]} /> },
  ],
};
export default entry;
`,Y_=`/* Figma 767:75218 (tiles) and 703:47602 (wide tile) */
.ck-stats { display: flex; width: 336px; flex-direction: column; align-items: center; gap: var(--ck-space-md); font-family: var(--ck-font-family); }
.ck-stats__row { display: flex; width: 100%; gap: var(--ck-space-md); }
.ck-stats__tile { display: flex; min-width: 1px; flex: 1 0 0; flex-direction: column; align-items: center; justify-content: center; gap: 2px; padding: var(--ck-space-2xl) var(--ck-space-xs); border-radius: var(--ck-radius-card-lg); background: var(--ck-pdp-surface); }
.ck-stats__wide { display: flex; width: 320px; box-sizing: border-box; align-items: center; justify-content: space-between; padding: 24px var(--ck-space-xl); border-radius: var(--ck-radius-card-lg); background: var(--ck-pdp-surface); }
.ck-stats__label { white-space: nowrap; font-size: var(--ck-text-sm); font-weight: 300; line-height: 1.44; letter-spacing: -0.2px; color: var(--ck-pdp-label); }
.ck-stats__value { white-space: nowrap; font-size: var(--ck-text-stat); font-weight: 800; line-height: 1.44; letter-spacing: -0.36px; color: var(--ck-color-text); }
`,J_=`import { rupees } from "../../data/deal";
import type { PriceStat } from "../../data/productDetail";
import "./PriceStats.css";

export interface PriceStatsProps {
  /** One to four tiles; more are ignored. */
  stats: PriceStat[];
}

/**
 * Grey price tiles (Highest, Average, Lowest...). Tiles sit two to a row; a last tile that has no partner
 * (one, or three in all) becomes a wide tile with the label left and the price right, as in Figma.
 */
export function PriceStats({ stats }: PriceStatsProps) {
  const shown = stats.slice(0, 4);
  if (!shown.length) return null;
  const rows: PriceStat[][] = [];
  for (let i = 0; i < shown.length; i += 2) rows.push(shown.slice(i, i + 2));

  return (
    <div className="ck-stats">
      {rows.map((row, r) =>
        row.length === 2 ? (
          <div key={r} className="ck-stats__row">
            {row.map((stat) => (
              <div key={stat.label} className="ck-stats__tile">
                <span className="ck-stats__label">{stat.label}</span>
                <span className="ck-stats__value">{rupees(stat.value)}</span>
              </div>
            ))}
          </div>
        ) : (
          <div key={r} className="ck-stats__wide">
            <span className="ck-stats__label">{row[0].label}</span>
            <span className="ck-stats__value">{rupees(row[0].value)}</span>
          </div>
        ),
      )}
    </div>
  );
}
`,$_=`import { ProductCard } from "./ProductCard";
import type { BookEntry } from "../../book/types";
import { cardProps } from "../../data/deal";
import { sampleDeal, samplePhotos } from "../../data/samples";

const base = cardProps(sampleDeal);
const longTitle = { titleRest: "3-in-1 Floor Cleaning Brush with Wiper, Scrubber and Extra Long Handle for Tiles" };

const entry: BookEntry = {
  title: "ProductCard",
  feature: "Product listing",
  description:
    "Deal card in the 4 Figma sizes: masthead 116 (Mast-head), main 158 (Main-card), horizontal 213 (Horizontal-card), second 141 (second card).",
  stories: [
    { name: "main (NEW)", render: () => <ProductCard variant="main" {...base} /> },
    { name: "second", render: () => <ProductCard variant="second" {...base} imageSrc={samplePhotos.headphones} /> },
    { name: "masthead", render: () => <ProductCard variant="masthead" {...base} imageSrc={samplePhotos.earbuds} /> },
    { name: "horizontal", render: () => <ProductCard variant="horizontal" {...base} imageSrc={samplePhotos.earbuds} /> },
    { name: "listing (sub-category, brand and product detail frames)", render: () => <ProductCard variant="listing" {...base} imageSrc={samplePhotos.headphones} /> },
    { name: "main, long title", render: () => <ProductCard variant="main" {...base} {...longTitle} /> },
    { name: "second, no cashback", render: () => <ProductCard variant="second" {...base} cashback={undefined} /> },
    { name: "masthead, no image", render: () => <ProductCard variant="masthead" {...base} imageSrc={undefined} /> },
    { name: "main, no store logo", render: () => <ProductCard variant="main" {...base} storeLogo={undefined} /> },
    { name: "horizontal, ₹1,299", render: () => <ProductCard variant="horizontal" {...base} price={1299} mrp={4999} /> },
    { name: "main, loading", render: () => <ProductCard variant="main" {...base} loading /> },
    { name: "listing, loading", render: () => <ProductCard variant="listing" {...base} loading /> },
    { name: "second, loading", render: () => <ProductCard variant="second" {...base} loading /> },
    { name: "horizontal, loading", render: () => <ProductCard variant="horizontal" {...base} loading /> },
  ],
};
export default entry;
`,K_=`/* Deal card in the four Figma sizes. Pixel offsets below are Figma coordinates inside the card. */
.ck-card { position: relative; flex-shrink: 0; background: var(--ck-color-surface); filter: drop-shadow(var(--ck-shadow-card)); font-family: var(--ck-font-family); line-height: 1.5; }
.ck-card--clickable { cursor: pointer; }

.ck-card--main { display: flex; flex-direction: column; align-items: center; width: var(--ck-card-w-main); padding: var(--ck-space-md) 0; border-radius: var(--ck-radius-card); }
.ck-card--second { display: flex; align-items: center; width: var(--ck-card-w-second); padding: var(--ck-space-md); border-radius: var(--ck-radius-card-lg); }
.ck-card--masthead { display: flex; align-items: center; width: var(--ck-card-w-masthead); padding: var(--ck-space-sm) var(--ck-space-sm) var(--ck-space-xl); border-radius: var(--ck-radius-card-lg); }
.ck-card--listing { display: flex; align-items: center; width: var(--ck-card-w-main); padding: var(--ck-space-md); border-radius: var(--ck-radius-card-lg); }
.ck-card--horizontal { display: flex; align-items: center; gap: var(--ck-space-md); width: var(--ck-card-w-horizontal); padding: var(--ck-space-sm); border-radius: var(--ck-radius-card-lg); }

/* Cross-sell card (Figma 777:86933): 212 wide, 8px padding, 72 x 88 image, 116 wide text column */
.ck-card--crossSell { display: flex; align-items: center; gap: var(--ck-space-md); width: var(--ck-card-w-cross-sell); padding: var(--ck-space-md); border-radius: var(--ck-radius-card); filter: drop-shadow(var(--ck-shadow-cross-sell)); }

.ck-card__column { display: flex; flex: 1; min-width: 1px; flex-direction: column; }
.ck-card--second .ck-card__column { align-items: center; gap: var(--ck-space-xl); }
.ck-card--masthead .ck-card__column { align-items: flex-start; gap: var(--ck-space-md); }
.ck-card--listing .ck-card__column { align-items: center; gap: var(--ck-space-xl); }

/* Image box with the photo centred in a 100px square */
.ck-card__media { position: relative; flex-shrink: 0; }
.ck-card__frame { position: relative; width: 100%; height: 100%; overflow: clip; border: 1px solid var(--ck-color-border-faint); border-radius: var(--ck-radius-image-lg); background: var(--ck-color-image-bg); }
.ck-card__photo { position: absolute; width: 99.95px; height: 99.95px; max-width: none; translate: -50% -50%; object-fit: contain; }
.ck-card--main .ck-card__media { width: 144px; height: 124px; }
.ck-card--main .ck-card__frame { border-radius: var(--ck-radius-image); }
.ck-card--main .ck-card__photo { left: calc(50% - 1px); top: 50%; }
.ck-card--second .ck-card__media { width: 125px; height: 107.639px; }
.ck-card--second .ck-card__photo { left: calc(50% - 0.5px); top: calc(50% + 0.18px); }
.ck-card--listing .ck-card__media { width: 141.677px; height: 122px; }
.ck-card--listing .ck-card__photo { left: calc(50% - 0.84px); top: 50%; }
.ck-card--masthead .ck-card__media { width: 104px; height: 89.556px; }
.ck-card--masthead .ck-card__photo { left: calc(50% - 1px); top: calc(50% - 2.74px); }
.ck-card--horizontal .ck-card__media { width: 72px; height: 90px; }
.ck-card--horizontal .ck-card__photo { left: calc(50% - 1px); top: calc(50% - 2.96px); }
.ck-card--crossSell .ck-card__media { width: 72px; height: 88px; }
.ck-card--crossSell .ck-card__frame { border-radius: var(--ck-radius-image); }
.ck-card--crossSell .ck-card__photo { left: calc(50% + 0.91px); top: calc(50% - 2.19px); width: 66px; height: 66px; }

/* White store tab cut into the image's bottom-left corner, with inverse-curve corners (flipped like Figma) */
.ck-card__tab { position: absolute; width: 53px; height: 16px; left: 0; border-top-right-radius: 12px; background: var(--ck-color-surface); }
.ck-card__tab-logo { position: absolute; left: 2.24px; top: 2.5px; width: 44.314px; height: 11px; object-fit: cover; }
.ck-card__tab-text { position: absolute; left: 4px; top: 2px; white-space: nowrap; font-size: var(--ck-text-xs); font-weight: 700; font-style: italic; line-height: 12px; color: var(--ck-color-text); }
.ck-card__tab-corner { position: absolute; width: 4.736px; height: 6px; max-width: none; scale: 1 -1; }
.ck-card__tab-corner--1 { left: 53px; top: 9.013px; }
.ck-card__tab-corner--2 { left: 0; top: -6px; }
.ck-card--masthead .ck-card__tab { top: 74.5px; }
.ck-card--horizontal .ck-card__tab { top: 74.56px; }
.ck-card--main .ck-card__tab { left: -7px; top: 108px; width: 59px; }
.ck-card--main .ck-card__tab-logo { left: 7.98px; }
.ck-card--main .ck-card__tab-corner--1 { left: 59px; top: 10px; }
.ck-card--main .ck-card__tab-corner--2 { left: 7px; }
/* The cross-sell card's tab is the Main-card tab, 72.5px down an 88px image */
.ck-card--crossSell .ck-card__tab { left: -7.05px; top: 72.5px; width: 59px; }
.ck-card--crossSell .ck-card__tab-logo { left: 7.98px; }
.ck-card--crossSell .ck-card__tab-corner--1 { left: 59px; top: 10px; }
.ck-card--crossSell .ck-card__tab-corner--2 { left: 7px; }
/* The listing card's tab is the Main-card tab, 107.77px down a 122px image */
.ck-card--listing .ck-card__tab { left: -7.06px; top: 107.77px; width: 59px; }
.ck-card--listing .ck-card__tab-logo { left: 7.98px; }
.ck-card--listing .ck-card__tab-corner--1 { left: 59px; top: 10px; }
.ck-card--listing .ck-card__tab-corner--2 { left: 7px; }
/* The second card's tab is 1.204x larger and hangs 5px below the image */
.ck-card--second .ck-card__tab { left: -7.736px; top: 93.684px; width: 71.034px; height: 19.263px; }
.ck-card--second .ck-card__tab-logo { left: 9.6px; top: 3.01px; width: 53.353px; height: 13.244px; }
.ck-card--second .ck-card__tab-corner--1 { left: 71.034px; top: 12.039px; width: 5.702px; height: 7.224px; }
.ck-card--second .ck-card__tab-corner--2 { left: 69.626px; top: 7.098px; width: 7.224px; height: 7.224px; }
.ck-card--second .ck-card__tab-corner--3 { left: 7.427px; top: -6.307px; width: 7.224px; height: 7.224px; }

/* Brand and name, 2 lines. Negative margins trim to cap height like Figma without clipping line 2. */
.ck-card__title { display: -webkit-box; width: 100%; margin: -3px 0 -4.2px; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: var(--ck-text-md); line-height: 1.3; }
.ck-card__brand { font-weight: 600; color: var(--ck-color-text); }
.ck-card__name { font-weight: 400; color: var(--ck-color-text-muted); }
.ck-card--main .ck-card__brand { color: var(--ck-color-text-strong); }
.ck-card--masthead .ck-card__name,
.ck-card--horizontal .ck-card__name { font-weight: 500; }
.ck-card--horizontal .ck-card__title,
.ck-card--crossSell .ck-card__title { display: block; white-space: nowrap; text-overflow: ellipsis; }
.ck-card--crossSell .ck-card__name { color: var(--ck-cross-sell-name); }
/* Figma's card is 104px: the text column is 88px, the image's height */
.ck-card--crossSell .ck-card__title { margin-bottom: -5.2px; }

/* Text blocks */
.ck-card__body,
.ck-card__info,
.ck-card__price-block { display: flex; width: 100%; flex-direction: column; align-items: flex-start; }
.ck-card--main .ck-card__body { gap: var(--ck-space-md); padding: var(--ck-space-xl) var(--ck-space-md) var(--ck-space-2xl); margin-bottom: -4px; }
.ck-card--main .ck-card__info { gap: var(--ck-space-lg); }
.ck-card--main .ck-card__cta { width: 142px; }
.ck-card--second .ck-card__body { gap: var(--ck-space-xl); }
.ck-card--second .ck-card__price-block { gap: var(--ck-space-md); }
.ck-card--masthead .ck-card__body,
.ck-card--masthead .ck-card__info,
.ck-card--listing .ck-card__body,
.ck-card--listing .ck-card__info,
.ck-card--horizontal .ck-card__info { gap: var(--ck-space-xl); }
.ck-card--masthead .ck-card__price-block,
.ck-card--horizontal .ck-card__price-block { gap: var(--ck-space-xs); }
.ck-card--listing .ck-card__price-block { gap: var(--ck-space-xl); }
.ck-card--horizontal .ck-card__body { width: 121px; flex-shrink: 0; gap: var(--ck-space-md); padding-top: var(--ck-space-xs); }
.ck-card--crossSell .ck-card__body { width: 116px; flex-shrink: 0; gap: var(--ck-space-md); padding-top: var(--ck-space-xs); }
.ck-card--crossSell .ck-card__info { gap: var(--ck-space-xl); }
.ck-card--crossSell .ck-card__price-block { gap: var(--ck-space-md); }

/* Price, struck original price and the green "% OFF" */
.ck-card__price-row { display: flex; width: 100%; align-items: center; gap: var(--ck-space-lg); }
.ck-card--second .ck-card__price-row { width: 125px; }
.ck-card__prices { display: flex; min-width: 1px; flex: 1; align-items: center; gap: var(--ck-space-sm); }
.ck-card__price-block .ck-card__prices { width: 100%; }
.ck-card--second .ck-card__prices { gap: var(--ck-space-xs); }
.ck-card__price { white-space: nowrap; font-size: var(--ck-text-md); font-weight: 700; line-height: 1.3; color: var(--ck-color-text); }
.ck-card--masthead .ck-card__price,
.ck-card--listing .ck-card__price,
.ck-card--horizontal .ck-card__price { font-size: var(--ck-text-lg); }
.ck-card__mrp-wrap { position: relative; display: flex; flex-direction: column; align-items: center; }
.ck-card__mrp { white-space: nowrap; font-size: var(--ck-text-sm); font-weight: 500; line-height: 1.5; color: var(--ck-color-text-muted); }
.ck-card--second .ck-card__mrp { font-size: var(--ck-text-2xs); }
.ck-card__strike { position: absolute; left: -1px; top: 1px; display: flex; width: calc(100% + 3px); height: 2.781px; align-items: center; justify-content: center; }
.ck-card__strike img { width: 100%; height: 1px; rotate: -5.67deg; }
.ck-card--second .ck-card__strike { top: 0.88px; height: 2.9px; }
.ck-card--second .ck-card__strike img { rotate: -8.01deg; }
.ck-card--masthead .ck-card__strike,
.ck-card--listing .ck-card__strike,
.ck-card--horizontal .ck-card__strike,
.ck-card--crossSell .ck-card__strike { top: 2px; }
.ck-card--crossSell .ck-card__mrp { color: var(--ck-cross-sell-mrp); }
.ck-card--crossSell .ck-card__off { font-weight: 600; text-align: left; color: var(--ck-cross-sell-off); }

.ck-card__chip { display: flex; width: 81px; flex-shrink: 0; align-items: center; justify-content: flex-end; padding: var(--ck-space-sm) var(--ck-space-lg); border-radius: var(--ck-radius-chip); background: var(--ck-gradient-discount); }
.ck-card--second .ck-card__chip { padding: var(--ck-space-xs); background: var(--ck-gradient-discount-second); }
.ck-card__chip span,
.ck-card__off { white-space: nowrap; text-align: center; font-size: var(--ck-text-md); font-weight: 700; line-height: 11px; color: var(--ck-color-positive); }
.ck-card--masthead .ck-card__off { font-size: var(--ck-text-2xs); }

.ck-card__off-row { display: flex; width: 100%; align-items: center; gap: var(--ck-space-md); }
/* Cropped, not stretched, so the dots keep Figma's spacing */
.ck-card__dots { position: relative; height: 1px; min-width: 1px; flex: 1; overflow: hidden; }
.ck-card__dots img { position: absolute; left: 0; top: 0; width: 126px; height: 1px; max-width: none; }

.ck-card__divider { position: relative; width: 100%; height: 0; }
.ck-card__divider img { position: absolute; top: -0.5px; left: -0.35%; width: 100.7%; height: 1px; max-width: none; }
.ck-card--second .ck-card__divider img { left: -0.4%; width: 100.8%; }

.ck-card__cashback { white-space: nowrap; font-size: var(--ck-text-xs); font-weight: 700; line-height: 1.5; letter-spacing: 0.09px; color: var(--ck-color-cashback); }
.ck-card--masthead .ck-card__cashback { font-size: var(--ck-text-2xs); font-weight: 500; letter-spacing: 0.08px; color: var(--ck-color-positive); }

/* Red folded NEW ribbon on the main card */
.ck-card__ribbon { position: absolute; left: -4px; top: 12px; width: 47px; height: 23.553px; }
.ck-card__ribbon-fold { position: absolute; left: 0; top: 14.89px; width: 4px; height: 8.663px; scale: 1 -1; }
.ck-card__ribbon-band { position: absolute; left: 0; top: 0; width: 41.27px; height: 20.053px; }
.ck-card__ribbon-text { position: absolute; left: 6.46px; top: 3.55px; font-family: var(--ck-font-outfit); font-size: var(--ck-text-2xs); font-weight: 700; line-height: 1.5; color: var(--ck-color-on-accent); }

.ck-card__share { position: absolute; display: block; width: 18px; height: 18px; cursor: pointer; }
.ck-card__share img { width: 100%; height: 100%; }
.ck-card--main .ck-card__share { left: 129px; top: 12px; }
.ck-card--second .ck-card__share { left: 107px; top: 16px; }
.ck-card--listing .ck-card__share { left: 127px; top: 14px; }

/* Loading placeholder (not in Figma) */
.ck-card--loading { flex-direction: column; align-items: stretch; }
.ck-card--loading.ck-card--horizontal { flex-direction: row; align-items: center; }
.ck-card--loading .ck-card__media { align-self: center; }
.ck-card__bones { display: flex; flex: 1; flex-direction: column; gap: var(--ck-space-md); padding: var(--ck-space-xl) var(--ck-space-md); }
.ck-card__bone { display: block; height: 10px; border-radius: var(--ck-radius-chip); background: var(--ck-color-image-bg); animation: ck-card-pulse 1.2s ease-in-out infinite; }
.ck-card__bone--short { width: 60%; }
@keyframes ck-card-pulse { 50% { opacity: 0.5; } }
`,Z_=`import corner from "../../assets/card/logo-tab-corner.svg";
import divider from "../../assets/card/divider.svg";
import dividerSmall from "../../assets/card/divider-small.svg";
import ribbon from "../../assets/card/ribbon.svg";
import ribbonFold from "../../assets/card/ribbon-fold.svg";
import shareIcon from "../../assets/card/share.svg";
import strikeLine from "../../assets/card/strike-line.svg";
import { discountPercent, rupees } from "../../data/deal";
import { Button } from "../Button/Button";
import "./ProductCard.css";

/**
 * Figma names: Mast-head (116), Main-card (158), Horizontal-card (213), second card (141).
 * \`listing\` is the 158 wide card of the sub-category, brand and product detail "Similar deals" frames:
 * the Main-card frame with the Mast-head body (% OFF line, price, Grab Deal) and no ribbon or cashback.
 */
export type ProductCardVariant = "masthead" | "main" | "horizontal" | "second" | "listing" | "crossSell";

export interface ProductCardProps {
  variant: ProductCardVariant;
  brand: string;
  titleRest: string;
  /** Product photo; the grey image box stays empty without one. */
  imageSrc?: string;
  imageAlt?: string;
  /** Store name; the logo's alt text, and the tab's text when there is no logo. */
  store: string;
  storeLogo?: string;
  price: number;
  mrp: number;
  /** Replaces the computed "90% OFF". */
  discountLabel?: string;
  cashback?: number;
  /** NEW ribbon; only the main card shows it, as in Figma. */
  isNew?: boolean;
  /** Grey placeholder in the card's size while its data loads. */
  loading?: boolean;
  onSelect?: () => void;
  onGrab?: () => void;
  onShare?: () => void;
}

// Which parts each Figma card size shows.
const SHOWS = {
  masthead: { share: false, cta: false, cashback: true, chip: false, ribbon: false },
  main: { share: true, cta: true, cashback: true, chip: true, ribbon: true },
  horizontal: { share: false, cta: true, cashback: false, chip: false, ribbon: false },
  second: { share: true, cta: true, cashback: true, chip: true, ribbon: false },
  listing: { share: true, cta: true, cashback: false, chip: false, ribbon: false },
  // Figma 777:86933, the card in "View more {category}": image left, name, price, "% OFF" and Grab Deal on the right.
  crossSell: { share: false, cta: true, cashback: false, chip: false, ribbon: false },
} as const;

/** Store tab corner curves per variant (the second card's tab is 1.204x larger, with a third curve). */
const TAB_CORNERS: Record<ProductCardVariant, number> = { main: 2, second: 3, masthead: 2, horizontal: 2, listing: 2, crossSell: 2 };

export function ProductCard(p: ProductCardProps) {
  const v = p.variant;
  const show = SHOWS[v];

  if (p.loading) {
    return (
      <article className={\`ck-card ck-card--\${v} ck-card--loading\`} aria-busy="true">
        <div className="ck-card__media">
          <div className="ck-card__frame" />
        </div>
        <div className="ck-card__bones">
          <span className="ck-card__bone" />
          <span className="ck-card__bone ck-card__bone--short" />
        </div>
      </article>
    );
  }

  const off = p.discountLabel ?? \`\${discountPercent(p.price, p.mrp)}% OFF\`;

  const media = (
    <div className="ck-card__media">
      <div className="ck-card__frame">
        {p.imageSrc && <img className="ck-card__photo" src={p.imageSrc} alt={p.imageAlt ?? \`\${p.brand} \${p.titleRest}\`} />}
      </div>
      <div className="ck-card__tab">
        {p.storeLogo ? (
          <img className="ck-card__tab-logo" src={p.storeLogo} alt={p.store} />
        ) : (
          <span className="ck-card__tab-text">{p.store}</span>
        )}
        {Array.from({ length: TAB_CORNERS[v] }, (_, i) => (
          <img key={i} className={\`ck-card__tab-corner ck-card__tab-corner--\${i + 1}\`} src={corner} alt="" />
        ))}
      </div>
    </div>
  );

  const title = (
    <div className="ck-card__title">
      <span className="ck-card__brand">{p.brand} </span>
      <span className="ck-card__name">{p.titleRest}</span>
    </div>
  );

  const prices = (
    <div className="ck-card__prices">
      <span className="ck-card__price ck-trim">{rupees(p.price)}</span>
      <span className="ck-card__mrp-wrap">
        <span className="ck-card__mrp ck-trim">{rupees(p.mrp)}</span>
        <span className="ck-card__strike">
          <img src={strikeLine} alt="" />
        </span>
      </span>
    </div>
  );

  const chipRow = (
    <div className="ck-card__price-row">
      {prices}
      <div className="ck-card__chip">
        <span>{off}</span>
      </div>
    </div>
  );

  // Masthead and horizontal: "% OFF" on its own line with a dotted rule, then a bigger price.
  const offBlock = (
    <div className="ck-card__price-block">
      <div className="ck-card__off-row">
        <span className="ck-card__off">{off}</span>
        <span className="ck-card__dots">
          <img src={dividerSmall} alt="" />
        </span>
      </div>
      {prices}
    </div>
  );

  // Cross-sell card: price and struck price, then a plain "% OFF" line (no dotted rule).
  const plainOff = (
    <div className="ck-card__price-block">
      {prices}
      <span className="ck-card__off">{off}</span>
    </div>
  );

  const cashback = show.cashback && p.cashback != null && (
    <span className="ck-card__cashback ck-trim">+ {rupees(p.cashback)} Cashback</span>
  );
  const rule = p.cashback != null && show.cashback && (
    <div className="ck-card__divider">
      <img src={v === "second" ? dividerSmall : divider} alt="" />
    </div>
  );
  const cta = show.cta && <Button size={v === "masthead" || v === "listing" ? "main" : v === "crossSell" ? "horizontal" : v} onClick={p.onGrab} />;

  return (
    <article
      className={\`ck-card ck-card--\${v} \${p.onSelect ? "ck-card--clickable" : ""}\`}
      onClick={p.onSelect}
    >
      {v === "main" && (
        <>
          {media}
          <div className="ck-card__body">
            <div className="ck-card__info">
              {title}
              {chipRow}
            </div>
            {rule}
            {cashback}
          </div>
          <div className="ck-card__cta">{cta}</div>
        </>
      )}

      {v === "second" && (
        <div className="ck-card__column">
          {media}
          <div className="ck-card__body">
            {title}
            <div className="ck-card__price-block">
              {chipRow}
              {rule}
              {cashback}
            </div>
            {cta}
          </div>
        </div>
      )}

      {v === "masthead" && (
        <div className="ck-card__column">
          {media}
          <div className="ck-card__body">
            <div className="ck-card__info">
              {title}
              {offBlock}
            </div>
            {cashback}
          </div>
        </div>
      )}

      {v === "listing" && (
        <div className="ck-card__column">
          {media}
          <div className="ck-card__body">
            <div className="ck-card__info">
              {title}
              {offBlock}
            </div>
            {cta}
          </div>
        </div>
      )}

      {v === "crossSell" && (
        <>
          {media}
          <div className="ck-card__body">
            <div className="ck-card__info">
              {title}
              {plainOff}
            </div>
            {cta}
          </div>
        </>
      )}

      {v === "horizontal" && (
        <>
          {media}
          <div className="ck-card__body">
            <div className="ck-card__info">
              {title}
              {offBlock}
            </div>
            {cta}
          </div>
        </>
      )}

      {show.ribbon && p.isNew && (
        <div className="ck-card__ribbon">
          <img className="ck-card__ribbon-fold" src={ribbonFold} alt="" />
          <img className="ck-card__ribbon-band" src={ribbon} alt="" />
          <span className="ck-card__ribbon-text">NEW</span>
        </div>
      )}

      {show.share && (
        <button
          type="button"
          className="ck-card__share"
          aria-label={\`Share \${p.brand} \${p.titleRest}\`}
          onClick={(e) => {
            e.stopPropagation();
            p.onShare?.();
          }}
        >
          <img src={shareIcon} alt="" />
        </button>
      )}
    </article>
  );
}
`,q_=`import { SaleDealsStrip } from "./SaleDealsStrip";
import type { BookEntry } from "../../book/types";
import { sampleProducts } from "../../data/samples";

const base = {
  title: "Sale Deals",
  subtitle: "Get Cashbacks upto 80%",
  endsAt: Date.now() + (56 * 60 + 38) * 1000,
};

const entry: BookEntry = {
  title: "SaleDealsStrip",
  feature: "Product listing",
  description: "Yellow Sale Deals section. The admin sets title, subtitle and end time; products come from the API.",
  stories: [
    { name: "six products (swipe)", render: () => <SaleDealsStrip {...base} deals={sampleProducts.slice(0, 6)} /> },
    { name: "one product", render: () => <SaleDealsStrip {...base} deals={sampleProducts.slice(0, 1)} /> },
    { name: "loading", render: () => <SaleDealsStrip {...base} deals={[]} loading /> },
    { name: "sale ended", render: () => <SaleDealsStrip {...base} endsAt={Date.now() - 1000} deals={sampleProducts.slice(0, 3)} /> },
  ],
};
export default entry;
`,ev=`/* Offsets are Figma coordinates inside the 360×391 frame */
.ck-sale-deals { position: relative; width: var(--ck-page-w); height: 391px; flex-shrink: 0; overflow: clip; border-radius: 0 0 var(--ck-radius-section) var(--ck-radius-section); background: var(--ck-sale-deals-bg); font-family: var(--ck-font-family); line-height: 1.5; }
.ck-sale-deals__fade { position: absolute; bottom: 0; left: 0; width: var(--ck-page-w); height: 163.631px; background: var(--ck-sale-deals-fade); }

.ck-sale-deals__title { position: absolute; left: 17.96px; top: 27.23px; white-space: nowrap; background: var(--ck-sale-deals-title); -webkit-background-clip: text; background-clip: text; color: transparent; font-size: var(--ck-text-2xl); font-weight: 900; line-height: normal; letter-spacing: -0.4px; }
.ck-sale-deals__timer { position: absolute; left: 275.96px; top: 27.23px; }

.ck-sale-deals__subtitle-row { position: absolute; left: 18.96px; top: 51.23px; display: flex; align-items: flex-start; }
.ck-sale-deals__subtitle { white-space: nowrap; font-size: var(--ck-text-md); font-weight: 500; line-height: normal; letter-spacing: -0.24px; color: var(--ck-color-text); }
.ck-sale-deals__sparkle { display: flex; width: 99.288px; height: 8.144px; flex-shrink: 0; align-items: center; justify-content: center; margin: 3.14px 0 0 15.2px; }
.ck-sale-deals__sparkle img { width: 8.144px; height: 99.288px; max-width: none; flex-shrink: 0; rotate: -90deg; }

/* Bottom padding leaves room for the cards' shadows inside the scroller */
.ck-sale-deals__scroller { position: absolute; left: 0; top: 85.93px; width: var(--ck-page-w); overflow-x: auto; padding-bottom: var(--ck-space-2xl); scrollbar-width: none; }
.ck-sale-deals__scroller::-webkit-scrollbar { display: none; }
.ck-sale-deals__row { display: flex; width: max-content; gap: var(--ck-space-xl); padding: 0 var(--ck-space-2xl); }

.ck-sale-deals__indicator { position: absolute; left: 50%; top: 362.15px; translate: -50% 0; }
`,tv=`import { useMemo, useState, type UIEvent } from "react";
import sparkleLine from "../../assets/home/sparkle-line.svg";
import { cardProps, type Deal } from "../../data/deal";
import { Countdown } from "../Countdown/Countdown";
import { ProductCard } from "../ProductCard/ProductCard";
import { ScrollIndicator } from "../ScrollIndicator/ScrollIndicator";
import "./SaleDealsStrip.css";

export interface SaleDealsStripProps {
  title: string;
  subtitle: string;
  /** When the sale ends. Leave it out for the daily clock that counts down to midnight (see Countdown). */
  endsAt?: Date | string | number;
  deals: Deal[];
  /** Shows three placeholder cards while the products load. */
  loading?: boolean;
  onDealSelect?: (deal: Deal) => void;
  onDealShare?: (deal: Deal) => void;
  onGrabDeal?: (deal: Deal) => void;
}

/** Yellow Sale Deals section (360×391): title, countdown, subtitle, side-scrolling second cards, scroll indicator. */
export function SaleDealsStrip({
  title,
  subtitle,
  endsAt,
  deals,
  loading,
  onDealSelect,
  onDealShare,
  onGrabDeal,
}: SaleDealsStripProps) {
  const [progress, setProgress] = useState(0);
  const track = (e: UIEvent<HTMLDivElement>) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
    const max = scrollWidth - clientWidth;
    setProgress(max > 0 ? scrollLeft / max : 0);
  };

  // Cards do not change while scrolling; only the indicator does.
  const cards = useMemo(
    () =>
      loading
        ? Array.from({ length: 3 }, (_, i) => <ProductCard key={i} variant="second" {...cardProps(PLACEHOLDER)} loading />)
        : deals.map((deal) => (
            <ProductCard
              key={deal.id}
              variant="second"
              {...cardProps(deal)}
              onSelect={onDealSelect && (() => onDealSelect(deal))}
              onShare={onDealShare && (() => onDealShare(deal))}
              onGrab={onGrabDeal && (() => onGrabDeal(deal))}
            />
          )),
    [deals, loading, onDealSelect, onDealShare, onGrabDeal],
  );

  return (
    <section className="ck-sale-deals">
      <div className="ck-sale-deals__fade" />

      {/* Figma's title starts with a space at 12.96px; HTML drops leading spaces, so the 5px is in the offset */}
      <div role="heading" aria-level={2} className="ck-sale-deals__title">{title}</div>
      <div className="ck-sale-deals__timer">
        <Countdown endsAt={endsAt} />
      </div>
      {/* The sparkle line follows the subtitle, so a longer subtitle pushes it along */}
      <div className="ck-sale-deals__subtitle-row">
        <div className="ck-sale-deals__subtitle">{subtitle}</div>
        <span className="ck-sale-deals__sparkle">
          <img src={sparkleLine} alt="" />
        </span>
      </div>

      <div className="ck-sale-deals__scroller" onScroll={track}>
        <div className="ck-sale-deals__row">{cards}</div>
      </div>

      <div className="ck-sale-deals__indicator">
        <ScrollIndicator progress={progress} />
      </div>
    </section>
  );
}

const PLACEHOLDER: Deal = { id: "loading", brand: "", name: "", store: "", price: 0, mrp: 0 };
`,nv=`import { useState } from "react";
import { ScrollFilter, ScrollFilterBar, type ScrollFilterMode } from "./ScrollFilter";
import type { BookEntry } from "../../book/types";
import { sampleBrandChips, sampleTypeChips } from "../../data/samples";

function Demo({ mode, title, initial }: { mode: ScrollFilterMode; title?: string; initial?: string }) {
  const [picked, setPicked] = useState<string | undefined>(initial);
  const chips = mode === "brand" ? sampleBrandChips : sampleTypeChips;
  return (
    <div style={{ background: "var(--ck-color-surface)", paddingTop: 12 }}>
      <ScrollFilter mode={mode} title={title} chips={chips} selectedId={picked} onSelect={setPicked} />
    </div>
  );
}

function BarDemo() {
  const [picked, setPicked] = useState<string | undefined>("chargers");
  return (
    <div style={{ height: "var(--ck-filter-bar-h)" }}>
      <ScrollFilterBar alwaysVisible title="Shop by type" chips={sampleTypeChips} selectedId={picked} onSelect={setPicked} />
    </div>
  );
}

const entry: BookEntry = {
  title: "ScrollFilter",
  feature: "Browse and filter",
  description:
    "Filter inside the product scroll. Category mode = folder tabs; brand mode = the round strip. A pick filters the grids down to the next filter; tap again to clear. Not a price filter. ScrollFilterBar is the compact copy that pins under the price pills.",
  stories: [
    { name: "category mode, nothing picked", render: () => <Demo mode="category" title="Top Electronic Deals" /> },
    { name: "category mode, Earphones picked", render: () => <Demo mode="category" title="Top Electronic Deals" initial="earphones" /> },
    { name: "brand mode, no heading", render: () => <Demo mode="brand" /> },
    { name: "brand mode, boAt picked", render: () => <Demo mode="brand" initial="boAt" /> },
    { name: "compact bar, as it looks when pinned", render: () => <BarDemo /> },
  ],
};
export default entry;
`,rv=`/* Offsets follow Figma 777:94664 (full) and 777:95718 (compact, on scroll). */
.ck-scroll-filter { display: flex; width: var(--ck-page-w); flex-direction: column; align-items: center; gap: 18px; font-family: var(--ck-font-family); }
.ck-scroll-filter__title { width: 100%; text-align: center; font-size: var(--ck-text-2xl); font-weight: 900; line-height: normal; color: var(--ck-filter-heading); }

/* Category mode: folder tabs on a fading blue line */
.ck-scroll-filter__scroller { width: 100%; overflow-x: auto; scrollbar-width: none; }
.ck-scroll-filter__scroller::-webkit-scrollbar { display: none; }
.ck-scroll-filter__tabs { position: relative; display: flex; width: max-content; min-width: 100%; padding-left: 2.44px; }
.ck-scroll-filter__tabs::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 1px; background: var(--ck-filter-line); }
.ck-scroll-filter__tab { position: relative; display: flex; width: var(--ck-filter-tab-w); height: var(--ck-filter-tab-h); flex-shrink: 0; flex-direction: column; align-items: center; gap: var(--ck-space-md); padding: 12.72px 0 0; border: 0; background: none; cursor: pointer; color: var(--ck-filter-tab-text); }
.ck-scroll-filter__tab-bg,
.ck-scroll-filter__tab-outline { position: absolute; left: 0; top: 0; display: block; }
.ck-scroll-filter__tab-outline path { stroke: var(--ck-filter-outline); stroke-width: 1px; }
/* The selected tab opens into the page: white gap in the line under it */
.ck-scroll-filter__tab--on::after { content: ""; position: absolute; left: 1px; right: 1px; bottom: 0; z-index: 1; height: 1px; background: var(--ck-color-surface); }
.ck-scroll-filter__tab-icon { position: relative; display: flex; width: 24px; height: 24px; align-items: center; justify-content: center; }
.ck-scroll-filter__tab-icon img { width: 24px; height: 24px; object-fit: contain; }
.ck-scroll-filter__tab-label { position: relative; white-space: nowrap; font-size: var(--ck-text-md); font-weight: 600; line-height: 16px; }
.ck-scroll-filter__tab--on { color: var(--ck-filter-tab-on); }

/* Compact bar: pinned under the price pills, takes no space until then */
.ck-filter-bar { position: sticky; top: calc(var(--ck-stack-top) + var(--ck-category-h) + var(--ck-pills-sticky-h)); z-index: 9; width: var(--ck-page-w); height: var(--ck-filter-bar-h); margin-bottom: calc(-1 * var(--ck-filter-bar-h)); box-sizing: border-box; padding-top: 5.23px; background: var(--ck-color-surface); font-family: var(--ck-font-family); visibility: hidden; opacity: 0; transition: opacity 150ms; }
.ck-filter-bar--pinned { visibility: visible; opacity: 1; }
.ck-filter-bar__title { padding-left: 8.51px; font-size: var(--ck-text-md); font-weight: 700; line-height: 14px; color: var(--ck-filter-heading); }
.ck-filter-bar__tabs { position: relative; display: flex; overflow-x: auto; scrollbar-width: none; margin-top: 13.66px; padding-left: 1.45px; }
.ck-filter-bar__tabs::-webkit-scrollbar { display: none; }
.ck-filter-bar__tabs::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 1px; background: var(--ck-filter-line); }
.ck-filter-bar__tab { position: relative; display: flex; width: var(--ck-filter-bar-tab-w); height: var(--ck-filter-bar-tab-h); flex-shrink: 0; flex-direction: column; align-items: center; gap: 4.1px; padding: 6.57px 0 0; border: 0; background: none; cursor: pointer; color: var(--ck-filter-tab-text); }
.ck-filter-bar__tab-bg { position: absolute; inset: 0; width: 100%; height: 100%; }
.ck-filter-bar__icon { position: relative; display: flex; width: 12.582px; height: 12.582px; }
.ck-filter-bar__icon img { width: 100%; height: 100%; object-fit: contain; }
.ck-filter-bar__label { position: relative; white-space: nowrap; font-size: var(--ck-text-xs); font-weight: 600; line-height: 9px; }
.ck-filter-bar__tab--on { color: var(--ck-filter-tab-on); }
`,ov=`import { useEffect, useRef, useState } from "react";
import tabSelected from "../../assets/scroll-filter/tab-selected.svg";
import tab from "../../assets/scroll-filter/tab.svg";
import { CategoryRow } from "../CategoryRow/CategoryRow";
import "./ScrollFilter.css";

export type ScrollFilterMode = "category" | "brand";

export interface ScrollFilterChip {
  /** Product category id (category mode) or brand/store name (brand mode) the products are matched on. */
  id: string;
  name: string;
  /** Admin-supplied icon. Category tabs draw it at 24px, brand circles at 48px; supply at 3x. */
  icon: string;
}

export interface ScrollFilterProps {
  mode: ScrollFilterMode;
  /** Heading above the chips, e.g. "Top Electronic Deals". Optional. */
  title?: string;
  chips: ScrollFilterChip[];
  /** The picked chip; undefined shows everything. */
  selectedId?: string;
  /** Called with the chip id, or undefined when the picked chip is tapped again. */
  onSelect?: (chipId: string | undefined) => void;
}

/** Shape path of Figma's tab (Vector 3200/3201) without its bottom edge, for the selected outline. */
const TAB_OUTLINE =
  "M0 68.376L7.99862 13.6846C9.14794 5.82601 15.888 0 23.8302 0H75.6731C83.6153 0 90.3554 5.82601 91.5047 13.6846L99.5033 68.376";

/**
 * Scroll filter placed inside the product scroll. One component, two looks:
 * category mode = folder tabs with icons (Figma "sub-category"); brand mode = the round category-row strip (Figma "brand").
 * Not a price filter: the price pills stay at the top of the page.
 */
export function ScrollFilter({ mode, title, chips, selectedId, onSelect }: ScrollFilterProps) {
  const toggle = (id: string) => onSelect?.(id === selectedId ? undefined : id);

  return (
    <section className={\`ck-scroll-filter ck-scroll-filter--\${mode}\`}>
      {title && <div role="heading" aria-level={2} className="ck-scroll-filter__title">{title}</div>}
      {mode === "brand" ? (
        <CategoryRow
          categories={chips.map((chip) => ({ id: chip.id, name: chip.name, icon: chip.icon }))}
          selectedId={selectedId ?? ""}
          noneSelected={selectedId == null}
          ariaLabel={title ?? "Brands"}
          onSelect={(chip) => toggle(chip.id)}
        />
      ) : (
        <div className="ck-scroll-filter__scroller">
          <div className="ck-scroll-filter__tabs" role="group" aria-label={title ?? "Product types"}>
            {chips.map((chip) => {
              const on = chip.id === selectedId;
              return (
                <button
                  key={chip.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(chip.id)}
                  className={\`ck-scroll-filter__tab \${on ? "ck-scroll-filter__tab--on" : ""}\`}
                >
                  <img className="ck-scroll-filter__tab-bg" src={on ? tabSelected : tab} alt="" width="99.5033" height="68.376" />
                  {on && (
                    <svg className="ck-scroll-filter__tab-outline" width="99.5033" height="68.376" viewBox="0 0 99.5033 68.376" fill="none" aria-hidden="true">
                      <path d={TAB_OUTLINE} />
                    </svg>
                  )}
                  <span className="ck-scroll-filter__tab-icon">
                    <img src={chip.icon} alt="" />
                  </span>
                  <span className="ck-scroll-filter__tab-label">{chip.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export interface ScrollFilterBarProps extends Omit<ScrollFilterProps, "mode" | "title"> {
  /** Small heading on the left, e.g. "Shop by type". */
  title?: string;
  /** Shows the bar without waiting to be pinned, e.g. in a preview. */
  alwaysVisible?: boolean;
}

/**
 * Compact copy of a scroll filter (Figma "On scroll") that pins under the price pills once the full filter has
 * scrolled away. Place it straight after the full filter, as a direct child of the scrolling page column.
 * It takes no space in the layout and stays hidden until it is pinned. It unpins when the next element marked
 * \`data-filter-end\` (the end of its segment) reaches it. A pick scrolls back to the top of the segment.
 */
export function ScrollFilterBar({ title, chips, selectedId, onSelect, alwaysVisible = false }: ScrollFilterBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [stuck, setPinned] = useState(false);
  const pinned = alwaysVisible || stuck;

  useEffect(() => {
    const el = ref.current;
    if (!el || alwaysVisible) return;
    let frame = 0;
    const check = () => {
      frame = 0;
      const top = parseFloat(getComputedStyle(el).top) || 0;
      const full = el.previousElementSibling?.getBoundingClientRect();
      let end: Element | null = el.nextElementSibling;
      while (end && !end.hasAttribute("data-filter-end")) end = end.nextElementSibling;
      const bar = el.getBoundingClientRect();
      // Pinned = at its sticky offset, the full filter scrolled away above, and the segment not yet over.
      setPinned(bar.top <= top + 0.5 && (!full || full.bottom <= top) && (!end || end.getBoundingClientRect().top > top + bar.height));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(check); };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [alwaysVisible]);

  const toggle = (id: string) => {
    const el = ref.current;
    const full = el?.previousElementSibling;
    // The segment shrinks or grows with the pick; bring its first row up under the bar so the shopper keeps their place.
    if (el && full && stuck) {
      const top = parseFloat(getComputedStyle(el).top) || 0;
      window.scrollTo({ top: window.scrollY + full.getBoundingClientRect().bottom - top - el.offsetHeight + 1 });
    }
    onSelect?.(id === selectedId ? undefined : id);
  };

  return (
    <div ref={ref} className={\`ck-filter-bar \${pinned ? "ck-filter-bar--pinned" : ""}\`} aria-hidden={!pinned}>
      {title && <div className="ck-filter-bar__title">{title}</div>}
      <div className="ck-filter-bar__tabs">
        {chips.map((chip) => {
          const on = chip.id === selectedId;
          return (
            <button
              key={chip.id}
              type="button"
              tabIndex={pinned ? 0 : -1}
              aria-pressed={on}
              onClick={() => toggle(chip.id)}
              className={\`ck-filter-bar__tab \${on ? "ck-filter-bar__tab--on" : ""}\`}
            >
              <img className="ck-filter-bar__tab-bg" src={on ? tabSelected : tab} alt="" />
              <span className="ck-filter-bar__icon">
                <img src={chip.icon} alt="" />
              </span>
              <span className="ck-filter-bar__label">{chip.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
`,sv=`import { ScrollIndicator } from "./ScrollIndicator";
import type { BookEntry } from "../../book/types";

const onYellow = (progress: number) => (
  <div style={{ background: "#ffe195", padding: 8 }}>
    <ScrollIndicator progress={progress} />
  </div>
);

const entry: BookEntry = {
  title: "ScrollIndicator",
  feature: "Browse and filter",
  description: "Track under the Sale Deals row; the thumb follows the swipe.",
  stories: [
    { name: "start", render: () => onYellow(0) },
    { name: "middle", render: () => onYellow(0.5) },
    { name: "end", render: () => onYellow(1) },
  ],
};
export default entry;
`,iv=`.ck-scroll-indicator { position: relative; display: block; width: 36px; height: 10px; overflow: clip; border: 0.4px solid var(--ck-indicator-track); border-radius: var(--ck-radius-tag); background: var(--ck-indicator-track); }
.ck-scroll-indicator__thumb { position: absolute; left: 1.6px; top: calc(50% - 3px); width: 10px; height: 6px; border-radius: var(--ck-radius-chip); background: var(--ck-color-surface); box-shadow: var(--ck-indicator-thumb-shadow); }

.ck-scroll-indicator--thin { height: 8px; border-color: var(--ck-indicator-track-dark); background: var(--ck-indicator-track-dark); }
.ck-scroll-indicator--thin .ck-scroll-indicator__thumb { top: calc(50% - 2px); height: 4px; }
`,av=`import "./ScrollIndicator.css";

export interface ScrollIndicatorProps {
  /** How far the row is scrolled, 0 (start) to 1 (end). */
  progress: number;
  /** 8px track with a 4px thumb on a darker track (deals strip, Figma 1227:52739). */
  thin?: boolean;
}

/** Thumb travel: 35.2px inside the border, minus 1.6px insets and the 10px thumb. */
const TRAVEL = 22;

/** Small grey track whose white thumb follows a sideways scroll (Sale Deals strip). */
export function ScrollIndicator({ progress, thin = false }: ScrollIndicatorProps) {
  const clamped = Math.min(1, Math.max(0, progress));
  return (
    <span className={\`ck-scroll-indicator\${thin ? " ck-scroll-indicator--thin" : ""}\`} aria-hidden="true">
      <span className="ck-scroll-indicator__thumb" style={{ transform: \`translateX(\${clamped * TRAVEL}px)\` }} />
    </span>
  );
}
`,lv=`import type { BookEntry } from "../../book/types";
import { ScrollTopButton } from "./ScrollTopButton";

const entry: BookEntry = {
  title: "ScrollTopButton",
  feature: "Browse and filter",
  description:
    "Back-to-top button, fixed bottom-right. Fades in after one and a half screens of scroll; tap scrolls to the top. Scroll this page down to see it. Not in Figma yet.",
  stories: [{ name: "shows after 200px (scroll the page)", render: () => <ScrollTopButton showAfter={200} /> }],
};
export default entry;
`,cv=`/* Not in Figma: 44px tap target, dark round button, bottom-right above the phone's home bar */
.ck-scroll-top { position: fixed; right: var(--ck-space-2xl); bottom: calc(var(--ck-space-3xl) + env(safe-area-inset-bottom, 0px)); z-index: 20; display: flex; width: 44px; height: 44px; align-items: center; justify-content: center; padding: 0; border: 0; border-radius: 50%; background: var(--ck-scroll-top-bg); box-shadow: var(--ck-scroll-top-shadow); cursor: pointer; opacity: 0; transform: translateY(12px) scale(0.9); pointer-events: none; transition: opacity 200ms ease, transform 200ms cubic-bezier(0.2, 0, 0, 1); }
.ck-scroll-top--shown { opacity: 1; transform: none; pointer-events: auto; }
.ck-scroll-top:active { transform: scale(0.94); }
/* The arrow asset points down */
.ck-scroll-top img { display: block; rotate: 180deg; }

@media (prefers-reduced-motion: reduce) {
  .ck-scroll-top { transition: none; }
}
`,dv=`import { useEffect, useState } from "react";
import arrow from "../../assets/home/icon-back.svg";
import "./ScrollTopButton.css";

export interface ScrollTopButtonProps {
  /** Shows once the page has scrolled this far, in px. Default: one and a half screens. */
  showAfter?: number;
  /** Called on tap, before the scroll starts, e.g. to track it. */
  onClick?: () => void;
}

/**
 * Round "back to top" button, fixed bottom-right. Fades in after the shopper scrolls past \`showAfter\`,
 * and scrolls the page to the top on tap (smoothly, or at once under reduced motion).
 */
export function ScrollTopButton({ showAfter, onClick }: ScrollTopButtonProps) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      setShown(window.scrollY > (showAfter ?? window.innerHeight * 1.5));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(check); };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [showAfter]);

  const toTop = () => {
    onClick?.();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      className={\`ck-scroll-top\${shown ? " ck-scroll-top--shown" : ""}\`}
      onClick={toTop}
      tabIndex={shown ? 0 : -1}
      aria-hidden={!shown}
    >
      <img src={arrow} alt="" width="22" height="22" />
    </button>
  );
}
`,pv=`import { SectionBreak } from "./SectionBreak";
import type { BookEntry } from "../../book/types";

const white = (children: React.ReactNode) => <div style={{ background: "var(--ck-color-surface)", width: "var(--ck-page-w)" }}>{children}</div>;

const entry: BookEntry = {
  title: "SectionBreak",
  feature: "Browse and filter",
  description: "Grey band between two white sections, with the sections' inverse-rounded corners.",
  stories: [
    { name: "30px (under the photo block)", render: () => white(<SectionBreak />) },
    { name: "29px", render: () => white(<SectionBreak height={29} />) },
  ],
};
export default entry;
`,uv=`/* Figma "Group 1354723064": a 6px band 12px down a 30px strip, a 12px corner piece at each end. */
.ck-break { position: relative; width: var(--ck-page-w); flex-shrink: 0; }
.ck-break__band { position: absolute; left: 0; right: 0; top: 12px; height: 6px; background: var(--ck-pdp-surface); }
.ck-break__corner { position: absolute; top: 0; width: 12px; height: 100%; max-width: none; }
.ck-break__corner--left { left: 0; }
.ck-break__corner--right { right: 0; scale: -1 1; }
`,mv=`import corner from "../../assets/pdp/break-corner.svg";
import "./SectionBreak.css";

export interface SectionBreakProps {
  /** Total height in px; Figma uses 30 under the photo block and 29 elsewhere. */
  height?: number;
}

/** Grey 6px band between two white sections, with the inverse-rounded corners of the sections meeting it. */
export function SectionBreak({ height = 30 }: SectionBreakProps) {
  return (
    <div className="ck-break" aria-hidden="true" style={{ height }}>
      <div className="ck-break__band" />
      <img className="ck-break__corner ck-break__corner--left" src={corner} alt="" />
      <img className="ck-break__corner ck-break__corner--right" src={corner} alt="" />
    </div>
  );
}
`,hv=`import { SimilarDeals } from "./SimilarDeals";
import type { BookEntry } from "../../book/types";
import { sampleProductDetail as d } from "../../data/samples";

const white = (children: React.ReactNode) => <div style={{ background: "var(--ck-color-surface)", width: "var(--ck-page-w)" }}>{children}</div>;

const entry: BookEntry = {
  title: "SimilarDeals",
  feature: "Cross-sell",
  description: "Heading and swipeable pairs of listing cards with a three-dot pager. Hidden with no deals.",
  stories: [
    { name: "six deals, swipe sideways", render: () => white(<SimilarDeals deals={d.similar} />) },
    { name: "two deals, no pager", render: () => white(<SimilarDeals deals={d.similar.slice(0, 2)} />) },
    { name: "one deal", render: () => white(<SimilarDeals deals={d.similar.slice(0, 1)} />) },
  ],
};
export default entry;
`,fv=`/* Figma 671:39682: 12px under the heading, 24px between the cards and the dots (12px of that is shadow room under the cards), 66px of room at the end */
.ck-similar { display: flex; width: var(--ck-page-w); box-sizing: border-box; flex-direction: column; align-items: center; gap: var(--ck-space-xl); padding: 0 var(--ck-space-2xl) 66px; font-family: var(--ck-font-family); }
.ck-similar__title { align-self: flex-start; width: 245.64px; font-size: var(--ck-text-xl); font-weight: 700; line-height: 1.44; letter-spacing: -0.32px; color: var(--ck-pdp-title); }
.ck-similar__scroller { width: var(--ck-page-w); margin: 0 calc(-1 * var(--ck-space-2xl)); overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; /* room for the cards' shadows */ padding-bottom: var(--ck-space-xl); }
.ck-similar__scroller::-webkit-scrollbar { display: none; }
.ck-similar__pages { display: flex; width: max-content; gap: var(--ck-space-2xl); padding: 0 var(--ck-space-2xl); }
.ck-similar__page { display: flex; width: 328px; justify-content: space-between; scroll-snap-align: center; }
`,gv=`import { useState, type UIEvent } from "react";
import { cardProps, type Deal } from "../../data/deal";
import { Dots } from "../Dots/Dots";
import { ProductCard } from "../ProductCard/ProductCard";
import "./SimilarDeals.css";

export interface SimilarDealsProps {
  title?: string;
  deals: Deal[];
  onDealSelect?: (deal: Deal) => void;
  onDealShare?: (deal: Deal) => void;
  onGrabDeal?: (deal: Deal) => void;
}

/** Heading and swipeable pairs of listing cards with a three-dot pager (Figma 671:39682). */
export function SimilarDeals({ title = "Similar deals", deals, onDealSelect, onDealShare, onGrabDeal }: SimilarDealsProps) {
  const [page, setPage] = useState(0);
  const pages = Array.from({ length: Math.ceil(deals.length / 2) }, (_, i) => deals.slice(i * 2, i * 2 + 2));
  if (!deals.length) return null;

  // Page width comes from the CSS; the distance between pages is the scroll range split evenly.
  const track = (e: UIEvent<HTMLDivElement>) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
    const range = scrollWidth - clientWidth;
    setPage(range > 0 && pages.length > 1 ? Math.round((scrollLeft / range) * (pages.length - 1)) : 0);
  };

  return (
    <section className="ck-similar">
      <div role="heading" aria-level={2} className="ck-similar__title">{title}</div>
      <div className="ck-similar__scroller" onScroll={track}>
        <div className="ck-similar__pages">
          {pages.map((items, i) => (
            <div key={i} className="ck-similar__page">
              {items.map((deal) => (
                <ProductCard
                  key={deal.id}
                  variant="listing"
                  {...cardProps(deal)}
                  onSelect={onDealSelect && (() => onDealSelect(deal))}
                  onShare={onDealShare && (() => onDealShare(deal))}
                  onGrab={onGrabDeal && (() => onGrabDeal(deal))}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <Dots variant="slate" count={pages.length} active={page} />
    </section>
  );
}
`,kv=`import { StatusMessage } from "./StatusMessage";
import type { BookEntry } from "../../book/types";

const onWhite = (child: JSX.Element) => <div style={{ background: "#fff" }}>{child}</div>;

const entry: BookEntry = {
  title: "StatusMessage",
  feature: "Shared",
  description: "Empty and error states for deal lists. Not in Figma; placeholders for review.",
  stories: [
    { name: "empty", render: () => onWhite(<StatusMessage kind="empty" />) },
    { name: "error with retry", render: () => onWhite(<StatusMessage kind="error" onRetry={() => {}} />) },
    { name: "custom text", render: () => onWhite(<StatusMessage kind="empty" message="No Fashion deals under ₹99 today." />) },
  ],
};
export default entry;
`,_v=`.ck-status { display: flex; width: var(--ck-page-w); flex-direction: column; align-items: center; gap: var(--ck-space-xl); padding: 40px var(--ck-space-2xl); font-family: var(--ck-font-family); line-height: 1.5; }
.ck-status__text { text-align: center; font-size: 13px; font-weight: 500; color: var(--ck-color-text-muted); }
.ck-status__retry { width: 142px; }
`,vv=`import { Button } from "../Button/Button";
import "./StatusMessage.css";

export type StatusMessageKind = "empty" | "error";

export interface StatusMessageProps {
  kind: StatusMessageKind;
  /** Overrides the default text for the kind. */
  message?: string;
  /** Shows a "Try again" button (error only). */
  onRetry?: () => void;
}

const DEFAULT_TEXT: Record<StatusMessageKind, string> = {
  empty: "No deals in this range yet. Try another price or category.",
  error: "Could not load deals. Check your connection and try again.",
};

/** Empty and error states for deal lists. Not in Figma: wording and look are placeholders for review. */
export function StatusMessage({ kind, message, onRetry }: StatusMessageProps) {
  return (
    <div className={\`ck-status ck-status--\${kind}\`} role={kind === "error" ? "alert" : "status"}>
      <div className="ck-status__text">{message ?? DEFAULT_TEXT[kind]}</div>
      {kind === "error" && onRetry && (
        <div className="ck-status__retry">
          <Button onClick={onRetry}>Try again</Button>
        </div>
      )}
    </div>
  );
}
`,xv=`import { ThemeCard } from "./ThemeCard";
import type { BookEntry } from "../../book/types";
import { sampleLists, sampleThemeCards } from "../../data/samples";

const [priceList, spotlight, flash] = sampleThemeCards;

const entry: BookEntry = {
  title: "ThemeCard",
  feature: "Masthead / hero",
  description: "Cards from page type 2's swipe row: pink price list, green spotlight, blue Flash Sale.",
  stories: [
    { name: "priceList", render: () => <ThemeCard {...priceList} deals={sampleLists["lowest-prices"]} /> },
    { name: "spotlight (admin art)", render: () => <ThemeCard {...spotlight} deals={sampleLists.spotlight} /> },
    { name: "flashSale", render: () => <ThemeCard {...flash} deals={sampleLists["flash-sale"]} /> },
    {
      name: "priceList, two rows, long names",
      render: () => (
        <ThemeCard
          {...priceList}
          deals={sampleLists["lowest-prices"].slice(0, 2).map((d) => ({ ...d, name: "3-in-1 Floor Cleaning Brush with Wiper and Scrubber" }))}
        />
      ),
    },
    { name: "spotlight, product photo, ₹1,299", render: () => <ThemeCard {...spotlight} art={undefined} deals={[{ ...sampleLists["lowest-prices"][0], price: 1299, mrp: 2999 }]} /> },
    { name: "priceList, loading", render: () => <ThemeCard {...priceList} deals={[]} loading /> },
    { name: "flashSale, loading", render: () => <ThemeCard {...flash} deals={[]} loading /> },
    { name: "flashSale, empty", render: () => <ThemeCard {...flash} deals={[]} /> },
  ],
};
export default entry;
`,yv=`/* Offsets are Figma coordinates inside each card */
.ck-theme { position: relative; height: 314px; flex-shrink: 0; overflow: clip; border-radius: var(--ck-radius-panel); font-family: var(--ck-font-family); line-height: 1.5; }
.ck-theme--clickable { cursor: pointer; }
.ck-theme--priceList { width: 248px; background: var(--ck-price-list-bg); box-shadow: var(--ck-price-list-shadow); }
.ck-theme--spotlight { width: 246px; border: 1px solid var(--ck-spotlight-border); background: var(--ck-spotlight-bg); box-shadow: var(--ck-spotlight-shadow); }
.ck-theme--flashSale { width: 248px; border: 1px solid var(--ck-flash-border); background: var(--ck-flash-bg); box-shadow: var(--ck-flash-shadow); }

.ck-theme__title { position: absolute; translate: 0 -50%; white-space: pre-line; font-size: var(--ck-text-3xl); font-weight: 800; line-height: 1.12; color: var(--ck-color-on-accent); }
.ck-theme--priceList .ck-theme__title { left: 16px; top: 38.04px; width: 195px; }
.ck-theme--spotlight .ck-theme__title { left: 15px; top: 37.04px; width: 195px; }
.ck-theme--flashSale .ck-theme__title { left: 11.74px; top: 46.73px; }

.ck-theme__glow { position: absolute; }
.ck-theme__glow > span { position: absolute; }
.ck-theme__glow img,
.ck-theme__star img,
.ck-theme__ticket img { display: block; width: 100%; height: 100%; max-width: none; }

/* Pink card: price rows */
.ck-theme__rows { position: absolute; left: 12px; top: 79px; display: flex; width: 224px; flex-direction: column; align-items: flex-start; gap: var(--ck-space-2xl); }
.ck-theme__row { display: flex; width: 100%; height: 42px; align-items: center; justify-content: space-between; text-align: left; cursor: pointer; }
.ck-theme__row-main { display: flex; align-items: center; gap: var(--ck-space-md); }
.ck-theme__row-photo { position: relative; width: 42px; height: 42px; flex-shrink: 0; overflow: clip; border: 1px solid var(--ck-photo-border); border-radius: var(--ck-radius-button-sm); background: var(--ck-color-surface); }
.ck-theme__row-photo img { position: absolute; left: 50%; top: 50%; width: 30px; height: 30px; translate: -50% -50%; object-fit: contain; }
.ck-theme__row-name { display: -webkit-box; width: 118px; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: var(--ck-text-md); font-weight: 600; line-height: 1.44; color: var(--ck-color-on-accent); }
.ck-theme__row-prices { display: flex; flex-direction: column; align-items: flex-end; justify-content: center; gap: var(--ck-space-sm); }
.ck-theme__row-mrp-wrap { position: relative; display: flex; flex-direction: column; align-items: center; }
.ck-theme__row-mrp { white-space: nowrap; font-size: var(--ck-text-sm); font-weight: 500; line-height: 1.5; color: var(--ck-text-on-dark-muted); }
.ck-theme__row-strike { position: absolute; left: -1px; top: 2px; display: flex; width: calc(100% + 3px); height: 2.781px; align-items: center; justify-content: center; }
.ck-theme__row-strike img { width: 100%; height: 1px; rotate: -5.67deg; }
.ck-theme__row-price { white-space: nowrap; font-size: var(--ck-text-lg); font-weight: 700; line-height: 1.3; color: var(--ck-color-on-accent); }
.ck-theme__row-bone { display: block; width: 100%; height: 42px; border-radius: var(--ck-radius-button-sm); background: var(--ck-placeholder-on-dark); }

/* Green card: one product with a price bubble */
.ck-theme__glow--spotlight { left: 50%; top: 120.3px; width: 144px; height: 144px; translate: -50% 0; }
.ck-theme__glow--spotlight > span { inset: -69.44%; }
.ck-theme__spotlight-art { position: absolute; left: -33.95px; top: calc(50% + 59.77px); width: 291.441px; height: 388.456px; max-width: none; translate: 0 -50%; object-fit: contain; }
.ck-theme__star { position: absolute; left: 138.01px; top: 203.77px; width: 103.993px; height: 103.993px; }
.ck-theme__star > span { position: absolute; inset: 2.48% 2.65% 3.17% 2.65%; }
.ck-theme__bubble { position: absolute; left: 186px; top: 237.27px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--ck-space-sm); translate: -50% 0; }
.ck-theme__bubble-mrp-wrap { position: relative; display: flex; flex-direction: column; align-items: center; opacity: 0.6; }
.ck-theme__bubble-mrp { white-space: nowrap; font-size: 19.189px; font-weight: 500; line-height: 1.5; color: var(--ck-color-on-accent); }
.ck-theme__bubble-strike { position: absolute; left: -1.92px; top: 3.84px; display: flex; width: calc(100% + 3.8px); height: 5.337px; align-items: center; justify-content: center; }
.ck-theme__bubble-strike img { width: 100%; height: 1.92px; rotate: -5.67deg; }
.ck-theme__bubble-price { white-space: nowrap; font-size: 26.864px; font-weight: 700; line-height: 1.3; color: var(--ck-color-on-accent); }

/* Blue card: Flash Sale tiles */
.ck-theme__pattern { position: absolute; left: -28.13px; top: -16.23px; width: 389.267px; height: 389.267px; max-width: none; object-fit: cover; opacity: 0.55; mix-blend-mode: soft-light; }
.ck-theme__glow--flash { left: 6.25px; top: 121.17px; width: 233.505px; height: 233.505px; }
.ck-theme__glow--flash > span { inset: -42.83%; }
.ck-theme__tiles { position: absolute; left: 8.77px; top: 84.49px; display: grid; width: 228.458px; height: 174.703px; grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); gap: var(--ck-space-md); }
.ck-theme__tile { position: relative; display: block; align-self: start; overflow: clip; border: 1.12px solid var(--ck-photo-border); border-radius: 12.386px; background: var(--ck-color-surface); cursor: pointer; }
.ck-theme__tile--1 { grid-row: span 2 / span 2; height: 210px; }
.ck-theme__tile--2 { height: 83px; }
.ck-theme__tile--3 { height: 118px; }
.ck-theme__tile-photo { position: absolute; max-width: none; translate: -50% -50%; }
.ck-theme__tile--1 .ck-theme__tile-photo { left: calc(50% + 12.79px); top: calc(50% + 20.22px); width: 156.969px; height: 235.453px; object-fit: cover; }
.ck-theme__tile--2 .ck-theme__tile-photo { left: calc(50% - 0.42px); top: calc(50% + 7.06px); width: 65.359px; height: 65.359px; object-fit: contain; }
.ck-theme__tile--3 .ck-theme__tile-photo { left: calc(50% - 0.42px); top: calc(50% + 6.56px); width: 65.359px; height: 65.359px; object-fit: contain; }
.ck-theme__tag { position: absolute; left: 6.88px; display: flex; align-items: center; justify-content: center; padding: 3px var(--ck-space-md); border-radius: var(--ck-radius-tag); background: var(--ck-flash-tag); }
.ck-theme__tile--1 .ck-theme__tag { top: 177.88px; }
.ck-theme__tile--2 .ck-theme__tag { top: 52.88px; }
.ck-theme__tile--3 .ck-theme__tag { top: 86.12px; }
.ck-theme__tag span { white-space: nowrap; font-size: var(--ck-text-sm); font-weight: 800; line-height: 16px; color: var(--ck-color-on-accent); }

.ck-theme__ticket { position: absolute; display: flex; align-items: center; justify-content: center; }
.ck-theme__ticket > span { position: relative; flex-shrink: 0; }
.ck-theme__ticket > span > span { position: absolute; inset: -8.71% -14.52% -20.13% -14.52%; }
.ck-theme__ticket--a { left: 195.41px; top: 33.81px; width: 39.931px; height: 40.156px; }
.ck-theme__ticket--a > span { width: 35.911px; height: 36.168px; rotate: 6.78deg; }
.ck-theme__ticket--b { left: 139px; top: -10.67px; width: 58.473px; height: 58.803px; }
.ck-theme__ticket--b > span { width: 52.586px; height: 52.964px; rotate: 173.22deg; scale: 1 -1; }
.ck-theme__percent { position: absolute; display: flex; align-items: center; justify-content: center; }
.ck-theme__percent span { flex-shrink: 0; white-space: nowrap; font-family: var(--ck-font-nunito); font-weight: 900; line-height: normal; color: var(--ck-color-on-accent); }
.ck-theme__percent--a { left: 203.02px; top: 44.81px; width: 21.675px; height: 23.468px; }
.ck-theme__percent--a span { font-size: 14.247px; rotate: -30.31deg; }
.ck-theme__percent--b { left: 154.07px; top: 5.18px; width: 32.261px; height: 34.771px; }
.ck-theme__percent--b span { font-size: 20.862px; rotate: -149.69deg; scale: 1 -1; }
`,wv=`import type { ReactNode } from "react";
import flashGlow from "../../assets/home/flash-glow.svg";
import flashPattern from "../../assets/home/flash-pattern.webp";
import flashTicketA from "../../assets/home/flash-ticket-a.svg";
import flashTicketB from "../../assets/home/flash-ticket-b.svg";
import spotlightGlow from "../../assets/home/spotlight-glow.svg";
import spotlightStar from "../../assets/home/spotlight-star.svg";
import strikeBold from "../../assets/home/strike-bold-white.svg";
import strikeLight from "../../assets/home/strike-light.svg";
import { discountPercent, rupees, type Deal } from "../../data/deal";
import "./ThemeCard.css";

/** priceList: pink, up to four price rows. spotlight: green, one product big. flashSale: blue, three tiles. */
export type ThemeCardKind = "priceList" | "spotlight" | "flashSale";

export interface ThemeCardProps {
  kind: ThemeCardKind;
  /** Use "\\n" to break the title, e.g. "Flash\\nSale". */
  title: string;
  deals: Deal[];
  /** Spotlight only: artwork that replaces the product photo. */
  art?: string;
  /** Grey placeholders while the products load (not in Figma). */
  loading?: boolean;
  /** Opens the card's full list. */
  onSelect?: () => void;
  /** Opens one product (rows and tiles). */
  onDealSelect?: (deal: Deal) => void;
}

/** Theme card from page type 2's swipe row (248×314; spotlight 246×314). Colours are fixed per kind, as in Figma. */
export function ThemeCard(props: ThemeCardProps) {
  const { kind, onSelect } = props;
  return (
    <div
      role={onSelect ? "link" : undefined}
      onClick={onSelect}
      className={\`ck-theme ck-theme--\${kind} \${onSelect ? "ck-theme--clickable" : ""}\`}
    >
      {kind === "priceList" && <PriceList {...props} />}
      {kind === "spotlight" && <Spotlight {...props} />}
      {kind === "flashSale" && <FlashSale {...props} />}
    </div>
  );
}

function Title({ children }: { children: string }) {
  return <span className="ck-theme__title">{children}</span>;
}

/** Inside clickable cards: a tap on a product must not also open the card. */
function DealButton({ deal, onDealSelect, className, children }: { deal: Deal; onDealSelect?: (deal: Deal) => void; className: string; children: ReactNode }) {
  return (
    <button
      type="button"
      className={className}
      onClick={(e) => {
        e.stopPropagation();
        onDealSelect?.(deal);
      }}
    >
      {children}
    </button>
  );
}

function PriceList({ title, deals, loading, onDealSelect }: ThemeCardProps) {
  return (
    <>
      <Title>{title}</Title>
      <div className="ck-theme__rows">
        {loading
          ? Array.from({ length: 4 }, (_, i) => <span key={i} className="ck-theme__row-bone" />)
          : deals.slice(0, 4).map((deal) => (
              <DealButton key={deal.id} deal={deal} onDealSelect={onDealSelect} className="ck-theme__row">
                <span className="ck-theme__row-main">
                  <span className="ck-theme__row-photo">
                    {deal.image && <img src={deal.image} alt={deal.imageAlt ?? \`\${deal.brand} \${deal.name}\`} />}
                  </span>
                  <span className="ck-theme__row-name">
                    {deal.brand} {deal.name}
                  </span>
                </span>
                <span className="ck-theme__row-prices">
                  <span className="ck-theme__row-mrp-wrap">
                    <span className="ck-theme__row-mrp ck-trim">{rupees(deal.mrp)}</span>
                    <span className="ck-theme__row-strike">
                      <img src={strikeLight} alt="" />
                    </span>
                  </span>
                  <span className="ck-theme__row-price ck-trim">{rupees(deal.price)}</span>
                </span>
              </DealButton>
            ))}
      </div>
    </>
  );
}

function Spotlight({ title, deals, art, loading }: ThemeCardProps) {
  const deal = loading ? undefined : deals[0];
  const picture = art ?? deal?.image;
  return (
    <>
      <span className="ck-theme__glow ck-theme__glow--spotlight">
        <span>
          <img src={spotlightGlow} alt="" />
        </span>
      </span>
      {picture && <img className="ck-theme__spotlight-art" src={picture} alt={deal ? \`\${deal.brand} \${deal.name}\` : ""} />}
      {deal && (
        <>
          <span className="ck-theme__star">
            <span>
              <img src={spotlightStar} alt="" />
            </span>
          </span>
          {/* Centred on the starburst so longer prices stay inside it */}
          <span className="ck-theme__bubble">
            <span className="ck-theme__bubble-mrp-wrap">
              <span className="ck-theme__bubble-mrp ck-trim">{rupees(deal.mrp)}</span>
              <span className="ck-theme__bubble-strike">
                <img src={strikeBold} alt="" />
              </span>
            </span>
            <span className="ck-theme__bubble-price ck-trim">{rupees(deal.price)}</span>
          </span>
        </>
      )}
      <Title>{title}</Title>
    </>
  );
}

function FlashSale({ title, deals, loading, onDealSelect }: ThemeCardProps) {
  return (
    <>
      <img className="ck-theme__pattern" src={flashPattern} alt="" />
      <span className="ck-theme__glow ck-theme__glow--flash">
        <span>
          <img src={flashGlow} alt="" />
        </span>
      </span>
      <div className="ck-theme__tiles">
        {loading
          ? Array.from({ length: 3 }, (_, i) => <span key={i} className={\`ck-theme__tile ck-theme__tile--\${i + 1}\`} />)
          : deals.slice(0, 3).map((deal, i) => (
              <DealButton
                key={deal.id}
                deal={deal}
                onDealSelect={onDealSelect}
                className={\`ck-theme__tile ck-theme__tile--\${i + 1}\`}
              >
                {deal.image && <img className="ck-theme__tile-photo" src={deal.image} alt={deal.imageAlt ?? \`\${deal.brand} \${deal.name}\`} />}
                <span className="ck-theme__tag">
                  <span>{discountPercent(deal.price, deal.mrp)}% off</span>
                </span>
              </DealButton>
            ))}
      </div>
      <span className="ck-theme__ticket ck-theme__ticket--a">
        <span>
          <span>
            <img src={flashTicketA} alt="" />
          </span>
        </span>
      </span>
      <span className="ck-theme__percent ck-theme__percent--a">
        <span>%</span>
      </span>
      <span className="ck-theme__ticket ck-theme__ticket--b">
        <span>
          <span>
            <img src={flashTicketB} alt="" />
          </span>
        </span>
      </span>
      <span className="ck-theme__percent ck-theme__percent--b">
        <span>%</span>
      </span>
      <Title>{title}</Title>
    </>
  );
}
`,bv=`import { ThemeCardsHero } from "./ThemeCardsHero";
import type { BookEntry } from "../../book/types";
import { sampleLists, sampleThemeCards } from "../../data/samples";
import { TopBar } from "../TopBar/TopBar";

const cards = sampleThemeCards.map((card) => ({ ...card, deals: sampleLists[card.listId] }));

const entry: BookEntry = {
  title: "ThemeCardsHero",
  feature: "Masthead / hero",
  description: "Page type 2 top section: swipe row of theme cards over blue rays.",
  stories: [
    { name: "three cards (swipe)", render: () => <ThemeCardsHero cards={cards} topBar={<TopBar />} /> },
    { name: "one card", render: () => <ThemeCardsHero cards={cards.slice(0, 1)} topBar={<TopBar />} /> },
    { name: "loading", render: () => <ThemeCardsHero cards={cards.map((c) => ({ ...c, deals: [], loading: true }))} topBar={<TopBar />} /> },
  ],
};
export default entry;
`,Sv=`/* Offsets are Figma coordinates inside the 360×432 frame */
.ck-theme-hero { position: relative; width: var(--ck-page-w); height: 432px; flex-shrink: 0; overflow-x: clip; background: var(--ck-theme-bg); font-family: var(--ck-font-family); line-height: 1.5; }
.ck-theme-hero__rays { position: absolute; left: calc(50% + 2.81px); top: 0; width: 428.421px; height: 428.421px; translate: -50% 0; mix-blend-mode: darken; }
.ck-theme-hero__rays img { position: absolute; width: 100%; height: 100%; max-width: none; object-fit: cover; }
.ck-theme-hero__rays-fade { position: absolute; inset: 0; background: var(--ck-theme-rays-fade); }
.ck-theme-hero__burn { position: absolute; left: 0; top: 0; width: var(--ck-page-w); height: 124.31px; background: var(--ck-theme-burn); mix-blend-mode: color-burn; }
.ck-theme-hero__sky { position: absolute; left: 0; top: 0; width: var(--ck-page-w); height: 108.4px; background: var(--ck-theme-sky); }

/* Bottom padding keeps the cards' coloured shadows inside the scroller */
.ck-theme-hero__scroller { position: absolute; left: 0; top: 108px; width: var(--ck-page-w); overflow-x: auto; padding-bottom: 40px; scrollbar-width: none; }
.ck-theme-hero__scroller::-webkit-scrollbar { display: none; }
.ck-theme-hero__row { display: flex; width: max-content; align-items: flex-start; gap: var(--ck-space-xl); padding: 0 var(--ck-space-2xl); }

.ck-theme-hero__topbar { position: absolute; left: 0; top: 28px; }
`,Cv=`import type { ReactNode } from "react";
import raysSunburst from "../../assets/home/rays-sunburst.webp";
import type { Deal } from "../../data/deal";
import { ThemeCard, type ThemeCardProps } from "../ThemeCard/ThemeCard";
import { MediaBackground, type MediaBackgroundSource } from "../MediaBackground/MediaBackground";
import "./ThemeCardsHero.css";

export type ThemeCardItem = Omit<ThemeCardProps, "onSelect" | "onDealSelect"> & { id: string };

export interface ThemeCardsHeroProps {
  cards: ThemeCardItem[];
  onCardSelect?: (card: ThemeCardItem) => void;
  onDealSelect?: (deal: Deal) => void;
  /** Back/search bar laid over the top of the art, e.g. <TopBar />. */
  topBar?: ReactNode;
  /** Replaces the built-in backdrop art with an image or Lottie. */
  background?: MediaBackgroundSource;
}

/** Page type 2 top section (360×432): blue rays behind a swipe row of theme cards. */
export function ThemeCardsHero({ cards, onCardSelect, onDealSelect, topBar, background }: ThemeCardsHeroProps) {
  return (
    // Clipped sideways only, so the cards' coloured shadows can fall into the white gap below
    <section className="ck-theme-hero">
      {background ? (
        <MediaBackground {...background} />
      ) : (
        <>
          <div className="ck-theme-hero__rays">
            <img src={raysSunburst} alt="" />
            <div className="ck-theme-hero__rays-fade" />
          </div>
          <div className="ck-theme-hero__burn" />
          {/* Figma's sky band starts 19px above the page; this is its visible part */}
          <div className="ck-theme-hero__sky" />
        </>
      )}

      <div className="ck-theme-hero__scroller">
        <div className="ck-theme-hero__row">
          {cards.map(({ id, ...card }) => (
            <ThemeCard
              key={id}
              {...card}
              onSelect={onCardSelect && (() => onCardSelect({ id, ...card }))}
              onDealSelect={onDealSelect}
            />
          ))}
        </div>
      </div>

      {topBar && <div className="ck-theme-hero__topbar">{topBar}</div>}
    </section>
  );
}
`,Pv=`import { TopBar } from "./TopBar";
import type { BookEntry } from "../../book/types";

const onArt = (background: string, searchHints?: string[]) => (
  <div style={{ background, paddingBottom: 8 }}>
    <TopBar searchHints={searchHints} />
  </div>
);

const entry: BookEntry = {
  title: "TopBar",
  feature: "Shared",
  description: "Back button and search that sit over every top section's art. Pass searchHints to get the wide white bar that rotates product names.",
  stories: [
    { name: "on purple art", render: () => onArt("#8d08ed") },
    { name: "on blue art", render: () => onArt("#2687ff") },
    { name: "rotating search bar", render: () => onArt("#8d08ed", ["nike shoes", "tv", "monitors", "iphone", "adidas", "laptops"]) },
  ],
};
export default entry;
`,Nv=`.ck-topbar { position: relative; width: var(--ck-page-w); height: 56px; }
.ck-topbar__row { position: absolute; left: 0; top: 6px; display: flex; width: 100%; align-items: center; justify-content: space-between; padding: 0 var(--ck-space-2xl); }
.ck-topbar__button { display: flex; width: 40px; height: 40px; flex-shrink: 0; align-items: center; justify-content: center; border: 1px solid var(--ck-color-glass-border); border-radius: var(--ck-radius-section); mix-blend-mode: plus-lighter; cursor: pointer; }
.ck-topbar__back { width: 24px; height: 24px; rotate: 90deg; }
/* Drawn stand-in: the Figma search icon is a Font Awesome Pro glyph */
.ck-topbar__search { width: 23.307px; height: 23.307px; }

/* Search bar with rotating hints (Figma 1227:52748): frosted glass, replaces the round search button when hints are set */
.ck-topbar__row--bar { gap: var(--ck-space-2xl); }
.ck-topbar__row--bar .ck-topbar__button { background: var(--ck-topbar-glass-button); }
.ck-topbar__bar { display: flex; height: 40px; min-width: 0; flex: 1; align-items: center; gap: var(--ck-space-xl); padding: 0 var(--ck-space-xl); box-sizing: border-box; border: 1px solid var(--ck-topbar-glass-border); border-radius: var(--ck-radius-pill); background: var(--ck-topbar-glass); -webkit-backdrop-filter: blur(7.5px); backdrop-filter: blur(7.5px); box-shadow: var(--ck-topbar-glass-shadow); overflow: hidden; font-family: var(--ck-font-family); font-size: var(--ck-text-lg); font-weight: 500; line-height: 20px; cursor: pointer; }
.ck-topbar__bar-icon { display: block; width: 24px; height: 24px; flex-shrink: 0; }
.ck-topbar__bar-text { display: flex; min-width: 0; align-items: center; gap: var(--ck-space-xs); overflow: hidden; white-space: nowrap; color: var(--ck-topbar-glass-text); }
.ck-topbar__slot { display: grid; align-items: center; justify-items: start; }
.ck-topbar__hint { grid-area: 1 / 1; opacity: 0; }
.ck-topbar__hint--active { opacity: 1; animation: ck-hint-in 0.35s ease-out; }

@keyframes ck-hint-in {
  from { opacity: 0; transform: translateY(60%); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .ck-topbar__hint--active { animation: none; }
}
`,jv=`import { useEffect, useState, type ReactNode } from "react";
import backIcon from "../../assets/home/icon-back.svg";
import searchIcon from "../../assets/home/icon-search.svg";
import "./TopBar.css";

export interface TopBarProps {
  onBack?: () => void;
  onSearch?: () => void;
  /**
   * Product names or brands to rotate through, e.g. ["nike shoes", "tv", "monitors"].
   * When given, the round search button becomes a wide white search bar that cycles them.
   */
  searchHints?: string[];
  /** How long each hint stays, in ms. */
  hintIntervalMs?: number;
}

/** 56px header row drawn over a top section's art: round back button left, search right (round button, or a wide white bar with rotating hints). */
export function TopBar({ onBack, onSearch, searchHints, hintIntervalMs = 2500 }: TopBarProps) {
  return (
    <div className="ck-topbar">
      <div className={\`ck-topbar__row\${searchHints?.length ? " ck-topbar__row--bar" : ""}\`}>
        <RoundButton label="Back" onClick={onBack}>
          <img className="ck-topbar__back" src={backIcon} alt="" />
        </RoundButton>
        {searchHints?.length ? (
          <SearchBar hints={searchHints} intervalMs={hintIntervalMs} onClick={onSearch} />
        ) : (
          <RoundButton label="Search" onClick={onSearch}>
            <img className="ck-topbar__search" src={searchIcon} alt="" />
          </RoundButton>
        )}
      </div>
    </div>
  );
}

function SearchBar({ hints, intervalMs, onClick }: { hints: string[]; intervalMs: number; onClick?: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    if (hints.length < 2) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % hints.length), intervalMs);
    return () => window.clearInterval(timer);
  }, [hints, intervalMs]);

  return (
    <button type="button" aria-label="Search for products" onClick={onClick} className="ck-topbar__bar">
      {/* A plain image, not a CSS mask: a build inlines this small icon as a data URL, and an unquoted data URL in url() is thrown away */}
      <img className="ck-topbar__bar-icon" src={searchIcon} alt="" width="24" height="24" />
      <span className="ck-topbar__bar-text" aria-hidden="true">
        <span>Search for</span>
        {/* All hints are stacked in one grid cell so the slot is as wide as the longest: the centred group never shifts as hints change. */}
        <span className="ck-topbar__slot">
          {hints.map((hint, i) => (
            <span key={hint} className={\`ck-topbar__hint\${i === index ? " ck-topbar__hint--active" : ""}\`}>
              {hint}
            </span>
          ))}
        </span>
      </span>
    </button>
  );
}

function RoundButton({ label, onClick, children }: { label: string; onClick?: () => void; children: ReactNode }) {
  return (
    <button type="button" aria-label={label} onClick={onClick} className="ck-topbar__button">
      {children}
    </button>
  );
}
`,Bv=`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tokens/tokens.css";
import { Book } from "./book/Book";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Book />
  </StrictMode>
);
`,Dv=`import { useState } from "react";
import {
  HomePage,
  defaultSelection,
  selectionToFilter,
  type HomePageConfig,
  type HomePageData,
  type PageSection,
} from "./HomePage";
import type { BookEntry } from "../../book/types";
import { applyFilter, type Deal, type DealList } from "../../data/deal";
import { clearMix } from "../../data/mixDeals";
import {
  sampleBanner,
  sampleCategories,
  sampleLists,
  samplePriceAmounts,
  sampleProducts,
  sampleSaleTiles,
  sampleSlides,
  sampleStripPicture,
  sampleThemeCards,
  sampleTypeChips,
  sampleBrandChips,
} from "../../data/samples";
import { rememberTap } from "../../data/crossSellMemory";

// The four home pages as an admin would set them up. Section order and gaps follow the Figma frames.
const saleDeals = (gapBefore: number): PageSection => ({
  id: "sale-deals",
  type: "saleDeals",
  title: "Sale Deals",
  subtitle: "Get Cashbacks upto 80%",
  endsAt: Date.now() + (56 * 60 + 38) * 1000,
  gapBefore,
});
const footer = (gapBefore: number): PageSection => ({
  id: "footer",
  type: "footer",
  title: "Shop\\nCashback\\nRepeat!",
  subtitle: "Designed for smart shoppers",
  gapBefore,
});
const shared = { categories: sampleCategories, priceAmounts: samplePriceAmounts };

const page1: HomePageConfig = {
  ...shared,
  top: { type: "categorySale", title: "Sale is Onnn!!", subtitle: "Starting from just ₹99", tiles: sampleSaleTiles },
  sections: [
    saleDeals(12),
    { id: "filters", type: "filters", gapBefore: 16 },
    { id: "grid-1", type: "productGrid", count: 4 },
    { id: "best-deals", type: "bestDeals", title: "Best deals" },
    { id: "grid-2", type: "productGrid", count: 4 },
    { id: "banner", type: "brandBanner", ...sampleBanner },
    { id: "grid-3", type: "productGrid" },
    footer(123),
  ],
};

const mastheadOff: HomePageConfig = { ...page1, top: { ...page1.top, enabled: false } };
const saleDealsOff: HomePageConfig = {
  ...page1,
  sections: page1.sections.map((section) => (section.type === "saleDeals" ? { ...section, enabled: false } : section)),
};

/** The main deals page with the 6 Oct additions: scroll filters (category and brand) and the cross-sell block. */
const dealsPage: HomePageConfig = {
  ...page1,
  scrollFilterMinRows: 3,
  sections: [
    saleDeals(12),
    { id: "filters", type: "filters", gapBefore: 16 },
    { id: "grid-1", type: "productGrid", count: 4 },
    // Placed after 2 rows on purpose: the page holds it back until 3 rows are shown.
    { id: "type-filter", type: "scrollFilter", mode: "category", title: "Top Electronic Deals", barTitle: "Shop by type", chips: sampleTypeChips },
    { id: "grid-2", type: "productGrid", count: 6 },
    { id: "cross-sell", type: "crossSell" },
    { id: "grid-3", type: "productGrid", count: 4 },
    { id: "banner", type: "brandBanner", ...sampleBanner },
    { id: "brand-filter", type: "scrollFilter", mode: "brand", barTitle: "Shop by brand", chips: sampleBrandChips },
    { id: "grid-4", type: "productGrid" },
    footer(123),
  ],
};

const page2: HomePageConfig = {
  ...shared,
  top: { type: "themeCards", cards: sampleThemeCards },
  sections: [
    { id: "filters", type: "filters", gapBefore: 19 },
    { id: "grid-1", type: "productGrid", count: 4 },
    { id: "best-deals", type: "bestDeals", title: "Best deals" },
    { id: "grid-2", type: "productGrid" },
    footer(188),
  ],
};

const page3: HomePageConfig = {
  ...shared,
  top: {
    type: "brandSlides",
    title: "Sale is Onnn!!",
    subtitle: "Starting from just ₹99",
    slides: sampleSlides.map((slide, i) => ({ ...slide, id: \`slide-\${i + 1}\` })),
  },
  sections: [
    saleDeals(12),
    { id: "filters", type: "filters", gapBefore: 12 },
    { id: "grid", type: "productGrid", count: 4 },
    { id: "best-deals", type: "bestDeals", title: "Best deals" },
    footer(112),
  ],
};

const page4: HomePageConfig = {
  ...shared,
  top: { type: "dealsStrip", ...sampleStripPicture, listId: "best-deals-strip", viewAllLabel: "view all" },
  sections: [saleDeals(12), { id: "filters", type: "filters", gapBefore: 16 }, { id: "grid", type: "productGrid" }, footer(202)],
};

type State = "ready" | "loading" | "error" | "empty";

/** The sample products spread over three mix groups and one group the mix leaves out, as the grouped feed would return them. */
const mixCatalog: Deal[] = sampleProducts.map((deal, i) => ({ ...deal, category: ["Fashion", "Mobile & Electronics", "Appliances", "Beauty"][i % 4] }));

/** Plays the host app: keeps the selection and loads sample products for it. \`mix\` leaves the admin's Best deals list empty, so the page builds its own. */
function Demo({ config, state = "ready", maxPrice, tapped, mix, matched }: { config: HomePageConfig; state?: State; maxPrice?: number; tapped?: Deal; mix?: boolean; matched?: number }) {
  // Seeds the cross-sell memory before the page reads it, as if the shopper had just tapped this product.
  useState(() => tapped && rememberTap(tapped));
  // Each story opens on a fresh draw, so reloading the story shows another mix.
  useState(() => mix && clearMix());
  const [selection, setSelection] = useState(() => ({ ...defaultSelection(config), ...(maxPrice ? { maxPrice } : {}) }));
  const catalog = mix ? mixCatalog : sampleProducts;
  const feed = state === "empty" ? [] : applyFilter(catalog, selectionToFilter(selection, config.categories));
  const list = (items: Deal[]): DealList =>
    state === "loading" || state === "error" ? { status: state, items: [] } : { status: "ready", items };
  const data: HomePageData = {
    saleDeals: list(sampleProducts.slice(0, 6)),
    products: list(feed),
    bestDeals: list(mix ? [] : feed.slice(0, 5)),
    mixPool: mix ? list(state === "empty" ? [] : catalog) : undefined,
    lists: Object.fromEntries(Object.entries(sampleLists).map(([id, items]) => [id, list(items)])),
    // The host's own matches for the tapped product (the page server does this in prod): same category, nearest price first.
    crossSell:
      tapped && matched !== undefined && state === "ready"
        ? {
            forId: tapped.id,
            categoryName: tapped.productCategoryName,
            items: sampleProducts
              .filter((d) => d.productCategory === tapped.productCategory && d.id !== tapped.id)
              .sort((a, b) => Math.abs(a.price - tapped.price) - Math.abs(b.price - tapped.price))
              .slice(0, matched),
          }
        : undefined,
  };
  return (
    <HomePage
      config={config}
      data={data}
      selection={selection}
      onSelectionChange={setSelection}
      actions={{ retryProducts: () => {}, openDeal: () => {}, grabDeal: () => {}, openLink: (href) => console.info("[open]", href), track: (event, params) => console.info("[track]", event, params) }}
    />
  );
}

const entry: BookEntry = {
  title: "HomePage",
  feature: "Pages",
  description:
    "The four home page types built from the admin setup. The category row and price pills filter the products below them.",
  stories: [
    { name: "main deals page: scroll filters + cross-sell (after a charger tap)", render: () => <Demo config={dealsPage} maxPrice={399} tapped={sampleProducts.find((deal) => deal.productCategory === "chargers")} /> },
    { name: "cross-sell under the tapped row: 4 matches (after a charger tap)", render: () => <Demo config={dealsPage} maxPrice={399} tapped={sampleProducts.find((deal) => deal.productCategory === "chargers")} matched={4} /> },
    { name: "cross-sell: 8 matches, swipe the carousel", render: () => <Demo config={dealsPage} maxPrice={399} tapped={sampleProducts.find((deal) => deal.productCategory === "chargers")} matched={8} /> },
    { name: "cross-sell: 3 matches, one card beside a full column", render: () => <Demo config={dealsPage} maxPrice={399} tapped={sampleProducts.find((deal) => deal.productCategory === "chargers")} matched={3} /> },
    { name: "cross-sell: 2 matches, nothing shown", render: () => <Demo config={dealsPage} maxPrice={399} tapped={sampleProducts.find((deal) => deal.productCategory === "chargers")} matched={2} /> },
    { name: "best deals mix: random across appliances, electronics and fashion", render: () => <Demo config={page1} maxPrice={399} mix /> },
    { name: "page type 1: category sale zone", render: () => <Demo config={page1} /> },
    { name: "page type 2: theme cards", render: () => <Demo config={page2} /> },
    { name: "page type 3: brand slides", render: () => <Demo config={page3} /> },
    { name: "page type 4: BEST DEALS strip", render: () => <Demo config={page4} /> },
    { name: "masthead off (top bar stays)", render: () => <Demo config={mastheadOff} /> },
    { name: "sale deals off", render: () => <Demo config={saleDealsOff} /> },
    { name: "loading", render: () => <Demo config={page4} state="loading" /> },
    { name: "empty", render: () => <Demo config={page4} state="empty" /> },
    { name: "error", render: () => <Demo config={page4} state="error" /> },
  ],
};
export default entry;
`,Av=`/* Page layout only: order, gaps and side margins. Everything inside the sections stays in the components. */
.ck-home { display: flex; width: var(--ck-page-w); flex-direction: column; background: var(--ck-color-surface); }
.ck-home__category { position: sticky; top: var(--ck-stack-top); z-index: 11; background: var(--ck-color-surface); }
.ck-home__pills { position: sticky; top: calc(var(--ck-stack-top) + var(--ck-category-h)); z-index: 10; padding: var(--ck-space-sm) 0; background: var(--ck-color-surface); }
.ck-home__grid { padding: 0 var(--ck-space-2xl); }
.ck-home__best-deals { padding: 0 var(--ck-space-lg); }
.ck-home__banner { padding: 0 var(--ck-space-md); }
`,Ev=`import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { BestDealsCarousel } from "../../components/BestDealsCarousel/BestDealsCarousel";
import { BrandBanner } from "../../components/BrandBanner/BrandBanner";
import { BrandSlidesHero, type BrandSlideItem } from "../../components/BrandSlidesHero/BrandSlidesHero";
import { CategoryRow, type CategoryRowItem } from "../../components/CategoryRow/CategoryRow";
import { CategorySaleHero, type SaleTile } from "../../components/CategorySaleHero/CategorySaleHero";
import { CrossSellSection, CROSS_SELL_MAX } from "../../components/CrossSellSection/CrossSellSection";
import { DealsStripHero } from "../../components/DealsStripHero/DealsStripHero";
import { PageFooter } from "../../components/PageFooter/PageFooter";
import { PricePills } from "../../components/PricePills/PricePills";
import { SaleDealsStrip } from "../../components/SaleDealsStrip/SaleDealsStrip";
import { ScrollFilter, ScrollFilterBar, type ScrollFilterChip, type ScrollFilterMode } from "../../components/ScrollFilter/ScrollFilter";
import type { MediaBackgroundSource } from "../../components/MediaBackground/MediaBackground";
import { ThemeCardsHero } from "../../components/ThemeCardsHero/ThemeCardsHero";
import type { ThemeCardKind } from "../../components/ThemeCard/ThemeCard";
import { ScrollTopButton } from "../../components/ScrollTopButton/ScrollTopButton";
import { TopBar } from "../../components/TopBar/TopBar";
import { readMemory, rememberTap, type CrossSellMemory } from "../../data/crossSellMemory";
import type { Deal, DealList, ProductFilter } from "../../data/deal";
import { MIX_COUNT, MIX_MIN, pickMixDeals } from "../../data/mixDeals";
import { ProductGrid } from "../../templates/ProductGrid/ProductGrid";
import "./HomePage.css";

/** The section at the very top: one per page type. */
export type TopSection = {
  /** false turns the masthead off without deleting it. The top bar still shows. */
  enabled?: boolean;
} & (
  /** Page type 1: purple sale zone with category tiles. */
  | { type: "categorySale"; background?: MediaBackgroundSource; title: string; subtitle: string; tiles: (SaleTile & { href?: string })[] }
  /** Page type 2: theme cards (price list, spotlight, flash sale), each fed by a list. */
  | { type: "themeCards"; background?: MediaBackgroundSource; cards: { id: string; kind: ThemeCardKind; title: string; listId: string; art?: string; href?: string }[] }
  /** Page type 3: brand slides. */
  | { type: "brandSlides"; background?: MediaBackgroundSource; title: string; subtitle: string; slides: (BrandSlideItem & { href?: string })[] }
  /** Page type 4: BEST DEALS art over masthead cards from a list. */
  | {
      type: "dealsStrip";
      background?: MediaBackgroundSource;
      /** Left out when the background picture carries the title. */
      titleArt?: string;
      titleAlt: string;
      /** Blinking dot beside "Live Now", for title art drawn with that gap. */
      liveDot?: boolean;
      /** Product names the search bar rotates through; defaults to a set of aspirational picks. [] shows the round search button. */
      searchHints?: string[];
      listId: string;
      viewAll?: boolean;
      viewAllLabel?: string;
      viewAllHref?: string;
    }
);

/** Everything below the top section, in the admin's order. */
export type PageSection = {
  /** Unique within the page. */
  id: string;
  /** false hides the section without deleting it. */
  enabled?: boolean;
  /** Space above the section in px; defaults to 20. */
  gapBefore?: number;
} & (
  /** endsAt left out = the daily clock that counts down to midnight. */
  | { type: "saleDeals"; title: string; subtitle: string; endsAt?: string | number | Date }
  /** The category row with the price pills under it. Filters every product section after it. */
  | { type: "filters" }
  /** Takes the next \`count\` products of the filtered feed (all that remain when count is left out). */
  | { type: "productGrid"; count?: number }
  | { type: "bestDeals"; title: string }
  | { type: "brandBanner"; logo: string; brandName: string; headline: string; subline: string; art: string; href?: string }
  | { type: "footer"; title: string; subtitle: string }
  /**
   * Brand or product category chips inside the scroll. A pick filters the product grids from here down to the next
   * scroll filter. Never the price filter. Shown only after \`scrollFilterMinRows\` rows of products.
   */
  | { type: "scrollFilter"; mode: ScrollFilterMode; title?: string; barTitle?: string; chips: ScrollFilterChip[] }
  /**
   * "View more {category}" for the product the shopper last opened (see crossSellMemory): three to eight products that fit it.
   * Hidden on a first visit and whenever fewer than three fit. With \`data.crossSell\` (matched by the host) it shows right
   * under the grid row of the product opened; without it the page picks from the feed by product category.
   */
  | {
      type: "crossSell";
      /** "{category}" is replaced by the category name, in lower case. Default "View more {category}". */
      titleTemplate?: string;
      /** Same replacement. Default "Because you viewed {category} recently". */
      subtitle?: string;
    }
);

/** One home page as the admin sets it up. */
export interface HomePageConfig {
  top: TopSection;
  sections: PageSection[];
  categories: CategoryRowItem[];
  /** "Under ₹…" amounts; the first is selected when the page opens. */
  priceAmounts: number[];
  /** Rows of products before the first scroll filter may appear. Default 3. */
  scrollFilterMinRows?: number;
}

/** The lists the host app loads for the page. */
export interface HomePageData {
  /** Sale Deals strip (not filtered: it sits above the filters). */
  saleDeals: DealList;
  /** The product feed for the current selection; the grids take from it in page order. */
  products: DealList;
  /** Best deals set by the admin. When this is empty the page builds its own mix (see \`mixPool\`). */
  bestDeals: DealList;
  /**
   * The first tiles of every category group from the grouped feed call, flattened in rank order.
   * The page draws the Best deals mix from it. Left out, the mix falls back to \`products\`.
   */
  mixPool?: DealList;
  /** Lists for the top section, keyed by list id. */
  lists: Record<string, DealList>;
  /**
   * Cross-sell matched by the host for the product the shopper last opened (\`forId\`), best first. With it, the crossSell
   * section shows these right under the row of that product, instead of picking from the feed itself.
   */
  crossSell?: {
    forId: string;
    categoryName?: string;
    items: Deal[];
    /**
     * When the host asked (ms since epoch). Set it each time the host asks again, e.g. when a product sheet closes: a new value
     * brings the block into view once. Left out, the page never scrolls to the block (Component Book, tests).
     */
    at?: number;
  };
}

/** What is picked in the category row and the price pills. */
export interface HomeSelection {
  categoryId: string;
  maxPrice: number;
}

/** What the host app does when the shopper taps something. */
export interface HomePageActions {
  back?: () => void;
  search?: () => void;
  openDeal?: (deal: Deal) => void;
  shareDeal?: (deal: Deal) => void;
  grabDeal?: (deal: Deal) => void;
  openLink?: (href: string) => void;
  /** Called from the error state's "Try again". */
  retryProducts?: () => void;
  /** Analytics hook; event names are the frontend PRD's proposal. */
  track?: (event: HomeEvent, params: Record<string, string | number | boolean | undefined>) => void;
}

export type HomeEvent =
  | "page_view"
  | "masthead_click"
  | "scroll_filter_select"
  | "cross_sell_view"
  | "cross_sell_click"
  | "view_more_click"
  | "product_click"
  /** Grab Deal: the exit click to the retailer. */
  | "grab_deal_click"
  | "scroll_top_click";

export interface HomePageProps {
  config: HomePageConfig;
  data: HomePageData;
  selection: HomeSelection;
  onSelectionChange: (selection: HomeSelection) => void;
  actions?: HomePageActions;
}

/** The selection a page opens with: the first category and the first price. */
export const defaultSelection = (config: HomePageConfig): HomeSelection => ({
  categoryId: config.categories[0]?.id ?? "",
  maxPrice: config.priceAmounts[0],
});

/** The product filter for a selection; a "show all" category such as Top Deals filters nothing. */
export function selectionToFilter(selection: HomeSelection, categories: CategoryRowItem[]): ProductFilter {
  const category = categories.find((c) => c.id === selection.categoryId);
  return { categoryId: category?.showsAll ? undefined : selection.categoryId, maxPrice: selection.maxPrice };
}

const DEFAULT_GAP = 20;
/** Figma: 13px from the category row to the pills, and from the pills to the first grid. */
const PILLS_GAP = 13;
/** The sticky pills carry 6px of white above and below. */
const PILLS_PAD = 6;

const EMPTY: DealList = { status: "ready", items: [] };

/** Rows of products before the first scroll filter, when the admin sets none. */
const DEFAULT_FILTER_MIN_ROWS = 3;
/** Fewer than this and no cross-sell block is shown (2 or fewer is not a block). */
const CROSS_SELL_MIN = 3;
/** Bringing the block into view: room left under it, room kept between the pinned stack and its top, and the smallest scroll worth making (px). */
const REVEAL_BOTTOM_GAP = 88;
const REVEAL_TOP_GAP = 24;
const REVEAL_MIN_SCROLL = 8;
/** What the deals strip's search bar rotates through when the admin sets nothing: aspirational product names. */
const STRIP_SEARCH_HINTS = ["nike shoes", "iPhone 16", "smart TVs", "monitors", "adidas sneakers", "boAt earbuds"];

const PAGE_STATE_KEY = "ck-deals:page-state";
/** How long a saved scroll position and chip picks stay valid: one long shopping session. */
const PAGE_STATE_TTL_MS = 90 * 60 * 1000;

interface PageState {
  y: number;
  /** Cross-sell category on screen when the state was saved, to correct the scroll if the block has appeared since. */
  crossSell?: string;
  chips: Record<string, string | undefined>;
  at: number;
}

function loadPageState(): PageState | null {
  try {
    const raw = sessionStorage.getItem(PAGE_STATE_KEY);
    const state = raw ? (JSON.parse(raw) as PageState) : null;
    return state && Date.now() - state.at < PAGE_STATE_TTL_MS ? state : null;
  } catch {
    return null;
  }
}

const norm = (value?: string) => value?.trim().toLowerCase();

type ActiveChip = { mode: ScrollFilterMode; chipId: string } | undefined;

/** Category mode matches the product category; brand mode matches the brand or the store name (Figma's brand row mixes both). */
function matchesChip(deal: Deal, active: ActiveChip) {
  if (!active) return true;
  if (active.mode === "category") return deal.productCategory === active.chipId;
  const id = norm(active.chipId);
  return norm(deal.brand) === id || norm(deal.store) === id;
}

/** One home page: the top section, then each enabled section in the admin's order. */
export function HomePage({ config, data, selection, onSelectionChange: changeSelection, actions = {} }: HomePageProps) {
  const { track } = actions;
  const [initialState] = useState(loadPageState);
  const restored = useRef(initialState);
  const [chips, setChips] = useState<Record<string, string | undefined>>(() => initialState?.chips ?? {});
  const [memory, setMemory] = useState<CrossSellMemory | null>(() => readMemory());
  const root = useRef<HTMLDivElement>(null);
  const lastCrossSell = useRef<string | undefined>(undefined);
  const firstCommit = useRef(true);
  const chipsRef = useRef(chips);
  chipsRef.current = chips;

  // Cross-sell shows when the page is shown again after a product tap, so the block never pops in under the finger.
  useEffect(() => {
    const refresh = () => {
      if (document.visibilityState !== "hidden") setMemory(readMemory());
    };
    document.addEventListener("visibilitychange", refresh);
    window.addEventListener("pageshow", refresh);
    window.addEventListener("focus", refresh);
    // Back from an in-webview product page that kept this page mounted.
    window.addEventListener("popstate", refresh);
    return () => {
      document.removeEventListener("visibilitychange", refresh);
      window.removeEventListener("pageshow", refresh);
      window.removeEventListener("focus", refresh);
      window.removeEventListener("popstate", refresh);
    };
  }, []);

  // Feels native: keep the scroll position and the picked chips when the webview hides, restore them on return.
  useEffect(() => {
    const save = () => {
      try {
        sessionStorage.setItem(PAGE_STATE_KEY, JSON.stringify({ y: window.scrollY, chips: chipsRef.current, crossSell: lastCrossSell.current, at: Date.now() }));
      } catch {
        // Storage blocked: nothing to restore next time.
      }
    };
    const onHide = () => document.visibilityState === "hidden" && save();
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", save);
    return () => {
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", save);
      // A product page opened as an in-app route unmounts the page without hiding it.
      save();
    };
  }, []);
  const productsReady = data.products.status === "ready";
  useEffect(() => {
    const state = restored.current;
    if (!productsReady || !state) return;
    restored.current = null;
    // A cross-sell block that was not there when the position was saved pushes the content down by its height.
    const block = root.current?.querySelector<HTMLElement>(".ck-home__cross-sell");
    const blockTop = block ? block.getBoundingClientRect().top + window.scrollY : Infinity;
    const added = block && lastCrossSell.current !== state.crossSell && blockTop < state.y ? block.offsetHeight : 0;
    window.scrollTo(0, state.y + added);
  }, [productsReady]);

  useEffect(() => {
    track?.("page_view", { masthead: config.top.type, masthead_on: config.top.enabled !== false });
    // Once per page open.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // A new category or price means a new feed: scroll filter picks start over (decided 6 Oct).
  const pickedFromStack = useRef(false);
  const onSelectionChange = (next: HomeSelection) => {
    setChips({});
    pickedFromStack.current = true;
    changeSelection(next);
  };
  // A new category or price swaps the whole list. If the shopper picked it from the pinned stack deep in the page,
  // start them at the top of the new list, right under the stack, instead of somewhere in its middle.
  useLayoutEffect(() => {
    if (!pickedFromStack.current) return;
    pickedFromStack.current = false;
    const pills = root.current?.querySelector<HTMLElement>(".ck-home__pills");
    const list = pills?.nextElementSibling;
    if (!pills || !list) return;
    const gap = list.getBoundingClientRect().top - pills.getBoundingClientRect().bottom;
    if (gap < 0) window.scrollBy(0, gap);
  }, [selection.categoryId, selection.maxPrice]);
  const link = (href?: string) => (href && actions.openLink ? () => actions.openLink?.(href) : undefined);
  const openDeal = (deal: Deal, block: string, position: number) => {
    track?.("product_click", { block, position, category: deal.productCategory, deal_id: deal.id });
    rememberTap(deal);
    actions.openDeal?.(deal);
  };
  /** \`offset\` = products of the same feed already shown above, so positions run on across grids. */
  const cardActionsFor = (block: string, items: Deal[], offset = 0) => ({
    onDealSelect: actions.openDeal && ((deal: Deal) => openDeal(deal, block, offset + items.indexOf(deal) + 1)),
    onDealShare: actions.shareDeal,
    onGrabDeal:
      actions.grabDeal &&
      ((deal: Deal) => {
        track?.("grab_deal_click", { block, position: offset + items.indexOf(deal) + 1, category: deal.productCategory, deal_id: deal.id });
        rememberTap(deal);
        actions.grabDeal?.(deal);
      }),
  });
  const searchHints = config.top.type === "dealsStrip" ? (config.top.searchHints ?? STRIP_SEARCH_HINTS) : undefined;
  const topBar = <TopBar onBack={actions.back} onSearch={actions.search} searchHints={searchHints} />;

  const minRows = config.scrollFilterMinRows ?? DEFAULT_FILTER_MIN_ROWS;
  const feed = data.products;
  // Grids take products from the filtered feed in page order; each product shows once.
  const used = new Set<string>();
  const remaining = () => feed.items.filter((deal) => !used.has(deal.id));
  let rows = 0;
  let gridSeen = false;
  let active: ActiveChip;
  let pending: Extract<PageSection, { type: "scrollFilter" }>[] = [];
  let feedShown = 0;
  // Marks where a filter's segment ends, so its compact bar stops pinning there.
  const endSegment = (id: string) => shown.push(<div key={\`\${id}-end\`} data-filter-end="" aria-hidden="true" />);
  let crossSellCategory: string | undefined;
  // A host-matched cross-sell block waiting for the grid row of the product it was matched for. \`build\` gives the block as a
  // page section, or null when too few products are left for it.
  let crossPending: { forId: string; build: (marginTop: number, skip?: Set<string>) => ReactNode | null } | undefined;
  // Where the cross-sell section sits in the admin's order: the block goes here when its product is not in a grid.
  let crossAt = -1;
  const shown: ReactNode[] = [];

  // Host-matched cross-sell: found before the loop so it does not matter whether the admin lists the section before or after the
  // grids. It needs the section (for its wording and slot), the host's matches, and a loaded feed.
  const crossSection = config.sections.find((section) => section.type === "crossSell" && section.enabled !== false);
  const hostCross = crossSection && data.crossSell && feed.status === "ready" && data.crossSell.items.length >= CROSS_SELL_MIN ? data.crossSell : undefined;
  if (crossSection?.type === "crossSell" && hostCross) {
    const name = hostCross.categoryName ?? hostCross.items[0].productCategoryName ?? "this";
    const fill = (template: string | undefined, fallback: string) => (template ?? fallback).replace("{category}", name.toLowerCase());
    const build = (marginTop: number, skip?: Set<string>): ReactNode | null => {
      // Products already in the tapped row are left out so they are not suggested right under themselves, but never at the
      // cost of the block: if that leaves fewer than three, the host's full answer is used.
      const fresh = skip ? hostCross.items.filter((deal) => !skip.has(deal.id)) : hostCross.items;
      const deals = (fresh.length >= CROSS_SELL_MIN ? fresh : hostCross.items).slice(0, CROSS_SELL_MAX);
      if (deals.length < CROSS_SELL_MIN) return null;
      const cross = cardActionsFor(crossSection.id, deals);
      crossSellCategory = hostCross.forId;
      return (
        <div key={\`\${crossSection.id}-cross-sell\`} style={{ marginTop }} className="ck-home__section ck-home__cross-sell">
          <CrossSellSection
            title={fill(crossSection.titleTemplate, "View more {category}")}
            subtitle={fill(crossSection.subtitle, "Because you viewed {category} recently")}
            deals={deals}
            {...cross}
            onDealSelect={
              cross.onDealSelect &&
              ((deal: Deal) => {
                track?.("cross_sell_click", { category: name, for_deal: hostCross.forId, position: deals.indexOf(deal) + 1 });
                cross.onDealSelect?.(deal);
              })
            }
          />
        </div>
      );
    };
    // Under the row of the product when it is in a grid; otherwise at the section's own place (see after the loop).
    crossPending = { forId: hostCross.forId, build };
  }

  for (const section of config.sections) {
    if (section.enabled === false) continue;
    const gap = section.gapBefore ?? DEFAULT_GAP;
    const place = (key: string, node: ReactNode, marginTop = gap, className = "", id = section.id) =>
      shown.push(
        <div key={\`\${id}-\${key}\`} style={{ marginTop }} className={\`ck-home__section \${className}\`}>
          {node}
        </div>,
      );

    const placeFilter = (filter: Extract<PageSection, { type: "scrollFilter" }>) => {
      // A new filter starts a new segment; chips with nothing left to show are dropped.
      endSegment(filter.id);
      const pool = remaining();
      const visible = filter.chips.filter((chip) => pool.some((deal) => matchesChip(deal, { mode: filter.mode, chipId: chip.id })));
      active = undefined;
      if (!visible.length) return;
      const picked = visible.some((chip) => chip.id === chips[filter.id]) ? chips[filter.id] : undefined;
      if (picked) active = { mode: filter.mode, chipId: picked };
      const select = (chipId: string | undefined) => {
        setChips((prev) => ({ ...prev, [filter.id]: chipId }));
        track?.("scroll_filter_select", { mode: filter.mode, value: chipId ?? "none", filter_id: filter.id });
      };
      place("filter", <ScrollFilter mode={filter.mode} title={filter.title} chips={visible} selectedId={picked} onSelect={select} />, filter.gapBefore ?? DEFAULT_GAP, "", filter.id);
      // The compact bar must be a direct child of the page column so it can pin while the segment scrolls.
      shown.push(<ScrollFilterBar key={\`\${filter.id}-bar\`} title={filter.barTitle ?? filter.title} chips={visible} selectedId={picked} onSelect={select} />);
    };

    switch (section.type) {
      case "saleDeals": {
        const list = data.saleDeals;
        if (list.status === "loading" || list.items.length > 0)
          place(
            "strip",
            <SaleDealsStrip
              title={section.title}
              subtitle={section.subtitle}
              endsAt={section.endsAt}
              deals={list.items}
              loading={list.status === "loading"}
              {...cardActionsFor(section.id, list.items)}
            />,
          );
        break;
      }

      case "filters":
        place(
          "row",
          <CategoryRow
            categories={config.categories}
            selectedId={selection.categoryId}
            onSelect={(c) => onSelectionChange({ ...selection, categoryId: c.id })}
          />,
          undefined,
          "ck-home__category",
        );
        // Pinned to the top while the products scroll; Figma marks the pills sticky.
        place(
          "pills",
          <PricePills
            amounts={config.priceAmounts}
            selected={selection.maxPrice}
            onSelect={(maxPrice) => onSelectionChange({ ...selection, maxPrice })}
          />,
          PILLS_GAP - PILLS_PAD,
          "ck-home__pills",
        );
        break;

      case "productGrid": {
        const first = !gridSeen;
        gridSeen = true;
        const marginTop = first ? PILLS_GAP - PILLS_PAD : gap;
        // Only the first grid shows loading, empty and error; later grids just take what is left.
        if (first && feed.status !== "ready") {
          place("grid", <ProductGrid deals={[]} status={feed.status} onRetry={actions.retryProducts} />, marginTop, "ck-home__grid");
          break;
        }
        let budget = section.count ?? Infinity;
        const placeSlice = (key: string, part: Deal[], top: number) => {
          place(key, <ProductGrid deals={part} {...cardActionsFor(section.id, part, feedShown)} />, top, "ck-home__grid");
          feedShown += part.length;
        };
        const placeGrid = (key: string, limit: number, top: number) => {
          const pool = remaining().filter((deal) => matchesChip(deal, active));
          const slice = pool.slice(0, Math.min(limit, budget));
          slice.forEach((deal) => used.add(deal.id));
          budget -= slice.length;
          rows += Math.ceil(slice.length / 2);
          // The cross-sell block goes right under the row of the product it was matched for: the shopper closes the product
          // and finds its matches where they left it.
          const at = crossPending ? slice.findIndex((deal) => deal.id === crossPending!.forId) : -1;
          if (at >= 0 && crossPending) {
            const cut = Math.min(slice.length, at - (at % 2) + 2);
            placeSlice(key, slice.slice(0, cut), top);
            const block = crossPending.build(DEFAULT_GAP, new Set(slice.slice(at - (at % 2), cut).map((deal) => deal.id)));
            crossPending = undefined;
            if (block) shown.push(block);
            if (cut < slice.length) placeSlice(\`\${key}-after-cross-sell\`, slice.slice(cut), block ? DEFAULT_GAP : gap);
            return;
          }
          if (slice.length || (first && key === "grid")) placeSlice(key, slice, top);
        };
        // A filter held back behind an earlier one gets its own place at the start of the next grid.
        if (pending.length && rows >= minRows) placeFilter(pending.shift()!);
        if (pending.length && rows < minRows) {
          // A filter is waiting for rows: fill up to the row limit, show the filter there, then the rest of the grid under it.
          placeGrid("grid", (minRows - rows) * 2, marginTop);
          if (rows >= minRows) {
            // Only the first held filter goes here; any others wait for the next grid, so each keeps a segment.
            placeFilter(pending.shift()!);
            placeGrid("grid-rest", Infinity, DEFAULT_GAP);
          }
        } else {
          placeGrid("grid", Infinity, marginTop);
        }
        break;
      }

      case "scrollFilter":
        if (feed.status !== "ready") break;
        if (rows < minRows) pending.push(section);
        else placeFilter(section);
        break;

      case "crossSell": {
        const titleOf = (template: string | undefined, fallback: string, name: string) =>
          (template ?? fallback).replace("{category}", name.toLowerCase());
        // A host-matched block is built before the loop (it must be ready when its grid row is placed); here it only marks
        // its own place in the admin's order, for when the product is not in a grid.
        if (hostCross) {
          crossAt = shown.length;
          break;
        }
        // The host answered and too few products fit (an empty list counts): no block. The page's own pick from the feed is only
        // for hosts that do not match products themselves.
        if (data.crossSell) break;
        if (!memory || feed.status !== "ready") break;
        const pool = remaining().filter((deal) => deal.productCategory === memory.categoryId && deal.id !== memory.productId);
        if (pool.length < CROSS_SELL_MIN) break;
        const deals = pool.slice(0, CROSS_SELL_MAX);
        deals.forEach((deal) => used.add(deal.id));
        const name = memory.categoryName ?? deals[0].productCategoryName ?? memory.categoryId;
        crossSellCategory = memory.categoryId;
        const cross = cardActionsFor(section.id, deals);
        place(
          "cross-sell",
          <CrossSellSection
            title={titleOf(section.titleTemplate, "View more {category}", name)}
            subtitle={titleOf(section.subtitle, "Because you viewed {category} recently", name)}
            deals={deals}
            {...cross}
            onDealSelect={
              cross.onDealSelect &&
              ((deal: Deal) => {
                track?.("cross_sell_click", { category: memory.categoryId, position: deals.indexOf(deal) + 1 });
                cross.onDealSelect?.(deal);
              })
            }
          />,
          gap,
          "ck-home__cross-sell",
        );
        break;
      }

      case "bestDeals": {
        // The admin's list wins. With none, Top Deals gets the mix and a picked category gets its own first deals.
        let deals = data.bestDeals.items;
        let loading = data.bestDeals.status === "loading";
        if (!loading && deals.length === 0) {
          const source = data.mixPool ?? data.products;
          loading = source.status === "loading";
          if (source.status === "ready") {
            const showsAll = selectionToFilter(selection, config.categories).categoryId === undefined;
            if (showsAll) deals = pickMixDeals(source.items, { key: String(selection.maxPrice), maxPrice: selection.maxPrice });
            else deals = data.products.items.length >= MIX_MIN ? data.products.items.slice(0, MIX_COUNT) : [];
          }
        }
        if (loading || deals.length > 0)
          place(
            "carousel",
            <BestDealsCarousel title={section.title} deals={deals} loading={loading} {...cardActionsFor(section.id, deals)} />,
            gap,
            "ck-home__best-deals",
          );
        break;
      }

      case "brandBanner":
        place(
          "banner",
          <BrandBanner
            logo={section.logo}
            brandName={section.brandName}
            headline={section.headline}
            subline={section.subline}
            art={section.art}
            onSelect={link(section.href)}
          />,
          gap,
          "ck-home__banner",
        );
        break;

      case "footer":
        place("footer", <PageFooter title={section.title} subtitle={section.subtitle} />);
        break;
    }
  }

  // The product the block was matched for was in no grid (opened from the top strip, a filter hides it, or the grids ran out
  // before it): the block takes the cross-sell section's own place instead.
  if (crossPending && crossSection) {
    const block = crossPending.build(crossSection.gapBefore ?? DEFAULT_GAP);
    if (block) shown.splice(crossAt >= 0 ? crossAt : shown.length, 0, block);
  }

  // The block appears when the page is shown again. If it lands above what the shopper is looking at,
  // move the scroll by its height so the content on screen does not jump (iOS webviews have no scroll anchoring).
  useLayoutEffect(() => {
    const before = lastCrossSell.current;
    lastCrossSell.current = crossSellCategory;
    const first = firstCommit.current;
    firstCommit.current = false;
    // On the first render the scroll restore accounts for the block.
    if (first || !crossSellCategory || before === crossSellCategory) return;
    const block = root.current?.querySelector<HTMLElement>(".ck-home__cross-sell");
    if (block && block.getBoundingClientRect().bottom <= 0) window.scrollBy(0, block.offsetHeight);
  }, [crossSellCategory]);

  // Back from a product, the block sits right under its row, often half below the screen. Scroll just far enough that all of it
  // shows, but never so far that it runs up under the pinned category strip and pills. Once for each time the host asked.
  const revealKey = crossSellCategory && data.crossSell?.at ? \`\${data.crossSell.forId}:\${data.crossSell.at}\` : undefined;
  const revealed = useRef<string | undefined>(undefined);
  useEffect(() => {
    if (!revealKey || revealed.current === revealKey) return;
    let frame = 0;
    // Two frames: after a restored scroll position has been applied and the block has been laid out.
    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => {
        // Marked done only once it has run, so a key that flickers away and back before then still gets its scroll.
        revealed.current = revealKey;
        const block = root.current?.querySelector<HTMLElement>(".ck-home__cross-sell");
        if (!block) return;
        // What is pinned at the top: the category strip and pills, and the compact filter bar when one is showing under them.
        const pills = root.current?.querySelector<HTMLElement>(".ck-home__pills");
        let stackBottom = Math.max(0, pills?.getBoundingClientRect().bottom ?? 0);
        root.current?.querySelectorAll<HTMLElement>(".ck-filter-bar").forEach((bar) => {
          if (getComputedStyle(bar).visibility === "visible") stackBottom = Math.max(stackBottom, bar.getBoundingClientRect().bottom);
        });
        const rect = block.getBoundingClientRect();
        const toShowAll = rect.bottom + REVEAL_BOTTOM_GAP - window.innerHeight;
        const beforeStack = rect.top - (stackBottom + REVEAL_TOP_GAP);
        const by = Math.min(toShowAll, beforeStack);
        if (by < REVEAL_MIN_SCROLL) return;
        const still = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
        window.scrollBy({ top: by, behavior: still ? "auto" : "smooth" });
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [revealKey]);

  useEffect(() => {
    if (crossSellCategory) track?.("cross_sell_view", { category: crossSellCategory });
    // Once each time the block appears for a category.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [crossSellCategory]);

  // Masthead taps are tracked, then follow their link.
  const topLink = (href?: string, event: HomeEvent = "masthead_click") => {
    const go = link(href);
    return go && (() => {
      track?.(event, event === "masthead_click" ? { type: config.top.type, target: href } : { block: "masthead", target: href });
      go();
    });
  };
  const mastheadPosition = (deal: Deal) => {
    for (const list of Object.values(data.lists)) {
      const i = list.items.indexOf(deal);
      if (i >= 0) return i + 1;
    }
    return 0;
  };
  const topActions: HomePageActions = {
    ...actions,
    openDeal: actions.openDeal && ((deal: Deal) => openDeal(deal, "masthead", mastheadPosition(deal))),
  };
  // The compact filter bar pins under the price pills; with no pills on the page it pins at the top.
  const hasPills = config.sections.some((section) => section.type === "filters" && section.enabled !== false);

  return (
    <div ref={root} className="ck-home" style={hasPills ? undefined : ({ "--ck-pills-sticky-h": "0px", "--ck-category-h": "0px" } as CSSProperties)}>
      {config.top.enabled === false ? (
        topBar
      ) : (
        <TopSectionView top={config.top} lists={data.lists} topBar={topBar} actions={topActions} link={topLink} />
      )}
      {shown}
      <ScrollTopButton onClick={() => track?.("scroll_top_click", { from_y: Math.round(window.scrollY) })} />
    </div>
  );
}

type TopSectionViewProps = {
  top: TopSection;
  lists: Record<string, DealList>;
  topBar: ReactNode;
  actions: HomePageActions;
  link: (href?: string, event?: HomeEvent) => (() => void) | undefined;
};

function TopSectionView({ top, lists, topBar, actions, link }: TopSectionViewProps) {
  switch (top.type) {
    case "categorySale":
      return (
        <CategorySaleHero
          title={top.title}
          subtitle={top.subtitle}
          tiles={top.tiles}
          background={top.background}
          topBar={topBar}
          onTileSelect={(tile) => link((tile as { href?: string }).href)?.()}
        />
      );
    case "themeCards":
      return (
        <ThemeCardsHero
          cards={top.cards.map((card) => {
            const list = lists[card.listId] ?? EMPTY;
            return { ...card, deals: list.items, loading: list.status === "loading" };
          })}
          onCardSelect={(card) => link((card as { href?: string }).href)?.()}
          onDealSelect={actions.openDeal}
          background={top.background}
          topBar={topBar}
        />
      );
    case "brandSlides":
      return (
        <BrandSlidesHero
          title={top.title}
          subtitle={top.subtitle}
          slides={top.slides}
          background={top.background}
          onSlideSelect={(slide) => link((slide as { href?: string }).href)?.()}
          topBar={topBar}
        />
      );
    case "dealsStrip": {
      const list = lists[top.listId] ?? EMPTY;
      return (
        <DealsStripHero
          titleArt={top.titleArt}
          titleAlt={top.titleAlt}
          liveDot={top.liveDot}
          deals={list.items}
          loading={list.status === "loading"}
          viewAllLabel={top.viewAllLabel}
          showViewAll={top.viewAll !== false && link(top.viewAllHref) !== undefined}
          onViewAll={link(top.viewAllHref, "view_more_click")}
          background={top.background}
          onDealSelect={actions.openDeal}
          topBar={topBar}
        />
      );
    }
  }
}
`,Tv=`import { ProductDetail } from "./ProductDetail";
import type { BookEntry } from "../../book/types";
import { sampleProductDetail as d } from "../../data/samples";

const entry: BookEntry = {
  title: "ProductDetail",
  feature: "Pages",
  description:
    "Product detail sheet, built from the Figma frames 671:39589 (four tiles), 703:47781 (three), 703:47551 (one) and 485:7487 (opened short, footer pinned). Blocks with no data drop out with the break above them.",
  stories: [
    { name: "four price tiles", render: () => <ProductDetail detail={d} footer={false} /> },
    { name: "three price tiles", render: () => <ProductDetail detail={{ ...d, stats: d.stats.slice(0, 3) }} footer={false} /> },
    { name: "one price tile", render: () => <ProductDetail detail={{ ...d, stats: d.stats.slice(0, 1) }} footer={false} /> },
    { name: "opened short, Grab deal pinned (485:7487)", render: () => <ProductDetail detail={d} height={625} /> },
    { name: "lowest price badge: price 4% above the low (shown)", render: () => <ProductDetail detail={{ ...d, price: 1299, lowestPrice: 1249 }} footer={false} /> },
    { name: "lowest price badge: price 6% above the low (hidden)", render: () => <ProductDetail detail={{ ...d, price: 1299, lowestPrice: 1225 }} footer={false} /> },
    { name: "price only: no history, summary, terms or similar", render: () => <ProductDetail detail={{ ...d, stats: [], aiSummary: [], terms: [], similar: [], ribbon: undefined, lowestPrice: undefined }} /> },
  ],
};
export default entry;
`,Lv=`/* Page layout only: order and gaps. The sheet is 16px from its top to the photo, 16px from photo to the title. */
.ck-product-detail__rest { display: flex; width: var(--ck-page-w); flex-direction: column; align-items: center; gap: var(--ck-space-md); margin-top: var(--ck-space-md); }
.ck-product-detail__block { display: flex; flex-direction: column; align-items: center; gap: var(--ck-space-md); }
`,Fv=`import type { ReactNode } from "react";
import type { Deal } from "../../data/deal";
import { nearLowestPrice, type ProductDetail as ProductDetailData } from "../../data/productDetail";
import { Accordion, AccordionBullets } from "../../components/Accordion/Accordion";
import { AiSummary } from "../../components/AiSummary/AiSummary";
import { PdpFooter } from "../../components/PdpFooter/PdpFooter";
import { PdpHero } from "../../components/PdpHero/PdpHero";
import { PdpPriceBlock } from "../../components/PdpPriceBlock/PdpPriceBlock";
import { PdpSheet } from "../../components/PdpSheet/PdpSheet";
import { PriceStats } from "../../components/PriceStats/PriceStats";
import { SectionBreak } from "../../components/SectionBreak/SectionBreak";
import { SimilarDeals } from "../../components/SimilarDeals/SimilarDeals";
import "./ProductDetail.css";

export interface ProductDetailProps {
  detail: ProductDetailData;
  /** Sheet height in px; the body scrolls inside it. Without it the sheet is as tall as its content. */
  height?: number;
  /** Shows the pinned "Grab deal" bar. Default true. */
  footer?: boolean;
  onClose?: () => void;
  onShare?: () => void;
  onGrab?: () => void;
  onSimilarSelect?: (deal: Deal) => void;
  onSimilarShare?: (deal: Deal) => void;
  onSimilarGrab?: (deal: Deal) => void;
  /** The AI summary's accordion opened (true) or closed (false). */
  onSummaryToggle?: (open: boolean) => void;
}

/**
 * Product detail sheet: photo, price, price history tiles, AI summary, cashback terms and similar deals.
 * Blocks with no data are left out together with the grey break above them.
 */
export function ProductDetail({
  detail,
  height,
  footer = true,
  onClose,
  onShare,
  onGrab,
  onSimilarSelect,
  onSimilarShare,
  onSimilarGrab,
  onSummaryToggle,
}: ProductDetailProps) {
  /** \`breaks\`: grey breaks above the block. Figma has two above the cashback terms, with a thin white strip between. */
  const blocks: { key: string; node: ReactNode; breaks?: number }[] = [];
  if (detail.stats.length) blocks.push({ key: "stats", node: <PriceStats stats={detail.stats} /> });
  if (detail.aiSummary?.length)
    blocks.push({
      key: "ai",
      node: <AiSummary points={detail.aiSummary} description={detail.description} specs={detail.specs} onToggle={onSummaryToggle} />,
    });
  if (detail.terms?.length)
    blocks.push({
      key: "terms",
      breaks: 2,
      node: (
        <Accordion variant="row" title="CashKaro cashback terms">
          <AccordionBullets items={detail.terms} />
        </Accordion>
      ),
    });
  if (detail.similar.length)
    blocks.push({
      key: "similar",
      node: <SimilarDeals deals={detail.similar} onDealSelect={onSimilarSelect} onDealShare={onSimilarShare} onGrabDeal={onSimilarGrab} />,
    });

  return (
    <PdpSheet onClose={onClose} height={height} footer={footer ? <PdpFooter onGrab={onGrab} /> : undefined}>
      <PdpHero
        image={detail.image}
        imageAlt={detail.imageAlt ?? detail.title}
        ribbon={detail.ribbon}
        rating={detail.rating}
        lowestPrice={nearLowestPrice(detail.price, detail.lowestPrice) ? detail.lowestPrice : undefined}
        onShare={onShare}
      />
      <div className="ck-product-detail__rest">
        <PdpPriceBlock title={detail.title} price={detail.price} usually={detail.usually} note={detail.note} offer={detail.offer} />
        {blocks.map((block, i) => (
          <div key={block.key} className="ck-product-detail__block">
            {Array.from({ length: block.breaks ?? 1 }, (_, b) => (
              <SectionBreak key={b} height={i === 0 && b === 0 ? 30 : 29} />
            ))}
            {block.node}
          </div>
        ))}
      </div>
    </PdpSheet>
  );
}
`,Iv=`import { ProductGrid } from "./ProductGrid";
import type { BookEntry } from "../../book/types";
import { sampleProducts } from "../../data/samples";

const onWhite = (child: JSX.Element) => <div style={{ background: "#fff", padding: "13px 16px" }}>{child}</div>;
const long = sampleProducts.slice(0, 2).map((d) => ({ ...d, name: "3-in-1 Floor Cleaning Brush with Wiper, Scrubber and Extra Long Handle" }));

const entry: BookEntry = {
  title: "ProductGrid",
  feature: "Product listing",
  description: "Two-column grid of main cards used on every home page, with loading, empty and error states.",
  stories: [
    { name: "four products", render: () => onWhite(<ProductGrid deals={sampleProducts.slice(0, 4)} />) },
    { name: "one product", render: () => onWhite(<ProductGrid deals={sampleProducts.slice(0, 1)} />) },
    { name: "many products", render: () => onWhite(<ProductGrid deals={sampleProducts.slice(0, 10)} />) },
    { name: "long titles", render: () => onWhite(<ProductGrid deals={long} />) },
    { name: "loading", render: () => onWhite(<ProductGrid deals={[]} status="loading" />) },
    { name: "empty", render: () => onWhite(<ProductGrid deals={[]} />) },
    { name: "error", render: () => onWhite(<ProductGrid deals={[]} status="error" onRetry={() => {}} />) },
  ],
};
export default entry;
`,Mv=`.ck-grid { display: grid; width: 328px; grid-template-columns: var(--ck-card-w-main) var(--ck-card-w-main); gap: var(--ck-space-xl); }
`,Rv=`import { ProductCard } from "../../components/ProductCard/ProductCard";
import { StatusMessage } from "../../components/StatusMessage/StatusMessage";
import { cardProps, type Deal, type DealList } from "../../data/deal";
import "./ProductGrid.css";

export interface ProductGridProps {
  deals: Deal[];
  /** loading shows four placeholder cards; error shows a retry message; ready with no deals shows the empty message. */
  status?: DealList["status"];
  onRetry?: () => void;
  onDealSelect?: (deal: Deal) => void;
  onDealShare?: (deal: Deal) => void;
  onGrabDeal?: (deal: Deal) => void;
}

/** Two columns of main cards, 12px apart both ways (328px wide). */
export function ProductGrid({ deals, status = "ready", onRetry, onDealSelect, onDealShare, onGrabDeal }: ProductGridProps) {
  if (status === "error") return <StatusMessage kind="error" onRetry={onRetry} />;
  if (status === "ready" && deals.length === 0) return <StatusMessage kind="empty" />;

  return (
    <div className="ck-grid">
      {status === "loading"
        ? Array.from({ length: 4 }, (_, i) => <ProductCard key={i} variant="main" {...cardProps(PLACEHOLDER)} loading />)
        : deals.map((deal) => (
            <ProductCard
              key={deal.id}
              variant="main"
              {...cardProps(deal)}
              onSelect={onDealSelect && (() => onDealSelect(deal))}
              onShare={onDealShare && (() => onDealShare(deal))}
              onGrab={onGrabDeal && (() => onGrabDeal(deal))}
            />
          ))}
    </div>
  );
}

const PLACEHOLDER: Deal = { id: "loading", brand: "", name: "", store: "", price: 0, mrp: 0 };
`,zv=`/* Design tokens for the CashKaro deals surface.
   Values are read from the Figma file 7bnUFt6oirFREcC0WqyNiL ("deals") through the Figma MCP:
   page "homapge", section "homepage" (the four home page types) and the "product card" frame (733:62432). */

@import "@fontsource/metropolis/300.css";
@import "@fontsource/metropolis/400.css";
@import "@fontsource/metropolis/500.css";
@import "@fontsource/metropolis/600.css";
@import "@fontsource/metropolis/700.css";
@import "@fontsource/metropolis/800.css";
@import "@fontsource/metropolis/900.css";
@import "@fontsource/metropolis/500-italic.css";
@import "@fontsource/metropolis/600-italic.css";
/* Outfit sets the NEW ribbon and Grab Deal labels. Neither face has the ₹ sign; it comes from the device sans-serif. */
@import "@fontsource/outfit/400.css";
@import "@fontsource/outfit/500.css";
@import "@fontsource/outfit/600.css";
@import "@fontsource/outfit/700.css";
@import "@fontsource/outfit/900.css";
/* Single-use faces, Latin subset only: the page 1 subtitle, the page 3 headline, the "%" tickets. */
@import "@fontsource/chiron-goround-tc/latin-500.css";
@import "@fontsource/alkatra/latin-700.css";
@import "@fontsource/nunito-sans/latin-900.css";

:root {
  /* Fonts */
  --ck-font-family: "Metropolis", "Outfit", sans-serif;
  --ck-font-outfit: "Outfit", sans-serif;
  --ck-font-chiron: "Chiron GoRound TC", "Outfit", sans-serif;
  --ck-font-alkatra: "Alkatra", sans-serif;
  --ck-font-nunito: "Nunito Sans", sans-serif;

  /* Type sizes */
  --ck-text-2xs: 8px;
  --ck-text-xs: 9px;
  --ck-text-sm: 10px;
  --ck-text-md: 12px;
  --ck-text-lg: 14px;
  --ck-text-xl: 16px;
  --ck-text-stat: 18px;
  --ck-text-2xl: 20px;
  --ck-text-3xl: 22px;
  --ck-text-4xl: 24px;
  --ck-text-5xl: 32px;
  --ck-text-6xl: 44px;

  /* Core colours */
  --ck-color-surface: #ffffff;
  --ck-color-image-bg: #f2f2f2;
  --ck-color-text: #1f1f29;
  --ck-color-text-strong: #000000;
  --ck-color-text-muted: #626176;
  --ck-color-accent: #ff6d1d; /* Figma style "CK Orange" */
  --ck-color-on-accent: #ffffff;
  --ck-color-positive: #6c9b03;
  --ck-color-cashback: #587f01;
  --ck-color-border-faint: rgba(0, 0, 0, 0.02);
  --ck-color-glass-border: rgba(255, 255, 255, 0.12);
  --ck-gradient-discount: linear-gradient(97.14deg, rgba(221, 243, 161, 0) 11.576%, rgba(111, 145, 18, 0.2) 98.125%);
  --ck-gradient-discount-second: linear-gradient(98.63deg, rgba(221, 243, 161, 0) 11.576%, rgba(111, 145, 18, 0.2) 98.125%);

  /* Radii */
  --ck-radius-chip: 4px;
  --ck-radius-tag: 6px;
  --ck-radius-image: 8px;
  --ck-radius-button-sm: 10px;
  --ck-radius-button: 11px;
  --ck-radius-card: 12px;
  --ck-radius-image-lg: 12px;
  --ck-radius-card-lg: 14px;
  --ck-radius-banner: 16px;
  --ck-radius-panel: 20px;
  --ck-radius-section: 24px;
  --ck-radius-sheet: 32px;
  --ck-radius-pill: 1000px;

  /* Spacing */
  --ck-space-xs: 4px;
  --ck-space-sm: 6px;
  --ck-space-md: 8px;
  --ck-space-lg: 10px;
  --ck-space-xl: 12px;
  --ck-space-2xl: 16px;
  --ck-space-3xl: 20px;

  /* Shadows */
  --ck-shadow-card: 0px 8px 4px rgba(0, 0, 0, 0.05); /* used with filter: drop-shadow() */
  --ck-shadow-tile: 0px 28px 8px 0px rgba(0, 0, 0, 0), 0px 18px 7px 0px rgba(0, 0, 0, 0.01),
    0px 10px 6px 0px rgba(0, 0, 0, 0.05), 0px 4px 4px 0px rgba(0, 0, 0, 0.09), 0px 1px 2px 0px rgba(0, 0, 0, 0.1);

  /* Component sizes */
  --ck-page-w: 360px;
  --ck-card-w-masthead: 116px;
  --ck-card-w-main: 158px;
  --ck-card-w-horizontal: 213px;
  --ck-card-w-cross-sell: 212px;
  --ck-card-w-second: 141px;

  /* Page type 1: purple category sale zone */
  --ck-sale-zone-bg: #8d08ed;
  --ck-sale-zone-fade: linear-gradient(180deg, rgba(131, 0, 240, 0) 63.552%, #8300f0 93.878%);
  --ck-sale-zone-scrim: linear-gradient(180deg, #b642fe 0%, rgba(182, 66, 254, 0.88) 33.185%,
      rgba(182, 66, 254, 0.551) 50.682%, rgba(182, 66, 254, 0) 78.097%);
  /* Figma puts the strings at the very top; this drops them below the search bar */
  --ck-lights-offset: 28px;
  --ck-lights-halo: radial-gradient(circle, rgba(254, 207, 75, 0.7) 0%, rgba(252, 144, 48, 0.35) 30%, rgba(252, 144, 48, 0) 70%);
  --ck-lights-bulb: radial-gradient(circle, #fffff0 0%, #fffff0 30%, #fecf4b 46%, #fc9030 60%, rgba(147, 84, 28, 0) 100%);
  --ck-tile-strip: #fa3f93;
  --ck-tile-chip: #fd177e;

  /* Sale Deals strip */
  --ck-sale-deals-bg: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.88) 26.578%, #fff9eb 47.227%, #ffe198 100%);
  --ck-sale-deals-fade: linear-gradient(180deg, rgba(255, 225, 149, 0) 0%, #ffe195 83.631%);
  --ck-sale-deals-title: linear-gradient(180deg, #0ac800, #029c4b);
  --ck-countdown: #fe1f83;
  --ck-indicator-track: rgba(0, 0, 0, 0.12);
  --ck-indicator-thumb-shadow: 1px 0px 1px 0px rgba(0, 0, 0, 0.09);

  /* Category row and price pills */
  --ck-category-row-bg: #e9e9e9;
  --ck-category-active: #f64a00;
  --ck-pill-on-bg: #201e2f;
  --ck-pill-on-border: rgba(255, 255, 255, 0.22);
  --ck-pill-on-text: rgba(255, 255, 255, 0.9);
  --ck-pill-off-border: #d5daea;
  --ck-pill-off-text: #373e58;

  /* Best deals carousel */
  --ck-best-deals-bg: linear-gradient(180deg, #ddf3a1 0%, rgba(255, 255, 255, 0) 95.961%);
  --ck-dots-active: #e99083;
  --ck-dots-idle: rgba(0, 0, 0, 0.18);
  --ck-dots-shadow: 0px 17px 3.5px rgba(0, 0, 0, 0.01), 0px 9px 3px rgba(0, 0, 0, 0.03), 0px 4px 2px rgba(0, 0, 0, 0.04),
    0px 1px 1px rgba(0, 0, 0, 0.05);

  /* Brand banner (Nykaa) */
  --ck-banner-bg: linear-gradient(125.32deg, #eb599a 0%, #c782b2 98.697%);
  --ck-banner-logo-border: #f5f7f9;

  /* Footer */
  --ck-footer-text: #f8c68b;

  /* Page type 2: theme cards */
  --ck-theme-bg: linear-gradient(180deg, #a4d8fd 0%, #bee3fd 16.346%, #daf1ff 67.323%, #fff 100%);
  --ck-theme-burn: linear-gradient(180deg, #2962ff, rgba(25, 59, 153, 0));
  --ck-theme-sky: linear-gradient(180deg, rgba(5, 156, 253, 0.958) 0%, rgba(5, 156, 253, 0.88) 32.4%,
      rgba(5, 156, 253, 0.551) 58.7%, rgba(5, 156, 253, 0) 100%);
  --ck-price-list-bg: linear-gradient(180deg, #ff4b87, #b21f50);
  --ck-price-list-shadow: 0px 102px 41px 0px rgba(249, 6, 67, 0.01), 0px 57px 34px 0px rgba(249, 6, 67, 0.03),
    0px 25px 25px 0px rgba(249, 6, 67, 0.04), 0px 6px 14px 0px rgba(249, 6, 67, 0.05);
  --ck-spotlight-bg: #49b600;
  --ck-spotlight-border: rgba(0, 0, 0, 0.12);
  --ck-spotlight-shadow: 0px 88px 35px 0px rgba(103, 163, 0, 0.01), 0px 50px 30px 0px rgba(103, 163, 0, 0.05),
    0px 22px 22px 0px rgba(103, 163, 0, 0.09), 0px 6px 12px 0px rgba(103, 163, 0, 0.1);
  --ck-flash-bg: linear-gradient(180deg, #2687ff, #0646f6);
  --ck-flash-border: rgba(41, 98, 255, 0.36);
  --ck-flash-shadow: 0px 135px 54px 0px rgba(255, 182, 26, 0.01), 0px 76px 46px 0px rgba(255, 182, 26, 0.05),
    0px 34px 34px 0px rgba(255, 182, 26, 0.09), 0px 8px 19px 0px rgba(255, 182, 26, 0.1);
  --ck-flash-tag: #dc0000;
  --ck-photo-border: rgba(0, 0, 0, 0.14);
  --ck-text-on-dark-muted: rgba(255, 255, 255, 0.7);
  --ck-placeholder-on-dark: rgba(255, 255, 255, 0.2); /* loading rows, not in Figma */
  --ck-theme-rays-fade: linear-gradient(180deg, rgba(255, 255, 255, 0), #fff);

  /* Page type 3: brand slides */
  --ck-slides-bg: radial-gradient(341.71px 295.2px at 180px 15.797px, #78cbff 4.53%, #5a9beb 28.4%, #3c6bd6 52.27%,
      #2d53cc 64.2%, #1e3cc2 76.13%, #0f24b7 88.07%, #0818b2 94.03%, #000cad 100%);
  --ck-slide-bg: radial-gradient(138.59px 52.71px at 123.47px 58px, #fbe8bb 21.38%, #fcd983 60.69%, #feca4c 100%);

  /* Page type 4: deals strip, night sky (Figma 1227:52155) */
  --ck-strip-night-bg: #1a0357;
  --ck-indicator-track-dark: rgba(0, 0, 0, 0.24);
  /* Frosted search bar over a masthead (Figma 1227:52748) */
  --ck-topbar-glass: rgba(240, 240, 240, 0.2);
  --ck-topbar-glass-border: rgba(64, 64, 64, 0.5);
  --ck-topbar-glass-button: rgba(255, 255, 255, 0.1);
  --ck-topbar-glass-text: rgba(255, 255, 255, 0.65);
  --ck-topbar-glass-shadow: -42px 103px 31px 0px rgba(145, 145, 145, 0), -27px 66px 29px 0px rgba(145, 145, 145, 0.01), -15px 37px 24px 0px rgba(145, 145, 145, 0.03), -7px 17px 18px 0px rgba(145, 145, 145, 0.04), -2px 4px 10px 0px rgba(145, 145, 145, 0.05);
  --ck-strip-night-scrim: linear-gradient(0deg, rgba(32, 5, 90, 0) 7.432%, rgba(32, 5, 90, 0.551) 37.895%, rgba(32, 5, 90, 0.88) 58.306%, rgb(32, 5, 90) 100%);
  --ck-view-all-text: #ec476c;
}

/* Base for every ck- component, so they render the same in any host page.
   :where() keeps it at zero specificity, so component classes always win. */
:where([class^="ck-"], [class*=" ck-"]),
:where([class^="ck-"], [class*=" ck-"]) *,
:where([class^="ck-"], [class*=" ck-"]) ::before,
:where([class^="ck-"], [class*=" ck-"]) ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
}
:where([class^="ck-"], [class*=" ck-"]) img {
  display: block;
  max-width: 100%;
  height: auto;
}
:where([class^="ck-"], [class*=" ck-"]) button,
:where(button[class^="ck-"], button[class*=" ck-"]) {
  font: inherit;
  letter-spacing: inherit;
  color: inherit;
  background-color: transparent;
  border-radius: 0;
}

/* Trims a single line of text to its cap height, as Figma's text box trim does. */
.ck-trim {
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
}

/* Scroll filter (Figma 777:94664 sub-category, 777:95718 on scroll) */
:root {
  --ck-filter-heading: #303030;
  --ck-filter-tab-text: #373e58;
  --ck-filter-tab-on: #294ec7;
  --ck-filter-outline: #1139be;
  --ck-filter-line: linear-gradient(90deg, #1139be 10%, rgba(78, 117, 246, 0) 100%);
  /* Where the pinned stack starts. A host that draws its own bar over the top of the page sets this to that bar's height. */
  --ck-stack-top: 0px;
  /* The category strip pins to the top of the page; drawn at 85% of Figma's 360x115 */
  --ck-category-scale: 0.85;
  --ck-category-h: calc(115px * var(--ck-category-scale));
  /* The sticky price pills: 36px pills plus 6px white above and below. The compact filter bar sticks under them. */
  --ck-pills-sticky-h: 48px;
  /* Compact bar sizes: Figma's on-scroll tabs are 52.16 x 35.85 and its labels 9px. */
  --ck-filter-bar-h: 70px;
  --ck-filter-tab-w: 99.503px;
  --ck-filter-tab-h: 68.376px;
  --ck-filter-bar-tab-w: 52.164px;
  --ck-filter-bar-tab-h: 35.845px;
}

:root {
  /* Used by the outlined "View All" button and the line dots, which outlived the old purple cross-sell block */
  --ck-outline-button-border: rgba(255, 255, 255, 0.35);
  --ck-cross-sell-dot-off: rgba(255, 255, 255, 0.21);
}

/* Product detail sheet (Figma 496:7687) */
:root {
  --ck-pdp-surface: #f1f0f5;
  /* Cross-sell section and its card (Figma 777:86926) */
  --ck-cross-sell-bg: linear-gradient(180deg, #ffffff 0%, #ffbd8e 100%);
  --ck-cross-sell-title: #000f3d;
  --ck-cross-sell-name: #3d3d3d;
  --ck-cross-sell-mrp: #979797;
  --ck-cross-sell-off: #81b50d;
  --ck-shadow-cross-sell: 0px 8px 8px rgba(0, 0, 0, 0.05);
  /* Back-to-top button (not in Figma yet) */
  --ck-scroll-top-bg: rgba(31, 31, 41, 0.88);
  --ck-scroll-top-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  /* AI summary card: a slight blue tinge (not in Figma yet) */
  --ck-ai-bg: linear-gradient(180deg, #edf3ff 0%, #f6f9ff 100%);
  --ck-ai-border: #dce6ff;
  --ck-ai-divider: rgba(47, 91, 211, 0.12);
  --ck-ai-accent: #2f5bd3;
  --ck-pdp-title: #383852;
  --ck-pdp-muted: #a1a0ad;
  --ck-pdp-label: #828192;
  --ck-pdp-close-bg: rgba(0, 0, 0, 0.49);
  --ck-pdp-rating-fade: linear-gradient(90deg, #ddf3a1 4.439%, rgba(221, 243, 161, 0) 103.06%);
  --ck-pdp-footer-shadow: 0px -60px 17px 0px rgba(0, 0, 0, 0), 0px -39px 15px 0px rgba(0, 0, 0, 0.01), 0px -22px 13px 0px rgba(0, 0, 0, 0.03), 0px -10px 10px 0px rgba(0, 0, 0, 0.04), 0px -2px 5px 0px rgba(0, 0, 0, 0.05);
  --ck-radius-hero: 28px;
  --ck-pdp-dot: #626176;
}
`,Ov=Object.assign({"/src/components/Accordion/Accordion.book.tsx":af,"/src/components/AiSummary/AiSummary.book.tsx":cf,"/src/components/BestDealsCarousel/BestDealsCarousel.book.tsx":Cf,"/src/components/BrandBanner/BrandBanner.book.tsx":Bf,"/src/components/BrandSlide/BrandSlide.book.tsx":Ef,"/src/components/BrandSlidesHero/BrandSlidesHero.book.tsx":Vf,"/src/components/Button/Button.book.tsx":Qf,"/src/components/CategoryRow/CategoryRow.book.tsx":$f,"/src/components/CategorySaleHero/CategorySaleHero.book.tsx":pg,"/src/components/CategoryTile/CategoryTile.book.tsx":mg,"/src/components/Countdown/Countdown.book.tsx":kg,"/src/components/CrossSellSection/CrossSellSection.book.tsx":xg,"/src/components/DealsStripHero/DealsStripHero.book.tsx":Mg,"/src/components/Dots/Dots.book.tsx":Og,"/src/components/LightString/LightString.book.tsx":Gg,"/src/components/MediaBackground/MediaBackground.book.tsx":Vg,"/src/components/PageFooter/PageFooter.book.tsx":Xg,"/src/components/PdpFooter/PdpFooter.book.tsx":Jg,"/src/components/PdpHero/PdpHero.book.tsx":t2,"/src/components/PdpPriceBlock/PdpPriceBlock.book.tsx":r2,"/src/components/PdpSheet/PdpSheet.book.tsx":a2,"/src/components/PricePills/PricePills.book.tsx":c2,"/src/components/PriceStats/PriceStats.book.tsx":p2,"/src/components/ProductCard/ProductCard.book.tsx":h2,"/src/components/SaleDealsStrip/SaleDealsStrip.book.tsx":_2,"/src/components/ScrollFilter/ScrollFilter.book.tsx":w2,"/src/components/ScrollIndicator/ScrollIndicator.book.tsx":S2,"/src/components/ScrollTopButton/ScrollTopButton.book.tsx":P2,"/src/components/SectionBreak/SectionBreak.book.tsx":j2,"/src/components/SimilarDeals/SimilarDeals.book.tsx":D2,"/src/components/StatusMessage/StatusMessage.book.tsx":T2,"/src/components/ThemeCard/ThemeCard.book.tsx":Q2,"/src/components/ThemeCardsHero/ThemeCardsHero.book.tsx":J2,"/src/components/TopBar/TopBar.book.tsx":K2,"/src/pages/HomePage/HomePage.book.tsx":Pk,"/src/pages/ProductDetail/ProductDetail.book.tsx":Dk,"/src/templates/ProductGrid/ProductGrid.book.tsx":Tk}),Hv=Object.assign({"/src/book/book.css":Lk,"/src/components/Accordion/Accordion.book.tsx":Fk,"/src/components/Accordion/Accordion.css":Ik,"/src/components/Accordion/Accordion.tsx":Mk,"/src/components/AiSummary/AiSummary.book.tsx":Rk,"/src/components/AiSummary/AiSummary.css":zk,"/src/components/AiSummary/AiSummary.tsx":Ok,"/src/components/BestDealsCarousel/BestDealsCarousel.book.tsx":Hk,"/src/components/BestDealsCarousel/BestDealsCarousel.css":Gk,"/src/components/BestDealsCarousel/BestDealsCarousel.tsx":Uk,"/src/components/BrandBanner/BrandBanner.book.tsx":Vk,"/src/components/BrandBanner/BrandBanner.css":Wk,"/src/components/BrandBanner/BrandBanner.tsx":Qk,"/src/components/BrandSlide/BrandSlide.book.tsx":Xk,"/src/components/BrandSlide/BrandSlide.css":Yk,"/src/components/BrandSlide/BrandSlide.tsx":Jk,"/src/components/BrandSlidesHero/BrandSlidesHero.book.tsx":$k,"/src/components/BrandSlidesHero/BrandSlidesHero.css":Kk,"/src/components/BrandSlidesHero/BrandSlidesHero.tsx":Zk,"/src/components/Button/Button.book.tsx":qk,"/src/components/Button/Button.css":e_,"/src/components/Button/Button.tsx":t_,"/src/components/CategoryRow/CategoryRow.book.tsx":n_,"/src/components/CategoryRow/CategoryRow.css":r_,"/src/components/CategoryRow/CategoryRow.tsx":o_,"/src/components/CategorySaleHero/CategorySaleHero.book.tsx":s_,"/src/components/CategorySaleHero/CategorySaleHero.css":i_,"/src/components/CategorySaleHero/CategorySaleHero.tsx":a_,"/src/components/CategoryTile/CategoryTile.book.tsx":l_,"/src/components/CategoryTile/CategoryTile.css":c_,"/src/components/CategoryTile/CategoryTile.tsx":d_,"/src/components/Countdown/Countdown.book.tsx":p_,"/src/components/Countdown/Countdown.css":u_,"/src/components/Countdown/Countdown.tsx":m_,"/src/components/CrossSellSection/CrossSellSection.book.tsx":h_,"/src/components/CrossSellSection/CrossSellSection.css":f_,"/src/components/CrossSellSection/CrossSellSection.tsx":g_,"/src/components/DealsStripHero/DealsStripHero.book.tsx":k_,"/src/components/DealsStripHero/DealsStripHero.css":__,"/src/components/DealsStripHero/DealsStripHero.tsx":v_,"/src/components/Dots/Dots.book.tsx":x_,"/src/components/Dots/Dots.css":y_,"/src/components/Dots/Dots.tsx":w_,"/src/components/LightString/LightString.book.tsx":b_,"/src/components/LightString/LightString.css":S_,"/src/components/LightString/LightString.tsx":C_,"/src/components/MediaBackground/MediaBackground.book.tsx":P_,"/src/components/MediaBackground/MediaBackground.css":N_,"/src/components/MediaBackground/MediaBackground.tsx":j_,"/src/components/PageFooter/PageFooter.book.tsx":B_,"/src/components/PageFooter/PageFooter.css":D_,"/src/components/PageFooter/PageFooter.tsx":A_,"/src/components/PdpFooter/PdpFooter.book.tsx":E_,"/src/components/PdpFooter/PdpFooter.css":T_,"/src/components/PdpFooter/PdpFooter.tsx":L_,"/src/components/PdpHero/PdpHero.book.tsx":F_,"/src/components/PdpHero/PdpHero.css":I_,"/src/components/PdpHero/PdpHero.tsx":M_,"/src/components/PdpPriceBlock/PdpPriceBlock.book.tsx":R_,"/src/components/PdpPriceBlock/PdpPriceBlock.css":z_,"/src/components/PdpPriceBlock/PdpPriceBlock.tsx":O_,"/src/components/PdpSheet/PdpSheet.book.tsx":H_,"/src/components/PdpSheet/PdpSheet.css":G_,"/src/components/PdpSheet/PdpSheet.tsx":U_,"/src/components/PricePills/PricePills.book.tsx":V_,"/src/components/PricePills/PricePills.css":W_,"/src/components/PricePills/PricePills.tsx":Q_,"/src/components/PriceStats/PriceStats.book.tsx":X_,"/src/components/PriceStats/PriceStats.css":Y_,"/src/components/PriceStats/PriceStats.tsx":J_,"/src/components/ProductCard/ProductCard.book.tsx":$_,"/src/components/ProductCard/ProductCard.css":K_,"/src/components/ProductCard/ProductCard.tsx":Z_,"/src/components/SaleDealsStrip/SaleDealsStrip.book.tsx":q_,"/src/components/SaleDealsStrip/SaleDealsStrip.css":ev,"/src/components/SaleDealsStrip/SaleDealsStrip.tsx":tv,"/src/components/ScrollFilter/ScrollFilter.book.tsx":nv,"/src/components/ScrollFilter/ScrollFilter.css":rv,"/src/components/ScrollFilter/ScrollFilter.tsx":ov,"/src/components/ScrollIndicator/ScrollIndicator.book.tsx":sv,"/src/components/ScrollIndicator/ScrollIndicator.css":iv,"/src/components/ScrollIndicator/ScrollIndicator.tsx":av,"/src/components/ScrollTopButton/ScrollTopButton.book.tsx":lv,"/src/components/ScrollTopButton/ScrollTopButton.css":cv,"/src/components/ScrollTopButton/ScrollTopButton.tsx":dv,"/src/components/SectionBreak/SectionBreak.book.tsx":pv,"/src/components/SectionBreak/SectionBreak.css":uv,"/src/components/SectionBreak/SectionBreak.tsx":mv,"/src/components/SimilarDeals/SimilarDeals.book.tsx":hv,"/src/components/SimilarDeals/SimilarDeals.css":fv,"/src/components/SimilarDeals/SimilarDeals.tsx":gv,"/src/components/StatusMessage/StatusMessage.book.tsx":kv,"/src/components/StatusMessage/StatusMessage.css":_v,"/src/components/StatusMessage/StatusMessage.tsx":vv,"/src/components/ThemeCard/ThemeCard.book.tsx":xv,"/src/components/ThemeCard/ThemeCard.css":yv,"/src/components/ThemeCard/ThemeCard.tsx":wv,"/src/components/ThemeCardsHero/ThemeCardsHero.book.tsx":bv,"/src/components/ThemeCardsHero/ThemeCardsHero.css":Sv,"/src/components/ThemeCardsHero/ThemeCardsHero.tsx":Cv,"/src/components/TopBar/TopBar.book.tsx":Pv,"/src/components/TopBar/TopBar.css":Nv,"/src/components/TopBar/TopBar.tsx":jv,"/src/main.tsx":Bv,"/src/pages/HomePage/HomePage.book.tsx":Dv,"/src/pages/HomePage/HomePage.css":Av,"/src/pages/HomePage/HomePage.tsx":Ev,"/src/pages/ProductDetail/ProductDetail.book.tsx":Tv,"/src/pages/ProductDetail/ProductDetail.css":Lv,"/src/pages/ProductDetail/ProductDetail.tsx":Fv,"/src/templates/ProductGrid/ProductGrid.book.tsx":Iv,"/src/templates/ProductGrid/ProductGrid.css":Mv,"/src/templates/ProductGrid/ProductGrid.tsx":Rv,"/src/tokens/tokens.css":zv}),Pn=Object.entries(Ov).map(([e,t])=>{const n=e.slice(0,e.lastIndexOf("/")),r=t.default.feature??n.split("/")[2]??"other",o=Object.entries(Hv).filter(([s])=>s.startsWith(n+"/")&&!s.endsWith(".book.tsx")).map(([s,a])=>({name:s.slice(n.length+1),code:a}));return{id:n.slice(5),group:r,entry:t.default,files:o}}).sort((e,t)=>e.id.localeCompare(t.id)),Ei=["Pages","Masthead / hero","Browse and filter","Product listing","Cross-sell","Product detail","Shared"],xd=e=>Ei.includes(e)?Ei.indexOf(e):Ei.length,yd=()=>decodeURIComponent(window.location.hash.slice(1));function Gv(){var l;const[e,t]=D.useState(yd()||((l=Pn[0])==null?void 0:l.id)),[n,r]=D.useState(0);D.useEffect(()=>{const c=()=>{var d;t(yd()||((d=Pn[0])==null?void 0:d.id)),r(0)};return window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]);const o=Pn.find(c=>c.id===e)??Pn[0],s=[...new Set(Pn.map(c=>c.group))].sort((c,d)=>xd(c)-xd(d));if(!o)return i.jsx("p",{style:{padding:24},children:"No entries. Add a *.book.tsx next to a component."});const a=o.files[n]??o.files[0];return i.jsxs("div",{className:"book",children:[i.jsxs("nav",{className:"book__nav",children:[i.jsx("h1",{children:"CK Deals Component Book"}),s.map(c=>i.jsxs("div",{children:[i.jsx("div",{className:"book__group",children:c}),Pn.filter(d=>d.group===c).map(d=>i.jsx("button",{className:"book__link","aria-current":d.id===o.id,onClick:()=>{window.location.hash=d.id},children:d.entry.title},d.id))]},c))]}),i.jsxs("main",{className:"book__main",children:[i.jsx("h2",{children:o.entry.title}),o.entry.description&&i.jsx("p",{className:"book__desc",children:o.entry.description}),i.jsx("div",{className:"book__stage",children:o.entry.stories.map(c=>i.jsxs("div",{className:"book__story",children:[i.jsx("span",{className:"book__story-name",children:c.name}),c.render()]},c.name))}),i.jsx("div",{className:"book__tabs",role:"tablist",children:o.files.map((c,d)=>i.jsx("button",{role:"tab",className:"book__tab","aria-selected":c===a,onClick:()=>r(d),children:c.name},c.name))}),a&&i.jsxs(i.Fragment,{children:[i.jsx("pre",{className:"book__code",children:i.jsx("code",{children:a.code})}),i.jsx("button",{className:"book__copy",onClick:()=>navigator.clipboard.writeText(a.code),children:"Copy code"})]})]})]})}Lu(document.getElementById("root")).render(i.jsx(D.StrictMode,{children:i.jsx(Gv,{})}));
