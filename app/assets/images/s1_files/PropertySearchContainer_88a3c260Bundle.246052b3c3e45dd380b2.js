(window.webpackJsonp=window.webpackJsonp||[]).push([[247,606],{"2IES":function(e,t,r){e.exports={noProject:"zrp__noProject",mt16:"zrp__mt16",mt8:"zrp__mt8"}},"3oI/":function(e,t,r){e.exports={imgWrapper:"thumbnail__imgWrapper",innerImgWrap:"thumbnail__innerImgWrap",noImageContainerPremiumWithFomo:"thumbnail__noImageContainerPremiumWithFomo",noImageContainerPremium:"thumbnail__noImageContainerPremium",imageContainerPremiumWithoutFomo:"thumbnail__imageContainerPremiumWithoutFomo",imageContainerPremiumWithFomo:"thumbnail__imageContainerPremiumWithFomo",innerImgWrapOld:"thumbnail__innerImgWrapOld",noImageWrap:"thumbnail__noImageWrap",noImageWrapPremium:"thumbnail__noImageWrapPremium",gallery:"thumbnail__gallery"}},"4urv":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}));var a="limitExceeded",n="resultHidden"},FXfD:function(e,t,r){"use strict";r.d(t,"b",(function(){return P})),r.d(t,"d",(function(){return j})),r.d(t,"c",(function(){return S})),r.d(t,"e",(function(){return C})),r.d(t,"f",(function(){return R})),r.d(t,"a",(function(){return T}));var a=r("RhWx"),n=r.n(a),i=r("ERkP"),o=r.n(i),c=r("ddV6"),s=r.n(c),l=r("uDfI"),u=r("7S3c"),p=r("qp0K"),d=r.n(p),m=function(e){var t=e.type,r=e.item,a=void 0===r?{}:r,n=e.onClick,i=j(a,t)||{},c=i.heading,s=i.subHeading,l=i.image,p=i.details,m=i.id;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:d.a.compareListWrap},o.a.createElement(u.a,{onClick:function(e,t){return n(t)},type:"checkbox",id:m,name:"",label:"\xa0",active:a.active}),o.a.createElement("div",{className:d.a.compareProjCard},o.a.createElement("div",{className:d.a[t]},o.a.createElement("img",{src:l})),o.a.createElement("div",{className:"Properties"===t?d.a.contentAreaProperties:d.a.contentArea},o.a.createElement("div",{className:"labels_semiBold spacer2"},c),"Properties"===t?o.a.createElement("div",{className:"labels_semiBold spacer2"},p):null,o.a.createElement("div",{className:"caption_strong_small"},s)))))},f=r("aQgK"),g=r("VHGM"),_=r("u68Y"),h=r("PozB"),b=r("OTBO"),v=r.n(b),y={Dealers:"Select dealers from the list below to see properties by these dealers in your search",Projects:"Select projects from the list below to see properties in these projects in your search",Properties:"Select properties from the list below to see them in your search results"},O=Object(l.b)((function(e){return{exclude_seen:e.srp.filters.exclude_seen}}),(function(e){return{unhideSelectedResults:function(t){return e(Object(g.b)(t))},updateStore:function(t){return e(Object(_.a)(t))}}}))((function(e){var t=e.type,r=void 0===t?"":t,a=e.unhideSelectedResults,c=e.updateStore,l=e.exclude_seen,p=void 0===l?"":l,d=Object(i.useState)(n()(e.list)),g=s()(d,2),_=g[0],b=g[1],O=Object(i.useState)(p),E=s()(O,2),P=E[0],j=E[1],S=Object(i.useState)(!1),C=s()(S,2),R=C[0],N=C[1];return Object(i.useEffect)((function(){return b(e.list)}),[e.list]),Object(i.useEffect)((function(){return b(_.map((function(e){return e.active=R,e})))}),[R]),Object(i.useEffect)((function(){var e=0,t=0;_.forEach((function(r){r.active?e+=1:t+=1})),e===_.length?N(!0):t===_.length&&N(!1)}),[_]),o.a.createElement("div",{className:v.a.tabWrap},o.a.createElement("div",{className:"caption_subdued_large"},y["".concat(r)]),"Properties"===r&&p.length?o.a.createElement("div",{className:v.a.toggleWrap},o.a.createElement("div",{className:"section_header_semiBold"},"Un-hide ".concat(Object(h.d)(p.split(",")).length," already seen properties")),o.a.createElement("div",{className:"toggle"},o.a.createElement(u.a,{onClick:function(e,t){j(t?"":p)},type:"toggle",id:"unhideAlreadySeen",name:"unhideAlreadySeen",label:"\xa0"}))):null,o.a.createElement("div",{className:" ".concat(v.a.spaceTop," hyperlinks_medium"),onClick:function(){return N(!R)}},"".concat(R?"Unselect all":"Select all"," ").concat(r)),o.a.createElement("div",{className:v.a.cardWrapper},_.map((function(e,t){return o.a.createElement(m,{onClick:function(t){return b(T(e,_,{type:r,active:t}))},key:"".concat(r,"_").concat(t),item:e,type:r})}))),o.a.createElement(f.a,{variant:"primaryLarge",onClick:function(){c({isSelected:!!P.length,filterName:"exclude_seen",fetchResults:!1,isNudge:!0}),a({list:_,type:r})},className:v.a.unhideCTA},"Unhide Results"))})),E=function(e,t){switch(t){case"Dealers":return e>1?"Dealers":"Dealer";case"Projects":return e>1?"Projects":"Project";case"Properties":return e>1?"Properties":"Property";default:return""}},P=function(e){var t=[];return e.dealers.length&&t.push({Label:"".concat(e.dealers.length," ").concat(E(e.dealers.length,"Dealers")),Content:o.a.createElement(O,{list:e.dealers,type:"Dealers"})}),e.projects.length&&t.push({Label:"".concat(e.projects.length," ").concat(E(e.projects.length,"Projects")),Content:o.a.createElement(O,{list:e.projects,type:"Projects"})}),e.properties.length&&t.push({Label:"".concat(e.properties.length," ").concat(E(e.properties.length,"Properties")),Content:o.a.createElement(O,{list:e.properties,type:"Properties"})}),t.map((function(e,t){return e.index=t,e}))},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t){case"Properties":return{heading:"".concat(e.PROP_HEADING," in ").concat(e.PROP_NAME||e.LOCALITY),subHeading:"Posted by ".concat(e.CLASS_LABEL," ").concat(e.REGISTERED_DAYS),image:e.PHOTO_URL,details:"".concat((e.FORMATTED||{}).PRICE_IN_WORDS," | ").concat(e.AREA),id:e.SPID};case"Dealers":return{heading:e.name||"",subHeading:e.companyName||"",image:e.image||"",details:"",id:e.id};case"Projects":return{heading:e.name||"",subHeading:e.locality,image:e.image,details:"",id:e.id}}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.exclude_agents,r=void 0===t?"":t,a=e.exclude_search_spid,n=void 0===a?"":a,i=e.exclude_societies,o=void 0===i?"":i,c=e.exclude_seen,s=void 0===c?"":c;return{exclude_search_spid:{count:Object(h.d)(n.split(",")).length,value:n},exclude_societies:{count:Object(h.d)(o.split(",")).length,value:o},exclude_seen:{count:Object(h.d)(s.split(",")).length,value:s},exclude_agents:{count:Object(h.d)(r.split(",")).length,value:r}}},C={Properties:"exclude_search_spid",Dealers:"exclude_agents",Dealer:"exclude_agents",Projects:"exclude_societies",Project:"exclude_societies"},R={exclude_search_spid:"Property",exclude_agents:"Dealer",exclude_societies:"Project"},T=function(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.type,i=r.active,o=n()(t),c=0,s=0;s<o.length;s+=1){var l=o[s];if("Properties"===a){if(l.SPID===e.SPID){c=s;break}}else if(l.id===e.id){c=s;break}}return o[c].active=i||!1,o}},IrIh:function(e,t,r){e.exports={_99XidWrap:"SearchContainer___99XidWrap",dealerWrap:"SearchContainer__dealerWrap",onlyOneTuple:"SearchContainer__onlyOneTuple",rowCollapse:"SearchContainer__rowCollapse",propertiesCard:"SearchContainer__propertiesCard",propCardWrap:"SearchContainer__propCardWrap",projName:"SearchContainer__projName",R2mtabsWrapper:"SearchContainer__R2mtabsWrapper",r2mtuppleWrap:"SearchContainer__r2mtuppleWrap",tuppleWrappers:"SearchContainer__tuppleWrappers",R2Mtupple:"SearchContainer__R2Mtupple",ImagesContainer:"SearchContainer__ImagesContainer",tupleScroll:"SearchContainer__tupleScroll"}},JgxO:function(e,t,r){e.exports={HideWrapper:"tm-hide__HideWrapper",fixedToast:"tm-hide__fixedToast",string:"tm-hide__string",actionButton:"tm-hide__actionButton"}},OTBO:function(e,t,r){e.exports={tabWrap:"uhl__tabWrap",spaceTop:"uhl__spaceTop",toggleWrap:"uhl__toggleWrap",cardSection:"uhl__cardSection",dammySpace:"uhl__dammySpace",unhideCTA:"uhl__unhideCTA",backbutton:"uhl__backbutton",unhideText:"uhl__unhideText",hideWrap:"uhl__hideWrap"}},PaEs:function(e,t,r){"use strict";r.r(t),r.d(t,"getSafeProperty",(function(){return ce}));var a=r("VrFO"),n=r.n(a),i=r("Y9Ll"),o=r.n(i),c=r("5Yy7"),s=r.n(c),l=r("N+ot"),u=r.n(l),p=r("AuHH"),d=r.n(p),m=r("ERkP"),f=r.n(m),g=r("uDfI"),_=r("IrIh"),h=r.n(_),b=r("yA/l"),v=r.n(b),y=r("KEM+"),O=r.n(y),E=r("waKi"),P=r("N9ki"),j=r("q/Pd"),S=r.n(j);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){O()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=Object(g.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resaleRental,r=t.configurations,a=t.selectedConfiguration,n=t.params,i=t.dealer,o=t.selectedPreference;return{configurations:r,selectedConfiguration:a,params:n,dealer:i,selectedPreference:o}}),(function(e){return{setSelectedConfiguration:function(t){e({type:P.A,data:t})},fetchPropertyWidgetsXid:function(t,r){e(Object(E.a)(t,r))}}}))((function(e){var t=e.configurations,r=e.closeModal,a=e.selectedConfiguration,n=e.setSelectedConfiguration,i=e.params,o=e.dealer,c=e.fetchPropertyWidgetsXid,s=e.selectedPreference,l=e.setGlobalConfig,u=void 0===l?function(){}:l,p=a;return f.a.createElement("div",{className:"".concat(S.a.unitOptnListWrap)},f.a.createElement("div",{className:"section_header_bold ".concat(S.a.heading)},"Select unit options"),t&&t.map((function(e,a){return f.a.createElement("div",{className:"".concat(S.a.unitOptnList," pageComponent"),"data-label":"OPTION",key:a,onClick:function(){!function(e){var r=t.find((function(t){return t.id===e})),a=(r=r?r.groups:[]).find((function(e){var t=e.type;return t&&t.discriminator===s})),n=R(R({},i),{},{page:1,preference:s,configurations:e,src:"SRP_R2MXID",transact_type:a&&a.type?a.type.transactType:""});o&&(n.advertiser_id=o.sellerProfileId),c(n,{isTabView:!0})}(e.id),n(e.id),u({globalSelectedConfigurationId:e.id}),r()}},f.a.createElement("div",{className:e.id===p?"labels_semiBold ".concat(S.a.selectedOptn):"labels_semiBold"},f.a.createElement("i",{className:"iconS_Common_16 icon_blueTick"}),f.a.createElement("span",null,e.label)))})))})),N=r("pest"),I=function(e){var t=e.heading,r=e.subTxt,a=e.subTxtDdown,n=e.clickEventTray,i=e.preference,o=e.closeModal,c=e.modalState,s=e.setGlobalConfig;return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:"".concat(v.a.accHeadingWrap)},f.a.createElement("h2",null,f.a.createElement("div",{className:" ".concat(v.a.ellipsewrp," title_bold")},t),r&&f.a.createElement("div",{className:"caption_subdued_large"},f.a.createElement("em",null,r)," ",a&&f.a.createElement("span",{onClick:n,className:"labels_semiBold pageComponent","data-label":"CONFIG_TOGGLE","data-custominfo":'{"custom_object":{ "current_selection": "'.concat(a,'"}}')},a)))),f.a.createElement(N.default,{expanded:"resale"===c.id&&"S"===i||"rental"===c.id&&"R"===i,backdrop:!0,scroll:!1,onBackdropClickCallback:o},f.a.createElement(T,{closeModal:o,setGlobalConfig:s})))},D=r("ddV6"),w=r.n(D),x=r("cp7S");function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){O()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W=[{discriminator:"S",label:"Resale",value:"RESALE"},{discriminator:"R",label:"Rental",value:"RENTAL"}],k=Object(g.b)((function(e){return{reducerSelectedPrefernce:e.resaleRental.selectedPreference,selectedConfiguration:e.resaleRental.selectedConfiguration,configurations:e.resaleRental.configurations,paramsObj:e.resaleRental.params,dealer:e.resaleRental.dealer,isSSR:e.resaleRental.isSSR}}),(function(e){return{updatePreference:function(t){return e({type:P.B,data:t})},setIsSsr:function(t){return e({type:P.a,data:t})},fetchPropertyWidgetsXid:function(t,r){e(Object(E.a)(t,r))}}}))((function(e){var t=e.reducerSelectedPrefernce,r=e.selectedConfiguration,a=e.updatePreference,n=e.paramsObj,i=e.dealer,o=e.configurations,c=void 0===o?[]:o,s=e.fetchPropertyWidgetsXid,l=e.setGlobalConfig,u=void 0===l?function(){}:l,p=(e.loading,e.isSSR),d=e.setIsSsr,g=Object(m.useState)(t),_=w()(g,2),b=_[0],v=_[1];return Object(m.useEffect)((function(){return v(t)}),t),Object(m.useEffect)((function(){if(n){var e=c.find((function(e){return e.id===r})),t=(e=e?e.groups:[]).find((function(e){var t=e.type;return t&&t.discriminator===b})),a=M(M({},n),{},{page:1,preference:b,configurations:r,src:"SRP_R2MXID",transact_type:t&&t.type?t.type.transactType:""});i&&(a.advertiser_id=i.sellerProfileId),p||s(a,{isTabView:!0})}}),[b,i,r]),f.a.createElement("div",{className:h.a.R2mtabsWrapper},function(){var e=arguments.length>1?arguments[1]:void 0,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).find((function(t){return t.id===e}));return t?t.groups.map((function(e){return M({id:e.id},e.type)})):W}(c,r).map((function(e){return f.a.createElement(x.a,{key:e.discriminator,"data-label":"PREFERENCE_TOGGLE",className:"pageComponent",variant:"textOnly",fontStyle:e.discriminator===t?"semi":"normal",active:b===e.discriminator,onClick:function(){d(!1),v(e.discriminator),u({globalSelectedType:e.value}),a(e.discriminator)}},e.label)})))})),L=r("+Qok"),H=r("AKSm"),F=r("4xtV"),Y=r("Tcmj"),B=r.n(Y),G=function(e){var t=e.showcallsection,r=void 0===t||t;return f.a.createElement("div",{className:B.a.tuppleShimmerWrapper},f.a.createElement("div",{className:B.a.tuppleDetailsShimmer},f.a.createElement("div",{className:B.a.imageAreaShimmer}),f.a.createElement("div",{className:B.a.contentShimmer},f.a.createElement("div",null),f.a.createElement("div",null),f.a.createElement("div",null),f.a.createElement("div",null)),r?f.a.createElement("div",{className:B.a.callSectionShimmer},f.a.createElement("div",null,f.a.createElement("div",null))):null))},V=r("+dU3"),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return t({type:V.b,data:e})}},U=r("2IES"),q=r.n(U),K=Object(g.b)((function(e){return{configurations:e.resaleRental.configurations,selectedConfiguration:e.resaleRental.selectedConfiguration}}),(function(e){return{showToastMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(X(t))}}}))((function(e){var t=e.count,r=e.showToastMessage,a=e.preference,n=e.selectedConfiguration,i=e.configurations,o=void 0===i?[]:i,c=Object(m.useState)(!0),s=w()(c,2),l=s[0],u=s[1];if(0===t){var p="Currently, we don\u2019t have any ".concat("S"==a?"resale ":"rental "," properties for ").concat(o.find((function(e){var t=e.id;return n===t})).label," in this project. Try changing your BHK or we\u2019ll notify you when there are properties.");return f.a.createElement("div",{className:q.a.noProject,id:"S"===a?"resaleZrp":"rentalZrp"},f.a.createElement("img",{src:"https://static.99acres.com/universalapp/img/R2M_No_properties.png",alt:"no properties",height:"78",width:"74"}),f.a.createElement("div",{className:"".concat(q.a.mt16," input_placeholder_completed")},"No properties found"),f.a.createElement("div",{className:"".concat(q.a.mt8," caption_subdued_medium")},p),l?f.a.createElement("a",{className:"".concat(q.a.mt16," hyperlinks_medium pageComponent"),"data-label":"NOTIFY_ME",onClick:function(e){e.preventDefault(),u(!1),r({type:"message",message:"Thanks! Your response is recorded",autoCloseToastMessage:!0})}},"Nofity Me"):null)}return null})),J=r("1KoL"),z=r("wckN"),Q=r.n(z),Z=r("aQgK"),$=Object(g.b)((function(e){var t=e.resaleRental,r=t.loading,a=t.dealer,n=t.selectedPreference,i=t.resaleObject,o=void 0===i?{}:i,c=t.rentalObject,s=void 0===c?{}:c;return{loading:r,dealer:a,properties:"S"===n?o.properties:s.properties}}))((function(e){var t=e.loading,r=e.dealer,a=e.properties,n=void 0===a?[]:a,i=e.doEoi,o=void 0===i?function(){}:i;return f.a.createElement(m.Fragment,null,!t&&n.length&&r?f.a.createElement("div",{className:Q.a.buttonWrap,onClick:o},f.a.createElement(Z.a,{variant:"primaryRegular",iconLeftClass:"iconS_Common_24 icon_call pageComponent","data-label":"CALL","font-style":"semi"},"Call Dealer")):null)}));function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){O()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re=Object(J.a)(Object(g.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resaleRental,r=t.resaleEoi,a=void 0===r?{}:r,n=t.rentalEoi,i=void 0===n?{}:n,o=t.resaleObject,c=void 0===o?{}:o,s=t.rentalObject,l=void 0===s?{}:s,u=t.selectedPreference,p=t.loading,d=t.isSSR,m=t.projectId,f=t.configurations;return{loading:p,isSSR:d,configurations:f,projectId:m,eoiObj:"S"===u?a:i,properties:"S"===u?c.properties:l.properties,search_params:"S"===u?c.search_params:l.search_params,shortListedIds:"S"===u?c.shortlisted_properties||[]:l.shortlisted_properties||[],metaTagInfo:"S"===u?c.metaTagInfo:l.metaTagInfo}}))((function(e){var t=e.properties,r=void 0===t?[]:t,a=e.search_params,n=void 0===a?{}:a,i=e.shortListedIds,o=void 0===i?[]:i,c=e.metaTagInfo,s=void 0===c?{}:c,l=e.paramsObj,u=void 0===l?{}:l,p=e.fetchPropertyWidgetsXid,d=void 0===p?function(){}:p,g=e.doEoi,_=e.selectedConfiguration,b=void 0===_?"":_,v=e.preference,y=void 0===v?"S":v,O=e.loading,E=e.dealer,P=e.eoiObj,j=e.configurations,S=e.projectId,C=e.isSSR,R=null,T=function(e,t){if(e[0].isIntersecting){var a="#tuple_".concat(r[r.length-1].SPID,"_").concat(r.length);t.unobserve(document.querySelector(a));var i=j.find((function(e){return e.id===b})),o=(i=i?i.groups:[]).find((function(e){var t=e.type;return t&&t.discriminator===y})),c=te(te({},u),{},{page:parseInt(n.page)+1,preference:y,configurations:b,src:"SRP_R2MXID",transact_type:o&&o.type?o.type.transactType:""});E&&(c.advertiser_id=E.sellerProfileId),C||d(c,{onScroll:!0,isTabView:!0})}};Object(m.useEffect)((function(){if(n.page&&r.length){var e={root:document.querySelector("#tuplewrapper"),rootMargin:"0px",threshold:1};R=new IntersectionObserver(T,e),setTimeout((function(){var e="#tuple_".concat(r[r.length-1].SPID,"_").concat(r.length);R.observe(document.querySelector(e))}),1e3)}}),[n.page]);var N={className:"pageComponent","data-label":"TUPLE"};return!r||r.length||O?f.a.createElement(m.Fragment,null,f.a.createElement("div",{className:h.a.tupleScroll,id:"tuplewrapper"},f.a.createElement("div",{className:h.a.tuppleWrappers},r&&r.map((function(e,t){return f.a.createElement("div",{key:"tuple_".concat(e.SPID,"_").concat(t+1),id:"tuple_".concat(e.SPID,"_").concat(t+1),className:h.a.R2Mtupple},f.a.createElement("div",{className:h.a.ImagesContainer},f.a.createElement(F.a,{metaData:s,searchParams:n,property:e,isShortlisted:o.some((function(t){return t.prop_id===e.PROP_ID})),isVspTuple:!0}),f.a.createElement(H.a,{property:e,searchParams:n,filters:{},clickStreamEventData:N,noDiscription:!0}))," ",E?null:f.a.createElement(L.a,{property:e,cityID:n.cityID[0],rera_type:n.rera_type,doEoi:function(){g(te(te({},P),{},{prop_id:e.PROP_ID,decryptedAssignedTo:e.ASSIGNED_TO_PROFILEID,maskContact:e.MASK_CONTACT,projectId:S}))},dataLabelCall:"CALL",customInfo:JSON.stringify({payload:{search_results:{selected_entity_tuples:[{id:e.SPID,rank:t+1}]}}}),noViewPhoneNumber:!0}))})),O?f.a.createElement("div",{className:h.a.r2mtuppleWrap},f.a.createElement(G,{showcallsection:!Boolean(E)}),f.a.createElement(G,{showcallsection:!Boolean(E)})):null)),f.a.createElement($,{doEoi:function(){var e=Math.floor(Math.random()*Math.floor(r.length-1));g(te(te({},P),{},{prop_id:r.length?r[e].PROP_ID:"",decryptedAssignedTo:r.length?r[e].ASSIGNED_TO_PROFILEID:"",maskContact:r[e].MASK_CONTACT,projectId:S}))}})):f.a.createElement(K,{count:r?r.length:null,preference:y})}))),ae=r("cnly"),ne=function(e){var t=e.configurations,r=e.approvedConfiguration,a=t&&t.filter((function(e){return e.id===r}));return a&&a.length>0?a[0].label:"All Options"},ie=Object(g.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resaleRental,r=t.configurations,a=t.params,n=t.selectedPreference,i=t.dealer,o=t.selectedConfiguration,c=t.heading,s=t.modalTray;return{selectedPreference:n,paramsObj:a,configurations:r,dealer:i,heading:c,modalState:s,approvedConfiguration:o}}),(function(e){return{fetchPropertyWidgetsXid:function(t,r){e(Object(E.a)(t,r))},openModal:function(t){e({type:"R2M/SET_MODALTRAY_OPEN",data:t})},closeModal:function(){e({type:"R2M/SET_MODALTRAY_CLOSE"})},setProperties:function(t){e({type:P.j,data:t})}}}))((function(e){var t=e.fetchPropertyWidgetsXid,r=e.paramsObj,a=e.configurations,n=e.approvedConfiguration,i=e.closeModal,o=e.openModal,c=e.modalState,s=e.doEoi,l=e.setGlobalConfig,u=e.selectedPreference,p=e.dealer,d=e.heading,g=e.setProperties,_=d||"Properties in this project";return Object(m.useEffect)((function(){r&&r.dealerRelaxation&&p&&g({resaleObject:{},rentalObject:{},loading:!0})}),[]),r?f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:"pageComponent ".concat(h.a._99XidWrap," ").concat(p?h.a.dealerWrap:""),"data-label":"PROP_IN_PROJ",topmost:"true"},f.a.createElement(I,{heading:_,subTxt:"Showing results for ",subTxtDdown:ne({configurations:a,approvedConfiguration:n}),clickEventTray:function(e){e.stopPropagation(),o("S"==u?"resale":"rental")},preference:u,setGlobalConfig:l,closeModal:i,openModal:function(e){return o(e||"resale")},modalState:c}),f.a.createElement(k,{setGlobalConfig:l}),f.a.createElement(re,{paramsObj:r,doEoi:s,selectedConfiguration:n,preference:u,fetchPropertyWidgetsXid:t,dealer:p})),f.a.createElement("div",{className:"spacer16"}),f.a.createElement(ae.a,null)):null}));function oe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=d()(e);if(t){var n=d()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return u()(this,r)}}function ce(e){try{return e()}catch(t){return}}var se=function(e){s()(r,e);var t=oe(r);function r(){return n()(this,r),t.apply(this,arguments)}return o()(r,[{key:"render",value:function(){var e=this.props,t=e.setGlobalConfig,r=e.openMobileEoiLayer,a=e.setEoiRequiredData;e.setEoiDealerData;return f.a.createElement("div",null,f.a.createElement(ie,{doEoi:function(e){var t,n="MHTML5_XID_".concat(ce((function(){return e.trackingSource})));t={productId:e.prop_id,profileId:e.decryptedAssignedTo,eoiOn:"PROPERTY",trackSource:n,responseType:"N"==e.maskContact?"C2V":"QUERY",platform:"Mobilesite",page:"XID",showYesIamInterested:"N",projectId:e.projectId};var i={EOI_FLOW:"CALL",isEOILayerInitiated:!0,isNewService:!0,EOI_TYPE:"PROPERTY",EOI_BUTTON_TEXT:ce((function(){return e.fillInDetailsForm.ctaText}))||"",EOI_LAYER_HEADING:ce((function(){return e.fillInDetailsForm.heading}))||"",EOI_LAYER_SUBHEADING:ce((function(){return e.fillInDetailsForm.subHeading}))||""};r(i),a(t)},setGlobalConfig:t}))}}]),r}(f.a.Component);t.default=Object(g.b)(null,(function(e){return{openMobileEoiLayer:function(t){e({type:"SET_MOBILE_EOI_LAYER_DATA",payload:t})},setEoiRequiredData:function(t){e({type:"SET_EOI_REQUIRED_DATA",data:t})},setConfigForR2mXidPage:function(t){Object(E.d)(t,e)}}}))(se)},Tcmj:function(e,t,r){e.exports={tuppleShimmerWrapper:"shimmer__tuppleShimmerWrapper",tuppleDetailsShimmer:"shimmer__tuppleDetailsShimmer",imageAreaShimmer:"shimmer__imageAreaShimmer",imgBox:"shimmer__imgBox",contentShimmer:"shimmer__contentShimmer",callSectionShimmer:"shimmer__callSectionShimmer"}},VHGM:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return g}));var a=r("cbiG"),n=r.n(a),i=r("VtSi"),o=r.n(i),c=r("yMbT"),s=r("T2YE"),l=r("FXfD"),u=r("smsd"),p=c.f.API_URL,d=c.f.BASE_AGGREGATOR_PATH,m=function(){return function(){var e=n()(o.a.mark((function e(t,r){var a,n,i,c,l,u,m,f,g,_,h,b,v,y,O,E;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r().srp.filters,i=(n=void 0===a?{}:a).exclude_search_spid,c=void 0===i?"":i,l=n.exclude_agents,u=void 0===l?"":l,m=n.exclude_societies,f=void 0===m?"":m,g=n.res_com,_=void 0===g?"R":g,h=n.preference,b=void 0===h?"S":h,v=n.exclude_projects,void 0===v?"":v,y="".concat(p).concat(d,"/hiddenData?target_buildingIds=").concat(f,"&target_spids=").concat(c,"&target_profileIds=").concat(u,"&res_com=").concat(_,"&preference=").concat(b),e.next=5,fetch(y);case 5:return O=e.sent,e.next=8,O.json();case 8:E=e.sent,t({type:s.b,data:E}),t({type:s.c});case 11:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},f=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=[],a=e.split(","),n=t.split(","),i=0;i<n.length;i+=1){var o=n[i];a.includes(o)||r.push(o)}return r.length?r.join(","):""},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var t=n()(o.a.mark((function t(r,a){var n,i,c,p,d,m,g,_;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.list,i=void 0===n?[]:n,c=e.type,i.length){t.next=3;break}return t.abrupt("return",!1);case 3:p=Object(l.c)(a().srp.filters),d=l.e["".concat(c)],m=i.filter((function(e){return e.active})),g=[],m.forEach((function(e){return g.push("Properties"===c?e.SPID:e.id)})),_=f(g.join(","),p["".concat(d)].value),r({type:"FILTER_CHANGE",data:{filterName:d,data:_}}),r({type:s.a}),r(Object(u.j)(null,null,!0));case 12:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}},cnly:function(e,t,r){"use strict";var a=r("KEM+"),n=r.n(a),i=r("ERkP"),o=r.n(i),c=r("uDfI"),s=r("aWzz"),l=r.n(s),u=r("kvwb"),p=r("VHGM"),d=r("FXfD"),m=r("4urv"),f=r("PozB"),g=r("1KoL"),_=r("JgxO"),h=r.n(_);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var v=function(e){var t=e.showToastMessage,a=void 0!==t&&t,n=e.openUnhideLayer,i=e.closeToastMessage,c=e.filterName,s=e.filterValue,l=e.type,u=e.autoCloseToastMessage,p=void 0!==u&&u,g=e.autoCloseToastMessageAfter,_=e.store,b=e.getComponentChunk,v=e.message,y=e.tickIconPresent;return a?(p&&setTimeout((function(){return i({autoCloseToastMessage:!1})}),g),"message"===l?o.a.createElement("div",{className:"".concat(h.a.HideWrapper," ").concat(h.a.fixedToast)},y&&o.a.createElement("i",{className:"iconS_Common_20 icon_whiteTick",style:{marginRight:"8px",minWidth:"20px"}}),o.a.createElement("div",{className:"".concat(h.a.string," labels_semiBold")},v),o.a.createElement("i",{className:"iconS_Common_24 icon_close",onClick:function(){return i({autoCloseToastMessage:!1})}})):o.a.createElement("div",{className:"".concat(h.a.HideWrapper," ").concat(h.a.fixedToast)},o.a.createElement("div",{className:"".concat(h.a.string," labels_semiBold")},"".concat(function(e,t){switch(t){case m.a:return"10";case m.b:return Object(f.d)(e.split(",")).length>1?"More than 1":"1";default:return"label"}}(s,l)," ").concat(d.f["".concat(c)]," Hidden from your search.")),o.a.createElement("div",{className:"".concat(h.a.actionButton," hyperlinks_white_small"),onClick:function(){i(),r.e(206).then(r.bind(null,"5xkF")).then((function(e){_.injectReducer("unhide",e.default),b({component:"unhide"}),n()}))}},"Manage"))):null};v.PropTypes={showToastMessage:l.a.bool.isRequired,closeToastMessage:l.a.func.isRequired,openUnhideLayer:l.a.func.isRequired,filterName:l.a.string.isRequired,type:l.a.string,autoCloseToastMessage:l.a.string,autoCloseToastMessageAfter:l.a.string,undoCurrentHiddenResult:l.a.func.isRequired,property:l.a.object.isRequired,filterValue:l.a.string,getComponentChunk:l.a.func.isRequired,store:l.a.object.isRequired},v.defaultProps={type:m.a,autoCloseToastMessage:!1,autoCloseToastMessageAfter:0,filterValue:""};t.a=Object(g.a)(Object(c.b)((function(e){return{showToastMessage:e.toast.showToastMessage,filterName:e.toast.filterName,filterValue:e.toast.filterValue,type:e.toast.type,autoCloseToastMessage:e.toast.autoCloseToastMessage,autoCloseToastMessageAfter:e.toast.autoCloseToastMessageAfter,property:e.toast.property,message:e.toast.message}}),(function(e){return{closeToastMessage:function(t){return e(Object(u.a)(t))},openUnhideLayer:function(t){return e(Object(p.a)(t))},getComponentChunk:function(t){return e(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({type:"GET_COMPONENT_CHUNK"},t))}}}))(v))},"q/Pd":function(e,t,r){e.exports={unitOptnList:"Configurations__unitOptnList",selectedOptn:"Configurations__selectedOptn",heading:"Configurations__heading"}},qp0K:function(e,t,r){e.exports={compareListWrap:"pc__compareListWrap",compareProjCard:"pc__compareProjCard",Projects:"pc__Projects",Dealers:"pc__Dealers",Properties:"pc__Properties",contentArea:"pc__contentArea",contentAreaProperties:"pc__contentAreaProperties",removeLink:"pc__removeLink"}},u68Y:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var a=r("KEM+"),n=r.n(a),i=r("DZJM"),o=r("+dU3");r("rVU0");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r("yMbT").f.API_URL;var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.filter((function(e){return e.length>0}))},u=function(e){var t=e.filterName,r=e.data,a=void 0===r?"":r,n=e.isSelected,c=void 0!==n&&n,s=e.isClear,u=void 0!==s&&s,p=e.isSingleValue,d=void 0!==p&&p,m=e.multipleFiltersApplied,f=void 0!==m&&m,g=e.isAppliedFiltersSection,_=void 0!==g&&g,h=e.isMobileRevamp,b=void 0===h||h,v=e.isSortDropdown,y=void 0!==v&&v,O=e.fetchResults,E=void 0!==O&&O,P=e.exactFilterMatch,j=void 0!==P&&P,S=e.isToggleable,C=void 0===S||S;return function(e,r){if((!t||!e||!r)&&!f)return!1;var n="",s=(r().srp||{filters:r().filters}).filters,p=(((r().srp||{}).pageData||{}).search_params||{}).showInvestorSrp;if("exclude_seen"===t)return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.isSelected,a=void 0!==r&&r,n=e.isAppliedFiltersSection,c=void 0!==n&&n,s=e.fetchResults,u=void 0===s||s,p=e.isMobileRevamp,d=void 0!==p&&p;if(!window)return!1;var m=window.localStorage.getItem("seenPropertiesAndProjects");if(!m||"string"!==typeof m)return!!d&&t({type:o.b,data:{filterName:"exclude_seen",filterValue:"",type:"message",message:"You haven't seen any property yet",autoCloseToastMessage:!0}});var f=a&&!c?l(m.split(",")).map((function(e){return e.substring(1)})).join(","):"";return t(Object(i.a)({filterName:"exclude_seen",data:f})),t(Object(i.a)({filterName:"page",data:"1"})),u&&t(dataChange(f,"exclude_seen",{isRevamp:!0})),!0}({dispatch:e,isSelected:c,isAppliedFiltersSection:_,fetchResults:E,isMobileRevamp:b});if("investmentOption"===t)if("property_type"==a[0]){if("string"===typeof(n=s["".concat(a[0])]||"")){var m=l(n.split(","));m.includes(a[1])?m.splice(m.indexOf(a[1]),1):m.push(a[1]),n=m.join(",");var g="";g="Y"==s.isPreLeased?g.concat(",isPreLeased,Y"):g,g=n.includes("94")?g.concat(",property_type,94"):g,g=n.includes("93")?g.concat(",property_type,93"):g,g=n.includes("21")?g.concat(",property_type,21"):g,g=n.includes("95")?g.concat(",property_type,95"):g,g=n.includes("96")?g.concat(",property_type,96"):g,g=n.includes("98")?g.concat(",property_type,98"):g,e(Object(i.a)({filterName:a[0],data:n})),e(Object(i.a)({filterName:t,data:g}))}}else{n=s["".concat(a[0])]||"";var h=s[t]||"",v="";n.includes(a[1])?h=h.replace("isPreLeased,Y",""):(v="Y",h=h.concat(",isPreLeased,Y")),e(Object(i.a)({filterName:a[0],data:v})),e(Object(i.a)({filterName:t,data:h}))}if(("exclude_societies"===t||"exclude_search_spid"===t||"exclude_agents"===t)&&_)return e({type:"UPDATE_OVERLAY",data:{visibility:!0,backdropClick:!1}}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.filterName,a="";switch(r){case"exclude_societies":a="SHOW_HIDE_PROJECT_LAYER";break;case"exclude_search_spid":a="SHOW_HIDE_PROPERTY_LAYER";break;case"exclude_agents":a="SHOW_HIDE_DEALER_LAYER"}t({type:a,data:!0})}({dispatch:e,isSelected:c,filterName:t});if(!u&&(a.length||j))if(f)a.forEach((function(t){e(Object(i.a)({filterName:t.filterName,data:t.data}))}));else if("string"===typeof(n=s["".concat(t)]||""))if(d)C&&(["bathroom","sortby","availability","transact_type","tenant_pref","availableFrom","cabinNums","washRoomNum","doors","parking","aop","planType","seatCountRng"].includes(t)||y)?(n=s["".concat(t)]===a?"":a,"sortby"===t&&p&&!n&&(n="investorranking")):n=a;else{var O=l(n.split(","));if(O.includes(a)&&C?O.splice(O.indexOf(a),1):O.push(a),O.includes("6,82,97")&&n.includes("6,82,97")){var P=n.replace("6,82,97","");n=P}else n=O.join(",");if("property_type"==t&&["94","93","96","98","21","95"].includes(a)||"isPreLeased"==t&&"Y"==a){var S=s.investmentOption||"";S="property_type"==t?S.replace("property_type,".concat(a),""):S.replace("isPreLeased,".concat(a),""),e(Object(i.a)({filterName:"investmentOption",data:S}))}}if("page"!==t&&e(Object(i.a)({filterName:"page",data:"1"})),"building_id"===t&&e(Object(i.a)({filterName:"noxid",data:"1"})),("area_unit"===t||u&&"area_min"===t)&&e(Object(i.a)({filterName:"tupleAreaUnit",data:n})),b&&"availability"===t&&(n.split(",").includes("1")||e(Object(i.a)({filterName:"uc",data:""})),n.split(",").includes("2")||e(Object(i.a)({filterName:"r2m",data:""}))),b&&"property_type"===t){var R=n.split(",");if(R.includes("3")||R.includes("90"))!!R.filter((function(e){return"3"!==e&&"90"!==e})).length||e(Object(i.a)({filterName:"bedroom_num",data:""}))}if(f||"investmentOption"===t||e(Object(i.a)({filterName:t,data:n})),b&&("r2m"===t||"uc"===t)){var T="",N=r().srp.filters,I=void 0===N?{}:N;I.uc&&(T=I.uc),I.r2m&&(I.uc?T+=",".concat(I.r2m):T=I.r2m),e(Object(i.a)({filterName:"availability",data:T}))}return["exclude_search_spid","exclude_societies","exclude_agents"].includes(t)&&b&&e({type:o.d,data:{data:n}}),!0}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t,r){e.isNudge||t({type:"FILTER_INTERACTED",data:{filterInteracted:!0}}),t(u(s({isMobileRevamp:!0},e)))}}},wckN:function(e,t,r){e.exports={buttonWrap:"CallDealer__buttonWrap"}},"yA/l":function(e,t,r){e.exports={accHeadingWrap:"Heading__accHeadingWrap",ellipsewrp:"Heading__ellipsewrp"}}}]);