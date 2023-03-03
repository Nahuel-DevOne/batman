/** Variables */
let linternaApagada = true;
/** Selectores */
const sonidoBatman = document.querySelector('#bati_encendido');
const sonidoBoton = document.querySelector('#bati_click');
const batman = document.querySelector('#batman');
const batmanBoton = document.querySelector('#bati_boton');

// Funciones
const controlarLinterna = () => {
    if (linternaApagada) {
        linternaApagada = false;
        // sonido
        batman.classList.add('batman_activo');

    } else {
        linternaApagada = true;
        //sonido
        batman.classList.remove('batman_activo');
    }
}

const sonidoLinterna = () => {
    if (sonidoBatman.paused) {
        sonidoBoton.play();
        sonidoBatman.play();
    } else {
        sonidoBoton.play();
        sonidoBatman.pause();
        sonidoBatman.currentTime=0;
    }
}

// eventos
batman.addEventListener('click', () => {
    controlarLinterna();
    sonidoLinterna();
})


