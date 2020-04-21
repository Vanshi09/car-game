var car; 
var wall;

function setup() {
  createCanvas(1600,400);

  car = createSprite(400,200,50,50);
  car.shapeColor = "white";
  car.weight = 950;
  car.velocityX = 30;

  wall = createSprite(1500,200,60,400);
}

function draw() {
  background(0,0,0); 

  if(car.x - wall.x < car.width/2 + wall.width/2)
  {
    car.shapeColor = "green";
  }
  else
  {
car.shapeColor = "white";
  }

  drawSprites();
}