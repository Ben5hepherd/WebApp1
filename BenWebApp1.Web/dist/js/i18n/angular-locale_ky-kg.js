"use strict";angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["таңкы","түштөн кийинки"],DAY:["жекшемби","дүйшөмбү","шейшемби","шаршемби","бейшемби","жума","ишемби"],ERANAMES:["биздин заманга чейин","биздин заман"],ERAS:["б.з.ч.","б.з."],FIRSTDAYOFWEEK:0,MONTH:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],SHORTDAY:["жек.","дүй.","шейш.","шарш.","бейш.","жума","ишм."],SHORTMONTH:["янв.","фев.","мар.","апр.","май","июн.","июл.","авг.","сен.","окт.","ноя.","дек."],STANDALONEMONTH:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],WEEKENDRANGE:[5,6],fullDate:"y-'ж'., d-MMMM, EEEE",longDate:"y-'ж'., d-MMMM",medium:"y-'ж'., d-MMM HH:mm:ss",mediumDate:"y-'ж'., d-MMM",mediumTime:"HH:mm:ss","short":"d/M/yy HH:mm",shortDate:"d/M/yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"KGS",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"ky-kg",localeID:"ky_KG",pluralCat:function(e,E){return 1==e?M.ONE:M.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_ky-kg.js.map