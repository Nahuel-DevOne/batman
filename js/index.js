/** Variables */
let estadoLinterna = 'apagado';
/** Selectores */
const sonidoBatman = document.querySelector('#bati_encendido');
const sonidoBoton = document.querySelector('#bati_click');
const batman = document.querySelector('#batman');
const batmanBoton = document.querySelector('#bati_boton');

// Funciones
const controlarLinterna = () => {
    if (estadoLinterna === 'apagado') {
        estadoLinterna = 'encendido';
        // sonido
        batman.classList.add('batman_activo');

    } else {
        estadoLinterna = 'apagado';
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


