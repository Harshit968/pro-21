var canvas;
var music;
var wall1;
var wall2;
var wall3;
var wall4;
var box;
var edges;




function setup(){
    canvas = createCanvas(1000,600);

    
wall1=createSprite(40,550,300,40);
wall1.shapeColor="blue";
wall2=createSprite(350,550,220,40);
wall2.shapeColor="orange";
wall3=createSprite(620,550,220,40);
wall3.shapeColor="magenta";
wall4=createSprite(890,550,220,40);
wall4.shapeColor="green";

  

   box=createSprite(50,50,50,50);
   box.shapeColor="white"

}

function draw() {
    background(10);
    edges=createEdgeSprites();
    box.bounceOff(edges);

    if (keyDown(RIGHT_ARROW)) {
        box.velocityX = 8;
       }

    if (keyDown(LEFT_ARROW)) {
        box.velocityX = -8;
    }
    if (keyDown(DOWN_ARROW)){
        box.velocityY = 8;
    }

    if (keyDown(UP_ARROW)){
        box.velocityY = -8;;
    }

   

    if (wall1.isTouching(box)){
        box.shapeColor="blue"
    }

    if (wall2.isTouching(box)){
        box.shapeColor="orange";
    }

    if (wall3.isTouching(box)){
        box.shapeColor="magenta";
    }

    if (wall4.isTouching(box)){
        box.shapeColor="green";
    }

    box.bounceOff(wall1);
    box.bounceOff(wall2);
    box.bounceOff(wall3);
    box.bounceOff(wall4);

    createEdgeSprites();

    drawSprites();
}
