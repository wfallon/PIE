/*
*	Brendan Raimann and Billy Fallon
*	Controls:
*		Time
*		Date
*		Weather
*		Twitter
*/

$(document).ready(function(){
	
	/*
	*	Helper function for the time. Adds a zero in front of the number if necessary.
	*/
	function addZero(x) {
		if (x < 10)
			return "0" + x;
		return x;
	}
	/*
	*	Recursive method to keep time.
	*/
	function startTime() {
		var half = true;
		var today = new Date();
		if (today.getHours() <= 12)
			h = today.getHours();
		else
			h = today.getHours() - 12;
        m = addZero(today.getMinutes());
		document.getElementById('time').innerHTML = h + ":" + m;
		var d = new Date();
		document.getElementById("date").innerHTML = d.toDateString();
		setTimeout(function(){ startTime(); }, 1000);
	}
	
	rewrites = [
	  [/chrome-extension:\/\/([a-z]+)\.twitter\.com/, 'https://$1.twitter.com'],
	  [/chrome-extension:\/\/([a-z]+)\.twimg\.com/, 'https://$1.twimg.com']
	];

	document.addEventListener('beforeload', function(e){
	  for (var i = 0, rule; rule = rewrites[i]; i++) {
	    if (rule[0].test(e.url)) {
	      e.preventDefault();
	      e.stopPropagation();
	      e.srcElement.src = e.srcElement.src.replace(rule[0], rule[1]);
	      break;
	    }
	  }
	}, true);
	
	startTime();
	
	
});