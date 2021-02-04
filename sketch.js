const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2, base, block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20 , block21, block22, block23, block24, block25;

var ball, slingShot;

var polygon_img;

function preload(){

  polygon_img=loadImage("polygon.png");

}
function setup(){

    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    base = new Ground(600, 590, 1200, 20);

    stand1 = new Ground(390+100,450,250,10);
    stand2 = new Ground(800,200,200,10);

    block1 = new Box(300+100,425,30,40);
    block2 = new Box(330+100,425,30,40);
    block3 = new Box(360+100,425,30,40);
    block4 = new Box(390+100,425,30,40);
    block5 = new Box(420+100,425,30,40);
    block6 = new Box(450+100,425,30,40);
    block7 = new Box(480+100,425,30,40);

    block8 = new Box(330+100,385,30,40);
    block9 = new Box(360+100,385,30,40);
    block10 = new Box(390+100,385,30,40);
    block11 = new Box(420+100,385,30,40);
    block12 = new Box(450+100,385,30,40);

    block13 = new Box(360+100,345,30,40);
    block14 = new Box(390+100,345,30,40);
    block15 = new Box(420+100,345,30,40);

    block16 = new Box(490,305,30,40);


    block17 = new Box(640+100,175,30,40);
    block18 = new Box(670+100,175,30,40);
    block19 = new Box(700+100,175,30,40);
    block20 = new Box(730+100,175,30,40);
    block21 = new Box(760+100,175,30,40);
    
    block22 = new Box(670+100,135,30,40);
    block23 = new Box(700+100,135,30,40);
    block24 = new Box(730+100,135,30,40);
    
    block25 = new Box(700+100,95,30,40);

    ball = Bodies.circle(200,400,20);
    World.add(world,ball);

    slingShot = new Slingshot(this.ball,{x:200,y:400});

}

function draw(){

    Engine.update(engine);

    background(150);

    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

    stand1.display();
    stand2.display();

    base.display();

    fill("turquoise");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("red");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("blue");
    block13.display();
    block14.display();
    block15.display();
    fill("yellow");
    block16.display();
    fill("turquoise");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill("red");
    block22.display();
    block23.display();
    block24.display();
    fill("blue");
    block25.display();

    imageMode(CENTER)
    image(polygon_img ,ball.position.x,ball.position.y,40,40);

    slingShot.display();

}

function mouseDragged(){

    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});

}

function mouseReleased(){

    slingShot.fly();

}

function keyPressed(){

    if(keyCode === 32){

        slingShot.attach(this.ball);

    }

}