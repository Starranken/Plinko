class Particle{
    constructor(x, y, r) {
      var options = {
        isStatic: false,
        'restitution': 0.8
      }
        
      this.body = Bodies.circle(x, y, r, options);
      this.radius=r;
      this.color = color(random(0,255), random(0,255), random(0, 255));
      World.add(world, this.body);
    }
        
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill(this.color);
      ellipse(pos.x, pos.y, this.radius*2, this.radius*2);
    }
  };
