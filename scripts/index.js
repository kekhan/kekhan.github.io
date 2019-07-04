const canvas=document.getElementById('canvas');
const context=canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height=window.innerHeight;

//create a class for main object

class Object {
  constructor(x,y,height, width){
    this.height=height;
    this.width=width;
    this.x=x;
    this.y=y;
  }
  //Getter
  get position_x(){
    return this.calcPositionX();
  }
  //Method
  calcPositionX(){
    return this.x+=1;
  }
  draw(){
    context.fillRect(this.x,this.y,this.width,this.height);
  }
}
let square = new Object(50,100,100,100);
function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  window.requestAnimationFrame(animate);
  square.draw();
  square.position_x;
}
//animate();
