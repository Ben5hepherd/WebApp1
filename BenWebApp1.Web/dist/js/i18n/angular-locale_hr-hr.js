"use strict";angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");return e==-1?0:a.length-e-1}function r(a,r){var n=r;void 0===n&&(n=Math.min(e(a),3));var o=Math.pow(10,n),i=(a*o|0)%o;return{v:n,f:i}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"],ERANAMES:["prije Krista","poslije Krista"],ERAS:["pr. Kr.","po. Kr."],FIRSTDAYOFWEEK:0,MONTH:["siječnja","veljače","ožujka","travnja","svibnja","lipnja","srpnja","kolovoza","rujna","listopada","studenoga","prosinca"],SHORTDAY:["ned","pon","uto","sri","čet","pet","sub"],SHORTMONTH:["sij","velj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],STANDALONEMONTH:["siječanj","veljača","ožujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d. MMMM y.",longDate:"d. MMMM y.",medium:"d. MMM y. HH:mm:ss",mediumDate:"d. MMM y.",mediumTime:"HH:mm:ss","short":"dd. MM. y. HH:mm",shortDate:"dd. MM. y.",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"kn",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"hr-hr",localeID:"hr_HR",pluralCat:function(a,e){var o=0|a,i=r(a,e);return 0==i.v&&o%10==1&&o%100!=11||i.f%10==1&&i.f%100!=11?n.ONE:0==i.v&&o%10>=2&&o%10<=4&&(o%100<12||o%100>14)||i.f%10>=2&&i.f%10<=4&&(i.f%100<12||i.f%100>14)?n.FEW:n.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_hr-hr.js.map
