"use strict";angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");return r==-1?0:e.length-r-1}function o(e,o){var M=o;void 0===M&&(M=Math.min(r(e),3));var a=Math.pow(10,M),n=(e*a|0)%a;return{v:M,f:n}}var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Linggo","Lunes","Martes","Miyerkules","Huwebes","Biyernes","Sabado"],ERANAMES:["BC","AD"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],SHORTDAY:["Lin","Lun","Mar","Miy","Huw","Biy","Sab"],SHORTMONTH:["Ene","Peb","Mar","Abr","May","Hun","Hul","Ago","Set","Okt","Nob","Dis"],STANDALONEMONTH:["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"₱",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"fil",localeID:"fil",pluralCat:function(e,r){var a=0|e,n=o(e,r);return 0==n.v&&(1==a||2==a||3==a)||0==n.v&&a%10!=4&&a%10!=6&&a%10!=9||0!=n.v&&n.f%10!=4&&n.f%10!=6&&n.f%10!=9?M.ONE:M.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_fil.js.map
