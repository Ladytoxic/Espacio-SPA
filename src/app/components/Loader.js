export function Loader() {
    const $loaderHtml = document.createElement('div');
    $loaderHtml.classList.add('loader');
    $loaderHtml.innerHTML = '<p>CARGANDO PAGINA</p>';
    return $loaderHtml;
};