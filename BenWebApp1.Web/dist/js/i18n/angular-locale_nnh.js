"use strict";angular.module("ngLocale",[],["$provide",function(s){function a(s){s+="";var a=s.indexOf(".");return a==-1?0:s.length-a-1}function m(s,m){var t=m;void 0===t&&(t=Math.min(a(s),3));var e=Math.pow(10,t),n=(s*e|0)%e;return{v:t,f:n}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};s.value("$locale",{DATETIME_FORMATS:{AMPMS:["mbaʼámbaʼ","ncwònzém"],DAY:["lyɛʼɛ́ sẅíŋtè","mvfò lyɛ̌ʼ","mbɔ́ɔntè mvfò lyɛ̌ʼ","tsètsɛ̀ɛ lyɛ̌ʼ","mbɔ́ɔntè tsetsɛ̀ɛ lyɛ̌ʼ","mvfò màga lyɛ̌ʼ","màga lyɛ̌ʼ"],ERANAMES:["mé zyé Yěsô","mé gÿo ńzyé Yěsô"],ERAS:["m.z.Y.","m.g.n.Y."],FIRSTDAYOFWEEK:0,MONTH:["saŋ tsetsɛ̀ɛ lùm","saŋ kàg ngwóŋ","saŋ lepyè shúm","saŋ cÿó","saŋ tsɛ̀ɛ cÿó","saŋ njÿoláʼ","saŋ tyɛ̀b tyɛ̀b mbʉ̀ŋ","saŋ mbʉ̀ŋ","saŋ ngwɔ̀ʼ mbÿɛ","saŋ tàŋa tsetsáʼ","saŋ mejwoŋó","saŋ lùm"],SHORTDAY:["lyɛʼɛ́ sẅíŋtè","mvfò lyɛ̌ʼ","mbɔ́ɔntè mvfò lyɛ̌ʼ","tsètsɛ̀ɛ lyɛ̌ʼ","mbɔ́ɔntè tsetsɛ̀ɛ lyɛ̌ʼ","mvfò màga lyɛ̌ʼ","màga lyɛ̌ʼ"],SHORTMONTH:["saŋ tsetsɛ̀ɛ lùm","saŋ kàg ngwóŋ","saŋ lepyè shúm","saŋ cÿó","saŋ tsɛ̀ɛ cÿó","saŋ njÿoláʼ","saŋ tyɛ̀b tyɛ̀b mbʉ̀ŋ","saŋ mbʉ̀ŋ","saŋ ngwɔ̀ʼ mbÿɛ","saŋ tàŋa tsetsáʼ","saŋ mejwoŋó","saŋ lùm"],STANDALONEMONTH:["saŋ tsetsɛ̀ɛ lùm","saŋ kàg ngwóŋ","saŋ lepyè shúm","saŋ cÿó","saŋ tsɛ̀ɛ cÿó","saŋ njÿoláʼ","saŋ tyɛ̀b tyɛ̀b mbʉ̀ŋ","saŋ mbʉ̀ŋ","saŋ ngwɔ̀ʼ mbÿɛ","saŋ tàŋa tsetsáʼ","saŋ mejwoŋó","saŋ lùm"],WEEKENDRANGE:[5,6],fullDate:"EEEE , 'lyɛ'̌ʼ d 'na' MMMM, y",longDate:"'lyɛ'̌ʼ d 'na' MMMM, y",medium:"d MMM, y HH:mm:ss",mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"dd/MM/yy HH:mm",shortDate:"dd/MM/yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"nnh",localeID:"nnh",pluralCat:function(s,a){var e=0|s,n=m(s,a);return 1==e&&0==n.v?t.ONE:t.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_nnh.js.map
