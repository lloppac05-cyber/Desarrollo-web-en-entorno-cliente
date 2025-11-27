/*#7
Calcular la distancia entre dos ubicaciones
Guardar dos pares de coordenadas (tu ubicación y otra fija).
Implementar una función que use la fórmula de Haversine 
para calcular la distancia.*/
//le pasamos como parametro 2 latitudes y 2 longitudes
function calcularDistancia(lat1, lon1, lat2, lon2) {
  const R = 6371; // radio de la Tierra en km
  //diferencia entre latitud (en radianes)
  let dLat = (lat2 - lat1) * Math.PI / 180;
  //diferencia entre longitud (en radianes)
  let dLon = (lon2 - lon1) * Math.PI / 180;
  let a = Math.sin(dLat / 2) ** 2 +
            Math.cos(lat1 * Math.PI / 180) *
            Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) ** 2;
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
   // distancia en km
  return R * c;
}

// Coordenadas fijas 
const latFija = 15.6789;
const lonFija = -9.1234;

navigator.geolocation.getCurrentPosition(pos => {
  let lat = pos.coords.latitude;
  let lon = pos.coords.longitude;
  let distancia = calcularDistancia(lat, lon, latFija, lonFija);
  console.log("Distancia: " + distancia.toFixed(2) +  " km");
});