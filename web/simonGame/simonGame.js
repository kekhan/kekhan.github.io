var simonTurn=false;
var simonArr=[];
var userArr=[];
var userTurn =true;
var MaxSimonSays=20;
var correct=0;
var myvar;


function start(){
	simonTurn=true;
	simonSays();
	//userMemory();
}


function simonSays(){
	/*this function will mimic simon*/
	userArr=[];
	correct=0;
	if(simonTurn){
		var simonInput = Math.floor(Math.random()*4);
		simonArr.push(simonInput);
		console.log('simon array',simonArr);
		for(var i=0;i<simonArr.length;i++){
			var num2Str=simonArr[i].toString();
		
			settime(i,num2Str);
		}


	}

	console.log("userTurn");
}

function settime(i,num2Str){
	if(simonArr[i]===0){

			var element= document.getElementsByClassName('btn'+num2Str)[0];
			var originColr= element.style.backgroundColor;
			element.style.backgroundColor='#88DA43';
			myvar=setTimeout(function(){
				element.style.backgroundColor=originColr;//green
				clearTimeout(myvar);					

			}, 500);
				
		}
		else if(simonArr[i]==1){
			var element= document.getElementsByClassName('btn'+num2Str)[0];
			var originColr= element.style.backgroundColor;
			element.style.backgroundColor='#962200';
			myvar=setTimeout(function(){
				element.style.backgroundColor=originColr; //red
				clearTimeout(myvar);	
			}, 500);
				
		}
		else if(simonArr[i]==2){
			var element= document.getElementsByClassName('btn'+num2Str)[0];
			var originColr= element.style.backgroundColor;
			element.style.backgroundColor='#EBFFC5';
			myvar=setTimeout(function(){		
				element.style.backgroundColor=originColr;//yellow
				clearTimeout(myvar);	
			}, 500);
		}
		else if(simonArr[i]==3){
			var element= document.getElementsByClassName('btn'+num2Str)[0];
			var originColr= element.style.backgroundColor;
			element.style.backgroundColor='#00C4FF';
			myvar= setTimeout(function(){
				element.style.backgroundColor=originColr;//blue
				clearTimeout(myvar);	
			}, 500);
		}
		else{
			console.log("oops, something is wrong");
		}
}


function userMemory(btn){
	//
	
	if(userTurn){
		simonTurn=false;
		var userInput = btn.value;
		//console.log(btn);
		var str2num=Number(userInput);
		console.log('userArr',userArr);
		userArr.push(str2num);
		console.log(userArr);
		if(userArr.length===simonArr.length){
			check();
			//

			

		}
		


	}
	//
}


function check(){
	//

	var count= simonArr.length;
	document.getElementById('count').innerHTML=count;

	console.log('user',userArr);
	console.log('in check()');
    for (var i=0; i<userArr.length;i++){
    	console.log('in check() loop');
    	if(userArr[i]===simonArr[i]){
    		console.log('in check() condi');
    		correct++;
    		console.log('correct',correct);
    		count--;
    		console.log('count',count);
    		document.getElementById('count').innerHTML=count;
    		console.log('userArrlength',userArr.length);
    		console.log('user',userArr);
    		if(correct===simonArr.length){
    			simonTurn=true;
    			simonSays();
    			
    		}
    	}
    	else if (simonArr[i]!==userArr[i]){
    		count=0;
    		console.log('no match');
    		userTurn=false;
    		simonTurn=false;
    	}
    }
    
    
}

