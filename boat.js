class Boat{
constructor(x,y,w,h,boatpos){
this.body= Bodies.rectangle(x,y,w,h)
this.x= x
this.y = y
this.w = w
this.h = h
this.boatpos= boatpos
this.image = loadImage("assets/boat.png")

World.add(world,this.body)
}
display(){
    var angle = this.body.angle
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image,0,this.boatpos,this.w,this.h)
    pop()
}
}