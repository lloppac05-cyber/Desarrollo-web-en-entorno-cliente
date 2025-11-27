/*#4
Actualizar ubicación en tiempo real
Usar navigator.geolocation.watchPosition.
Mostrar en la página cómo cambian las coordenadas 
al moverte.*/
//console.log("Ubicacion en tiempo real " + navigator.geolocation.watchPosition(obtengoPosicion));
function obtengoPosicion(posicion){
    console.log("Latitud: " + posicion.coords.latitude);
    console.log("Longitud: " + posicion.coords.longitude);
}
if(navigator.geolocation){
    navigator.geolocation.watchPosition(obtengoPosicion);
}
else{
    console.log("No se soporta la geolocalizacion");
}