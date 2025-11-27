/*#5
Integración con Google Maps o Leaflet
Mostrar tu ubicación en un mapa interactivo con un marcador.
El mapa debe actualizarse cuando cambies de posición 
(con watchPosition).*/

// Inicializa el mapa
let map = L.map('map').setView([37.1781, -3.6003], 13);

// Añade capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Crea un marcador vacío
let marker = null;

// Función para actualizar la posición
function actualizaPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    if (marker) {
    marker.setLatLng([lat, lon]);
    } else {
    marker = L.marker([lat, lon]).addTo(map).bindPopup("¡Estás aquí!").openPopup();
    }

    map.setView([lat, lon], 15);
}

// Observa cambios de posición
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(updatePosition, {
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 5000
    });
} else {
    alert("Tu navegador no soporta geolocalización.");
}