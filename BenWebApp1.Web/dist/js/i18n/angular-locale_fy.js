"use strict";angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");return r==-1?0:e.length-r-1}function i(e,i){var n=i;void 0===n&&(n=Math.min(r(e),3));var a=Math.pow(10,n),M=(e*a|0)%a;return{v:n,f:M}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["snein","moandei","tiisdei","woansdei","tongersdei","freed","sneon"],ERANAMES:["Foar Kristus","nei Kristus"],ERAS:["f.Kr.","n.Kr."],FIRSTDAYOFWEEK:0,MONTH:["Jannewaris","Febrewaris","Maart","April","Maaie","Juny","July","Augustus","Septimber","Oktober","Novimber","Desimber"],SHORTDAY:["si","mo","ti","wo","to","fr","so"],SHORTMONTH:["Jan","Feb","Mrt","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"],STANDALONEMONTH:["Jannewaris","Febrewaris","Maart","April","Maaie","Juny","July","Augustus","Septimber","Oktober","Novimber","Desimber"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd-MM-yy HH:mm",shortDate:"dd-MM-yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ ",negSuf:"-",posPre:"¤ ",posSuf:""}]},id:"fy",localeID:"fy",pluralCat:function(e,r){var a=0|e,M=i(e,r);return 1==a&&0==M.v?n.ONE:n.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_fy.js.map
