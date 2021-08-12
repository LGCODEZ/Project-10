var shipanimation,ship,backGround,back;
function preload(){
    shipanimation=loadAnimation("ship-1.png","ship-2.png");
    backGround=loadImage("sea.png");
}

function setup(){
  createCanvas(800,800);
 
  back=createSprite(200,300,10,10);
  back.addImage("e",backGround);
  back.scale=0.5;
  ship=createSprite(200,400,200,200)
  ship.addAnimation("t",shipanimation);
  ship.scale=0.4;
  
}

function draw() {
  //background("blue");
  back.velocityX=-2;
  if (back.x<0){
    back.x=back.width/2;
  }
 drawSprites();

} 