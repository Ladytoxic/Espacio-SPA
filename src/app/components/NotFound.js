export function NotFound() {

    const $root = document.getElementById('root');
    $root.innerHTML = `
    <div class="error fade-in">
       <h2>Error 404</h2>
       <p>Not found</p>
    </div>`
}