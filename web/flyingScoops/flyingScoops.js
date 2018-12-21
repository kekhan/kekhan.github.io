 /*
 Simulating trajectile by using an ice creem scoop and a cone. If the icecream scoop
 falls in cone than it should freeze on top of the cone. Otherwise ice cream scoop should
 fall on bottom of screen.
 values of kinematic variables
  - gravity = -0.050
  - initial y velocity = 10*sin(180)
  - acceseration in the y direction is the gravity
  - initial x velocity = 3.4*cos(180)
*/



//create variables to hold canvas tag


//create variables to hold the canvas tag
var image = new Image();
var urlscoops = "https://thumbs.dreamstime.com/b/scoops-ice-cream-15853409.jpg";
image.src = "https://media.istockphoto.com/photos/ice-cream-picture-id500545362?k=6&m=500545362&s=612x612&w=0&h=_RBr9mZ5XSXRuKR4OO0qwf2TQHRYwGB1SugXbdZNoMk=";
var cone = new Image();
cone.src = "https://www.webstaurantstore.com/images/products/extra_large/42980/455097.jpg";
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var start = false;
var icecream;
var cone;
var clickX = 0;
var clickY = 0;
var angle;
var speed;


// the sprite object
var srcWidth = 800;
var srcHeight = 500;
var col = 3;
var row = 2;
var currentFrame = 0;
var trackleft = 1;
var trackright =0;


var spriteObject = {
	srcX:0,
	srcY:0,
	flavor:"",
	x:0,
	y:0,
	width: srcWidth/col,
	height: srcHeight/row,
}

// make the array for scoops
var scoops = [];
var chocolate = Object.create(spriteObject);
chocolate.x = 0;
chocolate.y = canvas.height-100;
chocolate.flavor = "chocolate";
chocolate.srcX = (currentFrame+2%col) * chocolate.width;
chocolate.srcY = trackright * chocolate.height;

scoops.push(chocolate);


var scoopImage = new Image();
scoopImage.src = urlscoops;

// add event listeners


window.addEventListener('click', function(event){
	clickX = event.clientX ;
	clickY = event.clientY;
	start = true;
})

// get input
function getInput(){
	angle = document.getElementById('angle');
	angle = Number(angle.value);
	speed = document.getElementById('speed');
	speed = Number(speed.value);
	console.log(angle,speed);
	//start = true;
	startGame();

}




// start screen
function startGame(){
	//var input = prompt("Enter y to play");
	//if(input === "y" || input =="Y"){
	start = true;
	icecream = new Component(image,50,canvas.height-100,100,100,'blue',true,false);
	cone = new Component(cone,canvas.width-500, canvas.height-100,100,100,'yellow',false,true);
	animate();
}

// create the sprites for scoops

// make a components function for all the game's objects
function Component(img,x,y,width,height,color,isScoop,isCone){
	// declare variable for this
	this.x = x;
	this.img = img;
	this.y = y;
	this.dy = 0;
	this.dx = 0;
	this.gravity = (-0.050);
	this.gravitySpeed = 0;
	this.color = color;
	this.width = width;
	this.height = height;


	// make draw function to draw all components
	this.draw = function(){


		if(isScoop){

			for(var i =0; i<scoops.length;i++){
			    num = Math.floor(Math.random() * 3)
			    //console.log(num);
			    var scoop = scoops[0];
			    context.drawImage(scoopImage,scoop.srcX,scoop.srcY,scoop.width,scoop.height,scoop.x,
				    scoop.y,scoop.width/3,scoop.height/3);
			}
		}
		if(isCone){

		    context.drawImage(this.img,this.x,this.y,this.width,this.height);

		}

}


	// make update function to update component's movement
	this.update = function(){
		//console.log(isScoop);
		if(isScoop){
		// draw the ice cream scoop



		    this.draw();
		    //scoop collides with bottom of screen
		   if(chocolate.y + chocolate.height/3 < canvas.height ){
			    this.gravitySpeed += this.gravity;

			    chocolate.y += Math.sin(180)*8 - this.gravitySpeed;
			    console.log(chocolate.y);
			    chocolate.x += -Math.cos(180)*3.4;
			}


			else if(chocolate.y + chocolate.height > canvas.height ){
			    chocolate.y = chocolate.y;
			    chocolate.x = chocolate.x;
			}



		}

		if(isCone){
			// draw the icecream cone
			this.draw();
			this.collision();


		}


	}
	// make collision function to dettect collisions of scoops with cones
	this.collision = function() {
		// body...

		if((chocolate.x) < (this.x + this.width) && (chocolate.x) > this.x &&
            (chocolate.y) < this.y + this.height && (chocolate.y) > this.y){
               chocolate.y = cone.y-67;//canvas.width-cone.width;
               chocolate.x = cone.x;//canvas.height-cone.height;
               var scoop = scoops[0];
			    context.drawImage(scoopImage,scoop.srcX,scoop.srcY,scoop.width,scoop.height,scoop.x,
				    scoop.y,scoop.width/3,scoop.height/3);
               start = false;
               //this.gravity = 0;
               //this.gravitySpeed=0;

		}
		//console.log("fun", chocolate.y)
	}

	// make sound function to trigger a sound of icecream scoop being thrown
	// and colliding with cone
	this.sound = function(){

	}
}
// make game loop by using requestAnimationFrame() method
function animate(){
	//console.log(clickX);
	if(start == true){


		context.clearRect(0,0,canvas.width,canvas.height);
		icecream.update();
		cone.update();
		cone.collision();
		context.font=  "30px Arial";
		context.fillText("Flying Scoop",50 ,50)
		requestAnimationFrame(animate);
	}

}
