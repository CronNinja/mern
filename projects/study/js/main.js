import { createDropdown } from "../modules/dropdown.js";

import { getDropdownData as stateDropdownData } from "../js/states.js"

createDropdown(stateDropdownData(), "dropdowns");
