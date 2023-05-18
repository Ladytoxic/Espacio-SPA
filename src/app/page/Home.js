import { Navbar } from '../components/Navbar.js';
import { crearCards } from '../helpers/CrearCards.js';
import { Alert } from '../components/Alert.js';
import { firebase } from '../helpers/FirebaseData.js';
import { Welcome } from '../components/Welcome.js';

export async function Home() {
    const $root = document.getElementById('root');
    $root.innerHTML = '';

    $root.appendChild(Navbar());
    $root.appendChild(Welcome());
    const $section = document.createElement('section');
    $section.classList.add('cards');
    const $main = document.createElement('main');
    $main.appendChild($section);
    $root.appendChild($main);
    const data = await firebase('/Laterraza/talleres/0/');
    console.log(data);
    crearCards(data);
}
