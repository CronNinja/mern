cells = [];
whosTurn = 'X';
function createCell(){
  cells.push({
    id: cells.length + 1,
    selectedBy: ''
  });
  return cells[cells.length - 1]
}
function cellSelected(id){
  console.log(id);
  let cStr = id.srcElement.id.toString();
  cell = cells[cStr.charAt(cStr.length - 1) - 1];
  if(cell.selectedBy === ''){
    cell.selectedBy = whosTurn;
    updateBoard("cardText_" + cell.id);
  }
}
function nextTurn(){
  if(whosTurn === 'X') {
    whosTurn = "O";
  } else {
    whosTurn = "X";
  }
}
function updateBoard(cellName){
  let cell = document.getElementById(cellName);
  cell.innerHTML = whosTurn;
  nextTurn();
}
function createCellHtml () {
  let cell = createCell();
  let newCell = document.createElement("div");
  let cardBody = document.createElement("div");
  let cardText = document.createElement("p");
  newCell.id = "cell_" + cell.id;
  newCell.className = "card";
  newCell.onclick = cellSelected;
  cardBody.id = "cardBody_" + cell.id
  cardBody.className = "card-body";
  cardText.id = "cardText_" + cell.id;
  cardText.className = 'fs-1 fw-bolder text-center';
  cardText.innerHTML = cell.id;
  document.getElementById("gameboard").append(newCell);
  document.getElementById("cell_" + cell.id).append(cardBody);
  document.getElementById("cardBody_" + cell.id).append(cardText);
}

function cellFactory() {
  for (let i = 0; i < 9; i++) createCellHtml();
}

cellFactory();