"use strict";angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");return e==-1?0:a.length-e-1}function i(a,i){var m=i;void 0===m&&(m=Math.min(e(a),3));var n=Math.pow(10,m),t=(a*n|0)%n;return{v:m,f:t}}var m={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["makeo","nyiaghuo"],DAY:["Jumaapii","Jumaatatu","Jumaane","Jumaatano","Alhamisi","Ijumaa","Jumaamosi"],ERANAMES:["Kabla ya Klisto","Baada ya Klisto"],ERAS:["KK","BK"],FIRSTDAYOFWEEK:0,MONTH:["Januali","Febluali","Machi","Aplili","Mei","Juni","Julai","Agosti","Septemba","Oktoba","Novemba","Desemba"],SHORTDAY:["Jpi","Jtt","Jmn","Jtn","Alh","Iju","Jmo"],SHORTMONTH:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ago","Sep","Okt","Nov","Des"],STANDALONEMONTH:["Januali","Febluali","Machi","Aplili","Mei","Juni","Julai","Agosti","Septemba","Oktoba","Novemba","Desemba"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd/MM/y HH:mm",shortDate:"dd/MM/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"TSh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:0,minFrac:0,minInt:1,negPre:"-",negSuf:"¤",posPre:"",posSuf:"¤"}]},id:"ksb-tz",localeID:"ksb_TZ",pluralCat:function(a,e){var n=0|a,t=i(a,e);return 1==n&&0==t.v?m.ONE:m.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_ksb-tz.js.map
