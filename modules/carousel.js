function createCarousel(data){
  let carouselHTML = `<div id="carouselCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">`;
  data.forEach(element => {
    console.log(element);
    carouselHTML += `
    <div class="carousel-item">
      <img src="${ element.src }" class="d-block w-10" alt="${ element.alt }">
      <div class="carousel-caption d-none d-md-block">
        <h5>${ element.title }</h5>
        <p>${ element.p }</p>
      </div>
    </div>
    `;
  });
  carouselHTML += `</div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`;
document.getElementById("carousel").innerHTML = carouselHTML;
}

export { createCarousel }