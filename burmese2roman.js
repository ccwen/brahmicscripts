
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

