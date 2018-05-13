window.onload = function(){
	var img = document.getElementById('viewer').children;
	var count = 2;

	setInterval(function(){
		img[0].src = 'image'+count+".jpg";
		count++;
		if(count==5){
			count=1;
		}
	}, 30*1000)
}