const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var particels=[]
var plinkos =[]
var dividions=[]
var divisionHeight=300;
function setup() {
  createCanvas(490,800);
  engine=Engine.create();
  world= engine.world;
  for (var k=0; k<=width; k=k +80){
    dividions.push(new Division(k ,height-divisionHeight/2,10,divisionHeight))
  }
  for (var j =-40; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for (var j =15; j <=width; j=j+50){
    plinkos.push(new Plinko(j,175))
  }
  for (var j =-40; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,265))
  }
  for (var j =15; j <=width; j=j+50){
    plinkos.push(new Plinko(j,355))
  }
  for (var j =-40; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,445))
  }
 
  ground =new Ground(240,795,490,10);
 
}

function draw() {
  background(0);  
  Engine.update(engine)
  ground.display ();
  if (frameCount%60===0){
    particels.push(new Particle(random(width/2-30,width/2+30),10,10));
  }
  for(var c=0; c <particels.length; c++){
    particels[c].display();
   }
  for(var j=0; j <plinkos.length; j++){
    plinkos[j].display();
  }
    for(var k=0; k <dividions.length; k++){
      dividions[k].display();
  }
 

  drawSprites();
}
