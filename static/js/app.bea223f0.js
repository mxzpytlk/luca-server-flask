(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],d=0,l=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d676e":"fd32d342","chunk-380bed9e":"fbec6083","chunk-64928e8e":"63dbdea1","chunk-5ad2919d":"994208d0","chunk-18b44151":"888ebac5","chunk-d2561644":"4465d550","chunk-c4098594":"947e697f","chunk-4066a21e":"531710db","chunk-e09b06b4":"57d9b46b"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-380bed9e":1,"chunk-64928e8e":1,"chunk-18b44151":1,"chunk-d2561644":1,"chunk-c4098594":1,"chunk-4066a21e":1,"chunk-e09b06b4":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0d676e":"31d6cfe0","chunk-380bed9e":"b3f3f086","chunk-64928e8e":"e3dedc11","chunk-5ad2919d":"31d6cfe0","chunk-18b44151":"c2c6723c","chunk-d2561644":"913e5ac2","chunk-c4098594":"a81d8ef9","chunk-4066a21e":"b6649aa0","chunk-e09b06b4":"1f354949"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0d0f":function(e){e.exports=JSON.parse('{"add_note":"Добавить запись","main":"Главная страница","statistics":"Статистика","delete_sector":"Удалить сектор","acount":"Акаунт","enter_record_text":"Введите текст заметки","enter_sector_title":"Введите название сектора","enter_record":"Запишите заметку","planed_time":"Планируемое время","delete":"Удалить","time_spent":"Потраченное время","edit":"Изменить","change_pass":"Изменить пароль","send":"Отправить","old_pass":"Старый пароль","new_pass":"Новый пароль","repeat_pass":"Повторите пароль","pass_are_diff":"Пароли не совпадают","incorrect_pass":"Неверный пароль","here_should_record":"Здесь должна быть запись","copy_previous_day":"Копировать план предыдущего дня","delete_from_today":"Удалить из плана","not_today":"Нельзя начать выполнять задачу без сегодняшней даты","executionPlanTime_empty":"Необходимо указать планируемое время","enter_sector_record":"Введите название сектора или задачи","left":"Осталось","h":"ч","m":"м","users":"пользователи"}')},"119d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auth__container"},[n("div",{staticClass:"auth"},[n("span",{staticClass:"auth__logo"},[e._v(" LUCA ")]),n("form",{staticClass:"auth__form",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"auth__input luca-input",attrs:{type:"text",name:"login",placeholder:"Login",autocomplete:"on"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("pass-input",{staticClass:"auth__input",attrs:{placeholder:"Password"},model:{value:e.pass,callback:function(t){e.pass=t},expression:"pass"}}),e.isPassRegister?n("pass-input",{staticClass:"auth__input",attrs:{placeholder:"Repeat password"},model:{value:e.repeatPass,callback:function(t){e.repeatPass=t},expression:"repeatPass"}}):e._e(),n("div",{staticClass:"auth__error"},[e._v(e._s(e.errText))]),n("input",{staticClass:"auth__submit",attrs:{type:"submit"},domProps:{value:e.curActionName}})],1),n("router-link",{staticClass:"auth__link-base auth__link-dotted",attrs:{to:""+e.otherActionName,custom:""}},[e._v(" "+e._s(e.otherActionName)+" ")])],1)])},a=[],o=n("1da1"),c=(n("96cf"),n("b0c0"),n("32b5")),i=(n("8cee"),n("2e11")),s={data:function(){return{name:"",pass:"",repeatPass:"",errText:""}},computed:{isPassRegister:function(){var e=this;return e.$route.path===c["a"].REGISTER},curActionName:function(){var e=this;return e.isPassRegister?"register":"entry"},otherActionName:function(){var e=this;return e.isPassRegister?"entry":"register"}},methods:{login:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e,r=n.isPassRegister?"register":"login","register"!==r||n.pass===n.repeatPass){t.next=5;break}return n.errText="Passwords are different",t.abrupt("return");case 5:return a={name:n.name,pass:n.pass},t.prev=6,t.next=9,n.$store.dispatch(r,a);case 9:return t.next=11,n.$router.push(n.isPassRegister?c["a"].AUTH:c["a"].MAIN);case 11:n.name="",n.pass="",n.errText="",t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](6),n.errText=t.t0.message;case 19:case"end":return t.stop()}}),t,null,[[6,16]])})))()}},components:{PassInput:i["a"]}},u=s,d=n("2877"),l=Object(d["a"])(u,r,a,!1,null,null,null);t["default"]=l.exports},1909:function(e){e.exports=JSON.parse('{"add_note":"Add note","main":"Main","statistics":"Statistics","delete_sector":"Delete sector","acount":"Acount","enter_record_text":"Write record text","enter_sector_title":"Write sector title","enter_record":"Write record","planed_time":"Planed time","delete":"Delete","time_spent":"Time spent","edit":"Edit","change_pass":"Change password","send":"Send","old_pass":"Old password","new_pass":"New password","repeat_pass":"Repeat password","pass_are_diff":"Passwords are different","incorrect_pass":"Incorrect password","here_should_record":"Here should be record","copy_previous_day":"Copy previous day plan","delete_from_today":"Delete from plan","not_today":"Can\'t start coutdown on task which is not today","executionPlanTime_empty":"You must indicate the planned time","enter_sector_record":"Write sector or record title","left":"Left","h":"h","m":"m","users":"users"}')},"2e11":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{key:e.key,staticClass:"pass__container"},[n("input",{staticClass:"luca-input",attrs:{required:"",placeholder:e.placeholder,type:e.inputType},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),n("font-awesome-icon",{staticClass:"pass__eye",attrs:{icon:"eye"},on:{click:function(t){return t.preventDefault(),e.changePassVisibility(t)}}})],1)},a=[],o=(n("764b"),{data:function(){return{inputType:"password",key:0}},methods:{changePassVisibility:function(){var e=this;e.inputType="password"===e.inputType?"text":"password",e.key+=1}},props:["placeholder","value"]}),c=o,i=n("2877"),s=Object(i["a"])(c,r,a,!1,null,null,null);t["a"]=s.exports},"32b5":function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e["DEFAULT"]="/",e["AUTH"]="/auth",e["REGISTER"]="/register",e["MAIN"]="/main",e["WORKSPACE"]="workspace",e["NEW_NOTE"]="new",e["DELETE_SECTOR"]="delete",e["ACOUNT"]="acount",e["EDIT"]="edit/:id",e["PLAN"]="plan",e["ADMIN"]="admin"}(r||(r={}))},"5c0b":function(e,t,n){"use strict";n("9c0c")},"764b":function(e,t,n){},"8cee":function(e,t,n){},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c=n("1da1"),i=(n("96cf"),n("d698"),n("119d")),s={created:function(){var e=this;this.$http.interceptors.response.use(void 0,function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(401!==n.response.status){t.next=3;break}return t.next=3,e.$store.dispatch("logout");case 3:throw n;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},components:{Auth:i["default"]}},u=s,d=(n("5c0b"),n("2877")),l=Object(d["a"])(u,a,o,!1,null,null,null),f=l.exports,p=n("9483");Object(p["a"])("".concat("/static/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0"),n("2ca0"),n("99af");var h,m=n("32b5"),v=n("2f62"),g=(n("6062"),n("8468")),b=n("b85c");n("7db0"),n("c740"),n("a434"),n("d81d"),n("159b");(function(e){e["REGISTER"]="/api/auth/register",e["LOGIN"]="/api/auth/login",e["ADD_RECORD"]="/api/record/add",e["GET_SECTORS"]="/api/record/",e["DELETE_SECTOR"]="/api/record/delete/sector",e["CHANGE_PASS"]="/api/auth/change/pass",e["UPDATE_RECORDS"]="/api/record/update",e["DELETE_RECORD"]="/api/record/delete/record",e["GET_USERS"]="/api/admin/users"})(h||(h={}));var w=n("5530"),_=n("bc3a"),k=n.n(_),R=n("db90");function E(e){return((null===R||void 0===R?void 0:R.url)||"")+e}function x(e,t){return S.apply(this,arguments)}function S(){return S=Object(c["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T(t,"POST",n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function y(e,t){return D.apply(this,arguments)}function D(){return D=Object(c["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T(t,"GET",n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}function O(e,t){return A.apply(this,arguments)}function A(){return A=Object(c["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T(t,"DELETE",n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}function T(e,t,n){return I.apply(this,arguments)}function I(){return I=Object(c["a"])(regeneratorRuntime.mark((function e(t,n,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k()({method:n,url:E(t),params:Object(w["a"])({},r)});case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e["catch"](0),null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.data;case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),I.apply(this,arguments)}var P=n("2909");function N(e){var t=[];return t.concat.apply(t,Object(P["a"])(e))}n("a630");var j=n("d4ec"),C=n("bee2");n("25f0"),n("fb6a");function L(e,t){var n=e.getTime(),r=t.getTime();return Math.abs(r-n)/36e5}function M(e){return 60*e*60*1e3}function U(e){var t=e.toString();return"z"===(null===t||void 0===t?void 0:t.slice(-1).toLowerCase())?new Date(t.slice(0,-1)):new Date(t)}var G,$=function(){function e(t,n,r,a,o){Object(j["a"])(this,e),this.id=t,this.text=n,this.executionPlanTime=r,this.executionIntervals=a,this.executionDate=o}return Object(C["a"])(e,[{key:"executionTime",get:function(){return this.executionIntervals.map((function(e){return L(e.start,e.end||new Date)})).reduce((function(e,t){return e+t}),0)},set:function(e){var t=new Date,n=new Date(Date.now()-M(e));this.executionIntervals.push({start:n,end:t})}}]),e}(),H={state:{sectors:[]},mutations:{setSectors:function(e,t){var n,r=Object(b["a"])(t);try{for(r.s();!(n=r.n()).done;){var a=n.value;a.id=""+((null===a||void 0===a?void 0:a._id)||a.id);for(var o=0;o<a.records.length;o++){var c=a.records[o];if(c.executionDate){var i=U(c.executionDate);c.executionDate=new Date(i)}c.executionIntervals.map((function(e){var t=U(e.start);if(e.start=new Date(t),e.end){var n=U(e.end);e.end=new Date(n)}return e}));var s=c.text,u=c.executionPlanTime,d=c.executionIntervals,l=c.executionDate,f=""+((null===c||void 0===c?void 0:c._id)||c.id);a.records[o]=new $(f,s,u,d,l)}}}catch(p){r.e(p)}finally{r.f()}e.sectors=t},removeSectors:function(e,t){var n=new Set(t.map((function(e){return e.id})));e.sectors=e.sectors.filter((function(e){return!n.has(e.id)}))}},getters:{sectors:function(e){return e.sectors},sectorTitle:function(e){return function(t){var n,r=Object(b["a"])(e.sectors);try{for(r.s();!(n=r.n()).done;){var a,o=n.value,c=Object(b["a"])(o.records);try{for(c.s();!(a=c.n()).done;){var i=a.value;if(t===i.id)return o.title}}catch(s){c.e(s)}finally{c.f()}}}catch(s){r.e(s)}finally{r.f()}}}},actions:{deleteSectors:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=new Set(t.map((function(e){return e.id}))),n.next=4,O(h.DELETE_SECTOR,{removeIds:Array.from(a)});case 4:r("removeSectors",t);case 5:case"end":return n.stop()}}),n)})))()},updateSectors:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,r("setSectors",t);case 2:case"end":return n.stop()}}),n)})))()},loadRecords:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,y(h.GET_SECTORS,{userId:t});case 3:o=n.sent,c=null===o||void 0===o||null===(r=o.data)||void 0===r?void 0:r.sectors,a("setSectors",c);case 6:case"end":return n.stop()}}),n)})))()}}},F={mutations:{pushRecord:function(e,t){var n=e.sectorStore.sectors,r=n.find((function(e){return e.title===t.title}));if(r){var a=r.records.findIndex((function(e){return e.id===t.record.id}));a>=0?r.records[a]=t.record:r.records.push(t.record)}else n.push({title:t.title,records:[t.record],id:t.sectorId})},removeRecord:function(e,t){var n=e.sectorStore.sectors,r=n.findIndex((function(e){return e.records.find((function(e){return e.id===t.id}))})),a=n[r],o=a.records.findIndex((function(e){return e.id===t.id}));a.records.splice(o,1),0===a.records.length&&n.splice(r,1)}},getters:{allRecords:function(e){return N(e.sectorStore.sectors.map((function(e){return e.records})))},record:function(e){return function(t){var n,r=Object(b["a"])(e.sectorStore.sectors);try{for(r.s();!(n=r.n()).done;){var a,o=n.value,c=Object(b["a"])(o.records);try{for(c.s();!(a=c.n()).done;){var i=a.value;if(t===i.id)return i}}catch(s){c.e(s)}finally{c.f()}}}catch(s){r.e(s)}finally{r.f()}}}},actions:{addRecord:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,i,s,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.title,o=t.record,n.next=4,x(h.ADD_RECORD,{title:a,record:o});case 4:c=n.sent,i=null===c||void 0===c?void 0:c.data,s=i.recordId,u=i.sectorId,o.id=s,r("pushRecord",{title:a,record:o,sectorId:u});case 8:case"end":return n.stop()}}),n)})))()},updateRecord:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return Object(g["a"])(e),n.next=3,x(h.UPDATE_RECORDS,{records:[t]});case 3:case"end":return n.stop()}}),n)})))()},removeRecord:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,O(h.DELETE_RECORD,t);case 3:r("removeRecord",t);case 4:case"end":return n.stop()}}),n)})))()},updateRecords:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return Object(g["a"])(e),n.next=3,x(h.UPDATE_RECORDS,{records:t});case 3:case"end":return n.stop()}}),n)})))()},copyPreviousDayPlan:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getters,r=e.dispatch,a=new Date,a.setDate(a.getDate()-1),o=n.allRecords.filter((function(e){var t;return a.toDateString()===(null===(t=e.executionDate)||void 0===t?void 0:t.toDateString())})),o.forEach((function(e){e.executionDate=new Date})),t.next=7,r("updateRecords",o);case 7:case"end":return t.stop()}}),t)})))()}},modules:{sectorStore:H}},W={state:{filterDate:new Date,filterRecords:new Set},mutations:{changeFilterDate:function(e,t){e.filterDate=t,e.filterRecords=new Set},makeRecordsImportant:function(e,t){e.filterRecords=new Set(t)}},getters:{filterDate:function(e){return e.filterDate},isToday:function(e){return(new Date).toDateString()===e.filterDate.toDateString()},todayRecords:function(e,t){var n=t.allRecords;return n.filter((function(t){var n;return(null===(n=t.executionDate)||void 0===n?void 0:n.toDateString())===e.filterDate.toDateString()}))},isImportant:function(e){return function(t){var n;return 0===e.filterRecords.size&&e.filterDate.toDateString()===(null===t||void 0===t||null===(n=t.executionDate)||void 0===n?void 0:n.toDateString())||e.filterRecords.has(t)}}},actions:{chandgeDate:function(e,t){var n=e.commit;n("changeFilterDate",t)}},modules:{recordsStore:F}};(function(e){e["TOKEN"]="token",e["NAME"]="name",e["LOCALE"]="locale",e["USER_ID"]="user_id",e["IS_ADMIN"]="is_admin"})(G||(G={}));var K={state:{locale:localStorage.getItem(G.LOCALE)||"en"},mutations:{updateLocale:function(e,t){e.locale=t}},getters:{locale:function(e){return e.locale}},actions:{setLocale:function(e,t){var n=e.commit;localStorage.setItem(G.LOCALE,t),n("updateLocale",t)},changePass:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return Object(g["a"])(e),r=t.oldPass,a=t.newPass,n.next=4,x(h.CHANGE_PASS,{newPass:a,oldPass:r});case 4:case"end":return n.stop()}}),n)})))()}}},z=(n("b0c0"),{state:{token:localStorage.getItem(G.TOKEN),name:localStorage.getItem(G.NAME),userId:localStorage.getItem(G.USER_ID),isAdmin:localStorage.getItem(G.IS_ADMIN)},mutations:{auth_success:function(e,t){e.token=t.token,e.name=t.name,e.userId=t.id,e.isAdmin=t.isAdmin},logout:function(e){e.token="",e.name="",e.isAdmin=!1}},getters:{isLoggedIn:function(e){return!!e.token},name:function(e){return e.name},userId:function(e){return e.id},isAdmin:function(e){return e.isAdmin}},actions:{login:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,i,s,u,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,a=t.name,o=t.pass,a&&o){n.next=4;break}throw new Error("Name and password can't be empty");case 4:return n.next=6,x(h.LOGIN,t);case 6:if(c=n.sent,i=null===c||void 0===c?void 0:c.data,s=i.token,u=i.id,d=i.isAdmin,!s||!u){n.next=17;break}localStorage.setItem(G.TOKEN,s),localStorage.setItem(G.NAME,a),localStorage.setItem(G.USER_ID,u),localStorage.setItem(G.IS_ADMIN,d),k.a.defaults.headers.common.Authorization=s,r("auth_success",{token:s,name:a,id:u,isAdmin:d}),n.next=18;break;case 17:throw new Error("Login or password is incorrect");case 18:case"end":return n.stop()}}),n)})))()},register:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(Object(g["a"])(e),r=t.name,a=t.pass,r&&a){n.next=4;break}throw new Error("Name and password can't be empty");case 4:return n.next=6,x(h.REGISTER,{name:r,pass:a});case 6:case"end":return n.stop()}}),n)})))()},logout:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,localStorage.removeItem(G.TOKEN),localStorage.removeItem(G.NAME),localStorage.removeItem(G.IS_ADMIN),delete k.a.defaults.headers.common.Authorization,n("logout"),t.next=8,Q.push(m["a"].AUTH);case 8:case"end":return t.stop()}}),t)})))()}}}),J={state:{users:[]},mutations:{setUsers:function(e,t){e.users=t}},getters:{users:function(e){return e.users}},actions:{loadUsers:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,y(h.GET_USERS);case 3:r=t.sent,a=r.data.users,n("setUsers",a);case 6:case"end":return t.stop()}}),t)})))()}}};r["default"].use(v["a"]);var q=new v["a"].Store({state:{},mutations:{},getters:{},actions:{},modules:{recordsFilter:W,user:K,auth:z,adminStore:J}}),B=n("8c4f");r["default"].use(B["a"]);var V=[{path:m["a"].AUTH,component:function(){return Promise.resolve().then(n.bind(null,"119d"))}},{path:m["a"].REGISTER,component:function(){return Promise.resolve().then(n.bind(null,"119d"))}},{path:m["a"].MAIN,component:function(){return Promise.all([n.e("chunk-5ad2919d"),n.e("chunk-2d0d676e"),n.e("chunk-d2561644"),n.e("chunk-c4098594")]).then(n.bind(null,"c299"))},children:[{path:m["a"].NEW_NOTE,component:function(){return Promise.all([n.e("chunk-2d0d676e"),n.e("chunk-64928e8e")]).then(n.bind(null,"0c74"))}},{path:m["a"].DELETE_SECTOR,component:function(){return n.e("chunk-e09b06b4").then(n.bind(null,"6a45"))}},{path:m["a"].EDIT,component:function(){return Promise.all([n.e("chunk-2d0d676e"),n.e("chunk-380bed9e")]).then(n.bind(null,"a07b"))}},{path:m["a"].PLAN,component:function(){return Promise.all([n.e("chunk-5ad2919d"),n.e("chunk-18b44151")]).then(n.bind(null,"0434"))}},{path:m["a"].ADMIN,component:function(){return Promise.all([n.e("chunk-5ad2919d"),n.e("chunk-d2561644"),n.e("chunk-4066a21e")]).then(n.bind(null,"4cc2"))},children:[{path:"*",component:function(){return Promise.all([n.e("chunk-5ad2919d"),n.e("chunk-d2561644"),n.e("chunk-4066a21e")]).then(n.bind(null,"4cc2"))}}]},{path:"*",component:function(){return Promise.all([n.e("chunk-5ad2919d"),n.e("chunk-18b44151")]).then(n.bind(null,"0434"))}},{path:"",component:function(){return Promise.all([n.e("chunk-5ad2919d"),n.e("chunk-18b44151")]).then(n.bind(null,"0434"))}}]},{path:"*",component:function(){return q.getters.isLoggedIn?Promise.all([n.e("chunk-5ad2919d"),n.e("chunk-2d0d676e"),n.e("chunk-d2561644"),n.e("chunk-c4098594")]).then(n.bind(null,"c299")):Promise.resolve().then(n.bind(null,"119d"))},children:[{path:"*",component:function(){return Promise.all([n.e("chunk-5ad2919d"),n.e("chunk-18b44151")]).then(n.bind(null,"0434"))}}]}],Y=new B["a"]({mode:"history",base:"/static/",routes:V});Y.beforeEach((function(e,t,n){var r=e.path,a=[m["a"].AUTH,m["a"].REGISTER],o=q.getters.isLoggedIn,c=q.getters.isAdmin,i=r.startsWith("".concat(m["a"].MAIN,"/").concat(m["a"].ADMIN));c?i?n():n("".concat(m["a"].MAIN,"/").concat(m["a"].ADMIN)):(a.some((function(e){return e===r}))?o&&n(m["a"].MAIN):o?(i&&n(m["a"].MAIN),n()):n(m["a"].AUTH),n())}));var Q=Y,X=n("ecee"),Z=n("c074"),ee=n("ad3d"),te=n("f2d1"),ne=n("750b");function re(e){var t;if(!e)return null;e=(null===(t=e)||void 0===t?void 0:t.value)||e;var n=e.getFullYear(),r="0".concat(e.getMonth()+1).slice(-2),a="0".concat(e.getDate()).slice(-2);return"".concat(n,"-").concat(r,"-").concat(a)}n("b65f");var ae=n("0d0f"),oe=n("1909"),ce={ru:ae,en:oe};function ie(e){var t=q.getters.locale;return ce[t][e]||e}function se(e){var t=ie("h"),n=ie("m");if(e<=0)return"0".concat(t);var r=Math.trunc(e),a=Math.round(60*(e-r));return(r?"".concat(r).concat(t," "):"")+(a?"".concat(a).concat(n):"")}X["c"].add(Z["b"],te["a"],Z["e"],Z["c"],Z["h"],Z["a"],Z["g"],Z["f"],Z["d"]),r["default"].component("font-awesome-icon",ee["a"]),r["default"].config.productionTip=!1,r["default"].prototype.$http=k.a;var ue=localStorage.getItem(G.TOKEN);ue&&(r["default"].prototype.$http.defaults.headers.common.Authorization=ue),r["default"].use(ne["default"]),r["default"].filter("date",re),r["default"].filter("time",se),r["default"].filter("locale",ie),new r["default"]({router:Q,store:q,render:function(e){return e(f)}}).$mount("#app")},d698:function(e,t,n){},db90:function(e){e.exports=JSON.parse('{"url":""}')}});
//# sourceMappingURL=app.bea223f0.js.map