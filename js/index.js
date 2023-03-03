/** Variables */
let linternaApagada = true;

/** Selectores */
const sonidoBatman = document.querySelector('#bati_encendido');
const sonidoBoton = document.querySelector('#bati_click');
const batman = document.querySelector('#batman');
const batmanBoton = document.querySelector('#bati_boton');

/** Funciones */
const controlarLinterna = () => {

    linternaApagada ? 
        (linternaApagada = false && batman.classList.add('batman_activo')) 
        : (linternaApagada = true && batman.classList.remove('batman_activo'))
}

const sonidoLinterna = () => {

    sonidoBatman.paused ? 
        (sonidoBoton.play() && sonidoBatman.play()) 
        : (sonidoBoton.play() && sonidoBatman.pause() && (sonidoBatman.currentTime=0))
}

/** Eventos */
batman.addEventListener('click', () => {
    controlarLinterna();
    sonidoLinterna();
})


