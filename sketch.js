
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, paperObject;
var dustbin;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

var paper_options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}
	

	engine = Engine.create();
	world = engine.world;

	
	dustbin = new Dustbin(200,300);
	ground = new Ground(400,height,1000,30);
	paper = new Paper(50,200,40);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ground.display();
  dustbin.display();
  paper.display();

  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}); } }



