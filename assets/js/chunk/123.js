(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{"512":function(t,n,o){"use strict";o.r(n),o.d(n,"taro_textarea_core",(function(){return c}));var i=o(111),a=o.n(i),r=o(52),h=o.n(r),l=o(0),u=o.n(l),s=o(138);function fixControlledValue(t){return null!=t?t:""}var c=function(){function e(t){var n=this;Object(s.g)(this,t),this.onInput=Object(s.c)(this,"input",7),this.onFocus=Object(s.c)(this,"focus",7),this.onBlur=Object(s.c)(this,"blur",7),this.onChange=Object(s.c)(this,"change",7),this.onLineChange=Object(s.c)(this,"linechange",7),this.disabled=!1,this.maxlength=140,this.autoFocus=!1,this.autoHeight=!1,this.nativeProps={},this.line=1,this.handleInput=function(t){t.stopPropagation(),n.handleLineChange(),n.onInput.emit({"value":t.target.value,"cursor":t.target.value.length})},this.handleFocus=function(t){n.onFocus.emit({"value":t.target.value})},this.handleBlur=function(t){n.onBlur.emit({"value":t.target.value})},this.handleChange=function(t){t.stopPropagation(),n.onChange.emit({"value":t.target.value})},this.handleLineChange=function(){var t=n.getNumberOfLines();t!==n.line&&(n.line=t,n.onLineChange.emit({"height":n.textareaRef.clientHeight,"lineCount":n.line}))},this.calculateContentHeight=function(t,n){var o=t.style.height,i=t.offsetHeight,a=t.scrollHeight,r=t.style.overflow;if(!(i>=a))return a;if(t.style.height=i+n+"px",t.style.overflow="hidden",a<t.scrollHeight){for(;t.offsetHeight>=t.scrollHeight;)t.style.height=(i-=n)+"px";for(;t.offsetHeight<t.scrollHeight;)t.style.height=i+++"px";return t.style.height=o,t.style.overflow=r,i}},this.getNumberOfLines=function(){var t=n.textareaRef,o=window.getComputedStyle?window.getComputedStyle(t):t.style,i=a()(o.lineHeight,10),r=n.calculateContentHeight(t,i);return Math.floor(r/i)}}return e.prototype.componentDidLoad=function(){var t=this;h()(this.el,"value",{"get":function get(){return t.textareaRef.value},"set":function set(n){return t.value=n},"configurable":!0}),this.autoFocus&&this.textareaRef.focus()},e.prototype.render=function(){var t=this,n=this,o=n.value,i=n.placeholder,a=n.disabled,r=n.maxlength,h=n.autoFocus,l=n.autoHeight,c=n.name,g=n.nativeProps,f=n.handleInput,d=n.handleFocus,p=n.handleBlur,v=n.handleChange,b={};return l&&(b.rows=this.line),Object(s.e)("textarea",u()({"ref":function ref(n){n&&(t.textareaRef=n)},"class":"taro-textarea "+(l?"auto-height":""),"value":fixControlledValue(o),"placeholder":i,"name":c,"disabled":a,"maxlength":r,"autofocus":h,"onInput":f,"onFocus":d,"onBlur":p,"onChange":v},g,b))},h()(e.prototype,"el",{"get":function get(){return Object(s.d)(this)},"enumerable":!1,"configurable":!0}),e}();c.style="taro-textarea-core{display:block;width:300px}taro-textarea-core .auto-height{height:auto}.taro-textarea{-webkit-appearance:none;cursor:auto;width:100%;height:150px;border:0;display:block;position:relative;line-height:1.5}.taro-textarea:focus{outline:none}"}}]);