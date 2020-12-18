class Box{ 

    constructor(x,y,w,h){
     var options={ restitution:0.8,
        friction:1.0
     }
      this.body= Bodies.rectangle(x,y,w,h,options); 
      this.width=w; 
      this.height=h; 
      World.add(world,this.body);
     }
      display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
          translate(position.x,position.y);
          rotate(angle);
          rectMode(CENTER);
          fill("yellow");
          rect(0,0,this.width,this.height);
         
          pop();
      }
    }