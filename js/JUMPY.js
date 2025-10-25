//JUMPY BY JACOB M. AND TYLER H.
let pX = 300;
let pY = 350;
let pX2 = 1000;
let pY2 = 1000;
let win = 0;
grassXs = [10];
//, 20, 30, 40, 50, 60,70, 80, 90, 100, 110, 120,130 ,140, 150, 160, 170, 180, 190, 200, 210, 220, 230 ,240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600
grassSpace = 0;
finalScore = 0;
finalLevel = 0;
repeat = 0
velocity = -20
evilX = 0
evilX2 = 600
evilX3 = 305
evilY3 = -40
evilMult = 1
evilMult2 = 1
evilMult3 = 1
evilInc = 1
evilInc2 = 1
evilInc3 = 1
score = 0
level = 0
start = 0
tutorialOn = 0
buttonSize = 0
velocity2 = -20
velocity3 = -10
repeat2 = 0






//sets up the canvas
function setup() {
  createCanvas(600, 400);
  background(240);
  frameRate(60)
  rectMode(CENTER)
}








//sets up player 1 jumping
function jump() {
  pY += velocity
  velocity += 1
  if (velocity < 21) {
    repeat = 1
  } else {
    repeat = 0
  }
}








//the main framework of the Jumpy game
function draw() {
  if (start == 0) {
    rectMode(CORNER)
    strokeWeight(4)




    //draws the background
    background(100, 200, 255);
    cloud(300, 100)
    cloud(100, 150)
    cloud(500, 150)
    stroke(200, 50, 50)
    fill(255, 255, 0)
    ellipse(600, 0, 100, 100)
    noStroke()
    // draw the ground
    fill('green');
    rect(0, 390, width, 20);
    grassXs.splice(0, grassXs.length)
    grassXs = [10];
    gNum = 1;
    while (gNum < 100) {
      grassXs.push(gNum * 7)
      gNum += 1
    }


    //for loop
    for (let i = 0; i < grassXs.length; i += 1) {
      stroke('green')
      strokeWeight(5)
      line(grassXs[i], 390, grassXs[i], 385)
      grassXs.push(2 * i)
      i += 1
      if (grassXs[i] > 600) {
        grassXs.splice(grassXs)
      }
    }


    stroke(0);
    grassSpace = 0;


    //allows for left and right movement
    if (keyIsDown(LEFT_ARROW)) {
      pX -= (5 + (score / 5));
    }
    if (keyIsDown(RIGHT_ARROW)) {
      pX += (5 + (score / 5));
    }


    //allows to jump player one
    if (repeat == 1) {
      jump()
    } else {
      velocity = -20
      pY = 350
    }


    //draw the players @ (pY, pX)
      drawPlayer(pX, pY);
    fill('red')
    textSize(15)


    //respawns the players on the parallel side of screen if they collide with a side of the screen
    if (pX > 700) {
      pX = -95
    }
    if (pX < -100) {
      pX = 695
    }


    //draws the spikes and allows them to move
    drawSpike(evilX)
    evilX += (evilInc * evilMult)
    evilInc += 0.005


    if (level == 50) {
      evilInc = 1
      evilInc2 = 1
    }


    if (level >= 50) {
      drawSpike(evilX2)
      evilX2 += (evilInc2 * evilMult2)
      evilInc2 += 0.005
    }


    if (level == 100) {
      evilInc = 1
      evilInc2 = 1
      evilInc3 = 1
    }


    if (level >= 100) {
      drawSkySpike(evilX3, evilY3)
      evilY3 += evilInc3 * evilMult3
      evilInc3 += 0.005
    }


    //respawns the spikes on the parallel side of the screen if they collide with the screen
    if (evilX > 700) {
      evilMult = -1
      level += 1
    }
    if (evilX < -100) {
      evilMult = 1
      level += 1
    }
    if (evilX2 > 700) {
      evilMult2 = -1
      level += 1
    }
    if (evilX2 < -100) {
      evilMult2 = 1
      level += 1
    }
    if (evilY3 > 500) {
      evilMult3 = 1
      level += 1
      evilX3 = random(50, 350)
      evilY3 = -40
    }


    //the ability to reset when pressing the r key
    if (keyIsPressed && keyCode == 82) {
      reset();
    }


    if (win == 1) {
      background('green')
      fill('red')
      textStyle(BOLD)
      textSize(40)
      text("YOU LOSE!", 205, 170)
      textSize(20)
      text("Final Level: " + finalLevel, 255, 200)
      text("Press 'r' to Reset", 240, 220)
  }

    if (evilX > pX && evilX < pX + 40 && pY > 300) {
      win = 1
      evilMult = 0
      evilMult2 = 0
      evilMult3 = 0
      evilInc = 0
      evilInc2 = 0
      evilInc3 = 0
      evilX = 0
      evilX2 = 600
      evilX3 = 305
      evilXY3 = -40
      finalScore = score
      finalLevel = level
      pX2 = 290
    }
    if (level > 49) {
      if (evilX2 > pX && evilX2 < pX + 40 && pY > 300) {
        win = 1
        evilMult = 0
        evilMult2 = 0
        evilMult3 = 0
        evilInc = 0
        evilInc2 = 0
        evilInc3 = 0
        evilX = 0
        evilX2 = 600
        evilX3 = 305
        evilXY3 = -40
        findScore = score
        finalLevel = level
        pX2 = 290
      }
    }


    if (evilX3 + 30 > pX && evilX3 < pX + 40 && evilY3 + 60 > pY && evilY3 < pY + 40) {
      win = 1
      evilMult = 0
      evilMult2 = 0
      evilMult3 = 0
      evilInc = 0
      evilInc2 = 0
      evilInc3 = 0
      evilX = 0
      evilX2 = 600
      evilX3 = 305
      evilXY3 = -40
      finalScore = score
      finalLevel = level
      pX2 = 290
    }
    
    stroke(0)
    strokeWeight(2.5)
    textSize(15)
    textStyle(NORMAL)
    fill('green')
    rect(0, 0, 100, 30)
    rect(60, 7.5, 25, 15)
    fill('red')
    text(level, 65, 20)
    text('level', 20, 20)
  }
}


function keyPressed() {
  if (keyCode == UP_ARROW && keyIsPressed && repeat == 0) {
    jump()
  }
  
}


function drawPlayer(x, y) {
  strokeWeight(4)
  fill('red');
  rect(x, y, 30, 40);
}


function drawSpike(x) {
  triangle(x - 10, 390, x + 10, 390, x, 330)
}


function drawSkySpike(x, y) {
  triangle(x, y, x + 15, y + 60, x + 30, y)
}


function reset() {
  win = 0
  evilMult = 1
  evilMult2 = 1
  evilMult3 = 1
  evilInc = 1
  evilInc2 = 1
  evilInc3 = 1
  evilX = 0
  evilX2 = 600
  evilX3 = 305
  evilY3 = -40
  score = 0
  level = 0
  pX = 290
  pX2 = 290
}


function cloud(x, y) {
  fill(255)
  ellipse(x - 30, y, 60, 50)
  ellipse(x + 30, y, 60, 50)
  ellipse(x, y, 60, 50)
}

