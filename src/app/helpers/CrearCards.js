import { PostCard } from "./PostCard.js";

export function crearCards(data) {
    const $main = document.querySelector('.cards');
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const resp = data[key];
        const $card = document.createElement("div");
        $card.classList.add('card');
        $card.innerHTML = PostCard({
          titulo: resp.titulo,
          img: resp.img,
          facilita: resp.facilita,
          pronombres: resp.pronombres,
          descripcion: resp.detalle_taller.descripcion,
          dia: resp.detalle_taller.dia,
          horario: resp.detalle_taller.horario,
          observacion: resp.observacion
        });
        $main.appendChild($card);
      }
    }
  }
  