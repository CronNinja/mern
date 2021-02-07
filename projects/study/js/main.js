import { createDropdown } from "../modules/dropdown.js";
import { initModal } from "../modules/modal.js";

import { getDropdownData as stateDropdownData } from "../js/states.js"

createDropdown(stateDropdownData("Midwest"), "MidwestDropdown");
createDropdown(stateDropdownData("Northeast"), "NortheastDropdown");
createDropdown(stateDropdownData("Southeast"), "SoutheastDropdown");
initModal();