"use strict";angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return a==-1?0:e.length-a-1}function n(e,n){var r=n;void 0===r&&(r=Math.min(a(e),3));var i=Math.pow(10,r),m=(e*i|0)%i;return{v:r,f:m}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["sabaat","ataasinngorneq","marlunngorneq","pingasunngorneq","sisamanngorneq","tallimanngorneq","arfininngorneq"],ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:0,MONTH:["januari","februari","martsi","aprili","maji","juni","juli","augustusi","septemberi","oktoberi","novemberi","decemberi"],SHORTDAY:["sab","ata","mar","pin","sis","tal","arf"],SHORTMONTH:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],STANDALONEMONTH:["januari","februari","martsi","aprili","maji","juni","juli","augustusi","septemberi","oktoberi","novemberi","decemberi"],WEEKENDRANGE:[5,6],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"kr.",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"kl",localeID:"kl",pluralCat:function(e,a){var i=0|e,m=n(e,a);return 1==i&&0==m.v?r.ONE:r.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_kl.js.map
