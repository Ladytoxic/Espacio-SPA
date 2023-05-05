import { Ajax } from "./app/helpers/Ajax.js";
import  Api  from "./app/helpers/Firebase-api.js";
import { router } from "./app/Router.js";
// Components
import { Home } from "./app/page/Home.js";
import { Activities } from "./app/page/Activities.js";
import { Events } from "./app/page/Events.js";
import { Details } from "./app/page/Details.js";

Ajax({
    url: Api.URL,
    cbSuccess: (data) =>
        console.log()
});



const app = Vue.createApp({
    components: {
        Home,
        Activities,
        Events,
    },
    data() {
        return {
            info: {
                titulo: 'Area de Género y Diversidad',
                img: './src/assets/img/LadyToxic.png',
                alt: '',
                description: '',
                author: 'Almendrita🍋'
            },
            pagina: '',
            loaded: false,
        }
    },
    created() { },
    mounted() { },

    methods: {
        pag(textoBoton) {
            this.pagina = textoBoton;
        },
    },
});

app.use(router);

app.mount('#app');