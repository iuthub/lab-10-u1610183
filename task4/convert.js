function convert(){
	var input = document.getElementById('input').value;
	var from = document.getElementById('from').value;
	var to = document.getElementById('to').value;
	var answer = document.getElementById("answer");

	if(from=="kg" && to=="lb"){
		answer.innerHTML = input*2.20462262;
	}else if(from=="lb" && to=="kg"){
		answer.innerHTML = input*0.45359237;
	}else{
		answer.innerHTML = input;
	}
}