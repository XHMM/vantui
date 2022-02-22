(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"525":function(e,n,t){"use strict";t.d(n,"e",(function(){return isPlainObject})),t.d(n,"f",(function(){return isPromise})),t.d(n,"b",(function(){return isDef})),t.d(n,"d",(function(){return isObj})),t.d(n,"a",(function(){return isBoolean})),t.d(n,"c",(function(){return isImageUrl})),t.d(n,"g",(function(){return isVideoUrl}));var r=t(171),c=t.n(r);function isFunction(e){return"function"==typeof e}function isPlainObject(e){return null!==e&&"object"===c()(e)&&!Array.isArray(e)}function isPromise(e){return isPlainObject(e)&&isFunction(e.then)&&isFunction(e.catch)}function isDef(e){return null!=e}function isObj(e){var n=c()(e);return null!==e&&("object"===n||"function"===n)}function isBoolean(e){return"boolean"==typeof e}var i=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,a=/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;function isImageUrl(e){return i.test(e)}function isVideoUrl(e){return a.test(e)}},"528":function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(37),c=t(38),i=t(65),a=t(64),o=t(518),s=t(63),u=(t(529),t(108)),l=function(e){Object(i.a)(Index,e);var n=Object(a.a)(Index);function Index(){return Object(r.a)(this,Index),n.call(this)}return Object(c.a)(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,r=e.card;return Object(u.jsxs)(o.n,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(u.jsx)(o.n,{"className":"demo-block__title","children":t}),r?Object(u.jsx)(o.n,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(s.Component)},"529":function(e,n,t){},"531":function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return Page}));t(564);var r=t(527),c=t(518),i=t(87),a=t(578),o=t(75),s=t(63),u=(t(538),t(108));function Page(n){var t=n.title,l=n.className,f=void 0===l?"":l,d=n.children,b=i.a.useRouter().path;return Object(s.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(a.a)({"scrollTop":0})}),[b]),i.a.useShareAppMessage((function(){return{"title":"AntM 组件库演示","path":b}})),Object(u.jsxs)(c.n,{"className":"demo-page ".concat(f),"children":[Object(u.jsxs)(c.n,{"className":"demo-nav","children":[Object(u.jsx)(r.b,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return Object(o.d)()}}),Object(u.jsxs)(c.n,{"className":"demo-nav__title","children":[t," "]})]}),d]})}}).call(this,t(227))},"538":function(e,n,t){},"539":function(e,n,t){"use strict";t.d(n,"g",(function(){return range})),t.d(n,"d",(function(){return getSystemInfoSync})),t.d(n,"a",(function(){return addUnit})),t.d(n,"h",(function(){return requestAnimationFrame})),t.d(n,"f",(function(){return pickExclude})),t.d(n,"c",(function(){return getRect})),t.d(n,"b",(function(){return getAllRect})),t.d(n,"i",(function(){return toPromise}));var r,c=t(139),i=t.n(c),a=t(22),o=t.n(a),s=t(15),u=t.n(s),l=t(5),f=t.n(l),d=(t(517),t(835)),b=(t(838),t(87)),j=t(886),h=(t(75),t(525));t(544);function range(e,n,t){return Math.min(Math.max(e,n),t)}function getSystemInfoSync(){return null==r&&(r=Object(d.a)()),r}function addUnit(e){if(Object(h.b)(e))return/^-?\d+(\.\d+)?$/.test(""+e)?b.a.pxTransform(e):e}function requestAnimationFrame(e){return"devtools"===getSystemInfoSync().platform?setTimeout((function(){e()}),33.333333333333336):Object(j.a)().selectViewport().boundingClientRect().exec((function(){e()}))}function pickExclude(e,n){var t;return Object(h.e)(e)?i()(t=o()(e)).call(t,(function(t,r){return u()(n).call(n,r)||(t[r]=e[r]),t}),{}):{}}function getRect(e,n){return new f.a((function(t){var r=Object(j.a)();e&&(r=r.in(e)),r.select(n).boundingClientRect().exec((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t(e[0])}))}))}function getAllRect(e,n){return new f.a((function(t){var r=Object(j.a)();e&&(r=r.in(e)),r.selectAll(n).boundingClientRect().exec((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t(e[0])}))}))}function toPromise(e){return Object(h.f)(e)?e:f.a.resolve(e)}t.d(n,"e",(function(){return h.b}))},"544":function(e,n,t){"use strict";t.d(n,"a",(function(){return canIUseModel})),t.d(n,"b",(function(){return canIUseNextTick}));var r,c=t(110),i=t.n(c),a=t(835),o=t(836);t(837);function gte(e){return function compareVersion(e,n){e=e.split("."),n=n.split(".");for(var t=Math.max(e.length,n.length);e.length<t;)e.push("0");for(;n.length<t;)n.push("0");for(var r=0;r<t;r++){var c=i()(e[r],10),a=i()(n[r],10);if(c>a)return 1;if(c<a)return-1}return 0}(function getSystemInfoSync(){return null==r&&(r=Object(a.a)()),r}().SDKVersion,e)>=0}function canIUseModel(){return gte("2.9.3")}function canIUseNextTick(){return Object(o.a)("nextTick")}},"558":function(e,n,t){"use strict";t.d(n,"c",(function(){return r})),t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return i})),t.d(n,"e",(function(){return a})),t.d(n,"d",(function(){return o})),t.d(n,"f",(function(){return s}));var r=1010,c=1e3,i=805,a=805,o=800,s=600},"751":function(e,n,t){},"752":function(e,n,t){},"872":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return H}));t(564);var r=t(527),c=(t(524),t(530),t(532),t(751),t(109)),i=t.n(c),a=t(52),o=t.n(a),s=t(22),u=t.n(s),l=t(520),f=t.n(l),d=t(30),b=t.n(d),j=t(519),h=t.n(j),v=t(26),m=t.n(v),x=t(169),O=t.n(x),p=t(522),g=t.n(p),I=t(523),_=t.n(I),k=t(526),N=t.n(k),y=t(63),T=t(518),C=t(521),w=t(558),A=t(539),R=t(537);var S=t(108),U=["fixed","placeholder","border","zIndex","safeAreaInsetTop","leftArrow","leftText","title","rightText","renderTitle","renderLeft","renderRight","onClickLeft","onClickRight","style","className"];function ownKeys(e,n){var t=u()(e);if(f.a){var r=f()(e);n&&(r=b()(r).call(r,(function(n){return h()(e,n).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t,r=null!=arguments[n]?arguments[n]:{};if(n%2)m()(t=ownKeys(Object(r),!0)).call(t,(function(n){g()(e,n,r[n])}));else if(O.a)i()(e,O()(r));else{var c;m()(c=ownKeys(Object(r))).call(c,(function(n){o()(e,n,h()(r,n))}))}}return e}var P=function NavBar(e){var n,t=Object(y.useState)(46),c=N()(t,2),i=c[0],a=c[1],o=Object(y.useState)(22),s=N()(o,2),u=s[0],l=s[1],f=e.fixed,d=e.placeholder,b=e.border,j=void 0===b||b,h=e.zIndex,v=void 0===h?w.a:h,m=e.safeAreaInsetTop,x=void 0===m||m,O=e.leftArrow,p=e.leftText,g=e.title,I=e.rightText,k=e.renderTitle,P=e.renderLeft,B=e.renderRight,L=e.onClickLeft,z=e.onClickRight,E=e.style,F=e.className,M=_()(e,U),V=Object(y.useCallback)((function(){f&&d&&Object(A.c)(null,".van-nav-bar").then((function(e){e&&"height"in e&&a(e.height||68)}))}),[f,d]);return Object(y.useEffect)((function(){var e=Object(A.d)().statusBarHeight,n=void 0===e?22:e;isNaN(n)&&(n=22),a(46+n),l(n)}),[]),Object(y.useEffect)((function(){V()}),[V]),Object(S.jsxs)(T.a,{"children":[f&&d&&Object(S.jsx)(T.n,{"style":"height: "+i+"px;"}),Object(S.jsx)(T.n,_objectSpread(_objectSpread({"className":C.b("nav-bar",{"fixed":f})+"  "+(j?"van-hairline--bottom":"")+" ".concat(F||""),"style":C.c([(n={"zIndex":v,"statusBarHeight":u,"safeAreaInsetTop":x,"fromTop":0,"height":i},Object(R.a)({"z-index":n.zIndex,"padding-top":n.safeAreaInsetTop?n.statusBarHeight+"px":n.fromTop+"px","height":n.height+"px"})+"; "+E)])},M),{},{"children":Object(S.jsxs)(T.n,{"className":"van-nav-bar__content","children":[Object(S.jsx)(T.n,{"className":"van-nav-bar__left","onClick":L,"children":O||p?Object(S.jsxs)(T.a,{"children":[O&&Object(S.jsx)(r.a,{"size":64,"name":"arrow-left","className":"van-nav-bar__arrow"}),p&&Object(S.jsx)(T.n,{"className":"van-nav-bar__text","hoverClass":"van-nav-bar__text--hover","hoverStayTime":70,"children":p})]}):P}),Object(S.jsx)(T.n,{"className":"van-nav-bar__title van-nav-bar__title-h5  title-class van-ellipsis","children":g?Object(S.jsx)(T.a,{"children":g}):k}),Object(S.jsx)(T.n,{"className":"van-nav-bar__right","onClick":z,"children":I?Object(S.jsx)(T.n,{"className":"van-nav-bar__text","hoverClass":"van-nav-bar__text--hover","hoverStayTime":70,"children":I}):B})]})}))]})},B=t(37),L=t(38),z=t(170),E=t(65),F=t(64),M=t(88),V=t(878),K=t(531),D=t(528),H=(t(752),function(e){Object(E.a)(Index,e);var n=Object(F.a)(Index);function Index(){var e;return Object(B.a)(this,Index),e=n.call(this),Object(M.a)(Object(z.a)(e),"onClickLeft",(function(){Object(V.c)({"title":"点击返回","icon":"none"})})),Object(M.a)(Object(z.a)(e),"onClickRight",(function(){Object(V.c)({"title":"点击按钮","icon":"none"})})),e}return Object(L.a)(Index,[{"key":"render","value":function render(){return Object(S.jsx)(K.a,{"title":"NavBar 导航栏","children":Object(S.jsxs)(S.Fragment,{"children":[Object(S.jsx)(D.a,{"title":"基础用法","children":Object(S.jsx)(P,{"title":"标题","rightText":"按钮","leftArrow":!0,"onClickLeft":this.onClickLeft,"onClickRight":this.onClickRight,"safeAreaInsetTop":!1})}),Object(S.jsx)(D.a,{"title":"高级用法","children":Object(S.jsx)(P,{"title":"标题","leftText":"返回","leftArrow":!0,"renderRight":Object(S.jsx)(S.Fragment,{"children":Object(S.jsx)(r.b,{"name":"search","className":"icon","size":"36"})})})})]})})}}]),Index}(y.Component))}}]);