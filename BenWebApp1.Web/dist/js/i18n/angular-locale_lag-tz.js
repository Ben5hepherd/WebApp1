"use strict";angular.module("ngLocale",[],["$provide",function(a){function n(a){a+="";var n=a.indexOf(".");return n==-1?0:a.length-n-1}function i(a,i){var e=i;void 0===e&&(e=Math.min(n(a),3));var t=Math.pow(10,e),m=(a*t|0)%t;return{v:e,f:m}}var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["TOO","MUU"],DAY:["Jumapíiri","Jumatátu","Jumaíne","Jumatáano","Alamíisi","Ijumáa","Jumamóosi"],ERANAMES:["Kɨrɨsitʉ sɨ anavyaal","Kɨrɨsitʉ akavyaalwe"],ERAS:["KSA","KA"],FIRSTDAYOFWEEK:0,MONTH:["Kʉfúngatɨ","Kʉnaanɨ","Kʉkeenda","Kwiikumi","Kwiinyambála","Kwiidwaata","Kʉmʉʉnchɨ","Kʉvɨɨrɨ","Kʉsaatʉ","Kwiinyi","Kʉsaano","Kʉsasatʉ"],SHORTDAY:["Píili","Táatu","Íne","Táano","Alh","Ijm","Móosi"],SHORTMONTH:["Fúngatɨ","Naanɨ","Keenda","Ikúmi","Inyambala","Idwaata","Mʉʉnchɨ","Vɨɨrɨ","Saatʉ","Inyi","Saano","Sasatʉ"],STANDALONEMONTH:["Kʉfúngatɨ","Kʉnaanɨ","Kʉkeenda","Kwiikumi","Kwiinyambála","Kwiidwaata","Kʉmʉʉnchɨ","Kʉvɨɨrɨ","Kʉsaatʉ","Kwiinyi","Kʉsaano","Kʉsasatʉ"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd/MM/y HH:mm",shortDate:"dd/MM/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"TSh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:0,minFrac:0,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"lag-tz",localeID:"lag_TZ",pluralCat:function(a,n){var t=0|a,m=i(a,n);return 1==t&&0==m.v?e.ONE:e.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_lag-tz.js.map