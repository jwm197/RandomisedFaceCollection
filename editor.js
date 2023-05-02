/*
 * This editor shows the possible faces that can be created
 */

const canvasWidth = 960;
const canvasHeight = 500;
const face=new Face();
const bg_color = [71, 222, 219];
let slider1, slider2, slider3, slider4, slider5;
let slider6, slider7, slider8, slider9, slider10,slider11,slider12,slider13,slider14,slider15;
let slider16,slider17,slider18,slider19,slider20;
let faceSelector;
let faceGuideCheckbox;

function setup () {

  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // create sliders
  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 100, 50);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);
  slider5 = createSlider(0, 100, 50);
  slider6 = createSlider(0, 100, 50);
  slider7 = createSlider(0, 100, 50);
  slider8 = createSlider(0, 100, 50);
  slider9 = createSlider(0, 100, 50);
  slider10 = createSlider(0, 100, 50);
  slider11 = createSlider(0, 100, 50);
  slider12 = createSlider(0, 100, 50);
  slider13 = createSlider(0, 100, 50);
  slider14 = createSlider(0, 100, 50);
  slider15 = createSlider(0, 100, 50);
  slider16 = createSlider(0, 100, 50);
  slider17 = createSlider(0, 100, 50);
  slider18 = createSlider(0, 100, 50);
  slider19 = createSlider(0, 100, 50);
  slider20 = createSlider(0, 100, 50);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');
  slider6.parent('slider6Container');
  slider7.parent('slider7Container');
  slider8.parent('slider8Container');
  slider9.parent('slider9Container');
  slider10.parent('slider10Container');
  slider11.parent('slider11Container');
  slider12.parent('slider12Container');
  slider13.parent('slider13Container');
  slider14.parent('slider14Container');
  slider15.parent('slider15Container');
  slider16.parent('slider16Container');
  slider17.parent('slider17Container');
  slider18.parent('slider18Container');
  slider19.parent('slider19Container');
  slider20.parent('slider20Container');

  faceGuideCheckbox = createCheckbox('', false);
  faceGuideCheckbox.parent('checkbox1Container');

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.option('3');
  faceSelector.value('1');
  faceSelector.parent('selector1Container');
}



function draw () {
  strokeWeight(0.2);

  let mode = faceSelector.value();

  background(bg_color);

  let s1 = slider1.value();
  let s2 = slider2.value();
  let s3 = slider3.value();
  let s4 = slider4.value();
  let s5 = slider5.value();
  let s6 = slider6.value();
  let s7 = slider7.value();
  let s8 = slider8.value();
  let s9 = slider9.value();
  let s10 = slider10.value();
  let s11 = slider11.value();
  let s12 = slider12.value();
  let s13 = slider13.value();
  let s14 = slider14.value();
  let s15 = slider15.value();
  let s16 = slider16.value();
  let s17 = slider17.value();
  let s18 = slider18.value();
  let s19 = slider19.value();
  let s20 = slider20.value();

  let show_face_guide = faceGuideCheckbox.checked();

  // use same size / y_pos for all faces
  let face_size = canvasWidth / 5;
  let face_scale = face_size / 10;
  let face_y = height / 2;
  let face_x = width / 2;

  push();
  translate(face_x, face_y);
  scale(face_scale);

  push();
  
   // draw face using values mapped from 3 sliders
   face.sideBurn=sideBurns[Math.floor(map(s1, 0, 100, 0,sideBurns.length))];
   face.sideBurnHeight=map(s2, 0, 100, minSideBurnHeight, maxSideBurnHeight);
   
   face.noseHeight=map(s4, 0, 100, minNoseHeight, maxNoseHeight);
   face.noseDirection=noseDirections[Math.floor(map(s5, 0, 100, 0,noseDirections.length))];
   face.noseY=map(s6, 0, 100, minNoseY, maxNoseY);
   face.noseWidth=map(s3, 0, 100, minNoseWidth, face.getMaxNoseWidth());
   
   face.eyeWidth=map(s8, 0, 100, minEyeWidth, maxEyeWidth);
   face.eyeHeight=map(s9, 0, 100, minEyeHeight, maxEyeHeight);
   face.innerEyeWidth=map(s10, 0, 100, minInnerEyeWidth, maxInnerEyeWidth);
   face.innerEyeHeight=map(s11, 0, 100, minInnerEyeHeight, maxInnerEyeHeight);
   face.eyeX=map(s7, 0, 100, minEyeX, face.getMaxEyeX());
   face.earShape=earShapes[Math.floor(map(s12, 0, 100, 0,earShapes.length))];
   face.earY=map(s13, 0, 100, minEarY, maxEarY);
   face.innerEarWidth=face.earWidth*map(s14, 0, 100, minInnerEarWidth, maxInnerEarWidth);
   face.innerEarHeight=face.headHeight*map(s15, 0, 100, minInnerEarHeight, face.getMaxInnerEarHeight());
   face.hasTeeth=0.5<map(s16, 0, 100, 0,1);
   face.mouthWidth=map(s17, 0, 100, minMouthWidth,maxMouthWidth);
   face.mouthHeight=map(s18,0,100,minMouthHeight,face.getMaxMouthHeight());
   face.mouthY=map(s19, 0, 100, face.getMinMouthY(), face.getMaxMouthY());
   face.numberOfteeth=Math.floor(map(s20, 0, 100, minNumberOfteeth,maxNumberOfTeeth));
   face.drawFace();
  

  pop();

  if(show_face_guide) {
    strokeWeight(0.1);
    rectMode(CORNER); 
    noFill()
    stroke(0, 0, 255);
    rect(-10, -10, 20, 20);
    line(  0, -11,  0, -10);
    line(  0,  10,  0, 11);
    line(-11,   0,-10,  0);
    line( 11,   0, 10,  0);
  }

  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
