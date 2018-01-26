var arrColor = [];
var matchedArr =[];
var arrVal = [];
var userTurn = true;
var arrRandom = [1,2,3,4,5,6,7,8,9];
var timer;

function randomColor(){
	// generate a random color to be assigned to element in 
	// getclicks 
	//colorArr1 = ["red","pink","blue","yellow"];
	//colorArr2 = ["red","pink","blue","yellow"];
	// var colorIndex = MAth.floor(Math.random()* colorArr.length);
	// then aslong as color is not in arrRandom return color

}


function getClick(btn){
	//randomize(btn.value);
	
	if(userTurn){
		
		var element = btn.value;
		console.log(element);

		if(element == "1"){
			btn.style.backgroundColor = "red";
		}
		else if (element == "2"){
			btn.style.backgroundColor ="pink";
		}
		else if (element == "3"){
			btn.style.backgroundColor = "yellow";
		}
		else if (element == "4"){
			btn.style.backgroundColor = "blue";
		}
		else if (element == "5"){
			btn.style.backgroundColor = "yellow";
		}
		else if (element == "6"){
			btn.style.backgroundColor = "red";
		}
		else if (element == "7"){
			btn.style.backgroundColor = "blue";
		}
		else if (element == "8"){
			btn.style.backgroundColor = "pink";
		}
		arrColor.push(btn.style.backgroundColor);
		arrVal.push(btn.value);
		console.log(arrColor);

		if(arrColor.length == 2 ){
			userTurn =false;
			check2loop(arrColor,arrVal);
			arrColor =[];
			arrVal = [];
		}

	}
}

function check2loop(arr1,arr2){
	console.log(arr1,arr2);
	var color1 = arr1[0];
	var color2 = arr1[1];
	var test1 =  "button" + arr2[0];
	var test2 = "button" + arr2[1];
	 console.log(test1,test2);
	 if (color1 == color2){

	 	matchedArr.push(color1);
	 	matchedArr.push(color2);
	 	checkWin();
	 	console.log("matchedArr", matchedArr.length);
	 	element = document.getElementById(test1);
	 	otherElement = document.getElementById(test2);
	 	var otherOriColor = otherElement.style.backgroundColor;
	 	var originColr= element.style.backgroundColor;
		element.style.backgroundColor='orange';
		otherElement.style.backgroundColor = 'orange'
	 	myvar=setTimeout(function(){
	 	    element.style.backgroundColor = originColr;
	 	    otherElement.style.backgroundColor =otherOriColor; 
			clearTimeout(myvar);	
			}, 1000);
	 	userTurn =true;
	 }
	 else {
	 	element1 = document.getElementById(test1);
	 	element2 = document.getElementById(test2);
	 	var el1OriginColor = element1.style.backgroundColor;
	 	var el2OriginColor= element2.style.backgroundColor;
	 	console.log(element1, element2);
	 	element1.style.backgroundColor=el1OriginColor;
		element2.style.backgroundColor = el2OriginColor;
	 	myvar=setTimeout(function(){
	 	    element1.style.backgroundColor = 'green';
	 	    element2.style.backgroundColor ='green'; 
			clearTimeout(myvar);	
			}, 1000);
	 	
	 	userTurn = true;

	 }
	
}

function timer(){
	var tick = 0;
	timer = setInterval(function(){
		tick++;
		document.getElementById("timer").innerHTML = "timer: " +tick + " seconds";

	},1000);
}

function checkWin(){
	console.log("check winner");
	if(matchedArr.length == 8){
		clearInterval(timer);
		document.getElementById('msg').innerHTML = "Great Job!";
		
	}
}


