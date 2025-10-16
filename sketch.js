let xPos = 300;
let yPos = 280;
let xVel = 10;
let yVel = 10;

function setup() {
  createCanvas(600, 400);
  background(240);

  ellipseMode(CENTER);

  rectMode(CENTER);

  frameRate(60);
}

function draw() {

  background(10, 10, 140, 90);

  xPos += xVel;
  yPos += yVel;

  textSize(50);
  text('DvD', xPos, yPos);

  if (xPos > 490) {
    fill(random(255), random(255), random(255));
    xVel = -10;
  }
  if (xPos < 20) {
    fill(random(255), random(255), random(255));
    xVel = 10;
  }
  if (yPos > 380) {
    fill(random(255), random(255), random(255));
    yVel = -10;
  }
  if (yPos < 50) {
    fill(random(255), random(255), random(255));
    yVel = 10;
  }
}