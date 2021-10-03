class Ground {
    constructor (x,y,w,h) {

    var opt={
        isStatic:true
    }
    this.width=w
    this.height=h
    this.x=x
    this.y=y
    //this.image=loadImage("assets/tower.png")
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,opt)
    
    World.add(world,this.body)
    }
    display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    //fill("black")
    //rectMode(CENTER)
    //rect(0,0,this.width,this.height)
    //imageMode(CENTER)
    //image(this.image,0,0,this.width,this.height)
    pop()
    }
}