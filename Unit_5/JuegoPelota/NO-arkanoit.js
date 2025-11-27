// VARIABLES
var miBola;
var miBarra;

// posiciones iniciales de la bola y la barra
var posicionYBola = 100;
var posicionXBola = 250;
var posicionXBarra = 250;

// velocidad
var velocidadX = 8;
var velocidadY = 10;


var VelocidadYBola = 0;
var velocidadXBola = 0;

// AL CARGAR LA PAGINA
window.onload = () =>{
    dibujarEscenario();
    miBola = document.getElementById("bola");
    animaJuego();

    var miBarra = document.getElementById("barra");
    document.addEventListener("keydown",(e)=>{
        if(e.key == "ArrowRight" && posicionXBarra<=500){
            posicionXBarra += 10;
            miBarra.style.marginLeft = posicionXBarra+"px";
        }else if(e.key == "ArrowLeft" && posicionXBarra>0){
            posicionXBarra += -10;
            miBarra.style.marginLeft = posicionXBarra+"px";
        }
    })
}


function animaJuego(){
    var miIntervalo;
    miIntervalo = setInterval(()=>{
        posicionYBola += velocidadY;
        miBola.style.marginTop = posicionYBola+"px"; 

        posicionXBola += velocidadX;
        miBola.style.marginLeft = posicionXBola+"px"

        if(posicionYBola <= 0){
            velocidadY *= -1;
        }else if(posicionYBola >= 500){
            velocidadY *= -1;
            /*alert("Game over");
            clearInterval(miIntervalo);*/
        }

        if(posicionXBola <= 0){
            velocidadX *= -1;
        }else if(posicionXBola >= 500){
            velocidadX *= -1;
            //clearInterval(miIntervalo);
        }

        if(posicionXBola == posicionXBarra){
            velocidadY *= -1;
        }
    },30);

    //rebotar la bola en la barra
    if (
        posicionYBola >= 350 &&
        posicionYBola <= 360 &&
        posicionXBola >= posicionXBarra &&
        posicionXBola <= posicionXBarra) 
    {
        // rebota hacia arriba
        velocidadY *= -1;
    }
}

/*function dibujarEscenario(){
    //--- CREAMOS EL ELEMENTO BARRA ---
    let arka = document.createElement("div");
    arka.classList.add("barra");
    // posicion absoluta
    arka.style.position = "absolute";
    //distancia desde abajo
    arka.style.top = "100px";
    //posicion inicial
    arka.style.left = "200px";
    //ancho de la barra
    arka.style.width = "100px";
    //alto de la barra
    arka.style.height = "15px";
    //id
    arka.id = "barra";

    // Buscar el div
    let divBarra = document.getElementById("arkanoit");
    // Añadirla al div con id arkanoit
    divBarra.appendChild(arka);


    // --- CREAMOS EL ELEMENTO BOLA ---
    let arkaBola = document.createElement("div");
    arkaBola.classList.add("bola");
    // posicion absoluta
    arkaBola.style.position = "absolute";
    //distancia desde abajo
    arkaBola.style.top = "10px";
    //posicion inicial
    arkaBola.style.left = "20px";
    //ancho de la bola
    arkaBola.style.width = "50px";
    //alto de la bola
    arkaBola.style.height = "50px";
    //id
    arkaBola.id = "bola";

    // Buscar el div
    let divBola = document.getElementById("arkanoit");
    // Añadirla al div con id arkanoit
    divBola.appendChild(arkaBola);


// --- CREAMOS UN CUADRADO QUE VA A SER EL ESCENARIO

    //lado superior
    let escenarioSuperior = document.createElement("div");
    for(let i = 0; i < 15; i++){
        escenarioSuperior.classList.add("escenarioSuperior");
        //distancia desde abajo
        escenarioSuperior.style.top = "5px";
        //posicion inicial
        escenarioSuperior.style.left = "20px";
        //ancho del ladrillo
        escenarioSuperior.style.width = "30px";
        //alto del ladrillo
        escenarioSuperior.style.height = "10px";
        //id
        escenarioSuperior.id = "escenarioSuperior";

        //Buscamos el div
        let divEscenarioSuperior = document.getElementById("arkanoit");
        //añadimos al div 
        divEscenarioSuperior.appendChild(escenarioSuperior);
    }

    //creamos un bucle para que se repita y cree toda la columna izquierda
    let escenarioIzquierdo = document.createElement("div");
    for(let i = 0; i < 15; i++){
        let esceI = document.createElement("p");
        esceI.classList.add("escenarioIzquierdo");
        //distancia desde abajo
        esceI.style.top = "5px";
        //posicion inicial
        esceI.style.left = "20px";
        //ancho del ladrillo
        esceI.style.width = "30px";
        //alto del ladrillo
        esceI.style.height = "10px";
        //id
        esceI.id = "escenarioIzquierdo";

        let parrafoIzquierdo = document.getElementById("escenarioIzquierdo");
        parrafoIzquierdo.appendChild(esceI);
        
    }
    //Buscamos el div
        let divEscenarioIzquierdo = document.getElementById("arkanoit");
        //añadimos al div 
        divEscenarioIzquierdo.appendChild(escenarioIzquierdo);

}*/

