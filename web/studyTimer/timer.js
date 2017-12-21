
var myVar;// needs to be global for stop button to stop time
var audio = new Audio('demi.mp3');// global because audio pause works
var minute=60*1000;
var min;
var secs;
var outbreak;
var outstudy;
var count=1000;



function getStudyTime(){
	var studyTime = document.getElementById('study').value;
	studyTime=Number(studyTime);
	var title = "Study";
	screen(studyTime,title)
	var covertStudyTime= studyTime*60*1000;
	return covertStudyTime;

}
//console.log(mins);


function getBreakTime(){
	var breakTime = document.getElementById('break').value;
	breakTime=Number(breakTime);
	console.log(typeof(breakTime));
	var title="Break";
	screen(breakTime,title);
	var convertedTime= breakTime*60*1000;
	return convertedTime;

}


function screen(time,title){
	var titletoscreen = document.getElementById('title').innerHTML=title;
	if(time ===1){
		var timetoScreen = document.getElementById('showtime').innerHTML=time+" minute";

	}
	else{
		var timetoScreen = document.getElementById('showtime').innerHTML=time+" minutes";
	}
	

}


function studyTimer(){
	console.log(count);

	var ms=getStudyTime();
	audio.pause();
	min = ms/minute;
	secs=min*60;
	document.getElementById('screen').style.backgroundColor="#00586D";
	outstudy= setTimeout('countdown()',1000);
	audio.currentTime = 0.0;
	myVar = setInterval(breakt,ms);
	document.getElementById('showtime').innerHTML=""
	console.log(ms);
	console.log("back to studying");

}


function breakt(){
	count+=count;
	console.log("in breakt");
	var bms = getBreakTime();
	min = bms/minute;
	secs = min*60;
	outbreak= setTimeout('countdown2()',1000);
	document.getElementById('screen').style.backgroundColor='#D62C5B';
	myVar = setInterval(studyTimer,bms);
	console.log("playing song");
	audio.play();
	document.getElementById('showtime').innerHTML="Take a Break!";
}

function stoptime(){
	document.getElementById('screen').style.backgroundColor="#E5E7E7";
	clearInterval(myVar);
	document.getElementById('min').value="";
	document.getElementById('sec').value="";
	audio.pause();
	audio.currentTime = 0.0;
	document.getElementById('showtime').innerHTML="time cleared";
}

function countdown(){
	mtime = document.getElementById('min');
	stime = document.getElementById('sec');
	if(stime <59){
		stime.value = secs;
	}
	else{
		mtime.value = setMinutes();
		stime.value = setSeconds();
	}
	--secs;
	setTimeout('countdown()',1000);
}
function countdown2(){
	mtime = document.getElementById('min');
	stime = document.getElementById('sec');
	if(stime <59){
		stime.value = secs;
	}
	else{
		mtime.value = setMinutes();
		stime.value = setSeconds();
	}
	setTimeout('countdown2()',1000);
}

function setMinutes(){
	min = Math.floor(secs/60);
	return min;

}
function setSeconds(){
	return secs - Math.round(min*60);

}



