"use strict";angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");return M==-1?0:e.length-M-1}function n(e,n){var r=n;void 0===r&&(r=Math.min(M(e),3));var E=Math.pow(10,r),a=(e*E|0)%E;return{v:r,f:a}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:5,MONTH:["جانڤیە","فئڤریە","مارس","آڤریل","مئی","جوٙأن","جوٙلا","آگوست","سئپتامر","ئوکتوڤر","نوڤامر","دئسامر"],SHORTDAY:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],SHORTMONTH:["جانڤیە","فئڤریە","مارس","آڤریل","مئی","جوٙأن","جوٙلا","آگوست","سئپتامر","ئوکتوڤر","نوڤامر","دئسامر"],STANDALONEMONTH:["جانڤیە","فئڤریە","مارس","آڤریل","مئی","جوٙأن","جوٙلا","آگوست","سئپتامر","ئوکتوڤر","نوڤامر","دئسامر"],WEEKENDRANGE:[4,4],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Rial",DECIMAL_SEP:"٫",GROUP_SEP:"٬",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:0,minFrac:0,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"lrc-ir",localeID:"lrc_IR",pluralCat:function(e,M){var E=0|e,a=n(e,M);return 1==E&&0==a.v?r.ONE:r.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_lrc-ir.js.map
