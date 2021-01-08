var ballCount = 0;
const ballpit = {
  width: 600,
  height: 600
}
// Create a random color - https://css-tricks.com/snippets/javascript/random-hex-color/
function randomColor() {
  return Math.floor(Math.random()*16777215).toString(16);
}
// Create a random XY coord
function randomPOS(){
  return {
    x: Math.floor(Math.random() * 600),
    y: Math.floor(Math.random() * 600)
  }
}
// Ball Objects - a ball is an x position, y position, velocity, color, size, and ElementID
function createBall(){
  let startXY = randomPOS();
  return {
    id: ++ballCount,
    x: Math.abs(startXY.x - ballpit.width),
    y: Math.abs(startXY.x - ballpit.height),
    color: randomColor(),
    size: 10,
    velocity: {
      speed: 10,
      direction: 10
    }

  }
}
// Add ball to ballpit
function addBall (ball) {
  let newBall = document.createElement("div");
  newBall.id = "ball_"+ ball.id;
  newBall.style.zIndex = 5;
  newBall.style.position = "absolute";
  newBall.style.left = ball.x + "px";
  newBall.style.top = ball.y + "px";
  newBall.style.width = ball.size + "px";
  newBall.style.height = ball.size + "px";
  newBall.style.borderRadius = "50%";
  newBall.style.background = "#" + ball.color;
  document.getElementById("ballpit").append(newBall);
}
let ball1 = createBall();
addBall(ball1);