const canvas=document.getElementById('canvas');
const context=canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height=window.innerHeight+300;
let CurrentscrollPosition=0;
let ticking=false;

//create a class for main object

class Wave {
  constructor(y, amplitude, length, frequency){
    this.y=y;
    this.amplitude=amplitude;
    this.length=length;
    this.frequency=frequency;
  }
  //Getters
  
  //Methods
  draw(){


    context.beginPath();
    
    context.moveTo(0, this.y);

    for(let i=0; i<=canvas.width;i++){

      context.lineTo(i,this.y + Math.sin(i*this.length+increment)*this.amplitude*Math.sin(increment));
    }

    
    
    context.fillStyle='rgba(255,255,255,0.1)'

    context.stroke();

    increment-=this.frequency;
    context.strokeStyle=`hsl(
      ${base*Math.sin(increment)},    
      ${50}%, 
      ${50}%
    )`;


  }
}

const wave1 = new Wave(canvas.height/4, -200, 0.01, 0.01);
const wave2 = new Wave(canvas.height/3, 100, 0.01, 0.01);

const wave3 = new Wave(canvas.height/2, 30, 0.01, 0.01);

let base = 250;

let increment = (wave1.frequency);
function Animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  context.fillStyle='rgba(50,80,90,0.5)'
  
  window.requestAnimationFrame(Animate);
  wave1.draw();
  wave2.draw();
  wave3.draw();
}
Animate();