"use strict";angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");return e==-1?0:a.length-e-1}function i(a,i){var u=i;void 0===u&&(u=Math.min(e(a),3));var n=Math.pow(10,u),r=(a*n|0)%n;return{v:u,f:r}}var u={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["utuko","kyiukonyi"],DAY:["Jumapilyi","Jumatatuu","Jumanne","Jumatanu","Alhamisi","Ijumaa","Jumamosi"],ERANAMES:["Kabla ya Kristu","Baada ya Kristu"],ERAS:["KK","BK"],FIRSTDAYOFWEEK:0,MONTH:["Januari","Februari","Machi","Aprilyi","Mei","Junyi","Julyai","Agusti","Septemba","Oktoba","Novemba","Desemba"],SHORTDAY:["Jpi","Jtt","Jnn","Jtn","Alh","Iju","Jmo"],SHORTMONTH:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ago","Sep","Okt","Nov","Des"],STANDALONEMONTH:["Januari","Februari","Machi","Aprilyi","Mei","Junyi","Julyai","Agusti","Septemba","Oktoba","Novemba","Desemba"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd/MM/y HH:mm",shortDate:"dd/MM/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"TSh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:0,minFrac:0,minInt:1,negPre:"-",negSuf:"¤",posPre:"",posSuf:"¤"}]},id:"rwk-tz",localeID:"rwk_TZ",pluralCat:function(a,e){var n=0|a,r=i(a,e);return 1==n&&0==r.v?u.ONE:u.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_rwk-tz.js.map
