function computeBMI(weight, height){
	var BMI = 703*weight/(height*height);
	return BMI;
}

function calculate(){
	var weight = document.getElementById("weight").value;
	var height = document.getElementById("height").value;
	var score = document.getElementById('score');
	var type = document.getElementById("type");
	var BMI = computeBMI(weight, height);

	score.innerHTML = BMI;

	if(BMI<18){
		type.innerHTML = "Underweight";
	}else if(BMI<25){
		type.innerHTML = "Normal";
	}else if(BMI<30){
		type.innerHTML = "Overweight";
	}else{
		type.innerHTML = "Obese";
	}
}