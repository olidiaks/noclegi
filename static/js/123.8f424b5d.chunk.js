"use strict";(self.webpackChunknoclegi=self.webpackChunknoclegi||[]).push([[123],{1123:function(e,n,a){a.r(n),a.d(n,{default:function(){return y}});var s=a(8683),i=a(4165),r=a(5861),t=a(885),o=a(2336),l=a(2791),c=a(1594),u=a(2834),d=a(568),m=/^[A-Z]$/,p=/^[a-z]$/,h=/^[0-9]$/,f=/^[-#!$@%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/,v={minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1,returnScore:!1,pointsPerUnique:1,pointsPerRepeat:.5,pointsForContainingLower:10,pointsForContainingUpper:10,pointsForContainingNumber:10,pointsForContainingSymbol:10};function j(e){var n=function(e){var n={};return Array.from(e).forEach((function(e){n[e]?n[e]+=1:n[e]=1})),n}(e),a={length:e.length,uniqueChars:Object.keys(n).length,uppercaseCount:0,lowercaseCount:0,numberCount:0,symbolCount:0};return Object.keys(n).forEach((function(e){m.test(e)?a.uppercaseCount+=n[e]:p.test(e)?a.lowercaseCount+=n[e]:h.test(e)?a.numberCount+=n[e]:f.test(e)&&(a.symbolCount+=n[e])})),a}function C(e,n){var a=0;return a+=e.uniqueChars*n.pointsPerUnique,a+=(e.length-e.uniqueChars)*n.pointsPerRepeat,e.lowercaseCount>0&&(a+=n.pointsForContainingLower),e.uppercaseCount>0&&(a+=n.pointsForContainingUpper),e.numberCount>0&&(a+=n.pointsForContainingNumber),e.symbolCount>0&&(a+=n.pointsForContainingSymbol),a}function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;(0,d.Z)(e);var a=j(e);return(n=(0,u.Z)(n||{},v)).returnScore?C(a,n):a.length>=n.minLength&&a.lowercaseCount>=n.minLowercase&&a.uppercaseCount>=n.minUppercase&&a.numberCount>=n.minNumbers&&a.symbolCount>=n.minSymbols}var g=a(7834),w=a(7411),x=a(3553),k=a(184),y=function(){var e=(0,l.useState)({email:!0,password:!1}),n=(0,t.Z)(e,2),a=n[0],u=n[1],d=(0,l.useState)(!1),m=(0,t.Z)(d,2),p=m[0],h=m[1],f=(0,l.useState)(null),v=(0,t.Z)(f,2),j=v[0],C=v[1],y=(0,l.useState)(!1),Z=(0,t.Z)(y,2),N=Z[0],S=Z[1],F=(0,g.Z)(),z=(0,t.Z)(F,2),L=z[0],E=z[1],U=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),S(!0),e.prev=2,e.next=5,w.c.post("accounts:update",{idToken:L.token,email:P,password:O,returnSecureToken:!0});case 5:a=e.sent.data,E({email:a.email,token:a.idToken,userId:a.localId}),C(null),h(!0),setTimeout((function(){return h(!1)}),3e3),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),C((0,x.E)(e.t0.response));case 15:S(!1);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(n){return e.apply(this,arguments)}}(),q=(0,l.useState)(L.email),$=(0,t.Z)(q,2),P=$[0],T=$[1];(0,l.useEffect)((function(){u((0,s.Z)((0,s.Z)({},a),{},{email:(0,c.Z)(P)}))}),[P]);var A=(0,l.useState)(""),I=(0,t.Z)(A,2),O=I[0],R=I[1];(0,l.useEffect)((function(){u((0,s.Z)((0,s.Z)({},a),{},{password:b(O)}))}),[O]);var W=!a.email||!a.password;return(0,k.jsxs)("div",{children:[p?(0,k.jsx)("div",{className:"alert alert-success",children:"Zmiana danych logowania zako\u0144czy\u0142a si\u0119 sukcesem."}):null,j?(0,k.jsx)("div",{className:"alert alert-danger",children:j}):null,(0,k.jsx)("h2",{children:"Logowanie:"}),(0,k.jsxs)("form",{onSubmit:U,children:[(0,k.jsxs)("div",{className:"row",children:[(0,k.jsxs)("div",{className:"input-group col-12 col-md-6",children:[(0,k.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),(0,k.jsx)("input",{type:"email",name:"email",id:"email",value:P,onChange:function(e){return T(e.target.value)},className:"form-control ".concat(a.email?"is-valid":"is-invalid"),autoComplete:"new-email"}),(0,k.jsx)("div",{className:"invalid-feedback",children:"Niepoprawny email."}),(0,k.jsx)("div",{className:"valid-feedback",children:"Wszystko gra!"})]}),(0,k.jsxs)("div",{className:"col-12 col-md-6 input-group",children:[(0,k.jsx)("label",{htmlFor:"password",className:"form-label",children:"Has\u0142o"}),(0,k.jsx)("input",{type:"password",name:"password",id:"password",value:O,onChange:function(e){return R(e.target.value)},className:"form-control ".concat(a.password?"is-valid":"is-invalid"),autoComplete:"new-password"}),(0,k.jsx)("div",{className:"invalid-feedback",children:(0,k.jsxs)("ul",{className:"text-danger",children:[(0,k.jsx)("li",{children:" Minimum 8 znak\xf3w"}),(0,k.jsx)("li",{children:"Conajmniej jedna ma\u0142a litera"}),(0,k.jsx)("li",{children:"Conajmniej jedna du\u017ca litera"}),(0,k.jsx)("li",{children:"Conajmniej jedna cyfra"}),(0,k.jsx)("li",{children:"Conajmniej jeden znak specjalny"})]})}),(0,k.jsx)("div",{className:"valid-feedback",children:"Wszystko gra!"})]})]}),(0,k.jsx)("div",{className:"col-12",children:(0,k.jsx)(o.Z,{disabled:W,loading:N,label:"Zapisz si\u0119",loadingLabel:"Sprawdzanie poprawno\u015bci danych."})})]})]})}}}]);
//# sourceMappingURL=123.8f424b5d.chunk.js.map