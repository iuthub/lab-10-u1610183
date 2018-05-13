function calculate(){
	var amount = document.getElementById("amount").value;
	var dollars = null;
	var quaters = null;
	var dimes = null;
	var nickels = null;
	var pennies = null;
	var change = document.getElementById("change");
	var rest = null;

	dollars = Math.floor(amount);
	rest = amount - dollars;
	
	quaters = Math.floor(rest/0.25);
	rest = rest- quaters*0.25;

	dimes = Math.floor(rest/0.1);
	rest = rest - dimes*0.1;

	nickels = Math.floor(rest/0.05);
	rest = rest - nickels*0.05;

	pennies = Math.ceil(rest/0.01);

	change.innerHTML = dollars + " dollars, ";
	change.innerHTML += quaters +" quaters, ";
	change.innerHTML += dimes +" dimes, ";
	change.innerHTML += nickels +" nickels, ";
	change.innerHTML += pennies +" pennies ";
}	