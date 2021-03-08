import { makePac } from "./pac.js"
let board = {};
let boardHTML = null;
let divs = [];
let build = {
  action: "Wall",
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
const createWall = (id, c = "#000000") => {
  let div = document.getElementById(id);
  if(divs.findIndex(div => div.id === id) === -1){
    divs.push({
      id: id,
      type: "wall",
      x: div.offsetLeft,
      y: div.offsetTop,
      width: 50,
      height: 50,
      color: c
    });
    div.style.backgroundColor = c;
  } 
}

// removeObject
function removeObject(id){
  let x = divs.findIndex(div => div.id === id);
  if(x >= 0){
    document.getElementById(id).style.backgroundColor = boardHTML.style.backgroundColor;
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

function reset(){
  divs = [];
  boardHTML.innerHTML = "";
  newBoard();
}
// Event Listeners
// Buttons
function buttonListeners(){
  document.getElementById("navbarButtons").addEventListener("mousedown", e => {
    let id = e.target.id;
    console.log(id);
  });
  let buildElements = document.querySelectorAll(".build");
  buildElements.forEach(b => {
    document.getElementById(b.id).addEventListener("mousedown", e => {
      let setBuild = e.target.id.split("-");
      build.action = setBuild[0];
      build.option = setBuild[1] ? setBuild[1] : "";
      console.log(build);
    });
  })
}

// Gameboard Mouse Down
function gameboardListeners(){
  boardHTML.addEventListener('mousedown', e => {
    let id = e.target.id;
    switch (build.action) {
      case "Wall":
        createWall(id, build.option);
        break;
      case "Remove":
        removeObject(id);
        break;
      case "makePac":
        makePac(e.clientX, e.clientY);
        break;
      default:
        break;
    }
  });
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