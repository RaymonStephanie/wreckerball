class Rope {
  constructor(p1,p2) {
    var options = {
      stiffness : 0.008,
      length : 50,
      bodyA : p1,
      pointB : p2
    }
    this.pointB = p2;
    this.body = Constraint.create(options);
    World.add(world, this.body);
  }

  display() {
    
    if (this.body.bodyA) {
      var pos1 = this.body.bodyA.position;
      var pos2 = this.pointB;
      push();
      strokeWeight(4);
      stroke(255);
      line(pos1.x, pos1.y, pos2.x, pos2.y);
      pop();
    }
  }

  fly() {
    this.body.bodyA = null;
  }

  attach(p1) {
    this.body.bodyA = p1;
  }
}