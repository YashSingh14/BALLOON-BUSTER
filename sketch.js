var bow, back, back1, balloon10, balloon20, balloon30, balloon40, bow1, arrow1, arrow, redB, blueB, pinkB, GreenB;

var score = 0
function preload(){
 //load your images here 
  back1=loadImage("background0.png")
  balloon1=loadImage("blue_balloon0.png")
  balloon2=loadImage("red_balloon0.png")
  balloon3=loadImage("pink_balloon0.png")
  balloon4=loadImage("green_balloon0.png")
  bow = loadImage("bow0.png")
  arrow1 = loadImage("arrow0.png")
  
}

function setup() {
  createCanvas(400, 400);
  back = createSprite(0, 0, 0, 0)
  bow1 = createSprite(370, 200, 20, 20)
  arrow = createSprite(340, 200, 20, 20)
  arrow.addImage("arrow", arrow1)
 
  back.addImage("background", back1)
  bow1.addImage("bows", bow)
  back.scale=2
  bow1.scale=1
  arrow.scale=0.25

redB = new Group();
  blueB = new Group();
  greenB = new Group();
  pinkB = new Group();

}

function draw() {
  background("white")
  back.addImage("background", back1)
  back.velocityX=-3
  bow1.y=mouseY
  arrow.y=mouseY
  if(back.x<0){
   back.x=back.width/2
 }
  if(keyDown("space")){
    arrow.velocityX=-15     
  }
  
  if(arrow.x<0){
    arrow.x=340;
    arrow.velocityX=0;
  }
   if (frameCount % 50 === 0) {
    balloon10 = createSprite(90,400,40,10);
    balloon10.addImage("balloon1", balloon1)
    balloon10.x = Math.round(random(10,250))
    balloon10.scale = 0.09;
    balloon10.velocityY = -2;
     blueB.add(balloon10);
   }
      if (frameCount % 50 === 0) {
    balloon20 = createSprite(70,420,40,10);
    balloon20.addImage("balloon2", balloon2)
    balloon20.x = Math.round(random(10, 250))
    balloon20.scale = 0.07;
    balloon20.velocityY = -2;
        redB.add(balloon20);
 }
     if (frameCount % 50 === 0) {
    balloon30 = createSprite(200,440,40,10);
    balloon30.addImage("balloon3", balloon3)
    balloon30.x = Math.round(random(10,250))
    balloon30.scale = 1;
    balloon30.velocityY = -2;
       pinkB.add(balloon30);
     }
   if (frameCount % 50 === 0) {
    balloon40 = createSprite(300,460,40,10);
    balloon40.addImage("balloon4", balloon4)
    balloon40.x = Math.round(random(30, 250))
    balloon40.scale = 0.08;
    balloon40.velocityY = -2;
    greenB.add(balloon40);
 }
  
  if(greenB.isTouching(arrow)){
    arrow.destroy();
      greenB.destroyEach();
  arrow = createSprite(340, 200, 20, 20)
  arrow.addImage("arrow", arrow1)
  arrow.y=mouseY
  arrow.scale=0.25
  if(arrow.x<0){
    arrow.x=340;
    arrow.velocityX=0;
  }
    score = score + 1;
  }
  
  if(redB.isTouching(arrow)){
    arrow.destroy();
      redB.destroyEach();
  arrow = createSprite(340, 200, 20, 20)
  arrow.addImage("arrow", arrow1)
  arrow.y=mouseY
  arrow.scale=0.25
  if(arrow.x<0){
    arrow.x=340;
    arrow.velocityX=0;
  }
  }
  
  if(blueB.isTouching(arrow)){
    arrow.destroy();
      blueB.destroyEach();
  arrow = createSprite(340, 200, 20, 20)
  arrow.addImage("arrow", arrow1)
  arrow.y=mouseY
  arrow.scale=0.25
  if(arrow.x<0){
    arrow.x=340;
    arrow.velocityX=0;
  }
    score = score + 1;
  }
  
  if(pinkB.isTouching(arrow)){
    arrow.destroy();
      pinkB.destroyEach();
  arrow = createSprite(340, 200, 20, 20)
  arrow.addImage("arrow", arrow1)
  arrow.y=mouseY
  arrow.scale=0.25
  if(arrow.x<0){
    arrow.x=340;
    arrow.velocityX=0;
  }
    score = score +1;
  }
  
  drawSprites()
    
text ("SCORE:"+score, 200, 20)
}


