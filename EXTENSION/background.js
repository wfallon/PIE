$(document).ready(function(){
	$(document.body).css("background-size", "cover");
	$(document.body).css("background-image", "url('photos/Image" + (~~(Math.random() * 12) + 1) + ".jpg')");


	$(".stage1").fadeOut(2000);
	
	/**
	*	Fading in shadows for the Time and Date
	*	*Fixes a loading glitch*
	*/
	
	window.setTimeout(function(){$(document.getElementById("time")).css("text-shadow", "0px 0px 15px hsla(120, 100%, 0%, .05)")},500);
	window.setTimeout(function(){$(document.getElementById("time")).css("text-shadow", "0px 0px 15px hsla(120, 100%, 0%, .1)")},750);
	window.setTimeout(function(){$(document.getElementById("time")).css("text-shadow", "0px 0px 15px hsla(120, 100%, 0%, .15)")},1000);
	
	window.setTimeout(function(){$(document.getElementById("date")).css("text-shadow", "0px 0px 15px hsla(120, 100%, 0%, .05)")},500);
	window.setTimeout(function(){$(document.getElementById("date")).css("text-shadow", "0px 0px 15px hsla(120, 100%, 0%, .1)")},750);
	window.setTimeout(function(){$(document.getElementById("date")).css("text-shadow", "0px 0px 15px hsla(120, 100%, 0%, .2)")},1000);
	
	window.setTimeout(function(){$(document.getElementById("letterDay")).css("color", "#f2f2f2")},750);
	window.setTimeout(function(){$(document.getElementById("letterDay")).css("text-shadow", "0px 0px 40px hsla(120, 100%, 0%, .3)")},1000);
	window.setTimeout(function(){$(document.getElementById("letterDay")).css("text-shadow", "0px 0px 40px hsla(120, 100%, 0%, .4)")},1250);
	window.setTimeout(function(){$(document.getElementById("letterDay")).css("text-shadow", "0px 0px 40px hsla(120, 100%, 0%, .5)")},1500);
	
	window.setTimeout(function(){$(document.getElementById("classes")).css("color", "#f2f2f2")},750);
	window.setTimeout(function(){$(document.getElementById("classes")).css("text-shadow", "0px 0px 40px hsla(120, 100%, 0%, .3)")},500);
	window.setTimeout(function(){$(document.getElementById("classes")).css("text-shadow", "0px 0px 40px hsla(120, 100%, 0%, .4)")},750);
	window.setTimeout(function(){$(document.getElementById("classes")).css("text-shadow", "0px 0px 40px hsla(120, 100%, 0%, .5)")},1000);
});

