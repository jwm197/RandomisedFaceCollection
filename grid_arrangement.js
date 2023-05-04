/*
 * This program draws faces as a grid.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;
let faceList=[];
const numberOfFaces=30;
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
  generateFaceList();
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
  generateFaceList();
}

// global variables for colors
const bg_color1 = [71, 222, 219]
function generateFaceList(){
  faceList=[];
  for(let i=0;i<numberOfFaces;i++){
    let face=new Face();
    face.faceX=i*width/4;
    faceList.push(face);
  }
}
function mouseClicked() {
  changeRandomSeed();
  generateFaceList();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  // draw a 7x4 grid of faces
  let w = canvasWidth / 7;
  let h = canvasHeight / 4;
  let index=0;
  for(let i=0; i<4; i++) {
    for(let j=0; j<7; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
      
        
        push();
        translate(x, y);
        scale(w/25, h/25);
        faceList[index].drawFace();
        pop();
        index++;
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
