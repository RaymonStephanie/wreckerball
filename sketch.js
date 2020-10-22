const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,800);
  ground = new Ground(400,800,800,50);
  buildings = [];
  building = new Building(400,475,50,50);
  buildings.push(building);
  building1 = new Building(450,475,50,50);
  buildings.push(building1);
  building2 = new Building(500,475,50,50);
  buildings.push(building2);
  building3 = new Building(350,475,50,50);
  buildings.push(building3);
  building4 = new Building(400,475,50,50);
  buildings.push(building4);
  building5 = new Building(450,475,50,50);
  buildings.push(building5);
  building5 = new Building(425,450,50,50);
  buildings.push(building5);

  circle = new Ball(100,350,50,50);
  paddle = new Ground(400,500,400,10);
  holder = new Rope(circle.body, { x : 200 , y : 350 });
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  for (let i = 0; i < buildings.length; i++) {
    buildings[i].display();
  }
  circle.display();
  paddle.display();
  holder.display();
}

function mouseDragged() {
  Matter.Body.setPosition(circle.body, { x : mouseX , y : mouseY }); 
}

function mouseReleased() {
  holder.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(circle.body, { x : 100, y : 350 }); 
    holder.attach(circle.body);
  }
};