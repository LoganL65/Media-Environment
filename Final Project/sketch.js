var greenRect;
var redRect;
var yellowRect;
var blueRect;

var counter = 0;
var click = 0 ;

function setup() {
  createCanvas(475, 475);

  greenRect = new Simon();
  redRect = new Simon();
  yellowRect = new Simon();
  blueRect = new Simon();
  

}

function draw() {
  background(0);
  
  if(frameCount === 1 || frameCount % 100 === 0) 
  {counter = parseInt(random(1,4));
  console.log("counter" + counter +"click"+ click)}
  
  
  
  
  
  //green rectangle
  greenRect.make();

  //red rectangle
  redRect.make();
  redRect.x = 250;

  //yellow rect
  yellowRect.make();
  yellowRect.y = 250;

  //blue rect
  blueRect.make();
  blueRect.x = 250;
  blueRect.y = 250;

  //mouse hovering

  //greenRect
  if (
    mouseX > greenRect.x &&
    mouseX < greenRect.x + greenRect.w &&
    mouseY > greenRect.y &&
    mouseY < greenRect.y + greenRect.h
  ) {
    greenRect.c = color(0, 255, 0);
  } else {
    greenRect.c = color(0, 150, 0);
  }
  

  //redRect
  if (
    mouseX > redRect.x &&
    mouseX < redRect.x + redRect.w &&
    mouseY > redRect.y &&
    mouseY < redRect.y + redRect.h
  ) {
    redRect.c = color(255, 0, 0);
  } else {
    redRect.c = color(150, 0, 0);
  }



  //yellowRect
  if (
    mouseX > yellowRect.x &&
    mouseX < yellowRect.x + yellowRect.w &&
    mouseY > yellowRect.y &&
    mouseY < yellowRect.y + yellowRect.h
  ) {
    yellowRect.c = color(255, 255, 0);
  } else {
    yellowRect.c = color(150, 150, 0);
  }



  //blueRect
  if (
    mouseX > blueRect.x &&
    mouseX < blueRect.x + blueRect.w &&
    mouseY > blueRect.y &&
    mouseY < blueRect.y + blueRect.h
  ) {
    blueRect.c = color(0, 0, 255);
  } else {
    blueRect.c = color(0, 0, 150);
  }

  
  //color sequence
  //green
if (counter === 1) {
  greenRect.c = color(0, 255, 0);
  redRect.c = color(150, 0, 0);
  yellowRect.c = color(150, 150, 0);
  blueRect.c = color(0, 0, 150);
}
  //red
  if (counter === 2) {
  greenRect.c = color(0, 150, 0);
  redRect.c = color(255, 0, 0);
  yellowRect.c = color(150, 150, 0);
  blueRect.c = color(0, 0, 150);
  }
  //yellow
  if (counter === 3) {
  greenRect.c = color(0, 150, 0);
  redRect.c = color(150, 0, 0);
  yellowRect.c = color(255, 255, 0);
  blueRect.c = color(0, 0, 150);
}
  //blue
  if (counter === 4) {
  greenRect.c = color(0, 150, 0);
  redRect.c = color(150, 0, 0);
  yellowRect.c = color(150, 150, 0);
  blueRect.c = color(0, 0, 255);
}
  //Click function
  //green
  if (
    mouseIsPressed === true &&
    mouseX > greenRect.x &&
    mouseX < greenRect.x + greenRect.w &&
    mouseY > greenRect.y &&
    mouseY < greenRect.y + greenRect.h
  ) {
    greenRect.c = color(200, 200, 200);
    click = 1
    console.log(click)
  }
  //red
  if (
    mouseIsPressed === true &&
    mouseX > redRect.x &&
    mouseX < redRect.x + redRect.w &&
    mouseY > redRect.y &&
    mouseY < redRect.y + redRect.h
  ) {
    redRect.c = color(200, 200, 200);
    click = 2
    console.log(click)
  }
  //yellow
  if (
    mouseIsPressed === true &&
    mouseX > yellowRect.x &&
    mouseX < yellowRect.x + yellowRect.w &&
    mouseY > yellowRect.y &&
    mouseY < yellowRect.y + yellowRect.h
  ) {
    yellowRect.c = color(200, 200, 200);
    click = 3
    console.log(click)
  }
  //blue
  
  if (
    mouseIsPressed === true &&
    mouseX > blueRect.x &&
    mouseX < blueRect.x + blueRect.w &&
    mouseY > blueRect.y &&
    mouseY < blueRect.y + blueRect.h
  ) {
    blueRect.c = color(200, 200, 200);
    click = 4
    console.log(click)
  }
  
  if(frameCount % 99 === 0 && click != counter)
  {push ()
   fill(0,0,0)
   rect(0,0, width, height)
   fill(150,0,0)
   textAlign(CENTER, CENTER)
   textSize(100)
   text ("You Lose!!", width/2, height/2)
  pop()
  noLoop()}
  
  if (mouseIsPressed === true && click != counter)
  {push ()
   fill(0,0,0)
   rect(0,0, width, height)
   fill(150,0,0)
   textAlign(CENTER, CENTER)
   textSize(100)
   text ("You Lose!!", width/2, height/2)
  pop()
  noLoop()}
}

function Simon(x, y, w, h, r, c) {
  this.x = 25;
  this.y = 25;
  this.w = 200;
  this.h = 200;
  this.r = 50;
  this.c = color(255, 255, 255);
  this.make = function makeRect() {
    fill(this.c);
    rect(this.x, this.y, this.w, this.h, this.r);
  };
}








