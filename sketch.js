/*var arr = [[1,2],[3,4],[5,6]]
console.log(arr[2][0])

arr.push("Pankil")
console.log(arr);

arr.pop() */



const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var tower , ground , cannon , cannon_ball 

var balls=[]

var boats=[]

function preload(){
bg= loadImage("assets/background.gif")

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    console.log(engine)
    world = engine.world;
 
    tower = new Tower(150,350,160,310)
    ground= new Ground(600,590,1200,10)
    angleMode(DEGREES)
    cannon= new Cannon(180,110,130,100,20)
    cannon_ball= new Cannon_Ball(cannon.x,cannon.y)
    
}

function draw(){
    background(189);
    image(bg,0,0,width,height)
    
    Engine.update(engine);

    for (var index = 0; index < balls.length; index++) {
       show_cannonball(balls[index],index);
        
    }
   //
    tower.display()
    ground.display()
    cannon.display()
    cannon_ball.display()
    //boat.display()
    show_boats();
    
}

function show_boats(){
    if (boats.length>0) {
        if( boats [boats.length - 1 ] === undefined || boats [boats.length - 1 ].body.position.x < width - 300){
            var position=[-40,-60,-70,-20]
            var pos= random(position)
            var boat = new Boat(width,height-100,170,170,pos)
            boats.push(boat)
        }
       for(var i = 0 ; i<boats.length ;i++){
           if (boats[i]) {
            Matter.Body.setVelocity(boat.body,{x:-0.9,y:0})
            boats[i].display()
           }
       } 
    } else {
    var boat = new Boat(width,height-60,170,170,-60)
    boats.push(boat)
    }
}

function keyReleased(){
    if(keyCode===DOWN_ARROW){
       // cannon_ball.shoot();
       balls[balls.length-1].shoot()
    }
}

function keyPressed(){
    if(keyCode===DOWN_ARROW){
    var cannon_ball= new Cannon_Ball(cannon.x,cannon.y)
    balls.push(cannon_ball)
    }
}

function show_cannonball(ball,i){
    if(ball){
        ball.display()
        
    }
}
