let snake;
let rez = 20;
let food;
let w;
let h;


function setup() {
  createCanvas(windowWidth, 640);

  w = floor(width / rez);
  h = floor(height / rez);

  frameRate(5);

  snake = new Snake();
  
  foodLocation();
}


function foodLocation() {

  let x = floor(random(w));
  let y = floor(random(h));

  let width = 30;
  let height = 30;

  food = createVector(x, y, width, height);
}


function keyPressed() {

  if (keyCode === LEFT_ARROW) 
  {
	snake.pos(-1, 0);
  }

  else if (keyCode === RIGHT_ARROW) 
  {
    snake.pos(1, 0);
  }

  else if (keyCode === DOWN_ARROW) 
  {
    snake.pos(0, 1);
  }

  else if (keyCode === UP_ARROW) 
  {
    snake.pos(0, -1);
  }

  else if (key == ' ') 
  {
    snake.grow();
  }

}


function draw() {
  scale(rez);
  background("#add8e6");

  if (snake.eat(food)) {
    foodLocation();
  }

  snake.update();
  snake.show();

  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1.4, 1.4);
}