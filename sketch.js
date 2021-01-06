
const TOTAL = 250;
var birds = [];
let savedBirds = [];
var pipes = [];
var parallax = 0.8;
var birdSprite;
var pipeBodySprite;
var pipePeakSprite;
var bgImg;
var bgX;


let  counter = 0;



function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < TOTAL; i++ ){
    birds[i] = new Bird();
  }
    pipes.push(new Pipe());
  }


function draw() {
  background(0);
 




  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update();
    pipes[i].show();

  
    for (let j = birds.length - 1; j >= 0; j--){
      if(pipes[i].hits(birds[j])){
    savedBirds.push(birds.splice(j, 1)[0]);     
       }
     }
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }
 
  for(let bird of birds){
    bird.think(pipes);
    bird.update();
    bird.show();
   }
   if(birds.length === 0){
    counter = 0 ;
     nextGeneration();
     pipes = [];
  }

  if(frameCount % 100 === 0){
    pipes.push(new Pipe());
  }
   counter++;

 


}

//function keyPressed() {
  //if (key === ' ') {
    //bird.up();
    //if (isOver) reset(); //you can just call reset() in Machinelearning if you die, because you cant simulate keyPress with code.
  //}
//}

