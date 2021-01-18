function Box(x, y, w, h, confettiColor){
    var options = {
        friction: 0.5,
        frictionAir: 0,
        restitution: .5,
        density: 0.001
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;

    //explosion force vector based on https://observablehq.com/@timhau/playing-with-matter-js
    const forceMagnitude = random(0.03,0.035) * this.body.mass;
    Matter.Body.applyForce(this.body, this.body.position, {
        x:
          (forceMagnitude + Matter.Common.random() * forceMagnitude) *
          Matter.Common.choose([0.5, 0, -0.5]),
        y: -forceMagnitude + Matter.Common.random() * -forceMagnitude
      });

    World.add(world, this.body);


    this.isOffScreen = function(){
        var pos = this.body.position;
        return (pos.y > height + 100);
    }

    this.removeFromWorld = function() {
        World.remove(world, this.body);
      };

    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        colorMode(HSB);
        fill(confettiColor, 70, 100);
        strokeWeight(0);
        rect(0, 0, this.w, this.h);
        // box(this.w, this.h, 1, 1);
        // rotateY(millis() / 1000);
        pop();
    }
}