(this["webpackJsonpmerchant-example-react-js"]=this["webpackJsonpmerchant-example-react-js"]||[]).push([[0],{104:function(e){e.exports=JSON.parse('{"name":"merchant-example-react-js","version":"2.0.0","private":true,"dependencies":{"@emotion/react":"^11.5.0","@emotion/styled":"^11.3.0","@mui/icons-material":"^5.0.4","@mui/material":"^5.0.4","@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","argon2-browser":"^1.18.0","base64-loader":"^1.0.0","copy-to-clipboard":"^3.3.1","prop-types":"^15.7.2","react":"^17.0.2","react-app-rewired":"^2.1.8","react-dom":"^17.0.2","react-json-prettify":"^0.2.0","react-json-pretty":"^2.2.0","react-notifications":"^1.7.2","react-router-dom":"^5.3.0","react-scripts":"4.0.3","redux-form":"^8.3.7","styled-components":"^5.3.3","uuid":"^8.3.2","web-vitals":"^1.0.1"},"scripts":{"start":"react-app-rewired start","build":"react-app-rewired build","test":"react-app-rewired test","eject":"react-app-rewired eject","predeploy":"npm run build","deploy":"gh-pages -d build","format":"prettier --write \\"**/*.{js,jsx,json,md}\\"","lint":"eslint ./","lintFix":"eslint ./ --fix"},"homepage":"https://paylivre.github.io/gateway-example-javascript","eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"babel-eslint":"^10.1.0","eslint":"^7.32.0","eslint-config-airbnb":"^18.2.1","eslint-config-prettier":"^8.3.0","eslint-config-standard":"^16.0.3","eslint-plugin-import":"^2.25.2","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-node":"^11.1.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-promise":"^5.1.1","eslint-plugin-react":"^7.26.1","eslint-plugin-react-hooks":"^4.2.0","gh-pages":"^3.2.3","prettier":"^2.4.1"}}')},153:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,l,s,u,d=n(0),j=n.n(d),b=n(30),h=n.n(b),p=n(33),m=n(198),x=n(49),O=n.n(x),f=n(18),g=n(62),y=n(7),v=n(4),w=n(206),_=n(196),k=n(205),S=n(14),C=n(15),P=C.a.div(a||(a=Object(S.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: auto;\n  @media (max-width: 930px) {\n    flex-direction: column;\n  }\n"]))),L=C.a.div(r||(r=Object(S.a)(["\n  width: ",";\n  flex-direction: row;\n  height: auto;\n  @media (max-width: 930px) {\n    flex-direction: column;\n  }\n"])),(function(e){var t=e.widthPercent;return t?"".concat(t,"%"):"100%"})),T=C.a.div(c||(c=Object(S.a)(["\n  width: 45%;\n  height: auto;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 20px 20px 20px;\n  background-color: #ffffff;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  @media (max-width: 930px) {\n    width: 100%;\n    padding: 10px;\n  }\n"]))),R=C.a.div(i||(i=Object(S.a)(["\n  width: 100%;\n  height: ",";\n  min-height: ",";\n"])),(function(e){var t=e.height;return t?"".concat(t,"px"):0}),(function(e){var t=e.height;return t?"".concat(t,"px"):0})),U=C.a.div(o||(o=Object(S.a)(["\n  width: 100%;\n  flex-direction: row;\n  height: auto;\n"]))),I=C.a.h2(l||(l=Object(S.a)(['\n  font-size: 18px;\n  color: grey;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n']))),E=Object(C.a)(L)(s||(s=Object(S.a)(["\n  @media (max-width: 930px) {\n    width: 100%;\n    flex-direction: column;\n  }\n"]))),V=n(199),D=Object(C.a)(V.a)(u||(u=Object(S.a)(["\n  width: 100%;\n"]))),N=n(1);var B=function(e){var t=e.label,n=e.value,a=e.setValue;return Object(N.jsx)(D,{value:n,style:{marginBottom:5,marginTop:5},id:"outlined-basic",label:t,size:"small",variant:"outlined",onChange:function(e){return a(e.target.value)}})},G=n(67),W=n(5),F=n(103),A=n(197),z=n(208),J=n(200),M=["defaultCheckedValue"],X=Object(W.a)((function(e){return Object(N.jsx)(z.a,Object(f.a)({},e))}))((function(e){var t=e.theme;return{".MuiFormControlLabel-label":e.checked&&{color:t.palette.primary.main}}}));function q(e){var t=e.defaultCheckedValue,n=Object(G.a)(e,M),a=!1;return Object(F.a)()&&(a=t===n.value),Object(N.jsx)(X,Object(f.a)({checked:a},n))}function H(e){var t=e.labelGroup,n=e.checkData,a=void 0===n?[]:n,r=e.defaultCheckedValue,c=e.setChecked,i=e.direction||"row";return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(_.a,{style:{userSelect:"none",marginTop:-13},component:"legend",children:t}),Object(N.jsx)(A.a,{defaultValue:"first",name:"use-radio-group",onChange:function(e){return c(e.target.value)},style:{flexDirection:i},children:a.map((function(e){return Object(N.jsx)(q,{defaultCheckedValue:r,value:e.value,label:e.label,control:Object(N.jsx)(J.a,{})},e.value)}))})]})}var K=n(207),Q=n(165),Y=n(202);function Z(e){var t=e.isChecked,n=e.setChecked,a=e.label;return Object(N.jsx)(K.a,{sx:{m:0,mr:3},component:"fieldset",variant:"standard",children:Object(N.jsx)(Q.a,{children:Object(N.jsx)(z.a,{style:{userSelect:"none"},label:a||"",control:Object(N.jsx)(Y.a,{checked:t,onChange:function(e){return n(e.target.checked)},name:"gilad"})})})})}var $={WIRETRANFER:0,BILLET:1,PIX:4,WALLET:5};var ee="0",te="2",ne="3",ae=n(203);function re(e){return Object(ae.a)().replace(/-/g,"").substring(0,e)}function ce(){return re(10)}var ie=Object(d.createContext)();function oe(e){var t=e.children,n=Object(d.useState)(!1),a=Object(y.a)(n,2),r=a[0],c=a[1];return Object(N.jsx)(ie.Provider,{value:{disable:r,setDisable:c},children:t})}function le(){var e=Object(d.useContext)(ie);if(!e)throw new Error("useDisable must be used within a ForceReloadDataProvider");return{disable:e.disable,setDisable:e.setDisable}}var se=n(209),ue=function(e){var t=e.name,n=e.checked,a=e.label,r=e.onChange;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(_.a,{style:{userSelect:"none",marginTop:-13},component:"legend",children:a}),Object(N.jsx)(se.a,{checked:n,onChange:function(e){return r(e)},color:"primary",name:t})]})},de=n(104);var je=function(e){var t,n=e.setData,a=e.setGateway_token,r=e.gateway_token,c=e.setUrlGenerated,i=e.base_url,o=e.setBaseUrl,l=e.typeFormSelected,s=e.dataDefault,u=j.a.useState(s.merchant_id),b=Object(y.a)(u,2),h=b[0],p=b[1],m=j.a.useState(ce()),x=Object(y.a)(m,2),O=x[0],g=x[1],S=j.a.useState(s.email),C=Object(y.a)(S,2),L=C[0],V=C[1],D=j.a.useState(s.document_number),G=Object(y.a)(D,2),W=G[0],F=G[1],A=j.a.useState("123654asd"),z=Object(y.a)(A,2),J=z[0],M=z[1],X=j.a.useState("BRL"),q=Object(y.a)(X,2),K=q[0],Q=q[1],Y=j.a.useState("0"),ae=Object(y.a)(Y,2),re=ae[0],ie=ae[1],oe=j.a.useState("500"),se=Object(y.a)(oe,2),je=se[0],be=se[1],he=j.a.useState("https://www.google.com"),pe=Object(y.a)(he,2),me=pe[0],xe=pe[1],Oe=j.a.useState("https://www.merchant_to_you.com"),fe=Object(y.a)(Oe,2),ge=fe[0],ye=fe[1],ve=j.a.useState((t={},Object(v.a)(t,$.WIRETRANFER,!1),Object(v.a)(t,$.BILLET,!1),Object(v.a)(t,$.PIX,!0),Object(v.a)(t,$.WALLET,!1),t)),we=Object(y.a)(ve,2),_e=we[0],ke=we[1],Se=j.a.useState("1"),Ce=Object(y.a)(Se,2),Pe=Ce[0],Le=Ce[1],Te=j.a.useState("4"),Re=Object(y.a)(Te,2),Ue=Re[0],Ie=Re[1],Ee=j.a.useState([]),Ve=Object(y.a)(Ee,2),De=Ve[0],Ne=Ve[1],Be=j.a.useState(ee),Ge=Object(y.a)(Be,2),We=Ge[0],Fe=Ge[1],Ae=j.a.useState(s.document_number),ze=Object(y.a)(Ae,2),Je=ze[0],Me=ze[1],Xe=j.a.useState(s.email),qe=Object(y.a)(Xe,2),He=qe[0],Ke=qe[1],Qe=j.a.useState("123123123"),Ye=Object(y.a)(Qe,2),Ze=Ye[0],$e=Ye[1],et=j.a.useState("https://github.com/paylivre/gateway-example-react-js/blob/master/assets/logo_jackpot_new.png?raw=true"),tt=Object(y.a)(et,2),nt=tt[0],at=tt[1],rt=j.a.useState("1"),ct=Object(y.a)(rt,2),it=ct[0],ot=ct[1],lt=le(),st=lt.disable,ut=lt.setDisable;function dt(e,t){var n=Object(f.a)(Object(f.a)({},_e),{},Object(v.a)({},e,t));ke(n);var a=function(e){var t=e[4]?"1":"0",n=e[1]?"1":"0",a=e[0]?"1":"0",r=e[5]?"1":"0";return parseInt(r+a+n+t,2).toString()}(n);Le(a)}Object(d.useEffect)((function(){!function(){var e=[];_e[4]&&e.push({value:$.PIX.toString(),label:"Pix"}),_e[1]&&e.push({value:$.BILLET.toString(),label:"Billet"}),_e[0]&&e.push({value:$.WIRETRANFER.toString(),label:"Wire Transfer"}),_e[5]&&e.push({value:$.WALLET.toString(),label:"Paylivre Wallet"}),Ne(e)}()}),[_e]);var jt="json"===l&&"0"===re&&"5"===Ue;return Object(d.useEffect)((function(){c(!1),ut(!1);var e="5"===re;function t(){if("5"===re){var e=Number(Pe);return Number.isNaN(e)?"0":e>1?"1":Pe}return Pe}n((function(n){return Object(f.a)(Object(f.a)({},n),{},{account_id:J,amount:je,auto_approve:it,callback_url:me,currency:K,document_number:W,email:L,merchant_id:h,operation:re,merchant_transaction_id:O,redirect_url:ge,selected_type:"0"===Pe?"":Ue,type:t(),login_email:jt?He:"",password:jt?Ze:"",pix_key_type:e?We:"",pix_key:e?Je:"",logo_url:nt})}))}),[n,h,O,L,W,J,it,K,re,je,me,ge,c,r,i,Pe,Ue,We,Je,nt]),Object(N.jsxs)(T,{children:[Object(N.jsxs)(P,{style:{marginBottom:20,height:50,alignItems:"center"},children:[Object(N.jsx)(E,{widthPercent:48,children:Object(N.jsx)(I,{style:{margin:0},children:"Merchant Data:"})}),Object(N.jsx)(E,{widthPercent:50,style:{},children:Object(N.jsx)(w.a,{onClick:function(){return g(ce()),void ut(!1)},style:{width:"100%",textTransform:"none"},variant:!0===st?"contained":"outlined",color:"success",children:"Reload Random Data"})})]}),Object(N.jsxs)(P,{children:[Object(N.jsxs)(E,{widthPercent:48,children:[Object(N.jsx)(B,{value:h,setValue:function(e){return p(e)},label:"Merchant ID:"}),Object(N.jsx)(R,{height:15})]}),Object(N.jsx)(E,{widthPercent:45,children:Object(N.jsx)(B,{value:O,setValue:function(e){return g(e)},label:"Merchant Transaction ID:"})})]}),Object(N.jsx)(R,{height:5}),Object(N.jsx)(B,{value:r,setValue:function(e){return a(e)},label:"Gateway Token:"}),Object(N.jsx)(I,{children:"User Data:"}),Object(N.jsx)(B,{value:L,setValue:function(e){return V(e)},label:"User Email: (OPTIONAL)"}),Object(N.jsx)(R,{height:20}),Object(N.jsxs)(P,{children:[Object(N.jsx)(E,{widthPercent:48,children:Object(N.jsx)(B,{value:W,setValue:function(e){return F(e)},label:"User Document - CPF/CNPJ: (OPTIONAL)"})}),Object(N.jsx)(E,{widthPercent:48,children:Object(N.jsx)(B,{value:J,setValue:function(e){return M(e)},label:"User Account ID in Merchant:"})})]}),Object(N.jsx)(I,{children:"Transaction Data:"}),Object(N.jsxs)(P,{children:[Object(N.jsx)(E,{widthPercent:50,children:Object(N.jsx)(B,{value:je,setValue:function(e){return be(e)},label:"Amount:"})}),Object(N.jsx)(R,{height:15}),Object(N.jsxs)(E,{widthPercent:60,children:[Object(N.jsx)(ue,{label:"Auto approve",checked:it,onChange:function(e){return ot(e.target.checked?1:0)}}),it?Object(N.jsx)(k.a,{component:"span",color:"primary",children:"true"}):Object(N.jsx)(k.a,{component:"span",color:"error",children:"false"})]}),Object(N.jsx)(E,{widthPercent:60,children:Object(N.jsx)(H,{defaultCheckedValue:K,setChecked:function(e){return Q(e)},labelGroup:"Currency",checkData:[{value:"BRL",label:"BRL"},{value:"USD",label:"USD"}]})})]}),Object(N.jsx)(R,{height:15}),Object(N.jsx)(H,{defaultCheckedValue:re,setChecked:function(e){return ie(e)},labelGroup:"Operation",checkData:[{value:"0",label:"Deposit"},{value:"5",label:"Withdraw"}]}),Object(N.jsx)(R,{height:15}),Object(N.jsx)(_.a,{component:"legend",children:"Type passed by merchant"}),Object(N.jsxs)(U,{children:[Object(N.jsx)(Z,{label:"PIX",isChecked:_e[$.PIX],setChecked:function(e){return dt($.PIX,e)}}),"0"===re&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(Z,{label:"Billet",isChecked:_e[$.BILLET],setChecked:function(e){return dt($.BILLET,e)}}),Object(N.jsx)(Z,{label:"Wire Transfer",isChecked:_e[$.WIRETRANFER],setChecked:function(e){return dt($.WIRETRANFER,e)}}),Object(N.jsx)(Z,{label:"Paylivre Wallet",isChecked:_e[$.WALLET],setChecked:function(e){return dt($.WALLET,e)}})]})]}),"json"===l&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(R,{height:15}),Object(N.jsx)(H,{defaultCheckedValue:Ue,setChecked:function(e){return Ie(e)},labelGroup:"User selected type",checkData:De})]}),jt&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(R,{height:15}),Object(N.jsxs)(P,{children:[Object(N.jsxs)(E,{widthPercent:48,children:[Object(N.jsx)(B,{value:He,setValue:function(e){return Ke(e)},label:"Email Login Paylivre"}),Object(N.jsx)(R,{height:15})]}),Object(N.jsx)(E,{widthPercent:45,children:Object(N.jsx)(B,{value:Ze,setValue:function(e){return $e(e)},label:"Password Login Paylivre"})})]})]}),"json"===l&&"5"===re&&"4"===Ue&&Object(N.jsxs)(P,{children:[Object(N.jsxs)(E,{widthPercent:48,children:[Object(N.jsx)(R,{height:25}),Object(N.jsx)(H,{defaultCheckedValue:We,setChecked:function(e){return Fe(e)},labelGroup:"Pix Key Type",checkData:[{value:ee,label:"CPF/CNPJ"},{value:te,label:"Phone"},{value:ne,label:"Email"}]})]}),Object(N.jsxs)(E,{widthPercent:48,children:[Object(N.jsx)(R,{height:30}),Object(N.jsx)(B,{value:Je,setValue:function(e){return Me(e)},label:"User Pix Key"})]})]}),Object(N.jsx)(R,{height:15}),Object(N.jsx)(B,{value:me,setValue:function(e){return xe(e)},label:"Callback URL:"}),Object(N.jsx)(R,{height:20}),Object(N.jsx)(B,{value:ge,setValue:function(e){return ye(e)},label:"Redirect URL: (OPTIONAL)"}),Object(N.jsx)(R,{height:15}),Object(N.jsx)(I,{children:"Environment:"}),Object(N.jsx)(B,{value:i,setValue:function(e){return o(e)},label:"Base URL:"}),Object(N.jsx)(R,{height:15}),Object(N.jsx)(B,{value:nt,setValue:function(e){return at(e)},label:"Logo URL: (OPTIONAL)"}),Object(N.jsxs)(k.a,{variant:"p",component:"p",style:{margin:"0.6rem 0"},children:["v",de.version]})]})},be=n(136);function he(e){return pe.apply(this,arguments)}function pe(){return(pe=Object(g.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be.hash({pass:t,salt:re(14),time:2,mem:16,parallelism:1,hashLen:16,type:be.ArgonType.Argon2i}).then((function(e){return e.encoded})).catch((function(e){return console.error(e.message,e.code)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(e){return window.btoa(unescape(encodeURIComponent(e)))}var xe,Oe,fe,ge,ye,ve,we,_e,ke,Se={base_url:"https://dev.gateway.paylivre.com",gateway_token:"UdXN2e33r3xlldm1UJSXGR5mslv9HeWP",merchant_id:"302",merchant_transaction_id:"",email:"user_gateway_test@tutanota.com",document_number:"61317581075"},Ce={base_url:"https://playground.gateway.paylivre.com",gateway_token:"0c85yWaiBWx1Mclvink7suWrHoEQnH8Q",merchant_id:"1508",merchant_transaction_id:"",email:"user_gateway_test@tutanota.com",document_number:"61317581075"},Pe=C.a.div(xe||(xe=Object(S.a)(["\n  display: flex;\n  width: 100%;\n  padding: 10px;\n  background: #fff;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: row;\n  @media (max-width: 930px) {\n    flex-direction: column;\n    padding: 20px;\n    align-items: center;\n    justify-content: center;\n  }\n"]))),Le=C.a.div(Oe||(Oe=Object(S.a)(["\n  width: 40%;\n  margin-left: 20px;\n  height: auto;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 20px 20px 20px;\n  background-color: #ffffff;\n  border-radius: 5px;\n  @media (max-width: 930px) {\n    width: 100%;\n    margin-left: 0px;\n  }\n"]))),Te=Object(C.a)(w.a)(fe||(fe=Object(S.a)(["\n  @media (max-width: 930px) {\n    width: 100%;\n  }\n"]))),Re=Object(C.a)(L)(ge||(ge=Object(S.a)(["\n  @media (max-width: 930px) {\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),Ue=n(78),Ie=n.n(Ue),Ee=n(107),Ve=n.n(Ee),De=(n(148),n(105)),Ne=n.n(De),Be=n(77),Ge=n(106),We=n.n(Ge),Fe=(n(153),C.a.div(ye||(ye=Object(S.a)(["\n  display: flex;\n  background: #292929;\n  flex-wrap: nowrap;\n  width: auto;\n  height: auto;\n  min-height: 100px;\n  justify-content: center;\n  padding: 0 20px 20px 20px;\n  border-radius: 5px;\n  flex-direction: column;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  @media (max-width: 930px) {\n    width: 88%;\n    padding: 20px;\n  }\n"])))),Ae=C.a.p(ve||(ve=Object(S.a)(["\n  font-size: small;\n  color: ",';\n  margin: 0;\n  max-width: 100%;\n  display: flex;\n  font-size: 14px;\n  word-break: break-all;\n  font-family: "Courier New", Courier, monospace;\n'])),(function(e){return e.color||"#fff"})),ze=C.a.h2(we||(we=Object(S.a)(['\n  font-size: 18px;\n  color: white;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n']))),Je=Object(C.a)(L)(_e||(_e=Object(S.a)(["\n  @media (max-width: 930px) {\n    width: 100%;\n    flex-direction: column;\n    margin: 5px 0;\n  }\n"]))),Me=Object(C.a)(w.a)(ke||(ke=Object(S.a)(["\n  @media (max-width: 930px) {\n    width: 100%;\n  }\n"]))),Xe=["dataRequest","url","urlGateway","label","textButton","type"];var qe,He,Ke,Qe,Ye,Ze,$e,et=function(e){var t=e.dataRequest,n=e.url,a=e.urlGateway,r=e.label,c=e.textButton,i=e.type,o=Object(G.a)(e,Xe),l=le(),s=l.disable,u=l.setDisable;function d(){if(!s){var e=JSON.stringify(Object(f.a)(Object(f.a)({},t),{},{url:n})),r="url"===i?a:e;Ne()(r);var c="url"===i?"Copied URL":"JSON Copied";Be.NotificationManager.success(c,"",1e3),u(!0)}}var j="url"===i?Ve.a:Ie.a;function b(){"url"===i?s||(window.open(a),u(!0)):d()}return Object(N.jsxs)(Fe,Object(f.a)(Object(f.a)({},o),{},{children:[Object(N.jsxs)(P,{style:{alignItems:"center",paddingTop:10,marginBottom:10},children:[Object(N.jsx)(Je,{widthPercent:50,children:Object(N.jsx)(ze,{children:r})}),Object(N.jsx)(Je,{widthPercent:50,children:Object(N.jsx)(Me,{disabled:s,endIcon:Object(N.jsx)(j,{}),onClick:function(){return b()},style:{width:"100%",textTransform:"none"},variant:"contained",children:c})}),"url"===i&&Object(N.jsx)(Je,{widthPercent:50,style:{marginLeft:20,maxWidth:140},children:Object(N.jsx)(Me,{disabled:s,endIcon:Object(N.jsx)(Ie.a,{}),onClick:function(){return d()},style:{width:"100%",textTransform:"none",background:"#fff"},variant:"outlined",children:"Copy URL"})})]}),Object(N.jsx)(Be.NotificationContainer,{}),t&&Object(N.jsx)(We.a,{id:"json-pretty",data:Object(f.a)(Object(f.a)({},t),{},{url:n})}),a&&Object(N.jsx)(Ae,{color:"#ffff80",children:a})]}))},tt=C.a.div(qe||(qe=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: start;\n  background: transparent;\n  flex-wrap: wrap;\n  width: auto;\n  height: auto;\n  padding: 20px;\n  border-radius: 5px;\n  flex-direction: column;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  @media (max-width: 930px) {\n    width: 88%;\n    padding: 20px;\n  }\n"]))),nt=C.a.h2(He||(He=Object(S.a)(['\n  font-size: 18px;\n  color: grey;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n']))),at=C.a.ul(Ke||(Ke=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n  padding: 0;\n"]))),rt=C.a.li(Qe||(Qe=Object(S.a)(["\n  font-size: small;\n  color: ",';\n  margin: 0;\n  max-width: 100%;\n  display: flex;\n  font-size: 1.2rem;\n  word-break: break-all;\n  margin: 0.2rem 0;\n  /* font-family: "Courier New", Courier, monospace; */\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n'])),(function(e){return e.isEmpty&&"#be453a"})),ct=C.a.h2(Ye||(Ye=Object(S.a)(['\n  font-size: 18px;\n  color: #be453a;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n']))),it=C.a.p(Ze||(Ze=Object(S.a)(['\n  font-size: 1rem;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n']))),ot=C.a.div($e||($e=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: start;\n  background: transparent;\n  flex-wrap: wrap;\n  width: auto;\n  height: auto;\n  padding: 20px;\n  border-radius: 5px;\n  flex-direction: column;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  @media (max-width: 930px) {\n    width: 88%;\n    padding: 20px;\n  }\n"]))),lt=["merchant_id","operation","merchant_transaction_id","amount","currency","mock_type","account_id","mock_auto_approve","callback_url"],st=function(e){var t=e.parameters,n=e.baseUrl,a=[];return Object.entries(t).forEach((function(e){return a.push(lt.includes(e[0])&&0===e[1].length)})),Object(N.jsxs)(tt,{children:[Object(N.jsxs)(L,{children:[Object(N.jsx)(nt,{children:"Url Parameters"}),Object(N.jsxs)(at,{children:[Object(N.jsx)(rt,{children:n}),Object(N.jsx)("br",{}),Object.entries(t).map((function(e,t){return function(e,t){var n=lt.includes(e[0]),a=0===e[1].length;return Object(N.jsxs)(rt,{isEmpty:a,children:[n&&"*","".concat(e[0]," = ").concat(e[1])]},t)}(e,t)}))]})]}),Object(N.jsxs)(ot,{children:[a.includes(!0)&&Object(N.jsx)(ct,{children:"All mandatory fields must be filled!"}),Object(N.jsx)(k.a,{variant:"p",component:"p",children:"Legend:"}),Object(N.jsx)(it,{children:"* - Mandatory field"})]})]})};var ut=function(){var e=new URLSearchParams(Object(m.d)().search),t="1"===e.get("dev"),n="1"===e.get("playground"),a=t?n?Ce:Se:Ce,r=j.a.useState(a.base_url),c=Object(y.a)(r,2),i=c[0],o=c[1],l=j.a.useState({}),s=Object(y.a)(l,2),u=s[0],d=s[1],b=j.a.useState(a.gateway_token),h=Object(y.a)(b,2),p=h[0],x=h[1],v=j.a.useState(!1),w=Object(y.a)(v,2),_=w[0],k=w[1],S=j.a.useState(""),C=Object(y.a)(S,2),L=C[0],T=C[1],R=j.a.useState(""),U=Object(y.a)(R,2),I=U[0],E=U[1],V=j.a.useState("url"),D=Object(y.a)(V,2),B=D[0],G=D[1],W=j.a.useState({}),F=Object(y.a)(W,2),A=F[0],z=F[1];function J(e,t){var n="merchant_transaction_id=".concat(e.merchant_transaction_id),a="merchant_id=".concat(e.merchant_id),r="account_id=".concat(e.account_id),c="amount=".concat(e.amount),o="currency=".concat(e.currency),l="operation=".concat(e.operation),s="callback_url=".concat(e.callback_url),u="redirect_url=".concat(e.redirect_url),d="type=".concat(e.type),j="auto_approve=".concat(e.auto_approve),b=t?"&signature=".concat(t):"",h=e.logo_url?"&logo_url=".concat(e.logo_url):"",p=e.email?"&email=".concat(e.email):"",m=e.document_number?"&document_number=".concat(e.document_number):"";return z({merchant_transaction_id:e.merchant_transaction_id,merchant_id:e.merchant_id,account_id:e.account_id,amount:e.amount,currency:e.currency,operation:e.operation,callback_url:e.callback_url,redirect_url:e.redirect_url,type:e.type,auto_approve:e.auto_approve,signature:t||"",logoUrl:e.logo_url?e.logo_url:"",email:e.email?e.email:"",document_number:e.document_number?e.document_number:""}),"".concat(i,"?").concat(n,"&").concat(a,"&").concat(l).concat(p).concat(m,"&").concat(c,"&").concat(o,"&").concat(d,"&").concat(r,"&").concat(s,"&").concat(u,"&").concat(j).concat(b).concat(h)}function M(){return X.apply(this,arguments)}function X(){return(X=Object(g.a)(O.a.mark((function e(){var t,n,a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=J(u),n=p+t,e.next=4,he(n);case 4:a=e.sent,r=me(a),T(t),E(J(u,r)),d((function(e){return Object(f.a)(Object(f.a)({},e),{},{signature:r})})),k(!0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(N.jsxs)(N.Fragment,{children:[t&&Object(N.jsxs)(P,{style:{justifyContent:"center"},children:[Object(N.jsx)(Re,{widthPercent:20,style:{marginRight:20,marginBottom:20},children:Object(N.jsx)(Te,{onClick:function(){return G("url")},style:{width:"100%",textTransform:"none",background:"url"===B?"#1976d2":"#c4c4c4"},variant:"contained",children:"Selected Form to URL"})}),Object(N.jsx)(Re,{widthPercent:20,children:Object(N.jsx)(Te,{onClick:function(){return G("json")},style:{width:"100%",textTransform:"none",background:"json"===B?"#1976d2":"#c4c4c4"},variant:"contained",children:"Select Form to Request JSON"})})]}),Object(N.jsxs)(Pe,{children:[Object(N.jsx)(je,{dataDefault:a,base_url:i,setBaseUrl:o,gateway_token:p,setGateway_token:x,data:u,setUrlGenerated:k,handleGenerateURL:function(){return M()},setData:d,typeFormSelected:B}),Object(N.jsxs)(Le,{children:[_&&Object(N.jsxs)(N.Fragment,{children:["url"===B&&Object(N.jsx)(et,{type:B,style:{marginBottom:20},urlGateway:I,label:"URL to Gateway Web:",textButton:"Open URL Gateway"}),"json"===B&&Object(N.jsx)(et,{type:B,style:{marginBottom:20},dataRequest:u,url:L,label:"JSON Post Request:",textButton:"Copy JSON"})]}),Object(N.jsx)(Te,{size:"large",onClick:function(){return M()},style:{width:"100%",textTransform:"none",minWidth:"100%",marginRight:0},variant:"contained",children:"Generate ".concat(B.toUpperCase())}),_&&Object(N.jsx)(st,{baseUrl:i,parameters:A})]})]})]})},dt=function(e){var t=e.history;return Object(N.jsx)(m.b,{history:t,children:Object(N.jsxs)(m.c,{children:[Object(N.jsx)(m.a,{exact:!0,path:"/",component:ut}),Object(N.jsx)(m.a,{path:"*",component:ut})]})})},jt=Object(p.a)();h.a.render(Object(N.jsx)(j.a.StrictMode,{children:Object(N.jsx)(oe,{children:Object(N.jsx)(dt,{history:jt})})}),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.e3801ae3.chunk.js.map