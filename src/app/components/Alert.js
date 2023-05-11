export function Alert() {
    const $alert = document.createElement('div');
    $alert.classList.add('alert');
    $alert.innerHTML = 'Este sitio se encuentra en construcción🚧';
    return $alert;
};