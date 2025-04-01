var osc;

var key_c4;
var key_csharp4;
var key_d4;
var key_eflat4;
var key_e4;
var key_f4;
var key_fsharp4;
var key_g4;
var key_gsharp4;
var key_a4;
var key_bflat4;
var key_b4;
var key_c5;

var colors = [];

function setup() {
  createCanvas(1000, 400);
  osc = new p5.Oscillator();
  osc.setType('sine')
  
   colors = [
    [130,17,240],
    [240,17,174],
    [203,17,240],
    [57,17,240],
    [240,17,40],
     [18,13,245],
     [14,220,235],
     [14,235,72],
  ]
  
  //sounds
  key_c4 = new Key();
  key_csharp4 = new Key();
  key_d4 = new Key();
  key_eflat4 = new Key();
  key_e4 = new Key();
  key_f4 = new Key();
  key_fsharp4 = new Key();
  key_g4 = new Key();
  key_gsharp4 = new Key();
  key_a4 = new Key();
  key_bflat4 = new Key();
  key_b4 = new Key();
  key_c5 = new Key();
  
}
 
function draw() {
  background(220);
  
  //diagnostic, delete l8r
  text("X="+mouseX, 25, 25)
  text("y="+mouseY, 25, 50)
  
  var whiteW = width/20
  var whiteH = height/1.6
  //based on proportion of keys
  var blackW = whiteW*(7/12)
  var blackH = whiteH*(2/3)
  var corner = 10
  var offsetH = height/6
  var offsetW = height/6
  
  //all the white keys
  fill(255, 255, 255)
  for (var i = 0; i < 14; i = i + 1)
  {
  rect(offsetW+(i*whiteW), offsetH, whiteW, whiteH, 0, 0, corner, corner)  
  }
  //black 2 groups
  fill(0, 0, 0)
  for (var j = 0; j < 2; j = j + 1){
    rect(offsetW+whiteW-(blackW/2)+(j*whiteW), offsetH, blackW, blackH, 0, 0, corner, corner)   
    rect(offsetW+8*whiteW-(blackW/2)+(j*whiteW), offsetH, blackW, blackH, 0, 0, corner, corner)  
  }
 
  
  //black 3 groups 
  fill(0, 0, 0)
  for (var m = 0; m < 3; m = m + 1){
    rect(offsetW+4*whiteW-(blackW/2)+(m*whiteW), offsetH, blackW, blackH, 0, 0, corner, corner)   
    rect(offsetW+11*whiteW-(blackW/2)+(m*whiteW), offsetH, blackW, blackH, 0, 0, corner, corner) 
  }
 
  //Make Sounds
  key_c4.press()
  
key_csharp4.press()
 key_csharp4.x = 116
  key_csharp4.y = 210
  key_csharp4.butt = 50
  key_csharp4.freq = 277.1826
  
key_d4.press()
 key_d4.x = 140
  key_d4.butt = 87
  key_d4.freq = 293.6648

key_eflat4.press()
 key_eflat4.x = 166
  key_eflat4.y = 210
  key_eflat4.butt = 51
  key_eflat4.freq = 311.1270
  
key_e4.press()
 key_e4.x = 190
  key_e4.butt = 69
  key_e4.freq = 329.6276
  
key_f4.press()
 key_f4.x = 240
  key_f4.butt = 82
  key_f4.freq = 349.2282
  
  key_fsharp4.press()
 key_fsharp4.x = 266
  key_fsharp4.y = 210
  key_fsharp4.butt = 53
  key_fsharp4.freq = 369.9944
  
  key_g4.press()
 key_g4.x = 290
  key_g4.butt = 84
  key_g4.freq = 391.9954
  
  key_gsharp4.press()
 key_gsharp4.x = 316
  key_gsharp4.y = 210
  key_gsharp4.butt = 54
  key_gsharp4.freq = 415.3047
  
   key_a4.press()
 key_a4.x = 340
  key_a4.butt = 89
  key_a4.freq = 440.0000
  
  key_bflat4.press()
 key_bflat4.x = 366
  key_bflat4.y = 210
  key_bflat4.butt = 55
  key_bflat4.freq = 466.1638
  
   key_b4.press()
 key_b4.x = 390
  key_b4.butt = 85
  key_b4.freq = 493.8833
  
key_c5.press()
 key_c5.x = 440
  key_c5.butt = 73
  key_c5.freq = 523.2511
  
}

 
  function keyReleased()
  {
    osc.amp(0, 0.05)
  }

//Constructor function
function Key () {
  var randomIndex = parseInt(random(colors.length));
  this.butt = 81
  this.freq = 261.6256
  this.x = 90
  this.y = 295
  
  this.press = function(){
  if (keyIsDown(this.butt))
  {
    osc.start();
    osc.freq(this.freq);
    osc.amp(1000, 0.05)
    fill(colors[randomIndex])
    ellipse(this.x, this.y, 20, 20)
  }
  }
  
}


