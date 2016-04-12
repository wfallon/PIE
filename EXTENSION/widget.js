/*
*	Brendan Raimann and Billy Fallon
*	Controls:
*		Time
*		Date
*		Weather
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
		var today = new Date();
		if (today.getHours() <= 12)
			h = today.getHours();
		else
			h = today.getHours() - 12;
        m = addZero(today.getMinutes());
		s = addZero(today.getSeconds());
		document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
		var d = new Date();
		document.getElementById("date").innerHTML = d.toDateString();
		setTimeout(function(){ startTime(); }, 1000);
	}
	
	startTime();
	
	
});