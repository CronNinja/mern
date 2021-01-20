let cells = [];
let whosTurn = 'X';
let gameOver = 0;
let wins = [0,0];

function createCell(x, y){
  cells.push({
    id: cells.length + 1,
    selectedBy: '',
    x: x,
    y: y
  });
  return cells[cells.length - 1]
}
function cellSelected(id){
  if(!gameOver){
    let cStr = id.srcElement.id.toString();
    cell = cells[cStr.charAt(cStr.length - 1) - 1];
    if(cell.selectedBy === ''){
      cell.selectedBy = whosTurn;
      updateBoard(cell.id);
    }
  }
}
function nextTurn(){
  if(whosTurn === 'X') {
    document.getElementById("whosUp").innerHTML = whosTurn = "O";
  } else {
    document.getElementById("whosUp").innerHTML = whosTurn = "X";
  }
}
function checkXY(id, vec){
  let winner = cells.filter(cell => {
    return cell.selectedBy === whosTurn && cells[id][vec] === cell[vec];
  })
  return winner;
}
function checkDiag(){
  let winner = cells.filter(cell => {
    return cell.selectedBy === whosTurn && cell.x === cell.y;
  })
  return winner;
}
function checkDiag2(){
  let winner = [];
  cells.forEach(cell => {
    for(let i = 0; i < 3; i++){
      if(cell.selectedBy === whosTurn && cell.x === (i + 1) && cell.y === (3 - i)) {
        winner.push(cell);
      }
    }
  });
  return winner;
}
function showWin(wC){
  wC.forEach(cell => {
    document.getElementById("cell_" + cell.id).classList.add("bg-success");
    document.getElementById("cell_" + cell.id).classList.add("text-white");
  });
}
function chickenDinner(wCells){
  gameOver = 1;
  if(whosTurn === 'X') document.getElementById("xWins").innerHTML = ++wins[0];
  else document.getElementById("oWins").innerHTML = ++wins[1];
  showWin(wCells);
}
function hasWon(id){
  let checkX = checkXY(id, "y");
  let checkY = checkXY(id, "x");
  let checkD = checkDiag();
  let checkD2 = checkDiag2();
  if(checkX.length === 3) chickenDinner(checkX);
  else if(checkY.length === 3) chickenDinner(checkY);
  else if(checkD.length === 3) chickenDinner(checkD);
  else if(checkD2.length === 3) chickenDinner(checkD2);
  else nextTurn();
}
function updateBoard(id){
  document.getElementById("cardText_" + id).innerHTML = whosTurn;
  hasWon(id - 1);
}
function createCellHtml (x, y) {
  let cell = createCell(x, y);
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
  document.getElementById("whosUp").innerHTML = "X";
}
function reset(){
  cells = [];
  gameOver = 0;
  document.getElementById("gameboard").innerHTML = "";
  cellFactory();
  document.getElementById("whosUp").innerHTML = whosTurn;
}
function cellFactory() {
  for (let i = 0; i < 9; i++) createCellHtml((i%3 + 1), Math.floor(i/3 + 1));
}

cellFactory();