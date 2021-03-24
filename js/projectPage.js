import { createCard } from "../modules/card.js";
import { projectPage } from "./data.js";
import { updateNavBar } from "./navbar.js";

createCard("main", projectPage);
updateNavBar();
document.getElementById("mern").classList.add("active");