"use strict";angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return a==-1?0:e.length-a-1}function M(e,M){var r=M;void 0===r&&(r=Math.min(a(e),3));var n=Math.pow(10,r),E=(e*n|0)%n;return{v:r,f:E}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ب.ن","د.ن"],DAY:["یەکشەممە","دووشەممە","سێشەممە","چوارشەممە","پێنجشەممە","ھەینی","شەممە"],ERANAMES:["پێش زایین","زایینی"],ERAS:["پ.ن","ز"],FIRSTDAYOFWEEK:5,MONTH:["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم"],SHORTDAY:["یەکشەممە","دووشەممە","سێشەممە","چوارشەممە","پێنجشەممە","ھەینی","شەممە"],SHORTMONTH:["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم"],STANDALONEMONTH:["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم"],WEEKENDRANGE:[4,5],fullDate:"y MMMM d, EEEE",longDate:"dی MMMMی y",medium:"y MMM d h:mm:ss a",mediumDate:"y MMM d",mediumTime:"h:mm:ss a","short":"y-MM-dd h:mm a",shortDate:"y-MM-dd",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Rial",DECIMAL_SEP:"٫",GROUP_SEP:"٬",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"ckb-arab-ir",localeID:"ckb_Arab_IR",pluralCat:function(e,a){var n=0|e,E=M(e,a);return 1==n&&0==E.v?r.ONE:r.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_ckb-arab-ir.js.map