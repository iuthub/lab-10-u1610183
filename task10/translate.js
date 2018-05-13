function atinLay(){
	var p = document.getElementById("text");
	var text = p.innerHTML;

	var result = "";
	var flag = true;
	var first_letter = null;
	var reg = new RegExp('[aouie]', 'i');
	var vowel = false;

	for(var i=0;i<text.length;i++){
		if(flag){
			if(reg.test(text[i])){
				vowel = true;
				result+= text[i];
				flag = false;
			}else{
				vowel = false;
				first_letter = text[i];
				flag = false;
			}
		}else{
			if(text[i]==" "){
				if(!vowel){
					result += "-";
					result += first_letter;
					result += "ay";
				}
				flag = true;
			}
			result += text[i];
		}
	}
	result += "-";
	result += first_letter;
	result += "ay";

	p.innerHTML = result;
}