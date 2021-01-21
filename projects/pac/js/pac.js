const gameboard = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight - document.getElementById("navbar").offsetHeight,
  left: document.getElementById("gameboard").offsetLeft,
  top: document.getElementById("navbar").offsetHeight
};

let pac = {
  x: 50,
  y: gameboard.height - 50,
  speed: 20,
  size: 40,
  direction: "up",
  velocity: {
    x: 20,
    y: 20
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
    pacDOM.src = "images/pac-right-2.png";
    document.getElementById("gameboard").append(pacDOM);
}
function run(){
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
  if(pac.size + pac.x > gameboard.width && pac.direction === "right"){
    pac.x = pac.size * -1;
  }
  else if(pac.size + pac.x < 0 && pac.direction === "left"){
    pac.x = gameboard.width;
  }
  else if(pac.y < gameboard.top && pac.direction === "up"){
    pac.y = gameboard.height;
  }
  else if(pac.y + pac.size > gameboard.height && pac.direction === "down"){
    pac.y = gameboard.top;
  }
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
}
createPac();
setInterval(run,100);