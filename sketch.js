var sword;
var alien;
var fruit;
 var play=1
 var end=0
 var gameState=1
function preload(){
  sword= loadImage("sword.png");

var sword=createSprite(300,400,20,20);
     





}

function setup(){
  createCanvas(600,600);
}




function draw(){

  sword.y=World.mouseY;
sword.x=World.mouseX;
  
  
  
  drawSprites();
  
  
  
}
