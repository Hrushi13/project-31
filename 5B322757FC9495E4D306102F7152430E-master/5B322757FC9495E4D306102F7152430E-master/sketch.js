var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
for(var i=0 ; i<=width; i+=80){
  divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight))
}
 for (var i = 75;i<=width;i+=50){
   plinkos.push(new Plinko(i,75))
 }
 for (var i = 55;i<=width-10;i+=50){
  plinkos.push(new Plinko(i,175))
}
for (var i = 75;i<=width;i+=50){
  plinkos.push(new Plinko(i,275))
}
for (var i = 55;i<=width-10;i+=50){
  plinkos.push(new Plinko(i,375))
}

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-50,width/2+50),10,10));
  }

 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  for(var i = 0;i<divisions.length;i++){
    divisions[i].display();
  }

  for(var i = 0;i<particles.length;i++){
    particles[i].display();
  }
    /*for(var i = 0; plinkos.length;i++){
    plinkos[i].display();
  }*/
}