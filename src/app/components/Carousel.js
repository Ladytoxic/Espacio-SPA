export function generarCarousel(data) {
  const $carousel = document.createElement('div');
  $carousel.classList.add('carousel');

  data.listaImagenesNuevas.forEach((imageUrl) => {
    const $image = document.createElement('img');
    $image.setAttribute('src', imageUrl);
    $image.setAttribute('alt', 'imagen');
    $carousel.appendChild($image);
  });

  const $btnPrev = document.createElement('button');
  $btnPrev.classList.add('btn_prev')
  $btnPrev.textContent = 'PREV';

  const $btnNext = document.createElement('button');
  $btnNext.classList.add('btn_next')
  $btnNext.textContent = 'NEXT';

  $carousel.appendChild($btnPrev);
  $carousel.appendChild($btnNext);

  $btnNext.addEventListener('click', () => {
    $carousel.scrollLeft += 800;
  });

  $btnPrev.addEventListener('click', () => {
    $carousel.scrollLeft -= 800;
  });

  return $carousel;
}





