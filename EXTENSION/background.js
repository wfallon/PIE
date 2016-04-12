$(document).ready(function(){
reddit.hot('earthporn').limit(1).fetch(function(res) {
	$(document.body).css("background-image", "url(" + res.data.children[0].data.url + ".jpg)");
})});