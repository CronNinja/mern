import { cardDeck } from "../modules/cards.js";
import { table, createTable, addHiddenHeaders } from "../modules/table.js"
import { getTableData as stateTableData } from "../js/states.js"
let stateData = stateTableData();
// document.getElementById("core").innerHTML = cardDeck;

createTable(stateData);
document.getElementById("table").innerHTML = table;
addHiddenHeaders(stateData);