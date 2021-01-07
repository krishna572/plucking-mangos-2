
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var ground;
var tree;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(200,600,width,20);
	tree = new Tree(200,600,100,100);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  
  ground.display();
  tree.display();
  drawSprites();
}



