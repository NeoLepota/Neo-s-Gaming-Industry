function initMap() {
  const location = { lat: -26.2041, lng: 28.0473 }; // Johannesburg
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });
  new google.maps.Marker({ position: location, map: map });
}
