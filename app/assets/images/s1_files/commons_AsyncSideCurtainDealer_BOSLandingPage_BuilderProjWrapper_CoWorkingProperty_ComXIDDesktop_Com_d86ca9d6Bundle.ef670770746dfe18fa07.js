(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"/KUi":function(e,t,r){"use strict";r.d(t,"a",(function(){return R})),r.d(t,"i",(function(){return A})),r.d(t,"d",(function(){return B})),r.d(t,"b",(function(){return j})),r.d(t,"h",(function(){return w})),r.d(t,"c",(function(){return L})),r.d(t,"f",(function(){return I})),r.d(t,"e",(function(){return D})),r.d(t,"g",(function(){return x}));var a=r("RhWx"),n=r.n(a),o=r("KEM+"),c=r.n(o),i=r("tNLw"),s=r.n(i),l=r("Ku3m"),u=r("smsd"),d="/addShortlistProjectData",p="/removeShortlistProjectData",f=r("yMbT"),m=r("UZja"),_=r("rVU0"),h=r("3Ts5"),S=r("c4sx");function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=f.f.API_URL,g=f.f.PROJECT_SEARCH_URL,b=f.f.BASE_AGGREGATOR_PATH,T=f.f.SERCVICES_BASE_URL,O=f.f.DISCOVERY_AGGREGATOR_PATH,R={GET_SEARCH_RESULTS:"GET_SEARCH_RESULTS",GET_FILTER_DATA:"GET_FILTER_DATA",SET_RERA_LABEL:"SET_RERA_LABEL"},C=function(e){return{type:R.GET_SEARCH_RESULTS,payload:e}},A=function(e){return{type:"UPDATE_SP_LAYER",payload:e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:"UPDATE_OVERLAY",data:{visibility:e,backdropClick:t,showLoader:r}}},B=function(e,t,r){return function(a,n){var o=n().srp,c=(o=void 0===o?{}:o).isNpSrp,i=void 0!==c&&c;a({type:"FILTER_CHANGE",data:{filterName:"page",data:"1"}}),a({type:"FILTER_CHANGE",data:{filterName:"sortby",data:e}}),a(P(!0,!1,!0)),a(Object(u.l)());var l=v({},r);l.hasOwnProperty("area_type")&&l.area_type&&(l.area_unit=l.area_type,delete l.area_type),l.hasOwnProperty("availability")&&l.availability&&(l.np_search_type=l.availability,delete l.availability),l.hasOwnProperty("builder")&&l.builder&&(l.builderid=l.builder,delete l.builder),l.hasOwnProperty("budget_min")&&l.budget_min&&!i&&(l.budget_min=h.o.budgetCluster.min[l.budget_min]),l.hasOwnProperty("budget_max")&&l.budget_max&&!i&&(l.budget_max=h.o.budgetCluster.max[l.budget_max]),l.hasOwnProperty("pmay")&&l.pmay&&(l.pmayEligible=l.pmay,delete l.pmay),l.hasOwnProperty("npadv")&&l.npadv&&(l.projectWithOffers=l.npadv,delete l.npadv);var d=Object(_.convertParamStringToObject)(t.queryParams||""),p=i?r.city:n().filtersState.searchParams.cityID.join(","),f=i?r.res_com:n().filtersState.searchParams.res_com,m=v(v(v({},Object(_.convertParamStringToObject)(t.queryParams?t.queryParams:"")),l),{},{sortby:e,isAjax:"true",noxid:"Y",page:"1",city:d&&"undefined"!==typeof d.city&&""!==d.city?d.city:p,res_com:d&&"undefined"!==typeof d.res_com&&""!==d.res_com?d.res_com:f,platform:"DESKTOP"});"".concat(y).concat(g);return s()("".concat(y).concat(b).concat(g,"?").concat(Object(_.convertObjectToParamString)(m)),{credentials:"same-origin"}).then((function(e){return e.json()})).then((function(e){a({type:"UPDATE_BREADCRUMB_DATA",fatFooter:v({},e.fatFooter)}),a(function(e){return{type:"GOT_SORTED_RESULTS",payload:e}}(e)),a(P(!1,!1,!1)),a(Object(u.d)()),a({type:"GOT_PAGINATION_DATA",data:{count:e.count,pageNumber:"1"}})}))}},j=function(e,t,r){return function(a){e.target.removeAttribute("style"),a({type:"ADD_REMOVE_FROM_COMPARE_LIST",payload:{eventYCoordinates:e.pageY,isChecked:e.target.checked,id:t,projectDetails:r}})}},w=function(e){return function(t){t({type:"UPDATE_PHOTON",data:{entity:"PROJECT_PHOTO",index:0,show:!0,projectKey:e}})}},L=function(e){var t=e.mode,r=e.url,a=e.cookies,o=e.res,c=e.requestBody,i=e.memCache;e.transactionId,e.visitorId;return function(e,s){var d,p=s(),f=p.srp,h=(f=void 0===f?{}:f).isNpSrp,E=void 0!==h&&h,y=f.pageDate,b=(y=void 0===y?{}:y).search_params,A=(b=void 0===b?{}:b).preference,P=p.global,B=(P=void 0===P?{}:P).isMobile,j=void 0!==B&&B,w="",L={};if("post"===t){w=(w=function(e){var t=Object(_.removeKeysWithEmptyValues)(e),r=[];for(var a in t)if(t.hasOwnProperty(a)){if(t[a].includes(":")){var n=t[a].split(":")?t[a].split(":"):t[a];t[a]=t[a].split(":")?n.join(","):t[a]}"keyword"==a&&(t[a]=t[a].replace(/</g,"&lt;").replace(/>/g,"&gt;"),t[a]=t[a].replace(/[!\/\\,|@#%^&*\[\]<>\\?\\$=]/g," ")),r.push("".concat(encodeURIComponent(a),"=").concat(t[a]))}return r.join("&")}(Object(_.getValidAggregatorKeys)(Object(_.removeKeysWithEmptyValues)(c)))).replace("locality_array%5B%5D","locality_array").replace("building_id%5B%5D","building_id");var D=Object(_.convertParamStringToObject)(w);D.hasOwnProperty("property_type")&&delete D.property_type,L=v({},D)}else L=v({},c);if(L.np_search_type&&L.np_search_type.length){for(var x=L.np_search_type.split(","),N=0;N<x.length;N+=1)"R"===x[N]&&(x[N]="");L=v(v({},L),{},{np_search_type:x.join(",")})}L.area_unit&&(L.area_unit="0"===L.area_unit?"1":L.area_unit);var k=r.split("?");d="undefined"!==typeof c?Object(_.convertObjectToParamString)(L,{isEncodedFormat:!1}):k[1];var W="".concat(T).concat(O),U=/(-projects)/.test(k[0])&&/(ffid)/.test(k[0]);if("search"!==t||U)W=U?"".concat(W).concat(g,"?server_uri=").concat(k[0].slice(1),"&parse_uri=true").concat("undefined"!==typeof k[1]?"&".concat(k[1]):""):"".concat(W).concat(g,"?").concat(d);else{var F=r.split("?")[1],G=Object(_.convertParamStringToObject)(F);G.area_unit&&(G.area_unit="0"===G.area_unit?"1":G.area_unit),"undefined"===G.budget_min&&delete G.budget_min,"undefined"===G.budget_max&&delete G.budget_max;var M=Object(_.convertObjectToParamString)(G,{isEncodedFormat:!1});W="".concat(W).concat(g,"?").concat(M,"&redirectionRequired=true&redirectionType=301")}W+="&platform=".concat(E?m.a.LABLES.MOBILE:"DESKTOP"),E&&(W+="&page_size=".concat(m.a.pageSize)),e(C({isLoading:!0,isLoaded:!1,data:[]}));var H={baseUrl:W,successCb:function(t){var r=t.status,a=t.response;if("SUCCESS"===r){var c=a.redirectionRequired,i=a.url,s=a.type,l=void 0===s?"301":s;if(a&&a.facets&&a.facets.PROPERTY_TYPE_XID&&(a.facets.PROPERTY_TYPE_XID=Object(_.getFilterLayerPropertiesOrder)(a.facets.PROPERTY_TYPE_XID,"id")),c)return o.redirect(parseInt(l),i);if(e(C({isLoading:!1,isLoaded:!0,data:Object(_.deleteSetOfKeysFromObject)(a,["topBuilders"])})),e({type:"GOT_PAGINATION_DATA",data:{URL:"",count:a.count,pageNumber:a.search_params?a.search_params.page:"",CANONICAL_URL:a.metaTagInfo?a.metaTagInfo.CANONICAL_URL:""}}),E){e({type:"HEADER_DATA",data:{res_com:a.search_params.res_com,preference:a.search_params.preference,count:a.count,ysfString:a.ysf_string,xidUrl:a.search_params.xidRedirectionUrl}});var d=n()(a.newProjects);a.recommendations&&(d=[].concat(n()(d),n()(a.newProjects))),e({type:"MOBILE_QUICK_VIEW_DATA",data:d})}var p=a.topBuilders;if(e({type:j?"MOBILE_HAMBURGER_DATA":"GOT_ELLIPSIS_DATA",data:v(v({},a.fatFooter),{},{topBuilderData:p,preference:A})}),e({type:"GOT_VIEW_AS_TABLE_DATA",data:a}),e({type:"SET_SEARCH_PARAMS_IN_FILTERS",data:a.search_params}),e({type:"UPDATE_POSSESION_FILTERS",data:a.facets.POSSESSION_CLUSTER}),E){var f=a.search_params,m=a.newProjects,h=a.count,y=a.search_params,g=(y=void 0===y?{}:y).localityNameMap,b=y.localityID;g&&b&&(e(Object(u.n)({localityNameMap:g,localityID:b.join(",")})),e({type:"SET_SUGGESTOR_LIST_DATA_FOR_LOCALITY",payload:g.map((function(e){var t={};return t.id=e.ID,t.label=e.NAME,t}))})),e(Object(S.a)({search_params:f,properties:m,count:h}))}return e({type:"UPDATE_FILTERS_FROM_SEARCH_PARAMS"}),e(I(k[0],k[1])),a.search_params.reraLabel&&e({type:R.SET_RERA_LABEL,data:a.search_params.reraLabel}),a}return e(C({isLoading:!1,isLoaded:!0,data:[]})),a},failureCb:function(t){e(C({isLoading:!1,isLoaded:!0,data:[]}))},catchCb:function(t){return e(C({isLoading:!1,isLoaded:!0,data:[]})),Promise.reject(t)}};return[Object(l.b)(H,a),e(Object(u.h)({memCache:i}))]}},I=function(e,t){return function(r){r({type:"SET_PATHNAME_AND_PARAMS",payload:{pathname:e,queryParams:t}})}},D=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"NPSRP",a=arguments.length>3?arguments[3]:void 0;return function(n){n({type:"POSTED_SHORTLISTED_PROJECT"});var o=Object(_.getCookie)("GOOGLE_SEARCH_ID"),c="N"===t?d:p;s()("".concat(y).concat(b).concat(c,"?id=").concat(e.slice(1),"&res_com=").concat(e.split("")[0],"&pageName=").concat(r).concat(a?"&source=".concat(a):"","&noxid=Y&isAjax=true&client_id=").concat(o),{credentials:"same-origin"}).then((function(e){return e.json()})).then((function(r){404!==r.status||500!==r.status?(n({type:"SUCCESS_POSTING_SHORTLISTED_DATA",response:r,projectId:e}),"N"===t&&(n({type:"SHOW_HIDE_TOAST_MESSAGE",data:{visibility:!0}}),setTimeout((function(){return n({type:"SHOW_HIDE_TOAST_MESSAGE",data:{visibility:!1}})}),3e3))):n({type:"ERROR_POSTING_SHORTLISTED_DATA",data:{error:r.error,status:r.status}})})).catch((function(e){}))}},x=function(e){return function(t){t({type:"SHOW_COMPARE_PROPERTIES_BOX",payload:{moveCompareBoxTo:"".concat(e.pageY+20,"px")}})}}},"1ir7":function(e,t,r){e.exports={actionheadWrap:"d_cardContent__actionheadWrap",linkTag:"d_cardContent__linkTag"}},Ez8w:function(e,t,r){"use strict";var a=r("ERkP"),n=r.n(a),o=r("1ir7"),c=r.n(o);t.a=function(e){var t=e.firstRowTxt,r=e.secRowTxt,a=e.thirdRowTxt,o=e.link;return n.a.createElement("div",{className:"".concat(c.a.actionheadWrap)},t?n.a.createElement("a",{href:o,target:"_blank",className:"list_header_bold spacer2 ".concat(c.a.linkTag)},t):"",r?n.a.createElement("div",{className:"caption_subdued_medium spacer8"},r):"",a?n.a.createElement("div",{className:"list_header_semiBold"},a):"")}},Ku3m:function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return i}));var a=r("tNLw"),n=r.n(a),o=function(t,r){var a=t.baseUrl,o={method:t.method||"GET",headers:{Cookie:r},mode:"cors",cache:"default",credentials:"same-origin"};return o.headers.appname="99acres",o.headers.appversion=e.env?"14.16.1":"1",t.postFormData?t.postFormData&&(o.body=t.data):o.headers["Content-Type"]=t.contentType||"application/json","GET"!==t.method&&t.data&&!t.postFormData&&(o.body=JSON.stringify(t.data)),n()(a,o).then((function(e){if(e.status>=400)throw new Error("Bad response from server",e.status);return"arraybuffer"===t.responseType?e.arrayBuffer():e.json()})).then((function(e){if(e){if(e.status&&e.status.code&&3==e.status.code||e.redirectionRequired&&"404"==e.type)throw(e.status||{}).code,{type:"redirection",code:"404",url:"/error_404.html"};if(e.status&&e.status.code&&1!=e.status.code&&10!=e.status.code)throw new Error("Bad response from server, status code != 1 or 10");if(t.successCb){var r={response:e,status:"SUCCESS"};t.successCb(r)}}else t.failureCb&&t.failureCb()})).catch((function(e){if(e&&"404"==e.code)throw e;if(t.catchCb)return t.catchCb()}))},c=function(e,t,r){n()(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then(r).catch((function(e){}))},i=function(e){return e=(e=(e=(e=(e=e.replace(/&quot;/g,'"')).replace(/&#039;/g,"'")).replace(/&lt;/g,"<")).replace(/&gt;/g,">")).replace(/&amp;/g,"&")}}).call(this,r("F63i"))},"L+mx":function(e,t,r){e.exports={CarouselBox:"carousel__CarouselBox",slidingBox:"carousel__slidingBox",mobView:"carousel__mobView",CarouselContainer:"carousel__CarouselContainer",arrowContainerBox:"carousel__arrowContainerBox",left:"carousel__left",right:"carousel__right",carouselWrap:"carousel__carouselWrap",carouselFilm:"carousel__carouselFilm",srpArr:"carousel__srpArr",rightArrow:"carousel__rightArrow",whiteBg:"carousel__whiteBg",blueBackground:"carousel__blueBackground",rightBtn:"carousel__rightBtn",builderCaraousal:"carousel__builderCaraousal",builderLeftArrow:"carousel__builderLeftArrow",leftBtn:"carousel__leftBtn",zIndex2cls:"carousel__zIndex2cls",customWhiteBgCls:"carousel__customWhiteBgCls"}},N3Dn:function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"e",(function(){return u})),r.d(t,"h",(function(){return d})),r.d(t,"a",(function(){return p})),r.d(t,"g",(function(){return f})),r.d(t,"f",(function(){return m}));var a=r("yMbT"),n=a.f.API_URL,o=a.f.PROJECT_SEARCH_URL,c=a.f.BASE_AGGREGATOR_PATH,i="FETCH_BUILDER_PROJECTS_SUCCESS",s="SET_BUILDER_PROJECTS_SUCCESS",l="FETCH_BUILDER_PROJECTS_FAIL",u="SET_SELECTED_TAB",d=function(e){return{type:u,data:e}},p="BUILDER_PROJECT_LOADING",f=function(e,t,r){return function(a){a({type:"SET_ASSETS_FOR_BUILDER_PROJECTS",data:{assetsObject:t,assetsPath:r}});var n=e.data,o=(n=void 0===n?{}:n).xidBuilder,c=void 0===o?[]:o,i={xidBuilder:[]};i.xidBuilder=c.filter((function(e){return Boolean(e.value.length)})),a(function(e,t){return{type:s,data:e,config:t}}(i,e))}},m=function(e){var t=e.city,r=e.preference,a=e.platform,s=e.exclude_projectIds,u=e.builderid,d=e.algoType,f=e.workflow;return function(e){var m="".concat(n).concat(c).concat(o,"?city=").concat(t,"&exclude_projectIds=").concat(s,"&builderid=").concat(u,"&city=").concat(t,"&preference=").concat(r,"&platform=").concat(a,"&algoType=").concat(d,"&workflow=").concat(f);return e({type:p,data:!0}),fetch(m).then((function(e){return e.json()})).then((function(t){var r=t.xidBuilder,a=void 0===r?[]:r,n={xidBuilder:[]};n.xidBuilder=a.filter((function(e){return Boolean(e.value.length)})),e(function(e){return{type:i,data:e}}(n)),e({type:p,data:!1})})).catch((function(t){e(function(e){return{type:l,error:e}}(t)),e({type:p,data:!1})}))}}},OwdG:function(e,t,r){e.exports={bpsWrapper:"BuilderProjectShimmer__bpsWrapper",heading:"BuilderProjectShimmer__heading",tabs:"BuilderProjectShimmer__tabs",tupleWrapper:"BuilderProjectShimmer__tupleWrapper",tuppleShimmerWrap:"BuilderProjectShimmer__tuppleShimmerWrap",tuppleDetailsShimmer:"BuilderProjectShimmer__tuppleDetailsShimmer",imageAreaShimmer:"BuilderProjectShimmer__imageAreaShimmer",imgBox:"BuilderProjectShimmer__imgBox",contentShimmer:"BuilderProjectShimmer__contentShimmer"}},PgCh:function(e,t,r){e.exports={_99XidWrap:"d_projByBuilder___99XidWrap",_99XidSlider:"d_projByBuilder___99XidSlider",tabTags:"d_projByBuilder__tabTags",xidRecommWrap:"d_projByBuilder__xidRecommWrap",xidRecommCard:"d_projByBuilder__xidRecommCard",smallLabel:"d_projByBuilder__smallLabel",xidRecommCont:"d_projByBuilder__xidRecommCont",xidRecommSection:"d_projByBuilder__xidRecommSection"}},WaQU:function(e,t,r){"use strict";r.r(t);var a=r("97Jx"),n=r.n(a),o=r("VrFO"),c=r.n(o),i=r("Y9Ll"),s=r.n(i),l=r("5Yy7"),u=r.n(l),d=r("N+ot"),p=r.n(d),f=r("AuHH"),m=r.n(f),_=r("KEM+"),h=r.n(_),S=r("ERkP"),E=r.n(S),v=r("1Pcy"),y=r.n(v),g=r("uDfI"),b=r("PgCh"),T=r.n(b),O=r("Mi4d"),R=r("Ez8w"),C=r("ddV6"),A=r.n(C),P=r("Do4k"),B=r("yGwB"),j=r.n(B),w=function(e){var t=e.onShorlitClick,r=Object(S.useState)(e.shortlisted),a=A()(r,2),n=a[0],o=a[1];return E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{className:"".concat(j.a.photonDisp)},e.img?E.a.createElement("img",{alt:e.alt||"",src:e.img}):E.a.createElement("i",null),E.a.createElement("div",{className:j.a.photonTags},e.showFlag&&E.a.createElement("div",{className:"".concat(j.a.reraRegular)},E.a.createElement(P.a,{tickIcon:!0,variant:"reraRegular"},"RERA")),e.seenTag?E.a.createElement("div",{className:"".concat(j.a.reraRegular)},E.a.createElement(P.a,{variant:"seenRegular"},"Seen")):null),E.a.createElement("div",{className:"".concat(j.a.photonSubTxt," ").concat(j.a.largeTxt)},E.a.createElement("span",null,e.possessionTxt),E.a.createElement("span",null))),E.a.createElement("i",{class:"pageComponent iconS_Common_24 ".concat("Y"===n?"icon_starHover":"icon_star"," ").concat(j.a.shortlist),"data-label":"SHORTLIST_BUTTON",onClick:function(e){e.stopPropagation(),o((function(e){return t&&t(e),"Y"===e?"N":"Y"}))}}))},L=function(e){var t=e.data,r=void 0===t?[]:t,a=e.selectedTabLabel,n=void 0===a?"":a,o=e.onClick,c=void 0===o?function(){}:o,i=e.isScrolled,s=e.onShorlitClick,l=function(e,t){c(t),window.open(e,"_blank")};return r.map((function(e,t){var r=e.IMAGE,a=e.NAME,o=e.POSESSION_DATE,c=e.POSSESSION_DATE_FORMATTED,u=e.LOCALITYCITY,d=e.propTypeStr,p=e.PRICE_DISP,f=e.PROJECT_LANDING_URL,m=e.shortlisted,_=e.RERA_DETAILS,h=(_=void 0===_?{}:_).ShowFlag,S=e.PROJ_ID,v=e.RES_COM,y=p&&"0"!=p?p:"Price Not Available",g=y&&-1===y.indexOf("Price on Request")&&-1===y.indexOf("Price Not Available"),b="Ready To Move"!==o&&c?"Possession from ".concat(c):o,O=function(e){if("undefined"===typeof localStorage)return!1;var t=localStorage.getItem("seenPropertiesAndProjects");t=t&&t.length?t.split(","):[];var r=new Set(t);return r&&r.has(e)}(S);return E.a.createElement("div",{"data-label":"PROJECT_TUPLE",className:"pageComponent ".concat(T.a.xidRecommCard),onClick:function(){return l(f,S)},"data-custominfo":JSON.stringify({custom_object:{index:t+1,section:n}})},E.a.createElement("div",null,E.a.createElement(w,{img:i?r:"",showFlag:h,seenTag:O,alt:e.ALT_TAG||e.IMAGE_ALT_TAG||"property-image",possessionTxt:b,shortlisted:m,onShorlitClick:function(e){s(v+S,e)}})),E.a.createElement("div",{className:"".concat(T.a.xidRecommCont)},E.a.createElement(R.a,{firstRowTxt:a,link:f,secRowTxt:d?"".concat(d," in ").concat(u):"",thirdRowTxt:"".concat(g?"\u20b9 ":"").concat(y)})))}))},I=r("lIuY"),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return E.a.createElement(I.a,{viewType:"desktop",slideNumber:e.isFullWidth?1:2,showSlides:e.isFullWidth?4:2.5,scrollMarg:12,compAttr:"projsByBuilder".concat(e.selectedTab),isScrolled:e.isScrolled},E.a.createElement(L,e))},x=r("cp7S"),N=function(e){var t=e.heading,r=e.xidBuilder,a=e.tabClickHandler,n=e.selectedTab,o=e.onClick,c=e.isFullWidth,i=e.isScrolled,s=e.onShorlitClick;return E.a.createElement("div",{id:"Projects-by-builder",className:" pageComponent ".concat(T.a._99XidWrap," ").concat(T.a._99XidSlider),topmost:"true","data-label":"PROJECTS_BY_BUILDER"},E.a.createElement(O.a,{heading:t,tagName:"4"}),E.a.createElement("div",{className:"".concat(T.a.tabTags)},r.map((function(e,t){return E.a.createElement(x.a,{className:"pageComponent",onClick:function(){return a(t)},variant:"textOnly",toggle:!1,"data-label":"TOGGLE","data-custominfo":JSON.stringify({custom_object:{type:e.label}}),fontStyle:"$normal",active:n===t?"active":""},e.label)}))),Boolean(r)&&E.a.createElement("div",{className:"".concat(T.a.xidRecommWrap)},E.a.createElement(D,{selectedTab:n,data:r[n].value,type:"ProjByBuilderCard",selectedTabLabel:r[n].label,onClick:o,isFullWidth:c,isScrolled:i,onShorlitClick:s})))},k=r("N3Dn"),W=r("SRsf"),U=r("/KUi"),F=r("smsd"),G=r("OwdG"),M=r.n(G),H=function(e){for(var t=e.times,r=void 0===t?1:t,a=[],n=0;n<r;n++)a.push(E.a.createElement("div",{className:M.a.tuppleShimmerWrap},E.a.createElement("div",{className:M.a.tuppleDetailsShimmer},E.a.createElement("div",{className:M.a.imageAreaShimmer}),E.a.createElement("div",{className:M.a.contentShimmer},E.a.createElement("div",null),E.a.createElement("div",null),E.a.createElement("div",null)))));return E.a.createElement("div",{className:M.a.bpsWrapper},E.a.createElement("div",{className:M.a.heading}),E.a.createElement("div",{className:M.a.tabs},E.a.createElement("div",null),E.a.createElement("div",null),E.a.createElement("div",null)),E.a.createElement("div",{className:M.a.tupleWrapper},a.map((function(e){return e}))))};function Y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=m()(e);if(t){var n=m()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return p()(this,r)}}var J=function(e){u()(r,e);var t=Y(r);function r(e){var a;c()(this,r),a=t.call(this,e),h()(y()(a),"onShorlitClick",(function(e,t){a.props.dispatchShortlisted(e,t)}));var n,o=e.ordering,i=(o=void 0===o?{}:o).tuples,s=void 0===i?[]:i,l=o.fullWidthComponent,u=void 0===l?"ASK_AND_ANSWER":l,d=-1,p=-1;return s.forEach((function(e,t){e.componentId===u?p=t:"BUILDER_PROJECTS"===e.componentId&&(d=t)})),n=d>p,a.state={isFullWidth:n},a}return s()(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.builderProjects.xidBuilder,r=e.config,a=void 0===r?{}:r,n=e.dispatchFetchProjectsByBuilder;t.length||n(a.params)}},{key:"render",value:function(){var e=this.props,t=e.selectedTab,r=void 0===t?0:t,a=e.builderProjects,n=(a=void 0===a?{}:a).xidBuilder,o=void 0===n?[]:n,c=e.config,i=(c=void 0===c?{}:c).heading,s=e.dispatchUpdateSeen,l=e.isScrolled,u=e.setSelectedTab,d=e.loading,p=this.state.isFullWidth;return d?E.a.createElement(H,{times:3}):Boolean(o.length)?E.a.createElement(W.a,null,E.a.createElement(N,{heading:i,xidBuilder:o,selectedTab:r,onClick:s,isFullWidth:p,isScrolled:l,onShorlitClick:this.onShorlitClick,tabClickHandler:u})):""}}]),r}(E.a.Component),V=Object(g.b)((function(e){var t=e.builderProj,r=(t=void 0===t?{}:t).builderProjects,a=void 0===r?{}:r,n=t.heading,o=t.config,c=t.selectedTab,i=t.loading,s=e.projectDetailState,l=(s=void 0===s?{}:s).pageData;return{builderProjects:a,heading:n,config:o,ordering:(l=void 0===l?{}:l).ordering,selectedTab:c,loading:i}}),(function(e){return{dispatchFetchProjectsByBuilder:function(t){e(Object(k.f)(t))},dispatchSetConfigAndBuilderProjectsXid:function(t){e(Object(k.g)(t))},dispatchUpdateSeen:function(t,r){e(Object(F.r)(t,r))},dispatchShortlisted:function(t,r){e(Object(U.e)(t,r,"XID"))},setSelectedTab:function(t){e(Object(k.h)(t))}}}))(J);function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=m()(e);if(t){var n=m()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return p()(this,r)}}var X=function(e){u()(r,e);var t=K(r);function r(){return c()(this,r),t.apply(this,arguments)}return s()(r,[{key:"render",value:function(){return E.a.createElement(V,n()({},this.props,{isSSR:!0}))}}]),r}(E.a.Component);h()(X,"initialAction",(function(e){var t=e.config,r=e.assetsObject,a=e.assetsPath;return function(e){var n=[];return n.push(Promise.resolve(e(Object(k.g)(t,r,a)))),n}}));t.default=X},lIuY:function(e,t,r){"use strict";var a=r("97Jx"),n=r.n(a),o=r("VrFO"),c=r.n(o),i=r("Y9Ll"),s=r.n(i),l=r("1Pcy"),u=r.n(l),d=r("5Yy7"),p=r.n(d),f=r("N+ot"),m=r.n(f),_=r("AuHH"),h=r.n(_),S=r("KEM+"),E=r.n(S),v=r("ERkP"),y=r.n(v),g=r("L+mx"),b=r.n(g);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=h()(e);if(t){var n=h()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return m()(this,r)}}var C=function(e){p()(r,e);var t=R(r);function r(e){var a;return c()(this,r),a=t.call(this,e),E()(u()(a),"carouselRenderCalculation",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=document.querySelector("[compattr=".concat(e,"]")),n=a.slideInfo(r.childElementCount),o=r.children&&r.children[0]?r.children[0].offsetWidth+t:t;a.setState({counterLimit:n.CounterLimit,countCard:r.childElementCount,slideWidth:o,counter:0,rowStyle1:{}})})),E()(u()(a),"componentDidMount",(function(){var e=a.props,t=e.compAttr,r=e.scrollMarg,n=void 0===r?0:r;a.carouselRenderCalculation(t,n)})),E()(u()(a),"componentDidUpdate",(function(e){var t=a.props,r=t.compAttr,n=t.scrollMarg,o=void 0===n?0:n,c=t.isScrolled,i=t.cardLength,s=void 0===i?null:i,l=t.numberOfCard;l&&l!==e.numberOfCard&&a.setState({countCard:l}),r===e.compAttr&&c===e.isScrolled&&s==e.cardLength||a.carouselRenderCalculation(r,o)})),E()(u()(a),"slideInfo",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=a.state,r=t.countCard,n=t.slideWidth,o=a.props,c=o.slideNumber,i=o.showSlides,s=r||(e||r),l={getCardListLength:s,oneClickSlideValue:c,oneSlideValue:n,CounterLimit:Math.ceil(s-(i-c))/c};return l})),E()(u()(a),"slideRightButton",(function(e){var t=a.state,r=t.counter,n=(t.rowStyle1,t.showLeftArrow,a.props),o=n.showFlag,c=(n.showSlides,a.slideInfo());r<c.CounterLimit-1&&a.setState({counter:a.state.counter+1},(function(){var e=a.state.counter;"function"==typeof o&&a.props.showFlag(e);var t={marginLeft:c.oneClickSlideValue*c.oneSlideValue*-e+"px"};a.setState({rowStyle1:t},(function(){}))})),a.setState({showLeftArrow:!0}),e.stopPropagation()})),E()(u()(a),"slideLeftButton",(function(e){var t=a.state,r=(t.rowStyle1,t.counter),n=a.props,o=n.showFlag;n.showSlides;r>=1&&a.setState({counter:a.state.counter-1},(function(){var e=a.state.counter;"function"==typeof o&&a.props.showFlag(e);var t=a.slideInfo(),r={marginLeft:t.oneClickSlideValue*t.oneSlideValue*-e+"px"};a.setState({rowStyle1:r},(function(){}))})),e.stopPropagation()})),a.state={countCard:0,rowStyle1:{},counter:1,counterLimit:0,slideWidth:0,showLeftArrow:!1},a}return s()(r,[{key:"render",value:function(){var e=this,t=this.state,r=t.countCard,a=t.counter,o=t.rowStyle1,c=t.slideWidth,i=t.showLeftArrow,s=this.props,l=s.showSlides,u=s.slideNumber,d=void 0===u?1:u,p=(s.type,s.compAttr),f=s.children,m=s.tupleArrw,_=s.customStyle,h=void 0===_?"":_,S=s.component,E=void 0===S?"":S,v=s.customRight,g=void 0===v?"":v,T=s.viewType,R=s.builderCaraousal,C=void 0!==R&&R,A=s.dataLabelRightArrow,P=s.handleOnMouseEnter,B=void 0===P?function(){}:P,j=s.isArrowZIndex2,w=void 0!==j&&j,L=s.whiteBgCustom,I=void 0!==L&&L,D=c*l+"px",x=Math.ceil(r-(l-d))/d,N="desktop"==this.props.viewType&&0!=a&&i?y.a.createElement("div",{className:"".concat(this.props.blueBack?b.a.blueBackground:b.a.whiteBg," ").concat(m?b.a.srpArr:""," ").concat(b.a.arrowContainerBox," ").concat(b.a.left," ").concat(C?b.a.builderLeftArrow:""," ").concat(this.props.isLeftIcon?b.a.leftBtn:""," ").concat(w?b.a.zIndex2cls:""," ").concat(I?b.a.customWhiteBgCls:""),onClick:function(t){return e.slideLeftButton(t)}},y.a.createElement("i",{className:"".concat(this.props.navIcon,"  "),onMouseEnter:function(){return B()}})):"",k="desktop"==this.props.viewType&&x-a>1?y.a.createElement("div",n()({className:"".concat(this.props.blueBack?b.a.blueBackground:b.a.whiteBg," ").concat(m?b.a.srpArr:""," ").concat(b.a.arrowContainerBox," ").concat("fatFooter"==E?g:b.a.right,"  ").concat(C?b.a.builderCaraousal:""," ").concat(this.props.isLifeStyleDesktop?b.a.rightBtn:""," ").concat(w?b.a.zIndex2cls:""," ").concat(I?b.a.customWhiteBgCls:""," pageComponent"),onClick:function(t){return e.slideRightButton(t)}},A),y.a.createElement("i",{className:"".concat(this.props.navIcon," ").concat(b.a.rightArrow),onMouseEnter:function(){return B()}})):"";return y.a.createElement("div",{className:b.a.CarouselContainer,style:{carouselWidth:D}},N,y.a.createElement("div",{className:b.a.CarouselBox},y.a.createElement("div",{compattr:p,className:"".concat(b.a.slidingBox," ").concat("mobile"==T?b.a.mobView:""," ").concat(h),style:O({},o)},f)),k)}}]),r}(v.Component);C.defaultProps={navIcon:"iconS_Common_24 icon_arrowWhite",blueBack:!0},t.a=C},yGwB:function(e,t,r){e.exports={_99PhotonWrap:"photon___99PhotonWrap",photonDisp:"photon__photonDisp",videoIcn:"photon__videoIcn",photonTags:"photon__photonTags",photonSubTxt:"photon__photonSubTxt",largeTxt:"photon__largeTxt",shortlist:"photon__shortlist"}}}]);