(window.webpackJsonp=window.webpackJsonp||[]).push([[119,185],{"2yl3":function(t,e,a){t.exports={chatBotBox:"chatBot__chatBotBox",redOnline:"chatBot__redOnline",chatBot_iframe:"chatBot__chatBot_iframe",chatBotButton:"chatBot__chatBotButton",chatBot_Icn_Pos:"chatBot__chatBot_Icn_Pos",animationRotate:"chatBot__animationRotate",fadeIn:"chatBot__fadeIn",msgBubble:"chatBot__msgBubble",subFilterDesktop:"chatBot__subFilterDesktop",subFilterMobile:"chatBot__subFilterMobile",chatBotInitMsgBox:"chatBot__chatBotInitMsgBox",closePos:"chatBot__closePos",desktopPlacement:"chatBot__desktopPlacement",mobilePlacement:"chatBot__mobilePlacement",chatIcon:"chatBot__chatIcon",grayDialogue:"chatBot__grayDialogue",startMsg:"chatBot__startMsg",chatOptionWrap:"chatBot__chatOptionWrap",blueOption:"chatBot__blueOption",slideUpAnim:"chatBot__slideUpAnim",slideUp:"chatBot__slideUp"}},"3sur":function(t,e,a){"use strict";a.r(e);var o=a("VrFO"),n=a.n(o),s=a("Y9Ll"),i=a.n(s),c=a("1Pcy"),r=a.n(c),l=a("5Yy7"),h=a.n(l),d=a("N+ot"),u=a.n(d),m=a("AuHH"),p=a.n(m),y=a("KEM+"),T=a.n(y),g=a("ERkP"),f=a.n(g),_=a("uDfI"),v=a("2yl3"),w=a.n(v),b=a("Ddwi"),C=a("rVU0"),B=function(t){var e=t.heading,a=void 0===e?"":e,o=t.subHeading,n=void 0===o?"":o,s=t.dataCustomInfo,i=void 0===s?"":s,c=t.additionalText,r=void 0===c?"":c;return f.a.createElement("div",{style:{width:"100%",height:r?"180px":"160px"}},f.a.createElement("div",{className:w.a.chatIcon},f.a.createElement("div",{className:w.a.chatBotButton},f.a.createElement("i",{className:"iconS_Common_24 ".concat(w.a.chatBot_Icn_Pos," icon_chatBot")}))),f.a.createElement("div",{class:w.a.grayDialogue},f.a.createElement("div",{class:w.a.startMsg},f.a.createElement("span",null,a||"Hi, I\u2019m 99acres AI Assistant"),n?f.a.createElement("span",{className:"Ng500 normal"},n):"Allow me to help you find your dream home.",r?f.a.createElement("div",null,f.a.createElement("div",{className:"spacer8"}),f.a.createElement("div",{className:"Ng500 normal"},r)):null)),f.a.createElement("div",{class:w.a.chatOptionWrap},f.a.createElement("div",{onClick:function(){return t.setShowChatTray(3)},"data-label":"CHATBOT_NO_THANKS",topmost:"true","data-customInfo":i},"No Thanks, later"),f.a.createElement("div",{class:w.a.blueOption,onClick:function(){t.setShowChatTray(3),t.setShowChatForm(!0)},"data-label":"CHATBOT_LETS_BEGIN",topmost:"true","data-customInfo":i},"Let\u2019s Begin")))},S=a("4DJv"),E=a("/X9P");function I(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=p()(t);if(e){var n=p()(this).constructor;a=Reflect.construct(o,arguments,n)}else a=o.apply(this,arguments);return u()(this,a)}}var k=a("yMbT").f.CHATBOT_URL,M=Object(S.a)((function(){return a.e(353).then(a.bind(null,"6k0e"))})),L=function(t){h()(a,t);var e=I(a);function a(t){var o;return n()(this,a),o=e.call(this,t),T()(r()(o),"setShowChatTray",(function(t){o.setState({showChatTray:t})})),T()(r()(o),"setshouldShowChatTray",(function(t){o.setState({shouldShowChatTray:t})})),T()(r()(o),"setshouldChangeValue",(function(t){o.setState({shouldChangeValue:t})})),T()(r()(o),"setShowChatForm",(function(t){o.setState({loadChatLayer:!0,showChatForm:t})})),T()(r()(o),"trackScrolling",(function(){var t=o.props,e=t.isMobile,a=t.page,n=void 0===a?"":a,s=t.targetId,i=void 0===s?"":s,c=o.state,r=c.showChatTray,l=c.showChatForm;if("seller_homepage"==n&&e)window.scrollY>=500&&o.state.showInitialMsg&&o.setState({showInitialMsg:!1});else if("bos"==n&&e){window.scrollY>=500&&o.state.showInitialMsg&&o.setState({showInitialMsg:!1});var h=new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&1==o.state.showChatTray&&o.setShowChatTray(2)}))})),d=document.getElementById(i);d&&h.observe(d)}else window.innerHeight+window.scrollY>=document.body.scrollHeight&&(e?1==r&&o.setShowChatTray(2):l||(o.chatHeadAnimation(),o.setShowChatForm(!0)))})),T()(r()(o),"inactivityTime",(function(){document.addEventListener("keypress",o.resetTimer,!1),o.startTimer()})),T()(r()(o),"startTimer",(function(){o.timeoutID=window.setTimeout(o.goInactive,6e4)})),T()(r()(o),"resetTimer",(function(){window.clearTimeout(o.timeoutID)})),T()(r()(o),"goInactive",(function(){var t=o.props.isMobile,e=o.state,a=e.showChatTray,n=e.showChatForm;t?1==a&&o.setShowChatTray(2):n||(o.chatHeadAnimation(),o.setShowChatForm(!0))})),T()(r()(o),"chatHeadAnimation",(function(){document.getElementById("chatBotIcon").classList.add(w.a.animationRotate),setTimeout((function(){document.getElementById("chatBotIcon").classList.contains("icon_chatBot")?(document.getElementById("chatBotIcon").classList.remove("icon_chatBot"),document.getElementById("chatBotIcon").classList.add("icon_whiteUpArrow")):(document.getElementById("chatBotIcon").classList.remove("icon_whiteUpArrow"),document.getElementById("chatBotIcon").classList.add("icon_chatBot"))}),250),setTimeout((function(){document.getElementById("chatBotIcon").classList.remove(w.a.animationRotate)}),251)})),o.state={showChatForm:!1,showChatTray:1,loadChatLayer:!1,showInitialMsg:!0,shouldShowChatTray:!0,shouldChangeValue:!1},o}return i()(a,[{key:"componentDidMount",value:function(){var t=this;if(this.props.disableInactiveFlow||this.inactivityTime(),this.props.initialMsg){var e=this.props.initMsgDuration||5e3;setTimeout((function(){t.setState({showInitialMsg:!1})}),e)}this.props.showInOpenedState&&(this.setShowChatForm(!0),this.setShowChatTray(3),!this.props.isMobile&&this.chatHeadAnimation()),document.addEventListener("scroll",this.trackScrolling)}},{key:"render",value:function(){var t=this,e=this.props,a=e.isMobile,o=e.filters,n=void 0===o?{}:o,s=e.abCookie,i=e.page,c=e.dataCustomInfo,r=void 0===c?"":c,l=e.maxZIndex,h=void 0===l?99999:l,d=e.classProp,u=void 0===d?"":d,m=this.state,p=m.showChatForm,y=m.showChatTray,T=m.loadChatLayer,g=m.showInitialMsg,_=m.shouldShowChatTray,v=m.shouldChangeValue;if("bos"!=i&&"seller_homepage"!=i&&"Sale"!=n.preference)return null;var S=Object(C.getCookieData)("msgCount"),I=Object(C.convertObjectToParamString)(n),L="".concat(k,"assistant?").concat(I,"&abCookie=").concat(s),P=Object(C.getCookieData)("chatTrayShownTimestamp"),N=Object(C.getCookieData)("chatTrayShow"),x=!(!a||"true"!=N)&&(new Date).getTime()-(P||0)>=36e5;if(P&&x&&(a&&(this.setShowChatTray(2),Object(E.b)("chatTrayShow",!1)),this.setshouldChangeValue(!1),this.setshouldShowChatTray(!0)),2!=y&&3!=y||v||(P?x?this.setshouldShowChatTray(!0):(this.setshouldShowChatTray(!1),this.setshouldChangeValue(!0)):3==y&&a&&(Object(E.b)("chatTrayShownTimestamp",(new Date).getTime()),Object(E.b)("chatTrayShow",!1))),_&&2==y&&!p&&a){var O={open:2==y};return f.a.createElement(b.a,{childComp:f.a.createElement(B,{setShowChatForm:this.setShowChatForm,setShowChatTray:this.setShowChatTray,heading:this.props.heading||"",subHeading:this.props.subHeading||"",additionalText:this.props.additionalText||"",dataCustomInfo:r}),lightBox:!0,clsName:"pageTrayBottom",modalTray:O,closeModalTray:function(){return t.setShowChatTray(3)}})}return f.a.createElement("div",{className:"".concat(w.a.chatBotBox," pageComponent ").concat(a?w.a.mobilePlacement:w.a.desktopPlacement," ").concat(u||""),"data-label":p?"CHATBOT_CLOSE":"CHATBOT_OPEN",topmost:"true","data-customInfo":r,style:{zIndex:p?h:2}},f.a.createElement("div",{className:"".concat(w.a.chatBotButton," ").concat(w.a.slideUpAnim),onClick:function(){t.setShowChatForm(!p),t.setShowChatTray(3),!a&&t.chatHeadAnimation()}},f.a.createElement("i",{id:"chatBotIcon",className:"iconS_Common_24 ".concat(w.a.chatBot_Icn_Pos," icon_chatBot")}),"bos"!=this.props.page&&"seller_homepage"!=this.props.page?f.a.createElement("div",{className:!p&&S<2?w.a.redOnline:""}):f.a.createElement("div",{className:"badges_large_primary_white bold ".concat(p?"":0==S?w.a.redOnline:w.a.msgBubble)},S||null)),g&&this.props.initialMsg?f.a.createElement("div",{className:w.a.chatBotInitMsgBox,onClick:function(){return t.setState({showInitialMsg:!1})}},f.a.createElement("i",{className:"iconS_Common_16 icon_close ".concat(w.a.closePos)}),f.a.createElement("div",{className:"caption_subdued_large Ng800"},this.props.initialMsg)):null,T&&f.a.createElement(M,{isMobile:a,chatbotUrl:L,setShowChatForm:this.setShowChatForm,showChatForm:p,chatHeadAnimation:this.chatHeadAnimation,dataCustomInfo:r}))}}]),a}(f.a.Component);e.default=Object(_.b)((function(t){return{isMobile:t.global.isMobile}}),null)(L)},Ddwi:function(t,e,a){"use strict";var o=a("97Jx"),n=a.n(o),s=a("VrFO"),i=a.n(s),c=a("Y9Ll"),r=a.n(c),l=a("1Pcy"),h=a.n(l),d=a("5Yy7"),u=a.n(d),m=a("N+ot"),p=a.n(m),y=a("AuHH"),T=a.n(y),g=a("KEM+"),f=a.n(g),_=a("ERkP"),v=a.n(_),w=a("aWzz"),b=a.n(w),C=a("wRHO"),B=a.n(C);function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=T()(t);if(e){var n=T()(this).constructor;a=Reflect.construct(o,arguments,n)}else a=o.apply(this,arguments);return p()(this,a)}}b.a.string.isRequired;var E=function(t){u()(a,t);var e=S(a);function a(){var t;i()(this,a);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return t=e.call.apply(e,[this].concat(n)),f()(h()(t),"lastTouch",0),f()(h()(t),"state",{expanded:!1}),f()(h()(t),"closeTray",(function(e){var a=t.props.closeModalTray,o=void 0===a?function(){}:a;e.stopPropagation(),o()})),f()(h()(t),"handleClose",(function(e){e.stopPropagation(),t.props.closeModalTray(),"function"===typeof t.props.handleCloseAux&&t.props.handleCloseAux()})),f()(h()(t),"handleTouchStart",(function(e){t.lastTouch=e.nativeEvent.touches[0].clientY})),f()(h()(t),"handleTouchMove",(function(e){t.delta=t.lastTouch-e.nativeEvent.touches[0].clientY})),f()(h()(t),"handleTouchEnd",(function(e){0!==t.delta&&(t.delta>10?t.scrollUp(e):t.delta<-10&&t.scrollDown(e)),t.lastTouch=0,t.delta=0})),f()(h()(t),"scrollUp",(function(e){var a=t.state.expanded,o=document.querySelector(".pagetray__pageTrayBottom"),n=document.querySelector(".NearbyLandmarks__landMarkList"),s=0===n.scrollTop;!a&&s&&"touchend"===e.type&&t.setState({expanded:!0},(function(){"modalTray_".concat(t.props.modalTray.id);o.style.height="90%",n.style.height="".concat(.9*window.innerHeight-100,"px"),n.style.overflowY="scroll"}))})),f()(h()(t),"scrollDown",(function(e){var a=t.state.expanded,o=document.querySelector(".pagetray__pageTrayBottom"),n=document.querySelector(".NearbyLandmarks__landMarkList"),s=(n.scrollHeight,n.scrollTop,n.clientHeight,0===n.scrollTop);a&&s&&"touchend"===e.type&&t.setState({expanded:!1},(function(){"modalTray_".concat(t.props.modalTray.id);o.style.height="50%",n.style.height="266px",n.style.overflowY="hidden"}))})),t}return r()(a,[{key:"componentDidMount",value:function(){var t=this;this.props.modalTray.open&&(document.body.classList.add(B.a.modalTray_open),window.addEventListener("popstate",(function(e){return t.closeTray(e)})),setTimeout((function(){t.props.postMountHandler&&t.props.postMountHandler();var e="modalTray_".concat(t.props.modalTray.id),a=document.getElementById(e);a&&("reraPopup"!==t.props.modalTray.id||"reraPopupWithGdpr"!==t.props.modalTray.id||"reraPopupOpen"!==t.props.modalTray.id?t.props.fixedModal?a.style.overflow="hidden":(a.style.bottom="0",a.style.transition="bottom 0.3s linear"):(a.style.bottom="0",t.props.isNewRera&&(a.style.background="#F0F9FF")))}),100))}},{key:"componentWillUnmount",value:function(){var t=this;document.body.classList.remove(B.a.modalTray_open),window.removeEventListener("popstate",(function(e){return t.closeTray(e)}))}},{key:"componentDidUpdate",value:function(t){JSON.stringify(t.dropTrayDown)!==JSON.stringify(this.props.dropTrayDown)&&this.props.fixedModal&&this.scrollDown({type:"touchend"})}},{key:"render",value:function(){var t,e=this,a=this.props,o=a.lightBox,s=a.childComp,i=a.modalTray,c=a.fixedModal,r=void 0!==c&&c,l=a.blocking,h=void 0!==l&&l,d=(a.topmost,a.extraClss),u=void 0===d?"":d,m=a.expand,p=void 0!==m&&m,y=a.bgClickCLose,T=void 0!==y&&y,g=a.trayHandleClickClose,_=void 0!==g&&g,w=a.leftPadding,b=void 0===w||w,C=a.auxChildCls,S=void 0===C?"":C,E=a.crossButton,I=void 0!==E&&E,k=a.customStyle,M=void 0===k?{}:k;return t=1==i.open?r?{bottom:"50%",height:"50%",zIndex:"1000"}:{bottom:0}:{},i.open?v.a.createElement("div",n()({className:" pageComponent ".concat(B.a.pageTrayBottom," ").concat(u),style:t,ref:function(t){return e.element=t},"qa-id":this.props.qa_id,"data-label":this.props.attrDataLabel,id:this.props.attrDataLabel,topmost:"true",onTouchStart:r&&p?this.handleTouchStart:void 0,onTouchMove:r&&p?this.handleTouchMove:void 0,onTouchEnd:r&&p?this.handleTouchEnd:void 0},this.props.customInfo),v.a.createElement("div",{className:"".concat(B.a.PageTray," ").concat("LandmarkDetails"==i.id&&B.a.btmSheetHeight),id:"modalTray_".concat(i.id)},I?v.a.createElement("div",{onClick:function(t){(!r&&!h||_)&&e.handleClose(t)},className:"".concat(B.a.crossButton)},v.a.createElement("i",{className:"".concat(B.a.cross," iconS_Common_16 icon_close")})):v.a.createElement("div",{onClick:function(t){(!r&&!h||_)&&e.handleClose(t)},className:"".concat(B.a.PageTrayHandle," ")}),v.a.createElement("div",f()({className:"".concat(B.a.PageTrayList," ").concat(b?"":B.a.noLeftPadding," ").concat(S),style:{overflow:"".concat(r?"hidden":"")}},"style",M),s)),!0===o&&!r&&1==i.open&&v.a.createElement("div",{onClick:r?null:this.handleClose,className:"".concat(B.a.bgLayerBlack)}),!o&&!r&&1==i.open&&v.a.createElement("div",{onClick:r?null:this.handleClose,className:"".concat(B.a.bgLayerTransparent)}),!!h&&v.a.createElement("div",{className:"".concat(B.a.bgLayerTransparent)}),!0===T&&1==i.open&&v.a.createElement("div",{onClick:this.handleClose,className:"".concat(B.a.bgLayerBlack)})):null}}]),a}(v.a.Component);e.a=E},wRHO:function(t,e,a){t.exports={pageTrayBottom:"bottomSheetTray__pageTrayBottom",PageTray:"bottomSheetTray__PageTray",height100radius0:"bottomSheetTray__height100radius0",PageTrayList:"bottomSheetTray__PageTrayList",noLeftPadding:"bottomSheetTray__noLeftPadding",PageTrayHandle:"bottomSheetTray__PageTrayHandle",bgLayerBlack:"bottomSheetTray__bgLayerBlack",bgLayerTransparent:"bottomSheetTray__bgLayerTransparent",modalTray_open:"bottomSheetTray__modalTray_open",fixedPopup:"bottomSheetTray__fixedPopup",crossButton:"bottomSheetTray__crossButton",cross:"bottomSheetTray__cross",btmSheetHeight:"bottomSheetTray__btmSheetHeight"}}}]);