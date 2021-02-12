function createCard(parent, data){
  for(let i = data.length - 1; i >= 0; i--){ makeCard(parent,data[i])}
}
function makeCard(parent, data){
  let initHtml = initCard(data.name);
  let card = document.createElement("div");
  document.getElementById(parent).append(card);
  let cardHtml = data.html;
  card.innerHTML = initHtml;
  for (const key in cardHtml) {
    if (cardHtml[key]) {
      if(key === "buttons"){
        for ( const k in cardHtml.buttons ){
          document.getElementById("card-buttons-" + data.name).innerHTML += makeButton(cardHtml.buttons[k]);
        }
      } else {
        document.getElementById("card-" + key + "-" + data.name).innerText += cardHtml[key];
      }
    }
  }
}
function makeButton(button){
  return `<a href="${ button.link }" class="btn btn-${ button.color }" target="${ button.target }">${ button.text }</a>&nbsp;`;
}
function initCard(name){
  return `
      <div class="row row-cols-auto" style="justify-content: center;" id="card-div-${ name }">
      <div class="col-md-10" style="padding-bottom: 1rem;">
        <div class="card" id="card-${ name }">
          <div class="card-header" id="card-header-${ name }"></div>
          <div class="card-body" id="card-body-${ name }">
            <h5 class="card-title" id="card-title-${ name }"></h5>
            <p class="card-text" id="card-text-${ name }"></p>
            <div id="card-buttons-${ name }"></div>
          </div>
          <div class="card-footer text-muted" id="card-footer-${ name }"></div>
        </div>
      </div>
  `;
}

export { createCard }