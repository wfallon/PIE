$(document).ready(function(){
	$(document.body).css("background-size", "cover");
	$(document.body).css("background-image", "url('photos/Image" + (~~(Math.random() * 12) + 1) + ".jpg')");


	$(".stage1").fadeOut(2000);
	
	/**
	*	Fading in shadows for the Time and Date
	*	*Fixes a loading glitch*
	*/
	
	window.setTimeout(function(){$(document.getElementById("time")).css("text-shadow", "0px 0px 15px hsla(120, 100%, 0%, .05)")},500);
	window.setTimeout(function(){$(document.getElementById("time")).css("text-shadow", "0px 0px 15px hsla(120, 100%, 0%, .1)")},500);
	window.setTimeout(function(){$(document.getElementById("time")).css("text-shadow", "0px 0px 15px hsla(120, 100%, 0%, .15)")},1000);
	
	window.setTimeout(function(){$(document.getElementById("date")).css("text-shadow", "0px 0px 15px hsla(120, 100%, 0%, .05)")},500);
	window.setTimeout(function(){$(document.getElementById("date")).css("text-shadow", "0px 0px 15px hsla(120, 100%, 0%, .1)")},500);
	window.setTimeout(function(){$(document.getElementById("date")).css("text-shadow", "0px 0px 15px hsla(120, 100%, 0%, .2)")},1000);
});

