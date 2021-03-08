let baseSpeed = {
  x: 20,
  y: 20
};

let defaultStart = {
  x: 200,
  y: 100
};

let pacs = []
let pac = {
  x: 300,
  y: 300,
  width: 41,
  height: 41,
  direction: "left",
  velocity: {
    x: baseSpeed.x,
    y: baseSpeed.y
  },
  phase: 2,
  lives: 3
}

const createPac = (x = defaultStart.x, y = defaultStart.y) => {
  pacs.push({
    id: pacs.length + 1,
    x: x,
    y: y,
    width: 41,
    height: 41,
    direction: "left",
    velocity: {
      x: baseSpeed.x,
      y: baseSpeed.y
    },
    phase: 2,
    lives: 3
  });
  return pacs[pacs.length - 1];
}

function addPac2DOM(pac){
  let pacDOM = document.createElement("img");
  pacDOM.id = pac.id;
  pacDOM.style.position = "absolute";
  pacDOM.style.left = pac.x + "px";
  pacDOM.style.top = pac.y + "px";
  pacDOM.src = "images/pac-left-2.png";
  document.getElementById("gameboard").append(pacDOM);
  return pacDOM;
 // 
}
const makePac = (x = defaultStart.x, y = defaultStart.y) => {
  let pac = createPac(x, y)
  let pacDOM = addPac2DOM(pac);
  console.log(pacDOM);
};

// Jest Exports
// exports.createPac = createPac;

// Module Exports
export { makePac }