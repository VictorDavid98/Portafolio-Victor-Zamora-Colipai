
import { saludar } from "./js/componentes";
import './styles.css';

const typed = new Typed('.typed', {
    strings: ['<i class="cargos">DESARROLLADOR WEB</i>',
              '<i class="cargos">DISEÑADOR WEB</i>',
              '<i class="cargos">MAQUETADOR WEB</i>'],
              stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
              typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
              startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
              backSpeed: 45, // Velocidad en milisegundos para borrrar una letra,
              smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
              shuffle: false, // Alterar el orden en el que escribe las palabras.
              backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
              loop: true, // Repetir el array de strings
              loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
              showCursor: true, // Mostrar cursor palpitanto
              cursorChar: '|', // Caracter para el cursor
              contentType: 'html', // 'html' o 'null' para texto sin formato          
});
const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

});

const btnMenu = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu-test');
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('show');

});
// jQuery('document').ready(function($){
//     const menuBtn = $('.menu-icon'),
//           menu = $('.nav-bn ul');

//     menuBtn.click(function() {
//         menu.addClass('show');
//     })

// });
const caja = document.querySelector('.volverArriba');
caja.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});

window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 0){
        caja.style.display = 'flex';
    }
    else{
        caja.style.display = 'none';
    }
});

