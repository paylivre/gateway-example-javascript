(this["webpackJsonpmerchant-example-react-js"]=this["webpackJsonpmerchant-example-react-js"]||[]).push([[0],{148:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var a,c,r,i,l,o,s,u=n(0),j=n.n(u),b=n(30),d=n.n(b),h=n(33),O=n(193),x=n(48),f=n.n(x),p=n(17),m=n(61),g=n(7),v=n(201),y=n(5),w=n(191),k=n(15),C=n(19),S=C.a.div(a||(a=Object(k.a)(["\n  width: 45%;\n  height: auto;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 20px 20px 20px;\n  background-color: #ffffff;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  @media (max-width: 930px) {\n    width: 100%;\n  }\n"]))),_=C.a.div(c||(c=Object(k.a)(["\n  width: 100%;\n  height: ",";\n"])),(function(e){var t=e.height;return t?"".concat(t,"px"):0})),L=C.a.div(r||(r=Object(k.a)(["\n  width: 100%;\n  flex-direction: row;\n  height: auto;\n"]))),P=C.a.h2(i||(i=Object(k.a)(['\n  font-size: 18px;\n  color: grey;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n']))),R=C.a.div(l||(l=Object(k.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: auto;\n  @media (max-width: 930px) {\n    flex-direction: column;\n  }\n"]))),T=C.a.div(o||(o=Object(k.a)(["\n  width: ",";\n  flex-direction: row;\n  height: auto;\n  @media (max-width: 930px) {\n    flex-direction: column;\n  }\n"])),(function(e){var t=e.widthPercent;return t?"".concat(t,"%"):"100%"})),I=n(194),U=Object(C.a)(I.a)(s||(s=Object(k.a)(["\n  width: 100%;\n"]))),E=n(1);var V=function(e){var t=e.label,n=e.value,a=e.setValue;return Object(E.jsx)(U,{value:n,id:"outlined-basic",label:t,size:"small",variant:"outlined",onChange:function(e){return a(e.target.value)}})},B=n(66),N=n(4),A=n(99),D=n(192),G=n(195),F=n(196),W=["defaultCheckedValue"],J=Object(N.a)((function(e){return Object(E.jsx)(G.a,Object(p.a)({},e))}))((function(e){var t=e.theme;return{".MuiFormControlLabel-label":e.checked&&{color:t.palette.primary.main}}}));function M(e){var t=e.defaultCheckedValue,n=Object(B.a)(e,W),a=!1;return Object(A.a)()&&(a=t===n.value),Object(E.jsx)(J,Object(p.a)({checked:a},n))}function X(e){var t=e.labelGroup,n=e.checkData,a=void 0===n?[]:n,c=e.defaultCheckedValue,r=e.setChecked,i=e.direction||"row";return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(w.a,{style:{userSelect:"none",marginTop:-13},component:"legend",children:t}),Object(E.jsx)(D.a,{defaultValue:"first",name:"use-radio-group",onChange:function(e){return r(e.target.value)},style:{flexDirection:i},children:a.map((function(e){return Object(E.jsx)(M,{defaultCheckedValue:c,value:e.value,label:e.label,control:Object(E.jsx)(F.a,{})},e.value)}))})]})}var z=n(202),q=n(160),K=n(198);function Z(e){var t=e.isChecked,n=e.setChecked,a=e.label;return Object(E.jsx)(z.a,{sx:{m:0,mr:3},component:"fieldset",variant:"standard",children:Object(E.jsx)(q.a,{children:Object(E.jsx)(G.a,{style:{userSelect:"none"},label:a||"",control:Object(E.jsx)(K.a,{checked:t,onChange:function(e){return n(e.target.checked)},name:"gilad"})})})})}var H={WIRETRANFER:0,BILLET:1,PIX:4,WALLET:5};var Q="0",Y="2",$="3",ee=n(199);function te(){return Object(ee.a)().replace(/-/g,"").substring(0,10)}function ne(){return Object(ee.a)().replace(/-/g,"").substring(0,6)}var ae,ce,re=function(e){var t,n=e.setData,a=e.setGateway_token,c=e.gateway_token,r=e.setUrlGenerated,i=e.base_url,l=e.setBaseUrl,o=e.typeFormSelected,s=j.a.useState("19"),b=Object(g.a)(s,2),d=b[0],h=b[1],O=j.a.useState(te()),x=Object(g.a)(O,2),f=x[0],m=x[1],k=j.a.useState("person_user_gateway@test.com"),C=Object(g.a)(k,2),I=C[0],U=C[1],B=j.a.useState("60712326006"),N=Object(g.a)(B,2),A=N[0],D=N[1],G=j.a.useState(ne()),F=Object(g.a)(G,2),W=F[0],J=F[1],M=j.a.useState("BRL"),z=Object(g.a)(M,2),q=z[0],K=z[1],ee=j.a.useState("0"),ae=Object(g.a)(ee,2),ce=ae[0],re=ae[1],ie=j.a.useState("500"),le=Object(g.a)(ie,2),oe=le[0],se=le[1],ue=j.a.useState("https://www.merchant.com"),je=Object(g.a)(ue,2),be=je[0],de=je[1],he=j.a.useState("https://www.merchant_to_you.com"),Oe=Object(g.a)(he,2),xe=Oe[0],fe=Oe[1],pe=j.a.useState((t={},Object(y.a)(t,H.WIRETRANFER,!1),Object(y.a)(t,H.BILLET,!1),Object(y.a)(t,H.PIX,!0),Object(y.a)(t,H.WALLET,!1),t)),me=Object(g.a)(pe,2),ge=me[0],ve=me[1],ye=j.a.useState("1"),we=Object(g.a)(ye,2),ke=we[0],Ce=we[1],Se=j.a.useState("4"),_e=Object(g.a)(Se,2),Le=_e[0],Pe=_e[1],Re=j.a.useState([]),Te=Object(g.a)(Re,2),Ie=Te[0],Ue=Te[1],Ee=j.a.useState(Q),Ve=Object(g.a)(Ee,2),Be=Ve[0],Ne=Ve[1],Ae=j.a.useState("60712326006"),De=Object(g.a)(Ae,2),Ge=De[0],Fe=De[1],We=j.a.useState("person_user_gateway@test.com"),Je=Object(g.a)(We,2),Me=Je[0],Xe=Je[1],ze=j.a.useState("123123123"),qe=Object(g.a)(ze,2),Ke=qe[0],Ze=qe[1],He=j.a.useState("https://raw.githubusercontent.com/paylivre/gateway-example-react-js/master/assets/logo_jackpot.png"),Qe=Object(g.a)(He,2),Ye=Qe[0],$e=Qe[1];function et(e,t){var n=Object(p.a)(Object(p.a)({},ge),{},Object(y.a)({},e,t));ve(n);var a=function(e){var t=e[4]?"1":"0",n=e[1]?"1":"0",a=e[0]?"1":"0",c=e[5]?"1":"0";return parseInt(c+a+n+t,2).toString()}(n);Ce(a)}Object(u.useEffect)((function(){!function(){var e=[];ge[4]&&e.push({value:H.PIX.toString(),label:"Pix"}),ge[1]&&e.push({value:H.BILLET.toString(),label:"Billet"}),ge[0]&&e.push({value:H.WIRETRANFER.toString(),label:"Wire Transfer"}),ge[5]&&e.push({value:H.WALLET.toString(),label:"Paylivre Wallet"}),Ue(e)}()}),[ge]);var tt="json"===o&&"0"===ce&&"5"===Le;return Object(u.useEffect)((function(){r(!1);var e="5"===ce;n((function(t){return Object(p.a)(Object(p.a)({},t),{},{account_id:W,amount:oe,auto_approve:"1",callback_url:be,currency:q,document_number:A,email:I,merchant_id:d,operation:ce,merchant_transaction_id:f,redirect_url:xe,selected_type:"0"===ke?"":Le,type:ke,login_email:tt?Me:"",password:tt?Ke:"",pix_key_type:e?Be:"",pix_key:e?Ge:"",logo_url:Ye})}))}),[n,d,f,I,A,W,q,ce,oe,be,xe,r,c,i,ke,Le,Be,Ge,Ye]),Object(E.jsxs)(S,{children:[Object(E.jsxs)(R,{style:{marginBottom:20,height:50,alignItems:"center"},children:[Object(E.jsx)(T,{widthPercent:48,children:Object(E.jsx)(P,{style:{margin:0},children:"Merchant Data:"})}),Object(E.jsx)(T,{widthPercent:50,style:{},children:Object(E.jsx)(v.a,{onClick:function(){return m(te()),void J(ne())},style:{width:"100%",textTransform:"none"},variant:"outlined",children:"Reload Random Data"})})]}),Object(E.jsxs)(R,{children:[Object(E.jsxs)(T,{widthPercent:48,children:[Object(E.jsx)(V,{value:d,setValue:function(e){return h(e)},label:"Merchant ID:"}),Object(E.jsx)(_,{height:15})]}),Object(E.jsx)(T,{widthPercent:45,children:Object(E.jsx)(V,{value:f,setValue:function(e){return m(e)},label:"Merchant Transaction ID:"})})]}),Object(E.jsx)(_,{height:5}),Object(E.jsx)(V,{value:c,setValue:function(e){return a(e)},label:"Gateway Token:"}),Object(E.jsx)(P,{children:"User Data:"}),Object(E.jsx)(V,{value:I,setValue:function(e){return U(e)},label:"User Email: (OPTIONAL)"}),Object(E.jsx)(_,{height:20}),Object(E.jsxs)(R,{children:[Object(E.jsx)(T,{widthPercent:48,children:Object(E.jsx)(V,{value:A,setValue:function(e){return D(e)},label:"User Document Number - CPF/CNPJ: (OPTIONAL)"})}),Object(E.jsx)(T,{widthPercent:48,children:Object(E.jsx)(V,{value:W,setValue:function(e){return J(e)},label:"User Account ID in Merchant:"})})]}),Object(E.jsx)(P,{children:"Transaction Data:"}),Object(E.jsxs)(R,{children:[Object(E.jsx)(T,{widthPercent:48,children:Object(E.jsx)(V,{value:oe,setValue:function(e){return se(e)},label:"Amount:"})}),Object(E.jsx)(T,{widthPercent:48,children:Object(E.jsx)(X,{defaultCheckedValue:q,setChecked:function(e){return K(e)},labelGroup:"Currency",checkData:[{value:"BRL",label:"BRL"},{value:"USD",label:"USD"}]})})]}),Object(E.jsx)(_,{height:15}),Object(E.jsx)(X,{defaultCheckedValue:ce,setChecked:function(e){return re(e)},labelGroup:"Operation",checkData:[{value:"0",label:"Deposit"},{value:"5",label:"Withdraw"}]}),Object(E.jsx)(_,{height:15}),Object(E.jsx)(w.a,{component:"legend",children:"Type passed by merchant"}),Object(E.jsxs)(L,{children:[Object(E.jsx)(Z,{label:"PIX",isChecked:ge[H.PIX],setChecked:function(e){return et(H.PIX,e)}}),Object(E.jsx)(Z,{label:"Billet",isChecked:ge[H.BILLET],setChecked:function(e){return et(H.BILLET,e)}}),Object(E.jsx)(Z,{label:"Wire Transfer",isChecked:ge[H.WIRETRANFER],setChecked:function(e){return et(H.WIRETRANFER,e)}}),Object(E.jsx)(Z,{label:"Paylivre Wallet",isChecked:ge[H.WALLET],setChecked:function(e){return et(H.WALLET,e)}})]}),"json"===o&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(_,{height:15}),Object(E.jsx)(X,{defaultCheckedValue:Le,setChecked:function(e){return Pe(e)},labelGroup:"User selected type",checkData:Ie})]}),tt&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(_,{height:15}),Object(E.jsxs)(R,{children:[Object(E.jsxs)(T,{widthPercent:48,children:[Object(E.jsx)(V,{value:Me,setValue:function(e){return Xe(e)},label:"Email Login Paylivre"}),Object(E.jsx)(_,{height:15})]}),Object(E.jsx)(T,{widthPercent:45,children:Object(E.jsx)(V,{value:Ke,setValue:function(e){return Ze(e)},label:"Password Login Paylivre"})})]})]}),"json"===o&&"5"===ce&&"4"===Le&&Object(E.jsxs)(R,{children:[Object(E.jsxs)(T,{widthPercent:48,children:[Object(E.jsx)(_,{height:25}),Object(E.jsx)(X,{defaultCheckedValue:Be,setChecked:function(e){return Ne(e)},labelGroup:"Pix Key Type",checkData:[{value:Q,label:"CPF/CNPJ"},{value:Y,label:"Phone"},{value:$,label:"Email"}]})]}),Object(E.jsxs)(T,{widthPercent:48,children:[Object(E.jsx)(_,{height:30}),Object(E.jsx)(V,{value:Ge,setValue:function(e){return Fe(e)},label:"User Pix Key"})]})]}),Object(E.jsx)(_,{height:15}),Object(E.jsx)(V,{value:be,setValue:function(e){return de(e)},label:"Callback URL:"}),Object(E.jsx)(_,{height:20}),Object(E.jsx)(V,{value:xe,setValue:function(e){return fe(e)},label:"Redirect URL: (OPTIONAL)"}),Object(E.jsx)(_,{height:15}),Object(E.jsx)(P,{children:"Environment:"}),Object(E.jsx)(V,{value:i,setValue:function(e){return l(e)},label:"Base URL:"}),Object(E.jsx)(_,{height:15}),Object(E.jsx)(V,{value:Ye,setValue:function(e){return $e(e)},label:"Logo URL: (OPTIONAL)"})]})},ie=n(131);function le(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.hash({pass:t,salt:"dZk8N6kUaA32XCsS",time:2,mem:16,parallelism:1,hashLen:16,type:ie.ArgonType.Argon2i}).then((function(e){return e.encoded})).catch((function(e){return console.error(e.message,e.code)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(e){return window.btoa(unescape(encodeURIComponent(e)))}var ue,je,be,de=C.a.div(ae||(ae=Object(k.a)(["\n  display: flex;\n  flex: 1;\n  padding: 10px;\n  background: #fff;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: row;\n"]))),he=C.a.div(ce||(ce=Object(k.a)(["\n  width: 40%;\n  margin-left: 20px;\n  height: auto;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 20px 20px 20px;\n  background-color: #ffffff;\n  border-radius: 5px;\n  @media (max-width: 930px) {\n    width: 100%;\n  }\n"]))),Oe=n(78),xe=n.n(Oe),fe=n(102),pe=n.n(fe),me=(n(143),n(100)),ge=n.n(me),ve=n(77),ye=n(101),we=n.n(ye),ke=(n(148),C.a.div(ue||(ue=Object(k.a)(["\n  background: #292929;\n  width: auto;\n  height: auto;\n  min-height: 100px;\n  justify-content: center;\n  padding: 0 20px 20px 20px;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  @media (max-width: 930px) {\n    width: 100%;\n  }\n"])))),Ce=C.a.p(je||(je=Object(k.a)(["\n  font-size: small;\n  color: ",';\n  margin: 0;\n  max-width: 100%;\n  display: flex;\n  font-size: 14px;\n  word-break: break-all;\n  font-family: "Courier New", Courier, monospace;\n'])),(function(e){return e.color||"#fff"})),Se=C.a.h2(be||(be=Object(k.a)(['\n  font-size: 18px;\n  color: white;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n']))),_e=["dataRequest","url","urlGateway","label","textButton","type"];var Le=function(e){var t=e.dataRequest,n=e.url,a=e.urlGateway,c=e.label,r=e.textButton,i=e.type,l=Object(B.a)(e,_e);function o(){var e=JSON.stringify(Object(p.a)(Object(p.a)({},t),{},{url:n})),c="url"===i?a:e;ge()(c);var r="url"===i?"Copied URL":"JSON Copied";ve.NotificationManager.success(r,"",1e3)}var s="url"===i?pe.a:xe.a;function u(){"url"===i?window.open(a):o()}return Object(E.jsxs)(ke,Object(p.a)(Object(p.a)({},l),{},{children:[Object(E.jsxs)(R,{style:{alignItems:"center",paddingTop:10,marginBottom:10},children:[Object(E.jsx)(T,{widthPercent:50,children:Object(E.jsx)(Se,{children:c})}),Object(E.jsx)(T,{widthPercent:50,children:Object(E.jsx)(v.a,{endIcon:Object(E.jsx)(s,{}),onClick:function(){return u()},style:{width:"100%",textTransform:"none"},variant:"contained",children:r})}),"url"===i&&Object(E.jsx)(T,{widthPercent:50,style:{marginLeft:20,maxWidth:140},children:Object(E.jsx)(v.a,{endIcon:Object(E.jsx)(xe.a,{}),onClick:function(){return o()},style:{width:"100%",textTransform:"none",background:"#fff"},variant:"outlined",children:"Copy URL"})})]}),Object(E.jsx)(ve.NotificationContainer,{}),t&&Object(E.jsx)(we.a,{id:"json-pretty",data:Object(p.a)(Object(p.a)({},t),{},{url:n})}),a&&Object(E.jsx)(Ce,{color:"#ffff80",children:a})]}))};var Pe=function(){var e=Object(O.e)().environment,t="1"===new URLSearchParams(Object(O.d)().search).get("dev"),n=j.a.useState("https://dev.gateway.paylivre.com"),a=Object(g.a)(n,2),c=a[0],r=a[1],i=j.a.useState({}),l=Object(g.a)(i,2),o=l[0],s=l[1],u=j.a.useState("teste"),b=Object(g.a)(u,2),d=b[0],h=b[1],x=j.a.useState(!1),y=Object(g.a)(x,2),w=y[0],k=y[1],C=j.a.useState(""),S=Object(g.a)(C,2),_=S[0],L=S[1],P=j.a.useState(""),I=Object(g.a)(P,2),U=I[0],V=I[1],B=j.a.useState("url"),N=Object(g.a)(B,2),A=N[0],D=N[1];function G(e,t){var n="merchant_transaction_id=".concat(e.merchant_transaction_id),a="merchant_id=".concat(e.merchant_id),r="account_id=".concat(e.account_id),i="amount=".concat(e.amount),l="currency=".concat(e.currency),o="operation=".concat(e.operation),s="callback_url=".concat(e.callback_url),u="redirect_url=".concat(e.redirect_url),j="type=".concat(e.type),b="auto_approve=".concat(e.auto_approve),d=t?"&signature=".concat(t):"",h=e.logo_url?"&logo_url=".concat(e.logo_url):"",O=e.email?"&email=".concat(e.email):"",x=e.document_number?"&document_number=".concat(e.document_number):"";return"".concat(c,"?").concat(n,"&").concat(a,"&").concat(o).concat(O).concat(x,"&").concat(i,"&").concat(l,"&").concat(j,"&").concat(r,"&").concat(s,"&").concat(u,"&").concat(b).concat(d).concat(h)}function F(){return W.apply(this,arguments)}function W(){return(W=Object(m.a)(f.a.mark((function e(){var t,n,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=G(o),n=d+t,e.next=4,le(n);case 4:a=e.sent,c=se(a),L(t),V(G(o,c)),s((function(e){return Object(p.a)(Object(p.a)({},e),{},{signature:c})})),k(!0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log({environment:e}),Object(E.jsxs)(E.Fragment,{children:[t&&Object(E.jsxs)(R,{style:{justifyContent:"center"},children:[Object(E.jsx)(T,{widthPercent:20,style:{marginRight:20,marginBottom:20},children:Object(E.jsx)(v.a,{onClick:function(){return D("url")},style:{width:"100%",textTransform:"none",background:"url"===A?"#1976d2":"#c4c4c4"},variant:"contained",children:"Selected Form to URL"})}),Object(E.jsx)(T,{widthPercent:20,children:Object(E.jsx)(v.a,{onClick:function(){return D("json")},style:{width:"100%",textTransform:"none",background:"json"===A?"#1976d2":"#c4c4c4"},variant:"contained",children:"Select Form to Request JSON"})})]}),Object(E.jsxs)(de,{children:[Object(E.jsx)(re,{base_url:c,setBaseUrl:r,gateway_token:d,setGateway_token:h,data:o,setUrlGenerated:k,handleGenerateURL:function(){return F()},setData:s,typeFormSelected:A}),Object(E.jsxs)(he,{children:[w&&Object(E.jsxs)(E.Fragment,{children:["url"===A&&Object(E.jsx)(Le,{type:A,style:{marginBottom:20},urlGateway:U,label:"URL to Gateway Web:",textButton:"Open URL Gateway"}),"json"===A&&Object(E.jsx)(Le,{type:A,style:{marginBottom:20},dataRequest:o,url:_,label:"JSON Post Request:",textButton:"Copy JSON"})]}),Object(E.jsx)(v.a,{size:"large",onClick:function(){return F()},style:{width:"100%",textTransform:"none"},variant:"contained",children:"Generate ".concat(A.toUpperCase())})]})]})]})},Re=function(e){var t=e.history;return Object(E.jsx)(O.b,{history:t,children:Object(E.jsxs)(O.c,{children:[Object(E.jsx)(O.a,{exact:!0,path:"/",component:Pe}),Object(E.jsx)(O.a,{path:"*",component:Pe})]})})},Te=Object(h.a)();d.a.render(Object(E.jsx)(j.a.StrictMode,{children:Object(E.jsx)(Re,{history:Te})}),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.695c0009.chunk.js.map