astronaut=createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale=0.1;


function preload(){ 
  bg=loadImage("images/iss.png");
  sleep=loadAnimation("images/sleep.png");
  brush=loadAnimation("images/brush.png");
  gym=loadAnimation("images/gym.png");
  eat=loadAnimation("images/eat.png");
  drink=loadAnimation("images/eat.png");
  move=loadAnimation("images/move.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  createEdgeSprites();
  astronaut.bounceOff(topEdge);
  astronaut.bounceOff(bottomEdge);
  
  upArrow=Brushing;
  downArrow=Gymming;
  leftArrow=Eating;
  rightArrow=Bathing;
  mKey=Moving;

  if (keyDown("UP_ARROW") ) {
astronaut.addAnimation("brushing" ,brush);
astronaut.changeAnimation("brushing");
astronaut.Y = 350 ;
astronaut.velocityX=0;
astronaut.velocityY=0;

  }
}


 
