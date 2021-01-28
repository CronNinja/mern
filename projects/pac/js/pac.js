const gameboard = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight - document.getElementById("navbar").offsetHeight,
  left: document.getElementById("gameboard").offsetLeft,
  top: document.getElementById("navbar").offsetHeight
};
let runTime = null;
let wallThinkness = 50;
let walls = [];
let ghosts = [];
let build = "";
let objectOption =  "";
let speed = {
  x: 20,
  y: 20
};
function roundDown(n){
  return Math.round(n / 50) * 50;
}
let pac = {
  x: 300,
  y: 210,
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
}
function run(){
  wallDetection(walls, pac);
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
function updatePhase(){
  return pac.phase++ % 3 + 1;
}
function stopPac(){
  pac.velocity.x = 0;
      pac.velocity.y = 0;
}
function placementCheck(x, y, arr){
  let checker = 0;
  arr.forEach((obj) => {
    if(x === obj.x  && y === obj.y) checker = 1;
  });
  return checker;
}
function removeObject(x, y, arr, s){
  arr.forEach((obj) => {
    if(x === obj.x  && y === obj.y){
    document.getElementById(s + "_" + obj.id).remove();
    arr.splice(obj.id - 1, 1)
    }
  });
}
document.onmousedown = checkMouse;
function checkMouse(e){
  let x = roundDown(e.clientX);
  let y = roundDown(e.clientY) + 6;
  let placement = placementCheck(x, y, walls) + placementCheck(x, y, ghosts);
  if(y > gameboard.top){
    if(!placement && build){
      switch (build) {
        case "Wall":
          addWall(x, y, wallThinkness, wallThinkness);
          break;
        case "Ghost":
          addGhost(x, y, objectOption);
          break;
        default:
          break;
      }
    }
    else if (placement, build === "Remove"){
      switch (objectOption) {
        case "Wall":
          removeObject(x, y, walls, "wall");
          break;
        case "Ghost":
          removeObject(x, y, ghosts, "ghost");
          break;
        default:
          break;
      }
    }
  }
}
document.onkeydown = checkKey;
function checkKey(e) {
  let eKey = e.key;
  switch (eKey) {
    case "ArrowUp":
    case "w":
    case "W":
      pac.direction = "up";
      break;
    case 'ArrowDown':
    case "s":
    case "S":
      pac.direction = "down";
      break;
    case 'ArrowLeft':
    case "a":
    case "A":
      pac.direction = "left";
      break;
    case 'ArrowRight':
    case "d":
    case "D":
      pac.direction = "right";
      break;
    default:
      break;
    }
    if (eKey === ' ' || e.code === "Space"){
      stopPac();
    }
    else{
      pac.velocity.x = speed.x;
      pac.velocity.y = speed.y;
    }
}
function createWall(x, y, w, h, c){
  walls.push({
    id: walls.length + 1,
    x: x,
    y: y,
    width: w,
    height: h,
    color: c
  });
  return walls[walls.length - 1];
}
function addWall (x, y, w, h, c = '000') {
  let wall = createWall(x, y, w, h, c);
  let newWall = document.createElement("div");
  newWall.id = "wall_"+ wall.id;
  newWall.style.position = "absolute";
  newWall.style.left = wall.x + "px";
  newWall.style.top = wall.y + "px";
  newWall.style.width = wall.width + "px";
  newWall.style.height = wall.height + "px";
  newWall.style.backgroundColor = "#" + c;
  document.getElementById("gameboard").append(newWall);
}

function createGhost(x, y, c){
  ghosts.push({
    id: ghosts.length + 1,
    x: x,
    y: y,
    width: 41,
    height: 41,
    direction: "left",
    color: c,
    velocity: {
      x: speed.x,
      y: speed.y
    },
    phase: 1,
    state: "alive"
  });
  return ghosts[ghosts.length - 1];
}
function addGhost(x, y, c = blue){
  let ghost = createGhost(x, y, c);
  let newGhost = document.createElement("img");
  newGhost.id = "ghost_" + ghost.id;
  newGhost.style.position = "absolute";
  newGhost.style.left = ghost.x + "px";
  newGhost.style.top = ghost.y + "px";
  newGhost.src = "images/" + ghost.color + "-left-1.png";
  document.getElementById("gameboard").append(newGhost);
}
function addObject(type, option = ''){
  build = type;
  objectOption = option;
}
function startGame(){
  document.getElementById("startGameButton").disabled = true;
  runTime = setInterval(run,100);
}
function swapGrid(){
  if(document.getElementById("gameboard").className){
    document.getElementById("gameboard").className = "";
    document.getElementById("gridButton").className = "btn btn-warning";
  }
  else{
    document.getElementById("gameboard").className = "backgroundGrid";
    document.getElementById("gridButton").className = "btn btn-success";
  }
}
function reset(){
  stopPac();
  walls = [];
  clearInterval(runTime);
  document.getElementById("startGameButton").disabled = false;
  document.getElementById("gameboard").innerHTML = "";
  createPac();
}
createPac();