(window.webpackJsonp=window.webpackJsonp||[]).push([[555],{"0hgU":function(e,t,a){e.exports={PageHeadingwrap:"xidHeading__PageHeadingwrap"}},"6UXG":function(e,t,a){"use strict";var n=a("m3Bd"),r=a.n(n),i=a("ERkP"),o=a.n(i),c=a("uDfI"),s=["isPageLoaded","setAttribute","Component","Loading","search_params","ysf_string"];t.a=Object(c.b)((function(e){return{isPageLoaded:e.global.isPageLoaded,search_params:((e.srp||{}).pageData||{}).search_params,ysf_string:((e.srp||{}).pageData||{}).ysf_string}}))((function(e){var t=e.isPageLoaded,a=e.setAttribute,n=void 0!==a&&a,c=e.Component,l=void 0===c?null:c,u=e.Loading,d=void 0===u?null:u,m=e.search_params,p=e.ysf_string,f=r()(e,s);return Object(i.useEffect)((function(){if(n&&t){var e={custom_object:{pageType:"MOBILE_SRP_REVAMP",res_com:m.res_com,preference:m.preference,ysf_string:p}};"L"===m.preference&&(e.custom_object.commercial_category=m.commercial_category),document.body.setAttribute("data-custominfo",JSON.stringify(e))}}),[t]),o.a.createElement(i.Fragment,null,t?o.a.createElement(l,f):d?o.a.createElement(d,null):null)}))},"K22+":function(e,t,a){e.exports={sideCurtain:"sideCurtain__sideCurtain",sideCurtainHeadingText:"sideCurtain__sideCurtainHeadingText",sideCurtainSubHeadingText:"sideCurtain__sideCurtainSubHeadingText",sideCurtainHead:"sideCurtain__sideCurtainHead",sideCurWrap:"sideCurtain__sideCurWrap",overFlwHid:"sideCurtain__overFlwHid",sideCurWrapReiDesktop:"sideCurtain__sideCurWrapReiDesktop",noPadding:"sideCurtain__noPadding",heightHead:"sideCurtain__heightHead",heightNav:"sideCurtain__heightNav",heightNavHead:"sideCurtain__heightNavHead",rightCurtain:"sideCurtain__rightCurtain",out:"sideCurtain__out",in:"sideCurtain__in",leftCurtain:"sideCurtain__leftCurtain",headingStyle:"sideCurtain__headingStyle",sideCurtainGstLayer:"sideCurtain__sideCurtainGstLayer",curtainCrossIcn:"sideCurtain__curtainCrossIcn",sideCurtainHeading:"sideCurtain__sideCurtainHeading",iconS_Respd_24:"sideCurtain__iconS_Respd_24",icon_targetIcon:"sideCurtain__icon_targetIcon",customHeight:"sideCurtain__customHeight",closeBtnClsReiDesktop:"sideCurtain__closeBtnClsReiDesktop"}},Mi4d:function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),i=a("0hgU"),o=a.n(i);t.a=function(e){var t=e.heading,a=e.subTxt,n=e.subTxtDdown,i=e.viewAll,c=e.icn,s=e.count,l=e.callBack,u=e.clickEvent,d=e.clickEventTray,m=e.tagName,p="div"===m?"div":"h".concat(m);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"".concat(o.a.PageHeadingwrap)},r.a.createElement("div",null,r.a.createElement(p,{className:"title_bold"},t),a&&r.a.createElement("div",{onClick:d,className:"caption_subdued_large"},r.a.createElement("em",null,a)," ",n?r.a.createElement("span",{onClick:l,className:"labels_semiBold"},n):"")),i&&r.a.createElement("a",{href:"",onClick:u},r.a.createElement("em",null,"View\xa0All\xa0"),s&&r.a.createElement("em",null,"(",s,")")),c&&r.a.createElement("i",{className:c})))}},ckNJ:function(e,t,a){"use strict";a.r(t);var n=a("ERkP"),r=a.n(n),i=a("aWzz"),o=a.n(i),c=a("uDfI"),s=a("KEM+"),l=a.n(s),u=a("KlA1"),d=a("Rv2m"),m=a("00re"),p=a("F5ga"),f=a("t9Eq"),g=a("3Qg5"),h=a("D8kG"),v=a("FzyX"),y=a("SRsf"),b=a("4DJv"),E=a("Z7TQ"),_=a("0E94"),C=a("Imr3"),w=a.n(C),O=a("r8f7"),P=a.n(O),L=a("/4bS"),S=a("aWKU"),j=a("smsd"),R=a("v84Y"),D=a("5rdL"),I=a("ZpBT"),N=a("/BrN"),k=a("mKSo"),T=a("tJD0"),F=a("NUsF"),A=function(e){var t=e.localityPageUrl,a=e.ratingReview,i=(a=void 0===a?{}:a).tuples,o=void 0===i?[]:i,c=a.localityPageCriteria,s=e.search_params,l=s.cityID,u=void 0===l?[]:l,d=s.cityMap,m=void 0===d?[]:d,p=s.localityID,f=void 0===p?[]:p,g=s.localityNameMap,h=void 0===g?[]:g,v=Object(n.useCallback)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(document&&document.getElementById(e)){var t=document.getElementById(e).getBoundingClientRect().top-150;window.scrollBy({top:t,behavior:"smooth"})}else window.scrollTo(0,document.body.scrollHeight),setTimeout((function(){var e=document.getElementById("cityRatingCard").getBoundingClientRect().top-150;window.scrollBy({top:e,behavior:"smooth"})}),1e3)}("cityRatingCard")}),[m]),y=Object(n.useMemo)((function(){return Object(F.b)(c,!0)}));return r.a.createElement(r.a.Fragment,null,u.length>0&&m.length>0&&0==f.length&&o.length>0?r.a.createElement("div",{onClick:function(e){return v("cityRatingCard")},className:w.a.localityInsightLink},"New to ",m[0].NAME,"?",r.a.createElement("a",{"data-label":"SEE_TOP_RATED_LOCALITIES",topmost:"true",className:"".concat(w.a.localityInsightLink," ").concat(w.a.dInline)},"See Popular Localities of ",m[0].NAME),r.a.createElement("i",{class:"iconS_Common_16 icon_doubleDownArrowBlue"})):null,t?r.a.createElement("div",{className:"".concat(w.a.localityInsightLink," pageComponent"),"data-label":"VIEW_LOCALITY_INSIGHT_TOP",topmost:"true"},h[0]&&h[0].NAME&&"Get to know more about ".concat(h[0].NAME),r.a.createElement("a",{className:"".concat(w.a.localityInsightLink," ").concat(w.a.dInline),href:y},"View Locality Insights",r.a.createElement("i",{className:"".concat(w.a.gotToTopIconCls," iconS_Common_24 icon_goToTop")}))):null)},H=Object(b.a)((function(){return a.e(433).then(a.bind(null,"MWEd"))})),M=Object(b.a)((function(){return Promise.all([a.e(3),a.e(6),a.e(541),a.e(542)]).then(a.bind(null,"u288"))})),x=Object(b.a)((function(){return Promise.all([a.e(55),a.e(114),a.e(172),a.e(244)]).then(a.bind(null,"cF/c"))})),B=Object(b.a)((function(){return Promise.all([a.e(3),a.e(6),a.e(25),a.e(84),a.e(5),a.e(20),a.e(38),a.e(55),a.e(72),a.e(74),a.e(73),a.e(71),a.e(391)]).then(a.bind(null,"25B+"))})),U=Object(b.a)((function(){return Promise.all([a.e(7),a.e(34),a.e(33),a.e(35),a.e(440)]).then(a.bind(null,"Zy8I"))})),G=Object(b.a)((function(){return a.e(149).then(a.bind(null,"H3p5"))})),V=Object(b.a)((function(){return a.e(799).then(a.bind(null,"E4Fh"))})),W=Object(b.a)((function(){return a.e(799).then(a.bind(null,"gjpx"))})),q=Object(b.a)((function(){return Promise.all([a.e(219),a.e(220),a.e(175),a.e(298)]).then(a.bind(null,"nwe8"))})),K=Object(b.a)((function(){return a.e(609).then(a.bind(null,"KwYB"))})),Y=Object(b.a)((function(){return a.e(610).then(a.bind(null,"XB3L"))})),z=Object(b.a)((function(){return a.e(611).then(a.bind(null,"uNOc"))})),J=Object(b.a)((function(){return a.e(608).then(a.bind(null,"ZlmX"))})),X=Object(b.a)((function(){return a.e(612).then(a.bind(null,"PDvi"))})),Z=!1,Q=function(e){var t=e.searchedFrom,a=e.ysfString,i=e.hyperLinkYsf,o=e.count,c=e.showPhoton,s=e.vsp,l=e.coworking,b=e.fetching,C=e.overlayData,O=e.search_params,j=(e.properties,e.flags,e.ratingReview),F=void 0===j?{}:j,Q=e.search_params,$=(Q.verified,Q.isPreLeased,Q.search_type),ee=void 0===$?"":$,te=Q.latitude,ae=void 0===te?"":te,ne=Q.longitude,re=void 0===ne?"":ne,ie=Q.latlongsearchdistance,oe=void 0===ie?"":ie,ce=Q.poiLocality,se=void 0===ce?"":ce,le=Q.poiLabel,ue=void 0===le?"":le,de=Q.poiStr,me=void 0===de?"":de,pe=(Q.requestURI,e.isPageLoaded),fe=e.showReportForm,ge=e.setCountryCode,he=e.showLoginRegisterWidget,ve=e.preference,ye=e.res_com,be=e.commercial_category,Ee=e.faqs,_e=e.fatFooter,Ce=e.showContactLayer,we=(e.showVerifiedCoach,e.showPreLeasedCoach,e.verifiedCount,e.preleasedCount,e.showVerifiedSheet),Oe=e.showPreLeasedSheet,Pe=e.setStoreData,Le=e.showModalLayer,Se=e.showChangePasswordForm,je=e.isFdDealer;Object(n.useEffect)((function(){Z||(ge({isSrp:!0}),Z=!0),window&&window.dataStore&&window.dataStore.setPage("SRP");var e={custom_object:{pageType:"DESKTOP_SRP_REVAMP",res_com:ye,preference:ve,ysfString:a}};je&&document.body.setAttribute("data-referrer_section","FD_WIDGET"),"L"===ve&&(e.custom_object.commercial_category=be),document.body.setAttribute("data-custominfo",JSON.stringify(e))}),[pe]),""!=ae&&""!=re&&""!=oe&&(ee="LS");var Re=!!(ue||"").length&&!!(se||"").length&&!!(me||"").length&&!!Number(oe);return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement(v.default,{fetching:b,visibility:C.visibility,className:C.className,style:{zIndex:2},backdropClick:C.backdropClick})),r.a.createElement(u.a,null),r.a.createElement("div",{className:w.a.headerPlaceholder},r.a.createElement(d.a,{preference:ve,res_com:ye,search_type:ee,config:{addStickyBehaviour:!1}})),r.a.createElement("div",{className:w.a.mainWrapper},r.a.createElement("div",{className:w.a.leftSection,id:"leftFilterSection"},r.a.createElement(H,null)),r.a.createElement("div",{className:w.a.rightSection},r.a.createElement("div",{className:"".concat(w.a.srpYsfWrap)},r.a.createElement("div",{className:w.a.breadcrumb},r.a.createElement(N.a,null),r.a.createElement("div",{className:"".concat(w.a.hideMap)})),r.a.createElement("div",{className:"title_semiBold ".concat(w.a.spacer20," ").concat(P.a.ysf)},"".concat(o," results |"),r.a.createElement("h1",null,"landmark"!==t&&oe?Re?a:"Property for "+function(e){switch(e){case"S":default:return"Sale";case"R":return"Rent";case"P":return"PG";case"L":return"Lease"}}(ve)+" in "+"".concat(oe)+" Km Near Me":a)),r.a.createElement(A,{search_params:O,localityPageUrl:((F||{}).localityPageCriteria||{}).url,ratingReview:F}),r.a.createElement("div",{className:"".concat(w.a.nudgeSort)},r.a.createElement("div",{className:"".concat(w.a.srpNudges," pageComponent"),"data-label":"TOP_NUDGES",topmost:"true"},r.a.createElement("div",{style:{width:"690px"}},r.a.createElement(m.a,null))),r.a.createElement(f.a,null))),r.a.createElement(y.a,null,r.a.createElement(L.a,null)),0===o&&!b&&r.a.createElement("div",{style:{minHeight:"198px"}},r.a.createElement(V,null)),0===o&&!b&&l&&l.count>0&&r.a.createElement(h.default,null),r.a.createElement(T.a,null),r.a.createElement(p.a,null),s.length>0&&r.a.createElement(g.a,null),fe&&r.a.createElement(y.a,null,r.a.createElement(M,null)),Ce&&r.a.createElement(y.a,null,r.a.createElement(B,null)),c&&r.a.createElement(y.a,null,r.a.createElement(x,null)),r.a.createElement(R.a,{targetId:"srp_pagination",Component:X,rootMargin:"1000"})),r.a.createElement("div",{id:"stickyFiltersSupport",style:{width:"10px",height:"10px"}})),r.a.createElement(k.a,null),r.a.createElement(y.a,null,r.a.createElement(_.a,null)),r.a.createElement(S.a,{isRevamp:!0,showButtonOffset:"200"}),r.a.createElement(R.a,{targetId:"srp_multilocality_rating",Component:D.a,rootMargin:"7000"}),r.a.createElement(R.a,{targetId:"srp_fatfooter",Component:function(){return _e&&_e.fatFooter?r.a.createElement(K,{hyperLinkYsf:i,data:_e,pageName:"SRP"}):r.a.createElement(Y,null)},rootMargin:"1000"}),Ee.length>0?r.a.createElement(R.a,{targetId:"srp_faqs",Component:function(){return r.a.createElement(J,{hyperLinkYsf:i,faqs:Ee,search_params:O})},rootMargin:"1000"}):null,r.a.createElement(R.a,{targetId:"srp_footer",Component:z,rootMargin:"1000"}),r.a.createElement(y.a,null,Se&&r.a.createElement(W,null)),he&&r.a.createElement(y.a,null,r.a.createElement(U,null)),Le&&r.a.createElement(q,null),r.a.createElement(I.a,null),r.a.createElement(E.default,null),we?r.a.createElement(G,{showLayer:we,onLayerCloseCallback:function(){return Pe({showVerifiedSheet:!1})}}):null,Oe?r.a.createElement(G,{isPreLeased:!0,showLayer:Oe,onLayerCloseCallback:function(){return Pe({showPreLeasedSheet:!1})}}):null)};Q.propTypes={ysfString:o.a.string,count:o.a.number},Q.defaultProps={ysfString:"",count:0};var $=Object(c.b)((function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.srp,n=(a=void 0===a?{}:a).isFdDealer,r=a.fetching,i=a.photonState,o=(i=void 0===i?{}:i).show,c=void 0!==o&&o,s=a.showContactLayer,u=a.searchedFrom,d=a.pageData,m=d.vsp,p=void 0===m?[]:m,f=d.count,g=d.search_params,h=void 0===g?{}:g,v=d.ratingReview,y=void 0===v?{}:v,b=d.search_params,E=(b=void 0===b?{}:b).res_com,_=b.preference,C=b.commercial_category,w=b.search_type,O=b.latitude,P=b.longitude,L=b.latlongsearchdistance,S=d.properties,j=void 0===S?[]:S,R=d.faqs,D=void 0===R?[]:R,I=d.fatFooter,N=void 0===I?[]:I,k=d.flags,T=void 0===k?{}:k,F=d.coworking,A=void 0===F?[]:F,H=d.hyperLinkYsf,M=void 0===H?"":H,x=a.overlayData,B=void 0===x?{}:x,U=a.showReportForm,G=a.showVerifiedCoach,V=a.showPreLeasedCoach,W=a.showVerifiedSheet,q=a.showPreLeasedSheet,K=a.showModalLayer,Y=t.global,z=(Y=void 0===Y?{}:Y).showLoginRegisterWidget,J=((((t.srp.pageData||{}).facets||{}).VERIFIED||[])[0]||{}).count,X=((((t.srp.pageData||{}).facets||{}).IS_PRE_LEASED||[])[0]||{}).count,Z=t.pd?"pd":t.bos?"bos":t.my99?"my99":t.srp?"srp":"",Q=t[Z]&&t[Z].changePasswordForm?t[Z].changePasswordForm:"";return e={showPhoton:c,vsp:p,fetching:r,overlayData:B,search_params:h,properties:j,flags:T,count:f,showReportForm:U,showLoginRegisterWidget:z,preference:_,res_com:E,search_type:w,latlongsearchdistance:L,latitude:O,longitude:P,commercial_category:C,faqs:D,fatFooter:N,showContactLayer:s,showVerifiedCoach:G,verifiedCount:J,preleasedCount:X,showPreLeasedCoach:V},l()(e,"showVerifiedCoach",G),l()(e,"showVerifiedSheet",W),l()(e,"showPreLeasedSheet",q),l()(e,"showModalLayer",K),l()(e,"showChangePasswordForm",Q),l()(e,"coworking",A),l()(e,"hyperLinkYsf",M),l()(e,"searchedFrom",u),l()(e,"ratingReview",y),l()(e,"isFdDealer",n),e}),(function(e){return{setCountryCode:function(t){return e(Object(j.f)(t))},updateContactedSpid:function(t){return e({type:"UPDATE_CONTACTED_SPID",data:t})},setStoreData:function(t){return e({type:"SET_STORE_DATA",data:t})}}}))(Q),ee=a("xcB5"),te=a("7s88"),ae=a("7/6N"),ne=a("6UXG"),re=a("LVwm"),ie=Object(b.a)((function(){return a.e(334).then(a.bind(null,"CFiy"))})),oe=function(e){var t=e.setBeaconData,a=e.pageData,i=(a=void 0===a?{}:a).search_params,o=void 0===i?{}:i,c=a.count,s=void 0===c?0:c,l=a.vsp,u=void 0===l?[]:l,d=a.ysf_string,m=void 0===d?"":d,p=a.properties,f=void 0===p?[]:p,g=a.flags,h=void 0===g?{}:g,v=(a.hyperLinkYsf,a.metaTagInfo),y=(v=void 0===v?{}:v).CANONICAL_URL,b=void 0===y?"":y,E=v.TITLE,_=void 0===E?"":E,C=v.DESCRIPTION,w=void 0===C?"":C,O=v.META_REL_NEXT,P=void 0===O?"":O,L=v.META_REL_PREV,S=void 0===L?"":L,j=v.MAP_LINK,R=a.search_params,D=(R=void 0===R?{}:R).page,I=void 0===D?1:D,N=e.isMobile,k=e.pageName,T=e.bcData,F="undefined"!==typeof window?document.getElementById("srp_seo"):null,A=Object(ae.a)({ref:{current:F}});return Object(n.useEffect)((function(){if(f.length){var e=f.map((function(e){return e.SPID})).join(",");t({spids:e})}setTimeout((function(){return F?F.classList.remove("container__srp_seo"):""}),5e3)}),[]),Object(n.useEffect)((function(){A&&F&&F.classList.add("container__srp_seo")}),[A]),r.a.createElement("div",{style:{backgroundColor:"#F4F5F7"}},r.a.createElement(ne.a,{Component:ie}),r.a.createElement(ee.a,{canonicalUrl:b,ysf_string:m,count:s,honeyWrapId:h.HONEY_WRAPPED_ID,properties:f,vsp:u,prevUrl:S,nextUrl:P,title:_,description:w,search_params:o,hyperLinkYsf:j,page:I,pageName:k,isDesktop:!N,bcData:T}),r.a.createElement("input",{type:"hidden",id:"pagename",value:"SRP"}),r.a.createElement("input",{type:"hidden",id:"pagesize",value:re.c.desktop_page_size}),r.a.createElement("input",{type:"hidden",id:"pagesizeSRP",value:s}),r.a.createElement("input",{type:"hidden",id:"pagenumber",value:I}),r.a.createElement($,{count:s,ysfString:m,setCurtainConstraints:te.e}))};oe.initialAction=function(e){return Object(te.b)(e)},oe.propTypes={pageData:o.a.object.isRequired};t.default=Object(c.b)((function(e){return{pageData:e.srp.pageData,isMobile:e.global.isMobile,pageName:e.global.pageName,bcData:(e.breadcrumb||{}).bcData||{}}}),(function(e){return{setBeaconData:function(t){return e(Object(j.o)(t))}}}))(oe)},fwKb:function(e,t,a){"use strict";a.d(t,"g",(function(){return d})),a.d(t,"f",(function(){return m})),a.d(t,"b",(function(){return g})),a.d(t,"e",(function(){return h})),a.d(t,"a",(function(){return v})),a.d(t,"d",(function(){return y})),a.d(t,"c",(function(){return b}));var n=a("KEM+"),r=a.n(n),i=a("+ree"),o=a("hiN3");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(c)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var d=function(e){var t,a=e.basicDetails,n=e.components,r=(n=void 0===n?{}:n).builder,o=void 0===r?{}:r,c=n.moreAboutProject,s=void 0===c?{}:c,u=n.reviewDetails,d=void 0===u?{}:u,g=e.seoContent,h=[],v=l(i.m);try{for(v.s();!(t=v.n()).done;){var y=t.value;switch(y["@type"]){case"Product":g.productSchema&&h.push(m(g.productSchema,s,o,d));break;case"Residence":h.push(p(y,a));break;case"Place":h.push(f(y,a))}}}catch(b){v.e(b)}finally{v.f()}return h},m=function(e,t,a,n){if(e){var r={"@context":"http://schema.org/","@type":"Product"};r.name=e.name,e.coverImageUrl&&(r.image=e.coverImageUrl),t&&t.description&&(r.description=t.description);var i=e.sellers,o=void 0===i?[]:i,c=e.highPrice,s=e.lowPrice,l=e.offerCount,u=void 0===l?"":l,d=[];for(var m in o)d.push({"@type":"Organization",name:o[m]});if(r.offers={},r.offers["@type"]="AggregateOffer",r.offers.priceCurrency="INR",r.offers.lowPrice=s,r.offers.highPrice=c,u&&(r.offers.offerCount=u),d&&(r.offers.seller=d),n.reviews&&(r.review=[],((n.reviews||{}).tuples||[]).forEach((function(e){var t={"@type":"Review",reviewRating:{}};t.reviewRating["@type"]="Rating",t.reviewRating.ratingValue="".concat(e.ratings),t.reviewRating.bestRating="5",t.author={},t.author["@type"]="Person",t.author.name=e.postedBy,r.review.push(t)})),n.ratingTab&&(r.aggregateRating={},r.aggregateRating["@type"]="AggregateRating",n.ratingTab.overall&&(r.aggregateRating.ratingValue="".concat(n.ratingTab.overall)),n.ratingTab.totalCount&&(r.aggregateRating.reviewCount="".concat(n.ratingTab.totalCount)))),e.brand){var p=e.brand;r.brand={},r.brand["@type"]="Organization",r.brand.name=p.name,p.url&&(r.brand.url=p.url),a&&a.description&&(r.brand.description=a.description)}return r}},p=function(e,t){var a=s({},e);return e.address.addressLocality=t.location.localityName,e.address.addressRegion=t.location.cityName,a},f=function(e,t){var a=s({},e);return e.geo.latitude=t.location.latitude,e.geo.longitude=t.location.longitude,a},g=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=1,i={},c=[],s={"@type":"ListItem",position:r,item:{"@id":"".concat("https://www.99acres.com"),name:"Home"}};if(c.push(s),Object.keys(e.details).length>0&&Object.keys(e.details).map((function(t,a){if("near_by_locality"!==t&&!Object(o.E)(e.details[t].url)&&!Object(o.E)(e.details[t].title)&&!Object(o.E)(e.details[t].label)){r++,(i={})["@id"]="".concat("https://www.99acres.com").concat(e.details[t].url),i.name=e.details[t].label;var n;n={"@type":"ListItem",position:r,item:i},c.push(n)}})),r++,Object(o.E)(a)){var l={"@type":"ListItem",position:r,item:{name:t}};c.push(l)}else{var u={"@type":"ListItem",position:r,item:{"@id":"".concat("https://www.99acres.com").concat(n),name:t}};c.push(u);var d={"@type":"ListItem",position:r+1,item:{name:a}};c.push(d)}var m={"@context":"http://schema.org/","@type":"BreadcrumbList",itemListElement:c};return'<script type="application/ld+json">'.concat(JSON.stringify(m),"<\/script>")},h=function(e){return"0"==e||"Price on Request"==e?"Price On Request":Object(o.E)(e)?void 0:"\u20b9 ".concat(e)},v=function(e,t){var a;return function(){var n=arguments,r=this,i=function(){return e.apply(r,n)};clearTimeout(a),a=setTimeout(i,t)}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};try{var n=t.configurations,r=(n=void 0===n?{}:n).tuples,i=void 0===r?[]:r;if(!i)throw new Error("Empty Tuple value");if(!e)throw new Error("[GTM] selectedId empty");for(var o=0;o<i.length;o++)if(i[o].id==e)return i[o]}catch(c){return a}},b=function(e){var t=e.basicDetails,a=e.projectName,n=e.price,r=e.projectId,i=e.sellersData,c=e.downloadBrochure,s=e.constructionStatus,l=e.resaleProperties,u=e.configList,d="R"==t.resCom?"Residential":"Commercial",m=Object(o.E)(u)?"":u.map((function(e){return e.bedroom})).filter((function(e,t,a){return a.indexOf(e)===t})).toString(),p=Object(o.E)(u)?"":u.map((function(e){return e.propertyTypeLabel})).filter((function(e,t,a){return a.indexOf(e)===t})).toString();return{city:t.location.cityName,cityId:t.location.cityId.replace("_LOCATION",""),locality:t.location.localityName,society:a,resCom:d,budgetMin:Object(o.E)(n)?"":n.min,budgetMax:Object(o.E)(n)?"":n.max,projectId:r,bhk:m,propType:p,contactSellers:Object(o.E)(i)?"":"Y",downloadBrochure:Object(o.E)(c)?"":"Y",constructionStatus:s,resale:Object(o.E)(l)?"":"Y",preference:"Sale",source:"XID",platform:"Mobile"}}},gnC6:function(e,t,a){"use strict";a.r(t);var n=a("97Jx"),r=a.n(n),i=a("VrFO"),o=a.n(i),c=a("Y9Ll"),s=a.n(c),l=a("1Pcy"),u=a.n(l),d=a("5Yy7"),m=a.n(d),p=a("N+ot"),f=a.n(p),g=a("AuHH"),h=a.n(g),v=a("KEM+"),y=a.n(v),b=a("ERkP"),E=a.n(b),_=a("aWzz"),C=a.n(_),w=a("uDfI"),O=a("K22+"),P=a.n(O),L=a("jOwg"),S=a("m6Br"),j=a("vtb4"),R=a("lvVm");function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=h()(e);if(t){var r=h()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return f()(this,a)}}var I=function(e){m()(a,e);var t=D(a);function a(e){var n;return o()(this,a),n=t.call(this,e),y()(u()(n),"closeSideCurtain",(function(){var e=n.props,t=e.setCurtainCloseState,a=e.closeFn,r=e.closeModal;t(!1),r&&r(),a&&a()})),y()(u()(n),"preventWindowScroll",(function(e){e.preventDefault()})),n.clsInOut="in",n}return s()(a,[{key:"render",value:function(){var e=this.props,t=e.visibility,a=e.id,n=(e.position,e.heading),i=e.subHeading,o=e.overFlow,c=void 0!==o&&o,s=e.heightAttr,l=e.dataLabel,u=e.isOpenFromServer,d=void 0!==u&&u,m=e.noPadding,p=void 0!==m&&m,f=e.customStyle,g=void 0===f?{}:f,h=e.showPDIcon,v=void 0!==h&&h,y=e.closeFn,b=(e.isCw,e.showCustomHeight),_=e.dataLabelClsBtn,C=e.isReiDesktop,w=void 0!==C&&C,O=e.isOverFlowRei,L=void 0!==O&&O;this.clsInOut=1==t?"in":"out",d&&(this.props.setCurtainCloseState(!1),y&&this.props.closeFn());var j=!1;return a!==R.b.FloorPlanGstChargesLayer&&a!==R.b.UnitOptionGstChargesLayer||(j=!0),E.a.createElement("div",{id:a,className:"".concat(P.a.sideCurtain," ").concat(s," ").concat(P.a.rightCurtain," ").concat(P.a[this.clsInOut]," pageComponent"),"data-label":l,topmost:"true",style:g},"PremiumPdKeyHighlights"==a&&v?E.a.createElement(E.a.Fragment,null,E.a.createElement("i",{onClick:this.closeSideCurtain,className:"iconS_Common_24 icon_close  ".concat(P.a.curtainCrossIcn)}),!Object(S.d)(n)&&E.a.createElement("h2",{className:"".concat(P.a.sideCurtainHeading)},E.a.createElement("i",{class:"iconS_Common_32 icon_keyHighlight"}),n)):"KnowMoreLayer"==a?E.a.createElement(E.a.Fragment,null,E.a.createElement("i",{onClick:this.closeSideCurtain,className:"iconS_Common_24 icon_close",style:{margin:"10px 5px 0 0"}}),E.a.createElement("div",{className:"".concat(i?P.a.sideCurtainGstLayer:"")},!Object(S.d)(n)&&E.a.createElement("h2",{className:"".concat(P.a.sideCurtainHeadingText," section_header_bold"),style:{margin:"26px 0 0 36px"}},n),!Object(S.d)(i)&&E.a.createElement("span",{className:P.a.sideCurtainSubHeadingText},i))):E.a.createElement(E.a.Fragment,null,E.a.createElement("i",r()({onClick:this.closeSideCurtain,className:"iconS_Common_24 icon_close pageComponent ".concat(w?P.a.closeBtnClsReiDesktop:""),style:{margin:i||j?"5px":"",zIndex:"20"}},_)),E.a.createElement("div",{className:"".concat(i||j?P.a.sideCurtainGstLayer:"")},!Object(S.d)(n)&&E.a.createElement("h2",{className:" ".concat(i||j?P.a.sideCurtainHeadingText:"".concat(P.a.sideCurtainHead," section_header_bold")," ")},n),j?!Object(S.d)(i)&&E.a.createElement("span",{className:P.a.sideCurtainSubHeadingText},i):null)),this.props.children?E.a.createElement("div",{id:"side_curtain",className:"".concat(P.a.sideCurWrap," ").concat(c?P.a.overFlwHid:""," ").concat(p?P.a.noPadding:""," ").concat(b?P.a.customHeight:"")},this.props.children):E.a.createElement("div",{id:"side_curtain",className:"".concat(P.a.sideCurWrap," ").concat(c||L?P.a.overFlwHid:""," ").concat(p?P.a.noPadding:""," ").concat(w?P.a.sideCurWrapReiDesktop:"")}))}}]),a}(E.a.PureComponent);I.propTypes={id:C.a.string.isRequired,position:C.a.string,visibility:C.a.bool.isRequired,heading:C.a.string.isRequired,subHeading:C.a.string.isRequired,closeFn:C.a.func.isRequired},t.default=Object(j.a)({on:[["delay",1900]]})(Object(w.b)((function(e,t){var a=e.courtainState,n=(a=void 0===a?{}:a).sideCurtainData,r=(n=void 0===n?{}:n).visibility,i=n.id,o=n.position,c=n.heading,s=n.subHeading,l=n.closeFn,u=n.overFlow,d=n.dataLabel,m=void 0===d?t.dataLabel:d,p=n.isOpenFromServer;return{visibility:r,id:i,position:o,heading:c,subHeading:s,closeFn:l,overFlow:u,dataLabel:m,isOpenFromServer:void 0!==p&&p}}),(function(e){return{setCurtainCloseState:function(t){e(Object(L.g)("SET_CURTAIN_STATE",{visibility:t,id:"",overFlow:!1,isOpenFromServer:!1}))}}}))(I))},lvVm:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n={MoreAboutBuilder:"MoreAboutBuilder",UniqueFacilities:"UniqueFacilities",MoreAboutProjectDetail:"MoreAboutProjectDetail",CompareProject:"CompareProjDetail",AnswerDeatil:"AnswerDetailLayer",SellerDetailLayer:"SellerDetailLayer",GroupedFloorPlanLayer:"GroupedFloorPlanLayer",PriceTrendsComparison:"PriceTrendsComparison",LocationHighlights:"LocationHighlights",UspDetailLayer:"UspDetailLayer",FloorPlanGstChargesLayer:"FloorPlanGstChargesLayer",UnitOptionGstChargesLayer:"UnitOptionGstChargesLayer",UnitsAvailable:"UnitsAvailable",TopPointer:"TopPointer"},r=2e3},m6Br:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"d",(function(){return f})),a.d(t,"b",(function(){return g})),a.d(t,"c",(function(){return h})),a.d(t,"g",(function(){return y})),a.d(t,"e",(function(){return b})),a.d(t,"f",(function(){return E}));var n=a("KEM+"),r=a.n(n),i=a("T0aG"),o=a.n(i),c=a("+ree"),s=a("fwKb");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(c)throw i}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function p(e,t,a){for(var n=t.split("."),r=0;r<n.length;r++){if(!e||!e.hasOwnProperty(n[r]))return a;e=e[n[r]]}return e}var f=function(e){return"undefined"==typeof e||null==e||("object"===o()(e)?Array.isArray(e)?!(e.length>0):!(Object.keys(e).length>0):"string"==typeof e&&!(e.length>0))},g=function(e,t){try{var a=0;return e.filter((function(e,n){e.id===t.id&&(a=n+1)})),a}catch(n){}};function h(e){try{return e()}catch(t){return}}var v=function(e){var t=document.cookie.split(";"),a=!1;return t.map((function(t){t.split("=").includes(e)&&(a=!0)})),a},y=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(t){var n=document.cookie,r=n.split(";"),i=v(e);if(!i)return void(document.cookie=a?"".concat(e,"=").concat(t,"; max-age=").concat(a):"".concat(e,"=").concat(t));r.map((function(a){if(a.split("=")[0]==e){var n=a.split("=")[1].split(",");if(!n.includes(t)){n.push(t);var r=n.join();document.cookie="".concat(e,"=").concat(r)}}}))}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;try{var a=t.photon,n=(a=void 0===a?{}:a).Tabs,r=void 0===n?[]:n;if(f(t))throw new Error("Empty photon data");if(f(e))throw new Error("Empty TabName value");for(var i=0,o=0;o<r.length;o++)if(r[o].name.toUpperCase()==e.toUpperCase()){i=r[o].start_index;break}return i}catch(c){return 0}},E=function(e,t,a){var n,r=e.basicDetails,i=e.seoContent,o=e.components,l=(o=void 0===o?{}:o).moreAboutProject,u=void 0===l?{}:l,m=o.builder,p=void 0===m?{}:m,f=o.breadCrumb,g=void 0===f?{}:f,h=o.reviewDetails,v=void 0===h?{}:h,y=[],b=d(c.m);try{for(b.s();!(n=b.n()).done;){var E=n.value;switch(E["@type"]){case"Product":i.productSchema&&y.push(Object(s.f)(i.productSchema,u,p,v));break;case"Residence":y.push(_(E,r));break;case"Place":y.push(C(E,r));break;case"BreadCrumb":y.push(w(g,t,a,i.relativeUrlPath))}}}catch(O){b.e(O)}finally{b.f()}return y},_=function(e,t){var a=u({},e);return e.address.addressLocality=t.location.localityName,e.address.addressRegion=t.location.cityName,a},C=function(e,t){var a=u({},e);return e.geo.latitude=t.location.latitude,e.geo.longitude=t.location.longitude,a},w=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=1,i={},o=[],c={"@type":"ListItem",position:r,item:{"@id":"".concat("https://www.99acres.com"),name:"Home"}};if(o.push(c),e&&e.details&&Object.keys(e.details).length>0&&Object.keys(e.details).map((function(t,a){if("near_by_locality"!==t&&!f(e.details[t].url)&&!f(e.details[t].title)&&!f(e.details[t].label)){r++,(i={})["@id"]="".concat("https://www.99acres.com").concat(e.details[t].url),i.name=e.details[t].label;var n;n={"@type":"ListItem",position:r,item:i},o.push(n)}})),r++,f(a)){var s={"@type":"ListItem",position:r,item:{name:t}};o.push(s)}else{var l={"@type":"ListItem",position:r,item:{"@id":"".concat("https://www.99acres.com").concat(n),name:t}};o.push(l);var u={"@type":"ListItem",position:r+1,item:{name:a}};o.push(u)}var d={"@context":"http://schema.org/","@type":"BreadcrumbList",itemListElement:o};return d}},r8f7:function(e,t,a){e.exports={srp_seo:"container__srp_seo"}}}]);