const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(400, 200 , 50 ,50, {restitution:1, isStatic:true});
	World.add(world, packageBody);

	ground = new Ground(400, 650, 800, 10)
	boxleft = new Ground(290, 595, 20, 100)
	boxBottom = new Ground(400, 635, 200,20)
	boxRight = new Ground(500 , 595, 20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  imageMode(CENTER)
  image(packageIMG,packageBody.position.x,packageBody.position.y,50,50)

  fill("red");
  boxleft.display()
  boxBottom.display()
  boxRight.display()
  fill("white")
  ground.display()

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    helicopterSprite.x=helicopterSprite.x-20;    
    Matter.Body.translate(packageBody, {x:-20,y:0})
  } 
  else if (keyCode === RIGHT_ARROW) {
    helicopterSprite.x=helicopterSprite.x+20;
    Matter.Body.translate(packageBody, {x:20,y:0})
  }
  else if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}
