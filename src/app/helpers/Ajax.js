export function Ajax(props) {
    let { url, cbSuccess } = props;

    fetch(url + '.json')
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => cbSuccess(json))
        .catch(err => {
            let message = err.statusText || "Ocurrió un error al acceder a la API";
            document.getElementById('app').innerHTML = `
            <div class="error fade-in">
                <h2>Error ${err.status}</h2>
                <p>${message}</p>
            </div>`
            console.log(err);
        });
};