/**
 * Bouncing Ball with Vectors 
 * 
 * Demonstration of using vectors to control motion 
 * of a body.
 */
 
let location1;  // Location of first ball
let velocity1;  // Velocity of first ball
let gravity1;   // Gravity of first ball
let location2;  // Location of second ball
let velocity2;  // Velocity of second ball
let gravity2;   // Gravity of second ball

function setup() {
  createCanvas(640,360);
  location1 = createVector(100,100);
  velocity1 = createVector(1.5,2.1);
  gravity1 = createVector(0,0.2);
  location2 = createVector(200,200);
  velocity2 = createVector(-1.2,1.8);
  gravity2 = createVector(0,0.2);
}

function draw() {
  background(0);
  
  
  location1.add(velocity1);
  velocity1.add(gravity1);
  if ((location1.x > width) || (location1.x < 0)) {
    velocity1.x = velocity1.x * -1;
  }
  if (location1.y > height) {
    velocity1.y = velocity1.y * -0.95; 
    location1.y = height;
  }
  stroke(255);
  strokeWeight(2);
  fill(127);
  ellipse(location1.x,location1.y,48,48);

  
  location2.add(velocity2);
  velocity2.add(gravity2);
  if ((location2.x > width) || (location2.x < 0)) {
    velocity2.x = velocity2.x * -1;
  }
  if (location2.y > height) {
    velocity2.y = velocity2.y * -0.95; 
    location2.y = height;
  }
  stroke(255, 0, 0); 
  fill(255, 127, 127); 
  ellipse(location2.x,location2.y,90,90); 
}
