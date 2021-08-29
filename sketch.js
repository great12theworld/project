var ship, ship_moving
var sea
function preload(){
   ship_moving = loadAnimation("ship-1.png", "ship-2.png","ship-3.png"
   , "ship-4.png")
   sea = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  ship = createsprite(50, 160, 20, 50)
  ship.addAnimation("moving", ship_moving)
}

function draw() {
  background("blue");
 drawsprites();
 if (sea.x < 0 ){
   sea.x = sea.width/2;
 }
}