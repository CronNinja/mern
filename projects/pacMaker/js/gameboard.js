import { makePac, run, changePacDirections, reset as resetElements, setBoard } from "./pac.js"
let runTime = null;
let board = {};
let boardHTML = null;
let divs = [];
let build = {
  action: "",
  option: "#000"
}

// Rounds n down to the nearest z
// Returns number
const roundDown = (n = 0, z = 0) => {
  if (typeof(n) === "number" && typeof(z) === "number" && z !== 0) return (Math.floor(n / z) * z);
  return undefined;
}

// Sets up the initial gameboard dimensions
const init = () => {
  boardHTML = document.getElementById("gameboard");
  board.width = roundDown(document.getElementById("container").offsetWidth * .95, 50);
  board.height = roundDown(document.getElementById("container").offsetHeight * .95, 50);
  boardHTML.style.width = board.width + "px";
  boardHTML.style.height = board.height + "px";
  board.top = boardHTML.offsetTop;
  board.left = boardHTML.offsetLeft;
}
// Creates the correct number of Divs on the gameboard
const createGridDivs = (board) => {
  let countColumn = board.width / 50;
  let countRow = board.height / 50;
  let countDiv = 1;
  for ( let i = 1; i <= countColumn; i++){
    for ( let j = 1; j <= countRow; j++){
      let div = document.createElement("div");
      div.id = countDiv++;
      div.className = "panel";
      boardHTML.appendChild(div);
    }
  }
}

// createWall
const createWall = (d, c = "#000000") => {
  if(divs.findIndex(div => div.id === d.id) === -1){
    divs.push({
      id: d.id,
      type: "wall",
      x: d.offsetLeft,
      y: d.offsetTop,
      width: 50,
      height: 50,
      color: c
    });
    d.style.backgroundColor = c;
  } 
}

// removeObject
function removeObject(d){
  let x = divs.findIndex(div => div.id === d.id);
  if(x >= 0){
    document.getElementById(d.id).style.backgroundColor = boardHTML.style.backgroundColor;
    divs.splice(x, 1);
  }
}
// swapGrid
function swapGrid(){
  let elements = document.getElementsByClassName('panel');
  let opt = ((elements[0].classList.contains("show-panel")) ? "hide-panel" : "show-panel");
  for(let i = 0; i < elements.length; i++){
    elements[i].className = "panel " + opt;
  }
}
function pause(){
  if(runTime){
    clearInterval(runTime);
    runTime = null;
    document.getElementById("startPauseButton").innerHTML = "Start"
  } else {
    build.action = "";
    document.getElementById("startPauseButton").innerHTML = "Pause"
    runTime = setInterval(run, 100);
  }
}
function reset(){
  clearInterval(runTime);
  divs = [];
  resetElements();
  boardHTML.innerHTML = "";
  newBoard();
  document.getElementById("startPauseButton").innerHTML = "Start"
}
function NavBarListner(e){
  let func = e.target.id.split("Button")[0];
    switch (func) {
      case "reset":
        reset();
        break;
      case "grid":
        swapGrid();
        break;
      case "startPause":
        pause();
      break;
      default:
        break;
    }
}
// Event Listeners
// Buttons
function buttonListeners(){
  document.getElementById("navbarButtons").addEventListener("mousedown", NavBarListner);
  let buildElements = document.querySelectorAll(".build");
  buildElements.forEach(b => {
    document.getElementById(b.id).addEventListener("mousedown", e => {
      let setBuild = e.target.id.split("-");
      build.action = setBuild[0];
      build.option = setBuild[1] ? setBuild[1] : "";
    });
  })
}

// Gameboard Mouse Down
function gameboardListeners(){
  boardHTML.addEventListener('mousedown', e => {
    let div = document.getElementById(e.target.id);
    switch (build.action) {
      case "Wall":
        createWall(div, build.option);
        break;
      case "Remove":
        removeObject(div);
        break;
      case "makePac":
        makePac(div.offsetLeft + 5, div.offsetTop + 5);
        break;
      default:
        break;
    }
  });
  setBoard(board, divs);
}
// On Key
document.onkeydown = checkKey;
function checkKey(e) {
  let eKey = e.key;
  switch (eKey) {
    case "w":
    case "W":
      changePacDirections(1, "up")
      break;
    case "s":
    case "S":
      changePacDirections(1, "down")
      break;
    case "a":
    case "A":
      changePacDirections(1, "left")
      break;
    case "d":
    case "D":
      changePacDirections(1, "right")
      break;
    default:
      break;
    }
    if (eKey === ' ' || e.code === "Space"){
      pause();
    }
}
const addListeners = () => {
  gameboardListeners();
  buttonListeners();
}
// Jest Exports
// exports.roundDown = roundDown;
// exports.createWall = createWall;


// Initialize the Gameboard Promise
// initPromise
let initPromise = new Promise((resolve, reject) => {
  if(Object.keys(board).length === 0){
    init();
    resolve(board);
  } else {
    reject("board already exist")
  }
});

function newBoard() {
  initPromise
    .then(createGridDivs)
    .then(addListeners)
    .catch(error => {
    console.log(error);
  })
}

newBoard();