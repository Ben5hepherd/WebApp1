"use strict";angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return a==-1?0:e.length-a-1}function r(e,r){var n=r;void 0===n&&(n=Math.min(a(e),3));var o=Math.pow(10,n),t=(e*o|0)%o;return{v:n,f:t}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["pre podne","po podne"],DAY:["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],ERANAMES:["pre nove ere","nove ere"],ERAS:["p. n. e.","n. e."],FIRSTDAYOFWEEK:0,MONTH:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],SHORTDAY:["ned","pon","uto","sre","čet","pet","sub"],SHORTMONTH:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],STANDALONEMONTH:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],WEEKENDRANGE:[5,6],fullDate:"EEEE, dd. MMMM y.",longDate:"dd. MMMM y.",medium:"dd.MM.y. HH:mm:ss",mediumDate:"dd.MM.y.",mediumTime:"HH:mm:ss","short":"d.M.yy. HH:mm",shortDate:"d.M.yy.",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"din",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"sh",localeID:"sh",pluralCat:function(e,a){var o=0|e,t=r(e,a);return 0==t.v&&o%10==1&&o%100!=11||t.f%10==1&&t.f%100!=11?n.ONE:0==t.v&&o%10>=2&&o%10<=4&&(o%100<12||o%100>14)||t.f%10>=2&&t.f%10<=4&&(t.f%100<12||t.f%100>14)?n.FEW:n.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_sh.js.map