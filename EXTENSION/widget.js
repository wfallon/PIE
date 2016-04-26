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
	
	//helper arrays for the date
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
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
		if (h == 0)
			h = 12;
        m = addZero(today.getMinutes());
		document.getElementById('time').innerHTML = h + ":" + m;
		var d = new Date();
		document.getElementById("date").innerHTML = days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate();
		setTimeout(function(){ startTime(); }, 1000);
	}
	
	startTime();
	
});