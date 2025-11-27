function maquetarPelis(){
    
}
window.onload  = () => {
    //añadimos un elemento al div que tenemos en el html
    let bibliotecaPelis = document.getElementById ("biblioPelis");

    //recorremos cada pelicula dentro del array peliculas
    for(pelicula of datosPelis.peliculas){
        //creamos un div para cada pelicula
        let infoPeli = document.createElement("div");

        //un div para el titulo
        let imagen = document.createElement("img");
        imagen.src = pelicula.imagen;
        let titulo = document.createElement("div");
        titulo.textContent = "Titulo: " + pelicula.titulo;
        //un div para la duracion
        let duracion = document.createElement("div");
        duracion.textContent = "Duracion: " + pelicula.duracion;

        //estilos para la imagen
        imagen.style.height = "25rem";
        imagen.style.width = "18rem";
        
        // agregamos el titulo y la duracion al div
        infoPeli.appendChild(imagen);
        infoPeli.appendChild(titulo);
        infoPeli.appendChild(duracion);

        // añadimos cada pelicula a la biblioteca
        bibliotecaPelis.appendChild(infoPeli);
    }
}