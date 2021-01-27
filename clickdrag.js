var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint
    // Mouse = Matter.Mouse,
    // MouseConstraint = Matter.MouseConstraint;


    var Mouse = Matter.Mouse;
    var MouseConstraint = Matter.MouseConstraint;

// create an engine
var engine;
var world;
// var boxA;
var boxes = [];

var ground;
// var mConstraint;
var mouseConstraint;

let clickdragsketch = function(clickdragp){
    let x = 0;
    let y = 0;


clickdragp.setup = function(){
    console.log("hi");
    // let matterCanvasid = document.getElementById("matterCanvas");
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent("matterCanvas");
    frameRate(120)
    // background(0,0,0);
    engine = Engine.create();
    world = engine.world;
    world.gravity.y = 0;
    Engine.run(engine);
    var boundaryoptions = {
        isStatic: true
    }

    ground = Bodies.rectangle(0, height / 2, width, 1, boundaryoptions);
    ceiling = Bodies.rectangle(0, -height / 2, width, 1, boundaryoptions);
    left = Bodies.rectangle(-width / 2, 0, 1, height, boundaryoptions);
    right = Bodies.rectangle(width / 2, 0, 1, height, boundaryoptions);
    // console.log(boxA);
    // console.log(World)
    World.add(world, ground);
    World.add(world, ceiling);
    World.add(world, left);
    World.add(world, right);
    
    boxes.push(new Box(0, 0, 50, 50, 255));
    console.log("clickdragbox 1 created");
    boxes.push(new Box(0, 0, 100, 100, 255));
    console.log("clickdragbox 2 created");

    noStroke();
    rectMode(CENTER);

    // var canvasmouse = Mouse.create(myCanvas.elt);
    // canvasmouse.offset = {
    //     x: width/2,
    //     y: height/2
    // }
    // var mouseoptions = {
    //     mouse: canvasmouse
    // }
    // console.log(canvasmouse);

    // mConstraint = MouseConstraint.create(engine, mouseoptions);
    // mConstraint.pixelRatio = pixelDensity();
    // World.add(world, mConstraint);

    var mouse = Mouse.create(canvas.elt);
        mouse.offset = {
        x: -width/2,
        y: -height/2
    }
  var mouseParams = {
    mouse: mouse,
    constraint: {
      stiffness: 0.1,
    }
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(world, mouseConstraint);

}

clickdragp.draw = function draw(){
    // background(0,0,0);
    colorMode(HSB);
    // background((mouseX/width) * 255 , ((mouseY/height) * 255),255, 100);

    for(var i = 0; i < boxes.length; i++){
        boxes[i].show();
        if (boxes[i].isOffScreen()){
            boxes[i].removeFromWorld();
            boxes.splice(i, 1);
            i--;
        }
    }
}


}


let clickdragp5 = new p5(clickdragsketch, "clickdrag");