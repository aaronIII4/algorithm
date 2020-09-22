var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,350,60,40);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background("black");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
     fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 && 
     movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 && 
     fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2 ) {
      fixedRect.shapeColor = "red"
      movingRect.shapeColor = "red"
  }
  else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}