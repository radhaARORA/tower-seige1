const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygonImg;

function preload(){
polygonImg=loadImage("polygon.png");

}




function setup(){
    canvas=createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
    
    pt1=new Ground(850,150,40,20);
    //level1
    block1=new Box (330,235,30,40)
    block2=new Box (360,235,30,40);
    block3=new Box (390,235,30,40);
    block4=new Box (420,235,30,40);
    block5=new Box (450,235,30,40);
    //level2
    block6=new Box (360,195,30,40);
    block7=new Box (390,195,30,40);
    block8=new Box (420,195,30,40);
    //level3
    block1=new Box (390,155,30,40);

    
   

    slingShot=new SlingShot(this.polygon,(x:100,y:200));

}

function draw(){
background(0);
}
function mouseDragged(){
    
}