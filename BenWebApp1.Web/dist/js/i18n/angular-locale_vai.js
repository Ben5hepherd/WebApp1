"use strict";angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");return M==-1?0:e.length-M-1}function a(e,a){var E=a;void 0===E&&(E=Math.min(M(e),3));var n=Math.pow(10,E),r=(e*n|0)%n;return{v:E,f:r}}var E={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["ꕞꕌꔵ","ꗳꗡꘉ","ꕚꕞꕚ","ꕉꕞꕒ","ꕉꔤꕆꕢ","ꕉꔤꕀꕮ","ꔻꔬꔳ"],ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:0,MONTH:["ꖨꕪꖃ ꔞꕮ","ꕒꕡꖝꖕ","ꕾꖺ","ꖢꖕ","ꖑꕱ","6","7","ꗛꔕ","ꕢꕌ","ꕭꖃ","ꔞꘋꕔꕿ ꕸꖃꗏ","ꖨꕪꕱ ꗏꕮ"],SHORTDAY:["ꕞꕌꔵ","ꗳꗡꘉ","ꕚꕞꕚ","ꕉꕞꕒ","ꕉꔤꕆꕢ","ꕉꔤꕀꕮ","ꔻꔬꔳ"],SHORTMONTH:["ꖨꕪꖃ ꔞꕮ","ꕒꕡꖝꖕ","ꕾꖺ","ꖢꖕ","ꖑꕱ","6","7","ꗛꔕ","ꕢꕌ","ꕭꖃ","ꔞꘋꕔꕿ ꕸꖃꗏ","ꖨꕪꕱ ꗏꕮ"],STANDALONEMONTH:["ꖨꕪꖃ ꔞꕮ","ꕒꕡꖝꖕ","ꕾꖺ","ꖢꖕ","ꖑꕱ","6","7","ꗛꔕ","ꕢꕌ","ꕭꖃ","ꔞꘋꕔꕿ ꕸꖃꗏ","ꖨꕪꕱ ꗏꕮ"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"vai",localeID:"vai",pluralCat:function(e,M){var n=0|e,r=a(e,M);return 1==n&&0==r.v?E.ONE:E.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_vai.js.map
