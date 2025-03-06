function searchDestination() {
    // Récupérer la valeur entrée par l'utilisateur
    var city = document.getElementById("search").value.trim();

    // Vérifier si l'utilisateur a entré une ville
    if (city === "") {
        alert("Veuillez entrer une ville !");
        return;
    }

    // Création de la carte centrée sur Paris par défaut
    var map = L.map("map").setView([48.8566, 2.3522], 13);

    // Ajouter une couche OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    // Utiliser une API pour récupérer les coordonnées de la ville (Nominatim)
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                var lat = data[0].lat;
                var lon = data[0].lon;

                // Déplacer la carte sur la ville recherchée
                map.setView([lat, lon], 13);

                // Ajouter un marqueur avec une pop-up
                var marker = L.marker([lat, lon]).addTo(map);
                marker.bindPopup(`<b>${city}</b><br>Destination trouvée !`).openPopup();
            } else {
                alert("Ville non trouvée. Essayez une autre destination !");
            }
        })
        .catch(error => console.error("Erreur lors de la récupération des données :", error));
}
