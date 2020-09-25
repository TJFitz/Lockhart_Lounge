let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.7779479, lng: -84.3989563 },
    zoom: 18,
  });
}
