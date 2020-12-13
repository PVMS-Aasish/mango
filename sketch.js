
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.constraint;

var engine, world;
var ground;
var boy,boyImage;
var tree,treeImage;
var stone,stoneImage;
var rope;
var gameState = "onrope";

function preload(){

  boyImage = loadImage("boy.png");
  treeImage = loadImage("tree.png");
  //stoneImage = loadImage("stone.png");
  
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

boy = createSprite(320,430,30,30);
boy.addImage("boy",boyImage);
boy.scale=0.1;

tree = createSprite(900,250);
tree.addImage("tree",treeImage);
tree.scale =0.4

stone = new Stone(280,380,10,10);
//stone.addImage("stone",stoneImage);
stone.scale=0.089;

ground = new Ground(600,height,1200,30);

rope = new Rope(stone.body, { x: 200, y: 100 });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  ground.display();
stone.display();
rope.display();
  
  drawSprites();
 
}




