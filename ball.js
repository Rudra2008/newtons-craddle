class Ball{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:1.0,
            friction:0.1,
            density:1.0

        }
        this.ball=Bodies.circle(x,y,30,options)
        this.radius=30
        
        World.add(world, this.ball);
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.ball.position.x,this.ball.position.y,this.radius,this.radius)
    }
}