/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */
const minSideBurnHeight=.1;
const maxSideBurnHeight=3;
const minNoseHeight=0.5;
const maxNoseHeight=4;
const minNoseWidth=0.5;
const maxNoseWidth=6;
const minNoseY=-1.5;
const maxNoseY=1.5; 
const noseDirections = ["left", "right", "both"];
const sideBurns = ["none", "square", "triangle"];
const minEyeX=.5;
const maxEyeX=5; 
const minEyeWidth=.5
const maxEyeWidth=5;
const minEyeHeight=.5;
const maxEyeHeight=5;
const minInnerEyeWidth=.1;
const maxInnerEyeWidth=.9;
const minInnerEyeHeight=.1;
const maxInnerEyeHeight=.9;


class Face{
  headHeight=8;
  headWidth=8; 
  
  foreHeadHeight=5;
  hairHeight=10;
  earWidth=3;
  skinColour=170;
  hairColour=0;
  
  sideBurnHeight=0;
  noseX=0;
  eyeBallCol=255;
  eyeCentreCol=0;
  eyeY=-3;
  
  constructor(){
    this.sideBurn=sideBurns[Math.floor(random() * sideBurns.length)];
    if(this.sideBurn!="none"){
      this.sideBurnHeight=random(minSideBurnHeight,maxSideBurnHeight);
    }
    this.noseWidth=random(minNoseWidth,maxNoseWidth);
    this.noseHeight=random(minNoseHeight,maxNoseHeight);
    this.noseDirection=noseDirections[Math.floor(random() * noseDirections.length)];
    this.noseY=random(minNoseY,maxNoseY);
    this.eyeX=random(minEyeX,maxEyeX);
    this.eyeWidth=random(minEyeWidth,maxEyeWidth);
    this.eyeHeight=random(minEyeHeight,maxEyeHeight);
    this.innerEyeWidth=random(minInnerEyeWidth,maxInnerEyeWidth);
    this.innerEyeHeight=random(minInnerEyeHeight,maxInnerEyeHeight);
    // this.headHeight=8;
    // this.headWidth=8; 
    
    // this.foreHeadHeight=5;
    // this.hairHeight=10;
    // this.earWidth=3;
   
  }
  
  
  drawSkin(){
    rectMode(CENTER);
    fill(this.skinColour);
    //noStroke();
    quad(-this.headWidth/2, -this.headHeight/2, this.headWidth/2, -this.foreHeadHeight,
    this.headWidth/2, this.headHeight/2, -this.headWidth/2, this.headHeight/2);
    
  }
  drawFace(){
    strokeWeight(0.2);
    this.drawEar();
    this.drawHair();
    this.drawSkin();
    this.drawEye();
    this.drawNose();
    
    
  }
  drawHair(){
    fill(this.hairColour);
    triangle(-this.headWidth/2-this.earWidth, -this.headHeight/2, this.headWidth/2, -this.headHeight/2, this.headWidth/2,-this.hairHeight);
    if(this.sideBurn=="square"){
      quad(-this.headWidth/2-this.earWidth, -this.headHeight/2, -this.headWidth/2, -this.headHeight/2, -this.headWidth/2, -this.headHeight/2+this.sideBurnHeight, -this.headWidth/2-this.earWidth, -this.headHeight/2+this.sideBurnHeight)
     
    }
    else if(this.sideBurn=="triangle"){
      triangle(-this.headWidth/2-this.earWidth, -this.headHeight/2, -this.headWidth/2, -this.headHeight/2, -this.headWidth/2-this.earWidth, -this.headHeight/2+this.sideBurnHeight)
    }
  }
  drawEar(){
    fill(this.skinColour);
    rect(-this.headWidth/2-this.earWidth,-this.headHeight/2,this.earWidth,this.headHeight);

  }
  drawEye(){
    fill(this.eyeBallCol);
    ellipse(-this.eyeX, this.eyeY, this.eyeWidth, this.eyeHeight);
    ellipse(this.eyeX, this.eyeY, this.eyeWidth, this.eyeHeight);
    fill(this.eyeCentreCol);
    ellipse(-this.eyeX, this.eyeY, this.eyeWidth*this.innerEyeWidth, this.eyeHeight*this.innerEyeHeight);
    ellipse(this.eyeX, this.eyeY, this.eyeWidth*this.innerEyeWidth, this.eyeHeight*this.innerEyeHeight);
  }
  drawNose(){
    if(this.noseDirection=="left"){
      triangle(this.noseX,this.noseY-this.noseHeight/2,this.noseX,this.noseY+this.noseHeight/2,this.noseX-this.noseWidth,this.noseY+this.noseHeight/2);
    }
    else if(this.noseDirection=="right"){
      triangle(this.noseX,this.noseY-this.noseHeight/2,this.noseX,this.noseY+this.noseHeight/2,this.noseX+this.noseWidth,this.noseY+this.noseHeight/2);
    }
    else{
      triangle(this.noseX,this.noseY-this.noseHeight/2,this.noseX+this.noseWidth,this.noseY+this.noseHeight/2,this.noseX-this.noseWidth,this.noseY+this.noseHeight/2);
    }
  }

 


}



// /*
//  * tilt_value is in degrees
//  * eye_value is an integer number of eyes: either 0, 1, 2, or 3
//  * mouth_value is how open the mouth is and should generally range from 0.5 to 10
//  */
// function orangeAlienFace(tilt_value, eye_value, mouth_value) {
//   const bg_color3 = [71, 222, 219];
//   const fg_color3 = [255, 93, 35];

//   let headSize = 20
//   let eyeSize = 5;
//   let centerX = 0;
//   let Iy = -4
//   let distactBetweenEyes = 5
//   let MouthDrop = 7
  
//   // rotation in degrees
//   angleMode(DEGREES);
//   rotate(tilt_value);

//  // head
//   noStroke();
//   fill(fg_color3);
//   ellipse(centerX, 0, headSize, headSize);

//   // 2 traditonal eyes
//   if (eye_value === 1 || eye_value == 3) {
//     fill(bg_color3);
//     ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
//   }
// // middle eye
//   if (eye_value >= 2) {
//     fill(bg_color3);
//     ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
//     ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
//   }

//   // mouth
//   fill(bg_color3);
//   ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
// }


// function simplePurpleFace() {
//   fill(234, 122, 244);
//   noStroke();
//   // head
//   ellipse(0, 0, 20);
//   // eyes
//   fill(255, 217, 114);
//   ellipse(-3, -3, 3);
//   ellipse( 3, -3, 3);
// }

// /*
//  * thinness_value ranges from 0-100 and indicates how thin the face is
//  */
// function blockyFace(thinness_value) {
//   // head
//   noStroke();
//   fill(134, 19, 136);
//   let head_width = map(thinness_value, 0, 100, 8, 20);
//   rect(-head_width/2, -9, head_width, 18);
 

//   // eyes
//   fill(234, 122, 244);
//   ellipse(-2, -4, 1);
//   ellipse( 2, -4, 1);
// }
