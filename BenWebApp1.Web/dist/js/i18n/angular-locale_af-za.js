"use strict";angular.module("ngLocale",[],["$provide",function(e){var a={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["vm.","nm."],DAY:["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"],ERANAMES:["voor Christus","na Christus"],ERAS:["v.C.","n.C."],FIRSTDAYOFWEEK:6,MONTH:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"],SHORTDAY:["So.","Ma.","Di.","Wo.","Do.","Vr.","Sa."],SHORTMONTH:["Jan.","Feb.","Mrt.","Apr.","Mei","Jun.","Jul.","Aug.","Sep.","Okt.","Nov.","Des."],STANDALONEMONTH:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"],WEEKENDRANGE:[5,6],fullDate:"EEEE, dd MMMM y",longDate:"dd MMMM y",medium:"dd MMM y HH:mm:ss",mediumDate:"dd MMM y",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"R",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"af-za",localeID:"af_ZA",pluralCat:function(e,r){return 1==e?a.ONE:a.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_af-za.js.map
