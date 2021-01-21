//Create variables here

var text;

var database;

var dog,dog_img1,dog_img2;

function preload()
{
  //load images here
  dog_img1 = loadImage("dogimg.png");
  dog_img2 = loadImage("dogimg1.png");
  
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  

  dog = createSprite(250,310);
  dog.addImage("dogimg",dog_img1);
  dog.scale=0.2;

}


function draw() {  
  background(0)
  //add styles here
  drawSprites();

  text("Note: Press UP_ARROW Key To Feed Drago Milk! ")
  fill(255);

}



