$(document).ready(function(){
	$(document.body).css("background-size", "cover");
	$(document.body).css("background-image", "url('photos/Image" + (~~(Math.random() * 12) + 1) + ".jpg')");


	$(".stage1").fadeOut(2000);
});

