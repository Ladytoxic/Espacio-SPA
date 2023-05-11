import { Home } from '../page/Home.js';
import { Activities } from '../page/Activities.js';
import { Events } from '../page/Events.js';
import { NotFound } from './NotFound.js';
import { Details } from '../page/Details.js';


window.addEventListener('hashchange', Router);

export function Router() {
    const { hash } = location;
    const $root = document.getElementById('root');
    $root.innerHTML = '';
    if (!hash || hash === '#/') {
        Home();
    } else if (hash === '#/actividades') {
        Activities();
    } else if (hash === '#/eventos') {
        Events();
    } else if (hash.match(/^#\/detalles\/.+$/)) {
        Details(hash);
    } else {
        NotFound();
    }
}
