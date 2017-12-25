
var myRequest = new XMLHttpRequest();
var coordLong;
var coordLat;
function getLocation(){
	var myRequest= new XMLHttpRequest();
	myRequest.onload = function(){
		if (myRequest.readyState === XMLHttpRequest.DONE){
			if(myRequest.status <400){
				var str = JSON.parse(myRequest.responseText);
				weatherInfo(str);
				converter(str);

			}
		}
	};

	var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+coordLat+'&lon='+coordLong+'&APPID=AIzaSyCZJ2oQDk6Ck_InN8papKP5JUiY94uBleQ';
	myRequest.open('GET',url,true);
	myRequest.send(null);
	
}

function geoLocation(){
	var request= new XMLHttpRequest();
	request.onreadystatechange=function(){
		if(request.readyState === XMLHttpRequest.DONE){
			if(request.status< 400){
				var str = JSON.parse(request.responseText);
				
				coordLat= str.location['lat'];
				coordLong=str.location['lng'];
				console.log(coordLat,coordLong);
				getLocation(coordLat,coordLong);

			}
		}
	};
	var url = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBL3iwILHBbuqcXC96a5UX08-Eit3mCN4M';
	request.open('POST',url,true);
	request.send(null);
	
}

function weatherInfo(data){
	var time = new Date();
	console.log(data);
	var hour = time.getHours();
	

	document.getElementById('date').innerHTML=time;
	if(hour <=5 ){
		document.getElementById('circle').style.backgroundColor = "#F5F3CE";

	}
	else if(hour<=18){
		document.getElementById('circle').style.backgroundColor="#fbac13";
		document.getElementById('body').style.backgroundColor="#7dc9fc";
	}
	else if(hour<=23){
		document.getElementById('circle').style.backgroundColor="#F5F3CE";
	}

	document.getElementById('location').innerHTML=data.name;
	var y = document.getElementById('fahrenheit');
	y.innerHTML=Math.floor(1.8*((data.main.temp)-273)+32) +" °F";
	document.getElementById('des').innerHTML=data.weather[0].description;
	var x = document.createElement("IMG");
	var srcimg = data.weather[0].icon;
    x.setAttribute("src", "http://openweathermap.org/img/w/"+srcimg+".png");
    document.body.appendChild(x);
}
function converter(data){
		element =document.getElementById('celsius')
		element.innerHTML=Math.floor(data.main.temp-273)+" °C";

}



