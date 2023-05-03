/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = myBgCol;

let faceList=[];
const numberOfFaces=6;
let scrollSpeed=3;
function setup () {
  
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
  generateFaceList();
}
function generateFaceList(){
  faceList=[];
  for(let i=0;i<numberOfFaces;i++){
    let face=new Face();
    face.faceX=i*width/4;
    faceList.push(face);
  }
}
function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
  
  
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


  let face_size = canvasWidth / 5;
  let face_scale = face_size / 10;
  for(let i=0; i<faceList.length; i++) {
    push();
  
    translate(faceList[i].faceX,height/2);
    scale(face_scale);
    faceList[i].drawFace();
    faceList[i].faceX-=scrollSpeed;
    pop();
  }
  if(faceList[0].faceX<=-canvasWidth/4){
    faceList.splice(0,1);
    let face=new Face();
    face.faceX=faceList.length*width/4;
    faceList.push(face);
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
