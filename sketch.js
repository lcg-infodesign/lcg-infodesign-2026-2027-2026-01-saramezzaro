let xMax = 500
let yMax = 700;

let xBarca = -200;
let yBarca = yMax*0.7;

let xLuce = xMax/2;
let yLuce = yMax*0.6;

let direzione = 0.2;

let xNuvola = xMax*1.3;
let yNuvola = yMax/10;

function drawSfondo(){
  //sole
  push();
  noStroke();
  
  fill(255, 130, 40, 200);
  ellipse(xMax/2, yMax-250, 450, 450);

  fill(255, 200, 100);
  ellipse(xMax/2, yMax-250, 175, 175);
  
  fill(255, 240, 170);
  ellipse(xMax/2, yMax-250, 120, 120);
  
  //mare
  fill(50, 100, 150);
  rectMode(CENTER);
  rect(xMax/2, yMax-125, xMax, 250, 0);

  pop();
}

function drawLuce(){
  push();
  
  noStroke();
  rectMode(CENTER);

  fill(255, 200, 100, 200);
  rect(xLuce, yLuce+35, 130, 10, 20);
  rect(xLuce+5, yLuce+45, 100, 10, 20);

  fill(255, 160, 40, 200);
  rect(xLuce+15, yLuce+70, 150, 13, 20);

  fill(255, 130, 40, 200);
  rect(xLuce-70, yLuce+100, 200, 15, 20);

  fill(255, 130, 40, 200);
  rect(xLuce-30, yLuce+115, 180, 15, 20);
  rect(xLuce+130, yLuce+105, 80, 15, 20);
  rect(xLuce+10, yLuce+150, 200, 20, 20);

  fill(0, 50, 100, 200);
  rect(xLuce-120, yLuce+285, 330, 70, 25);
  rect(xLuce+200, yLuce+280, 200, 70, 25);
  rect(xLuce+300, yLuce+220, 200, 30, 20);
  rect(xLuce+-200, yLuce+235, 200, 30, 20);
  rect(xLuce+72.5, yLuce+280, 55, 20);

  pop();
}

function drawNuvole(){
  push();
  
  noStroke();
  rectMode(CENTER);

  for(let i=0; i<2; i++){
    fill(255, 130, 40, 200);
    rect((xNuvola+270)-i*295, (yNuvola+20)+i*175, 180, 70, 20);
    
    fill(210);
    rect((xNuvola+270)-i*295, (yNuvola+15)+i*175, 130, 70)
    ellipse((xNuvola+200)-i*295, yNuvola+i*175, 100, 100);
    ellipse((xNuvola+340)-i*295, yNuvola+i*175, 100, 100);
    ellipse((xNuvola+270)-i*295, (yNuvola-50)+i*175, 100, 100);
  }
  
  pop();
}

function drawBarca(){
  push();
  
  //scia
  noStroke();
  rectMode(CENTER);
  fill(0, 50, 100);
  rect(xBarca-30, yBarca+44, 200, 10, 20);
  
  //base barca
  fill(245);
  noStroke();
  rectMode(CENTER);
  rect(xBarca, yBarca+30, 140, 30, 0);
  triangle(xBarca-110, yBarca+15, xBarca-70, yBarca+15, xBarca-70, yBarca+45);
  triangle(xBarca+110, yBarca+15, xBarca+70, yBarca+15, xBarca+70, yBarca+45);
  rect(xBarca-10, yBarca+7, 80, 10, 0);
  triangle(xBarca-70, yBarca+12, xBarca-50, yBarca+12, xBarca-50, yBarca+2);
  triangle(xBarca+50, yBarca+12, xBarca+30, yBarca+12, xBarca+30, yBarca+2);

  //vele
  fill(245);
  triangle(xBarca-105, yBarca-7, xBarca-2, yBarca-7, xBarca-2, yBarca-240);
  triangle(xBarca+105, yBarca-7, xBarca+2, yBarca-7, xBarca+2, yBarca-300);

  pop();
}

function moveLuce(){
  xLuce = xLuce + direzione;
  
  if(xLuce>260 || xLuce<240){
    direzione = direzione*(-1);
  }
}

function moveNuvole(){
  xNuvola = xNuvola-0.75;

  if(xNuvola<-400){
    xNuvola = xMax*1.3;
  }
}

function moveBarca(){
  xBarca = xBarca+2.5;
  yBarca = yBarca+0.5;

  if(xBarca>xMax+120){
    xBarca = -200;
    yBarca = yMax*0.7;
  }
}

function setup() {
  createCanvas(xMax, yMax);
  console.log('p5.js version:', p5.VERSION);
}

function draw() {
  background(50, 80, 120);
  
  drawSfondo();
  drawLuce();
  drawNuvole();
  drawBarca();

  moveLuce();
  moveNuvole();
  moveBarca();
}

