import { createCard } from "../modules/card.js";
import { landingPage } from "./data.js";
import { updateNavBar } from "../modules/navbar.js";


createCard("main", landingPage);
updateNavBar();