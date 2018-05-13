function reverseList(var $id){
	var list = document.getElementById($var);
	var children = list.children;
	var num = children.length;
	var child_values = new Array();

	for(var i=0;i<num;i++){
		child_values.push(children[i].innerHTML);
	}

	while(list.firstChild){
		list.removeChild(list.firstChild);
	}

	for(var i=child_values.length-1;i>=0;i--){
		var li = document.createElement('li');
		li.innerHTML = child_values[i];
		list.appendChild(li);
	}
}