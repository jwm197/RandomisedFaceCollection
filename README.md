A live version of the site can be found at: 
https://23-mddn342.github.io/project-2-randomised-collections-jwm197/ 

For this project I was determined to make a face set with a lot of variety which I ended up with as it ended up being given it has 20 randomised parameters which can lead to a very high degree of variation. My colour scheme was inspired by the De Stijl movement which has made some coloured sections between black strokes. As my faces are very house like I styled my arrangement to look like a street.  I wanted to extend my JavaScript knowledge through the use of object-orientated programming which I feel I have been very successful in (although it was potentially overkill for a project like this). I have also learnt a lot about the p5js library and how it works thanks to digging through the code of it and how to import certain functions from it before the library is loaded in the setup function. If I had more time I would like to fiddle with the ears further to stop the eyes from overlapping with them when eyeX is large and the eye itself is large. As well as the single eye and how it can overlap with the nose when it is a Cyclops. These are rare edge cases though so it isn’t a big deal and overall I am very happy with the result. 

The randomised variables are:

| Variable name  | Description                                               | Bounds                       |
|----------------|-----------------------------------------------------------|------------------------------|
| sideBurn       | Discrete variable that defines the style of the sideburn  | Defined in the sideburns array. The options are: "none", "square", "triangle" |
| sideBurnHeight | Continous variable that defines the height of the sideburn    |0 if not drawn or in range minSideBurnHeight to maxSideBurnHeight if drawn                               |
| earShape       | Discrete variable that defines the style of the inner ear sideburn                                                        |  Defined in earShapes array. The options are "circle","triangle","square","none"                            |
| noseHeight     | Continous variable define the height of the nose                                                          |minNoseHeight to maxNoseHeight                             |
| noseDirection  |Discrete variable that defines the nose style                                                            |Defined in the  noseDirections array. The options are: "left", "right", "both"                              |
| noseY          | Continuous variable defines y position of the centre of the nose                                                           |minNoseWidth to getMaxNoseWidth()                             |
| noseWidth      | Continous variable that define the nose width                                                          |minNoseWidth to getMaxNoseWidth()                               |
| eyeWidth       | Continous variable that is the width of each eye                                                          |minEyeWidth to maxEyeWidth                              |
| eyeX           |Continous variable that is the x offset of the eyes from the centre of the face variable                                                            |minEyeX to getMaxEyeX()                              |
| eyeHeight      |Continous variable defining the height of each eye                                                         |minEyeHeight to maxEyeHeight                              |
| innerEyeWidth  |Continous variable defining the width of each pupil                                                           |minInnerEyeWidth to maxInnerEyeWidth                               |
| innerEyeHeight |Continous variable defining the height of each pupil                                                           |minInnerEyeHeight to maxInnerEyeHeight                              |
| earY           |Continous variable defining the y position of the centre of the inner ear                                                           |minEarY to maxEarY                              |
| innerEarWidth  |Continous variable defining the width of the inner ear                                                           |(minInnerEarWidth to maxInnerEarWidth) multiplied by the face's earWidth                             |
| innerEarHeight |Continous variable defining the height of the inner ear                                                           |(minInnerEarHeight to getMaxInnerEarHeight()) multiplied by face's headHeight                             |
| mouthHeight    |Continous variable defining the height of the mouth                                                           |minMouthHeight to getMaxMouthHeight()                              |
| mouthWidth     |Continous variable defining the width of the mouth                                                          |minMouthWidth to maxMouthWidth                              |
| hasTeeth       |Discrete boolean value defining if the mouth has teeth or not                                                           |True or False                               |
| mouthY         |Continous variable defining the y position of the centre of the mouth                                                    |getMinMouthY() to getMaxMouthY()                              |
| numberOfteeth  |Continous integer variable defining the number of teeth in the mouth                                                           |minNumberOfteeth to maxNumberOfTeeth                             |

Note these variables maybe adjusted after generating the random values but these are the bounds at the time of generation. Also note all variables listed in the bounds are global constants unless stated to be a face's and all functions listed are in the Face class. 
