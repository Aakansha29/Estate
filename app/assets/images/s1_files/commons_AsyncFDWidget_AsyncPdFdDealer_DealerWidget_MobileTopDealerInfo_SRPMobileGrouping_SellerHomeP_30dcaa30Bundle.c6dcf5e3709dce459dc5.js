(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"28PD":function(e,n,t){"use strict";t.r(n),t.d(n,"extra_small",(function(){return r})),t.d(n,"small",(function(){return o})),t.d(n,"medium",(function(){return i})),t.d(n,"large",(function(){return a})),t.d(n,"extra_large",(function(){return c})),t.d(n,"extra_extra_large",(function(){return u})),t.d(n,"extra_extra_extra_large",(function(){return E})),t.d(n,"xxxx_large",(function(){return _})),t.d(n,"extra_extra_extra_extra_large",(function(){return s})),t.d(n,"extra_extra_extra_small",(function(){return l})),t.d(n,"extra_extra_small",(function(){return d})),t.d(n,"extra_small_even",(function(){return R})),t.d(n,"small_medium_even",(function(){return A})),t.d(n,"small_even",(function(){return S})),t.d(n,"medium_even",(function(){return f})),t.d(n,"large_medium_even",(function(){return T})),t.d(n,"large_even",(function(){return g})),t.d(n,"xl_even",(function(){return O})),t.d(n,"extra_large_even",(function(){return I})),t.d(n,"extra_extra_large_even",(function(){return P})),t.d(n,"extra_extra_extra_large_even",(function(){return p})),t.d(n,"extra_extra_extra_extra_large_even",(function(){return m})),t.d(n,"navigationBarHeight",(function(){return v}));var r=5,o=10,i=15,a=20,c=25,u=30,E=35,_=40,s=40,l=1,d=2,R=4,A=6,S=8,f=12,T=14,g=16,O=16,I=24,P=32,p=36,m=48,v=64},"5fzg":function(e,n,t){"use strict";var r=t("siKw");t.d(n,"b",(function(){return r}));var o=t("28PD");t.d(n,"a",(function(){return o}))},"9+j/":function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={$f40:40,$f36:36,$f32:32,$f28:28,$f24:24,$f20:20,$f16:16,$f14:14,$f12:12,$f10:10,$f8:8,$normal:"400",$semi:"600",$bold:"700"}},ErFu:function(e,n,t){"use strict";var r={UIManager:t("gHc1").a};n.a=r},GtMP:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("ERkP"),o=t("aWzz"),i=t.n(o),a=t("U+bB"),c=function(e){var n=e.url,t=e.style;return r.createElement(a.a,{style:t,source:{uri:n}})};c.prototype={url:i.a.string.isRequired,style:i.a.object.isRequired}},UVub:function(e,n,t){"use strict";var r=t("ERkP"),o=t("Nfwf"),i=t("bkfR"),a=function(){};var c=function(){var e=!1;if(i.canUseDOM)try{var n={};Object.defineProperty(n,"passive",{get:function(){return e=!0,!1}}),window.addEventListener("test",null,n),window.removeEventListener("test",null,n)}catch(t){}return e}();function u(){return this.cancelBubble}function E(){return this.defaultPrevented}function _(e,n){var t=function(e){return null!=e&&(c?e:Boolean(e.capture))}(n);return function(n,r){if(null==n||"function"!==typeof n.addEventListener)throw new Error("createEventHandle: called on an invalid target.");var o=n;if(null!=r){var i=function(e){return r(((n=e).nativeEvent=n,n.persist=a,n.isDefaultPrevented=E,n.isPropagationStopped=u,n));var n};return o.addEventListener(e,i,t),function(){null!=o&&o.removeEventListener(e,i,t)}}return a}}var s,l,d="keyboard",R="keyboard",A=!1,S=new Set,f="keyboard",T="mouse",g="touch",O="contextmenu",I="mousedown",P="mousemove",p="mouseup",m="pointerdown",v="pointermove",L="scroll",G="selectionchange",C="touchcancel",N="touchmove",b="touchstart",y={passive:!0},D={capture:!0,passive:!0},h=_("blur",y),F=_("focus",y),U=_("visibilitychange",D),M=_("keydown",D),w=_(m,D),B=_(v,D),H=_(O,D),$=_(I,D),W=_(P,D),V=_(p,D),x=_(L,D),j=_(G,D),k=_(C,D),Y=_(N,D),K=_(b,D);function z(){null==s&&null==l||(null!=s&&(R=s,s=null),null!=l&&(d=l,l=null),q())}function J(e){var n=e.type;if("undefined"!==typeof window&&null!=window.PointerEvent){if(n===m)return void(d!==e.pointerType&&(R=e.pointerType,d=e.pointerType,q()));if(n===v)return void(R!==e.pointerType&&(R=e.pointerType,q()))}else{if(A||(n===I&&d!==T&&(R=T,d=T,q()),n===P&&R!==T&&(R=T,q())),n===b)return A=!0,e.touches&&e.touches.length>1&&(A=!1),void(d!==g&&(R=g,d=g,q()));n!==O&&n!==p&&n!==G&&n!==L&&n!==C&&n!==N||(A=!1)}}function q(){var e={activeModality:d,modality:R};S.forEach((function(n){n(e)}))}i.canUseDOM&&(h(window,(function(){s=R,l=d,d=f,R=f,q(),A=!1})),F(window,(function(){z()})),M(document,(function(e){e.metaKey||e.altKey||e.ctrlKey||R!==f&&(R=f,d=f,q())})),w(document,J),B(document,J),U(document,(function(){"hidden"!==document.visibilityState&&z()})),H(document,J),$(document,J),W(document,J),V(document,J),k(document,J),Y(document,J),K(document,J),j(document,J),x(document,J));var X=t("3kQ2"),Z=t("Z7rx");function Q(e,n){var t=Object(Z.a)((function(){return new Map})),r=Object(Z.a)((function(){var r=_(e,n);return function(e,n){var o=t.get(e);null!=o&&o(),null==n&&t.delete(e);var i=r(e,n);return t.set(e,i),i}}));return Object(X.a)((function(){return function(){t.forEach((function(e){e()})),t.clear()}}),[]),r}var ee={},ne={passive:!0},te="react-gui:hover:lock",re="react-gui:hover:unlock";function oe(e,n,t){var r=document.createEvent("CustomEvent"),o=t||ee,i=o.bubbles,a=void 0===i||i,c=o.cancelable,u=void 0===c||c,E=o.detail;r.initCustomEvent(n,a,u,E),e.dispatchEvent(r)}function ie(e){var n=e.pointerType;return null!=n?n:R}function ae(e,n){var t=n.contain,r=n.disabled,o=n.onHoverStart,i=n.onHoverChange,a=n.onHoverUpdate,c=n.onHoverEnd,u=!("undefined"===typeof window||null==window.PointerEvent),E=Q(u?"pointermove":"mousemove",ne),_=Q(u?"pointerenter":"mouseenter",ne),s=Q(u?"pointerleave":"mouseleave",ne),l=Q(te,ne),d=Q(re,ne);Object(X.a)((function(){var n=e.current;if(null!==n){var u=function(e){null!=c&&c(e),null!=i&&i(!1),E(n,null),s(n,null)},R=function(n){var r=e.current;null!=r&&"touch"!==ie(n)&&(t&&oe(r,re),u(n))},A=function(e){"touch"!==ie(e)&&null!=a&&(null==e.x&&(e.x=e.clientX),null==e.y&&(e.y=e.clientY),a(e))},S=function(e){null!=o&&o(e),null!=i&&i(!0),null!=a&&E(n,r?null:A),s(n,r?null:R)};_(n,r?null:function(n){var o=e.current;if(null!=o&&"touch"!==ie(n)){t&&oe(o,te),S(n);l(o,r?null:function(e){e.target!==o&&u(n)}),d(o,r?null:function(e){e.target!==o&&S(n)})}})}}),[_,E,s,l,d,t,r,o,i,a,c,e])}var ce=t("5MfT"),ue=t("vlSS"),Ee=t("MWbm");function _e(){return _e=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_e.apply(this,arguments)}function se(e,n){var t=e.children,i=e.delayLongPress,a=e.delayPressIn,c=e.delayPressOut,u=e.disabled,E=e.focusable,_=e.onBlur,s=e.onContextMenu,l=e.onFocus,d=e.onHoverIn,R=e.onHoverOut,A=e.onKeyDown,S=e.onLongPress,f=e.onPress,T=e.onPressMove,g=e.onPressIn,O=e.onPressOut,I=e.style,P=e.testOnly_hovered,p=e.testOnly_pressed,m=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["children","delayLongPress","delayPressIn","delayPressOut","disabled","focusable","onBlur","onContextMenu","onFocus","onHoverIn","onHoverOut","onKeyDown","onLongPress","onPress","onPressMove","onPressIn","onPressOut","style","testOnly_hovered","testOnly_pressed"]),v=le(!0===P),L=v[0],G=v[1],C=le(!1),N=C[0],b=C[1],y=le(!0===p),D=y[0],h=y[1],F=Object(r.useRef)(null),U=Object(o.a)(n,F),M=Object(r.useMemo)((function(){return{delayLongPress:i,delayPressStart:a,delayPressEnd:c,disabled:u,onLongPress:S,onPress:f,onPressChange:h,onPressStart:g,onPressMove:T,onPressEnd:O}}),[i,a,c,u,S,f,g,T,O,h]),w=Object(ce.a)(F,M),B=w.onContextMenu,H=w.onKeyDown;ae(F,{contain:!0,disabled:u,onHoverChange:G,onHoverStart:d,onHoverEnd:R});var $={hovered:L,focused:N,pressed:D},W=r.useCallback((function(e){e.nativeEvent.target===F.current&&(b(!1),null!=_&&_(e))}),[F,b,_]),V=r.useCallback((function(e){e.nativeEvent.target===F.current&&(b(!0),null!=l&&l(e))}),[F,b,l]),x=r.useCallback((function(e){null!=B&&B(e),null!=s&&s(e)}),[s,B]),j=r.useCallback((function(e){null!=H&&H(e),null!=A&&A(e)}),[A,H]);return r.createElement(Ee.a,_e({},m,w,{accessibilityDisabled:u,focusable:!u&&!1!==E,onBlur:W,onContextMenu:x,onFocus:V,onKeyDown:j,ref:U,style:[!u&&de.root,"function"===typeof I?I($):I]}),"function"===typeof t?t($):t)}function le(e){var n=Object(r.useState)(!1);return[n[0]||e,n[1]]}var de=ue.a.create({root:{cursor:"pointer",touchAction:"manipulation"}}),Re=Object(r.memo)(Object(r.forwardRef)(se));Re.displayName="Pressable";n.a=Re},VPW4:function(e,n,t){"use strict";var r=t("ERkP"),o=t("vlSS"),i=t("MWbm");function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}var c={max:1,min:0},u=function(e){return r.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style:e})},E=r.forwardRef((function(e,n){var t=e.animating,o=void 0===t||t,E=e.color,l=void 0===E?"#1976D2":E,d=e.hidesWhenStopped,R=void 0===d||d,A=e.size,S=void 0===A?"small":A,f=e.style,T=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["animating","color","hidesWhenStopped","size","style"]),g=r.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},u({stroke:l,opacity:.2}),u({stroke:l,strokeDasharray:80,strokeDashoffset:60}));return r.createElement(i.a,a({},T,{accessibilityRole:"progressbar",accessibilityValue:c,ref:n,style:[_.container,f]}),r.createElement(i.a,{children:g,style:["number"===typeof S?{height:S,width:S}:s[S],_.animation,!o&&_.animationPause,!o&&R&&_.hidesWhenStopped]}))}));E.displayName="ActivityIndicator";var _=o.a.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:[{rotate:"0deg"}]},"100%":{transform:[{rotate:"360deg"}]}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),s=o.a.create({small:{width:20,height:20},large:{width:36,height:36}});n.a=E},ZOmn:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={$x:2,$x2:4,$x4:8,$x3:6,$x5:10,$x6:12,$x7:14,$x8:16,$x9:18,$x10:20,$x11:22,$x12:24,$x14:28,$x16:32,$x18:36,$x20:40,$x30:60,$x32:64,$x40:80}},Zmav:function(e,n,t){"use strict";t.d(n,"f",(function(){return r})),t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return c})),t.d(n,"e",(function(){return u})),t.d(n,"g",(function(){return E}));var r="#0078DB",o="#FFFFFF",i="#8993A4",a="#42526E",c="#091E42",u="#041533",E="#EFEFEF"},frvp:function(e,n,t){"use strict";t.d(n,"a",(function(){return _}));var r=t("97Jx"),o=t.n(r),i=t("ERkP"),a=t.n(i),c=t("vVqm"),u=t("aWzz"),E=t.n(u),_=function(e){var n=e.type,t=c.a.sendSectionClickTracking(e.page,e.referrer);return a.a.createElement(n,o()({},e,{onPress:function(n){t(e.tag,e.moreParams,e.stage,e.workFlow),e.onPress&&e.onPress(n)}}),e.children)};_.propTypes={page:E.a.string.isRequired,referrer:E.a.string,tag:E.a.string.isRequired,onPress:E.a.func,moreParams:E.a.object,children:E.a.node,type:E.a.any,workFlow:E.a.string,stage:E.a.string},_.defaultProps={stage:"FINAL",workFlow:""}},gmMA:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"d",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return c}));var r=t("w+tG"),o="https://www.facebook.com/99acres/",i="https://www.youtube.com/user/99acresindia",a="https://twitter.com/99acresIndia",c=r.a.API_URL},kqW6:function(e,n,t){"use strict";t.r(n),t.d(n,"sendCampaignTracking",(function(){return s})),t.d(n,"sendCsEvent",(function(){return l})),t.d(n,"sendSectionTracking",(function(){return d})),t.d(n,"GetCustomTrackingForRatings",(function(){return R})),t.d(n,"getCustomTrackingForSrpRnr",(function(){return A})),t.d(n,"sendSectionViewTracking",(function(){return S})),t.d(n,"sendSectionClickTracking",(function(){return f})),t.d(n,"sendPageViewTracking",(function(){return T})),t.d(n,"sendPageViewTrackingEnhanced",(function(){return g}));var r=t("KEM+"),o=t.n(r),i=t("ErFu"),a=t("4LIG"),c=t("nsO7"),u=t.n(c);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s=function(e){a.a.OS},l=function(e,n,t){var r=null===t||void 0===t?void 0:t.payload;r&&"web"===a.a.OS&&delete t.payload;var o=u.a.pickBy(t,(function(e){return!u.a.isUndefined(e)&&!u.a.isNull(e)})),c=u.a.pickBy(e,(function(e){return!u.a.isUndefined(e)&&!u.a.isNull(e)})),E={action:_({},e),custom_object:_({},t),payload:r};"android"===a.a.OS?function(e,n,t){i.a.CsTrackingModule.sendCsEvent(e,n,t)}(c,n,o):"ios"===a.a.OS?function(e,n,t){i.a.ReactCommManager.sendCSTracking(e,n,t)}(c,n,o):function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e;n&&(r={action:generateTrackingAction(e)}),t&&t.constructor===Object&&0!==Object.keys(t).length&&(r=_(_({},r),t)),"undefined"!=typeof document.URL&&(r.referrer=document.URL),fetch("https://www.99acres.com/do/clickStreamTracking/ClickStream/trackData",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"trackingData[]=".concat(encodeURIComponent(JSON.stringify(r)))}).then((function(e){})).catch((function(e){}))}(E,!1)},d=u.a.curry((function(e,n,t,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"FINAL",a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",u={page:n,stage:i,event:e,section:r,referrer_section:c};"string"===typeof a&&""!=a&&(u=_(_({},u),{},{workflow:a})),l(u,t,o)})),R=function(e){var n="";if(e.pageName?n=e.pageName:e.length>0&&(n=e),n.length>0){var t="";return t=n.indexOf("XID")>-1?"Project":"Locality",{Page:n,Review:t}}},A=function(e,n,t){var r=e.CityID,o=e.Preference;return{CityID:r,LocalityID:null===n||void 0===n?void 0:n.locationId,Preference:o,abCookie:t}},S=d("SECTION_VIEW"),f=d("CLICK"),T=function(e,n){return d("PAGE_VIEW",e,n)},g=d("PAGE_VIEW")},o8XP:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r,o=t("KEM+"),i=t.n(o),a=(r={$P050:"#F0F9FF",$P100:"#D6EFFF",$P200:"#A3DAFF",$P300:"#80BCE9",$P400:"#3496D9",$P500:"#0078DB",$P600:"#006AC2",$P700:"#005CA8",$P800:"#004E8F",$P900:"#004075",$A050:"#FFFBF3",$A100:"#FFF5E4",$A200:"#FFE6BC",$A300:"#F6D399",$A400:"#FFC27A",$A500:"#FFAA3E",$A600:"#EC9930",$A700:"#C67A19",$A800:"#9F600F",$A900:"#844B00",$Ng100:"#FFFFFF",$Ng200:"#F4F5F7",$Ng300:"#EBECF0",$Ng400:"#8993A4",$Ng500:"#42526E",$Ng600:"#253858",$Ng700:"#091E42",$Ng800:"#041533",$Ng900:"#010C1F",$bdgsBgSubtleAccent:"#FFFBF3",$bdgsBgSubtleError:"#FFDEDE",$bdgsBgSubtlePrimary:"#D6EFFF",$bdgsBgSubtleSecondary:"#EBECF0",$bdgsBgSubtleSuccess:"#D7F2E3",$bdgsBgSubtleWarning:"#FEECC7",$bdgsForeColorWhite:"#FFFFFF",$bdgsForeColorPrimary:"#0078DB",$bdgsForeColorSecondary:"#42526E",$bdgsForeColorWarning:"#994F00",$bdgsForeColorAccent:"#E03636",$bdgsForeColorError:"#B21D1D",$bdgsForeColorSuccess:"#2E7B32"},i()(r,"$bdgsForeColorWarning","#994F00"),i()(r,"$transparent","transparent"),i()(r,"$darkGround","#151C22"),i()(r,"$scrimDark","rgba(21, 28, 34, 0.7)"),i()(r,"$scrimLight","rgba(255, 255, 255, 0.9)"),i()(r,"$bdgsBgAccent","#FFAA3E"),i()(r,"$bdgsBgContacted","#3496D9"),i()(r,"$bdgsBgError","#C41F1F"),i()(r,"$bdgsBgFeatured","#B00AB6"),i()(r,"$bdgsLightFeatured","#F5E7F6"),i()(r,"$bdgsBgNewProp","#2723A7"),i()(r,"$bdgsBgOffer","#E50000"),i()(r,"$bdgsBgPrimary","#0078DB"),i()(r,"$bdgsBgRera","#06AFB0"),i()(r,"$bdgsBgSecondary","#FFFFFF"),i()(r,"$bdgsBgTopDealer","#FF971A"),i()(r,"$bdgsBgSeen","#151C22B2"),i()(r,"$bdgsBgVerified","#28AD35"),i()(r,"$bdgsBgWarning","#FFAB00"),i()(r,"$error","#C41F1F"),i()(r,"$errorSubtle","#FFDEDE"),i()(r,"$success","#28AD35"),i()(r,"$successApp","#317A36"),i()(r,"$successSubtle","#D7F2E3"),i()(r,"$warning","#FFAB00"),i()(r,"$warningSubtle","#FEECC7"),i()(r,"$offerSubtle","#FCE3EF"),i()(r,"$offerSolid","#C51366"),i()(r,"$P500_aplha50","#0078DB7F"),r)},rVPv:function(e,n,t){"use strict";n.a={REVIEW_FORM:"REVIEW_FORM",REVIEWING_FOR:"REVIEWING_FOR",YOU_KNOW_THIS:"YOU_KNOW_THIS",SEE_SAMPLE_POSITIVE:"SEE_SAMPLE_POSITIVE",SEE_SAMPLE_NEGATIVE:"SEE_SAMPLE_NEGATIVE",POSITIVE_TAGS:"POSITIVE_TAGS",NEGATIVE_TAGS:"NEGATIVE_TAGS",COMMUNITY_GUIDELINES:"COMMUNITY_GUIDELINES",QUIT_FORM:"QUIT_FORM",CONTINUE:"CONTINUE",EXIT:"EXIT",POST_REVIEW:"POST_REVIEW",BOTTOM_SHEET:"BOTTOM_SHEET",NAME:"NAME",ANONYMOUS:"ANONYMOUS",EMAIL_ID:"EMAIL_ID",PHONE_NO:"PHONE_NO",POST_NOW:"POST_NOW",TERMS_CONDITIONS:"TERMS_CONDITIONS",THANKYOU_PAGE:"THANKYOU_PAGE",REVIEW:"REVIEW",DOWNLOAD_INSIGHT:"DOWNLOAD_INSIGHT",SURVEY:"SURVEY",RATINGS:"RATING",WRITE_A_REVIEW:"WRITE_A_REVIEW",RATING_REVIEW:"RATING_REVIEW",REVIEW_WIDGET:"REVIEW_WIDGET",RATING_WISE_DISPLAY:"RATING_WISE_DISPLAY",RATING_FEATURE:"RATING_FEATURE",POSITIVE_TAG:"POSITIVE_TAG",NEGATIVE_TAG:"NEGATIVE_TAG",REVIEWS:"REVIEWS",VIEW_ALL:"VIEW_ALL",REVIEWS_DETAIL:"REVIEWS_DETAIL",REPORT_NOW:"REPORT_NOW",REPORT:"REPORT",HELPFUL:"HELPFUL",SORTING:"SORTING",SHOW_MORE:"SHOW_MORE",PAYTM_BANNER:"PAYTM_CASHBACK",REVIEW_PAYTM_BANNER:"REVIEW_PAYTM_BANNER",HP_PAYTM_CASHBACK:"HP_PAYTM_CASHBACK",LOCALITY_REVIEW_CARD:"LOCALITY_REVIEW_CARD",REVIEW_EOI_CARD:"REVIEW_EOI_CARD",RATING_LEVEL:"RATING_LEVEL",ARROW:"ARROW",READ_ALL_CARD:"READ_ALL_CARD",PRICE_DISTRIBUTION:"PRICE_DISTRIBUTION",DROPDOWN:"DROPDOWN",CHANGE_PREFERENCE:"CHANGE_PREFERENCE",MENTIONS:"MENTIONS",REI:"REI",HP:"HP",XID:"XID",PD:"PD",SRP:"SRP",SEARCH_FORM:"SEARCH_FORM",POINTS_TO_CONSIDER:"POINTS_TO_CONSIDER",FEEDBACK:"FEEDBACK",RATING:"RATING",SUBMIT:"SUBMIT",ARTICLES:"ARTICLES",TUPLE:"TUPLE",SEE_ALL_REVIEWS:"SEE_ALL_REVIEWS",UNIT_OPTIONS:"UNIT_OPTIONS",PREFERENCE:"PREFERENCE",VIEW_PROJECTS:"VIEW_PROJECTS",VIEW_PROPERTIES:"VIEW_PROPERTIES",OTHER_ZONES:"OTHER_ZONES",LOCALITIES_BY_RATINGS:"LOCALITIES_BY_RATINGS",SEE_ALL:"SEE_ALL",VIEW_MORE:"VIEW_MORE",SHARE:"SHARE",SHORTLIST:"SHORTLIST",ABOUT_LOCALITY:"ABOUT_LOCALITY",LOCALITY_LIST_PAGE:"LOCALITY_LIST_PAGE",GET_INSIGHT_ABOUT_LOCALITY:"GET_INSIGHT_ABOUT_LOCALITY",OVERALL_RATING:"OVERALL_RATING",TOP_INSIGHT:"TOP_INSIGHT",UPCOMING_DEVELOPMENTS:"UPCOMING_DEVELOPMENTS",REVIEW_BANNER:"REVIEW_BANNER",GOVT_CHARGES_PAGE:"GOVT_CHARGES_DETAIL",GOVT_CHARGES_LABEL:"GOVT_CHARGES_LABEL",SUMMARY_TABLE:"SUMMARY_TABLE",EOI_TY_PAGE:"EOI_TY_PAGE",REVIEW_BANNER_REVIEW:"REVIEW_BANNER.REVIEW",MANAGE_LISTING:"MANAGE_LISTING",HOME_PAGE:"HP",SUBSCRIPTION_SUMMARY:"SUBSCRIPTION_SUMMARY_LAYER",UPGRADE:"UPGRADE",DEALER_LISTINGS:"DEALER_LISTINGS",MORE_DEALER:"MORE_DEALER",MORE_DEALERS_SHOW_MORE:"MORE_DEALER_SHOW_MORE_TAPPED",MORE_DEALER_TAPPED:"MORE_DEALER_TAPPED",FD_WIDGET:"FD_WIDGET",CLOSE_TAPPED:"CLOSE_TAPPED",Call_Now_Tapped:"CALL_NOW_TAPPED",Whatsapp_Tapped:"WHATSAPP_TAPPED",Fd_Tapped:"FD_TAPPED",Matching_Props_Tapped:"MATCHING_PROPS_TAPPED",View_All_Tapped:"VIEW_ALL_TAPPED",Fd_show_more_Tapped:"FD_SHOW_MORE_TAPPED",Hamburger:"HAMBURGER",Dealer_Dashboard:"DEALER_DASHBOARD",Overall_reach:"OVERALL_REACH",Info_Tapped:"INFO_TAPPED",Config_Tapped:"CONFIG_TAPPED",Know_audience:"KNOW_AUDIENCE",performance:"PERFORMANCE",Contact_Support_Tapped:"CONTACT_SUPPORT_TAPPED",Know_More_Tapped:"KNOW_MORE_TAPPED",Subscription_expired:"SUBSCRIPTION_EXPIRED",Subscription_warning:"SUBSCRIPTION_WARNING",FD_layer:"FD_LAYER"}},siKw:function(e,n,t){"use strict";t.r(n),t.d(n,"base",(function(){return _})),t.d(n,"baseBold",(function(){return s})),t.d(n,"baseSemiBold",(function(){return l})),t.d(n,"boldTitle",(function(){return d})),t.d(n,"boldLargeEvenTitle",(function(){return R})),t.d(n,"captionSmallSubdued",(function(){return A})),t.d(n,"captionSmallStrong",(function(){return S})),t.d(n,"captionExtraSmallSubdued",(function(){return f})),t.d(n,"customTagSmall",(function(){return T})),t.d(n,"mediumSmall",(function(){return g})),t.d(n,"semiboldSmallText",(function(){return O})),t.d(n,"semiBoldExtraSmallText",(function(){return I})),t.d(n,"regularSmallText",(function(){return P})),t.d(n,"semiBoldSmallText",(function(){return p})),t.d(n,"regularMediumWhiteText",(function(){return m})),t.d(n,"semiBoldMediumWhiteText",(function(){return v})),t.d(n,"regularMediumText",(function(){return L})),t.d(n,"boldMediumText",(function(){return G})),t.d(n,"smallCaptionSubdued10px",(function(){return C})),t.d(n,"mediumCaptionSubdued",(function(){return N})),t.d(n,"bodyMediumSemibold",(function(){return b})),t.d(n,"semiboldLargeEven",(function(){return y})),t.d(n,"linkSmallText",(function(){return D})),t.d(n,"linkMediumText",(function(){return h})),t.d(n,"regularSmallWhiteText",(function(){return F}));var r=t("KEM+"),o=t.n(r),i=t("Zmav"),a=t("28PD"),c=t("4LIG");function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=E(E({},c.a.select({android:{fontFamily:"OpenSans-Regular"},default:{fontFamily:"Open Sans"}})),{},{fontStyle:"normal"}),s=E(E({},_),c.a.select({android:{fontFamily:"OpenSans-Bold"},default:{fontWeight:"bold"}})),l=E(E({},_),c.a.select({android:{fontFamily:"OpenSans-SemiBold"},default:{fontWeight:"600"}})),d=E(E({},s),{},{fontSize:a.large,color:i.e}),R=E(E({},s),{},{fontSize:a.large_even,color:i.e}),A=E(E({},_),{},{fontSize:a.large_medium_even,color:i.e}),S=E(E({},_),{},{fontSize:a.medium_even,color:i.c}),f=E(E({},_),{},{fontSize:a.small,color:i.b}),T=E(E({},l),{},{fontSize:a.small_even,color:i.c}),g=E(E({},_),{},{fontSize:a.small,color:i.c}),O=E(E({},l),{},{fontSize:a.medium_even,color:i.e}),I=E(E({},l),{},{fontSize:a.small_even,color:i.d,lineHeight:a.small}),P=E(E({},_),{},{fontSize:a.medium_even,color:i.d}),p=E(E({},l),{},{fontSize:a.medium_even,color:i.d,lineHeight:a.large_even}),m=E(E({},_),{},{fontSize:a.large_medium_even,color:i.a}),v=E(E({},l),{},{fontSize:a.large_medium_even,color:i.a}),L=E(E({},_),{},{fontSize:a.large_medium_even,color:i.c}),G=E(E({},s),{},{fontSize:a.large,color:i.e}),C=E(E({},_),{},{fontSize:a.small,color:i.b,lineHeight:12}),N=E(E({},_),{},{fontSize:a.medium_even,color:i.b,lineHeight:16}),b=E(E({},l),{},{fontSize:a.large_medium_even,color:i.e,lineHeight:a.large}),y=E(E({},l),{},{fontSize:a.large_even,lineHeight:a.extra_large_even}),D=E(E({},l),{},{fontSize:a.medium_even,color:i.f,lineHeight:a.large_even}),h=E(E({},l),{},{fontSize:a.large_medium_even,color:i.f,lineHeight:a.large}),F=E(E({},_),{},{fontSize:a.small,color:i.a})},vVqm:function(e,n,t){"use strict";var r=t("kqW6");t.d(n,"a",(function(){return r}))},"w+tG":function(e,n,t){"use strict";t.d(n,"a",(function(){return R}));var r=t("KEM+"),o=t.n(r);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var c="https://www.99acres.com",u="https://www.99acres.com",E="//s.99acres.com",_="http://sums.99acres.com",s="http://99services.99.jsb9.net",l={production:{SITE_URL:c,API_URL:u,SSR_BASE_DNS:s,CSR_BASE_DNS:u,SEARCH_URL:E,SEARCH_SUBMIT_URL:u,SELLER_AGGREGATOR_PATH:"/api-aggregator/seller",DISCOVERY_AGGREGATOR_PATH:"/aggregator-discovery-service/aggregators",SSR_DISCOVERY_GENERIC_AGGREGATOR_PATH:"/discovery-generic-service",CONTENT_AGGREGATOR_PATH:"/aggregator-service/aggregators",SUMS_SITE_URL:_,CONTENT_GENERIC_AGGREGATOR_PATH:"/api-aggregator/content",SELLER_AGG_PATH:"/seller-aggregator",MY99_AGGR_URL:"/my99",BOS_URL:c,BOS_API_URL:c,CRM_URL:"http://crm.99acres.com",CHATBOT_URL:"https://chatclient.99acres.com/"},sanity:{SITE_URL:c,API_URL:u,SSR_BASE_DNS:u,CSR_BASE_DNS:u,SEARCH_URL:E,SEARCH_SUBMIT_URL:u,SELLER_AGGREGATOR_PATH:"/api-aggregator/seller",DISCOVERY_AGGREGATOR_PATH:"/api-aggregator",SSR_DISCOVERY_GENERIC_AGGREGATOR_PATH:"/discovery-generic-service",CONTENT_AGGREGATOR_PATH:"/api-aggregator",SUMS_SITE_URL:_,CONTENT_GENERIC_AGGREGATOR_PATH:"/api-aggregator/content",SELLER_AGG_PATH:"/seller-aggregator",MY99_AGGR_URL:"/my99",BOS_API_URL:u,BOS_URL:u,CRM_URL:"http://crm.99sanity.infoedge.com",CHATBOT_URL:"http://nnsearch-chatbot.infoedge.com/"},development:{SITE_URL:"http://setupdev-4.infoedge.com",API_URL:"https://www.99acres.com",SSR_BASE_DNS:u,CSR_BASE_DNS:u,SEARCH_URL:E,SEARCH_SUBMIT_URL:u,DISCOVERY_AGGREGATOR_PATH:"/api-aggregator",SSR_DISCOVERY_GENERIC_AGGREGATOR_PATH:"/discovery-generic-service",CONTENT_AGGREGATOR_PATH:"/api-aggregator",SUMS_SITE_URL:_,SELLER_AGGREGATOR_PATH:"/api-aggregator/seller",CONTENT_GENERIC_AGGREGATOR_PATH:"/api-aggregator/content",SELLER_AGG_PATH:"/seller-aggregator",MY99_AGGR_URL:"/my99",BOS_API_URL:"http://setupdev-4.infoedge.com",BOS_URL:"http://setupdev-4.infoedge.com",CRM_URL:"http://crm.setupdev-4.infoedge.com"},local:{SITE_URL:"http://sanity11.infoedge.com",API_URL:"https://sanity11.infoedge.com",SSR_BASE_DNS:"http://sanity11.infoedge.com",CSR_BASE_DNS:"http://sanity11.infoedge.com",SEARCH_URL:E,SEARCH_SUBMIT_URL:u,DISCOVERY_AGGREGATOR_PATH:"/api-aggregator",SSR_DISCOVERY_GENERIC_AGGREGATOR_PATH:"/discovery-generic-service",CONTENT_AGGREGATOR_PATH:"/api-aggregator",SUMS_SITE_URL:_,SELLER_AGGREGATOR_PATH:"/api-aggregator/seller",CONTENT_GENERIC_AGGREGATOR_PATH:"/api-aggregator/content",SELLER_AGG_PATH:"/seller-aggregator",MY99_AGGR_URL:"/my99",BOS_API_URL:"https://www.99acres.com",BOS_URL:"https://www.99acres.com",CRM_URL:"http://crm.99sanity.infoedge.com",CHATBOT_URL:"https://chatclient.99acres.com/"}},d={BASE_AGGREGATOR_PATH:"/api-aggregator",CSR_DISCOVERY_AGGREGATOR_PATH:"/api-aggregator/discovery",PROJECT_SEARCH_URL:"/project/search",PROJECT_URL:"/project",PROPERTY_SEARCH_URL:"/srp/search",BUILDER_SRP_SEARCH_URL:"/search/builders",PRICE_ESRIMATOR_URL:"/estimator",PROJECT_DETAILS_AGGR_URL:"/project-details",PROJECT_DETAILS_AGGR_V2_URL:"/v2/project-details",PROJECT_DETAILS_AGGR_V3_URL:"/v3/project-details",STATIC_CONTENT_URL:"https://static.99acres.com/",RECOM_PAGE_URL:"/recom/vsp",COUNT_SERVICE_URL:"/count",SUMS_API:"/seller-aggregator",SELLER_AGGREGATOR_PATH:"/api-aggregator/seller",LOCATION_AGGR_URL:"/locations",REI_AGGR_URL:"/rei",SELLER_AGG_PATH:"/seller-aggregator",MY99_AGGR_URL:"/my99",CONTENT_GENERIC_AGGREGATOR_SSR_PATH:"/content-generic-service",SERCVICES_BASE_URL:s,NAUKRI_WIDGET_SDK:"https://static.naukimg.com/s/7/0/j/naukri-widget_v10.1.min.js"},R=("".concat(d.STATIC_CONTENT_URL,"universalapp/img"),a(a({},l.production),d))}}]);