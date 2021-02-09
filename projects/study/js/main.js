import { createDropdown } from "../modules/dropdown.js";
import { initModal } from "../modules/modal.js";

import { getDropdownData as stateDropdownData } from "../js/states.js";
import { getDropdownData as wordDropdownData } from "../js/spelling.js"

createDropdown(stateDropdownData("Midwest"), "MidwestDropdown");
createDropdown(stateDropdownData("Northeast"), "NortheastDropdown");
createDropdown(stateDropdownData("Southeast"), "SoutheastDropdown");
createDropdown(wordDropdownData(7), "Unit7Dropdown");
initModal();