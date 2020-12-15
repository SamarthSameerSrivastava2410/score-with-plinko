class Ball{
    constructor(x,y,radius) {
        var options = {
            isStatic: false
          }
        
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      ellipseMode(CENTER);
      fill(color(Math.round(random(0, 255)), Math.round(random(0, 255)), Math.round(random(0, 255))));
      ellipse(pos.x, pos.y, 20, 20);
    }

    score(){
      if(this.body.speed > 10) {

        score = score + 50;
        

      }
    }
  };