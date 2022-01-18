class Boat {
  constructor(x, y, width, height, boatPos, boatAnim) {
  
    this.anim = boatAnim
    this.speed = 0.5
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.boatPosition = boatPos;
    this.image = loadImage("./assets/boat.png");

    World.add(world, this.body);
  }

  remove(index) {
    this.anim = brokenAnim
    this.speed = 0.5
    this.width = 300
    this.height = 300
    this.isBroken = true
    setTimeout(() => {
      Matter.World.remove(world, boats[index].body);
      delete boats[index];
    }, 2000);
  }
  animate() {
    this.speed += 0.5
  }

  display() {
    var pos = this.body.position;
    var index = floor(this.speed%this.anim.length)

    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.anim[index], 0, this.boatPosition, this.width, this.height);
    pop();
  }
}
