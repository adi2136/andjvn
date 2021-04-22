const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world
var left,right,x;


function setup() {
    createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.

	paper = new Paper(100,600,10)
	ground = new Ground(400,680,800,20)
   
 leftSide = new Dustbin(550,605,20,130)
 bottom = new Dustbin(610,665,100,10)
 rightSide = new Dustbin(670,605,20,130)
 left= createSprite(580,600,15,120)
 right= createSprite(610,600,15,120)
 x= createSprite(640,600,15,120)
    Engine.run(engine);
    
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
  paper.display();
  ground.display();
  leftSide.display();
  bottom.display();
  rightSide.display();
  left.display();
 right.display();
 x.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
	}
}
