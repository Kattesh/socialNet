"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[677],{677:function(s,e,n){n.r(e),n.d(e,{default:function(){return b}});var i=n(8281),a=(n(2791),{dialogs:"Dialogs_dialogs__oe96H",dialogsItems:"Dialogs_dialogsItems__zeEWD",active:"Dialogs_active__t8cjl",messages:"Dialogs_messages__Cg2l+",message:"Dialogs_message__ZEWo0"}),t=n(3504),r=n(184),d=function(s){var e="/dialogs/"+s.id;return(0,r.jsx)("div",{className:a.dialog+" "+a.active,children:(0,r.jsx)(t.OL,{to:e,children:s.name})})},o=function(s){return(0,r.jsx)("div",{className:a.message,children:s.message})},u=n(6871),l=n(7725),g=n(1364),c=n(3079),m=function(s){return(0,r.jsx)(l.l0,{onSubmit:function(e){s.sendMessage(e.newMessageBody)},children:function(s){var e=s.handleSubmit;s.pristine,s.form,s.submitting;return(0,r.jsxs)("form",{onSubmit:e,children:[(0,r.jsx)("div",{children:(0,r.jsx)(l.gN,{name:"newMessageBody",validate:(0,c.A3)(c.C1,(0,c.DT)(30)),component:g.g,placeholder:"Enter your message"})}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{children:"Send"})})]})}})},h=function(s){var e=s.dialogsPage,n=e.dialogs.map((function(s){return(0,r.jsx)(d,{name:s.name,id:s.id},s.id)})),i=e.messages.map((function(s){return(0,r.jsx)(o,{message:s.message,id:s.id},s.id)})),t=(0,u.s0)();return s.isAuth||t("/login"),(0,r.jsxs)("div",{className:a.dialogs,children:[(0,r.jsx)("div",{className:a.dialogsItems,children:n}),(0,r.jsxs)("div",{className:a.messages,children:[(0,r.jsxs)("div",{children:[" ",i]}),(0,r.jsx)(m,{sendMessage:s.sendMessage})]})]})},f=n(7375),j=n(7781),v=n(1413),x=n(4925),_=["isAuth"],p=function(s){return{isAuth:s.auth.isAuth}};var b=(0,j.qC)((0,f.$j)((function(s){return{dialogsPage:s.dialogsPage}}),(function(s){return{sendMessage:function(e){s((0,i.X)(e))}}})),(function(s){return(0,f.$j)(p)((function(e){e.isAuth;var n=(0,x.Z)(e,_),i=(0,u.s0)();return e.isAuth||i("/login"),(0,r.jsx)(s,(0,v.Z)({},n))}))}))(h)}}]);
//# sourceMappingURL=677.2e17a969.chunk.js.map