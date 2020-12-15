const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(400,800);

  score = 0;
  engine = Engine.create();
  world = engine.world;

  ground =  new Ground(200, 760, 1000, 15);

  wall1 = new Wall(50, 600, 10, 305);

  wall2 = new Wall(125, 600, 10, 305)

  wall3 = new Wall(200, 600, 10, 305)

  wall4 = new Wall(275, 600, 10, 305)

  wall5 = new Wall(350, 600, 10, 305)


  wall6 = new Wall(0, 400, 10, 705)

  wall7 = new Wall(400, 400, 10, 705)



  pego1 = new Plinkon(50, 100, 10);

  pego2 = new Plinkon(50, 100, 10);

  pego3 = new Plinkon(100, 100, 10);

  pego4 = new Plinkon(150, 100, 10);

  pego5 = new Plinkon(200, 100, 10);

  pego6 = new Plinkon(250, 100, 10);

  pego7 = new Plinkon(300, 100, 10);

  pego8 = new Plinkon(350, 100, 10);


  peg1 = new Plinkon(25, 150, 10);

  peg2 = new Plinkon(75, 150, 10);

  peg3 = new Plinkon(125, 150, 10);

  peg4 = new Plinkon(175, 150, 10);

  peg5 = new Plinkon(225, 150, 10);

  peg6 = new Plinkon(275, 150, 10);

  peg7 = new Plinkon(325, 150, 10);

  peg8 = new Plinkon(375, 150, 10);


  pego9 = new Plinkon(50, 200, 10);

  pego10 = new Plinkon(50, 200, 10);

  pego11 = new Plinkon(100, 200, 10);

  pego12 = new Plinkon(150, 200, 10);

  pego13 = new Plinkon(200, 200, 10);

  pego14 = new Plinkon(250, 200, 10);

  pego15 = new Plinkon(300, 200, 10);

  pego16 = new Plinkon(350, 200, 10);


  peg9 = new Plinkon(40, 250, 10);

  peg10 = new Plinkon(80, 250, 10);

  peg11 = new Plinkon(125, 250, 10);

  peg12 = new Plinkon(175, 250, 10);

  peg13 = new Plinkon(225, 250, 10);

  peg14 = new Plinkon(275, 250, 10);

  peg15 = new Plinkon(325, 250, 10);

  peg16 = new Plinkon(375, 250, 10);

  ball1 = new Ball(Math.round(random(50, 301)), 50, 10, 10);

  ball2 = new Ball(Math.round(random(50, 301)), 50, 10, 10);

  ball3 = new Ball(Math.round(random(50, 301)), 50, 10, 10);

  ball4 = new Ball(Math.round(random(50, 301)), 50, 10, 10);

  ball5 = new Ball(Math.round(random(50, 301)), 50, 10, 10);
  
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();

  wall1.display();

  wall2.display();

  wall3.display();

  wall4.display();

  wall5.display();


  wall6.display();

  wall7.display();



  pego1.display();
  
  pego2.display();

  pego3.display();

  pego4.display();

  pego5.display();

  pego6.display();

  pego7.display();

  pego8.display();


  peg1.display();

  peg2.display();

  peg3.display();

  peg4.display();

  peg5.display();

  peg6.display();

  peg7.display();

  peg8.display();


  pego9.display();
  
  pego10.display();

  pego11.display();

  pego12.display();

  pego13.display();

  pego14.display();

  pego15.display();

  pego16.display();


  peg9.display();


  peg10.display();

  peg11.display();

  peg12.display();

  peg13.display();

  peg14.display();

  peg15.display();

  peg16.display();

  drawSprites();

  ball1.display();

  ball2.display();

  ball3.display();

  ball4.display();

  ball5.display();

  
  ball1.score();

  ball2.score();

  ball3.score();

  ball4.score();

  ball5.score();

  fill(255)
  text("Score: " + score, 400, 300);
}