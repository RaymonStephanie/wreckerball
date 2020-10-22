class Ball {
  constructor(x,y,w,h) {
    var options =  {
      isStatic : false
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.height = h;
    this.width = w;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(100,0,100);
    noStroke();
    ellipse(0,0,this.width, this.height);
    pop();
  }
}