
var bullet, wall;

var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);

  // the speed and the wieght of the car will be random averytime
   speed = random(223,321);
   weight = random(30,52);
  thickness = random(22,83);


   bullet = createSprite(50,200,100,10);
   bullet.velocityX = speed;

   
   wall = createSprite(1200,200,thickness,height/2);
   wall . shapeColor = (80,80,80);


}

function draw() {
  background(255,255,255);
  
  

  {
    if (hasCollided(bullet, wall))
    {
    bullet.velocityX=0;
  
   var damage = 0.5 * weight * speed * speed / (thickness*thickness*thickness);
   console.log(damage);
   if(damage < 20){
     console.log("Damage less than 10");
    wall. shapeColor = color(0,255,0);   
  
    }

  

  if(damage > 20){
    wall. shapeColor = color(255,0,0);

  }
  
  }
}
  drawSprites();
}

function hasCollided (lbullet , lwall) 
  {bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
     }
     return false;
  }
