"use strict";angular.module("ngLocale",[],["$provide",function(a){function i(a){a+="";var i=a.indexOf(".");return i==-1?0:a.length-i-1}function M(a,M){var e=M;void 0===e&&(e=Math.min(i(a),3));var n=Math.pow(10,e),l=(a*n|0)%n;return{v:e,f:l}}var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Sonto","Mvulo","Sibili","Sithathu","Sine","Sihlanu","Mgqibelo"],ERANAMES:["UKristo angakabuyi","Ukristo ebuyile"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["Zibandlela","Nhlolanja","Mbimbitho","Mabasa","Nkwenkwezi","Nhlangula","Ntulikazi","Ncwabakazi","Mpandula","Mfumfu","Lwezi","Mpalakazi"],SHORTDAY:["Son","Mvu","Sib","Sit","Sin","Sih","Mgq"],SHORTMONTH:["Zib","Nhlo","Mbi","Mab","Nkw","Nhla","Ntu","Ncw","Mpan","Mfu","Lwe","Mpal"],STANDALONEMONTH:["Zibandlela","Nhlolanja","Mbimbitho","Mabasa","Nkwenkwezi","Nhlangula","Ntulikazi","Ncwabakazi","Mpandula","Mfumfu","Lwezi","Mpalakazi"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd/MM/y HH:mm",shortDate:"dd/MM/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"nd-zw",localeID:"nd_ZW",pluralCat:function(a,i){var n=0|a,l=M(a,i);return 1==n&&0==l.v?e.ONE:e.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_nd-zw.js.map
