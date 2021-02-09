import { getTableData as getStateTableData } from "../js/states.js"
import { getTableData as getSpellingTableData, getCardData as getSpellingCardData } from "../js/spelling.js"
import { createTable } from "./table.js"
import { customModal } from "./modal.js"
import { createCards } from "./card.js";


function createDropdown(data, parent = "body"){
  let dropdownID = data.dropdownID;
  let dropdown = `<div class="dropdown" id="${dropdownID + "Dropdown"}">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="${dropdownID + "DropdownButton"}" data-bs-toggle="dropdown" aria-expanded="false">
                    ${ data.name }
                  </button>
                  <ul class="dropdown-menu" id="${dropdownID + "DropdownUL"}">
                    ${ createActions(data)}
                  </ul>
                </div>`;
    document.getElementById(parent).insertAdjacentHTML('afterbegin', dropdown);
    addListeners(parent, data.depth);
}
function createActions(data){
  let d = '';
  data.menu.forEach(item => {
    d += `<li><a class="dropdown-item" id="dropdown_${ data.dropdownID + '_' + item.listener}">${ item.title }</a></li>`;
   
  });
  return d;
}

function addListeners(parent, depth){
  let liNodes = Array.from(document.getElementById(parent).querySelectorAll('li'));
  liNodes.forEach(child => {
    let id = child.firstChild.id;
    let options = id.split('_',3);
    document.getElementById(id).addEventListener("click", () => { generateListener(options[1], options[2], depth); }, false);
  });
}

function generateListener(object, func, depth){
  
  switch (object.replace(depth,'')) {
    case "states":
      switch (func) {
        case "getTableData":
          createTable(getStateTableData(depth));
          break;
        default:
          break;
      }
      break;
    case "words":
    switch (func) {
      case "getTableData":
        clearAll();
        createTable(getSpellingTableData(depth));
        break;
      case "getCardData":
        clearAll();
        createCards(getSpellingCardData(depth));
        break;
      default:
        break;
    }
    break;
  
    default:
      break;
  }
}
function clearAll(){
  document.getElementById("table").innerHTML = "";
  document.getElementById("card").innerHTML = "";
}
export { createDropdown }