function Pc(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function _c(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var St={},na={exports:{}},y2={},l0={exports:{}},V0={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M6=Symbol.for("react.element"),xc=Symbol.for("react.portal"),Sc=Symbol.for("react.fragment"),Cc=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),Mc=Symbol.for("react.provider"),Tc=Symbol.for("react.context"),Ec=Symbol.for("react.forward_ref"),bc=Symbol.for("react.suspense"),Dc=Symbol.for("react.memo"),Ic=Symbol.for("react.lazy"),Ji=Symbol.iterator;function Ac(n){return n===null||typeof n!="object"?null:(n=Ji&&n[Ji]||n["@@iterator"],typeof n=="function"?n:null)}var ia={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ra=Object.assign,oa={};function c9(n,e,t){this.props=n,this.context=e,this.refs=oa,this.updater=t||ia}c9.prototype.isReactComponent={};c9.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};c9.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function sa(){}sa.prototype=c9.prototype;function Rn(n,e,t){this.props=n,this.context=e,this.refs=oa,this.updater=t||ia}var Nn=Rn.prototype=new sa;Nn.constructor=Rn;ra(Nn,c9.prototype);Nn.isPureReactComponent=!0;var Ki=Array.isArray,aa=Object.prototype.hasOwnProperty,kn={current:null},la={key:!0,ref:!0,__self:!0,__source:!0};function ua(n,e,t){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)aa.call(e,i)&&!la.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:M6,type:n,key:o,ref:s,props:r,_owner:kn.current}}function Lc(n,e){return{$$typeof:M6,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function On(n){return typeof n=="object"&&n!==null&&n.$$typeof===M6}function Rc(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Qi=/\/+/g;function de(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Rc(""+n.key):e.toString(36)}function L4(n,e,t,i,r){var o=typeof n;(o==="undefined"||o==="boolean")&&(n=null);var s=!1;if(n===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(n.$$typeof){case M6:case xc:s=!0}}if(s)return s=n,r=r(s),n=i===""?"."+de(s,0):i,Ki(r)?(t="",n!=null&&(t=n.replace(Qi,"$&/")+"/"),L4(r,e,t,"",function(u){return u})):r!=null&&(On(r)&&(r=Lc(r,t+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Qi,"$&/")+"/")+n)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Ki(n))for(var a=0;a<n.length;a++){o=n[a];var l=i+de(o,a);s+=L4(o,e,t,l,r)}else if(l=Ac(n),typeof l=="function")for(n=l.call(n),a=0;!(o=n.next()).done;)o=o.value,l=i+de(o,a++),s+=L4(o,e,t,l,r);else if(o==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function G6(n,e,t){if(n==null)return n;var i=[],r=0;return L4(n,i,"","",function(o){return e.call(t,o,r++)}),i}function Nc(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var i2={current:null},R4={transition:null},kc={ReactCurrentDispatcher:i2,ReactCurrentBatchConfig:R4,ReactCurrentOwner:kn};V0.Children={map:G6,forEach:function(n,e,t){G6(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return G6(n,function(){e++}),e},toArray:function(n){return G6(n,function(e){return e})||[]},only:function(n){if(!On(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};V0.Component=c9;V0.Fragment=Sc;V0.Profiler=wc;V0.PureComponent=Rn;V0.StrictMode=Cc;V0.Suspense=bc;V0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kc;V0.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=ra({},n.props),r=n.key,o=n.ref,s=n._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=kn.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)aa.call(e,l)&&!la.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:M6,type:n.type,key:r,ref:o,props:i,_owner:s}};V0.createContext=function(n){return n={$$typeof:Tc,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Mc,_context:n},n.Consumer=n};V0.createElement=ua;V0.createFactory=function(n){var e=ua.bind(null,n);return e.type=n,e};V0.createRef=function(){return{current:null}};V0.forwardRef=function(n){return{$$typeof:Ec,render:n}};V0.isValidElement=On;V0.lazy=function(n){return{$$typeof:Ic,_payload:{_status:-1,_result:n},_init:Nc}};V0.memo=function(n,e){return{$$typeof:Dc,type:n,compare:e===void 0?null:e}};V0.startTransition=function(n){var e=R4.transition;R4.transition={};try{n()}finally{R4.transition=e}};V0.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};V0.useCallback=function(n,e){return i2.current.useCallback(n,e)};V0.useContext=function(n){return i2.current.useContext(n)};V0.useDebugValue=function(){};V0.useDeferredValue=function(n){return i2.current.useDeferredValue(n)};V0.useEffect=function(n,e){return i2.current.useEffect(n,e)};V0.useId=function(){return i2.current.useId()};V0.useImperativeHandle=function(n,e,t){return i2.current.useImperativeHandle(n,e,t)};V0.useInsertionEffect=function(n,e){return i2.current.useInsertionEffect(n,e)};V0.useLayoutEffect=function(n,e){return i2.current.useLayoutEffect(n,e)};V0.useMemo=function(n,e){return i2.current.useMemo(n,e)};V0.useReducer=function(n,e,t){return i2.current.useReducer(n,e,t)};V0.useRef=function(n){return i2.current.useRef(n)};V0.useState=function(n){return i2.current.useState(n)};V0.useSyncExternalStore=function(n,e,t){return i2.current.useSyncExternalStore(n,e,t)};V0.useTransition=function(){return i2.current.useTransition()};V0.version="18.2.0";(function(n){n.exports=V0})(l0);const T6=_c(l0.exports),Ct=Pc({__proto__:null,default:T6},[l0.exports]);var ca={exports:{}},ha={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(A,b){var L=A.length;A.push(b);e:for(;0<L;){var J=L-1>>>1,K=A[J];if(0<r(K,b))A[J]=b,A[L]=K,L=J;else break e}}function t(A){return A.length===0?null:A[0]}function i(A){if(A.length===0)return null;var b=A[0],L=A.pop();if(L!==b){A[0]=L;e:for(var J=0,K=A.length,i0=K>>>1;J<i0;){var Y0=2*(J+1)-1,S0=A[Y0],B=Y0+1,N0=A[B];if(0>r(S0,L))B<K&&0>r(N0,S0)?(A[J]=N0,A[B]=L,J=B):(A[J]=S0,A[Y0]=L,J=Y0);else if(B<K&&0>r(N0,L))A[J]=N0,A[B]=L,J=B;else break e}}return b}function r(A,b){var L=A.sortIndex-b.sortIndex;return L!==0?L:A.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();n.unstable_now=function(){return s.now()-a}}var l=[],u=[],h=1,d=null,c=3,X=!1,p=!1,f=!1,Z=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var b=t(u);b!==null;){if(b.callback===null)i(u);else if(b.startTime<=A)i(u),b.sortIndex=b.expirationTime,e(l,b);else break;b=t(u)}}function y(A){if(f=!1,g(A),!p)if(t(l)!==null)p=!0,t0(P);else{var b=t(u);b!==null&&r0(y,b.startTime-A)}}function P(A,b){p=!1,f&&(f=!1,Y(v),v=-1),X=!0;var L=c;try{for(g(b),d=t(l);d!==null&&(!(d.expirationTime>b)||A&&!e0());){var J=d.callback;if(typeof J=="function"){d.callback=null,c=d.priorityLevel;var K=J(d.expirationTime<=b);b=n.unstable_now(),typeof K=="function"?d.callback=K:d===t(l)&&i(l),g(b)}else i(l);d=t(l)}if(d!==null)var i0=!0;else{var Y0=t(u);Y0!==null&&r0(y,Y0.startTime-b),i0=!1}return i0}finally{d=null,c=L,X=!1}}var w=!1,T=null,v=-1,M=5,I=-1;function e0(){return!(n.unstable_now()-I<M)}function X0(){if(T!==null){var A=n.unstable_now();I=A;var b=!0;try{b=T(!0,A)}finally{b?z():(w=!1,T=null)}}else w=!1}var z;if(typeof m=="function")z=function(){m(X0)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,W=R.port2;R.port1.onmessage=X0,z=function(){W.postMessage(null)}}else z=function(){Z(X0,0)};function t0(A){T=A,w||(w=!0,z())}function r0(A,b){v=Z(function(){A(n.unstable_now())},b)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(A){A.callback=null},n.unstable_continueExecution=function(){p||X||(p=!0,t0(P))},n.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<A?Math.floor(1e3/A):5},n.unstable_getCurrentPriorityLevel=function(){return c},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(A){switch(c){case 1:case 2:case 3:var b=3;break;default:b=c}var L=c;c=b;try{return A()}finally{c=L}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(A,b){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var L=c;c=A;try{return b()}finally{c=L}},n.unstable_scheduleCallback=function(A,b,L){var J=n.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?J+L:J):L=J,A){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=L+K,A={id:h++,callback:b,priorityLevel:A,startTime:L,expirationTime:K,sortIndex:-1},L>J?(A.sortIndex=L,e(u,A),t(l)===null&&A===t(u)&&(f?(Y(v),v=-1):f=!0,r0(y,L-J))):(A.sortIndex=K,e(l,A),p||X||(p=!0,t0(P))),A},n.unstable_shouldYield=e0,n.unstable_wrapCallback=function(A){var b=c;return function(){var L=c;c=b;try{return A.apply(this,arguments)}finally{c=L}}}})(ha);(function(n){n.exports=ha})(ca);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=l0.exports,g2=ca.exports;function o0(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fa=new Set,q9={};function Q8(n,e){q3(n,e),q3(n+"Capture",e)}function q3(n,e){for(q9[n]=e,n=0;n<e.length;n++)fa.add(e[n])}var E5=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wt=Object.prototype.hasOwnProperty,Oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,er={},tr={};function zc(n){return wt.call(tr,n)?!0:wt.call(er,n)?!1:Oc.test(n)?tr[n]=!0:(er[n]=!0,!1)}function Fc(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Uc(n,e,t,i){if(e===null||typeof e>"u"||Fc(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function r2(n,e,t,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var z1={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){z1[n]=new r2(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];z1[e]=new r2(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){z1[n]=new r2(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){z1[n]=new r2(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){z1[n]=new r2(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){z1[n]=new r2(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){z1[n]=new r2(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){z1[n]=new r2(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){z1[n]=new r2(n,5,!1,n.toLowerCase(),null,!1,!1)});var zn=/[\-:]([a-z])/g;function Fn(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(zn,Fn);z1[e]=new r2(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(zn,Fn);z1[e]=new r2(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(zn,Fn);z1[e]=new r2(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){z1[n]=new r2(n,1,!1,n.toLowerCase(),null,!1,!1)});z1.xlinkHref=new r2("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){z1[n]=new r2(n,1,!1,n.toLowerCase(),null,!0,!0)});function Un(n,e,t,i){var r=z1.hasOwnProperty(e)?z1[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Uc(e,t,r,i)&&(t=null),i||r===null?zc(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var R5=da.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H6=Symbol.for("react.element"),C3=Symbol.for("react.portal"),w3=Symbol.for("react.fragment"),jn=Symbol.for("react.strict_mode"),Mt=Symbol.for("react.profiler"),Xa=Symbol.for("react.provider"),Za=Symbol.for("react.context"),Bn=Symbol.for("react.forward_ref"),Tt=Symbol.for("react.suspense"),Et=Symbol.for("react.suspense_list"),Vn=Symbol.for("react.memo"),H5=Symbol.for("react.lazy"),Ya=Symbol.for("react.offscreen"),nr=Symbol.iterator;function p9(n){return n===null||typeof n!="object"?null:(n=nr&&n[nr]||n["@@iterator"],typeof n=="function"?n:null)}var f1=Object.assign,fe;function b9(n){if(fe===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);fe=e&&e[1]||""}return`
`+fe+n}var Xe=!1;function Ze(n,e){if(!n||Xe)return"";Xe=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=s&&0<=a);break}}}finally{Xe=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?b9(n):""}function jc(n){switch(n.tag){case 5:return b9(n.type);case 16:return b9("Lazy");case 13:return b9("Suspense");case 19:return b9("SuspenseList");case 0:case 2:case 15:return n=Ze(n.type,!1),n;case 11:return n=Ze(n.type.render,!1),n;case 1:return n=Ze(n.type,!0),n;default:return""}}function bt(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case w3:return"Fragment";case C3:return"Portal";case Mt:return"Profiler";case jn:return"StrictMode";case Tt:return"Suspense";case Et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Za:return(n.displayName||"Context")+".Consumer";case Xa:return(n._context.displayName||"Context")+".Provider";case Bn:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Vn:return e=n.displayName||null,e!==null?e:bt(n.type)||"Memo";case H5:e=n._payload,n=n._init;try{return bt(n(e))}catch{}}return null}function Bc(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bt(e);case 8:return e===jn?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function c8(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ma(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vc(n){var e=ma(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,o=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function W6(n){n._valueTracker||(n._valueTracker=Vc(n))}function pa(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=ma(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function q4(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Dt(n,e){var t=e.checked;return f1({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function ir(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=c8(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ga(n,e){e=e.checked,e!=null&&Un(n,"checked",e,!1)}function It(n,e){ga(n,e);var t=c8(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?At(n,e.type,t):e.hasOwnProperty("defaultValue")&&At(n,e.type,c8(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function rr(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function At(n,e,t){(e!=="number"||q4(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var D9=Array.isArray;function z3(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+c8(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Lt(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(o0(91));return f1({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function or(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(o0(92));if(D9(t)){if(1<t.length)throw Error(o0(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:c8(t)}}function ya(n,e){var t=c8(e.value),i=c8(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function sr(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function va(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rt(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?va(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var $6,Pa=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for($6=$6||document.createElement("div"),$6.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$6.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function J9(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var k9={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gc=["Webkit","ms","Moz","O"];Object.keys(k9).forEach(function(n){Gc.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),k9[e]=k9[n]})});function _a(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||k9.hasOwnProperty(n)&&k9[n]?(""+e).trim():e+"px"}function xa(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=_a(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Hc=f1({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nt(n,e){if(e){if(Hc[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(o0(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(o0(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(o0(61))}if(e.style!=null&&typeof e.style!="object")throw Error(o0(62))}}function kt(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ot=null;function Gn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var zt=null,F3=null,U3=null;function ar(n){if(n=D6(n)){if(typeof zt!="function")throw Error(o0(280));var e=n.stateNode;e&&(e=R7(e),zt(n.stateNode,n.type,e))}}function Sa(n){F3?U3?U3.push(n):U3=[n]:F3=n}function Ca(){if(F3){var n=F3,e=U3;if(U3=F3=null,ar(n),e)for(n=0;n<e.length;n++)ar(e[n])}}function wa(n,e){return n(e)}function Ma(){}var Ye=!1;function Ta(n,e,t){if(Ye)return n(e,t);Ye=!0;try{return wa(n,e,t)}finally{Ye=!1,(F3!==null||U3!==null)&&(Ma(),Ca())}}function K9(n,e){var t=n.stateNode;if(t===null)return null;var i=R7(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(o0(231,e,typeof t));return t}var Ft=!1;if(E5)try{var g9={};Object.defineProperty(g9,"passive",{get:function(){Ft=!0}}),window.addEventListener("test",g9,g9),window.removeEventListener("test",g9,g9)}catch{Ft=!1}function Wc(n,e,t,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(h){this.onError(h)}}var O9=!1,J4=null,K4=!1,Ut=null,$c={onError:function(n){O9=!0,J4=n}};function qc(n,e,t,i,r,o,s,a,l){O9=!1,J4=null,Wc.apply($c,arguments)}function Jc(n,e,t,i,r,o,s,a,l){if(qc.apply(this,arguments),O9){if(O9){var u=J4;O9=!1,J4=null}else throw Error(o0(198));K4||(K4=!0,Ut=u)}}function e3(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Ea(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function lr(n){if(e3(n)!==n)throw Error(o0(188))}function Kc(n){var e=n.alternate;if(!e){if(e=e3(n),e===null)throw Error(o0(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===t)return lr(r),n;if(o===i)return lr(r),e;o=o.sibling}throw Error(o0(188))}if(t.return!==i.return)t=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===t){s=!0,t=r,i=o;break}if(a===i){s=!0,i=r,t=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===t){s=!0,t=o,i=r;break}if(a===i){s=!0,i=o,t=r;break}a=a.sibling}if(!s)throw Error(o0(189))}}if(t.alternate!==i)throw Error(o0(190))}if(t.tag!==3)throw Error(o0(188));return t.stateNode.current===t?n:e}function ba(n){return n=Kc(n),n!==null?Da(n):null}function Da(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Da(n);if(e!==null)return e;n=n.sibling}return null}var Ia=g2.unstable_scheduleCallback,ur=g2.unstable_cancelCallback,Qc=g2.unstable_shouldYield,eh=g2.unstable_requestPaint,v1=g2.unstable_now,th=g2.unstable_getCurrentPriorityLevel,Hn=g2.unstable_ImmediatePriority,Aa=g2.unstable_UserBlockingPriority,Q4=g2.unstable_NormalPriority,nh=g2.unstable_LowPriority,La=g2.unstable_IdlePriority,D7=null,o5=null;function ih(n){if(o5&&typeof o5.onCommitFiberRoot=="function")try{o5.onCommitFiberRoot(D7,n,void 0,(n.current.flags&128)===128)}catch{}}var B2=Math.clz32?Math.clz32:sh,rh=Math.log,oh=Math.LN2;function sh(n){return n>>>=0,n===0?32:31-(rh(n)/oh|0)|0}var q6=64,J6=4194304;function I9(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function e7(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,o=n.pingedLanes,s=t&268435455;if(s!==0){var a=s&~r;a!==0?i=I9(a):(o&=s,o!==0&&(i=I9(o)))}else s=t&~r,s!==0?i=I9(s):o!==0&&(i=I9(o));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-B2(e),r=1<<t,i|=n[t],e&=~r;return i}function ah(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lh(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,o=n.pendingLanes;0<o;){var s=31-B2(o),a=1<<s,l=r[s];l===-1?((a&t)===0||(a&i)!==0)&&(r[s]=ah(a,e)):l<=e&&(n.expiredLanes|=a),o&=~a}}function jt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ra(){var n=q6;return q6<<=1,(q6&4194240)===0&&(q6=64),n}function me(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function E6(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-B2(e),n[e]=t}function uh(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-B2(t),o=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~o}}function Wn(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-B2(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var i1=0;function Na(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ka,$n,Oa,za,Fa,Bt=!1,K6=[],t8=null,n8=null,i8=null,Q9=new Map,e6=new Map,q5=[],ch="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cr(n,e){switch(n){case"focusin":case"focusout":t8=null;break;case"dragenter":case"dragleave":n8=null;break;case"mouseover":case"mouseout":i8=null;break;case"pointerover":case"pointerout":Q9.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":e6.delete(e.pointerId)}}function y9(n,e,t,i,r,o){return n===null||n.nativeEvent!==o?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=D6(e),e!==null&&$n(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function hh(n,e,t,i,r){switch(e){case"focusin":return t8=y9(t8,n,e,t,i,r),!0;case"dragenter":return n8=y9(n8,n,e,t,i,r),!0;case"mouseover":return i8=y9(i8,n,e,t,i,r),!0;case"pointerover":var o=r.pointerId;return Q9.set(o,y9(Q9.get(o)||null,n,e,t,i,r)),!0;case"gotpointercapture":return o=r.pointerId,e6.set(o,y9(e6.get(o)||null,n,e,t,i,r)),!0}return!1}function Ua(n){var e=w8(n.target);if(e!==null){var t=e3(e);if(t!==null){if(e=t.tag,e===13){if(e=Ea(t),e!==null){n.blockedOn=e,Fa(n.priority,function(){Oa(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function N4(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Vt(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ot=i,t.target.dispatchEvent(i),Ot=null}else return e=D6(t),e!==null&&$n(e),n.blockedOn=t,!1;e.shift()}return!0}function hr(n,e,t){N4(n)&&t.delete(e)}function dh(){Bt=!1,t8!==null&&N4(t8)&&(t8=null),n8!==null&&N4(n8)&&(n8=null),i8!==null&&N4(i8)&&(i8=null),Q9.forEach(hr),e6.forEach(hr)}function v9(n,e){n.blockedOn===e&&(n.blockedOn=null,Bt||(Bt=!0,g2.unstable_scheduleCallback(g2.unstable_NormalPriority,dh)))}function t6(n){function e(r){return v9(r,n)}if(0<K6.length){v9(K6[0],n);for(var t=1;t<K6.length;t++){var i=K6[t];i.blockedOn===n&&(i.blockedOn=null)}}for(t8!==null&&v9(t8,n),n8!==null&&v9(n8,n),i8!==null&&v9(i8,n),Q9.forEach(e),e6.forEach(e),t=0;t<q5.length;t++)i=q5[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<q5.length&&(t=q5[0],t.blockedOn===null);)Ua(t),t.blockedOn===null&&q5.shift()}var j3=R5.ReactCurrentBatchConfig,t7=!0;function fh(n,e,t,i){var r=i1,o=j3.transition;j3.transition=null;try{i1=1,qn(n,e,t,i)}finally{i1=r,j3.transition=o}}function Xh(n,e,t,i){var r=i1,o=j3.transition;j3.transition=null;try{i1=4,qn(n,e,t,i)}finally{i1=r,j3.transition=o}}function qn(n,e,t,i){if(t7){var r=Vt(n,e,t,i);if(r===null)we(n,e,i,n7,t),cr(n,i);else if(hh(r,n,e,t,i))i.stopPropagation();else if(cr(n,i),e&4&&-1<ch.indexOf(n)){for(;r!==null;){var o=D6(r);if(o!==null&&ka(o),o=Vt(n,e,t,i),o===null&&we(n,e,i,n7,t),o===r)break;r=o}r!==null&&i.stopPropagation()}else we(n,e,i,null,t)}}var n7=null;function Vt(n,e,t,i){if(n7=null,n=Gn(i),n=w8(n),n!==null)if(e=e3(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Ea(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return n7=n,null}function ja(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(th()){case Hn:return 1;case Aa:return 4;case Q4:case nh:return 16;case La:return 536870912;default:return 16}default:return 16}}var Q5=null,Jn=null,k4=null;function Ba(){if(k4)return k4;var n,e=Jn,t=e.length,i,r="value"in Q5?Q5.value:Q5.textContent,o=r.length;for(n=0;n<t&&e[n]===r[n];n++);var s=t-n;for(i=1;i<=s&&e[t-i]===r[o-i];i++);return k4=r.slice(n,1<i?1-i:void 0)}function O4(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Q6(){return!0}function dr(){return!1}function v2(n){function e(t,i,r,o,s){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Q6:dr,this.isPropagationStopped=dr,this}return f1(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Q6)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Q6)},persist:function(){},isPersistent:Q6}),e}var h9={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kn=v2(h9),b6=f1({},h9,{view:0,detail:0}),Zh=v2(b6),pe,ge,P9,I7=f1({},b6,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==P9&&(P9&&n.type==="mousemove"?(pe=n.screenX-P9.screenX,ge=n.screenY-P9.screenY):ge=pe=0,P9=n),pe)},movementY:function(n){return"movementY"in n?n.movementY:ge}}),fr=v2(I7),Yh=f1({},I7,{dataTransfer:0}),mh=v2(Yh),ph=f1({},b6,{relatedTarget:0}),ye=v2(ph),gh=f1({},h9,{animationName:0,elapsedTime:0,pseudoElement:0}),yh=v2(gh),vh=f1({},h9,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ph=v2(vh),_h=f1({},h9,{data:0}),Xr=v2(_h),xh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ch={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wh(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Ch[n])?!!e[n]:!1}function Qn(){return wh}var Mh=f1({},b6,{key:function(n){if(n.key){var e=xh[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=O4(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Sh[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qn,charCode:function(n){return n.type==="keypress"?O4(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?O4(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Th=v2(Mh),Eh=f1({},I7,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zr=v2(Eh),bh=f1({},b6,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qn}),Dh=v2(bh),Ih=f1({},h9,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ah=v2(Ih),Lh=f1({},I7,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Rh=v2(Lh),Nh=[9,13,27,32],ei=E5&&"CompositionEvent"in window,z9=null;E5&&"documentMode"in document&&(z9=document.documentMode);var kh=E5&&"TextEvent"in window&&!z9,Va=E5&&(!ei||z9&&8<z9&&11>=z9),Yr=String.fromCharCode(32),mr=!1;function Ga(n,e){switch(n){case"keyup":return Nh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ha(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var M3=!1;function Oh(n,e){switch(n){case"compositionend":return Ha(e);case"keypress":return e.which!==32?null:(mr=!0,Yr);case"textInput":return n=e.data,n===Yr&&mr?null:n;default:return null}}function zh(n,e){if(M3)return n==="compositionend"||!ei&&Ga(n,e)?(n=Ba(),k4=Jn=Q5=null,M3=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Va&&e.locale!=="ko"?null:e.data;default:return null}}var Fh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Fh[n.type]:e==="textarea"}function Wa(n,e,t,i){Sa(i),e=i7(e,"onChange"),0<e.length&&(t=new Kn("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var F9=null,n6=null;function Uh(n){ol(n,0)}function A7(n){var e=b3(n);if(pa(e))return n}function jh(n,e){if(n==="change")return e}var $a=!1;if(E5){var ve;if(E5){var Pe="oninput"in document;if(!Pe){var gr=document.createElement("div");gr.setAttribute("oninput","return;"),Pe=typeof gr.oninput=="function"}ve=Pe}else ve=!1;$a=ve&&(!document.documentMode||9<document.documentMode)}function yr(){F9&&(F9.detachEvent("onpropertychange",qa),n6=F9=null)}function qa(n){if(n.propertyName==="value"&&A7(n6)){var e=[];Wa(e,n6,n,Gn(n)),Ta(Uh,e)}}function Bh(n,e,t){n==="focusin"?(yr(),F9=e,n6=t,F9.attachEvent("onpropertychange",qa)):n==="focusout"&&yr()}function Vh(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return A7(n6)}function Gh(n,e){if(n==="click")return A7(e)}function Hh(n,e){if(n==="input"||n==="change")return A7(e)}function Wh(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var W2=typeof Object.is=="function"?Object.is:Wh;function i6(n,e){if(W2(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!wt.call(e,r)||!W2(n[r],e[r]))return!1}return!0}function vr(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Pr(n,e){var t=vr(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=vr(t)}}function Ja(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ja(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ka(){for(var n=window,e=q4();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=q4(n.document)}return e}function ti(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function $h(n){var e=Ka(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Ja(t.ownerDocument.documentElement,t)){if(i!==null&&ti(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!n.extend&&o>i&&(r=i,i=o,o=r),r=Pr(t,o);var s=Pr(t,i);r&&s&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==s.node||n.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),o>i?(n.addRange(e),n.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var qh=E5&&"documentMode"in document&&11>=document.documentMode,T3=null,Gt=null,U9=null,Ht=!1;function _r(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ht||T3==null||T3!==q4(i)||(i=T3,"selectionStart"in i&&ti(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),U9&&i6(U9,i)||(U9=i,i=i7(Gt,"onSelect"),0<i.length&&(e=new Kn("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=T3)))}function e4(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var E3={animationend:e4("Animation","AnimationEnd"),animationiteration:e4("Animation","AnimationIteration"),animationstart:e4("Animation","AnimationStart"),transitionend:e4("Transition","TransitionEnd")},_e={},Qa={};E5&&(Qa=document.createElement("div").style,"AnimationEvent"in window||(delete E3.animationend.animation,delete E3.animationiteration.animation,delete E3.animationstart.animation),"TransitionEvent"in window||delete E3.transitionend.transition);function L7(n){if(_e[n])return _e[n];if(!E3[n])return n;var e=E3[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Qa)return _e[n]=e[t];return n}var el=L7("animationend"),tl=L7("animationiteration"),nl=L7("animationstart"),il=L7("transitionend"),rl=new Map,xr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function f8(n,e){rl.set(n,e),Q8(e,[n])}for(var xe=0;xe<xr.length;xe++){var Se=xr[xe],Jh=Se.toLowerCase(),Kh=Se[0].toUpperCase()+Se.slice(1);f8(Jh,"on"+Kh)}f8(el,"onAnimationEnd");f8(tl,"onAnimationIteration");f8(nl,"onAnimationStart");f8("dblclick","onDoubleClick");f8("focusin","onFocus");f8("focusout","onBlur");f8(il,"onTransitionEnd");q3("onMouseEnter",["mouseout","mouseover"]);q3("onMouseLeave",["mouseout","mouseover"]);q3("onPointerEnter",["pointerout","pointerover"]);q3("onPointerLeave",["pointerout","pointerover"]);Q8("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Q8("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Q8("onBeforeInput",["compositionend","keypress","textInput","paste"]);Q8("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Q8("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Q8("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var A9="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qh=new Set("cancel close invalid load scroll toggle".split(" ").concat(A9));function Sr(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Jc(i,e,void 0,n),n.currentTarget=null}function ol(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Sr(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Sr(r,a,u),o=l}}}if(K4)throw n=Ut,K4=!1,Ut=null,n}function s1(n,e){var t=e[Kt];t===void 0&&(t=e[Kt]=new Set);var i=n+"__bubble";t.has(i)||(sl(e,n,2,!1),t.add(i))}function Ce(n,e,t){var i=0;e&&(i|=4),sl(t,n,i,e)}var t4="_reactListening"+Math.random().toString(36).slice(2);function r6(n){if(!n[t4]){n[t4]=!0,fa.forEach(function(t){t!=="selectionchange"&&(Qh.has(t)||Ce(t,!1,n),Ce(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[t4]||(e[t4]=!0,Ce("selectionchange",!1,e))}}function sl(n,e,t,i){switch(ja(e)){case 1:var r=fh;break;case 4:r=Xh;break;default:r=qn}t=r.bind(null,e,t,n),r=void 0,!Ft||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function we(n,e,t,i,r){var o=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=w8(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}Ta(function(){var u=o,h=Gn(t),d=[];e:{var c=rl.get(n);if(c!==void 0){var X=Kn,p=n;switch(n){case"keypress":if(O4(t)===0)break e;case"keydown":case"keyup":X=Th;break;case"focusin":p="focus",X=ye;break;case"focusout":p="blur",X=ye;break;case"beforeblur":case"afterblur":X=ye;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=fr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=mh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=Dh;break;case el:case tl:case nl:X=yh;break;case il:X=Ah;break;case"scroll":X=Zh;break;case"wheel":X=Rh;break;case"copy":case"cut":case"paste":X=Ph;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Zr}var f=(e&4)!==0,Z=!f&&n==="scroll",Y=f?c!==null?c+"Capture":null:c;f=[];for(var m=u,g;m!==null;){g=m;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,Y!==null&&(y=K9(m,Y),y!=null&&f.push(o6(m,y,g)))),Z)break;m=m.return}0<f.length&&(c=new X(c,p,null,t,h),d.push({event:c,listeners:f}))}}if((e&7)===0){e:{if(c=n==="mouseover"||n==="pointerover",X=n==="mouseout"||n==="pointerout",c&&t!==Ot&&(p=t.relatedTarget||t.fromElement)&&(w8(p)||p[b5]))break e;if((X||c)&&(c=h.window===h?h:(c=h.ownerDocument)?c.defaultView||c.parentWindow:window,X?(p=t.relatedTarget||t.toElement,X=u,p=p?w8(p):null,p!==null&&(Z=e3(p),p!==Z||p.tag!==5&&p.tag!==6)&&(p=null)):(X=null,p=u),X!==p)){if(f=fr,y="onMouseLeave",Y="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(f=Zr,y="onPointerLeave",Y="onPointerEnter",m="pointer"),Z=X==null?c:b3(X),g=p==null?c:b3(p),c=new f(y,m+"leave",X,t,h),c.target=Z,c.relatedTarget=g,y=null,w8(h)===u&&(f=new f(Y,m+"enter",p,t,h),f.target=g,f.relatedTarget=Z,y=f),Z=y,X&&p)t:{for(f=X,Y=p,m=0,g=f;g;g=a3(g))m++;for(g=0,y=Y;y;y=a3(y))g++;for(;0<m-g;)f=a3(f),m--;for(;0<g-m;)Y=a3(Y),g--;for(;m--;){if(f===Y||Y!==null&&f===Y.alternate)break t;f=a3(f),Y=a3(Y)}f=null}else f=null;X!==null&&Cr(d,c,X,f,!1),p!==null&&Z!==null&&Cr(d,Z,p,f,!0)}}e:{if(c=u?b3(u):window,X=c.nodeName&&c.nodeName.toLowerCase(),X==="select"||X==="input"&&c.type==="file")var P=jh;else if(pr(c))if($a)P=Hh;else{P=Vh;var w=Bh}else(X=c.nodeName)&&X.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(P=Gh);if(P&&(P=P(n,u))){Wa(d,P,t,h);break e}w&&w(n,c,u),n==="focusout"&&(w=c._wrapperState)&&w.controlled&&c.type==="number"&&At(c,"number",c.value)}switch(w=u?b3(u):window,n){case"focusin":(pr(w)||w.contentEditable==="true")&&(T3=w,Gt=u,U9=null);break;case"focusout":U9=Gt=T3=null;break;case"mousedown":Ht=!0;break;case"contextmenu":case"mouseup":case"dragend":Ht=!1,_r(d,t,h);break;case"selectionchange":if(qh)break;case"keydown":case"keyup":_r(d,t,h)}var T;if(ei)e:{switch(n){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else M3?Ga(n,t)&&(v="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(v="onCompositionStart");v&&(Va&&t.locale!=="ko"&&(M3||v!=="onCompositionStart"?v==="onCompositionEnd"&&M3&&(T=Ba()):(Q5=h,Jn="value"in Q5?Q5.value:Q5.textContent,M3=!0)),w=i7(u,v),0<w.length&&(v=new Xr(v,n,null,t,h),d.push({event:v,listeners:w}),T?v.data=T:(T=Ha(t),T!==null&&(v.data=T)))),(T=kh?Oh(n,t):zh(n,t))&&(u=i7(u,"onBeforeInput"),0<u.length&&(h=new Xr("onBeforeInput","beforeinput",null,t,h),d.push({event:h,listeners:u}),h.data=T))}ol(d,e)})}function o6(n,e,t){return{instance:n,listener:e,currentTarget:t}}function i7(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=K9(n,t),o!=null&&i.unshift(o6(n,o,r)),o=K9(n,e),o!=null&&i.push(o6(n,o,r))),n=n.return}return i}function a3(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Cr(n,e,t,i,r){for(var o=e._reactName,s=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=K9(t,o),l!=null&&s.unshift(o6(t,l,a))):r||(l=K9(t,o),l!=null&&s.push(o6(t,l,a)))),t=t.return}s.length!==0&&n.push({event:e,listeners:s})}var ed=/\r\n?/g,td=/\u0000|\uFFFD/g;function wr(n){return(typeof n=="string"?n:""+n).replace(ed,`
`).replace(td,"")}function n4(n,e,t){if(e=wr(e),wr(n)!==e&&t)throw Error(o0(425))}function r7(){}var Wt=null,$t=null;function qt(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jt=typeof setTimeout=="function"?setTimeout:void 0,nd=typeof clearTimeout=="function"?clearTimeout:void 0,Mr=typeof Promise=="function"?Promise:void 0,id=typeof queueMicrotask=="function"?queueMicrotask:typeof Mr<"u"?function(n){return Mr.resolve(null).then(n).catch(rd)}:Jt;function rd(n){setTimeout(function(){throw n})}function Me(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),t6(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);t6(e)}function r8(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Tr(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var d9=Math.random().toString(36).slice(2),i5="__reactFiber$"+d9,s6="__reactProps$"+d9,b5="__reactContainer$"+d9,Kt="__reactEvents$"+d9,od="__reactListeners$"+d9,sd="__reactHandles$"+d9;function w8(n){var e=n[i5];if(e)return e;for(var t=n.parentNode;t;){if(e=t[b5]||t[i5]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Tr(n);n!==null;){if(t=n[i5])return t;n=Tr(n)}return e}n=t,t=n.parentNode}return null}function D6(n){return n=n[i5]||n[b5],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function b3(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(o0(33))}function R7(n){return n[s6]||null}var Qt=[],D3=-1;function X8(n){return{current:n}}function a1(n){0>D3||(n.current=Qt[D3],Qt[D3]=null,D3--)}function r1(n,e){D3++,Qt[D3]=n.current,n.current=e}var h8={},W1=X8(h8),l2=X8(!1),z8=h8;function J3(n,e){var t=n.type.contextTypes;if(!t)return h8;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in t)r[o]=e[o];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function u2(n){return n=n.childContextTypes,n!=null}function o7(){a1(l2),a1(W1)}function Er(n,e,t){if(W1.current!==h8)throw Error(o0(168));r1(W1,e),r1(l2,t)}function al(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(o0(108,Bc(n)||"Unknown",r));return f1({},t,i)}function s7(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||h8,z8=W1.current,r1(W1,n),r1(l2,l2.current),!0}function br(n,e,t){var i=n.stateNode;if(!i)throw Error(o0(169));t?(n=al(n,e,z8),i.__reactInternalMemoizedMergedChildContext=n,a1(l2),a1(W1),r1(W1,n)):a1(l2),r1(l2,t)}var y5=null,N7=!1,Te=!1;function ll(n){y5===null?y5=[n]:y5.push(n)}function ad(n){N7=!0,ll(n)}function Z8(){if(!Te&&y5!==null){Te=!0;var n=0,e=i1;try{var t=y5;for(i1=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}y5=null,N7=!1}catch(r){throw y5!==null&&(y5=y5.slice(n+1)),Ia(Hn,Z8),r}finally{i1=e,Te=!1}}return null}var I3=[],A3=0,a7=null,l7=0,S2=[],C2=0,F8=null,P5=1,_5="";function v8(n,e){I3[A3++]=l7,I3[A3++]=a7,a7=n,l7=e}function ul(n,e,t){S2[C2++]=P5,S2[C2++]=_5,S2[C2++]=F8,F8=n;var i=P5;n=_5;var r=32-B2(i)-1;i&=~(1<<r),t+=1;var o=32-B2(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,P5=1<<32-B2(e)+r|t<<r|i,_5=o+n}else P5=1<<o|t<<r|i,_5=n}function ni(n){n.return!==null&&(v8(n,1),ul(n,1,0))}function ii(n){for(;n===a7;)a7=I3[--A3],I3[A3]=null,l7=I3[--A3],I3[A3]=null;for(;n===F8;)F8=S2[--C2],S2[C2]=null,_5=S2[--C2],S2[C2]=null,P5=S2[--C2],S2[C2]=null}var p2=null,m2=null,c1=!1,U2=null;function cl(n,e){var t=M2(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Dr(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,p2=n,m2=r8(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,p2=n,m2=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=F8!==null?{id:P5,overflow:_5}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=M2(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,p2=n,m2=null,!0):!1;default:return!1}}function en(n){return(n.mode&1)!==0&&(n.flags&128)===0}function tn(n){if(c1){var e=m2;if(e){var t=e;if(!Dr(n,e)){if(en(n))throw Error(o0(418));e=r8(t.nextSibling);var i=p2;e&&Dr(n,e)?cl(i,t):(n.flags=n.flags&-4097|2,c1=!1,p2=n)}}else{if(en(n))throw Error(o0(418));n.flags=n.flags&-4097|2,c1=!1,p2=n}}}function Ir(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;p2=n}function i4(n){if(n!==p2)return!1;if(!c1)return Ir(n),c1=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!qt(n.type,n.memoizedProps)),e&&(e=m2)){if(en(n))throw hl(),Error(o0(418));for(;e;)cl(n,e),e=r8(e.nextSibling)}if(Ir(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o0(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){m2=r8(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}m2=null}}else m2=p2?r8(n.stateNode.nextSibling):null;return!0}function hl(){for(var n=m2;n;)n=r8(n.nextSibling)}function K3(){m2=p2=null,c1=!1}function ri(n){U2===null?U2=[n]:U2.push(n)}var ld=R5.ReactCurrentBatchConfig;function z2(n,e){if(n&&n.defaultProps){e=f1({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var u7=X8(null),c7=null,L3=null,oi=null;function si(){oi=L3=c7=null}function ai(n){var e=u7.current;a1(u7),n._currentValue=e}function nn(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function B3(n,e){c7=n,oi=L3=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(a2=!0),n.firstContext=null)}function D2(n){var e=n._currentValue;if(oi!==n)if(n={context:n,memoizedValue:e,next:null},L3===null){if(c7===null)throw Error(o0(308));L3=n,c7.dependencies={lanes:0,firstContext:n}}else L3=L3.next=n;return e}var M8=null;function li(n){M8===null?M8=[n]:M8.push(n)}function dl(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,li(e)):(t.next=r.next,r.next=t),e.interleaved=t,D5(n,i)}function D5(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var W5=!1;function ui(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fl(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function C5(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function o8(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(J0&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,D5(n,t)}return r=i.interleaved,r===null?(e.next=e,li(i)):(e.next=r.next,r.next=e),i.interleaved=e,D5(n,t)}function z4(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Wn(n,t)}}function Ar(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?r=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?r=o=e:o=o.next=e}else r=o=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function h7(n,e,t,i){var r=n.updateQueue;W5=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var h=n.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,h=u=l=null,a=o;do{var c=a.lane,X=a.eventTime;if((i&c)===c){h!==null&&(h=h.next={eventTime:X,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=n,f=a;switch(c=e,X=t,f.tag){case 1:if(p=f.payload,typeof p=="function"){d=p.call(X,d,c);break e}d=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=f.payload,c=typeof p=="function"?p.call(X,d,c):p,c==null)break e;d=f1({},d,c);break e;case 2:W5=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,c=r.effects,c===null?r.effects=[a]:c.push(a))}else X={eventTime:X,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=X,l=d):h=h.next=X,s|=c;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;c=a,a=c.next,c.next=null,r.lastBaseUpdate=c,r.shared.pending=null}}while(1);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);j8|=s,n.lanes=s,n.memoizedState=d}}function Lr(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(o0(191,r));r.call(i)}}}var Xl=new da.Component().refs;function rn(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:f1({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var k7={isMounted:function(n){return(n=n._reactInternals)?e3(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Q1(),r=a8(n),o=C5(i,r);o.payload=e,t!=null&&(o.callback=t),e=o8(n,o,r),e!==null&&(V2(e,n,r,i),z4(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Q1(),r=a8(n),o=C5(i,r);o.tag=1,o.payload=e,t!=null&&(o.callback=t),e=o8(n,o,r),e!==null&&(V2(e,n,r,i),z4(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Q1(),i=a8(n),r=C5(t,i);r.tag=2,e!=null&&(r.callback=e),e=o8(n,r,i),e!==null&&(V2(e,n,i,t),z4(e,n,i))}};function Rr(n,e,t,i,r,o,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!i6(t,i)||!i6(r,o):!0}function Zl(n,e,t){var i=!1,r=h8,o=e.contextType;return typeof o=="object"&&o!==null?o=D2(o):(r=u2(e)?z8:W1.current,i=e.contextTypes,o=(i=i!=null)?J3(n,r):h8),e=new e(t,o),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=k7,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=o),e}function Nr(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&k7.enqueueReplaceState(e,e.state,null)}function on(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Xl,ui(n);var o=e.contextType;typeof o=="object"&&o!==null?r.context=D2(o):(o=u2(e)?z8:W1.current,r.context=J3(n,o)),r.state=n.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(rn(n,e,o,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&k7.enqueueReplaceState(r,r.state,null),h7(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function _9(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(o0(309));var i=t.stateNode}if(!i)throw Error(o0(147,n));var r=i,o=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===Xl&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof n!="string")throw Error(o0(284));if(!t._owner)throw Error(o0(290,n))}return n}function r4(n,e){throw n=Object.prototype.toString.call(e),Error(o0(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function kr(n){var e=n._init;return e(n._payload)}function Yl(n){function e(Y,m){if(n){var g=Y.deletions;g===null?(Y.deletions=[m],Y.flags|=16):g.push(m)}}function t(Y,m){if(!n)return null;for(;m!==null;)e(Y,m),m=m.sibling;return null}function i(Y,m){for(Y=new Map;m!==null;)m.key!==null?Y.set(m.key,m):Y.set(m.index,m),m=m.sibling;return Y}function r(Y,m){return Y=l8(Y,m),Y.index=0,Y.sibling=null,Y}function o(Y,m,g){return Y.index=g,n?(g=Y.alternate,g!==null?(g=g.index,g<m?(Y.flags|=2,m):g):(Y.flags|=2,m)):(Y.flags|=1048576,m)}function s(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function a(Y,m,g,y){return m===null||m.tag!==6?(m=Re(g,Y.mode,y),m.return=Y,m):(m=r(m,g),m.return=Y,m)}function l(Y,m,g,y){var P=g.type;return P===w3?h(Y,m,g.props.children,y,g.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===H5&&kr(P)===m.type)?(y=r(m,g.props),y.ref=_9(Y,m,g),y.return=Y,y):(y=G4(g.type,g.key,g.props,null,Y.mode,y),y.ref=_9(Y,m,g),y.return=Y,y)}function u(Y,m,g,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Ne(g,Y.mode,y),m.return=Y,m):(m=r(m,g.children||[]),m.return=Y,m)}function h(Y,m,g,y,P){return m===null||m.tag!==7?(m=L8(g,Y.mode,y,P),m.return=Y,m):(m=r(m,g),m.return=Y,m)}function d(Y,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Re(""+m,Y.mode,g),m.return=Y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case H6:return g=G4(m.type,m.key,m.props,null,Y.mode,g),g.ref=_9(Y,null,m),g.return=Y,g;case C3:return m=Ne(m,Y.mode,g),m.return=Y,m;case H5:var y=m._init;return d(Y,y(m._payload),g)}if(D9(m)||p9(m))return m=L8(m,Y.mode,g,null),m.return=Y,m;r4(Y,m)}return null}function c(Y,m,g,y){var P=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(Y,m,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case H6:return g.key===P?l(Y,m,g,y):null;case C3:return g.key===P?u(Y,m,g,y):null;case H5:return P=g._init,c(Y,m,P(g._payload),y)}if(D9(g)||p9(g))return P!==null?null:h(Y,m,g,y,null);r4(Y,g)}return null}function X(Y,m,g,y,P){if(typeof y=="string"&&y!==""||typeof y=="number")return Y=Y.get(g)||null,a(m,Y,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case H6:return Y=Y.get(y.key===null?g:y.key)||null,l(m,Y,y,P);case C3:return Y=Y.get(y.key===null?g:y.key)||null,u(m,Y,y,P);case H5:var w=y._init;return X(Y,m,g,w(y._payload),P)}if(D9(y)||p9(y))return Y=Y.get(g)||null,h(m,Y,y,P,null);r4(m,y)}return null}function p(Y,m,g,y){for(var P=null,w=null,T=m,v=m=0,M=null;T!==null&&v<g.length;v++){T.index>v?(M=T,T=null):M=T.sibling;var I=c(Y,T,g[v],y);if(I===null){T===null&&(T=M);break}n&&T&&I.alternate===null&&e(Y,T),m=o(I,m,v),w===null?P=I:w.sibling=I,w=I,T=M}if(v===g.length)return t(Y,T),c1&&v8(Y,v),P;if(T===null){for(;v<g.length;v++)T=d(Y,g[v],y),T!==null&&(m=o(T,m,v),w===null?P=T:w.sibling=T,w=T);return c1&&v8(Y,v),P}for(T=i(Y,T);v<g.length;v++)M=X(T,Y,v,g[v],y),M!==null&&(n&&M.alternate!==null&&T.delete(M.key===null?v:M.key),m=o(M,m,v),w===null?P=M:w.sibling=M,w=M);return n&&T.forEach(function(e0){return e(Y,e0)}),c1&&v8(Y,v),P}function f(Y,m,g,y){var P=p9(g);if(typeof P!="function")throw Error(o0(150));if(g=P.call(g),g==null)throw Error(o0(151));for(var w=P=null,T=m,v=m=0,M=null,I=g.next();T!==null&&!I.done;v++,I=g.next()){T.index>v?(M=T,T=null):M=T.sibling;var e0=c(Y,T,I.value,y);if(e0===null){T===null&&(T=M);break}n&&T&&e0.alternate===null&&e(Y,T),m=o(e0,m,v),w===null?P=e0:w.sibling=e0,w=e0,T=M}if(I.done)return t(Y,T),c1&&v8(Y,v),P;if(T===null){for(;!I.done;v++,I=g.next())I=d(Y,I.value,y),I!==null&&(m=o(I,m,v),w===null?P=I:w.sibling=I,w=I);return c1&&v8(Y,v),P}for(T=i(Y,T);!I.done;v++,I=g.next())I=X(T,Y,v,I.value,y),I!==null&&(n&&I.alternate!==null&&T.delete(I.key===null?v:I.key),m=o(I,m,v),w===null?P=I:w.sibling=I,w=I);return n&&T.forEach(function(X0){return e(Y,X0)}),c1&&v8(Y,v),P}function Z(Y,m,g,y){if(typeof g=="object"&&g!==null&&g.type===w3&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case H6:e:{for(var P=g.key,w=m;w!==null;){if(w.key===P){if(P=g.type,P===w3){if(w.tag===7){t(Y,w.sibling),m=r(w,g.props.children),m.return=Y,Y=m;break e}}else if(w.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===H5&&kr(P)===w.type){t(Y,w.sibling),m=r(w,g.props),m.ref=_9(Y,w,g),m.return=Y,Y=m;break e}t(Y,w);break}else e(Y,w);w=w.sibling}g.type===w3?(m=L8(g.props.children,Y.mode,y,g.key),m.return=Y,Y=m):(y=G4(g.type,g.key,g.props,null,Y.mode,y),y.ref=_9(Y,m,g),y.return=Y,Y=y)}return s(Y);case C3:e:{for(w=g.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){t(Y,m.sibling),m=r(m,g.children||[]),m.return=Y,Y=m;break e}else{t(Y,m);break}else e(Y,m);m=m.sibling}m=Ne(g,Y.mode,y),m.return=Y,Y=m}return s(Y);case H5:return w=g._init,Z(Y,m,w(g._payload),y)}if(D9(g))return p(Y,m,g,y);if(p9(g))return f(Y,m,g,y);r4(Y,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(t(Y,m.sibling),m=r(m,g),m.return=Y,Y=m):(t(Y,m),m=Re(g,Y.mode,y),m.return=Y,Y=m),s(Y)):t(Y,m)}return Z}var Q3=Yl(!0),ml=Yl(!1),I6={},s5=X8(I6),a6=X8(I6),l6=X8(I6);function T8(n){if(n===I6)throw Error(o0(174));return n}function ci(n,e){switch(r1(l6,e),r1(a6,n),r1(s5,I6),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rt(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Rt(e,n)}a1(s5),r1(s5,e)}function e9(){a1(s5),a1(a6),a1(l6)}function pl(n){T8(l6.current);var e=T8(s5.current),t=Rt(e,n.type);e!==t&&(r1(a6,n),r1(s5,t))}function hi(n){a6.current===n&&(a1(s5),a1(a6))}var h1=X8(0);function d7(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ee=[];function di(){for(var n=0;n<Ee.length;n++)Ee[n]._workInProgressVersionPrimary=null;Ee.length=0}var F4=R5.ReactCurrentDispatcher,be=R5.ReactCurrentBatchConfig,U8=0,d1=null,T1=null,D1=null,f7=!1,j9=!1,u6=0,ud=0;function j1(){throw Error(o0(321))}function fi(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!W2(n[t],e[t]))return!1;return!0}function Xi(n,e,t,i,r,o){if(U8=o,d1=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,F4.current=n===null||n.memoizedState===null?fd:Xd,n=t(i,r),j9){o=0;do{if(j9=!1,u6=0,25<=o)throw Error(o0(301));o+=1,D1=T1=null,e.updateQueue=null,F4.current=Zd,n=t(i,r)}while(j9)}if(F4.current=X7,e=T1!==null&&T1.next!==null,U8=0,D1=T1=d1=null,f7=!1,e)throw Error(o0(300));return n}function Zi(){var n=u6!==0;return u6=0,n}function t5(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return D1===null?d1.memoizedState=D1=n:D1=D1.next=n,D1}function I2(){if(T1===null){var n=d1.alternate;n=n!==null?n.memoizedState:null}else n=T1.next;var e=D1===null?d1.memoizedState:D1.next;if(e!==null)D1=e,T1=n;else{if(n===null)throw Error(o0(310));T1=n,n={memoizedState:T1.memoizedState,baseState:T1.baseState,baseQueue:T1.baseQueue,queue:T1.queue,next:null},D1===null?d1.memoizedState=D1=n:D1=D1.next=n}return D1}function c6(n,e){return typeof e=="function"?e(n):e}function De(n){var e=I2(),t=e.queue;if(t===null)throw Error(o0(311));t.lastRenderedReducer=n;var i=T1,r=i.baseQueue,o=t.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,t.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var h=u.lane;if((U8&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,d1.lanes|=h,j8|=h}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,W2(i,e.memoizedState)||(a2=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do o=r.lane,d1.lanes|=o,j8|=o,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Ie(n){var e=I2(),t=e.queue;if(t===null)throw Error(o0(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,o=e.memoizedState;if(r!==null){t.pending=null;var s=r=r.next;do o=n(o,s.action),s=s.next;while(s!==r);W2(o,e.memoizedState)||(a2=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),t.lastRenderedState=o}return[o,i]}function gl(){}function yl(n,e){var t=d1,i=I2(),r=e(),o=!W2(i.memoizedState,r);if(o&&(i.memoizedState=r,a2=!0),i=i.queue,Yi(_l.bind(null,t,i,n),[n]),i.getSnapshot!==e||o||D1!==null&&D1.memoizedState.tag&1){if(t.flags|=2048,h6(9,Pl.bind(null,t,i,r,e),void 0,null),A1===null)throw Error(o0(349));(U8&30)!==0||vl(t,e,r)}return r}function vl(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=d1.updateQueue,e===null?(e={lastEffect:null,stores:null},d1.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Pl(n,e,t,i){e.value=t,e.getSnapshot=i,xl(e)&&Sl(n)}function _l(n,e,t){return t(function(){xl(e)&&Sl(n)})}function xl(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!W2(n,t)}catch{return!0}}function Sl(n){var e=D5(n,1);e!==null&&V2(e,n,1,-1)}function Or(n){var e=t5();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:c6,lastRenderedState:n},e.queue=n,n=n.dispatch=dd.bind(null,d1,n),[e.memoizedState,n]}function h6(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=d1.updateQueue,e===null?(e={lastEffect:null,stores:null},d1.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Cl(){return I2().memoizedState}function U4(n,e,t,i){var r=t5();d1.flags|=n,r.memoizedState=h6(1|e,t,void 0,i===void 0?null:i)}function O7(n,e,t,i){var r=I2();i=i===void 0?null:i;var o=void 0;if(T1!==null){var s=T1.memoizedState;if(o=s.destroy,i!==null&&fi(i,s.deps)){r.memoizedState=h6(e,t,o,i);return}}d1.flags|=n,r.memoizedState=h6(1|e,t,o,i)}function zr(n,e){return U4(8390656,8,n,e)}function Yi(n,e){return O7(2048,8,n,e)}function wl(n,e){return O7(4,2,n,e)}function Ml(n,e){return O7(4,4,n,e)}function Tl(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function El(n,e,t){return t=t!=null?t.concat([n]):null,O7(4,4,Tl.bind(null,e,n),t)}function mi(){}function bl(n,e){var t=I2();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&fi(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Dl(n,e){var t=I2();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&fi(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Il(n,e,t){return(U8&21)===0?(n.baseState&&(n.baseState=!1,a2=!0),n.memoizedState=t):(W2(t,e)||(t=Ra(),d1.lanes|=t,j8|=t,n.baseState=!0),e)}function cd(n,e){var t=i1;i1=t!==0&&4>t?t:4,n(!0);var i=be.transition;be.transition={};try{n(!1),e()}finally{i1=t,be.transition=i}}function Al(){return I2().memoizedState}function hd(n,e,t){var i=a8(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Ll(n))Rl(e,t);else if(t=dl(n,e,t,i),t!==null){var r=Q1();V2(t,n,i,r),Nl(t,e,i)}}function dd(n,e,t){var i=a8(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ll(n))Rl(e,r);else{var o=n.alternate;if(n.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,t);if(r.hasEagerState=!0,r.eagerState=a,W2(a,s)){var l=e.interleaved;l===null?(r.next=r,li(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=dl(n,e,r,i),t!==null&&(r=Q1(),V2(t,n,i,r),Nl(t,e,i))}}function Ll(n){var e=n.alternate;return n===d1||e!==null&&e===d1}function Rl(n,e){j9=f7=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Nl(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Wn(n,t)}}var X7={readContext:D2,useCallback:j1,useContext:j1,useEffect:j1,useImperativeHandle:j1,useInsertionEffect:j1,useLayoutEffect:j1,useMemo:j1,useReducer:j1,useRef:j1,useState:j1,useDebugValue:j1,useDeferredValue:j1,useTransition:j1,useMutableSource:j1,useSyncExternalStore:j1,useId:j1,unstable_isNewReconciler:!1},fd={readContext:D2,useCallback:function(n,e){return t5().memoizedState=[n,e===void 0?null:e],n},useContext:D2,useEffect:zr,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,U4(4194308,4,Tl.bind(null,e,n),t)},useLayoutEffect:function(n,e){return U4(4194308,4,n,e)},useInsertionEffect:function(n,e){return U4(4,2,n,e)},useMemo:function(n,e){var t=t5();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=t5();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=hd.bind(null,d1,n),[i.memoizedState,n]},useRef:function(n){var e=t5();return n={current:n},e.memoizedState=n},useState:Or,useDebugValue:mi,useDeferredValue:function(n){return t5().memoizedState=n},useTransition:function(){var n=Or(!1),e=n[0];return n=cd.bind(null,n[1]),t5().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=d1,r=t5();if(c1){if(t===void 0)throw Error(o0(407));t=t()}else{if(t=e(),A1===null)throw Error(o0(349));(U8&30)!==0||vl(i,e,t)}r.memoizedState=t;var o={value:t,getSnapshot:e};return r.queue=o,zr(_l.bind(null,i,o,n),[n]),i.flags|=2048,h6(9,Pl.bind(null,i,o,t,e),void 0,null),t},useId:function(){var n=t5(),e=A1.identifierPrefix;if(c1){var t=_5,i=P5;t=(i&~(1<<32-B2(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=u6++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=ud++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Xd={readContext:D2,useCallback:bl,useContext:D2,useEffect:Yi,useImperativeHandle:El,useInsertionEffect:wl,useLayoutEffect:Ml,useMemo:Dl,useReducer:De,useRef:Cl,useState:function(){return De(c6)},useDebugValue:mi,useDeferredValue:function(n){var e=I2();return Il(e,T1.memoizedState,n)},useTransition:function(){var n=De(c6)[0],e=I2().memoizedState;return[n,e]},useMutableSource:gl,useSyncExternalStore:yl,useId:Al,unstable_isNewReconciler:!1},Zd={readContext:D2,useCallback:bl,useContext:D2,useEffect:Yi,useImperativeHandle:El,useInsertionEffect:wl,useLayoutEffect:Ml,useMemo:Dl,useReducer:Ie,useRef:Cl,useState:function(){return Ie(c6)},useDebugValue:mi,useDeferredValue:function(n){var e=I2();return T1===null?e.memoizedState=n:Il(e,T1.memoizedState,n)},useTransition:function(){var n=Ie(c6)[0],e=I2().memoizedState;return[n,e]},useMutableSource:gl,useSyncExternalStore:yl,useId:Al,unstable_isNewReconciler:!1};function t9(n,e){try{var t="",i=e;do t+=jc(i),i=i.return;while(i);var r=t}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:n,source:e,stack:r,digest:null}}function Ae(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function sn(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Yd=typeof WeakMap=="function"?WeakMap:Map;function kl(n,e,t){t=C5(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Y7||(Y7=!0,Yn=i),sn(n,e)},t}function Ol(n,e,t){t=C5(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){sn(n,e)}}var o=n.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){sn(n,e),typeof i!="function"&&(s8===null?s8=new Set([this]):s8.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),t}function Fr(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Yd;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Ed.bind(null,n,e,t),e.then(n,n))}function Ur(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function jr(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=C5(-1,1),e.tag=2,o8(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var md=R5.ReactCurrentOwner,a2=!1;function J1(n,e,t,i){e.child=n===null?ml(e,null,t,i):Q3(e,n.child,t,i)}function Br(n,e,t,i,r){t=t.render;var o=e.ref;return B3(e,r),i=Xi(n,e,t,i,o,r),t=Zi(),n!==null&&!a2?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,I5(n,e,r)):(c1&&t&&ni(e),e.flags|=1,J1(n,e,i,r),e.child)}function Vr(n,e,t,i,r){if(n===null){var o=t.type;return typeof o=="function"&&!Si(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=o,zl(n,e,o,i,r)):(n=G4(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(o=n.child,(n.lanes&r)===0){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:i6,t(s,i)&&n.ref===e.ref)return I5(n,e,r)}return e.flags|=1,n=l8(o,i),n.ref=e.ref,n.return=e,e.child=n}function zl(n,e,t,i,r){if(n!==null){var o=n.memoizedProps;if(i6(o,i)&&n.ref===e.ref)if(a2=!1,e.pendingProps=i=o,(n.lanes&r)!==0)(n.flags&131072)!==0&&(a2=!0);else return e.lanes=n.lanes,I5(n,e,r)}return an(n,e,t,i,r)}function Fl(n,e,t){var i=e.pendingProps,r=i.children,o=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r1(N3,Z2),Z2|=t;else{if((t&1073741824)===0)return n=o!==null?o.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,r1(N3,Z2),Z2|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:t,r1(N3,Z2),Z2|=i}else o!==null?(i=o.baseLanes|t,e.memoizedState=null):i=t,r1(N3,Z2),Z2|=i;return J1(n,e,r,t),e.child}function Ul(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function an(n,e,t,i,r){var o=u2(t)?z8:W1.current;return o=J3(e,o),B3(e,r),t=Xi(n,e,t,i,o,r),i=Zi(),n!==null&&!a2?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,I5(n,e,r)):(c1&&i&&ni(e),e.flags|=1,J1(n,e,t,r),e.child)}function Gr(n,e,t,i,r){if(u2(t)){var o=!0;s7(e)}else o=!1;if(B3(e,r),e.stateNode===null)j4(n,e),Zl(e,t,i),on(e,t,i,r),i=!0;else if(n===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=t.contextType;typeof u=="object"&&u!==null?u=D2(u):(u=u2(t)?z8:W1.current,u=J3(e,u));var h=t.getDerivedStateFromProps,d=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Nr(e,s,i,u),W5=!1;var c=e.memoizedState;s.state=c,h7(e,i,s,r),l=e.memoizedState,a!==i||c!==l||l2.current||W5?(typeof h=="function"&&(rn(e,t,h,i),l=e.memoizedState),(a=W5||Rr(e,t,a,i,c,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,fl(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:z2(e.type,a),s.props=u,d=e.pendingProps,c=s.context,l=t.contextType,typeof l=="object"&&l!==null?l=D2(l):(l=u2(t)?z8:W1.current,l=J3(e,l));var X=t.getDerivedStateFromProps;(h=typeof X=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||c!==l)&&Nr(e,s,i,l),W5=!1,c=e.memoizedState,s.state=c,h7(e,i,s,r);var p=e.memoizedState;a!==d||c!==p||l2.current||W5?(typeof X=="function"&&(rn(e,t,X,i),p=e.memoizedState),(u=W5||Rr(e,t,u,i,c,p,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===n.memoizedProps&&c===n.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&c===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),s.props=i,s.state=p,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===n.memoizedProps&&c===n.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&c===n.memoizedState||(e.flags|=1024),i=!1)}return ln(n,e,t,i,o,r)}function ln(n,e,t,i,r,o){Ul(n,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&br(e,t,!1),I5(n,e,o);i=e.stateNode,md.current=e;var a=s&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&s?(e.child=Q3(e,n.child,null,o),e.child=Q3(e,null,a,o)):J1(n,e,a,o),e.memoizedState=i.state,r&&br(e,t,!0),e.child}function jl(n){var e=n.stateNode;e.pendingContext?Er(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Er(n,e.context,!1),ci(n,e.containerInfo)}function Hr(n,e,t,i,r){return K3(),ri(r),e.flags|=256,J1(n,e,t,i),e.child}var un={dehydrated:null,treeContext:null,retryLane:0};function cn(n){return{baseLanes:n,cachePool:null,transitions:null}}function Bl(n,e,t){var i=e.pendingProps,r=h1.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),r1(h1,r&1),n===null)return tn(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(s=i.children,n=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},(i&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=U7(s,i,0,null),n=L8(n,i,t,null),o.return=e,n.return=e,o.sibling=n,e.child=o,e.child.memoizedState=cn(t),e.memoizedState=un,n):pi(e,s));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return pd(n,e,s,i,a,r,t);if(o){o=i.fallback,s=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(s&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=l8(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=l8(a,o):(o=L8(o,s,t,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=n.child.memoizedState,s=s===null?cn(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=n.childLanes&~t,e.memoizedState=un,i}return o=n.child,n=o.sibling,i=l8(o,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function pi(n,e){return e=U7({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function o4(n,e,t,i){return i!==null&&ri(i),Q3(e,n.child,null,t),n=pi(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function pd(n,e,t,i,r,o,s){if(t)return e.flags&256?(e.flags&=-257,i=Ae(Error(o0(422))),o4(n,e,s,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=U7({mode:"visible",children:i.children},r,0,null),o=L8(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,(e.mode&1)!==0&&Q3(e,n.child,null,s),e.child.memoizedState=cn(s),e.memoizedState=un,o);if((e.mode&1)===0)return o4(n,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(o0(419)),i=Ae(o,i,void 0),o4(n,e,s,i)}if(a=(s&n.childLanes)!==0,a2||a){if(i=A1,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|s))!==0?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,D5(n,r),V2(i,n,r,-1))}return xi(),i=Ae(Error(o0(421))),o4(n,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=bd.bind(null,n),r._reactRetry=e,null):(n=o.treeContext,m2=r8(r.nextSibling),p2=e,c1=!0,U2=null,n!==null&&(S2[C2++]=P5,S2[C2++]=_5,S2[C2++]=F8,P5=n.id,_5=n.overflow,F8=e),e=pi(e,i.children),e.flags|=4096,e)}function Wr(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),nn(n.return,e,t)}function Le(n,e,t,i,r){var o=n.memoizedState;o===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=t,o.tailMode=r)}function Vl(n,e,t){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(J1(n,e,i.children,t),i=h1.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Wr(n,t,e);else if(n.tag===19)Wr(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(r1(h1,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&d7(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Le(e,!1,r,t,o);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&d7(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Le(e,!0,t,null,o);break;case"together":Le(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function j4(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function I5(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),j8|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(o0(153));if(e.child!==null){for(n=e.child,t=l8(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=l8(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function gd(n,e,t){switch(e.tag){case 3:jl(e),K3();break;case 5:pl(e);break;case 1:u2(e.type)&&s7(e);break;case 4:ci(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;r1(u7,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(r1(h1,h1.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?Bl(n,e,t):(r1(h1,h1.current&1),n=I5(n,e,t),n!==null?n.sibling:null);r1(h1,h1.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return Vl(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),r1(h1,h1.current),i)break;return null;case 22:case 23:return e.lanes=0,Fl(n,e,t)}return I5(n,e,t)}var Gl,hn,Hl,Wl;Gl=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};hn=function(){};Hl=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,T8(s5.current);var o=null;switch(t){case"input":r=Dt(n,r),i=Dt(n,i),o=[];break;case"select":r=f1({},r,{value:void 0}),i=f1({},i,{value:void 0}),o=[];break;case"textarea":r=Lt(n,r),i=Lt(n,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=r7)}Nt(t,i);var s;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(q9.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(t||(t={}),t[s]=l[s])}else t||(o||(o=[]),o.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(q9.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&s1("scroll",n),o||a===l||(o=[])):(o=o||[]).push(u,l))}t&&(o=o||[]).push("style",t);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Wl=function(n,e,t,i){t!==i&&(e.flags|=4)};function x9(n,e){if(!c1)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function B1(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function yd(n,e,t){var i=e.pendingProps;switch(ii(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B1(e),null;case 1:return u2(e.type)&&o7(),B1(e),null;case 3:return i=e.stateNode,e9(),a1(l2),a1(W1),di(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(i4(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,U2!==null&&(gn(U2),U2=null))),hn(n,e),B1(e),null;case 5:hi(e);var r=T8(l6.current);if(t=e.type,n!==null&&e.stateNode!=null)Hl(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(o0(166));return B1(e),null}if(n=T8(s5.current),i4(e)){i=e.stateNode,t=e.type;var o=e.memoizedProps;switch(i[i5]=e,i[s6]=o,n=(e.mode&1)!==0,t){case"dialog":s1("cancel",i),s1("close",i);break;case"iframe":case"object":case"embed":s1("load",i);break;case"video":case"audio":for(r=0;r<A9.length;r++)s1(A9[r],i);break;case"source":s1("error",i);break;case"img":case"image":case"link":s1("error",i),s1("load",i);break;case"details":s1("toggle",i);break;case"input":ir(i,o),s1("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},s1("invalid",i);break;case"textarea":or(i,o),s1("invalid",i)}Nt(t,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&n4(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&n4(i.textContent,a,n),r=["children",""+a]):q9.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&s1("scroll",i)}switch(t){case"input":W6(i),rr(i,o,!0);break;case"textarea":W6(i),sr(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=r7)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=va(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=s.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=s.createElement(t,{is:i.is}):(n=s.createElement(t),t==="select"&&(s=n,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):n=s.createElementNS(n,t),n[i5]=e,n[s6]=i,Gl(n,e,!1,!1),e.stateNode=n;e:{switch(s=kt(t,i),t){case"dialog":s1("cancel",n),s1("close",n),r=i;break;case"iframe":case"object":case"embed":s1("load",n),r=i;break;case"video":case"audio":for(r=0;r<A9.length;r++)s1(A9[r],n);r=i;break;case"source":s1("error",n),r=i;break;case"img":case"image":case"link":s1("error",n),s1("load",n),r=i;break;case"details":s1("toggle",n),r=i;break;case"input":ir(n,i),r=Dt(n,i),s1("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=f1({},i,{value:void 0}),s1("invalid",n);break;case"textarea":or(n,i),r=Lt(n,i),s1("invalid",n);break;default:r=i}Nt(t,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?xa(n,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Pa(n,l)):o==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&J9(n,l):typeof l=="number"&&J9(n,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(q9.hasOwnProperty(o)?l!=null&&o==="onScroll"&&s1("scroll",n):l!=null&&Un(n,o,l,s))}switch(t){case"input":W6(n),rr(n,i,!1);break;case"textarea":W6(n),sr(n);break;case"option":i.value!=null&&n.setAttribute("value",""+c8(i.value));break;case"select":n.multiple=!!i.multiple,o=i.value,o!=null?z3(n,!!i.multiple,o,!1):i.defaultValue!=null&&z3(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=r7)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return B1(e),null;case 6:if(n&&e.stateNode!=null)Wl(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(o0(166));if(t=T8(l6.current),T8(s5.current),i4(e)){if(i=e.stateNode,t=e.memoizedProps,i[i5]=e,(o=i.nodeValue!==t)&&(n=p2,n!==null))switch(n.tag){case 3:n4(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&n4(i.nodeValue,t,(n.mode&1)!==0)}o&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[i5]=e,e.stateNode=i}return B1(e),null;case 13:if(a1(h1),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(c1&&m2!==null&&(e.mode&1)!==0&&(e.flags&128)===0)hl(),K3(),e.flags|=98560,o=!1;else if(o=i4(e),i!==null&&i.dehydrated!==null){if(n===null){if(!o)throw Error(o0(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(o0(317));o[i5]=e}else K3(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;B1(e),o=!1}else U2!==null&&(gn(U2),U2=null),o=!0;if(!o)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(h1.current&1)!==0?E1===0&&(E1=3):xi())),e.updateQueue!==null&&(e.flags|=4),B1(e),null);case 4:return e9(),hn(n,e),n===null&&r6(e.stateNode.containerInfo),B1(e),null;case 10:return ai(e.type._context),B1(e),null;case 17:return u2(e.type)&&o7(),B1(e),null;case 19:if(a1(h1),o=e.memoizedState,o===null)return B1(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)x9(o,!1);else{if(E1!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(s=d7(n),s!==null){for(e.flags|=128,x9(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)o=t,n=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=n,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,n=s.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return r1(h1,h1.current&1|2),e.child}n=n.sibling}o.tail!==null&&v1()>n9&&(e.flags|=128,i=!0,x9(o,!1),e.lanes=4194304)}else{if(!i)if(n=d7(s),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),x9(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!c1)return B1(e),null}else 2*v1()-o.renderingStartTime>n9&&t!==1073741824&&(e.flags|=128,i=!0,x9(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(t=o.last,t!==null?t.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=v1(),e.sibling=null,t=h1.current,r1(h1,i?t&1|2:t&1),e):(B1(e),null);case 22:case 23:return _i(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Z2&1073741824)!==0&&(B1(e),e.subtreeFlags&6&&(e.flags|=8192)):B1(e),null;case 24:return null;case 25:return null}throw Error(o0(156,e.tag))}function vd(n,e){switch(ii(e),e.tag){case 1:return u2(e.type)&&o7(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return e9(),a1(l2),a1(W1),di(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return hi(e),null;case 13:if(a1(h1),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(o0(340));K3()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return a1(h1),null;case 4:return e9(),null;case 10:return ai(e.type._context),null;case 22:case 23:return _i(),null;case 24:return null;default:return null}}var s4=!1,H1=!1,Pd=typeof WeakSet=="function"?WeakSet:Set,P0=null;function R3(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Y1(n,e,i)}else t.current=null}function dn(n,e,t){try{t()}catch(i){Y1(n,e,i)}}var $r=!1;function _d(n,e){if(Wt=t7,n=Ka(),ti(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,a=-1,l=-1,u=0,h=0,d=n,c=null;t:for(;;){for(var X;d!==t||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(X=d.firstChild)!==null;)c=d,d=X;for(;;){if(d===n)break t;if(c===t&&++u===r&&(a=s),c===o&&++h===i&&(l=s),(X=d.nextSibling)!==null)break;d=c,c=d.parentNode}d=X}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for($t={focusedElem:n,selectionRange:t},t7=!1,P0=e;P0!==null;)if(e=P0,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,P0=n;else for(;P0!==null;){e=P0;try{var p=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var f=p.memoizedProps,Z=p.memoizedState,Y=e.stateNode,m=Y.getSnapshotBeforeUpdate(e.elementType===e.type?f:z2(e.type,f),Z);Y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o0(163))}}catch(y){Y1(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,P0=n;break}P0=e.return}return p=$r,$r=!1,p}function B9(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var o=r.destroy;r.destroy=void 0,o!==void 0&&dn(e,t,o)}r=r.next}while(r!==i)}}function z7(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function fn(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function $l(n){var e=n.alternate;e!==null&&(n.alternate=null,$l(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[i5],delete e[s6],delete e[Kt],delete e[od],delete e[sd])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ql(n){return n.tag===5||n.tag===3||n.tag===4}function qr(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ql(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Xn(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=r7));else if(i!==4&&(n=n.child,n!==null))for(Xn(n,e,t),n=n.sibling;n!==null;)Xn(n,e,t),n=n.sibling}function Zn(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Zn(n,e,t),n=n.sibling;n!==null;)Zn(n,e,t),n=n.sibling}var R1=null,F2=!1;function O5(n,e,t){for(t=t.child;t!==null;)Jl(n,e,t),t=t.sibling}function Jl(n,e,t){if(o5&&typeof o5.onCommitFiberUnmount=="function")try{o5.onCommitFiberUnmount(D7,t)}catch{}switch(t.tag){case 5:H1||R3(t,e);case 6:var i=R1,r=F2;R1=null,O5(n,e,t),R1=i,F2=r,R1!==null&&(F2?(n=R1,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):R1.removeChild(t.stateNode));break;case 18:R1!==null&&(F2?(n=R1,t=t.stateNode,n.nodeType===8?Me(n.parentNode,t):n.nodeType===1&&Me(n,t),t6(n)):Me(R1,t.stateNode));break;case 4:i=R1,r=F2,R1=t.stateNode.containerInfo,F2=!0,O5(n,e,t),R1=i,F2=r;break;case 0:case 11:case 14:case 15:if(!H1&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&dn(t,e,s),r=r.next}while(r!==i)}O5(n,e,t);break;case 1:if(!H1&&(R3(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Y1(t,e,a)}O5(n,e,t);break;case 21:O5(n,e,t);break;case 22:t.mode&1?(H1=(i=H1)||t.memoizedState!==null,O5(n,e,t),H1=i):O5(n,e,t);break;default:O5(n,e,t)}}function Jr(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Pd),e.forEach(function(i){var r=Dd.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function L2(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var o=n,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:R1=a.stateNode,F2=!1;break e;case 3:R1=a.stateNode.containerInfo,F2=!0;break e;case 4:R1=a.stateNode.containerInfo,F2=!0;break e}a=a.return}if(R1===null)throw Error(o0(160));Jl(o,s,r),R1=null,F2=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Y1(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Kl(e,n),e=e.sibling}function Kl(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(L2(e,n),e5(n),i&4){try{B9(3,n,n.return),z7(3,n)}catch(f){Y1(n,n.return,f)}try{B9(5,n,n.return)}catch(f){Y1(n,n.return,f)}}break;case 1:L2(e,n),e5(n),i&512&&t!==null&&R3(t,t.return);break;case 5:if(L2(e,n),e5(n),i&512&&t!==null&&R3(t,t.return),n.flags&32){var r=n.stateNode;try{J9(r,"")}catch(f){Y1(n,n.return,f)}}if(i&4&&(r=n.stateNode,r!=null)){var o=n.memoizedProps,s=t!==null?t.memoizedProps:o,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ga(r,o),kt(a,s);var u=kt(a,o);for(s=0;s<l.length;s+=2){var h=l[s],d=l[s+1];h==="style"?xa(r,d):h==="dangerouslySetInnerHTML"?Pa(r,d):h==="children"?J9(r,d):Un(r,h,d,u)}switch(a){case"input":It(r,o);break;case"textarea":ya(r,o);break;case"select":var c=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var X=o.value;X!=null?z3(r,!!o.multiple,X,!1):c!==!!o.multiple&&(o.defaultValue!=null?z3(r,!!o.multiple,o.defaultValue,!0):z3(r,!!o.multiple,o.multiple?[]:"",!1))}r[s6]=o}catch(f){Y1(n,n.return,f)}}break;case 6:if(L2(e,n),e5(n),i&4){if(n.stateNode===null)throw Error(o0(162));r=n.stateNode,o=n.memoizedProps;try{r.nodeValue=o}catch(f){Y1(n,n.return,f)}}break;case 3:if(L2(e,n),e5(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{t6(e.containerInfo)}catch(f){Y1(n,n.return,f)}break;case 4:L2(e,n),e5(n);break;case 13:L2(e,n),e5(n),r=n.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(vi=v1())),i&4&&Jr(n);break;case 22:if(h=t!==null&&t.memoizedState!==null,n.mode&1?(H1=(u=H1)||h,L2(e,n),H1=u):L2(e,n),e5(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!h&&(n.mode&1)!==0)for(P0=n,h=n.child;h!==null;){for(d=P0=h;P0!==null;){switch(c=P0,X=c.child,c.tag){case 0:case 11:case 14:case 15:B9(4,c,c.return);break;case 1:R3(c,c.return);var p=c.stateNode;if(typeof p.componentWillUnmount=="function"){i=c,t=c.return;try{e=i,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(f){Y1(i,t,f)}}break;case 5:R3(c,c.return);break;case 22:if(c.memoizedState!==null){Qr(d);continue}}X!==null?(X.return=c,P0=X):Qr(d)}h=h.sibling}e:for(h=null,d=n;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_a("display",s))}catch(f){Y1(n,n.return,f)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(f){Y1(n,n.return,f)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:L2(e,n),e5(n),i&4&&Jr(n);break;case 21:break;default:L2(e,n),e5(n)}}function e5(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(ql(t)){var i=t;break e}t=t.return}throw Error(o0(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(J9(r,""),i.flags&=-33);var o=qr(n);Zn(n,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=qr(n);Xn(n,a,s);break;default:throw Error(o0(161))}}catch(l){Y1(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function xd(n,e,t){P0=n,Ql(n)}function Ql(n,e,t){for(var i=(n.mode&1)!==0;P0!==null;){var r=P0,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||s4;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||H1;a=s4;var u=H1;if(s4=s,(H1=l)&&!u)for(P0=r;P0!==null;)s=P0,l=s.child,s.tag===22&&s.memoizedState!==null?eo(r):l!==null?(l.return=s,P0=l):eo(r);for(;o!==null;)P0=o,Ql(o),o=o.sibling;P0=r,s4=a,H1=u}Kr(n)}else(r.subtreeFlags&8772)!==0&&o!==null?(o.return=r,P0=o):Kr(n)}}function Kr(n){for(;P0!==null;){var e=P0;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:H1||z7(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!H1)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:z2(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Lr(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Lr(e,s,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&t6(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o0(163))}H1||e.flags&512&&fn(e)}catch(c){Y1(e,e.return,c)}}if(e===n){P0=null;break}if(t=e.sibling,t!==null){t.return=e.return,P0=t;break}P0=e.return}}function Qr(n){for(;P0!==null;){var e=P0;if(e===n){P0=null;break}var t=e.sibling;if(t!==null){t.return=e.return,P0=t;break}P0=e.return}}function eo(n){for(;P0!==null;){var e=P0;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{z7(4,e)}catch(l){Y1(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Y1(e,r,l)}}var o=e.return;try{fn(e)}catch(l){Y1(e,o,l)}break;case 5:var s=e.return;try{fn(e)}catch(l){Y1(e,s,l)}}}catch(l){Y1(e,e.return,l)}if(e===n){P0=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P0=a;break}P0=e.return}}var Sd=Math.ceil,Z7=R5.ReactCurrentDispatcher,gi=R5.ReactCurrentOwner,E2=R5.ReactCurrentBatchConfig,J0=0,A1=null,S1=null,O1=0,Z2=0,N3=X8(0),E1=0,d6=null,j8=0,F7=0,yi=0,V9=null,o2=null,vi=0,n9=1/0,p5=null,Y7=!1,Yn=null,s8=null,a4=!1,e8=null,m7=0,G9=0,mn=null,B4=-1,V4=0;function Q1(){return(J0&6)!==0?v1():B4!==-1?B4:B4=v1()}function a8(n){return(n.mode&1)===0?1:(J0&2)!==0&&O1!==0?O1&-O1:ld.transition!==null?(V4===0&&(V4=Ra()),V4):(n=i1,n!==0||(n=window.event,n=n===void 0?16:ja(n.type)),n)}function V2(n,e,t,i){if(50<G9)throw G9=0,mn=null,Error(o0(185));E6(n,t,i),((J0&2)===0||n!==A1)&&(n===A1&&((J0&2)===0&&(F7|=t),E1===4&&J5(n,O1)),c2(n,i),t===1&&J0===0&&(e.mode&1)===0&&(n9=v1()+500,N7&&Z8()))}function c2(n,e){var t=n.callbackNode;lh(n,e);var i=e7(n,n===A1?O1:0);if(i===0)t!==null&&ur(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&ur(t),e===1)n.tag===0?ad(to.bind(null,n)):ll(to.bind(null,n)),id(function(){(J0&6)===0&&Z8()}),t=null;else{switch(Na(i)){case 1:t=Hn;break;case 4:t=Aa;break;case 16:t=Q4;break;case 536870912:t=La;break;default:t=Q4}t=au(t,eu.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function eu(n,e){if(B4=-1,V4=0,(J0&6)!==0)throw Error(o0(327));var t=n.callbackNode;if(V3()&&n.callbackNode!==t)return null;var i=e7(n,n===A1?O1:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=p7(n,i);else{e=i;var r=J0;J0|=2;var o=nu();(A1!==n||O1!==e)&&(p5=null,n9=v1()+500,A8(n,e));do try{Md();break}catch(a){tu(n,a)}while(1);si(),Z7.current=o,J0=r,S1!==null?e=0:(A1=null,O1=0,e=E1)}if(e!==0){if(e===2&&(r=jt(n),r!==0&&(i=r,e=pn(n,r))),e===1)throw t=d6,A8(n,0),J5(n,i),c2(n,v1()),t;if(e===6)J5(n,i);else{if(r=n.current.alternate,(i&30)===0&&!Cd(r)&&(e=p7(n,i),e===2&&(o=jt(n),o!==0&&(i=o,e=pn(n,o))),e===1))throw t=d6,A8(n,0),J5(n,i),c2(n,v1()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(o0(345));case 2:P8(n,o2,p5);break;case 3:if(J5(n,i),(i&130023424)===i&&(e=vi+500-v1(),10<e)){if(e7(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Q1(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Jt(P8.bind(null,n,o2,p5),e);break}P8(n,o2,p5);break;case 4:if(J5(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var s=31-B2(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=v1()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Sd(i/1960))-i,10<i){n.timeoutHandle=Jt(P8.bind(null,n,o2,p5),i);break}P8(n,o2,p5);break;case 5:P8(n,o2,p5);break;default:throw Error(o0(329))}}}return c2(n,v1()),n.callbackNode===t?eu.bind(null,n):null}function pn(n,e){var t=V9;return n.current.memoizedState.isDehydrated&&(A8(n,e).flags|=256),n=p7(n,e),n!==2&&(e=o2,o2=t,e!==null&&gn(e)),n}function gn(n){o2===null?o2=n:o2.push.apply(o2,n)}function Cd(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],o=r.getSnapshot;r=r.value;try{if(!W2(o(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function J5(n,e){for(e&=~yi,e&=~F7,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-B2(e),i=1<<t;n[t]=-1,e&=~i}}function to(n){if((J0&6)!==0)throw Error(o0(327));V3();var e=e7(n,0);if((e&1)===0)return c2(n,v1()),null;var t=p7(n,e);if(n.tag!==0&&t===2){var i=jt(n);i!==0&&(e=i,t=pn(n,i))}if(t===1)throw t=d6,A8(n,0),J5(n,e),c2(n,v1()),t;if(t===6)throw Error(o0(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,P8(n,o2,p5),c2(n,v1()),null}function Pi(n,e){var t=J0;J0|=1;try{return n(e)}finally{J0=t,J0===0&&(n9=v1()+500,N7&&Z8())}}function B8(n){e8!==null&&e8.tag===0&&(J0&6)===0&&V3();var e=J0;J0|=1;var t=E2.transition,i=i1;try{if(E2.transition=null,i1=1,n)return n()}finally{i1=i,E2.transition=t,J0=e,(J0&6)===0&&Z8()}}function _i(){Z2=N3.current,a1(N3)}function A8(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,nd(t)),S1!==null)for(t=S1.return;t!==null;){var i=t;switch(ii(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&o7();break;case 3:e9(),a1(l2),a1(W1),di();break;case 5:hi(i);break;case 4:e9();break;case 13:a1(h1);break;case 19:a1(h1);break;case 10:ai(i.type._context);break;case 22:case 23:_i()}t=t.return}if(A1=n,S1=n=l8(n.current,null),O1=Z2=e,E1=0,d6=null,yi=F7=j8=0,o2=V9=null,M8!==null){for(e=0;e<M8.length;e++)if(t=M8[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,o=t.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}t.pending=i}M8=null}return n}function tu(n,e){do{var t=S1;try{if(si(),F4.current=X7,f7){for(var i=d1.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}f7=!1}if(U8=0,D1=T1=d1=null,j9=!1,u6=0,gi.current=null,t===null||t.return===null){E1=1,d6=e,S1=null;break}e:{var o=n,s=t.return,a=t,l=e;if(e=O1,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if((h.mode&1)===0&&(d===0||d===11||d===15)){var c=h.alternate;c?(h.updateQueue=c.updateQueue,h.memoizedState=c.memoizedState,h.lanes=c.lanes):(h.updateQueue=null,h.memoizedState=null)}var X=Ur(s);if(X!==null){X.flags&=-257,jr(X,s,a,o,e),X.mode&1&&Fr(o,u,e),e=X,l=u;var p=e.updateQueue;if(p===null){var f=new Set;f.add(l),e.updateQueue=f}else p.add(l);break e}else{if((e&1)===0){Fr(o,u,e),xi();break e}l=Error(o0(426))}}else if(c1&&a.mode&1){var Z=Ur(s);if(Z!==null){(Z.flags&65536)===0&&(Z.flags|=256),jr(Z,s,a,o,e),ri(t9(l,a));break e}}o=l=t9(l,a),E1!==4&&(E1=2),V9===null?V9=[o]:V9.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var Y=kl(o,l,e);Ar(o,Y);break e;case 1:a=l;var m=o.type,g=o.stateNode;if((o.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(s8===null||!s8.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=Ol(o,a,e);Ar(o,y);break e}}o=o.return}while(o!==null)}ru(t)}catch(P){e=P,S1===t&&t!==null&&(S1=t=t.return);continue}break}while(1)}function nu(){var n=Z7.current;return Z7.current=X7,n===null?X7:n}function xi(){(E1===0||E1===3||E1===2)&&(E1=4),A1===null||(j8&268435455)===0&&(F7&268435455)===0||J5(A1,O1)}function p7(n,e){var t=J0;J0|=2;var i=nu();(A1!==n||O1!==e)&&(p5=null,A8(n,e));do try{wd();break}catch(r){tu(n,r)}while(1);if(si(),J0=t,Z7.current=i,S1!==null)throw Error(o0(261));return A1=null,O1=0,E1}function wd(){for(;S1!==null;)iu(S1)}function Md(){for(;S1!==null&&!Qc();)iu(S1)}function iu(n){var e=su(n.alternate,n,Z2);n.memoizedProps=n.pendingProps,e===null?ru(n):S1=e,gi.current=null}function ru(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=yd(t,e,Z2),t!==null){S1=t;return}}else{if(t=vd(t,e),t!==null){t.flags&=32767,S1=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{E1=6,S1=null;return}}if(e=e.sibling,e!==null){S1=e;return}S1=e=n}while(e!==null);E1===0&&(E1=5)}function P8(n,e,t){var i=i1,r=E2.transition;try{E2.transition=null,i1=1,Td(n,e,t,i)}finally{E2.transition=r,i1=i}return null}function Td(n,e,t,i){do V3();while(e8!==null);if((J0&6)!==0)throw Error(o0(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(o0(177));n.callbackNode=null,n.callbackPriority=0;var o=t.lanes|t.childLanes;if(uh(n,o),n===A1&&(S1=A1=null,O1=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||a4||(a4=!0,au(Q4,function(){return V3(),null})),o=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||o){o=E2.transition,E2.transition=null;var s=i1;i1=1;var a=J0;J0|=4,gi.current=null,_d(n,t),Kl(t,n),$h($t),t7=!!Wt,$t=Wt=null,n.current=t,xd(t),eh(),J0=a,i1=s,E2.transition=o}else n.current=t;if(a4&&(a4=!1,e8=n,m7=r),o=n.pendingLanes,o===0&&(s8=null),ih(t.stateNode),c2(n,v1()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Y7)throw Y7=!1,n=Yn,Yn=null,n;return(m7&1)!==0&&n.tag!==0&&V3(),o=n.pendingLanes,(o&1)!==0?n===mn?G9++:(G9=0,mn=n):G9=0,Z8(),null}function V3(){if(e8!==null){var n=Na(m7),e=E2.transition,t=i1;try{if(E2.transition=null,i1=16>n?16:n,e8===null)var i=!1;else{if(n=e8,e8=null,m7=0,(J0&6)!==0)throw Error(o0(331));var r=J0;for(J0|=4,P0=n.current;P0!==null;){var o=P0,s=o.child;if((P0.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P0=u;P0!==null;){var h=P0;switch(h.tag){case 0:case 11:case 15:B9(8,h,o)}var d=h.child;if(d!==null)d.return=h,P0=d;else for(;P0!==null;){h=P0;var c=h.sibling,X=h.return;if($l(h),h===u){P0=null;break}if(c!==null){c.return=X,P0=c;break}P0=X}}}var p=o.alternate;if(p!==null){var f=p.child;if(f!==null){p.child=null;do{var Z=f.sibling;f.sibling=null,f=Z}while(f!==null)}}P0=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,P0=s;else e:for(;P0!==null;){if(o=P0,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:B9(9,o,o.return)}var Y=o.sibling;if(Y!==null){Y.return=o.return,P0=Y;break e}P0=o.return}}var m=n.current;for(P0=m;P0!==null;){s=P0;var g=s.child;if((s.subtreeFlags&2064)!==0&&g!==null)g.return=s,P0=g;else e:for(s=m;P0!==null;){if(a=P0,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:z7(9,a)}}catch(P){Y1(a,a.return,P)}if(a===s){P0=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,P0=y;break e}P0=a.return}}if(J0=r,Z8(),o5&&typeof o5.onPostCommitFiberRoot=="function")try{o5.onPostCommitFiberRoot(D7,n)}catch{}i=!0}return i}finally{i1=t,E2.transition=e}}return!1}function no(n,e,t){e=t9(t,e),e=kl(n,e,1),n=o8(n,e,1),e=Q1(),n!==null&&(E6(n,1,e),c2(n,e))}function Y1(n,e,t){if(n.tag===3)no(n,n,t);else for(;e!==null;){if(e.tag===3){no(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(s8===null||!s8.has(i))){n=t9(t,n),n=Ol(e,n,1),e=o8(e,n,1),n=Q1(),e!==null&&(E6(e,1,n),c2(e,n));break}}e=e.return}}function Ed(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Q1(),n.pingedLanes|=n.suspendedLanes&t,A1===n&&(O1&t)===t&&(E1===4||E1===3&&(O1&130023424)===O1&&500>v1()-vi?A8(n,0):yi|=t),c2(n,e)}function ou(n,e){e===0&&((n.mode&1)===0?e=1:(e=J6,J6<<=1,(J6&130023424)===0&&(J6=4194304)));var t=Q1();n=D5(n,e),n!==null&&(E6(n,e,t),c2(n,t))}function bd(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ou(n,t)}function Dd(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(o0(314))}i!==null&&i.delete(e),ou(n,t)}var su;su=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||l2.current)a2=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return a2=!1,gd(n,e,t);a2=(n.flags&131072)!==0}else a2=!1,c1&&(e.flags&1048576)!==0&&ul(e,l7,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;j4(n,e),n=e.pendingProps;var r=J3(e,W1.current);B3(e,t),r=Xi(null,e,i,n,r,t);var o=Zi();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,u2(i)?(o=!0,s7(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ui(e),r.updater=k7,e.stateNode=r,r._reactInternals=e,on(e,i,n,t),e=ln(null,e,i,!0,o,t)):(e.tag=0,c1&&o&&ni(e),J1(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(j4(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ad(i),n=z2(i,n),r){case 0:e=an(null,e,i,n,t);break e;case 1:e=Gr(null,e,i,n,t);break e;case 11:e=Br(null,e,i,n,t);break e;case 14:e=Vr(null,e,i,z2(i.type,n),t);break e}throw Error(o0(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:z2(i,r),an(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:z2(i,r),Gr(n,e,i,r,t);case 3:e:{if(jl(e),n===null)throw Error(o0(387));i=e.pendingProps,o=e.memoizedState,r=o.element,fl(n,e),h7(e,i,null,t);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=t9(Error(o0(423)),e),e=Hr(n,e,i,t,r);break e}else if(i!==r){r=t9(Error(o0(424)),e),e=Hr(n,e,i,t,r);break e}else for(m2=r8(e.stateNode.containerInfo.firstChild),p2=e,c1=!0,U2=null,t=ml(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(K3(),i===r){e=I5(n,e,t);break e}J1(n,e,i,t)}e=e.child}return e;case 5:return pl(e),n===null&&tn(e),i=e.type,r=e.pendingProps,o=n!==null?n.memoizedProps:null,s=r.children,qt(i,r)?s=null:o!==null&&qt(i,o)&&(e.flags|=32),Ul(n,e),J1(n,e,s,t),e.child;case 6:return n===null&&tn(e),null;case 13:return Bl(n,e,t);case 4:return ci(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Q3(e,null,i,t):J1(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:z2(i,r),Br(n,e,i,r,t);case 7:return J1(n,e,e.pendingProps,t),e.child;case 8:return J1(n,e,e.pendingProps.children,t),e.child;case 12:return J1(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,r1(u7,i._currentValue),i._currentValue=s,o!==null)if(W2(o.value,s)){if(o.children===r.children&&!l2.current){e=I5(n,e,t);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=C5(-1,t&-t),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),nn(o.return,t,e),a.lanes|=t;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(o0(341));s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),nn(s,t,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}J1(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,B3(e,t),r=D2(r),i=i(r),e.flags|=1,J1(n,e,i,t),e.child;case 14:return i=e.type,r=z2(i,e.pendingProps),r=z2(i.type,r),Vr(n,e,i,r,t);case 15:return zl(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:z2(i,r),j4(n,e),e.tag=1,u2(i)?(n=!0,s7(e)):n=!1,B3(e,t),Zl(e,i,r),on(e,i,r,t),ln(null,e,i,!0,n,t);case 19:return Vl(n,e,t);case 22:return Fl(n,e,t)}throw Error(o0(156,e.tag))};function au(n,e){return Ia(n,e)}function Id(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function M2(n,e,t,i){return new Id(n,e,t,i)}function Si(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ad(n){if(typeof n=="function")return Si(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Bn)return 11;if(n===Vn)return 14}return 2}function l8(n,e){var t=n.alternate;return t===null?(t=M2(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function G4(n,e,t,i,r,o){var s=2;if(i=n,typeof n=="function")Si(n)&&(s=1);else if(typeof n=="string")s=5;else e:switch(n){case w3:return L8(t.children,r,o,e);case jn:s=8,r|=8;break;case Mt:return n=M2(12,t,e,r|2),n.elementType=Mt,n.lanes=o,n;case Tt:return n=M2(13,t,e,r),n.elementType=Tt,n.lanes=o,n;case Et:return n=M2(19,t,e,r),n.elementType=Et,n.lanes=o,n;case Ya:return U7(t,r,o,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Xa:s=10;break e;case Za:s=9;break e;case Bn:s=11;break e;case Vn:s=14;break e;case H5:s=16,i=null;break e}throw Error(o0(130,n==null?n:typeof n,""))}return e=M2(s,t,e,r),e.elementType=n,e.type=i,e.lanes=o,e}function L8(n,e,t,i){return n=M2(7,n,i,e),n.lanes=t,n}function U7(n,e,t,i){return n=M2(22,n,i,e),n.elementType=Ya,n.lanes=t,n.stateNode={isHidden:!1},n}function Re(n,e,t){return n=M2(6,n,null,e),n.lanes=t,n}function Ne(n,e,t){return e=M2(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Ld(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=me(0),this.expirationTimes=me(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=me(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ci(n,e,t,i,r,o,s,a,l){return n=new Ld(n,e,t,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=M2(3,null,null,e),n.current=o,o.stateNode=n,o.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ui(o),n}function Rd(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C3,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function lu(n){if(!n)return h8;n=n._reactInternals;e:{if(e3(n)!==n||n.tag!==1)throw Error(o0(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(u2(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(o0(171))}if(n.tag===1){var t=n.type;if(u2(t))return al(n,t,e)}return e}function uu(n,e,t,i,r,o,s,a,l){return n=Ci(t,i,!0,n,r,o,s,a,l),n.context=lu(null),t=n.current,i=Q1(),r=a8(t),o=C5(i,r),o.callback=e!=null?e:null,o8(t,o,r),n.current.lanes=r,E6(n,r,i),c2(n,i),n}function j7(n,e,t,i){var r=e.current,o=Q1(),s=a8(r);return t=lu(t),e.context===null?e.context=t:e.pendingContext=t,e=C5(o,s),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=o8(r,e,s),n!==null&&(V2(n,r,s,o),z4(n,r,s)),s}function g7(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function io(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function wi(n,e){io(n,e),(n=n.alternate)&&io(n,e)}function Nd(){return null}var cu=typeof reportError=="function"?reportError:function(n){console.error(n)};function Mi(n){this._internalRoot=n}B7.prototype.render=Mi.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(o0(409));j7(n,e,null,null)};B7.prototype.unmount=Mi.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;B8(function(){j7(null,n,null,null)}),e[b5]=null}};function B7(n){this._internalRoot=n}B7.prototype.unstable_scheduleHydration=function(n){if(n){var e=za();n={blockedOn:null,target:n,priority:e};for(var t=0;t<q5.length&&e!==0&&e<q5[t].priority;t++);q5.splice(t,0,n),t===0&&Ua(n)}};function Ti(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function V7(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ro(){}function kd(n,e,t,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=g7(s);o.call(u)}}var s=uu(e,i,n,0,null,!1,!1,"",ro);return n._reactRootContainer=s,n[b5]=s.current,r6(n.nodeType===8?n.parentNode:n),B8(),s}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=g7(l);a.call(u)}}var l=Ci(n,0,!1,null,null,!1,!1,"",ro);return n._reactRootContainer=l,n[b5]=l.current,r6(n.nodeType===8?n.parentNode:n),B8(function(){j7(e,l,t,i)}),l}function G7(n,e,t,i,r){var o=t._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=g7(s);a.call(l)}}j7(e,s,n,r)}else s=kd(t,e,n,r,i);return g7(s)}ka=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=I9(e.pendingLanes);t!==0&&(Wn(e,t|1),c2(e,v1()),(J0&6)===0&&(n9=v1()+500,Z8()))}break;case 13:B8(function(){var i=D5(n,1);if(i!==null){var r=Q1();V2(i,n,1,r)}}),wi(n,1)}};$n=function(n){if(n.tag===13){var e=D5(n,134217728);if(e!==null){var t=Q1();V2(e,n,134217728,t)}wi(n,134217728)}};Oa=function(n){if(n.tag===13){var e=a8(n),t=D5(n,e);if(t!==null){var i=Q1();V2(t,n,e,i)}wi(n,e)}};za=function(){return i1};Fa=function(n,e){var t=i1;try{return i1=n,e()}finally{i1=t}};zt=function(n,e,t){switch(e){case"input":if(It(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=R7(i);if(!r)throw Error(o0(90));pa(i),It(i,r)}}}break;case"textarea":ya(n,t);break;case"select":e=t.value,e!=null&&z3(n,!!t.multiple,e,!1)}};wa=Pi;Ma=B8;var Od={usingClientEntryPoint:!1,Events:[D6,b3,R7,Sa,Ca,Pi]},S9={findFiberByHostInstance:w8,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zd={bundleType:S9.bundleType,version:S9.version,rendererPackageName:S9.rendererPackageName,rendererConfig:S9.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R5.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ba(n),n===null?null:n.stateNode},findFiberByHostInstance:S9.findFiberByHostInstance||Nd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var l4=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!l4.isDisabled&&l4.supportsFiber)try{D7=l4.inject(zd),o5=l4}catch{}}y2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Od;y2.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ti(e))throw Error(o0(200));return Rd(n,e,null,t)};y2.createRoot=function(n,e){if(!Ti(n))throw Error(o0(299));var t=!1,i="",r=cu;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ci(n,1,!1,null,null,t,!1,i,r),n[b5]=e.current,r6(n.nodeType===8?n.parentNode:n),new Mi(e)};y2.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(o0(188)):(n=Object.keys(n).join(","),Error(o0(268,n)));return n=ba(e),n=n===null?null:n.stateNode,n};y2.flushSync=function(n){return B8(n)};y2.hydrate=function(n,e,t){if(!V7(e))throw Error(o0(200));return G7(null,n,e,!0,t)};y2.hydrateRoot=function(n,e,t){if(!Ti(n))throw Error(o0(405));var i=t!=null&&t.hydratedSources||null,r=!1,o="",s=cu;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),e=uu(e,null,n,1,t!=null?t:null,r,!1,o,s),n[b5]=e.current,r6(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new B7(e)};y2.render=function(n,e,t){if(!V7(e))throw Error(o0(200));return G7(null,n,e,!1,t)};y2.unmountComponentAtNode=function(n){if(!V7(n))throw Error(o0(40));return n._reactRootContainer?(B8(function(){G7(null,null,n,!1,function(){n._reactRootContainer=null,n[b5]=null})}),!0):!1};y2.unstable_batchedUpdates=Pi;y2.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!V7(t))throw Error(o0(200));if(n==null||n._reactInternals===void 0)throw Error(o0(38));return G7(n,e,t,!1,i)};y2.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=y2})(na);var oo=na.exports;St.createRoot=oo.createRoot,St.hydrateRoot=oo.hydrateRoot;/**
 * @remix-run/router v1.0.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function g1(){return g1=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},g1.apply(this,arguments)}var M1;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(M1||(M1={}));const so="popstate";function Fd(n){n===void 0&&(n={});function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return f6("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:u5(r)}return jd(e,t,null,n)}function Ud(){return Math.random().toString(36).substr(2,8)}function ao(n){return{usr:n.state,key:n.key}}function f6(n,e,t,i){return t===void 0&&(t=null),g1({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?N5(e):e,{state:t,key:e&&e.key||i||Ud()})}function u5(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function N5(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function R8(n){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",t=typeof n=="string"?n:u5(n);return new URL(t,e)}function jd(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=M1.Pop,l=null;function u(){a=M1.Pop,l&&l({action:a,location:c.location})}function h(X,p){a=M1.Push;let f=f6(c.location,X,p);t&&t(f,X);let Z=ao(f),Y=c.createHref(f);try{s.pushState(Z,"",Y)}catch{r.location.assign(Y)}o&&l&&l({action:a,location:c.location})}function d(X,p){a=M1.Replace;let f=f6(c.location,X,p);t&&t(f,X);let Z=ao(f),Y=c.createHref(f);s.replaceState(Z,"",Y),o&&l&&l({action:a,location:c.location})}let c={get action(){return a},get location(){return n(r,s)},listen(X){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(so,u),l=X,()=>{r.removeEventListener(so,u),l=null}},createHref(X){return e(r,X)},encodeLocation(X){let p=R8(typeof X=="string"?X:u5(X));return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:d,go(X){return s.go(X)}};return c}var N1;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(N1||(N1={}));function Bd(n){return n.index===!0}function hu(n,e,t){return e===void 0&&(e=[]),t===void 0&&(t=new Set),n.map((i,r)=>{let o=[...e,r],s=typeof i.id=="string"?i.id:o.join("-");return F0(i.index!==!0||!i.children,"Cannot specify children on an index route"),F0(!t.has(s),'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),t.add(s),Bd(i)?g1({},i,{id:s}):g1({},i,{id:s,children:i.children?hu(i.children,o,t):void 0})})}function L9(n,e,t){t===void 0&&(t="/");let i=typeof e=="string"?N5(e):e,r=fu(i.pathname||"/",t);if(r==null)return null;let o=du(n);Vd(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=ef(o[a],rf(r));return s}function du(n,e,t,i){return e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i=""),n.forEach((r,o)=>{let s={relativePath:r.path||"",caseSensitive:r.caseSensitive===!0,childrenIndex:o,route:r};s.relativePath.startsWith("/")&&(F0(s.relativePath.startsWith(i),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(i.length));let a=w5([i,s.relativePath]),l=t.concat(s);r.children&&r.children.length>0&&(F0(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),du(r.children,e,l,a)),!(r.path==null&&!r.index)&&e.push({path:a,score:Kd(a,r.index),routesMeta:l})}),e}function Vd(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Qd(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const Gd=/^:\w+$/,Hd=3,Wd=2,$d=1,qd=10,Jd=-2,lo=n=>n==="*";function Kd(n,e){let t=n.split("/"),i=t.length;return t.some(lo)&&(i+=Jd),e&&(i+=Wd),t.filter(r=>!lo(r)).reduce((r,o)=>r+(Gd.test(o)?Hd:o===""?$d:qd),i)}function Qd(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function ef(n,e){let{routesMeta:t}=n,i={},r="/",o=[];for(let s=0;s<t.length;++s){let a=t[s],l=s===t.length-1,u=r==="/"?e:e.slice(r.length)||"/",h=tf({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!h)return null;Object.assign(i,h.params);let d=a.route;o.push({params:i,pathname:w5([r,h.pathname]),pathnameBase:lf(w5([r,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(r=w5([r,h.pathnameBase]))}return o}function tf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=nf(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,h,d)=>{if(h==="*"){let c=a[d]||"";s=o.slice(0,o.length-c.length).replace(/(.)\/+$/,"$1")}return u[h]=of(a[d]||"",h),u},{}),pathname:o,pathnameBase:s,pattern:n}}function nf(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Ei(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,a)=>(i.push(a),"([^\\/]+)"));return n.endsWith("*")?(i.push("*"),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function rf(n){try{return decodeURI(n)}catch(e){return Ei(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function of(n,e){try{return decodeURIComponent(n)}catch(t){return Ei(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+n+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),n}}function fu(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function F0(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Ei(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sf(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?N5(n):n;return{pathname:t?t.startsWith("/")?t:af(t,e):e,search:uf(i),hash:cf(r)}}function af(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function ke(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function H7(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function bi(n,e,t,i){i===void 0&&(i=!1);let r;typeof n=="string"?r=N5(n):(r=g1({},n),F0(!r.pathname||!r.pathname.includes("?"),ke("?","pathname","search",r)),F0(!r.pathname||!r.pathname.includes("#"),ke("#","pathname","hash",r)),F0(!r.search||!r.search.includes("#"),ke("#","search","hash",r)));let o=n===""||r.pathname==="",s=o?"/":r.pathname,a;if(i||s==null)a=t;else{let d=e.length-1;if(s.startsWith("..")){let c=s.split("/");for(;c[0]==="..";)c.shift(),d-=1;r.pathname=c.join("/")}a=d>=0?e[d]:"/"}let l=sf(r,a),u=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const w5=n=>n.join("/").replace(/\/\/+/g,"/"),lf=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),uf=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,cf=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;class uo extends Error{}class hf{constructor(e){this.pendingKeys=new Set,this.subscriber=void 0,F0(e&&typeof e=="object"&&!Array.isArray(e),"defer() only accepts plain objects");let t;this.abortPromise=new Promise((r,o)=>t=o),this.controller=new AbortController;let i=()=>t(new uo("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",i),this.controller.signal.addEventListener("abort",i),this.data=Object.entries(e).reduce((r,o)=>{let[s,a]=o;return Object.assign(r,{[s]:this.trackPromise(s,a)})},{})}trackPromise(e,t){if(!(t instanceof Promise))return t;this.pendingKeys.add(e);let i=Promise.race([t,this.abortPromise]).then(r=>this.onSettle(i,e,null,r),r=>this.onSettle(i,e,r));return i.catch(()=>{}),Object.defineProperty(i,"_tracked",{get:()=>!0}),i}onSettle(e,t,i,r){if(this.controller.signal.aborted&&i instanceof uo)return this.unlistenAbortSignal(),Object.defineProperty(e,"_error",{get:()=>i}),Promise.reject(i);this.pendingKeys.delete(t),this.done&&this.unlistenAbortSignal();const o=this.subscriber;return i?(Object.defineProperty(e,"_error",{get:()=>i}),o&&o(!1),Promise.reject(i)):(Object.defineProperty(e,"_data",{get:()=>r}),o&&o(!1),r)}subscribe(e){this.subscriber=e}cancel(){this.controller.abort(),this.pendingKeys.forEach((t,i)=>this.pendingKeys.delete(i));let e=this.subscriber;e&&e(!0)}async resolveData(e){let t=!1;if(!this.done){let i=()=>this.cancel();e.addEventListener("abort",i),t=await new Promise(r=>{this.subscribe(o=>{e.removeEventListener("abort",i),(o||this.done)&&r(o)})})}return t}get done(){return this.pendingKeys.size===0}get unwrappedData(){return F0(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((e,t)=>{let[i,r]=t;return Object.assign(e,{[i]:ff(r)})},{})}}function df(n){return n instanceof Promise&&n._tracked===!0}function ff(n){if(!df(n))return n;if(n._error)throw n._error;return n._data}class W7{constructor(e,t,i,r){r===void 0&&(r=!1),this.status=e,this.statusText=t||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function Xu(n){return n instanceof W7}const Zu=["post","put","patch","delete"],Xf=new Set(Zu),Zf=["get",...Zu],Yf=new Set(Zf),mf=new Set([301,302,303,307,308]),pf=new Set([307,308]),Oe={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},gf={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},yf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vf=!yf;function Pf(n){F0(n.routes.length>0,"You must provide a non-empty routes array to createRouter");let e=hu(n.routes),t=null,i=new Set,r=null,o=null,s=null,a=!1,l=L9(e,n.history.location,n.basename),u=null;if(l==null){let F=S8(404,{pathname:n.history.location.pathname}),{matches:j,route:a0}=Zo(e);l=j,u={[a0.id]:F}}let h=!l.some(F=>F.route.loader)||n.hydrationData!=null,d,c={historyAction:n.history.action,location:n.history.location,matches:l,initialized:h,navigation:Oe,restoreScrollPosition:null,preventScrollReset:!1,revalidation:"idle",loaderData:n.hydrationData&&n.hydrationData.loaderData||{},actionData:n.hydrationData&&n.hydrationData.actionData||null,errors:n.hydrationData&&n.hydrationData.errors||u,fetchers:new Map},X=M1.Pop,p=!1,f,Z=!1,Y=!1,m=[],g=[],y=new Map,P=0,w=-1,T=new Map,v=new Set,M=new Map,I=new Map;function e0(){return t=n.history.listen(F=>{let{action:j,location:a0}=F;return A(j,a0)}),c.initialized||A(M1.Pop,c.location),d}function X0(){t&&t(),i.clear(),f&&f.abort(),c.fetchers.forEach((F,j)=>E0(j))}function z(F){return i.add(F),()=>i.delete(F)}function R(F){c=g1({},c,F),i.forEach(j=>j(c))}function W(F,j){var a0;let _0=c.actionData!=null&&c.navigation.formMethod!=null&&c.navigation.state==="loading"&&((a0=c.navigation.formAction)==null?void 0:a0.split("?")[0])===F.pathname,S=j.loaderData?{loaderData:ze(c.loaderData,j.loaderData,j.matches||[])}:{};R(g1({},_0?{}:{actionData:null},j,S,{historyAction:X,location:F,initialized:!0,navigation:Oe,revalidation:"idle",restoreScrollPosition:c.navigation.formData?!1:F1(F,j.matches||c.matches),preventScrollReset:p})),Z||X===M1.Pop||(X===M1.Push?n.history.push(F,F.state):X===M1.Replace&&n.history.replace(F,F.state)),X=M1.Pop,p=!1,Z=!1,Y=!1,m=[],g=[]}async function t0(F,j){if(typeof F=="number"){n.history.go(F);return}let{path:a0,submission:_0,error:S}=co(F,j),_=f6(c.location,a0,j&&j.state);_=g1({},_,n.history.encodeLocation(_));let k=(j&&j.replace)===!0||_0!=null?M1.Replace:M1.Push,V=j&&"preventScrollReset"in j?j.preventScrollReset===!0:void 0;return await A(k,_,{submission:_0,pendingError:S,preventScrollReset:V,replace:j&&j.replace})}function r0(){if(N0(),R({revalidation:"loading"}),c.navigation.state!=="submitting"){if(c.navigation.state==="idle"){A(c.historyAction,c.location,{startUninterruptedRevalidation:!0});return}A(X||c.historyAction,c.navigation.location,{overrideNavigation:c.navigation})}}async function A(F,j,a0){f&&f.abort(),f=null,X=F,Z=(a0&&a0.startUninterruptedRevalidation)===!0,p1(c.location,c.matches),p=(a0&&a0.preventScrollReset)===!0;let _0=a0&&a0.overrideNavigation,S=L9(e,j,n.basename);if(!S){let x=S8(404,{pathname:j.pathname}),{matches:Q,route:s0}=Zo(e);l1(),W(j,{matches:Q,loaderData:{},errors:{[s0.id]:x}});return}if(wf(c.location,j)){W(j,{matches:S});return}f=new AbortController;let _=w9(j,f.signal,a0&&a0.submission),k,V;if(a0&&a0.pendingError)V={[k3(S).route.id]:a0.pendingError};else if(a0&&a0.submission){let x=await b(_,j,a0.submission,S,{replace:a0.replace});if(x.shortCircuited)return;k=x.pendingActionData,V=x.pendingActionError,_0=g1({state:"loading",location:j},a0.submission)}let{shortCircuited:q,loaderData:n0,errors:m0}=await L(_,j,S,_0,a0&&a0.submission,a0&&a0.replace,k,V);q||(f=null,W(j,{matches:S,loaderData:n0,errors:m0}))}async function b(F,j,a0,_0,S){N0();let _=g1({state:"submitting",location:j},a0);R({navigation:_});let k,V=go(_0,j);if(!V.route.action)k={type:N1.error,error:S8(405,{method:F.method,pathname:j.pathname,routeId:V.route.id})};else if(k=await C9("action",F,V,_0,d.basename),F.signal.aborted)return{shortCircuited:!0};if(G3(k))return await S0(c,k,S&&S.replace===!0),{shortCircuited:!0};if(H9(k)){let q=k3(_0,V.route.id);return(S&&S.replace)!==!0&&(X=M1.Push),{pendingActionError:{[q.route.id]:k.error}}}if(E8(k))throw new Error("defer() is not supported in actions");return{pendingActionData:{[V.route.id]:k.data}}}async function L(F,j,a0,_0,S,_,k,V){let q=_0;q||(q={state:"loading",location:j,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0});let[n0,m0]=ho(c,a0,S,j,Y,m,g,k,V,M);if(l1(k0=>!(a0&&a0.some(E=>E.route.id===k0))||n0&&n0.some(E=>E.route.id===k0)),n0.length===0&&m0.length===0)return W(j,{matches:a0,loaderData:ze(c.loaderData,{},a0),errors:V||null,actionData:k||null}),{shortCircuited:!0};Z||(m0.forEach(k0=>{let[E]=k0,u0=c.fetchers.get(E),U={state:"loading",data:u0&&u0.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(E,U)}),R(g1({navigation:q,actionData:k||c.actionData||null},m0.length>0?{fetchers:new Map(c.fetchers)}:{}))),w=++P,m0.forEach(k0=>{let[E]=k0;return y.set(E,f)});let{results:x,loaderResults:Q,fetcherResults:s0}=await B(c.matches,a0,n0,m0,F);if(F.signal.aborted)return{shortCircuited:!0};m0.forEach(k0=>{let[E]=k0;return y.delete(E)});let h0=Yo(x);if(h0)return await S0(c,h0,_),{shortCircuited:!0};let{loaderData:f0,errors:w0}=Xo(c,a0,n0,Q,V,m0,s0,I);I.forEach((k0,E)=>{k0.subscribe(u0=>{(u0||k0.done)&&I.delete(E)})}),R0();let A0=C0(w);return g1({loaderData:f0,errors:w0},A0||m0.length>0?{fetchers:new Map(c.fetchers)}:{})}function J(F){return c.fetchers.get(F)||gf}function K(F,j,a0,_0){if(vf)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");y.has(F)&&g0(F);let S=L9(e,a0,n.basename);if(!S){T0(F,j,S8(404,{pathname:a0}));return}let{path:_,submission:k}=co(a0,_0,!0),V=go(S,_);if(k){i0(F,j,_,V,S,k);return}M.set(F,[_,V,S]),Y0(F,j,_,V,S)}async function i0(F,j,a0,_0,S,_){if(N0(),M.delete(F),!_0.route.action){let Q0=S8(405,{method:_.formMethod,pathname:a0,routeId:j});T0(F,j,Q0);return}let k=c.fetchers.get(F),V=g1({state:"submitting"},_,{data:k&&k.data});c.fetchers.set(F,V),R({fetchers:new Map(c.fetchers)});let q=new AbortController,n0=w9(a0,q.signal,_);y.set(F,q);let m0=await C9("action",n0,_0,S,d.basename);if(n0.signal.aborted){y.get(F)===q&&y.delete(F);return}if(G3(m0)){y.delete(F),v.add(F);let Q0=g1({state:"loading"},_,{data:void 0});return c.fetchers.set(F,Q0),R({fetchers:new Map(c.fetchers)}),S0(c,m0)}if(H9(m0)){T0(F,j,m0.error);return}E8(m0)&&F0(!1,"defer() is not supported in actions");let x=c.navigation.location||c.location,Q=w9(x,q.signal),s0=c.navigation.state!=="idle"?L9(e,c.navigation.location,n.basename):c.matches;F0(s0,"Didn't find any matches after fetcher action");let h0=++P;T.set(F,h0);let f0=g1({state:"loading",data:m0.data},_);c.fetchers.set(F,f0);let[w0,A0]=ho(c,s0,_,x,Y,m,g,{[_0.route.id]:m0.data},void 0,M);A0.filter(Q0=>{let[U1]=Q0;return U1!==F}).forEach(Q0=>{let[U1]=Q0,o1=c.fetchers.get(U1),A2={state:"loading",data:o1&&o1.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(U1,A2),y.set(U1,q)}),R({fetchers:new Map(c.fetchers)});let{results:k0,loaderResults:E,fetcherResults:u0}=await B(c.matches,s0,w0,A0,Q);if(q.signal.aborted)return;T.delete(F),y.delete(F),A0.forEach(Q0=>{let[U1]=Q0;return y.delete(U1)});let U=Yo(k0);if(U)return S0(c,U);let{loaderData:p0,errors:Z0}=Xo(c,c.matches,w0,E,void 0,A0,u0,I),G0={state:"idle",data:m0.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(F,G0);let P1=C0(h0);c.navigation.state==="loading"&&h0>w?(F0(X,"Expected pending action"),f&&f.abort(),W(c.navigation.location,{matches:s0,loaderData:p0,errors:Z0,fetchers:new Map(c.fetchers)})):(R(g1({errors:Z0,loaderData:ze(c.loaderData,p0,s0)},P1?{fetchers:new Map(c.fetchers)}:{})),Y=!1)}async function Y0(F,j,a0,_0,S){let _=c.fetchers.get(F),k={state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,data:_&&_.data};c.fetchers.set(F,k),R({fetchers:new Map(c.fetchers)});let V=new AbortController,q=w9(a0,V.signal);y.set(F,V);let n0=await C9("loader",q,_0,S,d.basename);if(E8(n0)&&(n0=await yu(n0,q.signal,!0)||n0),y.get(F)===V&&y.delete(F),q.signal.aborted)return;if(G3(n0)){await S0(c,n0);return}if(H9(n0)){let x=k3(c.matches,j);c.fetchers.delete(F),R({fetchers:new Map(c.fetchers),errors:{[x.route.id]:n0.error}});return}F0(!E8(n0),"Unhandled fetcher deferred data");let m0={state:"idle",data:n0.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(F,m0),R({fetchers:new Map(c.fetchers)})}async function S0(F,j,a0){j.revalidate&&(Y=!0);let _0=f6(F.location,j.location);if(F0(_0,"Expected a location on the redirect navigation"),j.external&&typeof window<"u"&&typeof window.location<"u"){a0?window.location.replace(j.location):window.location.assign(j.location);return}f=null;let S=a0===!0?M1.Replace:M1.Push,{formMethod:_,formAction:k,formEncType:V,formData:q}=F.navigation;pf.has(j.status)&&_&&gu(_)&&V&&q?await A(S,_0,{submission:{formMethod:_,formAction:j.location,formEncType:V,formData:q}}):await A(S,_0,{overrideNavigation:{state:"loading",location:_0,formMethod:_||void 0,formAction:k||void 0,formEncType:V||void 0,formData:q||void 0}})}async function B(F,j,a0,_0,S){let _=await Promise.all([...a0.map(q=>C9("loader",S,q,j,d.basename)),..._0.map(q=>{let[,n0,m0,x]=q;return C9("loader",w9(n0,S.signal),m0,x,d.basename)})]),k=_.slice(0,a0.length),V=_.slice(a0.length);return await Promise.all([mo(F,a0,k,S.signal,!1,c.loaderData),mo(F,_0.map(q=>{let[,,n0]=q;return n0}),V,S.signal,!0)]),{results:_,loaderResults:k,fetcherResults:V}}function N0(){Y=!0,m.push(...l1()),M.forEach((F,j)=>{y.has(j)&&(g.push(j),g0(j))})}function T0(F,j,a0){let _0=k3(c.matches,j);E0(F),R({errors:{[_0.route.id]:a0},fetchers:new Map(c.fetchers)})}function E0(F){y.has(F)&&g0(F),M.delete(F),T.delete(F),v.delete(F),c.fetchers.delete(F)}function g0(F){let j=y.get(F);F0(j,"Expected fetch controller: "+F),j.abort(),y.delete(F)}function K0(F){for(let j of F){let _0={state:"idle",data:J(j).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};c.fetchers.set(j,_0)}}function R0(){let F=[];for(let j of v){let a0=c.fetchers.get(j);F0(a0,"Expected fetcher: "+j),a0.state==="loading"&&(v.delete(j),F.push(j))}K0(F)}function C0(F){let j=[];for(let[a0,_0]of T)if(_0<F){let S=c.fetchers.get(a0);F0(S,"Expected fetcher: "+a0),S.state==="loading"&&(g0(a0),T.delete(a0),j.push(a0))}return K0(j),j.length>0}function l1(F){let j=[];return I.forEach((a0,_0)=>{(!F||F(_0))&&(a0.cancel(),j.push(_0),I.delete(_0))}),j}function C1(F,j,a0){if(r=F,s=j,o=a0||(_0=>_0.key),!a&&c.navigation===Oe){a=!0;let _0=F1(c.location,c.matches);_0!=null&&R({restoreScrollPosition:_0})}return()=>{r=null,s=null,o=null}}function p1(F,j){if(r&&o&&s){let a0=j.map(S=>po(S,c.loaderData)),_0=o(F,a0)||F.key;r[_0]=s()}}function F1(F,j){if(r&&o&&s){let a0=j.map(_=>po(_,c.loaderData)),_0=o(F,a0)||F.key,S=r[_0];if(typeof S=="number")return S}return null}return d={get basename(){return n.basename},get state(){return c},get routes(){return e},initialize:e0,subscribe:z,enableScrollRestoration:C1,navigate:t0,fetch:K,revalidate:r0,createHref:F=>n.history.createHref(F),encodeLocation:F=>n.history.encodeLocation(F),getFetcher:J,deleteFetcher:E0,dispose:X0,_internalFetchControllers:y,_internalActiveDeferreds:I},d}function _f(n){return n!=null&&"formData"in n}function co(n,e,t){t===void 0&&(t=!1);let i=typeof n=="string"?n:u5(n);if(!e||!_f(e))return{path:i};if(e.formMethod&&!Mf(e.formMethod))return{path:i,error:S8(405,{method:e.formMethod})};if(e.formMethod&&gu(e.formMethod))return{path:i,submission:{formMethod:e.formMethod,formAction:pu(i),formEncType:e&&e.formEncType||"application/x-www-form-urlencoded",formData:e.formData}};let r=N5(i);try{let o=mu(e.formData);t&&r.search&&vu(r.search)&&o.append("index",""),r.search="?"+o}catch{return{path:i,error:S8(400)}}return{path:u5(r)}}function xf(n,e){let t=n;if(e){let i=n.findIndex(r=>r.route.id===e);i>=0&&(t=n.slice(0,i))}return t}function ho(n,e,t,i,r,o,s,a,l,u){let h=l?Object.values(l)[0]:a?Object.values(a)[0]:null,d=l?Object.keys(l)[0]:void 0,X=xf(e,d).filter((f,Z)=>f.route.loader!=null&&(Sf(n.loaderData,n.matches[Z],f)||o.some(Y=>Y===f.route.id)||fo(n.location,n.matches[Z],t,i,f,r,h))),p=[];return u&&u.forEach((f,Z)=>{let[Y,m,g]=f;s.includes(Z)?p.push([Z,Y,m,g]):r&&fo(Y,m,t,Y,m,r,h)&&p.push([Z,Y,m,g])}),[X,p]}function Sf(n,e,t){let i=!e||t.route.id!==e.route.id,r=n[t.route.id]===void 0;return i||r}function Yu(n,e){let t=n.route.path;return n.pathname!==e.pathname||t&&t.endsWith("*")&&n.params["*"]!==e.params["*"]}function fo(n,e,t,i,r,o,s){let a=R8(n),l=e.params,u=R8(i),h=r.params,d=Yu(e,r)||a.toString()===u.toString()||a.search!==u.search||o;if(r.route.shouldRevalidate){let c=r.route.shouldRevalidate(g1({currentUrl:a,currentParams:l,nextUrl:u,nextParams:h},t,{actionResult:s,defaultShouldRevalidate:d}));if(typeof c=="boolean")return c}return d}async function C9(n,e,t,i,r,o,s){r===void 0&&(r="/"),o===void 0&&(o=!1),s===void 0&&(s=!1);let a,l,u,h=new Promise((c,X)=>u=X),d=()=>u();e.signal.addEventListener("abort",d);try{let c=t.route[n];F0(c,"Could not find the "+n+' to run on the "'+t.route.id+'" route'),l=await Promise.race([c({request:e,params:t.params}),h]),F0(l!==void 0,"You defined "+(n==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+n+"` ")+"function. Please return a value or `null`.")}catch(c){a=N1.error,l=c}finally{e.signal.removeEventListener("abort",d)}if(l instanceof Response){let c=l.status;if(mf.has(c)){let f=l.headers.get("Location");F0(f,"Redirects returned/thrown from loaders/actions must have a Location header");let Z=R8(f).origin!==R8("/").origin;if(!Z){let Y=i.slice(0,i.indexOf(t)+1),m=H7(Y).map(P=>P.pathnameBase),g=R8(e.url).pathname,y=bi(f,m,g);if(F0(u5(y),"Unable to resolve redirect location: "+f),r){let P=y.pathname;y.pathname=P==="/"?r:w5([r,P])}f=u5(y)}if(o)throw l.headers.set("Location",f),l;return{type:N1.redirect,status:c,location:f,revalidate:l.headers.get("X-Remix-Revalidate")!==null,external:Z}}if(s)throw{type:a||N1.data,response:l};let X,p=l.headers.get("Content-Type");return p&&p.startsWith("application/json")?X=await l.json():X=await l.text(),a===N1.error?{type:a,error:new W7(c,l.statusText,X),headers:l.headers}:{type:N1.data,data:X,statusCode:l.status,headers:l.headers}}return a===N1.error?{type:a,error:l}:l instanceof hf?{type:N1.deferred,deferredData:l}:{type:N1.data,data:l}}function w9(n,e,t){let i=R8(pu(n)).toString(),r={signal:e};if(t){let{formMethod:o,formEncType:s,formData:a}=t;r.method=o.toUpperCase(),r.body=s==="application/x-www-form-urlencoded"?mu(a):a}return new Request(i,r)}function mu(n){let e=new URLSearchParams;for(let[t,i]of n.entries())F0(typeof i=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),e.append(t,i);return e}function Cf(n,e,t,i,r){let o={},s=null,a,l=!1,u={};return t.forEach((h,d)=>{let c=e[d].route.id;if(F0(!G3(h),"Cannot handle redirect results in processLoaderData"),H9(h)){let X=k3(n,c),p=h.error;i&&(p=Object.values(i)[0],i=void 0),s=Object.assign(s||{},{[X.route.id]:p}),l||(l=!0,a=Xu(h.error)?h.error.status:500),h.headers&&(u[c]=h.headers)}else E8(h)?(r&&r.set(c,h.deferredData),o[c]=h.deferredData.data):(o[c]=h.data,h.statusCode!=null&&h.statusCode!==200&&!l&&(a=h.statusCode),h.headers&&(u[c]=h.headers))}),i&&(s=i),{loaderData:o,errors:s,statusCode:a||200,loaderHeaders:u}}function Xo(n,e,t,i,r,o,s,a){let{loaderData:l,errors:u}=Cf(e,t,i,r,a);for(let h=0;h<o.length;h++){let[d,,c]=o[h];F0(s!==void 0&&s[h]!==void 0,"Did not find corresponding fetcher result");let X=s[h];if(H9(X)){let p=k3(n.matches,c.route.id);u&&u[p.route.id]||(u=g1({},u,{[p.route.id]:X.error})),n.fetchers.delete(d)}else{if(G3(X))throw new Error("Unhandled fetcher revalidation redirect");if(E8(X))throw new Error("Unhandled fetcher deferred data");{let p={state:"idle",data:X.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};n.fetchers.set(d,p)}}}return{loaderData:l,errors:u}}function ze(n,e,t){let i=g1({},e);return t.forEach(r=>{let o=r.route.id;e[o]===void 0&&n[o]!==void 0&&(i[o]=n[o])}),i}function k3(n,e){return(e?n.slice(0,n.findIndex(i=>i.route.id===e)+1):[...n]).reverse().find(i=>i.route.hasErrorBoundary===!0)||n[0]}function Zo(n){let e=n.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function S8(n,e){let{pathname:t,routeId:i,method:r,message:o}=e===void 0?{}:e,s="Unknown Server Error",a="Unknown @remix-run/router error";return n===400?(s="Bad Request",r&&t&&i?a="You made a "+r+' request to "'+t+'" but '+('did not provide a `loader` for route "'+i+'", ')+"so there is no way to handle the request.":a="Cannot submit binary form data using GET"):n===403?(s="Forbidden",a='Route "'+i+'" does not match URL "'+t+'"'):n===404?(s="Not Found",a='No route matches URL "'+t+'"'):n===405&&(s="Method Not Allowed",r&&t&&i?a="You made a "+r.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+i+'", ')+"so there is no way to handle the request.":r&&(a='Invalid request method "'+r.toUpperCase()+'"')),new W7(n||500,s,new Error(a),!0)}function Yo(n){for(let e=n.length-1;e>=0;e--){let t=n[e];if(G3(t))return t}}function pu(n){let e=typeof n=="string"?N5(n):n;return u5(g1({},e,{hash:""}))}function wf(n,e){return n.pathname===e.pathname&&n.search===e.search&&n.hash!==e.hash}function E8(n){return n.type===N1.deferred}function H9(n){return n.type===N1.error}function G3(n){return(n&&n.type)===N1.redirect}function Mf(n){return Yf.has(n)}function gu(n){return Xf.has(n)}async function mo(n,e,t,i,r,o){for(let s=0;s<t.length;s++){let a=t[s],l=e[s],u=n.find(d=>d.route.id===l.route.id),h=u!=null&&!Yu(u,l)&&(o&&o[l.route.id])!==void 0;E8(a)&&(r||h)&&await yu(a,i,r).then(d=>{d&&(t[s]=d||t[s])})}}async function yu(n,e,t){if(t===void 0&&(t=!1),!await n.deferredData.resolveData(e)){if(t)try{return{type:N1.data,data:n.deferredData.unwrappedData}}catch(r){return{type:N1.error,error:r}}return{type:N1.data,data:n.deferredData.data}}}function vu(n){return new URLSearchParams(n).getAll("index").some(e=>e==="")}function po(n,e){let{route:t,pathname:i,params:r}=n;return{id:t.id,pathname:i,params:r,data:e[t.id],handle:t.handle}}function go(n,e){let t=typeof e=="string"?N5(e).search:e.search;if(n[n.length-1].route.index&&vu(t||""))return n[n.length-1];let i=H7(n);return i[i.length-1]}var $7={exports:{}},q7={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf=l0.exports,Ef=Symbol.for("react.element"),bf=Symbol.for("react.fragment"),Df=Object.prototype.hasOwnProperty,If=Tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Af={key:!0,ref:!0,__self:!0,__source:!0};function Pu(n,e,t){var i,r={},o=null,s=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Df.call(e,i)&&!Af.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ef,type:n,key:o,ref:s,props:r,_owner:If.current}}q7.Fragment=bf;q7.jsx=Pu;q7.jsxs=Pu;(function(n){n.exports=q7})($7);const J2=$7.exports.Fragment,H=$7.exports.jsx,H0=$7.exports.jsxs;/**
 * React Router v6.4.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function y7(){return y7=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},y7.apply(this,arguments)}function Lf(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}const Rf=typeof Object.is=="function"?Object.is:Lf,{useState:Nf,useEffect:kf,useLayoutEffect:Of,useDebugValue:zf}=Ct;function Ff(n,e,t){const i=e(),[{inst:r},o]=Nf({inst:{value:i,getSnapshot:e}});return Of(()=>{r.value=i,r.getSnapshot=e,Fe(r)&&o({inst:r})},[n,i,e]),kf(()=>(Fe(r)&&o({inst:r}),n(()=>{Fe(r)&&o({inst:r})})),[n]),zf(i),i}function Fe(n){const e=n.getSnapshot,t=n.value;try{const i=e();return!Rf(t,i)}catch{return!0}}function Uf(n,e,t){return e()}const jf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bf=!jf,Vf=Bf?Uf:Ff,Gf="useSyncExternalStore"in Ct?(n=>n.useSyncExternalStore)(Ct):Vf,Hf=l0.exports.createContext(null),_u=l0.exports.createContext(null),Di=l0.exports.createContext(null),J7=l0.exports.createContext(null),K7=l0.exports.createContext(null),A6=l0.exports.createContext({outlet:null,matches:[]}),xu=l0.exports.createContext(null);function Wf(n,e){let{relative:t}=e===void 0?{}:e;L6()||F0(!1);let{basename:i,navigator:r}=l0.exports.useContext(J7),{hash:o,pathname:s,search:a}=Su(n,{relative:t}),l=s;return i!=="/"&&(l=s==="/"?i:w5([i,s])),r.createHref({pathname:l,search:a,hash:o})}function L6(){return l0.exports.useContext(K7)!=null}function Q7(){return L6()||F0(!1),l0.exports.useContext(K7).location}function $f(){L6()||F0(!1);let{basename:n,navigator:e}=l0.exports.useContext(J7),{matches:t}=l0.exports.useContext(A6),{pathname:i}=Q7(),r=JSON.stringify(H7(t).map(a=>a.pathnameBase)),o=l0.exports.useRef(!1);return l0.exports.useEffect(()=>{o.current=!0}),l0.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){e.go(a);return}let u=bi(a,JSON.parse(r),i,l.relative==="path");n!=="/"&&(u.pathname=u.pathname==="/"?n:w5([n,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[n,e,r,i])}function Su(n,e){let{relative:t}=e===void 0?{}:e,{matches:i}=l0.exports.useContext(A6),{pathname:r}=Q7(),o=JSON.stringify(H7(i).map(s=>s.pathnameBase));return l0.exports.useMemo(()=>bi(n,JSON.parse(o),r,t==="path"),[n,o,r,t])}function qf(n,e){L6()||F0(!1);let{navigator:t}=l0.exports.useContext(J7),i=l0.exports.useContext(Di),{matches:r}=l0.exports.useContext(A6),o=r[r.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Q7(),u;if(e){var h;let f=typeof e=="string"?N5(e):e;a==="/"||((h=f.pathname)==null?void 0:h.startsWith(a))||F0(!1),u=f}else u=l;let d=u.pathname||"/",c=a==="/"?d:d.slice(a.length)||"/",X=L9(n,{pathname:c}),p=eX(X&&X.map(f=>Object.assign({},f,{params:Object.assign({},s,f.params),pathname:w5([a,t.encodeLocation?t.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?a:w5([a,t.encodeLocation?t.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),r,i||void 0);return e&&p?H(K7.Provider,{value:{location:y7({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:M1.Pop},children:p}):p}function Jf(){let n=nX(),e=Xu(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i};return H0(J2,{children:[H("h2",{children:"Unhandled Thrown Error!"}),H("h3",{style:{fontStyle:"italic"},children:e}),t?H("pre",{style:r,children:t}):null,H("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),H0("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",H("code",{style:o,children:"errorElement"})," props on\xA0",H("code",{style:o,children:"<Route>"})]})]})}class Kf extends l0.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?H(xu.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function Qf(n){let{routeContext:e,match:t,children:i}=n,r=l0.exports.useContext(Hf);return r&&t.route.errorElement&&(r._deepestRenderedBoundaryId=t.route.id),H(A6.Provider,{value:e,children:i})}function eX(n,e,t){if(e===void 0&&(e=[]),n==null)if(t!=null&&t.errors)n=t.matches;else return null;let i=n,r=t==null?void 0:t.errors;if(r!=null){let o=i.findIndex(s=>s.route.id&&(r==null?void 0:r[s.route.id]));o>=0||F0(!1),i=i.slice(0,Math.min(i.length,o+1))}return i.reduceRight((o,s,a)=>{let l=s.route.id?r==null?void 0:r[s.route.id]:null,u=t?s.route.errorElement||H(Jf,{}):null,h=()=>H(Qf,{match:s,routeContext:{outlet:o,matches:e.concat(i.slice(0,a+1))},children:l?u:s.route.element!==void 0?s.route.element:o});return t&&(s.route.errorElement||a===0)?H(Kf,{location:t.location,component:u,error:l,children:h()}):h()},null)}var yo;(function(n){n.UseRevalidator="useRevalidator"})(yo||(yo={}));var yn;(function(n){n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator"})(yn||(yn={}));function tX(n){let e=l0.exports.useContext(Di);return e||F0(!1),e}function nX(){var n;let e=l0.exports.useContext(xu),t=tX(yn.UseRouteError),i=l0.exports.useContext(A6),r=i.matches[i.matches.length-1];return e||(i||F0(!1),r.route.id||F0(!1),(n=t.errors)==null?void 0:n[r.route.id])}function iX(n){let{fallbackElement:e,router:t}=n,i=Gf(t.subscribe,()=>t.state,()=>t.state),r=l0.exports.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:s=>t.navigate(s),push:(s,a,l)=>t.navigate(s,{state:a,preventScrollReset:l==null?void 0:l.preventScrollReset}),replace:(s,a,l)=>t.navigate(s,{replace:!0,state:a,preventScrollReset:l==null?void 0:l.preventScrollReset})}),[t]),o=t.basename||"/";return H(_u.Provider,{value:{router:t,navigator:r,static:!1,basename:o},children:H(Di.Provider,{value:i,children:H(oX,{basename:t.basename,location:t.state.location,navigationType:t.state.historyAction,navigator:r,children:t.state.initialized?H(sX,{}):e})})})}function rX(n){F0(!1)}function oX(n){let{basename:e="/",children:t=null,location:i,navigationType:r=M1.Pop,navigator:o,static:s=!1}=n;L6()&&F0(!1);let a=e.replace(/^\/*/,"/"),l=l0.exports.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof i=="string"&&(i=N5(i));let{pathname:u="/",search:h="",hash:d="",state:c=null,key:X="default"}=i,p=l0.exports.useMemo(()=>{let f=fu(u,a);return f==null?null:{pathname:f,search:h,hash:d,state:c,key:X}},[a,u,h,d,c,X]);return p==null?null:H(J7.Provider,{value:l,children:H(K7.Provider,{children:t,value:{location:p,navigationType:r}})})}function sX(n){let{children:e,location:t}=n,i=l0.exports.useContext(_u),r=i&&!e?i.router.routes:vn(e);return qf(r,t)}var vo;(function(n){n[n.pending=0]="pending",n[n.success=1]="success",n[n.error=2]="error"})(vo||(vo={}));new Promise(()=>{});function vn(n,e){e===void 0&&(e=[]);let t=[];return l0.exports.Children.forEach(n,(i,r)=>{if(!l0.exports.isValidElement(i))return;if(i.type===l0.exports.Fragment){t.push.apply(t,vn(i.props.children,e));return}i.type!==rX&&F0(!1),!i.props.index||!i.props.children||F0(!1);let o=[...e,r],s={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,hasErrorBoundary:i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle};i.props.children&&(s.children=vn(i.props.children,o)),t.push(s)}),t}function Cu(n){return n.map(e=>{let t=y7({},e);return t.hasErrorBoundary==null&&(t.hasErrorBoundary=t.errorElement!=null),t.children&&(t.children=Cu(t.children)),t})}/**
 * React Router DOM v6.4.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pn(){return Pn=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Pn.apply(this,arguments)}function aX(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function lX(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function uX(n,e){return n.button===0&&(!e||e==="_self")&&!lX(n)}const cX=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function hX(n,e){return Pf({basename:e==null?void 0:e.basename,history:Fd({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||dX(),routes:Cu(n)}).initialize()}function dX(){var n;let e=(n=window)==null?void 0:n.__staticRouterHydrationData;return e&&e.errors&&(e=Pn({},e,{errors:fX(e.errors)})),e}function fX(n){if(!n)return null;let e=Object.entries(n),t={};for(let[i,r]of e)r&&r.__type==="RouteErrorResponse"?t[i]=new W7(r.status,r.statusText,r.data,r.internal===!0):t[i]=r;return t}const $5=l0.exports.forwardRef(function(e,t){let{onClick:i,relative:r,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:h}=e,d=aX(e,cX),c=Wf(u,{relative:r}),X=XX(u,{replace:s,state:a,target:l,preventScrollReset:h,relative:r});function p(f){i&&i(f),f.defaultPrevented||X(f)}return H("a",{...d,href:c,onClick:o?i:p,ref:t,target:l})});var Po;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmitImpl="useSubmitImpl",n.UseFetcher="useFetcher"})(Po||(Po={}));var _o;(function(n){n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(_o||(_o={}));function XX(n,e){let{target:t,replace:i,state:r,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=$f(),l=Q7(),u=Su(n,{relative:s});return l0.exports.useCallback(h=>{if(uX(h,t)){h.preventDefault();let d=i!==void 0?i:u5(l)===u5(u);a(n,{replace:d,state:r,preventScrollReset:o,relative:s})}},[l,a,u,i,r,t,n,o,s])}const K1={HOME:"/",STATIC:"/static",DIV_CHANGE:"/div_change",RECREATE_CANVAS:"/recreate_canvas",CHILDREN_TEST:"/children_test",APP_TEST:"/app_test",APP:"/app"};const f9=n=>H("div",{className:"container",children:n.children});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ii="144",l3={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},u3={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ZX=0,xo=1,YX=2,wu=1,mX=2,R9=3,i9=0,b2=1,x5=2,u8=0,H3=1,So=2,Co=3,wo=4,pX=5,x3=100,gX=101,yX=102,Mo=103,To=104,vX=200,PX=201,_X=202,xX=203,Mu=204,Tu=205,SX=206,CX=207,wX=208,MX=209,TX=210,EX=0,bX=1,DX=2,_n=3,IX=4,AX=5,LX=6,RX=7,Eu=0,NX=1,kX=2,M5=0,OX=1,zX=2,FX=3,UX=4,jX=5,bu=300,r9=301,o9=302,xn=303,Sn=304,ee=306,Cn=1e3,j2=1001,wn=1002,s2=1003,Eo=1004,bo=1005,w2=1006,BX=1007,te=1008,V8=1009,VX=1010,GX=1011,Du=1012,HX=1013,b8=1014,D8=1015,X6=1016,WX=1017,$X=1018,W3=1020,qX=1021,JX=1022,r5=1023,KX=1024,QX=1025,N8=1026,s9=1027,eZ=1028,tZ=1029,nZ=1030,iZ=1031,rZ=1033,Ue=33776,je=33777,Be=33778,Ve=33779,Do=35840,Io=35841,Ao=35842,Lo=35843,oZ=36196,Ro=37492,No=37496,ko=37808,Oo=37809,zo=37810,Fo=37811,Uo=37812,jo=37813,Bo=37814,Vo=37815,Go=37816,Ho=37817,Wo=37818,$o=37819,qo=37820,Jo=37821,Ko=36492,G8=3e3,Z1=3001,sZ=3200,aZ=3201,Iu=0,lZ=1,g5="srgb",I8="srgb-linear",Ge=7680,uZ=519,Qo=35044,es="300 es",Mn=1035;class t3{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const V1=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],He=Math.PI/180,ts=180/Math.PI;function R6(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(V1[n&255]+V1[n>>8&255]+V1[n>>16&255]+V1[n>>24&255]+"-"+V1[e&255]+V1[e>>8&255]+"-"+V1[e>>16&15|64]+V1[e>>24&255]+"-"+V1[t&63|128]+V1[t>>8&255]+"-"+V1[t>>16&255]+V1[t>>24&255]+V1[i&255]+V1[i>>8&255]+V1[i>>16&255]+V1[i>>24&255]).toLowerCase()}function k1(n,e,t){return Math.max(e,Math.min(t,n))}function cZ(n,e){return(n%e+e)%e}function We(n,e,t){return(1-t)*n+t*e}function ns(n){return(n&n-1)===0&&n!==0}function Tn(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function u4(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function d2(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class v0{constructor(e=0,t=0){v0.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class T2{constructor(){T2.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,o,s,a,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=o,h[5]=l,h[6]=i,h[7]=s,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],h=i[4],d=i[7],c=i[2],X=i[5],p=i[8],f=r[0],Z=r[3],Y=r[6],m=r[1],g=r[4],y=r[7],P=r[2],w=r[5],T=r[8];return o[0]=s*f+a*m+l*P,o[3]=s*Z+a*g+l*w,o[6]=s*Y+a*y+l*T,o[1]=u*f+h*m+d*P,o[4]=u*Z+h*g+d*w,o[7]=u*Y+h*y+d*T,o[2]=c*f+X*m+p*P,o[5]=c*Z+X*g+p*w,o[8]=c*Y+X*y+p*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return t*s*h-t*a*u-i*o*h+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=h*s-a*u,c=a*l-h*o,X=u*o-s*l,p=t*d+i*c+r*X;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/p;return e[0]=d*f,e[1]=(r*u-h*i)*f,e[2]=(a*i-r*s)*f,e[3]=c*f,e[4]=(h*t-r*l)*f,e[5]=(r*o-a*t)*f,e[6]=X*f,e[7]=(i*l-u*t)*f,e[8]=(s*t-i*o)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,o=r[0],s=r[3],a=r[6],l=r[1],u=r[4],h=r[7];return r[0]=t*o+i*l,r[3]=t*s+i*u,r[6]=t*a+i*h,r[1]=-i*o+t*l,r[4]=-i*s+t*u,r[7]=-i*a+t*h,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Au(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function v7(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function k8(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function H4(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const $e={[g5]:{[I8]:k8},[I8]:{[g5]:H4}},R2={legacyMode:!0,get workingColorSpace(){return I8},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if($e[e]&&$e[e][t]!==void 0){const i=$e[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},w1={r:0,g:0,b:0},N2={h:0,s:0,l:0},c4={h:0,s:0,l:0};function qe(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function h4(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class e1{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=g5){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,R2.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=I8){return this.r=e,this.g=t,this.b=i,R2.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=I8){if(e=cZ(e,1),t=k1(t,0,1),i=k1(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=qe(s,o,e+1/3),this.g=qe(s,o,e),this.b=qe(s,o,e-1/3)}return R2.toWorkingColorSpace(this,r),this}setStyle(e,t=g5){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,R2.toWorkingColorSpace(this,t),i(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,R2.toWorkingColorSpace(this,t),i(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(o[1])/360,u=parseFloat(o[2])/100,h=parseFloat(o[3])/100;return i(o[4]),this.setHSL(l,u,h,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,R2.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,R2.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=g5){const i=Lu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=k8(e.r),this.g=k8(e.g),this.b=k8(e.b),this}copyLinearToSRGB(e){return this.r=H4(e.r),this.g=H4(e.g),this.b=H4(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=g5){return R2.fromWorkingColorSpace(h4(this,w1),e),k1(w1.r*255,0,255)<<16^k1(w1.g*255,0,255)<<8^k1(w1.b*255,0,255)<<0}getHexString(e=g5){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=I8){R2.fromWorkingColorSpace(h4(this,w1),t);const i=w1.r,r=w1.g,o=w1.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const h=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=h<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=I8){return R2.fromWorkingColorSpace(h4(this,w1),t),e.r=w1.r,e.g=w1.g,e.b=w1.b,e}getStyle(e=g5){return R2.fromWorkingColorSpace(h4(this,w1),e),e!==g5?`color(${e} ${w1.r} ${w1.g} ${w1.b})`:`rgb(${w1.r*255|0},${w1.g*255|0},${w1.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(N2),N2.h+=e,N2.s+=t,N2.l+=i,this.setHSL(N2.h,N2.s,N2.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(N2),e.getHSL(c4);const i=We(N2.h,c4.h,t),r=We(N2.s,c4.s,t),o=We(N2.l,c4.l,t);return this.setHSL(i,r,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}e1.NAMES=Lu;let c3;class Ru{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{c3===void 0&&(c3=v7("canvas")),c3.width=e.width,c3.height=e.height;const i=c3.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=c3}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=v7("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=k8(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(k8(t[i]/255)*255):t[i]=k8(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Nu{constructor(e=null){this.isSource=!0,this.uuid=R6(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Je(r[s].image)):o.push(Je(r[s]))}else o=Je(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function Je(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ru.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hZ=0;class $2 extends t3{constructor(e=$2.DEFAULT_IMAGE,t=$2.DEFAULT_MAPPING,i=j2,r=j2,o=w2,s=te,a=r5,l=V8,u=1,h=G8){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hZ++}),this.uuid=R6(),this.name="",this.source=new Nu(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new v0(0,0),this.repeat=new v0(1,1),this.center=new v0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new T2,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cn:e.x=e.x-Math.floor(e.x);break;case j2:e.x=e.x<0?0:1;break;case wn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cn:e.y=e.y-Math.floor(e.y);break;case j2:e.y=e.y<0?0:1;break;case wn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}$2.DEFAULT_IMAGE=null;$2.DEFAULT_MAPPING=bu;class I1{constructor(e=0,t=0,i=0,r=1){I1.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const l=e.elements,u=l[0],h=l[4],d=l[8],c=l[1],X=l[5],p=l[9],f=l[2],Z=l[6],Y=l[10];if(Math.abs(h-c)<.01&&Math.abs(d-f)<.01&&Math.abs(p-Z)<.01){if(Math.abs(h+c)<.1&&Math.abs(d+f)<.1&&Math.abs(p+Z)<.1&&Math.abs(u+X+Y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(u+1)/2,y=(X+1)/2,P=(Y+1)/2,w=(h+c)/4,T=(d+f)/4,v=(p+Z)/4;return g>y&&g>P?g<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(g),r=w/i,o=T/i):y>P?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=w/r,o=v/r):P<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(P),i=T/o,r=v/o),this.set(i,r,o,t),this}let m=Math.sqrt((Z-p)*(Z-p)+(d-f)*(d-f)+(c-h)*(c-h));return Math.abs(m)<.001&&(m=1),this.x=(Z-p)/m,this.y=(d-f)/m,this.z=(c-h)/m,this.w=Math.acos((u+X+Y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class H8 extends t3{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new I1(0,0,e,t),this.scissorTest=!1,this.viewport=new I1(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new $2(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:w2,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ku extends $2{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=s2,this.minFilter=s2,this.wrapR=j2,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dZ extends $2{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=s2,this.minFilter=s2,this.wrapR=j2,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class W8{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let l=i[r+0],u=i[r+1],h=i[r+2],d=i[r+3];const c=o[s+0],X=o[s+1],p=o[s+2],f=o[s+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=c,e[t+1]=X,e[t+2]=p,e[t+3]=f;return}if(d!==f||l!==c||u!==X||h!==p){let Z=1-a;const Y=l*c+u*X+h*p+d*f,m=Y>=0?1:-1,g=1-Y*Y;if(g>Number.EPSILON){const P=Math.sqrt(g),w=Math.atan2(P,Y*m);Z=Math.sin(Z*w)/P,a=Math.sin(a*w)/P}const y=a*m;if(l=l*Z+c*y,u=u*Z+X*y,h=h*Z+p*y,d=d*Z+f*y,Z===1-a){const P=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=P,u*=P,h*=P,d*=P}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],h=i[r+3],d=o[s],c=o[s+1],X=o[s+2],p=o[s+3];return e[t]=a*p+h*d+l*X-u*c,e[t+1]=l*p+h*c+u*d-a*X,e[t+2]=u*p+h*X+a*c-l*d,e[t+3]=h*p-a*d-l*c-u*X,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),h=a(r/2),d=a(o/2),c=l(i/2),X=l(r/2),p=l(o/2);switch(s){case"XYZ":this._x=c*h*d+u*X*p,this._y=u*X*d-c*h*p,this._z=u*h*p+c*X*d,this._w=u*h*d-c*X*p;break;case"YXZ":this._x=c*h*d+u*X*p,this._y=u*X*d-c*h*p,this._z=u*h*p-c*X*d,this._w=u*h*d+c*X*p;break;case"ZXY":this._x=c*h*d-u*X*p,this._y=u*X*d+c*h*p,this._z=u*h*p+c*X*d,this._w=u*h*d-c*X*p;break;case"ZYX":this._x=c*h*d-u*X*p,this._y=u*X*d+c*h*p,this._z=u*h*p-c*X*d,this._w=u*h*d+c*X*p;break;case"YZX":this._x=c*h*d+u*X*p,this._y=u*X*d+c*h*p,this._z=u*h*p-c*X*d,this._w=u*h*d-c*X*p;break;case"XZY":this._x=c*h*d-u*X*p,this._y=u*X*d-c*h*p,this._z=u*h*p+c*X*d,this._w=u*h*d+c*X*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],u=t[2],h=t[6],d=t[10],c=i+a+d;if(c>0){const X=.5/Math.sqrt(c+1);this._w=.25/X,this._x=(h-l)*X,this._y=(o-u)*X,this._z=(s-r)*X}else if(i>a&&i>d){const X=2*Math.sqrt(1+i-a-d);this._w=(h-l)/X,this._x=.25*X,this._y=(r+s)/X,this._z=(o+u)/X}else if(a>d){const X=2*Math.sqrt(1+a-i-d);this._w=(o-u)/X,this._x=(r+s)/X,this._y=.25*X,this._z=(l+h)/X}else{const X=2*Math.sqrt(1+d-i-a);this._w=(s-r)/X,this._x=(o+u)/X,this._y=(l+h)/X,this._z=.25*X}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(k1(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,u=t._z,h=t._w;return this._x=i*h+s*a+r*u-o*l,this._y=r*h+s*l+o*a-i*u,this._z=o*h+s*u+i*l-r*a,this._w=s*h-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const X=1-t;return this._w=X*s+t*this._w,this._x=X*i+t*this._x,this._y=X*r+t*this._y,this._z=X*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),d=Math.sin((1-t)*h)/u,c=Math.sin(t*h)/u;return this._w=s*d+this._w*c,this._x=i*d+this._x*c,this._y=r*d+this._y*c,this._z=o*d+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(is.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(is.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=l*t+s*r-a*i,h=l*i+a*t-o*r,d=l*r+o*i-s*t,c=-o*t-s*i-a*r;return this.x=u*l+c*-o+h*-a-d*-s,this.y=h*l+c*-s+d*-o-u*-a,this.z=d*l+c*-a+u*-s-h*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ke.copy(this).projectOnVector(e),this.sub(Ke)}reflect(e){return this.sub(Ke.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(k1(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ke=new D,is=new W8;class N6{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const h=e[l],d=e[l+1],c=e[l+2];h<t&&(t=h),d<i&&(i=d),c<r&&(r=c),h>o&&(o=h),d>s&&(s=d),c>a&&(a=c)}return this.min.set(t,i,r),this.max.set(o,s,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const h=e.getX(l),d=e.getY(l),c=e.getZ(l);h<t&&(t=h),d<i&&(i=d),c<r&&(r=c),h>o&&(o=h),d>s&&(s=d),c>a&&(a=c)}return this.min.set(t,i,r),this.max.set(o,s,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=p8.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const o=i.attributes.position;for(let s=0,a=o.count;s<a;s++)p8.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(p8)}else i.boundingBox===null&&i.computeBoundingBox(),Qe.copy(i.boundingBox),Qe.applyMatrix4(e.matrixWorld),this.union(Qe);const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,p8),p8.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(M9),d4.subVectors(this.max,M9),h3.subVectors(e.a,M9),d3.subVectors(e.b,M9),f3.subVectors(e.c,M9),z5.subVectors(d3,h3),F5.subVectors(f3,d3),g8.subVectors(h3,f3);let t=[0,-z5.z,z5.y,0,-F5.z,F5.y,0,-g8.z,g8.y,z5.z,0,-z5.x,F5.z,0,-F5.x,g8.z,0,-g8.x,-z5.y,z5.x,0,-F5.y,F5.x,0,-g8.y,g8.x,0];return!et(t,h3,d3,f3,d4)||(t=[1,0,0,0,1,0,0,0,1],!et(t,h3,d3,f3,d4))?!1:(f4.crossVectors(z5,F5),t=[f4.x,f4.y,f4.z],et(t,h3,d3,f3,d4))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return p8.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(p8).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(f5[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),f5[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),f5[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),f5[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),f5[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),f5[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),f5[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),f5[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(f5),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const f5=[new D,new D,new D,new D,new D,new D,new D,new D],p8=new D,Qe=new N6,h3=new D,d3=new D,f3=new D,z5=new D,F5=new D,g8=new D,M9=new D,d4=new D,f4=new D,y8=new D;function et(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){y8.fromArray(n,o);const a=r.x*Math.abs(y8.x)+r.y*Math.abs(y8.y)+r.z*Math.abs(y8.z),l=e.dot(y8),u=t.dot(y8),h=i.dot(y8);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const fZ=new N6,rs=new D,X4=new D,tt=new D;class k6{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fZ.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){tt.subVectors(e,this.center);const t=tt.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(tt.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?X4.set(0,0,1).multiplyScalar(e.radius):X4.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(rs.copy(e.center).add(X4)),this.expandByPoint(rs.copy(e.center).sub(X4)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const X5=new D,nt=new D,Z4=new D,U5=new D,it=new D,Y4=new D,rt=new D;class Ai{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,X5)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=X5.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(X5.copy(this.direction).multiplyScalar(t).add(this.origin),X5.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){nt.copy(e).add(t).multiplyScalar(.5),Z4.copy(t).sub(e).normalize(),U5.copy(this.origin).sub(nt);const o=e.distanceTo(t)*.5,s=-this.direction.dot(Z4),a=U5.dot(this.direction),l=-U5.dot(Z4),u=U5.lengthSq(),h=Math.abs(1-s*s);let d,c,X,p;if(h>0)if(d=s*l-a,c=s*a-l,p=o*h,d>=0)if(c>=-p)if(c<=p){const f=1/h;d*=f,c*=f,X=d*(d+s*c+2*a)+c*(s*d+c+2*l)+u}else c=o,d=Math.max(0,-(s*c+a)),X=-d*d+c*(c+2*l)+u;else c=-o,d=Math.max(0,-(s*c+a)),X=-d*d+c*(c+2*l)+u;else c<=-p?(d=Math.max(0,-(-s*o+a)),c=d>0?-o:Math.min(Math.max(-o,-l),o),X=-d*d+c*(c+2*l)+u):c<=p?(d=0,c=Math.min(Math.max(-o,-l),o),X=c*(c+2*l)+u):(d=Math.max(0,-(s*o+a)),c=d>0?o:Math.min(Math.max(-o,-l),o),X=-d*d+c*(c+2*l)+u);else c=s>0?-o:o,d=Math.max(0,-(s*c+a)),X=-d*d+c*(c+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(Z4).multiplyScalar(c).add(nt),X}intersectSphere(e,t){X5.subVectors(e.center,this.origin);const i=X5.dot(this.direction),r=X5.dot(X5)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,c=this.origin;return u>=0?(i=(e.min.x-c.x)*u,r=(e.max.x-c.x)*u):(i=(e.max.x-c.x)*u,r=(e.min.x-c.x)*u),h>=0?(o=(e.min.y-c.y)*h,s=(e.max.y-c.y)*h):(o=(e.max.y-c.y)*h,s=(e.min.y-c.y)*h),i>s||o>r||((o>i||i!==i)&&(i=o),(s<r||r!==r)&&(r=s),d>=0?(a=(e.min.z-c.z)*d,l=(e.max.z-c.z)*d):(a=(e.max.z-c.z)*d,l=(e.min.z-c.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,X5)!==null}intersectTriangle(e,t,i,r,o){it.subVectors(t,e),Y4.subVectors(i,e),rt.crossVectors(it,Y4);let s=this.direction.dot(rt),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;U5.subVectors(this.origin,e);const l=a*this.direction.dot(Y4.crossVectors(U5,Y4));if(l<0)return null;const u=a*this.direction.dot(it.cross(U5));if(u<0||l+u>s)return null;const h=-a*U5.dot(rt);return h<0?null:this.at(h/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class m1{constructor(){m1.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,o,s,a,l,u,h,d,c,X,p,f,Z){const Y=this.elements;return Y[0]=e,Y[4]=t,Y[8]=i,Y[12]=r,Y[1]=o,Y[5]=s,Y[9]=a,Y[13]=l,Y[2]=u,Y[6]=h,Y[10]=d,Y[14]=c,Y[3]=X,Y[7]=p,Y[11]=f,Y[15]=Z,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new m1().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/X3.setFromMatrixColumn(e,0).length(),o=1/X3.setFromMatrixColumn(e,1).length(),s=1/X3.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const c=s*h,X=s*d,p=a*h,f=a*d;t[0]=l*h,t[4]=-l*d,t[8]=u,t[1]=X+p*u,t[5]=c-f*u,t[9]=-a*l,t[2]=f-c*u,t[6]=p+X*u,t[10]=s*l}else if(e.order==="YXZ"){const c=l*h,X=l*d,p=u*h,f=u*d;t[0]=c+f*a,t[4]=p*a-X,t[8]=s*u,t[1]=s*d,t[5]=s*h,t[9]=-a,t[2]=X*a-p,t[6]=f+c*a,t[10]=s*l}else if(e.order==="ZXY"){const c=l*h,X=l*d,p=u*h,f=u*d;t[0]=c-f*a,t[4]=-s*d,t[8]=p+X*a,t[1]=X+p*a,t[5]=s*h,t[9]=f-c*a,t[2]=-s*u,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const c=s*h,X=s*d,p=a*h,f=a*d;t[0]=l*h,t[4]=p*u-X,t[8]=c*u+f,t[1]=l*d,t[5]=f*u+c,t[9]=X*u-p,t[2]=-u,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const c=s*l,X=s*u,p=a*l,f=a*u;t[0]=l*h,t[4]=f-c*d,t[8]=p*d+X,t[1]=d,t[5]=s*h,t[9]=-a*h,t[2]=-u*h,t[6]=X*d+p,t[10]=c-f*d}else if(e.order==="XZY"){const c=s*l,X=s*u,p=a*l,f=a*u;t[0]=l*h,t[4]=-d,t[8]=u*h,t[1]=c*d+f,t[5]=s*h,t[9]=X*d-p,t[2]=p*d-X,t[6]=a*h,t[10]=f*d+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XZ,e,ZZ)}lookAt(e,t,i){const r=this.elements;return f2.subVectors(e,t),f2.lengthSq()===0&&(f2.z=1),f2.normalize(),j5.crossVectors(i,f2),j5.lengthSq()===0&&(Math.abs(i.z)===1?f2.x+=1e-4:f2.z+=1e-4,f2.normalize(),j5.crossVectors(i,f2)),j5.normalize(),m4.crossVectors(f2,j5),r[0]=j5.x,r[4]=m4.x,r[8]=f2.x,r[1]=j5.y,r[5]=m4.y,r[9]=f2.y,r[2]=j5.z,r[6]=m4.z,r[10]=f2.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],h=i[1],d=i[5],c=i[9],X=i[13],p=i[2],f=i[6],Z=i[10],Y=i[14],m=i[3],g=i[7],y=i[11],P=i[15],w=r[0],T=r[4],v=r[8],M=r[12],I=r[1],e0=r[5],X0=r[9],z=r[13],R=r[2],W=r[6],t0=r[10],r0=r[14],A=r[3],b=r[7],L=r[11],J=r[15];return o[0]=s*w+a*I+l*R+u*A,o[4]=s*T+a*e0+l*W+u*b,o[8]=s*v+a*X0+l*t0+u*L,o[12]=s*M+a*z+l*r0+u*J,o[1]=h*w+d*I+c*R+X*A,o[5]=h*T+d*e0+c*W+X*b,o[9]=h*v+d*X0+c*t0+X*L,o[13]=h*M+d*z+c*r0+X*J,o[2]=p*w+f*I+Z*R+Y*A,o[6]=p*T+f*e0+Z*W+Y*b,o[10]=p*v+f*X0+Z*t0+Y*L,o[14]=p*M+f*z+Z*r0+Y*J,o[3]=m*w+g*I+y*R+P*A,o[7]=m*T+g*e0+y*W+P*b,o[11]=m*v+g*X0+y*t0+P*L,o[15]=m*M+g*z+y*r0+P*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],h=e[2],d=e[6],c=e[10],X=e[14],p=e[3],f=e[7],Z=e[11],Y=e[15];return p*(+o*l*d-r*u*d-o*a*c+i*u*c+r*a*X-i*l*X)+f*(+t*l*X-t*u*c+o*s*c-r*s*X+r*u*h-o*l*h)+Z*(+t*u*d-t*a*X-o*s*d+i*s*X+o*a*h-i*u*h)+Y*(-r*a*h-t*l*d+t*a*c+r*s*d-i*s*c+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=e[9],c=e[10],X=e[11],p=e[12],f=e[13],Z=e[14],Y=e[15],m=d*Z*u-f*c*u+f*l*X-a*Z*X-d*l*Y+a*c*Y,g=p*c*u-h*Z*u-p*l*X+s*Z*X+h*l*Y-s*c*Y,y=h*f*u-p*d*u+p*a*X-s*f*X-h*a*Y+s*d*Y,P=p*d*l-h*f*l-p*a*c+s*f*c+h*a*Z-s*d*Z,w=t*m+i*g+r*y+o*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=m*T,e[1]=(f*c*o-d*Z*o-f*r*X+i*Z*X+d*r*Y-i*c*Y)*T,e[2]=(a*Z*o-f*l*o+f*r*u-i*Z*u-a*r*Y+i*l*Y)*T,e[3]=(d*l*o-a*c*o-d*r*u+i*c*u+a*r*X-i*l*X)*T,e[4]=g*T,e[5]=(h*Z*o-p*c*o+p*r*X-t*Z*X-h*r*Y+t*c*Y)*T,e[6]=(p*l*o-s*Z*o-p*r*u+t*Z*u+s*r*Y-t*l*Y)*T,e[7]=(s*c*o-h*l*o+h*r*u-t*c*u-s*r*X+t*l*X)*T,e[8]=y*T,e[9]=(p*d*o-h*f*o-p*i*X+t*f*X+h*i*Y-t*d*Y)*T,e[10]=(s*f*o-p*a*o+p*i*u-t*f*u-s*i*Y+t*a*Y)*T,e[11]=(h*a*o-s*d*o-h*i*u+t*d*u+s*i*X-t*a*X)*T,e[12]=P*T,e[13]=(h*f*r-p*d*r+p*i*c-t*f*c-h*i*Z+t*d*Z)*T,e[14]=(p*a*r-s*f*r-p*i*l+t*f*l+s*i*Z-t*a*Z)*T,e[15]=(s*d*r-h*a*r+h*i*l-t*d*l-s*i*c+t*a*c)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,h=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+i,h*l-r*s,0,u*l-r*a,h*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,u=o+o,h=s+s,d=a+a,c=o*u,X=o*h,p=o*d,f=s*h,Z=s*d,Y=a*d,m=l*u,g=l*h,y=l*d,P=i.x,w=i.y,T=i.z;return r[0]=(1-(f+Y))*P,r[1]=(X+y)*P,r[2]=(p-g)*P,r[3]=0,r[4]=(X-y)*w,r[5]=(1-(c+Y))*w,r[6]=(Z+m)*w,r[7]=0,r[8]=(p+g)*T,r[9]=(Z-m)*T,r[10]=(1-(c+f))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=X3.set(r[0],r[1],r[2]).length();const s=X3.set(r[4],r[5],r[6]).length(),a=X3.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],k2.copy(this);const u=1/o,h=1/s,d=1/a;return k2.elements[0]*=u,k2.elements[1]*=u,k2.elements[2]*=u,k2.elements[4]*=h,k2.elements[5]*=h,k2.elements[6]*=h,k2.elements[8]*=d,k2.elements[9]*=d,k2.elements[10]*=d,t.setFromRotationMatrix(k2),i.x=o,i.y=s,i.z=a,this}makePerspective(e,t,i,r,o,s){const a=this.elements,l=2*o/(t-e),u=2*o/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r),c=-(s+o)/(s-o),X=-2*s*o/(s-o);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=c,a[14]=X,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,o,s){const a=this.elements,l=1/(t-e),u=1/(i-r),h=1/(s-o),d=(t+e)*l,c=(i+r)*u,X=(s+o)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-c,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-X,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const X3=new D,k2=new m1,XZ=new D(0,0,0),ZZ=new D(1,1,1),j5=new D,m4=new D,f2=new D,os=new m1,ss=new W8;class O6{constructor(e=0,t=0,i=0,r=O6.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],h=r[9],d=r[2],c=r[6],X=r[10];switch(t){case"XYZ":this._y=Math.asin(k1(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,X),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-k1(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,X),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(k1(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,X),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-k1(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,X),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(k1(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,X));break;case"XZY":this._z=Math.asin(-k1(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,X),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return os.makeRotationFromQuaternion(e),this.setFromRotationMatrix(os,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ss.setFromEuler(this),this.setFromQuaternion(ss,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}O6.DefaultOrder="XYZ";O6.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YZ=0;const as=new D,Z3=new W8,Z5=new m1,p4=new D,T9=new D,mZ=new D,pZ=new W8,ls=new D(1,0,0),us=new D(0,1,0),cs=new D(0,0,1),gZ={type:"added"},hs={type:"removed"};class L1 extends t3{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YZ++}),this.uuid=R6(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=L1.DefaultUp.clone();const e=new D,t=new O6,i=new W8,r=new D(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new m1},normalMatrix:{value:new T2}}),this.matrix=new m1,this.matrixWorld=new m1,this.matrixAutoUpdate=L1.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=L1.DefaultMatrixWorldAutoUpdate,this.layers=new Ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Z3.setFromAxisAngle(e,t),this.quaternion.multiply(Z3),this}rotateOnWorldAxis(e,t){return Z3.setFromAxisAngle(e,t),this.quaternion.premultiply(Z3),this}rotateX(e){return this.rotateOnAxis(ls,e)}rotateY(e){return this.rotateOnAxis(us,e)}rotateZ(e){return this.rotateOnAxis(cs,e)}translateOnAxis(e,t){return as.copy(e).applyQuaternion(this.quaternion),this.position.add(as.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ls,e)}translateY(e){return this.translateOnAxis(us,e)}translateZ(e){return this.translateOnAxis(cs,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Z5.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?p4.copy(e):p4.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),T9.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Z5.lookAt(T9,p4,this.up):Z5.lookAt(p4,T9,this.up),this.quaternion.setFromRotationMatrix(Z5),r&&(Z5.extractRotation(r.matrixWorld),Z3.setFromRotationMatrix(Z5),this.quaternion.premultiply(Z3.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gZ)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hs)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(hs)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Z5.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Z5.multiply(e.parent.matrixWorld)),e.applyMatrix4(Z5),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(T9,e,mZ),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(T9,pZ,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),h=s(e.images),d=s(e.shapes),c=s(e.skeletons),X=s(e.animations),p=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),c.length>0&&(i.skeletons=c),X.length>0&&(i.animations=X),p.length>0&&(i.nodes=p)}return i.object=r,i;function s(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}L1.DefaultUp=new D(0,1,0);L1.DefaultMatrixAutoUpdate=!0;L1.DefaultMatrixWorldAutoUpdate=!0;const O2=new D,Y5=new D,ot=new D,m5=new D,Y3=new D,m3=new D,ds=new D,st=new D,at=new D,lt=new D;class v5{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),O2.subVectors(e,t),r.cross(O2);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){O2.subVectors(r,t),Y5.subVectors(i,t),ot.subVectors(e,t);const s=O2.dot(O2),a=O2.dot(Y5),l=O2.dot(ot),u=Y5.dot(Y5),h=Y5.dot(ot),d=s*u-a*a;if(d===0)return o.set(-2,-1,-1);const c=1/d,X=(u*l-a*h)*c,p=(s*h-a*l)*c;return o.set(1-X-p,p,X)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,m5),m5.x>=0&&m5.y>=0&&m5.x+m5.y<=1}static getUV(e,t,i,r,o,s,a,l){return this.getBarycoord(e,t,i,r,m5),l.set(0,0),l.addScaledVector(o,m5.x),l.addScaledVector(s,m5.y),l.addScaledVector(a,m5.z),l}static isFrontFacing(e,t,i,r){return O2.subVectors(i,t),Y5.subVectors(e,t),O2.cross(Y5).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return O2.subVectors(this.c,this.b),Y5.subVectors(this.a,this.b),O2.cross(Y5).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return v5.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return v5.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return v5.getUV(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return v5.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return v5.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let s,a;Y3.subVectors(r,i),m3.subVectors(o,i),st.subVectors(e,i);const l=Y3.dot(st),u=m3.dot(st);if(l<=0&&u<=0)return t.copy(i);at.subVectors(e,r);const h=Y3.dot(at),d=m3.dot(at);if(h>=0&&d<=h)return t.copy(r);const c=l*d-h*u;if(c<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(Y3,s);lt.subVectors(e,o);const X=Y3.dot(lt),p=m3.dot(lt);if(p>=0&&X<=p)return t.copy(o);const f=X*u-l*p;if(f<=0&&u>=0&&p<=0)return a=u/(u-p),t.copy(i).addScaledVector(m3,a);const Z=h*p-X*d;if(Z<=0&&d-h>=0&&X-p>=0)return ds.subVectors(o,r),a=(d-h)/(d-h+(X-p)),t.copy(r).addScaledVector(ds,a);const Y=1/(Z+f+c);return s=f*Y,a=c*Y,t.copy(i).addScaledVector(Y3,s).addScaledVector(m3,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let yZ=0;class n3 extends t3{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yZ++}),this.uuid=R6(),this.name="",this.type="Material",this.blending=H3,this.side=i9,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Mu,this.blendDst=Tu,this.blendEquation=x3,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_n,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uZ,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ge,this.stencilZFail=Ge,this.stencilZPass=Ge,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==H3&&(i.blending=this.blending),this.side!==i9&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Li extends n3{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new e1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const x1=new D,g4=new v0;class a5{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Qo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)g4.fromBufferAttribute(this,t),g4.applyMatrix3(e),this.setXY(t,g4.x,g4.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)x1.fromBufferAttribute(this,t),x1.applyMatrix3(e),this.setXYZ(t,x1.x,x1.y,x1.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)x1.fromBufferAttribute(this,t),x1.applyMatrix4(e),this.setXYZ(t,x1.x,x1.y,x1.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)x1.fromBufferAttribute(this,t),x1.applyNormalMatrix(e),this.setXYZ(t,x1.x,x1.y,x1.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)x1.fromBufferAttribute(this,t),x1.transformDirection(e),this.setXYZ(t,x1.x,x1.y,x1.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=u4(t,this.array)),t}setX(e,t){return this.normalized&&(t=d2(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=u4(t,this.array)),t}setY(e,t){return this.normalized&&(t=d2(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=u4(t,this.array)),t}setZ(e,t){return this.normalized&&(t=d2(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=u4(t,this.array)),t}setW(e,t){return this.normalized&&(t=d2(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=d2(t,this.array),i=d2(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=d2(t,this.array),i=d2(i,this.array),r=d2(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=d2(t,this.array),i=d2(i,this.array),r=d2(r,this.array),o=d2(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class zu extends a5{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fu extends a5{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class G2 extends a5{constructor(e,t,i){super(new Float32Array(e),t,i)}}let vZ=0;const x2=new m1,ut=new L1,p3=new D,X2=new N6,E9=new N6,b1=new D;class K2 extends t3{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vZ++}),this.uuid=R6(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Au(e)?Fu:zu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new T2().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return x2.makeRotationFromQuaternion(e),this.applyMatrix4(x2),this}rotateX(e){return x2.makeRotationX(e),this.applyMatrix4(x2),this}rotateY(e){return x2.makeRotationY(e),this.applyMatrix4(x2),this}rotateZ(e){return x2.makeRotationZ(e),this.applyMatrix4(x2),this}translate(e,t,i){return x2.makeTranslation(e,t,i),this.applyMatrix4(x2),this}scale(e,t,i){return x2.makeScale(e,t,i),this.applyMatrix4(x2),this}lookAt(e){return ut.lookAt(e),ut.updateMatrix(),this.applyMatrix4(ut.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(p3).negate(),this.translate(p3.x,p3.y,p3.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new G2(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new N6);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];X2.setFromBufferAttribute(o),this.morphTargetsRelative?(b1.addVectors(this.boundingBox.min,X2.min),this.boundingBox.expandByPoint(b1),b1.addVectors(this.boundingBox.max,X2.max),this.boundingBox.expandByPoint(b1)):(this.boundingBox.expandByPoint(X2.min),this.boundingBox.expandByPoint(X2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new k6);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(X2.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];E9.setFromBufferAttribute(a),this.morphTargetsRelative?(b1.addVectors(X2.min,E9.min),X2.expandByPoint(b1),b1.addVectors(X2.max,E9.max),X2.expandByPoint(b1)):(X2.expandByPoint(E9.min),X2.expandByPoint(E9.max))}X2.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)b1.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(b1));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)b1.fromBufferAttribute(a,u),l&&(p3.fromBufferAttribute(e,u),b1.add(p3)),r=Math.max(r,i.distanceToSquared(b1))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,o=t.normal.array,s=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new a5(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let I=0;I<a;I++)u[I]=new D,h[I]=new D;const d=new D,c=new D,X=new D,p=new v0,f=new v0,Z=new v0,Y=new D,m=new D;function g(I,e0,X0){d.fromArray(r,I*3),c.fromArray(r,e0*3),X.fromArray(r,X0*3),p.fromArray(s,I*2),f.fromArray(s,e0*2),Z.fromArray(s,X0*2),c.sub(d),X.sub(d),f.sub(p),Z.sub(p);const z=1/(f.x*Z.y-Z.x*f.y);!isFinite(z)||(Y.copy(c).multiplyScalar(Z.y).addScaledVector(X,-f.y).multiplyScalar(z),m.copy(X).multiplyScalar(f.x).addScaledVector(c,-Z.x).multiplyScalar(z),u[I].add(Y),u[e0].add(Y),u[X0].add(Y),h[I].add(m),h[e0].add(m),h[X0].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let I=0,e0=y.length;I<e0;++I){const X0=y[I],z=X0.start,R=X0.count;for(let W=z,t0=z+R;W<t0;W+=3)g(i[W+0],i[W+1],i[W+2])}const P=new D,w=new D,T=new D,v=new D;function M(I){T.fromArray(o,I*3),v.copy(T);const e0=u[I];P.copy(e0),P.sub(T.multiplyScalar(T.dot(e0))).normalize(),w.crossVectors(v,e0);const z=w.dot(h[I])<0?-1:1;l[I*4]=P.x,l[I*4+1]=P.y,l[I*4+2]=P.z,l[I*4+3]=z}for(let I=0,e0=y.length;I<e0;++I){const X0=y[I],z=X0.start,R=X0.count;for(let W=z,t0=z+R;W<t0;W+=3)M(i[W+0]),M(i[W+1]),M(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new a5(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let c=0,X=i.count;c<X;c++)i.setXYZ(c,0,0,0);const r=new D,o=new D,s=new D,a=new D,l=new D,u=new D,h=new D,d=new D;if(e)for(let c=0,X=e.count;c<X;c+=3){const p=e.getX(c+0),f=e.getX(c+1),Z=e.getX(c+2);r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),s.fromBufferAttribute(t,Z),h.subVectors(s,o),d.subVectors(r,o),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,f),u.fromBufferAttribute(i,Z),a.add(h),l.add(h),u.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(f,l.x,l.y,l.z),i.setXYZ(Z,u.x,u.y,u.z)}else for(let c=0,X=t.count;c<X;c+=3)r.fromBufferAttribute(t,c+0),o.fromBufferAttribute(t,c+1),s.fromBufferAttribute(t,c+2),h.subVectors(s,o),d.subVectors(r,o),h.cross(d),i.setXYZ(c+0,h.x,h.y,h.z),i.setXYZ(c+1,h.x,h.y,h.z),i.setXYZ(c+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)b1.fromBufferAttribute(e,t),b1.normalize(),e.setXYZ(t,b1.x,b1.y,b1.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,d=a.normalized,c=new u.constructor(l.length*h);let X=0,p=0;for(let f=0,Z=l.length;f<Z;f++){a.isInterleavedBufferAttribute?X=l[f]*a.data.stride+a.offset:X=l[f]*h;for(let Y=0;Y<h;Y++)c[p++]=u[X++]}return new a5(c,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new K2,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let h=0,d=u.length;h<d;h++){const c=u[h],X=e(c,i);l.push(X)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,c=u.length;d<c;d++){const X=u[d];h.push(X.toJSON(e.data))}h.length>0&&(r[l]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const o=e.morphAttributes;for(const u in o){const h=[],d=o[u];for(let c=0,X=d.length;c<X;c++)h.push(d[c].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,h=s.length;u<h;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const fs=new m1,g3=new Ai,ct=new k6,B5=new D,V5=new D,G5=new D,ht=new D,dt=new D,ft=new D,y4=new D,v4=new D,P4=new D,_4=new v0,x4=new v0,S4=new v0,Xt=new D,C4=new D;class S5 extends L1{constructor(e=new K2,t=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ct.copy(i.boundingSphere),ct.applyMatrix4(o),e.ray.intersectsSphere(ct)===!1)||(fs.copy(o).invert(),g3.copy(e.ray).applyMatrix4(fs),i.boundingBox!==null&&g3.intersectsBox(i.boundingBox)===!1))return;let s;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,h=i.morphTargetsRelative,d=i.attributes.uv,c=i.attributes.uv2,X=i.groups,p=i.drawRange;if(a!==null)if(Array.isArray(r))for(let f=0,Z=X.length;f<Z;f++){const Y=X[f],m=r[Y.materialIndex],g=Math.max(Y.start,p.start),y=Math.min(a.count,Math.min(Y.start+Y.count,p.start+p.count));for(let P=g,w=y;P<w;P+=3){const T=a.getX(P),v=a.getX(P+1),M=a.getX(P+2);s=w4(this,m,e,g3,l,u,h,d,c,T,v,M),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=Y.materialIndex,t.push(s))}}else{const f=Math.max(0,p.start),Z=Math.min(a.count,p.start+p.count);for(let Y=f,m=Z;Y<m;Y+=3){const g=a.getX(Y),y=a.getX(Y+1),P=a.getX(Y+2);s=w4(this,r,e,g3,l,u,h,d,c,g,y,P),s&&(s.faceIndex=Math.floor(Y/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let f=0,Z=X.length;f<Z;f++){const Y=X[f],m=r[Y.materialIndex],g=Math.max(Y.start,p.start),y=Math.min(l.count,Math.min(Y.start+Y.count,p.start+p.count));for(let P=g,w=y;P<w;P+=3){const T=P,v=P+1,M=P+2;s=w4(this,m,e,g3,l,u,h,d,c,T,v,M),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=Y.materialIndex,t.push(s))}}else{const f=Math.max(0,p.start),Z=Math.min(l.count,p.start+p.count);for(let Y=f,m=Z;Y<m;Y+=3){const g=Y,y=Y+1,P=Y+2;s=w4(this,r,e,g3,l,u,h,d,c,g,y,P),s&&(s.faceIndex=Math.floor(Y/3),t.push(s))}}}}function PZ(n,e,t,i,r,o,s,a){let l;if(e.side===b2?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side!==x5,a),l===null)return null;C4.copy(a),C4.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(C4);return u<t.near||u>t.far?null:{distance:u,point:C4.clone(),object:n}}function w4(n,e,t,i,r,o,s,a,l,u,h,d){B5.fromBufferAttribute(r,u),V5.fromBufferAttribute(r,h),G5.fromBufferAttribute(r,d);const c=n.morphTargetInfluences;if(o&&c){y4.set(0,0,0),v4.set(0,0,0),P4.set(0,0,0);for(let p=0,f=o.length;p<f;p++){const Z=c[p],Y=o[p];Z!==0&&(ht.fromBufferAttribute(Y,u),dt.fromBufferAttribute(Y,h),ft.fromBufferAttribute(Y,d),s?(y4.addScaledVector(ht,Z),v4.addScaledVector(dt,Z),P4.addScaledVector(ft,Z)):(y4.addScaledVector(ht.sub(B5),Z),v4.addScaledVector(dt.sub(V5),Z),P4.addScaledVector(ft.sub(G5),Z)))}B5.add(y4),V5.add(v4),G5.add(P4)}n.isSkinnedMesh&&(n.boneTransform(u,B5),n.boneTransform(h,V5),n.boneTransform(d,G5));const X=PZ(n,e,t,i,B5,V5,G5,Xt);if(X){a&&(_4.fromBufferAttribute(a,u),x4.fromBufferAttribute(a,h),S4.fromBufferAttribute(a,d),X.uv=v5.getUV(Xt,B5,V5,G5,_4,x4,S4,new v0)),l&&(_4.fromBufferAttribute(l,u),x4.fromBufferAttribute(l,h),S4.fromBufferAttribute(l,d),X.uv2=v5.getUV(Xt,B5,V5,G5,_4,x4,S4,new v0));const p={a:u,b:h,c:d,normal:new D,materialIndex:0};v5.getNormal(B5,V5,G5,p.normal),X.face=p}return X}class X9 extends K2{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],h=[],d=[];let c=0,X=0;p("z","y","x",-1,-1,i,t,e,s,o,0),p("z","y","x",1,-1,i,t,-e,s,o,1),p("x","z","y",1,1,e,i,t,r,s,2),p("x","z","y",1,-1,e,i,-t,r,s,3),p("x","y","z",1,-1,e,t,i,r,o,4),p("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new G2(u,3)),this.setAttribute("normal",new G2(h,3)),this.setAttribute("uv",new G2(d,2));function p(f,Z,Y,m,g,y,P,w,T,v,M){const I=y/T,e0=P/v,X0=y/2,z=P/2,R=w/2,W=T+1,t0=v+1;let r0=0,A=0;const b=new D;for(let L=0;L<t0;L++){const J=L*e0-z;for(let K=0;K<W;K++){const i0=K*I-X0;b[f]=i0*m,b[Z]=J*g,b[Y]=R,u.push(b.x,b.y,b.z),b[f]=0,b[Z]=0,b[Y]=w>0?1:-1,h.push(b.x,b.y,b.z),d.push(K/T),d.push(1-L/v),r0+=1}}for(let L=0;L<v;L++)for(let J=0;J<T;J++){const K=c+J+W*L,i0=c+J+W*(L+1),Y0=c+(J+1)+W*(L+1),S0=c+(J+1)+W*L;l.push(K,i0,S0),l.push(i0,Y0,S0),A+=6}a.addGroup(X,A,M),X+=A,c+=r0}}static fromJSON(e){return new X9(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function a9(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function G1(n){const e={};for(let t=0;t<n.length;t++){const i=a9(n[t]);for(const r in i)e[r]=i[r]}return e}function _Z(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const xZ={clone:a9,merge:G1};var SZ=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CZ=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $8 extends n3{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SZ,this.fragmentShader=CZ,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=a9(e.uniforms),this.uniformsGroups=_Z(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Uu extends L1{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new m1,this.projectionMatrix=new m1,this.projectionMatrixInverse=new m1}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Y2 extends Uu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(He*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(He*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(He*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const y3=90,v3=1;class wZ extends L1{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Y2(y3,v3,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(1,0,0)),this.add(r);const o=new Y2(y3,v3,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new D(-1,0,0)),this.add(o);const s=new Y2(y3,v3,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new D(0,1,0)),this.add(s);const a=new Y2(y3,v3,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const l=new Y2(y3,v3,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);const u=new Y2(y3,v3,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new D(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,s,a,l,u]=this.children,h=e.getRenderTarget(),d=e.toneMapping,c=e.xr.enabled;e.toneMapping=M5,e.xr.enabled=!1;const X=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,o),e.setRenderTarget(i,2),e.render(t,s),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=X,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=c,i.texture.needsPMREMUpdate=!0}}class ju extends $2{constructor(e,t,i,r,o,s,a,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:r9,super(e,t,i,r,o,s,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class MZ extends H8{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ju(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:w2}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new X9(5,5,5),o=new $8({name:"CubemapFromEquirect",uniforms:a9(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:b2,blending:u8});o.uniforms.tEquirect.value=t;const s=new S5(r,o),a=t.minFilter;return t.minFilter===te&&(t.minFilter=w2),new wZ(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}}const Zt=new D,TZ=new D,EZ=new T2;class _8{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Zt.subVectors(i,t).cross(TZ.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Zt),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(i).multiplyScalar(o).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||EZ.getNormalMatrix(e),r=this.coplanarPoint(Zt).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const P3=new k6,M4=new D;class Ri{constructor(e=new _8,t=new _8,i=new _8,r=new _8,o=new _8,s=new _8){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],o=i[1],s=i[2],a=i[3],l=i[4],u=i[5],h=i[6],d=i[7],c=i[8],X=i[9],p=i[10],f=i[11],Z=i[12],Y=i[13],m=i[14],g=i[15];return t[0].setComponents(a-r,d-l,f-c,g-Z).normalize(),t[1].setComponents(a+r,d+l,f+c,g+Z).normalize(),t[2].setComponents(a+o,d+u,f+X,g+Y).normalize(),t[3].setComponents(a-o,d-u,f-X,g-Y).normalize(),t[4].setComponents(a-s,d-h,f-p,g-m).normalize(),t[5].setComponents(a+s,d+h,f+p,g+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),P3.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(P3)}intersectsSprite(e){return P3.center.set(0,0,0),P3.radius=.7071067811865476,P3.applyMatrix4(e.matrixWorld),this.intersectsSphere(P3)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(M4.x=r.normal.x>0?e.max.x:e.min.x,M4.y=r.normal.y>0?e.max.y:e.min.y,M4.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(M4)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bu(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function bZ(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,h){const d=u.array,c=u.usage,X=n.createBuffer();n.bindBuffer(h,X),n.bufferData(h,d,c),u.onUploadCallback();let p;if(d instanceof Float32Array)p=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)p=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=5123;else if(d instanceof Int16Array)p=5122;else if(d instanceof Uint32Array)p=5125;else if(d instanceof Int32Array)p=5124;else if(d instanceof Int8Array)p=5120;else if(d instanceof Uint8Array)p=5121;else if(d instanceof Uint8ClampedArray)p=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:X,type:p,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function o(u,h,d){const c=h.array,X=h.updateRange;n.bindBuffer(d,u),X.count===-1?n.bufferSubData(d,0,c):(t?n.bufferSubData(d,X.offset*c.BYTES_PER_ELEMENT,c,X.offset,X.count):n.bufferSubData(d,X.offset*c.BYTES_PER_ELEMENT,c.subarray(X.offset,X.offset+X.count)),X.count=-1)}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h&&(n.deleteBuffer(h.buffer),i.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const c=i.get(u);(!c||c.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,h)):d.version<u.version&&(o(d.buffer,u,h),d.version=u.version)}return{get:s,remove:a,update:l}}class ne extends K2{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,h=l+1,d=e/a,c=t/l,X=[],p=[],f=[],Z=[];for(let Y=0;Y<h;Y++){const m=Y*c-s;for(let g=0;g<u;g++){const y=g*d-o;p.push(y,-m,0),f.push(0,0,1),Z.push(g/a),Z.push(1-Y/l)}}for(let Y=0;Y<l;Y++)for(let m=0;m<a;m++){const g=m+u*Y,y=m+u*(Y+1),P=m+1+u*(Y+1),w=m+1+u*Y;X.push(g,y,w),X.push(y,P,w)}this.setIndex(X),this.setAttribute("position",new G2(p,3)),this.setAttribute("normal",new G2(f,3)),this.setAttribute("uv",new G2(Z,2))}static fromJSON(e){return new ne(e.width,e.height,e.widthSegments,e.heightSegments)}}var DZ=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,IZ=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AZ=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,LZ=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RZ=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NZ=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kZ="vec3 transformed = vec3( position );",OZ=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zZ=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,FZ=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UZ=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jZ=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,BZ=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VZ=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GZ=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HZ=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WZ=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$Z=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qZ=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,JZ=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,KZ=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,QZ=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eY=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tY=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,nY=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iY=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rY="gl_FragColor = linearToOutputTexel( gl_FragColor );",oY=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sY=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aY=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lY=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uY=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cY=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hY=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dY=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fY=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XY=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZY=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,YY=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mY=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pY=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gY=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,yY=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vY=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,PY=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_Y=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,xY=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SY=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,CY=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,wY=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MY=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TY=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,EY=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,bY=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DY=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IY=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,AY=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,LY=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RY=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NY=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kY=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OY=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zY=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FY=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UY=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jY=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,BY=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,VY=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,GY=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$Y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qY=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,JY=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,KY=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,QY=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hm=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,dm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ym=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Pm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,_m=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,xm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Sm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Cm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,wm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Mm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Am=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Rm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$m=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,j0={alphamap_fragment:DZ,alphamap_pars_fragment:IZ,alphatest_fragment:AZ,alphatest_pars_fragment:LZ,aomap_fragment:RZ,aomap_pars_fragment:NZ,begin_vertex:kZ,beginnormal_vertex:OZ,bsdfs:zZ,iridescence_fragment:FZ,bumpmap_pars_fragment:UZ,clipping_planes_fragment:jZ,clipping_planes_pars_fragment:BZ,clipping_planes_pars_vertex:VZ,clipping_planes_vertex:GZ,color_fragment:HZ,color_pars_fragment:WZ,color_pars_vertex:$Z,color_vertex:qZ,common:JZ,cube_uv_reflection_fragment:KZ,defaultnormal_vertex:QZ,displacementmap_pars_vertex:eY,displacementmap_vertex:tY,emissivemap_fragment:nY,emissivemap_pars_fragment:iY,encodings_fragment:rY,encodings_pars_fragment:oY,envmap_fragment:sY,envmap_common_pars_fragment:aY,envmap_pars_fragment:lY,envmap_pars_vertex:uY,envmap_physical_pars_fragment:vY,envmap_vertex:cY,fog_vertex:hY,fog_pars_vertex:dY,fog_fragment:fY,fog_pars_fragment:XY,gradientmap_pars_fragment:ZY,lightmap_fragment:YY,lightmap_pars_fragment:mY,lights_lambert_fragment:pY,lights_lambert_pars_fragment:gY,lights_pars_begin:yY,lights_toon_fragment:PY,lights_toon_pars_fragment:_Y,lights_phong_fragment:xY,lights_phong_pars_fragment:SY,lights_physical_fragment:CY,lights_physical_pars_fragment:wY,lights_fragment_begin:MY,lights_fragment_maps:TY,lights_fragment_end:EY,logdepthbuf_fragment:bY,logdepthbuf_pars_fragment:DY,logdepthbuf_pars_vertex:IY,logdepthbuf_vertex:AY,map_fragment:LY,map_pars_fragment:RY,map_particle_fragment:NY,map_particle_pars_fragment:kY,metalnessmap_fragment:OY,metalnessmap_pars_fragment:zY,morphcolor_vertex:FY,morphnormal_vertex:UY,morphtarget_pars_vertex:jY,morphtarget_vertex:BY,normal_fragment_begin:VY,normal_fragment_maps:GY,normal_pars_fragment:HY,normal_pars_vertex:WY,normal_vertex:$Y,normalmap_pars_fragment:qY,clearcoat_normal_fragment_begin:JY,clearcoat_normal_fragment_maps:KY,clearcoat_pars_fragment:QY,iridescence_pars_fragment:em,output_fragment:tm,packing:nm,premultiplied_alpha_fragment:im,project_vertex:rm,dithering_fragment:om,dithering_pars_fragment:sm,roughnessmap_fragment:am,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:um,shadowmap_pars_vertex:cm,shadowmap_vertex:hm,shadowmask_pars_fragment:dm,skinbase_vertex:fm,skinning_pars_vertex:Xm,skinning_vertex:Zm,skinnormal_vertex:Ym,specularmap_fragment:mm,specularmap_pars_fragment:pm,tonemapping_fragment:gm,tonemapping_pars_fragment:ym,transmission_fragment:vm,transmission_pars_fragment:Pm,uv_pars_fragment:_m,uv_pars_vertex:xm,uv_vertex:Sm,uv2_pars_fragment:Cm,uv2_pars_vertex:wm,uv2_vertex:Mm,worldpos_vertex:Tm,background_vert:Em,background_frag:bm,cube_vert:Dm,cube_frag:Im,depth_vert:Am,depth_frag:Lm,distanceRGBA_vert:Rm,distanceRGBA_frag:Nm,equirect_vert:km,equirect_frag:Om,linedashed_vert:zm,linedashed_frag:Fm,meshbasic_vert:Um,meshbasic_frag:jm,meshlambert_vert:Bm,meshlambert_frag:Vm,meshmatcap_vert:Gm,meshmatcap_frag:Hm,meshnormal_vert:Wm,meshnormal_frag:$m,meshphong_vert:qm,meshphong_frag:Jm,meshphysical_vert:Km,meshphysical_frag:Qm,meshtoon_vert:ep,meshtoon_frag:tp,points_vert:np,points_frag:ip,shadow_vert:rp,shadow_frag:op,sprite_vert:sp,sprite_frag:ap},d0={common:{diffuse:{value:new e1(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new T2},uv2Transform:{value:new T2},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new v0(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new e1(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new e1(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new T2}},sprite:{diffuse:{value:new e1(16777215)},opacity:{value:1},center:{value:new v0(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new T2}}},n5={basic:{uniforms:G1([d0.common,d0.specularmap,d0.envmap,d0.aomap,d0.lightmap,d0.fog]),vertexShader:j0.meshbasic_vert,fragmentShader:j0.meshbasic_frag},lambert:{uniforms:G1([d0.common,d0.specularmap,d0.envmap,d0.aomap,d0.lightmap,d0.emissivemap,d0.bumpmap,d0.normalmap,d0.displacementmap,d0.fog,d0.lights,{emissive:{value:new e1(0)}}]),vertexShader:j0.meshlambert_vert,fragmentShader:j0.meshlambert_frag},phong:{uniforms:G1([d0.common,d0.specularmap,d0.envmap,d0.aomap,d0.lightmap,d0.emissivemap,d0.bumpmap,d0.normalmap,d0.displacementmap,d0.fog,d0.lights,{emissive:{value:new e1(0)},specular:{value:new e1(1118481)},shininess:{value:30}}]),vertexShader:j0.meshphong_vert,fragmentShader:j0.meshphong_frag},standard:{uniforms:G1([d0.common,d0.envmap,d0.aomap,d0.lightmap,d0.emissivemap,d0.bumpmap,d0.normalmap,d0.displacementmap,d0.roughnessmap,d0.metalnessmap,d0.fog,d0.lights,{emissive:{value:new e1(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:j0.meshphysical_vert,fragmentShader:j0.meshphysical_frag},toon:{uniforms:G1([d0.common,d0.aomap,d0.lightmap,d0.emissivemap,d0.bumpmap,d0.normalmap,d0.displacementmap,d0.gradientmap,d0.fog,d0.lights,{emissive:{value:new e1(0)}}]),vertexShader:j0.meshtoon_vert,fragmentShader:j0.meshtoon_frag},matcap:{uniforms:G1([d0.common,d0.bumpmap,d0.normalmap,d0.displacementmap,d0.fog,{matcap:{value:null}}]),vertexShader:j0.meshmatcap_vert,fragmentShader:j0.meshmatcap_frag},points:{uniforms:G1([d0.points,d0.fog]),vertexShader:j0.points_vert,fragmentShader:j0.points_frag},dashed:{uniforms:G1([d0.common,d0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:j0.linedashed_vert,fragmentShader:j0.linedashed_frag},depth:{uniforms:G1([d0.common,d0.displacementmap]),vertexShader:j0.depth_vert,fragmentShader:j0.depth_frag},normal:{uniforms:G1([d0.common,d0.bumpmap,d0.normalmap,d0.displacementmap,{opacity:{value:1}}]),vertexShader:j0.meshnormal_vert,fragmentShader:j0.meshnormal_frag},sprite:{uniforms:G1([d0.sprite,d0.fog]),vertexShader:j0.sprite_vert,fragmentShader:j0.sprite_frag},background:{uniforms:{uvTransform:{value:new T2},t2D:{value:null}},vertexShader:j0.background_vert,fragmentShader:j0.background_frag},cube:{uniforms:G1([d0.envmap,{opacity:{value:1}}]),vertexShader:j0.cube_vert,fragmentShader:j0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:j0.equirect_vert,fragmentShader:j0.equirect_frag},distanceRGBA:{uniforms:G1([d0.common,d0.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:j0.distanceRGBA_vert,fragmentShader:j0.distanceRGBA_frag},shadow:{uniforms:G1([d0.lights,d0.fog,{color:{value:new e1(0)},opacity:{value:1}}]),vertexShader:j0.shadow_vert,fragmentShader:j0.shadow_frag}};n5.physical={uniforms:G1([n5.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new v0(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new e1(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new v0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new e1(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new e1(1,1,1)},specularColorMap:{value:null}}]),vertexShader:j0.meshphysical_vert,fragmentShader:j0.meshphysical_frag};function lp(n,e,t,i,r,o){const s=new e1(0);let a=r===!0?0:1,l,u,h=null,d=0,c=null;function X(f,Z){let Y=!1,m=Z.isScene===!0?Z.background:null;m&&m.isTexture&&(m=e.get(m));const g=n.xr,y=g.getSession&&g.getSession();y&&y.environmentBlendMode==="additive"&&(m=null),m===null?p(s,a):m&&m.isColor&&(p(m,1),Y=!0),(n.autoClear||Y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),m&&(m.isCubeTexture||m.mapping===ee)?(u===void 0&&(u=new S5(new X9(1,1,1),new $8({name:"BackgroundCubeMaterial",uniforms:a9(n5.cube.uniforms),vertexShader:n5.cube.vertexShader,fragmentShader:n5.cube.fragmentShader,side:b2,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=m,u.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,(h!==m||d!==m.version||c!==n.toneMapping)&&(u.material.needsUpdate=!0,h=m,d=m.version,c=n.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new S5(new ne(2,2),new $8({name:"BackgroundMaterial",uniforms:a9(n5.background.uniforms),vertexShader:n5.background.vertexShader,fragmentShader:n5.background.fragmentShader,side:i9,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),(h!==m||d!==m.version||c!==n.toneMapping)&&(l.material.needsUpdate=!0,h=m,d=m.version,c=n.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,Z){t.buffers.color.setClear(f.r,f.g,f.b,Z,o)}return{getClearColor:function(){return s},setClearColor:function(f,Z=1){s.set(f),a=Z,p(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(f){a=f,p(s,a)},render:X}}function up(n,e,t,i){const r=n.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=Z(null);let u=l,h=!1;function d(R,W,t0,r0,A){let b=!1;if(s){const L=f(r0,t0,W);u!==L&&(u=L,X(u.object)),b=Y(R,r0,t0,A),b&&m(R,r0,t0,A)}else{const L=W.wireframe===!0;(u.geometry!==r0.id||u.program!==t0.id||u.wireframe!==L)&&(u.geometry=r0.id,u.program=t0.id,u.wireframe=L,b=!0)}A!==null&&t.update(A,34963),(b||h)&&(h=!1,v(R,W,t0,r0),A!==null&&n.bindBuffer(34963,t.get(A).buffer))}function c(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function X(R){return i.isWebGL2?n.bindVertexArray(R):o.bindVertexArrayOES(R)}function p(R){return i.isWebGL2?n.deleteVertexArray(R):o.deleteVertexArrayOES(R)}function f(R,W,t0){const r0=t0.wireframe===!0;let A=a[R.id];A===void 0&&(A={},a[R.id]=A);let b=A[W.id];b===void 0&&(b={},A[W.id]=b);let L=b[r0];return L===void 0&&(L=Z(c()),b[r0]=L),L}function Z(R){const W=[],t0=[],r0=[];for(let A=0;A<r;A++)W[A]=0,t0[A]=0,r0[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:t0,attributeDivisors:r0,object:R,attributes:{},index:null}}function Y(R,W,t0,r0){const A=u.attributes,b=W.attributes;let L=0;const J=t0.getAttributes();for(const K in J)if(J[K].location>=0){const Y0=A[K];let S0=b[K];if(S0===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(S0=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(S0=R.instanceColor)),Y0===void 0||Y0.attribute!==S0||S0&&Y0.data!==S0.data)return!0;L++}return u.attributesNum!==L||u.index!==r0}function m(R,W,t0,r0){const A={},b=W.attributes;let L=0;const J=t0.getAttributes();for(const K in J)if(J[K].location>=0){let Y0=b[K];Y0===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Y0=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Y0=R.instanceColor));const S0={};S0.attribute=Y0,Y0&&Y0.data&&(S0.data=Y0.data),A[K]=S0,L++}u.attributes=A,u.attributesNum=L,u.index=r0}function g(){const R=u.newAttributes;for(let W=0,t0=R.length;W<t0;W++)R[W]=0}function y(R){P(R,0)}function P(R,W){const t0=u.newAttributes,r0=u.enabledAttributes,A=u.attributeDivisors;t0[R]=1,r0[R]===0&&(n.enableVertexAttribArray(R),r0[R]=1),A[R]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,W),A[R]=W)}function w(){const R=u.newAttributes,W=u.enabledAttributes;for(let t0=0,r0=W.length;t0<r0;t0++)W[t0]!==R[t0]&&(n.disableVertexAttribArray(t0),W[t0]=0)}function T(R,W,t0,r0,A,b){i.isWebGL2===!0&&(t0===5124||t0===5125)?n.vertexAttribIPointer(R,W,t0,A,b):n.vertexAttribPointer(R,W,t0,r0,A,b)}function v(R,W,t0,r0){if(i.isWebGL2===!1&&(R.isInstancedMesh||r0.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const A=r0.attributes,b=t0.getAttributes(),L=W.defaultAttributeValues;for(const J in b){const K=b[J];if(K.location>=0){let i0=A[J];if(i0===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(i0=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(i0=R.instanceColor)),i0!==void 0){const Y0=i0.normalized,S0=i0.itemSize,B=t.get(i0);if(B===void 0)continue;const N0=B.buffer,T0=B.type,E0=B.bytesPerElement;if(i0.isInterleavedBufferAttribute){const g0=i0.data,K0=g0.stride,R0=i0.offset;if(g0.isInstancedInterleavedBuffer){for(let C0=0;C0<K.locationSize;C0++)P(K.location+C0,g0.meshPerAttribute);R.isInstancedMesh!==!0&&r0._maxInstanceCount===void 0&&(r0._maxInstanceCount=g0.meshPerAttribute*g0.count)}else for(let C0=0;C0<K.locationSize;C0++)y(K.location+C0);n.bindBuffer(34962,N0);for(let C0=0;C0<K.locationSize;C0++)T(K.location+C0,S0/K.locationSize,T0,Y0,K0*E0,(R0+S0/K.locationSize*C0)*E0)}else{if(i0.isInstancedBufferAttribute){for(let g0=0;g0<K.locationSize;g0++)P(K.location+g0,i0.meshPerAttribute);R.isInstancedMesh!==!0&&r0._maxInstanceCount===void 0&&(r0._maxInstanceCount=i0.meshPerAttribute*i0.count)}else for(let g0=0;g0<K.locationSize;g0++)y(K.location+g0);n.bindBuffer(34962,N0);for(let g0=0;g0<K.locationSize;g0++)T(K.location+g0,S0/K.locationSize,T0,Y0,S0*E0,S0/K.locationSize*g0*E0)}}else if(L!==void 0){const Y0=L[J];if(Y0!==void 0)switch(Y0.length){case 2:n.vertexAttrib2fv(K.location,Y0);break;case 3:n.vertexAttrib3fv(K.location,Y0);break;case 4:n.vertexAttrib4fv(K.location,Y0);break;default:n.vertexAttrib1fv(K.location,Y0)}}}}w()}function M(){X0();for(const R in a){const W=a[R];for(const t0 in W){const r0=W[t0];for(const A in r0)p(r0[A].object),delete r0[A];delete W[t0]}delete a[R]}}function I(R){if(a[R.id]===void 0)return;const W=a[R.id];for(const t0 in W){const r0=W[t0];for(const A in r0)p(r0[A].object),delete r0[A];delete W[t0]}delete a[R.id]}function e0(R){for(const W in a){const t0=a[W];if(t0[R.id]===void 0)continue;const r0=t0[R.id];for(const A in r0)p(r0[A].object),delete r0[A];delete t0[R.id]}}function X0(){z(),h=!0,u!==l&&(u=l,X(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X0,resetDefaultState:z,dispose:M,releaseStatesOfGeometry:I,releaseStatesOfProgram:e0,initAttributes:g,enableAttribute:y,disableUnusedAttributes:w}}function cp(n,e,t,i){const r=i.isWebGL2;let o;function s(u){o=u}function a(u,h){n.drawArrays(o,u,h),t.update(h,o,1)}function l(u,h,d){if(d===0)return;let c,X;if(r)c=n,X="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),X="drawArraysInstancedANGLE",c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[X](o,u,h,d),t.update(h,o,d)}this.setMode=s,this.render=a,this.renderInstances=l}function hp(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){if(T==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),c=n.getParameter(35660),X=n.getParameter(3379),p=n.getParameter(34076),f=n.getParameter(34921),Z=n.getParameter(36347),Y=n.getParameter(36348),m=n.getParameter(36349),g=c>0,y=s||e.has("OES_texture_float"),P=g&&y,w=s?n.getParameter(36183):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:c,maxTextureSize:X,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:Z,maxVaryings:Y,maxFragmentUniforms:m,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:P,maxSamples:w}}function dp(n){const e=this;let t=null,i=0,r=!1,o=!1;const s=new _8,a=new T2,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c,X){const p=d.length!==0||c||i!==0||r;return r=c,t=h(d,X,0),i=d.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1,u()},this.setState=function(d,c,X){const p=d.clippingPlanes,f=d.clipIntersection,Z=d.clipShadows,Y=n.get(d);if(!r||p===null||p.length===0||o&&!Z)o?h(null):u();else{const m=o?0:i,g=m*4;let y=Y.clippingState||null;l.value=y,y=h(p,c,g,X);for(let P=0;P!==g;++P)y[P]=t[P];Y.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,c,X,p){const f=d!==null?d.length:0;let Z=null;if(f!==0){if(Z=l.value,p!==!0||Z===null){const Y=X+f*4,m=c.matrixWorldInverse;a.getNormalMatrix(m),(Z===null||Z.length<Y)&&(Z=new Float32Array(Y));for(let g=0,y=X;g!==f;++g,y+=4)s.copy(d[g]).applyMatrix4(m,a),s.normal.toArray(Z,y),Z[y+3]=s.constant}l.value=Z,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,Z}}function fp(n){let e=new WeakMap;function t(s,a){return a===xn?s.mapping=r9:a===Sn&&(s.mapping=o9),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===xn||a===Sn)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new MZ(l.height/2);return u.fromEquirectangularTexture(n,s),e.set(s,u),s.addEventListener("dispose",r),t(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Vu extends Uu{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const O3=4,Xs=[.125,.215,.35,.446,.526,.582],C8=20,Yt=new Vu,Zs=new e1;let mt=null;const x8=(1+Math.sqrt(5))/2,_3=1/x8,Ys=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,x8,_3),new D(0,x8,-_3),new D(_3,0,x8),new D(-_3,0,x8),new D(x8,_3,0),new D(-x8,_3,0)];class ms{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){mt=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ys(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mt),e.scissorTest=!1,T4(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===r9||e.mapping===o9?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mt=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:w2,minFilter:w2,generateMipmaps:!1,type:X6,format:r5,encoding:G8,depthBuffer:!1},r=ps(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ps(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xp(o)),this._blurMaterial=Zp(o,e,t)}return r}_compileMaterial(e){const t=new S5(this._lodPlanes[0],e);this._renderer.compile(t,Yt)}_sceneToCubeUV(e,t,i,r){const a=new Y2(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,c=h.toneMapping;h.getClearColor(Zs),h.toneMapping=M5,h.autoClear=!1;const X=new Li({name:"PMREM.Background",side:b2,depthWrite:!1,depthTest:!1}),p=new S5(new X9,X);let f=!1;const Z=e.background;Z?Z.isColor&&(X.color.copy(Z),e.background=null,f=!0):(X.color.copy(Zs),f=!0);for(let Y=0;Y<6;Y++){const m=Y%3;m===0?(a.up.set(0,l[Y],0),a.lookAt(u[Y],0,0)):m===1?(a.up.set(0,0,l[Y]),a.lookAt(0,u[Y],0)):(a.up.set(0,l[Y],0),a.lookAt(0,0,u[Y]));const g=this._cubeSize;T4(r,m*g,Y>2?g:0,g,g),h.setRenderTarget(r),f&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=c,h.autoClear=d,e.background=Z}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===r9||e.mapping===o9;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ys()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gs());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new S5(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;T4(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Yt)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Ys[(r-1)%Ys.length];this._blur(e,r-1,r,o,s)}t.autoClear=i}_blur(e,t,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new S5(this._lodPlanes[r],u),c=u.uniforms,X=this._sizeLods[i]-1,p=isFinite(o)?Math.PI/(2*X):2*Math.PI/(2*C8-1),f=o/p,Z=isFinite(o)?1+Math.floor(h*f):C8;Z>C8&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${Z} samples when the maximum is set to ${C8}`);const Y=[];let m=0;for(let T=0;T<C8;++T){const v=T/f,M=Math.exp(-v*v/2);Y.push(M),T===0?m+=M:T<Z&&(m+=2*M)}for(let T=0;T<Y.length;T++)Y[T]=Y[T]/m;c.envMap.value=e.texture,c.samples.value=Z,c.weights.value=Y,c.latitudinal.value=s==="latitudinal",a&&(c.poleAxis.value=a);const{_lodMax:g}=this;c.dTheta.value=p,c.mipInt.value=g-i;const y=this._sizeLods[r],P=3*y*(r>g-O3?r-g+O3:0),w=4*(this._cubeSize-y);T4(t,P,w,3*y,2*y),l.setRenderTarget(t),l.render(d,Yt)}}function Xp(n){const e=[],t=[],i=[];let r=n;const o=n-O3+1+Xs.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>n-O3?l=Xs[s-n+O3-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),h=-u,d=1+u,c=[h,h,d,h,d,d,h,h,d,d,h,d],X=6,p=6,f=3,Z=2,Y=1,m=new Float32Array(f*p*X),g=new Float32Array(Z*p*X),y=new Float32Array(Y*p*X);for(let w=0;w<X;w++){const T=w%3*2/3-1,v=w>2?0:-1,M=[T,v,0,T+2/3,v,0,T+2/3,v+1,0,T,v,0,T+2/3,v+1,0,T,v+1,0];m.set(M,f*p*w),g.set(c,Z*p*w);const I=[w,w,w,w,w,w];y.set(I,Y*p*w)}const P=new K2;P.setAttribute("position",new a5(m,f)),P.setAttribute("uv",new a5(g,Z)),P.setAttribute("faceIndex",new a5(y,Y)),e.push(P),r>O3&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ps(n,e,t){const i=new H8(n,e,t);return i.texture.mapping=ee,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function T4(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Zp(n,e,t){const i=new Float32Array(C8),r=new D(0,1,0);return new $8({name:"SphericalGaussianBlur",defines:{n:C8,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ni(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:u8,depthTest:!1,depthWrite:!1})}function gs(){return new $8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ni(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:u8,depthTest:!1,depthWrite:!1})}function ys(){return new $8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ni(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:u8,depthTest:!1,depthWrite:!1})}function Ni(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yp(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===xn||l===Sn,h=l===r9||l===o9;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new ms(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new ms(n));const c=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,c),a.addEventListener("dispose",o),c.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function mp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pp(n,e,t,i){const r={},o=new WeakMap;function s(d){const c=d.target;c.index!==null&&e.remove(c.index);for(const p in c.attributes)e.remove(c.attributes[p]);c.removeEventListener("dispose",s),delete r[c.id];const X=o.get(c);X&&(e.remove(X),o.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function a(d,c){return r[c.id]===!0||(c.addEventListener("dispose",s),r[c.id]=!0,t.memory.geometries++),c}function l(d){const c=d.attributes;for(const p in c)e.update(c[p],34962);const X=d.morphAttributes;for(const p in X){const f=X[p];for(let Z=0,Y=f.length;Z<Y;Z++)e.update(f[Z],34962)}}function u(d){const c=[],X=d.index,p=d.attributes.position;let f=0;if(X!==null){const m=X.array;f=X.version;for(let g=0,y=m.length;g<y;g+=3){const P=m[g+0],w=m[g+1],T=m[g+2];c.push(P,w,w,T,T,P)}}else{const m=p.array;f=p.version;for(let g=0,y=m.length/3-1;g<y;g+=3){const P=g+0,w=g+1,T=g+2;c.push(P,w,w,T,T,P)}}const Z=new(Au(c)?Fu:zu)(c,1);Z.version=f;const Y=o.get(d);Y&&e.remove(Y),o.set(d,Z)}function h(d){const c=o.get(d);if(c){const X=d.index;X!==null&&c.version<X.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function gp(n,e,t,i){const r=i.isWebGL2;let o;function s(c){o=c}let a,l;function u(c){a=c.type,l=c.bytesPerElement}function h(c,X){n.drawElements(o,X,a,c*l),t.update(X,o,1)}function d(c,X,p){if(p===0)return;let f,Z;if(r)f=n,Z="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),Z="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[Z](o,X,a,c*l,p),t.update(X,o,p)}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=d}function yp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(o/3);break;case 1:t.lines+=a*(o/2);break;case 3:t.lines+=a*(o-1);break;case 2:t.lines+=a*o;break;case 0:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vp(n,e){return n[0]-e[0]}function Pp(n,e){return Math.abs(e[1])-Math.abs(n[1])}function _p(n,e,t){const i={},r=new Float32Array(8),o=new WeakMap,s=new I1,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,h,d,c){const X=u.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,Z=f!==void 0?f.length:0;let Y=o.get(h);if(Y===void 0||Y.count!==Z){let t0=function(){R.dispose(),o.delete(h),h.removeEventListener("dispose",t0)};var p=t0;Y!==void 0&&Y.texture.dispose();const y=h.morphAttributes.position!==void 0,P=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],M=h.morphAttributes.color||[];let I=0;y===!0&&(I=1),P===!0&&(I=2),w===!0&&(I=3);let e0=h.attributes.position.count*I,X0=1;e0>e.maxTextureSize&&(X0=Math.ceil(e0/e.maxTextureSize),e0=e.maxTextureSize);const z=new Float32Array(e0*X0*4*Z),R=new ku(z,e0,X0,Z);R.type=D8,R.needsUpdate=!0;const W=I*4;for(let r0=0;r0<Z;r0++){const A=T[r0],b=v[r0],L=M[r0],J=e0*X0*4*r0;for(let K=0;K<A.count;K++){const i0=K*W;y===!0&&(s.fromBufferAttribute(A,K),z[J+i0+0]=s.x,z[J+i0+1]=s.y,z[J+i0+2]=s.z,z[J+i0+3]=0),P===!0&&(s.fromBufferAttribute(b,K),z[J+i0+4]=s.x,z[J+i0+5]=s.y,z[J+i0+6]=s.z,z[J+i0+7]=0),w===!0&&(s.fromBufferAttribute(L,K),z[J+i0+8]=s.x,z[J+i0+9]=s.y,z[J+i0+10]=s.z,z[J+i0+11]=L.itemSize===4?s.w:1)}}Y={count:Z,texture:R,size:new v0(e0,X0)},o.set(h,Y),h.addEventListener("dispose",t0)}let m=0;for(let y=0;y<X.length;y++)m+=X[y];const g=h.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",X),c.getUniforms().setValue(n,"morphTargetsTexture",Y.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",Y.size)}else{const f=X===void 0?0:X.length;let Z=i[h.id];if(Z===void 0||Z.length!==f){Z=[];for(let P=0;P<f;P++)Z[P]=[P,0];i[h.id]=Z}for(let P=0;P<f;P++){const w=Z[P];w[0]=P,w[1]=X[P]}Z.sort(Pp);for(let P=0;P<8;P++)P<f&&Z[P][1]?(a[P][0]=Z[P][0],a[P][1]=Z[P][1]):(a[P][0]=Number.MAX_SAFE_INTEGER,a[P][1]=0);a.sort(vp);const Y=h.morphAttributes.position,m=h.morphAttributes.normal;let g=0;for(let P=0;P<8;P++){const w=a[P],T=w[0],v=w[1];T!==Number.MAX_SAFE_INTEGER&&v?(Y&&h.getAttribute("morphTarget"+P)!==Y[T]&&h.setAttribute("morphTarget"+P,Y[T]),m&&h.getAttribute("morphNormal"+P)!==m[T]&&h.setAttribute("morphNormal"+P,m[T]),r[P]=v,g+=v):(Y&&h.hasAttribute("morphTarget"+P)===!0&&h.deleteAttribute("morphTarget"+P),m&&h.hasAttribute("morphNormal"+P)===!0&&h.deleteAttribute("morphNormal"+P),r[P]=0)}const y=h.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function xp(n,e,t,i){let r=new WeakMap;function o(l){const u=i.render.frame,h=l.geometry,d=e.get(l,h);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:s}}const Gu=new $2,Hu=new ku,Wu=new dZ,$u=new ju,vs=[],Ps=[],_s=new Float32Array(16),xs=new Float32Array(9),Ss=new Float32Array(4);function Z9(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=vs[r];if(o===void 0&&(o=new Float32Array(r),vs[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function e2(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function t2(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ie(n,e){let t=Ps[e];t===void 0&&(t=new Int32Array(e),Ps[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Sp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Cp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(e2(t,e))return;n.uniform2fv(this.addr,e),t2(t,e)}}function wp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(e2(t,e))return;n.uniform3fv(this.addr,e),t2(t,e)}}function Mp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(e2(t,e))return;n.uniform4fv(this.addr,e),t2(t,e)}}function Tp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(e2(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),t2(t,e)}else{if(e2(t,i))return;Ss.set(i),n.uniformMatrix2fv(this.addr,!1,Ss),t2(t,i)}}function Ep(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(e2(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),t2(t,e)}else{if(e2(t,i))return;xs.set(i),n.uniformMatrix3fv(this.addr,!1,xs),t2(t,i)}}function bp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(e2(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),t2(t,e)}else{if(e2(t,i))return;_s.set(i),n.uniformMatrix4fv(this.addr,!1,_s),t2(t,i)}}function Dp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ip(n,e){const t=this.cache;e2(t,e)||(n.uniform2iv(this.addr,e),t2(t,e))}function Ap(n,e){const t=this.cache;e2(t,e)||(n.uniform3iv(this.addr,e),t2(t,e))}function Lp(n,e){const t=this.cache;e2(t,e)||(n.uniform4iv(this.addr,e),t2(t,e))}function Rp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Np(n,e){const t=this.cache;e2(t,e)||(n.uniform2uiv(this.addr,e),t2(t,e))}function kp(n,e){const t=this.cache;e2(t,e)||(n.uniform3uiv(this.addr,e),t2(t,e))}function Op(n,e){const t=this.cache;e2(t,e)||(n.uniform4uiv(this.addr,e),t2(t,e))}function zp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Gu,r)}function Fp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wu,r)}function Up(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||$u,r)}function jp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Hu,r)}function Bp(n){switch(n){case 5126:return Sp;case 35664:return Cp;case 35665:return wp;case 35666:return Mp;case 35674:return Tp;case 35675:return Ep;case 35676:return bp;case 5124:case 35670:return Dp;case 35667:case 35671:return Ip;case 35668:case 35672:return Ap;case 35669:case 35673:return Lp;case 5125:return Rp;case 36294:return Np;case 36295:return kp;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return jp}}function Vp(n,e){n.uniform1fv(this.addr,e)}function Gp(n,e){const t=Z9(e,this.size,2);n.uniform2fv(this.addr,t)}function Hp(n,e){const t=Z9(e,this.size,3);n.uniform3fv(this.addr,t)}function Wp(n,e){const t=Z9(e,this.size,4);n.uniform4fv(this.addr,t)}function $p(n,e){const t=Z9(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qp(n,e){const t=Z9(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Jp(n,e){const t=Z9(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Kp(n,e){n.uniform1iv(this.addr,e)}function Qp(n,e){n.uniform2iv(this.addr,e)}function eg(n,e){n.uniform3iv(this.addr,e)}function tg(n,e){n.uniform4iv(this.addr,e)}function ng(n,e){n.uniform1uiv(this.addr,e)}function ig(n,e){n.uniform2uiv(this.addr,e)}function rg(n,e){n.uniform3uiv(this.addr,e)}function og(n,e){n.uniform4uiv(this.addr,e)}function sg(n,e,t){const i=e.length,r=ie(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Gu,r[o])}function ag(n,e,t){const i=e.length,r=ie(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Wu,r[o])}function lg(n,e,t){const i=e.length,r=ie(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTextureCube(e[o]||$u,r[o])}function ug(n,e,t){const i=e.length,r=ie(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Hu,r[o])}function cg(n){switch(n){case 5126:return Vp;case 35664:return Gp;case 35665:return Hp;case 35666:return Wp;case 35674:return $p;case 35675:return qp;case 35676:return Jp;case 5124:case 35670:return Kp;case 35667:case 35671:return Qp;case 35668:case 35672:return eg;case 35669:case 35673:return tg;case 5125:return ng;case 36294:return ig;case 36295:return rg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return ug}}class hg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Bp(t.type)}}class dg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=cg(t.type)}}class fg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],i)}}}const pt=/(\w+)(\])?(\[|\.)?/g;function Cs(n,e){n.seq.push(e),n.map[e.id]=e}function Xg(n,e,t){const i=n.name,r=i.length;for(pt.lastIndex=0;;){const o=pt.exec(i),s=pt.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){Cs(t,u===void 0?new hg(a,n,e):new dg(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new fg(a),Cs(t,d)),t=d}}}class W4{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);Xg(o,s,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function ws(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Zg=0;function Yg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}function mg(n){switch(n){case G8:return["Linear","( value )"];case Z1:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Ms(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Yg(n.getShaderSource(e),s)}else return r}function pg(n,e){const t=mg(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function gg(n,e){let t;switch(e){case OX:t="Linear";break;case zX:t="Reinhard";break;case FX:t="OptimizedCineon";break;case UX:t="ACESFilmic";break;case jX:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yg(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(N9).join(`
`)}function vg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Pg(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),s=o.name;let a=1;o.type===35674&&(a=2),o.type===35675&&(a=3),o.type===35676&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function N9(n){return n!==""}function Ts(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Es(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _g=/^[ \t]*#include +<([\w\d./]+)>/gm;function En(n){return n.replace(_g,xg)}function xg(n,e){const t=j0[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return En(t)}const Sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bs(n){return n.replace(Sg,Cg)}function Cg(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Ds(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mX?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===R9&&(e="SHADOWMAP_TYPE_VSM"),e}function Mg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case r9:case o9:e="ENVMAP_TYPE_CUBE";break;case ee:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case o9:e="ENVMAP_MODE_REFRACTION";break}return e}function Eg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Eu:e="ENVMAP_BLENDING_MULTIPLY";break;case NX:e="ENVMAP_BLENDING_MIX";break;case kX:e="ENVMAP_BLENDING_ADD";break}return e}function bg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Dg(n,e,t,i){const r=n.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=wg(t),u=Mg(t),h=Tg(t),d=Eg(t),c=bg(t),X=t.isWebGL2?"":yg(t),p=vg(o),f=r.createProgram();let Z,Y,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(Z=[p].filter(N9).join(`
`),Z.length>0&&(Z+=`
`),Y=[X,p].filter(N9).join(`
`),Y.length>0&&(Y+=`
`)):(Z=[Ds(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(N9).join(`
`),Y=[X,Ds(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==M5?"#define TONE_MAPPING":"",t.toneMapping!==M5?j0.tonemapping_pars_fragment:"",t.toneMapping!==M5?gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",j0.encodings_pars_fragment,pg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(N9).join(`
`)),s=En(s),s=Ts(s,t),s=Es(s,t),a=En(a),a=Ts(a,t),a=Es(a,t),s=bs(s),a=bs(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,Z=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+Z,Y=["#define varying in",t.glslVersion===es?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===es?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+Y);const g=m+Z+s,y=m+Y+a,P=ws(r,35633,g),w=ws(r,35632,y);if(r.attachShader(f,P),r.attachShader(f,w),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(f).trim(),I=r.getShaderInfoLog(P).trim(),e0=r.getShaderInfoLog(w).trim();let X0=!0,z=!0;if(r.getProgramParameter(f,35714)===!1){X0=!1;const R=Ms(r,P,"vertex"),W=Ms(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,35715)+`

Program Info Log: `+M+`
`+R+`
`+W)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(I===""||e0==="")&&(z=!1);z&&(this.diagnostics={runnable:X0,programLog:M,vertexShader:{log:I,prefix:Z},fragmentShader:{log:e0,prefix:Y}})}r.deleteShader(P),r.deleteShader(w);let T;this.getUniforms=function(){return T===void 0&&(T=new W4(r,f)),T};let v;return this.getAttributes=function(){return v===void 0&&(v=Pg(r,f)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=Zg++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=P,this.fragmentShader=w,this}let Ig=0;class Ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Lg(e),t.set(e,i)),i}}class Lg{constructor(e){this.id=Ig++,this.code=e,this.usedTimes=0}}function Rg(n,e,t,i,r,o,s){const a=new Ou,l=new Ag,u=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,c=r.vertexTextures;let X=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v,M,I,e0,X0){const z=e0.fog,R=X0.geometry,W=v.isMeshStandardMaterial?e0.environment:null,t0=(v.isMeshStandardMaterial?t:e).get(v.envMap||W),r0=!!t0&&t0.mapping===ee?t0.image.height:null,A=p[v.type];v.precision!==null&&(X=r.getMaxPrecision(v.precision),X!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",X,"instead."));const b=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,L=b!==void 0?b.length:0;let J=0;R.morphAttributes.position!==void 0&&(J=1),R.morphAttributes.normal!==void 0&&(J=2),R.morphAttributes.color!==void 0&&(J=3);let K,i0,Y0,S0;if(A){const K0=n5[A];K=K0.vertexShader,i0=K0.fragmentShader}else K=v.vertexShader,i0=v.fragmentShader,l.update(v),Y0=l.getVertexShaderID(v),S0=l.getFragmentShaderID(v);const B=n.getRenderTarget(),N0=v.alphaTest>0,T0=v.clearcoat>0,E0=v.iridescence>0;return{isWebGL2:h,shaderID:A,shaderName:v.type,vertexShader:K,fragmentShader:i0,defines:v.defines,customVertexShaderID:Y0,customFragmentShaderID:S0,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:X,instancing:X0.isInstancedMesh===!0,instancingColor:X0.isInstancedMesh===!0&&X0.instanceColor!==null,supportsVertexTextures:c,outputEncoding:B===null?n.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:G8,map:!!v.map,matcap:!!v.matcap,envMap:!!t0,envMapMode:t0&&t0.mapping,envMapCubeUVHeight:r0,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===lZ,tangentSpaceNormalMap:v.normalMapType===Iu,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Z1,clearcoat:T0,clearcoatMap:T0&&!!v.clearcoatMap,clearcoatRoughnessMap:T0&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:T0&&!!v.clearcoatNormalMap,iridescence:E0,iridescenceMap:E0&&!!v.iridescenceMap,iridescenceThicknessMap:E0&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===H3,alphaMap:!!v.alphaMap,alphaTest:N0,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!R.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!z,useFog:v.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:d,skinning:X0.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:J,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:v.toneMapped?n.toneMapping:M5,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===x5,flipSided:v.side===b2,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function Z(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)M.push(I),M.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(Y(M,v),m(M,v),M.push(n.outputEncoding)),M.push(v.customProgramCacheKey),M.join()}function Y(v,M){v.push(M.precision),v.push(M.outputEncoding),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.combine),v.push(M.vertexUvs),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function m(v,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.map&&a.enable(4),M.matcap&&a.enable(5),M.envMap&&a.enable(6),M.lightMap&&a.enable(7),M.aoMap&&a.enable(8),M.emissiveMap&&a.enable(9),M.bumpMap&&a.enable(10),M.normalMap&&a.enable(11),M.objectSpaceNormalMap&&a.enable(12),M.tangentSpaceNormalMap&&a.enable(13),M.clearcoat&&a.enable(14),M.clearcoatMap&&a.enable(15),M.clearcoatRoughnessMap&&a.enable(16),M.clearcoatNormalMap&&a.enable(17),M.iridescence&&a.enable(18),M.iridescenceMap&&a.enable(19),M.iridescenceThicknessMap&&a.enable(20),M.displacementMap&&a.enable(21),M.specularMap&&a.enable(22),M.roughnessMap&&a.enable(23),M.metalnessMap&&a.enable(24),M.gradientMap&&a.enable(25),M.alphaMap&&a.enable(26),M.alphaTest&&a.enable(27),M.vertexColors&&a.enable(28),M.vertexAlphas&&a.enable(29),M.vertexUvs&&a.enable(30),M.vertexTangents&&a.enable(31),M.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.physicallyCorrectLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.specularIntensityMap&&a.enable(15),M.specularColorMap&&a.enable(16),M.transmission&&a.enable(17),M.transmissionMap&&a.enable(18),M.thicknessMap&&a.enable(19),M.sheen&&a.enable(20),M.sheenColorMap&&a.enable(21),M.sheenRoughnessMap&&a.enable(22),M.decodeVideoTexture&&a.enable(23),M.opaque&&a.enable(24),v.push(a.mask)}function g(v){const M=p[v.type];let I;if(M){const e0=n5[M];I=xZ.clone(e0.uniforms)}else I=v.uniforms;return I}function y(v,M){let I;for(let e0=0,X0=u.length;e0<X0;e0++){const z=u[e0];if(z.cacheKey===M){I=z,++I.usedTimes;break}}return I===void 0&&(I=new Dg(n,M,v,o),u.push(I)),I}function P(v){if(--v.usedTimes===0){const M=u.indexOf(v);u[M]=u[u.length-1],u.pop(),v.destroy()}}function w(v){l.remove(v)}function T(){l.dispose()}return{getParameters:f,getProgramCacheKey:Z,getUniforms:g,acquireProgram:y,releaseProgram:P,releaseShaderCache:w,programs:u,dispose:T}}function Ng(){let n=new WeakMap;function e(o){let s=n.get(o);return s===void 0&&(s={},n.set(o,s)),s}function t(o){n.delete(o)}function i(o,s,a){n.get(o)[s]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function kg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Is(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function As(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(d,c,X,p,f,Z){let Y=n[e];return Y===void 0?(Y={id:d.id,object:d,geometry:c,material:X,groupOrder:p,renderOrder:d.renderOrder,z:f,group:Z},n[e]=Y):(Y.id=d.id,Y.object=d,Y.geometry=c,Y.material=X,Y.groupOrder=p,Y.renderOrder=d.renderOrder,Y.z=f,Y.group=Z),e++,Y}function a(d,c,X,p,f,Z){const Y=s(d,c,X,p,f,Z);X.transmission>0?i.push(Y):X.transparent===!0?r.push(Y):t.push(Y)}function l(d,c,X,p,f,Z){const Y=s(d,c,X,p,f,Z);X.transmission>0?i.unshift(Y):X.transparent===!0?r.unshift(Y):t.unshift(Y)}function u(d,c){t.length>1&&t.sort(d||kg),i.length>1&&i.sort(c||Is),r.length>1&&r.sort(c||Is)}function h(){for(let d=e,c=n.length;d<c;d++){const X=n[d];if(X.id===null)break;X.id=null,X.object=null,X.geometry=null,X.material=null,X.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:h,sort:u}}function Og(){let n=new WeakMap;function e(i,r){const o=n.get(i);let s;return o===void 0?(s=new As,n.set(i,[s])):r>=o.length?(s=new As,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function zg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new e1};break;case"SpotLight":t={position:new D,direction:new D,color:new e1,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new e1,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new e1,groundColor:new e1};break;case"RectAreaLight":t={color:new e1,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Fg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new v0};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new v0};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new v0,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ug=0;function jg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Bg(n,e){const t=new zg,i=Fg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new D);const o=new D,s=new m1,a=new m1;function l(h,d){let c=0,X=0,p=0;for(let e0=0;e0<9;e0++)r.probe[e0].set(0,0,0);let f=0,Z=0,Y=0,m=0,g=0,y=0,P=0,w=0,T=0,v=0;h.sort(jg);const M=d!==!0?Math.PI:1;for(let e0=0,X0=h.length;e0<X0;e0++){const z=h[e0],R=z.color,W=z.intensity,t0=z.distance,r0=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)c+=R.r*W*M,X+=R.g*W*M,p+=R.b*W*M;else if(z.isLightProbe)for(let A=0;A<9;A++)r.probe[A].addScaledVector(z.sh.coefficients[A],W);else if(z.isDirectionalLight){const A=t.get(z);if(A.color.copy(z.color).multiplyScalar(z.intensity*M),z.castShadow){const b=z.shadow,L=i.get(z);L.shadowBias=b.bias,L.shadowNormalBias=b.normalBias,L.shadowRadius=b.radius,L.shadowMapSize=b.mapSize,r.directionalShadow[f]=L,r.directionalShadowMap[f]=r0,r.directionalShadowMatrix[f]=z.shadow.matrix,y++}r.directional[f]=A,f++}else if(z.isSpotLight){const A=t.get(z);A.position.setFromMatrixPosition(z.matrixWorld),A.color.copy(R).multiplyScalar(W*M),A.distance=t0,A.coneCos=Math.cos(z.angle),A.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),A.decay=z.decay,r.spot[Y]=A;const b=z.shadow;if(z.map&&(r.spotLightMap[T]=z.map,T++,b.updateMatrices(z),z.castShadow&&v++),r.spotLightMatrix[Y]=b.matrix,z.castShadow){const L=i.get(z);L.shadowBias=b.bias,L.shadowNormalBias=b.normalBias,L.shadowRadius=b.radius,L.shadowMapSize=b.mapSize,r.spotShadow[Y]=L,r.spotShadowMap[Y]=r0,w++}Y++}else if(z.isRectAreaLight){const A=t.get(z);A.color.copy(R).multiplyScalar(W),A.halfWidth.set(z.width*.5,0,0),A.halfHeight.set(0,z.height*.5,0),r.rectArea[m]=A,m++}else if(z.isPointLight){const A=t.get(z);if(A.color.copy(z.color).multiplyScalar(z.intensity*M),A.distance=z.distance,A.decay=z.decay,z.castShadow){const b=z.shadow,L=i.get(z);L.shadowBias=b.bias,L.shadowNormalBias=b.normalBias,L.shadowRadius=b.radius,L.shadowMapSize=b.mapSize,L.shadowCameraNear=b.camera.near,L.shadowCameraFar=b.camera.far,r.pointShadow[Z]=L,r.pointShadowMap[Z]=r0,r.pointShadowMatrix[Z]=z.shadow.matrix,P++}r.point[Z]=A,Z++}else if(z.isHemisphereLight){const A=t.get(z);A.skyColor.copy(z.color).multiplyScalar(W*M),A.groundColor.copy(z.groundColor).multiplyScalar(W*M),r.hemi[g]=A,g++}}m>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=d0.LTC_FLOAT_1,r.rectAreaLTC2=d0.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=d0.LTC_HALF_1,r.rectAreaLTC2=d0.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=c,r.ambient[1]=X,r.ambient[2]=p;const I=r.hash;(I.directionalLength!==f||I.pointLength!==Z||I.spotLength!==Y||I.rectAreaLength!==m||I.hemiLength!==g||I.numDirectionalShadows!==y||I.numPointShadows!==P||I.numSpotShadows!==w||I.numSpotMaps!==T)&&(r.directional.length=f,r.spot.length=Y,r.rectArea.length=m,r.point.length=Z,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=w+T-v,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=v,I.directionalLength=f,I.pointLength=Z,I.spotLength=Y,I.rectAreaLength=m,I.hemiLength=g,I.numDirectionalShadows=y,I.numPointShadows=P,I.numSpotShadows=w,I.numSpotMaps=T,r.version=Ug++)}function u(h,d){let c=0,X=0,p=0,f=0,Z=0;const Y=d.matrixWorldInverse;for(let m=0,g=h.length;m<g;m++){const y=h[m];if(y.isDirectionalLight){const P=r.directional[c];P.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(Y),c++}else if(y.isSpotLight){const P=r.spot[p];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(Y),P.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(Y),p++}else if(y.isRectAreaLight){const P=r.rectArea[f];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(Y),a.identity(),s.copy(y.matrixWorld),s.premultiply(Y),a.extractRotation(s),P.halfWidth.set(y.width*.5,0,0),P.halfHeight.set(0,y.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),f++}else if(y.isPointLight){const P=r.point[X];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(Y),X++}else if(y.isHemisphereLight){const P=r.hemi[Z];P.direction.setFromMatrixPosition(y.matrixWorld),P.direction.transformDirection(Y),Z++}}}return{setup:l,setupView:u,state:r}}function Ls(n,e){const t=new Bg(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function Vg(n,e){let t=new WeakMap;function i(o,s=0){const a=t.get(o);let l;return a===void 0?(l=new Ls(n,e),t.set(o,[l])):s>=a.length?(l=new Ls(n,e),a.push(l)):l=a[s],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Gg extends n3{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sZ,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hg extends n3{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );