import { wallDetection } from "./collision.js"
let baseSpeed = {
  x: 20,
  y: 20
};

let defaultStart = {
  x: 200,
  y: 100
};

let pacCap = 1;
let elements = [];
let board = {};

function setBoard(b, d){
  board.board = b;
  board.divs = d;
}

const createPac = (x = defaultStart.x, y = defaultStart.y) => {
  elements.push({
    id: elements.length + 1,
    type: "pac",
    direction: "left",
    x: x,
    y: y,
    width: 41,
    height: 41,
    velocity: {
      x: 0,
      y: 0
    },
    phase: 2,
    lives: 3
  });
  return elements[elements.length - 1];
}

function addElement2DOM(element){
  let elementDOM = document.createElement("img");
  elementDOM.id = element.type + "-" + element.id;
  elementDOM.style.position = "absolute";
  elementDOM.style.left = element.x + "px";
  elementDOM.style.top = element.y + "px";
  elementDOM.src = "images/" + element.type + "-left-2.png";
  document.getElementById("gameboard").append(elementDOM);
}
const makePac = (x = defaultStart.x, y = defaultStart.y) => {
  if(getOccurrence(elements, "pac") < pacCap){
    let pac = createPac(x, y)
    addElement2DOM(pac);
  }
};
function changePacDirections(id, direction){
  id--;
  if(elements[id]){
    elements[id].direction = direction;
    switch (direction) {
      case "up":
        elements[id].velocity.y = -baseSpeed.y;
        elements[id].velocity.x = 0;
        break;
      case "down":
        elements[id].velocity.y = baseSpeed.y;
        elements[id].velocity.x = 0;
        break;
      case "left":
        elements[id].velocity.x = -baseSpeed.x;
        elements[id].velocity.y = 0;
        break;
      case "right":
        elements[id].velocity.x = baseSpeed.x;
        elements[id].velocity.y = 0;
        break;
      default:
        break;
    }
  }
}
function run(){
  if(elements.length){
    moveElement(elements[0]);
  }
  
}
function edgeDetection(element){
  if(element.width + element.x > (board.board.width + board.board.left) && element.direction === "right"){
    element.x = board.board.left;
  }
  else if(element.x < board.board.left && element.direction === "left"){
    element.x = board.board.width + board.board.left;
  }
  else if(element.y < board.board.top && element.direction === "up"){
    element.y = board.board.height + board.board.top;
  }
  else if(element.y + element.height > (board.board.height + board.board.top) && element.direction === "down"){
    element.y = board.board.top;
  }
}
function ifDetected(element, detection){
  if(element.type === "pac"){
    if(detection === "left" || detection === "right"){
      element.velocity.x = 0;
    } else if(detection === "top" || detection === "bottom"){
      element.velocity.y = 0;
    }
  }
}
function moveElement(element){
  let elementHTML = document.getElementById(element.type + "-" + element.id);
  ifDetected(element, wallDetection(board.divs,element));
  edgeDetection(element);
  element.x += element.velocity.x;
  element.y += element.velocity.y;
  element.phase = element.phase++ % 3 + 1;
  elementHTML.style.left = element.x + "px";
  elementHTML.style.top = element.y + "px";
  elementHTML.src = "images/pac-" + element.direction + "-" + element.phase + ".png"; 
}
function getOccurrence(array, value) {
  return array.filter((v) => (v.type === value)).length;
}

function reset(){
  elements = [];
}

// Jest Exports
// exports.createPac = createPac;

// Module Exports
export { makePac, run, changePacDirections, reset, setBoard }