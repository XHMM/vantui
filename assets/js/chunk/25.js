(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"264":function(e,n,t){"use strict";t.d(n,"a",(function(){return Page}));var i=t(263),c=t(262),s=t(31),o=(t(25),t(265),t(36));function Page(e){var n=e.title,t=e.children;return Object(o.jsxs)(c.l,{"className":"demo-page","children":[Object(o.jsxs)(c.l,{"className":"demo-nav","children":[Object(o.jsx)(i.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return s.default.navigateBack()}}),Object(o.jsxs)(c.l,{"className":"demo-nav__title","children":[n," "]})]}),t]})}},"265":function(e,n,t){},"266":function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var i=t(3),c=t.n(i),s=t(6),o=t.n(s),l=t(14),r=t.n(l),a=t(15),d=t.n(a),u=t(262),f=t(25),m=t.n(f),h=(t(267),t(36)),j=function(e){r()(Index,e);var n=d()(Index);function Index(){return c()(this,Index),n.call(this)}return o()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,i=e.card;return Object(h.jsxs)(u.l,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(h.jsx)(u.l,{"className":"demo-block__title","children":t}),i?Object(h.jsx)(u.l,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(m.a.Component)},"267":function(e,n,t){},"681":function(e,n,t){},"733":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v}));var i=t(3),c=t.n(i),s=t(6),o=t.n(s),l=t(21),r=t.n(l),a=t(14),d=t.n(a),u=t(15),f=t.n(u),m=t(8),h=t.n(m),j=(t(109),t(113),t(262)),b=t(25),k=t.n(b),x=t(263),C=t(264),g=t(266),p=(t(681),t(36)),O="代码是写出来给人看的，附带能在机器上运行",v=function(e){d()(Index,e);var n=f()(Index);function Index(){var e;return c()(this,Index),e=n.call(this),h()(r()(e),"state",{"show":!1}),h()(r()(e),"showCustomDialog",(function(){e.setState({"show":!0})})),h()(r()(e),"getUserInfo",(function(e){console.log(e.detail)})),h()(r()(e),"onClickThemeAlert",(function(){x.mb.alert({"title":"标题","theme":"round-button","message":O})})),h()(r()(e),"onClickThemeAlert2",(function(){x.mb.alert({"theme":"round-button","message":O})})),h()(r()(e),"onClickAlert",(function(){x.mb.alert({"title":"标题","message":O})})),h()(r()(e),"onClickAlert2",(function(){x.mb.alert({"message":O})})),h()(r()(e),"onClickConfirm",(function(){x.mb.confirm({"title":"标题","message":O})})),h()(r()(e),"onClickAsyncClose",(function(){x.mb.confirm({"title":"标题","message":O,"beforeClose":function beforeClose(e){return new Promise((function(n){setTimeout((function(){n("confirm"===e)}),1e3)}))}})})),h()(r()(e),"onClose",(function(){e.setState({"show":!1})})),e}return o()(Index,[{"key":"render","value":function render(){var e=this.state.show;return Object(p.jsx)(C.a,{"title":"Dialog 弹出框","children":Object(p.jsxs)(j.a,{"children":[Object(p.jsxs)(g.a,{"card":!0,"title":"提示弹窗","padding":!0,"children":[Object(p.jsx)(x.f,{"title":"提示弹窗","onClick":this.onClickAlert,"isLink":!0}),Object(p.jsx)(x.f,{"title":"提示弹窗（无标题）","onClick":this.onClickAlert2,"isLink":!0}),Object(p.jsx)(x.f,{"title":"确认弹窗","onClick":this.onClickConfirm,"isLink":!0})]}),Object(p.jsxs)(g.a,{"card":!0,"title":"圆角按钮样式","padding":!0,"children":[Object(p.jsx)(x.f,{"title":"提示弹窗","onClick":this.onClickThemeAlert,"isLink":!0}),Object(p.jsx)(x.f,{"title":"提示弹窗（无标题）","onClick":this.onClickThemeAlert2,"isLink":!0})]}),Object(p.jsx)(g.a,{"card":!0,"title":"异步关闭","padding":!0,"children":Object(p.jsx)(x.f,{"title":"异步关闭","onClick":this.onClickAsyncClose})}),Object(p.jsx)(g.a,{"card":!0,"title":"组件调用","padding":!0,"children":Object(p.jsx)(x.f,{"title":"组件调用","onClick":this.showCustomDialog})}),Object(p.jsx)(x.q,{"title":"标题","show":e,"showCancelButton":!0,"onClose":this.onClose,"confirmButtonOpenType":"getUserInfo","onGetuserinfo":this.getUserInfo,"children":Object(p.jsx)(x.C,{"className":"demo-image","src":"https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"})}),Object(p.jsx)(x.q,{"id":"van-dialog"})]})})}}]),Index}(k.a.Component)}}]);