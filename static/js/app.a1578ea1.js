(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],d=0,l=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d676e":"fd32d342","chunk-380bed9e":"fbec6083","chunk-64928e8e":"63dbdea1","chunk-339d4d7a":"0a57d075","chunk-49e06954":"c039cde0","chunk-5ad2919d":"994208d0","chunk-18b44151":"888ebac5","chunk-d2561644":"3704d458","chunk-c4098594":"0e654169","chunk-704e38e8":"014bbb20","chunk-e09b06b4":"57d9b46b"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-380bed9e":1,"chunk-64928e8e":1,"chunk-339d4d7a":1,"chunk-49e06954":1,"chunk-18b44151":1,"chunk-d2561644":1,"chunk-c4098594":1,"chunk-704e38e8":1,"chunk-e09b06b4":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0d676e":"31d6cfe0","chunk-380bed9e":"b3f3f086","chunk-64928e8e":"e3dedc11","chunk-339d4d7a":"37cfd67b","chunk-49e06954":"5f3466f1","chunk-5ad2919d":"31d6cfe0","chunk-18b44151":"c2c6723c","chunk-d2561644":"1fba6dbd","chunk-c4098594":"a81d8ef9","chunk-704e38e8":"6f832bf6","chunk-e09b06b4":"1f354949"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";var r,a=n("2b0e"),o=n("2f62"),c=(n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("4de4"),n("8468")),i=n("1da1"),s=n("b85c");n("96cf"),n("7db0"),n("c740"),n("a434"),n("d81d"),n("159b");(function(e){e["REGISTER"]="/api/auth/register",e["LOGIN"]="/api/auth/login",e["ADD_RECORD"]="/api/record/add",e["GET_SECTORS"]="/api/record/",e["DELETE_SECTOR"]="/api/record/delete/sector",e["CHANGE_PASS"]="/api/auth/change/pass",e["UPDATE_RECORDS"]="/api/record/update",e["DELETE_RECORD"]="/api/record/delete/record",e["GET_USERS"]="/api/admin/users",e["DELETE_USER"]="/api/admin/delete-user"})(r||(r={}));var u=n("5530"),d=n("bc3a"),l=n.n(d),f=n("db90");function p(e){return((null===f||void 0===f?void 0:f.url)||"")+e}function h(e,t){return m.apply(this,arguments)}function m(){return m=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_(t,"POST",n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function v(e,t){return g.apply(this,arguments)}function g(){return g=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_(t,"GET",n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function b(e,t){return w.apply(this,arguments)}function w(){return w=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_(t,"DELETE",n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function _(e,t,n){return k.apply(this,arguments)}function k(){return k=Object(i["a"])(regeneratorRuntime.mark((function e(t,n,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l()({method:n,url:p(t),params:Object(u["a"])({},r)});case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e["catch"](0),null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.data;case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),k.apply(this,arguments)}var E=n("2909");n("99af");function R(e){var t=[];return t.concat.apply(t,Object(E["a"])(e))}n("a630");var x=n("d4ec"),S=n("bee2");n("25f0"),n("fb6a");function y(e,t){var n=e.getTime(),r=t.getTime();return Math.abs(r-n)/36e5}function D(e){return 60*e*60*1e3}function O(e){var t=e.toString();return"z"===(null===t||void 0===t?void 0:t.slice(-1).toLowerCase())?new Date(t.slice(0,-1)):new Date(t)}var A=function(){function e(t,n,r,a,o){Object(x["a"])(this,e),this.id=t,this.text=n,this.executionPlanTime=r,this.executionIntervals=a,this.executionDate=o}return Object(S["a"])(e,[{key:"executionTime",get:function(){return this.executionIntervals.map((function(e){return y(e.start,e.end||new Date)})).reduce((function(e,t){return e+t}),0)},set:function(e){var t=new Date,n=new Date(Date.now()-D(e));this.executionIntervals.push({start:n,end:t})}}]),e}(),T={state:{sectors:[]},mutations:{setSectors:function(e,t){var n,r=Object(s["a"])(t);try{for(r.s();!(n=r.n()).done;){var a=n.value;a.id=""+((null===a||void 0===a?void 0:a._id)||a.id);for(var o=0;o<a.records.length;o++){var c=a.records[o];if(c.executionDate){var i=O(c.executionDate);c.executionDate=new Date(i)}c.executionIntervals.map((function(e){var t=O(e.start);if(e.start=new Date(t),e.end){var n=O(e.end);e.end=new Date(n)}return e}));var u=c.text,d=c.executionPlanTime,l=c.executionIntervals,f=c.executionDate,p=""+((null===c||void 0===c?void 0:c._id)||c.id);a.records[o]=new A(p,u,d,l,f)}}}catch(h){r.e(h)}finally{r.f()}e.sectors=t},removeSectors:function(e,t){var n=new Set(t.map((function(e){return e.id})));e.sectors=e.sectors.filter((function(e){return!n.has(e.id)}))}},getters:{sectors:function(e){return e.sectors},sectorTitle:function(e){return function(t){var n,r=Object(s["a"])(e.sectors);try{for(r.s();!(n=r.n()).done;){var a,o=n.value,c=Object(s["a"])(o.records);try{for(c.s();!(a=c.n()).done;){var i=a.value;if(t===i.id)return o.title}}catch(u){c.e(u)}finally{c.f()}}}catch(u){r.e(u)}finally{r.f()}}}},actions:{deleteSectors:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,o=new Set(t.map((function(e){return e.id}))),n.next=4,b(r.DELETE_SECTOR,{removeIds:Array.from(o)});case 4:a("removeSectors",t);case 5:case"end":return n.stop()}}),n)})))()},updateSectors:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,r("setSectors",t);case 2:case"end":return n.stop()}}),n)})))()},loadRecords:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,o,c,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,v(r.GET_SECTORS,{userId:t});case 3:c=n.sent,i=null===c||void 0===c||null===(a=c.data)||void 0===a?void 0:a.sectors,o("setSectors",i);case 6:case"end":return n.stop()}}),n)})))()}}},I={mutations:{pushRecord:function(e,t){var n=e.sectorStore.sectors,r=n.find((function(e){return e.title===t.title}));if(r){var a=r.records.findIndex((function(e){return e.id===t.record.id}));a>=0?r.records[a]=t.record:r.records.push(t.record)}else n.push({title:t.title,records:[t.record],id:t.sectorId})},removeRecord:function(e,t){var n=e.sectorStore.sectors,r=n.findIndex((function(e){return e.records.find((function(e){return e.id===t.id}))})),a=n[r],o=a.records.findIndex((function(e){return e.id===t.id}));a.records.splice(o,1),0===a.records.length&&n.splice(r,1)}},getters:{allRecords:function(e){return R(e.sectorStore.sectors.map((function(e){return e.records})))},record:function(e){return function(t){var n,r=Object(s["a"])(e.sectorStore.sectors);try{for(r.s();!(n=r.n()).done;){var a,o=n.value,c=Object(s["a"])(o.records);try{for(c.s();!(a=c.n()).done;){var i=a.value;if(t===i.id)return i}}catch(u){c.e(u)}finally{c.f()}}}catch(u){r.e(u)}finally{r.f()}}}},actions:{addRecord:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,o,c,i,s,u,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,o=t.title,c=t.record,n.next=4,h(r.ADD_RECORD,{title:o,record:c});case 4:i=n.sent,s=null===i||void 0===i?void 0:i.data,u=s.recordId,d=s.sectorId,c.id=u,a("pushRecord",{title:o,record:c,sectorId:d});case 8:case"end":return n.stop()}}),n)})))()},updateRecord:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return Object(c["a"])(e),n.next=3,h(r.UPDATE_RECORDS,{records:[t]});case 3:case"end":return n.stop()}}),n)})))()},removeRecord:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,b(r.DELETE_RECORD,t);case 3:a("removeRecord",t);case 4:case"end":return n.stop()}}),n)})))()},updateRecords:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return Object(c["a"])(e),n.next=3,h(r.UPDATE_RECORDS,{records:t});case 3:case"end":return n.stop()}}),n)})))()},copyPreviousDayPlan:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getters,r=e.dispatch,a=new Date,a.setDate(a.getDate()-1),o=n.allRecords.filter((function(e){var t;return a.toDateString()===(null===(t=e.executionDate)||void 0===t?void 0:t.toDateString())})),o.forEach((function(e){e.executionDate=new Date})),t.next=7,r("updateRecords",o);case 7:case"end":return t.stop()}}),t)})))()}},modules:{sectorStore:T}},P={state:{filterDate:new Date,filterRecords:new Set},mutations:{changeFilterDate:function(e,t){e.filterDate=t,e.filterRecords=new Set},makeRecordsImportant:function(e,t){e.filterRecords=new Set(t)}},getters:{filterDate:function(e){return e.filterDate},isToday:function(e){return(new Date).toDateString()===e.filterDate.toDateString()},todayRecords:function(e,t){var n=t.allRecords;return n.filter((function(t){var n;return(null===(n=t.executionDate)||void 0===n?void 0:n.toDateString())===e.filterDate.toDateString()}))},isImportant:function(e){return function(t){var n;return 0===e.filterRecords.size&&e.filterDate.toDateString()===(null===t||void 0===t||null===(n=t.executionDate)||void 0===n?void 0:n.toDateString())||e.filterRecords.has(t)}}},actions:{chandgeDate:function(e,t){var n=e.commit;n("changeFilterDate",t)}},modules:{recordsStore:I}},N=n("4c06"),j={state:{locale:localStorage.getItem(N["a"].LOCALE)||"en"},mutations:{updateLocale:function(e,t){e.locale=t}},getters:{locale:function(e){return e.locale}},actions:{setLocale:function(e,t){var n=e.commit;localStorage.setItem(N["a"].LOCALE,t),n("updateLocale",t)},changePass:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return Object(c["a"])(e),a=t.oldPass,o=t.newPass,n.next=4,h(r.CHANGE_PASS,{newPass:o,oldPass:a});case 4:case"end":return n.stop()}}),n)})))()}}},C=(n("b0c0"),n("32b5")),L=n("afbc"),M={state:{token:localStorage.getItem(N["a"].TOKEN),name:localStorage.getItem(N["a"].NAME),userId:localStorage.getItem(N["a"].USER_ID),isAdmin:localStorage.getItem(N["a"].IS_ADMIN)},mutations:{auth_success:function(e,t){e.token=t.token,e.name=t.name,e.userId=t.id,e.isAdmin=t.isAdmin},logout:function(e){e.token="",e.name="",e.isAdmin=!1}},getters:{isLoggedIn:function(e){return!!e.token},name:function(e){return e.name},userId:function(e){return e.id},isAdmin:function(e){return e.isAdmin}},actions:{login:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,o,c,i,s,u,d,f;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.commit,o=t.name,c=t.pass,o&&c){n.next=4;break}throw new Error("Name and password can't be empty");case 4:return n.next=6,h(r.LOGIN,t);case 6:if(i=n.sent,s=null===i||void 0===i?void 0:i.data,u=s.token,d=s.id,f=s.isAdmin,!u||!d){n.next=17;break}localStorage.setItem(N["a"].TOKEN,u),localStorage.setItem(N["a"].NAME,o),localStorage.setItem(N["a"].USER_ID,d),localStorage.setItem(N["a"].IS_ADMIN,f),l.a.defaults.headers.common.Authorization=u,a("auth_success",{token:u,name:o,id:d,isAdmin:f}),n.next=18;break;case 17:throw new Error("Login or password is incorrect");case 18:case"end":return n.stop()}}),n)})))()},register:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(Object(c["a"])(e),a=t.name,o=t.pass,a&&o){n.next=4;break}throw new Error("Name and password can't be empty");case 4:return n.next=6,h(r.REGISTER,{name:a,pass:o});case 6:case"end":return n.stop()}}),n)})))()},logout:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,localStorage.removeItem(N["a"].TOKEN),localStorage.removeItem(N["a"].NAME),localStorage.removeItem(N["a"].IS_ADMIN),delete l.a.defaults.headers.common.Authorization,n("logout"),t.next=8,L["a"].push(C["a"].AUTH);case 8:case"end":return t.stop()}}),t)})))()}}},U={state:{users:[]},mutations:{setUsers:function(e,t){e.users=t},deleteUser:function(e,t){var n=e.users;e.users=n.filter((function(e){return e.id!==t}))}},getters:{users:function(e){return e.users}},actions:{loadUsers:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,v(r.GET_USERS);case 3:a=t.sent,o=a.data.users,n("setUsers",o);case 6:case"end":return t.stop()}}),t)})))()},deleteUser:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,o=t.id,n.next=4,b(r.DELETE_USER,{id:o});case 4:c=n.sent,200===c.status&&a("deleteUser",o);case 6:case"end":return n.stop()}}),n)})))()}}};a["default"].use(o["a"]);t["a"]=new o["a"].Store({state:{},mutations:{},getters:{},actions:{},modules:{recordsFilter:P,user:j,auth:M,adminStore:U}})},"0d0f":function(e){e.exports=JSON.parse('{"add_note":"Добавить запись","main":"Главная страница","statistics":"Статистика","delete_sector":"Удалить сектор","acount":"Акаунт","enter_record_text":"Введите текст заметки","enter_sector_title":"Введите название сектора","enter_record":"Запишите заметку","planed_time":"Планируемое время","delete":"Удалить","time_spent":"Потраченное время","edit":"Изменить","change_pass":"Изменить пароль","send":"Отправить","old_pass":"Старый пароль","new_pass":"Новый пароль","repeat_pass":"Повторите пароль","pass_are_diff":"Пароли не совпадают","incorrect_pass":"Неверный пароль","here_should_record":"Здесь должна быть запись","copy_previous_day":"Копировать план предыдущего дня","delete_from_today":"Удалить из плана","not_today":"Нельзя начать выполнять задачу без сегодняшней даты","executionPlanTime_empty":"Необходимо указать планируемое время","enter_sector_record":"Введите название сектора или задачи","left":"Осталось","h":"ч","m":"м","users":"пользователи","confirm_user_delete":"Вы уверены, что хотите удалить этого пользователя?","show":"Просмотреть"}')},"119d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auth__container"},[n("div",{staticClass:"auth"},[n("span",{staticClass:"auth__logo"},[e._v(" LUCA ")]),n("form",{staticClass:"auth__form",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"auth__input luca-input",attrs:{type:"text",name:"login",placeholder:"Login",autocomplete:"on"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("pass-input",{staticClass:"auth__input",attrs:{placeholder:"Password"},model:{value:e.pass,callback:function(t){e.pass=t},expression:"pass"}}),e.isPassRegister?n("pass-input",{staticClass:"auth__input",attrs:{placeholder:"Repeat password"},model:{value:e.repeatPass,callback:function(t){e.repeatPass=t},expression:"repeatPass"}}):e._e(),n("div",{staticClass:"auth__error"},[e._v(e._s(e.errText))]),n("input",{staticClass:"auth__submit",attrs:{type:"submit"},domProps:{value:e.curActionName}})],1),n("router-link",{staticClass:"auth__link-base auth__link-dotted",attrs:{to:""+e.otherActionName,custom:""}},[e._v(" "+e._s(e.otherActionName)+" ")])],1)])},a=[],o=n("1da1"),c=(n("96cf"),n("b0c0"),n("32b5")),i=(n("8cee"),n("2e11")),s={data:function(){return{name:"",pass:"",repeatPass:"",errText:""}},computed:{isPassRegister:function(){var e=this;return e.$route.path===c["a"].REGISTER},curActionName:function(){var e=this;return e.isPassRegister?"register":"entry"},otherActionName:function(){var e=this;return e.isPassRegister?"entry":"register"}},methods:{login:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e,r=n.isPassRegister?"register":"login","register"!==r||n.pass===n.repeatPass){t.next=5;break}return n.errText="Passwords are different",t.abrupt("return");case 5:return a={name:n.name,pass:n.pass},t.prev=6,t.next=9,n.$store.dispatch(r,a);case 9:return t.next=11,n.$router.push(n.isPassRegister?c["a"].AUTH:c["a"].MAIN);case 11:n.name="",n.pass="",n.errText="",t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](6),n.errText=t.t0.message;case 19:case"end":return t.stop()}}),t,null,[[6,16]])})))()}},components:{PassInput:i["a"]}},u=s,d=n("2877"),l=Object(d["a"])(u,r,a,!1,null,null,null);t["default"]=l.exports},1909:function(e){e.exports=JSON.parse('{"add_note":"Add note","main":"Main","statistics":"Statistics","delete_sector":"Delete sector","acount":"Acount","enter_record_text":"Write record text","enter_sector_title":"Write sector title","enter_record":"Write record","planed_time":"Planed time","delete":"Delete","time_spent":"Time spent","edit":"Edit","change_pass":"Change password","send":"Send","old_pass":"Old password","new_pass":"New password","repeat_pass":"Repeat password","pass_are_diff":"Passwords are different","incorrect_pass":"Incorrect password","here_should_record":"Here should be record","copy_previous_day":"Copy previous day plan","delete_from_today":"Delete from plan","not_today":"Can\'t start coutdown on task which is not today","executionPlanTime_empty":"You must indicate the planned time","enter_sector_record":"Write sector or record title","left":"Left","h":"h","m":"m","users":"users","confirm_user_delete":"Are you sure you want delete this user?","show":"show"}')},"2e11":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{key:e.key,staticClass:"pass__container"},[n("input",{staticClass:"luca-input",attrs:{required:"",placeholder:e.placeholder,type:e.inputType},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),n("font-awesome-icon",{staticClass:"pass__eye",attrs:{icon:"eye"},on:{click:function(t){return t.preventDefault(),e.changePassVisibility(t)}}})],1)},a=[],o=(n("764b"),{data:function(){return{inputType:"password",key:0}},methods:{changePassVisibility:function(){var e=this;e.inputType="password"===e.inputType?"text":"password",e.key+=1}},props:["placeholder","value"]}),c=o,i=n("2877"),s=Object(i["a"])(c,r,a,!1,null,null,null);t["a"]=s.exports},"32b5":function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e["DEFAULT"]="/",e["AUTH"]="/auth",e["REGISTER"]="/register",e["MAIN"]="/main",e["WORKSPACE"]="workspace",e["NEW_NOTE"]="new",e["DELETE_SECTOR"]="delete",e["ACOUNT"]="acount",e["EDIT"]="edit/:id",e["PLAN"]="plan",e["ADMIN"]="admin",e["VIEW"]="view/:id"}(r||(r={}))},4490:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("0613"),a=n("0d0f"),o=n("1909"),c={ru:a,en:o};function i(e){var t=r["a"].getters.locale;return c[t][e]||e}},"4c06":function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e["TOKEN"]="token",e["NAME"]="name",e["LOCALE"]="locale",e["USER_ID"]="user_id",e["IS_ADMIN"]="is_admin"}(r||(r={}))},"5c0b":function(e,t,n){"use strict";n("9c0c")},"764b":function(e,t,n){},"8cee":function(e,t,n){},"9c0c":function(e,t,n){},afbc:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0"),n("2ca0"),n("99af");var r=n("32b5"),a=n("0613"),o=n("2b0e"),c=n("8c4f");o["default"].use(c["a"]);var i=[{path:r["a"].AUTH,component:function(){return Promise.resolve().then(n.bind(null,"119d"))}},{path:r["a"].REGISTER,component:function(){return Promise.resolve().then(n.bind(null,"119d"))}},{path:r["a"].MAIN,component:function(){return Promise.all([n.e("chunk-5ad2919d"),n.e("chunk-2d0d676e"),n.e("chunk-d2561644"),n.e("chunk-c4098594")]).then(n.bind(null,"c299"))},children:[{path:r["a"].NEW_NOTE,component:function(){return Promise.all([n.e("chunk-2d0d676e"),n.e("chunk-64928e8e")]).then(n.bind(null,"0c74"))}},{path:r["a"].DELETE_SECTOR,component:function(){return n.e("chunk-e09b06b4").then(n.bind(null,"6a45"))}},{path:r["a"].EDIT,component:function(){return Promise.all([n.e("chunk-2d0d676e"),n.e("chunk-380bed9e")]).then(n.bind(null,"a07b"))}},{path:r["a"].PLAN,component:function(){return Promise.all([n.e("chunk-5ad2919d"),n.e("chunk-18b44151")]).then(n.bind(null,"0434"))}},{path:r["a"].ADMIN,component:function(){return Promise.all([n.e("chunk-5ad2919d"),n.e("chunk-d2561644"),n.e("chunk-704e38e8")]).then(n.bind(null,"4cc2"))},children:[{path:r["a"].VIEW,component:function(){return n.e("chunk-49e06954").then(n.bind(null,"ae11"))}},{path:"*",component:function(){return n.e("chunk-339d4d7a").then(n.bind(null,"18c4"))}},{path:"",component:function(){return n.e("chunk-339d4d7a").then(n.bind(null,"18c4"))}}]},{path:"*",component:function(){return Promise.all([n.e("chunk-5ad2919d"),n.e("chunk-18b44151")]).then(n.bind(null,"0434"))}},{path:"",component:function(){return Promise.all([n.e("chunk-5ad2919d"),n.e("chunk-18b44151")]).then(n.bind(null,"0434"))}}]},{path:"*",component:function(){return a["a"].getters.isLoggedIn?Promise.all([n.e("chunk-5ad2919d"),n.e("chunk-2d0d676e"),n.e("chunk-d2561644"),n.e("chunk-c4098594")]).then(n.bind(null,"c299")):Promise.resolve().then(n.bind(null,"119d"))},children:[{path:"*",component:function(){return Promise.all([n.e("chunk-5ad2919d"),n.e("chunk-18b44151")]).then(n.bind(null,"0434"))}}]}],s=new c["a"]({mode:"history",base:"/static/",routes:i});s.beforeEach((function(e,t,n){var o=e.path,c=[r["a"].AUTH,r["a"].REGISTER],i=a["a"].getters.isLoggedIn,s=a["a"].getters.isAdmin,u=o.startsWith("".concat(r["a"].MAIN,"/").concat(r["a"].ADMIN));s?u?n():n("".concat(r["a"].MAIN,"/").concat(r["a"].ADMIN)):(c.some((function(e){return e===o}))?i&&n(r["a"].MAIN):i?(u&&n(r["a"].MAIN),n()):n(r["a"].AUTH),n())})),t["a"]=s},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c=n("1da1"),i=(n("96cf"),n("d698"),n("119d")),s={created:function(){var e=this;this.$http.interceptors.response.use(void 0,function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(401!==n.response.status){t.next=3;break}return t.next=3,e.$store.dispatch("logout");case 3:throw n;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},components:{Auth:i["default"]}},u=s,d=(n("5c0b"),n("2877")),l=Object(d["a"])(u,a,o,!1,null,null,null),f=l.exports,p=n("9483");Object(p["a"])("".concat("/static/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var h=n("afbc"),m=n("0613"),v=n("bc3a"),g=n.n(v),b=n("ecee"),w=n("c074"),_=n("ad3d"),k=n("f2d1"),E=n("750b");n("fb6a"),n("99af");function R(e){var t;if(!e)return null;e=(null===(t=e)||void 0===t?void 0:t.value)||e;var n=e.getFullYear(),r="0".concat(e.getMonth()+1).slice(-2),a="0".concat(e.getDate()).slice(-2);return"".concat(n,"-").concat(r,"-").concat(a)}n("b65f");var x=n("4490");function S(e){var t=Object(x["a"])("h"),n=Object(x["a"])("m");if(e<=0)return"0".concat(t);var r=Math.trunc(e),a=Math.round(60*(e-r));return(r?"".concat(r).concat(t," "):"")+(a?"".concat(a).concat(n):"")}var y=n("4c06");b["c"].add(w["b"],k["a"],w["e"],w["c"],w["h"],w["a"],w["g"],w["f"],w["d"]),r["default"].component("font-awesome-icon",_["a"]),r["default"].config.productionTip=!1,r["default"].prototype.$http=g.a;var D=localStorage.getItem(y["a"].TOKEN);D&&(r["default"].prototype.$http.defaults.headers.common.Authorization=D),r["default"].use(E["default"]),r["default"].filter("date",R),r["default"].filter("time",S),r["default"].filter("locale",x["a"]),new r["default"]({router:h["a"],store:m["a"],render:function(e){return e(f)}}).$mount("#app")},d698:function(e,t,n){},db90:function(e){e.exports=JSON.parse('{"url":""}')}});
//# sourceMappingURL=app.a1578ea1.js.map