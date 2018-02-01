a) LINES START FROM CENTER:

function setup() {
  createCanvas(340, 340);
}

function draw() {
  line(172, 172, random(width), random(height));
}


b) LINES END AT TOP RIGHT CORNER:

function setup() {
  createCanvas(340, 340);
}

function draw() {
  line(random(width), random(height), 340, 0);
}

c) ALL LINES HAVE THE SAME SLOPE:

 function setup() {
  createCanvas(340, 340);
}

function draw() {
  var number = random(100)
  var x1 = random(width)
  var y1 = random(height)
  var x2 = x1 + number
  var y2 = y1 + (2*number)
		line(x1, y1, x2, y2)
}

d)STROKE COLOR DEPENDS ON X-COORDINATE:

 function setup() {
  createCanvas(340, 340);
  colorMode(HSB);
}

function draw(){
  var x1 = random(width)
  stroke(x1,100,100);
  strokeWeight(4);
  line(x1, random(height), x1, random(height));
}
