(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ac={exports:{}},Ti={},Hc={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yr=Symbol.for("react.element"),Gp=Symbol.for("react.portal"),Xp=Symbol.for("react.fragment"),Kp=Symbol.for("react.strict_mode"),Zp=Symbol.for("react.profiler"),Jp=Symbol.for("react.provider"),qp=Symbol.for("react.context"),em=Symbol.for("react.forward_ref"),tm=Symbol.for("react.suspense"),nm=Symbol.for("react.memo"),rm=Symbol.for("react.lazy"),Zs=Symbol.iterator;function om(e){return e===null||typeof e!="object"?null:(e=Zs&&e[Zs]||e["@@iterator"],typeof e=="function"?e:null)}var bc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bc=Object.assign,Uc={};function Kn(e,t,n){this.props=e,this.context=t,this.refs=Uc,this.updater=n||bc}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wc(){}Wc.prototype=Kn.prototype;function ba(e,t,n){this.props=e,this.context=t,this.refs=Uc,this.updater=n||bc}var Ba=ba.prototype=new Wc;Ba.constructor=ba;Bc(Ba,Kn.prototype);Ba.isPureReactComponent=!0;var Js=Array.isArray,Qc=Object.prototype.hasOwnProperty,Ua={current:null},Vc={key:!0,ref:!0,__self:!0,__source:!0};function Yc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Qc.call(t,r)&&!Vc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Yr,type:e,key:i,ref:l,props:o,_owner:Ua.current}}function im(e,t){return{$$typeof:Yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yr}function lm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var qs=/\/+/g;function rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lm(""+e.key):t.toString(36)}function Io(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Yr:case Gp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+rl(l,0):r,Js(o)?(n="",e!=null&&(n=e.replace(qs,"$&/")+"/"),Io(o,t,n,"",function(u){return u})):o!=null&&(Wa(o)&&(o=im(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(qs,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Js(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+rl(i,a);l+=Io(i,t,n,s,o)}else if(s=om(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+rl(i,a++),l+=Io(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function so(e,t,n){if(e==null)return e;var r=[],o=0;return Io(e,r,"","",function(i){return t.call(n,i,o++)}),r}function am(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Lo={transition:null},sm={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Lo,ReactCurrentOwner:Ua};function Gc(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:so,forEach:function(e,t,n){so(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return so(e,function(){t++}),t},toArray:function(e){return so(e,function(t){return t})||[]},only:function(e){if(!Wa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Kn;L.Fragment=Xp;L.Profiler=Zp;L.PureComponent=ba;L.StrictMode=Kp;L.Suspense=tm;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sm;L.act=Gc;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ua.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Qc.call(t,s)&&!Vc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Yr,type:e.type,key:o,ref:i,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:qp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jp,_context:e},e.Consumer=e};L.createElement=Yc;L.createFactory=function(e){var t=Yc.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:em,render:e}};L.isValidElement=Wa;L.lazy=function(e){return{$$typeof:rm,_payload:{_status:-1,_result:e},_init:am}};L.memo=function(e,t){return{$$typeof:nm,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Lo.transition;Lo.transition={};try{e()}finally{Lo.transition=t}};L.unstable_act=Gc;L.useCallback=function(e,t){return we.current.useCallback(e,t)};L.useContext=function(e){return we.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return we.current.useDeferredValue(e)};L.useEffect=function(e,t){return we.current.useEffect(e,t)};L.useId=function(){return we.current.useId()};L.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return we.current.useMemo(e,t)};L.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};L.useRef=function(e){return we.current.useRef(e)};L.useState=function(e){return we.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return we.current.useTransition()};L.version="18.3.1";Hc.exports=L;var ne=Hc.exports;const dt=Yp(ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um=ne,cm=Symbol.for("react.element"),fm=Symbol.for("react.fragment"),dm=Object.prototype.hasOwnProperty,pm=um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mm={key:!0,ref:!0,__self:!0,__source:!0};function Xc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)dm.call(t,r)&&!mm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:cm,type:e,key:i,ref:l,props:o,_owner:pm.current}}Ti.Fragment=fm;Ti.jsx=Xc;Ti.jsxs=Xc;Ac.exports=Ti;var g=Ac.exports,Kc={exports:{}},Ie={},Zc={exports:{}},Jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,$){var z=T.length;T.push($);e:for(;0<z;){var A=z-1>>>1,H=T[A];if(0<o(H,$))T[A]=$,T[z]=H,z=A;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var $=T[0],z=T.pop();if(z!==$){T[0]=z;e:for(var A=0,H=T.length,Kt=H>>>1;A<Kt;){var Ue=2*(A+1)-1,St=T[Ue],Te=Ue+1,st=T[Te];if(0>o(St,z))Te<H&&0>o(st,St)?(T[A]=st,T[Te]=z,A=Te):(T[A]=St,T[Ue]=z,A=Ue);else if(Te<H&&0>o(st,z))T[A]=st,T[Te]=z,A=Te;else break e}}return $}function o(T,$){var z=T.sortIndex-$.sortIndex;return z!==0?z:T.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],p=1,h=null,m=3,y=!1,S=!1,k=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(T){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=T)r(u),$.sortIndex=$.expirationTime,t(s,$);else break;$=n(u)}}function v(T){if(k=!1,d(T),!S)if(n(s)!==null)S=!0,nr(_);else{var $=n(u);$!==null&&Xt(v,$.startTime-T)}}function _(T,$){S=!1,k&&(k=!1,f(P),P=-1),y=!0;var z=m;try{for(d($),h=n(s);h!==null&&(!(h.expirationTime>$)||T&&!de());){var A=h.callback;if(typeof A=="function"){h.callback=null,m=h.priorityLevel;var H=A(h.expirationTime<=$);$=e.unstable_now(),typeof H=="function"?h.callback=H:h===n(s)&&r(s),d($)}else r(s);h=n(s)}if(h!==null)var Kt=!0;else{var Ue=n(u);Ue!==null&&Xt(v,Ue.startTime-$),Kt=!1}return Kt}finally{h=null,m=z,y=!1}}var x=!1,w=null,P=-1,M=5,O=-1;function de(){return!(e.unstable_now()-O<M)}function Je(){if(w!==null){var T=e.unstable_now();O=T;var $=!0;try{$=w(!0,T)}finally{$?at():(x=!1,w=null)}}else x=!1}var at;if(typeof c=="function")at=function(){c(Je)};else if(typeof MessageChannel<"u"){var Gt=new MessageChannel,tr=Gt.port2;Gt.port1.onmessage=Je,at=function(){tr.postMessage(null)}}else at=function(){N(Je,0)};function nr(T){w=T,x||(x=!0,at())}function Xt(T,$){P=N(function(){T(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){S||y||(S=!0,nr(_))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var $=3;break;default:$=m}var z=m;m=$;try{return T()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,$){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=m;m=T;try{return $()}finally{m=z}},e.unstable_scheduleCallback=function(T,$,z){var A=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?A+z:A):z=A,T){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=z+H,T={id:p++,callback:$,priorityLevel:T,startTime:z,expirationTime:H,sortIndex:-1},z>A?(T.sortIndex=z,t(u,T),n(s)===null&&T===n(u)&&(k?(f(P),P=-1):k=!0,Xt(v,z-A))):(T.sortIndex=H,t(s,T),S||y||(S=!0,nr(_))),T},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(T){var $=m;return function(){var z=m;m=$;try{return T.apply(this,arguments)}finally{m=z}}}})(Jc);Zc.exports=Jc;var hm=Zc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm=ne,Oe=hm;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qc=new Set,jr={};function mn(e,t){Dn(e,t),Dn(e+"Capture",t)}function Dn(e,t){for(jr[e]=t,e=0;e<t.length;e++)qc.add(t[e])}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Al=Object.prototype.hasOwnProperty,vm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eu={},tu={};function ym(e){return Al.call(tu,e)?!0:Al.call(eu,e)?!1:vm.test(e)?tu[e]=!0:(eu[e]=!0,!1)}function xm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wm(e,t,n,r){if(t===null||typeof t>"u"||xm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qa=/[\-:]([a-z])/g;function Va(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qa,Va);fe[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qa,Va);fe[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qa,Va);fe[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ya(e,t,n,r){var o=fe.hasOwnProperty(t)?fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wm(t,n,o,r)&&(n=null),r||o===null?ym(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uo=Symbol.for("react.element"),yn=Symbol.for("react.portal"),xn=Symbol.for("react.fragment"),Ga=Symbol.for("react.strict_mode"),Hl=Symbol.for("react.profiler"),ef=Symbol.for("react.provider"),tf=Symbol.for("react.context"),Xa=Symbol.for("react.forward_ref"),bl=Symbol.for("react.suspense"),Bl=Symbol.for("react.suspense_list"),Ka=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),nf=Symbol.for("react.offscreen"),nu=Symbol.iterator;function or(e){return e===null||typeof e!="object"?null:(e=nu&&e[nu]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,ol;function dr(e){if(ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ol=t&&t[1]||""}return`
`+ol+e}var il=!1;function ll(e,t){if(!e||il)return"";il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function Sm(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=ll(e.type,!1),e;case 11:return e=ll(e.type.render,!1),e;case 1:return e=ll(e.type,!0),e;default:return""}}function Ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xn:return"Fragment";case yn:return"Portal";case Hl:return"Profiler";case Ga:return"StrictMode";case bl:return"Suspense";case Bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tf:return(e.displayName||"Context")+".Consumer";case ef:return(e._context.displayName||"Context")+".Provider";case Xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ka:return t=e.displayName||null,t!==null?t:Ul(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return Ul(e(t))}catch{}}return null}function km(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ul(t);case 8:return t===Ga?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _m(e){var t=rf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function co(e){e._valueTracker||(e._valueTracker=_m(e))}function of(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wl(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ru(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lf(e,t){t=t.checked,t!=null&&Ya(e,"checked",t,!1)}function Ql(e,t){lf(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vl(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ou(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vl(e,t,n){(t!=="number"||Zo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pr=Array.isArray;function zn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function iu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(pr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function af(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fo,uf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Em=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){Em.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vr[t]=vr[e]})});function cf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vr.hasOwnProperty(e)&&vr[e]?(""+t).trim():t+"px"}function ff(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=cf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Cm=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xl(e,t){if(t){if(Cm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zl=null;function Za(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,On=null,In=null;function au(e){if(e=Kr(e)){if(typeof Jl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Oi(t),Jl(e.stateNode,e.type,t))}}function df(e){On?In?In.push(e):In=[e]:On=e}function pf(){if(On){var e=On,t=In;if(In=On=null,au(e),t)for(e=0;e<t.length;e++)au(t[e])}}function mf(e,t){return e(t)}function hf(){}var al=!1;function gf(e,t,n){if(al)return e(t,n);al=!0;try{return mf(e,t,n)}finally{al=!1,(On!==null||In!==null)&&(hf(),pf())}}function Nr(e,t){var n=e.stateNode;if(n===null)return null;var r=Oi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var ql=!1;if(gt)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){ql=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{ql=!1}function Pm(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var yr=!1,Jo=null,qo=!1,ea=null,Tm={onError:function(e){yr=!0,Jo=e}};function jm(e,t,n,r,o,i,l,a,s){yr=!1,Jo=null,Pm.apply(Tm,arguments)}function $m(e,t,n,r,o,i,l,a,s){if(jm.apply(this,arguments),yr){if(yr){var u=Jo;yr=!1,Jo=null}else throw Error(E(198));qo||(qo=!0,ea=u)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function su(e){if(hn(e)!==e)throw Error(E(188))}function Nm(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return su(o),e;if(i===r)return su(o),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function yf(e){return e=Nm(e),e!==null?xf(e):null}function xf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xf(e);if(t!==null)return t;e=e.sibling}return null}var wf=Oe.unstable_scheduleCallback,uu=Oe.unstable_cancelCallback,zm=Oe.unstable_shouldYield,Om=Oe.unstable_requestPaint,ee=Oe.unstable_now,Im=Oe.unstable_getCurrentPriorityLevel,Ja=Oe.unstable_ImmediatePriority,Sf=Oe.unstable_UserBlockingPriority,ei=Oe.unstable_NormalPriority,Lm=Oe.unstable_LowPriority,kf=Oe.unstable_IdlePriority,ji=null,ot=null;function Rm(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(ji,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:Fm,Mm=Math.log,Dm=Math.LN2;function Fm(e){return e>>>=0,e===0?32:31-(Mm(e)/Dm|0)|0}var po=64,mo=4194304;function mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ti(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=mr(a):(i&=l,i!==0&&(r=mr(i)))}else l=n&~o,l!==0?r=mr(l):i!==0&&(r=mr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ge(t),o=1<<n,r|=e[n],t&=~o;return r}function Am(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ge(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Am(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function ta(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _f(){var e=po;return po<<=1,!(po&4194240)&&(po=64),e}function sl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ge(t),e[t]=n}function bm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ge(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function qa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function Ef(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cf,es,Pf,Tf,jf,na=!1,ho=[],It=null,Lt=null,Rt=null,zr=new Map,Or=new Map,$t=[],Bm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cu(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(t.pointerId)}}function lr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Kr(t),t!==null&&es(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Um(e,t,n,r,o){switch(t){case"focusin":return It=lr(It,e,t,n,r,o),!0;case"dragenter":return Lt=lr(Lt,e,t,n,r,o),!0;case"mouseover":return Rt=lr(Rt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return zr.set(i,lr(zr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Or.set(i,lr(Or.get(i)||null,e,t,n,r,o)),!0}return!1}function $f(e){var t=tn(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=vf(n),t!==null){e.blockedOn=t,jf(e.priority,function(){Pf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ro(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ra(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zl=r,n.target.dispatchEvent(r),Zl=null}else return t=Kr(n),t!==null&&es(t),e.blockedOn=n,!1;t.shift()}return!0}function fu(e,t,n){Ro(e)&&n.delete(t)}function Wm(){na=!1,It!==null&&Ro(It)&&(It=null),Lt!==null&&Ro(Lt)&&(Lt=null),Rt!==null&&Ro(Rt)&&(Rt=null),zr.forEach(fu),Or.forEach(fu)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,na||(na=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,Wm)))}function Ir(e){function t(o){return ar(o,e)}if(0<ho.length){ar(ho[0],e);for(var n=1;n<ho.length;n++){var r=ho[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&ar(It,e),Lt!==null&&ar(Lt,e),Rt!==null&&ar(Rt,e),zr.forEach(t),Or.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)$f(n),n.blockedOn===null&&$t.shift()}var Ln=wt.ReactCurrentBatchConfig,ni=!0;function Qm(e,t,n,r){var o=F,i=Ln.transition;Ln.transition=null;try{F=1,ts(e,t,n,r)}finally{F=o,Ln.transition=i}}function Vm(e,t,n,r){var o=F,i=Ln.transition;Ln.transition=null;try{F=4,ts(e,t,n,r)}finally{F=o,Ln.transition=i}}function ts(e,t,n,r){if(ni){var o=ra(e,t,n,r);if(o===null)yl(e,t,r,ri,n),cu(e,r);else if(Um(o,e,t,n,r))r.stopPropagation();else if(cu(e,r),t&4&&-1<Bm.indexOf(e)){for(;o!==null;){var i=Kr(o);if(i!==null&&Cf(i),i=ra(e,t,n,r),i===null&&yl(e,t,r,ri,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else yl(e,t,r,null,n)}}var ri=null;function ra(e,t,n,r){if(ri=null,e=Za(r),e=tn(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ri=e,null}function Nf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Im()){case Ja:return 1;case Sf:return 4;case ei:case Lm:return 16;case kf:return 536870912;default:return 16}default:return 16}}var zt=null,ns=null,Mo=null;function zf(){if(Mo)return Mo;var e,t=ns,n=t.length,r,o="value"in zt?zt.value:zt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Mo=o.slice(e,1<r?1-r:void 0)}function Do(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function du(){return!1}function Le(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?go:du,this.isPropagationStopped=du,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rs=Le(Zn),Xr=Z({},Zn,{view:0,detail:0}),Ym=Le(Xr),ul,cl,sr,$i=Z({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(ul=e.screenX-sr.screenX,cl=e.screenY-sr.screenY):cl=ul=0,sr=e),ul)},movementY:function(e){return"movementY"in e?e.movementY:cl}}),pu=Le($i),Gm=Z({},$i,{dataTransfer:0}),Xm=Le(Gm),Km=Z({},Xr,{relatedTarget:0}),fl=Le(Km),Zm=Z({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jm=Le(Zm),qm=Z({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eh=Le(qm),th=Z({},Zn,{data:0}),mu=Le(th),nh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ih(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=oh[e])?!!t[e]:!1}function os(){return ih}var lh=Z({},Xr,{key:function(e){if(e.key){var t=nh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Do(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:os,charCode:function(e){return e.type==="keypress"?Do(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Do(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ah=Le(lh),sh=Z({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hu=Le(sh),uh=Z({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:os}),ch=Le(uh),fh=Z({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),dh=Le(fh),ph=Z({},$i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mh=Le(ph),hh=[9,13,27,32],is=gt&&"CompositionEvent"in window,xr=null;gt&&"documentMode"in document&&(xr=document.documentMode);var gh=gt&&"TextEvent"in window&&!xr,Of=gt&&(!is||xr&&8<xr&&11>=xr),gu=" ",vu=!1;function If(e,t){switch(e){case"keyup":return hh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function vh(e,t){switch(e){case"compositionend":return Lf(t);case"keypress":return t.which!==32?null:(vu=!0,gu);case"textInput":return e=t.data,e===gu&&vu?null:e;default:return null}}function yh(e,t){if(wn)return e==="compositionend"||!is&&If(e,t)?(e=zf(),Mo=ns=zt=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Of&&t.locale!=="ko"?null:t.data;default:return null}}var xh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xh[e.type]:t==="textarea"}function Rf(e,t,n,r){df(r),t=oi(t,"onChange"),0<t.length&&(n=new rs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wr=null,Lr=null;function wh(e){Vf(e,0)}function Ni(e){var t=_n(e);if(of(t))return e}function Sh(e,t){if(e==="change")return t}var Mf=!1;if(gt){var dl;if(gt){var pl="oninput"in document;if(!pl){var xu=document.createElement("div");xu.setAttribute("oninput","return;"),pl=typeof xu.oninput=="function"}dl=pl}else dl=!1;Mf=dl&&(!document.documentMode||9<document.documentMode)}function wu(){wr&&(wr.detachEvent("onpropertychange",Df),Lr=wr=null)}function Df(e){if(e.propertyName==="value"&&Ni(Lr)){var t=[];Rf(t,Lr,e,Za(e)),gf(wh,t)}}function kh(e,t,n){e==="focusin"?(wu(),wr=t,Lr=n,wr.attachEvent("onpropertychange",Df)):e==="focusout"&&wu()}function _h(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ni(Lr)}function Eh(e,t){if(e==="click")return Ni(t)}function Ch(e,t){if(e==="input"||e==="change")return Ni(t)}function Ph(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Ph;function Rr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Al.call(t,o)||!Ze(e[o],t[o]))return!1}return!0}function Su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ku(e,t){var n=Su(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Su(n)}}function Ff(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ff(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Af(){for(var e=window,t=Zo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zo(e.document)}return t}function ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Th(e){var t=Af(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ff(n.ownerDocument.documentElement,n)){if(r!==null&&ls(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ku(n,i);var l=ku(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jh=gt&&"documentMode"in document&&11>=document.documentMode,Sn=null,oa=null,Sr=null,ia=!1;function _u(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ia||Sn==null||Sn!==Zo(r)||(r=Sn,"selectionStart"in r&&ls(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&Rr(Sr,r)||(Sr=r,r=oi(oa,"onSelect"),0<r.length&&(t=new rs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function vo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},ml={},Hf={};gt&&(Hf=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function zi(e){if(ml[e])return ml[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hf)return ml[e]=t[n];return e}var bf=zi("animationend"),Bf=zi("animationiteration"),Uf=zi("animationstart"),Wf=zi("transitionend"),Qf=new Map,Eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){Qf.set(e,t),mn(t,[e])}for(var hl=0;hl<Eu.length;hl++){var gl=Eu[hl],$h=gl.toLowerCase(),Nh=gl[0].toUpperCase()+gl.slice(1);Wt($h,"on"+Nh)}Wt(bf,"onAnimationEnd");Wt(Bf,"onAnimationIteration");Wt(Uf,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(Wf,"onTransitionEnd");Dn("onMouseEnter",["mouseout","mouseover"]);Dn("onMouseLeave",["mouseout","mouseover"]);Dn("onPointerEnter",["pointerout","pointerover"]);Dn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zh=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function Cu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$m(r,t,void 0,e),e.currentTarget=null}function Vf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Cu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Cu(o,a,u),i=s}}}if(qo)throw e=ea,qo=!1,ea=null,e}function B(e,t){var n=t[ca];n===void 0&&(n=t[ca]=new Set);var r=e+"__bubble";n.has(r)||(Yf(t,e,2,!1),n.add(r))}function vl(e,t,n){var r=0;t&&(r|=4),Yf(n,e,r,t)}var yo="_reactListening"+Math.random().toString(36).slice(2);function Mr(e){if(!e[yo]){e[yo]=!0,qc.forEach(function(n){n!=="selectionchange"&&(zh.has(n)||vl(n,!1,e),vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yo]||(t[yo]=!0,vl("selectionchange",!1,t))}}function Yf(e,t,n,r){switch(Nf(t)){case 1:var o=Qm;break;case 4:o=Vm;break;default:o=ts}n=o.bind(null,t,n,e),o=void 0,!ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function yl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=tn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}gf(function(){var u=i,p=Za(n),h=[];e:{var m=Qf.get(e);if(m!==void 0){var y=rs,S=e;switch(e){case"keypress":if(Do(n)===0)break e;case"keydown":case"keyup":y=ah;break;case"focusin":S="focus",y=fl;break;case"focusout":S="blur",y=fl;break;case"beforeblur":case"afterblur":y=fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=ch;break;case bf:case Bf:case Uf:y=Jm;break;case Wf:y=dh;break;case"scroll":y=Ym;break;case"wheel":y=mh;break;case"copy":case"cut":case"paste":y=eh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=hu}var k=(t&4)!==0,N=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var c=u,d;c!==null;){d=c;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=Nr(c,f),v!=null&&k.push(Dr(c,v,d)))),N)break;c=c.return}0<k.length&&(m=new y(m,S,null,n,p),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Zl&&(S=n.relatedTarget||n.fromElement)&&(tn(S)||S[vt]))break e;if((y||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,y?(S=n.relatedTarget||n.toElement,y=u,S=S?tn(S):null,S!==null&&(N=hn(S),S!==N||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=u),y!==S)){if(k=pu,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=hu,v="onPointerLeave",f="onPointerEnter",c="pointer"),N=y==null?m:_n(y),d=S==null?m:_n(S),m=new k(v,c+"leave",y,n,p),m.target=N,m.relatedTarget=d,v=null,tn(p)===u&&(k=new k(f,c+"enter",S,n,p),k.target=d,k.relatedTarget=N,v=k),N=v,y&&S)t:{for(k=y,f=S,c=0,d=k;d;d=gn(d))c++;for(d=0,v=f;v;v=gn(v))d++;for(;0<c-d;)k=gn(k),c--;for(;0<d-c;)f=gn(f),d--;for(;c--;){if(k===f||f!==null&&k===f.alternate)break t;k=gn(k),f=gn(f)}k=null}else k=null;y!==null&&Pu(h,m,y,k,!1),S!==null&&N!==null&&Pu(h,N,S,k,!0)}}e:{if(m=u?_n(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var _=Sh;else if(yu(m))if(Mf)_=Ch;else{_=_h;var x=kh}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=Eh);if(_&&(_=_(e,u))){Rf(h,_,n,p);break e}x&&x(e,m,u),e==="focusout"&&(x=m._wrapperState)&&x.controlled&&m.type==="number"&&Vl(m,"number",m.value)}switch(x=u?_n(u):window,e){case"focusin":(yu(x)||x.contentEditable==="true")&&(Sn=x,oa=u,Sr=null);break;case"focusout":Sr=oa=Sn=null;break;case"mousedown":ia=!0;break;case"contextmenu":case"mouseup":case"dragend":ia=!1,_u(h,n,p);break;case"selectionchange":if(jh)break;case"keydown":case"keyup":_u(h,n,p)}var w;if(is)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else wn?If(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Of&&n.locale!=="ko"&&(wn||P!=="onCompositionStart"?P==="onCompositionEnd"&&wn&&(w=zf()):(zt=p,ns="value"in zt?zt.value:zt.textContent,wn=!0)),x=oi(u,P),0<x.length&&(P=new mu(P,e,null,n,p),h.push({event:P,listeners:x}),w?P.data=w:(w=Lf(n),w!==null&&(P.data=w)))),(w=gh?vh(e,n):yh(e,n))&&(u=oi(u,"onBeforeInput"),0<u.length&&(p=new mu("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=w))}Vf(h,t)})}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Nr(e,n),i!=null&&r.unshift(Dr(e,i,o)),i=Nr(e,t),i!=null&&r.push(Dr(e,i,o))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Nr(n,i),s!=null&&l.unshift(Dr(n,s,a))):o||(s=Nr(n,i),s!=null&&l.push(Dr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Oh=/\r\n?/g,Ih=/\u0000|\uFFFD/g;function Tu(e){return(typeof e=="string"?e:""+e).replace(Oh,`
`).replace(Ih,"")}function xo(e,t,n){if(t=Tu(t),Tu(e)!==t&&n)throw Error(E(425))}function ii(){}var la=null,aa=null;function sa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ua=typeof setTimeout=="function"?setTimeout:void 0,Lh=typeof clearTimeout=="function"?clearTimeout:void 0,ju=typeof Promise=="function"?Promise:void 0,Rh=typeof queueMicrotask=="function"?queueMicrotask:typeof ju<"u"?function(e){return ju.resolve(null).then(e).catch(Mh)}:ua;function Mh(e){setTimeout(function(){throw e})}function xl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ir(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $u(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),rt="__reactFiber$"+Jn,Fr="__reactProps$"+Jn,vt="__reactContainer$"+Jn,ca="__reactEvents$"+Jn,Dh="__reactListeners$"+Jn,Fh="__reactHandles$"+Jn;function tn(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$u(e);e!==null;){if(n=e[rt])return n;e=$u(e)}return t}e=n,n=e.parentNode}return null}function Kr(e){return e=e[rt]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Oi(e){return e[Fr]||null}var fa=[],En=-1;function Qt(e){return{current:e}}function W(e){0>En||(e.current=fa[En],fa[En]=null,En--)}function b(e,t){En++,fa[En]=e.current,e.current=t}var Ut={},ve=Qt(Ut),Ee=Qt(!1),un=Ut;function Fn(e,t){var n=e.type.contextTypes;if(!n)return Ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ce(e){return e=e.childContextTypes,e!=null}function li(){W(Ee),W(ve)}function Nu(e,t,n){if(ve.current!==Ut)throw Error(E(168));b(ve,t),b(Ee,n)}function Gf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,km(e)||"Unknown",o));return Z({},n,r)}function ai(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,un=ve.current,b(ve,e),b(Ee,Ee.current),!0}function zu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Gf(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,W(Ee),W(ve),b(ve,e)):W(Ee),b(Ee,n)}var ft=null,Ii=!1,wl=!1;function Xf(e){ft===null?ft=[e]:ft.push(e)}function Ah(e){Ii=!0,Xf(e)}function Vt(){if(!wl&&ft!==null){wl=!0;var e=0,t=F;try{var n=ft;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,Ii=!1}catch(o){throw ft!==null&&(ft=ft.slice(e+1)),wf(Ja,Vt),o}finally{F=t,wl=!1}}return null}var Cn=[],Pn=0,si=null,ui=0,Re=[],Me=0,cn=null,pt=1,mt="";function qt(e,t){Cn[Pn++]=ui,Cn[Pn++]=si,si=e,ui=t}function Kf(e,t,n){Re[Me++]=pt,Re[Me++]=mt,Re[Me++]=cn,cn=e;var r=pt;e=mt;var o=32-Ge(r)-1;r&=~(1<<o),n+=1;var i=32-Ge(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,pt=1<<32-Ge(t)+o|n<<o|r,mt=i+e}else pt=1<<i|n<<o|r,mt=e}function as(e){e.return!==null&&(qt(e,1),Kf(e,1,0))}function ss(e){for(;e===si;)si=Cn[--Pn],Cn[Pn]=null,ui=Cn[--Pn],Cn[Pn]=null;for(;e===cn;)cn=Re[--Me],Re[Me]=null,mt=Re[--Me],Re[Me]=null,pt=Re[--Me],Re[Me]=null}var ze=null,Ne=null,V=!1,Ye=null;function Zf(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ou(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Ne=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:pt,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Ne=null,!0):!1;default:return!1}}function da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pa(e){if(V){var t=Ne;if(t){var n=t;if(!Ou(e,t)){if(da(e))throw Error(E(418));t=Mt(n.nextSibling);var r=ze;t&&Ou(e,t)?Zf(r,n):(e.flags=e.flags&-4097|2,V=!1,ze=e)}}else{if(da(e))throw Error(E(418));e.flags=e.flags&-4097|2,V=!1,ze=e}}}function Iu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function wo(e){if(e!==ze)return!1;if(!V)return Iu(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sa(e.type,e.memoizedProps)),t&&(t=Ne)){if(da(e))throw Jf(),Error(E(418));for(;t;)Zf(e,t),t=Mt(t.nextSibling)}if(Iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=Mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=ze?Mt(e.stateNode.nextSibling):null;return!0}function Jf(){for(var e=Ne;e;)e=Mt(e.nextSibling)}function An(){Ne=ze=null,V=!1}function us(e){Ye===null?Ye=[e]:Ye.push(e)}var Hh=wt.ReactCurrentBatchConfig;function ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function So(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lu(e){var t=e._init;return t(e._payload)}function qf(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Ht(f,c),f.index=0,f.sibling=null,f}function i(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,d,v){return c===null||c.tag!==6?(c=Tl(d,f.mode,v),c.return=f,c):(c=o(c,d),c.return=f,c)}function s(f,c,d,v){var _=d.type;return _===xn?p(f,c,d.props.children,v,d.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Tt&&Lu(_)===c.type)?(v=o(c,d.props),v.ref=ur(f,c,d),v.return=f,v):(v=Wo(d.type,d.key,d.props,null,f.mode,v),v.ref=ur(f,c,d),v.return=f,v)}function u(f,c,d,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=jl(d,f.mode,v),c.return=f,c):(c=o(c,d.children||[]),c.return=f,c)}function p(f,c,d,v,_){return c===null||c.tag!==7?(c=an(d,f.mode,v,_),c.return=f,c):(c=o(c,d),c.return=f,c)}function h(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Tl(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case uo:return d=Wo(c.type,c.key,c.props,null,f.mode,d),d.ref=ur(f,null,c),d.return=f,d;case yn:return c=jl(c,f.mode,d),c.return=f,c;case Tt:var v=c._init;return h(f,v(c._payload),d)}if(pr(c)||or(c))return c=an(c,f.mode,d,null),c.return=f,c;So(f,c)}return null}function m(f,c,d,v){var _=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return _!==null?null:a(f,c,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case uo:return d.key===_?s(f,c,d,v):null;case yn:return d.key===_?u(f,c,d,v):null;case Tt:return _=d._init,m(f,c,_(d._payload),v)}if(pr(d)||or(d))return _!==null?null:p(f,c,d,v,null);So(f,d)}return null}function y(f,c,d,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,a(c,f,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case uo:return f=f.get(v.key===null?d:v.key)||null,s(c,f,v,_);case yn:return f=f.get(v.key===null?d:v.key)||null,u(c,f,v,_);case Tt:var x=v._init;return y(f,c,d,x(v._payload),_)}if(pr(v)||or(v))return f=f.get(d)||null,p(c,f,v,_,null);So(c,v)}return null}function S(f,c,d,v){for(var _=null,x=null,w=c,P=c=0,M=null;w!==null&&P<d.length;P++){w.index>P?(M=w,w=null):M=w.sibling;var O=m(f,w,d[P],v);if(O===null){w===null&&(w=M);break}e&&w&&O.alternate===null&&t(f,w),c=i(O,c,P),x===null?_=O:x.sibling=O,x=O,w=M}if(P===d.length)return n(f,w),V&&qt(f,P),_;if(w===null){for(;P<d.length;P++)w=h(f,d[P],v),w!==null&&(c=i(w,c,P),x===null?_=w:x.sibling=w,x=w);return V&&qt(f,P),_}for(w=r(f,w);P<d.length;P++)M=y(w,f,P,d[P],v),M!==null&&(e&&M.alternate!==null&&w.delete(M.key===null?P:M.key),c=i(M,c,P),x===null?_=M:x.sibling=M,x=M);return e&&w.forEach(function(de){return t(f,de)}),V&&qt(f,P),_}function k(f,c,d,v){var _=or(d);if(typeof _!="function")throw Error(E(150));if(d=_.call(d),d==null)throw Error(E(151));for(var x=_=null,w=c,P=c=0,M=null,O=d.next();w!==null&&!O.done;P++,O=d.next()){w.index>P?(M=w,w=null):M=w.sibling;var de=m(f,w,O.value,v);if(de===null){w===null&&(w=M);break}e&&w&&de.alternate===null&&t(f,w),c=i(de,c,P),x===null?_=de:x.sibling=de,x=de,w=M}if(O.done)return n(f,w),V&&qt(f,P),_;if(w===null){for(;!O.done;P++,O=d.next())O=h(f,O.value,v),O!==null&&(c=i(O,c,P),x===null?_=O:x.sibling=O,x=O);return V&&qt(f,P),_}for(w=r(f,w);!O.done;P++,O=d.next())O=y(w,f,P,O.value,v),O!==null&&(e&&O.alternate!==null&&w.delete(O.key===null?P:O.key),c=i(O,c,P),x===null?_=O:x.sibling=O,x=O);return e&&w.forEach(function(Je){return t(f,Je)}),V&&qt(f,P),_}function N(f,c,d,v){if(typeof d=="object"&&d!==null&&d.type===xn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case uo:e:{for(var _=d.key,x=c;x!==null;){if(x.key===_){if(_=d.type,_===xn){if(x.tag===7){n(f,x.sibling),c=o(x,d.props.children),c.return=f,f=c;break e}}else if(x.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Tt&&Lu(_)===x.type){n(f,x.sibling),c=o(x,d.props),c.ref=ur(f,x,d),c.return=f,f=c;break e}n(f,x);break}else t(f,x);x=x.sibling}d.type===xn?(c=an(d.props.children,f.mode,v,d.key),c.return=f,f=c):(v=Wo(d.type,d.key,d.props,null,f.mode,v),v.ref=ur(f,c,d),v.return=f,f=v)}return l(f);case yn:e:{for(x=d.key;c!==null;){if(c.key===x)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=o(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=jl(d,f.mode,v),c.return=f,f=c}return l(f);case Tt:return x=d._init,N(f,c,x(d._payload),v)}if(pr(d))return S(f,c,d,v);if(or(d))return k(f,c,d,v);So(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,d),c.return=f,f=c):(n(f,c),c=Tl(d,f.mode,v),c.return=f,f=c),l(f)):n(f,c)}return N}var Hn=qf(!0),ed=qf(!1),ci=Qt(null),fi=null,Tn=null,cs=null;function fs(){cs=Tn=fi=null}function ds(e){var t=ci.current;W(ci),e._currentValue=t}function ma(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rn(e,t){fi=e,cs=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(cs!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(fi===null)throw Error(E(308));Tn=e,fi.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var nn=null;function ps(e){nn===null?nn=[e]:nn.push(e)}function td(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ps(t)):(n.next=o.next,o.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jt=!1;function ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,yt(e,n)}return o=r.interleaved,o===null?(t.next=t,ps(r)):(t.next=o.next,o.next=t),r.interleaved=t,yt(e,n)}function Fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qa(e,n)}}function Ru(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function di(e,t,n,r){var o=e.updateQueue;jt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,p=u=s=null,a=i;do{var m=a.lane,y=a.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,k=a;switch(m=t,y=n,k.tag){case 1:if(S=k.payload,typeof S=="function"){h=S.call(y,h,m);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,m=typeof S=="function"?S.call(y,h,m):S,m==null)break e;h=Z({},h,m);break e;case 2:jt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=y,s=h):p=p.next=y,l|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(s=h),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);dn|=l,e.lanes=l,e.memoizedState=h}}function Mu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var Zr={},it=Qt(Zr),Ar=Qt(Zr),Hr=Qt(Zr);function rn(e){if(e===Zr)throw Error(E(174));return e}function hs(e,t){switch(b(Hr,t),b(Ar,e),b(it,Zr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gl(t,e)}W(it),b(it,t)}function bn(){W(it),W(Ar),W(Hr)}function rd(e){rn(Hr.current);var t=rn(it.current),n=Gl(t,e.type);t!==n&&(b(Ar,e),b(it,n))}function gs(e){Ar.current===e&&(W(it),W(Ar))}var X=Qt(0);function pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sl=[];function vs(){for(var e=0;e<Sl.length;e++)Sl[e]._workInProgressVersionPrimary=null;Sl.length=0}var Ao=wt.ReactCurrentDispatcher,kl=wt.ReactCurrentBatchConfig,fn=0,K=null,oe=null,le=null,mi=!1,kr=!1,br=0,bh=0;function pe(){throw Error(E(321))}function ys(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function xs(e,t,n,r,o,i){if(fn=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ao.current=e===null||e.memoizedState===null?Qh:Vh,e=n(r,o),kr){i=0;do{if(kr=!1,br=0,25<=i)throw Error(E(301));i+=1,le=oe=null,t.updateQueue=null,Ao.current=Yh,e=n(r,o)}while(kr)}if(Ao.current=hi,t=oe!==null&&oe.next!==null,fn=0,le=oe=K=null,mi=!1,t)throw Error(E(300));return e}function ws(){var e=br!==0;return br=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?K.memoizedState=le=e:le=le.next=e,le}function He(){if(oe===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=le===null?K.memoizedState:le.next;if(t!==null)le=t,oe=e;else{if(e===null)throw Error(E(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},le===null?K.memoizedState=le=e:le=le.next=e}return le}function Br(e,t){return typeof t=="function"?t(e):t}function _l(e){var t=He(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=oe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var p=u.lane;if((fn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,K.lanes|=p,dn|=p}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Ze(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,K.lanes|=i,dn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function El(e){var t=He(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ze(i,t.memoizedState)||(_e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function od(){}function id(e,t){var n=K,r=He(),o=t(),i=!Ze(r.memoizedState,o);if(i&&(r.memoizedState=o,_e=!0),r=r.queue,Ss(sd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Ur(9,ad.bind(null,n,r,o,t),void 0,null),se===null)throw Error(E(349));fn&30||ld(n,t,o)}return o}function ld(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ad(e,t,n,r){t.value=n,t.getSnapshot=r,ud(t)&&cd(e)}function sd(e,t,n){return n(function(){ud(t)&&cd(e)})}function ud(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function cd(e){var t=yt(e,1);t!==null&&Xe(t,e,1,-1)}function Du(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=Wh.bind(null,K,e),[t.memoizedState,e]}function Ur(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fd(){return He().memoizedState}function Ho(e,t,n,r){var o=et();K.flags|=e,o.memoizedState=Ur(1|t,n,void 0,r===void 0?null:r)}function Li(e,t,n,r){var o=He();r=r===void 0?null:r;var i=void 0;if(oe!==null){var l=oe.memoizedState;if(i=l.destroy,r!==null&&ys(r,l.deps)){o.memoizedState=Ur(t,n,i,r);return}}K.flags|=e,o.memoizedState=Ur(1|t,n,i,r)}function Fu(e,t){return Ho(8390656,8,e,t)}function Ss(e,t){return Li(2048,8,e,t)}function dd(e,t){return Li(4,2,e,t)}function pd(e,t){return Li(4,4,e,t)}function md(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hd(e,t,n){return n=n!=null?n.concat([e]):null,Li(4,4,md.bind(null,t,e),n)}function ks(){}function gd(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ys(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vd(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ys(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yd(e,t,n){return fn&21?(Ze(n,t)||(n=_f(),K.lanes|=n,dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function Bh(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=kl.transition;kl.transition={};try{e(!1),t()}finally{F=n,kl.transition=r}}function xd(){return He().memoizedState}function Uh(e,t,n){var r=At(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wd(e))Sd(t,n);else if(n=td(e,t,n,r),n!==null){var o=xe();Xe(n,e,r,o),kd(n,t,r)}}function Wh(e,t,n){var r=At(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wd(e))Sd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Ze(a,l)){var s=t.interleaved;s===null?(o.next=o,ps(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=td(e,t,o,r),n!==null&&(o=xe(),Xe(n,e,r,o),kd(n,t,r))}}function wd(e){var t=e.alternate;return e===K||t!==null&&t===K}function Sd(e,t){kr=mi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qa(e,n)}}var hi={readContext:Ae,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},Qh={readContext:Ae,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Fu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ho(4194308,4,md.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ho(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Uh.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Du,useDebugValue:ks,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Du(!1),t=e[0];return e=Bh.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,o=et();if(V){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),se===null)throw Error(E(349));fn&30||ld(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Fu(sd.bind(null,r,i,e),[e]),r.flags|=2048,Ur(9,ad.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=et(),t=se.identifierPrefix;if(V){var n=mt,r=pt;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=br++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vh={readContext:Ae,useCallback:gd,useContext:Ae,useEffect:Ss,useImperativeHandle:hd,useInsertionEffect:dd,useLayoutEffect:pd,useMemo:vd,useReducer:_l,useRef:fd,useState:function(){return _l(Br)},useDebugValue:ks,useDeferredValue:function(e){var t=He();return yd(t,oe.memoizedState,e)},useTransition:function(){var e=_l(Br)[0],t=He().memoizedState;return[e,t]},useMutableSource:od,useSyncExternalStore:id,useId:xd,unstable_isNewReconciler:!1},Yh={readContext:Ae,useCallback:gd,useContext:Ae,useEffect:Ss,useImperativeHandle:hd,useInsertionEffect:dd,useLayoutEffect:pd,useMemo:vd,useReducer:El,useRef:fd,useState:function(){return El(Br)},useDebugValue:ks,useDeferredValue:function(e){var t=He();return oe===null?t.memoizedState=e:yd(t,oe.memoizedState,e)},useTransition:function(){var e=El(Br)[0],t=He().memoizedState;return[e,t]},useMutableSource:od,useSyncExternalStore:id,useId:xd,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ha(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ri={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),o=At(e),i=ht(r,o);i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,o),t!==null&&(Xe(t,e,o,r),Fo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),o=At(e),i=ht(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,o),t!==null&&(Xe(t,e,o,r),Fo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=At(e),o=ht(n,r);o.tag=2,t!=null&&(o.callback=t),t=Dt(e,o,r),t!==null&&(Xe(t,e,r,n),Fo(t,e,r))}};function Au(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(o,i):!0}function _d(e,t,n){var r=!1,o=Ut,i=t.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(o=Ce(t)?un:ve.current,r=t.contextTypes,i=(r=r!=null)?Fn(e,o):Ut),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ri,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Hu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ri.enqueueReplaceState(t,t.state,null)}function ga(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ms(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ae(i):(i=Ce(t)?un:ve.current,o.context=Fn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ha(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ri.enqueueReplaceState(o,o.state,null),di(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Bn(e,t){try{var n="",r=t;do n+=Sm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Cl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function va(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gh=typeof WeakMap=="function"?WeakMap:Map;function Ed(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vi||(vi=!0,Ta=r),va(e,t)},n}function Cd(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){va(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){va(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=sg.bind(null,e,t,n),t.then(e,e))}function Bu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var Xh=wt.ReactCurrentOwner,_e=!1;function ye(e,t,n,r){t.child=e===null?ed(t,null,n,r):Hn(t,e.child,n,r)}function Wu(e,t,n,r,o){n=n.render;var i=t.ref;return Rn(t,o),r=xs(e,t,n,r,i,o),n=ws(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,xt(e,t,o)):(V&&n&&as(t),t.flags|=1,ye(e,t,r,o),t.child)}function Qu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ns(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Pd(e,t,i,r,o)):(e=Wo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Rr,n(l,r)&&e.ref===t.ref)return xt(e,t,o)}return t.flags|=1,e=Ht(i,r),e.ref=t.ref,e.return=t,t.child=e}function Pd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Rr(i,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,xt(e,t,o)}return ya(e,t,n,r,o)}function Td(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},b($n,$e),$e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,b($n,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,b($n,$e),$e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,b($n,$e),$e|=r;return ye(e,t,o,n),t.child}function jd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ya(e,t,n,r,o){var i=Ce(n)?un:ve.current;return i=Fn(t,i),Rn(t,o),n=xs(e,t,n,r,i,o),r=ws(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,xt(e,t,o)):(V&&r&&as(t),t.flags|=1,ye(e,t,n,o),t.child)}function Vu(e,t,n,r,o){if(Ce(n)){var i=!0;ai(t)}else i=!1;if(Rn(t,o),t.stateNode===null)bo(e,t),_d(t,n,r),ga(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=Ce(n)?un:ve.current,u=Fn(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Hu(t,l,r,u),jt=!1;var m=t.memoizedState;l.state=m,di(t,r,l,o),s=t.memoizedState,a!==r||m!==s||Ee.current||jt?(typeof p=="function"&&(ha(t,n,p,r),s=t.memoizedState),(a=jt||Au(t,n,a,r,m,s,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,nd(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Qe(t.type,a),l.props=u,h=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ae(s):(s=Ce(n)?un:ve.current,s=Fn(t,s));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||m!==s)&&Hu(t,l,r,s),jt=!1,m=t.memoizedState,l.state=m,di(t,r,l,o);var S=t.memoizedState;a!==h||m!==S||Ee.current||jt?(typeof y=="function"&&(ha(t,n,y,r),S=t.memoizedState),(u=jt||Au(t,n,u,r,m,S,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return xa(e,t,n,r,i,o)}function xa(e,t,n,r,o,i){jd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&zu(t,n,!1),xt(e,t,i);r=t.stateNode,Xh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Hn(t,e.child,null,i),t.child=Hn(t,null,a,i)):ye(e,t,a,i),t.memoizedState=r.state,o&&zu(t,n,!0),t.child}function $d(e){var t=e.stateNode;t.pendingContext?Nu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nu(e,t.context,!1),hs(e,t.containerInfo)}function Yu(e,t,n,r,o){return An(),us(o),t.flags|=256,ye(e,t,n,r),t.child}var wa={dehydrated:null,treeContext:null,retryLane:0};function Sa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nd(e,t,n){var r=t.pendingProps,o=X.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),b(X,o&1),e===null)return pa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Fi(l,r,0,null),e=an(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Sa(n),t.memoizedState=wa,e):_s(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Kh(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Ht(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Ht(a,i):(i=an(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Sa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=wa,r}return i=e.child,e=i.sibling,r=Ht(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _s(e,t){return t=Fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ko(e,t,n,r){return r!==null&&us(r),Hn(t,e.child,null,n),e=_s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Cl(Error(E(422))),ko(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Fi({mode:"visible",children:r.children},o,0,null),i=an(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Hn(t,e.child,null,l),t.child.memoizedState=Sa(l),t.memoizedState=wa,i);if(!(t.mode&1))return ko(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(E(419)),r=Cl(i,r,void 0),ko(e,t,l,r)}if(a=(l&e.childLanes)!==0,_e||a){if(r=se,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,yt(e,o),Xe(r,e,o,-1))}return $s(),r=Cl(Error(E(421))),ko(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ug.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ne=Mt(o.nextSibling),ze=t,V=!0,Ye=null,e!==null&&(Re[Me++]=pt,Re[Me++]=mt,Re[Me++]=cn,pt=e.id,mt=e.overflow,cn=t),t=_s(t,r.children),t.flags|=4096,t)}function Gu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ma(e.return,t,n)}function Pl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function zd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ye(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gu(e,n,t);else if(e.tag===19)Gu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(b(X,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&pi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Pl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&pi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Pl(t,!0,n,null,i);break;case"together":Pl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zh(e,t,n){switch(t.tag){case 3:$d(t),An();break;case 5:rd(t);break;case 1:Ce(t.type)&&ai(t);break;case 4:hs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;b(ci,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(b(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?Nd(e,t,n):(b(X,X.current&1),e=xt(e,t,n),e!==null?e.sibling:null);b(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return zd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),b(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,Td(e,t,n)}return xt(e,t,n)}var Od,ka,Id,Ld;Od=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ka=function(){};Id=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,rn(it.current);var i=null;switch(n){case"input":o=Wl(e,o),r=Wl(e,r),i=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":o=Yl(e,o),r=Yl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ii)}Xl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&B("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Ld=function(e,t,n,r){n!==r&&(t.flags|=4)};function cr(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jh(e,t,n){var r=t.pendingProps;switch(ss(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Ce(t.type)&&li(),me(t),null;case 3:return r=t.stateNode,bn(),W(Ee),W(ve),vs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Na(Ye),Ye=null))),ka(e,t),me(t),null;case 5:gs(t);var o=rn(Hr.current);if(n=t.type,e!==null&&t.stateNode!=null)Id(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return me(t),null}if(e=rn(it.current),wo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[rt]=t,r[Fr]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<hr.length;o++)B(hr[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":ru(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":iu(r,i),B("invalid",r)}Xl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&xo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&xo(r.textContent,a,e),o=["children",""+a]):jr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&B("scroll",r)}switch(n){case"input":co(r),ou(r,i,!0);break;case"textarea":co(r),lu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ii)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[rt]=t,e[Fr]=r,Od(e,t,!1,!1),t.stateNode=e;e:{switch(l=Kl(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<hr.length;o++)B(hr[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":ru(e,r),o=Wl(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),B("invalid",e);break;case"textarea":iu(e,r),o=Yl(e,r),B("invalid",e);break;default:o=r}Xl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?ff(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&uf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&$r(e,s):typeof s=="number"&&$r(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(jr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&B("scroll",e):s!=null&&Ya(e,i,s,l))}switch(n){case"input":co(e),ou(e,r,!1);break;case"textarea":co(e),lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?zn(e,!!r.multiple,i,!1):r.defaultValue!=null&&zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ii)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)Ld(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=rn(Hr.current),rn(it.current),wo(t)){if(r=t.stateNode,n=t.memoizedProps,r[rt]=t,(i=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:xo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rt]=t,t.stateNode=r}return me(t),null;case 13:if(W(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Ne!==null&&t.mode&1&&!(t.flags&128))Jf(),An(),t.flags|=98560,i=!1;else if(i=wo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[rt]=t}else An(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else Ye!==null&&(Na(Ye),Ye=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?ie===0&&(ie=3):$s())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return bn(),ka(e,t),e===null&&Mr(t.stateNode.containerInfo),me(t),null;case 10:return ds(t.type._context),me(t),null;case 17:return Ce(t.type)&&li(),me(t),null;case 19:if(W(X),i=t.memoizedState,i===null)return me(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)cr(i,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=pi(e),l!==null){for(t.flags|=128,cr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return b(X,X.current&1|2),t.child}e=e.sibling}i.tail!==null&&ee()>Un&&(t.flags|=128,r=!0,cr(i,!1),t.lanes=4194304)}else{if(!r)if(e=pi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!V)return me(t),null}else 2*ee()-i.renderingStartTime>Un&&n!==1073741824&&(t.flags|=128,r=!0,cr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ee(),t.sibling=null,n=X.current,b(X,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return js(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function qh(e,t){switch(ss(t),t.tag){case 1:return Ce(t.type)&&li(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(),W(Ee),W(ve),vs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gs(t),null;case 13:if(W(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));An()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(X),null;case 4:return bn(),null;case 10:return ds(t.type._context),null;case 22:case 23:return js(),null;case 24:return null;default:return null}}var _o=!1,he=!1,eg=typeof WeakSet=="function"?WeakSet:Set,j=null;function jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function _a(e,t,n){try{n()}catch(r){q(e,t,r)}}var Xu=!1;function tg(e,t){if(la=ni,e=Af(),ls(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,p=0,h=e,m=null;t:for(;;){for(var y;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(y=h.firstChild)!==null;)m=h,h=y;for(;;){if(h===e)break t;if(m===n&&++u===o&&(a=l),m===i&&++p===r&&(s=l),(y=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(aa={focusedElem:e,selectionRange:n},ni=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,N=S.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Qe(t.type,k),N);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(v){q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return S=Xu,Xu=!1,S}function _r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&_a(t,n,i)}o=o.next}while(o!==r)}}function Mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ea(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rd(e){var t=e.alternate;t!==null&&(e.alternate=null,Rd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rt],delete t[Fr],delete t[ca],delete t[Dh],delete t[Fh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Md(e){return e.tag===5||e.tag===3||e.tag===4}function Ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Md(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ii));else if(r!==4&&(e=e.child,e!==null))for(Ca(e,t,n),e=e.sibling;e!==null;)Ca(e,t,n),e=e.sibling}function Pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pa(e,t,n),e=e.sibling;e!==null;)Pa(e,t,n),e=e.sibling}var ue=null,Ve=!1;function _t(e,t,n){for(n=n.child;n!==null;)Dd(e,t,n),n=n.sibling}function Dd(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(ji,n)}catch{}switch(n.tag){case 5:he||jn(n,t);case 6:var r=ue,o=Ve;ue=null,_t(e,t,n),ue=r,Ve=o,ue!==null&&(Ve?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ve?(e=ue,n=n.stateNode,e.nodeType===8?xl(e.parentNode,n):e.nodeType===1&&xl(e,n),Ir(e)):xl(ue,n.stateNode));break;case 4:r=ue,o=Ve,ue=n.stateNode.containerInfo,Ve=!0,_t(e,t,n),ue=r,Ve=o;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&_a(n,t,l),o=o.next}while(o!==r)}_t(e,t,n);break;case 1:if(!he&&(jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){q(n,t,a)}_t(e,t,n);break;case 21:_t(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,_t(e,t,n),he=r):_t(e,t,n);break;default:_t(e,t,n)}}function Zu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new eg),t.forEach(function(r){var o=cg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ve=!1;break e;case 3:ue=a.stateNode.containerInfo,Ve=!0;break e;case 4:ue=a.stateNode.containerInfo,Ve=!0;break e}a=a.return}if(ue===null)throw Error(E(160));Dd(i,l,o),ue=null,Ve=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){q(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fd(t,e),t=t.sibling}function Fd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),qe(e),r&4){try{_r(3,e,e.return),Mi(3,e)}catch(k){q(e,e.return,k)}try{_r(5,e,e.return)}catch(k){q(e,e.return,k)}}break;case 1:We(t,e),qe(e),r&512&&n!==null&&jn(n,n.return);break;case 5:if(We(t,e),qe(e),r&512&&n!==null&&jn(n,n.return),e.flags&32){var o=e.stateNode;try{$r(o,"")}catch(k){q(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&lf(o,i),Kl(a,l);var u=Kl(a,i);for(l=0;l<s.length;l+=2){var p=s[l],h=s[l+1];p==="style"?ff(o,h):p==="dangerouslySetInnerHTML"?uf(o,h):p==="children"?$r(o,h):Ya(o,p,h,u)}switch(a){case"input":Ql(o,i);break;case"textarea":af(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?zn(o,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?zn(o,!!i.multiple,i.defaultValue,!0):zn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Fr]=i}catch(k){q(e,e.return,k)}}break;case 6:if(We(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){q(e,e.return,k)}}break;case 3:if(We(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ir(t.containerInfo)}catch(k){q(e,e.return,k)}break;case 4:We(t,e),qe(e);break;case 13:We(t,e),qe(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ps=ee())),r&4&&Zu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(he=(u=he)||p,We(t,e),he=u):We(t,e),qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(j=e,p=e.child;p!==null;){for(h=j=p;j!==null;){switch(m=j,y=m.child,m.tag){case 0:case 11:case 14:case 15:_r(4,m,m.return);break;case 1:jn(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(k){q(r,n,k)}}break;case 5:jn(m,m.return);break;case 22:if(m.memoizedState!==null){qu(h);continue}}y!==null?(y.return=m,j=y):qu(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=cf("display",l))}catch(k){q(e,e.return,k)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(k){q(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:We(t,e),qe(e),r&4&&Zu(e);break;case 21:break;default:We(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Md(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&($r(o,""),r.flags&=-33);var i=Ku(e);Pa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ku(e);Ca(e,a,l);break;default:throw Error(E(161))}}catch(s){q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ng(e,t,n){j=e,Ad(e)}function Ad(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var o=j,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||_o;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||he;a=_o;var u=he;if(_o=l,(he=s)&&!u)for(j=o;j!==null;)l=j,s=l.child,l.tag===22&&l.memoizedState!==null?ec(o):s!==null?(s.return=l,j=s):ec(o);for(;i!==null;)j=i,Ad(i),i=i.sibling;j=o,_o=a,he=u}Ju(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,j=i):Ju(e)}}function Ju(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Mu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Ir(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}he||t.flags&512&&Ea(t)}catch(m){q(t,t.return,m)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function qu(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function ec(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mi(4,t)}catch(s){q(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){q(t,o,s)}}var i=t.return;try{Ea(t)}catch(s){q(t,i,s)}break;case 5:var l=t.return;try{Ea(t)}catch(s){q(t,l,s)}}}catch(s){q(t,t.return,s)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var rg=Math.ceil,gi=wt.ReactCurrentDispatcher,Es=wt.ReactCurrentOwner,Fe=wt.ReactCurrentBatchConfig,R=0,se=null,re=null,ce=0,$e=0,$n=Qt(0),ie=0,Wr=null,dn=0,Di=0,Cs=0,Er=null,ke=null,Ps=0,Un=1/0,ut=null,vi=!1,Ta=null,Ft=null,Eo=!1,Ot=null,yi=0,Cr=0,ja=null,Bo=-1,Uo=0;function xe(){return R&6?ee():Bo!==-1?Bo:Bo=ee()}function At(e){return e.mode&1?R&2&&ce!==0?ce&-ce:Hh.transition!==null?(Uo===0&&(Uo=_f()),Uo):(e=F,e!==0||(e=window.event,e=e===void 0?16:Nf(e.type)),e):1}function Xe(e,t,n,r){if(50<Cr)throw Cr=0,ja=null,Error(E(185));Gr(e,n,r),(!(R&2)||e!==se)&&(e===se&&(!(R&2)&&(Di|=n),ie===4&&Nt(e,ce)),Pe(e,r),n===1&&R===0&&!(t.mode&1)&&(Un=ee()+500,Ii&&Vt()))}function Pe(e,t){var n=e.callbackNode;Hm(e,t);var r=ti(e,e===se?ce:0);if(r===0)n!==null&&uu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uu(n),t===1)e.tag===0?Ah(tc.bind(null,e)):Xf(tc.bind(null,e)),Rh(function(){!(R&6)&&Vt()}),n=null;else{switch(Ef(r)){case 1:n=Ja;break;case 4:n=Sf;break;case 16:n=ei;break;case 536870912:n=kf;break;default:n=ei}n=Yd(n,Hd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hd(e,t){if(Bo=-1,Uo=0,R&6)throw Error(E(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=ti(e,e===se?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xi(e,r);else{t=r;var o=R;R|=2;var i=Bd();(se!==e||ce!==t)&&(ut=null,Un=ee()+500,ln(e,t));do try{lg();break}catch(a){bd(e,a)}while(!0);fs(),gi.current=i,R=o,re!==null?t=0:(se=null,ce=0,t=ie)}if(t!==0){if(t===2&&(o=ta(e),o!==0&&(r=o,t=$a(e,o))),t===1)throw n=Wr,ln(e,0),Nt(e,r),Pe(e,ee()),n;if(t===6)Nt(e,r);else{if(o=e.current.alternate,!(r&30)&&!og(o)&&(t=xi(e,r),t===2&&(i=ta(e),i!==0&&(r=i,t=$a(e,i))),t===1))throw n=Wr,ln(e,0),Nt(e,r),Pe(e,ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:en(e,ke,ut);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=Ps+500-ee(),10<t)){if(ti(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ua(en.bind(null,e,ke,ut),t);break}en(e,ke,ut);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ge(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rg(r/1960))-r,10<r){e.timeoutHandle=ua(en.bind(null,e,ke,ut),r);break}en(e,ke,ut);break;case 5:en(e,ke,ut);break;default:throw Error(E(329))}}}return Pe(e,ee()),e.callbackNode===n?Hd.bind(null,e):null}function $a(e,t){var n=Er;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=xi(e,t),e!==2&&(t=ke,ke=n,t!==null&&Na(t)),e}function Na(e){ke===null?ke=e:ke.push.apply(ke,e)}function og(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ze(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~Cs,t&=~Di,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ge(t),r=1<<n;e[n]=-1,t&=~r}}function tc(e){if(R&6)throw Error(E(327));Mn();var t=ti(e,0);if(!(t&1))return Pe(e,ee()),null;var n=xi(e,t);if(e.tag!==0&&n===2){var r=ta(e);r!==0&&(t=r,n=$a(e,r))}if(n===1)throw n=Wr,ln(e,0),Nt(e,t),Pe(e,ee()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,en(e,ke,ut),Pe(e,ee()),null}function Ts(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(Un=ee()+500,Ii&&Vt())}}function pn(e){Ot!==null&&Ot.tag===0&&!(R&6)&&Mn();var t=R;R|=1;var n=Fe.transition,r=F;try{if(Fe.transition=null,F=1,e)return e()}finally{F=r,Fe.transition=n,R=t,!(R&6)&&Vt()}}function js(){$e=$n.current,W($n)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lh(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(ss(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&li();break;case 3:bn(),W(Ee),W(ve),vs();break;case 5:gs(r);break;case 4:bn();break;case 13:W(X);break;case 19:W(X);break;case 10:ds(r.type._context);break;case 22:case 23:js()}n=n.return}if(se=e,re=e=Ht(e.current,null),ce=$e=t,ie=0,Wr=null,Cs=Di=dn=0,ke=Er=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}nn=null}return e}function bd(e,t){do{var n=re;try{if(fs(),Ao.current=hi,mi){for(var r=K.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}mi=!1}if(fn=0,le=oe=K=null,kr=!1,br=0,Es.current=null,n===null||n.return===null){ie=1,Wr=t,re=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=ce,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=Bu(l);if(y!==null){y.flags&=-257,Uu(y,l,a,i,t),y.mode&1&&bu(i,u,t),t=y,s=u;var S=t.updateQueue;if(S===null){var k=new Set;k.add(s),t.updateQueue=k}else S.add(s);break e}else{if(!(t&1)){bu(i,u,t),$s();break e}s=Error(E(426))}}else if(V&&a.mode&1){var N=Bu(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Uu(N,l,a,i,t),us(Bn(s,a));break e}}i=s=Bn(s,a),ie!==4&&(ie=2),Er===null?Er=[i]:Er.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Ed(i,s,t);Ru(i,f);break e;case 1:a=s;var c=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ft===null||!Ft.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Cd(i,a,t);Ru(i,v);break e}}i=i.return}while(i!==null)}Wd(n)}catch(_){t=_,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Bd(){var e=gi.current;return gi.current=hi,e===null?hi:e}function $s(){(ie===0||ie===3||ie===2)&&(ie=4),se===null||!(dn&268435455)&&!(Di&268435455)||Nt(se,ce)}function xi(e,t){var n=R;R|=2;var r=Bd();(se!==e||ce!==t)&&(ut=null,ln(e,t));do try{ig();break}catch(o){bd(e,o)}while(!0);if(fs(),R=n,gi.current=r,re!==null)throw Error(E(261));return se=null,ce=0,ie}function ig(){for(;re!==null;)Ud(re)}function lg(){for(;re!==null&&!zm();)Ud(re)}function Ud(e){var t=Vd(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Wd(e):re=t,Es.current=null}function Wd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qh(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,re=null;return}}else if(n=Jh(n,t,$e),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ie===0&&(ie=5)}function en(e,t,n){var r=F,o=Fe.transition;try{Fe.transition=null,F=1,ag(e,t,n,r)}finally{Fe.transition=o,F=r}return null}function ag(e,t,n,r){do Mn();while(Ot!==null);if(R&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(bm(e,i),e===se&&(re=se=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Eo||(Eo=!0,Yd(ei,function(){return Mn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Fe.transition,Fe.transition=null;var l=F;F=1;var a=R;R|=4,Es.current=null,tg(e,n),Fd(n,e),Th(aa),ni=!!la,aa=la=null,e.current=n,ng(n),Om(),R=a,F=l,Fe.transition=i}else e.current=n;if(Eo&&(Eo=!1,Ot=e,yi=o),i=e.pendingLanes,i===0&&(Ft=null),Rm(n.stateNode),Pe(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(vi)throw vi=!1,e=Ta,Ta=null,e;return yi&1&&e.tag!==0&&Mn(),i=e.pendingLanes,i&1?e===ja?Cr++:(Cr=0,ja=e):Cr=0,Vt(),null}function Mn(){if(Ot!==null){var e=Ef(yi),t=Fe.transition,n=F;try{if(Fe.transition=null,F=16>e?16:e,Ot===null)var r=!1;else{if(e=Ot,Ot=null,yi=0,R&6)throw Error(E(331));var o=R;for(R|=4,j=e.current;j!==null;){var i=j,l=i.child;if(j.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(j=u;j!==null;){var p=j;switch(p.tag){case 0:case 11:case 15:_r(8,p,i)}var h=p.child;if(h!==null)h.return=p,j=h;else for(;j!==null;){p=j;var m=p.sibling,y=p.return;if(Rd(p),p===u){j=null;break}if(m!==null){m.return=y,j=m;break}j=y}}}var S=i.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var N=k.sibling;k.sibling=null,k=N}while(k!==null)}}j=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,j=l;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:_r(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,j=f;break e}j=i.return}}var c=e.current;for(j=c;j!==null;){l=j;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,j=d;else e:for(l=c;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mi(9,a)}}catch(_){q(a,a.return,_)}if(a===l){j=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,j=v;break e}j=a.return}}if(R=o,Vt(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(ji,e)}catch{}r=!0}return r}finally{F=n,Fe.transition=t}}return!1}function nc(e,t,n){t=Bn(n,t),t=Ed(e,t,1),e=Dt(e,t,1),t=xe(),e!==null&&(Gr(e,1,t),Pe(e,t))}function q(e,t,n){if(e.tag===3)nc(e,e,n);else for(;t!==null;){if(t.tag===3){nc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=Bn(n,e),e=Cd(t,e,1),t=Dt(t,e,1),e=xe(),t!==null&&(Gr(t,1,e),Pe(t,e));break}}t=t.return}}function sg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ce&n)===n&&(ie===4||ie===3&&(ce&130023424)===ce&&500>ee()-Ps?ln(e,0):Cs|=n),Pe(e,t)}function Qd(e,t){t===0&&(e.mode&1?(t=mo,mo<<=1,!(mo&130023424)&&(mo=4194304)):t=1);var n=xe();e=yt(e,t),e!==null&&(Gr(e,t,n),Pe(e,n))}function ug(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qd(e,n)}function cg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Qd(e,n)}var Vd;Vd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,Zh(e,t,n);_e=!!(e.flags&131072)}else _e=!1,V&&t.flags&1048576&&Kf(t,ui,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bo(e,t),e=t.pendingProps;var o=Fn(t,ve.current);Rn(t,n),o=xs(null,t,r,e,o,n);var i=ws();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(i=!0,ai(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ms(t),o.updater=Ri,t.stateNode=o,o._reactInternals=t,ga(t,r,e,n),t=xa(null,t,r,!0,i,n)):(t.tag=0,V&&i&&as(t),ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=dg(r),e=Qe(r,e),o){case 0:t=ya(null,t,r,e,n);break e;case 1:t=Vu(null,t,r,e,n);break e;case 11:t=Wu(null,t,r,e,n);break e;case 14:t=Qu(null,t,r,Qe(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),ya(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Vu(e,t,r,o,n);case 3:e:{if($d(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,o=i.element,nd(e,t),di(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Bn(Error(E(423)),t),t=Yu(e,t,r,n,o);break e}else if(r!==o){o=Bn(Error(E(424)),t),t=Yu(e,t,r,n,o);break e}else for(Ne=Mt(t.stateNode.containerInfo.firstChild),ze=t,V=!0,Ye=null,n=ed(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(An(),r===o){t=xt(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return rd(t),e===null&&pa(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,sa(r,o)?l=null:i!==null&&sa(r,i)&&(t.flags|=32),jd(e,t),ye(e,t,l,n),t.child;case 6:return e===null&&pa(t),null;case 13:return Nd(e,t,n);case 4:return hs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Wu(e,t,r,o,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,b(ci,r._currentValue),r._currentValue=l,i!==null)if(Ze(i.value,l)){if(i.children===o.children&&!Ee.current){t=xt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=ht(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ma(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(E(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ma(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Rn(t,n),o=Ae(o),r=r(o),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,o=Qe(r,t.pendingProps),o=Qe(r.type,o),Qu(e,t,r,o,n);case 15:return Pd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),bo(e,t),t.tag=1,Ce(r)?(e=!0,ai(t)):e=!1,Rn(t,n),_d(t,r,o),ga(t,r,o,n),xa(null,t,r,!0,e,n);case 19:return zd(e,t,n);case 22:return Td(e,t,n)}throw Error(E(156,t.tag))};function Yd(e,t){return wf(e,t)}function fg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new fg(e,t,n,r)}function Ns(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dg(e){if(typeof e=="function")return Ns(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xa)return 11;if(e===Ka)return 14}return 2}function Ht(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ns(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case xn:return an(n.children,o,i,t);case Ga:l=8,o|=8;break;case Hl:return e=De(12,n,t,o|2),e.elementType=Hl,e.lanes=i,e;case bl:return e=De(13,n,t,o),e.elementType=bl,e.lanes=i,e;case Bl:return e=De(19,n,t,o),e.elementType=Bl,e.lanes=i,e;case nf:return Fi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ef:l=10;break e;case tf:l=9;break e;case Xa:l=11;break e;case Ka:l=14;break e;case Tt:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=De(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function an(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Fi(e,t,n,r){return e=De(22,e,r,t),e.elementType=nf,e.lanes=n,e.stateNode={isHidden:!1},e}function Tl(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function jl(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sl(0),this.expirationTimes=sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function zs(e,t,n,r,o,i,l,a,s){return e=new pg(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=De(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ms(i),e}function mg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Gd(e){if(!e)return Ut;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ce(n))return Gf(e,n,t)}return t}function Xd(e,t,n,r,o,i,l,a,s){return e=zs(n,r,!0,e,o,i,l,a,s),e.context=Gd(null),n=e.current,r=xe(),o=At(n),i=ht(r,o),i.callback=t??null,Dt(n,i,o),e.current.lanes=o,Gr(e,o,r),Pe(e,r),e}function Ai(e,t,n,r){var o=t.current,i=xe(),l=At(o);return n=Gd(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(o,t,l),e!==null&&(Xe(e,o,l,i),Fo(e,o,l)),l}function wi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Os(e,t){rc(e,t),(e=e.alternate)&&rc(e,t)}function hg(){return null}var Kd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Is(e){this._internalRoot=e}Hi.prototype.render=Is.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ai(e,t,null,null)};Hi.prototype.unmount=Is.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Ai(null,e,null,null)}),t[vt]=null}};function Hi(e){this._internalRoot=e}Hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&$f(e)}};function Ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function oc(){}function gg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=wi(l);i.call(u)}}var l=Xd(t,r,e,0,null,!1,!1,"",oc);return e._reactRootContainer=l,e[vt]=l.current,Mr(e.nodeType===8?e.parentNode:e),pn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=wi(s);a.call(u)}}var s=zs(e,0,!1,null,null,!1,!1,"",oc);return e._reactRootContainer=s,e[vt]=s.current,Mr(e.nodeType===8?e.parentNode:e),pn(function(){Ai(t,s,n,r)}),s}function Bi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=wi(l);a.call(s)}}Ai(t,l,e,o)}else l=gg(n,t,e,o,r);return wi(l)}Cf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=mr(t.pendingLanes);n!==0&&(qa(t,n|1),Pe(t,ee()),!(R&6)&&(Un=ee()+500,Vt()))}break;case 13:pn(function(){var r=yt(e,1);if(r!==null){var o=xe();Xe(r,e,1,o)}}),Os(e,1)}};es=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=xe();Xe(t,e,134217728,n)}Os(e,134217728)}};Pf=function(e){if(e.tag===13){var t=At(e),n=yt(e,t);if(n!==null){var r=xe();Xe(n,e,t,r)}Os(e,t)}};Tf=function(){return F};jf=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Jl=function(e,t,n){switch(t){case"input":if(Ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Oi(r);if(!o)throw Error(E(90));of(r),Ql(r,o)}}}break;case"textarea":af(e,n);break;case"select":t=n.value,t!=null&&zn(e,!!n.multiple,t,!1)}};mf=Ts;hf=pn;var vg={usingClientEntryPoint:!1,Events:[Kr,_n,Oi,df,pf,Ts]},fr={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yg={bundleType:fr.bundleType,version:fr.version,rendererPackageName:fr.rendererPackageName,rendererConfig:fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yf(e),e===null?null:e.stateNode},findFiberByHostInstance:fr.findFiberByHostInstance||hg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{ji=Co.inject(yg),ot=Co}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vg;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ls(t))throw Error(E(200));return mg(e,t,null,n)};Ie.createRoot=function(e,t){if(!Ls(e))throw Error(E(299));var n=!1,r="",o=Kd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=zs(e,1,!1,null,null,n,!1,r,o),e[vt]=t.current,Mr(e.nodeType===8?e.parentNode:e),new Is(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=yf(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return pn(e)};Ie.hydrate=function(e,t,n){if(!bi(t))throw Error(E(200));return Bi(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!Ls(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Kd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Xd(t,null,e,1,n??null,o,!1,i,l),e[vt]=t.current,Mr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Hi(t)};Ie.render=function(e,t,n){if(!bi(t))throw Error(E(200));return Bi(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!bi(e))throw Error(E(40));return e._reactRootContainer?(pn(function(){Bi(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1};Ie.unstable_batchedUpdates=Ts;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bi(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Bi(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function Zd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zd)}catch(e){console.error(e)}}Zd(),Kc.exports=Ie;var Jd=Kc.exports,qd,ic=Jd;qd=ic.createRoot,ic.hydrateRoot;var ge=function(){return ge=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ge.apply(this,arguments)};function Wn(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var U="-ms-",Pr="-moz-",D="-webkit-",ep="comm",Ui="rule",Rs="decl",xg="@import",tp="@keyframes",wg="@layer",np=Math.abs,Ms=String.fromCharCode,za=Object.assign;function Sg(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function rp(e){return e.trim()}function ct(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function Qo(e,t,n){return e.indexOf(t,n)}function ae(e,t){return e.charCodeAt(t)|0}function Qn(e,t,n){return e.slice(t,n)}function tt(e){return e.length}function op(e){return e.length}function gr(e,t){return t.push(e),e}function kg(e,t){return e.map(t).join("")}function lc(e,t){return e.filter(function(n){return!ct(n,t)})}var Wi=1,Vn=1,ip=0,be=0,te=0,qn="";function Qi(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Wi,column:Vn,length:l,return:"",siblings:a}}function Pt(e,t){return za(Qi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function vn(e){for(;e.root;)e=Pt(e.root,{children:[e]});gr(e,e.siblings)}function _g(){return te}function Eg(){return te=be>0?ae(qn,--be):0,Vn--,te===10&&(Vn=1,Wi--),te}function Ke(){return te=be<ip?ae(qn,be++):0,Vn++,te===10&&(Vn=1,Wi++),te}function sn(){return ae(qn,be)}function Vo(){return be}function Vi(e,t){return Qn(qn,e,t)}function Oa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cg(e){return Wi=Vn=1,ip=tt(qn=e),be=0,[]}function Pg(e){return qn="",e}function $l(e){return rp(Vi(be-1,Ia(e===91?e+2:e===40?e+1:e)))}function Tg(e){for(;(te=sn())&&te<33;)Ke();return Oa(e)>2||Oa(te)>3?"":" "}function jg(e,t){for(;--t&&Ke()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return Vi(e,Vo()+(t<6&&sn()==32&&Ke()==32))}function Ia(e){for(;Ke();)switch(te){case e:return be;case 34:case 39:e!==34&&e!==39&&Ia(te);break;case 40:e===41&&Ia(e);break;case 92:Ke();break}return be}function $g(e,t){for(;Ke()&&e+te!==57;)if(e+te===84&&sn()===47)break;return"/*"+Vi(t,be-1)+"*"+Ms(e===47?e:Ke())}function Ng(e){for(;!Oa(sn());)Ke();return Vi(e,be)}function zg(e){return Pg(Yo("",null,null,null,[""],e=Cg(e),0,[0],e))}function Yo(e,t,n,r,o,i,l,a,s){for(var u=0,p=0,h=l,m=0,y=0,S=0,k=1,N=1,f=1,c=0,d="",v=o,_=i,x=r,w=d;N;)switch(S=c,c=Ke()){case 40:if(S!=108&&ae(w,h-1)==58){Qo(w+=I($l(c),"&","&\f"),"&\f",np(u?a[u-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:w+=$l(c);break;case 9:case 10:case 13:case 32:w+=Tg(S);break;case 92:w+=jg(Vo()-1,7);continue;case 47:switch(sn()){case 42:case 47:gr(Og($g(Ke(),Vo()),t,n,s),s);break;default:w+="/"}break;case 123*k:a[u++]=tt(w)*f;case 125*k:case 59:case 0:switch(c){case 0:case 125:N=0;case 59+p:f==-1&&(w=I(w,/\f/g,"")),y>0&&tt(w)-h&&gr(y>32?sc(w+";",r,n,h-1,s):sc(I(w," ","")+";",r,n,h-2,s),s);break;case 59:w+=";";default:if(gr(x=ac(w,t,n,u,p,o,a,d,v=[],_=[],h,i),i),c===123)if(p===0)Yo(w,t,x,x,v,i,h,a,_);else switch(m===99&&ae(w,3)===110?100:m){case 100:case 108:case 109:case 115:Yo(e,x,x,r&&gr(ac(e,x,x,0,0,o,a,d,o,v=[],h,_),_),o,_,h,a,r?v:_);break;default:Yo(w,x,x,x,[""],_,0,a,_)}}u=p=y=0,k=f=1,d=w="",h=l;break;case 58:h=1+tt(w),y=S;default:if(k<1){if(c==123)--k;else if(c==125&&k++==0&&Eg()==125)continue}switch(w+=Ms(c),c*k){case 38:f=p>0?1:(w+="\f",-1);break;case 44:a[u++]=(tt(w)-1)*f,f=1;break;case 64:sn()===45&&(w+=$l(Ke())),m=sn(),p=h=tt(d=w+=Ng(Vo())),c++;break;case 45:S===45&&tt(w)==2&&(k=0)}}return i}function ac(e,t,n,r,o,i,l,a,s,u,p,h){for(var m=o-1,y=o===0?i:[""],S=op(y),k=0,N=0,f=0;k<r;++k)for(var c=0,d=Qn(e,m+1,m=np(N=l[k])),v=e;c<S;++c)(v=rp(N>0?y[c]+" "+d:I(d,/&\f/g,y[c])))&&(s[f++]=v);return Qi(e,t,n,o===0?Ui:a,s,u,p,h)}function Og(e,t,n,r){return Qi(e,t,n,ep,Ms(_g()),Qn(e,2,-2),0,r)}function sc(e,t,n,r,o){return Qi(e,t,n,Rs,Qn(e,0,r),Qn(e,r+1,-1),r,o)}function lp(e,t,n){switch(Sg(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 4789:return Pr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+Pr+e+U+e+e;case 5936:switch(ae(e,t+11)){case 114:return D+e+U+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+U+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+U+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return D+e+U+e+e;case 6165:return D+e+U+"flex-"+e+e;case 5187:return D+e+I(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+U+"flex-$1$2")+e;case 5443:return D+e+U+"flex-item-"+I(e,/flex-|-self/g,"")+(ct(e,/flex-|baseline/)?"":U+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return D+e+U+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return D+e+U+I(e,"shrink","negative")+e;case 5292:return D+e+U+I(e,"basis","preferred-size")+e;case 6060:return D+"box-"+I(e,"-grow","")+D+e+U+I(e,"grow","positive")+e;case 4554:return D+I(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+U+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4200:if(!ct(e,/flex-|baseline/))return U+"grid-column-align"+Qn(e,t)+e;break;case 2592:case 3360:return U+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,ct(r.props,/grid-\w+-end/)})?~Qo(e+(n=n[t].value),"span",0)?e:U+I(e,"-start","")+e+U+"grid-row-span:"+(~Qo(n,"span",0)?ct(n,/\d+/):+ct(n,/\d+/)-+ct(e,/\d+/))+";":U+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ct(r.props,/grid-\w+-start/)})?e:U+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tt(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+Pr+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Qo(e,"stretch",0)?lp(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,s,u){return U+o+":"+i+u+(l?U+o+"-span:"+(a?s:+s-+i)+u:"")+e});case 4949:if(ae(e,t+6)===121)return I(e,":",":"+D)+e;break;case 6444:switch(ae(e,ae(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+D+(ae(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+U+"$2box$3")+e;case 100:return I(e,":",":"+U)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function Si(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ig(e,t,n,r){switch(e.type){case wg:if(e.children.length)break;case xg:case Rs:return e.return=e.return||e.value;case ep:return"";case tp:return e.return=e.value+"{"+Si(e.children,r)+"}";case Ui:if(!tt(e.value=e.props.join(",")))return""}return tt(n=Si(e.children,r))?e.return=e.value+"{"+n+"}":""}function Lg(e){var t=op(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function Rg(e){return function(t){t.root||(t=t.return)&&e(t)}}function Mg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Rs:e.return=lp(e.value,e.length,n);return;case tp:return Si([Pt(e,{value:I(e.value,"@","@"+D)})],r);case Ui:if(e.length)return kg(n=e.props,function(o){switch(ct(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":vn(Pt(e,{props:[I(o,/:(read-\w+)/,":"+Pr+"$1")]})),vn(Pt(e,{props:[o]})),za(e,{props:lc(n,r)});break;case"::placeholder":vn(Pt(e,{props:[I(o,/:(plac\w+)/,":"+D+"input-$1")]})),vn(Pt(e,{props:[I(o,/:(plac\w+)/,":"+Pr+"$1")]})),vn(Pt(e,{props:[I(o,/:(plac\w+)/,U+"input-$1")]})),vn(Pt(e,{props:[o]})),za(e,{props:lc(n,r)});break}return""})}}var Dg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},je={},Yn=typeof process<"u"&&je!==void 0&&(je.REACT_APP_SC_ATTR||je.SC_ATTR)||"data-styled",ap="active",sp="data-styled-version",Yi="6.1.13",Ds=`/*!sc*/
`,ki=typeof window<"u"&&"HTMLElement"in window,Fg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==""?je.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&je.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.SC_DISABLE_SPEEDY!==void 0&&je.SC_DISABLE_SPEEDY!==""&&je.SC_DISABLE_SPEEDY!=="false"&&je.SC_DISABLE_SPEEDY),Ag={},Gi=Object.freeze([]),Gn=Object.freeze({});function up(e,t,n){return n===void 0&&(n=Gn),e.theme!==n.theme&&e.theme||t||n.theme}var cp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Hg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bg=/(^-|-$)/g;function uc(e){return e.replace(Hg,"-").replace(bg,"")}var Bg=/(a)(d)/gi,Po=52,cc=function(e){return String.fromCharCode(e+(e>25?39:97))};function La(e){var t,n="";for(t=Math.abs(e);t>Po;t=t/Po|0)n=cc(t%Po)+n;return(cc(t%Po)+n).replace(Bg,"$1-$2")}var Nl,fp=5381,Nn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},dp=function(e){return Nn(fp,e)};function Fs(e){return La(dp(e)>>>0)}function Ug(e){return e.displayName||e.name||"Component"}function zl(e){return typeof e=="string"&&!0}var pp=typeof Symbol=="function"&&Symbol.for,mp=pp?Symbol.for("react.memo"):60115,Wg=pp?Symbol.for("react.forward_ref"):60112,Qg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Vg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yg=((Nl={})[Wg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nl[mp]=hp,Nl);function fc(e){return("type"in(t=e)&&t.type.$$typeof)===mp?hp:"$$typeof"in e?Yg[e.$$typeof]:Qg;var t}var Gg=Object.defineProperty,Xg=Object.getOwnPropertyNames,dc=Object.getOwnPropertySymbols,Kg=Object.getOwnPropertyDescriptor,Zg=Object.getPrototypeOf,pc=Object.prototype;function gp(e,t,n){if(typeof t!="string"){if(pc){var r=Zg(t);r&&r!==pc&&gp(e,r,n)}var o=Xg(t);dc&&(o=o.concat(dc(t)));for(var i=fc(e),l=fc(t),a=0;a<o.length;++a){var s=o[a];if(!(s in Vg||n&&n[s]||l&&s in l||i&&s in i)){var u=Kg(t,s);try{Gg(e,s,u)}catch{}}}}return e}function Xn(e){return typeof e=="function"}function As(e){return typeof e=="object"&&"styledComponentId"in e}function on(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function _i(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Qr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ra(e,t,n){if(n===void 0&&(n=!1),!n&&!Qr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ra(e[r],t[r]);else if(Qr(t))for(var r in t)e[r]=Ra(e[r],t[r]);return e}function Hs(e,t){Object.defineProperty(e,"toString",{value:t})}function Jr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Jg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Jr(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(Ds);return n},e}(),Go=new Map,Ei=new Map,Xo=1,To=function(e){if(Go.has(e))return Go.get(e);for(;Ei.has(Xo);)Xo++;var t=Xo++;return Go.set(e,t),Ei.set(t,e),t},qg=function(e,t){Xo=t+1,Go.set(e,t),Ei.set(t,e)},e0="style[".concat(Yn,"][").concat(sp,'="').concat(Yi,'"]'),t0=new RegExp("^".concat(Yn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),n0=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},r0=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ds),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var s=a.match(t0);if(s){var u=0|parseInt(s[1],10),p=s[2];u!==0&&(qg(p,u),n0(e,p,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},mc=function(e){for(var t=document.querySelectorAll(e0),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Yn)!==ap&&(r0(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function o0(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Yn,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Yn,ap),r.setAttribute(sp,Yi);var l=o0();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},i0=function(){function e(t){this.element=vp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw Jr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),l0=function(){function e(t){this.element=vp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),a0=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),hc=ki,s0={isServer:!ki,useCSSOMInjection:!Fg},Ci=function(){function e(t,n,r){t===void 0&&(t=Gn),n===void 0&&(n={});var o=this;this.options=ge(ge({},s0),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ki&&hc&&(hc=!1,mc(this)),Hs(this,function(){return function(i){for(var l=i.getTag(),a=l.length,s="",u=function(h){var m=function(f){return Ei.get(f)}(h);if(m===void 0)return"continue";var y=i.names.get(m),S=l.getGroup(h);if(y===void 0||!y.size||S.length===0)return"continue";var k="".concat(Yn,".g").concat(h,'[id="').concat(m,'"]'),N="";y!==void 0&&y.forEach(function(f){f.length>0&&(N+="".concat(f,","))}),s+="".concat(S).concat(k,'{content:"').concat(N,'"}').concat(Ds)},p=0;p<a;p++)u(p);return s}(o)})}return e.registerId=function(t){return To(t)},e.prototype.rehydrate=function(){!this.server&&ki&&mc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ge(ge({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new a0(o):r?new i0(o):new l0(o)}(this.options),new Jg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(To(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(To(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(To(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),u0=/&/g,c0=/^\s*\/\/.*$/gm;function yp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=yp(n.children,t)),n})}function f0(e){var t,n,r,o=Gn,i=o.options,l=i===void 0?Gn:i,a=o.plugins,s=a===void 0?Gi:a,u=function(m,y,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):m},p=s.slice();p.push(function(m){m.type===Ui&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(u0,n).replace(r,u))}),l.prefix&&p.push(Mg),p.push(Ig);var h=function(m,y,S,k){y===void 0&&(y=""),S===void 0&&(S=""),k===void 0&&(k="&"),t=k,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var N=m.replace(c0,""),f=zg(S||y?"".concat(S," ").concat(y," { ").concat(N," }"):N);l.namespace&&(f=yp(f,l.namespace));var c=[];return Si(f,Lg(p.concat(Rg(function(d){return c.push(d)})))),c};return h.hash=s.length?s.reduce(function(m,y){return y.name||Jr(15),Nn(m,y.name)},fp).toString():"",h}var d0=new Ci,Ma=f0(),xp=dt.createContext({shouldForwardProp:void 0,styleSheet:d0,stylis:Ma});xp.Consumer;dt.createContext(void 0);function Da(){return ne.useContext(xp)}var wp=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Ma);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Hs(this,function(){throw Jr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ma),this.name+t.hash},e}(),p0=function(e){return e>="A"&&e<="Z"};function gc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;p0(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Sp=function(e){return e==null||e===!1||e===""},kp=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Sp(i)&&(Array.isArray(i)&&i.isCss||Xn(i)?r.push("".concat(gc(o),":"),i,";"):Qr(i)?r.push.apply(r,Wn(Wn(["".concat(o," {")],kp(i),!1),["}"],!1)):r.push("".concat(gc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Dg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function bt(e,t,n,r){if(Sp(e))return[];if(As(e))return[".".concat(e.styledComponentId)];if(Xn(e)){if(!Xn(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return bt(o,t,n,r)}var i;return e instanceof wp?n?(e.inject(n,r),[e.getName(r)]):[e]:Qr(e)?kp(e):Array.isArray(e)?Array.prototype.concat.apply(Gi,e.map(function(l){return bt(l,t,n,r)})):[e.toString()]}function _p(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xn(n)&&!As(n))return!1}return!0}var m0=dp(Yi),h0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&_p(t),this.componentId=n,this.baseHash=Nn(m0,n),this.baseStyle=r,Ci.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=on(o,this.staticRulesId);else{var i=_i(bt(this.rules,t,n,r)),l=La(Nn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=on(o,l),this.staticRulesId=l}else{for(var s=Nn(this.baseHash,r.hash),u="",p=0;p<this.rules.length;p++){var h=this.rules[p];if(typeof h=="string")u+=h;else if(h){var m=_i(bt(h,t,n,r));s=Nn(s,m+p),u+=m}}if(u){var y=La(s>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),o=on(o,y)}}return o},e}(),bs=dt.createContext(void 0);bs.Consumer;var Ol={};function g0(e,t,n){var r=As(e),o=e,i=!zl(e),l=t.attrs,a=l===void 0?Gi:l,s=t.componentId,u=s===void 0?function(v,_){var x=typeof v!="string"?"sc":uc(v);Ol[x]=(Ol[x]||0)+1;var w="".concat(x,"-").concat(Fs(Yi+x+Ol[x]));return _?"".concat(_,"-").concat(w):w}(t.displayName,t.parentComponentId):s,p=t.displayName,h=p===void 0?function(v){return zl(v)?"styled.".concat(v):"Styled(".concat(Ug(v),")")}(e):p,m=t.displayName&&t.componentId?"".concat(uc(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,S=t.shouldForwardProp;if(r&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var N=t.shouldForwardProp;S=function(v,_){return k(v,_)&&N(v,_)}}else S=k}var f=new h0(n,m,r?o.componentStyle:void 0);function c(v,_){return function(x,w,P){var M=x.attrs,O=x.componentStyle,de=x.defaultProps,Je=x.foldedComponentIds,at=x.styledComponentId,Gt=x.target,tr=dt.useContext(bs),nr=Da(),Xt=x.shouldForwardProp||nr.shouldForwardProp,T=up(w,tr,de)||Gn,$=function(St,Te,st){for(var rr,Zt=ge(ge({},Te),{className:void 0,theme:st}),nl=0;nl<St.length;nl+=1){var lo=Xn(rr=St[nl])?rr(Zt):rr;for(var kt in lo)Zt[kt]=kt==="className"?on(Zt[kt],lo[kt]):kt==="style"?ge(ge({},Zt[kt]),lo[kt]):lo[kt]}return Te.className&&(Zt.className=on(Zt.className,Te.className)),Zt}(M,w,T),z=$.as||Gt,A={};for(var H in $)$[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&$.theme===T||(H==="forwardedAs"?A.as=$.forwardedAs:Xt&&!Xt(H,z)||(A[H]=$[H]));var Kt=function(St,Te){var st=Da(),rr=St.generateAndInjectStyles(Te,st.styleSheet,st.stylis);return rr}(O,$),Ue=on(Je,at);return Kt&&(Ue+=" "+Kt),$.className&&(Ue+=" "+$.className),A[zl(z)&&!cp.has(z)?"class":"className"]=Ue,A.ref=P,ne.createElement(z,A)}(d,v,_)}c.displayName=h;var d=dt.forwardRef(c);return d.attrs=y,d.componentStyle=f,d.displayName=h,d.shouldForwardProp=S,d.foldedComponentIds=r?on(o.foldedComponentIds,o.styledComponentId):"",d.styledComponentId=m,d.target=r?o.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(_){for(var x=[],w=1;w<arguments.length;w++)x[w-1]=arguments[w];for(var P=0,M=x;P<M.length;P++)Ra(_,M[P],!0);return _}({},o.defaultProps,v):v}}),Hs(d,function(){return".".concat(d.styledComponentId)}),i&&gp(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function vc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var yc=function(e){return Object.assign(e,{isCss:!0})};function Bs(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Xn(e)||Qr(e))return yc(bt(vc(Gi,Wn([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?bt(r):yc(bt(vc(r,t)))}function Fa(e,t,n){if(n===void 0&&(n=Gn),!t)throw Jr(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,Bs.apply(void 0,Wn([o],i,!1)))};return r.attrs=function(o){return Fa(e,t,ge(ge({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Fa(e,t,ge(ge({},n),o))},r}var Ep=function(e){return Fa(g0,e)},Be=Ep;cp.forEach(function(e){Be[e]=Ep(e)});var v0=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=_p(t),Ci.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(_i(bt(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Ci.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function y0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Bs.apply(void 0,Wn([e],t,!1)),o="sc-global-".concat(Fs(JSON.stringify(r))),i=new v0(r,o),l=function(s){var u=Da(),p=dt.useContext(bs),h=dt.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(h,s,u.styleSheet,p,u.stylis),dt.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,s,u.styleSheet,p,u.stylis),function(){return i.removeStyles(h,u.styleSheet)}},[h,s,u.styleSheet,p,u.stylis]),null};function a(s,u,p,h,m){if(i.isStatic)i.renderStyles(s,Ag,p,m);else{var y=ge(ge({},u),{theme:up(u,h,l.defaultProps)});i.renderStyles(s,y,p,m)}}return dt.memo(l)}function Yt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=_i(Bs.apply(void 0,Wn([e],t,!1))),o=Fs(r);return new wp(o,r)}const C={primaryBackground:"#0A0C10",secondaryBackground:"#161B22",primaryText:"#F0F6FC",secondaryText:"#8B949E",azul:"#58A6FF",accent:"#238636",hover:"#58A6FF"},x0=y0`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Poppins, sans-serif;
        list-style: none;
        text-decoration: none;
    }

    html, body {
        overflow-x: hidden;
        width: 100%;
        position: relative;
        scroll-behavior: smooth;
        box-sizing: border-box;
    }

    body {
        background-color: ${C.primaryBackground};
        color: ${C.primaryText};
        line-height: 1.6;
        min-height: 100vh;
        width: 100%;
        box-sizing: border-box;
    }

    #root {
        width: 100%;
        overflow-x: hidden;
        position: relative;
        box-sizing: border-box;
    }

    .container {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding: 0 20px;
        box-sizing: border-box;
    }

    h2 {
        text-align: center;
        margin-bottom: 2rem;
        font-size: clamp(1.5rem, 5vw, 2.5rem);
        color: ${C.primaryText};
        position: relative;
        width: 100%;
        box-sizing: border-box;
        
        &:after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background-color: ${C.azul};
            border-radius: 2px;
        }
    }

    p {
        color: ${C.secondaryText};
        font-size: clamp(0.9rem, 2vw, 1.1rem);
        max-width: 100%;
        width: 100%;
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        height: auto;
        box-sizing: border-box;
    }

    @media (max-width: 320px) {
        .container {
            padding: 0 15px;
        }
    }
`,Tr=Be.button`
  color: ${C.primaryText};
  background-color: ${C.azul};
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  cursor: pointer;
  font-size: clamp(0.9rem, 2vw, 1rem);
  padding: 0 16px;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  white-space: nowrap;
  box-sizing: border-box;

  i {
    font-size: 1.2rem;
    margin-right: 8px;
  }

  &:hover {
    background-color: ${C.hover};
    transform: translateY(-2px);
  }

  @media (max-width: 320px) {
    padding: 0 12px;
    height: 36px;

    span {
      display: none;
    }

    i {
      margin-right: 0;
    }
  }
`,Vr=Yt`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,w0=Yt`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,S0=Yt`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;Yt`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;Yt`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;Yt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;const k0=Be.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${C.primaryBackground};
  height: 70px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  overflow-x: hidden;

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    overflow-x: hidden;
  }

  .logo {
    animation: ${w0} 0.6s ease-out;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${C.primaryText};
    z-index: 1001;

    span {
      color: ${C.azul};
    }
  }

  .menu {
    ul {
      display: flex;
      gap: 32px;
      list-style: none;

      li {
        opacity: 0;
        animation: ${S0} 0.6s ease-out forwards;

        a {
          color: ${C.secondaryText};
          text-decoration: none;
          transition: color 0.3s ease;
          cursor: pointer;

          &:hover {
            color: ${C.primaryText};
          }
        }
      }
    }
  }

  .menu-toggle {
    display: none;
    cursor: pointer;
    z-index: 1001;
    font-size: 1.5rem;
    color: ${C.primaryText};
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }

    .menu {
      position: fixed;
      top: 0;
      right: -100%;
      width: 70%;
      height: 100vh;
      background-color: ${C.primaryBackground};
      padding: 80px 20px 20px;
      transition: 0.3s ease-in-out;
      box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);

      &.active {
        right: 0;
      }

      ul {
        flex-direction: column;
        align-items: center;
        gap: 20px;

        li {
          width: 100%;
          text-align: center;

          a {
            display: block;
            padding: 10px;
            font-size: 1.2rem;

            &:hover {
              background-color: ${C.secondaryBackground};
              border-radius: 4px;
            }
          }
        }
      }
    }

    .social-buttons {
      margin-left: 0;

      .contact-btn {
        padding: 8px 16px;

        span {
          display: none;
        }

        i {
          margin: 0;
        }
      }
    }
  }

  @media (max-width: 320px) {
    height: 60px;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.2rem;
      order: 1;
      text-align: center;
      flex: 1;
    }

    .menu {
      display: none;
    }

    .social-buttons {
      order: 2;
      display: flex;
      flex-direction: row;
      gap: 8px;
      margin: 0;

      .contact-btn {
        padding: 8px;

        i {
          margin: 0;
          font-size: 1.2rem;
        }
      }
    }
  }
`;Be.button`
  background-color: ${C.accent};
  color: ${C.primaryText};
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  i {
    font-size: 1rem;
  }

  &:hover {
    background-color: ${C.hover};
  }

  @media (max-width: 320px) {
    padding: 6px 12px;

    span {
      display: none;
    }

    i {
      margin: 0;
    }
  }
`;var J={},Us={},qr={},eo={},Cp="Expected a function",xc=NaN,_0="[object Symbol]",E0=/^\s+|\s+$/g,C0=/^[-+]0x[0-9a-f]+$/i,P0=/^0b[01]+$/i,T0=/^0o[0-7]+$/i,j0=parseInt,$0=typeof ao=="object"&&ao&&ao.Object===Object&&ao,N0=typeof self=="object"&&self&&self.Object===Object&&self,z0=$0||N0||Function("return this")(),O0=Object.prototype,I0=O0.toString,L0=Math.max,R0=Math.min,Il=function(){return z0.Date.now()};function M0(e,t,n){var r,o,i,l,a,s,u=0,p=!1,h=!1,m=!0;if(typeof e!="function")throw new TypeError(Cp);t=wc(t)||0,Pi(n)&&(p=!!n.leading,h="maxWait"in n,i=h?L0(wc(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m);function y(x){var w=r,P=o;return r=o=void 0,u=x,l=e.apply(P,w),l}function S(x){return u=x,a=setTimeout(f,t),p?y(x):l}function k(x){var w=x-s,P=x-u,M=t-w;return h?R0(M,i-P):M}function N(x){var w=x-s,P=x-u;return s===void 0||w>=t||w<0||h&&P>=i}function f(){var x=Il();if(N(x))return c(x);a=setTimeout(f,k(x))}function c(x){return a=void 0,m&&r?y(x):(r=o=void 0,l)}function d(){a!==void 0&&clearTimeout(a),u=0,r=s=o=a=void 0}function v(){return a===void 0?l:c(Il())}function _(){var x=Il(),w=N(x);if(r=arguments,o=this,s=x,w){if(a===void 0)return S(s);if(h)return a=setTimeout(f,t),y(s)}return a===void 0&&(a=setTimeout(f,t)),l}return _.cancel=d,_.flush=v,_}function D0(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(Cp);return Pi(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),M0(e,t,{leading:r,maxWait:t,trailing:o})}function Pi(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function F0(e){return!!e&&typeof e=="object"}function A0(e){return typeof e=="symbol"||F0(e)&&I0.call(e)==_0}function wc(e){if(typeof e=="number")return e;if(A0(e))return xc;if(Pi(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Pi(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(E0,"");var n=P0.test(e);return n||T0.test(e)?j0(e.slice(2),n?2:8):C0.test(e)?xc:+e}var H0=D0,to={};Object.defineProperty(to,"__esModule",{value:!0});to.addPassiveEventListener=function(t,n,r){var o=r.name;o||(o=n,console.warn("Listener must be a named function.")),Ko.has(n)||Ko.set(n,new Set);var i=Ko.get(n);if(!i.has(o)){var l=function(){var a=!1;try{var s=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,s)}catch{}return a}();t.addEventListener(n,r,l?{passive:!0}:!1),i.add(o)}};to.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r),Ko.get(n).delete(r.name||n)};var Ko=new Map;Object.defineProperty(eo,"__esModule",{value:!0});var b0=H0,B0=W0(b0),U0=to;function W0(e){return e&&e.__esModule?e:{default:e}}var Q0=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,B0.default)(t,n)},Y={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=Q0(function(o){Y.scrollHandler(t)},n);Y.scrollSpyContainers.push(t),(0,U0.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return Y.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=Y.scrollSpyContainers[Y.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(Y.currentPositionX(t),Y.currentPositionY(t))})},addStateHandler:function(t){Y.spySetState.push(t)},addSpyHandler:function(t,n){var r=Y.scrollSpyContainers[Y.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(Y.currentPositionX(n),Y.currentPositionY(n))},updateStates:function(){Y.spySetState.forEach(function(t){return t()})},unmount:function(t,n){Y.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),Y.spySetState&&Y.spySetState.length&&Y.spySetState.indexOf(t)>-1&&Y.spySetState.splice(Y.spySetState.indexOf(t),1),document.removeEventListener("scroll",Y.scrollHandler)},update:function(){return Y.scrollSpyContainers.forEach(function(t){return Y.scrollHandler(t)})}};eo.default=Y;var er={},no={};Object.defineProperty(no,"__esModule",{value:!0});var V0=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,o=r?"#"+r:"",i=window&&window.location,l=o?i.pathname+i.search+o:i.pathname+i.search;n?history.pushState(history.state,"",l):history.replaceState(history.state,"",l)},Y0=function(){return window.location.hash.replace(/^#/,"")},G0=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},X0=function(t){return getComputedStyle(t).position!=="static"},Ll=function(t,n){for(var r=t.offsetTop,o=t.offsetParent;o&&!n(o);)r+=o.offsetTop,o=o.offsetParent;return{offsetTop:r,offsetParent:o}},K0=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(X0(t)){if(n.offsetParent!==t){var o=function(p){return p===t||p===document},i=Ll(n,o),l=i.offsetTop,a=i.offsetParent;if(a!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return l}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var s=function(p){return p===document};return Ll(n,s).offsetTop-Ll(t,s).offsetTop};no.default={updateHash:V0,getHash:Y0,filterElementInContainer:G0,scrollOffset:K0};var Xi={},Ws={};Object.defineProperty(Ws,"__esModule",{value:!0});Ws.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var Qs={};Object.defineProperty(Qs,"__esModule",{value:!0});var Z0=to,J0=["mousedown","mousewheel","touchmove","keydown"];Qs.default={subscribe:function(t){return typeof document<"u"&&J0.forEach(function(n){return(0,Z0.addPassiveEventListener)(document,n,t)})}};var ro={};Object.defineProperty(ro,"__esModule",{value:!0});var Aa={registered:{},scrollEvent:{register:function(t,n){Aa.registered[t]=n},remove:function(t){Aa.registered[t]=null}}};ro.default=Aa;Object.defineProperty(Xi,"__esModule",{value:!0});var q0=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ev=no;Ki(ev);var tv=Ws,Sc=Ki(tv),nv=Qs,rv=Ki(nv),ov=ro,nt=Ki(ov);function Ki(e){return e&&e.__esModule?e:{default:e}}var Pp=function(t){return Sc.default[t.smooth]||Sc.default.defaultEasing},iv=function(t){return typeof t=="function"?t:function(){return t}},lv=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Ha=function(){return lv()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),Tp=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},jp=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},$p=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},av=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,o=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)},sv=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,o=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)},uv=function e(t,n,r){var o=n.data;if(!n.ignoreCancelEvents&&o.cancel){nt.default.registered.end&&nt.default.registered.end(o.to,o.target,o.currentPositionY);return}if(o.delta=Math.round(o.targetPosition-o.startPosition),o.start===null&&(o.start=r),o.progress=r-o.start,o.percent=o.progress>=o.duration?1:t(o.progress/o.duration),o.currentPosition=o.startPosition+Math.ceil(o.delta*o.percent),o.containerElement&&o.containerElement!==document&&o.containerElement!==document.body?n.horizontal?o.containerElement.scrollLeft=o.currentPosition:o.containerElement.scrollTop=o.currentPosition:n.horizontal?window.scrollTo(o.currentPosition,0):window.scrollTo(0,o.currentPosition),o.percent<1){var i=e.bind(null,t,n);Ha.call(window,i);return}nt.default.registered.end&&nt.default.registered.end(o.to,o.target,o.currentPosition)},Vs=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},oo=function(t,n,r,o){n.data=n.data||Tp(),window.clearTimeout(n.data.delayTimeout);var i=function(){n.data.cancel=!0};if(rv.default.subscribe(i),Vs(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?jp(n):$p(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){nt.default.registered.end&&nt.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=iv(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=o;var l=Pp(n),a=uv.bind(null,l,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){nt.default.registered.begin&&nt.default.registered.begin(n.data.to,n.data.target),Ha.call(window,a)},n.delay);return}nt.default.registered.begin&&nt.default.registered.begin(n.data.to,n.data.target),Ha.call(window,a)},Zi=function(t){return t=q0({},t),t.data=t.data||Tp(),t.absolute=!0,t},cv=function(t){oo(0,Zi(t))},fv=function(t,n){oo(t,Zi(n))},dv=function(t){t=Zi(t),Vs(t),oo(t.horizontal?av(t):sv(t),t)},pv=function(t,n){n=Zi(n),Vs(n);var r=n.horizontal?jp(n):$p(n);oo(t+r,n)};Xi.default={animateTopScroll:oo,getAnimationType:Pp,scrollToTop:cv,scrollToBottom:dv,scrollTo:fv,scrollMore:pv};Object.defineProperty(er,"__esModule",{value:!0});var mv=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hv=no,gv=Ys(hv),vv=Xi,yv=Ys(vv),xv=ro,jo=Ys(xv);function Ys(e){return e&&e.__esModule?e:{default:e}}var $o={},kc=void 0;er.default={unmount:function(){$o={}},register:function(t,n){$o[t]=n},unregister:function(t){delete $o[t]},get:function(t){return $o[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return kc=t},getActiveLink:function(){return kc},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=mv({},n,{absolute:!1});var o=n.containerId,i=n.container,l=void 0;o?l=document.getElementById(o):i&&i.nodeType?l=i:l=document,n.absolute=!0;var a=n.horizontal,s=gv.default.scrollOffset(l,r,a)+(n.offset||0);if(!n.smooth){jo.default.registered.begin&&jo.default.registered.begin(t,r),l===document?n.horizontal?window.scrollTo(s,0):window.scrollTo(0,s):l.scrollTop=s,jo.default.registered.end&&jo.default.registered.end(t,r);return}yv.default.animateTopScroll(s,n,t,r)}};var Np={exports:{}},wv="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Sv=wv,kv=Sv;function zp(){}function Op(){}Op.resetWarningCache=zp;var _v=function(){function e(r,o,i,l,a,s){if(s!==kv){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Op,resetWarningCache:zp};return n.PropTypes=n,n};Np.exports=_v();var Ji=Np.exports,qi={};Object.defineProperty(qi,"__esModule",{value:!0});var Ev=no,Rl=Cv(Ev);function Cv(e){return e&&e.__esModule?e:{default:e}}var Pv={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,o=r.get(t);if(o&&(n||t!==r.getActiveLink())){var i=this.containers[t]||document;r.scrollTo(t,{container:i})}},getHash:function(){return Rl.default.getHash()},changeHash:function(t,n){this.isInitialized()&&Rl.default.getHash()!==t&&Rl.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};qi.default=Pv;Object.defineProperty(qr,"__esModule",{value:!0});var No=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tv=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),jv=ne,_c=io(jv),$v=eo,zo=io($v),Nv=er,zv=io(Nv),Ov=Ji,Q=io(Ov),Iv=qi,Et=io(Iv);function io(e){return e&&e.__esModule?e:{default:e}}function Lv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Rv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Mv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Ec={to:Q.default.string.isRequired,containerId:Q.default.string,container:Q.default.object,activeClass:Q.default.string,activeStyle:Q.default.object,spy:Q.default.bool,horizontal:Q.default.bool,smooth:Q.default.oneOfType([Q.default.bool,Q.default.string]),offset:Q.default.number,delay:Q.default.number,isDynamic:Q.default.bool,onClick:Q.default.func,duration:Q.default.oneOfType([Q.default.number,Q.default.func]),absolute:Q.default.bool,onSetActive:Q.default.func,onSetInactive:Q.default.func,ignoreCancelEvents:Q.default.bool,hashSpy:Q.default.bool,saveHashHistory:Q.default.bool,spyThrottle:Q.default.number};qr.default=function(e,t){var n=t||zv.default,r=function(i){Mv(l,i);function l(a){Lv(this,l);var s=Rv(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,a));return o.call(s),s.state={active:!1},s}return Tv(l,[{key:"getScrollSpyContainer",value:function(){var s=this.props.containerId,u=this.props.container;return s&&!u?document.getElementById(s):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var s=this.getScrollSpyContainer();zo.default.isMounted(s)||zo.default.mount(s,this.props.spyThrottle),this.props.hashSpy&&(Et.default.isMounted()||Et.default.mount(n),Et.default.mapContainer(this.props.to,s)),zo.default.addSpyHandler(this.spyHandler,s),this.setState({container:s})}}},{key:"componentWillUnmount",value:function(){zo.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var s="";this.state&&this.state.active?s=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():s=this.props.className;var u={};this.state&&this.state.active?u=No({},this.props.style,this.props.activeStyle):u=No({},this.props.style);var p=No({},this.props);for(var h in Ec)p.hasOwnProperty(h)&&delete p[h];return p.className=s,p.style=u,p.onClick=this.handleClick,_c.default.createElement(e,p)}}]),l}(_c.default.PureComponent),o=function(){var l=this;this.scrollTo=function(a,s){n.scrollTo(a,No({},l.state,s))},this.handleClick=function(a){l.props.onClick&&l.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),l.scrollTo(l.props.to,l.props)},this.spyHandler=function(a,s){var u=l.getScrollSpyContainer();if(!(Et.default.isMounted()&&!Et.default.isInitialized())){var p=l.props.horizontal,h=l.props.to,m=null,y=void 0,S=void 0;if(p){var k=0,N=0,f=0;if(u.getBoundingClientRect){var c=u.getBoundingClientRect();f=c.left}if(!m||l.props.isDynamic){if(m=n.get(h),!m)return;var d=m.getBoundingClientRect();k=d.left-f+a,N=k+d.width}var v=a-l.props.offset;y=v>=Math.floor(k)&&v<Math.floor(N),S=v<Math.floor(k)||v>=Math.floor(N)}else{var _=0,x=0,w=0;if(u.getBoundingClientRect){var P=u.getBoundingClientRect();w=P.top}if(!m||l.props.isDynamic){if(m=n.get(h),!m)return;var M=m.getBoundingClientRect();_=M.top-w+s,x=_+M.height}var O=s-l.props.offset;y=O>=Math.floor(_)&&O<Math.floor(x),S=O<Math.floor(_)||O>=Math.floor(x)}var de=n.getActiveLink();if(S){if(h===de&&n.setActiveLink(void 0),l.props.hashSpy&&Et.default.getHash()===h){var Je=l.props.saveHashHistory,at=Je===void 0?!1:Je;Et.default.changeHash("",at)}l.props.spy&&l.state.active&&(l.setState({active:!1}),l.props.onSetInactive&&l.props.onSetInactive(h,m))}if(y&&(de!==h||l.state.active===!1)){n.setActiveLink(h);var Gt=l.props.saveHashHistory,tr=Gt===void 0?!1:Gt;l.props.hashSpy&&Et.default.changeHash(h,tr),l.props.spy&&(l.setState({active:!0}),l.props.onSetActive&&l.props.onSetActive(h,m))}}}};return r.propTypes=Ec,r.defaultProps={offset:0},r};Object.defineProperty(Us,"__esModule",{value:!0});var Dv=ne,Cc=Ip(Dv),Fv=qr,Av=Ip(Fv);function Ip(e){return e&&e.__esModule?e:{default:e}}function Hv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function bv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Bv=function(e){bv(t,e);function t(){var n,r,o,i;Hv(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return i=(r=(o=Pc(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),o),o.render=function(){return Cc.default.createElement("a",o.props,o.props.children)},r),Pc(o,i)}return t}(Cc.default.Component);Us.default=(0,Av.default)(Bv);var Gs={};Object.defineProperty(Gs,"__esModule",{value:!0});var Uv=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Wv=ne,Tc=Lp(Wv),Qv=qr,Vv=Lp(Qv);function Lp(e){return e&&e.__esModule?e:{default:e}}function Yv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Gv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Xv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Kv=function(e){Xv(t,e);function t(){return Yv(this,t),Gv(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return Uv(t,[{key:"render",value:function(){return Tc.default.createElement("button",this.props,this.props.children)}}]),t}(Tc.default.Component);Gs.default=(0,Vv.default)(Kv);var Xs={},el={};Object.defineProperty(el,"__esModule",{value:!0});var Zv=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jv=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),qv=ne,jc=tl(qv),ey=Jd;tl(ey);var ty=er,$c=tl(ty),ny=Ji,Nc=tl(ny);function tl(e){return e&&e.__esModule?e:{default:e}}function ry(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oy(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function iy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}el.default=function(e){var t=function(n){iy(r,n);function r(o){ry(this,r);var i=oy(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return i.childBindings={domNode:null},i}return Jv(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(i){this.props.name!==i.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;$c.default.unregister(this.props.name)}},{key:"registerElems",value:function(i){$c.default.register(i,this.childBindings.domNode)}},{key:"render",value:function(){return jc.default.createElement(e,Zv({},this.props,{parentBindings:this.childBindings}))}}]),r}(jc.default.Component);return t.propTypes={name:Nc.default.string,id:Nc.default.string},t};Object.defineProperty(Xs,"__esModule",{value:!0});var zc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ly=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ay=ne,Oc=Ks(ay),sy=el,uy=Ks(sy),cy=Ji,Ic=Ks(cy);function Ks(e){return e&&e.__esModule?e:{default:e}}function fy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function dy(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function py(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Rp=function(e){py(t,e);function t(){return fy(this,t),dy(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return ly(t,[{key:"render",value:function(){var r=this,o=zc({},this.props);return delete o.name,o.parentBindings&&delete o.parentBindings,Oc.default.createElement("div",zc({},o,{ref:function(l){r.props.parentBindings.domNode=l}}),this.props.children)}}]),t}(Oc.default.Component);Rp.propTypes={name:Ic.default.string,id:Ic.default.string};Xs.default=(0,uy.default)(Rp);var Ml=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lc=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function Rc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Mc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Dc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Oo=ne,Jt=eo,Dl=er,G=Ji,Ct=qi,Fc={to:G.string.isRequired,containerId:G.string,container:G.object,activeClass:G.string,spy:G.bool,smooth:G.oneOfType([G.bool,G.string]),offset:G.number,delay:G.number,isDynamic:G.bool,onClick:G.func,duration:G.oneOfType([G.number,G.func]),absolute:G.bool,onSetActive:G.func,onSetInactive:G.func,ignoreCancelEvents:G.bool,hashSpy:G.bool,spyThrottle:G.number},my={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||Dl,o=function(l){Dc(a,l);function a(s){Rc(this,a);var u=Mc(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return i.call(u),u.state={active:!1},u}return Lc(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,p=this.props.container;return u?document.getElementById(u):p&&p.nodeType?p:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();Jt.isMounted(u)||Jt.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Ct.isMounted()||Ct.mount(r),Ct.mapContainer(this.props.to,u)),this.props.spy&&Jt.addStateHandler(this.stateHandler),Jt.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){Jt.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var p=Ml({},this.props);for(var h in Fc)p.hasOwnProperty(h)&&delete p[h];return p.className=u,p.onClick=this.handleClick,Oo.createElement(t,p)}}]),a}(Oo.Component),i=function(){var a=this;this.scrollTo=function(s,u){r.scrollTo(s,Ml({},a.state,u))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){r.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(s){var u=a.getScrollSpyContainer();if(!(Ct.isMounted()&&!Ct.isInitialized())){var p=a.props.to,h=null,m=0,y=0,S=0;if(u.getBoundingClientRect){var k=u.getBoundingClientRect();S=k.top}if(!h||a.props.isDynamic){if(h=r.get(p),!h)return;var N=h.getBoundingClientRect();m=N.top-S+s,y=m+N.height}var f=s-a.props.offset,c=f>=Math.floor(m)&&f<Math.floor(y),d=f<Math.floor(m)||f>=Math.floor(y),v=r.getActiveLink();if(d)return p===v&&r.setActiveLink(void 0),a.props.hashSpy&&Ct.getHash()===p&&Ct.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),Jt.updateStates();if(c&&v!==p)return r.setActiveLink(p),a.props.hashSpy&&Ct.changeHash(p),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(p)),Jt.updateStates()}}};return o.propTypes=Fc,o.defaultProps={offset:0},o},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){Dc(o,r);function o(i){Rc(this,o);var l=Mc(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return l.childBindings={domNode:null},l}return Lc(o,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(l){this.props.name!==l.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Dl.unregister(this.props.name)}},{key:"registerElems",value:function(l){Dl.register(l,this.childBindings.domNode)}},{key:"render",value:function(){return Oo.createElement(t,Ml({},this.props,{parentBindings:this.childBindings}))}}]),o}(Oo.Component);return n.propTypes={name:G.string,id:G.string},n}},hy=my;Object.defineProperty(J,"__esModule",{value:!0});J.Helpers=J.ScrollElement=J.ScrollLink=J.animateScroll=J.scrollSpy=J.Events=J.scroller=J.Element=J.Button=Vp=J.Link=void 0;var gy=Us,Mp=lt(gy),vy=Gs,Dp=lt(vy),yy=Xs,Fp=lt(yy),xy=er,Ap=lt(xy),wy=ro,Hp=lt(wy),Sy=eo,bp=lt(Sy),ky=Xi,Bp=lt(ky),_y=qr,Up=lt(_y),Ey=el,Wp=lt(Ey),Cy=hy,Qp=lt(Cy);function lt(e){return e&&e.__esModule?e:{default:e}}var Vp=J.Link=Mp.default;J.Button=Dp.default;J.Element=Fp.default;J.scroller=Ap.default;J.Events=Hp.default;J.scrollSpy=bp.default;J.animateScroll=Bp.default;J.ScrollLink=Up.default;J.ScrollElement=Wp.default;J.Helpers=Qp.default;J.default={Link:Mp.default,Button:Dp.default,Element:Fp.default,scroller:Ap.default,Events:Hp.default,scrollSpy:bp.default,animateScroll:Bp.default,ScrollLink:Up.default,ScrollElement:Wp.default,Helpers:Qp.default};const Py=Yt`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Ty=Yt`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`,jy=Be.div`
  animation: ${Ty} 3s ease-in-out infinite;
`,$y=Be.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(8px);
`,Ny=Be.div`
  background-color: ${C.primaryBackground};
  padding: 32px;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  animation: ${Py} 0.3s ease-out;

  .modal-header {
    text-align: center;
    margin-bottom: 32px;

    .header-icon {
      font-size: 2.5rem;
      color: ${C.azul};
      margin-bottom: 16px;
      display: inline-block;
    }

    h2 {
      color: ${C.primaryText};
      font-size: 1.5rem;
      margin-bottom: 4px;
      background: linear-gradient(to right, ${C.azul}, #00bcd4);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      color: ${C.secondaryText};
      font-size: 1.1rem;
    }
  }

  .tab-container {
    width: 100%;
    padding: 0 16px;
  }

  .tab-buttons {
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
    padding: 0 16px;

    button {
      flex: 1;
      padding: 10px;
      background: transparent;
      border: 2px solid ${C.secondaryBackground};
      border-radius: 12px;
      color: ${C.secondaryText};
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      i {
        font-size: 1rem;
      }

      &.active {
        background: ${C.azul};
        border-color: ${C.azul};
        color: ${C.primaryText};
      }
    }
  }

  .section-container {
    min-height: 300px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;

    &.contacts,
    &.form {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;

    .contact-card {
      padding: 24px;
      border-radius: 8px;
      color: ${C.primaryText};
      background: ${C.secondaryBackground};
      text-decoration: none;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      i {
        font-size: 1.5rem;
      }

      h4 {
        font-size: 1rem;
        margin: 0;
      }

      p {
        font-size: 0.8rem;
        margin: 0;
        text-align: center;
        word-break: break-word;
      }

      &:hover {
        transform: translateY(-5px);
      }

      &.whatsapp {
        i {
          color: #25d366;
        }
        &:hover {
          background: #25d366;
          i, h4, p {
            color: white;
          }
        }
      }

      &.email {
        i {
          color: #ea4335;
        }
        &:hover {
          background: #ea4335;
          i, h4, p {
            color: white;
          }
        }
      }

      &.linkedin {
        i {
          color: #0077b5;
        }
        &:hover {
          background: #0077b5;
          i, h4, p {
            color: white;
          }
        }
      }

      &.github {
        i {
          color: #333;
        }
        &:hover {
          background: #333;
          i, h4, p {
            color: white;
          }
        }
      }
    }
  }

  .close-button {
    position: absolute;
    top: 16px;
    right: 16px;
    background: transparent;
    border: none;
    color: ${C.secondaryText};
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${C.primaryText};
      background: ${C.secondaryBackground};
      transform: rotate(90deg);
    }
  }

  /* Media queries com valores fixos */
  @media (max-width: 768px) {
    padding: 24px;
    
    .modal-content {
      width: 90%;
      max-width: 400px;
      margin: 20px;
      max-height: 90vh;
    }

    .modal-header {
      h2 {
        font-size: 1.3rem;
      }

      p {
        font-size: 0.9rem;
      }
    }

    .tab-container {
      padding: 0 12px;
    }

    .tab-buttons {
      display: grid;
      grid-template-columns: 1fr;
      width: 100%;
      gap: 10px;

      button {
        width: 100%;
        padding: 12px;
      }
    }

    .contact-grid {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 0;

      .contact-card {
        padding: 16px;
        width: 100%;

        i {
          font-size: 1.2rem;
        }

        h4 {
          font-size: 0.9rem;
        }

        p {
          font-size: 0.75rem;
        }
      }
    }
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`,zy=Be.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .form-group {
    position: relative;

    i {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: ${C.azul};
      font-size: 1rem;
    }

    textarea {
      width: 100%;
      padding: 10px 10px 10px 35px;
      background-color: ${C.secondaryBackground};
      border: 1px solid transparent;
      border-radius: 8px;
      color: ${C.primaryText};
      font-size: 0.95rem;
      transition: all 0.3s ease;
      min-height: 120px;
      resize: none;

      &:focus {
        border-color: ${C.azul};
        outline: none;
      }

      & ~ i {
        top: 12px;
        transform: none;
      }
    }

    input,
    select {
      width: 100%;
      padding: 10px 10px 10px 35px;
      background-color: ${C.secondaryBackground};
      border: 1px solid transparent;
      border-radius: 8px;
      color: ${C.primaryText};
      font-size: 0.95rem;
      transition: all 0.3s ease;

      &:focus {
        border-color: ${C.azul};
        outline: none;
      }
    }

    select {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23666' viewBox='0 0 16 16'%3E%3Cpath d='M8 11l-7-7h14l-7 7z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 16px center;
      cursor: pointer;
    }
  }

  .submit-btn {
    padding: 10px;
    background-color: #25d366;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;
    font-weight: 600;

    i {
      font-size: 1.1rem;
    }

    &:hover {
      background-color: #128c7e;
      transform: translateY(-2px);
    }
  }
`,Oy=({isOpen:e,onClose:t})=>{const[n,r]=ne.useState({nome:"",email:"",telefone:"",mensagem:"",tipo:"projeto"}),[o,i]=ne.useState("contacts"),l=s=>{r({...n,[s.target.name]:s.target.value})},a=s=>{s.preventDefault();const u=`Olá! Me chamo ${n.nome}.

Tipo de Contato: ${n.tipo}
Email: ${n.email}
Telefone: ${n.telefone}

Mensagem: ${n.mensagem}`,p=`https://wa.me/16992445497?text=${encodeURIComponent(u)}`;window.open(p,"_blank")};return e?g.jsx($y,{onClick:t,children:g.jsxs(Ny,{onClick:s=>s.stopPropagation(),children:[g.jsx("button",{className:"close-button",onClick:t,children:g.jsx("i",{className:"fas fa-times"})}),g.jsxs("div",{className:"modal-header",children:[g.jsx(jy,{className:"header-icon",children:g.jsx("i",{className:"fas fa-handshake"})}),g.jsx("h2",{children:"Contatos"})]}),g.jsxs("div",{className:"tab-buttons",children:[g.jsxs("button",{className:o==="contacts"?"active":"",onClick:()=>i("contacts"),children:[g.jsx("i",{className:"fas fa-address-book"}),"Contatos"]}),g.jsxs("button",{className:o==="form"?"active":"",onClick:()=>i("form"),children:[g.jsx("i",{className:"far fa-paper-plane"}),"Formulário"]})]}),g.jsxs("div",{className:`section-container ${o}`,children:[o==="contacts"&&g.jsxs("div",{className:"contact-grid",children:[g.jsxs("a",{href:"https://wa.me/16992445497",target:"_blank",rel:"noopener noreferrer",className:"contact-card whatsapp",children:[g.jsx("i",{className:"fab fa-whatsapp"}),g.jsx("h4",{children:"WhatsApp"}),g.jsx("p",{children:"(16) 99244-5497"})]}),g.jsxs("a",{href:"mailto:rodrigodasilvapires@gmail.com",className:"contact-card email",children:[g.jsx("i",{className:"far fa-envelope"}),g.jsx("h4",{children:"Email"}),g.jsx("p",{children:"rodrigodasilvapires@gmail.com"})]}),g.jsxs("a",{href:"https://www.linkedin.com/in/rodrigo-da-silva-pires-a5223b25b/",target:"_blank",rel:"noopener noreferrer",className:"contact-card linkedin",children:[g.jsx("i",{className:"fab fa-linkedin"}),g.jsx("h4",{children:"LinkedIn"}),g.jsx("p",{children:"Conecte-se comigo"})]}),g.jsxs("a",{href:"https://github.com/rodrigao-sp",target:"_blank",rel:"noopener noreferrer",className:"contact-card github",children:[g.jsx("i",{className:"fab fa-github"}),g.jsx("h4",{children:"GitHub"}),g.jsx("p",{children:"Veja meus projetos"})]})]}),o==="form"&&g.jsxs(zy,{onSubmit:a,children:[g.jsxs("div",{className:"form-group",children:[g.jsx("i",{className:"far fa-user"}),g.jsx("input",{type:"text",name:"nome",placeholder:"Seu nome",value:n.nome,onChange:l,required:!0})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("i",{className:"far fa-envelope"}),g.jsx("input",{type:"email",name:"email",placeholder:"Seu email",value:n.email,onChange:l,required:!0})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("i",{className:"fas fa-phone"}),g.jsx("input",{type:"tel",name:"telefone",placeholder:"Seu telefone",value:n.telefone,onChange:l,required:!0})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("i",{className:"fas fa-tag"}),g.jsxs("select",{name:"tipo",value:n.tipo,onChange:l,required:!0,children:[g.jsx("option",{value:"projeto",children:"Projeto"}),g.jsx("option",{value:"freelance",children:"Freelance"}),g.jsx("option",{value:"mentoria",children:"Mentoria"}),g.jsx("option",{value:"outro",children:"Outro"})]})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("i",{className:"far fa-comment-alt"}),g.jsx("textarea",{name:"mensagem",placeholder:"Sua mensagem",value:n.mensagem,onChange:l,required:!0})]}),g.jsxs("button",{type:"submit",className:"submit-btn",children:[g.jsx("i",{className:"fab fa-send"}),"Enviar"]})]})]})]})}):null},Iy=()=>{const[e,t]=ne.useState(!1);return g.jsxs(g.Fragment,{children:[g.jsx(k0,{children:g.jsxs("div",{className:"container",children:[g.jsxs("div",{className:"logo",children:["Rodrigo ",g.jsx("span",{children:"S. Pires"})]}),g.jsx("nav",{className:"menu",children:g.jsx("ul",{children:["Início","Qualidades","Projetos"].map((n,r)=>g.jsx("li",{children:g.jsx(Vp,{to:n,smooth:!0,duration:500,children:n})},r))})}),g.jsx("div",{className:"social-buttons",children:g.jsxs(Tr,{className:"contact-btn","aria-label":"Contatos",onClick:()=>t(!0),children:[g.jsx("i",{className:"fa-solid fa-handshake"}),g.jsx("span",{children:"Trabalhar juntos"})]})})]})}),g.jsx(Oy,{isOpen:e,onClose:()=>t(!1)})]})},Ly=Be.section`
  display: flex;
  align-items: center;
  padding: 100px 0 0;
  min-height: 100vh;
  background: linear-gradient(145deg, ${C.primaryBackground} 0%, ${C.secondaryBackground} 100%);
  position: relative;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 10% 20%, rgba(53, 125, 255, 0.1) 0%, transparent 30%),
      radial-gradient(circle at 80% 70%, rgba(50, 50, 100, 0.08) 0%, transparent 30%),
      radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 60%);
    z-index: 0;
    opacity: 0.6;
  }

  .container {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    min-height: calc(100vh - 100px);
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      min-height: calc(100vh - 60px);
    }
  }

  .txt {
    flex: 1;
    animation: ${Vr} 0.8s ease-out;
    padding-bottom: 2rem;

    p {
      font-size: clamp(1.5rem, 4vw, 2.5rem);
      margin-bottom: 2rem;
      line-height: 1.4;

      .typing {
        color: ${C.azul};
        font-weight: 700;
      }

      .cursor {
        animation: blink 1s infinite;
        color: ${C.azul};
      }
    }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .btns {
    display: flex;
    gap: 16px;

    @media (max-width: 768px) {
      justify-content: center;
      flex-wrap: wrap;
    }

    .github {
      background-color: #333;
      &:hover { background-color: #444; }
    }

    .linkedin {
      background-color: #0073b1;
      &:hover { background-color: #0077b5; }
    }

    .curriculo {
      background-color: #2ecc71;
      &:hover { background-color: #27ae60; }
    }

    .btn {
      opacity: 0;
      animation: ${Vr} 0.5s ease-out forwards;

      &:nth-child(1) { animation-delay: 0.4s; }
      &:nth-child(2) { animation-delay: 0.6s; }
      &:nth-child(3) { animation-delay: 0.8s; }
    }
  }

  .image {
    margin: 0;
    padding: 0;
    line-height: 0;
    align-self: flex-end;
    position: relative;
    z-index: 2;
    max-width: 345px;
    width: 100%;

    img {
      width: 100%;
      height: auto;
      display: block;
      margin-bottom: -4px;
      vertical-align: bottom;
    }
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column-reverse;
      padding: 20px;
      gap: 30px;
      min-height: auto;
      text-align: center;

      .text {
        max-width: 100%;
        align-items: center;
      }

      .image {
        width: 280px;
        height: 280px;
        margin: 0 auto;
        border-radius: 50%;
        overflow: hidden;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 0px;
        }
      }

      .buttons {
        justify-content: center;
      }
    }
  }

  @media (max-width: 320px) {
    padding: 0;
    margin-top: 60px;

    .container {
      padding: 20px 20px 0;

      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 20px;
        min-height: calc(100vh - 60px);

        .image {
          width: 100% !important;
          height: auto !important;
          display: flex;
          justify-content: center;
          margin: auto 0 -4px !important;
          border-radius: 0;
          order: 2;
          max-width: 70%;

          img {
            width: 100% !important;
            height: auto !important;
            object-fit: contain;
            border-radius: 0;
            margin-bottom: -4px;
          }
        }

        .btns {
          display: flex !important;
          justify-content: center !important;
          gap: 15px !important;
          width: 100% !important;
          padding: 0 20px;
          order: 1;
          margin-bottom: 2rem;

          button {
            width: auto !important;
            padding: 12px !important;

            span { display: none !important; }
            i { margin: 0 !important; font-size: 1.5rem !important; }
          }
        }
      }
    }
  }
`,Ry="/portfolio/assets/images/Perfil.webp",My="https://github.com/rodrigao-sp",Dy="https://www.linkedin.com/in/rodrigo-da-silva-pires-a5223b25b/",Fy="/portfolio/curriculo.pdf",Fl=e=>{window.open(e,"_blank","noopener noreferrer")},Ay=()=>{const[e,t]=ne.useState(""),[n,r]=ne.useState(!1),o=ne.useMemo(()=>["Front-end","React","TypeScript"],[]),[i,l]=ne.useState(0);return ne.useEffect(()=>{let a;const s=o[i],u=n&&e.length>0,p=!n&&e.length<s.length,h=n&&e.length===0;return u?a=setTimeout(()=>{t(m=>m.slice(0,-1))},50):p?a=setTimeout(()=>{t(s.slice(0,e.length+1))},100):h?(r(!1),l(m=>(m+1)%o.length)):e===s&&(a=setTimeout(()=>r(!0),2e3)),()=>clearTimeout(a)},[e,n,i,o]),g.jsx(Ly,{id:"Início",children:g.jsx("div",{className:"container",children:g.jsxs("div",{className:"content",children:[g.jsxs("div",{className:"txt",children:[g.jsxs("p",{children:["Olá,",g.jsx("br",{}),"Meu nome é Rodrigo, e sou um desenvolvedor",g.jsxs("span",{className:"typing",children:[" ",e]}),g.jsx("span",{className:"cursor",children:"|"})]}),g.jsxs("div",{className:"btns",children:[g.jsxs(Tr,{onClick:()=>Fl(My),className:"social-icon btn github","aria-label":"GitHub",children:[g.jsx("i",{className:"fab fa-github"}),g.jsx("span",{children:"GitHub"})]}),g.jsxs(Tr,{onClick:()=>Fl(Dy),className:"social-icon btn linkedin","aria-label":"LinkedIn",children:[g.jsx("i",{className:"fa-brands fa-linkedin-in"}),g.jsx("span",{children:"LinkedIn"})]}),g.jsxs(Tr,{onClick:()=>Fl(Fy),className:"social-icon btn curriculo","aria-label":"Currículo",children:[g.jsx("i",{className:"fas fa-file-alt"}),g.jsx("span",{children:"Currículo"})]})]})]}),g.jsx("div",{className:"image",children:g.jsx("img",{src:Ry,alt:"Foto de perfil de Rodrigo da Silva Pires",className:"profile-image"})})]})})})},Hy=Be.section`
  width: 100%;
  overflow: hidden;
  padding-top: 100px;
  background-color: ${C.secondaryBackground};
  position: relative;
  z-index: 1;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 24px;
    color: ${C.primaryText};
  }

  p {
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  .icons {
    display: flex;
    margin-bottom: 5rem;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
  }

  .icon-item {
    position: relative;
    display: inline-flex;
    transition: transform 0.3s;
  }

  .itemLeft,
  .itemRight,
  .tooltip {
    position: absolute;
    text-align: center;
    color: ${C.primaryText};
  }

  .icon-item:hover {
    transform: scale(1.2);
    filter: brightness(1.2);
  }

  .icon-item img {
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .tooltip {
    visibility: hidden;
    width: 120px;
    background-color: ${C.secondaryBackground};
    padding: 8px;
    border-radius: 8px;
    bottom: -80%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    transition: opacity 0.3s;
  }

  .icon-item:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }

  .wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 100px;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0)
    );
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    justify-items: center;
  }

  .itemLeft,
  .itemRight {
    width: 250px;
    height: 50px;
    background-color: #3c3c3c;
    border-radius: 8px;
    animation-timing-function: linear;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .itemLeft {
    left: max(calc(250px * 8), 100%);
    animation-name: scrollLeft;
  }

  .itemRight {
    right: max(calc(250px * 8), calc(100% + 250px));
    animation-name: scrollRight;
  }

  .item1 {
    animation-delay: calc(30s / 8 * (8 - 1) * -1);
  }

  .item2 {
    animation-delay: calc(30s / 8 * (8 - 2) * -1);
  }

  .item3 {
    animation-delay: calc(30s / 8 * (8 - 3) * -1);
  }

  .item4 {
    animation-delay: calc(30s / 8 * (8 - 4) * -1);
  }

  .item5 {
    animation-delay: calc(30s / 8 * (8 - 5) * -1);
  }

  .item6 {
    animation-delay: calc(30s / 8 * (8 - 6) * -1);
  }

  .item7 {
    animation-delay: calc(30s / 8 * (8 - 7) * -1);
  }

  .item8 {
    animation-delay: calc(30s / 8 * (8 - 8) * -1);
  }

  @keyframes scrollLeft {
    to {
      left: -200px;
    }
  }

  @keyframes scrollRight {
    to {
      right: -200px;
    }
  }
`,by=[{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",alt:"HTML5",tooltip:"HTML5"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",alt:"CSS3",tooltip:"CSS3"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",alt:"Python",tooltip:"Python"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",alt:"React",tooltip:"React"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",alt:"JavaScript",tooltip:"JavaScript"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",alt:"TypeScript",tooltip:"TypeScript"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",alt:"Sass",tooltip:"Sass"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",alt:"Docker",tooltip:"Docker"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",alt:"Redux",tooltip:"Redux"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",alt:"Vue.js",tooltip:"Vue.js"},{src:"https://cdn.worldvectorlogo.com/logos/django.svg",alt:"Django",tooltip:"Django"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg",alt:"Gulp",tooltip:"Gulp"}],By=["Html","Css","JavaScript","React","Python","Bootstrap","Docker","Git"],Uy=()=>g.jsxs(Hy,{id:"Qualidades",children:[g.jsxs("div",{className:"container",children:[g.jsx("h2",{children:"Qualidades"}),g.jsx("p",{children:"Desenvolvedor front-end apaixonado por criar experiências web impactantes. Especialista em HTML, CSS e JavaScript, com domínio em React para interfaces responsivas e intuitivas. Expandindo conhecimentos em Python e comprometido com soluções eficientes para desafios complexos. Colaborativo, movido pela troca de conhecimento e constante aprimoramento técnico."}),g.jsx("div",{className:"icons",children:by.map((e,t)=>g.jsxs("div",{className:"icon-item",children:[g.jsx("img",{src:e.src,alt:e.alt}),g.jsx("div",{className:"tooltip",children:e.tooltip})]},t))}),g.jsx("h3",{children:"Especializações"})]}),g.jsx("div",{className:"wrapper",children:By.map((e,t)=>g.jsx("div",{className:`itemLeft item${t+1}`,children:e},t))})]}),Wy=Be.section`
  padding: 100px;
  background-color: ${C.secondaryBackground};
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  .container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .projetos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    padding: 20px 0;
    width: 100%;
    box-sizing: border-box;
  }

  .projeto {
    background: ${C.primaryBackground};
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    opacity: 0;
    animation: ${Vr} 0.5s ease-out forwards;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid transparent;

    @for $i from 1 through 12 {
      &:nth-child(#{$i}) {
        animation-delay: #{$i * 0.1}s;
      }
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      border-color: ${C.azul};
      background: ${C.primaryBackground};

      .projeto-imagem img {
        transform: scale(1.1);
        filter: brightness(0.9);
      }

      .projeto-conteudo {
        h3 {
          color: ${C.azul};
        }
      }
    }

    .projeto-imagem {
      width: 100%;
      height: 200px;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.5s ease;
      }
    }

    .projeto-conteudo {
      padding: 20px;
      transition: all 0.3s ease;
      width: 100%;
      box-sizing: border-box;

      h3 {
        font-size: 1.2rem;
        margin-bottom: 10px;
        color: ${C.primaryText};
        transition: color 0.3s ease;
      }

      p {
        font-size: 0.9rem;
        margin-bottom: 20px;
        color: ${C.secondaryText};
      }

      .tecnologias {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 20px;
        width: 100%;
        box-sizing: border-box;

        span {
          background: ${C.azul};
          color: ${C.primaryText};
          font-size: 0.8rem;
          padding: 5px 10px;
          border-radius: 20px;
          display: inline-block;
          white-space: nowrap;
        }
      }

      .projeto-links {
        display: flex;
        gap: 12px;
        width: 100%;
        box-sizing: border-box;

        a {
          flex: 1;
          text-align: center;
          padding: 8px;
          border-radius: 6px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          white-space: nowrap;

          &.demo {
            background: ${C.azul};
            color: ${C.primaryText};

            &:hover {
              background: ${C.hover};
              transform: translateY(-3px);
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
          }

          &.codigo {
            background: transparent;
            border: 1px solid ${C.secondaryText};
            color: ${C.secondaryText};

            &:hover {
              border-color: ${C.primaryText};
              color: ${C.primaryText};
              transform: translateY(-3px);
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 60px 0;

    .container {
      padding: 0 20px;
    }

    .projetos-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }

    .projeto {
      .projeto-info {
        padding: 15px;

        h3 {
          font-size: 1.2rem;
        }

        p {
          font-size: 0.9rem;
        }
      }

      .tecnologias {
        padding: 10px 15px;
        gap: 8px;

        span {
          font-size: 0.8rem;
          padding: 4px 8px;
        }
      }

      .links {
        padding: 10px 15px;
        gap: 10px;

        a {
          font-size: 0.9rem;
          padding: 6px 12px;
        }
      }
    }
  }
`,Qy="/portfolio/assets/images/cosmoexplorer.webp",Vy="/portfolio/assets/images/Eplay.webp",Yy="/portfolio/assets/images/Tarefas.webp",Gy="/portfolio/assets/images/Restaurante.webp",Xy="/portfolio/assets/images/Clone-disney.webp",Ky="/portfolio/assets/images/massas.webp",Zy=()=>{const e=[{titulo:"Cosmoexplorer",categoria:"sites",descricao:"Projeto sobre astronomia com temas de foguetes e viagens espaciais. Desenvolvido com Vite, React e TypeScript.",imgSrc:Qy,linkSite:"https://www.cosmoexplorer.com.br/",linkGithub:"https://github.com/rodrigao-sp/cosmoexplorer",tecnologias:["React","TypeScript","Vite","Styled Components"]},{titulo:"Eplay - Loja de Jogos",categoria:"sites",descricao:"Loja virtual de jogos com integração API e interface responsiva. Feito com React, Styled Components e Redux.",imgSrc:Vy,linkSite:"https://eplay-ashen-one.vercel.app/",linkGithub:"https://github.com/rodrigao-sp/eplay",tecnologias:["React","Styled Components","API Integration","Redux"]},{titulo:"Restaurante",categoria:"sites",descricao:"Site responsivo para restaurante, com design moderno e navegação fluida. Desenvolvido com HTML, CSS e Bootstrap.",imgSrc:Gy,linkSite:"https://restaurante-weld.vercel.app/",linkGithub:"https://github.com/rodrigao-sp/restaurante",tecnologias:["HTML","CSS","Bootstrap","JavaScript"]},{titulo:"Clone Disney+",categoria:"sites",descricao:"Clone da Disney+ com foco em desempenho e design modular, usando HTML, CSS, Gulp e SCSS.",imgSrc:Xy,linkSite:"https://clone-disneyplus-omega-gules.vercel.app/",linkGithub:"https://github.com/rodrigao-sp/clone_disneyplus",tecnologias:["HTML","SCSS","Gulp","JavaScript"]},{titulo:"Massas Grazi",categoria:"sites",descricao:" Site de delivery focado em massas artesanais, utilizando React Router DOM, Tailwind CSS, Framer Motion",imgSrc:Ky,linkSite:"https://massas-grazi.vercel.app/",linkGithub:"https://github.com/rodrigao-sp/Massas-Grazi",tecnologias:["React","TypeScript","Styled Components","Redux"]},{titulo:"Aplicação de Tarefas",categoria:"aplicacoes",descricao:"Aplicação de gerenciamento de tarefas com React, TypeScript e Styled Components, permitindo adicionar e editar tarefas.",imgSrc:Yy,linkSite:"https://minhas-tarefas-taupe-five.vercel.app/",linkGithub:"https://github.com/rodrigao-sp/minhas-tarefas",tecnologias:["React","TypeScript","Styled Components","Redux"]}];return g.jsx(Wy,{id:"Projetos",children:g.jsxs("div",{className:"container",children:[g.jsx("h2",{children:"Projetos"}),g.jsx("div",{className:"projetos-grid",children:e.map((t,n)=>g.jsxs("div",{className:"projeto",children:[g.jsxs("div",{className:"projeto-imagem",children:[g.jsx("img",{src:t.imgSrc,alt:t.titulo}),g.jsx("div",{className:"projeto-overlay",children:g.jsx("div",{className:"tecnologias",children:t.tecnologias.map((r,o)=>g.jsx("span",{children:r},o))})})]}),g.jsxs("div",{className:"projeto-conteudo",children:[g.jsx("h3",{children:t.titulo}),g.jsx("p",{children:t.descricao}),g.jsxs("div",{className:"projeto-links",children:[g.jsxs("a",{href:t.linkSite,target:"_blank",rel:"noopener noreferrer",className:"demo",children:[g.jsx("i",{className:"fas fa-external-link-alt"})," Demo"]}),t.linkGithub&&g.jsxs("a",{href:t.linkGithub,target:"_blank",rel:"noopener noreferrer",className:"codigo",children:[g.jsx("i",{className:"fab fa-github"})," Código"]})]})]})]},n))})]})})},Jy=Be.footer`
  background-color: ${C.primaryBackground};
  padding: 60px 0 30px;
  position: relative;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${C.azul};
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    width: 100%;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    animation: ${Vr} 0.8s ease-out;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 320px) {
      text-align: center;
    }
  }

  h3 {
    color: ${C.primaryText};
    font-size: 1.3rem;
    margin-bottom: 25px;
    position: relative;
    font-weight: 600;
    letter-spacing: 0.5px;
    width: 100%;
    box-sizing: border-box;

    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 40px;
      height: 3px;
      background: ${C.azul};
      border-radius: 2px;

      @media (max-width: 320px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .links {
    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      box-sizing: border-box;
    }

    a {
      color: ${C.secondaryText};
      transition: all 0.3s ease;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 5px 0;
      position: relative;
      width: fit-content;
      white-space: nowrap;

      i {
        font-size: 0.8rem;
        opacity: 0.7;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }

      &:hover {
        color: ${C.primaryText};
        transform: translateX(5px);

        i {
          opacity: 1;
          transform: translateX(3px);
          color: ${C.azul};
        }
      }
    }
  }

  .social-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;

    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;
      transition: transform 0.3s ease;

      i {
        font-size: 1.5rem;
        color: ${C.primaryText};
      }

      &:hover {
        transform: translateY(-3px);
        
        i {
          color: ${C.azul};
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    width: 100%;
    box-sizing: border-box;

    p {
      font-size: 0.9rem;
      color: ${C.secondaryText};
      letter-spacing: 0.5px;
    }
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 18px;
    margin-top: 10px;
    width: 100%;
    box-sizing: border-box;

    .tech-item {
      display: flex;
      align-items: center;
      gap: 10px;
      color: ${C.secondaryText};
      transition: all 0.3s ease;
      opacity: 0;
      animation: ${Vr} 0.5s ease-out forwards;
      padding: 8px 12px;
      border-radius: 8px;
      background-color: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;

      @for $i from 1 through 6 {
        &:nth-child(#{$i}) {
          animation-delay: #{$i * 0.1}s;
        }
      }

      &:hover {
        color: ${C.primaryText};
        transform: translateY(-3px);
        background-color: rgba(255, 255, 255, 0.08);
        
        i {
          color: ${C.azul};
        }
      }

      i {
        font-size: 1.5rem;
        transition: all 0.3s ease;
        color: ${C.azul};
        flex-shrink: 0;
      }

      .tech-name {
        font-size: 0.9rem;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 0;
      }
    }
  }
  
  .bio {
    color: ${C.secondaryText};
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 15px;
    max-width: 300px;
    width: 100%;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    padding: 60px 0 30px;

    .container {
      padding: 0 20px;
      gap: 40px;
    }

    .footer-content {
      grid-template-columns: 1fr;
      gap: 40px;
      text-align: center;

      .footer-nav,
      .footer-info,
      .tecnologias {
        align-items: center;
      }

      ul {
        align-items: center;
      }
      
      .links a {
        margin: 0 auto;
        justify-content: center;
      }

      h3::after {
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
      }

      .social-buttons {
        justify-content: center;
      }

      .tech-grid {
        justify-content: center;
      }
      
      .bio {
        margin: 0 auto;
      }
    }
  }

  @media (max-width: 320px) {
    padding: 50px 0 25px;
    
    .footer-content {
      gap: 35px;

      h3 {
        font-size: 1.2rem;
      }

      ul li a,
      .tech-item {
        font-size: 0.9rem;
      }
    }

    .footer-nav ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      padding: 0;
      margin: 0;
      list-style: none;
    }
  }

  @media screen and (max-width: 480px) {
    .social-buttons {
      gap: 20px;
    }

    .footer-nav ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 12px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    
    .tech-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,qy=()=>{const e=new Date().getFullYear(),t=[{name:"GitHub",url:"https://github.com/rodrigao-sp",icon:"github"},{name:"LinkedIn",url:"https://www.linkedin.com/in/rodrigo-da-silva-pires-a5223b25b/",icon:"linkedin"},{name:"WhatsApp",url:"https://wa.me/16992445497?text=Olá",icon:"whatsapp"}],n=[{name:"React",icon:"fab fa-react"},{name:"TypeScript",icon:"devicon-typescript-plain"},{name:"JavaScript",icon:"fab fa-js"},{name:"HTML5",icon:"fab fa-html5"},{name:"CSS3",icon:"fab fa-css3-alt"},{name:"SASS",icon:"fab fa-sass"}],r=["Início","Qualidades","Projetos"];return g.jsx(Jy,{children:g.jsxs("div",{className:"container",children:[g.jsxs("div",{className:"footer-content",children:[g.jsxs("div",{className:"links",children:[g.jsx("h3",{children:"Navegação"}),g.jsx("ul",{children:r.map(o=>g.jsx("li",{children:g.jsxs("a",{href:`#${o}`,children:[g.jsx("i",{className:"fas fa-chevron-right"}),o]})},o))})]}),g.jsxs("div",{className:"footer-info",children:[g.jsx("h3",{children:"Contato"}),g.jsx("p",{className:"bio",children:"Desenvolvedor front-end apaixonado pela criação de interfaces interativas e responsivas."}),g.jsx("div",{className:"social-buttons",children:t.map(o=>g.jsx(Tr,{onClick:()=>window.open(o.url,"_blank"),"aria-label":o.name,children:g.jsx("i",{className:`fab fa-${o.icon}`})},o.name))})]}),g.jsxs("div",{className:"tecnologias",children:[g.jsx("h3",{children:"Tecnologias"}),g.jsx("div",{className:"tech-grid",children:n.map(o=>g.jsxs("div",{className:"tech-item",children:[g.jsx("i",{className:o.icon}),g.jsx("span",{className:"tech-name",children:o.name})]},o.name))})]})]}),g.jsx("div",{className:"footer-bottom",children:g.jsxs("p",{children:["© ",e," Rodrigo da Silva Pires. Todos os direitos reservados."]})})]})})};qd(document.getElementById("root")).render(g.jsxs(ne.StrictMode,{children:[g.jsx(x0,{}),g.jsx(Iy,{}),g.jsx(Ay,{}),g.jsx(Uy,{}),g.jsx(Zy,{}),g.jsx(qy,{})]}));
