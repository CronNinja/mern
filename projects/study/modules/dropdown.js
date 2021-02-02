import { getTableData as getStateTableData } from "../js/states.js"
import { createTable as stateCreateTable } from "./table.js"

function createDropdown(data, parent = "body"){
  let dropdown = `<div class="dropdown" id="${data.dropdownID + "Dropdown"}">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="${data.dropdownID + "DropdownButton"}" data-bs-toggle="dropdown" aria-expanded="false">
                    ${ data.name }
                  </button>
                  <ul class="dropdown-menu" id="${data.dropdownID + "DropdownUL"}">
                    ${ createActions(data)}
                  </ul>
                </div>`;
    document.getElementById(parent).insertAdjacentHTML('afterbegin', dropdown);
    addListeners()
}
function createActions(data){
  let d = '';
  data.menu.forEach(item => {
    d += `<li><a class="dropdown-item" id="dropdown_${ data.dropdownID + '_' + item.listener}">${ item.title }</a></li>`;
   
  });
  return d;
}

function addListeners(){
  let liNodes = Array.from(document.getElementById("dropdowns").querySelectorAll('li'));
  liNodes.forEach(child => {
    let id = child.firstChild.id;
    let options = id.split('_',3);
    document.getElementById(id).addEventListener("click", () => { generateListener(options[1], options[2]); }, false);
  });
}

function generateListener(object, func){
  switch (object) {
    case "states":
      switch (func) {
        case "getTableData":
          stateCreateTable(getStateTableData());
          break;
      
        default:
          break;
      }
      break;
  
    default:
      break;
  }
}
export { createDropdown }