import { employees } from "./employees.js";

let cardDeck = '<div class="card-group">';

for (let i = 0; i < 5; i++) {
  cardDeck += `
                <div class="card">
                  <div class="card-body">
                    <p class="card-title">${employees[i][10]}</p>
                  </div>
                </div>`;
}

cardDeck += '</div>';
export { cardDeck };