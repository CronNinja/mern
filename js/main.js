import { createCard } from "../modules/card.js";
import { landingPage } from "./data.js";
import { updateNavBar } from "./navbar.js";


createCard("main", landingPage);
updateNavBar();