(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{ObA6:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return n})),a.d(t,"e",(function(){return o})),a.d(t,"b",(function(){return c}));var r=function(){try{if("undefined"!==typeof window&&window.document&&window.__commonCssLinks__&&window.__assetsPath__){var e=document.getElementsByTagName("head")[0];__commonCssLinks__.split(",").map((function(t){var a=document.createElement("link");a.href="".concat(__assetsPath__).concat(t),a.type="text/css",a.rel="stylesheet",e.append(a)}))}}catch(t){}},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return a&&e.length&&-1===e.indexOf(a)?t.filter((function(e){return Boolean("vtAvlbl"!==e.filterName)})):t},n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"SRP",a="NPSRP"===t?["POPULAR_BUILDER","UPCOMING_LOCALITIES"]:["HP_WIDGET","RECOMMENDED_LOCALITIES","POPULAR_LOCALITIES","UPCOMING_LOCALITIES","LOCALITIES_BY_SIMILAR_LOCALITY","TOP_LOCALITIES","PROJ_INV_OPTN","POPULAR_BUILDER","BY_BUDGET","REI_PROJ_INV_OPTN","REI_POPULAR_PROJECTS","REI_PROJECT_BY_CONSTRUCTION_STATUS","REI_PAGE_PRICE_INSIGHTS","UPCOMING_DEVELOPMENT_REI_PAGE"];return a.includes(e)},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=["property_type","bedroom_num","transact_type","preference"],r=[t];return a.forEach((function(t){if(e[t]){var a=e[t];switch(t){case"property_type":r.push("propertyTypes=".concat(a));break;case"bedroom_num":r.push("bedrooms=".concat(a));break;case"preference":a="S"===a?"RESALE":"R"===a?"RENTAL":a,r.push("preferences=".concat(a));break;default:r.push("".concat(t,"=").concat(a))}}})),r},c=function(e){if("undefined"!==typeof document){for(var t="".concat(e,"="),a=document.cookie.split(";"),r=0;r<a.length;r++){for(var i=a[r];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return 0==i.indexOf(t)?i.substring(t.length,i.length):""}}},smsd:function(e,t,a){"use strict";a.d(t,"c",(function(){return H})),a.d(t,"l",(function(){return D})),a.d(t,"d",(function(){return w})),a.d(t,"m",(function(){return U})),a.d(t,"n",(function(){return V})),a.d(t,"e",(function(){return J})),a.d(t,"p",(function(){return K})),a.d(t,"o",(function(){return q})),a.d(t,"h",(function(){return X})),a.d(t,"g",(function(){return Z})),a.d(t,"a",(function(){return z})),a.d(t,"f",(function(){return Q})),a.d(t,"i",(function(){return $})),a.d(t,"j",(function(){return ee})),a.d(t,"r",(function(){return te})),a.d(t,"b",(function(){return ae})),a.d(t,"q",(function(){return re})),a.d(t,"k",(function(){return ie}));var r=a("RhWx"),i=a.n(r),n=a("KEM+"),o=a.n(n),c=a("s3M2"),s=a.n(c),d=a("QddB"),p=a.n(d),l=a("tNLw"),_=a.n(l),u=a("rVU0"),f=a("yMbT"),E=a("3Ts5"),m=a("LVwm"),y=a("UZja"),T=a("cY6V"),S=a("dbkD"),g=a("c4sx"),R=a("YWqT"),C=a("EqnS"),A=a("72WP"),v=a("mbti"),h=a("TZ+z"),I=a("/fe8"),N=a("CwHw");function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L=f.f.API_URL,P=f.f.BASE_AGGREGATOR_PATH,F=f.f.PROPERTY_SEARCH_URL,G=f.f.PROJECT_SEARCH_URL,j=f.f.CSR_DISCOVERY_AGGREGATOR_PATH,H=function(e){return{type:"CLOSE_FILTER_LAYER",payload:e}},D=function(){return{type:"OPEN_LOADER"}},w=function(){return{type:"CLOSE_LOADER"}},U=function(e){return{type:S.a.SET_BREADCRUMB,data:e}},M=function(e){return{type:T.a.SET_DATA,data:e}},Y=function(e){return{type:"FETCH_STATIC_SUCCESS",data:e}},k=function(e){return{type:"FETCH_COUNTRY_CODE_SUCCESS",data:e}},B=function(e){return{type:"FETCH_XHR_SUCCESS",data:e}},x=function(e){return{type:"FETCH_RESIDENT_PARAM_SUCCESS",data:e}},V=function(e){return{type:"FETCH_locality_array_PARAM_SUCCESS",data:e}},W=function(e){return{type:"FETCH_building_id_PARAM_SUCCESS",data:e}},J=function(e){var t=e||{action:{page:"SRP_NEW",stage:"FINAL",event:"PAGE_VIEW"}},a="".concat("https://www.99acres.com","/do/clickStreamTracking/ClickStream/trackData");_()(a,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"trackingData[]="+encodeURIComponent(JSON.stringify(t))}).then((function(e){}))},K=function(e){return function(t,a){var r=(e.data||{}).search_params,i=(r=void 0===r?{}:r).isMsiteRevamp,n=void 0!==i&&i,o=r.platform,c=r.res_com,s=r.preference,d=r.cityID,p=r.property_type,l=r.budget,_=r.coWorkingBudget,u=r.area,f=r.availability,E=r.localityNameMap,m=r.localityID,y=r.buildingID,T=r.builderId,S=r.buildingNameMap,g=r.bedroom_num,R=r.keyword,C=r.transact_type,A=r.furnish,v=r.verified,h=r.isPreLeased,I=r.media,N=r.top_dealer,O=r.sub_availability,b=r.area_unit,L=r.tenant_pref,P=r.sharing,F=r.propid,G=r.page,j=r.amenities,H=r.floor_min,D=r.floor_max,w=r.rerastatus,U=r.exclude_search_spid,M=r.exclude_societies,Y=r.exclude_agents,k=r.exclude_seen,B=void 0===k?"":k,J=r.group_by,K=r.brokerage,q=r.sortby,X=r.bathroom,Z=r.bathroom_attached,z=r.availableFrom,Q=r.capacity,$=r.additionalServices,ee=r.configurations,te=void 0===ee?[]:ee,ae=r.campaignId,re=void 0===ae?"":ae,ie=r.vtAvlbl,ne=void 0===ie?"":ie,oe=r.type,ce=r.possession,se=r.commercial_category,de=void 0===se?"":se,pe=r.seatNum,le=void 0===pe?"":pe,_e=r.wallType,ue=void 0===_e?"":_e,fe=r.flooringType,Ee=void 0===fe?"":fe,me=r.doors,ye=void 0===me?"":me,Te=r.facilities,Se=void 0===Te?"":Te,ge=r.keyOfficeSpecifications,Re=void 0===ge?"":ge,Ce=r.officeSpreadOver,Ae=void 0===Ce?"":Ce,ve=r.buildingAmenities,he=void 0===ve?"":ve,Ie=r.washRoomNum,Ne=void 0===Ie?"":Ie,Oe=r.cabinNums,be=void 0===Oe?"":Oe,Le=r.locatedOn,Pe=void 0===Le?"":Le,Fe=r.situatedIn,Ge=void 0===Fe?"":Fe,je=r.businessType,He=void 0===je?"":je,De=r.parking,we=void 0===De?"":De,Ue=r.floorPreference,Me=void 0===Ue?"":Ue,Ye=r.register_date,ke=r.freshnessPeriod,Be=void 0===ke?"":ke,xe=r.propertyWithOffer,Ve=void 0===xe?"":xe,We=r.seatTypes,Je=void 0===We?"":We,Ke=r.seatCountRng,qe=void 0===Ke?"":Ke,Xe=r.planType,Ze=void 0===Xe?"":Xe,ze=r.otherCommercialFilters,Qe=void 0===ze?"":ze,$e=r.commercialServices,et=void 0===$e?"":$e,tt=r.commercialOfficeSupplies,at=void 0===tt?"":tt,rt=r.commercialSpaceAccess,it=void 0===rt?"":rt,nt=r.commercialINEServices,ot=void 0===nt?"":nt,ct=r.commercialFNDServices,st=void 0===ct?"":ct,dt=r.commercialActivities,pt=void 0===dt?"":dt,lt=r.commercialAdditionalAmenities,_t=void 0===lt?"":lt,ut=r.medicalFacilities,ft=void 0===ut?"":ut,Et=r.gradeA,mt=void 0===Et?"":Et,yt=r.showInvestorSrp,Tt=r.projectAssuredReturns,St=r.projectLeaseGuarantee,gt=r.projectRentalYield,Rt=r.projectRoi,Ct=r.minPriceForPlan,At=r.maxPriceForPlan,vt=r.includeCoworking,ht=r.profileId,It=a(),Nt=It.srp,Ot=(Nt=void 0===Nt?{}:Nt).isNpSrp,bt=void 0!==Ot&&Ot,Lt=Nt.pageData,Pt=(Lt=void 0===Lt?{}:Lt).facets,Ft=(Pt=void 0===Pt?{}:Pt).BUILDER_CLUSTER,Gt=void 0===Ft?[]:Ft,jt=It.global,Ht=(jt=void 0===jt?{}:jt).isMobile,Dt=jt.isSrpRevamp;if(ht&&ht&&(t({type:"FILTER_CHANGE",data:{filterName:"advertiser_id",data:ht}}),t({type:"FILTER_CHANGE",data:{filterName:"profileId",data:ht}})),t("Y"===Ve?{type:"FILTER_CHANGE",data:{filterName:"propertyWithOffer",data:"Y"}}:{type:"FILTER_CHANGE",data:{filterName:"propertyWithOffer",data:""}}),t("Y"===h?{type:"FILTER_CHANGE",data:{filterName:"isPreLeased",data:"Y"}}:{type:"FILTER_CHANGE",data:{filterName:"isPreLeased",data:""}}),t(!0===vt?{type:"FILTER_CHANGE",data:{filterName:"includeCoworking",data:"Y"}}:{type:"FILTER_CHANGE",data:{filterName:"includeCoworking",data:""}}),$&&Array.isArray($)&&t({type:"FILTER_CHANGE",data:{filterName:"additionalServices",data:$.join(",")}}),Q&&t({type:"FILTER_CHANGE",data:{filterName:"capacity",data:Q.join(",")}}),ne&&t({type:"FILTER_CHANGE",data:{filterName:"vtAvlbl",data:ne}}),Ye&&t({type:"FILTER_CHANGE",data:{filterName:"register_date",data:Ye}}),Be&&t({type:"FILTER_CHANGE",data:{filterName:"freshnessPeriod",data:Be}}),de&&t({type:"FILTER_CHANGE",data:{filterName:"commercial_category",data:de}}),re&&t({type:"FILTER_CHANGE",data:{filterName:"campaignId",data:re}}),t(mt?{type:"FILTER_CHANGE",data:{filterName:"gradeA",data:mt}}:{type:"FILTER_CHANGE",data:{filterName:"gradeA",data:""}}),le&&t({type:"FILTER_CHANGE",data:{filterName:"seatNum",data:le}}),ue&&t({type:"FILTER_CHANGE",data:{filterName:"wallType",data:ue}}),Ee&&t({type:"FILTER_CHANGE",data:{filterName:"flooringType",data:Ee}}),ye&&t({type:"FILTER_CHANGE",data:{filterName:"doors",data:ye}}),Se&&t({type:"FILTER_CHANGE",data:{filterName:"facilities",data:Se}}),Re&&t({type:"FILTER_CHANGE",data:{filterName:"keyOfficeSpecifications",data:Re}}),Ae&&t({type:"FILTER_CHANGE",data:{filterName:"officeSpreadOver",data:Ae}}),he&&t({type:"FILTER_CHANGE",data:{filterName:"buildingAmenities",data:he}}),Ne&&t({type:"FILTER_CHANGE",data:{filterName:"washRoomNum",data:Ne}}),be&&t({type:"FILTER_CHANGE",data:{filterName:"cabinNums",data:be}}),Pe&&t({type:"FILTER_CHANGE",data:{filterName:"locatedOn",data:Pe}}),Ge&&t({type:"FILTER_CHANGE",data:{filterName:"situatedIn",data:Ge}}),Je&&t({type:"FILTER_CHANGE",data:{filterName:"seatTypes",data:"string"===typeof Je?Je:Je.join(",")}}),Ct&&t({type:"FILTER_CHANGE",data:{filterName:"minPriceForPlan",data:Ct}}),At&&t({type:"FILTER_CHANGE",data:{filterName:"maxPriceForPlan",data:At}}),qe&&t({type:"FILTER_CHANGE",data:{filterName:"seatCountRng",data:qe}}),Ze&&t({type:"FILTER_CHANGE",data:{filterName:"planType",data:Ze}}),Qe&&t({type:"FILTER_CHANGE",data:{filterName:"otherCommercialFilters",data:"string"===typeof Qe?Qe:Qe.join(",")}}),et&&t({type:"FILTER_CHANGE",data:{filterName:"commercialServices",data:"string"===typeof et?et:et.join(",")}}),at&&t({type:"FILTER_CHANGE",data:{filterName:"commercialOfficeSupplies",data:"string"===typeof at?at:at.join(",")}}),it&&t({type:"FILTER_CHANGE",data:{filterName:"commercialSpaceAccess",data:"string"===typeof it?it:it.join(",")}}),ot&&t({type:"FILTER_CHANGE",data:{filterName:"commercialINEServices",data:"string"===typeof ot?ot:ot.join(",")}}),st&&t({type:"FILTER_CHANGE",data:{filterName:"commercialFNDServices",data:"string"===typeof st?st:st.join(",")}}),pt&&t({type:"FILTER_CHANGE",data:{filterName:"commercialActivities",data:"string"===typeof pt?pt:pt.join(",")}}),_t&&t({type:"FILTER_CHANGE",data:{filterName:"commercialAdditionalAmenities",data:_t}}),ft&&t({type:"FILTER_CHANGE",data:{filterName:"medicalFacilities",data:"string"===typeof ft?ft:ft.join(",")}}),He&&t({type:"FILTER_CHANGE",data:{filterName:"businessType",data:He}}),Me&&t({type:"FILTER_CHANGE",data:{filterName:"floorPreference",data:Me}}),we&&t({type:"FILTER_CHANGE",data:{filterName:"parking",data:we}}),e.isTupleGrouping&&te.length&&(t({type:"FILTER_CHANGE",data:{filterName:"bedroom_num",data:te[0].split("_")[0]}}),t({type:"FILTER_CHANGE",data:{filterName:"property_type",data:te[0].split("_")[1]}})),z&&t({type:"FILTER_CHANGE",data:{filterName:"availableFrom",data:z}}),X&&t({type:"FILTER_CHANGE",data:{filterName:"bathroom",data:X}}),Z&&"Y"===Z&&t({type:"FILTER_CHANGE",data:{filterName:"bathroom_attached",data:Z}}),B.length&&Ht&&Dt&&t({type:"FILTER_CHANGE",data:{data:B.join(","),filterName:"exclude_seen"}}),p&&p.length>0&&t(x("string"===typeof p?p:p.join(","))),bt&&oe&&oe.length>0&&t(x("string"===typeof oe?oe:oe.join(","))),t({type:"SET_BROKERAGE",data:"undefined"!==typeof K?K:""}),U&&U.length&&t({type:"SET_HIDE_PROPERTIES",data:U.join(",")}),q&&t({type:"SET_SORT_BY",data:q}),J&&J.length&&t({type:"SET_GROUP_SIMILAR",data:J}),Y&&Y.length&&t({type:"SET_HIDE_AGENTS",data:Y.join(",")}),M&&M.length&&t({type:"SET_HIDE_PROJECTS",data:M.join(",")}),j&&j.length&&t({type:"SET_AMENITIES",data:j}),H&&H.length&&t({type:"SET_FLOOR_MIN",data:H}),D&&D.length&&t({type:"SET_FLOOR_MAX",data:D}),w&&w.length&&t({type:"SET_RERA_STATUS",data:w}),L&&t({type:"FETCHED_TENANT_PREF",data:"string"!==typeof L?L.join(","):L}),d&&d.length>0&&t(function(e){return{type:"FETCH_CITY_TYPE_SUCCESS",data:e}}(d.join(","))),F&&t(function(e){return{type:"FETCH_PROPERTY_ID_SUCCESS",data:e}}(F)),G&&t(function(e){return{type:"FETCH_PAGE_SUCCESS",data:e}}(G)),s&&t(function(e){return{type:"FETCH_PREFERENCE_SUCCESS",data:e}}(s)),v&&t(function(e){return{type:"FETCH_VERIFIED_SUCCESS",data:e}}(v)),N&&"MSITE"!==o&&t(function(e){return{type:"FETCH_TOP_DEALER_SUCCESS",data:e}}(N)),A&&t(function(e){return{type:"FETCH_FURNISH_SUCCESS",data:e}}(A)),I){var wt=I||"";Ht&&Dt&&(wt=wt.split(",").filter((function(e){return"Y"!==e})).join(",")),t(function(e){return{type:"FETCH_PREF_SUCCESS",data:e}}(wt))}if(O){var Ut=O.split(",");if(n){var Mt=["1","2","3","4","6"];Ut.filter((function(e){return Mt.includes(e)})).join(","),t({type:"FILTER_CHANGE",data:{data:Ut.filter((function(e){return Mt.includes(e)})).join(","),filterName:"aop"}})}Ut.includes("".concat((new Date).getFullYear()))&&t({type:"UPDATE_UC_R2M_FILTERS",data:"1"}),a().global.isSrpRevamp||n||t({type:"UPDATE_POSSESSION_FILTER",data:O}),"MSITE"!==o&&t(function(e){return{type:"FETCH_SUB_AVAILABILITY_SUCCESS",data:e}}(O))}if(ce&&t(function(e){return{type:"FETCH_NP_SEARCH_TYPE_SUCCESS",data:e}}(ce)),w&&t(function(e){return{type:"FETCH_RERA_STATUS_SUCCESS",data:e}}(w)),c&&t(function(e){return{type:"FETCH_RES_COM_SUCCESS",data:e}}(c)),b&&t(function(e){return{type:"RECIEVED_AREA_UNIT",data:e}}(b)),l&&l.length>0&&(l[0]&&(l[0]>0||"MSITE"===o)&&t(function(e){return{type:"FETCH_budget_min_PARAM_SUCCESS",data:e}}("0"===l[0]?"":l[0])),l[1]&&(l[1]>0||"MSITE"===o)&&t(function(e){return{type:"FETCH_budget_max_PARAM_SUCCESS",data:e}}(l[1]))),_&&_.length>0&&(_[0]&&(_[0]>0||"MSITE"===o)&&t(function(e){return{type:"FETCH_CoWorking_budget_min_PARAM_SUCCESS",data:e}}("0"===_[0]?"":_[0])),_[1]&&(_[1]>0||"MSITE"===o)&&t(function(e){return{type:"FETCH_CoWorking_budget_max_PARAM_SUCCESS",data:e}}(_[1]))),u&&u.length>0&&(u[0]&&u[0]>0&&t(function(e){return{type:"FETCH_area_min_PARAM_SUCCESS",data:e}}(u[0])),u[1]&&u[1]>0&&t(function(e){return{type:"FETCH_area_max_PARAM_SUCCESS",data:e}}(u[1]))),e.data&&e.data.search_params&&e.data.search_params.class&&t(function(e){return{type:"FETCH_CLASS_PARAM_SUCCESS",data:e}}(e.data.search_params.class)),E&&m&&(t(V({localityNameMap:E,localityID:m.join(",")})),"MSITE"===o&&t({type:"SET_SUGGESTOR_LIST_DATA_FOR_LOCALITY",payload:E.map((function(e){var t={};return t.id=e.ID,t.label=e.NAME,t}))})),y&&S&&(t(W({buildingNameMap:S,buildingID:y.join(",")})),"MSITE"===o&&t({type:"SET_SUGGESTOR_LIST_DATA_FOR_SOCIETY",payload:S.map((function(e){var t={};return t.id=e.ID,t.label=e.NAME,t}))})),T&&Gt.length>0){var Yt=[];T.forEach((function(e){Gt.forEach((function(t){t.id===e&&Yt.push(t)}))})),t(W({builderNameMap:Yt,builderId:T.join(",")})),"MSITE"===o&&t({type:"SET_SUGGESTOR_LIST_DATA_FOR_SOCIETY",payload:Yt.map((function(e){var t={};return t.id=e.id,t.label=e.label,t}))})}f&&(t(function(e){return{type:"FETCH_availability_PARAM_SUCCESS",data:e}}(f)),("MSITE"!==o&&a().global.isSrpRevamp||"C"!==c||"S"!==s&&"L"!==s)&&"MSITE"!==o||t({type:"UPDATE_UC_R2M_FILTERS",data:f}),"MSITE"!==o||Dt||t({type:"RESET_AVAILABILITY_FILTER",data:""})),R&&t(function(e){return{type:"FETCH_KEYWORD_PARAM_SUCCESS",data:e}}(R)),C&&t(function(e){return{type:"FETCH_TRANSACT_TYPE_SUCCESS",data:e}}(C)),g&&g.length>0&&t(function(e){return{type:"FETCH_BEDROOM_PARAM_SUCCESS",data:e}}(g.join(","))),P&&P.length>0&&t(function(e){return{type:"FETCH_SHARING_SUCCESS",data:e}}("string"===typeof P?P:P.join(","))),yt&&t({type:"FILTER_CHANGE",data:{filterName:"showInvestorSrp",data:yt}}),Tt&&t({type:"FILTER_CHANGE",data:{filterName:"projectAssuredReturns",data:Tt}}),St&&t({type:"FILTER_CHANGE",data:{filterName:"projectLeaseGuarantee",data:St}}),gt&&t({type:"FILTER_CHANGE",data:{filterName:"projectRentalYield",data:gt}}),Rt&&t({type:"FILTER_CHANGE",data:{filterName:"projectRoi",data:Rt}})}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.spids;return function(e){var a=Math.floor(Math.random()*Math.pow(10,16));return _()("".concat(L,"/do/Beacon/index/").concat(a,"/0003005/PROP_SEARCH?update=STIMES&id=").concat(t)),e({type:"SENT_BEACON_DATA"})}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.memCache,a=(e.page,e.logOptions),r=void 0===a?{}:a;return function(e){var a={};try{return a=t.get("footerData",!0),Object(N.a)(r),Promise.all([e(Y(a)),e(M(a))])}catch(i){return Object(N.a)(r),v.a.get({path:"https://www.99acres.com/load/footers/getCitiesForFooter",options:{method:"GET",credentials:"same-origin",timeout:2e3}}).then((function(a){var i=(a||{}).data;return t.set("footerData",i,54e3),e(M(i)),e(Y(i)),Object(N.a)(r),i})).catch((function(e){return Object(N.a)(r),Promise.reject(e)}))}}},Z=function(e){return function(e){return e({type:"FETCH_CRUMB_REQUEST"}),e({type:"UPDATE_CRUMB",data:{}}),new Promise((function(e,t){e(!0)}))}},z=function(e){var t=e.redirectionUrl,a=e.showProperty,r=e.redirectionHttpStatus,i=e.currentUrl,n=e.activated,o=e.res;return function(e){e({type:"CHECK_REDIRECTION"});var c=Object(u.redirection)(t,a,r,i,n),s={type:"redirection",code:parseInt(c.code),url:c.url,msg:"Issue with aggregator response with code: ".concat(c.code)};if("undefined"!==typeof o||!o)throw 404==c.code&&(s.url="/error_404.html"),s;"undefined"==c&&c||(window.location.href=c.url)}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isSrp,a=void 0!==t&&t;return function(e){var t="".concat(L,"/do/deals/index/getCountryCodes");return a?Promise.resolve(e(k(E.u))):_()(t).then((function(e){return e.json()})).then((function(t){return e(k(t))})).catch((function(e){}))}},$=function(e){return function(t,a){t({type:"FETCH_XHR_REUQEST"});var r=a(),i=r.global,n=(i=void 0===i?{}:i).pageName,o=i.isMobile,c=void 0!==o&&o,d=i.isSrpRevamp,l=void 0!==d&&d,f=i._99_ab,E=void 0===f?"99":f,m=r.srp,y=(m=void 0===m?{}:m).isNpSrp,T=m.showVerifiedCoach,S=m.showPreLeasedCoach,R=m.isPropertyFilterWidgetMounted,C=void 0!==R&&R,A=m.isFDDealer,v=m.pageData,I=(v=void 0===v?{}:v).search_params,N=(I=void 0===I?{}:I).res_com,O=void 0===N?"R":N,b=I.preference,F=void 0===b?"S":b,G=I.campaignId,H=I.advertiser_id,D=r.config,w=(D=void 0===D?{}:D).ROUTING,M=(w=void 0===w?{}:w).SRP,Y=(M=void 0===M?{}:M).DISCOVERY_GENERIC_AGG,k=void 0!==Y&&Y,x=M.DISCOVERY_GENERIC_AGG_AB,V=!1,W="project/search";("searchPage"===n||C)&&(W="srp/search",V=k&&E<=(void 0===x?"0":x)),H&&!1===A&&((e+="&src=SRP_ON_PD&advertiser_id=".concat(H)).includes("preference")||(e+="&preference=S"));var J="".concat(L).concat(V?j:P,"/").concat(W,"?").concat(e);if(c&&l&&(J+="&isMsiteRevamp=true"),t({type:"widgets/RESET_WIDGET_RENDERING_STATE"}),!y&&(T||S)){var q=864e5,X=(new Date).getTime()-(Object(u.getCookie)("verifiedInfoShownTimestamp")||0)>=q;t({type:"SET_STORE_DATA",data:{showVerifiedCoach:X}});var Z=(new Date).getTime()-(Object(u.getCookie)("preLeasedInfoShownTimestamp")||0)>=q;t({type:"SET_STORE_DATA",data:{showPreLeasedCoach:Z}})}return _()(J,{method:"GET",credentials:"same-origin"}).then((function(e){return e.json()})).then((function(e){G&&(e.search_params={res_com:O,preference:F,campaignId:G}),e&&e.properties&&(e.properties=Object(h.c)(e,e.properties)),e&&e.vsp&&(e.vsp=Object(h.c)(e,e.vsp)),e&&e.facets&&e.facets.PROPERTY_TYPE&&(e.facets.PROPERTY_TYPE=Object(h.b)(e.facets.PROPERTY_TYPE,"id")),e&&e.coworking&&e.coworking.properties&&(e.coworking.properties=Object(h.c)(e,e.coworking.properties,{isCoworking:!0}));var r=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(e={},p()(e.facets),s()(e.top_locality),t=e.search_params,search_params=void 0===t?{}:t,e),r=a.top_locality||[],i=a.facets.LOCALITY_ID||[];return r=r.map((function(e){return{id:e.ID,label:e.NAME,category:"top"}})),i=(i=i.filter((function(e){return!r.some((function(t){return t.id==e.id}))}))).map((function(e){return{id:e.id,label:e.label,category:"more"}})),a.leftFilterLocalities=[].concat(r,i),a.leftFilterLocalities="LS"===(a.search_params||{}).search_type?[].concat(i):[].concat(r,i),a}(e);t(B(r));var i=a().srp,n=(i=void 0===i?{}:i).isPropertyFilterWidgetMounted;return t(void 0!==n&&n?{type:"PFW_UPDATE_OVERLAY",data:!1}:{type:"UPDATE_OVERLAY",data:{visibility:!1}}),t({type:"GOT_PAGINATION_DATA",data:{CANONICAL_URL:e.metaTagInfo?e.metaTagInfo.CANONICAL_URL:"",count:e.count,pageNumber:"undefined"===typeof e.search_params.page||""===e.search_params.page?"1":e.search_params.page}}),t(U(e.fatFooter)),t(Object(g.a)({search_params:e.search_params,properties:e.properties,count:e.count,vtBookedProperties:e.vtBookedProperties})),l&&t(K({data:{search_params:e.search_params}})),e})).catch((function(e){}))}},ee=function(e,t,a,r,n,o){return function(c,s){c({type:"FETCH_XHR_REUQEST"}),function(e,t){var a=t().srp?t().srp.filters:t().filters;window.sessionStorage.setItem("filters",JSON.stringify(a))}(0,s);var d=s(),p=d.srp,l=(p=void 0===p?{}:p).searchedFrom,f=p.filters,E=p.pageData,T=(E=void 0===E?{}:E).search_params,S=E.search_params,R=(S=void 0===S?{}:S).poiLabel,v=void 0===R?"":R,N=S.poiLocality,O=void 0===N?"":N,H=S.poiStr,U=void 0===H?"":H,M=S.isGroupingPage,Y=void 0!==M&&M,k=S.isMsiteRevamp,x=void 0!==k&&k,V=S.projectId,W=S.onlyGroupedData,q=S.priceSqftRange,X=S.umpt,Z=S.dominantBedroom,z=S.dominantMinBudget,Q=S.dominantMaxBudget,$=S.builders,ee=(S.sub_availability,S.projectPhases),te=S.appreciationYType,ae=S.rentalYieldMaxType,re=S.defaultGrouping,ie=S.customResultsCount,ne=S.manualXids,oe=S.projectWithOffers,ce=S.src,se=S.cityID,de=void 0===se?[]:se,pe=S.advertiser_id,le=S.microMarkets,_e=S.projectPopularityInLocality,ue=S.projectPopularityInZone,fe=S.projectSegmentInLocality,Ee=S.projectConstructionStatus,me=S.projectPriceSqftRange,ye=S.projectRentalYieldRange,Te=S.projectConstructionYear,Se=S.appreciationRange,ge=S.projectSegmentInZone,Re=S.latitude,Ce=S.longitude,Ae=p.isNpSrp,ve=void 0!==Ae&&Ae,he=p.showVerifiedCoach,Ie=p.showPreLeasedCoach,Ne=d.global,Oe=(Ne=void 0===Ne?{}:Ne).isMobile,be=void 0!==Oe&&Oe,Le=Ne.isSrpRevamp,Pe=void 0!==Le&&Le,Fe=Ne._99_ab,Ge=void 0===Fe?"99":Fe,je=d.config,He=(je=void 0===je?{}:je).SRP_PARALLEL_TRACKING_ENABLED,De=je.srpFilters,we=je.VIDEO_TOUR_CITIES,Ue=(je.srpNudges,je.ROUTING),Me=(Ue=void 0===Ue?{}:Ue).SRP,Ye=(Me=void 0===Me?{}:Me).DISCOVERY_GENERIC_AGG,ke=void 0!==Ye&&Ye,Be=Me.DISCOVERY_GENERIC_AGG_AB,xe=void 0===Be?"0":Be,Ve=e,We=f.latlongsearchdistance;if(a&&c({type:"widgets/RESET_WIDGET_RENDERING_STATE"}),c({type:"SET_STORE_DATA",data:{userInteracted:!0}}),!ve&&(he||Ie)&&(a||o.isNudgeCall)){var Je=864e5,Ke=(new Date).getTime()-(Object(u.getCookie)("verifiedInfoShownTimestamp")||0)>=Je;c({type:"SET_STORE_DATA",data:{showVerifiedCoach:Ke}});var qe=(new Date).getTime()-(Object(u.getCookie)("preLeasedInfoShownTimestamp")||0)>=Je;c({type:"SET_STORE_DATA",data:{showPreLeasedCoach:qe}})}var Xe=!ve&&ke&&Ge<=xe;if(be&&Pe&&He&&J(),!Ve||!Ve.length){f=r?Object.assign(f,r):f,a&&Y&&x&&(f=b(b({},f),{},{noxid:"Y",configurationRequired:!0})),f.page_size=ve?y.a.pageSize:m.c.mobile_page_size;var Ze="";f.uc&&(Ze=f.uc),f.r2m&&(f.uc?Ze+=",".concat(f.r2m):Ze=f.r2m);var ze="",Qe="",$e="";if(f.aop&&(ze=f.aop),f.possession&&(f.aop?ze+=",".concat(f.possession):ze=f.possession),f.availability&&f.availability.length&&(be&&Pe||"C"!==f.res_com||"S"!==f.preference)&&(Ze=f.availability),f.sub_availability&&f.sub_availability.length&&(ze=f.sub_availability),f.amenities){var et=f,tt=et.amenities,at=et.additionalServices,rt="";tt.includes("101")&&(rt+="101"),tt.includes("102")&&(rt+=tt.includes("101")?",102":"102"),at&&at.length>0?Qe+="".concat(at).concat(rt&&rt.length>0?",".concat(rt):""):Qe=rt.length>0?rt:"",$e=f.amenities.split(",").filter((function(e){if("101"!==e&&"102"!==e&&e.length>0)return e})).join(",")}f.building_id&&f.building_id.length&&(f.noxid="Y"),f.area_unit>1&&(f.tupleAreaUnit=f.area_unit),"PLP"===f.seo_property_type&&"Y"!==f.isPreLeased&&delete f.seo_property_type,"9999999999"===(f=We&&Re?b(b({},f),{},{latlongsearchdistance:We,latitude:Re,longitude:Ce,city:""},f.locality_array&&f.locality_array.split(",").length>1&&{locality_array:""}):b(b({},f),{},{latlongsearchdistance:"",latitude:"",longitude:""})).maxPriceForPlan&&delete f.maxPriceForPlan;var it=b(b({},f),{},{availability:Ze,sub_availability:ze,additionalServices:Qe.length>0?Qe:f.additionalServices,amenities:$e,seo_property_type:X||"",onlyGroupedData:W,priceSqftRange:q,dominantBedroom:Z,dominantMinBudget:z,dominantMaxBudget:Q,builders:$,projectPhases:ee,appreciationYType:te,rentalYieldMaxType:ae,defaultGrouping:re,customResultsCount:ie,manualXids:ne,projectWithOffers:oe,src:ce,advertiser_id:pe,microMarkets:le,projectPopularityInLocality:_e,projectPopularityInZone:ue,projectSegmentInLocality:fe,projectConstructionStatus:Ee,projectPriceSqftRange:me,projectRentalYieldRange:ye,projectConstructionYear:Te,appreciationRange:Se,projectSegmentInZone:ge});if(be&&Pe&&(it=b(b({},it),{},{isMsiteRevamp:x}),Y&&(it=b(b({},it),{},{isGroupingPage:Y,projectId:V||""})).configurations))if(it.configurations.split("_")[0]==it.bedroom_num&&it.configurations.split("_")[1]==it.property_type)delete it.property_type,delete it.bedroom_num;else{var nt=it.configurations.split("_");it.bedroom_num&&(it.bedroom_num.split(",").some((function(e){return e==nt[0]}))||it.property_type.split(",").some((function(e){return e==nt[1]})))&&(it.configurations="0_0")}if(it.builders&&(it.builders=it.builders.join(",")),delete it.uc,delete it.r2m,delete it.possession,delete it.aop,delete it.localityNameMap,delete it.buildingNameMap,be&&n&&(it.page_size=0),be&&o&&o.isFilterCall){var ot={isMobile:!0,srpFilters:De},ct=Object(C.a)(f.res_com,f.preference,ot);(ct=Object(A.b)(ct,f,{isTupleGrouping:!1,VIDEO_TOUR_CITIES:we,cityId:de[0],flattedList:!0,search_params:T,_99_ab:Ge}))&&(ct=(ct=ct.map((function(e){return Array.isArray(e.filterKeysArray)?e.filterKeysArray.map((function(e){return e.name})):e.filterName}))).flat());var st="C"===it.res_com&&"S"!==it.preference;Object.keys(it).forEach((function(e){!C.b.includes(e)||ct.includes(e)||st&&"commercial_category"===e||(it[e]="")}))}var dt=!!(v||"").length&&!!(O||"").length&&!!(U||"").length&&!!Number(We);("landmark"===l||dt)&&(it.poiLabel=v),U&&O&&(it.poiStr=U,it.poiLocality=O),Ve=Object(u.convertObjectToParamString)(Object(u.removeKeysWithEmptyValues)(it))}var pt="".concat(L).concat(Xe?j:P).concat(ve?G:F,"?").concat(Ve,"&search_type=").concat(We?"LS":"QS");return pt=be&&n?pt:"".concat(pt),c(a?D():{type:"OPEN_THREE_DOT_LOADER"}),a&&window.scroll({top:0,left:0}),_()(pt,{method:"GET",credentials:"same-origin"}).then((function(e){return e.json()})).then((function(e){if(e.properties&&!e.properties.length&&(e.search_params.endReached=!0),e.properties&&e.properties.length&&o&&o.renderedLength&&(e.properties=e.properties.slice(o.renderedLength)),e.firstLoadHappened=!0,be&&n){var r=e.topBuilders,d=(e.search_params||{}).res_com;c({type:"MOBILE_HAMBURGER_DATA",data:b(b({},e.fatFooter),{},{topBuilderData:r,res_com:d,cityId:e.search_params&&e.search_params.cityID?e.search_params.cityID[0]:""})})}if(e.isFilterCall=a,a&&be&&Pe&&"undefined"!==typeof window&&window.history&&window.history.replaceState){var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=window.location,i=r.protocol,n=r.host,o=r.pathname,c=r.search,s="encrypted_input=".concat(e);if("undefined"!==typeof t.srp.pageData.projectDetails&&Object.keys(t.srp.pageData.projectDetails).length){var d=b(b({},Object(u.convertParamStringToObject)(c.substring(1))),{},{encrypted_input:e});return a.isGroupingPage&&a.data&&a.data.search_params&&(a.data.search_params.configurations?("0_0"===a.data.search_params.configurations[0]&&delete d.encrypted_input,d.configurations=a.data.search_params.configurations[0]):d.configurations="0_0"),"".concat(i,"//").concat(n).concat(o,"?").concat(Object(u.convertObjectToParamString)(d,{isEncodedFormat:!1}))}return"".concat(i,"//").concat(n).concat(o,"?").concat(s)}(e.encrypted_input,s(),{isGroupingPage:Y,data:e});window.history.replaceState({path:p},"",p)}if("function"===typeof t&&t(e),c(a?w():{type:"CLOSE_THREE_DOT_LOADER"}),Y&&!e.count&&e.search_params&&(e.search_params.configurations=[f.configurations]),e.facets&&be&&(e.facets.AVAILABLE_FROM=i()(m.b).map((function(e){return b(b({count:7,isDisabled:!1,isPresent:!0},e),{},{id:e.value})})).filter((function(e){return"15"!==e.value}))),e&&e.properties&&(e.properties=Object(h.c)(e,e.properties)),e&&e.vsp&&(e.vsp=Object(h.c)(e,e.vsp)),e&&e.coworking&&e.coworking.properties&&(e.coworking.properties=Object(h.c)(e,e.coworking.properties,{isCoworking:!0})),e&&e.facets&&e.facets.PROPERTY_TYPE&&(e.facets.PROPERTY_TYPE=Object(h.b)(e.facets.PROPERTY_TYPE,"id")),e.fatFooter&&Object.keys(e.fatFooter).length&&be&&Object(I.h)(e),c(B(e)),Y&&x&&c(K({data:{search_params:e.search_params||{}}})),c(Object(g.a)({search_params:e.search_params,properties:ve?e.newProjects:e.properties,count:e.count,vtBookedProperties:e.vtBookedProperties})),a&&c({type:"HEADER_DATA",data:{res_com:e.search_params.res_com,preference:e.search_params.preference,count:e.count,ysfString:e.ysf_string,xidUrl:e.search_params.xidRedirectionUrl}}),c({type:"GOT_PAGINATION_DATA",data:{URL:"",CANONICAL_URL:e.metaTagInfo?e.metaTagInfo.CANONICAL_URL:"",count:e.count,pageNumber:"undefined"===typeof e.search_params.page||""===e.search_params.page?"1":e.search_params.page}}),e.search_params.verified&&c({type:"FILTER_CHANGE",data:{data:e.search_params.verified,filterName:"verified"}}),e.search_params.isPreLeased&&c({type:"FILTER_CHANGE",data:{data:e.search_params.isPreLeased,filterName:"isPreLeased"}}),e.search_params.includeCoworking&&c({type:"FILTER_CHANGE",data:{data:e.search_params.includeCoworking,filterName:"includeCoworking"}}),e.search_params.gradeA&&c({type:"FILTER_CHANGE",data:{data:e.search_params.gradeA,filterName:"gradeA"}}),e.search_params.exclude_localities&&c({type:"FILTER_CHANGE",data:{data:(e.search_params.exclude_localities||[]).join(","),filterName:"exclude_localities"}}),e.search_params.availability&&(c({type:"UPDATE_UC_R2M_FILTERS",data:e.search_params.availability}),Pe&&be&&c({type:"FILTER_CHANGE",data:{filterName:"availability",data:e.search_params.availability}})),e.search_params.sub_availability&&e.search_params.sub_availability.split(",").includes("".concat((new Date).getFullYear()))&&c({type:"UPDATE_UC_R2M_FILTERS",data:"1"}),e.search_params.localityNameMap){var l=i()(e.search_params.localityNameMap).map((function(e){var t={};return t.id=e.ID,t.label=e.NAME,t}));c({type:"SET_SUGGESTOR_LIST_DATA_FOR_LOCALITY",payload:l}),be&&Pe&&!e.search_params.latlongsearchdistance&&c({type:"FILTER_CHANGE",data:{filterName:"locality_array",data:e.search_params.localityID.join(",")}})}return e})).catch((function(e){c(a?w():{type:"CLOSE_THREE_DOT_LOADER"})}))}},te=function(e){return function(){if("undefined"===typeof localStorage)return!1;var t=localStorage.getItem("seenPropertiesAndProjects"),a=t&&t.length?t.split(","):[],r=!1;a&&a.length&&a.map((function(t){t==e&&(r=!0)})),0!=a.length&&r||(a.push(e),localStorage.setItem("seenPropertiesAndProjects",a.join(",")))}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.fetchFreshResults,a=void 0!==t&&t,r=e.isRevamp,i=void 0!==r&&r,n=e.overrideFilters;return function(e,t){["availability","transact_type","class","verified","isPreLeased","sub_availability","media","top_dealer"].map((function(e){return Object(u.setCookieDataNew)(e,"")}));var r=t(),o=r.srp.filters,c=r.global.isMobile,s=b({},o),d={selectedOptionsListForSociety:[],selectedOptionsListForLocality:[],filters:b(b({},o),{},{property_type:"OS"===o.commercial_category?o.property_type:"",uc:"",r2m:"",aop:"",possession:"",sub_availability:"",bedroom_num:"",budget_min:"",budget_max:"",minPriceForPlan:"",maxPriceForPlan:"",availability:"",transact_type:"",locality_array:"",building_id:"",noxid:"",verified:"",isPreLeased:"",media:"",class:"",amenities:"",addAmenities:"",furnish:"",area_min:"",area_max:"",floor_max:"",top_dealer:"",area_unit:"1",floor_min:"",rera:"",tenant_pref:"",brokerage:"",sharing:"",capacity:"",bathroom_attached:"",additionalServices:"",bathroom:"",availableFrom:"",postedSince:"",sortby:"",keyword:"",furnishing_attributes:"",np_search_type:"",rerastatus:"",seatNum:"",wallType:"",flooringType:"",doors:"",facilities:"",keyOfficeSpecifications:"",officeSpreadOver:"",buildingAmenities:"",washRoomNum:"",cabinNums:"",locatedOn:"",situatedIn:"",businessType:"",floorPreference:"",parking:"",freshnessPeriod:"",seatTypes:"",seatCountRng:"",planType:"",otherCommercialFilters:"",commercialServices:"",commercialOfficeSupplies:"",commercialSpaceAccess:"",commercialINEServices:"",commercialFNDServices:"",commercialActivities:"",commercialAdditionalAmenities:"",medicalFacilities:"",gradeA:"",includeCoworking:"",advertiser_id:"",investmentOption:""})};if(i&&(d.filters.exclude_seen="",d.filters.page="1",d.filters.locality_array=o.locality_array,delete d.exclude_agents,delete d.exclude_search_spid,delete d.exclude_societies,"LS"==s.search_type&&(s.locality_array="",s.localityNameMap=[],d.filters.locality_array="",d.filters.localityNameMap=[])),n&&(d={filters:b({},n)}),Object.keys(s).map((function(t){return"undefined"!==typeof d.filters["".concat(t)]&&(s["".concat(t)]=d.filters["".concat(t)],e(Object(R.a)(t,s["".concat(t)],!c))),s["".concat(t)]})),i||e({type:"CLEAR_ALL",isMobile:!0}),a){var p=Object(u.removeKeysWithEmptyValues)(t().srp.filters);"PLP"===p.seo_property_type&&"Y"!==p.isPreLeased&&delete p.seo_property_type;var l=Object(u.convertObjectToParamString)(p);e($(l))}}},re={COLLAB:"COLLABORATIVE_PROPERTIES",VERIFIED:"VERIFIED_PROPERTIES",OWNER:"OWNER_PROPERTIES"},ie=function(e){var t=e.propId,a=void 0===t?"":t,r=e.crawlableComponentList,i=void 0===r?{}:r,n=e.aggregatorUrl,o=void 0===n?"":n,c=e.stage,s=void 0===c?"":c;if(""==a||""==o)return null;var d="".concat(o).concat(a);if(""!=s&&(d="".concat(d,"&stage=").concat(s)),Object.keys(i).length>0){var p=Object.entries(re).map((function(e){return re[e]})).concat(Object.entries(i).map((function(e){return e[1]?e[0]:""})));p&&(d="".concat(d,"&crawlableComponents=").concat(p))}return d}}}]);