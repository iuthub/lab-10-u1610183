var img = document.getElementById('chuck');
var p = document.getElementById('facts');
var facts = ["Chuck Norris counted to infinity - twice.", "There is no 'ctrl' button on Chuck Norris's computer. Chuck Norris is always in control.", "Chuck Norris destroyed the periodic table, because he only recognizes the element of surprise."]; 

img.onmouseover = function(){
	for(var i=0;i<facts.length;i++){
		p.innerHTML += facts[i];
	}
}

img.onmouseleave = function(){
	p.innerHTML = "";
}