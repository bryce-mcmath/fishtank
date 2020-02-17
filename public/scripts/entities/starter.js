class Starter extends Denizen {
  constructor(options) {
    super(options);
    this.imageUri = './images/volcano.png';
    this.position.y += 75;
  }

  update(t) {
    // no physics for volcano
  }

  onClick(event) {
    let xVel = randRangeInt(-300, 300);
    let yVel = 400 - Math.abs(xVel);
    let s = new Seed({
      tank: this.tank,
      position: this.position,
      velocity: new Vector(xVel, yVel),
      type: this.tank.getRandomSpecies()
    });
  }
}
