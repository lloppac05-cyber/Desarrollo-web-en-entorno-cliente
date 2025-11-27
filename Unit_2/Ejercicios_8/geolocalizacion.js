/*Nivel Básico
#1
Obtener tu ubicación actual (latitud y longitud)
Usar navigator.geolocation.getCurrentPosition.
Mostrar las coordenadas en consola.*/
function obtengoPosicion(posicion){
    console.log("Latitud: " + posicion.coords.latitude);
    console.log("Longitud: " + posicion.coords.longitude);
}
//si el navegador soporta geolocalizacion
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(obtengoPosicion);
}
else{
    console.log("No se soporta la geolocalizacion");
}


/*#2
Mostrar la ubicación en la página
Obtener latitud y longitud.
Insertarlas en body de tu página*/
function ubiPagina(posicion){
    document.writeln("Latitud: " + posicion.coords.latitude);
    document.writeln("Longitud: " + posicion.coords.longitude);
}
if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(ubiPagina);
}