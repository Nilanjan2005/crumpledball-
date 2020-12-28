
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PaperObject;
var Ground;
var dustbin;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   PaperObject = new paper (250,300,20);
   Ground = new ground (400,550,900,10);
   dustbin = new Dustbin(600,520,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  



PaperObject.display();
Ground.display();
dustbin.display();

  drawSprites();
 
}



