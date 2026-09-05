let affirmation = [
  "You're amazing!",
  "Keep doing what you do!",
  "Don't give up!",
  "We love you!",
  "You're the best!",
  "World's best human!",
  "We all have bad days!",
  "You're not alone!",
  "You're enough!"
];

let choice = "";

function setup() {
  createCanvas(500, 500);
}

function draw() {

  // Normal face
  background(57, 40, 128);

  fill(144, 124, 7);
  ellipse(width / 2, height / 2, 150, 150);

  fill(0);
  ellipse(width / 2 - 20, height / 2 - 20, 5, 30);
  ellipse(width / 2 + 20, height / 2 - 20, 5, 30);

  noFill();
  arc(width / 2, height / 2 + 10, 90, 50, 18.9, 22);


  // Change face while mouse is being pressed
  if (mouseIsPressed === true) {

    background(87, 70, 158);

    fill(255, 215, 38);
    ellipse(width / 2, height / 2, 150, 150);

    noFill();
    arc(width / 2 - 20, height / 2, 30, 90, 22, HALF_PI - 90);

    noFill();
    arc(width / 2 + 20, height / 2, 30, 90, 22.3, HALF_PI - 96);

    noFill();
    arc(width / 2, height / 2 + 10, 90, 50, 18.9, 22);
  }


  // Instruction
  textSize(23);
  stroke(3);
  fill("black");
  text(
    "Feeling Blue? Click me!",
    width / 2 - 120,
    height / 2 - 100
  );


  // Show the chosen affirmation
  if (choice !== "") {
    fill(255);
    stroke(0);
    text(choice, 155, 400);
  }
}


// This happens ONE TIME every time you click
function mousePressed() {

  choice = random(affirmation);

}