
function setup() {
createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(194,233,123); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,20,20); // center of canvas, 20px dia
  fill(148,495,956,284);
  ellipse(400,400,60,60);
  fill(524,957,624,465);
  ellipse(100,100,60,60);
  fill(255,87,51);
  ellipse(400,100,60,60);
  fill(236,112,202);
  ellipse(100,400,60,60);
  fill(195,155,211);
  ellipse(100,200,60,60);
  fill(230,126,34);
  ellipse(400,200,60,60);
  fill(46,134,193);
  ellipse(400,300,60,60)
  fill(247,220,111);
  ellipse(100,300,60,60);
  textSize(20);
  textFont("Georgia");
  textStyle(ITALIC);
  textAlign(CENTER);
  text("hello! My superpower is color manipulation!",250,50)

}