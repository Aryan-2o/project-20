var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor="yellow"


speed=random(55,90)
  weight=random(400,1500)
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor =color(80,80,80)
  car.velocityX=speed;
}

function draw() {
  background(25,25,25);  
  drawSprites();
}