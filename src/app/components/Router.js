import { Home } from '../page/Home.js';
import { Activities } from '../page/Activities.js';
import { Events } from '../page/Events.js'
import { NotFound } from './NotFound.js';

export function Router() {
    const $root = document.getElementById('root');
    $root.innerHTML = '';
    const { hash } = location;
    if (!hash || hash === '#/') {
        Home();
    } else if (hash === '#/actividades') {
        Activities();
    } else if (hash === '#/eventos') {
        Events();
    } else {
        NotFound();
    }
}

window.addEventListener('hashchange', Router);