"use strict";angular.module("ngLocale",[],["$provide",function(e){var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],ERANAMES:["avant Jésus-Christ","après Jésus-Christ"],ERAS:["av. J.-C.","ap. J.-C."],FIRSTDAYOFWEEK:5,MONTH:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],SHORTDAY:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],SHORTMONTH:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],STANDALONEMONTH:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],WEEKENDRANGE:[4,5],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"din",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"fr-dz",localeID:"fr_DZ",pluralCat:function(e,a){var i=0|e;return 0==i||1==i?r.ONE:r.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_fr-dz.js.map
