"use strict"

//code based off tutorials from matter.js and The Code Train

// module aliases
var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine;
var world;
// var boxA;
var boxes = [];

var ground;

function setup(){
    var myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
    myCanvas.parent("matterCanvas");
    engine = Engine.create();
    world = engine.world;
    world.gravity.y = 1;
    // boxA = new Box(200, 100, 50, 50);
    Engine.run(engine);
    var options = {
        isStatic: true
    }
    ground = Bodies.rectangle(width/2, height, width, 10, options);
    // console.log(boxA);
    // console.log(World)
    World.add(world, ground);
    

    noStroke();
    rectMode(CENTER);
}

function mouseDragged(){
    spawnConfetti(0, 1);
}

function mouseClicked(){
    spawnConfetti(5, 12);
}

function spawnConfetti(minConfetti, maxConfetti){
    let numConfetti = random(maxConfetti, minConfetti);
    for (let i = 0; i <= numConfetti; i++){
        var confettiColor = random(255);
        boxes.push(new Box(mouseX - width/2, mouseY - height/2, 10,20, confettiColor));
    }
}

function draw(){
    // colorMode(HSB);
    // background((mouseX/width) * 255 , ((mouseY/height) * 255),255, 100);
            // background(255, 255, 255, 0);
            // for(var i = 0; i < boxes.length; i++){
            //     boxes[i].show();
            //     if (boxes[i].isOffScreen()){
            //         boxes[i].removeFromWorld();
            //         boxes.splice(i, 1);
            //         i--;
            //     }
            // }
    // rotateY(millis() / 1000);
    // box();
    // rect(boxA.position.x, boxA.position.y, 80, 80);

    // if (mouseIsPressed === true) {
    //     // line(mouseX - width/2, mouseY - height/2, pmouseX - width/2, pmouseY - height/2);
    //     rect(mouseX - width/2, mouseY - height/2, 40, 40);
    //     rect(mouseX - width/2, mouseY - height/2, 30, 50);
    //     rect(mouseX - width/2, mouseY - height/2, 50, 30);
    //     rect(mouseX - width/2, mouseY - height/2, 20, 55);
    //     rect(mouseX - width/2, mouseY - height/2, 55, 20);
    //     rect(mouseX - width/2, mouseY - height/2, 60, 10);
    //     rect(mouseX - width/2, mouseY - height/2, 10, 60);
    //   }
}

// function resize(canvas){
//     var displayWidth = canvas.clientWidth;
//     var displayHeight = canvas.clientHeight;

//     if (canvas.width != displayWidth || canvas.height != displayHeight){
//         canvas.width = displayWidth;
//         canvas.height = displayHeight;
//     }
// }