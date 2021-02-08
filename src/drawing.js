let penSize = 100;
let penState = 0;
let drawings = [];
let colors = ["240,83,90","220,30,100","4,84,98","0,24,100","14,73,100","43,61,100","158,100,76"];
let color;
let colornum;

function setup(){
    var element = document.getElementById('drawing-canvas');
    var positionInfo = element.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;
    var canvas = createCanvas(width, height);
    canvas.parent("drawing-canvas");
    colornum = floor(random(0, 7));
    console.log(colornum);
    color = colors[colornum];


    // RGB COLORS
    // colors = ["39,39,231","178,204,255","249,53,40","255,194,194","255,112,67","255,211,98","255,182,21","0,194,123"];

    //HSB COLORS
    // colors = ["240,83,90","220,30,100","4,84,98","0,24,100","14,73,100","43,61,100","158,100,76"];

}

function draw() {
    background("#0a0a0a")
    strokeWeight(penSize);
    colorMode(HSB);
    for(let i=0; i<drawings.length; i++){
        // console.log(drawings[i]);
            drawings[i].display();

            if(drawings[i].time <= 3.9){
                drawings.splice(i, 1);
            }
        }

  }

  function mouseDragged(){
    drawings.push( new Line(mouseX, mouseY, pmouseX, pmouseY, color));
  }

  function mouseReleased(){
      colornum++;
      if(colornum == colors.length){
          colornum = 0;
      }
      color = colors[colornum];
  }