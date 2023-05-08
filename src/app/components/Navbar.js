export function Navbar() {
    const imgLogo = './src/assets/img/LadyToxic.png';
    const $navbar = document.createElement('nav');

    // Crear elementos del menú
    $navbar.innerHTML = `
        <a href="#/"><img src="${imgLogo}" alt="Logo"></a>
        <button id="menu" aria-label="Abrir menú"><i class="bi bi-list"></i></button>
        <ul class="no-visible menu">
            <li><a href="#/">Home</a></li>
            <li><a href="#/actividades">Actividades</a></li>
            <li><a href="#/eventos">Eventos</a></li>
        </ul>
    `;

    // Añadir evento click al botón del menú
    const menuButton = $navbar.querySelector("#menu");
    const menuList = $navbar.querySelector("nav ul");

    menuButton.addEventListener("click", function () {
        menuList.classList.toggle("no-visible");
        if (menuList.classList.contains("no-visible")) {
            menuButton.innerHTML = '<i class="bi bi-list"></i>';
        } else {
            menuButton.innerHTML = '<i class="bi bi-x-lg"></i>';
        }
    });

    return $navbar;
}

