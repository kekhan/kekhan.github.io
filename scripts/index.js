const canvas=document.getElementById('canvas');
const context=canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height=window.innerHeight+300;
let CurrentscrollPosition=0;
let ticking=false;

//create a class for main object
class Fret {
  constructor(x,y,width,height){
    this.y=y;
    this.x=x;
    this.width=width;
    this.height=height;
  }
  //getters

  //methods
  draw(){
    context.beginPath();
    context.moveTo(this.x,this.y);
    context.lineTo(this.x,250);
    context.strokeStyle='white';
    context.stroke();

  }

}
class Wave {
  constructor(y, amplitude, length, frequency){
    this.y=y;
    this.amplitude=amplitude;
    this.length=length;
    this.frequency=frequency;
  }
  //Getters
  // get strumPosition()
  //Methods
  wave(){
    // creates am illusion of a wave when a user hovers over the guitar string.
    for(let i=0; i<=canvas.width;i++){
      context.lineTo(i,this.y + Math.sin(i*this.length));
    }

  }

  drawLine(){
    // draws a straight line if users does not hover over
    for(let i=0; i<=canvas.width;i++){
      context.lineTo(i,this.y);
    }
  }
  draw(){
    context.beginPath();
    context.moveTo(0, this.y);
    this.wave();
    context.fillStyle='rgba(255,255,255,0.1)'
    context.stroke();
    //this.colorChange();
    increment-=this.frequency;
    
  }

  colorChange(){
    context.strokeStyle=`hsl(
      ${base*Math.sin(increment)},    
      ${50}%, 
      ${50}%
    )`;
  }

}
const fret1 = new Fret(canvas.width/2, canvas.height/2, 50, 100);
const wave1 = new Wave(canvas.height/4, -200, 0.01, 0.01);
const wave2 = new Wave(canvas.height/3, 100, 0.01, 0.01);
const wave3 = new Wave(canvas.height/2, 30, 0.01, 0.01);
let base = 250;
let increment = (wave1.frequency);
function Animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  window.requestAnimationFrame(Animate);
  wave1.draw();
  fret1.draw();
  wave2.draw();
  wave3.draw();
}
Animate();