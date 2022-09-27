function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
//settig canvas size, angle mode to degrees and the framerate at which the work will be reproduced
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(20);
}

function draw() {
    //move objects to the center of the canvas
  translate(width / 2, windowHeight / 2);
  background("lightblue");

  //variables for secondary petals
  //stroke weight, color and amount of circles
  const amountTwo = 4;
  stroke("white");
  strokeWeight(4);
  
  //setting variables to create series of circles and use sin function to transform scale
  for (let i = 1; i <= amountTwo; i++) {
    const angle = 5 * i + frameCount;
    const dimension = sin(angle);
    const x = 125;
    const y = -125;
    const rectWidth = 40 * i;
    const rectHeight = 40 * i;
    push();
    fill("pink");
    scale(dimension);
    circle(x, y, rectWidth, rectHeight);
    pop();

    push();
    fill("pink");
    scale(dimension);
    circle(y, x, rectWidth, rectHeight);
    pop();

    push();
    fill("pink");
    scale(dimension);
    circle(x, x, rectWidth, rectHeight);
    pop();

    push();
    fill("pink");
    scale(dimension);
    circle(y, y, rectWidth, rectHeight);
    pop();
  }

  //variables for main petals
  const amountThree = 6;
  stroke("white");
  strokeWeight(4);
  
  for (let i = 1; i <= amountThree; i++) {
    const angle = 5 * i + frameCount;
    const dimension = sin(angle);
    const x = 0;
    const y = 200;
    const z = -200;
    const rectWidth = 40 * i;
    const rectHeight = 40 * i;
    push();
    fill("darkorange");
    scale(dimension);
    circle(x, y, rectWidth, rectHeight);
    pop();

    push();
    fill("darkorange");
    scale(dimension);
    circle(x, z, rectWidth, rectHeight);
    pop();

    push();
    fill("cornflowerblue");
    scale(dimension);
    circle(y, x, rectWidth, rectHeight);
    pop();

    push();
    fill("cornflowerblue");
    scale(dimension);
    circle(z, x, rectWidth, rectHeight);
    pop();
  }
  
  //center of the flower
  const amount = 5;
  stroke("white");
  strokeWeight(4);
  
  for (let i = 1; i <= amount; i++) {
    const angle = 5 * i + frameCount;
    const dimension = sin(angle);
    const x = 0;
    const y = 0;
    const rectWidth = 40 * i;
    const rectHeight = 40 * i;
    push();
    fill("khaki");
    scale(dimension);
    circle(x, y, rectWidth, rectHeight);
    pop();
  }
}
