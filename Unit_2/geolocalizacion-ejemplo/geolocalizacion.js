function obtengoPosicion(posicion){
    console.log(posicion.coords.latitude, posicion.coords.longitude);
    var map = L.map('map').setView([posicion.coords.latitude, posicion.coords.longitude], 19);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);  
    //var marker = L.marker([posicion.coords.latitude, posicion.coords.longitude]).addTo(map);
    var circle = L.circle([posicion.coords.latitude, posicion.coords.longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 50
    }).addTo(map);
}
if(navigator.geolocation){
    navigator.geolocation.watchPosition(obtengoPosicion);
}
else{
    console.log("No se soporta la geolocalizacion");
}
