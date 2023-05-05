window.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById("menu");
    const menuList = document.querySelector("nav ul");

    menuButton.addEventListener("click", function () {
        menuList.classList.toggle("no-visible");
        if (menuList.classList.contains("no-visible")) {
            menuButton.innerHTML = '<i class="bi bi-list"></i>';
        } else {
            menuButton.innerHTML = '<i class="bi bi-x-lg"></i>';
        }
    });
});

