(function(t){function e(e){for(var o,s,c=e[0],i=e[1],u=e[2],d=0,b=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&b.push(r[s][0]),r[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(b.length)b.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0638":function(t,e,n){"use strict";n("e2a9")},1051:function(t,e,n){"use strict";n("ebdd")},"1b0d":function(t,e,n){"use strict";n("f379")},2224:function(t,e,n){"use strict";n("6f8a")},"2ad0":function(t,e,n){},"2d92":function(t,e,n){"use strict";n("b17f")},4685:function(t,e,n){},"49c4":function(t,e,n){},"4a7f":function(t,e,n){},"4cf2":function(t,e,n){"use strict";n("a2ab")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("7db0");var o=n("7a23"),r=n("5502"),a=Object(o["f"])("link",{rel:"preconnect",href:"https://fonts.gstatic.com"},null,-1),s=Object(o["f"])("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"},null,-1),c={class:"index-page-content"};function i(t,e,n,r,i,u){var l=Object(o["o"])("signature-result"),d=Object(o["o"])("signature-error"),b=Object(o["o"])("upload-form");return Object(o["l"])(),Object(o["e"])(o["a"],null,[a,s,Object(o["f"])("div",c,["success"===t.$store.state.uploadStatus&&t.$store.state.result.signatures?(Object(o["l"])(),Object(o["c"])(l,{key:0})):"error"===t.$store.state.uploadStatus?(Object(o["l"])(),Object(o["c"])(d,{key:1})):(Object(o["l"])(),Object(o["c"])(b,{key:2}))])],64)}var u={class:"content-body content-body--form"},l=Object(o["f"])("div",{class:"terms-link"},[Object(o["f"])("a",{href:"/terms/"},[Object(o["f"])("i"),Object(o["h"])(" Условия использования")])],-1),d={action:"",method:"POST"};function b(t,e,n,r,a,s){var c=Object(o["o"])("upload-form-h-1"),i=Object(o["o"])("upload-form-error"),b=Object(o["o"])("upload-form-control");return Object(o["l"])(),Object(o["e"])("div",null,[Object(o["f"])("div",u,[Object(o["i"])(c),l,t.$store.state.uploadForm.error?(Object(o["l"])(),Object(o["c"])(i,{key:0})):Object(o["d"])("",!0),Object(o["f"])("form",d,[Object(o["i"])(b)])]),Object(o["d"])("",!0)])}var f=["textContent"];function p(t,e){return Object(o["l"])(),Object(o["e"])("h1",{textContent:Object(o["q"])("form"===t.$store.state.uploadStatus||"uploadError"===t.$store.state.uploadStatus?"Проверка квалифицированной электронной подписи документов":"confirmation"===t.$store.state.uploadStatus?"Согласитесь с условиями сервиса":"uploading"===t.$store.state.uploadStatus?"Идет проверка документа, подождите, пожалуйста":"")},null,8,f)}n("2d92");var m=n("6b0d"),O=n.n(m);const j={},h=O()(j,[["render",p]]);var v=h;function g(t,e,n,r,a,s){var c=Object(o["o"])("upload-form-tabs"),i=Object(o["o"])("upload-form-confirmation"),u=Object(o["o"])("upload-form-uploading");return Object(o["l"])(),Object(o["e"])("div",{class:"upload-form-control",ref:"dropZone",onDrag:e[0]||(e[0]=Object(o["u"])((function(){}),["prevent"])),onDragstart:e[1]||(e[1]=Object(o["u"])((function(){}),["prevent"])),onDragend:e[2]||(e[2]=Object(o["u"])((function(){}),["prevent"])),onDragover:e[3]||(e[3]=Object(o["u"])((function(){return s.dragover&&s.dragover.apply(s,arguments)}),["prevent"])),onDragenter:e[4]||(e[4]=Object(o["u"])((function(){return s.dragenter&&s.dragenter.apply(s,arguments)}),["prevent"])),onDragleave:e[5]||(e[5]=Object(o["u"])((function(t){return s.dragleave(t)}),["prevent"])),onDrop:e[6]||(e[6]=Object(o["u"])((function(){return s.drop&&s.drop.apply(s,arguments)}),["prevent"]))},["form"===t.$store.state.uploadStatus?(Object(o["l"])(),Object(o["c"])(c,{key:0,onUploaded:s.uploaded},null,8,["onUploaded"])):Object(o["d"])("",!0),"confirmation"===t.$store.state.uploadStatus?(Object(o["l"])(),Object(o["c"])(i,{key:1})):Object(o["d"])("",!0),"uploading"===t.$store.state.uploadStatus?(Object(o["l"])(),Object(o["c"])(u,{key:2})):Object(o["d"])("",!0)],544)}n("c740");var x={class:"upload-form-uploading"},y=Object(o["f"])("div",{class:"upload-form-uploading__preloader"},null,-1);function $(t,e,n,r,a,s){return Object(o["l"])(),Object(o["e"])("div",x,[y,Object(o["f"])("button",{class:"button button--gray button--small",onClick:e[0]||(e[0]=Object(o["u"])((function(t){return s.refuseUploading()}),["prevent"]))}," Отменить ")])}var F={methods:{refuseUploading:function(){this.$store.state.uploadForm.controller.abort(),this.$store.commit("setUploadFormProp",{prop:"controllerAborted",value:!0}),this.$store.commit("changeUploadStatus","form")}}};n("1051");const k=O()(F,[["render",$]]);var w=k,U={class:"upload-form-comfirmation"},_=Object(o["f"])("div",{class:"upload-form-comfirmation__text"},[Object(o["h"])(" Сервис обрабатывает, но не хранит и не передаёт персональные данные."),Object(o["f"])("br"),Object(o["h"])("Вы даёте своё согласие? ")],-1),S={class:"button-checkbox button button--success button--middle"};function D(t,e,n,r,a,s){return Object(o["l"])(),Object(o["e"])("div",U,[_,Object(o["f"])("label",S,[Object(o["f"])("input",{type:"checkbox",onChange:e[0]||(e[0]=function(t){return s.confirm()})},null,32),Object(o["f"])("span",null,Object(o["q"])("test402"===s.token?"Test 402 error":"Подтверждаю"),1)]),Object(o["f"])("button",{class:"button button--danger button--middle",onClick:e[1]||(e[1]=Object(o["u"])((function(){return s.refuse&&s.refuse.apply(s,arguments)}),["prevent"]))}," Отменить ")])}var T=n("1da1"),I=(n("96cf"),n("ac1f"),n("841c"),n("d3b7"),{computed:{token:function(){return window.location.search.indexOf("test402")>=0?"test402":"token12345"}},methods:{confirm:function(){window.ym&&window.ym(this.$store.state.counters.ym,"reachGoal","CLICK_CONFIRM"),this.$store.commit("changeUploadStatus","uploading"),this.sendFile()},refuse:function(){var t=this;window.ym&&window.ym(this.$store.state.counters.ym,"reachGoal","CLICK_REFUSE"),this.$store.commit("changeUploadStatus","form"),this.$store.state.uploadForm.tabs.forEach((function(e,n){e.buttons.forEach((function(e,o){t.$store.commit("setUploadFormFile",{tabIndex:n,buttonIndex:o,value:null})}))})),this.$store.commit("showButton","file")},sendFile:function(){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function e(){var n,o,r,a,s,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$store.commit("setUploadFormProp",{prop:"controller",value:new AbortController}),n=[],t.$store.state.uploadForm.tabs.find((function(t){return t.active})).buttons.forEach((function(t){n.push(t.file)})),0!=n.length){e.next=5;break}throw new Error("No file selected");case 5:return o=new FormData,n[0]&&o.append("pdfFile",n[0]),n[1]&&o.append("sigFile",n[1]),e.prev=8,e.next=11,fetch("https://sig.2px.ru/upload",{signal:t.$store.state.uploadForm.controller.signal,method:"POST",headers:{Authorization:t.token},body:o});case 11:return r=e.sent,e.next=14,r.json();case 14:a=e.sent,t.$store.state.uploadForm.tabs.forEach((function(e,n){e.buttons.forEach((function(e,o){e.file&&t.$store.commit("setUploadFormFile",{tabIndex:n,buttonIndex:o,value:null})}))})),e.next=24;break;case 18:return e.prev=18,e.t0=e["catch"](8),t.$store.state.uploadForm.controllerAborted||t.$store.commit("changeUploadError","Произошла ошибка."),t.$store.commit("changeUploadStatus","form"),t.$store.commit("setUploadFormProp",{prop:"controllerAborted",value:!1}),e.abrupt("return");case 24:if(200==a.status){e.next=31;break}return 402===a.status?t.$store.commit("changeUploadError",'Достигнут суточный лимит количества проверок документов с вашего IP. Завтра вы сможете продолжить пользоваться сервисом. Если вы хотите пользоваться сервисом без ограничений, компания ООО "Твин пикс" может предложить вам на коммерческой основе создание индивидуального сервиса проверки ЭП для вашей организации или помочь интегрировать сервис проверки подписи в вашу информационную систему. Контактный e-mail: support@twinpx.ru.'):t.$store.state.uploadForm.controllerAborted||t.$store.commit("changeUploadError","Произошла ошибка."),t.$store.commit("changeUploadStatus","form"),t.$store.commit("setUploadFormProp",{prop:"controllerAborted",value:!1}),e.abrupt("return");case 31:s=a.uuid;case 32:c=0;case 33:return e.prev=33,e.next=36,fetch("https://sig.2px.ru/status?uuid="+s,{signal:t.$store.state.uploadForm.controller.signal,headers:{Authorization:t.token},method:"GET"});case 36:r=e.sent,e.next=45;break;case 39:return e.prev=39,e.t1=e["catch"](33),402===a.status?t.$store.commit("changeUploadError",'Достигнут суточный лимит количества проверок документов с вашего IP. Завтра вы сможете продолжить пользоваться сервисом. Если вы хотите пользоваться сервисом без ограничений, компания ООО "Твин пикс" может предложить вам на коммерческой основе создание индивидуального сервиса проверки ЭП для вашей организации или помочь интегрировать сервис проверки подписи в вашу информационную систему. Контактный e-mail: support@twinpx.ru.'):t.$store.state.uploadForm.controllerAborted||t.$store.commit("changeUploadError","Произошла ошибка."),t.$store.commit("changeUploadStatus","form"),t.$store.commit("setUploadFormProp",{prop:"controllerAborted",value:!1}),e.abrupt("return");case 45:if(204!=r.status){e.next=50;break}return e.next=48,new Promise((function(t){return setTimeout(t,1e3)}));case 48:e.next=63;break;case 50:if(200==r.status){e.next=57;break}return t.$store.state.uploadForm.controllerAborted||t.$store.commit("changeUploadError","Произошла ошибка."),t.$store.commit("changeUploadStatus","form"),t.$store.commit("setUploadFormProp",{prop:"controllerAborted",value:!1}),e.abrupt("return");case 57:return e.next=59,r.json();case 59:return i=e.sent,t.$store.commit("changeResult",i),t.$store.state.result.signatures&&t.$store.state.result.signatures.length?t.$store.commit("changeUploadStatus","success"):t.$store.commit("changeUploadStatus","error"),e.abrupt("break",64);case 63:if(0===c){e.next=33;break}case 64:return e.abrupt("return");case 65:case"end":return e.stop()}}),e,null,[[8,18],[33,39]])})))()}}});n("a7f7");const C=O()(I,[["render",D]]);var P=C,E=(n("b0c0"),n("99af"),n("fb6a"),{class:"upload-form-tabs"}),A={class:"upload-form-tabs__menu",ref:"menu"},N={class:"upload-form-tabs__underline",ref:"underline"},R=["data-tab"],q={class:"upload-form-tabs__items"},B=["data-tab"];function L(t,e,n,r,a,s){return Object(o["l"])(),Object(o["e"])("div",E,[Object(o["t"])(Object(o["f"])("div",A,[Object(o["f"])("div",N,null,512),(Object(o["l"])(!0),Object(o["e"])(o["a"],null,Object(o["n"])(t.$store.state.uploadForm.tabs,(function(t){return Object(o["l"])(),Object(o["e"])("div",{class:Object(o["k"])(["upload-form-tabs__menu__item",{active:t.active}]),key:t.value,"data-tab":t.value,onClick:e[0]||(e[0]=Object(o["u"])((function(t){return s.click(t)}),["prevent"]))},Object(o["q"])(t.name),11,R)})),128))],512),[[o["r"],s.isVisible]]),Object(o["f"])("div",q,[(Object(o["l"])(!0),Object(o["e"])(o["a"],null,Object(o["n"])(t.$store.state.uploadForm.tabs,(function(t,e){return Object(o["t"])((Object(o["l"])(),Object(o["e"])("div",{class:"upload-form-tabs__item",key:t.value,"data-tab":t.value},[(Object(o["l"])(),Object(o["c"])(Object(o["p"])("UploadForm".concat(t.value.charAt(0).toUpperCase()).concat(t.value.slice(1))),{tab:t,tabindex:e,onUploaded:s.upl},null,8,["tab","tabindex","onUploaded"]))],8,B)),[[o["r"],t.active]])})),128))])])}function M(t,e,n,r,a,s){var c=Object(o["o"])("upload-form-button");return Object(o["l"])(),Object(o["e"])("div",null,[(Object(o["l"])(!0),Object(o["e"])(o["a"],null,Object(o["n"])(n.tab.buttons,(function(t,e){return Object(o["l"])(),Object(o["c"])(c,{key:t.value,button:t,tabindex:n.tabindex,buttonindex:e,onUploaded:s.upl},null,8,["button","tabindex","buttonindex","onUploaded"])})),128))])}n("a9e3");var Z=["name","id","accept"],H={key:0,class:"upload-form-button"},G={key:0,class:"input-file"},W=["for"],z={key:1,class:"upload-form__dragndrop"},V=Object(o["f"])("span",{class:"upload-form__dragndrop-text"},"или перетащите его в область",-1),K=["textContent"];function X(t,e,n,r,a,s){return Object(o["t"])((Object(o["l"])(),Object(o["e"])("div",null,[Object(o["f"])("input",{type:"file",name:"".concat(n.button.value,"File"),id:"".concat(n.button.value,"File"),onChange:e[0]||(e[0]=function(){return s.uploadFile&&s.uploadFile.apply(s,arguments)}),ref:"pdfFile",accept:n.button.accept},null,40,Z),"form"===t.$store.state.uploadStatus?(Object(o["l"])(),Object(o["e"])("div",H,[t.$store.state.uploadForm.isDragover?Object(o["d"])("",!0):(Object(o["l"])(),Object(o["e"])("div",G,[Object(o["f"])("label",{for:"".concat(n.button.value,"File"),class:Object(o["k"])(["button button--large",{"button--sig":"sig"===n.button.value}]),onClick:e[1]||(e[1]=function(t){return s.clickUpload()})},Object(o["q"])(n.button.name),11,W)])),t.$store.state.uploadForm.isDragover?(Object(o["l"])(),Object(o["e"])("div",z)):Object(o["d"])("",!0),V,Object(o["f"])("div",{class:"upload-form-control__error",textContent:Object(o["q"])(n.button.error)},null,8,K)])):Object(o["d"])("",!0)],512)),[[o["r"],n.button.show]])}var Y={name:"UploadFormButton",data:function(){return{}},props:{button:Object,tabindex:Number,buttonindex:Number},emits:["uploaded"],methods:{clickUpload:function(){window.ym&&window.ym(this.$store.state.counters.ym,"reachGoal","CLICK_UPLOAD")},uploadFile:function(){var t=this.$refs.pdfFile.files[0];this.$refs.pdfFile.value=null,this.$emit("uploaded",t)}}};n("6f84");const J=O()(Y,[["render",X]]);var Q=J,tt={name:"UploadFormPdf",props:{tab:Object,tabindex:Number},emits:["uploaded"],methods:{upl:function(t){this.$emit("uploaded",t)}},components:{UploadFormButton:Q}};const et=O()(tt,[["render",M]]);var nt=et,ot={key:0,class:"upload-form__filename-block"},rt={class:"upload-form__filename"},at=Object(o["f"])("i",null,null,-1),st={class:"upload-form__filename-text"},ct={class:"upload-form__filename-name"},it={class:"upload-form__filename-ext"};function ut(t,e,n,r,a,s){var c=Object(o["o"])("upload-form-button");return Object(o["l"])(),Object(o["e"])("div",null,[s.showFilenameBlock?(Object(o["l"])(),Object(o["e"])("div",ot,[Object(o["f"])("div",rt,[at,Object(o["f"])("span",st,[Object(o["f"])("span",ct,Object(o["q"])(s.filename),1),Object(o["f"])("span",it,Object(o["q"])(s.ext),1)])]),Object(o["f"])("button",{class:"button button--gray button--small",onClick:e[0]||(e[0]=Object(o["u"])((function(){return s.reset&&s.reset.apply(s,arguments)}),["prevent"]))}," Отменить ")])):Object(o["d"])("",!0),(Object(o["l"])(!0),Object(o["e"])(o["a"],null,Object(o["n"])(n.tab.buttons,(function(t,e){return Object(o["l"])(),Object(o["c"])(c,{key:t.value,button:t,keyword:t.value,tabindex:n.tabindex,buttonindex:e,onUploaded:s.upl},null,8,["button","keyword","tabindex","buttonindex","onUploaded"])})),128))])}var lt={name:"UploadFormSig",props:{tab:Object,tabindex:Number},emits:["uploaded"],methods:{upl:function(t){this.$emit("uploaded",t)},reset:function(){this.$store.commit("showButton","file"),this.$store.commit("setUploadFormFile",{tabIndex:this.tabindex,buttonIndex:0,value:null}),this.$store.commit("setUploadFormFile",{tabIndex:this.tabindex,buttonIndex:1,value:null})}},computed:{showFilenameBlock:function(){return!!this.$store.state.uploadForm.tabs[this.tabindex].buttons[0].file},filename:function(){var t=this.$store.state.uploadForm.tabs[this.tabindex].buttons[0].file,e="";if(t&&t.name){var n=t.name;e=n.substring(0,n.lastIndexOf("."))}return e},ext:function(){var t=this.$store.state.uploadForm.tabs[this.tabindex].buttons[0].file,e="";if(t&&t.name){var n=t.name;e=n.substring(n.lastIndexOf("."))}return e}},components:{UploadFormButton:Q}};n("79f4");const dt=O()(lt,[["render",ut]]);var bt=dt,ft={computed:{isVisible:function(){return!this.$store.state.uploadForm.tabs.some((function(t){return t.buttons.some((function(t){return t.file}))}))}},emits:["uploaded"],methods:{upl:function(t){this.$emit("uploaded",t)},click:function(t){this.setActiveItem(t.target)},moveUnderline:function(t){this.$refs.underline.style.width=t.offsetWidth+"px",this.$refs.underline.style.left=t.getBoundingClientRect().left-this.$refs.menu.getBoundingClientRect().left+"px"},setActiveItem:function(t){this.$store.commit("setUploadFormTabActive",t.getAttribute("data-tab")),this.moveUnderline(t)}},components:{UploadFormPdf:nt,UploadFormSig:bt},mounted:function(){var t=this.$refs.menu.querySelector(".upload-form-tabs__menu__item.active");this.moveUnderline(t)}};n("0638");const pt=O()(ft,[["render",L]]);var mt=pt,Ot={data:function(){return{isDragready:!1,isDragover:!1}},watch:{isDragover:function(){this.$store.commit("setUploadFormProp",{prop:"isDragover",value:this.isDragover})}},methods:{getCoords:function(t){var e=t.getBoundingClientRect();return{top:e.top+scrollY,left:e.left+scrollX}},dragover:function(){this.isDragready=!0,this.isDragover=!0},dragenter:function(){this.isDragready=!0,this.isDragover=!0},dragleave:function(t){var e=t.pageX-this.getCoords(this.$refs.dropZone).left,n=t.pageY-this.getCoords(this.$refs.dropZone).top;return e<0||e>this.$refs.dropZone.clientWidth||n<0||n>this.$refs.dropZone.clientHeight?(this.isDragready=!0,void(this.isDragover=!1)):e>=0&&e<=this.$refs.dropZone.clientWidth&&n>=0&&n<=this.$refs.dropZone.clientHeight?(this.isDragready=!1,void(this.isDragover=!0)):void 0},drop:function(t){this.isDragready=!1,this.isDragover=!1,this.uploaded(t.dataTransfer.files[0])},uploaded:function(t){var e=this.$store.state.uploadForm.tabs.findIndex((function(t){return t.active})),n=this.$store.state.uploadForm.tabs[e].buttons.findIndex((function(t){return t.show}));if(t.size>=1e7)return this.$store.commit("setUploadFormButtonError",{tabIndex:e,buttonIndex:n,value:"Сервис не поддерживает проверку файлов, размер которых превышает 10 Мбайт."}),void this.$store.commit("setUploadFormFile",{tabIndex:e,buttonIndex:n,value:null});this.$store.commit("setUploadFormButtonError",{tabIndex:e,buttonIndex:n,value:""}),this.$store.commit("setUploadFormFile",{tabIndex:e,buttonIndex:n,value:t}),this.$store.state.uploadForm.tabs[e].buttons.length>1&&this.$store.commit("inverseButtons",{tabIndex:e}),1!==this.$store.state.uploadForm.tabs[e].buttons.length&&"sig"!==this.$store.state.uploadForm.tabs[e].buttons[n].value||this.$store.commit("changeUploadStatus","confirmation")}},components:{UploadFormUploading:w,UploadFormConfirmation:P,UploadFormTabs:mt}};n("717d");const jt=O()(Ot,[["render",g]]);var ht=jt,vt={class:"container"},gt=Object(o["g"])('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M10.728,0a8.006,8.006,0,0,0-8,8v3.853a6.371,6.371,0,0,1-.76,2.747L.435,17.147a2.559,2.559,0,0,0,1.44,3.907,27.9,27.9,0,0,0,17.693,0,2.67,2.67,0,0,0,1.44-3.907L19.475,14.6a6.547,6.547,0,0,1-.747-2.747V8A8.024,8.024,0,0,0,10.728,0Z" transform="translate(5.299 3.88)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></path><path d="M4.933,1.68a8.072,8.072,0,0,0-1.28-.267A9.005,9.005,0,0,0,0,1.68a2.651,2.651,0,0,1,4.933,0Z" transform="translate(13.56 2.587)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M8,0A4.012,4.012,0,0,1,4,4,4.014,4.014,0,0,1,1.173,2.827,4.014,4.014,0,0,1,0,0" transform="translate(12.027 25.413)" fill="none" stroke="#fff" stroke-width="2"></path><path d="M0,0H32V32H0Z" fill="none" opacity="0"></path></svg>',1),xt=["innerHTML"];function yt(t,e,n,r,a,s){return Object(o["l"])(),Object(o["e"])("div",{class:Object(o["k"])(["upload-error",{"upload-error--show":a.show}]),onClick:e[2]||(e[2]=Object(o["u"])((function(){return s.click&&s.click.apply(s,arguments)}),["prevent"]))},[Object(o["f"])("div",vt,[Object(o["f"])("div",{class:"upload-error__content",onClick:e[1]||(e[1]=Object(o["u"])((function(){}),["stop"]))},[gt,Object(o["f"])("div",null,[Object(o["f"])("div",{innerHTML:t.$store.state.uploadForm.error,class:"upload-error__text"},null,8,xt),Object(o["f"])("a",{href:"#",onClick:e[0]||(e[0]=Object(o["u"])((function(){return s.click&&s.click.apply(s,arguments)}),["prevent"])),class:"button button--danger button--middle"},"Понятно")])])])],2)}var $t={data:function(){return{show:!1}},methods:{click:function(){this.show=!1,this.$store.commit("changeUploadError","")}},mounted:function(){this.show=!0}};n("1b0d");const Ft=O()($t,[["render",yt]]);var kt=Ft,wt={data:function(){return{isAdvancedUpload:!1}},methods:{},mounted:function(){this.isAdvancedUpload=function(){var t=document.createElement("div");return("draggable"in t||"ondragstart"in t&&"ondrop"in t)&&"FormData"in window&&"FileReader"in window}()},components:{UploadFormH1:v,UploadFormControl:ht,UploadFormError:kt}};n("2224");const Ut=O()(wt,[["render",b]]);var _t=Ut;function St(t,e,n,r,a,s){var c=Object(o["o"])("signature-result-info"),i=Object(o["o"])("signature-result-success"),u=Object(o["o"])("signature-result-error");return Object(o["l"])(),Object(o["e"])("div",null,[Object(o["i"])(c),(Object(o["l"])(!0),Object(o["e"])(o["a"],null,Object(o["n"])(t.$store.state.result.signatures,(function(e,n){return Object(o["l"])(),Object(o["e"])("div",{key:e.signatureName},[t.$store.state.result.signatures[n].valid?(Object(o["l"])(),Object(o["c"])(i,{key:0,index:n,signature:e},null,8,["index","signature"])):(Object(o["l"])(),Object(o["c"])(u,{key:1,index:n,signature:e},null,8,["index","signature"]))])})),128))])}var Dt={class:"signature-result-info"},Tt={key:0,class:"signature-result-info__left"},It={key:0,class:"signature-result-info__filename"},Ct=Object(o["f"])("i",null,null,-1),Pt=Object(o["f"])("br",null,null,-1),Et={class:"signature-result-info__filename__md5"},At={key:1,class:"signature-result-info__md5"},Nt={class:"signature-result-info__right"};function Rt(t,e,n,r,a,s){return Object(o["l"])(),Object(o["e"])("div",Dt,[t.$store.state.result.PDF?(Object(o["l"])(),Object(o["e"])("div",Tt,[t.$store.state.result.PDF.filename?(Object(o["l"])(),Object(o["e"])("span",It,[Ct,Object(o["f"])("span",null,[Object(o["h"])(Object(o["q"])(t.$store.state.result.PDF.filename),1),Pt,Object(o["f"])("span",Et,"Контрольная сумма MD5: "+Object(o["q"])(t.$store.state.result.PDF.MD5),1)])])):Object(o["d"])("",!0),t.$store.state.result.PDF.MD5?(Object(o["l"])(),Object(o["e"])("span",At,"Контрольная сумма MD5: "+Object(o["q"])(t.$store.state.result.PDF.MD5),1)):Object(o["d"])("",!0)])):Object(o["d"])("",!0),Object(o["f"])("div",Nt,[Object(o["f"])("button",{class:"button button-success button--small",onClick:e[0]||(e[0]=Object(o["u"])((function(t){return s.newUpload()}),["prevent"]))}," Проверить еще ")])])}var qt={methods:{newUpload:function(){this.$store.commit("changeResult",{}),this.$store.commit("changeUploadStatus","form")}}};n("f60b");const Bt=O()(qt,[["render",Rt]]);var Lt=Bt,Mt={class:"signature-result-item"},Zt={class:"content-body content-body--success"},Ht={class:"heading-h1"};function Gt(t,e,n,r,a,s){var c=Object(o["o"])("result-table");Object(o["o"])("signature-result-file");return Object(o["l"])(),Object(o["e"])("div",Mt,[Object(o["f"])("div",Zt,[Object(o["f"])("div",Ht,"Подпись "+Object(o["q"])(s.signatureNumber)+" подтверждена",1),Object(o["i"])(c,{signature:n.signature},null,8,["signature"])]),Object(o["d"])("",!0)])}var Wt={class:"table"};function zt(t,e,n,r,a,s){return Object(o["l"])(),Object(o["e"])("div",Wt,[(Object(o["l"])(!0),Object(o["e"])(o["a"],null,Object(o["n"])(a.itemsType,(function(e){return Object(o["l"])(),Object(o["e"])("div",{key:e,class:Object(o["k"])("table-"+e+"-items")},[(Object(o["l"])(!0),Object(o["e"])(o["a"],null,Object(o["n"])(t.$store.state.resultTitle[e+"Type"],(function(t){return Object(o["l"])(),Object(o["c"])(Object(o["p"])(e+"-type"),{key:t.code,item:t,signature:n.signature},null,8,["item","signature"])})),128))],2)})),128))])}var Vt={key:0,class:"table-item"},Kt={key:0},Xt={key:0,class:"icon-success"},Yt={key:1,class:"icon-error"};function Jt(t,e,n,r,a,s){return null!==n.signature[n.item.code]?(Object(o["l"])(),Object(o["e"])("div",Vt,[Object(o["f"])("span",null,[Object(o["h"])(Object(o["q"])(n.item.text)+" ",1),a.value?Object(o["d"])("",!0):(Object(o["l"])(),Object(o["e"])("span",Kt,"не")),Object(o["h"])(" "+Object(o["q"])(n.item.value),1)]),Object(o["f"])("span",null,[a.value?(Object(o["l"])(),Object(o["e"])("i",Xt)):(Object(o["l"])(),Object(o["e"])("i",Yt))])])):Object(o["d"])("",!0)}var Qt={data:function(){return{value:this.signature[this.item.code]}},props:{item:Object,signature:Object}};n("687a");const te=O()(Qt,[["render",Jt]]);var ee=te,ne={class:"text-icon"};function oe(t,e,n,r,a,s){var c=Object(o["o"])("the-notice");return null!==n.signature[n.item.code]?(Object(o["l"])(),Object(o["e"])("div",{key:0,class:Object(o["k"])(["table-item",n.item.muted?"table-item--muted":""])},[Object(o["f"])("span",null,Object(o["q"])(n.item.text)+":",1),Object(o["f"])("span",ne,[Object(o["f"])("span",null,Object(o["q"])(s.value),1),n.item.notice?(Object(o["l"])(),Object(o["c"])(c,{key:0,text:n.item.notice},null,8,["text"])):Object(o["d"])("",!0)])],2)):Object(o["d"])("",!0)}var re=["innerHTML"];function ae(t,e,n,r,a,s){return Object(o["l"])(),Object(o["e"])("span",{class:Object(o["k"])(["notice",{"notice--show":a.show}])},[Object(o["f"])("i",{onMouseenter:e[0]||(e[0]=function(t){return a.show=!0}),onMouseleave:e[1]||(e[1]=function(t){return a.show=!1})},"?",32),Object(o["f"])("span",{class:"notice-text",innerHTML:n.text},null,8,re)],2)}var se={data:function(){return{show:!1}},props:{text:String}};n("7cc8");const ce=O()(se,[["render",ae]]);var ie=ce,ue={data:function(){return{}},props:{item:Object,signature:Object},computed:{value:function(){var t=this.item.code,e=this.signature[t],n=this.item.value;return n&&n[e]?n[e]:e}},components:{TheNotice:ie}};n("aed8");const le=O()(ue,[["render",oe]]);var de=le,be={key:1,class:"text-icon"},fe=["download","href"],pe={key:2},me={key:3,class:"table-item__dropdown"};function Oe(t,e,n,r,a,s){return null!==n.signature[n.item.code]?(Object(o["l"])(),Object(o["e"])("div",{key:0,class:Object(o["k"])(["table-item table-item--person",{"table-item--droppable":n.item.dropdown,"table-item--open":a.open}])},[Object(o["f"])("span",null,Object(o["q"])(n.item.text)+":",1),n.item.dropdown?(Object(o["l"])(),Object(o["e"])("span",{key:0,onClick:e[0]||(e[0]=function(t){return s.slideToggle(t)}),class:"table-item__dropdown-icon"})):n.item.cer?(Object(o["l"])(),Object(o["e"])("span",be,[Object(o["f"])("span",null,Object(o["q"])(s.value),1),Object(o["f"])("a",{download:n.signature[n.item.thumbprint]+".cer",href:s.href,class:"icon-cer"},null,8,fe)])):(Object(o["l"])(),Object(o["e"])("span",pe,Object(o["q"])(s.value),1)),n.item.dropdown?(Object(o["l"])(),Object(o["e"])("div",me,Object(o["q"])(s.value),1)):Object(o["d"])("",!0)],2)):Object(o["d"])("",!0)}n("3ca3"),n("ddb0"),n("2b3d"),n("9861");var je={data:function(){return{open:!1}},props:{item:Object,signature:Object},computed:{href:function(){var t=this.signature[this.item.cer],e=new Blob([t],{type:"application/pkix-cert"});return URL.createObjectURL(e)},value:function(){var t=this.item.code,e=this.signature[t],n=this.item.value;return"certNotBefore"===t?"с ".concat(e," по ").concat(this.signature[this.item.after]):n&&n[e]?n[e]:e}},methods:{slideToggle:function(t){var e=t.target.closest(".table-item").querySelector(".table-item__dropdown");if(e.classList.contains("show"))e.style.height="0px",e.addEventListener("transitionend",(function(){e.classList.remove("show")}),{once:!0});else{e.classList.add("show"),e.style.height="auto";var n=e.clientHeight+"px";e.style.height="0px",setTimeout((function(){e.style.height=n}),0)}}}};n("787c");const he=O()(je,[["render",Oe]]);var ve=he,ge={data:function(){return{itemsType:["check","data","person"]}},props:{signature:Object},components:{CheckType:ee,DataType:de,PersonType:ve}};n("4cf2");const xe=O()(ge,[["render",zt]]);var ye=xe,$e={class:"signature-result-file"},Fe=["download","href"];function ke(t,e,n,r,a,s){return Object(o["l"])(),Object(o["e"])("div",$e,[Object(o["f"])("a",{download:n.signature.certThumbprint+".cer",href:s.href},"Протокол проверки подписи",8,Fe)])}var we={data:function(){return{}},props:{signature:Object},computed:{href:function(){var t=this.signature.certificate,e=new Blob([t]);return URL.createObjectURL(e)}}};n("7992");const Ue=O()(we,[["render",ke]]);var _e=Ue,Se={props:{index:Number,signature:Object},components:{ResultTable:ye,SignatureResultFile:_e},computed:{signatureNumber:function(){return this.$store.state.result.signatures.length<=1?"":this.index+1}}};n("93ef");const De=O()(Se,[["render",Gt]]);var Te=De,Ie={class:"signature-result-item"},Ce={class:"content-body content-body--error"},Pe={class:"heading-h1"};function Ee(t,e,n,r,a,s){var c=Object(o["o"])("result-table");Object(o["o"])("signature-result-file");return Object(o["l"])(),Object(o["e"])("div",Ie,[Object(o["f"])("div",Ce,[Object(o["f"])("div",Pe," Подпись "+Object(o["q"])(s.signatureNumber)+" не подтверждена ",1),Object(o["i"])(c,{signature:n.signature},null,8,["signature"]),Object(o["d"])("",!0)])])}var Ae={props:{index:Number,signature:Object},components:{ResultTable:ye,SignatureResultFile:_e},computed:{signatureNumber:function(){return this.$store.state.result.signatures.length<=1?"":this.index+1}}};n("6106");const Ne=O()(Ae,[["render",Ee]]);var Re=Ne,qe={props:{index:Number,signature:Object},components:{SignatureResultInfo:Lt,SignatureResultSuccess:Te,SignatureResultError:Re},computed:{signatureNumber:function(){return this.$store.state.result.signatures.length<=1?"":this.index+1}}};const Be=O()(qe,[["render",St]]);var Le=Be,Me=Object(o["f"])("div",{class:"content-body content-body--error"},[Object(o["f"])("div",{class:"heading-h1"},"Подпись не обнаружена")],-1);function Ze(t,e,n,r,a,s){var c=Object(o["o"])("signature-result-info");return Object(o["l"])(),Object(o["e"])("div",null,[Object(o["i"])(c),Me])}var He={components:{SignatureResultInfo:Lt}};n("d861");const Ge=O()(He,[["render",Ze]]);var We=Ge,ze={components:{UploadForm:_t,SignatureError:We,SignatureResult:Le}};n("c12a");const Ve=O()(ze,[["render",i]]);var Ke=Ve,Xe=Object(r["a"])({state:function(){return{counters:{ym:81665320,ga:"G-YZNW04TXLN"},uploadStatus:"form",uploadForm:{error:"",controller:null,controllerAborted:!1,isDragover:!1,tabs:[{name:"PDF",value:"pdf",active:!0,buttons:[{value:"pdf",name:"Выберите PDF-файл",accept:".pdf",error:"",show:!0,file:null}]},{name:"Файл + SIG",value:"sig",buttons:[{value:"file",name:"Выберите файл",accept:"*",error:"",show:!0,file:null},{value:"sig",name:"Загрузите SIG-файл",accept:".sig, .sgn, .p7s",error:"",show:!1,file:null}]}]},result:{},resultTitle:{checkType:[{code:"verifySignatureStatus",text:"Базовая проверка ЭП и цепочки сертификатов",value:"пройдена"},{code:"verifyChainStatus",text:"Дополнительная проверка цепочки сертификатов",value:"пройдена"},{code:"issuerAccreditation",text:"Статус аккредитации издателя сертификата",value:"установлен"},{code:"qualifiedSignature",text:"Электронная подпись",value:"является квалифицированной"},{code:"timeStampIssuerAccreditation",text:"Метка доверенного времени",value:"подтверждена"}],dataType:[{code:"type",text:"Тип подписи"},{code:"signatureName",text:"Название подписи"},{code:"coverWholeDocument",text:"Относится ко всему документу",value:{true:"Да",false:"Нет"}},{code:"sigReason",text:"Основание подписи"},{code:"sigLocation",text:"Место подписи"},{code:"sigContact",text:"Контактные данные из подписи"},{code:"sigDate",text:"Дата подписи из PDF",muted:!0,notice:"Время и дата указаны в соответствии с часами компьютера подписанта и не могут быть доверенными."},{code:"signingTime",text:"Дата подписи из самой подписи",muted:!0,notice:"Время и дата указаны в соответствии с часами компьютера подписанта и не могут быть доверенными."},{code:"signingTimestamp",text:"Дата подписи из метки доверенного времени"}],personType:[{code:"subjectName",text:"Владелец сертификата",thumbprint:"certThumbprint",cer:"certificate"},{code:"subjectOrganization",text:"Организация"},{code:"subjectTitle",text:"Должность"},{code:"subjectEmail",text:"Электронный адрес"},{code:"subject",text:"Дополнительные данные сертификата",dropdown:!0},{code:"issuerName",text:"Издатель сертификата",thumbprint:"issuerThumbprint",cer:"issuerCertificate"},{code:"issuer",text:"Дополнительные данные сертификата издателя",dropdown:!0},{code:"certNotBefore",after:"certNotAfter",text:"Действителен"},{code:"certSerial",text:"Серийный номер"},{code:"certThumbprint",text:"Отпечаток"},{code:"timestampName",text:"Метка доверенного времени от"}]}}},mutations:{inverseButtons:function(t,e){t.uploadForm.tabs[e.tabIndex].buttons.forEach((function(t){t.show=!t.show}))},showButton:function(t,e){t.uploadForm.tabs.find((function(t){return t.buttons.length>1})).buttons.forEach((function(t){t.show=t.value===e}))},changeResult:function(t,e){t.result=e},changeUploadStatus:function(t,e){t.uploadStatus=e},changeUploadError:function(t,e){t.uploadForm.error=e},setUploadFormFile:function(t,e){t.uploadForm.tabs[e.tabIndex].buttons[e.buttonIndex].file=e.value},setUploadFormProp:function(t,e){t.uploadForm[e.prop]=e.value},setUploadFormButtonError:function(t,e){t.uploadForm.tabs[e.tabIndex].buttons[e.buttonIndex].error=e.value},setUploadFormTabActive:function(t,e){t.uploadForm.tabs.forEach((function(t){t.active=t.value===e||void 0}))}}}),Ye=Object(o["b"])(Ke);Ye.use(Xe),Ye.mount("#vedisiApp")},6106:function(t,e,n){"use strict";n("4685")},"687a":function(t,e,n){"use strict";n("e49d")},"68bb":function(t,e,n){},"6f84":function(t,e,n){"use strict";n("b738")},"6f8a":function(t,e,n){},"717d":function(t,e,n){"use strict";n("49c4")},"759e":function(t,e,n){},"787c":function(t,e,n){"use strict";n("759e")},7992:function(t,e,n){"use strict";n("e59d")},"79f4":function(t,e,n){"use strict";n("d5ce")},"7cc8":function(t,e,n){"use strict";n("8e91")},"8e91":function(t,e,n){},"93ef":function(t,e,n){"use strict";n("f1d6")},a2ab:function(t,e,n){},a4ff:function(t,e,n){},a7f7:function(t,e,n){"use strict";n("68bb")},aed8:function(t,e,n){"use strict";n("cca7")},b17f:function(t,e,n){},b738:function(t,e,n){},c12a:function(t,e,n){"use strict";n("a4ff")},cca7:function(t,e,n){},d5ce:function(t,e,n){},d861:function(t,e,n){"use strict";n("2ad0")},e2a9:function(t,e,n){},e49d:function(t,e,n){},e59d:function(t,e,n){},ebdd:function(t,e,n){},f1d6:function(t,e,n){},f379:function(t,e,n){},f60b:function(t,e,n){"use strict";n("4a7f")}});