const canvas=document.getElementById('canvas');
const context=canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height=window.innerHeight;
let CurrentscrollPosition=0;
let ticking=false;

//create a class for main object

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
  get scrollPosition(){
    return this.calcEvent();
  }
  //Methods
  calcPositionX(pos){
    return this.x=pos*2;
  }

  draw(){
    context.fillRect(this.x,this.y,this.width,this.height);
    context.fillStyle="#03A6A6";
  }

}
let square = new Object(canvas.width*0.2,canvas.height*0.2,100,100);
window.addEventListener('scroll', function(e){
  CurrentscrollPosition=window.scrollY;
  if(!ticking){

    window.requestAnimationFrame(function(){
      context.clearRect(0,0,canvas.width,canvas.height);

      square.draw();
      square.calcPositionX(CurrentscrollPosition);
      ticking=false;
    });

  }
  ticking=true;

});
