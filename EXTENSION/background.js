$(document).ready(function(){
	$(document.body).css("background-image", "url('photos/Image" + (~~(Math.random() * 7) + 1) + ".jpg')");
	$(document.body).css("background-size", "cover");

	$(".stage1").fadeOut(2000);
});