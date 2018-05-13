window.onload = function(){
	var button = document.getElementById("add");

	button.onclick = function(){
		var textarea = document.getElementById("paragraph");
		var essay_body = document.getElementById("essay_body");

		var p = document.createElement("p");
		p.innerHTML = textarea.value;

		essay_body.append(p);
		textarea.value = "";
	}
}