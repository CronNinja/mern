import { createCard } from "../modules/card.js";
import { practicePage } from "./data.js";
import { updateNavBar } from "../modules/navbar.js";


createCard("main", practicePage);
updateNavBar();
document.getElementById("practice").classList.add("active");