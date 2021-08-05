const Engine = Matter.Engine;
 const World= Matter.World;
  const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;

var engine, world;


var particle;
var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight = 300;

var score = 0;
var turn = 0;

var gameState = "start";
var gameState = "end";


function setup() {
  createCanvas(810,600);


    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,589,width,10);


  for(var k = 0; k<=width; k = k +80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }


      for(var j = 40; j<=width; j=j+50){
        plinkos.push(new Plinko(j,75));

      }

      for(var j = 15; j<=width-10; j=j+50){
        plinkos.push(new Plinko(j,175));
      }
    }



function draw() {
  background(0, 0, 0);  
  drawSprites();
  Engine.update(engine);

  textSize(18);
  fill(255, 255, 255);
  text("Score : "+score,20,40);
 


  ground.display();
  
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
   


  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  if(particle!=null){
    particle.display();

    if(particle.body.position.y>760)
    {
      if(particle.body.position.x<300)
      {
         
        score = score+500;
        particle=null;
        if(count>=5) gameState = "end";
       }
        else if(ball.body.position.x < 600 && ball.body.position.x > 301){
         score = score + 100;
         particle = null;
         if(count>=5) gameState = "end";
       }
       else if(particle.body.position.x<900 && particle.bpdy.position.x>601){
         score = scpre + 200;
         particle=null;
         if(count>=5) gameState = "end"
       }
    }
  }
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

}

function mousePressed(){
  if(gameState!== "end")
  {
    count++;
    particle=new Particle(mouseX, 10, 10, 10);

  }
}