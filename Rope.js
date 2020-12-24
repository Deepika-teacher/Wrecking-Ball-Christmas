class Rope{
    constructor(body,point){
        var options={
            bodyA : body,
            pointB : point,
            stiffness : 3,
            length : 400
        }

        this.rope=Constraint.create(options)
        World.add(myWorld,this.rope);
    }

    fly(){
      //  this.rope.bodyA=null;
    }

    display(){
        if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position;
            var pointB=this.rope.pointB;
            strokeWeight(10);
            stroke("#F3D33C");
            line(pointA.x,pointA.y-72,pointB.x,pointB.y);
        }
    }
}