/*#6
Mostrar precisión de la ubicación
Mostrar en pantalla el valor de coords.accuracy.*/
// Verificamos si el navegador soporta geolocalización
navigator.geolocation.getCurrentPosition(
    function (position) {
      // Obtenemos la precisión en metros
      let precision = position.coords.accuracy;
      
      // Mostramos en consola
      console.log("Precisión de la ubicación: " + precision.toFixed(2) + " metros");
    },);