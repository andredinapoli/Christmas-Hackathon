var mic;
var myImg, myImg2, myImg3, myImg4, myImg5;

function preload() {
myImg5 = loadImage("./images/tree4.png")    
myImg4 = loadImage("./images/tree3.png")
myImg3 = loadImage("./images/tree2.png")
myImg2 = loadImage("./images/tree1.png")
myImg = loadImage("./images/tree.png") 
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  mic = new p5.AudioIn();
  
  mic.start();
  
}

function draw() {
    
      
  imageMode (CENTER)    
  background(229,244,245);
    
  var vol = mic.getLevel();
  
  
  image(myImg, windowWidth/2, windowHeight/2, 228, 351)
    
      
    console.log(vol)
    fill(231,234,128)
    textStyle(BOLD)
    textSize(20+vol*50)
    textAlign(CENTER)
    text ("MERRY CHRISTMAS!", windowWidth/2, windowHeight/10)
      
  if (vol>=0.05) { 
  image(myImg2, windowWidth/2, windowHeight/2, 228, 351)
}

if (vol>=0.08) { 
 image(myImg3, windowWidth/2, windowHeight/2, 228, 351)
}
    
if (vol>=0.12) { 
  image(myImg4, windowWidth/2, windowHeight/2, 228, 351)
}

if (vol>=0.17) { 
 image(myImg5, windowWidth/2, windowHeight/2, 228, 351)
}
  
  if (vol>=0.2) { 
  image(myImg2, windowWidth/2, windowHeight/2, 228, 351)
}

if (vol>=0.25) { 
 image(myImg3, windowWidth/2, windowHeight/2, 228, 351)
}
    
if (vol>=0.28) { 
  image(myImg4, windowWidth/2, windowHeight/2, 228, 351)
}

if (vol>=0.32) { 
 image(myImg5, windowWidth/2, windowHeight/2, 228, 351)
}
    
if (vol>=0.37) { 
  image(myImg2, windowWidth/2, windowHeight/2, 228, 351)
}

if (vol>=0.42) { 
 image(myImg3, windowWidth/2, windowHeight/2, 228, 351)
}
    
if (vol>=0.47) { 
  image(myImg4, windowWidth/2, windowHeight/2, 228, 351)
}
  

}
    

function windowResized(){
resizeCanvas(windowWidth,windowHeight);
                                        
}