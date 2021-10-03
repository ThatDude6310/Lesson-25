class Cannon {
    constructor (x,y,w,h,angle) {

    this.width=w
    this.height=h
    this.x=x
    this.y=y
    this.angle=angle
    this.cannonImg=loadImage("assets/CANON.png")
    this.cannonBase=loadImage("assets/cannon_base.png")
    
    
    
    }
    display(){
        console.log(this.angle)
        if(keyIsDown(RIGHT_ARROW)&&this.angle<70){
            console.log("hello");
            this.angle+=1
        }
        if(keyIsDown(LEFT_ARROW)&&this.angle>-30){
            this.angle-=1
        }

        

        
    push()
    translate(this.x,this.y)
    rotate(this.angle)
    //code to create the cannon top
    imageMode(CENTER)
    image(this.cannonImg,0,0,this.width,this.height)
    //code to create cannon bottom
    pop()
    image(this.cannonBase,70,20,190,200)
    noFill()
    
    
    }
}