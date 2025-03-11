let myInput; 
var bro

function setup() {
  createCanvas(800, 300);
  background(220);
  myInput = createInput('square me bro')
  myInput.position(100,100)
let bro = myInput.value()
}

function draw() {
  var potato
  
  
  sircle(width/2, height/2, 200,)
  squared(bro)
  
  //names don't matter and thus can be funny
  function sircle (rightness, downness, roundness){
    fill(rightness, downness, roundness)
    stroke(rightness/2, downness/2, roundness/2)
    strokeWeight(roundness/100)
    ellipse(rightness, downness, roundness, roundness)
  }
    
  //give the square of a function
  function squared(num){
    potato = num * num
    return potato;
    
  }
   
  //display potato
  textSize(60)
    fill(237,34,93)
    textAlign(CENTER, CENTER)
    text(potato, width/2, height/2)
    return potato;
  
}