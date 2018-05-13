function mirror(){
	var h1 = document.getElementsByTagName('h1');
	var h2 = document.getElementsByTagName('h2');
	var h3 = document.getElementsByTagName('h3');
	var h4 = document.getElementsByTagName('h4');
	var h5 = document.getElementsByTagName('h5');
	var h6 = document.getElementsByTagName('h6');

	for(var i=0;i<h1.length;i++){
		var text = h1[i].innerHTML.split("").reverse().join("");
		h1[i].innerHTML = text;
	}

	for(var i=0;i<h2.length;i++){
		var text = h2[i].innerHTML.split("").reverse().join("");
		h2[i].innerHTML = text;
	}

	for(var i=0;i<h3.length;i++){
		var text = h3[i].innerHTML.split("").reverse().join("");
		h3[i].innerHTML = text;
	}

	for(var i=0;i<h4.length;i++){
		var text = h4[i].innerHTML.split("").reverse().join("");
		h4[i].innerHTML = text;
	}

	for(var i=0;i<h5.length;i++){
		var text = h5[i].innerHTML.split("").reverse().join("");
		h5[i].innerHTML = text;
	}

	for(var i=0;i<h6.length;i++){
		var text = h6[i].innerHTML.split("").reverse().join("");
		h6[i].innerHTML = text;
	}
}