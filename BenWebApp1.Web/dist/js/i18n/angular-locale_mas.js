"use strict";angular.module("ngLocale",[],["$provide",function(n){function a(n){n+="";var a=n.indexOf(".");return a==-1?0:n.length-a-1}function r(n,r){var e=r;void 0===e&&(e=Math.min(a(n),3));var m=Math.pow(10,e),M=(n*m|0)%m;return{v:e,f:M}}var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};n.value("$locale",{DATETIME_FORMATS:{AMPMS:["Ɛnkakɛnyá","Ɛndámâ"],DAY:["Jumapílí","Jumatátu","Jumane","Jumatánɔ","Alaámisi","Jumáa","Jumamósi"],ERANAMES:["Meínō Yɛ́sʉ","Eínō Yɛ́sʉ"],ERAS:["MY","EY"],FIRSTDAYOFWEEK:6,MONTH:["Oladalʉ́","Arát","Ɔɛnɨ́ɔɨŋɔk","Olodoyíóríê inkókúâ","Oloilépūnyīē inkókúâ","Kújúɔrɔk","Mórusásin","Ɔlɔ́ɨ́bɔ́rárɛ","Kúshîn","Olgísan","Pʉshʉ́ka","Ntʉ́ŋʉ́s"],SHORTDAY:["Jpi","Jtt","Jnn","Jtn","Alh","Iju","Jmo"],SHORTMONTH:["Dal","Ará","Ɔɛn","Doy","Lép","Rok","Sás","Bɔ́r","Kús","Gís","Shʉ́","Ntʉ́"],STANDALONEMONTH:["Oladalʉ́","Arát","Ɔɛnɨ́ɔɨŋɔk","Olodoyíóríê inkókúâ","Oloilépūnyīē inkókúâ","Kújúɔrɔk","Mórusásin","Ɔlɔ́ɨ́bɔ́rárɛ","Kúshîn","Olgísan","Pʉshʉ́ka","Ntʉ́ŋʉ́s"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd/MM/y HH:mm",shortDate:"dd/MM/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"mas",localeID:"mas",pluralCat:function(n,a){var m=0|n,M=r(n,a);return 1==m&&0==M.v?e.ONE:e.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_mas.js.map
