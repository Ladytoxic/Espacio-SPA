export function PostCard(props) {
    const { _id, titulo, img, facilita, pronombres, detalle_taller, observacion, url_facebook, url_instagram, url_sitio_web } = props;
    let imgDef = img ? img : 'https://www.ucentral.edu.co/sites/default/files/inline-images/fcsha-dpto-arte-dramatico.jpg';

    return `
    <h3>${titulo}</h3>
    <img src="${imgDef}" alt="imagen de ${titulo}">
    <h4>${facilita} ${pronombres ? `(${pronombres})` : ''}</h4>
    <ul class="card-body">
        <li><p>${detalle_taller.descripcion ? detalle_taller.descripcion : ''}</p></li>
        <li><p>${detalle_taller.precio_clase ? `$${detalle_taller.precio_clase.toFixed(2)}` : ''}</p></li>
        <li><p>${detalle_taller.precio_mensual ? `Valor mensual: $${detalle_taller.precio_mensual.toFixed(2)}` : ''}</p></li>        
        <li><span>${detalle_taller.dia ? `${detalle_taller.dia} (${detalle_taller.horario ? (detalle_taller.horario.slice(0, 5) + "hs - " + detalle_taller.horario.slice(6) + "hs") : ''})` : ''}</span></li>
        <li class="redes_sociales">
            <a href="${url_instagram ? url_instagram : ''}" target="_blank"><i class="bi bi-instagram"></i></a>
            <a href="${url_facebook ? url_facebook : ''}" target="_blank"><i class="bi bi-facebook"></i></a>
            <a href="${url_sitio_web ? url_sitio_web : ''}" target="_blank"><i class="bi bi-globe2"></i></a>
        </li>
        <li class="redes_sociales">
            ${url_instagram ? `<a href="${url_instagram}" target="_blank"><i class="bi bi-instagram"></i></a>` : ''}
            ${url_facebook ? `<a href="${url_facebook}" target="_blank"><i class="bi bi-facebook"></i></a>` : ''}
            ${url_sitio_web ? `<a href="${url_sitio_web}" target="_blank"><i class="bi bi-globe2"></i></a>` : ''}
        </li>

        <li><span class="observacion">${observacion ? observacion : ''}</span></li>
        <li><a class="link" href="#/detalles/${_id}">Ver Mas</a></li>
    </ul>`;
}

