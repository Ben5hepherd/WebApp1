"use strict";angular.module("ngLocale",[],["$provide",function(u){function m(u){u+="";var m=u.indexOf(".");return m==-1?0:u.length-m-1}function n(u,n){var e=n;void 0===e&&(e=Math.min(m(u),3));var o=Math.pow(10,e),i=(u*o|0)%o;return{v:e,f:i}}var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};u.value("$locale",{DATETIME_FORMATS:{AMPMS:["ip.","ep."],DAY:["pasepeeivi","vuossaargâ","majebaargâ","koskoho","tuorâstuv","vástuppeeivi","lávurduv"],ERANAMES:["Ovdil Kristus šoddâm","maŋa Kristus šoddâm"],ERAS:["oKr.","mKr."],FIRSTDAYOFWEEK:0,MONTH:["uđđâivemáánu","kuovâmáánu","njuhčâmáánu","cuáŋuimáánu","vyesimáánu","kesimáánu","syeinimáánu","porgemáánu","čohčâmáánu","roovvâdmáánu","skammâmáánu","juovlâmáánu"],SHORTDAY:["pas","vuo","maj","kos","tuo","vás","láv"],SHORTMONTH:["uđiv","kuovâ","njuhčâ","cuáŋui","vyesi","kesi","syeini","porge","čohčâ","roovvâd","skammâ","juovlâ"],STANDALONEMONTH:["uđđâivemáánu","kuovâmáánu","njuhčâmáánu","cuáŋuimáánu","vyesimáánu","kesimáánu","syeinimáánu","porgemáánu","čohčâmáánu","roovvâdmáánu","skammâmáánu","juovlâmáánu"],WEEKENDRANGE:[5,6],fullDate:"cccc, MMMM d. y",longDate:"MMMM d. y",medium:"MMM d. y H.mm.ss",mediumDate:"MMM d. y",mediumTime:"H.mm.ss","short":"d.M.y H.mm",shortDate:"d.M.y",shortTime:"H.mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"smn",localeID:"smn",pluralCat:function(u,m){var o=0|u,i=n(u,m);return 1==o&&0==i.v?e.ONE:e.OTHER}})}]);
//# sourceMappingURL=../maps/i18n/angular-locale_smn.js.map