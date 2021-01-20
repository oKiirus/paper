
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

function preload(){

	trash = loadImage("dustbingreen.png")

	


}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(300, 100, 120)
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  if(keyDown(UP_ARROW)){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100})
  }
 

  groundObject.display();
  dustbinObj.display();
  paper.display()
  imageMode(CENTER)
	image(trash, 1200, 530)
}

