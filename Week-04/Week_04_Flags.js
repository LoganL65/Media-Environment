//Interactive Media Week 4 HW

//Denmark flag

var canW = 370
var canH = 280


function setup() {
  createCanvas(canW, canH);
  background(200, 16, 46);
}

function draw() {
  var l2xpos = 140
  stroke(255, 255, 255)
  strokeWeight(40)
  line(0, canH/2, canW, canH/2)//horizontal
  line(l2xpos, 0, l2xpos, canH)//vertical
}

//Congo Flag

var canW = 900
var canH = 600


function setup() {
  createCanvas(canW, canH);
  background(251, 222, 74); //yellow
}

function draw() {
  noStroke()
  fill(0, 149, 67)//green
  triangle(0, 0, canW*(2/3), 0, 0, canH)//G_triangle
  fill(220, 36, 31)//red
  triangle(canW, 0, canW, canH, canW*(1/3), canH)
}