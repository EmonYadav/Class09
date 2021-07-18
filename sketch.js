var box ;






function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,15,15);
}

function draw() 
{
  background("blue");

  if (keyIsDown(RIGHT_ARROW)){
box.position.x = box.position.x+1;
  }

else if (keyIsDown(LEFT_ARROW)){
  box.position.x = box.position.x-1;
}

else if (keyIsDown(UP_ARROW)){
  box.position.y = box.position.y-1;
}

else if (keyIsDown(DOWN_ARROW)){
  box.position.y = box.position.y+1;
}





drawSprites();
}