function dibujarEscenario() {
    // === Obtener el contenedor principal ===
    const contenedor = document.getElementById("arkanoit");
    const medidas = contenedor.getBoundingClientRect(); // 📏 obtiene tamaño del div

    contenedor.style.position = "relative";
    contenedor.style.border = "2px solid black";
    contenedor.style.background = "#e6e6e6";

    // --- BARRA ---
    const barra = document.createElement("div");
    barra.classList.add("barra");
    barra.style.position = "absolute";
    barra.style.width = medidas.width * 0.15 + "px";   // 15% del ancho
    barra.style.height = medidas.height * 0.04 + "px"; // 4% del alto
    barra.style.background = "blue";

    // Posicionar al centro inferior
    barra.style.left = (medidas.width / 2 - (medidas.width * 0.15) / 2) + "px";
    barra.style.top = (medidas.height - medidas.height * 0.08) + "px";

    barra.id = "barra";
    contenedor.appendChild(barra);

    // --- BOLA ---
    const bola = document.createElement("div");
    bola.classList.add("bola");
    bola.style.position = "absolute";
    bola.style.width = medidas.width * 0.03 + "px";  // 3% del ancho
    bola.style.height = medidas.width * 0.03 + "px";
    bola.style.borderRadius = "50%";
    bola.style.background = "red";

    // Centrar sobre la barra
    bola.style.left = (medidas.width / 2 - (medidas.width * 0.03) / 2) + "px";
    bola.style.top = (medidas.height - medidas.height * 0.12) + "px";

    bola.id = "bola";
    contenedor.appendChild(bola);

    // --- LADRILLOS SUPERIORES ---
    const numLadrillosFila = 10;
    const anchoLadrillo = medidas.width / numLadrillosFila - 5; // separación pequeña
    const altoLadrillo = medidas.height * 0.05;

    for (let i = 0; i < numLadrillosFila; i++) {
        const ladrillo = document.createElement("div");
        ladrillo.classList.add("ladrilloSuperior");
        ladrillo.style.position = "absolute";
        ladrillo.style.width = anchoLadrillo + "px";
        ladrillo.style.height = altoLadrillo + "px";
        ladrillo.style.top = "5px";
        ladrillo.style.left = (i * (anchoLadrillo + 5)) + "px";
        ladrillo.style.background = "orange";
        contenedor.appendChild(ladrillo);
    }

    // --- LADRILLOS IZQUIERDOS ---
    const numLadrillosColumna = 10;
    for (let i = 0; i < numLadrillosColumna; i++) {
        const ladrillo = document.createElement("div");
        ladrillo.classList.add("ladrilloIzquierdo");
        ladrillo.style.position = "absolute";
        ladrillo.style.width = anchoLadrillo * 0.8 + "px";
        ladrillo.style.height = altoLadrillo + "px";
        ladrillo.style.left = "5px";
        ladrillo.style.top = (i * (altoLadrillo + 5) + 30) + "px";
        ladrillo.style.background = "orange";
        contenedor.appendChild(ladrillo);
    }
}
