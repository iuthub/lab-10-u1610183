window.onload = function(){
	var button = document.getElementById("explode");

	button.onclick = function(){
		var num = document.getElementById("number").value;

		for(var i=0;i<num;i++){
			var div = document.createElement("div");
			div.style.width = Math.floor(Math.random()*295 + 5) + 'px';
			div.style.height = Math.floor(Math.random()*295 + 5) + 'px';
			div.style.background = 'black';
			div.style.position = 'absolute';
			div.style.top = Math.random()*1200 + 'px';
			div.style.left = Math.random()*800 + 'px';

			document.body.appendChild(div);
		}
	}
}