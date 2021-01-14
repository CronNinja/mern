const ballpit = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight - document.getElementById("navbar").offsetHeight,
  left: document.getElementById("ballpit").offsetLeft,
  top: document.getElementById("navbar").offsetHeight
};
// Array of Balls
let balls = [];
let ballCap = 1000;
let range = 18;
let totalSick = 0;
// Create a random XY coord
function randomPOS(){
  return {
    x: Math.floor(Math.random() * ballpit.width),
    y: Math.floor(Math.random() * (ballpit.height - 70) + 70)
  }
}
// Ball Objects - a ball is an x position, y position, velocity, color, size, and ElementID
function createBall(color){
  let startXY = randomPOS();
  balls.push({
    id: balls.length + 1,
    x: startXY.x,
    y: startXY.y,
    color: color,
    size: 15,
    alive: true,
    hasCovid: false,
    isSick: false,
    immunity: 0,
    velocity: {
      x: Math.floor(Math.random() * 5) + 1,
      y: Math.floor(Math.random() * 5) + 1
    }
  });
  return balls[balls.length - 1];
}
function increaseImmunity(){
  return Math.random() * 10;
}
function covidTotal(){
  let count = 0;
  balls.forEach((ball) => {
    if(ball.hasCovid) count++;
  });
  return count;
}
function deathTotal(){
  let count = 0;
  balls.forEach((ball) => {
    if(!ball.alive) count++;
  });
  return count;
}
function immuneTotal(){
  let count = 0;
  balls.forEach((ball) => {
    if(ball.immunity > 100) count++;
  });
  return count;
}
// Update Ball Stats
function updateBallStats(){
  let death = deathTotal();
  document.getElementById("ballTotal").textContent = balls.length - death;
  document.getElementById("covidTotal").textContent = covidTotal();
  document.getElementById("sickTotal").textContent = totalSick;
  document.getElementById("deathTotal").textContent = death;
  document.getElementById("immuneTotal").textContent = immuneTotal();
}
// Collided
function collided(ball){
  balls.forEach((b) => {
    let bsize = b.size/2 + ball.size/2;
    
    if(b.id !== ball.id && Math.abs(b.x - ball.x) <= bsize && Math.abs(b.y - ball.y) <= bsize && b.hasCovid && b.alive && ball.immunity < 100){
      ball.hasCovid = true;
      ball.immunity += increaseImmunity();
      ball.color = "yellow";
      if(Math.random() < .01 && ball.immunity < 80){
        totalSick++;
        if(Math.random() < .07){
          ball.alive = false,
          ball.color = "black"
        }else {
          ball.isSick = true;
          ball.color = "red";
        }
      }
    }
  });
}
function getRandom(step) {
  // return value between +step and -step
  return Math.random() * 2 * step - step;
}
// Update Position
function updatePosition(ball){
  collided(ball);
  if(ball.immunity >= 100){
    ball.color = "green";
    ball.isSick = false;
  }
  if (ball.x + ball.velocity.x > ballpit.width) {
    ball.x = ballpit.width - 50;
  } else if(ball.x + ball.velocity.x < ballpit.left ){
    ball.x = 50;
  } else {
    ball.x += getRandom(ball.velocity.x);
  }
  if (ball.y + ball.velocity.y > ballpit.height){
    ball.y = ballpit.height - 50;
  } else if (ball.y + ball.velocity.y < ballpit.top){
    ball.y = 80;
  } else {
    ball.y += getRandom(ball.velocity.y);
  }
  updateBall(ball);
}

// Update all Balls
function updateAllPOS(){
  balls.forEach((ball) => {
    if(ball.alive) updatePosition(ball);
  });
}
// Add ball to ballpit
function addBall (color) {
  if (balls.length < ballCap){
    let ball = createBall(color);
    let newBall = document.createElement("div");
    newBall.id = "ball_"+ ball.id;
    newBall.style.zIndex = 5;
    newBall.style.position = "absolute";
    newBall.style.left = ball.x + "px";
    newBall.style.top = ball.y + "px";
    newBall.style.width = ball.size + "px";
    newBall.style.height = ball.size + "px";
    newBall.style.borderRadius = "50%";
    newBall.style.background = color;
    document.getElementById("ballpit").append(newBall);
  }
}
// Update Ball
function updateBall(ball){
  let ballDiv = document.getElementById("ball_" + ball.id);
  ballDiv.style.left = ball.x + "px";
  ballDiv.style.top = ball.y + "px";
  ballDiv.style.width = ball.size + "px";
  ballDiv.style.height = ball.size + "px";
  ballDiv.style.background = ball.color;
}
//Function Reset
function reset(){
  balls = [];
  document.getElementById("ballpit").innerHTML = '';
  ballFactory();
  document.getElementById("covidButton").disabled = false;
}
function releaseCovid(){
  addBall("red");
  balls[balls.length - 1].hasCovid = true;
  document.getElementById("covidButton").disabled = true;
}
function sizeBallpit(){
  let pit = document.getElementById("ballpit");
  newBall.style.top = ballpit.top + "px";
  newBall.style.width = ballpit.width+ "px";
  newBall.style.height = ball.height + "px";

}
function ballFactory(){
  for(let i = 0; i <= ballCap; i++){
    addBall("blue");
  }
}
ballFactory();
setInterval(updateAllPOS, 50)
setInterval(updateBallStats, 50)