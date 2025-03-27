var sizes = [];
var words = ["Harrisburg", "University"]
var colors = [
  [2,89,57],
  [217,185,126],
  ]


function setup() {
  createCanvas(1000, 500);
 textAlign(CENTER, CENTER)
  frameRate(2)
  for(var i = 0; i <100; i = i +1){
    sizes.push(random(5, 300));
    }
}

function draw() {
  var currentIndex = (frameCount-1) % words.length;
  var currentWord = words[currentIndex];
  var currentColor = colors[currentIndex];
  //text
  background(currentColor);
  fill(255);
  textSize(45);
  text(currentWord, width/2,  height/2)
  //circles
noFill();
strokeWeight(2);
  
  for(var i = 0; i < sizes.length; i = i + 1){
     circle(width/2, height/2, sizes[i])
     }
}