function calculate(){
	var small = document.getElementById("small").value;
	var medium = document.getElementById("medium").value;
	var large = document.getElementById("large").value;
	var small_cost = 8.99;
	var medium_cost = 10.99;
	var large_cost = 12.99;
	var tax = 0.09;
	var tips_list = document.getElementsByName("tip");
	var price = document.getElementById("price");
	var tip = 0;

	for(var i=0;i<tips_list.length; i++){
		if(tips_list[i].checked){
			tip = tips_list[i].value/100;
		}
	}

	var price_cost = small*small_cost+medium*medium_cost+large*large_cost;
	price_cost*=(1+tax);
	price_cost*=(1+tip);

	price.innerHTML = price_cost;
}