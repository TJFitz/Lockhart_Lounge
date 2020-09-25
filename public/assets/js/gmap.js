let map;

function initMap() {
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      { type: "restaurant", weight: 2 },
      { type: "cafe", weight: 2 },
      { type: "tourist_attraction", weight: 1 },
    ],
    placeChooserViewSetup: ({ defaultLayoutMode }) => {
      if (defaultLayoutMode === "SHEET") {
        return { position: "BLOCK_END" };
      }
    },
    placeDetailsViewSetup: ({ defaultLayoutMode }) => {
      if (defaultLayoutMode === "SHEET") {
        return { layoutMode: "INFO_WINDOW" };
      }
    },
    maxPlaceCount: 24,
  });

  map = localContextMapView.map;

  map.setOptions({
    center: { lat: 33.7779479, lng: -84.3989563 },
    zoom: 17,
  });

  const marker = new google.maps.Marker({
    position: { lat: 33.7779479, lng: -84.3989563 },
    map: map,
    Label: "GT",
    Title: "Lockhart is Not a Real Restaurant",
    animation: google.maps.Animation.DROP,
  });
}
