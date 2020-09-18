var fixedRect, movingRect;
var ob1,ob2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1 = createSprite(600, 400, 50, 80);
  ob1.shapeColor = "green";
  ob1.debug = true;
  ob2 = createSprite(200, 400,80,30);
  ob2.shapeColor = "green";
  ob2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  ob1.velocityX= -5;
  ob2.velocityX = +5;
  
}

function draw() {
  background(0,0,0);  

  bounceOff (movingRect,fixedRect)
    movingRect.shapeColor= "pink";
    fixedRect.shapeColor= "pink";
  
    bounceOff (ob1,ob2)
      
  drawSprites();
}
