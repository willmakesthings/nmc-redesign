
var colors = ['#FFB615', '#2727E7', '#00C27B', '#F93528', '#FF7043', '#FFC2C2']
var sizes = [30, 60, 90, 120];
var stickerArray = [];

let stickersketch = function(stickerp){
  let x = 0;
  let y = 0;

  stickerp.setup = function() {
    var element = document.getElementById('stickerCanvas');
    var positionInfo = element.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;
    print(height, width);
  var canvas = createCanvas(width,height);
  canvas.parent('stickerCanvas');
}

stickerp.draw = function() {
    noStroke();
//   angleMode(DEGREES);
    rectMode(CENTER);
    // background(0);
    clear();
    for(let i = 0; i<stickerArray.length; i++){
        stickerArray[i].update();
        stickerArray[i].display();
    }
}

stickerp.mouseclicked = function() {
    var sticker = new Sticker(random(colors), int(random(4)), mouseX, mouseY);
    sticker.display();
    stickerArray.push(sticker);
    console.log(stickerArray);
  }

stickerp.polygon = function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  class Sticker {
      constructor(shapecolor, shape, x, y){
          this.lifespan = 255;
          this.shapecolor = shapecolor;
          this.shape = shape;
          this.size = random(sizes);
          this.rotate = random(PI);
          this.x = x;
          this.y = y;
      }

       display(){
        var c = color(this.shapecolor);
        c.setAlpha(this.lifespan);
        fill(c);
        // rotate(this.rotate);
        if (this.shape == 0){
            ellipse(this.x, this.y, this.size);
            } else if (this.shape == 1){
              polygon(this.x, this.y, this.size, 3);    
            } else if (this.shape == 2){
                var squareSize = this.size
                rect(this.x, this.y, squareSize, squareSize)
            } else if(this.shape == 3) {
                polygon(this.x, this.y, this.size, 6);  
            }
        
      }

      update(){
        this.lifespan--;
        // console.log(this.lifespan);
    }
  }

}

  let stickerp5 = new p5(stickersketch, "sticker");