import { Navbar } from "../components/Navbar.js";
import { Alert } from "../components/Alert.js"

export function Activities() {
    const $root = document.getElementById('root');
    $root.innerHTML = '';
    $root.appendChild(Alert())
    $root.appendChild(Navbar());
    const $section = document.createElement('section');
    $section.classList.add('cards');
    const $main = document.createElement('main');
    $main.appendChild($section);
    $root.appendChild($main);
};
