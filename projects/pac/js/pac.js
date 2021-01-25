const gameboard = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight - document.getElementById("navbar").offsetHeight,
  left: document.getElementById("gameboard").offsetLeft,
  top: document.getElementById("navbar").offsetHeight
};

let walls = [];
let speed = {
  x: 20,
  y: 20
};
let pac = {
  x: gameboard.width - 100,
  y: 200,
  width: 41,
  height: 41,
  direction: "left",
  velocity: {
    x: speed.x,
    y: speed.y
  },
  phase: 2,
  lives: 3
}
function createPac(){
  let pacDOM = document.createElement("img");
    pacDOM.id = "pac";
    pacDOM.style.position = "absolute";
    pacDOM.style.left = pac.x + "px";
    pacDOM.style.top = pac.y + "px";
    pacDOM.src = "images/pac-left-2.png";
    document.getElementById("gameboard").append(pacDOM);
    setInterval(run,100);
}
function run(){
  wallDetection();
  edgeDetection();
  switch (pac.direction) {
    case "right":
      pac.x += pac.velocity.x;
      document.getElementById("pac").style.left = pac.x + "px";
      break;
    case "left":
      pac.x -= pac.velocity.x;
      document.getElementById("pac").style.left = pac.x + "px";
      break;
    case "up":
      pac.y -= pac.velocity.y;
      document.getElementById("pac").style.top = pac.y + "px";
      break;
    case "down":
      pac.y += pac.velocity.y;
      document.getElementById("pac").style.top = pac.y + "px";
      break;
    default:
      break;
  }
  document.getElementById("pac").src = "images/pac-" + pac.direction + "-" + updatePhase() + ".png"; 
  pac.width = document.getElementById("pac").width;
  pac.height = document.getElementById("pac").height;
}
function edgeDetection(){
  if(pac.width + pac.x > gameboard.width && pac.direction === "right"){
    pac.x = pac.width * -1;
  }
  else if(pac.width + pac.x < 0 && pac.direction === "left"){
    pac.x = gameboard.width;
  }
  else if(pac.y < gameboard.top && pac.direction === "up"){
    pac.y = gameboard.height;
  }
  else if(pac.y + pac.height > gameboard.height && pac.direction === "down"){
    pac.y = gameboard.top;
  }
}
function isBetween(v1, c1, c2){
  if(v1 >= c1 && v1 <= (c1 + c2)) return true;
  return false
}
function wallDetection(){
  walls.forEach((wall) => {
    if((isBetween((pac.y + pac.height), wall.y, wall.height) || isBetween(pac.y, wall.y, wall.height))){
      if(Math.abs(wall.x + wall.width - pac.x) < pac.width && pac.direction === "left"){
        pac.velocity.x = 0;
        pac.x = wall.x + wall.width;
      }
      else if(Math.abs(wall.x - pac.x - pac.width) < pac.width && pac.direction === "right"){
        pac.velocity.x = 0;
        pac.x = wall.x - pac.width;
      }
    }

  });
}
function updatePhase(){
  return pac.phase++ % 3 + 1;
}
document.onkeydown = checkKey;
function checkKey(e) {
    switch (e.key) {
      case "ArrowUp":
        pac.direction = "up";
        break;
      case 'ArrowDown':
        pac.direction = "down";
        break;
      case 'ArrowLeft':
        pac.direction = "left";
        break;
      case 'ArrowRight':
        pac.direction = "right";
        break;
      default:
        break;
    }
    pac.velocity.x = speed.x;
    pac.velocity.y = speed.y;
}
function createWall(x, y, w, h){
  walls.push({
    id: walls.length + 1,
    x: x,
    y: y,
    width: w,
    height: h
  });
  return walls[walls.length - 1];
}
function addWall (x, y, w, h) {
  let wall = createWall(x, y, w, h);
  let newWall = document.createElement("div");
  newWall.id = "wall_"+ wall.id;
  newWall.style.position = "absolute";
  newWall.style.left = wall.x + "px";
  newWall.style.top = wall.y + "px";
  newWall.style.width = wall.width + "px";
  newWall.style.height = wall.height + "px";
  newWall.style.backgroundColor = "#000";
  document.getElementById("gameboard").append(newWall);
}

function createWallDOM(){
  addWall(350,300,30,100);
  addWall(350,475,30,100);
}
function startGame(){
  document.getElementById("startGameButton").disabled = true;
  createPac();
}