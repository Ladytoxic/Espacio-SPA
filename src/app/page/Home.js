export const Home = {
    template: `
    <div class="carousel">
            <figure :style="{ backgroundImage: 'url(' + listaImagenesNuevas[indiceImagenActual] + ')' }"
            :class="{ 'is-transitioning': isTransitioning }"></figure>
        <div class="buttons">
            <button class="prev" @click="cambiarImagen('prev')"><i class="bi bi-arrow-left-circle"></i></button>
            <button class="next" @click="cambiarImagen('next')"><i class="bi bi-arrow-right-circle"></i></button>
        </div>
        <ul class="image-list">
            <li v-for="(imagen, index) in listaImagenesNuevas" :key="index" @click="cambiarImagenIndice(index)" :class="{ active: indiceImagenActual === index }"></li>
        </ul>
    </div>`,
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
            listaImagenesNuevas: [
                'https://i.postimg.cc/XvG9s4nn/Ilustraci-n-Claudia-Pia-B-18-de-marzo2.jpg',
                'https://i.postimg.cc/RCcLrSKF/Imagen-de-Whats-App-2023-03-31-a-las-13-02-53.jpg',
                'https://i.postimg.cc/9XRFz0Jm/LAS-VIDAS-TRANS-IMPORTAN.jpg',
                'https://i.postimg.cc/fT7s09XN/552.jpg'
            ],
            indiceImagenActual: 0,
            isTransitioning: false
        }
    },
    created() { },
    mounted() { },
    methods: {
        pag(textoBoton) {
            this.pagina = textoBoton;
        },
        cambiarImagen(direccion) {
            if (direccion === 'next') {
                this.indiceImagenActual++
                if (this.indiceImagenActual >= this.listaImagenesNuevas.length) {
                    this.indiceImagenActual = 0
                }
            } else if (direccion === 'prev') {
                this.indiceImagenActual--
                if (this.indiceImagenActual < 0) {
                    this.indiceImagenActual = this.listaImagenesNuevas.length - 1
                }
            }
            this.isTransitioning = true;
            setTimeout(() => {
                this.isTransitioning = false;
            }, 500);
        },
        cambiarImagenIndice(index) {
            this.indiceImagenActual = index;
            this.isTransitioning = true;
            setTimeout(() => {
                this.isTransitioning = false;
            }, 500);
        }
    },
}
