/** Variables */
let linternaApagada = true;
/** Selectores */
const sonidoBatman = document.querySelector('#bati_encendido');
const sonidoBoton = document.querySelector('#bati_click');
const batman = document.querySelector('#batman');
const batmanBoton = document.querySelector('#bati_boton');

/** Funciones */
const controlarLinterna = () => {
    if (linternaApagada) {
        // se enciende la luz
        linternaApagada = false;
        batman.classList.add('batman_activo');

    } else {
        // se apaga la luz
        linternaApagada = true;
        batman.classList.remove('batman_activo');
    }
}

const sonidoLinterna = () => {
    if (sonidoBatman.paused) {
        // se enciende la batiseñal
        sonidoBoton.play();
        sonidoBatman.play();
    } else {
        // se apaga la batiseñal
        sonidoBoton.play();
        sonidoBatman.pause();
        sonidoBatman.currentTime=0;
    }
}

/** Eventos */
batman.addEventListener('click', () => {
    controlarLinterna();
    sonidoLinterna();
})


