"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[899],{3899:function(t,s,e){e.r(s),e.d(s,{default:function(){return U}});var n=e(1413),i=e(5671),r=e(3144),u=e(9340),o=e(5716),a=e(2791),p="ProfileInfo_descriptionBlock__XBXuJ",d=e(3445),l=e(885),c=e(184),f=function(t){var s=(0,a.useState)(!1),e=(0,l.Z)(s,2),n=e[0],i=e[1],r=(0,a.useState)(t.status),u=(0,l.Z)(r,2),o=u[0],p=u[1];(0,a.useEffect)((function(){p(t.status)}),[t.status]);return(0,c.jsxs)("div",{children:[!n&&(0,c.jsx)("div",{children:(0,c.jsx)("span",{onDoubleClick:function(){i(!0)},children:o||"----"})}),n&&(0,c.jsx)("div",{children:(0,c.jsx)("input",{onChange:function(t){p(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.updateStatus(o)},value:o})})]})},h=function(t){return t.profile?(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:p,children:[(0,c.jsx)("div",{children:t.profile.fullName}),(0,c.jsx)("img",{src:t.profile.photos.large,alt:"photo"}),(0,c.jsx)(f,{status:t.status,updateStatus:t.updateStatus})]})}):(0,c.jsx)(d.p,{})},x=e(81),j="MyPosts_postsBlock__lB-pf",m="MyPosts_posts__GSiZ2",v="MyPosts_button__TKXtI",g="Post_item__Yu4oG",P=e(9389),_=function(t){return(0,c.jsxs)("div",{className:g,children:[(0,c.jsx)("img",{src:P,alt:"avatar"}),t.message,(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{children:"likes "}),t.likesCount]})]})},S=e(7725),k=e(3079),b=e(1364),C=a.memo((function(t){var s=t.posts.map((function(t){return(0,c.jsx)(_,{id:t.id,message:t.message,likesCount:t.likesCount},t.id)}));return(0,c.jsxs)("div",{className:j,children:[(0,c.jsx)("h3",{children:"My posts"}),(0,c.jsx)(Z,{addPost:t.addPost}),(0,c.jsx)("div",{className:m,children:s})]})})),Z=function(t){return(0,c.jsx)(S.l0,{onSubmit:function(s){t.addPost(s.newPostText)},children:function(t){var s=t.handleSubmit,e=(t.pristine,t.form,t.submitting);return(0,c.jsxs)("form",{onSubmit:s,children:[(0,c.jsx)("div",{children:(0,c.jsx)(S.gN,{name:"newPostText",validate:(0,k.A3)(k.C1,(0,k.DT)(20)),component:b.g,placeholder:"Post message "})}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{type:"submit",disabled:e,className:v,children:"Add post"})})]})}})},y=C,T=e(7375),N=(0,T.$j)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(s){t((0,x.Pi)(s))}}}))(y),w=function(t){return(0,c.jsxs)("div",{children:[(0,c.jsx)(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,c.jsx)(N,{})]})},B=e(6871),I=e(7781),M=function(t){(0,u.Z)(e,t);var s=(0,o.Z)(e);function e(){return(0,i.Z)(this,e),s.apply(this,arguments)}return(0,r.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.router.params.id;t||(t=this.props.authorizedUserId),this.props.getUserProfileTC(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,c.jsx)(w,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(a.Component);var U=(0,I.qC)((0,T.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfileTC:x.d$,getStatus:x.lR,updateStatus:x.Nf}),(function(t){return function(s){var e=(0,B.TH)(),i=(0,B.s0)(),r=(0,B.UO)();return(0,c.jsx)(t,(0,n.Z)((0,n.Z)({},s),{},{router:{location:e,navigate:i,params:r}}))}}))(M)},9389:function(t,s,e){t.exports=e.p+"static/media/avatar.9175b0ff934553346921.jpg"}}]);
//# sourceMappingURL=899.6dfee1f5.chunk.js.map