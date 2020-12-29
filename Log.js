class Log {

    constructor(x,y,height,angle){
     var    boxOptions={
        restitution:1,
        friction:2,
        density:0.1
     }
    this.body=Bodies.rectangle(x,y,20,height,boxOptions);
    this.width =20;
    this.height = height;
    
    Matter.Body.setAngle(this.body,angle);
    World.add(myWorld,this.body);
    
    
    
    }
    
    display(){
    
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("blue");
    fill("yellow");
    
    rect(0,0,this.width,this.height);
    pop();
    
    
    
    }
    
    
    }
    
    