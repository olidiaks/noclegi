"use strict";(self.webpackChunknoclegi=self.webpackChunknoclegi||[]).push([[612],{612:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r=t(8683),a=t(4165),o=t(5861),i=t(885),l=t(2336),c=t(2791);function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e){if(!("string"===typeof e||e instanceof String)){var n=s(e);throw null===e?n="null":"object"===n&&(n=e.constructor.name),new TypeError("Expected a string but received a ".concat(n))}}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;for(var t in n)"undefined"===typeof e[t]&&(e[t]=n[t]);return e}function f(e){return f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function m(e,n){var t,r;u(e),"object"===f(n)?(t=n.min||0,r=n.max):(t=arguments[1],r=arguments[2]);var a=encodeURI(e).split(/%..|./).length-1;return a>=t&&("undefined"===typeof r||a<=r)}var p={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1};var x="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",h="(".concat(x,"[.]){3}").concat(x),g=new RegExp("^".concat(h,"$")),v="(?:[0-9a-fA-F]{1,4})",b=new RegExp("^("+"(?:".concat(v,":){7}(?:").concat(v,"|:)|")+"(?:".concat(v,":){6}(?:").concat(h,"|:").concat(v,"|:)|")+"(?:".concat(v,":){5}(?::").concat(h,"|(:").concat(v,"){1,2}|:)|")+"(?:".concat(v,":){4}(?:(:").concat(v,"){0,1}:").concat(h,"|(:").concat(v,"){1,3}|:)|")+"(?:".concat(v,":){3}(?:(:").concat(v,"){0,2}:").concat(h,"|(:").concat(v,"){1,4}|:)|")+"(?:".concat(v,":){2}(?:(:").concat(v,"){0,3}:").concat(h,"|(:").concat(v,"){1,5}|:)|")+"(?:".concat(v,":){1}(?:(:").concat(v,"){0,4}:").concat(h,"|(:").concat(v,"){1,6}|:)|")+"(?::((?::".concat(v,"){0,5}:").concat(h,"|(?::").concat(v,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function y(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(u(e),!(n=String(n)))return y(e,4)||y(e,6);if("4"===n){if(!g.test(e))return!1;var t=e.split(".").sort((function(e,n){return e-n}));return t[3]<=255}return"6"===n&&!!b.test(e)}var _={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[]},w=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,F=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,C=/^[a-z\d]+$/,j=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,k=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,S=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function N(e,n){if(u(e),(n=d(n,_)).require_display_name||n.allow_display_name){var t=e.match(w);if(t){var r=t[1];if(e=e.replace(r,"").replace(/(^<|>$)/g,""),r.endsWith(" ")&&(r=r.substr(0,r.length-1)),!function(e){var n=e.replace(/^"(.+)"$/,"$1");if(!n.trim())return!1;if(/[\.";<>]/.test(n)){if(n===e)return!1;if(n.split('"').length!==n.split('\\"').length)return!1}return!0}(r))return!1}else if(n.require_display_name)return!1}if(!n.ignore_max_length&&e.length>254)return!1;var a=e.split("@"),o=a.pop(),i=o.toLowerCase();if(n.host_blacklist.includes(i))return!1;var l=a.join("@");if(n.domain_specific_validation&&("gmail.com"===i||"googlemail.com"===i)){var c=(l=l.toLowerCase()).split("+")[0];if(!m(c.replace(/\./g,""),{min:6,max:30}))return!1;for(var s=c.split("."),f=0;f<s.length;f++)if(!C.test(s[f]))return!1}if(!1===n.ignore_max_length&&(!m(l,{max:64})||!m(o,{max:254})))return!1;if(!function(e,n){u(e),(n=d(n,p)).allow_trailing_dot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1)),!0===n.allow_wildcard&&0===e.indexOf("*.")&&(e=e.substring(2));var t=e.split("."),r=t[t.length-1];if(n.require_tld){if(t.length<2)return!1;if(!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(r))return!1;if(/\s/.test(r))return!1}return!(!n.allow_numeric_tld&&/^\d+$/.test(r))&&t.every((function(e){return!(e.length>63)&&!!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e)&&!/[\uff01-\uff5e]/.test(e)&&!/^-|-$/.test(e)&&!(!n.allow_underscores&&/_/.test(e))}))}(o,{require_tld:n.require_tld})){if(!n.allow_ip_domain)return!1;if(!y(o)){if(!o.startsWith("[")||!o.endsWith("]"))return!1;var x=o.substr(1,o.length-2);if(0===x.length||!y(x))return!1}}if('"'===l[0])return l=l.slice(1,l.length-1),n.allow_utf8_local_part?S.test(l):j.test(l);for(var h=n.allow_utf8_local_part?k:F,g=l.split("."),v=0;v<g.length;v++)if(!h.test(g[v]))return!1;return!n.blacklisted_chars||-1===l.search(new RegExp("[".concat(n.blacklisted_chars,"]+"),"g"))}var Z=/^[A-Z]$/,$=/^[a-z]$/,z=/^[0-9]$/,E=/^[-#!$@%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/,q={minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1,returnScore:!1,pointsPerUnique:1,pointsPerRepeat:.5,pointsForContainingLower:10,pointsForContainingUpper:10,pointsForContainingNumber:10,pointsForContainingSymbol:10};function D(e){var n=function(e){var n={};return Array.from(e).forEach((function(e){n[e]?n[e]+=1:n[e]=1})),n}(e),t={length:e.length,uniqueChars:Object.keys(n).length,uppercaseCount:0,lowercaseCount:0,numberCount:0,symbolCount:0};return Object.keys(n).forEach((function(e){Z.test(e)?t.uppercaseCount+=n[e]:$.test(e)?t.lowercaseCount+=n[e]:z.test(e)?t.numberCount+=n[e]:E.test(e)&&(t.symbolCount+=n[e])})),t}function A(e,n){var t=0;return t+=e.uniqueChars*n.pointsPerUnique,t+=(e.length-e.uniqueChars)*n.pointsPerRepeat,e.lowercaseCount>0&&(t+=n.pointsForContainingLower),e.uppercaseCount>0&&(t+=n.pointsForContainingUpper),e.numberCount>0&&(t+=n.pointsForContainingNumber),e.symbolCount>0&&(t+=n.pointsForContainingSymbol),t}function L(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;u(e);var t=D(e);return(n=d(n||{},q)).returnScore?A(t,n):t.length>=n.minLength&&t.lowercaseCount>=n.minLowercase&&t.uppercaseCount>=n.minUppercase&&t.numberCount>=n.minNumbers&&t.symbolCount>=n.minSymbols}var U=t(7834),R=t(7411),T=t(3553),W=t(1364),P=t(184),I=function(){(0,W.Z)("Szczeg\xf3\u0142y profilu | Noclegi");var e=(0,c.useState)({email:!0,password:!1}),n=(0,i.Z)(e,2),t=n[0],s=n[1],u=(0,c.useState)(!1),d=(0,i.Z)(u,2),f=d[0],m=d[1],p=(0,c.useState)(null),x=(0,i.Z)(p,2),h=x[0],g=x[1],v=(0,c.useState)(!1),b=(0,i.Z)(v,2),y=b[0],_=b[1],w=(0,U.Z)(),F=(0,i.Z)(w,2),C=F[0],j=F[1],k=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),_(!0),e.prev=2,e.next=5,R.c.post("accounts:update",{idToken:C.token,email:$,password:D,returnSecureToken:!0});case 5:t=e.sent.data,j({email:t.email,token:t.idToken,userId:t.localId}),g(null),m(!0),setTimeout((function(){return m(!1)}),3e3),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),g((0,T.E)(e.t0.response));case 15:_(!1);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(n){return e.apply(this,arguments)}}(),S=(0,c.useState)(C.email),Z=(0,i.Z)(S,2),$=Z[0],z=Z[1];(0,c.useEffect)((function(){s((0,r.Z)((0,r.Z)({},t),{},{email:N($)}))}),[$]);var E=(0,c.useState)(""),q=(0,i.Z)(E,2),D=q[0],A=q[1];(0,c.useEffect)((function(){s((0,r.Z)((0,r.Z)({},t),{},{password:L(D)}))}),[D]);var I=!t.email||!t.password;return(0,P.jsxs)("div",{children:[f?(0,P.jsx)("div",{className:"alert alert-success",children:"Zmiana danych logowania zako\u0144czy\u0142a si\u0119 sukcesem."}):null,h?(0,P.jsx)("div",{className:"alert alert-danger",children:h}):null,(0,P.jsx)("h2",{children:"Logowanie:"}),(0,P.jsxs)("form",{onSubmit:k,children:[(0,P.jsxs)("div",{className:"row",children:[(0,P.jsxs)("div",{className:"input-group col-12 col-md-6",children:[(0,P.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),(0,P.jsx)("input",{type:"email",name:"email",id:"email",value:$,onChange:function(e){return z(e.target.value)},className:"form-control ".concat(t.email?"is-valid":"is-invalid"),autoComplete:"new-email"}),(0,P.jsx)("div",{className:"invalid-feedback",children:"Niepoprawny email."}),(0,P.jsx)("div",{className:"valid-feedback",children:"Wszystko gra!"})]}),(0,P.jsxs)("div",{className:"col-12 col-md-6 input-group",children:[(0,P.jsx)("label",{htmlFor:"password",className:"form-label",children:"Has\u0142o"}),(0,P.jsx)("input",{type:"password",name:"password",id:"password",value:D,onChange:function(e){return A(e.target.value)},className:"form-control ".concat(t.password?"is-valid":"is-invalid"),autoComplete:"new-password"}),(0,P.jsx)("div",{className:"invalid-feedback",children:(0,P.jsxs)("ul",{className:"text-danger",children:[(0,P.jsx)("li",{children:" Minimum 8 znak\xf3w"}),(0,P.jsx)("li",{children:"Conajmniej jedna ma\u0142a litera"}),(0,P.jsx)("li",{children:"Conajmniej jedna du\u017ca litera"}),(0,P.jsx)("li",{children:"Conajmniej jedna cyfra"}),(0,P.jsx)("li",{children:"Conajmniej jeden znak specjalny"})]})}),(0,P.jsx)("div",{className:"valid-feedback",children:"Wszystko gra!"})]})]}),(0,P.jsx)("div",{className:"col-12",children:(0,P.jsx)(l.Z,{disabled:I,loading:y,label:"Zapisz si\u0119",loadingLabel:"Sprawdzanie poprawno\u015bci danych."})})]})]})}}}]);
//# sourceMappingURL=612.d6cdfacf.chunk.js.map