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