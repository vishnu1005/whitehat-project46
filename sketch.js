let mySound;

var cop,cop_img;; 
var jail ,jail_img;
var thief,thief_img;
var brick1,brick2,brick3;
var wright,lepht,upht,downee;
var goon1,goon2,goon3,goon_img;

function preload() {

 
 

  cop_img=loadImage("star.png");
  jail_img=loadImage("jail.png");
  thief_img=loadImage("target.png")
  goon_img=loadImage("goon.png")

}

function setup() {

  createCanvas(1200, 1000-200);

  cop=createSprite(200,200,20,20);
  cop.addImage(cop_img);
  cop.scale=0.2;

  jail=createSprite(1090,110,400,400);
  jail.addImage(jail_img);

  thief=createSprite(300,300,20,20);
  thief.velocityY=10;
  thief.velocityX=14;
  thief.addImage(thief_img);
  thief.scale=0.15;

  goon1=createSprite(300,300,20,20)
  goon1.velocityY=20;
  goon1.velocityX=8;
  goon1.addImage(goon_img);
  goon1.scale=0.05;

  goon2=createSprite(300,300,20,20)
  goon2.velocityY=6;
  goon2.velocityX=8;
  goon2.addImage(goon_img);
  goon2.scale=0.05;

  goon3=createSprite(300,300,20,20)
  goon3.velocityY=12;
  goon3.velocityX=9;
  goon3.addImage(goon_img);
  goon3.scale=0.05;

  brick1=createSprite(300,400,400,10);
  brick2=createSprite(600,700,300,10);
  brick3=createSprite(700,200,10,325)

  wright=createSprite(975,1,10,10000)
  upht=createSprite(1,10,20000,10)
  lepht=createSprite(5,1,10,10000)
  downee=createSprite(5,789,10000,10)
 

}

function draw()
{
  
  background(128,0,128);

 createEdgeSprites();

 
thief.bounceOff(brick1);
thief.bounceOff(brick2);
thief.bounceOff(brick3);
thief.bounceOff(wright);
thief.bounceOff(upht);
thief.bounceOff(lepht);
thief.bounceOff(downee);

cop.bounceOff(brick1);
cop.bounceOff(brick2);
cop.bounceOff(brick3);
cop.bounceOff(wright);
cop.bounceOff(upht);
cop.bounceOff(lepht);
cop.bounceOff(downee);

goon1.bounceOff(brick1);
goon1.bounceOff(brick2);
goon1.bounceOff(brick3);
goon1.bounceOff(wright);
goon1.bounceOff(upht);
goon1.bounceOff(lepht);
goon1.bounceOff(downee);

goon2.bounceOff(brick1);
goon2.bounceOff(brick2);
goon2.bounceOff(brick3);
goon2.bounceOff(wright);
goon2.bounceOff(upht);
goon2.bounceOff(lepht);
goon2.bounceOff(downee);

goon3.bounceOff(brick1);
goon3.bounceOff(brick2);
goon3.bounceOff(brick3);
goon3.bounceOff(wright);
goon3.bounceOff(upht);
goon3.bounceOff(lepht);
goon3.bounceOff(downee);


  if(keyDown(UP_ARROW)) {
    cop.velocityX =0;
    cop.velocityY = -2;
  }
  
  if(keyDown(DOWN_ARROW)){
    cop.velocityX=0;
    cop.velocityY=2;
  }
  
  if(keyDown(RIGHT_ARROW))
  { 
  cop.velocityX=2;
  cop.velocityY=0;
  }
  
  if(keyDown(LEFT_ARROW))
  {
    cop.velocityX=-2;
    cop.velocityY=0;
  }

  //textSize(20);
 // text('Hello Player!!', 20, 20);
  //text('Tap here to play music', 20, 40);


  drawSprites();
}

////function sherlockSound() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  
  //sherlock.play();
//}