import { speak } from "../js/speak.js"
let cardHtml = '';
function getCard(card){
  let cardHtml = `
    <div class="col">
      <div class="card" id="card_${ card }">
        <div class="card-body">
          <p class="card-text"><input type="text" id="cardInput_${ card }" autofocus /></p>
          <button type="button" class="btn btn-warning" id="cardSpeak_${ card }">Speak</button>
        </div>
      </div>
    </div>
  `
  return cardHtml;
}
function populateCards(cards){
  cardHtml = `<div class="row">`;
  cards.forEach(card => { cardHtml += getCard(card) });
  cardHtml += '</div>';
  document.getElementById("card").innerHTML = cardHtml;
}
function createCards(data){
  document.getElementById("card").innerText = cardHtml = "";
  populateCards(data.cards);
  addSpeakListener(data.cards);
  addInputListener(data.cards);
}
function addSpeakListener(cards){
  cards.forEach(card => {
    document.getElementById("cardSpeak_"+ card).addEventListener("click", () => { speak(card); }, false);
  })
}
function addInputListener(cards){
  cards.forEach(card => {
    document.getElementById("cardInput_"+ card).addEventListener("change", (e) => { checkInput(e, card[0]); }, false);
  })
}
function checkInput(e, card){
  if(e.target.value.toLowerCase() === card.toLowerCase()){
    document.getElementById("card_"+ card).className = "card bg-success mb-3";
  } else {
    document.getElementById("card_"+ card).className = "card bg-danger mb-3";
  }
}

export { createCards }