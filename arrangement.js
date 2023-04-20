/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [71, 222, 219];
let faceList=[];

function setup () {
  
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
  for(let i=0;i<28;i++){
    let x=faceList.push(new Face())
    
  }
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
  faceList=[];
  for(let i=0;i<28;i++){
    let x=faceList.push(new Face())
    
  }
}



function mouseClicked() {
  changeRandomSeed();
  
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  
  //noStroke();

  // draw a 7x4 grid of faces
  let face_size = canvasWidth / 5;
  let face_scale = face_size / 10;
  let face_y = height / 2;
  let face_x = width / 2;

  for(let i=0; i<5; i++) {
    // for(let j=0; j<3; j++) {
      // let y = h/2 + 20*h*i;
      // let x = w/2 + 20*w*j;
        push();
        translate((i)*width/4,height/2);
        scale(face_scale);
        faceList[i].drawFace();
        //faceList[i*j+j].drawFace();
        //orangeAlienFace(tilt_value, eye_value, mouth_value);
        pop();
      
    //}
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
