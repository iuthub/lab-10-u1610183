var smaller = document.getElementById("smaller");
var bigger = document.getElementById("bigger");
var p = document.getElementsByTagName("p");

for(var i=0;i<p.length;i++){
	p[i].style.fontSize = 12 + 'pt';
}

smaller.onclick = function(){
	var fontSize = parseInt(p[0].style.fontSize);
	fontSize-=2;	
	for(var i=0;i<p.length;i++){
		p[i].style.fontSize = fontSize + 'pt';
	}
}

bigger.onclick = function(){
	var fontSize = parseInt(p[0].style.fontSize);
	fontSize+=2;
	for(var i=0;i<p.length;i++){
		p[i].style.fontSize = fontSize + "pt";
	}	
}