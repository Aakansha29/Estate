(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"/JUi":function(e,t,r){e.exports={deskPropCardWrap:"desk_propCards__deskPropCardWrap",cardWrp:"desk_propCards__cardWrp"}},CMBP:function(e,t,r){e.exports={resalerentalapp:"resalerentalapp__resalerentalapp"}},D9xi:function(e,t,r){e.exports={rrswrapper:"ResaleRentalShimmer__rrswrapper",heading:"ResaleRentalShimmer__heading",titleBox:"ResaleRentalShimmer__titleBox",shineAnimation:"ResaleRentalShimmer__shineAnimation",linkBox:"ResaleRentalShimmer__linkBox",tupleWrapper:"ResaleRentalShimmer__tupleWrapper",tuple:"ResaleRentalShimmer__tuple",image_content:"ResaleRentalShimmer__image_content",image:"ResaleRentalShimmer__image",content:"ResaleRentalShimmer__content",cta:"ResaleRentalShimmer__cta"}},go9p:function(e,t,r){"use strict";r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return T}));var a=r("ddV6"),n=r.n(a),o=r("tNLw"),i=r.n(o);function c(e){var t=[];return e.map((function(e,r){t.push({webinar_status:e.webinar_status,webinar_title:e.coverImageText,webinar_date:e.webinarDate,webinar_time:e.webinarTime,webinar_id:e.webinarId,webinarUrl:e.webinarUrl,xidUrl:e.xidUrl,sellerIcon:e.sellerIconUrl,offerForWebinar:e.tagList.includes("Offers")?"Y":"N",liveQnA:e.tagList.includes("Live QnA")?"Y":"N",videoTour:e.tagList.includes("Video Tour")?"Y":"N",profileId:e.profileId,projMainPhoto:e.coverUrl,projId:e.projectId,projName:e.projectName,projLocation:e.address,resCom:e.resCom,lead_panelist_name:e.leadPanel.name,lead_panelist_company:e.leadPanel.designation,lead_panelist_designation:e.leadPanel.companyName,lead_panelist_photo:e.leadPanel.imageUrl,webinarStartTime:e.webinarStartTime,webinarEndTime:e.webinarEndTime,trackSrcBckend:e.customTrackDataSdk})})),t}var l=r("yMbT"),s=r("rVU0"),E=l.f.API_URL,_=function(e){var t=e.webinarId,r=e.useragent,a=e.trackSrc,o=e.cookies;return function(e){var c=[],l={},_={propLogin:o.PROPLOGIN?o.PROPLOGIN:"",qryUsrData:o.QryUsrData?o.QryUsrData:"",isEdit:o.isEdit?o.isEdit:""},u=[];Object.entries(_).filter((function(e){var t=n()(e,2);t[0];return""!=t[1]})).map((function(e){u.push(e.join("="))}));var p=u.join("&"),d="".concat(E,"/api-aggregator/seller/landing/getWebinarLPData?webinarId=").concat(t,"&platform=").concat(r.isMobile?"mobile":"desktop","&").concat(p);return c.push(i()("".concat(d),{method:"GET"}).then((function(e){return e.json()})).then((function(t){var r;r=t.data,l={webinar_status:r.widget.status,webinar_id:r.widget.webinarId,webinar_date:r.widget.webinarDate,webinar_time:r.widget.webinarTime,webinarStartTime:r.widget.webinarStartTime,webinar_title:r.widget.coverImageText,webinarUrl:r.widget.webinarUrl,xidUrl:r.widget.xidUrl,profileId:r.widget.profileId,offerForWebinar:r.widget.tagList.includes("Offers")?"Y":"N",virtualTour:r.widget.tagList.includes("Video Tour")?"Y":"N",projMainPhoto:r.widget.coverUrl,projId:r.widget.projectId,resCom:r.widget.resCom,projName:r.widget.projectName,projLocation:r.widget.address,projInfo:r.aboutProject.description,interactionObject:r.interaction,copyRight:r.footer.copyRight,ownedBy:r.footer.ownedBy,disclaimer:r.footer.disclaimer,webinarUsp:r.usp,guide:r.guide,interactionTitle:r.interaction.title,interactionSubTitle:r.interaction.description,trackSrcBckend:r.widget.customTrackDataSdk},e({type:"WEBINAR_LANDING_PAGE_RESULTS",data:l}),e({type:"WEBINAR_TRACK_SRC",data:a})})).catch((function(e){return Promise.reject(e)}))),o.PROPLOGIN&&c.push(e(Object(s.userAuthenticate)(o.PROPLOGIN))),c}},u=function(e){return function(t){t({type:"WEBINAR_RECOM_RESULTS",data:c(e)})}},p=function(e){return function(t){var r,a="".concat(E,"/api-aggregator/seller/onlineCampaign/get"),n={};return i()(a,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)}).then((function(e){return e.ok&&(r=!0),e.json()})).then((function(a){"WEBINAR_RECOMMENDATION"===e.filterMap.type&&"mobile"===e.filterMap.platform?t({type:"WEBINAR_RECOM_RESULTS",data:a.data}):a.data.dataList&&a.data.dataList.length>=0?(n=c(a.data.dataList),t({type:"WEBINAR_RECOM_RESULTS",data:n}),t({type:"FETCH_SRP_PAGE_SUCCESS",data:{webinarData:{heading:a.data.widgetTitle,subheading:a.data.widgetSubtitle}}}),t({type:"widgets/SET_WIDGET_RENDERING_STATE",data:{id:e.filterMap.type,state:r?"SUCCESS":"FAIL"}})):t({type:"widgets/SET_WIDGET_RENDERING_STATE",data:{id:e.filterMap.type,state:"FAIL"}})})).catch((function(r){t({type:"widgets/SET_WIDGET_RENDERING_STATE",data:{id:e.filterMap.type,state:"FAIL"}})}))}},d=function(e){return function(t){t({type:"WEBINAR_TRACK_OBJECT",data:e})}},T=function(e){return function(t){t({type:"WEBINAR_TRACK_OBJECT_RECOM",data:e})}}},jOwg:function(e,t,r){"use strict";(function(e){r.d(t,"e",(function(){return N})),r.d(t,"g",(function(){return g})),r.d(t,"b",(function(){return U})),r.d(t,"c",(function(){return w})),r.d(t,"a",(function(){return M})),r.d(t,"f",(function(){return B})),r.d(t,"h",(function(){return G})),r.d(t,"d",(function(){return V}));var a,n=r("RhWx"),o=r.n(n),i=r("KEM+"),c=r.n(i),l=r("tNLw"),s=r.n(l),E=r("oNVP"),_=r.n(E),u=r("yMbT"),p=r("hiN3"),d=r("m6Br"),T=r("smsd"),m=r("RHOG"),O=r("kI3N"),A=r("WaQU"),R=r("go9p"),f=r("j4Dh");function S(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=function(e){return{type:"FETCH_PAGE_SUCCESS",data:e}},N=function(e){return{type:"SET_GOVREG_DATA",data:e}},g=function(e,t){return{type:e,data:t}},v=u.f.API_URL,h=u.f.PROJECT_DETAILS_AGGR_V2_URL,D=u.f.SSR_BASE_DNS,y=u.f.CONTENT_AGGREGATOR_PATH,j=u.f.BASE_AGGREGATOR_PATH,L={"location-map":"PROJECT_LOCATION_SUB_PAGE",photos:"PROJECT_MEDIA_SUB_PAGE",facilities:"PROJECT_FACILITIES_SUB_PAGE","floor-plan":"PROJECT_FLOOR_PLAN_SUB_PAGE"},U=function(t){return function(r){r({type:"FETCH_PAGE_REQUEST"});var a=t.projectId,n=t.cookies,o=t.res,i=t.customHttpReferer,c=t.customHttpRequestUri,l=(t.memCache,t.queryParams),E=void 0===l?{}:l,u=t.fullUrl,P=[],I="",N="",v="",j="";Object.keys(L).map((function(e){var t;u.includes(e)&&(v=L[e],j=e,r((t=e,{type:V.SET_PAGE_TYPE,projectType:t})))})),Boolean(v)||(v="PROJECT_DETAIL_PAGE");try{Object(p.Z)(a)&&(I=isNaN(a)&&a.charAt(0).toUpperCase(),N=isNaN(a)?a.substring(1):a)}catch(F){return o.status(404).sendFile(_.a.join("".concat(e,"/../app/error_404.html"))),[Promise.reject(F)]}var U=n?n["99_ab"]:"",w=Object(p.p)(N,I,"RENDER","DESKTOP",n,E,v);w&&"string"===typeof w&&-1!==w.indexOf(p.a.PROFILE_IDS)&&r({type:V.SET_IS_CONFIGURED_XID,data:!0});var M="".concat(D).concat(y).concat(h,"?").concat(w),B=!!n&&!n.acceptedMobileDsiclaimer;return P.push(s()("".concat(M),{credentials:"include",method:"GET",headers:b(b({cookie:JSON.stringify(n)},t.applyHeaders),{},{customHttpReferer:i,customHttpRequestUri:c})}).then((function(e){if(Object(p.D)(e.status))return Promise.reject({code:404,msg:"XID Desktop Revamp Aggregator sent no response"});var t=e.headers,r="undefined"!=typeof t&&t.hasOwnProperty("_headers")&&"undefined"!=typeof t._headers["set-cookie"],a="undefined"!=typeof t&&t.hasOwnProperty("_headers")&&"undefined"!=typeof t._headers["x-visitor-id"];if(!o.headersSent){if(r){var n,i=S(t._headers["set-cookie"]);try{for(i.s();!(n=i.n()).done;){var c=n.value;o.cookie(c)}}catch(l){i.e(l)}finally{i.f()}}return a&&o.setHeader("x-visitor-id",t._headers["x-visitor-id"]),e.json()}})).then((function(e){return Object(p.P)(e)})).then((function(e){var t=e.redirectionRequired,n=e.url,i=e.type;if("undefined"!==typeof t||t){var c={redirectionUrl:n,showProperty:!0,redirectionHttpStatus:i,currentUrl:null,activated:null,res:o};return r(Object(T.a)(c))}var l={};if(!(e&&e.projects&&e.projects[0]))throw Error("[REVAMP.LOGS]project data not available for "+a);l=e.projects[0];var s={code:Object(d.a)(l,"seoContent.redirection.httpCode",""),url:Object(d.a)(l,"seoContent.redirection.url",""),relativeUrl:Object(d.a)(l,"seoContent.redirection.relativeUrl","")};Object(p.O)(o,s.code,s.url,u,s.relativeUrl),r(C(l));var E=Object(d.a)(l,"basicDetails.selectedConfig",{}),_=Object(d.a)(l,"basicDetails.areaUnit",""),S=Object(d.a)(l,"basicDetails.secondaryAreaUnit",""),P=Object(d.a)(l,"basicDetails.name",""),I=Object(d.a)(l,"basicDetails.resCom",""),b=(Object(d.a)(l,"marketing.preference",""),Object(d.a)(l,"basicDetails.location.cityName","")),h=Object(d.a)(l,"basicDetails.location.cityId",""),D=Object(d.a)(l,"basicDetails.location.localityId","");r(g(V.SET_PROJECT_BASIC_DETAILS,{initialSelectedConfig:E,primaryArea:_,secondaryArea:S,projectName:P,resCom:I})),r(k(N)),r(H(I));var y=p.d[j],L=Object(d.f)(l,P,y);r(x(L)),r(Object(m.B)({resCom:"".concat(I,"P")})),r(Object(m.B)({preference:"S"})),r(Object(m.B)({cities:[{CITY:Object(d.d)(h)?"":h.split("_")[0],LOCALITY:Object(d.d)(D)?"":D.split("_")[0],NAME:Object(d.d)(b)?"":b}]})),r(g(V.SET_RERA_POPUP,B));var w={resaleProperties:Object(d.a)(l,"components.resaleProperties",{}),rentalProperties:Object(d.a)(l,"components.rentalProperties",{})},M=Object(d.a)(l,"components.builderProjects",{}),G=Object(d.a)(l,"components.webinar.data.dataList",{});if(Object(d.d)(G)||r(Object(R.b)(G)),r(O.a.initialAction({config:w})),r(A.default.initialAction({config:M})),r("PROJECT_DETAIL_PAGE"!==v?W(E):Y()),U&&r(K(U)),Object(d.a)(l,"components.reviewDetails.reviews.tuples",void 0)){var J=Object(d.a)(l,"components.reviewDetails.reviews.sorting",""),X=Object(d.a)(l,"components.reviewDetails.reviews.discriminator","");r({type:"SET_REVIEW_FILTER",data:{sorting:J,discriminator:X}})}else if(Object(d.a)(l,"components.societyReviewDetails.reviews.tuples",void 0)){var Q=Object(d.a)(l,"components.societyReviewDetails.reviews.sorting",""),q=Object(d.a)(l,"components.societyReviewDetails.reviews.discriminator","");r({type:"SET_REVIEW_FILTER",data:{sorting:Q,discriminator:q}})}try{if(Object(d.a)(l,"components.collaborativeProjectRecommendations.data")){var Z={id:"newCollabProjContainer",type:Object(d.a)(l,"components.collaborativeProjectRecommendations.type"),page:"XID_DESKTOP_V2",heading:Object(d.a)(l,"components.collaborativeProjectRecommendations.heading"),params:Object(d.a)(l,"components.collaborativeProjectRecommendations.params")};f.a.dispatchProjectRecom(r,"newCollabProjContainer",Z,l.components.collaborativeProjectRecommendations.data),r({type:V.SSR_COMPONENT,data:p.U.COLLAB})}if(Object(d.a)(l,"components.similarProjectRecommendations.data")){var $={id:"newSimilarPojectsContainer",type:Object(d.a)(l,"components.collaborativeProjectRecommendations.type"),page:"XID_DESKTOP_V2",heading:Object(d.a)(l,"components.collaborativeProjectRecommendations.heading"),params:Object(d.a)(l,"components.similarProjectRecommendations.params")};f.a.dispatchProjectRecom(r,"newSimilarPojectsContainer",$,l.components.similarProjectRecommendations.data),r({type:V.SSR_COMPONENT,data:p.U.SIMILAR})}}catch(F){}})).catch((function(e){return Promise.reject(e)}))),P}},w=function(e){return function(t){var r=F(e);t({type:V.COOK_PHOTON_DATA,data:r})}},M=function(e){var t=e.projectId,r=e.resCom,a=e.queryParams,n=void 0===a?{}:a;return function(e){var a=Object(p.p)(t,r,"SCROLL_CLICK","DESKTOP",null,n),o="".concat(v).concat(j).concat(h,"?").concat(a);return s()("".concat(o),{credentials:"include",method:"GET"}).then((function(e){return e.json()})).then((function(r){var a={};if(!(r&&r.projects&&r.projects[0]))throw Error("project data not available for "+t);a=r.projects[0],e(C(a)),e({type:V.UPDATE_FINAL_PAGE_CALL_FLAG,data:!0}),a&&a.components&&a.components.priceTrends&&e({type:"SET_PRICE_TRENDS_DATA",data:a.components.priceTrends})})).catch((function(e){Promise.reject(e)}))}},B=function(e){return{type:V.SET_SELECTED_CONFIG,data:e}},F=function(e){var t=[],r=Object(d.a)(e.components.media,"videos","");if(Object(d.a)(e.components.media,"images","")){var a=function(e){var t=0,r=0,a=[],n=[];return Array.isArray(e.images)&&e.images.forEach((function(e){n=[],Array.isArray(e.tuples)&&e.tuples.forEach((function(r,a){var o={image_complete_urls:{}};o.image_complete_urls.S=Object(d.a)(r,"variants.SMALL",""),o.image_complete_urls.M=Object(d.a)(r,"variants.MEDIUM",""),o.image_complete_urls.O=Object(d.a)(r,"variants.ORIGINAL",""),o.image_complete_urls.F=Object(d.a)(r,"variants.OPTIMISED","")||Object(d.a)(r,"variants.LARGE",""),o.name=r.name,o.id=t,o.alt=r.altTag,o.type="IMAGE",o.order=t,o.cover_photo="N",o.parentInfo=e.type,n.push(o),t+=1})),a.push({data:n,start_index:r,isTab:!0,name:e.title.toUpperCase(),sortingFn:"",viewsource:"tabWithoutSubTab",count:n.length,id:e.type,parentInfo:"PROJECT_PHOTO"}),r=t})),a}(e.components.media);t.push.apply(t,o()(a))}if(r){var n=function(e){var t=[],r=0;Array.isArray(e.videos)&&e.videos.map((function(e){Array.isArray(e.tuples)&&e.tuples.map((function(a){var n={image_complete_urls:{}};n.image_complete_urls.S=Object(d.a)(a,"variants.SMALL",""),n.image_complete_urls.M=Object(d.a)(a,"variants.MEDIUM",""),n.image_complete_urls.O=Object(d.a)(a,"variants.ORIGINAL",""),n.image_complete_urls.F=Object(d.a)(a,"variants.LARGE",""),n.name=e.title,n.id=a.videoId,n.type="VIDEO",n.order=r,n.cover_photo="N",n.parentInfo="VIDEO",t.push(n),r+=1}))}));var a=0;return Array.isArray(e.images)&&e.images.forEach((function(e){a+=e.tuples.length})),{data:t,start_index:a,isTab:!0,name:"VIDEOS",sortingFn:"",viewsource:"tabWithoutSubTab",count:t.length,id:"VIDEO",parentInfo:"PROJECT_PHOTO"}}(e.components.media);t.push(b({},n))}return{photon:{res_com:Object(d.a)(e,"basicDetails.resCom",""),start_index:0,entity_id:Object(d.a)(e,"basicDetails.projectId",""),count:0,Tabs:t,entity:"PROJECT",logo:Object(d.a)(e,"components.summaryLayer.logo.variants.ORIGINAL","")}}},G=function(e,t,r){return function(a){if(Object(d.d)(e)){var n=F(t);a({type:V.COOK_PHOTON_DATA,data:n})}a({type:V.UPDATE_PHOTON,data:r})}},x=function(e){return{type:V.SET_SEO_SCHEMA,seoSchema:e}},k=function(e){return{type:V.SET_PROJECT_ID,projectId:e}},H=function(e){return{type:V.SET_RESCOM,resCom:e}},W=function(e){return{type:V.SET_INITIAL_CONFIG,data:e}},Y=function(){return{type:V.SET_CURTAIN_STATE,data:{visibility:!1,id:"MoreAboutProjectDetail",heading:"Project Details"}}},K=function(e){return{type:V.SET_AB_COOKIE,data:e}},V=(a={SET_PROJECT_BASIC_DETAILS:"SET_PROJECT_BASIC_DETAILS",SET_SELECTED_CONFIG:"SET_SELECTED_CONFIG",SET_SIDE_CURTAIN_FLAG:"SET_SIDE_CURTAIN_FLAG",SHOW_LOGIN_REGISTER_DIALOGUE:"SHOW_LOGIN_REGISTER_DIALOGUE",UPDATE_SIDEPANE:"UPDATE_SIDEPANE",UPDATE_LOGIN_DATA:"UPDATE_LOGIN_DATA",FETCH_SUGGESTOR_SUCCESS:"FETCH_SUGGESTOR_SUCCESS",FETCH_STATIC_SUCCESS:"FETCH_STATIC_SUCCESS",UPDATE_OVERLAY:"UPDATE_OVERLAY",SET_RERA_POPUP:"SET_RERA_POPUP",SET_TIME_DISTANCE_LANDMARK:"SET_TIME_DISTANCE_LANDMARK",SET_NEARBY_LANDMARK:"SET_NEARBY_LANDMARK",SHOW_FEEDBACK_DIALOGUE:"SHOW_FEEDBACK_DIALOGUE",HIDE_FEEDBACK_TAB:"HIDE_FEEDBACK_TAB",GET_COMPONENT_CHUNK:"GET_COMPONENT_CHUNK",SHOW_HIDE_MORE_DETAILS:"SHOW_HIDE_MORE_DETAILS",UPDATE_FINAL_PAGE_CALL_FLAG:"UPDATE_FINAL_PAGE_CALL_FLAG",SHOW_REPORT_DIALOGUE:"SHOW_REPORT_DIALOGUE",UPDATE_PHOTON:"UPDATE_PHOTON",COOK_PHOTON_DATA:"COOK_PHOTON_DATA",SET_SELECTED_AREA_UNIT:"SET_SELECTED_AREA_UNIT",XID_FETCH_BANNER_SUCCESS:"XID_FETCH_BANNER_SUCCESS"},c()(a,"SHOW_REPORT_DIALOGUE","SHOW_REPORT_DIALOGUE"),c()(a,"UPDATE_PHOTON","UPDATE_PHOTON"),c()(a,"FETCH_PHOTON_SUCCESS","FETCH_PHOTON_SUCCESS"),c()(a,"SET_SEO_SCHEMA","SET_SEO_SCHEMA"),c()(a,"POST_QUESTION_SUCCESS","POST_QUESTION_SUCCESS"),c()(a,"SET_QUESTION","SET_QUESTION"),c()(a,"POST_QUESTION","POST_QUESTION"),c()(a,"XID_LOAD_EOI","XID_LOAD_EOI"),c()(a,"SET_PROJECT_ID","SET_PROJECT_ID"),c()(a,"SET_RESCOM","SET_RESCOM"),c()(a,"SET_INITIAL_CONFIG","SET_INITIAL_CONFIG"),c()(a,"SET_PAGE_TYPE","SET_PAGE_TYPE"),c()(a,"SET_CURTAIN_STATE","SET_CURTAIN_STATE"),c()(a,"SSR_COMPONENT","SSR_COMPONENT"),c()(a,"SET_IS_CONFIGURED_XID","SET_IS_CONFIGURED_XID"),c()(a,"SET_AB_COOKIE","SET_AB_COOKIE"),a)}).call(this,"/")},kI3N:function(e,t,r){"use strict";var a=r("97Jx"),n=r.n(a),o=r("VrFO"),i=r.n(o),c=r("Y9Ll"),l=r.n(c),s=r("5Yy7"),E=r.n(s),_=r("N+ot"),u=r.n(_),p=r("AuHH"),d=r.n(p),T=r("KEM+"),m=r.n(T),O=r("ERkP"),A=r.n(O),R=r("uDfI"),f=r("1Pcy"),S=r.n(f),P=r("/JUi"),I=r.n(P),b=r("TrdN"),C=r("yEp6"),N=r.n(C),g=r("4BtX"),v=function(e){var t=e.leftImg,r=e.text,a=e.subTxt,n=e.subTxt2,o=e.rightImg,i=e.postedOn,c=e.icn,l=e.link,s=e.doEoi,E=e.alt,_=void 0===E?"":E;return A.a.createElement("div",{className:"".concat(N.a._99ProjTitle),onClick:function(e){e.stopPropagation(),window.open(l,"_blank")}},A.a.createElement("div",{className:"".concat(N.a.imgBox)},t&&A.a.createElement("img",{src:t,alt:_})),A.a.createElement("div",{className:"".concat(N.a.imgBox1)},r&&A.a.createElement("a",{href:l,target:"_blank",className:"list_header_semiBold spacer4 ".concat(N.a.linkTag)},r),a&&A.a.createElement("div",{className:"caption_subdued_medium spacer4"},a),n&&A.a.createElement("div",{className:"caption_subdued_medium"},n)),o&&A.a.createElement("div",{className:"trackGAClick ".concat(N.a.imgBox2),"data-galabel":"SRP_CONTACT"},A.a.createElement(g.a,{bgColor:"white",icnClass:"iconS_Common_24 icon_callHover",clickHandler:function(e){e.stopPropagation(),s()},className:"pageComponent","data-label":"CALL"})),c&&A.a.createElement("div",{className:"".concat(N.a.imgBox2)},A.a.createElement("i",{className:c})),i&&A.a.createElement("div",{className:"".concat(N.a.postedOn)},i))},h=r("Z0H2"),D=r("lIuY"),y=r("+ree"),j=r("hiN3"),L={1:"sq.ft.",2:"sq.yards",3:"sq.m.",4:"grounds",5:"aankadam",6:"rood",7:"chataks",8:"perch",9:"guntha",10:"ares",11:"biswa",12:"acres",13:"bigha",14:"kottah",15:"hectares",16:"marla",17:"kanal",19:"cents"},U=function(e,t,r){var a,n,o=null,i=null,c=null,l=t?t.area_unit:null,s=L[l]?L[l]:null;if(e.SUPER_AREA?(a=e.SUPER_AREA,n=e.SUPERAREA_UNIT__U,o=L[parseInt(n||1)]):e.SUPERBUILTUP_AREA?(a=e.SUPERBUILTUP_AREA,n=e.SUPERBUILTUPAREA_UNIT__U,o=L[parseInt(n||1)]):e.BUILTUP_AREA?(a=e.BUILTUP_AREA,n=e.AREA_UNIT__U,o=L[parseInt(n||1)]):e.CARPET_AREA&&(a=e.CARPET_AREA,n=e.CARPETAREA_UNIT__U,o=L[parseInt(n||1)]),a)try{a=Number(a).toFixed(0)}catch(p){}if(e.SUPER_SQFT&&"0"!=e.SUPER_SQFT||"SUPER_AREA"==e.COM_AREA_TYPE&&Number.isInteger(Number(e.PROPERTY_NUMBER))&&parseInt(e.PROPERTY_NUMBER)>1?c="Plot ":e.SUPERBUILTUP_SQFT&&"0"!=e.SUPERBUILTUP_SQFT||"SUPERBUILTUP_AREA"==e.COM_AREA_TYPE?c="Super built-up ":e.BUILTUP_SQFT&&"0"!=e.BUILTUP_SQFT||"BUILTUP_AREA"==e.COM_AREA_TYPE&&Number.isInteger(Number(e.PROPERTY_NUMBER))&&parseInt(e.PROPERTY_NUMBER)>1?c="Built-up ":(e.CARPET_SQFT&&"0"!=e.CARPET_SQFT||"CARPET_AREA"==e.COM_AREA_TYPE&&Number.isInteger(Number(e.PROPERTY_NUMBER))&&parseInt(e.PROPERTY_NUMBER)>1)&&(c="Carpet "),n=Number(n)?Number(n):1,l&&l!=parseInt(n||1)&&(i=convertUnit(parseFloat(a||0),parseInt(n||1),l).toString(),i=Number(i).toFixed(2)),(!a||"0"==a)&&Number(Number(e.MAX_AREA?e.MAX_AREA:0).toFixed(2))>0&&Number(Number(e.MIN_AREA?e.MIN_AREA:0).toFixed(2))>0&&(a="".concat(Number(e.MIN_AREA)," - ").concat(Number(e.MAX_AREA)),n=e.AREA_UNIT__U,o=L[parseInt(n||1)],n=n&&n.trim()&&Number.isInteger(n.trim())&&n&&n.trim()&&parseInt(n.trim())?n&&n.toString():"1",l)){var E=convertUnit(Number(Number(e.MIN_AREA?e.MIN_AREA:0).toFixed(2)),parseInt(n||1),l).toString(),_=convertUnit(Number(Number(e.MAX_AREA?e.MAX_AREA:0).toFixed(2)),parseInt(n||1),l).toString();E=Number(Number(E).toFixed(2)),_=Number(Number(_).toFixed(2)),i="".concat(E," - ").concat(_)}var u=e.PRICE_PER_UNIT_AREA;return u&&Number(Number(u).toFixed(2))&&(l&&n?u=convertPricePerUnit(Number(Number(u).toFixed(2)),parseInt(n),parseInt(l)):n&&(u=Math.round(Number(Number(u).toFixed(2))))),{profile_AREA:a,profile_AREA_LABEL:o,profile_AREATYPE:c,profile_AREA_UNIT:n,search_AREA:i,search_AREA_LABEL:s,price_PER_UNIT_AREA:u,newArea:e.SECONDARY_AREA}},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r="",a="",n=(e.PREFERENCE,U(e,t)),o=t.area_unit?t.area_unit:"1",i=n.search_AREA?n.search_AREA.replace(" to ","".concat(("R"===e.RES_COM&&e.PREFERENCE," - "))):null,c=n.profile_AREA?n.profile_AREA.replace(" to ","".concat(("R"===e.RES_COM&&e.PREFERENCE," - "))):null,l=n.search_AREA_LABEL,s=n.profile_AREA_LABEL,E=n.newArea;return i&&(isNaN(Number(i))||(i=Number(i).toFixed(2))),c&&(isNaN(Number(c))||(c=Number(c))),o&&n&&o.toString()!=n.profile_AREA_UNIT&&n.search_AREA&&n.search_AREA_LABEL?(a="".concat(i||null," ").concat(l),r="<b> ".concat(i||null," </b>&nbsp;<b>").concat(l," </b>"),"3"!==o.toString()&&(r+="<strong>( ".concat(E," )</strong>"))):(a="".concat(i||c," ").concat(s||""),r="<b> ".concat(i||c,"</b>&nbsp;<b>").concat(s||"","</b>"),"3"!==o.toString()&&(r+="<strong>( ".concat(E," )</strong>"))),{clean:a,value:r}},M=r("D9xi"),B=r.n(M),F=function(e){for(var t=e.times,r=void 0===t?1:t,a=[],n=0;n<r;n++)a.push(A.a.createElement("div",{className:B.a.tuple},A.a.createElement("div",{className:B.a.image_content},A.a.createElement("div",{className:B.a.image}),A.a.createElement("div",{className:B.a.content},A.a.createElement("div",null),A.a.createElement("div",null),A.a.createElement("div",null))),A.a.createElement("div",{className:B.a.cta})));return A.a.createElement("div",{className:B.a.rrswrapper},A.a.createElement("div",{className:B.a.heading},A.a.createElement("div",{className:B.a.titleBox},A.a.createElement("div",null),A.a.createElement("div",null)),A.a.createElement("div",{className:B.a.linkBox})),A.a.createElement("div",{className:B.a.tupleWrapper},a.map((function(e){return e}))))};function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){m()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=d()(e);if(t){var n=d()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return u()(this,r)}}var H=function(e,t){return{type:e,data:t}},W=function(e){E()(r,e);var t=k(r);function r(e){var a;i()(this,r),a=t.call(this,e),m()(S()(a),"checkConfigLabel",(function(){var e=a.props,t=e.preference,r=e.resaleConfigurations,n=e.rentalConfigurations,o=e.resaleObject,i=e.rentalObject,c="S"===t?r:n,l="S"===t?o.approvedConfiguration:i.approvedConfiguration,s=c&&c.filter((function(e){return e.id===l}));return s&&s.length>0?s[0].label:"All Options"})),m()(S()(a),"getCookie",(function(e){if("undefined"!==typeof document){for(var t="".concat(e,"="),r=document.cookie.split(";"),a=0;a<r.length;a++){for(var n=r[a];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return 0==n.indexOf(t)?n.substring(t.length,n.length):""}})),m()(S()(a),"updateCurrentProperty",(function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{index:0,tab:"proimages"},n=a.props,o=n.resaleSearchParams,i=n.rentalSearchParams,c=n.fetchComponentChunk,l=n.setCurrentProperty,s=n.resaleEoi,E=void 0===s?{}:s,_=n.rentalEoi,u=void 0===_?{}:_,p=n.page,d=e,T=d.PREFERENCE,m="S"===T?o:i||{};c(t);var O=a.getCookie("GOOGLE_SEARCH_ID"),A=d.ASSIGNED_TO?d.ASSIGNED_TO:d.ASSIGNED_TO_PROFILEID,R="/".concat(d.FORMATTED&&d.FORMATTED.DESCRIPTION?d.FORMATTED.DESCRIPTION:null,"-").concat("0"==d.CONF_ID?"spid":"npspid","-").concat(d.PROP_ID),f=d.LISTING,S=d.profile?d.profile.CONTACT_COMPANY_NAME.replace("&","and"):"",P=d.profile?d.profile.CONTACT_NAME:"",I=d.profile?d.profile.CONTACT_NAME:"",b=d.PROFILEID?d.PROFILEID:null,C=d.PROP_ID?d.PROP_ID:null,N=d.REGISTER_DATE?d.REGISTER_DATE:null,g=d.FORMATTED&&d.FORMATTED.PRICE_IN_WORDS?d.FORMATTED.PRICE_IN_WORDS:null,v=d.AREA_UNIT__U?L[d.AREA_UNIT__U]:null,h=d.PROPERTY_TYPE__U?d.PROPERTY_TYPE__U:null,D=d.PROP_NAME?d.PROP_NAME:null,j=d.CLASS,U=d.PROPERTY_TYPE?d.PROPERTY_TYPE:null,M=d.BEDROOM_NUM?d.BEDROOM_NUM:null,B=w(d,m).clean,F=d.CLASS_LABEL,G=d.profile&&d.profile.CONTACT_EMAIL?d.profile.CONTACT_EMAIL:null,x=d.profile&&d.profile.CONTACT_MOBILE?d.profile.CONTACT_MOBILE:null,k=d.PREFERENCE?d.PREFERENCE:null,H=d.RES_COM?d.RES_COM:null,W=d.FORMATTED&&d.FORMATTED.DESCRIPTION?d.FORMATTED.DESCRIPTION.replace(/-/g," "):null,Y=d.PROPERTY_NUMBER?d.PROPERTY_NUMBER:null,K=d.location?d.location.LOCALITY_ID:"",V=d.location?d.location.BUILDING_ID:"",J="Y"==d.IS_FSL,X=d.MAX_PRICE?d.MAX_PRICE:"",Q=d.MIN_PRICE?d.MIN_PRICE:"",q=d.TRANSACT_TYPE?d.TRANSACT_TYPE:"",Z=d.location?d.location.CITY:"",$=d.xid&&d.xid.PROJECTID?d.xid.PROJECTID:"",z=d.FORMATTED&&d.FORMATTED.AVAIL&&d.FORMATTED.AVAIL.AVAILABILITY?d.FORMATTED.AVAIL.AVAILABILITY:"",ee="XID_DESKTOP_REVAMP"===p,te="View_Contact",re="S"==T?E.trackingSource:u.trackingSource;l({src:te,trackSrc:re="".concat(ee?"XID_":"").concat(re),Property_Num:Y,Preference:k,Res_Com:H,Prop_Id:C,Register_Date:N,Price_Text:g,unit:L[v],Property_Type:h,Prop_Name:D,Property_Text:U,Bedroom_Num:M,area_dets:B,Country_Code:"",email_label:G,query_mobile_label:x,email:"eoiUserEmail",name:I,classLabel:F,class_label:j,class_name_label:F,name_label:P,company_label:S,Profileid:b,Listing:f,preference:T,assigned_to:A,activeUrl:R,Start_Text:W,visitorId:O,locality_id:K,Encrypted_Ids:"".concat(V,";").concat(K,";"),userClass:F,only_name_label:F,isFsl:J,index:r.index,tab:r.tab,City:Z,Min_Price:X,Max_Price:Q,Transact_Type:q,projectId:$,availability:y.b[z],availabilityId:z},t)})),m()(S()(a),"getProjPrice",(function(e){return e.includes("to")?e.replace(/to/,"-"):e.includes("Lac")?e.replace("Lac","L"):e.includes("Crore")?e.replace("Crore","Cr"):e}));var n,o=e.ordering,c=(o=void 0===o?{}:o).tuples,l=void 0===c?[]:c,s=o.fullWidthComponent,E=void 0===s?"ASK_AND_ANSWER":s,_="S"===e.preference?"RESALE_PROPERTIES":"RENTAL_PROPERTIES",u=-1,p=-1;return l.forEach((function(e,t){e.componentId===E?p=t:e.componentId===_&&(u=t)})),n=u>p,a.state={isFullWidth:n},a}return l()(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.resaleObject,r=e.rentalObject,a=e.resaleParamsObj,n=e.rentalParamsObj,o=e.preference,i=e.setCountryCode,c=e.dispatchFetchPropertiesSrp;("S"==o?t:r)||c("S"==o?a:n),i({isSrp:!0})}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.globalSelectedConfigurationId,a=t.dispatchFetchPropertiesSrp,n=t.params;e.globalSelectedConfigurationId!==r&&a(x(x({},n),{},{configurations:r}))}},{key:"render",value:function(){var e=this,t=this.props,r=t.resaleObject,a=t.rentalObject,n=t.preference,o=t.projectName,i=t.setGlobalConfig,c=t.isScrolled,l=t.resaleHeading,s=t.rentalHeading,E=t.page,_=t.loading,u=this.state.isFullWidth,p="S"===n;if(p&&"undefined"===typeof r)return null;if(!p&&"undefined"===typeof a)return null;var d=p?l:s,T=p?r.properties:a.properties,m=p?r.count:a.count,O=p?r.viewAllProperties:a.viewAllProperties;O&&(O=O.replace("src=RESALE_RENTAL_XID","")),O&&(O=O.replace("src=SRP_R2MXID",""));var R=p?r.honeyPotId:a.honeyPotId,f=p?r.approvedConfiguration:a.approvedConfiguration;if("0_0"===f&&(0==m||!T.length))return null;var S="XID_DESKTOP_REVAMP"===E;return _?A.a.createElement(F,{times:3}):A.a.createElement(A.a.Fragment,null,A.a.createElement("div",{style:{maxWidth:1200,margin:"0 auto",padding:"16px 0"},className:"pageComponent","data-label":"".concat("S"===n?"RESALE_PROPERTIES":"RENTAL_PROPERTIES"),topmost:"true"},A.a.createElement(b.a,{heading:"".concat(d," in this project"),icnRight:"iconS_Common_16 icon_redirectionIcn",deskdropdown:"true",ddTxt:this.checkConfigLabel(),subTxt:"Showing for ",viewAll:" View all ".concat(m," Properties"),nonSeoTxt:"in",seoTxt:"".concat(o," for ").concat("S"===n?" Resale":"L"===n?"Lease":" Rent"),tagName:S?"4":"2",preference:n,isResale:p,link:O,setGlobalConfig:i}),A.a.createElement("div",{className:I.a.deskPropCardWrap},A.a.createElement(D.a,{viewType:"desktop",slideNumber:u?3:2,showSlides:u?3.5:2.5,scrollMarg:12,compAttr:"".concat("S"===n?"resale_":"rental_").concat(f),isScrolled:c},T&&T.map((function(t,r){if(t.SPID===R)return null;var a=t.PHOTO_URL,n=t.PRICE,o=t.CLASS_LABEL,i=t.REGISTER_DATE,l=t.REGISTERED_DAYS,s=(t.PROP_ID,t.PROP_DETAILS_URL),E=t.ALT_TAG,_=void 0===E?"":E,u=n&&"0"!=n?e.getProjPrice(n):"Price Not Available",p=u&&-1===u.indexOf("Price on Request")&&-1===u.indexOf("Price Not Available");return A.a.createElement("div",{className:"pageComponent ".concat(I.a.cardWrp),key:r,"data-label":"TUPLE"},A.a.createElement(v,{key:r,alt:_,leftImg:c?a:"",link:"/".concat(s),text:"".concat(p?"\u20b9 ":"").concat(u),subTxt:"By ".concat(o),subTxt2:l<30&&l>1?"Posted ".concat(l," days ago"):l<=1?"Posted ".concat(i):"Posted on ".concat(i),rightImg:!0,doEoi:function(){e.updateCurrentProperty(t,"contact")}}))}))))))}}]),r}(O.Component);W.defaultProps={doEoi:function(){}};var Y=Object(R.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resaleRental,r=t.resaleObject,a=t.resaleObject,n=(a=void 0===a?{}:a).search_params,o=t.rentalObject,i=t.rentalObject,c=(i=void 0===i?{}:i).search_params,l=t.resaleConfigurations,s=t.rentalConfigurations,E=t.projectName,_=t.resaleParamsObj,u=t.rentalParamsObj,p=t.resaleEoi,d=t.rentalEoi,T=t.resaleHeading,m=t.rentalHeading,O=t.loading,A=e.projectDetailState,R=(A=void 0===A?{}:A).pageData,f=(R=void 0===R?{}:R).ordering;return{resaleConfigurations:l,rentalConfigurations:s,resaleObject:r,rentalObject:o,resaleSearchParams:n,rentalSearchParams:c,projectName:E,resaleParamsObj:_,rentalParamsObj:u,resaleEoi:p,rentalEoi:d,resaleHeading:T,rentalHeading:m,ordering:f,loading:O}}),(function(e){return{fetchComponentChunk:function(t){return e({type:"GET_COMPONENT_CHUNK",component:t})},setCurrentProperty:function(t,r){var a=t.activeUrl,n=t.visitorId,o=t.assigned_to;e(H("XID_LOAD_EOI",!0)),e(H("SET_EOI_CLICKED_FLAG",!0)),e(H("SET_EOI_FLOW","")),e(H("SET_ADVERTISER_DETAILS",{})),e(H("ADVERTISER_FORM_NEXT_STEP","")),e(Object(j.l)({activeUrl:a,visitorId:n,assigned_to:o})).then((function(){e(H("SHOW_ADVERTISER_DIALOGUE",t)),e(H("UPDATE_OVERLAY",{visibility:!0,backdropClick:!1})),"contact"==r&&(e(H("UPDATE_PROP",t)),e(H("SHOW_CONTACT_FORM",!0)))}))},setCountryCode:function(t){return e(Object(j.k)(t))},dispatchFetchPropertiesSrp:function(t){e(Object(h.q)(t))}}}))(W),K=r("CMBP"),V=r.n(K),J=r("4DJv"),X=r("SRsf");function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=d()(e);if(t){var n=d()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return u()(this,r)}}Object(J.a)((function(){return Promise.all([r.e(3),r.e(6),r.e(25),r.e(84),r.e(5),r.e(20),r.e(38),r.e(55),r.e(72),r.e(74),r.e(73),r.e(71),r.e(391)]).then(r.bind(null,"25B+"))}));var q=Object(J.a)((function(){return Promise.all([r.e(3),r.e(6),r.e(541),r.e(542)]).then(r.bind(null,"u288"))})),Z=function(e){E()(r,e);var t=Q(r);function r(){return i()(this,r),t.apply(this,arguments)}return l()(r,[{key:"render",value:function(){var e=this.props,t=e.resaleParamsObj,r=e.rentalParamsObj,a=e.resaleEoi,n=e.rentalEoi,o=(e.showContactForm,e.selectOptionConfiguration),i=e.globalSelectedConfigurationId,c=e.isScrolled,l=e.page;return A.a.createElement("div",{id:V.a.resalerentalapp},t&&A.a.createElement(Y,{preference:t.preference,params:t,eoi:a,setGlobalConfig:o,globalSelectedConfigurationId:i,isScrolled:c,page:l}),r&&A.a.createElement(Y,{preference:r.preference,params:r,eoi:n,setGlobalConfig:o,globalSelectedConfigurationId:i,isScrolled:c,page:l}),c&&A.a.createElement(X.a,null,A.a.createElement(q,null)))}}]),r}(A.a.Component),$=Object(R.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resaleRental,r=(t=void 0===t?{}:t).resaleParamsObj,a=t.rentalParamsObj,n=t.resaleEoi,o=t.rentalEoi,i=t.showContactForm;return{resaleParamsObj:r,rentalParamsObj:a,resaleEoi:n,rentalEoi:o,showContactForm:i}}))(Z);function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=d()(e);if(t){var n=d()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return u()(this,r)}}var ee=function(e){E()(r,e);var t=z(r);function r(){return i()(this,r),t.apply(this,arguments)}return l()(r,[{key:"render",value:function(){return A.a.createElement($,n()({},this.props,{isSSR:!0}))}}]),r}(A.a.Component);m()(ee,"initialAction",(function(e){e.projectId,e.resCom,e.assetsObject,e.assetsPath;var t=e.src,r=e.config;e.page,e.platform,e.stage;return function(e){var a=[];return"PHP"===t||a.push(Promise.resolve(e(Object(h.r)(r)))),a}}));t.a=ee},yEp6:function(e,t,r){e.exports={mainWrapper:"cardThreeLiner__mainWrapper",spacer12:"cardThreeLiner__spacer12",_99XidWrap:"cardThreeLiner___99XidWrap",_99ProjTitle:"cardThreeLiner___99ProjTitle",imgBox:"cardThreeLiner__imgBox",postedOn:"cardThreeLiner__postedOn",imgBox1:"cardThreeLiner__imgBox1",imaBox:"cardThreeLiner__imaBox",imgBox2:"cardThreeLiner__imgBox2",linkTag:"cardThreeLiner__linkTag"}}}]);