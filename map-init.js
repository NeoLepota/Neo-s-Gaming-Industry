document.addEventListener('DOMContentLoaded', () => {
  const academyLat = -26.2353;
  const academyLng = 28.3700;
  const zoomLevel = 13;

  const map = L.map('map').setView([academyLat, academyLng], zoomLevel);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  L.marker([academyLat, academyLng]).addTo(map)
    .bindPopup('<b>Gaming Academy Headquarters</b><br>123 Game Dev Street.')
    .openPopup();
});
