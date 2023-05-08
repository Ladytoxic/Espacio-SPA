export function PostCard(props) {
    const { titulo, img, facilita, pronombres, descripcion, dia, horario, observacion } = props;
    let imgDef = img ? img : 'src/assets/img/LadyToxic.png';
    return `
    <h3>${titulo}</h3>
    <img src="${imgDef}" alt="imagen de ${titulo}">
    <h4>${facilita} ${pronombres ? `(${pronombres})` : ''}</h4>
    <ul class="card-body">
        <li><p>${descripcion ? descripcion : ''}</p></li>
        <li><span>${dia ? `${dia} (${horario ? (horario.slice(0, 5) + "hs - " + horario.slice(6) + "hs") : ''})` : ''}</span></li>
        <li><span class="observacion">${observacion ? observacion : ''}</span></li>
    </ul>`
}

