"use strict";(self.webpackChunknoclegi=self.webpackChunknoclegi||[]).push([[123],{1123:function(e,n,a){a.r(n),a.d(n,{default:function(){return b}});var i=a(8683),s=a(885),o=a(2336),r=a(2791),t=a(1594),l=a(2834),c=a(568),u=/^[A-Z]$/,m=/^[a-z]$/,d=/^[0-9]$/,p=/^[-#!$@%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/,h={minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1,returnScore:!1,pointsPerUnique:1,pointsPerRepeat:.5,pointsForContainingLower:10,pointsForContainingUpper:10,pointsForContainingNumber:10,pointsForContainingSymbol:10};function j(e){var n=function(e){var n={};return Array.from(e).forEach((function(e){n[e]?n[e]+=1:n[e]=1})),n}(e),a={length:e.length,uniqueChars:Object.keys(n).length,uppercaseCount:0,lowercaseCount:0,numberCount:0,symbolCount:0};return Object.keys(n).forEach((function(e){u.test(e)?a.uppercaseCount+=n[e]:m.test(e)?a.lowercaseCount+=n[e]:d.test(e)?a.numberCount+=n[e]:p.test(e)&&(a.symbolCount+=n[e])})),a}function C(e,n){var a=0;return a+=e.uniqueChars*n.pointsPerUnique,a+=(e.length-e.uniqueChars)*n.pointsPerRepeat,e.lowercaseCount>0&&(a+=n.pointsForContainingLower),e.uppercaseCount>0&&(a+=n.pointsForContainingUpper),e.numberCount>0&&(a+=n.pointsForContainingNumber),e.symbolCount>0&&(a+=n.pointsForContainingSymbol),a}function f(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;(0,c.Z)(e);var a=j(e);return(n=(0,l.Z)(n||{},h)).returnScore?C(a,n):a.length>=n.minLength&&a.lowercaseCount>=n.minLowercase&&a.uppercaseCount>=n.minUppercase&&a.numberCount>=n.minNumbers&&a.symbolCount>=n.minSymbols}var v=a(184),b=function(){var e=(0,r.useState)({email:!0,password:!1}),n=(0,s.Z)(e,2),a=n[0],l=n[1],c=(0,r.useState)(!1),u=(0,s.Z)(c,2),m=u[0],d=u[1],p=(0,r.useState)("przyk\u0142adowy@email.pl"),h=(0,s.Z)(p,2),j=h[0],C=h[1];(0,r.useEffect)((function(){l((0,i.Z)((0,i.Z)({},a),{},{email:(0,t.Z)(j)}))}),[j]);var b=(0,r.useState)(""),g=(0,s.Z)(b,2),w=g[0],x=g[1];(0,r.useEffect)((function(){l((0,i.Z)((0,i.Z)({},a),{},{password:f(w)}))}),[w]);var y=!a.email||!a.password;return(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:"Logowanie:"}),(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d(!0),setTimeout((function(){d(!1)}),500)},children:[(0,v.jsxs)("div",{className:"row",children:[(0,v.jsxs)("div",{className:"input-group col-12 col-md-6",children:[(0,v.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),(0,v.jsx)("input",{type:"email",name:"email",id:"email",value:j,onChange:function(e){return C(e.target.value)},className:"form-control ".concat(a.email?"is-valid":"is-invalid"),autoComplete:"new-email"}),(0,v.jsx)("div",{className:"invalid-feedback",children:"Niepoprawny email."}),(0,v.jsx)("div",{className:"valid-feedback",children:"Wszystko gra!"})]}),(0,v.jsxs)("div",{className:"col-12 col-md-6 input-group",children:[(0,v.jsx)("label",{htmlFor:"password",className:"form-label",children:"Has\u0142o"}),(0,v.jsx)("input",{type:"password",name:"password",id:"password",value:w,onChange:function(e){return x(e.target.value)},className:"form-control ".concat(a.password?"is-valid":"is-invalid"),autoComplete:"new-password"}),(0,v.jsx)("div",{className:"invalid-feedback",children:(0,v.jsxs)("ul",{className:"text-danger",children:[(0,v.jsx)("li",{children:" Minimum 8 znak\xf3w"}),(0,v.jsx)("li",{children:"Conajmniej jedna ma\u0142a litera"}),(0,v.jsx)("li",{children:"Conajmniej jedna du\u017ca litera"}),(0,v.jsx)("li",{children:"Conajmniej jedna cyfra"}),(0,v.jsx)("li",{children:"Conajmniej jeden znak specjalny"})]})}),(0,v.jsx)("div",{className:"valid-feedback",children:"Wszystko gra!"})]})]}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)(o.Z,{disabled:y,loading:m,label:"Zapisz si\u0119",loadingLabel:"Sprawdzanie poprawno\u015bci danych."})})]})]})}}}]);
//# sourceMappingURL=123.f961dc00.chunk.js.map