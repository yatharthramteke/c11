
var trex ,trex_running;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")


}

function setup(){
  createCanvas(600,200)
  ground = createSprite(600,180,1200,20)
  //create a trex sprite
 trex=createSprite(20,160,20,50)
 trex.addAnimation("run",trex_running)

trex.scale=0.5
}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY =-8
  }
trex.velocityY=trex.velocityY+0.8
trex.collide(ground)
  drawSprites()
  

}
