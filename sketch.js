
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof=new Roof();
    ball1=new Ball(300,500);
	ball2=new Ball(360,500);
	ball3=new Ball(420,500);
	ball4=new Ball(480,500);
	ball5=new Ball(540,500);
  rope1=new Rope(ball1.body,roof.body,80)
  rope2=new Rope(ball2.body,roof.body,40)
  rope3=new Rope(ball3.body,roof.body,0)
  rope4=new Rope(ball4.body,roof.body,-40)
  rope5=new Rope(ball5.body,roof.body,-80)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



