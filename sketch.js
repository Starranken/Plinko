const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, wall1, wall2;

var plinko1;
var particle1;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(windowWidth/2, 800-5, windowWidth, 10);
  wall1 = new Ground(0, windowHeight/2, 10, windowHeight);
  wall2 = new Ground(480, windowHeight/2, 10, windowHeight);
  
  for(var i = 0; i<=480; i = i + 120){
    divisions.push(new Division(1, 650, 10, divisionHeight))
    divisions.push(new Division(i, 650, 10, divisionHeight))
  }

  for(var j = 20; j<=480; j = j +60){
    plinkos.push(new Plinko(j, 200, 15));
  }
  
  for(var j = 40; j<=480; j = j +60){
    plinkos.push(new Plinko(j, 250, 15));
  }

  for(var j = 20; j<=480; j = j +60){
    plinkos.push(new Plinko(j, 300, 15));
  }

  particle1 =  new Particle(290, 100, 20);

  console.log(windowWidth);
}

function draw() {
  background("gray");
  Engine.update(engine);

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(15, 465), 10, 20))
  }

  ground.display();

  for(var k = 0; k < plinkos.length; k++){
    plinkos[k].display();
  }

  for(var l = 0; l < divisions.length; l++){
    divisions[l].display();
  }
  
  for(var m = 0; m < particles.length; m++){
    particles[m].display();
  }

}
