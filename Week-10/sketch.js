var bill
var percent

function setup() {
  createCanvas(400, 400);
  background(20, 150, 76)
  
  //bill amount input
  bill = createInput("Bill")
  bill.position(120,20)
  bill.size(150, 50)
  
  //calc button
  button = createButton('calculate');
  button.position(165,175)
  button.size();
    //when pressed, run a function
  button.mousePressed(function(){tipCalc()})
  
  //tip percent input
  percent = createInput("Tip")
  percent.position(120, 100)
  percent.size(150, 50)
  
  //reset button
  button = createButton('Reset')
  button.position(175, 350)
  button.size();
    //run a function when pressed
  button.mousePressed(function(){setup()})
  
  //rectangle background for display
  noStroke()
  rect(120, 220, 150, 50)
}

function tipCalc()
  {
    tipAmt = bill.value() * percent.value() * .01
    text(tipAmt, 150, 250)
  }

