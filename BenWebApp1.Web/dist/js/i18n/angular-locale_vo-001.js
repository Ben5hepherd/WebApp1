"use strict";angular.module("ngLocale",[],["$provide",function(u){function e(u){u+="";var e=u.indexOf(".");return e==-1?0:u.length-e-1}function l(u,l){var n=l;void 0===n&&(n=Math.min(e(u),3));var t=Math.pow(10,n),r=(u*t|0)%t;return{v:n,f:r}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};u.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["sudel","mudel","tudel","vedel","dödel","fridel","zädel"],ERANAMES:["b. t. kr.","p. t. kr."],ERAS:["b. t. kr.","p. t. kr."],FIRSTDAYOFWEEK:0,MONTH:["yanul","febul","mäzul","prilul","mayul","yunul","yulul","gustul","setul","tobul","novul","dekul"],SHORTDAY:["su.","mu.","tu.","ve.","dö.","fr.","zä."],SHORTMONTH:["yan","feb","mäz","prl","may","yun","yul","gst","set","ton","nov","dek"],STANDALONEMONTH:["yanul","febul","mäzul","prilul","mayul","yunul","yulul","gustul","setul","tobul","novul","dekul"],WEEKENDRANGE:[5,6],fullDate:"y MMMM'a' 'd'. d'id'",longDate:"y MMMM d",medium:"y MMM. d HH:mm:ss",mediumDate:"y MMM. d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"vo-001",localeID:"vo_001",pluralCat:function(u,e){var t=0|u,r=l(u,e);return 1==t&&0==r.v?n.ONE:n.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_vo-001.js.map
