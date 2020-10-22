class Ground {
  constructor(x,y,w,h) {
    var options = {
      isStatic : true,
      density : 0.8,
      friction : 0
    };
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.width = w;
    this.height = h;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    rectMode(CENTER);
    fill(255, 0, 0);
    rect(pos.x, pos.y, this.width, this.height);
  }
}