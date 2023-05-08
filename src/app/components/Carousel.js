export function generarCarousel(data) {
  const { listaImagenesNuevas, indiceImagenActual, isTransitioning } = data;
  const imageListItems = listaImagenesNuevas.map((imagen, index) => {
    return `<li class="${indiceImagenActual === index ? 'active' : ''}" 
               @click="cambiarImagenIndice(${index})"></li>`;
  }).join('');

  return `
      <div class="carousel">
        <figure style="background-image: url('${listaImagenesNuevas[indiceImagenActual]}')" 
                class="${isTransitioning ? 'is-transitioning' : ''}">
        </figure>
        <div class="buttons">
        <button class="prev" onclick="cambiarImagen('prev')">
  <i class="bi bi-arrow-left-circle"></i>
</button>
<button class="next" onclick="cambiarImagen('next')">
  <i class="bi bi-arrow-right-circle"></i>
</button>
        </div>
        <ul class="image-list">
          ${imageListItems}
        </ul>
      </div>
    `;
}

function cambiarImagen(direccion, data) {
  const { listaImagenesNuevas, indiceImagenActual } = data;
  let nuevoIndiceImagen;
  if (direccion === "next") {
    nuevoIndiceImagen = indiceImagenActual + 1;
    if (nuevoIndiceImagen >= listaImagenesNuevas.length) {
      nuevoIndiceImagen = 0;
    }
  } else if (direccion === "prev") {
    nuevoIndiceImagen = indiceImagenActual - 1;
    if (nuevoIndiceImagen < 0) {
      nuevoIndiceImagen = listaImagenesNuevas.length - 1;
    }
  }
  const figureElement = document.querySelector(".carousel figure");
  figureElement.style.backgroundImage = `url('${listaImagenesNuevas[nuevoIndiceImagen]}')`;
  const imageListItems = document.querySelectorAll(".image-list li");
  imageListItems[indiceImagenActual].classList.remove("active");
  imageListItems[nuevoIndiceImagen].classList.add("active");
  data.indiceImagenActual = nuevoIndiceImagen;
  data.isTransitioning = true;
  setTimeout(() => {
    data.isTransitioning = false;
  }, 500);
}

function cambiarImagenIndice(index, data) {
  const { listaImagenesNuevas } = data;
  const figureElement = document.querySelector(".carousel figure");
  figureElement.style.backgroundImage = `url('${listaImagenesNuevas[index]}')`;
  const imageListItems = document.querySelectorAll(".image-list li");
  imageListItems[data.indiceImagenActual].classList.remove("active");
  imageListItems[index].classList.add("active");
  data.indiceImagenActual = index;
  data.isTransitioning = true;
  setTimeout(() => {
    data.isTransitioning = false;
  }, 500);
}

export const data = {
  listaImagenesNuevas: [
    "https://i.postimg.cc/XvG9s4nn/Ilustraci-n-Claudia-Pia-B-18-de-marzo2.jpg",
    "https://i.postimg.cc/RCcLrSKF/Imagen-de-Whats-App-2023-03-31-a-las-13-02-53.jpg",
    "https://i.postimg.cc/9XRFz0Jm/LAS-VIDAS-TRANS-IMPORTAN.jpg",
    "https://i.postimg.cc/fT7s09XN/552.jpg",
  ],
  indiceImagenActual: 0,
  isTransitioning: false,
};

// const carouselContainer = document.getElementById("carousel-container");
// carouselContainer.innerHTML = generarCarousel(data);
// const prevButton = document.querySelector(".carousel .buttons .prev");
// prevButton.addEventListener("click", () => cambiarImagen("prev", data));
// const nextButton = document.querySelector(".carousel .buttons .next");
// nextButton.addEventListener("click", () => cambiarImagen("next", data));
// const imageListItems = document.querySelectorAll(".carousel .image-list li");
// imageListItems.forEach((li, index) => {
//   li.addEventListener("click", () => cambiarImagenIndice(index, data));
// });
