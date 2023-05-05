// Components
import { Home } from "./page/Home.js";
import { Activities } from "./page/Activities.js";
import { Events } from "./page/Events.js";
import { Details } from "./page/Details.js";


export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/actividades', component: Activities },
        { path: '/eventos', component: Events }
        // { path: '/details/:id', name: 'details', component: details }
    ],
    transition: {
        mode: 'out-in',
        enter: {
            opacity: 0
        }
    }
});
