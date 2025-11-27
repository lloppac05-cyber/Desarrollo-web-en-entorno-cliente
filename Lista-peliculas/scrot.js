window.onscroll = () => {
    let cercaFinal = window.innerHeight + window.scrollY >= document.body.offset + window.scrollX;
    if (cercaFinal){
        lanzarPeticion("https://www.ombapi.com/?s=" +  cajaTexto.value + "&apikey=9de3cf92&page=" + contadorPaginas);
    }
};