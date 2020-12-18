const Engine = Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,box1,box2;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  box1 = new Box(200,80,90,100);
  box2 = new Box(240,150,70,50);

  ground = new Ground(380,380,800,10);

  console.log(box1);
  }

  


function draw() {
  background(0); 
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();

  drawSprites();
}