
var clientId="lyszn9cytfoogtkiaq5j06plw2kudy";
var channels = ["medrybw", "ogamingsc2", "lirik", "freecodecamp"];
var search = "";
var url="";
var url4active= "";
var li,ul;
var online=new Array();
var offline=new Array();

function main(){
	getTwitchtvStreams();
	getnewTwitchtvStreams();
	getnewStreams();

}

function getTwitchtvStreams(){
	var myRequest = new XMLHttpRequest();
	myRequest.onreadystatechange= function(){
		if(myRequest.readyState==XMLHttpRequest.DONE){
			if(myRequest.status< 400){
				var str = JSON.parse(myRequest.responseText);
				if(str.stream ===null){
					document.getElementById('status3').innerHTML="Offline";
					//offline.push(str)
					getTwitchtv();
				}
				else{
					online.push(str);
					document.getElementById('status3').innerHTML="Online: "+str.stream.channel.status;
					onlineTwitch(str);
				}

			}

		}
	};
	search= channels[0]
    url ='https://api.twitch.tv/kraken/streams/'+search+'?client_id='+clientId;	
						
	myRequest.open('GET',url,true);
	myRequest.send(null);

}
//this function requests json objects for first element of array
	function getTwitchtv(){
		var myRequest = new XMLHttpRequest();
			myRequest.onreadystatechange = function(){
				if (myRequest.readyState === XMLHttpRequest.DONE){
					if (myRequest.status <400){
						var str = JSON.parse(myRequest.responseText);
						offline.push(str);
						nullTwitch(str);
					}
				}
			};
			search=channels[0]

			url ='https://api.twitch.tv/kraken/channels/'+search+'?client_id='+clientId;	
						
			myRequest.open('GET',url,true);
			myRequest.send(null);
		
	    
	}
function getnewTwitchtvStreams(){
	var myRequest = new XMLHttpRequest();
	myRequest.onreadystatechange= function(){
		if(myRequest.readyState==XMLHttpRequest.DONE){
			if(myRequest.status< 400){
				var str = JSON.parse(myRequest.responseText);
				if(str.stream === null){

					//offline.push(str);
					document.getElementById('status1').innerHTML="Offline";
					getnewTwitchtv();
				}
				else{
					online.push(str);
					document.getElementById('status1').innerHTML="Online: "+str.stream.channel.status;
					onlineTwitch(str);
				}

			}

		}
	};
	search=channels[3]
    url ='https://api.twitch.tv/kraken/streams/'+search+'?client_id='+clientId;	
						
	myRequest.open('GET',url,true);
	myRequest.send(null);

}

// this function calls fourth element in channels array
	function getnewTwitchtv(){
		var myRequest = new XMLHttpRequest();
			myRequest.onreadystatechange = function(){
				if (myRequest.readyState === XMLHttpRequest.DONE){
					if (myRequest.status <400){
						var str = JSON.parse(myRequest.responseText);
						offline.push(str);
						nullTwitch(str);
					}
				}
			};
			search=channels[3]
			url ='https://api.twitch.tv/kraken/channels/'+search+'?client_id='+clientId;	
						
			myRequest.open('GET',url,true);
			myRequest.send(null);
	    
	}
function getnewStreams(){
	var myRequest = new XMLHttpRequest();
	myRequest.onreadystatechange= function(){
		if(myRequest.readyState==XMLHttpRequest.DONE){
			if(myRequest.status< 400){
				var str = JSON.parse(myRequest.responseText);
				if(str.stream===null){
					//offline.push(str);
					document.getElementById('status2').innerHTML="Offline";
					getnew();
				}
				else{
					online.push(str);
					document.getElementById('status2').innerHTML="Online: "+str.stream.channel.status;
					onlineTwitch(str);
				}

			}

		}
	};
	search = channels[2]
    url ='https://api.twitch.tv/kraken/streams/'+search+'?client_id='+clientId;	
						
	myRequest.open('GET',url,true);
	myRequest.send(null);

}
// this fucntion calls third elements from channels array
	function getnew(){
		var myRequest = new XMLHttpRequest();
			myRequest.onreadystatechange = function(){
				if (myRequest.readyState === XMLHttpRequest.DONE){
					if (myRequest.status <400){
						var str = JSON.parse(myRequest.responseText);
						offline.push(str);
						nullTwitch(str);
					}
				}
			};
			search = channels[2]
			url ='https://api.twitch.tv/kraken/channels/'+search+'?client_id='+clientId;	
						
			myRequest.open('GET',url,true);
			myRequest.send(null);
		
	    
	}

	function nullTwitch(data){
		var logo = data.logo;
		var name = data.display_name;
		var channelUrl= data.url;
		if (data.name == "freecodecamp") {
			ul = document.getElementById('list1');
		}
		else if(data.name == "lirik"){
			ul = document.getElementById('list2');

		}
		else if(data.name ==="medrybw"){
			ul=document.getElementById('list3');
		}
		else{
			console.log("AWWW,Some is Wrong Again!!!")
		}
		var anchorElement;
		var x;
		x=document.createElement("IMG");
		x.setAttribute("src",logo);
		x.setAttribute("width", "100");
	    x.setAttribute("height", "100");
		//ul = document.getElementById('list1');
		li = document.createElement('li');
		anchorElement = document.createElement('a');
		anchorElement.setAttribute("href",channelUrl);
		anchorElement.innerHTML="Channel:  "+name;
		li.appendChild(anchorElement);
		ul.appendChild(x);ul.appendChild(li);
		/*document.getElementById('btn').onclick = function off(){
	    	console.log(offline.length);
	        console.log(online.length);
	        document.getElementById('displayBox').innerHTML="";

	        for(var i=0;i<offline.length;i++){
	        	var x=document.createElement("IMG");
	        	var li = document.createElement('li');
	        	x.setAttribute('src',offline[i].logo);
				x.setAttribute("width", "100");
	    		x.setAttribute("height", "100");
	        	var ul=document.getElementById('off'+i);
	        	anchorElement .setAttribute("href",offline[i].url);
	        	anchorElement.innerHTML="channel: "+offline[i].name;
	        	li.appendChild(anchorElement);
	        	ul.appendChild(x);
	        	ul.appendChild(li);

	        }
	    }*/
	}

function onlineTwitch(data){
	    online.push(data);
		var logo = data.stream.channel.logo;
		var name = data.stream.channel.display_name;
		var channelUrl= data.stream.channel.url;
		var name = data.stream.channel.name;
		if (name == "freecodecamp") {
			ul = document.getElementById('li1');
		}
		else if(name == "lirik"){
			ul = document.getElementById('li2');

		}
		else if(name === "medrybw"){
			ul=document.getElementById('li3');
		}
		else{
			console.log("AWWW,Some is Wrong Again!!!")
		}
		var anchorElement;
		var x;
		x=document.createElement("IMG");
		x.setAttribute("src",logo);
		x.setAttribute("width", "100");
	    x.setAttribute("height", "100");
		//ul = document.getElementById('list1');
		li = document.createElement('li');
		anchorElement = document.createElement('a');
		anchorElement.setAttribute("href",channelUrl);
		anchorElement.innerHTML="Channel:  "+name;
		li.appendChild(anchorElement);
		ul.appendChild(x);ul.appendChild(li);
	}
/*document.getElementById('btn2').onclick = function all(){
	main();
}*/
	











