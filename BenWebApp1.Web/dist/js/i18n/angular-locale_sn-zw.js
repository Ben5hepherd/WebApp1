"use strict";angular.module("ngLocale",[],["$provide",function(u){function a(u){u+="";var a=u.indexOf(".");return a==-1?0:u.length-a-1}function i(u,i){var r=i;void 0===r&&(r=Math.min(a(u),3));var e=Math.pow(10,r),n=(u*e|0)%e;return{v:r,f:n}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};u.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Svondo","Muvhuro","Chipiri","Chitatu","China","Chishanu","Mugovera"],ERANAMES:["Kristo asati auya","mugore ramambo vedu"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["Ndira","Kukadzi","Kurume","Kubvumbi","Chivabvu","Chikumi","Chikunguru","Nyamavhuvhu","Gunyana","Gumiguru","Mbudzi","Zvita"],SHORTDAY:["Svo","Muv","Chp","Cht","Chn","Chs","Mug"],SHORTMONTH:["Ndi","Kuk","Kur","Kub","Chv","Chk","Chg","Nya","Gun","Gum","Mbu","Zvi"],STANDALONEMONTH:["Ndira","Kukadzi","Kurume","Kubvumbi","Chivabvu","Chikumi","Chikunguru","Nyamavhuvhu","Gunyana","Gumiguru","Mbudzi","Zvita"],WEEKENDRANGE:[5,6],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"sn-zw",localeID:"sn_ZW",pluralCat:function(u,a){var e=0|u,n=i(u,a);return 1==e&&0==n.v?r.ONE:r.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_sn-zw.js.map
