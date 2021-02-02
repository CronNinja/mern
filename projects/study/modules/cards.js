import { subjects } from "../js/subjects.js"
let cardDeck = `<div class="container"><div class="row row-cols-auto" style="justify-content: center;">`;

subjects.forEach(subject => {
  cardDeck += `
              <div class="col-md-10" style="padding-bottom: 1rem;">
                <div class="card">
                <div class="card-header">
                 ${ subject.title }
                </div>
                  <div class="card-body">
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>`;
});

cardDeck += '</div>';
export { cardDeck };