  var bullet,wall;
  var thickness,speed,weight;

  function setup(){
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,60,100);

  bullet.velocityX = 10;
  thickness = random(22,83);
  }
  function draw(){
  background("black");
  
  if(hascollided(bullet,wall))
  {
  bullet.velocityX = 0;
  var damage=0.5 * weight * speed *speed/(thickness*thickness*thickness);

if(damage>10)
    {
wall.shapeColor=color(0,255,0);//RED
    }
  if(damage<10)
    {
wall.shapeColor=color(0,255,0);//GREEN
    }
  }
    drawSprites();
hascollided(bullet,wall);
  }
  
  function hascollided(lbullet,lwall);
{
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
 return true;
   }
   return false;
}