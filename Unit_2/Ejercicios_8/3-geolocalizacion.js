/*#3
Manejo de errores
Implementar onError en getCurrentPosition.
Mostrar mensajes si el usuario deniega permisos o si 
ocurre un error.*/
navigator.geolocation.getCurrentPosition(
  function obtengoPosicion(position) {
    console.log("Latitud: ", position.coords.latitude);
    console.log("Longitud: ", position.coords.longitude);
  },
    function obtengoError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.error("Permiso denegado");
        break;
      case error.POSITION_UNAVAILABLE:
        console.error("Ubicacion invalida");
        break;
      case error.TIMEOUT:
        console.error("Tiempo superado");
        break;
      case error.UNKNOWN_ERROR:
        console.error("Error");
        break;
    }
  }
);