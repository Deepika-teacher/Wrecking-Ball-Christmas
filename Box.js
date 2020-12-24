class Box{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction :1.0,
            density : 0.1
        }
        this.body=Bodies.rectangle(x,y,100,100,options);
        this.width=100;
        this.height=100;
        World.add(myWorld,this.body);
        this.image=loadImage("giftBox.jpg");
        this.visibility=255;
    }

    display(){
        var posX=this.body.position.x;
        var posY=this.body.position.y;
        var ang=this.body.angle;

        push();
        translate(posX,posY);
        rotate(ang);

        if(this.body.speed>8){
            World.remove(myWorld,this.body);
            this.visibility-=5;
            tint(255,this.visibility);
        }
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
