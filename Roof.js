class Roof{
    constructor(){
        var options={
            isStatic:true
        }
        this.roof=Bodies.rectangle(400,200,400,20,options)
        this.width=400;
        this.height=20
        World.add(world, this.roof);
    }
    display(){
        rectMode(CENTER)
        rect(this.roof.position.x,this.roof.position.y,this.width,this.height)
    }
}