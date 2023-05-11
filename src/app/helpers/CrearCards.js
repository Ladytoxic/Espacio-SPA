import { PostCard } from "./PostCard.js";

export function crearCards(data) {
  const $main = document.querySelector('.cards');
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const resp = data[key];
      const $card = document.createElement("div");
      $card.classList.add('card');
      $card.innerHTML = PostCard({
        _id: key,
        titulo: resp.titulo,
        img: resp.img,
        facilita: resp.facilita,
        pronombres: resp.pronombres,
        telefono: resp.telefono,
        url_instagram: resp.url_instagram,
        url_facebook: resp.url_facebook,
        url_sitio_web: resp.url_sitio_web,
        detalle_taller: resp.detalle_taller,
        observacion: resp.observacion
      });
      $main.appendChild($card);
    }
  }
}
