//cargar la pagina
window.onload = () => {
    //llamamos a la funcion iniciar juego
    iniciarJuego();
};
//variables globales
let cartasVolteadas = [];
let bloqueado = false;
let intervalo;
let cartasPajaro = [];
let imagenes = ["cobre.jpeg", "crest.jpeg", "giboso.jpeg", "parisino.jpeg", "satine.jpeg", "lizard.jpeg", 
    "arlequin.jpeg","alas-grises.jpeg", "agata-opal.jpeg", "amarillo.jpeg"];

//funcion para iniciar el juego
function iniciarJuego() {
    // Duplicamos el array para crear las parejas
    cartasPajaro = [...imagenes, ...imagenes];

    // Mostramos las cartas (reverso)
    mostrarImagenes();

    // Iniciamos el reloj (1 minuto)
    let reloj = new Date(1 * 60 * 1000);
    intervalo = setInterval(() => {
        let miDiv = document.getElementById("tiempo");
        let minutos = String(reloj.getMinutes()).padStart(2, "0");
        let segundos = String(reloj.getSeconds()).padStart(2, "0");
        miDiv.textContent = minutos + " : " + segundos;
        reloj.setSeconds(reloj.getSeconds() - 1);

        if (reloj.getMinutes() == 0 && reloj.getSeconds() == 0) {
            miDiv.textContent = "¡Tiempo terminado!";
            //cuando llegue a 0 se reinicia el juego
            reiniciarJuego(intervalo);
            //y le damos la vuelta a las imagenes
            rotarImagenes();
        }
    }, 1000);

    // Botón reiniciar
    //si pinchamos en el boton de reiniciar, llamamos a la funcion reiniciar juego
    //donde limpiamos el intervalo
    document.getElementById("reiniciar").onclick = () => {
        reiniciarJuego(intervalo);
    };
    //y rotamos la imagenes, para que se muestre el reverso
    rotarImagenes();
}

//reiniciamos el juego, limpiando el intevalo
function reiniciarJuego(intervalo) {
    clearInterval(intervalo);
    cartasVolteadas = [];
    bloqueado = false;
    iniciarJuego();
}

//mostramos las imagenes(cartass)
function mostrarImagenes() {
    let divPajaro = document.getElementById("pajaros");
    //muestra en el html ""
    divPajaro.innerHTML = "";

    // Barajar cartas
    cartasPajaro.sort(() => Math.random() - 0.5);

    //recorremos el array con un foreach, array donde estan duplicadas las imagenes del
    //primer array, es decir hay una pareja por cada imagen
    cartasPajaro.forEach((imagen, i) => {
        //vamos crando elemento img para cada una de las imagenes que hay en el array
        let img = document.createElement("img");
        //imagenes reverso
        img.src = "imagenes/vuelta.jpeg";
        //asigna el valor de i al atributo en html data-indice de la img
        img.dataset.indice = i;
        //asigna el nombre de la imagen (cobre.jpeg...) al atributo en html data-valor de img</img>
        img.dataset.valor = imagen;
        //tamaño de la imagen
        img.height = 170;
        img.width = 140;
        //margen entre imagenes
        img.style.margin = "5px";
        //al clickar llamamos a la funcion voltear carta
        img.addEventListener("click", voltearCarta);
        //añadimos un hijo que es img a mi div pajaro
        divPajaro.appendChild(img);
    });
}

//volteamos las cartas
function voltearCarta(e) {
    const carta = e.target;
    carta.classList.add("flipped");
    carta.src = "imagenes/" + carta.dataset.valor;
    //añadimos la carta al array de cartas volteadas
    cartasVolteadas.push(carta);

    //si dentro del array el tamaño es igual a 2, es decir hay una pareja, 2 cartas
    if (cartasVolteadas.length === 2) {
        //bloqueado pasa a ser true
        bloqueado = true;
        setTimeout(() => {
            //comprobamos la pareja, llamando a la funcion
            comprobarPareja();
        }, 800);
    }
}

//comprobamos la pareja, si las dos cartas son iguales
function comprobarPareja() {
    //para comprobar rellenamos el array con dos cartas
    const [carta1, carta2] = cartasVolteadas;

    //si el nombre de la carta 1 es igual a la carta 2
    if (carta1.dataset.valor == carta2.dataset.valor) {
        //añadimos las cartas a la clase oculta, que controlamos en el css
        carta1.classList.add("oculta");
        carta2.classList.add("oculta");
    } else {
        //si no son iguales mostramos el reverso de la carta
        carta1.src = "imagenes/vuelta.jpeg";
        carta2.src = "imagenes/vuelta.jpeg";
        //eliminamos la clase flipped, que hace un efecto de giro
        carta1.classList.remove("flipped");
        carta2.classList.remove("flipped");
    }

    //volvemos a darle el valor de vacio al array 
    cartasVolteadas = [];
    //y a bloqueado le cambiamos el valor a false
    bloqueado = false;

    // Comprobar si ya se ganó
    if (document.querySelectorAll("#pajaros img:not(.oculta)").length == 0) {
        document.getElementById("tiempo").textContent = "🎉 ¡¡¡Has Ganadooo!!! 🎉";
        reiniciarJuego();
    }
}

//rotamos las imagenes
function rotarImagenes() {
    let indice = 0;
    const imgElement = document.getElementById("pajaros");
    setInterval(() => {
        imgElement.src = "imagenes/" + imagenes[indice];
        indice = (indice + 1) % imagenes.length;
    }, 2000);
}