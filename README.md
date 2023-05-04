For this project I was determined to make a face set with a lot of variety which I ended up with as it ended up being given it has 20 randomised parameters which can lead to a very high degree of variation. My colour scheme was inspired by the De Stijl movement which has made some coloured sections between black strokes. As my faces are very house like I styled my arrangement to look like a street.  I wanted to extend my JavaScript knowledge through the use of object-orientated programming which I feel I have been very successful in (although it was potentially overkill for a project like this). I have also learnt a lot about the p5js library and how it works thanks to digging through the code of it and how to import certain functions from it before the library is loaded in the setup function. If I had more time I would like to fiddle with the ears further to stop the eyes from overlapping with them when eyeX is large and the eye itself is large. As well as the single eye and how it can overlap with the nose when it is a Cyclops. These are rare edge cases though so it isn’t a big deal and overall I am very happy with the result. 

The randomised variables are:

| Variable name  | Description                                               | Bounds                       |
|----------------|-----------------------------------------------------------|------------------------------|
| sideBurn       | Discrete variable that defines the style of the sideburn  | define in sideburns array options are: "none", "square", "triangle" |
| sideBurnHeight | Continous variable that defines the height of the sideburn    |0 if not drawn or in range minSideBurnHeight to maxSideBurnHeight if drawn                               |
| earShape       | Discrete variable that defines the style of the inner ear sideburn                                                        |  define in earShapes array options are "circle","triangle","square","none"                            |
| noseHeight     | Continous variable define the height of the nose                                                          | range minNoseHeight to maxNoseHeight                             |
| noseDirection  |Discrete variable that defines the nose style                                                            |values in noseDirections array of "left", "right", "both"                              |
| noseY          | Continuous variable defines y position of the centre of the nose                                                           |range of minNoseWidth to getMaxNoseWidth()                             |
| noseWidth      | Continous variable that define the nose width                                                          |range of minNoseWidth to getMaxNoseWidth()                               |
| eyeWidth       | Continous variable that is the width of each eye                                                          |range of minEyeWidth to maxEyeWidth                              |
| eyeX           |Continous variable that is the x offset of the eyes from the centre of the face variable                                                            |range of minEyeX to getMaxEyeX()                              |
| eyeHeight      |Continous variable defining the height of each eye                                                         | range minEyeHeight to maxEyeHeight                              |
| innerEyeWidth  |Continous variable defining the width of each pupil                                                           |range minInnerEyeWidth to maxInnerEyeWidth                               |
| innerEyeHeight |                                                           |                              |
| earY           |                                                           |                              |
| innerEarWidth  |                                                           |                              |
| innerEarHeight |                                                           |                              |
| mouthHeight    |                                                           |                              |
| mouthWidth     |                                                           |                              |
| hasTeeth       |                                                           |                              |
| mouthY         |                                                           |                              |
| numberOfteeth  |                                                           |                              |

Note these variables maybe adjusted after generating the random values but these are the bounds at the time of generation 