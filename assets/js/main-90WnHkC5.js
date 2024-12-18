(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var so=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hc={exports:{}},ji={},Bc={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gr=Symbol.for("react.element"),Kp=Symbol.for("react.portal"),Xp=Symbol.for("react.fragment"),Zp=Symbol.for("react.strict_mode"),Jp=Symbol.for("react.profiler"),qp=Symbol.for("react.provider"),em=Symbol.for("react.context"),tm=Symbol.for("react.forward_ref"),nm=Symbol.for("react.suspense"),rm=Symbol.for("react.memo"),om=Symbol.for("react.lazy"),Js=Symbol.iterator;function im(e){return e===null||typeof e!="object"?null:(e=Js&&e[Js]||e["@@iterator"],typeof e=="function"?e:null)}var Uc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wc=Object.assign,Qc={};function Zn(e,t,n){this.props=e,this.context=t,this.refs=Qc,this.updater=n||Uc}Zn.prototype.isReactComponent={};Zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vc(){}Vc.prototype=Zn.prototype;function Ua(e,t,n){this.props=e,this.context=t,this.refs=Qc,this.updater=n||Uc}var Wa=Ua.prototype=new Vc;Wa.constructor=Ua;Wc(Wa,Zn.prototype);Wa.isPureReactComponent=!0;var qs=Array.isArray,bc=Object.prototype.hasOwnProperty,Qa={current:null},Yc={key:!0,ref:!0,__self:!0,__source:!0};function Gc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)bc.call(t,r)&&!Yc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Gr,type:e,key:i,ref:l,props:o,_owner:Qa.current}}function lm(e,t){return{$$typeof:Gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Va(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gr}function am(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var eu=/\/+/g;function ol(e,t){return typeof e=="object"&&e!==null&&e.key!=null?am(""+e.key):t.toString(36)}function Lo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Gr:case Kp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ol(l,0):r,qs(o)?(n="",e!=null&&(n=e.replace(eu,"$&/")+"/"),Lo(o,t,n,"",function(u){return u})):o!=null&&(Va(o)&&(o=lm(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(eu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",qs(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+ol(i,a);l+=Lo(i,t,n,s,o)}else if(s=im(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+ol(i,a++),l+=Lo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function uo(e,t,n){if(e==null)return e;var r=[],o=0;return Lo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function sm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Ro={transition:null},um={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:Qa};function Kc(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:uo,forEach:function(e,t,n){uo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return uo(e,function(){t++}),t},toArray:function(e){return uo(e,function(t){return t})||[]},only:function(e){if(!Va(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Zn;L.Fragment=Xp;L.Profiler=Jp;L.PureComponent=Ua;L.StrictMode=Zp;L.Suspense=nm;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=um;L.act=Kc;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Qa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)bc.call(t,s)&&!Yc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Gr,type:e.type,key:o,ref:i,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:em,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qp,_context:e},e.Consumer=e};L.createElement=Gc;L.createFactory=function(e){var t=Gc.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:tm,render:e}};L.isValidElement=Va;L.lazy=function(e){return{$$typeof:om,_payload:{_status:-1,_result:e},_init:sm}};L.memo=function(e,t){return{$$typeof:rm,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Ro.transition;Ro.transition={};try{e()}finally{Ro.transition=t}};L.unstable_act=Kc;L.useCallback=function(e,t){return Se.current.useCallback(e,t)};L.useContext=function(e){return Se.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};L.useEffect=function(e,t){return Se.current.useEffect(e,t)};L.useId=function(){return Se.current.useId()};L.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return Se.current.useMemo(e,t)};L.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};L.useRef=function(e){return Se.current.useRef(e)};L.useState=function(e){return Se.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return Se.current.useTransition()};L.version="18.3.1";Bc.exports=L;var te=Bc.exports;const pt=Gp(te);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm=te,fm=Symbol.for("react.element"),dm=Symbol.for("react.fragment"),pm=Object.prototype.hasOwnProperty,mm=cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hm={key:!0,ref:!0,__self:!0,__source:!0};function Xc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)pm.call(t,r)&&!hm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:fm,type:e,key:i,ref:l,props:o,_owner:mm.current}}ji.Fragment=dm;ji.jsx=Xc;ji.jsxs=Xc;Hc.exports=ji;var g=Hc.exports,Zc={exports:{}},Le={},Jc={exports:{}},qc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,$){var O=P.length;P.push($);e:for(;0<O;){var A=O-1>>>1,H=P[A];if(0<o(H,$))P[A]=$,P[O]=H,O=A;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var $=P[0],O=P.pop();if(O!==$){P[0]=O;e:for(var A=0,H=P.length,Zt=H>>>1;A<Zt;){var Qe=2*(A+1)-1,kt=P[Qe],je=Qe+1,ut=P[je];if(0>o(kt,O))je<H&&0>o(ut,kt)?(P[A]=ut,P[je]=O,A=je):(P[A]=kt,P[Qe]=O,A=Qe);else if(je<H&&0>o(ut,O))P[A]=ut,P[je]=O,A=je;else break e}}return $}function o(P,$){var O=P.sortIndex-$.sortIndex;return O!==0?O:P.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],p=1,h=null,m=3,y=!1,S=!1,k=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(P){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=P)r(u),$.sortIndex=$.expirationTime,t(s,$);else break;$=n(u)}}function v(P){if(k=!1,d(P),!S)if(n(s)!==null)S=!0,rr(_);else{var $=n(u);$!==null&&Xt(v,$.startTime-P)}}function _(P,$){S=!1,k&&(k=!1,f(C),C=-1),y=!0;var O=m;try{for(d($),h=n(s);h!==null&&(!(h.expirationTime>$)||P&&!pe());){var A=h.callback;if(typeof A=="function"){h.callback=null,m=h.priorityLevel;var H=A(h.expirationTime<=$);$=e.unstable_now(),typeof H=="function"?h.callback=H:h===n(s)&&r(s),d($)}else r(s);h=n(s)}if(h!==null)var Zt=!0;else{var Qe=n(u);Qe!==null&&Xt(v,Qe.startTime-$),Zt=!1}return Zt}finally{h=null,m=O,y=!1}}var w=!1,x=null,C=-1,M=5,z=-1;function pe(){return!(e.unstable_now()-z<M)}function qe(){if(x!==null){var P=e.unstable_now();z=P;var $=!0;try{$=x(!0,P)}finally{$?st():(w=!1,x=null)}}else w=!1}var st;if(typeof c=="function")st=function(){c(qe)};else if(typeof MessageChannel<"u"){var Kt=new MessageChannel,nr=Kt.port2;Kt.port1.onmessage=qe,st=function(){nr.postMessage(null)}}else st=function(){N(qe,0)};function rr(P){x=P,w||(w=!0,st())}function Xt(P,$){C=N(function(){P(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){S||y||(S=!0,rr(_))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var $=3;break;default:$=m}var O=m;m=$;try{return P()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,$){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var O=m;m=P;try{return $()}finally{m=O}},e.unstable_scheduleCallback=function(P,$,O){var A=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?A+O:A):O=A,P){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=O+H,P={id:p++,callback:$,priorityLevel:P,startTime:O,expirationTime:H,sortIndex:-1},O>A?(P.sortIndex=O,t(u,P),n(s)===null&&P===n(u)&&(k?(f(C),C=-1):k=!0,Xt(v,O-A))):(P.sortIndex=H,t(s,P),S||y||(S=!0,rr(_))),P},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(P){var $=m;return function(){var O=m;m=$;try{return P.apply(this,arguments)}finally{m=O}}}})(qc);Jc.exports=qc;var gm=Jc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm=te,Ie=gm;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ef=new Set,$r={};function hn(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){for($r[e]=t,e=0;e<t.length;e++)ef.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,ym=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},nu={};function wm(e){return Hl.call(nu,e)?!0:Hl.call(tu,e)?!1:ym.test(e)?nu[e]=!0:(tu[e]=!0,!1)}function xm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sm(e,t,n,r){if(t===null||typeof t>"u"||xm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var ba=/[\-:]([a-z])/g;function Ya(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ba,Ya);de[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ba,Ya);de[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ba,Ya);de[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ga(e,t,n,r){var o=de.hasOwnProperty(t)?de[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sm(t,n,o,r)&&(n=null),r||o===null?wm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),wn=Symbol.for("react.portal"),xn=Symbol.for("react.fragment"),Ka=Symbol.for("react.strict_mode"),Bl=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),nf=Symbol.for("react.context"),Xa=Symbol.for("react.forward_ref"),Ul=Symbol.for("react.suspense"),Wl=Symbol.for("react.suspense_list"),Za=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),rf=Symbol.for("react.offscreen"),ru=Symbol.iterator;function ir(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,il;function pr(e){if(il===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);il=t&&t[1]||""}return`
`+il+e}var ll=!1;function al(e,t){if(!e||ll)return"";ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{ll=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?pr(e):""}function km(e){switch(e.tag){case 5:return pr(e.type);case 16:return pr("Lazy");case 13:return pr("Suspense");case 19:return pr("SuspenseList");case 0:case 2:case 15:return e=al(e.type,!1),e;case 11:return e=al(e.type.render,!1),e;case 1:return e=al(e.type,!0),e;default:return""}}function Ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xn:return"Fragment";case wn:return"Portal";case Bl:return"Profiler";case Ka:return"StrictMode";case Ul:return"Suspense";case Wl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nf:return(e.displayName||"Context")+".Consumer";case tf:return(e._context.displayName||"Context")+".Provider";case Xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Za:return t=e.displayName||null,t!==null?t:Ql(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return Ql(e(t))}catch{}}return null}function _m(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ql(t);case 8:return t===Ka?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function of(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Em(e){var t=of(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fo(e){e._valueTracker||(e._valueTracker=Em(e))}function lf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=of(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vl(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ou(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function af(e,t){t=t.checked,t!=null&&Ga(e,"checked",t,!1)}function bl(e,t){af(e,t);var n=Wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yl(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yl(e,t,n){(t!=="number"||Jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mr=Array.isArray;function zn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Gl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(mr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function sf(e,t){var n=Wt(t.value),r=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function au(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var po,cf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cm=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){Cm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yr[t]=yr[e]})});function ff(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yr.hasOwnProperty(e)&&yr[e]?(""+t).trim():t+"px"}function df(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ff(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Pm=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xl(e,t){if(t){if(Pm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Zl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jl=null;function Ja(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ql=null,In=null,Ln=null;function su(e){if(e=Zr(e)){if(typeof ql!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Ii(t),ql(e.stateNode,e.type,t))}}function pf(e){In?Ln?Ln.push(e):Ln=[e]:In=e}function mf(){if(In){var e=In,t=Ln;if(Ln=In=null,su(e),t)for(e=0;e<t.length;e++)su(t[e])}}function hf(e,t){return e(t)}function gf(){}var sl=!1;function vf(e,t,n){if(sl)return e(t,n);sl=!0;try{return hf(e,t,n)}finally{sl=!1,(In!==null||Ln!==null)&&(gf(),mf())}}function Or(e,t){var n=e.stateNode;if(n===null)return null;var r=Ii(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var ea=!1;if(vt)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){ea=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{ea=!1}function Tm(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var wr=!1,qo=null,ei=!1,ta=null,jm={onError:function(e){wr=!0,qo=e}};function $m(e,t,n,r,o,i,l,a,s){wr=!1,qo=null,Tm.apply(jm,arguments)}function Nm(e,t,n,r,o,i,l,a,s){if($m.apply(this,arguments),wr){if(wr){var u=qo;wr=!1,qo=null}else throw Error(E(198));ei||(ei=!0,ta=u)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uu(e){if(gn(e)!==e)throw Error(E(188))}function Om(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return uu(o),e;if(i===r)return uu(o),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function wf(e){return e=Om(e),e!==null?xf(e):null}function xf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xf(e);if(t!==null)return t;e=e.sibling}return null}var Sf=Ie.unstable_scheduleCallback,cu=Ie.unstable_cancelCallback,zm=Ie.unstable_shouldYield,Im=Ie.unstable_requestPaint,ee=Ie.unstable_now,Lm=Ie.unstable_getCurrentPriorityLevel,qa=Ie.unstable_ImmediatePriority,kf=Ie.unstable_UserBlockingPriority,ti=Ie.unstable_NormalPriority,Rm=Ie.unstable_LowPriority,_f=Ie.unstable_IdlePriority,$i=null,it=null;function Mm(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot($i,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Am,Dm=Math.log,Fm=Math.LN2;function Am(e){return e>>>=0,e===0?32:31-(Dm(e)/Fm|0)|0}var mo=64,ho=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ni(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=hr(a):(i&=l,i!==0&&(r=hr(i)))}else l=n&~o,l!==0?r=hr(l):i!==0&&(r=hr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),o=1<<n,r|=e[n],t&=~o;return r}function Hm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ke(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Hm(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function na(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ef(){var e=mo;return mo<<=1,!(mo&4194240)&&(mo=64),e}function ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function Um(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ke(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function es(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function Cf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pf,ts,Tf,jf,$f,ra=!1,go=[],Lt=null,Rt=null,Mt=null,zr=new Map,Ir=new Map,Nt=[],Wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(t.pointerId)}}function ar(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Zr(t),t!==null&&ts(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Qm(e,t,n,r,o){switch(t){case"focusin":return Lt=ar(Lt,e,t,n,r,o),!0;case"dragenter":return Rt=ar(Rt,e,t,n,r,o),!0;case"mouseover":return Mt=ar(Mt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return zr.set(i,ar(zr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ir.set(i,ar(Ir.get(i)||null,e,t,n,r,o)),!0}return!1}function Nf(e){var t=nn(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=yf(n),t!==null){e.blockedOn=t,$f(e.priority,function(){Tf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=oa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jl=r,n.target.dispatchEvent(r),Jl=null}else return t=Zr(n),t!==null&&ts(t),e.blockedOn=n,!1;t.shift()}return!0}function du(e,t,n){Mo(e)&&n.delete(t)}function Vm(){ra=!1,Lt!==null&&Mo(Lt)&&(Lt=null),Rt!==null&&Mo(Rt)&&(Rt=null),Mt!==null&&Mo(Mt)&&(Mt=null),zr.forEach(du),Ir.forEach(du)}function sr(e,t){e.blockedOn===t&&(e.blockedOn=null,ra||(ra=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Vm)))}function Lr(e){function t(o){return sr(o,e)}if(0<go.length){sr(go[0],e);for(var n=1;n<go.length;n++){var r=go[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&sr(Lt,e),Rt!==null&&sr(Rt,e),Mt!==null&&sr(Mt,e),zr.forEach(t),Ir.forEach(t),n=0;n<Nt.length;n++)r=Nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&(n=Nt[0],n.blockedOn===null);)Nf(n),n.blockedOn===null&&Nt.shift()}var Rn=St.ReactCurrentBatchConfig,ri=!0;function bm(e,t,n,r){var o=F,i=Rn.transition;Rn.transition=null;try{F=1,ns(e,t,n,r)}finally{F=o,Rn.transition=i}}function Ym(e,t,n,r){var o=F,i=Rn.transition;Rn.transition=null;try{F=4,ns(e,t,n,r)}finally{F=o,Rn.transition=i}}function ns(e,t,n,r){if(ri){var o=oa(e,t,n,r);if(o===null)wl(e,t,r,oi,n),fu(e,r);else if(Qm(o,e,t,n,r))r.stopPropagation();else if(fu(e,r),t&4&&-1<Wm.indexOf(e)){for(;o!==null;){var i=Zr(o);if(i!==null&&Pf(i),i=oa(e,t,n,r),i===null&&wl(e,t,r,oi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else wl(e,t,r,null,n)}}var oi=null;function oa(e,t,n,r){if(oi=null,e=Ja(r),e=nn(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return oi=e,null}function Of(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lm()){case qa:return 1;case kf:return 4;case ti:case Rm:return 16;case _f:return 536870912;default:return 16}default:return 16}}var zt=null,rs=null,Do=null;function zf(){if(Do)return Do;var e,t=rs,n=t.length,r,o="value"in zt?zt.value:zt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Do=o.slice(e,1<r?1-r:void 0)}function Fo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vo(){return!0}function pu(){return!1}function Re(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vo:pu,this.isPropagationStopped=pu,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},os=Re(Jn),Xr=Z({},Jn,{view:0,detail:0}),Gm=Re(Xr),cl,fl,ur,Ni=Z({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(cl=e.screenX-ur.screenX,fl=e.screenY-ur.screenY):fl=cl=0,ur=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:fl}}),mu=Re(Ni),Km=Z({},Ni,{dataTransfer:0}),Xm=Re(Km),Zm=Z({},Xr,{relatedTarget:0}),dl=Re(Zm),Jm=Z({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),qm=Re(Jm),eh=Z({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),th=Re(eh),nh=Z({},Jn,{data:0}),hu=Re(nh),rh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ih={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ih[e])?!!t[e]:!1}function is(){return lh}var ah=Z({},Xr,{key:function(e){if(e.key){var t=rh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(e){return e.type==="keypress"?Fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sh=Re(ah),uh=Z({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=Re(uh),ch=Z({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),fh=Re(ch),dh=Z({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ph=Re(dh),mh=Z({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hh=Re(mh),gh=[9,13,27,32],ls=vt&&"CompositionEvent"in window,xr=null;vt&&"documentMode"in document&&(xr=document.documentMode);var vh=vt&&"TextEvent"in window&&!xr,If=vt&&(!ls||xr&&8<xr&&11>=xr),vu=" ",yu=!1;function Lf(e,t){switch(e){case"keyup":return gh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function yh(e,t){switch(e){case"compositionend":return Rf(t);case"keypress":return t.which!==32?null:(yu=!0,vu);case"textInput":return e=t.data,e===vu&&yu?null:e;default:return null}}function wh(e,t){if(Sn)return e==="compositionend"||!ls&&Lf(e,t)?(e=zf(),Do=rs=zt=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return If&&t.locale!=="ko"?null:t.data;default:return null}}var xh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xh[e.type]:t==="textarea"}function Mf(e,t,n,r){pf(r),t=ii(t,"onChange"),0<t.length&&(n=new os("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Sr=null,Rr=null;function Sh(e){Yf(e,0)}function Oi(e){var t=En(e);if(lf(t))return e}function kh(e,t){if(e==="change")return t}var Df=!1;if(vt){var pl;if(vt){var ml="oninput"in document;if(!ml){var xu=document.createElement("div");xu.setAttribute("oninput","return;"),ml=typeof xu.oninput=="function"}pl=ml}else pl=!1;Df=pl&&(!document.documentMode||9<document.documentMode)}function Su(){Sr&&(Sr.detachEvent("onpropertychange",Ff),Rr=Sr=null)}function Ff(e){if(e.propertyName==="value"&&Oi(Rr)){var t=[];Mf(t,Rr,e,Ja(e)),vf(Sh,t)}}function _h(e,t,n){e==="focusin"?(Su(),Sr=t,Rr=n,Sr.attachEvent("onpropertychange",Ff)):e==="focusout"&&Su()}function Eh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oi(Rr)}function Ch(e,t){if(e==="click")return Oi(t)}function Ph(e,t){if(e==="input"||e==="change")return Oi(t)}function Th(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Je=typeof Object.is=="function"?Object.is:Th;function Mr(e,t){if(Je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Hl.call(t,o)||!Je(e[o],t[o]))return!1}return!0}function ku(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _u(e,t){var n=ku(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ku(n)}}function Af(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Af(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hf(){for(var e=window,t=Jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jo(e.document)}return t}function as(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jh(e){var t=Hf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Af(n.ownerDocument.documentElement,n)){if(r!==null&&as(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=_u(n,i);var l=_u(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $h=vt&&"documentMode"in document&&11>=document.documentMode,kn=null,ia=null,kr=null,la=!1;function Eu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;la||kn==null||kn!==Jo(r)||(r=kn,"selectionStart"in r&&as(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&Mr(kr,r)||(kr=r,r=ii(ia,"onSelect"),0<r.length&&(t=new os("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kn)))}function yo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _n={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},hl={},Bf={};vt&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function zi(e){if(hl[e])return hl[e];if(!_n[e])return e;var t=_n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bf)return hl[e]=t[n];return e}var Uf=zi("animationend"),Wf=zi("animationiteration"),Qf=zi("animationstart"),Vf=zi("transitionend"),bf=new Map,Cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){bf.set(e,t),hn(t,[e])}for(var gl=0;gl<Cu.length;gl++){var vl=Cu[gl],Nh=vl.toLowerCase(),Oh=vl[0].toUpperCase()+vl.slice(1);Vt(Nh,"on"+Oh)}Vt(Uf,"onAnimationEnd");Vt(Wf,"onAnimationIteration");Vt(Qf,"onAnimationStart");Vt("dblclick","onDoubleClick");Vt("focusin","onFocus");Vt("focusout","onBlur");Vt(Vf,"onTransitionEnd");Fn("onMouseEnter",["mouseout","mouseover"]);Fn("onMouseLeave",["mouseout","mouseover"]);Fn("onPointerEnter",["pointerout","pointerover"]);Fn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zh=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function Pu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Nm(r,t,void 0,e),e.currentTarget=null}function Yf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Pu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Pu(o,a,u),i=s}}}if(ei)throw e=ta,ei=!1,ta=null,e}function U(e,t){var n=t[fa];n===void 0&&(n=t[fa]=new Set);var r=e+"__bubble";n.has(r)||(Gf(t,e,2,!1),n.add(r))}function yl(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[wo]){e[wo]=!0,ef.forEach(function(n){n!=="selectionchange"&&(zh.has(n)||yl(n,!1,e),yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wo]||(t[wo]=!0,yl("selectionchange",!1,t))}}function Gf(e,t,n,r){switch(Of(t)){case 1:var o=bm;break;case 4:o=Ym;break;default:o=ns}n=o.bind(null,t,n,e),o=void 0,!ea||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function wl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=nn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}vf(function(){var u=i,p=Ja(n),h=[];e:{var m=bf.get(e);if(m!==void 0){var y=os,S=e;switch(e){case"keypress":if(Fo(n)===0)break e;case"keydown":case"keyup":y=sh;break;case"focusin":S="focus",y=dl;break;case"focusout":S="blur",y=dl;break;case"beforeblur":case"afterblur":y=dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=fh;break;case Uf:case Wf:case Qf:y=qm;break;case Vf:y=ph;break;case"scroll":y=Gm;break;case"wheel":y=hh;break;case"copy":case"cut":case"paste":y=th;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=gu}var k=(t&4)!==0,N=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var c=u,d;c!==null;){d=c;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=Or(c,f),v!=null&&k.push(Fr(c,v,d)))),N)break;c=c.return}0<k.length&&(m=new y(m,S,null,n,p),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Jl&&(S=n.relatedTarget||n.fromElement)&&(nn(S)||S[yt]))break e;if((y||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,y?(S=n.relatedTarget||n.toElement,y=u,S=S?nn(S):null,S!==null&&(N=gn(S),S!==N||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=u),y!==S)){if(k=mu,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=gu,v="onPointerLeave",f="onPointerEnter",c="pointer"),N=y==null?m:En(y),d=S==null?m:En(S),m=new k(v,c+"leave",y,n,p),m.target=N,m.relatedTarget=d,v=null,nn(p)===u&&(k=new k(f,c+"enter",S,n,p),k.target=d,k.relatedTarget=N,v=k),N=v,y&&S)t:{for(k=y,f=S,c=0,d=k;d;d=vn(d))c++;for(d=0,v=f;v;v=vn(v))d++;for(;0<c-d;)k=vn(k),c--;for(;0<d-c;)f=vn(f),d--;for(;c--;){if(k===f||f!==null&&k===f.alternate)break t;k=vn(k),f=vn(f)}k=null}else k=null;y!==null&&Tu(h,m,y,k,!1),S!==null&&N!==null&&Tu(h,N,S,k,!0)}}e:{if(m=u?En(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var _=kh;else if(wu(m))if(Df)_=Ph;else{_=Eh;var w=_h}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=Ch);if(_&&(_=_(e,u))){Mf(h,_,n,p);break e}w&&w(e,m,u),e==="focusout"&&(w=m._wrapperState)&&w.controlled&&m.type==="number"&&Yl(m,"number",m.value)}switch(w=u?En(u):window,e){case"focusin":(wu(w)||w.contentEditable==="true")&&(kn=w,ia=u,kr=null);break;case"focusout":kr=ia=kn=null;break;case"mousedown":la=!0;break;case"contextmenu":case"mouseup":case"dragend":la=!1,Eu(h,n,p);break;case"selectionchange":if($h)break;case"keydown":case"keyup":Eu(h,n,p)}var x;if(ls)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Sn?Lf(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(If&&n.locale!=="ko"&&(Sn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Sn&&(x=zf()):(zt=p,rs="value"in zt?zt.value:zt.textContent,Sn=!0)),w=ii(u,C),0<w.length&&(C=new hu(C,e,null,n,p),h.push({event:C,listeners:w}),x?C.data=x:(x=Rf(n),x!==null&&(C.data=x)))),(x=vh?yh(e,n):wh(e,n))&&(u=ii(u,"onBeforeInput"),0<u.length&&(p=new hu("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=x))}Yf(h,t)})}function Fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ii(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Or(e,n),i!=null&&r.unshift(Fr(e,i,o)),i=Or(e,t),i!=null&&r.push(Fr(e,i,o))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Or(n,i),s!=null&&l.unshift(Fr(n,s,a))):o||(s=Or(n,i),s!=null&&l.push(Fr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Ih=/\r\n?/g,Lh=/\u0000|\uFFFD/g;function ju(e){return(typeof e=="string"?e:""+e).replace(Ih,`
`).replace(Lh,"")}function xo(e,t,n){if(t=ju(t),ju(e)!==t&&n)throw Error(E(425))}function li(){}var aa=null,sa=null;function ua(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ca=typeof setTimeout=="function"?setTimeout:void 0,Rh=typeof clearTimeout=="function"?clearTimeout:void 0,$u=typeof Promise=="function"?Promise:void 0,Mh=typeof queueMicrotask=="function"?queueMicrotask:typeof $u<"u"?function(e){return $u.resolve(null).then(e).catch(Dh)}:ca;function Dh(e){setTimeout(function(){throw e})}function xl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Lr(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qn=Math.random().toString(36).slice(2),ot="__reactFiber$"+qn,Ar="__reactProps$"+qn,yt="__reactContainer$"+qn,fa="__reactEvents$"+qn,Fh="__reactListeners$"+qn,Ah="__reactHandles$"+qn;function nn(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nu(e);e!==null;){if(n=e[ot])return n;e=Nu(e)}return t}e=n,n=e.parentNode}return null}function Zr(e){return e=e[ot]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Ii(e){return e[Ar]||null}var da=[],Cn=-1;function bt(e){return{current:e}}function Q(e){0>Cn||(e.current=da[Cn],da[Cn]=null,Cn--)}function B(e,t){Cn++,da[Cn]=e.current,e.current=t}var Qt={},ye=bt(Qt),Ce=bt(!1),cn=Qt;function An(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Pe(e){return e=e.childContextTypes,e!=null}function ai(){Q(Ce),Q(ye)}function Ou(e,t,n){if(ye.current!==Qt)throw Error(E(168));B(ye,t),B(Ce,n)}function Kf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,_m(e)||"Unknown",o));return Z({},n,r)}function si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,cn=ye.current,B(ye,e),B(Ce,Ce.current),!0}function zu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Kf(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,Q(Ce),Q(ye),B(ye,e)):Q(Ce),B(Ce,n)}var dt=null,Li=!1,Sl=!1;function Xf(e){dt===null?dt=[e]:dt.push(e)}function Hh(e){Li=!0,Xf(e)}function Yt(){if(!Sl&&dt!==null){Sl=!0;var e=0,t=F;try{var n=dt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,Li=!1}catch(o){throw dt!==null&&(dt=dt.slice(e+1)),Sf(qa,Yt),o}finally{F=t,Sl=!1}}return null}var Pn=[],Tn=0,ui=null,ci=0,Me=[],De=0,fn=null,mt=1,ht="";function en(e,t){Pn[Tn++]=ci,Pn[Tn++]=ui,ui=e,ci=t}function Zf(e,t,n){Me[De++]=mt,Me[De++]=ht,Me[De++]=fn,fn=e;var r=mt;e=ht;var o=32-Ke(r)-1;r&=~(1<<o),n+=1;var i=32-Ke(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,mt=1<<32-Ke(t)+o|n<<o|r,ht=i+e}else mt=1<<i|n<<o|r,ht=e}function ss(e){e.return!==null&&(en(e,1),Zf(e,1,0))}function us(e){for(;e===ui;)ui=Pn[--Tn],Pn[Tn]=null,ci=Pn[--Tn],Pn[Tn]=null;for(;e===fn;)fn=Me[--De],Me[De]=null,ht=Me[--De],Me[De]=null,mt=Me[--De],Me[De]=null}var ze=null,Oe=null,b=!1,Ge=null;function Jf(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Iu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Oe=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fn!==null?{id:mt,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Oe=null,!0):!1;default:return!1}}function pa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ma(e){if(b){var t=Oe;if(t){var n=t;if(!Iu(e,t)){if(pa(e))throw Error(E(418));t=Dt(n.nextSibling);var r=ze;t&&Iu(e,t)?Jf(r,n):(e.flags=e.flags&-4097|2,b=!1,ze=e)}}else{if(pa(e))throw Error(E(418));e.flags=e.flags&-4097|2,b=!1,ze=e}}}function Lu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function So(e){if(e!==ze)return!1;if(!b)return Lu(e),b=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ua(e.type,e.memoizedProps)),t&&(t=Oe)){if(pa(e))throw qf(),Error(E(418));for(;t;)Jf(e,t),t=Dt(t.nextSibling)}if(Lu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=ze?Dt(e.stateNode.nextSibling):null;return!0}function qf(){for(var e=Oe;e;)e=Dt(e.nextSibling)}function Hn(){Oe=ze=null,b=!1}function cs(e){Ge===null?Ge=[e]:Ge.push(e)}var Bh=St.ReactCurrentBatchConfig;function cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function ko(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ru(e){var t=e._init;return t(e._payload)}function ed(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Bt(f,c),f.index=0,f.sibling=null,f}function i(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,d,v){return c===null||c.tag!==6?(c=jl(d,f.mode,v),c.return=f,c):(c=o(c,d),c.return=f,c)}function s(f,c,d,v){var _=d.type;return _===xn?p(f,c,d.props.children,v,d.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===jt&&Ru(_)===c.type)?(v=o(c,d.props),v.ref=cr(f,c,d),v.return=f,v):(v=Vo(d.type,d.key,d.props,null,f.mode,v),v.ref=cr(f,c,d),v.return=f,v)}function u(f,c,d,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=$l(d,f.mode,v),c.return=f,c):(c=o(c,d.children||[]),c.return=f,c)}function p(f,c,d,v,_){return c===null||c.tag!==7?(c=sn(d,f.mode,v,_),c.return=f,c):(c=o(c,d),c.return=f,c)}function h(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=jl(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case co:return d=Vo(c.type,c.key,c.props,null,f.mode,d),d.ref=cr(f,null,c),d.return=f,d;case wn:return c=$l(c,f.mode,d),c.return=f,c;case jt:var v=c._init;return h(f,v(c._payload),d)}if(mr(c)||ir(c))return c=sn(c,f.mode,d,null),c.return=f,c;ko(f,c)}return null}function m(f,c,d,v){var _=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return _!==null?null:a(f,c,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case co:return d.key===_?s(f,c,d,v):null;case wn:return d.key===_?u(f,c,d,v):null;case jt:return _=d._init,m(f,c,_(d._payload),v)}if(mr(d)||ir(d))return _!==null?null:p(f,c,d,v,null);ko(f,d)}return null}function y(f,c,d,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,a(c,f,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case co:return f=f.get(v.key===null?d:v.key)||null,s(c,f,v,_);case wn:return f=f.get(v.key===null?d:v.key)||null,u(c,f,v,_);case jt:var w=v._init;return y(f,c,d,w(v._payload),_)}if(mr(v)||ir(v))return f=f.get(d)||null,p(c,f,v,_,null);ko(c,v)}return null}function S(f,c,d,v){for(var _=null,w=null,x=c,C=c=0,M=null;x!==null&&C<d.length;C++){x.index>C?(M=x,x=null):M=x.sibling;var z=m(f,x,d[C],v);if(z===null){x===null&&(x=M);break}e&&x&&z.alternate===null&&t(f,x),c=i(z,c,C),w===null?_=z:w.sibling=z,w=z,x=M}if(C===d.length)return n(f,x),b&&en(f,C),_;if(x===null){for(;C<d.length;C++)x=h(f,d[C],v),x!==null&&(c=i(x,c,C),w===null?_=x:w.sibling=x,w=x);return b&&en(f,C),_}for(x=r(f,x);C<d.length;C++)M=y(x,f,C,d[C],v),M!==null&&(e&&M.alternate!==null&&x.delete(M.key===null?C:M.key),c=i(M,c,C),w===null?_=M:w.sibling=M,w=M);return e&&x.forEach(function(pe){return t(f,pe)}),b&&en(f,C),_}function k(f,c,d,v){var _=ir(d);if(typeof _!="function")throw Error(E(150));if(d=_.call(d),d==null)throw Error(E(151));for(var w=_=null,x=c,C=c=0,M=null,z=d.next();x!==null&&!z.done;C++,z=d.next()){x.index>C?(M=x,x=null):M=x.sibling;var pe=m(f,x,z.value,v);if(pe===null){x===null&&(x=M);break}e&&x&&pe.alternate===null&&t(f,x),c=i(pe,c,C),w===null?_=pe:w.sibling=pe,w=pe,x=M}if(z.done)return n(f,x),b&&en(f,C),_;if(x===null){for(;!z.done;C++,z=d.next())z=h(f,z.value,v),z!==null&&(c=i(z,c,C),w===null?_=z:w.sibling=z,w=z);return b&&en(f,C),_}for(x=r(f,x);!z.done;C++,z=d.next())z=y(x,f,C,z.value,v),z!==null&&(e&&z.alternate!==null&&x.delete(z.key===null?C:z.key),c=i(z,c,C),w===null?_=z:w.sibling=z,w=z);return e&&x.forEach(function(qe){return t(f,qe)}),b&&en(f,C),_}function N(f,c,d,v){if(typeof d=="object"&&d!==null&&d.type===xn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case co:e:{for(var _=d.key,w=c;w!==null;){if(w.key===_){if(_=d.type,_===xn){if(w.tag===7){n(f,w.sibling),c=o(w,d.props.children),c.return=f,f=c;break e}}else if(w.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===jt&&Ru(_)===w.type){n(f,w.sibling),c=o(w,d.props),c.ref=cr(f,w,d),c.return=f,f=c;break e}n(f,w);break}else t(f,w);w=w.sibling}d.type===xn?(c=sn(d.props.children,f.mode,v,d.key),c.return=f,f=c):(v=Vo(d.type,d.key,d.props,null,f.mode,v),v.ref=cr(f,c,d),v.return=f,f=v)}return l(f);case wn:e:{for(w=d.key;c!==null;){if(c.key===w)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=o(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=$l(d,f.mode,v),c.return=f,f=c}return l(f);case jt:return w=d._init,N(f,c,w(d._payload),v)}if(mr(d))return S(f,c,d,v);if(ir(d))return k(f,c,d,v);ko(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,d),c.return=f,f=c):(n(f,c),c=jl(d,f.mode,v),c.return=f,f=c),l(f)):n(f,c)}return N}var Bn=ed(!0),td=ed(!1),fi=bt(null),di=null,jn=null,fs=null;function ds(){fs=jn=di=null}function ps(e){var t=fi.current;Q(fi),e._currentValue=t}function ha(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mn(e,t){di=e,fs=jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(fs!==e)if(e={context:e,memoizedValue:t,next:null},jn===null){if(di===null)throw Error(E(308));jn=e,di.dependencies={lanes:0,firstContext:e}}else jn=jn.next=e;return t}var rn=null;function ms(e){rn===null?rn=[e]:rn.push(e)}function nd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ms(t)):(n.next=o.next,o.next=n),t.interleaved=n,wt(e,r)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,wt(e,n)}return o=r.interleaved,o===null?(t.next=t,ms(r)):(t.next=o.next,o.next=t),r.interleaved=t,wt(e,n)}function Ao(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,es(e,n)}}function Mu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function pi(e,t,n,r){var o=e.updateQueue;$t=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,p=u=s=null,a=i;do{var m=a.lane,y=a.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,k=a;switch(m=t,y=n,k.tag){case 1:if(S=k.payload,typeof S=="function"){h=S.call(y,h,m);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,m=typeof S=="function"?S.call(y,h,m):S,m==null)break e;h=Z({},h,m);break e;case 2:$t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=y,s=h):p=p.next=y,l|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(s=h),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);pn|=l,e.lanes=l,e.memoizedState=h}}function Du(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var Jr={},lt=bt(Jr),Hr=bt(Jr),Br=bt(Jr);function on(e){if(e===Jr)throw Error(E(174));return e}function gs(e,t){switch(B(Br,t),B(Hr,e),B(lt,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}Q(lt),B(lt,t)}function Un(){Q(lt),Q(Hr),Q(Br)}function od(e){on(Br.current);var t=on(lt.current),n=Kl(t,e.type);t!==n&&(B(Hr,e),B(lt,n))}function vs(e){Hr.current===e&&(Q(lt),Q(Hr))}var K=bt(0);function mi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kl=[];function ys(){for(var e=0;e<kl.length;e++)kl[e]._workInProgressVersionPrimary=null;kl.length=0}var Ho=St.ReactCurrentDispatcher,_l=St.ReactCurrentBatchConfig,dn=0,X=null,oe=null,le=null,hi=!1,_r=!1,Ur=0,Uh=0;function me(){throw Error(E(321))}function ws(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Je(e[n],t[n]))return!1;return!0}function xs(e,t,n,r,o,i){if(dn=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ho.current=e===null||e.memoizedState===null?bh:Yh,e=n(r,o),_r){i=0;do{if(_r=!1,Ur=0,25<=i)throw Error(E(301));i+=1,le=oe=null,t.updateQueue=null,Ho.current=Gh,e=n(r,o)}while(_r)}if(Ho.current=gi,t=oe!==null&&oe.next!==null,dn=0,le=oe=X=null,hi=!1,t)throw Error(E(300));return e}function Ss(){var e=Ur!==0;return Ur=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?X.memoizedState=le=e:le=le.next=e,le}function Be(){if(oe===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=le===null?X.memoizedState:le.next;if(t!==null)le=t,oe=e;else{if(e===null)throw Error(E(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},le===null?X.memoizedState=le=e:le=le.next=e}return le}function Wr(e,t){return typeof t=="function"?t(e):t}function El(e){var t=Be(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=oe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var p=u.lane;if((dn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,X.lanes|=p,pn|=p}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Je(r,t.memoizedState)||(Ee=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,X.lanes|=i,pn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Cl(e){var t=Be(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Je(i,t.memoizedState)||(Ee=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function id(){}function ld(e,t){var n=X,r=Be(),o=t(),i=!Je(r.memoizedState,o);if(i&&(r.memoizedState=o,Ee=!0),r=r.queue,ks(ud.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Qr(9,sd.bind(null,n,r,o,t),void 0,null),se===null)throw Error(E(349));dn&30||ad(n,t,o)}return o}function ad(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sd(e,t,n,r){t.value=n,t.getSnapshot=r,cd(t)&&fd(e)}function ud(e,t,n){return n(function(){cd(t)&&fd(e)})}function cd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Je(e,n)}catch{return!0}}function fd(e){var t=wt(e,1);t!==null&&Xe(t,e,1,-1)}function Fu(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:e},t.queue=e,e=e.dispatch=Vh.bind(null,X,e),[t.memoizedState,e]}function Qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function dd(){return Be().memoizedState}function Bo(e,t,n,r){var o=tt();X.flags|=e,o.memoizedState=Qr(1|t,n,void 0,r===void 0?null:r)}function Ri(e,t,n,r){var o=Be();r=r===void 0?null:r;var i=void 0;if(oe!==null){var l=oe.memoizedState;if(i=l.destroy,r!==null&&ws(r,l.deps)){o.memoizedState=Qr(t,n,i,r);return}}X.flags|=e,o.memoizedState=Qr(1|t,n,i,r)}function Au(e,t){return Bo(8390656,8,e,t)}function ks(e,t){return Ri(2048,8,e,t)}function pd(e,t){return Ri(4,2,e,t)}function md(e,t){return Ri(4,4,e,t)}function hd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gd(e,t,n){return n=n!=null?n.concat([e]):null,Ri(4,4,hd.bind(null,t,e),n)}function _s(){}function vd(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ws(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yd(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ws(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wd(e,t,n){return dn&21?(Je(n,t)||(n=Ef(),X.lanes|=n,pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function Wh(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=_l.transition;_l.transition={};try{e(!1),t()}finally{F=n,_l.transition=r}}function xd(){return Be().memoizedState}function Qh(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sd(e))kd(t,n);else if(n=nd(e,t,n,r),n!==null){var o=xe();Xe(n,e,r,o),_d(n,t,r)}}function Vh(e,t,n){var r=Ht(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sd(e))kd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Je(a,l)){var s=t.interleaved;s===null?(o.next=o,ms(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=nd(e,t,o,r),n!==null&&(o=xe(),Xe(n,e,r,o),_d(n,t,r))}}function Sd(e){var t=e.alternate;return e===X||t!==null&&t===X}function kd(e,t){_r=hi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _d(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,es(e,n)}}var gi={readContext:He,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},bh={readContext:He,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:Au,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Bo(4194308,4,hd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bo(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qh.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:Fu,useDebugValue:_s,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=Fu(!1),t=e[0];return e=Wh.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,o=tt();if(b){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),se===null)throw Error(E(349));dn&30||ad(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Au(ud.bind(null,r,i,e),[e]),r.flags|=2048,Qr(9,sd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=tt(),t=se.identifierPrefix;if(b){var n=ht,r=mt;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Uh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Yh={readContext:He,useCallback:vd,useContext:He,useEffect:ks,useImperativeHandle:gd,useInsertionEffect:pd,useLayoutEffect:md,useMemo:yd,useReducer:El,useRef:dd,useState:function(){return El(Wr)},useDebugValue:_s,useDeferredValue:function(e){var t=Be();return wd(t,oe.memoizedState,e)},useTransition:function(){var e=El(Wr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:ld,useId:xd,unstable_isNewReconciler:!1},Gh={readContext:He,useCallback:vd,useContext:He,useEffect:ks,useImperativeHandle:gd,useInsertionEffect:pd,useLayoutEffect:md,useMemo:yd,useReducer:Cl,useRef:dd,useState:function(){return Cl(Wr)},useDebugValue:_s,useDeferredValue:function(e){var t=Be();return oe===null?t.memoizedState=e:wd(t,oe.memoizedState,e)},useTransition:function(){var e=Cl(Wr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:ld,useId:xd,unstable_isNewReconciler:!1};function be(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ga(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mi={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),o=Ht(e),i=gt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,o),t!==null&&(Xe(t,e,o,r),Ao(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),o=Ht(e),i=gt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,o),t!==null&&(Xe(t,e,o,r),Ao(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Ht(e),o=gt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ft(e,o,r),t!==null&&(Xe(t,e,r,n),Ao(t,e,r))}};function Hu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(o,i):!0}function Ed(e,t,n){var r=!1,o=Qt,i=t.contextType;return typeof i=="object"&&i!==null?i=He(i):(o=Pe(t)?cn:ye.current,r=t.contextTypes,i=(r=r!=null)?An(e,o):Qt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Bu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mi.enqueueReplaceState(t,t.state,null)}function va(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},hs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=He(i):(i=Pe(t)?cn:ye.current,o.context=An(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ga(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Mi.enqueueReplaceState(o,o.state,null),pi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Wn(e,t){try{var n="",r=t;do n+=km(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ya(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kh=typeof WeakMap=="function"?WeakMap:Map;function Cd(e,t,n){n=gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yi||(yi=!0,ja=r),ya(e,t)},n}function Pd(e,t,n){n=gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ya(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ya(e,t),typeof r!="function"&&(At===null?At=new Set([this]):At.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ug.bind(null,e,t,n),t.then(e,e))}function Wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var Xh=St.ReactCurrentOwner,Ee=!1;function we(e,t,n,r){t.child=e===null?td(t,null,n,r):Bn(t,e.child,n,r)}function Vu(e,t,n,r,o){n=n.render;var i=t.ref;return Mn(t,o),r=xs(e,t,n,r,i,o),n=Ss(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,xt(e,t,o)):(b&&n&&ss(t),t.flags|=1,we(e,t,r,o),t.child)}function bu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Os(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Td(e,t,i,r,o)):(e=Vo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Mr,n(l,r)&&e.ref===t.ref)return xt(e,t,o)}return t.flags|=1,e=Bt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Td(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Mr(i,r)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,xt(e,t,o)}return wa(e,t,n,r,o)}function jd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Nn,Ne),Ne|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Nn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,B(Nn,Ne),Ne|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,B(Nn,Ne),Ne|=r;return we(e,t,o,n),t.child}function $d(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wa(e,t,n,r,o){var i=Pe(n)?cn:ye.current;return i=An(t,i),Mn(t,o),n=xs(e,t,n,r,i,o),r=Ss(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,xt(e,t,o)):(b&&r&&ss(t),t.flags|=1,we(e,t,n,o),t.child)}function Yu(e,t,n,r,o){if(Pe(n)){var i=!0;si(t)}else i=!1;if(Mn(t,o),t.stateNode===null)Uo(e,t),Ed(t,n,r),va(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=He(u):(u=Pe(n)?cn:ye.current,u=An(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Bu(t,l,r,u),$t=!1;var m=t.memoizedState;l.state=m,pi(t,r,l,o),s=t.memoizedState,a!==r||m!==s||Ce.current||$t?(typeof p=="function"&&(ga(t,n,p,r),s=t.memoizedState),(a=$t||Hu(t,n,a,r,m,s,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,rd(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:be(t.type,a),l.props=u,h=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=He(s):(s=Pe(n)?cn:ye.current,s=An(t,s));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||m!==s)&&Bu(t,l,r,s),$t=!1,m=t.memoizedState,l.state=m,pi(t,r,l,o);var S=t.memoizedState;a!==h||m!==S||Ce.current||$t?(typeof y=="function"&&(ga(t,n,y,r),S=t.memoizedState),(u=$t||Hu(t,n,u,r,m,S,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return xa(e,t,n,r,i,o)}function xa(e,t,n,r,o,i){$d(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&zu(t,n,!1),xt(e,t,i);r=t.stateNode,Xh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Bn(t,e.child,null,i),t.child=Bn(t,null,a,i)):we(e,t,a,i),t.memoizedState=r.state,o&&zu(t,n,!0),t.child}function Nd(e){var t=e.stateNode;t.pendingContext?Ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ou(e,t.context,!1),gs(e,t.containerInfo)}function Gu(e,t,n,r,o){return Hn(),cs(o),t.flags|=256,we(e,t,n,r),t.child}var Sa={dehydrated:null,treeContext:null,retryLane:0};function ka(e){return{baseLanes:e,cachePool:null,transitions:null}}function Od(e,t,n){var r=t.pendingProps,o=K.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(K,o&1),e===null)return ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ai(l,r,0,null),e=sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ka(n),t.memoizedState=Sa,e):Es(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Zh(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Bt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Bt(a,i):(i=sn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ka(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Sa,r}return i=e.child,e=i.sibling,r=Bt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Es(e,t){return t=Ai({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _o(e,t,n,r){return r!==null&&cs(r),Bn(t,e.child,null,n),e=Es(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Pl(Error(E(422))),_o(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ai({mode:"visible",children:r.children},o,0,null),i=sn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Bn(t,e.child,null,l),t.child.memoizedState=ka(l),t.memoizedState=Sa,i);if(!(t.mode&1))return _o(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(E(419)),r=Pl(i,r,void 0),_o(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ee||a){if(r=se,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,wt(e,o),Xe(r,e,o,-1))}return Ns(),r=Pl(Error(E(421))),_o(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=cg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Oe=Dt(o.nextSibling),ze=t,b=!0,Ge=null,e!==null&&(Me[De++]=mt,Me[De++]=ht,Me[De++]=fn,mt=e.id,ht=e.overflow,fn=t),t=Es(t,r.children),t.flags|=4096,t)}function Ku(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ha(e.return,t,n)}function Tl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function zd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(we(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ku(e,n,t);else if(e.tag===19)Ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(K,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&mi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Tl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&mi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Tl(t,!0,n,null,i);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Uo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jh(e,t,n){switch(t.tag){case 3:Nd(t),Hn();break;case 5:od(t);break;case 1:Pe(t.type)&&si(t);break;case 4:gs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;B(fi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?Od(e,t,n):(B(K,K.current&1),e=xt(e,t,n),e!==null?e.sibling:null);B(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return zd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,jd(e,t,n)}return xt(e,t,n)}var Id,_a,Ld,Rd;Id=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_a=function(){};Ld=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,on(lt.current);var i=null;switch(n){case"input":o=Vl(e,o),r=Vl(e,r),i=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":o=Gl(e,o),r=Gl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=li)}Xl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($r.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($r.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&U("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Rd=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!b)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qh(e,t,n){var r=t.pendingProps;switch(us(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Pe(t.type)&&ai(),he(t),null;case 3:return r=t.stateNode,Un(),Q(Ce),Q(ye),ys(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(So(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ge!==null&&(Oa(Ge),Ge=null))),_a(e,t),he(t),null;case 5:vs(t);var o=on(Br.current);if(n=t.type,e!==null&&t.stateNode!=null)Ld(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return he(t),null}if(e=on(lt.current),So(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ot]=t,r[Ar]=i,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(o=0;o<gr.length;o++)U(gr[o],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":ou(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":lu(r,i),U("invalid",r)}Xl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&xo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&xo(r.textContent,a,e),o=["children",""+a]):$r.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&U("scroll",r)}switch(n){case"input":fo(r),iu(r,i,!0);break;case"textarea":fo(r),au(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=li)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ot]=t,e[Ar]=r,Id(e,t,!1,!1),t.stateNode=e;e:{switch(l=Zl(n,r),n){case"dialog":U("cancel",e),U("close",e),o=r;break;case"iframe":case"object":case"embed":U("load",e),o=r;break;case"video":case"audio":for(o=0;o<gr.length;o++)U(gr[o],e);o=r;break;case"source":U("error",e),o=r;break;case"img":case"image":case"link":U("error",e),U("load",e),o=r;break;case"details":U("toggle",e),o=r;break;case"input":ou(e,r),o=Vl(e,r),U("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),U("invalid",e);break;case"textarea":lu(e,r),o=Gl(e,r),U("invalid",e);break;default:o=r}Xl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?df(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&cf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Nr(e,s):typeof s=="number"&&Nr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&($r.hasOwnProperty(i)?s!=null&&i==="onScroll"&&U("scroll",e):s!=null&&Ga(e,i,s,l))}switch(n){case"input":fo(e),iu(e,r,!1);break;case"textarea":fo(e),au(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?zn(e,!!r.multiple,i,!1):r.defaultValue!=null&&zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=li)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Rd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=on(Br.current),on(lt.current),So(t)){if(r=t.stateNode,n=t.memoizedProps,r[ot]=t,(i=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:xo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r}return he(t),null;case 13:if(Q(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(b&&Oe!==null&&t.mode&1&&!(t.flags&128))qf(),Hn(),t.flags|=98560,i=!1;else if(i=So(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[ot]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),i=!1}else Ge!==null&&(Oa(Ge),Ge=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ie===0&&(ie=3):Ns())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return Un(),_a(e,t),e===null&&Dr(t.stateNode.containerInfo),he(t),null;case 10:return ps(t.type._context),he(t),null;case 17:return Pe(t.type)&&ai(),he(t),null;case 19:if(Q(K),i=t.memoizedState,i===null)return he(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)fr(i,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=mi(e),l!==null){for(t.flags|=128,fr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&ee()>Qn&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304)}else{if(!r)if(e=mi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!b)return he(t),null}else 2*ee()-i.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ee(),t.sibling=null,n=K.current,B(K,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return $s(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function eg(e,t){switch(us(t),t.tag){case 1:return Pe(t.type)&&ai(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),Q(Ce),Q(ye),ys(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vs(t),null;case 13:if(Q(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(K),null;case 4:return Un(),null;case 10:return ps(t.type._context),null;case 22:case 23:return $s(),null;case 24:return null;default:return null}}var Eo=!1,ge=!1,tg=typeof WeakSet=="function"?WeakSet:Set,T=null;function $n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Ea(e,t,n){try{n()}catch(r){q(e,t,r)}}var Xu=!1;function ng(e,t){if(aa=ri,e=Hf(),as(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,p=0,h=e,m=null;t:for(;;){for(var y;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(y=h.firstChild)!==null;)m=h,h=y;for(;;){if(h===e)break t;if(m===n&&++u===o&&(a=l),m===i&&++p===r&&(s=l),(y=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(sa={focusedElem:e,selectionRange:n},ri=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,N=S.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:be(t.type,k),N);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(v){q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return S=Xu,Xu=!1,S}function Er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ea(t,n,i)}o=o.next}while(o!==r)}}function Di(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ca(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Md(e){var t=e.alternate;t!==null&&(e.alternate=null,Md(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[Ar],delete t[fa],delete t[Fh],delete t[Ah])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dd(e){return e.tag===5||e.tag===3||e.tag===4}function Zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=li));else if(r!==4&&(e=e.child,e!==null))for(Pa(e,t,n),e=e.sibling;e!==null;)Pa(e,t,n),e=e.sibling}function Ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ta(e,t,n),e=e.sibling;e!==null;)Ta(e,t,n),e=e.sibling}var ue=null,Ye=!1;function Et(e,t,n){for(n=n.child;n!==null;)Fd(e,t,n),n=n.sibling}function Fd(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount($i,n)}catch{}switch(n.tag){case 5:ge||$n(n,t);case 6:var r=ue,o=Ye;ue=null,Et(e,t,n),ue=r,Ye=o,ue!==null&&(Ye?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ye?(e=ue,n=n.stateNode,e.nodeType===8?xl(e.parentNode,n):e.nodeType===1&&xl(e,n),Lr(e)):xl(ue,n.stateNode));break;case 4:r=ue,o=Ye,ue=n.stateNode.containerInfo,Ye=!0,Et(e,t,n),ue=r,Ye=o;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ea(n,t,l),o=o.next}while(o!==r)}Et(e,t,n);break;case 1:if(!ge&&($n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){q(n,t,a)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,Et(e,t,n),ge=r):Et(e,t,n);break;default:Et(e,t,n)}}function Ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tg),t.forEach(function(r){var o=fg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ye=!1;break e;case 3:ue=a.stateNode.containerInfo,Ye=!0;break e;case 4:ue=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(ue===null)throw Error(E(160));Fd(i,l,o),ue=null,Ye=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){q(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ad(t,e),t=t.sibling}function Ad(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),et(e),r&4){try{Er(3,e,e.return),Di(3,e)}catch(k){q(e,e.return,k)}try{Er(5,e,e.return)}catch(k){q(e,e.return,k)}}break;case 1:Ve(t,e),et(e),r&512&&n!==null&&$n(n,n.return);break;case 5:if(Ve(t,e),et(e),r&512&&n!==null&&$n(n,n.return),e.flags&32){var o=e.stateNode;try{Nr(o,"")}catch(k){q(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&af(o,i),Zl(a,l);var u=Zl(a,i);for(l=0;l<s.length;l+=2){var p=s[l],h=s[l+1];p==="style"?df(o,h):p==="dangerouslySetInnerHTML"?cf(o,h):p==="children"?Nr(o,h):Ga(o,p,h,u)}switch(a){case"input":bl(o,i);break;case"textarea":sf(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?zn(o,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?zn(o,!!i.multiple,i.defaultValue,!0):zn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ar]=i}catch(k){q(e,e.return,k)}}break;case 6:if(Ve(t,e),et(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){q(e,e.return,k)}}break;case 3:if(Ve(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lr(t.containerInfo)}catch(k){q(e,e.return,k)}break;case 4:Ve(t,e),et(e);break;case 13:Ve(t,e),et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ts=ee())),r&4&&Ju(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||p,Ve(t,e),ge=u):Ve(t,e),et(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(T=e,p=e.child;p!==null;){for(h=T=p;T!==null;){switch(m=T,y=m.child,m.tag){case 0:case 11:case 14:case 15:Er(4,m,m.return);break;case 1:$n(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(k){q(r,n,k)}}break;case 5:$n(m,m.return);break;case 22:if(m.memoizedState!==null){ec(h);continue}}y!==null?(y.return=m,T=y):ec(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=ff("display",l))}catch(k){q(e,e.return,k)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(k){q(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ve(t,e),et(e),r&4&&Ju(e);break;case 21:break;default:Ve(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dd(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Nr(o,""),r.flags&=-33);var i=Zu(e);Ta(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Zu(e);Pa(e,a,l);break;default:throw Error(E(161))}}catch(s){q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rg(e,t,n){T=e,Hd(e)}function Hd(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Eo;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ge;a=Eo;var u=ge;if(Eo=l,(ge=s)&&!u)for(T=o;T!==null;)l=T,s=l.child,l.tag===22&&l.memoizedState!==null?tc(o):s!==null?(s.return=l,T=s):tc(o);for(;i!==null;)T=i,Hd(i),i=i.sibling;T=o,Eo=a,ge=u}qu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,T=i):qu(e)}}function qu(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Di(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:be(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Du(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Du(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Lr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ge||t.flags&512&&Ca(t)}catch(m){q(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function ec(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function tc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Di(4,t)}catch(s){q(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){q(t,o,s)}}var i=t.return;try{Ca(t)}catch(s){q(t,i,s)}break;case 5:var l=t.return;try{Ca(t)}catch(s){q(t,l,s)}}}catch(s){q(t,t.return,s)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var og=Math.ceil,vi=St.ReactCurrentDispatcher,Cs=St.ReactCurrentOwner,Ae=St.ReactCurrentBatchConfig,R=0,se=null,re=null,fe=0,Ne=0,Nn=bt(0),ie=0,Vr=null,pn=0,Fi=0,Ps=0,Cr=null,_e=null,Ts=0,Qn=1/0,ct=null,yi=!1,ja=null,At=null,Co=!1,It=null,wi=0,Pr=0,$a=null,Wo=-1,Qo=0;function xe(){return R&6?ee():Wo!==-1?Wo:Wo=ee()}function Ht(e){return e.mode&1?R&2&&fe!==0?fe&-fe:Bh.transition!==null?(Qo===0&&(Qo=Ef()),Qo):(e=F,e!==0||(e=window.event,e=e===void 0?16:Of(e.type)),e):1}function Xe(e,t,n,r){if(50<Pr)throw Pr=0,$a=null,Error(E(185));Kr(e,n,r),(!(R&2)||e!==se)&&(e===se&&(!(R&2)&&(Fi|=n),ie===4&&Ot(e,fe)),Te(e,r),n===1&&R===0&&!(t.mode&1)&&(Qn=ee()+500,Li&&Yt()))}function Te(e,t){var n=e.callbackNode;Bm(e,t);var r=ni(e,e===se?fe:0);if(r===0)n!==null&&cu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cu(n),t===1)e.tag===0?Hh(nc.bind(null,e)):Xf(nc.bind(null,e)),Mh(function(){!(R&6)&&Yt()}),n=null;else{switch(Cf(r)){case 1:n=qa;break;case 4:n=kf;break;case 16:n=ti;break;case 536870912:n=_f;break;default:n=ti}n=Gd(n,Bd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bd(e,t){if(Wo=-1,Qo=0,R&6)throw Error(E(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=ni(e,e===se?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xi(e,r);else{t=r;var o=R;R|=2;var i=Wd();(se!==e||fe!==t)&&(ct=null,Qn=ee()+500,an(e,t));do try{ag();break}catch(a){Ud(e,a)}while(!0);ds(),vi.current=i,R=o,re!==null?t=0:(se=null,fe=0,t=ie)}if(t!==0){if(t===2&&(o=na(e),o!==0&&(r=o,t=Na(e,o))),t===1)throw n=Vr,an(e,0),Ot(e,r),Te(e,ee()),n;if(t===6)Ot(e,r);else{if(o=e.current.alternate,!(r&30)&&!ig(o)&&(t=xi(e,r),t===2&&(i=na(e),i!==0&&(r=i,t=Na(e,i))),t===1))throw n=Vr,an(e,0),Ot(e,r),Te(e,ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:tn(e,_e,ct);break;case 3:if(Ot(e,r),(r&130023424)===r&&(t=Ts+500-ee(),10<t)){if(ni(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ca(tn.bind(null,e,_e,ct),t);break}tn(e,_e,ct);break;case 4:if(Ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ke(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*og(r/1960))-r,10<r){e.timeoutHandle=ca(tn.bind(null,e,_e,ct),r);break}tn(e,_e,ct);break;case 5:tn(e,_e,ct);break;default:throw Error(E(329))}}}return Te(e,ee()),e.callbackNode===n?Bd.bind(null,e):null}function Na(e,t){var n=Cr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=xi(e,t),e!==2&&(t=_e,_e=n,t!==null&&Oa(t)),e}function Oa(e){_e===null?_e=e:_e.push.apply(_e,e)}function ig(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Je(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ot(e,t){for(t&=~Ps,t&=~Fi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function nc(e){if(R&6)throw Error(E(327));Dn();var t=ni(e,0);if(!(t&1))return Te(e,ee()),null;var n=xi(e,t);if(e.tag!==0&&n===2){var r=na(e);r!==0&&(t=r,n=Na(e,r))}if(n===1)throw n=Vr,an(e,0),Ot(e,t),Te(e,ee()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,_e,ct),Te(e,ee()),null}function js(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(Qn=ee()+500,Li&&Yt())}}function mn(e){It!==null&&It.tag===0&&!(R&6)&&Dn();var t=R;R|=1;var n=Ae.transition,r=F;try{if(Ae.transition=null,F=1,e)return e()}finally{F=r,Ae.transition=n,R=t,!(R&6)&&Yt()}}function $s(){Ne=Nn.current,Q(Nn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Rh(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(us(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ai();break;case 3:Un(),Q(Ce),Q(ye),ys();break;case 5:vs(r);break;case 4:Un();break;case 13:Q(K);break;case 19:Q(K);break;case 10:ps(r.type._context);break;case 22:case 23:$s()}n=n.return}if(se=e,re=e=Bt(e.current,null),fe=Ne=t,ie=0,Vr=null,Ps=Fi=pn=0,_e=Cr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}rn=null}return e}function Ud(e,t){do{var n=re;try{if(ds(),Ho.current=gi,hi){for(var r=X.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}hi=!1}if(dn=0,le=oe=X=null,_r=!1,Ur=0,Cs.current=null,n===null||n.return===null){ie=1,Vr=t,re=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=fe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=Wu(l);if(y!==null){y.flags&=-257,Qu(y,l,a,i,t),y.mode&1&&Uu(i,u,t),t=y,s=u;var S=t.updateQueue;if(S===null){var k=new Set;k.add(s),t.updateQueue=k}else S.add(s);break e}else{if(!(t&1)){Uu(i,u,t),Ns();break e}s=Error(E(426))}}else if(b&&a.mode&1){var N=Wu(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Qu(N,l,a,i,t),cs(Wn(s,a));break e}}i=s=Wn(s,a),ie!==4&&(ie=2),Cr===null?Cr=[i]:Cr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Cd(i,s,t);Mu(i,f);break e;case 1:a=s;var c=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(At===null||!At.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Pd(i,a,t);Mu(i,v);break e}}i=i.return}while(i!==null)}Vd(n)}catch(_){t=_,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Wd(){var e=vi.current;return vi.current=gi,e===null?gi:e}function Ns(){(ie===0||ie===3||ie===2)&&(ie=4),se===null||!(pn&268435455)&&!(Fi&268435455)||Ot(se,fe)}function xi(e,t){var n=R;R|=2;var r=Wd();(se!==e||fe!==t)&&(ct=null,an(e,t));do try{lg();break}catch(o){Ud(e,o)}while(!0);if(ds(),R=n,vi.current=r,re!==null)throw Error(E(261));return se=null,fe=0,ie}function lg(){for(;re!==null;)Qd(re)}function ag(){for(;re!==null&&!zm();)Qd(re)}function Qd(e){var t=Yd(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Vd(e):re=t,Cs.current=null}function Vd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=eg(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,re=null;return}}else if(n=qh(n,t,Ne),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ie===0&&(ie=5)}function tn(e,t,n){var r=F,o=Ae.transition;try{Ae.transition=null,F=1,sg(e,t,n,r)}finally{Ae.transition=o,F=r}return null}function sg(e,t,n,r){do Dn();while(It!==null);if(R&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Um(e,i),e===se&&(re=se=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Co||(Co=!0,Gd(ti,function(){return Dn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ae.transition,Ae.transition=null;var l=F;F=1;var a=R;R|=4,Cs.current=null,ng(e,n),Ad(n,e),jh(sa),ri=!!aa,sa=aa=null,e.current=n,rg(n),Im(),R=a,F=l,Ae.transition=i}else e.current=n;if(Co&&(Co=!1,It=e,wi=o),i=e.pendingLanes,i===0&&(At=null),Mm(n.stateNode),Te(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(yi)throw yi=!1,e=ja,ja=null,e;return wi&1&&e.tag!==0&&Dn(),i=e.pendingLanes,i&1?e===$a?Pr++:(Pr=0,$a=e):Pr=0,Yt(),null}function Dn(){if(It!==null){var e=Cf(wi),t=Ae.transition,n=F;try{if(Ae.transition=null,F=16>e?16:e,It===null)var r=!1;else{if(e=It,It=null,wi=0,R&6)throw Error(E(331));var o=R;for(R|=4,T=e.current;T!==null;){var i=T,l=i.child;if(T.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(T=u;T!==null;){var p=T;switch(p.tag){case 0:case 11:case 15:Er(8,p,i)}var h=p.child;if(h!==null)h.return=p,T=h;else for(;T!==null;){p=T;var m=p.sibling,y=p.return;if(Md(p),p===u){T=null;break}if(m!==null){m.return=y,T=m;break}T=y}}}var S=i.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var N=k.sibling;k.sibling=null,k=N}while(k!==null)}}T=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,T=l;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Er(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,T=f;break e}T=i.return}}var c=e.current;for(T=c;T!==null;){l=T;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,T=d;else e:for(l=c;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Di(9,a)}}catch(_){q(a,a.return,_)}if(a===l){T=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,T=v;break e}T=a.return}}if(R=o,Yt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot($i,e)}catch{}r=!0}return r}finally{F=n,Ae.transition=t}}return!1}function rc(e,t,n){t=Wn(n,t),t=Cd(e,t,1),e=Ft(e,t,1),t=xe(),e!==null&&(Kr(e,1,t),Te(e,t))}function q(e,t,n){if(e.tag===3)rc(e,e,n);else for(;t!==null;){if(t.tag===3){rc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(At===null||!At.has(r))){e=Wn(n,e),e=Pd(t,e,1),t=Ft(t,e,1),e=xe(),t!==null&&(Kr(t,1,e),Te(t,e));break}}t=t.return}}function ug(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(fe&n)===n&&(ie===4||ie===3&&(fe&130023424)===fe&&500>ee()-Ts?an(e,0):Ps|=n),Te(e,t)}function bd(e,t){t===0&&(e.mode&1?(t=ho,ho<<=1,!(ho&130023424)&&(ho=4194304)):t=1);var n=xe();e=wt(e,t),e!==null&&(Kr(e,t,n),Te(e,n))}function cg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bd(e,n)}function fg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),bd(e,n)}var Yd;Yd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,Jh(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,b&&t.flags&1048576&&Zf(t,ci,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Uo(e,t),e=t.pendingProps;var o=An(t,ye.current);Mn(t,n),o=xs(null,t,r,e,o,n);var i=Ss();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(i=!0,si(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,hs(t),o.updater=Mi,t.stateNode=o,o._reactInternals=t,va(t,r,e,n),t=xa(null,t,r,!0,i,n)):(t.tag=0,b&&i&&ss(t),we(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Uo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=pg(r),e=be(r,e),o){case 0:t=wa(null,t,r,e,n);break e;case 1:t=Yu(null,t,r,e,n);break e;case 11:t=Vu(null,t,r,e,n);break e;case 14:t=bu(null,t,r,be(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:be(r,o),wa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:be(r,o),Yu(e,t,r,o,n);case 3:e:{if(Nd(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,o=i.element,rd(e,t),pi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Wn(Error(E(423)),t),t=Gu(e,t,r,n,o);break e}else if(r!==o){o=Wn(Error(E(424)),t),t=Gu(e,t,r,n,o);break e}else for(Oe=Dt(t.stateNode.containerInfo.firstChild),ze=t,b=!0,Ge=null,n=td(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===o){t=xt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return od(t),e===null&&ma(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,ua(r,o)?l=null:i!==null&&ua(r,i)&&(t.flags|=32),$d(e,t),we(e,t,l,n),t.child;case 6:return e===null&&ma(t),null;case 13:return Od(e,t,n);case 4:return gs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:be(r,o),Vu(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,B(fi,r._currentValue),r._currentValue=l,i!==null)if(Je(i.value,l)){if(i.children===o.children&&!Ce.current){t=xt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=gt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ha(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(E(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ha(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Mn(t,n),o=He(o),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,o=be(r,t.pendingProps),o=be(r.type,o),bu(e,t,r,o,n);case 15:return Td(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:be(r,o),Uo(e,t),t.tag=1,Pe(r)?(e=!0,si(t)):e=!1,Mn(t,n),Ed(t,r,o),va(t,r,o,n),xa(null,t,r,!0,e,n);case 19:return zd(e,t,n);case 22:return jd(e,t,n)}throw Error(E(156,t.tag))};function Gd(e,t){return Sf(e,t)}function dg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new dg(e,t,n,r)}function Os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pg(e){if(typeof e=="function")return Os(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xa)return 11;if(e===Za)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Os(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case xn:return sn(n.children,o,i,t);case Ka:l=8,o|=8;break;case Bl:return e=Fe(12,n,t,o|2),e.elementType=Bl,e.lanes=i,e;case Ul:return e=Fe(13,n,t,o),e.elementType=Ul,e.lanes=i,e;case Wl:return e=Fe(19,n,t,o),e.elementType=Wl,e.lanes=i,e;case rf:return Ai(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tf:l=10;break e;case nf:l=9;break e;case Xa:l=11;break e;case Za:l=14;break e;case jt:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Fe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function sn(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Ai(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=rf,e.lanes=n,e.stateNode={isHidden:!1},e}function jl(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function $l(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function zs(e,t,n,r,o,i,l,a,s){return e=new mg(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Fe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hs(i),e}function hg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Kd(e){if(!e)return Qt;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Pe(n))return Kf(e,n,t)}return t}function Xd(e,t,n,r,o,i,l,a,s){return e=zs(n,r,!0,e,o,i,l,a,s),e.context=Kd(null),n=e.current,r=xe(),o=Ht(n),i=gt(r,o),i.callback=t??null,Ft(n,i,o),e.current.lanes=o,Kr(e,o,r),Te(e,r),e}function Hi(e,t,n,r){var o=t.current,i=xe(),l=Ht(o);return n=Kd(n),t.context===null?t.context=n:t.pendingContext=n,t=gt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(o,t,l),e!==null&&(Xe(e,o,l,i),Ao(e,o,l)),l}function Si(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function oc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Is(e,t){oc(e,t),(e=e.alternate)&&oc(e,t)}function gg(){return null}var Zd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ls(e){this._internalRoot=e}Bi.prototype.render=Ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Hi(e,t,null,null)};Bi.prototype.unmount=Ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mn(function(){Hi(null,e,null,null)}),t[yt]=null}};function Bi(e){this._internalRoot=e}Bi.prototype.unstable_scheduleHydration=function(e){if(e){var t=jf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&t!==0&&t<Nt[n].priority;n++);Nt.splice(n,0,e),n===0&&Nf(e)}};function Rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ic(){}function vg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Si(l);i.call(u)}}var l=Xd(t,r,e,0,null,!1,!1,"",ic);return e._reactRootContainer=l,e[yt]=l.current,Dr(e.nodeType===8?e.parentNode:e),mn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Si(s);a.call(u)}}var s=zs(e,0,!1,null,null,!1,!1,"",ic);return e._reactRootContainer=s,e[yt]=s.current,Dr(e.nodeType===8?e.parentNode:e),mn(function(){Hi(t,s,n,r)}),s}function Wi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Si(l);a.call(s)}}Hi(t,l,e,o)}else l=vg(n,t,e,o,r);return Si(l)}Pf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hr(t.pendingLanes);n!==0&&(es(t,n|1),Te(t,ee()),!(R&6)&&(Qn=ee()+500,Yt()))}break;case 13:mn(function(){var r=wt(e,1);if(r!==null){var o=xe();Xe(r,e,1,o)}}),Is(e,1)}};ts=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=xe();Xe(t,e,134217728,n)}Is(e,134217728)}};Tf=function(e){if(e.tag===13){var t=Ht(e),n=wt(e,t);if(n!==null){var r=xe();Xe(n,e,t,r)}Is(e,t)}};jf=function(){return F};$f=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};ql=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ii(r);if(!o)throw Error(E(90));lf(r),bl(r,o)}}}break;case"textarea":sf(e,n);break;case"select":t=n.value,t!=null&&zn(e,!!n.multiple,t,!1)}};hf=js;gf=mn;var yg={usingClientEntryPoint:!1,Events:[Zr,En,Ii,pf,mf,js]},dr={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wg={bundleType:dr.bundleType,version:dr.version,rendererPackageName:dr.rendererPackageName,rendererConfig:dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wf(e),e===null?null:e.stateNode},findFiberByHostInstance:dr.findFiberByHostInstance||gg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{$i=Po.inject(wg),it=Po}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yg;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rs(t))throw Error(E(200));return hg(e,t,null,n)};Le.createRoot=function(e,t){if(!Rs(e))throw Error(E(299));var n=!1,r="",o=Zd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=zs(e,1,!1,null,null,n,!1,r,o),e[yt]=t.current,Dr(e.nodeType===8?e.parentNode:e),new Ls(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=wf(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return mn(e)};Le.hydrate=function(e,t,n){if(!Ui(t))throw Error(E(200));return Wi(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!Rs(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Zd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Xd(t,null,e,1,n??null,o,!1,i,l),e[yt]=t.current,Dr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Bi(t)};Le.render=function(e,t,n){if(!Ui(t))throw Error(E(200));return Wi(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!Ui(e))throw Error(E(40));return e._reactRootContainer?(mn(function(){Wi(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};Le.unstable_batchedUpdates=js;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ui(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Wi(e,t,n,!1,r)};Le.version="18.3.1-next-f1338f8080-20240426";function Jd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jd)}catch(e){console.error(e)}}Jd(),Zc.exports=Le;var qd=Zc.exports,ep,lc=qd;ep=lc.createRoot,lc.hydrateRoot;var ve=function(){return ve=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ve.apply(this,arguments)};function Vn(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var W="-ms-",Tr="-moz-",D="-webkit-",tp="comm",Qi="rule",Ms="decl",xg="@import",np="@keyframes",Sg="@layer",rp=Math.abs,Ds=String.fromCharCode,za=Object.assign;function kg(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function op(e){return e.trim()}function ft(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function bo(e,t,n){return e.indexOf(t,n)}function ae(e,t){return e.charCodeAt(t)|0}function bn(e,t,n){return e.slice(t,n)}function nt(e){return e.length}function ip(e){return e.length}function vr(e,t){return t.push(e),e}function _g(e,t){return e.map(t).join("")}function ac(e,t){return e.filter(function(n){return!ft(n,t)})}var Vi=1,Yn=1,lp=0,Ue=0,ne=0,er="";function bi(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Vi,column:Yn,length:l,return:"",siblings:a}}function Tt(e,t){return za(bi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function yn(e){for(;e.root;)e=Tt(e.root,{children:[e]});vr(e,e.siblings)}function Eg(){return ne}function Cg(){return ne=Ue>0?ae(er,--Ue):0,Yn--,ne===10&&(Yn=1,Vi--),ne}function Ze(){return ne=Ue<lp?ae(er,Ue++):0,Yn++,ne===10&&(Yn=1,Vi++),ne}function un(){return ae(er,Ue)}function Yo(){return Ue}function Yi(e,t){return bn(er,e,t)}function Ia(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pg(e){return Vi=Yn=1,lp=nt(er=e),Ue=0,[]}function Tg(e){return er="",e}function Nl(e){return op(Yi(Ue-1,La(e===91?e+2:e===40?e+1:e)))}function jg(e){for(;(ne=un())&&ne<33;)Ze();return Ia(e)>2||Ia(ne)>3?"":" "}function $g(e,t){for(;--t&&Ze()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return Yi(e,Yo()+(t<6&&un()==32&&Ze()==32))}function La(e){for(;Ze();)switch(ne){case e:return Ue;case 34:case 39:e!==34&&e!==39&&La(ne);break;case 40:e===41&&La(e);break;case 92:Ze();break}return Ue}function Ng(e,t){for(;Ze()&&e+ne!==57;)if(e+ne===84&&un()===47)break;return"/*"+Yi(t,Ue-1)+"*"+Ds(e===47?e:Ze())}function Og(e){for(;!Ia(un());)Ze();return Yi(e,Ue)}function zg(e){return Tg(Go("",null,null,null,[""],e=Pg(e),0,[0],e))}function Go(e,t,n,r,o,i,l,a,s){for(var u=0,p=0,h=l,m=0,y=0,S=0,k=1,N=1,f=1,c=0,d="",v=o,_=i,w=r,x=d;N;)switch(S=c,c=Ze()){case 40:if(S!=108&&ae(x,h-1)==58){bo(x+=I(Nl(c),"&","&\f"),"&\f",rp(u?a[u-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:x+=Nl(c);break;case 9:case 10:case 13:case 32:x+=jg(S);break;case 92:x+=$g(Yo()-1,7);continue;case 47:switch(un()){case 42:case 47:vr(Ig(Ng(Ze(),Yo()),t,n,s),s);break;default:x+="/"}break;case 123*k:a[u++]=nt(x)*f;case 125*k:case 59:case 0:switch(c){case 0:case 125:N=0;case 59+p:f==-1&&(x=I(x,/\f/g,"")),y>0&&nt(x)-h&&vr(y>32?uc(x+";",r,n,h-1,s):uc(I(x," ","")+";",r,n,h-2,s),s);break;case 59:x+=";";default:if(vr(w=sc(x,t,n,u,p,o,a,d,v=[],_=[],h,i),i),c===123)if(p===0)Go(x,t,w,w,v,i,h,a,_);else switch(m===99&&ae(x,3)===110?100:m){case 100:case 108:case 109:case 115:Go(e,w,w,r&&vr(sc(e,w,w,0,0,o,a,d,o,v=[],h,_),_),o,_,h,a,r?v:_);break;default:Go(x,w,w,w,[""],_,0,a,_)}}u=p=y=0,k=f=1,d=x="",h=l;break;case 58:h=1+nt(x),y=S;default:if(k<1){if(c==123)--k;else if(c==125&&k++==0&&Cg()==125)continue}switch(x+=Ds(c),c*k){case 38:f=p>0?1:(x+="\f",-1);break;case 44:a[u++]=(nt(x)-1)*f,f=1;break;case 64:un()===45&&(x+=Nl(Ze())),m=un(),p=h=nt(d=x+=Og(Yo())),c++;break;case 45:S===45&&nt(x)==2&&(k=0)}}return i}function sc(e,t,n,r,o,i,l,a,s,u,p,h){for(var m=o-1,y=o===0?i:[""],S=ip(y),k=0,N=0,f=0;k<r;++k)for(var c=0,d=bn(e,m+1,m=rp(N=l[k])),v=e;c<S;++c)(v=op(N>0?y[c]+" "+d:I(d,/&\f/g,y[c])))&&(s[f++]=v);return bi(e,t,n,o===0?Qi:a,s,u,p,h)}function Ig(e,t,n,r){return bi(e,t,n,tp,Ds(Eg()),bn(e,2,-2),0,r)}function uc(e,t,n,r,o){return bi(e,t,n,Ms,bn(e,0,r),bn(e,r+1,-1),r,o)}function ap(e,t,n){switch(kg(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 4789:return Tr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+Tr+e+W+e+e;case 5936:switch(ae(e,t+11)){case 114:return D+e+W+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+W+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+W+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return D+e+W+e+e;case 6165:return D+e+W+"flex-"+e+e;case 5187:return D+e+I(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+W+"flex-$1$2")+e;case 5443:return D+e+W+"flex-item-"+I(e,/flex-|-self/g,"")+(ft(e,/flex-|baseline/)?"":W+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return D+e+W+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return D+e+W+I(e,"shrink","negative")+e;case 5292:return D+e+W+I(e,"basis","preferred-size")+e;case 6060:return D+"box-"+I(e,"-grow","")+D+e+W+I(e,"grow","positive")+e;case 4554:return D+I(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+W+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4200:if(!ft(e,/flex-|baseline/))return W+"grid-column-align"+bn(e,t)+e;break;case 2592:case 3360:return W+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,ft(r.props,/grid-\w+-end/)})?~bo(e+(n=n[t].value),"span",0)?e:W+I(e,"-start","")+e+W+"grid-row-span:"+(~bo(n,"span",0)?ft(n,/\d+/):+ft(n,/\d+/)-+ft(e,/\d+/))+";":W+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ft(r.props,/grid-\w+-start/)})?e:W+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nt(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+Tr+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~bo(e,"stretch",0)?ap(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,s,u){return W+o+":"+i+u+(l?W+o+"-span:"+(a?s:+s-+i)+u:"")+e});case 4949:if(ae(e,t+6)===121)return I(e,":",":"+D)+e;break;case 6444:switch(ae(e,ae(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+D+(ae(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+W+"$2box$3")+e;case 100:return I(e,":",":"+W)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function ki(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Lg(e,t,n,r){switch(e.type){case Sg:if(e.children.length)break;case xg:case Ms:return e.return=e.return||e.value;case tp:return"";case np:return e.return=e.value+"{"+ki(e.children,r)+"}";case Qi:if(!nt(e.value=e.props.join(",")))return""}return nt(n=ki(e.children,r))?e.return=e.value+"{"+n+"}":""}function Rg(e){var t=ip(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function Mg(e){return function(t){t.root||(t=t.return)&&e(t)}}function Dg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ms:e.return=ap(e.value,e.length,n);return;case np:return ki([Tt(e,{value:I(e.value,"@","@"+D)})],r);case Qi:if(e.length)return _g(n=e.props,function(o){switch(ft(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":yn(Tt(e,{props:[I(o,/:(read-\w+)/,":"+Tr+"$1")]})),yn(Tt(e,{props:[o]})),za(e,{props:ac(n,r)});break;case"::placeholder":yn(Tt(e,{props:[I(o,/:(plac\w+)/,":"+D+"input-$1")]})),yn(Tt(e,{props:[I(o,/:(plac\w+)/,":"+Tr+"$1")]})),yn(Tt(e,{props:[I(o,/:(plac\w+)/,W+"input-$1")]})),yn(Tt(e,{props:[o]})),za(e,{props:ac(n,r)});break}return""})}}var Fg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$e={},Gn=typeof process<"u"&&$e!==void 0&&($e.REACT_APP_SC_ATTR||$e.SC_ATTR)||"data-styled",sp="active",up="data-styled-version",Gi="6.1.13",Fs=`/*!sc*/
`,_i=typeof window<"u"&&"HTMLElement"in window,Ag=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$e!==void 0&&$e.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$e.REACT_APP_SC_DISABLE_SPEEDY!==""?$e.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$e.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$e!==void 0&&$e.SC_DISABLE_SPEEDY!==void 0&&$e.SC_DISABLE_SPEEDY!==""&&$e.SC_DISABLE_SPEEDY!=="false"&&$e.SC_DISABLE_SPEEDY),Hg={},Ki=Object.freeze([]),Kn=Object.freeze({});function cp(e,t,n){return n===void 0&&(n=Kn),e.theme!==n.theme&&e.theme||t||n.theme}var fp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Bg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ug=/(^-|-$)/g;function cc(e){return e.replace(Bg,"-").replace(Ug,"")}var Wg=/(a)(d)/gi,To=52,fc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ra(e){var t,n="";for(t=Math.abs(e);t>To;t=t/To|0)n=fc(t%To)+n;return(fc(t%To)+n).replace(Wg,"$1-$2")}var Ol,dp=5381,On=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},pp=function(e){return On(dp,e)};function As(e){return Ra(pp(e)>>>0)}function Qg(e){return e.displayName||e.name||"Component"}function zl(e){return typeof e=="string"&&!0}var mp=typeof Symbol=="function"&&Symbol.for,hp=mp?Symbol.for("react.memo"):60115,Vg=mp?Symbol.for("react.forward_ref"):60112,bg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Yg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gg=((Ol={})[Vg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ol[hp]=gp,Ol);function dc(e){return("type"in(t=e)&&t.type.$$typeof)===hp?gp:"$$typeof"in e?Gg[e.$$typeof]:bg;var t}var Kg=Object.defineProperty,Xg=Object.getOwnPropertyNames,pc=Object.getOwnPropertySymbols,Zg=Object.getOwnPropertyDescriptor,Jg=Object.getPrototypeOf,mc=Object.prototype;function vp(e,t,n){if(typeof t!="string"){if(mc){var r=Jg(t);r&&r!==mc&&vp(e,r,n)}var o=Xg(t);pc&&(o=o.concat(pc(t)));for(var i=dc(e),l=dc(t),a=0;a<o.length;++a){var s=o[a];if(!(s in Yg||n&&n[s]||l&&s in l||i&&s in i)){var u=Zg(t,s);try{Kg(e,s,u)}catch{}}}}return e}function Xn(e){return typeof e=="function"}function Hs(e){return typeof e=="object"&&"styledComponentId"in e}function ln(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ei(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function br(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ma(e,t,n){if(n===void 0&&(n=!1),!n&&!br(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ma(e[r],t[r]);else if(br(t))for(var r in t)e[r]=Ma(e[r],t[r]);return e}function Bs(e,t){Object.defineProperty(e,"toString",{value:t})}function qr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var qg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw qr(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(Fs);return n},e}(),Ko=new Map,Ci=new Map,Xo=1,jo=function(e){if(Ko.has(e))return Ko.get(e);for(;Ci.has(Xo);)Xo++;var t=Xo++;return Ko.set(e,t),Ci.set(t,e),t},ev=function(e,t){Xo=t+1,Ko.set(e,t),Ci.set(t,e)},tv="style[".concat(Gn,"][").concat(up,'="').concat(Gi,'"]'),nv=new RegExp("^".concat(Gn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rv=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},ov=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Fs),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var s=a.match(nv);if(s){var u=0|parseInt(s[1],10),p=s[2];u!==0&&(ev(p,u),rv(e,p,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},hc=function(e){for(var t=document.querySelectorAll(tv),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Gn)!==sp&&(ov(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function iv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var yp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Gn,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Gn,sp),r.setAttribute(up,Gi);var l=iv();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},lv=function(){function e(t){this.element=yp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw qr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),av=function(){function e(t){this.element=yp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),sv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),gc=_i,uv={isServer:!_i,useCSSOMInjection:!Ag},Pi=function(){function e(t,n,r){t===void 0&&(t=Kn),n===void 0&&(n={});var o=this;this.options=ve(ve({},uv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&_i&&gc&&(gc=!1,hc(this)),Bs(this,function(){return function(i){for(var l=i.getTag(),a=l.length,s="",u=function(h){var m=function(f){return Ci.get(f)}(h);if(m===void 0)return"continue";var y=i.names.get(m),S=l.getGroup(h);if(y===void 0||!y.size||S.length===0)return"continue";var k="".concat(Gn,".g").concat(h,'[id="').concat(m,'"]'),N="";y!==void 0&&y.forEach(function(f){f.length>0&&(N+="".concat(f,","))}),s+="".concat(S).concat(k,'{content:"').concat(N,'"}').concat(Fs)},p=0;p<a;p++)u(p);return s}(o)})}return e.registerId=function(t){return jo(t)},e.prototype.rehydrate=function(){!this.server&&_i&&hc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ve(ve({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new sv(o):r?new lv(o):new av(o)}(this.options),new qg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(jo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(jo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(jo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),cv=/&/g,fv=/^\s*\/\/.*$/gm;function wp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=wp(n.children,t)),n})}function dv(e){var t,n,r,o=Kn,i=o.options,l=i===void 0?Kn:i,a=o.plugins,s=a===void 0?Ki:a,u=function(m,y,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):m},p=s.slice();p.push(function(m){m.type===Qi&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(cv,n).replace(r,u))}),l.prefix&&p.push(Dg),p.push(Lg);var h=function(m,y,S,k){y===void 0&&(y=""),S===void 0&&(S=""),k===void 0&&(k="&"),t=k,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var N=m.replace(fv,""),f=zg(S||y?"".concat(S," ").concat(y," { ").concat(N," }"):N);l.namespace&&(f=wp(f,l.namespace));var c=[];return ki(f,Rg(p.concat(Mg(function(d){return c.push(d)})))),c};return h.hash=s.length?s.reduce(function(m,y){return y.name||qr(15),On(m,y.name)},dp).toString():"",h}var pv=new Pi,Da=dv(),xp=pt.createContext({shouldForwardProp:void 0,styleSheet:pv,stylis:Da});xp.Consumer;pt.createContext(void 0);function Fa(){return te.useContext(xp)}var Sp=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Da);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Bs(this,function(){throw qr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Da),this.name+t.hash},e}(),mv=function(e){return e>="A"&&e<="Z"};function vc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;mv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var kp=function(e){return e==null||e===!1||e===""},_p=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!kp(i)&&(Array.isArray(i)&&i.isCss||Xn(i)?r.push("".concat(vc(o),":"),i,";"):br(i)?r.push.apply(r,Vn(Vn(["".concat(o," {")],_p(i),!1),["}"],!1)):r.push("".concat(vc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Fg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ut(e,t,n,r){if(kp(e))return[];if(Hs(e))return[".".concat(e.styledComponentId)];if(Xn(e)){if(!Xn(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Ut(o,t,n,r)}var i;return e instanceof Sp?n?(e.inject(n,r),[e.getName(r)]):[e]:br(e)?_p(e):Array.isArray(e)?Array.prototype.concat.apply(Ki,e.map(function(l){return Ut(l,t,n,r)})):[e.toString()]}function Ep(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xn(n)&&!Hs(n))return!1}return!0}var hv=pp(Gi),gv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ep(t),this.componentId=n,this.baseHash=On(hv,n),this.baseStyle=r,Pi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=ln(o,this.staticRulesId);else{var i=Ei(Ut(this.rules,t,n,r)),l=Ra(On(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=ln(o,l),this.staticRulesId=l}else{for(var s=On(this.baseHash,r.hash),u="",p=0;p<this.rules.length;p++){var h=this.rules[p];if(typeof h=="string")u+=h;else if(h){var m=Ei(Ut(h,t,n,r));s=On(s,m+p),u+=m}}if(u){var y=Ra(s>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),o=ln(o,y)}}return o},e}(),Us=pt.createContext(void 0);Us.Consumer;var Il={};function vv(e,t,n){var r=Hs(e),o=e,i=!zl(e),l=t.attrs,a=l===void 0?Ki:l,s=t.componentId,u=s===void 0?function(v,_){var w=typeof v!="string"?"sc":cc(v);Il[w]=(Il[w]||0)+1;var x="".concat(w,"-").concat(As(Gi+w+Il[w]));return _?"".concat(_,"-").concat(x):x}(t.displayName,t.parentComponentId):s,p=t.displayName,h=p===void 0?function(v){return zl(v)?"styled.".concat(v):"Styled(".concat(Qg(v),")")}(e):p,m=t.displayName&&t.componentId?"".concat(cc(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,S=t.shouldForwardProp;if(r&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var N=t.shouldForwardProp;S=function(v,_){return k(v,_)&&N(v,_)}}else S=k}var f=new gv(n,m,r?o.componentStyle:void 0);function c(v,_){return function(w,x,C){var M=w.attrs,z=w.componentStyle,pe=w.defaultProps,qe=w.foldedComponentIds,st=w.styledComponentId,Kt=w.target,nr=pt.useContext(Us),rr=Fa(),Xt=w.shouldForwardProp||rr.shouldForwardProp,P=cp(x,nr,pe)||Kn,$=function(kt,je,ut){for(var or,Jt=ve(ve({},je),{className:void 0,theme:ut}),rl=0;rl<kt.length;rl+=1){var ao=Xn(or=kt[rl])?or(Jt):or;for(var _t in ao)Jt[_t]=_t==="className"?ln(Jt[_t],ao[_t]):_t==="style"?ve(ve({},Jt[_t]),ao[_t]):ao[_t]}return je.className&&(Jt.className=ln(Jt.className,je.className)),Jt}(M,x,P),O=$.as||Kt,A={};for(var H in $)$[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&$.theme===P||(H==="forwardedAs"?A.as=$.forwardedAs:Xt&&!Xt(H,O)||(A[H]=$[H]));var Zt=function(kt,je){var ut=Fa(),or=kt.generateAndInjectStyles(je,ut.styleSheet,ut.stylis);return or}(z,$),Qe=ln(qe,st);return Zt&&(Qe+=" "+Zt),$.className&&(Qe+=" "+$.className),A[zl(O)&&!fp.has(O)?"class":"className"]=Qe,A.ref=C,te.createElement(O,A)}(d,v,_)}c.displayName=h;var d=pt.forwardRef(c);return d.attrs=y,d.componentStyle=f,d.displayName=h,d.shouldForwardProp=S,d.foldedComponentIds=r?ln(o.foldedComponentIds,o.styledComponentId):"",d.styledComponentId=m,d.target=r?o.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(_){for(var w=[],x=1;x<arguments.length;x++)w[x-1]=arguments[x];for(var C=0,M=w;C<M.length;C++)Ma(_,M[C],!0);return _}({},o.defaultProps,v):v}}),Bs(d,function(){return".".concat(d.styledComponentId)}),i&&vp(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function yc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var wc=function(e){return Object.assign(e,{isCss:!0})};function Ws(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Xn(e)||br(e))return wc(Ut(yc(Ki,Vn([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Ut(r):wc(Ut(yc(r,t)))}function Aa(e,t,n){if(n===void 0&&(n=Kn),!t)throw qr(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,Ws.apply(void 0,Vn([o],i,!1)))};return r.attrs=function(o){return Aa(e,t,ve(ve({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Aa(e,t,ve(ve({},n),o))},r}var Cp=function(e){return Aa(vv,e)},We=Cp;fp.forEach(function(e){We[e]=Cp(e)});var yv=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ep(t),Pi.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Ei(Ut(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Pi.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function wv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ws.apply(void 0,Vn([e],t,!1)),o="sc-global-".concat(As(JSON.stringify(r))),i=new yv(r,o),l=function(s){var u=Fa(),p=pt.useContext(Us),h=pt.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(h,s,u.styleSheet,p,u.stylis),pt.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,s,u.styleSheet,p,u.stylis),function(){return i.removeStyles(h,u.styleSheet)}},[h,s,u.styleSheet,p,u.stylis]),null};function a(s,u,p,h,m){if(i.isStatic)i.renderStyles(s,Hg,p,m);else{var y=ve(ve({},u),{theme:cp(u,h,l.defaultProps)});i.renderStyles(s,y,p,m)}}return pt.memo(l)}function Gt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ei(Ws.apply(void 0,Vn([e],t,!1))),o=As(r);return new Sp(o,r)}const j={primaryBackground:"#0A0C10",secondaryBackground:"#161B22",primaryText:"#F0F6FC",secondaryText:"#8B949E",azul:"#58A6FF",accent:"#238636",hover:"#58A6FF"},ce={mobile:"320px",tablet:"768px",desktop:"1024px"},xv=wv`
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
    }

    body {
        background-color: ${j.primaryBackground};
        color: ${j.primaryText};
        line-height: 1.6;
        min-height: 100vh;
    }

    #root {
        width: 100%;
        overflow-x: hidden;
        position: relative;
    }

    .container {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding: 0 20px;
        overflow-x: hidden;
    }

    h2 {
        text-align: center;
        margin-bottom: 2rem;
        font-size: clamp(1.5rem, 5vw, 2.5rem);
        color: ${j.primaryText};
        position: relative;
        
        &:after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background-color: ${j.azul};
            border-radius: 2px;
        }
    }

    p {
        color: ${j.secondaryText};
        font-size: clamp(0.9rem, 2vw, 1.1rem);
        max-width: 100%;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    @media (max-width: ${ce.mobile}) {
        .container {
            padding: 0 15px;
        }
    }
`,jr=We.button`
  color: ${j.primaryText};
  background-color: ${j.azul};
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

  i {
    font-size: 1.2rem;
    margin-right: 8px;
  }

  &:hover {
    background-color: ${j.hover};
    transform: translateY(-2px);
  }

  @media (max-width: ${ce.mobile}) {
    padding: 0 12px;
    height: 36px;

    span {
      display: none;
    }

    i {
      margin-right: 0;
    }
  }
`,Yr=Gt`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Sv=Gt`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,kv=Gt`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,_v=Gt`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;Gt`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;Gt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;const Ev=We.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${j.primaryBackground};
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
    animation: ${Sv} 0.6s ease-out;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${j.primaryText};
    z-index: 1001;

    span {
      color: ${j.azul};
    }
  }

  .menu {
    ul {
      display: flex;
      gap: 32px;
      list-style: none;

      li {
        opacity: 0;
        animation: ${kv} 0.6s ease-out forwards;

        a {
          color: ${j.secondaryText};
          text-decoration: none;
          transition: color 0.3s ease;
          cursor: pointer;

          &:hover {
            color: ${j.primaryText};
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
    color: ${j.primaryText};
  }

  @media (max-width: ${ce.tablet}) {
    .menu-toggle {
      display: block;
    }

    .menu {
      position: fixed;
      top: 0;
      right: -100%;
      width: 70%;
      height: 100vh;
      background-color: ${j.primaryBackground};
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
              background-color: ${j.secondaryBackground};
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

  @media (max-width: ${ce.mobile}) {
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
`;We.button`
  background-color: ${j.accent};
  color: ${j.primaryText};
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
    background-color: ${j.hover};
  }

  @media (max-width: ${ce.mobile}) {
    padding: 6px 12px;

    span {
      display: none;
    }

    i {
      margin: 0;
    }
  }
`;var J={},Qs={},eo={},to={},Pp="Expected a function",xc=NaN,Cv="[object Symbol]",Pv=/^\s+|\s+$/g,Tv=/^[-+]0x[0-9a-f]+$/i,jv=/^0b[01]+$/i,$v=/^0o[0-7]+$/i,Nv=parseInt,Ov=typeof so=="object"&&so&&so.Object===Object&&so,zv=typeof self=="object"&&self&&self.Object===Object&&self,Iv=Ov||zv||Function("return this")(),Lv=Object.prototype,Rv=Lv.toString,Mv=Math.max,Dv=Math.min,Ll=function(){return Iv.Date.now()};function Fv(e,t,n){var r,o,i,l,a,s,u=0,p=!1,h=!1,m=!0;if(typeof e!="function")throw new TypeError(Pp);t=Sc(t)||0,Ti(n)&&(p=!!n.leading,h="maxWait"in n,i=h?Mv(Sc(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m);function y(w){var x=r,C=o;return r=o=void 0,u=w,l=e.apply(C,x),l}function S(w){return u=w,a=setTimeout(f,t),p?y(w):l}function k(w){var x=w-s,C=w-u,M=t-x;return h?Dv(M,i-C):M}function N(w){var x=w-s,C=w-u;return s===void 0||x>=t||x<0||h&&C>=i}function f(){var w=Ll();if(N(w))return c(w);a=setTimeout(f,k(w))}function c(w){return a=void 0,m&&r?y(w):(r=o=void 0,l)}function d(){a!==void 0&&clearTimeout(a),u=0,r=s=o=a=void 0}function v(){return a===void 0?l:c(Ll())}function _(){var w=Ll(),x=N(w);if(r=arguments,o=this,s=w,x){if(a===void 0)return S(s);if(h)return a=setTimeout(f,t),y(s)}return a===void 0&&(a=setTimeout(f,t)),l}return _.cancel=d,_.flush=v,_}function Av(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(Pp);return Ti(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Fv(e,t,{leading:r,maxWait:t,trailing:o})}function Ti(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Hv(e){return!!e&&typeof e=="object"}function Bv(e){return typeof e=="symbol"||Hv(e)&&Rv.call(e)==Cv}function Sc(e){if(typeof e=="number")return e;if(Bv(e))return xc;if(Ti(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ti(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Pv,"");var n=jv.test(e);return n||$v.test(e)?Nv(e.slice(2),n?2:8):Tv.test(e)?xc:+e}var Uv=Av,no={};Object.defineProperty(no,"__esModule",{value:!0});no.addPassiveEventListener=function(t,n,r){var o=r.name;o||(o=n,console.warn("Listener must be a named function.")),Zo.has(n)||Zo.set(n,new Set);var i=Zo.get(n);if(!i.has(o)){var l=function(){var a=!1;try{var s=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,s)}catch{}return a}();t.addEventListener(n,r,l?{passive:!0}:!1),i.add(o)}};no.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r),Zo.get(n).delete(r.name||n)};var Zo=new Map;Object.defineProperty(to,"__esModule",{value:!0});var Wv=Uv,Qv=bv(Wv),Vv=no;function bv(e){return e&&e.__esModule?e:{default:e}}var Yv=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,Qv.default)(t,n)},Y={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=Yv(function(o){Y.scrollHandler(t)},n);Y.scrollSpyContainers.push(t),(0,Vv.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return Y.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=Y.scrollSpyContainers[Y.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(Y.currentPositionX(t),Y.currentPositionY(t))})},addStateHandler:function(t){Y.spySetState.push(t)},addSpyHandler:function(t,n){var r=Y.scrollSpyContainers[Y.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(Y.currentPositionX(n),Y.currentPositionY(n))},updateStates:function(){Y.spySetState.forEach(function(t){return t()})},unmount:function(t,n){Y.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),Y.spySetState&&Y.spySetState.length&&Y.spySetState.indexOf(t)>-1&&Y.spySetState.splice(Y.spySetState.indexOf(t),1),document.removeEventListener("scroll",Y.scrollHandler)},update:function(){return Y.scrollSpyContainers.forEach(function(t){return Y.scrollHandler(t)})}};to.default=Y;var tr={},ro={};Object.defineProperty(ro,"__esModule",{value:!0});var Gv=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,o=r?"#"+r:"",i=window&&window.location,l=o?i.pathname+i.search+o:i.pathname+i.search;n?history.pushState(history.state,"",l):history.replaceState(history.state,"",l)},Kv=function(){return window.location.hash.replace(/^#/,"")},Xv=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},Zv=function(t){return getComputedStyle(t).position!=="static"},Rl=function(t,n){for(var r=t.offsetTop,o=t.offsetParent;o&&!n(o);)r+=o.offsetTop,o=o.offsetParent;return{offsetTop:r,offsetParent:o}},Jv=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(Zv(t)){if(n.offsetParent!==t){var o=function(p){return p===t||p===document},i=Rl(n,o),l=i.offsetTop,a=i.offsetParent;if(a!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return l}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var s=function(p){return p===document};return Rl(n,s).offsetTop-Rl(t,s).offsetTop};ro.default={updateHash:Gv,getHash:Kv,filterElementInContainer:Xv,scrollOffset:Jv};var Xi={},Vs={};Object.defineProperty(Vs,"__esModule",{value:!0});Vs.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var bs={};Object.defineProperty(bs,"__esModule",{value:!0});var qv=no,e0=["mousedown","mousewheel","touchmove","keydown"];bs.default={subscribe:function(t){return typeof document<"u"&&e0.forEach(function(n){return(0,qv.addPassiveEventListener)(document,n,t)})}};var oo={};Object.defineProperty(oo,"__esModule",{value:!0});var Ha={registered:{},scrollEvent:{register:function(t,n){Ha.registered[t]=n},remove:function(t){Ha.registered[t]=null}}};oo.default=Ha;Object.defineProperty(Xi,"__esModule",{value:!0});var t0=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n0=ro;Zi(n0);var r0=Vs,kc=Zi(r0),o0=bs,i0=Zi(o0),l0=oo,rt=Zi(l0);function Zi(e){return e&&e.__esModule?e:{default:e}}var Tp=function(t){return kc.default[t.smooth]||kc.default.defaultEasing},a0=function(t){return typeof t=="function"?t:function(){return t}},s0=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Ba=function(){return s0()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),jp=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},$p=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},Np=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},u0=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,o=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)},c0=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,o=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)},f0=function e(t,n,r){var o=n.data;if(!n.ignoreCancelEvents&&o.cancel){rt.default.registered.end&&rt.default.registered.end(o.to,o.target,o.currentPositionY);return}if(o.delta=Math.round(o.targetPosition-o.startPosition),o.start===null&&(o.start=r),o.progress=r-o.start,o.percent=o.progress>=o.duration?1:t(o.progress/o.duration),o.currentPosition=o.startPosition+Math.ceil(o.delta*o.percent),o.containerElement&&o.containerElement!==document&&o.containerElement!==document.body?n.horizontal?o.containerElement.scrollLeft=o.currentPosition:o.containerElement.scrollTop=o.currentPosition:n.horizontal?window.scrollTo(o.currentPosition,0):window.scrollTo(0,o.currentPosition),o.percent<1){var i=e.bind(null,t,n);Ba.call(window,i);return}rt.default.registered.end&&rt.default.registered.end(o.to,o.target,o.currentPosition)},Ys=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},io=function(t,n,r,o){n.data=n.data||jp(),window.clearTimeout(n.data.delayTimeout);var i=function(){n.data.cancel=!0};if(i0.default.subscribe(i),Ys(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?$p(n):Np(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){rt.default.registered.end&&rt.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=a0(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=o;var l=Tp(n),a=f0.bind(null,l,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){rt.default.registered.begin&&rt.default.registered.begin(n.data.to,n.data.target),Ba.call(window,a)},n.delay);return}rt.default.registered.begin&&rt.default.registered.begin(n.data.to,n.data.target),Ba.call(window,a)},Ji=function(t){return t=t0({},t),t.data=t.data||jp(),t.absolute=!0,t},d0=function(t){io(0,Ji(t))},p0=function(t,n){io(t,Ji(n))},m0=function(t){t=Ji(t),Ys(t),io(t.horizontal?u0(t):c0(t),t)},h0=function(t,n){n=Ji(n),Ys(n);var r=n.horizontal?$p(n):Np(n);io(t+r,n)};Xi.default={animateTopScroll:io,getAnimationType:Tp,scrollToTop:d0,scrollToBottom:m0,scrollTo:p0,scrollMore:h0};Object.defineProperty(tr,"__esModule",{value:!0});var g0=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v0=ro,y0=Gs(v0),w0=Xi,x0=Gs(w0),S0=oo,$o=Gs(S0);function Gs(e){return e&&e.__esModule?e:{default:e}}var No={},_c=void 0;tr.default={unmount:function(){No={}},register:function(t,n){No[t]=n},unregister:function(t){delete No[t]},get:function(t){return No[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return _c=t},getActiveLink:function(){return _c},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=g0({},n,{absolute:!1});var o=n.containerId,i=n.container,l=void 0;o?l=document.getElementById(o):i&&i.nodeType?l=i:l=document,n.absolute=!0;var a=n.horizontal,s=y0.default.scrollOffset(l,r,a)+(n.offset||0);if(!n.smooth){$o.default.registered.begin&&$o.default.registered.begin(t,r),l===document?n.horizontal?window.scrollTo(s,0):window.scrollTo(0,s):l.scrollTop=s,$o.default.registered.end&&$o.default.registered.end(t,r);return}x0.default.animateTopScroll(s,n,t,r)}};var Op={exports:{}},k0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_0=k0,E0=_0;function zp(){}function Ip(){}Ip.resetWarningCache=zp;var C0=function(){function e(r,o,i,l,a,s){if(s!==E0){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ip,resetWarningCache:zp};return n.PropTypes=n,n};Op.exports=C0();var qi=Op.exports,el={};Object.defineProperty(el,"__esModule",{value:!0});var P0=ro,Ml=T0(P0);function T0(e){return e&&e.__esModule?e:{default:e}}var j0={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,o=r.get(t);if(o&&(n||t!==r.getActiveLink())){var i=this.containers[t]||document;r.scrollTo(t,{container:i})}},getHash:function(){return Ml.default.getHash()},changeHash:function(t,n){this.isInitialized()&&Ml.default.getHash()!==t&&Ml.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};el.default=j0;Object.defineProperty(eo,"__esModule",{value:!0});var Oo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$0=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),N0=te,Ec=lo(N0),O0=to,zo=lo(O0),z0=tr,I0=lo(z0),L0=qi,V=lo(L0),R0=el,Ct=lo(R0);function lo(e){return e&&e.__esModule?e:{default:e}}function M0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D0(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function F0(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Cc={to:V.default.string.isRequired,containerId:V.default.string,container:V.default.object,activeClass:V.default.string,activeStyle:V.default.object,spy:V.default.bool,horizontal:V.default.bool,smooth:V.default.oneOfType([V.default.bool,V.default.string]),offset:V.default.number,delay:V.default.number,isDynamic:V.default.bool,onClick:V.default.func,duration:V.default.oneOfType([V.default.number,V.default.func]),absolute:V.default.bool,onSetActive:V.default.func,onSetInactive:V.default.func,ignoreCancelEvents:V.default.bool,hashSpy:V.default.bool,saveHashHistory:V.default.bool,spyThrottle:V.default.number};eo.default=function(e,t){var n=t||I0.default,r=function(i){F0(l,i);function l(a){M0(this,l);var s=D0(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,a));return o.call(s),s.state={active:!1},s}return $0(l,[{key:"getScrollSpyContainer",value:function(){var s=this.props.containerId,u=this.props.container;return s&&!u?document.getElementById(s):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var s=this.getScrollSpyContainer();zo.default.isMounted(s)||zo.default.mount(s,this.props.spyThrottle),this.props.hashSpy&&(Ct.default.isMounted()||Ct.default.mount(n),Ct.default.mapContainer(this.props.to,s)),zo.default.addSpyHandler(this.spyHandler,s),this.setState({container:s})}}},{key:"componentWillUnmount",value:function(){zo.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var s="";this.state&&this.state.active?s=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():s=this.props.className;var u={};this.state&&this.state.active?u=Oo({},this.props.style,this.props.activeStyle):u=Oo({},this.props.style);var p=Oo({},this.props);for(var h in Cc)p.hasOwnProperty(h)&&delete p[h];return p.className=s,p.style=u,p.onClick=this.handleClick,Ec.default.createElement(e,p)}}]),l}(Ec.default.PureComponent),o=function(){var l=this;this.scrollTo=function(a,s){n.scrollTo(a,Oo({},l.state,s))},this.handleClick=function(a){l.props.onClick&&l.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),l.scrollTo(l.props.to,l.props)},this.spyHandler=function(a,s){var u=l.getScrollSpyContainer();if(!(Ct.default.isMounted()&&!Ct.default.isInitialized())){var p=l.props.horizontal,h=l.props.to,m=null,y=void 0,S=void 0;if(p){var k=0,N=0,f=0;if(u.getBoundingClientRect){var c=u.getBoundingClientRect();f=c.left}if(!m||l.props.isDynamic){if(m=n.get(h),!m)return;var d=m.getBoundingClientRect();k=d.left-f+a,N=k+d.width}var v=a-l.props.offset;y=v>=Math.floor(k)&&v<Math.floor(N),S=v<Math.floor(k)||v>=Math.floor(N)}else{var _=0,w=0,x=0;if(u.getBoundingClientRect){var C=u.getBoundingClientRect();x=C.top}if(!m||l.props.isDynamic){if(m=n.get(h),!m)return;var M=m.getBoundingClientRect();_=M.top-x+s,w=_+M.height}var z=s-l.props.offset;y=z>=Math.floor(_)&&z<Math.floor(w),S=z<Math.floor(_)||z>=Math.floor(w)}var pe=n.getActiveLink();if(S){if(h===pe&&n.setActiveLink(void 0),l.props.hashSpy&&Ct.default.getHash()===h){var qe=l.props.saveHashHistory,st=qe===void 0?!1:qe;Ct.default.changeHash("",st)}l.props.spy&&l.state.active&&(l.setState({active:!1}),l.props.onSetInactive&&l.props.onSetInactive(h,m))}if(y&&(pe!==h||l.state.active===!1)){n.setActiveLink(h);var Kt=l.props.saveHashHistory,nr=Kt===void 0?!1:Kt;l.props.hashSpy&&Ct.default.changeHash(h,nr),l.props.spy&&(l.setState({active:!0}),l.props.onSetActive&&l.props.onSetActive(h,m))}}}};return r.propTypes=Cc,r.defaultProps={offset:0},r};Object.defineProperty(Qs,"__esModule",{value:!0});var A0=te,Pc=Lp(A0),H0=eo,B0=Lp(H0);function Lp(e){return e&&e.__esModule?e:{default:e}}function U0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Tc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function W0(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Q0=function(e){W0(t,e);function t(){var n,r,o,i;U0(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return i=(r=(o=Tc(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),o),o.render=function(){return Pc.default.createElement("a",o.props,o.props.children)},r),Tc(o,i)}return t}(Pc.default.Component);Qs.default=(0,B0.default)(Q0);var Ks={};Object.defineProperty(Ks,"__esModule",{value:!0});var V0=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b0=te,jc=Rp(b0),Y0=eo,G0=Rp(Y0);function Rp(e){return e&&e.__esModule?e:{default:e}}function K0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function X0(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Z0(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var J0=function(e){Z0(t,e);function t(){return K0(this,t),X0(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return V0(t,[{key:"render",value:function(){return jc.default.createElement("button",this.props,this.props.children)}}]),t}(jc.default.Component);Ks.default=(0,G0.default)(J0);var Xs={},tl={};Object.defineProperty(tl,"__esModule",{value:!0});var q0=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ey=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ty=te,$c=nl(ty),ny=qd;nl(ny);var ry=tr,Nc=nl(ry),oy=qi,Oc=nl(oy);function nl(e){return e&&e.__esModule?e:{default:e}}function iy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ly(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function ay(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}tl.default=function(e){var t=function(n){ay(r,n);function r(o){iy(this,r);var i=ly(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return i.childBindings={domNode:null},i}return ey(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(i){this.props.name!==i.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Nc.default.unregister(this.props.name)}},{key:"registerElems",value:function(i){Nc.default.register(i,this.childBindings.domNode)}},{key:"render",value:function(){return $c.default.createElement(e,q0({},this.props,{parentBindings:this.childBindings}))}}]),r}($c.default.Component);return t.propTypes={name:Oc.default.string,id:Oc.default.string},t};Object.defineProperty(Xs,"__esModule",{value:!0});var zc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sy=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),uy=te,Ic=Zs(uy),cy=tl,fy=Zs(cy),dy=qi,Lc=Zs(dy);function Zs(e){return e&&e.__esModule?e:{default:e}}function py(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function my(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function hy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Mp=function(e){hy(t,e);function t(){return py(this,t),my(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return sy(t,[{key:"render",value:function(){var r=this,o=zc({},this.props);return delete o.name,o.parentBindings&&delete o.parentBindings,Ic.default.createElement("div",zc({},o,{ref:function(l){r.props.parentBindings.domNode=l}}),this.props.children)}}]),t}(Ic.default.Component);Mp.propTypes={name:Lc.default.string,id:Lc.default.string};Xs.default=(0,fy.default)(Mp);var Dl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rc=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function Mc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Dc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Fc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Io=te,qt=to,Fl=tr,G=qi,Pt=el,Ac={to:G.string.isRequired,containerId:G.string,container:G.object,activeClass:G.string,spy:G.bool,smooth:G.oneOfType([G.bool,G.string]),offset:G.number,delay:G.number,isDynamic:G.bool,onClick:G.func,duration:G.oneOfType([G.number,G.func]),absolute:G.bool,onSetActive:G.func,onSetInactive:G.func,ignoreCancelEvents:G.bool,hashSpy:G.bool,spyThrottle:G.number},gy={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||Fl,o=function(l){Fc(a,l);function a(s){Mc(this,a);var u=Dc(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return i.call(u),u.state={active:!1},u}return Rc(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,p=this.props.container;return u?document.getElementById(u):p&&p.nodeType?p:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();qt.isMounted(u)||qt.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Pt.isMounted()||Pt.mount(r),Pt.mapContainer(this.props.to,u)),this.props.spy&&qt.addStateHandler(this.stateHandler),qt.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){qt.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var p=Dl({},this.props);for(var h in Ac)p.hasOwnProperty(h)&&delete p[h];return p.className=u,p.onClick=this.handleClick,Io.createElement(t,p)}}]),a}(Io.Component),i=function(){var a=this;this.scrollTo=function(s,u){r.scrollTo(s,Dl({},a.state,u))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){r.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(s){var u=a.getScrollSpyContainer();if(!(Pt.isMounted()&&!Pt.isInitialized())){var p=a.props.to,h=null,m=0,y=0,S=0;if(u.getBoundingClientRect){var k=u.getBoundingClientRect();S=k.top}if(!h||a.props.isDynamic){if(h=r.get(p),!h)return;var N=h.getBoundingClientRect();m=N.top-S+s,y=m+N.height}var f=s-a.props.offset,c=f>=Math.floor(m)&&f<Math.floor(y),d=f<Math.floor(m)||f>=Math.floor(y),v=r.getActiveLink();if(d)return p===v&&r.setActiveLink(void 0),a.props.hashSpy&&Pt.getHash()===p&&Pt.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),qt.updateStates();if(c&&v!==p)return r.setActiveLink(p),a.props.hashSpy&&Pt.changeHash(p),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(p)),qt.updateStates()}}};return o.propTypes=Ac,o.defaultProps={offset:0},o},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){Fc(o,r);function o(i){Mc(this,o);var l=Dc(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return l.childBindings={domNode:null},l}return Rc(o,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(l){this.props.name!==l.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Fl.unregister(this.props.name)}},{key:"registerElems",value:function(l){Fl.register(l,this.childBindings.domNode)}},{key:"render",value:function(){return Io.createElement(t,Dl({},this.props,{parentBindings:this.childBindings}))}}]),o}(Io.Component);return n.propTypes={name:G.string,id:G.string},n}},vy=gy;Object.defineProperty(J,"__esModule",{value:!0});J.Helpers=J.ScrollElement=J.ScrollLink=J.animateScroll=J.scrollSpy=J.Events=J.scroller=J.Element=J.Button=Yp=J.Link=void 0;var yy=Qs,Dp=at(yy),wy=Ks,Fp=at(wy),xy=Xs,Ap=at(xy),Sy=tr,Hp=at(Sy),ky=oo,Bp=at(ky),_y=to,Up=at(_y),Ey=Xi,Wp=at(Ey),Cy=eo,Qp=at(Cy),Py=tl,Vp=at(Py),Ty=vy,bp=at(Ty);function at(e){return e&&e.__esModule?e:{default:e}}var Yp=J.Link=Dp.default;J.Button=Fp.default;J.Element=Ap.default;J.scroller=Hp.default;J.Events=Bp.default;J.scrollSpy=Up.default;J.animateScroll=Wp.default;J.ScrollLink=Qp.default;J.ScrollElement=Vp.default;J.Helpers=bp.default;J.default={Link:Dp.default,Button:Fp.default,Element:Ap.default,scroller:Hp.default,Events:Bp.default,scrollSpy:Up.default,animateScroll:Wp.default,ScrollLink:Qp.default,ScrollElement:Vp.default,Helpers:bp.default};const jy=Gt`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,$y=Gt`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`,Ny=We.div`
  animation: ${$y} 3s ease-in-out infinite;
`,Oy=We.div`
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
`,zy=We.div`
  background-color: ${j.primaryBackground};
  padding: 32px;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  animation: ${jy} 0.3s ease-out;

  .modal-header {
    text-align: center;
    margin-bottom: 32px;

    .header-icon {
      font-size: 2.5rem;
      color: ${j.azul};
      margin-bottom: 16px;
      display: inline-block;
    }

    h2 {
      color: ${j.primaryText};
      font-size: 1.5rem;
      margin-bottom: 4px;
      background: linear-gradient(to right, ${j.azul}, #00bcd4);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      color: ${j.secondaryText};
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
      border: 2px solid ${j.secondaryBackground};
      border-radius: 12px;
      color: ${j.secondaryText};
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
        background: ${j.azul};
        border-color: ${j.azul};
        color: ${j.primaryText};
      }
    }
  }

  @media screen and (max-width: 480px) {
    .tab-buttons {
      display: grid;
      grid-template-columns: 1fr;
      width: 100%;
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
      color: ${j.primaryText};
      background: ${j.secondaryBackground};
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
          i,
          h4,
          p {
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
          i,
          h4,
          p {
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
          i,
          h4,
          p {
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
          i,
          h4,
          p {
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
    color: ${j.secondaryText};
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
      color: ${j.primaryText};
      background: ${j.secondaryBackground};
      transform: rotate(90deg);
    }
  }

  @media (max-width: ${ce.mobile}) {
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
      flex-direction: column;
      gap: 10px;

      button {
        width: 100%;
        padding: 12px;
      }
    }

    .contact-grid {
      gap: 8px;
      padding: 0 12px;

      .contact-card {
        padding: 12px;

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
`,Iy=We.form`
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
      color: ${j.azul};
      font-size: 1rem;
    }

    input,
    textarea,
    select {
      width: 100%;
      padding: 10px 10px 10px 35px;
      background-color: ${j.secondaryBackground};
      border: 1px solid transparent;
      border-radius: 8px;
      color: ${j.primaryText};
      font-size: 0.95rem;
      transition: all 0.3s ease;

      &:focus {
        border-color: ${j.azul};
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

    textarea {
      min-height: 70px;
      resize: vertical;
      padding-top: 10px;
      resize: none;

      & + i {
        top: 18px;
      }
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
`,Ly=({isOpen:e,onClose:t})=>{const[n,r]=te.useState({nome:"",email:"",telefone:"",mensagem:"",tipo:"projeto"}),[o,i]=te.useState("contacts"),l=s=>{r({...n,[s.target.name]:s.target.value})},a=s=>{s.preventDefault();const u=`Olá! Me chamo ${n.nome}.

Tipo de Contato: ${n.tipo}
Email: ${n.email}
Telefone: ${n.telefone}

Mensagem: ${n.mensagem}`,p=`https://wa.me/16992445497?text=${encodeURIComponent(u)}`;window.open(p,"_blank")};return e?g.jsx(Oy,{onClick:t,children:g.jsxs(zy,{onClick:s=>s.stopPropagation(),children:[g.jsx("button",{className:"close-button",onClick:t,children:g.jsx("i",{className:"fas fa-times"})}),g.jsxs("div",{className:"modal-header",children:[g.jsx(Ny,{className:"header-icon",children:g.jsx("i",{className:"fas fa-handshake"})}),g.jsx("h2",{children:"Vamos Trabalhar Juntos!"})]}),g.jsxs("div",{className:"tab-buttons",children:[g.jsxs("button",{className:o==="contacts"?"active":"",onClick:()=>i("contacts"),children:[g.jsx("i",{className:"fas fa-address-book"}),"Contatos Diretos"]}),g.jsxs("button",{className:o==="form"?"active":"",onClick:()=>i("form"),children:[g.jsx("i",{className:"far fa-paper-plane"}),"Formulário"]})]}),g.jsxs("div",{className:`section-container ${o}`,children:[o==="contacts"&&g.jsxs("div",{className:"contact-grid",children:[g.jsxs("a",{href:"https://wa.me/16992445497",target:"_blank",rel:"noopener noreferrer",className:"contact-card whatsapp",children:[g.jsx("i",{className:"fab fa-whatsapp"}),g.jsx("h4",{children:"WhatsApp"}),g.jsx("p",{children:"(16) 99244-5497"})]}),g.jsxs("a",{href:"mailto:rodrigodasilvapires@gmail.com",className:"contact-card email",children:[g.jsx("i",{className:"far fa-envelope"}),g.jsx("h4",{children:"Email"}),g.jsx("p",{children:"rodrigodasilvapires@gmail.com"})]}),g.jsxs("a",{href:"https://www.linkedin.com/in/rodrigo-da-silva-pires-a5223b25b/",target:"_blank",rel:"noopener noreferrer",className:"contact-card linkedin",children:[g.jsx("i",{className:"fab fa-linkedin"}),g.jsx("h4",{children:"LinkedIn"}),g.jsx("p",{children:"Conecte-se comigo"})]}),g.jsxs("a",{href:"https://github.com/rodrigao-sp",target:"_blank",rel:"noopener noreferrer",className:"contact-card github",children:[g.jsx("i",{className:"fab fa-github"}),g.jsx("h4",{children:"GitHub"}),g.jsx("p",{children:"Veja meus projetos"})]})]}),o==="form"&&g.jsxs(Iy,{onSubmit:a,children:[g.jsxs("div",{className:"form-group",children:[g.jsx("i",{className:"far fa-user"}),g.jsx("input",{type:"text",name:"nome",placeholder:"Seu nome",value:n.nome,onChange:l,required:!0})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("i",{className:"far fa-envelope"}),g.jsx("input",{type:"email",name:"email",placeholder:"Seu email",value:n.email,onChange:l,required:!0})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("i",{className:"fas fa-phone"}),g.jsx("input",{type:"tel",name:"telefone",placeholder:"Seu telefone",value:n.telefone,onChange:l,required:!0})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("i",{className:"fas fa-tag"}),g.jsxs("select",{name:"tipo",value:n.tipo,onChange:l,required:!0,children:[g.jsx("option",{value:"projeto",children:"Projeto"}),g.jsx("option",{value:"freelance",children:"Freelance"}),g.jsx("option",{value:"mentoria",children:"Mentoria"}),g.jsx("option",{value:"outro",children:"Outro"})]})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("i",{className:"far fa-comment-alt"}),g.jsx("textarea",{name:"mensagem",placeholder:"Sua mensagem",value:n.mensagem,onChange:l,required:!0})]}),g.jsxs("button",{type:"submit",className:"submit-btn",children:[g.jsx("i",{className:"fab fa-send"}),"Enviar"]})]})]})]})}):null},Ry=()=>{const[e,t]=te.useState(!1);return g.jsxs(g.Fragment,{children:[g.jsx(Ev,{children:g.jsxs("div",{className:"container",children:[g.jsxs("div",{className:"logo",children:["Rodrigo ",g.jsx("span",{children:"S. Pires"})]}),g.jsx("nav",{className:"menu",children:g.jsx("ul",{children:["Início","Qualidades","Projetos"].map((n,r)=>g.jsx("li",{children:g.jsx(Yp,{to:n,smooth:!0,duration:500,children:n})},r))})}),g.jsx("div",{className:"social-buttons",children:g.jsxs(jr,{className:"contact-btn","aria-label":"Trabalhar Juntos",onClick:()=>t(!0),children:[g.jsx("i",{className:"fa-solid fa-handshake"}),g.jsx("span",{children:"Trabalhar Juntos"})]})})]})}),g.jsx(Ly,{isOpen:e,onClose:()=>t(!1)})]})},My=We.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0 0;
  background-color: ${j.secondaryBackground};
  position: relative;
  overflow: hidden;

  .container {
    position: relative;
    z-index: 1;
    width: 100%;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    min-height: calc(100vh - 170px);

    @media (max-width: ${ce.tablet}) {
      flex-direction: column;
      text-align: center;
    }
  }

  .txt {
    flex: 1;
    animation: ${Yr} 0.8s ease-out;

    p {
      font-size: clamp(1.5rem, 4vw, 2.5rem);
      margin-bottom: 2rem;
      line-height: 1.4;

      .typing {
        color: ${j.azul};
        font-weight: 700;
      }

      .cursor {
        animation: blink 1s infinite;
        color: ${j.azul};
      }
    }
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .btns {
    display: flex;
    gap: 16px;

    @media (max-width: ${ce.tablet}) {
      justify-content: center;
      flex-wrap: wrap;
    }

    .github {
      background-color: #333;
      &:hover {
        background-color: #444;
      }
    }

    .linkedin {
      background-color: #0073b1;
      &:hover {
        background-color: #0077b5;
      }
    }

    .curriculo {
      background-color: #2ecc71;
      &:hover {
        background-color: #27ae60;
      }
    }

    .btn {
      opacity: 0;
      animation: ${Yr} 0.5s ease-out forwards;

      &:nth-child(1) {
        animation-delay: 0.4s;
      }
      &:nth-child(2) {
        animation-delay: 0.6s;
      }
      &:nth-child(3) {
        animation-delay: 0.8s;
      }
    }
  }

  .image {
    margin: 0;
    padding: 0;
    line-height: 0;
    align-self: flex-end;

    img {
      width: clamp(250px, 30vw, 345px);
      height: auto;
      display: block;
      transition: transform 0.3s ease;
    }

    @media (max-width: ${ce.tablet}) {
      margin-bottom: -4px;
    }
  }

  @media (max-width: ${ce.tablet}) {
    min-height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    margin-top: 60px;

    .container {
      flex: 1;
      flex-direction: column;
      gap: 30px;
      padding: 20px;
      align-items: center;
      justify-content: center;
      min-height: 100%;
    }

    .image {
      order: -1;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      align-self: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
      }
    }

    .txt {
      text-align: center;
      align-items: center;
      order: 0;

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
        text-align: center;
      }
    }

    .btns {
      order: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 10px;
      width: 100%;
      flex-wrap: nowrap;

      .btn {
        flex: 0 1 auto;
      }
    }
  }

  @media (max-width: ${ce.mobile}) {
    padding: 20px 0;

    .container {
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 20px;

        .image {
          width: 200px !important;
          height: 200px !important;
          display: flex;
          justify-content: center;
          margin: 0 auto !important;

          img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover;
            border-radius: 50%;
          }
        }

        .btns {
          display: flex !important;
          justify-content: center !important;
          gap: 15px !important;
          width: 100% !important;
          padding: 0 20px;

          button {
            width: auto !important;
            padding: 12px !important;

            span {
              display: none !important;
            }

            i {
              margin: 0 !important;
              font-size: 1.5rem !important;
            }
          }
        }
      }
    }
  }
`,Dy="/portfolio/assets/images/Perfil.webp",Fy="https://github.com/rodrigao-sp",Ay="https://www.linkedin.com/in/rodrigo-da-silva-pires-a5223b25b/",Hy="/curriculo.pdf",Al=e=>{window.open(e,"_blank","noopener noreferrer")},By=()=>{const[e,t]=te.useState(""),[n,r]=te.useState(!1),o=te.useMemo(()=>["Front-end","React","TypeScript"],[]),[i,l]=te.useState(0);return te.useEffect(()=>{let a;const s=o[i],u=n&&e.length>0,p=!n&&e.length<s.length,h=n&&e.length===0;return u?a=setTimeout(()=>{t(m=>m.slice(0,-1))},50):p?a=setTimeout(()=>{t(s.slice(0,e.length+1))},100):h?(r(!1),l(m=>(m+1)%o.length)):e===s&&(a=setTimeout(()=>r(!0),2e3)),()=>clearTimeout(a)},[e,n,i,o]),g.jsx(My,{id:"Início",children:g.jsx("div",{className:"container",children:g.jsxs("div",{className:"content",children:[g.jsxs("div",{className:"txt",children:[g.jsxs("p",{children:["Olá,",g.jsx("br",{}),"Meu nome é Rodrigo, e sou um desenvolvedor",g.jsxs("span",{className:"typing",children:[" ",e]}),g.jsx("span",{className:"cursor",children:"|"})]}),g.jsxs("div",{className:"btns",children:[g.jsxs(jr,{onClick:()=>Al(Fy),className:"social-icon btn github","aria-label":"GitHub",children:[g.jsx("i",{className:"fab fa-github"}),g.jsx("span",{children:"GitHub"})]}),g.jsxs(jr,{onClick:()=>Al(Ay),className:"social-icon btn linkedin","aria-label":"LinkedIn",children:[g.jsx("i",{className:"fa-brands fa-linkedin-in"}),g.jsx("span",{children:"LinkedIn"})]}),g.jsxs(jr,{onClick:()=>Al(Hy),className:"social-icon btn curriculo","aria-label":"Currículo",children:[g.jsx("i",{className:"fas fa-file-alt"}),g.jsx("span",{children:"Currículo"})]})]})]}),g.jsx("div",{className:"image",children:g.jsx("img",{src:Dy,alt:"Foto de perfil de Rodrigo da Silva Pires"})})]})})})},Uy=We.section`
  width: 100%;
  overflow: hidden;
  padding: 80px 0;
  background-color: ${j.primaryBackground};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 24px;
    color: ${j.primaryText};
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
    color: ${j.primaryText};
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
    background-color: ${j.secondaryBackground};
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
`,Wy=[{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",alt:"HTML5",tooltip:"HTML5"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",alt:"CSS3",tooltip:"CSS3"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",alt:"Python",tooltip:"Python"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",alt:"React",tooltip:"React"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",alt:"JavaScript",tooltip:"JavaScript"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",alt:"TypeScript",tooltip:"TypeScript"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",alt:"Sass",tooltip:"Sass"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",alt:"Docker",tooltip:"Docker"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",alt:"Redux",tooltip:"Redux"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",alt:"Vue.js",tooltip:"Vue.js"},{src:"https://cdn.worldvectorlogo.com/logos/django.svg",alt:"Django",tooltip:"Django"},{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg",alt:"Gulp",tooltip:"Gulp"}],Qy=["Html","Css","JavaScript","React","Python","Bootstrap","Docker","Git"],Vy=()=>g.jsxs(Uy,{id:"Qualidades",children:[g.jsxs("div",{className:"container",children:[g.jsx("h2",{children:"Qualidades"}),g.jsx("p",{children:"Sou um desenvolvedor front-end apaixonado por inovação e tecnologia, com uma sólida trajetória em criar experiências web robustas e escaláveis. Minha especialidade inclui um profundo domínio de HTML, CSS e JavaScript, além de frameworks modernos como React, que me permitem desenvolver interfaces intuitivas e responsivas, sempre com as melhores práticas de mercado. Atualmente, estou expandindo minha expertise em Python, pois acredito no valor de encontrar soluções eficientes para problemas complexos. Com facilidade para trabalhar em equipe, sou movido pela troca de conhecimento e pela busca constante de aprimoramento, sempre visando entregar resultados excepcionais."}),g.jsx("div",{className:"icons",children:Wy.map((e,t)=>g.jsxs("div",{className:"icon-item",children:[g.jsx("img",{src:e.src,alt:e.alt}),g.jsx("div",{className:"tooltip",children:e.tooltip})]},t))}),g.jsx("h3",{children:"Especializações"})]}),g.jsx("div",{className:"wrapper",children:Qy.map((e,t)=>g.jsx("div",{className:`itemLeft item${t+1}`,children:e},t))})]}),by=We.section`
  padding: 100px 0;
  background-color: ${j.secondaryBackground};

  .container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .projetos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    padding: 20px 0;
  }

  .projeto {
    background: ${j.primaryBackground};
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    opacity: 0;
    animation: ${Yr} 0.5s ease-out forwards;

    @for $i from 1 through 12 {
      &:nth-child(#{$i}) {
        animation-delay: #{$i * 0.1}s;
      }
    }

    &:hover {
      transform: translateY(-10px);
    }

    .projeto-imagem {
      width: 100%;
      height: 200px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
    }

    .projeto-conteudo {
      padding: 20px;

      h3 {
        font-size: 1.2rem;
        margin-bottom: 10px;
        color: ${j.primaryText};
      }

      p {
        font-size: 0.9rem;
        margin-bottom: 20px;
        color: ${j.secondaryText};
      }

      .projeto-links {
        display: flex;
        gap: 12px;

        a {
          flex: 1;
          text-align: center;
          padding: 8px;
          border-radius: 6px;
          font-size: 0.9rem;
          transition: all 0.3s ease;

          &.demo {
            background: ${j.azul};
            color: ${j.primaryText};

            &:hover {
              background: ${j.hover};
            }
          }

          &.codigo {
            background: transparent;
            border: 1px solid ${j.secondaryText};
            color: ${j.secondaryText};

            &:hover {
              border-color: ${j.primaryText};
              color: ${j.primaryText};
            }
          }
        }
      }
    }
  }

  @media (max-width: ${ce.tablet}) {
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
`,Yy="/portfolio/assets/images/cosmoexplorer.webp",Gy="/portfolio/assets/images/Eplay.webp",Ky="/portfolio/assets/images/Tarefas.webp",Xy="/portfolio/assets/images/Restaurante.webp",Zy="/portfolio/assets/images/Clone-disney.webp",Jy="/portfolio/assets/images/wolfloose.webp",qy=()=>{const[e,t]=te.useState(null),n=[{titulo:"Wolfloose",categoria:"sites",descricao:"Meu site empresarial focado em criação de sites, desenvolvido com vite React e TypeScript.",imgSrc:Jy,linkSite:"https://wolfloose.vercel.app",linkGithub:"",tecnologias:["React","TypeScript","Vite","Styled Components"]},{titulo:"Cosmoexplorer",categoria:"sites",descricao:"Projeto sobre astronomia com temas de foguetes e viagens espaciais. Desenvolvido com Vite, React e TypeScript.",imgSrc:Yy,linkSite:"https://www.cosmoexplorer.com.br/",linkGithub:"https://github.com/rodrigao-sp/cosmoexplorer",tecnologias:["React","TypeScript","Vite","Styled Components"]},{titulo:"Eplay - Loja de Jogos",categoria:"sites",descricao:"Loja virtual de jogos com integração API e interface responsiva. Feito com React, Styled Components e Redux.",imgSrc:Gy,linkSite:"https://eplay-ashen-one.vercel.app/",linkGithub:"https://github.com/rodrigao-sp/eplay",tecnologias:["React","Styled Components","API Integration","Redux"]},{titulo:"Restaurante",categoria:"sites",descricao:"Site responsivo para restaurante, com design moderno e navegação fluida. Desenvolvido com HTML, CSS e Bootstrap.",imgSrc:Xy,linkSite:"https://restaurante-weld.vercel.app/",linkGithub:"https://github.com/rodrigao-sp/restaurante",tecnologias:["HTML","CSS","Bootstrap","JavaScript"]},{titulo:"Clone Disney+",categoria:"sites",descricao:"Clone da Disney+ com foco em desempenho e design modular, usando HTML, CSS, Gulp e SCSS.",imgSrc:Zy,linkSite:"https://clone-disneyplus-omega-gules.vercel.app/",linkGithub:"https://github.com/rodrigao-sp/clone_disneyplus",tecnologias:["HTML","SCSS","Gulp","JavaScript"]},{titulo:"Aplicação de Tarefas",categoria:"aplicacoes",descricao:"Aplicação de gerenciamento de tarefas com React, TypeScript e Styled Components, permitindo adicionar e editar tarefas.",imgSrc:Ky,linkSite:"https://minhas-tarefas-taupe-five.vercel.app/",linkGithub:"https://github.com/rodrigao-sp/minhas-tarefas",tecnologias:["React","TypeScript","Styled Components","Redux"]}];return g.jsx(by,{id:"Projetos",children:g.jsxs("div",{className:"container",children:[g.jsx("h2",{children:"Projetos"}),g.jsx("div",{className:"projetos-grid",children:n.map((r,o)=>g.jsxs("div",{className:"projeto",onMouseEnter:()=>t(o),onMouseLeave:()=>t(null),children:[g.jsxs("div",{className:"projeto-imagem",children:[g.jsx("img",{src:r.imgSrc,alt:r.titulo}),e===o&&g.jsx("div",{className:"projeto-overlay",children:g.jsx("div",{className:"tecnologias",children:r.tecnologias.map((i,l)=>g.jsx("span",{children:i},l))})})]}),g.jsxs("div",{className:"projeto-conteudo",children:[g.jsx("h3",{children:r.titulo}),g.jsx("p",{children:r.descricao}),g.jsxs("div",{className:"projeto-links",children:[g.jsxs("a",{href:r.linkSite,target:"_blank",rel:"noopener noreferrer",className:"demo",children:[g.jsx("i",{className:"fas fa-external-link-alt"})," Demo"]}),g.jsxs("a",{href:r.linkGithub,target:"_blank",rel:"noopener noreferrer",className:"codigo",children:[g.jsx("i",{className:"fab fa-github"})," Código"]})]})]})]},o))})]})})},e1=We.footer`
  background-color: ${j.primaryBackground};
  padding: 60px 0 30px;

  .container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    animation: ${Yr} 0.8s ease-out;

    @media (max-width: ${ce.mobile}) {
      text-align: center;
    }
  }

  h3 {
    color: ${j.primaryText};
    font-size: 1.2rem;
    margin-bottom: 20px;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 30px;
      height: 2px;
      background-color: ${j.azul};

      @media (max-width: ${ce.mobile}) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .links {
    ul {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    a {
      color: ${j.secondaryText};
      transition: color 0.2s ease;
      font-size: 0.9rem;

      &:hover {
        color: ${j.primaryText};
      }
    }
  }

  .social-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;

    @media (max-width: ${ce.mobile}) {
      justify-content: center;
    }

    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${j.primaryBackground};

      &:hover {
        transform: translateY(-3px);
      }
    }

    .social-btn {
      &:hover {
        animation: ${_v} 1s ease-in-out infinite;
      }
    }
  }

  .footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    p {
      font-size: 0.9rem;
      color: ${j.secondaryText};
    }
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 16px;

    .tech-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${j.secondaryText};
      transition: color 0.2s ease;
      opacity: 0;
      animation: ${Yr} 0.5s ease-out forwards;

      @for $i from 1 through 6 {
        &:nth-child(#{$i}) {
          animation-delay: #{$i * 0.1}s;
        }
      }

      &:hover {
        color: ${j.primaryText};
      }

      i {
        font-size: 1.5rem;
      }

      .tech-name {
        font-size: 0.9rem;
      }
    }
  }

  .footer-nav {
    ul {
      display: flex;
      flex-direction: column; /* Empilhado por padrão */
      gap: 20px;
      align-items: center;
    }
  }

  @media (max-width: ${ce.tablet}) {
    padding: 40px 0 20px;

    .container {
      padding: 0 20px;
    }

    .footer-content {
      grid-template-columns: 1fr;
      gap: 30px;
      text-align: center;

      .footer-nav,
      .footer-info,
      .tecnologias {
        align-items: center;
      }

      ul {
        align-items: center;
      }

      .social-buttons {
        justify-content: center;
      }

      .tech-grid {
        justify-content: center;
      }
    }
  }

  @media (max-width: ${ce.mobile}) {
    .footer-content {
      gap: 25px;

      h3 {
        font-size: 1.1rem;
      }

      ul li a,
      .tech-item {
        font-size: 0.9rem;
      }
    }

    .footer-nav ul {
      display: flex; /* Garante que os itens serão flexíveis */
      flex-direction: row; /* Alinha os itens lado a lado */
      flex-wrap: wrap; /* Quebra itens em múltiplas linhas, se necessário */
      justify-content: center; /* Centraliza os itens */
      gap: 16px; /* Define o espaçamento entre os itens */
      padding: 0; /* Remove espaçamento interno */
      margin: 0; /* Remove margem */
      list-style: none; /* Remove o estilo de lista padrão */
    }
  }

  @media screen and (max-width: 480px) {
    .social-buttons {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .footer-nav ul {
      display: flex;
      flex-direction: row; /* Itens lado a lado */
      justify-content: center;
      gap: 12px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
`,t1=()=>{const e=new Date().getFullYear(),t=[{name:"GitHub",url:"https://github.com/rodrigao-sp",icon:"github"},{name:"LinkedIn",url:"https://www.linkedin.com/in/rodrigo-da-silva-pires-a5223b25b/",icon:"linkedin"},{name:"WhatsApp",url:"https://wa.me/16992445497?text=Olá",icon:"whatsapp"}],n=[{name:"React",icon:"fab fa-react"},{name:"TypeScript",icon:"devicon-typescript-plain"},{name:"JavaScript",icon:"fab fa-js"},{name:"HTML5",icon:"fab fa-html5"},{name:"CSS3",icon:"fab fa-css3-alt"},{name:"SASS",icon:"fab fa-sass"}],r=["Início","Qualidades","Projetos"];return g.jsx(e1,{children:g.jsxs("div",{className:"container",children:[g.jsxs("div",{className:"footer-content",children:[g.jsxs("div",{className:"links",children:[g.jsx("h3",{children:"Navegação"}),g.jsx("ul",{children:r.map(o=>g.jsx("li",{children:g.jsxs("a",{href:`#${o}`,children:[g.jsx("i",{className:"fas fa-chevron-right"}),o]})},o))})]}),g.jsxs("div",{className:"footer-info",children:[g.jsx("h3",{children:"Rodrigo S. Pires"}),g.jsx("div",{className:"social-buttons",children:t.map(o=>g.jsx(jr,{onClick:()=>window.open(o.url,"_blank"),"aria-label":o.name,className:`social-btn ${o.icon}`,children:g.jsx("i",{className:`fab fa-${o.icon}`})},o.name))})]}),g.jsxs("div",{className:"tecnologias",children:[g.jsx("h3",{children:"Tecnologias"}),g.jsx("div",{className:"tech-grid",children:n.map(o=>g.jsxs("span",{className:"tech-item",children:[g.jsx("i",{className:o.icon}),g.jsx("span",{className:"tech-name",children:o.name})]},o.name))})]})]}),g.jsx("div",{className:"footer-bottom",children:g.jsxs("p",{children:["© ",e," Rodrigo da Silva Pires. Todos os direitos reservados."]})})]})})};ep(document.getElementById("root")).render(g.jsxs(te.StrictMode,{children:[g.jsx(xv,{}),g.jsx(Ry,{}),g.jsx(By,{}),g.jsx(Vy,{}),g.jsx(qy,{}),g.jsx(t1,{})]}));
