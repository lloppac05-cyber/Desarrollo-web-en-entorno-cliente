const canvas = document.querySelector("canvas");
//valor de 2d, pueden asignarse mas valores
const ctx = canvas.getContext("2d");
//resolucion del canvas, JUEGO
canvas.width = 448;
canvas.height = 480;

//variables de nuestro juego
let contador = 0;

//variables de la pelota
const ballRadius = 4; 
//posicion de la pelota
let x = canvas.width/2;
let y = canvas.height-30;
//velocidad de la pelota
//ABAJO
let dx = -2;
//ARRIBA
let dy = -2;


//variables de la barra
const paddleHeight = 10;
const paddleWidth = 50;

let paddleX = (canvas.width - paddleWidth)/2;
let paddleY = canvas.height - paddleHeight - 10;

let rightPressed = false;
let leftPressed = false;

const PADDLE_SENSIBILITY = 8;

//*** FUNCION PARA DIBUJAR LA BOLA ***
function drawBall(){
    //quiero que comience un trazado(camino)
    ctx.beginPath();
    //dibujamos un arco
    //arco por 2 haria un circulo completo
    ctx.arc(x, y, ballRadius, 0, (Math.PI *2))
    //color de la pelota
    ctx.fillStyle='#f87090ff';
    ctx.fill();
    //cerramos el trazado, para no mezclar
    ctx.closePath();
};

//*** FUNCION PARA DIBUJAR BARRA ***
function drawPaddle(){
    //color de la barra
    ctx.fillStyle = '#98dbf3ff';
    //cordenada x e y para saber donde empezar a dibujar
    //ancho y alto para dibujar
    ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight)
};

//*** FUNCION PARA DIBUJAR BRICKS ***
function drawBricks(){};

//*** FUNCION PARA DETECTAR LAS COLISIONES ***
function colisionDetection(){};

//*** FUNCION PARA MOVER LA BOLA ***
function ballMovement(){
    //rebotar la pelota en los laterales
    //primera condicion PARED DERECHA (si x mas la direccion de la pelota dx, 
    // es mayor que el ancho del canvas menos el radio de la pelota)
    //segunda condicion PARED IZQUIERDA (si x mas la direccion de x es menor que el radio de la pelota)
    if(x+dx > canvas.width-ballRadius || x+dx < ballRadius){
        //la direccion cambia de positivo a negativo
        dx = -dx;
    }

    //rebotar la pelota en la parte superior
    //si y mas la direccion de y es menor que el radio de la pelota
    if(y+dy < ballRadius){
        //cambiamos el valor a negativo
        dy = -dy;
    }

    //PERDER
    //si la suma de y mas dy es mayor que la altura del canvas menos el radio de la pelota
    if(y+dy > canvas.height - ballRadius){
        console.log("PERDISTE :(");
        //reiniciamos el juego
        document.location.reload();
    }

    //movemos la pelota 
    x += dx;
    y += dy;
};

//*** FUNCION PARA MOVER LA BARRA  ***
function paddleMovement(){
    if(rightPressed && paddleX < (canvas.width - paddleWidth)){
        //sencibilidad, mayor numero mas rapido el movimiento
        paddleX += PADDLE_SENSIBILITY;
    }else if(leftPressed && paddleX > 0){
        paddleX -= PADDLE_SENSIBILITY;
    }
};

//*** FUNCION PARA LIMPIAR EL CANVAS ***
function cleanCanvas(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

//*** FUNCION PARA INICIALIZAR EVENTOS ***
function initEvents(){
    //cuando el usuario presiona una tecla
    document.addEventListener('keydown', keyDownHandler);
    //cuando el usuario suelte la tecla
    document.addEventListener('keyup', keyUpHandler)

    // *** FUNCION AL PRESIONAR LA TECLA ***
    function keyDownHandler(event){
        const { key } = event;
        //si presionamos la tecla derecha
        if (key == 'Right' || key == 'ArrowRight'){
            rightPressed = true;
        } else if(key == 'Left' || key == 'ArrowLeft'){
            //si presionamos la tecla izquierda
            leftPressed = true;
        }
    }

    // *** FUNCION AL SOLTAR LA TECLA ***
    function keyUpHandler(event){
        const { key } = event;
        //si soltamos la tecla derecha
        if (key == 'Right' || key == 'ArrowRight'){
            rightPressed = false;
        } else if(key == 'Left' || key == 'ArrowLeft'){
            //si soltamos la tecla izquierda
            leftPressed = false;
        }
    }
}


//*** FUNCION PARA DIBUJAR ***
function draw(){
    //limpiar el canvas
    cleanCanvas();
    //dibujar la pelota
    drawBall();
    //dibujar la barra
    drawPaddle();
    //dibujar los bricks
    drawBricks();

    //comprobar colisiones y movimientos
    colisionDetection();
    ballMovement();
    paddleMovement();

    //metodo para progamar una funcion para que 
    //se repinte por el refresco de la pantalla
    //60fps
    //cuando termina programa el siguiente, no seria un bucle infinito
    window.requestAnimationFrame(draw);
}

//inicializamos al draw
draw();
//inicializamos los eventos
initEvents();