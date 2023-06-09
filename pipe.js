function Pipe() {
  this.top = random(height / 2 );
  this.bottom = random(height / 2);
  this.x = width; // starts at edge of screen
  this.w = 20;
  this.speed = 2; // pipe move speed

  this.show = function() {
    fill(255);
    rect(this.x, 0, this.w, this.top)
    rect(this.x, height - this.bottom, this.w, this.bottom)
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w){
      return true;
    } else {
      return false;
    }
  }
}
