(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"c:\\dev2014\\node_modules\\brahmicscripts\\burmese2roman.js":[function(require,module,exports){

var vowels=[];
vowels["အ".charCodeAt(0)]="a";
//vowels["အာ".charCodeAt(0)]="ā";
vowels["ာ".charCodeAt(0)]="ā";
vowels["ါ".charCodeAt(0)]="ā";

vowels["ဣ".charCodeAt(0)]="i";
vowels["ဤ".charCodeAt(0)]="ī";
vowels["ိ".charCodeAt(0)]="i";
vowels["ီ".charCodeAt(0)]="ī";

vowels["ဥ".charCodeAt(0)]="u";
vowels["ဦ".charCodeAt(0)]="ū";
vowels["ု".charCodeAt(0)]="u";
vowels["ဳ".charCodeAt(0)]="u";
vowels["ူ".charCodeAt(0)]="ū";
vowels["ဴ".charCodeAt(0)]="ū";


vowels["ဧ".charCodeAt(0)]="e";
//vowels["ေ".charCodeAt(0)]="e";
//vowels["ဧ".charCodeAt(0)]="e";

//vowels["ऐ".charCodeAt(0)]="ai"; 
//vowels["े".charCodeAt(0)]="e";
//vowels["ै".charCodeAt(0)]="ai";
	
vowels["ဩ".charCodeAt(0)]="o";
//vowels["ဩ".charCodeAt(0)]="o";
//vowels["औ".charCodeAt(0)]="au";
//vowels["ो".charCodeAt(0)]="o";
//vowels["ौ".charCodeAt(0)]="au";
	
//vowels["ऋ".charCodeAt(0)]="ṛ";
//vowels["ॠ".charCodeAt(0)]="ṝ";
//vowels["ृ".charCodeAt(0)]="ṛ";
//vowels["ॄ".charCodeAt(0)]="ṝ";

vowels["ဠ".charCodeAt(0)]="ḷ";

/*
vowels["ॢ".charCodeAt(0)]="ḷ";
vowels["ॣ".charCodeAt(0)]="ḹ";
*/	
vowels["ံ".charCodeAt(0)]="ṃ";
//vowels["ः".charCodeAt(0)]="ḥ";



var consonants=[];
consonants["က".charCodeAt(0)]="k";
consonants["ခ".charCodeAt(0)]="kh";
consonants["ဂ".charCodeAt(0)]="g";
consonants["ဃ".charCodeAt(0)]="gh";
consonants["င".charCodeAt(0)]="ṅ";
consonants["စ".charCodeAt(0)]="c";
consonants["ၸ".charCodeAt(0)]="c";
consonants["ဆ".charCodeAt(0)]="ch";
consonants["ဇ".charCodeAt(0)]="j";
consonants["ဈ".charCodeAt(0)]="jh";
consonants["ဉ".charCodeAt(0)]="ñ";
consonants["ည".charCodeAt(0)]="ñ";
consonants["ဋ".charCodeAt(0)]="ṭ";
consonants["ဌ".charCodeAt(0)]="ṭh";
consonants["ဍ".charCodeAt(0)]="ḍ";
consonants["ဎ".charCodeAt(0)]="ḍh";
consonants["ဏ".charCodeAt(0)]="ṇ";
consonants["တ".charCodeAt(0)]="t";
consonants["ထ".charCodeAt(0)]="th";
consonants["ဒ".charCodeAt(0)]="d";
consonants["ဓ".charCodeAt(0)]="dh";
consonants["န".charCodeAt(0)]="n";
consonants["ပ".charCodeAt(0)]="p";
consonants["ဖ".charCodeAt(0)]="ph";
consonants["ဗ".charCodeAt(0)]="b";
consonants["ဘ".charCodeAt(0)]="bh";
consonants["မ".charCodeAt(0)]="m";
consonants["ယ".charCodeAt(0)]="y";
consonants["ရ".charCodeAt(0)]="r";
consonants["လ".charCodeAt(0)]="l";


consonants["ဝ".charCodeAt(0)]="v";
consonants["သ".charCodeAt(0)]="s";
consonants["ၐ".charCodeAt(0)]="ś";
consonants["ၑ".charCodeAt(0)]="ṣ"
consonants["ဟ".charCodeAt(0)]="h";

consonants["္".charCodeAt(0)]="~";


var symbols=[];
symbols[0x200d]="";
//symbols["၁".charCodeAt(0)]=".";
symbols["။".charCodeAt(0)]="||";
symbols["၊".charCodeAt(0)]="|";
symbols["၁".charCodeAt(0)]="1";
symbols["၂".charCodeAt(0)]="2";
symbols["၃".charCodeAt(0)]="3";
symbols["၄".charCodeAt(0)]="4";
symbols["၅".charCodeAt(0)]="5";
symbols["၆".charCodeAt(0)]="6";
symbols["၇".charCodeAt(0)]="7";
symbols["၈".charCodeAt(0)]="8";
symbols["၉".charCodeAt(0)]="9";
symbols["၀".charCodeAt(0)]="0";
//symbols[1]="a";‍

var combinations={};
//combinations["ပၸ"]="pp";
combinations["ကၠ"]="kk";
combinations["ကၡ"]="kkh";
combinations["က်"]="ky";
combinations["ႀကိ"]="kri";
combinations["ကႅ"]="kl";
combinations["ကြ"]="kv";
combinations["ခ်"]="khy";
combinations["ခြ"]="khv";
combinations["ဂၢ"]="gg";
combinations["ဂၣ"]="ggh";
combinations["ဂ်"]="gy";
combinations["ျဂ"]="gr";
combinations["ကၤ"]="ṅk";
combinations["ခၤ"]="ṅkh";
combinations["ဂၤ"]="ṅg";
combinations["ဃၤ"]="ṅgh";
combinations["စၥ"]="cc";
combinations["စၧ"]="ch";
combinations["ဇၨ"]="jj";
combinations["ဇၩ"]="jjh";
combinations["ည"]="ññ";
combinations["ၪႇ"]="ñh";
combinations["ၪၥ"]="ñc";
combinations["ၪၧ"]="ñch";
combinations["ၪၨ"]="ñj";
combinations["ၪၩ"]="ñjh";
combinations["႗"]="ṭṭ";
combinations["႒"]="ṭṭh";
combinations["ၮ"]="ḍḍ";
combinations["ၯ"]="ḍḍh";
combinations["ဏၬ"]="ṇṭ";
combinations["ဏၭ"]="ṇṭh";
combinations["႑"]="ṇḍ";
combinations["ဏၰ"]="ṇṇ";
combinations["ဏွ"]="ṇh";
combinations["တၱ"]="tt";
combinations["တၳ"]="tth";
combinations["တြ"]="tv";
combinations["တ်"]="ty";
combinations["ၾတ"]="tr";
combinations["ဒၵ"]="dd";
combinations["ဒၶ"]="ddh";
combinations["ဒ်"]="dy";
combinations["ျဒ"]="dr";
combinations["ဒြ"]="dv";
combinations["ဓ်"]="dhy";
combinations["ဓြ"]="dhv";
combinations["ႏၲ"]="nt";
combinations["ႏ႖"]="ntv";
combinations["ႏၴ"]="nth";
combinations["ႏၵ"]="nd";
combinations["ႁႏၵ"]="ndr";
combinations["ႏၶ"]="ndh";
combinations["ႏၷ"]="nn";
combinations["ႏ်"]="ny";
combinations["ႏွ"]="nha";
combinations["ပၸ"]="pp";
combinations["ပၹ"]="pph";
combinations["ပ်"]="py";
combinations["ပႅ"]="pl";
combinations["ဗၺ"]="bb";
combinations["ဗ႓"]="bbh";
combinations["ဗ်"]="by";
combinations["ျဗ"]="br";
combinations["မၸ"]="mp";
combinations["မၹ"]="mph";
combinations["မၺ"]="mb";
combinations["မ႓"]="mbh";
combinations["မၼ"]="mm";
combinations["မ်"]="my";
combinations["မွ"]="mh";
combinations["ယ်"]="yy";
combinations["ယွ"]="yh";
combinations["လႅ"]="ll";
combinations["လ်"]="ly";
combinations["လွ"]="lh";
combinations["ဝွ"]="vh";
combinations["သၱ"]="st";
combinations["ၾသၱ"]="str";
combinations["သၷ"]="sn";
combinations["သ်"]="sy";
combinations["ႆ"]="ss";
combinations["သၼ"]="sm";
combinations["သြ"]="sv";
combinations["ဟၼ"]="hm";
combinations["ဟြ"]="hv";
combinations["ဠႇ"]="ḷh";
combinations["ေစၧ"]="cche";

var enumerateBurmeseToken = function(instr) { // return array of tokens in a string
	var r=[];
	var indeva=false;
	var burmese="";
	for (var i in instr) {
		var cc=instr.charCodeAt(i);
		if (cc===0x1039) continue;   // zero width joiner
		if (cc>=0x1000 && cc<=0x109f) {
			if (cc!=0x104a && cc!=0x104b)	burmese+=instr[i]; //punctuation deva 0964,0965
		} else {
			if (burmese) r.push(burmese);
			burmese="";
		}
	}
	if (burmese) r.push(burmese);
	return r;
}
var burmeseToRoman =function(s) {
	var output="",i=0;
	var followconsonant=false;
	while　(i< s.length) {
		var cc=s.charCodeAt(i);
		var c=consonants[cc];
		if (cc===0x104a) {
		  followconsonant=false;
		  i++;
		  continue;
	    }
		var com=combinations[s.charAt(i)+s.charAt(i+1)];
		if (com) {
			if (followconsonant) output+="a";
			if("ieou".indexOf(com[com.length-1])==-1) followconsonant=true;
			i+=2;
			output+=com;			
			continue;
		} else { //try 3
			com=combinations[s.charAt(i)+s.charAt(i+1)+s.charAt(i+2)];
			if (com){
				if (followconsonant) output+="a";
				if("ieou".indexOf(com[com.length-1])==-1) followconsonant=true;
				else followconsonant=false;
				i+=3;
				output+=com;			
				continue;				
			}
		}

		if (c) { //isconsonant
			if (followconsonant) output+="a";
			followconsonant=true;
			output+=c;
		} else {
			var sym=symbols[cc];
			if (sym!==undefined) {
				if (followconsonant) output+="a";
				output+=sym;
			} else {
				var v=vowels[cc];
				//if (followconsonant /*&& cc==0x902*/) output+="a";
				if (v) output+=v;
				else {
					if (followconsonant) output+="a";
				    output+=s[i];
				}
			}
			followconsonant=false;
		}	
		i++;
	}
	if (followconsonant) output+="a";

	return output;
}

if (typeof window!="undefined") window.burmeseToRoman=burmeseToRoman;
if (typeof module!="undefined") module.exports={toRoman:burmeseToRoman,
	enumerateToken:enumerateBurmeseToken};


},{}],"c:\\dev2014\\node_modules\\brahmicscripts\\test\\test-burmese.js":[function(require,module,exports){
var burmese2roman=require("../burmese2roman");

var testsuite=[
["catura","စတုရ"],
["catuppaṭipadāvibhāga","စတုပၸဋိပဒါဝိဘာဂ"],
["abbhuggantvā","အဗ႓ဳဂၢႏ႖ာ"]
//[စတုပၸဋိပဒါ+ဝိဘာဂ]<br>  	၄-ပါးေသာ ပဋိပဒါျဖင့္ ေဝဖန္ျခင္း။"


]

var test=function() {
	testsuite.map(function(item) {
		var out=burmese2roman.toRoman(item[1]);
		if (out!=item[0]) {
			console.log("error converting to \n",item[0], "result:",out);
		} else {
			console.log("ok")
		}
	})
}

test();
},{"../burmese2roman":"c:\\dev2014\\node_modules\\brahmicscripts\\burmese2roman.js"}]},{},["c:\\dev2014\\node_modules\\brahmicscripts\\test\\test-burmese.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxVc2Vyc1xcY2hlYWhzaGVuXFxBcHBEYXRhXFxSb2FtaW5nXFxucG1cXG5vZGVfbW9kdWxlc1xcd2F0Y2hpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiLi5cXGJ1cm1lc2Uycm9tYW4uanMiLCJ0ZXN0LWJ1cm1lc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXHJcbnZhciB2b3dlbHM9W107XHJcbnZvd2Vsc1tcIuGAoVwiLmNoYXJDb2RlQXQoMCldPVwiYVwiO1xyXG4vL3Zvd2Vsc1tcIuGAoeGArFwiLmNoYXJDb2RlQXQoMCldPVwixIFcIjtcclxudm93ZWxzW1wi4YCsXCIuY2hhckNvZGVBdCgwKV09XCLEgVwiO1xyXG52b3dlbHNbXCLhgKtcIi5jaGFyQ29kZUF0KDApXT1cIsSBXCI7XHJcblxyXG52b3dlbHNbXCLhgKNcIi5jaGFyQ29kZUF0KDApXT1cImlcIjtcclxudm93ZWxzW1wi4YCkXCIuY2hhckNvZGVBdCgwKV09XCLEq1wiO1xyXG52b3dlbHNbXCLhgK1cIi5jaGFyQ29kZUF0KDApXT1cImlcIjtcclxudm93ZWxzW1wi4YCuXCIuY2hhckNvZGVBdCgwKV09XCLEq1wiO1xyXG5cclxudm93ZWxzW1wi4YClXCIuY2hhckNvZGVBdCgwKV09XCJ1XCI7XHJcbnZvd2Vsc1tcIuGAplwiLmNoYXJDb2RlQXQoMCldPVwixatcIjtcclxudm93ZWxzW1wi4YCvXCIuY2hhckNvZGVBdCgwKV09XCJ1XCI7XHJcbnZvd2Vsc1tcIuGAs1wiLmNoYXJDb2RlQXQoMCldPVwidVwiO1xyXG52b3dlbHNbXCLhgLBcIi5jaGFyQ29kZUF0KDApXT1cIsWrXCI7XHJcbnZvd2Vsc1tcIuGAtFwiLmNoYXJDb2RlQXQoMCldPVwixatcIjtcclxuXHJcblxyXG52b3dlbHNbXCLhgKdcIi5jaGFyQ29kZUF0KDApXT1cImVcIjtcclxuLy92b3dlbHNbXCLhgLFcIi5jaGFyQ29kZUF0KDApXT1cImVcIjtcclxuLy92b3dlbHNbXCLhgKdcIi5jaGFyQ29kZUF0KDApXT1cImVcIjtcclxuXHJcbi8vdm93ZWxzW1wi4KSQXCIuY2hhckNvZGVBdCgwKV09XCJhaVwiOyBcclxuLy92b3dlbHNbXCLgpYdcIi5jaGFyQ29kZUF0KDApXT1cImVcIjtcclxuLy92b3dlbHNbXCLgpYhcIi5jaGFyQ29kZUF0KDApXT1cImFpXCI7XHJcblx0XHJcbnZvd2Vsc1tcIuGAqVwiLmNoYXJDb2RlQXQoMCldPVwib1wiO1xyXG4vL3Zvd2Vsc1tcIuGAqVwiLmNoYXJDb2RlQXQoMCldPVwib1wiO1xyXG4vL3Zvd2Vsc1tcIuCklFwiLmNoYXJDb2RlQXQoMCldPVwiYXVcIjtcclxuLy92b3dlbHNbXCLgpYtcIi5jaGFyQ29kZUF0KDApXT1cIm9cIjtcclxuLy92b3dlbHNbXCLgpYxcIi5jaGFyQ29kZUF0KDApXT1cImF1XCI7XHJcblx0XHJcbi8vdm93ZWxzW1wi4KSLXCIuY2hhckNvZGVBdCgwKV09XCLhuZtcIjtcclxuLy92b3dlbHNbXCLgpaBcIi5jaGFyQ29kZUF0KDApXT1cIuG5nVwiO1xyXG4vL3Zvd2Vsc1tcIuClg1wiLmNoYXJDb2RlQXQoMCldPVwi4bmbXCI7XHJcbi8vdm93ZWxzW1wi4KWEXCIuY2hhckNvZGVBdCgwKV09XCLhuZ1cIjtcclxuXHJcbnZvd2Vsc1tcIuGAoFwiLmNoYXJDb2RlQXQoMCldPVwi4bi3XCI7XHJcblxyXG4vKlxyXG52b3dlbHNbXCLgpaJcIi5jaGFyQ29kZUF0KDApXT1cIuG4t1wiO1xyXG52b3dlbHNbXCLgpaNcIi5jaGFyQ29kZUF0KDApXT1cIuG4uVwiO1xyXG4qL1x0XHJcbnZvd2Vsc1tcIuGAtlwiLmNoYXJDb2RlQXQoMCldPVwi4bmDXCI7XHJcbi8vdm93ZWxzW1wi4KSDXCIuY2hhckNvZGVBdCgwKV09XCLhuKVcIjtcclxuXHJcblxyXG5cclxudmFyIGNvbnNvbmFudHM9W107XHJcbmNvbnNvbmFudHNbXCLhgIBcIi5jaGFyQ29kZUF0KDApXT1cImtcIjtcclxuY29uc29uYW50c1tcIuGAgVwiLmNoYXJDb2RlQXQoMCldPVwia2hcIjtcclxuY29uc29uYW50c1tcIuGAglwiLmNoYXJDb2RlQXQoMCldPVwiZ1wiO1xyXG5jb25zb25hbnRzW1wi4YCDXCIuY2hhckNvZGVBdCgwKV09XCJnaFwiO1xyXG5jb25zb25hbnRzW1wi4YCEXCIuY2hhckNvZGVBdCgwKV09XCLhuYVcIjtcclxuY29uc29uYW50c1tcIuGAhVwiLmNoYXJDb2RlQXQoMCldPVwiY1wiO1xyXG5jb25zb25hbnRzW1wi4YG4XCIuY2hhckNvZGVBdCgwKV09XCJjXCI7XHJcbmNvbnNvbmFudHNbXCLhgIZcIi5jaGFyQ29kZUF0KDApXT1cImNoXCI7XHJcbmNvbnNvbmFudHNbXCLhgIdcIi5jaGFyQ29kZUF0KDApXT1cImpcIjtcclxuY29uc29uYW50c1tcIuGAiFwiLmNoYXJDb2RlQXQoMCldPVwiamhcIjtcclxuY29uc29uYW50c1tcIuGAiVwiLmNoYXJDb2RlQXQoMCldPVwiw7FcIjtcclxuY29uc29uYW50c1tcIuGAilwiLmNoYXJDb2RlQXQoMCldPVwiw7FcIjtcclxuY29uc29uYW50c1tcIuGAi1wiLmNoYXJDb2RlQXQoMCldPVwi4bmtXCI7XHJcbmNvbnNvbmFudHNbXCLhgIxcIi5jaGFyQ29kZUF0KDApXT1cIuG5rWhcIjtcclxuY29uc29uYW50c1tcIuGAjVwiLmNoYXJDb2RlQXQoMCldPVwi4biNXCI7XHJcbmNvbnNvbmFudHNbXCLhgI5cIi5jaGFyQ29kZUF0KDApXT1cIuG4jWhcIjtcclxuY29uc29uYW50c1tcIuGAj1wiLmNoYXJDb2RlQXQoMCldPVwi4bmHXCI7XHJcbmNvbnNvbmFudHNbXCLhgJBcIi5jaGFyQ29kZUF0KDApXT1cInRcIjtcclxuY29uc29uYW50c1tcIuGAkVwiLmNoYXJDb2RlQXQoMCldPVwidGhcIjtcclxuY29uc29uYW50c1tcIuGAklwiLmNoYXJDb2RlQXQoMCldPVwiZFwiO1xyXG5jb25zb25hbnRzW1wi4YCTXCIuY2hhckNvZGVBdCgwKV09XCJkaFwiO1xyXG5jb25zb25hbnRzW1wi4YCUXCIuY2hhckNvZGVBdCgwKV09XCJuXCI7XHJcbmNvbnNvbmFudHNbXCLhgJVcIi5jaGFyQ29kZUF0KDApXT1cInBcIjtcclxuY29uc29uYW50c1tcIuGAllwiLmNoYXJDb2RlQXQoMCldPVwicGhcIjtcclxuY29uc29uYW50c1tcIuGAl1wiLmNoYXJDb2RlQXQoMCldPVwiYlwiO1xyXG5jb25zb25hbnRzW1wi4YCYXCIuY2hhckNvZGVBdCgwKV09XCJiaFwiO1xyXG5jb25zb25hbnRzW1wi4YCZXCIuY2hhckNvZGVBdCgwKV09XCJtXCI7XHJcbmNvbnNvbmFudHNbXCLhgJpcIi5jaGFyQ29kZUF0KDApXT1cInlcIjtcclxuY29uc29uYW50c1tcIuGAm1wiLmNoYXJDb2RlQXQoMCldPVwiclwiO1xyXG5jb25zb25hbnRzW1wi4YCcXCIuY2hhckNvZGVBdCgwKV09XCJsXCI7XHJcblxyXG5cclxuY29uc29uYW50c1tcIuGAnVwiLmNoYXJDb2RlQXQoMCldPVwidlwiO1xyXG5jb25zb25hbnRzW1wi4YCeXCIuY2hhckNvZGVBdCgwKV09XCJzXCI7XHJcbmNvbnNvbmFudHNbXCLhgZBcIi5jaGFyQ29kZUF0KDApXT1cIsWbXCI7XHJcbmNvbnNvbmFudHNbXCLhgZFcIi5jaGFyQ29kZUF0KDApXT1cIuG5o1wiXHJcbmNvbnNvbmFudHNbXCLhgJ9cIi5jaGFyQ29kZUF0KDApXT1cImhcIjtcclxuXHJcbmNvbnNvbmFudHNbXCLhgLlcIi5jaGFyQ29kZUF0KDApXT1cIn5cIjtcclxuXHJcblxyXG52YXIgc3ltYm9scz1bXTtcclxuc3ltYm9sc1sweDIwMGRdPVwiXCI7XHJcbi8vc3ltYm9sc1tcIuGBgVwiLmNoYXJDb2RlQXQoMCldPVwiLlwiO1xyXG5zeW1ib2xzW1wi4YGLXCIuY2hhckNvZGVBdCgwKV09XCJ8fFwiO1xyXG5zeW1ib2xzW1wi4YGKXCIuY2hhckNvZGVBdCgwKV09XCJ8XCI7XHJcbnN5bWJvbHNbXCLhgYFcIi5jaGFyQ29kZUF0KDApXT1cIjFcIjtcclxuc3ltYm9sc1tcIuGBglwiLmNoYXJDb2RlQXQoMCldPVwiMlwiO1xyXG5zeW1ib2xzW1wi4YGDXCIuY2hhckNvZGVBdCgwKV09XCIzXCI7XHJcbnN5bWJvbHNbXCLhgYRcIi5jaGFyQ29kZUF0KDApXT1cIjRcIjtcclxuc3ltYm9sc1tcIuGBhVwiLmNoYXJDb2RlQXQoMCldPVwiNVwiO1xyXG5zeW1ib2xzW1wi4YGGXCIuY2hhckNvZGVBdCgwKV09XCI2XCI7XHJcbnN5bWJvbHNbXCLhgYdcIi5jaGFyQ29kZUF0KDApXT1cIjdcIjtcclxuc3ltYm9sc1tcIuGBiFwiLmNoYXJDb2RlQXQoMCldPVwiOFwiO1xyXG5zeW1ib2xzW1wi4YGJXCIuY2hhckNvZGVBdCgwKV09XCI5XCI7XHJcbnN5bWJvbHNbXCLhgYBcIi5jaGFyQ29kZUF0KDApXT1cIjBcIjtcclxuLy9zeW1ib2xzWzFdPVwiYVwiO+KAjVxyXG5cclxudmFyIGNvbWJpbmF0aW9ucz17fTtcclxuLy9jb21iaW5hdGlvbnNbXCLhgJXhgbhcIl09XCJwcFwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgIDhgaBcIl09XCJra1wiO1xyXG5jb21iaW5hdGlvbnNbXCLhgIDhgaFcIl09XCJra2hcIjtcclxuY29tYmluYXRpb25zW1wi4YCA4YC6XCJdPVwia3lcIjtcclxuY29tYmluYXRpb25zW1wi4YKA4YCA4YCtXCJdPVwia3JpXCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGAgOGChVwiXT1cImtsXCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGAgOGAvFwiXT1cImt2XCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGAgeGAulwiXT1cImtoeVwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgIHhgLxcIl09XCJraHZcIjtcclxuY29tYmluYXRpb25zW1wi4YCC4YGiXCJdPVwiZ2dcIjtcclxuY29tYmluYXRpb25zW1wi4YCC4YGjXCJdPVwiZ2doXCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGAguGAulwiXT1cImd5XCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGAu+GAglwiXT1cImdyXCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGAgOGBpFwiXT1cIuG5hWtcIjtcclxuY29tYmluYXRpb25zW1wi4YCB4YGkXCJdPVwi4bmFa2hcIjtcclxuY29tYmluYXRpb25zW1wi4YCC4YGkXCJdPVwi4bmFZ1wiO1xyXG5jb21iaW5hdGlvbnNbXCLhgIPhgaRcIl09XCLhuYVnaFwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgIXhgaVcIl09XCJjY1wiO1xyXG5jb21iaW5hdGlvbnNbXCLhgIXhgadcIl09XCJjaFwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgIfhgahcIl09XCJqalwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgIfhgalcIl09XCJqamhcIjtcclxuY29tYmluYXRpb25zW1wi4YCKXCJdPVwiw7HDsVwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgarhgodcIl09XCLDsWhcIjtcclxuY29tYmluYXRpb25zW1wi4YGq4YGlXCJdPVwiw7FjXCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGBquGBp1wiXT1cIsOxY2hcIjtcclxuY29tYmluYXRpb25zW1wi4YGq4YGoXCJdPVwiw7FqXCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGBquGBqVwiXT1cIsOxamhcIjtcclxuY29tYmluYXRpb25zW1wi4YKXXCJdPVwi4bmt4bmtXCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGCklwiXT1cIuG5reG5rWhcIjtcclxuY29tYmluYXRpb25zW1wi4YGuXCJdPVwi4biN4biNXCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGBr1wiXT1cIuG4jeG4jWhcIjtcclxuY29tYmluYXRpb25zW1wi4YCP4YGsXCJdPVwi4bmH4bmtXCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGAj+GBrVwiXT1cIuG5h+G5rWhcIjtcclxuY29tYmluYXRpb25zW1wi4YKRXCJdPVwi4bmH4biNXCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGAj+GBsFwiXT1cIuG5h+G5h1wiO1xyXG5jb21iaW5hdGlvbnNbXCLhgI/hgL1cIl09XCLhuYdoXCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGAkOGBsVwiXT1cInR0XCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGAkOGBs1wiXT1cInR0aFwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJDhgLxcIl09XCJ0dlwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJDhgLpcIl09XCJ0eVwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgb7hgJBcIl09XCJ0clwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJLhgbVcIl09XCJkZFwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJLhgbZcIl09XCJkZGhcIjtcclxuY29tYmluYXRpb25zW1wi4YCS4YC6XCJdPVwiZHlcIjtcclxuY29tYmluYXRpb25zW1wi4YC74YCSXCJdPVwiZHJcIjtcclxuY29tYmluYXRpb25zW1wi4YCS4YC8XCJdPVwiZHZcIjtcclxuY29tYmluYXRpb25zW1wi4YCT4YC6XCJdPVwiZGh5XCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGAk+GAvFwiXT1cImRodlwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgo/hgbJcIl09XCJudFwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgo/hgpZcIl09XCJudHZcIjtcclxuY29tYmluYXRpb25zW1wi4YKP4YG0XCJdPVwibnRoXCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGCj+GBtVwiXT1cIm5kXCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGCgeGCj+GBtVwiXT1cIm5kclwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgo/hgbZcIl09XCJuZGhcIjtcclxuY29tYmluYXRpb25zW1wi4YKP4YG3XCJdPVwibm5cIjtcclxuY29tYmluYXRpb25zW1wi4YKP4YC6XCJdPVwibnlcIjtcclxuY29tYmluYXRpb25zW1wi4YKP4YC9XCJdPVwibmhhXCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGAleGBuFwiXT1cInBwXCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGAleGBuVwiXT1cInBwaFwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJXhgLpcIl09XCJweVwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJXhgoVcIl09XCJwbFwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJfhgbpcIl09XCJiYlwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJfhgpNcIl09XCJiYmhcIjtcclxuY29tYmluYXRpb25zW1wi4YCX4YC6XCJdPVwiYnlcIjtcclxuY29tYmluYXRpb25zW1wi4YC74YCXXCJdPVwiYnJcIjtcclxuY29tYmluYXRpb25zW1wi4YCZ4YG4XCJdPVwibXBcIjtcclxuY29tYmluYXRpb25zW1wi4YCZ4YG5XCJdPVwibXBoXCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGAmeGBulwiXT1cIm1iXCI7XHJcbmNvbWJpbmF0aW9uc1tcIuGAmeGCk1wiXT1cIm1iaFwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJnhgbxcIl09XCJtbVwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJnhgLpcIl09XCJteVwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJnhgL1cIl09XCJtaFwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJrhgLpcIl09XCJ5eVwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJrhgL1cIl09XCJ5aFwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJzhgoVcIl09XCJsbFwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJzhgLpcIl09XCJseVwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJzhgL1cIl09XCJsaFwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJ3hgL1cIl09XCJ2aFwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgJ7hgbFcIl09XCJzdFwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgb7hgJ7hgbFcIl09XCJzdHJcIjtcclxuY29tYmluYXRpb25zW1wi4YCe4YG3XCJdPVwic25cIjtcclxuY29tYmluYXRpb25zW1wi4YCe4YC6XCJdPVwic3lcIjtcclxuY29tYmluYXRpb25zW1wi4YKGXCJdPVwic3NcIjtcclxuY29tYmluYXRpb25zW1wi4YCe4YG8XCJdPVwic21cIjtcclxuY29tYmluYXRpb25zW1wi4YCe4YC8XCJdPVwic3ZcIjtcclxuY29tYmluYXRpb25zW1wi4YCf4YG8XCJdPVwiaG1cIjtcclxuY29tYmluYXRpb25zW1wi4YCf4YC8XCJdPVwiaHZcIjtcclxuY29tYmluYXRpb25zW1wi4YCg4YKHXCJdPVwi4bi3aFwiO1xyXG5jb21iaW5hdGlvbnNbXCLhgLHhgIXhgadcIl09XCJjY2hlXCI7XHJcblxyXG52YXIgZW51bWVyYXRlQnVybWVzZVRva2VuID0gZnVuY3Rpb24oaW5zdHIpIHsgLy8gcmV0dXJuIGFycmF5IG9mIHRva2VucyBpbiBhIHN0cmluZ1xyXG5cdHZhciByPVtdO1xyXG5cdHZhciBpbmRldmE9ZmFsc2U7XHJcblx0dmFyIGJ1cm1lc2U9XCJcIjtcclxuXHRmb3IgKHZhciBpIGluIGluc3RyKSB7XHJcblx0XHR2YXIgY2M9aW5zdHIuY2hhckNvZGVBdChpKTtcclxuXHRcdGlmIChjYz09PTB4MTAzOSkgY29udGludWU7ICAgLy8gemVybyB3aWR0aCBqb2luZXJcclxuXHRcdGlmIChjYz49MHgxMDAwICYmIGNjPD0weDEwOWYpIHtcclxuXHRcdFx0aWYgKGNjIT0weDEwNGEgJiYgY2MhPTB4MTA0YilcdGJ1cm1lc2UrPWluc3RyW2ldOyAvL3B1bmN0dWF0aW9uIGRldmEgMDk2NCwwOTY1XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoYnVybWVzZSkgci5wdXNoKGJ1cm1lc2UpO1xyXG5cdFx0XHRidXJtZXNlPVwiXCI7XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmIChidXJtZXNlKSByLnB1c2goYnVybWVzZSk7XHJcblx0cmV0dXJuIHI7XHJcbn1cclxudmFyIGJ1cm1lc2VUb1JvbWFuID1mdW5jdGlvbihzKSB7XHJcblx0dmFyIG91dHB1dD1cIlwiLGk9MDtcclxuXHR2YXIgZm9sbG93Y29uc29uYW50PWZhbHNlO1xyXG5cdHdoaWxl44CAKGk8IHMubGVuZ3RoKSB7XHJcblx0XHR2YXIgY2M9cy5jaGFyQ29kZUF0KGkpO1xyXG5cdFx0dmFyIGM9Y29uc29uYW50c1tjY107XHJcblx0XHRpZiAoY2M9PT0weDEwNGEpIHtcclxuXHRcdCAgZm9sbG93Y29uc29uYW50PWZhbHNlO1xyXG5cdFx0ICBpKys7XHJcblx0XHQgIGNvbnRpbnVlO1xyXG5cdCAgICB9XHJcblx0XHR2YXIgY29tPWNvbWJpbmF0aW9uc1tzLmNoYXJBdChpKStzLmNoYXJBdChpKzEpXTtcclxuXHRcdGlmIChjb20pIHtcclxuXHRcdFx0aWYgKGZvbGxvd2NvbnNvbmFudCkgb3V0cHV0Kz1cImFcIjtcclxuXHRcdFx0aWYoXCJpZW91XCIuaW5kZXhPZihjb21bY29tLmxlbmd0aC0xXSk9PS0xKSBmb2xsb3djb25zb25hbnQ9dHJ1ZTtcclxuXHRcdFx0aSs9MjtcclxuXHRcdFx0b3V0cHV0Kz1jb207XHRcdFx0XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fSBlbHNlIHsgLy90cnkgM1xyXG5cdFx0XHRjb209Y29tYmluYXRpb25zW3MuY2hhckF0KGkpK3MuY2hhckF0KGkrMSkrcy5jaGFyQXQoaSsyKV07XHJcblx0XHRcdGlmIChjb20pe1xyXG5cdFx0XHRcdGlmIChmb2xsb3djb25zb25hbnQpIG91dHB1dCs9XCJhXCI7XHJcblx0XHRcdFx0aWYoXCJpZW91XCIuaW5kZXhPZihjb21bY29tLmxlbmd0aC0xXSk9PS0xKSBmb2xsb3djb25zb25hbnQ9dHJ1ZTtcclxuXHRcdFx0XHRlbHNlIGZvbGxvd2NvbnNvbmFudD1mYWxzZTtcclxuXHRcdFx0XHRpKz0zO1xyXG5cdFx0XHRcdG91dHB1dCs9Y29tO1x0XHRcdFxyXG5cdFx0XHRcdGNvbnRpbnVlO1x0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoYykgeyAvL2lzY29uc29uYW50XHJcblx0XHRcdGlmIChmb2xsb3djb25zb25hbnQpIG91dHB1dCs9XCJhXCI7XHJcblx0XHRcdGZvbGxvd2NvbnNvbmFudD10cnVlO1xyXG5cdFx0XHRvdXRwdXQrPWM7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgc3ltPXN5bWJvbHNbY2NdO1xyXG5cdFx0XHRpZiAoc3ltIT09dW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0aWYgKGZvbGxvd2NvbnNvbmFudCkgb3V0cHV0Kz1cImFcIjtcclxuXHRcdFx0XHRvdXRwdXQrPXN5bTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR2YXIgdj12b3dlbHNbY2NdO1xyXG5cdFx0XHRcdC8vaWYgKGZvbGxvd2NvbnNvbmFudCAvKiYmIGNjPT0weDkwMiovKSBvdXRwdXQrPVwiYVwiO1xyXG5cdFx0XHRcdGlmICh2KSBvdXRwdXQrPXY7XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoZm9sbG93Y29uc29uYW50KSBvdXRwdXQrPVwiYVwiO1xyXG5cdFx0XHRcdCAgICBvdXRwdXQrPXNbaV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGZvbGxvd2NvbnNvbmFudD1mYWxzZTtcclxuXHRcdH1cdFxyXG5cdFx0aSsrO1xyXG5cdH1cclxuXHRpZiAoZm9sbG93Y29uc29uYW50KSBvdXRwdXQrPVwiYVwiO1xyXG5cclxuXHRyZXR1cm4gb3V0cHV0O1xyXG59XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyE9XCJ1bmRlZmluZWRcIikgd2luZG93LmJ1cm1lc2VUb1JvbWFuPWJ1cm1lc2VUb1JvbWFuO1xyXG5pZiAodHlwZW9mIG1vZHVsZSE9XCJ1bmRlZmluZWRcIikgbW9kdWxlLmV4cG9ydHM9e3RvUm9tYW46YnVybWVzZVRvUm9tYW4sXHJcblx0ZW51bWVyYXRlVG9rZW46ZW51bWVyYXRlQnVybWVzZVRva2VufTtcclxuXHJcbiIsInZhciBidXJtZXNlMnJvbWFuPXJlcXVpcmUoXCIuLi9idXJtZXNlMnJvbWFuXCIpO1xyXG5cclxudmFyIHRlc3RzdWl0ZT1bXHJcbltcImNhdHVyYVwiLFwi4YCF4YCQ4YCv4YCbXCJdLFxyXG5bXCJjYXR1cHBh4bmtaXBhZMSBdmliaMSBZ2FcIixcIuGAheGAkOGAr+GAleGBuOGAi+GAreGAleGAkuGAq+GAneGAreGAmOGArOGAglwiXSxcclxuW1wiYWJiaHVnZ2FudHbEgVwiLFwi4YCh4YCX4YKT4YCz4YCC4YGi4YKP4YKW4YCsXCJdXHJcbi8vW+GAheGAkOGAr+GAleGBuOGAi+GAreGAleGAkuGAqyvhgJ3hgK3hgJjhgKzhgIJdPGJyPiAgXHThgYQt4YCV4YCr4YC44YCx4YCe4YCsIOGAleGAi+GAreGAleGAkuGAq+GAu+GAluGAhOGAueGAtyDhgLHhgJ3hgJbhgJThgLnhgLvhgIHhgIThgLnhgLjhgYtcIlxyXG5cclxuXHJcbl1cclxuXHJcbnZhciB0ZXN0PWZ1bmN0aW9uKCkge1xyXG5cdHRlc3RzdWl0ZS5tYXAoZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0dmFyIG91dD1idXJtZXNlMnJvbWFuLnRvUm9tYW4oaXRlbVsxXSk7XHJcblx0XHRpZiAob3V0IT1pdGVtWzBdKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiZXJyb3IgY29udmVydGluZyB0byBcXG5cIixpdGVtWzBdLCBcInJlc3VsdDpcIixvdXQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJva1wiKVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbnRlc3QoKTsiXX0=
