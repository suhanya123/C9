
function setup() {
  createCanvas(600,600);
  box = createSprite(200, 200, 30, 30);
  
}



function draw() 
{
  background("green");

  if(keyIsDown(RIGHT_ARROW)){
    box.x= box.x+5;
  }

  if(keyIsDown(LEFT_ARROW)){
    box.x= box.x-5;
  }

  if(keyIsDown(UP_ARROW)){
    box.y= box.y-5;
  }

  if(keyIsDown(DOWN_ARROW)){
    box.y= box.y+5;
  }
drawSprites();

}




