function Bird() { // a constructor function, basically a class in Ruby
  // special type of function in JavaScript that is used to create objects.
  this.y = height / 2; // start in center of window
  this.x = 64;

  this.gravity = .6;
  this.lift = -15;
  this.velocity = 0;

  this.show = function() {
    fill(255); // white circle
    ellipse(this.x, this.y, 32, 32); // draw elipse
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9; // reduces the bird's velocity by 10% on each update cycle
    this.y += this.velocity; //adds the gravity value to the bird's velocity on each update cycle.

    if (this.y > height) { // if bird is below the bottom of the canvas
      this.y = height; // set bird's y position to the height of the canvas
      this.velocity = 0; // set bird's velocity to zero
    }

    if (this.y < 0) { // if bird is above the top of the canvas
      this.y = 0; // set bird's y position to the height of the canvas
      this.velocity = 0; // set bird's velocity to zero
    }
  }
}
