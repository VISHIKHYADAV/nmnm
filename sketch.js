
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  //creating monkey
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;

  //creating ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  obstacleGroup=createGroup();
  bananaGroup=createGroup();
  var survivalTime=0;
  score=0;
  
}


function draw() {
  background(180);
  text(mouseX+","+mouseY,mouseX,mouseY);
 
  
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  
  spawnObstacles();
  spawnBanana();
  
  if(keyDown("space")&&monkey.y>=300){
    monkey.velocityY=-12
    
  }
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+1;     
     
     
     }

  
  monkey.velocityY=monkey.velocityY+0.8;
  
 monkey.collide(ground);

  drawSprites();
  
 text("Score: "+ score, 300,50);
  
  stroke("white");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time"+survivalTime,100,50);
}

function spawnObstacles(){
  if(frameCount%150===0){
     var obstacle=createSprite(500,310,20,20);
     obstacle.addImage(obstacleImage);
     obstacle.velocityX=-6; 
    
    var rand = Math.round(random(50));
    switch(rand){
    case 1: obstacle.addImage(obstacleImage);
              break;
              default:break;
    }
    
    obstacle.scale=0.20;
    obstacle.lifetime=500;
    
    
    
    obstacleGroup.add(obstacle);
    obstacle.setCollider("circle",0,0,200);

  
  
  
  
}

}

function spawnBanana(){
  if(frameCount%160===0){
     banana=createSprite(600,200,40,10);
     banana.y=Math.round(random(250,300));
     banana.addImage(bananaImage);
     banana.scale=0.15;
     banana.velocityX=-3;
    
    monkey.lifetime=500;
    
    
    banana.depth=monkey.depth;
    monkey.depth=monkey.depth+1;
    
    bananaGroup.add(banana);
    
    
    
    
    
     }
  
  
  
  
  
  
  
  
  
  
  
}

