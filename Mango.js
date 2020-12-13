class Mango{
    constructor(x, y,r) {
        var options = {
          isStatic:true,  
          'restitution':0.8,
            'friction':1.0
            
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("Plucking mangoes/mangoes.png");
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
      }
    };
    