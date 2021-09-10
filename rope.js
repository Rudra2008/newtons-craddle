class Rope{
    constructor(body1,body2,offsetx){
        var options={
         bodyA: body1,
         bodyB: body2,
         length:300,
         stiffness:0.8  
        }
        this.rope= Matter.Constraint.create(options)
        World.add(world,this.rope)
        this.offsetx=offsetx
    }
    display(){
        var pointA= this.rope.bodyA.position;
        var pointB= this.rope.bodyB.position;
         
        line(pointA.x,pointA.y,pointB.x+this.offsetx,pointB.y)
    }
    
}