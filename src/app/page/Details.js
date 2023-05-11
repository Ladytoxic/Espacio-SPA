import { Navbar } from "../components/Navbar.js"
import { firebase } from "../helpers/FirebaseData.js"
import { PostCard } from "../helpers/PostCard.js";

export async function Details(hash) {
    const match = hash.match(/^#\/detalles\/(.+)$/);
    const $root = document.getElementById("root");
    const $main = document.createElement("main");
    const $detalles = document.createElement("section");
    const $box = document.createElement("div");
    $detalles.classList.add("details");
    $box.classList.add("box");
    $root.appendChild(Navbar());
    $root.appendChild($main);
    $main.appendChild($detalles);
    $detalles.appendChild($box);

    if (match) {
        const propsStr = decodeURIComponent(match[1]);
        try {
            const props = propsStr;
            const data = await firebase(`Laterraza/talleres/0/${props}`)
            console.log(data)
            $box.innerHTML = PostCard(data);
            const $link = document.querySelector('.link');
            $link.innerHTML = `<a class="link whatsapp" href="#">Quiero Anotarme!</a>`;

        } catch (error) {
            console.error(`Error al analizar el objeto JSON: ${error}`);
        }
    }
    return $box;
}


