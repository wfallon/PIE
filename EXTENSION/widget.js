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
	
	/*
	*	Gets the letter day using the unique int for each calendar day
	*/
	function letterDay(){

	var times = [
		["A", 16918, 16927, 16938, 16947], 
		["B", 16919, 16930, 16939, 16948], 
		["C", 16920, 16931, 16940, 16952], 
		["D", 16923, 16932, 16941, 16953], 
		["E", 16924, 16933, 16944, 16954], 
		["F", 16925, 16934, 16945, 16955], 
		["G", 16917, 16927, 16937, 16946]];

	var d = new Date();

	var currentTime = d.getTime();
	currentTime = currentTime/86400000;
	currentTime = currentTime - .16667;
	//alert(currentTime);
	currentTime = parseInt(currentTime, 10);

	var day = ""

	for(i = 0; i < times.length; i++)
	{
		for(v = 0; v < times[i].length - 1; v++)
		{
			if(times[i][v+1] == currentTime)
			{
				document.getElementById('letterDay').innerHTML = times[i][0];
				day = times[i][0];
				break;
			}
		}
	}

	if(day == "A")
	{
		document.getElementById('classes').innerHTML = "1-2-3-4";
	}

	if(day == "B")
	{
		document.getElementById('classes').innerHTML = "5-6-7-1";
	}

	if(day == "C")
	{
		document.getElementById('classes').innerHTML = "2-3-4-5";
	}

	if(day == "D")
	{
		document.getElementById('classes').innerHTML = "6-7-1-2";
	}

	if(day == "E")
	{
		document.getElementById('classes').innerHTML = "3-4-5-6";
	}

	if(day == "F")
	{
		document.getElementById('classes').innerHTML = "7-1-2-3";
	}
	
	if(day == "G")
	{
		document.getElementById('classes').innerHTML = "4-5-6-7";
	}


	setTimeout(function(){ letterDay(); }, 60000);

	}

	letterDay();
	
});