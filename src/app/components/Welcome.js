import { generarCarousel } from "./Carousel.js";
const data = {
    listaImagenesNuevas: [
      "https://i.postimg.cc/XvG9s4nn/Ilustraci-n-Claudia-Pia-B-18-de-marzo2.jpg",
      "https://i.postimg.cc/RCcLrSKF/Imagen-de-Whats-App-2023-03-31-a-las-13-02-53.jpg",
      "https://i.postimg.cc/9XRFz0Jm/LAS-VIDAS-TRANS-IMPORTAN.jpg",
      "https://i.postimg.cc/fT7s09XN/552.jpg",
    ],
  };
export function Welcome() {
    const $header = document.createElement('header');
    const propText = 'e';
    $header.innerHTML = `<h1>Bienvenid<span class="prop">${propText}</span>s a Disidir</h1>`;
    const propElements = $header.querySelectorAll('.prop');
    let index = 0;

    function changePropText() {
        let texts = ['a', '@', 'x', 'o', 'e', '*'];
        if (index >= texts.length) {
            index = 0;
        }
        for (let i = 0; i < propElements.length; i++) {
            propElements[i].textContent = texts[index];
        }
        index++;
    }
    setInterval(changePropText, 1000);
    $header.appendChild(generarCarousel(data))
    return $header;
};
