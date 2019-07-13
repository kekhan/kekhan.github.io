const canvas=document.getElementById('canvas');
const context=canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height=window.innerHeight+300;
let CurrentscrollPosition=0;
let ticking=false;

//create a class for main object
class Wave {

}
class Object {
  constructor(x,y,height, width){
    this.height=height;
    this.width=width;
    this.x=x;
    this.y=y;
  }
  //Getters
  get position_x(){
    return this.calcPositionX();
  }
  get mousePositionX(){
    return this.calcEvent();
  }
  
  //Methods
  calcPositionX(pos){
    return this.x=pos;
  }
  mouseY(pos){
    return this.y=pos;
  }
  scaleSize(pos){
    return this.height=pos
  }

  draw(){
    context.fillRect(this.x,this.y,this.width,this.height);
    context.fillStyle="#03A6A6";
  }

}
/*let square = new Object(canvas.width*0.2,canvas.height*0.2,100,100);
window.addEventListener('mousemove', function(e){
  CurrentMouseXPosition=e.clientX;
  CurrentMouseYPosition=e.clientY;
  if(!ticking){

    window.requestAnimationFrame(function(){
      context.clearRect(0,0,canvas.width,canvas.height);

      square.draw();
      square.calcPositionX(CurrentMouseXPosition);
      square.mouseY(CurrentMouseYPosition);
      ticking=false;
    });

  }
  ticking=true;


});
*/

context.beginPath();
context.moveTo(0, canvas.height/2);
for(let i=0; i<=canvas.width;i++){
  context.lineTo(i,canvas.height/3 + Math.sin(i*0.01)*100);

}
context.strokeStyle="hsl(50,90%,50%)";
context.stroke();

