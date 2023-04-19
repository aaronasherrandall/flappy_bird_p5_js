var bird;
var pipes = [];

function setup() {
  createCanvas(400, 600); // initial canvas size
  bird = new Bird();
  pipes.push(new Pipe()); // add a new Pipe
}

function draw() {
  background(0); // black background
  bird.update();
  bird.show();

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe()); // add a new Pipe
  }


  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }
}

function keyPressed() {
  if(key == ' ') {
    bird.up();
    console.log("SPACE");
  }
}
