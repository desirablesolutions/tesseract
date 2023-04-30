"use strict";var y=require("react");function v(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var O=v(y),c={exports:{}},l={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;function m(r){if(r==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function _(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de",Object.getOwnPropertyNames(r)[0]==="5")return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(e).map(function(a){return e[a]});if(n.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(a){o[a]=a}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}_();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=O.default,p=60103;l.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var i=Symbol.for;p=i("react.element"),l.Fragment=i("react.fragment")}var h=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function b(r,e,t){var n,o={},a=null,f=null;t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(f=e.ref);for(n in e)w.call(e,n)&&!P.hasOwnProperty(n)&&(o[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)o[n]===void 0&&(o[n]=e[n]);return{$$typeof:p,type:r,key:a,ref:f,props:o,_owner:h.current}}l.jsx=b;l.jsxs=b;c.exports=l;const S=c.exports.jsx;function x(r){return S("h1",{children:"Hello World"})}function E(){}var N=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),R={presets:N,NavBar:x};module.exports=R;
//# sourceMappingURL=t4-navbar-react.cjs.js.map
