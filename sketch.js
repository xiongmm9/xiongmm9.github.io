function setup() {
  createCanvas(720, 480);  //do not touch!
  strokeWeight(2);
  ellipseMode(RADIUS);
}
function draw() {
  background('blue');

  // shoulder
  noStroke(); // Disable stroke

  fill('black'); // Set fill to gray
  ellipse(300, 290, 33, 33); // left shoulder

  fill('black'); // Set fill to gray
  ellipse(420, 290, 33, 33); // right shoulder
  // body
  noStroke();

  fill('black'); // Set fill to black
  rect(300, 257, 125, 120); // Main body

  fill('white'); // Set fill to gray
  rect(300, 355, 125, 6); // Gray stripe

  fill('white'); // Set fill to gray
  rect(300, 360, 125, 6); // Gray stripe

  fill('red'); // Set fill to gray
  rect(300, 360, 125, 2); // Gray stripe

  fill('black')
  rect(300, 375, 30, 200); //left leg

  fill('red'); // left leg detail
  rect(310, 375, 5, 110)

  fill('black')
  rect(395, 375, 30, 200); //right leg

  fill('red'); // Set fill to white
  rect(407, 375, 5, 110); //right leg detail
  //

  fill(0); // Set fill to black
  ellipse(400, 225, 30, 45); // Head

  fill(0); // Set fill to black
  ellipse(360, 225, 30, 45); // Head

  fill(0); // Set fill to black
  ellipse(320, 225, 30, 45); // Head


  fill('red'); // Set fill to white
  rect(315, 193, 90, 14); // middle Large eye

  fill('white'); // Set fill to light gray
  ellipse(400, 200, 5, 5); // right Small eye 1

  //

  fill('blue')
  rect(399, 197, 2, 6); // right pupils

  //
  fill('white')
  ellipse(320, 200, 5, 5); // left Small eye

  //

  fill('blue')
  rect(319, 197, 2, 6); // left pupils

}
