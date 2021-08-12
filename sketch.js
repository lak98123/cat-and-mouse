var bg;
var cat,catImg1,catImg2,catImg3,catImg4;
var mouse,mouseImg1,mousImg2;
function preload() {
    //load the images here
  bg=loadImage("images/garden.png")
  catImg1=loadAnimation("images/cat1.png")
  mouseImg1=loadAnimation("images/mouse1.png")
  mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
  catImg2=loadAnimation("images/cat2.png","images/cat3.png")
  catImg4=loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600,50,50)
cat.addAnimation("sleepingcat",catImg1)
cat.scale=0.2

mouse=createSprite(200,600,50,50)
mouse.addAnimation("mousestanding",mouseImg1)
mouse.addAnimation("mousestanding",mouseImg1)
mouse.scale=0.2






}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0
    cat.addAnimation("happycat",catImg4)
    cat.changeAnimation("happycat")
   
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
  cat.velocityX=-5
cat.addAnimation("movingcat",catImg2)
cat.changeAnimation("movingcat")

}


if(keyCode===RIGHT_ARROW){
    mouse.velocityX=5
  mouse.addAnimation("mouseteasing",mouseImg2)
  mouse.changeAnimation("mouseteasing")
mouse.frameDelay=25
}
}