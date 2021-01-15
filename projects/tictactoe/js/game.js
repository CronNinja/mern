cells = [];
function createCell(){
  cells.push({
    id: cells.length + 1,
    selectedBy: ''
  });
  return cells[cells.length - 1]
}
function createCellHtml () {
  let cell = createCell();
  let newCell = document.createElement("div");
  let cardBody = document.createElement("div");
  let cardText = document.createElement("p");
  newCell.id = "cell_" + cell.id;
  newCell.className = "card";
  cardBody.id = "cardBody_" + cell.id
  cardBody.className = "card-body";
  cardText.id = "cardText_" + cell.id;
  cardText.innerHTML = cell.id;
  document.getElementById("gameboard").append(newCell);
  document.getElementById("cell_" + cell.id).append(cardBody);
  document.getElementById("cardBody_" + cell.id).append(cardText);
}

function cellFactory() {
  for (let i = 0; i < 9; i++) createCellHtml();
}

cellFactory();