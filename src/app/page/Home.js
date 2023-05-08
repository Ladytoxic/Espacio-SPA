import { Navbar } from '../components/Navbar.js'
import { generarCarousel, data } from '../components/Carousel.js';
import { Ajax } from '../helpers/Ajax.js';
import Api from '../helpers/Firebase-api.js'
import { crearCards } from '../helpers/CrearCards.js';

export function Home() {
    const $root = document.getElementById('root');
    $root.innerHTML = '';
    $root.appendChild(Navbar());
    const $carouselContainer = document.createElement('div');
    $carouselContainer.id = 'carousel-container';
    $root.appendChild($carouselContainer);
    $carouselContainer.innerHTML = generarCarousel(data);
    const $main = document.createElement('main');
    $main.classList.add('cards');
    $root.appendChild($main);

    Ajax({
        url: Api.URL,
        cbSuccess: (res) => {
            let data = res.talleres.area_1;
            crearCards(data);
        }
    });
}
