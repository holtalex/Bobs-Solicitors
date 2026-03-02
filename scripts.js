// Wait for Leaflet to load before initializing maps
window.addEventListener('load', function() {
    // Initialize maps with Leaflet using OpenStreetMap tiles
    function initMap(id, lat, lng, title) {
        const map = L.map(id).setView([lat, lng], 15);
                
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
                
        L.marker([lat, lng]).addTo(map)
            .bindPopup(`<b>${title}</b>`)
            .openPopup();
    }

    // Initialize all three maps
    initMap('map1', 40.74841608744412, -73.98573950388057, 'Bob\'s Solicitors - New York');
    initMap('map2', 48.858313601354375, 2.294470569363722, 'Bob\'s Solicitors - Paris');
    initMap('map3', 51.47254627896265, -0.06619329095172798, 'Bob\'s Solicitors - Peckham');
});


// Smooth Scrolling Animation

document.querySelectorAll('.scroll-btn[data-scroll-to]').forEach(line => {
    line.addEventListener('click', function() {
        const targetId = this.getAttribute('data-scroll-to');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});