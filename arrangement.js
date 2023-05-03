/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors


let faceList=[];
const numberOfFaces=6;
const scrollSpeed=3;
const topOfGrass=canvasHeight/2;
const topOfRoad=canvasHeight*.75;
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


function drawPath(bottomOfFaceY){
  fill(grey);
  strokeWeight(myStrokeWeight);
  let pathWidth=2;
  let pathChangeInX=80;
  quad(-pathWidth/2,bottomOfFaceY,+pathWidth/2,bottomOfFaceY,+pathWidth/2-pathChangeInX,topOfRoad,-pathWidth/2-pathChangeInX,topOfRoad);
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
  let face_size = canvasWidth / 5;
  let face_scale = face_size / 10;

  // clear screen
  
  //sky:
  background(myBgCol);
 
  
  //grass:
  rectMode(CORNERS);
  strokeWeight(1);
  fill(green);
  strokeWeight(myStrokeWeight*face_scale);
  rect(0,topOfGrass,width+10,topOfRoad);


  
  for(let i=0; i<faceList.length; i++) {
    push();
  
    translate(faceList[i].faceX,height/2);
    scale(face_scale);
    drawPath(faceList[i].headHeight/2);
    
    faceList[i].drawFace();
    
    faceList[i].faceX-=scrollSpeed;
    pop();
    
    
  }
  //draw road
  fill(darkGrey);
  strokeWeight(myStrokeWeight*face_scale);
  rect(0,topOfRoad,width+10,height);
  //draw lines on road
  rectMode(CENTER);
  fill(grey);
  faceList.forEach((face) => {
    rect(face.faceX-80,height-(height-topOfRoad)/2,70,20);
  });
  rectMode(CORNERS);
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
