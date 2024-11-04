"use strict";
var map = L.map('map').setView([46.201398876908065, 6.145992279052734], 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([46.197, 6.141228675842286]).addTo(map);

function showMarkerDetails(marker) {
    const details = `
        <div class="w3-container">
            <h3>Détails de l'Objet Caché</h3>
            <p>nom : La où rassemblé un homme revint à la vie. </p>
            <p> <img src="img/statue-frankenstein-geneve_light.jpg.jfif" alt="">
                <a href="index.html"><button onclick="backToMap()" class="w3-button w3-green">Retour à la carte</button></a>
        </div>
    `;
    document.body.innerHTML = details;
}

map.on('click', (e) => {
    marker.on('click', () => {
        showMarkerDetails(marker);
    });
});

var photo = document.getElementById("#photo").addEventListener("click", "afficherPhoto");
function afficherPhoto(){
    navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.error(`Une erreur est survenue : ${err}`);
    });
}
