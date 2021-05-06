function setup() {
  createCanvas(400, 400);
}
mode = 0
score = 0 
X1 = 200
X2 = 100
Y1 = 90
Y2 = 50


function draw() {
  print(score)
  print(mouseX, mouseY)
  clear();
  if( mode == 0){
    background(0,0,255)
    textSize(50)
    text("Click the buttons", 0, 100)
    textSize(40)
    text("Press escape to start",0, 200 )
    if(keyIsPressed) {
      if(keyCode == ESCAPE){
        mode = 1;
      }
    }
  }
  if (mode == 1){
    background(0,255,0)
    if(score == 0){
      fill(0)
      rect(X1,Y1,X2,Y2)
    }
     if(score == 1){
      X1 = 0;
      X2 = 50;
      Y1 = 350;
      Y2 = 30;
      fill(0)
      rect(X1,Y1,X2,Y2)
    }
    if(score == 2){
      X1 = 200;
      X2 = 10;
      Y1 = 300;
      Y2 = 10;
      fill(0)
      rect(X1,Y1,X2,Y2)
    }
    if(score == 3){
      X1 = 390;
      X2 = 10;
      Y1 = 200;
      Y2 = 10;
      fill(0)
      rect(X1,Y1,X2,Y2)
    }
    if(score == 4){
      mode = 2;
    }
  }
  if(mode == 2){
    background(0,0,255)
    textSize(50)
    text("You won", 0, 100)
    
  }
}

function mouseClicked(){
  if(mode == 1){
    X3= X1 + X2
    Y3 = Y1 + Y2
    if(mouseX < X3 && mouseX >X1){
      if(mouseY < Y3 && mouseY >Y1){
        score = score + 1;
      }
    }
  }
}
  
  