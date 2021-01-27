
var colors = ['#FFB615', '#2727E7', '#00C27B', '#F93528', '#FF7043', '#FFC2C2']
var sizes = [30, 60, 90, 120];
var stickerArray = [];

// let stickersketch = function(p){
//   let x = 0;
//   let y = 0;

//   p.setup = () => {
//     var element = document.getElementById('stickerCanvas');
//     var positionInfo = element.getBoundingClientRect();
//     var height = positionInfo.height;
//     var width = positionInfo.width;
//     print(height, width);
//   var canvas = p.createCanvas(width,height);
//   canvas.parent('stickerCanvas');
// }

// p.draw = ()=>  {
//     p.noStroke();
// //   angleMode(DEGREES);
//     p.rectMode(CENTER);
//     // background(0);
//     clear();
//     for(let i = 0; i<stickerArray.length; i++){
//         stickerArray[i].update();
//         stickerArray[i].display();
//     }
// }

// p.mouseClicked = function() {
//     var sticker = new Sticker(random(colors), int(random(4)), mouseX, mouseY);
//     sticker.display();
//     stickerArray.push(sticker);
//     console.log(stickerArray);
//   }

// p.polygon = function polygon(x, y, radius, npoints) {
//     let angle = TWO_PI / npoints;
//     beginShape();
//     for (let a = 0; a < TWO_PI; a += angle) {
//       let sx = x + cos(a) * radius;
//       let sy = y + sin(a) * radius;
//       vertex(sx, sy);
//     }
//     endShape(CLOSE);
//   }

//   class Sticker {
//       constructor(shapecolor, shape, x, y){
//           this.lifespan = 255;
//           this.shapecolor = shapecolor;
//           this.shape = shape;
//           this.size = random(sizes);
//           this.rotate = random(PI);
//           this.x = x;
//           this.y = y;
//       }

//        display(){
//         var c = color(this.shapecolor);
//         c.setAlpha(this.lifespan);
//         fill(c);
//         // rotate(this.rotate);
//         if (this.shape == 0){
//             ellipse(this.x, this.y, this.size);
//             } else if (this.shape == 1){
//               polygon(this.x, this.y, this.size, 3);    
//             } else if (this.shape == 2){
//                 var squareSize = this.size
//                 rect(this.x, this.y, squareSize, squareSize)
//             } else if(this.shape == 3) {
//                 polygon(this.x, this.y, this.size, 6);  
//             }
        
//       }

//       update(){
//         this.lifespan--;
//         // console.log(this.lifespan);
//     }
//   }

// }

  let stickerp5 = new p5((p) => {
    let x = 0;
    let y = 0;
  
    p.setup = () => {
      var element = document.getElementById('stickerCanvas');
      var positionInfo = element.getBoundingClientRect();
      var height = positionInfo.height;
      var width = positionInfo.width;
      // print(height, width);
    var canvas = p.createCanvas(width,height);
    canvas.parent('stickerCanvas');
  }
  
  p.draw = ()=>  {
      p.noStroke();
  //   angleMode(DEGREES);
      p.rectMode(p.CENTER);
      // background(0);
      p.clear();
      for(let i = 0; i<stickerArray.length; i++){
          stickerArray[i].update();
          stickerArray[i].display();
      }
  }
  
  p.mouseClicked = function() {
      var sticker = new Sticker(p.random(colors), p.int(p.random(4)), p.mouseX, p.mouseY);
      sticker.display();
      stickerArray.push(sticker);
      console.log(stickerArray);
    }
  
  p.polygon = function polygon(x, y, radius, npoints) {
      let angle = p.TWO_PI / npoints;
      p.beginShape();
      for (let a = 0; a < p.TWO_PI; a += angle) {
        let sx = x + p.cos(a) * radius;
        let sy = y + p.sin(a) * radius;
        p.vertex(sx, sy);
      }
      p.endShape(p.CLOSE);
    }
  
    class Sticker {
        constructor(shapecolor, shape, x, y){
            this.lifespan = 255;
            this.shapecolor = shapecolor;
            this.shape = shape;
            this.size = p.random(sizes);
            this.rotate = p.random(p.PI);
            this.x = x;
            this.y = y;
        }
  
        display(){
          var c = p.color(this.shapecolor);
          c.setAlpha(this.lifespan);
          p.fill(c);
          // rotate(this.rotate);
          if (this.shape == 0){
              p.ellipse(this.x, this.y, this.size);
              } else if (this.shape == 1){
                p.polygon(this.x, this.y, this.size, 3);    
              } else if (this.shape == 2){
                  var squareSize = this.size
                  p.rect(this.x, this.y, squareSize, squareSize)
              } else if(this.shape == 3) {
                p.polygon(this.x, this.y, this.size, 6);  
              }
          
        }
  
        update(){
          this.lifespan--;
          // console.log(this.lifespan);
      }
    }
  

  });