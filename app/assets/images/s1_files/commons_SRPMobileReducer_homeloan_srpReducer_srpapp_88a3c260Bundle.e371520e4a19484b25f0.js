(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{"1LE4":function(e,a,r){"use strict";var t=r("KEM+"),i=r.n(t);function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){i()(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}var n={URL:"",count:"",pageNumber:"1",CANONICAL_URL:""};a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,a=arguments.length>1?arguments[1]:void 0,r=a.type,t=a.data,i=void 0===t?{}:t;return"GOT_PAGINATION_DATA"===r?o(o({},e),{},{URL:i?i.URL:"",count:i?i.count:0,pageNumber:i&&i.pageNumber||"1",CANONICAL_URL:e.CANONICAL_URL||i?i.CANONICAL_URL:""}):o({},e)}},FhI1:function(e,a,r){"use strict";r.d(a,"a",(function(){return t}));var t={WEBINAR:"WEBINAR",FP:"FP",RENTAL_PROMO:"RENTAL_PROMO",NLPSRP:"NLPSRP",OFFER:"OFFER",POPULAR_PROJECTS:"POPULAR_PROJECTS",NPSRP:"NPSRP",CROSS_SELL:"CROSS_SELL",R2M:"R2M",COM_INVESTMENT:"COM_INVESTMENT",FRESH_LISTINGS:"FRESH_LISTINGS",REI_LOCALITY:"REI_LOCALITY",DEMANDED_PROJECTS:"DEMANDED_PROJECTS",RENTAL_YIELDS_PROJECTS:"RENTAL_YIELDS_PROJECTS",ASSURED_RETURNS_PROJECTS:"ASSURED_RETURNS_PROJECTS",FEATURE_DEALERS:"FEATURE_DEALERS",NRV_SET_PROPERT_ALERTS:"NRV_SET_PROPERT_ALERTS"}},Mmeq:function(e,a,r){"use strict";var t=r("RhWx"),i=r.n(t),s=r("KEM+"),o=r.n(s),n=r("FhI1");function _(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?_(Object(r),!0).forEach((function(a){o()(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}var E={headerSearchData:{searchType:"buy-tab",suggestorData:"",photonState:{show:!0}},contactedSpids:[],seenArray:[],hideData:{hidePropertyArray:[],hideProjectArray:[],hideDealerArray:[]},openFilters:!1,openTopDealerLayer:!1,showContactForm:!1,showReportForm:!1,showFeedbackForm:!1,showVerifiedOverlay:!1,filterInteracted:!1,pageNumber:"",showSuggestorLayer:!1,showSuggestionLayerFor:"",isLocalityInlineFilter:!1,setFilterAnimation:!1,showMobileHideLayer:!1,selectedOptionsListForLocality:[],selectedOptionsListForSociety:[],bcModalTray:{open:!1,id:null},mobileHideTuplesInfo:{hideTuplesArray:[],isRemoveLayer:!1,isOptionsLayer:!1},filters:{exclude_seen:"",sortby:"",bedroom_num:"",budget_min:"",budget_max:"",minPriceForPlan:"",maxPriceForPlan:"",availability:"",transact_type:"",property_type:"",locality_array:"",building_id:"",verified:"",isPreLeased:"",situatedIn:"",businessType:"",floorPreference:"",locatedOn:"",media:"",class:"",amenities:"",addAmenities:"",furnish:"",area_min:"",area_max:"",floor_max:"",area_unit:"1",floor_min:"",sub_availability:"",localityNameMap:"",buildingNameMap:"",rera:"",keyword:"",exclude_societies:"",exclude_agents:"",exclude_search_spid:"",platform:"DESKTOP",moduleName:"GRAILS_SRP",workflow:"GRAILS_SRP",top_dealer:"",tenant_pref:"",brokerage:"",sharing:"",capacity:"",bathroom_attached:"",additionalServices:"",bathroom:"",availableFrom:"",furnishing_attributes:"",postedSince:"",page_size:r("LVwm").c.desktop_page_size,page:"1",group_by:"",r2m:"",uc:"",possession:"",aop:"",top_locality:"",tupleAreaUnit:"",noxid:"",commercial_category:"",seatTypes:"",seatCountRng:"",planType:"",otherCommercialFilters:"",commercialServices:"",commercialOfficeSupplies:"",commercialSpaceAccess:"",commercialINEServices:"",commercialFNDServices:"",commercialActivities:"",commercialAdditionalAmenities:"",medicalFacilities:"",gradeA:"",includeCoworking:"",advertiser_id:"",profileId:""},overlayData:{visibility:!1,backdropClick:!1},isLoading:!1,isFetchingTupleData:!1,delta:0,updateTuples:0,pageData:{properties:[],search_params:{},flags:{},reiDetails:{},ratingReviewNew:{}},searchType:"SEARCH_OTHERS",backToTop:!0,filterConfig:null,pfw_show_overlay_loader:!1,widgetRenderingState:{},seenPropertiesAndProjects:[],TOP_BANNER:"",selectionSheetOpen:!1,contactSheetOpen:!1,investmentFlowCompleted:!1};a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_MODULE_NAME":return c(c({},e),{},{filters:c(c({},e.filters),{},{moduleName:a.payload,workflow:a.payload})});case"IS_MOBILE":return c(c({},e),{},{filters:c(c({},e.filters),{},{platform:a.payload?"MSITE":"DESKTOP"})});case"GET_COMPONENT_CHUNK":var r=a.component,t=c(c({},e),{},{showContactForm:"contact"===r||"phone"===r||"photoeoi"===r,showReportForm:"contact"===r||"phone"===r||"photoeoi"===r||"feedback"===r,showFeedbackForm:"feedbackForm"===r,showVerifiedOverlay:"verified"===r,showMobileHideLayer:"mobileHideLayer"===r});switch(r){case"hide":t=c(c({},t),{},{showHideLayer:!0,showToastMessage:!0});break;case"unhide":t=c(c({},t),{},{showUnhideLayer:!0,showToastMessage:!0});break;case"toast":t=c(c({},t),{},{showToastMessage:!0});break;default:t=c({},t)}return c(c({},t),{},{showInterimLayer:e.showInterimLayer||"interim"===r,showGdpr:e.showGdpr||"gdpr"===r,showSortLayer:"sort"===r});case"SET_PAGE_NAME":return c(c({},e),{},{pageName:a.payload});case"FETCH_PAGE_REQUEST":return c(c({},e),{},{fetching:!0});case"FETCH_XHR_REUQEST":return c(c({},e),{},{fetching:!0,fetched:!1});case"FETCH_SRP_PAGE_SUCCESS":return c(c({},e),{},{pageData:c(c({},e.pageData),a.data),fetching:!1,fetched:!0});case"FETCH_STATIC_SUCCESS":return c(c({},e),{},{pageData:c(c({},e.pageData),{},{staticData:a.data})});case"FETCH_XHR_SUCCESS":var s=i()(e.pageData.properties),_=i()(a.data.properties),d=[].concat(i()(s),i()(_)),l=a.data.search_params,S=0===a.data.properties.length,p=a.data.reiDetails,T=a.data.ratingReview;return c(c({},e),{},{fetching:!1,fetched:!0,pageData:c(c({},e.pageData),{},{properties:"MSITE"!==l.platform||a.data.isFilterCall?a.data.properties:d,count:a.data.count,customResultsCount:a.data.customResultsCount,vsp:a.data.vsp,fatFooter:a.data.fatFooter||e.pageData.fatFooter,facets:a.data.facets,search_params:S?c(c({},a.data.search_params),{},{page:e.pageData.search_params.page}):a.data.search_params,searchQuickLinks:a.data.searchQuickLinks,encrypted_input:a.data.encrypted_input,ysf_string:a.data.ysf_string,flags:a.data.flags,firstLoadHappened:a.data.firstLoadHappened||e.pageData.firstLoadHappened,reiDetails:p,leftFilterLocalities:a.data.leftFilterLocalities||e.pageData.leftFilterLocalities,ratingReviewNew:T})});case"FETCH_PHOTON_SUCCESS":return c(c({},e),{},{pageData:c(c({},e.pageData),{},{photonData:a.data})});case"FETCH_COUNTRY_CODE_SUCCESS":return c(c({},e),{},{pageData:c(c({},e.pageData),a.data)});case"FETCH_PAGE_FAILURE":return c(c({},e),{},{fetching:!1,error:a.data});case"UPDATE_OVERLAY":if("XID"!==a.data.pageName){var u=c({},e.mobileHideTuplesInfo);return a.data.visibility||(u=c(c({},e.mobileHideTuplesInfo),{},{isRemoveLayer:!1,isOptionsLayer:!1})),c(c({},e),{},{overlayData:a.data,mobileHideTuplesInfo:u})}return c({},e);case"FETCH_RESIDENT_PARAM_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{property_type:a.data})});case"FETCH_budget_min_PARAM_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{budget_min:a.data})});case"FETCH_budget_max_PARAM_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{budget_max:a.data})});case"FETCH_CoWorking_budget_min_PARAM_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{minPriceForPlan:a.data})});case"FETCH_CoWorking_budget_max_PARAM_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{maxPriceForPlan:a.data})});case"FETCH_area_max_PARAM_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{area_max:a.data})});case"FETCH_area_min_PARAM_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{area_min:a.data})});case"FETCH_CLASS_PARAM_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{class:a.data})});case"FETCH_BEDROOM_PARAM_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{bedroom_num:a.data})});case"FETCH_locality_array_PARAM_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{localityNameMap:a.data.localityNameMap,locality_array:a.data.localityID})});case"FETCH_availability_PARAM_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{availability:a.data})});case"FETCH_building_id_PARAM_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{buildingNameMap:a.data.buildingNameMap,building_id:a.data.buildingID})});case"FETCH_KEYWORD_PARAM_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{keyword:a.data})});case"FETCH_TRANSACT_TYPE_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{transact_type:a.data})});case"FETCH_CITY_TYPE_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{city:a.data})});case"FETCH_PREFERENCE_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{preference:a.data})});case"FETCH_SHARING_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{sharing:a.data})});case"FETCHED_TENANT_PREF":return c(c({},e),{},{filters:c(c({},e.filters),{},{tenant_pref:a.data})});case"RECIEVED_AREA_UNIT":return c(c({},e),{},{filters:c(c({},e.filters),{},{area_unit:a.data})});case"SET_BACK_TO_TOP":return c(c({},e),{},{backToTop:a.data});case"FETCH_RES_COM_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{res_com:a.data})});case"FETCH_FURNISH_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{furnish:a.data})});case"FETCH_VERIFIED_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{verified:a.data})});case"FETCH_TOP_DEALER_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{top_dealer:a.data})});case"FETCH_PREF_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{media:a.data})});case"FETCH_SUB_AVAILABILITY_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{sub_availability:a.data})});case"UPDATE_SEEN_PROPERTIES":return c(c({},e),{},{seenProp:a.data});case"FETCH_PROPERTY_ID_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{propid:a.data})});case"FETCH_PAGE_SUCCESS":return c(c({},e),{},{filters:c(c({},e.filters),{},{page:"".concat(a.data)})});case"FETCH_SHORTLIST_SUCCESS":return c(c({},e),{},{pageData:c(c({},e.pageData),{},{propertyDetails:c(c({},e.pageData.propertyDetails),{},{prop_data:c(c({},e.pageData.propertyDetails.prop_data),{},{shortlisted:a.data})})})});case"UPDATE_PHOTON":return c(c({},e),{},{photonState:c(c({},e.photonState),a.data)});case"UPDATE_CRUMB":return c(c({},e),{},{crumbData:a.data});case"ADVERTISER_FORM_NEXT_STEP":return c(c({},e),{},{advertiserFormNextStep:a.data});case"SET_ADVERTISER_RECOMMENDATIONS":return c(c({},e),{},{advertiserRecommendations:a.data});case"SET_ADVERTISER_DETAILS":return c(c({},e),{},{advertiserData:a.data});case"UPDATE_EOI_DATA":return c(c({},e),{},{eoiData:a.data});case"UPDATE_PROP":return c(c({},e),{},{pageData:c(c({},e.pageData),{},{propertyDetails:{prop_data:c({},a.data)}})});case"UPDATE_BD_NUMBER":return c(c({},e),{},{BDNumber:a.data});case"INSERT_RECOM_EOI_DATA":var R=c({},e),A=c({},R.advertiserRecommendations);return A[a.data.key].profile=a.data.profile,c(c({},e),{},{advertiserRecommendations:A});case"SEARCH_TYPE":return c(c({},e),{},{headerSearchData:{searchType:a.data}});case"FETCH_SUGGESTOR_SUCCESS":return c(c({},e),{},{headerSearchData:c(c({},e.headerSearchData),{},{suggestorData:a.data})});case"UPDATE_SIDEPANE":return c(c({},e),{},{sidePane:a.data});case"SHOW_LOGIN_REGISTER_DIALOGUE":return c(c({},e),{},{loginRegisterForm:a.data});case"SHOW_CONTACT_FORM":return c(c({},e),{},{showContactLayer:a.data});case"SHOW_MODAL_LAYER":return c(c({},e),{},{showModalLayer:a.data});case"HIDE_MODAL_LAYER":return c(c({},e),{},{showModalLayer:a.data,showHidePropertyLayer:a.data,showHideProjectLayer:a.data,showHideDealerLayer:a.data});case"SHOW_HIDE_PROPERTY_LAYER":return c(c({},e),{},{showModalLayer:a.data,showHidePropertyLayer:a.data});case"SHOW_HIDE_PROJECT_LAYER":return c(c({},e),{},{showModalLayer:a.data,showHideProjectLayer:a.data});case"SHOW_HIDE_DEALER_LAYER":return c(c({},e),{},{showModalLayer:a.data,showHideDealerLayer:a.data});case"SHOW_CHANGE_PASSWORD_DIALOGUE":return c(c({},e),{},{changePasswordForm:a.data});case"HIDE_FEEDBACK_TAB":return c(c({},e),{},{hideFeedbackTab:a.data});case"SHOW_EMAIL_ALERT_DIALOGUE":return c(c({},e),{},{emailAlertForm:a.data});case"SHOW_FEEDBACK_DIALOGUE":return c(c({},e),{},{feedbackForm:a.data,showFeedbackForm:a.data});case"SHOW_ADVERTISER_DIALOGUE":return c(c({},e),{},{advertiserForm:a.data});case"SHOW_VIEW_AS_TABLE":return c(c({},e),{},{viewAsTable:a.data});case"SHOW_VERIFIED_OVERLAY":return c(c({},e),{},{VerifiedOverlay:a.data});case"SET_REPORT_DIALOGUE":return c(c({},e),{},{reportForm:a.data});case"SET_PAGE_NUMBER":return c(c({},e),{},{filters:c(c({},e.filters),{},{page:a.data})});case"UPDATE_PROPERTY_SELECTED":return c(c({},e),{},{pageData:c(c({},e.pageData),{},{propertyDetails:c(c({},e.pageData.propertyDetails),{},{prop_data:a.data})})});case"UPDATE_LOGIN_DATA":return c(c({},e),{},{userData:a.data});case"FILTER_CHANGE":return c(c({},e),{},{filters:c(c({},e.filters),{},o()({},a.data.filterName,a.data.data))});case"FILTER_CHANGE_BULK":return c(c({},e),{},{filters:c(c({},e.filters),a.data)});case"SET_HIDE_PROPERTY":return c(c({},e),{},{hideData:c(c({},e.hideData),{},{hidePropertyArray:a.data})});case"SET_HIDE_PROJECT":return c(c({},e),{},{hideData:c(c({},e.hideData),{},{hideProjectArray:a.data})});case"SET_HIDE_DEALER":return c(c({},e),{},{hideData:c(c({},e.hideData),{},{hideDealerArray:a.data})});case"HIDE_PROPERTY":return c(c({},e),{},{hideData:c(c({},e.hideData),{},{hidePropertyArray:[].concat(i()(e.hideData.hidePropertyArray),i()(a.data))})});case"HIDE_PROJECT":return c(c({},e),{},{hideData:c(c({},e.hideData),{},{hideProjectArray:[].concat(i()(e.hideData.hideProjectArray),i()(a.data))})});case"HIDE_DEALER":return c(c({},e),{},{hideData:c(c({},e.hideData),{},{hideDealerArray:[].concat(i()(e.hideData.hideDealerArray),i()(a.data))})});case"SEEN_PROPERTY":var O=new Set(e.seenArray);return O.add.apply(O,i()(a.data)),c(c({},e),{},{seenArray:i()(O)});case"SET_CREDIT_MAP":return c(c({},e),{},{creditMap:a.data});case"UPDATE_MAPDATA":return c(c({},e),{},{mapData:c(c({},e.mapData),a.data)});case"SHOW_SEARCH_CRITERIA_EMAIL_ALERT":return c(c({},e),{},{searchCriteriaData:a.data});case"SHOW_BOOST_INFO":return c(c({},e),{},{boostInfoForm:a.data});case"SHOW_BOOST_LAYER":return c(c({},e),{},{boostLayer:a.data});case"UPDATE_RANK":return c(c({},e),{},{boostTupleRank:a.data});case"UPDATE_PROPERTIES":return c(c({},e),{},{pageData:c(c({},e.pageData),{},{properties:a.data})});case"UPDATE_BASE_CREDITS":return c(c({},e),{},{baseCredit:a.data});case"UPDATE_NEW_CREDIT":return c(c({},e),{},{newCredit:a.data});case"SET_BASE_VAL":return c(c({},e),{},{base:a.data});case"SET_CAPTURED_RANK":return c(c({},e),{},{capturedRank:a.data});case"UPDATE_UNIVERSAL_RANK":return c(c({},e),{},{universalBoostRank:a.data});case"UPDATE_BOOST_DATA":return c(c({},e),{},{delta:a.data.delta,boostPropId:a.data.propID,boostSPID:a.data.SPID});case"UPDATE_DELTA":return c(c({},e),{},{delta:a.data});case"RESET_BOOST":return c(c({},e),{},{reset:a.data});case"SET_BOOST_PROFILEID":return c(c({},e),{},{boostProfileId:a.data});case"UPDATE_TUPLES":return c(c({},e),{},{updateTuples:!e.updateTuples});case"IS_RENT_COMMERCIAL_REQUEST":return c(c({},e),{},{isRentSearchRequest:a.payload.isRentSearchRequest,isCommercialSearchRequest:a.payload.isCommercialSearchRequest});case"CLEAR_ALL":var D=e.filters,P=D.res_com,f=D.preference,L=D.locality_array,y=D.building_id,C=(D.commercial_category,D.property_type,e.isPropertyFilterWidgetMounted),m="R"===P&&"S"===f,I=a.isMobile,h=a.isMobileRevamp,g=a.isTupleGrouping,F=a.commercial_category,N=a.property_type,b="C"===P&&"S"!==f,H=b&&"OS"===F,U=H&&Array.isArray(N)&&["91","92","93"].some((function(e){return N.includes(e)})),w=Boolean(F);return c(c({},e),{},{selectedOptionsListForSociety:[],selectedOptionsListForLocality:[],filters:c(c({},e.filters),{},{commercial_category:w?F:"",property_type:m||I?U?e.filters.property_type:"":e.filters.property_type,uc:"",r2m:"",aop:"",possession:"",sub_availability:"",bedroom_num:"",budget_min:"",budget_max:"",minPriceForPlan:"",maxPriceForPlan:"",availability:"",transact_type:"",lookingForInvestment:"",locality_array:C||h?L:"",building_id:C||g?y:"",verified:"",isPreLeased:"",media:"",class:"",amenities:"",addAmenities:"",furnish:"",area_min:"",area_max:"",floor_max:"",top_dealer:"",area_unit:"1",floor_min:"",rera:"",tenant_pref:"",brokerage:"",sharing:"",capacity:"",bathroom_attached:"",additionalServices:"",bathroom:"",availableFrom:"",postedSince:"",sortby:I?"":"rel",exclude_seen:"",vtAvlbl:"",seatNum:"",keyOfficeSpecifications:"",cabinNums:"",washRoomNum:"",locatedOn:"",situatedIn:"",businessType:"",floorPreference:"",parking:"",doors:"",flooringType:"",wallType:"",officeSpreadOver:"",facilities:"",buildingAmenities:"",register_date:"",freshnessPeriod:"",seatTypes:"",seatCountRng:"",planType:"",otherCommercialFilters:"",commercialServices:"",commercialOfficeSupplies:"",commercialSpaceAccess:"",commercialINEServices:"",commercialFNDServices:"",commercialActivities:"",commercialAdditionalAmenities:"",medicalFacilities:"",gradeA:"",projectAssuredReturns:"",projectLeaseGuarantee:"",projectRentalYield:"",projectRoi:"",includeCoworking:"",investmentOption:""})});case"IS_RENT_REQUEST":return c(c({},e),{},{isRentRequest:a.data});case"SET_AMENITIES":return c(c({},e),{},{filters:c(c({},e.filters),{},{amenities:a.data})});case"SET_INVESTMENT_OPTION":return c(c({},e),{},{filters:c(c({},e.filters),{},{investmentOption:a.data})});case"SET_FLOOR_MIN":return c(c({},e),{},{filters:c(c({},e.filters),{},{floor_min:a.data})});case"SET_FLOOR_MAX":return c(c({},e),{},{filters:c(c({},e.filters),{},{floor_max:a.data})});case"SET_RERA_STATUS":return c(c({},e),{},{filters:c(c({},e.filters),{},{rera:a.data})});case"OPEN_FILTER_LAYER":return window.scrollTo(0,0),c(c({},e),{},{openFilters:!0});case"OPEN_SORT_LAYER":var M=a.isMobileRevamp,v=void 0!==M&&M;return v||window.scrollTo(0,0),c(c({},e),{},{openSortLayer:!0});case"SCROLLED_FROM_TOP":return c(c({},e),{},{yAxis:a.yAxis});case"CLOSE_SORT_LAYER":var G=a.isMobileRevamp,Y=void 0!==G&&G;return Y||window.scrollTo(0,0),c(c({},e),{},{openSortLayer:!1});case"CLOSE_FILTER_LAYER":var k=a.scrollToTop,W=void 0===k||k;return W?window.scrollTo(0,0):window.scrollTo(0,e.yAxis),c(c({},e),{},o()({openFilters:!!a.payload&&a.payload},"".concat(a.payload),!1));case"SET_ANIMATION_FOR_FILTER_LAYER":return c(c({},e),{},{setFilterAnimation:a.payload});case"TRACK_AFTER_FILTER_OPEN":return c(c({},e),{},{trackAfterFilterOpen:!0});case"SHOW_SUGGESTOR_LAYER":return c(c({},e),{},{suggestionLayerVisible:a.payload,showSuggestionLayerFor:a.id,isLocalityInlineFilter:a.isLocalityInlineFilter});case"SET_SUGGESTOR_LIST_DATA_FOR_LOCALITY":return c(c({},e),{},{selectedOptionsListForLocality:i()(a.payload)});case"SET_SUGGESTOR_LIST_DATA_FOR_SOCIETY":return c(c({},e),{},{selectedOptionsListForSociety:i()(a.payload)});case"OPEN_TOP_DEALER_LAYER":return c(c({},e),{},{openTopDealerLayer:!0});case"CLOSE_TOP_DEALER_LAYER":return c(c({},e),{},{openTopDealerLayer:!1});case"FETCH_TOP_DEALER_DETAILS":return c(c({},e),{},{topDealerDetails:a.data});case"OPEN_VIDEO_MODAL":return c(c({},e),{},{openVideoModal:!0});case"CLOSE_VIDEO_MODAL":return c(c({},e),{},{openVideoModal:!1});case"SELECTED_PROPERTY":return c(c({},e),{},{selectedProperty:a.data});case"OPEN_LOADER":return c(c({},e),{},{overlayData:{visibility:!0,backdropClick:!1},isLoading:!0});case"CLOSE_LOADER":return c(c({},e),{},{overlayData:{visibility:!1,backdropClick:!1},isLoading:!1});case"OPEN_THREE_DOT_LOADER":return c(c({},e),{},{isFetchingTupleData:!0});case"CLOSE_THREE_DOT_LOADER":return c(c({},e),{},{isFetchingTupleData:!1});case"UPDATE_SEARCH_TYPE":return c(c({},e),{},{searchType:a.data});case"SHOW_MOBILE_HIDE_OPTIONS_LAYER":return c(c({},e),{},{mobileHideTuplesInfo:c(c({},e.mobileHideTuplesInfo),{},{isRemoveLayer:a.isRemoveLayer,isOptionsLayer:a.isOptionsLayer,hideTuplesArray:[a.property]})});case"HIDE_MOBILE_HIDE_OPTIONS_LAYER":return c(c({},e),{},{mobileHideTuplesInfo:c(c({},e.mobileHideTuplesInfo),{},{isRemoveLayer:!1,isOptionsLayer:!1})});case"SET_HIDE_PROPERTIES":return c(c({},e),{},{filters:c(c({},e.filters),{},{exclude_search_spid:a.data})});case"SET_HIDE_AGENTS":return c(c({},e),{},{filters:c(c({},e.filters),{},{exclude_agents:a.data})});case"SET_HIDE_PROJECTS":return c(c({},e),{},{filters:c(c({},e.filters),{},{exclude_societies:a.data})});case"SET_APPROPRIATE_HIDE_DATA_LIST":switch(a.hideCardType){case"property":return c(c({},e),{},{mobileHideTuplesInfo:c(c({},e.mobileHideTuplesInfo),{},{typeOfTuple:"property"}),hideData:c(c({},e.hideData),{},{hidePropertyArray:a.reset?a.newList:[].concat(i()(e.hideData.hidePropertyArray),[a.property])})});case"dealer":return c(c({},e),{},{mobileHideTuplesInfo:c(c({},e.mobileHideTuplesInfo),{},{typeOfTuple:"dealer"}),hideData:c(c({},e.hideData),{},{hideDealerArray:a.reset?a.newList:[].concat(i()(e.hideData.hideDealerArray),[a.property])})});case"project":return c(c({},e),{},{mobileHideTuplesInfo:c(c({},e.mobileHideTuplesInfo),{},{typeOfTuple:"project"}),hideData:c(c({},e.hideData),{},{hideProjectArray:a.reset?a.newList:[].concat(i()(e.hideData.hideProjectArray),[a.property])})})}case"UPDATE_POSSESSION_FILTER":return c(c({},e),{},{filters:c(c({},e.filters),{},{possession:a.data})});case"RESET_AVAILABILITY_FILTER":return c(c({},e),{},{filters:c(c({},e.filters),{},{availability:a.data})});case"IS_RECOM_PAGE":return c(c({},e),{},{isRecomPage:a.data});case"SET_GROUP_SIMILAR":return c(c({},e),{},{filters:c(c({},e.filters),{},{group_by:a.data})});case"SET_BROKERAGE":return c(c({},e),{},{filters:c(c({},e.filters),{},{brokerage:a.data})});case"SET_SORT_BY":return c(c({},e),{},{filters:c(c({},e.filters),{},{sortby:"default"==a.data?"rel":a.data})});case"IS_COMMERCIAL_REQUEST":return c(c({},e),{},{isCommercialRequest:a.data});case"UPDATE_UC_R2M_FILTERS":var j=a.data.split(",");return c(c({},e),{},{filters:c(c({},e.filters),{},{uc:j.includes("1")?"1":"",r2m:j.includes("2")?"2":""})});case"FILTERS_CHANGE":return c(c({},e),{},{filters:c(c({},e.filters),a.data)});case"SET_PROPERTY_FILTER_WIDGET_FLAG":return c(c({},e),{},{isPropertyFilterWidgetMounted:a.flag});case"FETCH_PFW_RENTAL_SUCCESS":return c(c({},e),{},{pfw_rental_count:a.data});case"PFW_UPDATE_OVERLAY":return c(c({},e),{},{pfw_show_overlay_loader:a.data});case"srp/FILTER_CONFIG_SUCCESS":return c(c({},e),{},{filterConfig:a.data});case"srp/FILTER_CONFIG_FAIL":return c(c({},e),{},{filterConfig:null});case"FILTER_INTERACTED":return c(c({},e),a.data);case"UPDATE_CONTACTED_SPID":return c(c({},e),{contactedSpids:e.contactedSpids.concat(a.data.spid.split(","))});case"UPDATE_SEEN_PROPS":return c(c({},e),{seenPropertiesAndProjects:e.seenPropertiesAndProjects.concat(a.data.split(","))});case"SET_TUPLE_ICONS_DESKTOP":return c(c({},e),{tupleIconsList:a.data});case"BC_FOOTER_CLOSE":return c(c({},e),{bcModalTray:c(c({},e.bcModalTray),{},{open:!1,id:a.data})});case"BC_FOOTER_OPEN":return c(c({},e),{bcModalTray:c(c({},e.bcModalTray),{},{open:!0,id:a.data})});case"WEBINAR_RECOM_RESULTS":return c(c({},e),{webinarWidgetHtml:a.data});case"widgets/FP_WIDGET_HTML":return c(c({},e),c({},a.data));case"widgets/SET_WIDGET_RENDERING_STATE":var B="".concat(a.data.id);return e.widgetRenderingState&&"SUCCESS"===e.widgetRenderingState[B]?c({},e):("WEBINAR_SRP"===B&&(B=n.a.WEBINAR),"FP_SRP"===B&&(B=n.a.FP),"NLPSRP"===B&&(B=n.a.NLPSRP),"OFFERS_SRP"===B&&(B=n.a.OFFER),"popularProjects"===B&&(B=n.a.POPULAR_PROJECTS),"npsrpWidget"===B&&(B=n.a.NPSRP),"crossSellWidget"===B&&(B=n.a.CROSS_SELL),"r2mWidget"===B&&(B=n.a.R2M),"comInvestmentWidget"===B&&(B=n.a.COM_INVESTMENT),"freshPropContainer"===B&&(B=n.a.FRESH_LISTINGS),"REI_LOCALITY"===B&&(B=n.a.REI_LOCALITY),"DEMANDED_PROJECTS"===B&&(B=n.a.DEMANDED_PROJECTS),"RENTAL_YIELDS_PROJECTS"===B&&(B=n.a.RENTAL_YIELDS_PROJECTS),"ASSURED_RETURNS_PROJECTS"===B&&(B=n.a.ASSURED_RETURNS_PROJECTS),c(c({},e),{},{widgetRenderingState:c(c({},e.widgetRenderingState),{},o()({},B,a.data.state))}));case"widgets/RESET_WIDGET_RENDERING_STATE":return c(c({},e),{},{widgetRenderingState:{}});case"SET_STORE_DATA":return c(c({},e),a.data);case"SET_LOCALITY_ARRAY":return c(c({},e),{},{filters:c(c({},e.filters),{},{locality_array:a.data})});case"srp/TOP_BANNER_HTML":return c(c({},e),{},{TOP_BANNER:a.data});case"srp/SHOW_DETAIL_LAYER":return c(c({},e),{},{detailLayer:a.data,detailLayerId:a.id});case"srp/SHOW_FILTER_LAYER":return c(c({},e),{},{reviewLayerData:a.data,reviewDetailId:a.id});case"srp/SET_SP_DATA":return c(c({},e),{},{pageData:c(c({},e.pageData),{},{search_params:c(c({},e.pageData.search_params),a.data)})});default:return c({},e)}}}}]);