var issImg , spacebgImg , spacecraft1Img , spacecraft2Img , spacecraft3Img , spacecraft4Img , iss , spacecraft;
var hasDocked = false;

function preload(){
  issImg = loadImage("images/iss.png");
  spacebgImg = loadImage("images/spacebg.png");
  spacecraft1Img = loadImage("images/spacecraft1.png");
  spacecraft2Img = loadImage("images/spacecraft2.png");
  spacecraft3Img = loadImage("images/spacecraft3.png");
  spacecraft4Img = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(600,500);

  iss = createSprite(300,200,50,50);
  iss.addImage(issImg);

  spacecraft = createSprite(250,400,50,50);
  spacecraft.scale = 0.3;
  spacecraft.addImage(spacecraft1Img);
}

function draw() {
  background(spacebgImg);  

  if(!hasDocked){
    if(keyDown("left_arrow")){
      spacecraft.x += -2;
      spacecraft.addImage(spacecraft3Img);
    }

    if(keyDown("right_arrow")){
      spacecraft.x += 2;
      spacecraft.addImage(spacecraft4Img);
    }

    if(keyDown("up_arrow")){
      spacecraft.y += -2;
    }

    if(keyDown("down_arrow")){
      spacecraft.addImage(spacecraft2Img);
    }
  }

  if(spacecraft.y === 200) {
    hasDocked = true;
    fill("white");
    textSize(20);
    text("Docking Successful!" , 200,450);
  }

  drawSprites();
}