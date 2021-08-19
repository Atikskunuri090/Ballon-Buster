var bg, bgimg
var bow, arrow
var bowimg, arrowimg
var edges
var rb, bb, gb
var rbimg, bbimg, gbimg
var score
function preload(){
  bgimg = loadImage("background0.png")
  arrowimg = loadImage("arrow0.png")
  bowimg = loadImage("bow0.png")
  rbimg = loadImage("red_balloon0.png")
  bbimg = loadImage("blue_balloon0.png")
  gbimg = loadImage("green_balloon0.png")
}

score = 0



function setup(){
createCanvas(400,400)

bg = createSprite(200,200,400,400)
bg.addImage("image",bgimg)
bg.scale = 2
bow = createSprite(360,200)
bow.addImage("bow",bowimg)
bow.scale = 1

ball = new Group()
arr = new Group()

}

function arrows(){
  arrow = createSprite(360,200);
  arrow.addImage(arrowimg);
  arrow.scale = 0.2;
  arrow.y = bow.y;
  arrow.velocityX = -12;
  arr.add(arrow);
}


function draw(){
  background("white")
  
  drawSprites();
  redBalloons();
  blueBalloons();
  greenBalloons();
  if (bg.x > 400){
    bg.x = bg.width/2
  }
  
  bg.velocityX = 3
  bow.y = mouseY
  edges = createEdgeSprites()
  bow.bounceOff(edges)
  text("Score  "+score,330,20)
  if (keyWentDown("space")){
    arrows();
  
    
  }
  if (arr.isTouching(ball)){
    ball.destroyEach();
    score = score + 5
  }
  
}







function redBalloons(){
  if (frameCount% 50 === 0){
    redbg = createSprite(0,random(40,360))
    redbg.addImage(rbimg)
    redbg.velocityX = 2
    redbg.lifetime = 210
    redbg.scale = 0.07
    ball.add(redbg)
  }
}

function greenBalloons(){
  if (frameCount% 100 === 0){
    greenbg = createSprite(0,random(40,360))
    greenbg.addImage(gbimg)
    greenbg.velocityX = 2
    greenbg.lifetime = 210
    greenbg.scale = 0.07
    ball.add(greenbg)
  }
}

function blueBalloons(){
  if (frameCount% 150 === 0){
    bluebg = createSprite(0,random(40,360))
    bluebg.addImage(rbimg)
    bluebg.velocityX = 2
    bluebg.lifetime = 210
    bluebg.scale = 0.07
    ball.add(bluebg)
  }
}

