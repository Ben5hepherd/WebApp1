"use strict";angular.module("ngLocale",[],["$provide",function(i){function e(i){i+="";var e=i.indexOf(".");return e==-1?0:i.length-e-1}function n(i,n){var o=n;void 0===o&&(o=Math.min(e(i),3));var t=Math.pow(10,o),m=(i*t|0)%t;return{v:o,f:m}}var o={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};i.value("$locale",{DATETIME_FORMATS:{AMPMS:["kiɛmɛ́ɛm","kisɛ́ndɛ"],DAY:["sɔ́ndiɛ","móndie","muányáŋmóndie","metúkpíápɛ","kúpélimetúkpiapɛ","feléte","séselé"],ERANAMES:["katikupíen Yésuse","ékélémkúnupíén n"],ERAS:["k.Y.","+J.C."],FIRSTDAYOFWEEK:0,MONTH:["pikítíkítie, oólí ú kutúan","siɛyɛ́, oóli ú kándíɛ","ɔnsúmbɔl, oóli ú kátátúɛ","mesiŋ, oóli ú kénie","ensil, oóli ú kátánuɛ","ɔsɔn","efute","pisuyú","imɛŋ i puɔs","imɛŋ i putúk,oóli ú kátíɛ","makandikɛ","pilɔndɔ́"],SHORTDAY:["sd","md","mw","et","kl","fl","ss"],SHORTMONTH:["o.1","o.2","o.3","o.4","o.5","o.6","o.7","o.8","o.9","o.10","o.11","o.12"],STANDALONEMONTH:["pikítíkítie, oólí ú kutúan","siɛyɛ́, oóli ú kándíɛ","ɔnsúmbɔl, oóli ú kátátúɛ","mesiŋ, oóli ú kénie","ensil, oóli ú kátánuɛ","ɔsɔn","efute","pisuyú","imɛŋ i puɔs","imɛŋ i putúk,oóli ú kátíɛ","makandikɛ","pilɔndɔ́"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"yav",localeID:"yav",pluralCat:function(i,e){var t=0|i,m=n(i,e);return 1==t&&0==m.v?o.ONE:o.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_yav.js.map
