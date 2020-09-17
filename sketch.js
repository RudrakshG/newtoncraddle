
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1;
var rope1;
var roof;
var bob1Diameter;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1 = new Bob(300, 700, 25);
  bob2 = new Bob(350, 700, 25);
  bob3 = new Bob(400, 700, 25);
  bob4 = new Bob(450, 700, 25);
  bob5 = new Bob(500, 700, 25);

roof=new Roof(350,200,550,30);
rope1=new rope(bob1.body,roof.body,-bob1Diameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  
  bob3.display();
  
  bob4.display();
  bob5.display();
  roof.display();
  

  drawSprites();
 
}




