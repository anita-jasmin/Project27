var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roof;
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

	roof=new Roof(350,100,450,50);
	
	bobObject1=new bob(200,600,35)
	bobObject2=new bob(270,600,35)
	bobObject3=new bob(340,600,35)
	bobObject4=new bob(410,600,35)
	bobObject5=new bob(480,600,35)

	rope1=new rope(bobObject1.body,{x:200,y:100});
	rope2=new rope(bobObject2.body,{x:270,y:100});
	rope3=new rope(bobObject3.body,{x:340,y:100});
	rope4=new rope(bobObject4.body,{x:410,y:100});
	rope5=new rope(bobObject5.body,{x:480,y:100});
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
	rectMode(CENTER);
 ellipseMode(RADIUS); 
  background("#B8BFC4");
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  fill("#FBEAF3")
bobObject1.display();
fill("#F3DAE2")
bobObject2.display();
fill("#D2AAD1")
bobObject3.display();
fill("#B775AC")
bobObject4.display();
fill("#7E617C")
bobObject5.display();
}
function mouseDragged(){
    Body.setPosition(bobObject1.body, {x: mouseX , y: mouseY});
}





