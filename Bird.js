class Bird {

    constructor(x,y){
     var    boxOptions={
        restitution:0.5,
        friction:1,
        density:1.5
     }
    this.body=Bodies.rectangle(x,y,50,50,boxOptions);
    this.width = 50;
    this.height = 50;
    
    World.add(myWorld,this.body);
    
    
    
    }
    
    display(){
    
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    pos.x=mouseX;
    pos.y=mouseY;
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("blue");
    fill("red");
    
    rect(0,0,this.width,this.height);
    pop();
    
    
    
    }
    
    
    }
    
    