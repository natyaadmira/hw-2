function setup() {
createCanvas(340, 340);
}

background(255);
colorMode(RGB);
noStroke();

function rectangle(x,y,w,h){
  var ran = random(4.5)
  if (ran < 1){
  fill(255,0,0)
  }
  else if (1 < ran && ran < 2){
    fill(255,255,0)
  } 
  else if (2 < ran && ran  < 3){
    fill(0,0,255)
  }
    else if (3 < ran && ran  < 4){
    fill(255,255,255)
  } 
  else if (4 < ran && ran  < 4.5){
    fill(0,0,0)
  } 
  stroke(0,0,0);
 	strokeWeight(2);
  rect(x,y,w,h)
}
//row1
rectangle(0,0,70,100)
rectangle(70,0,60,50)

rectangle(70+60,0,40,100)
rectangle(70+60+40,0,70,120)
rectangle(70+60+40+70,0,50,50)
rectangle(70+60+40+70+50,0,50,50)
//row2
rectangle(0,100,70,110)
rectangle(70,50,60,50+40)
rectangle(70+60,100,40,40)
rectangle(70+60+40+70,50,100,70)
//row3
rectangle(70,140,100,70)
rectangle(170,120,35,60)
rectangle(205,120,135,60)
//row4
rectangle(170,180,35,30)
rectangle(205,180,85,60)
rectangle(290,180,50,160)
//row5
rectangle(0,210,35,65)
rectangle(35,210,95,65)
rectangle(130,210,75,130)
rectangle(205,240,85,100)
//row6
rectangle(0,275,130,65)

pause() // it doesn't work, but this is just so it doesn't clear away right after

