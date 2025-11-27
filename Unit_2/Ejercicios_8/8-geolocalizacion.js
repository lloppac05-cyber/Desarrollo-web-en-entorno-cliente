/*#8
Trazar ruta en un mapa
Usar Leaflet o Google Maps.
Dibujar una polilínea con tus posiciones registradas 
por watchPosition.*/
// Asegúrate de tener en tu HTML:
// <div id="map" style="height:100vh;"></div>

// Crear el mapa centrado en (0,0)
let L;
const mapa = L.map('polilinea').setView([0, 0], 50);

// Añadir mapa base (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(mapa);

//array para las posiciones
const posiciones = [];
let ruta; // polilínea

// Seguimiento de la ubicación
navigator.geolocation.watchPosition(pos => {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;

  posiciones.push([lat, lon]); // guardamos la nueva posición

  // centramos el mapa en la nueva posición
  mapa.setView([lat, lon], 16);

  // actualizamos la polilínea
  if (ruta) {
    ruta.setLatLngs(posiciones);
  } else {
    ruta = L.polyline(posiciones, { color: 'blue' }).addTo(map);
  }

  // marcador actual
  L.marker([lat, lon]).addTo(map);
}, err => {
  console.error("Error:", err.message);
}, { enableHighAccuracy: true });