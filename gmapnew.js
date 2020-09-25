let map;

function initMap() {
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      {type: "restaurant", weight:2},
      {type: "cafe", weight:2},
      {type: "tourist_attraction", weight:1}
    ],
    placeChooserViewSetup: ({defaultLayoutMode}) => {
      if (defaultLayoutMode === "SHEET") {
        return {position: "BLOCK_END"};
      }
    },
    placeDetailsViewSetup: ({defaultLayoutMode}) => {
      if (defaultLayoutMode === "SHEET") {
        return {layoutMode: "INFO_WINDOW"};
      }
    },
    maxPlaceCount: 24,
  });

  map = localContextMapView.map;

  map.setOptions({
    center: {lat: 33.7779479, lng: -84.3989563},
    zoom: 17
  });

  const marker = new google.maps.Marker({
    position: { lat: 33.7779479, lng: -84.3989563},
    map: map,
    Label: "GT",
    Title: "Lockhart is Not a Real Restaurant",
    animation: google.maps.Animation.DROP
  });
}



// const localContextMapView = new google.maps.localContext.LocalContextMapView({
//   // ...
//   placeChooserViewSetup: ({defaultLayoutMode}) => {
//     if (defaultLayoutMode === 'SHEET') {
//       return {position: 'INLINE_START'};
//     }
//   },
//   placeDetailsViewSetup: ({defaultLayoutMode}) => {
//     if (defaultLayoutMode === 'SHEET') {
//       return {position: 'INLINE_START'};
//     }
//   },
// });

// // Instantiate LocalContextMapView.
// function initMap() {
//   const localContextMapView = new google.maps.localContext.LocalContextMapView({
//   element: document.querySelector('#map'),
//   placeTypePreferences: ['restaurant'],
//   maxPlaceCount: 12,
// });

// // Set inner map options.
// localContextMapView.map.setOptions({
//   center: pos,
//   zoom: 14,
//   mapTypeId: 'satellite',
// });


// const myCoordinates = {lat: -41.2847, lng: 174.7681};
// const lcMapView = new google.maps.localContext.LocalContextMapView({
//   element: document.querySelector('#map-container'),
//   placeTypePreferences: [
//     'bakery', 'cafe', 'clothing_store', 'drugstore', 'park',
//     'restaurant', 'shopping_mall', 'tourist_attraction', 'university'
//   ],
//   maxPlaceCount: 24,
// });
// const map = lcMapView.map;
// map.setOptions({
//   center: myCoordinates,
//   zoom: 16
// });






// // In this example, we center the map, and add a marker, using a LatLng object
// // literal instead of a google.maps.LatLng object. LatLng object literals are
// // a convenient way to add a LatLng coordinate and, in most cases, can be used
// // in place of a google.maps.LatLng object.
// let map;

// function initMap() {
//   const mapOptions = {
//     zoom: 8,
//     center: { lat: -34.397, lng: 150.644 }
//   };
//   map = new google.maps.Map(document.getElementById("map"), mapOptions);
//   const marker = new google.maps.Marker({
//     // The below line is equivalent to writing:
//     // position: new google.maps.LatLng(-34.397, 150.644)
//     position: { lat: -34.397, lng: 150.644 },
//     map: map
//   });
//   // You can use a LatLng literal in place of a google.maps.LatLng object when
//   // creating the Marker object. Once the Marker object is instantiated, its
//   // position will be available as a google.maps.LatLng object. In this case,
//   // we retrieve the marker's position using the
//   // google.maps.LatLng.getPosition() method.
//   const infowindow = new google.maps.InfoWindow({
//     content: "<p>Marker Location:" + marker.getPosition() + "</p>"
//   });
//   google.maps.event.addListener(marker, "click", () => {
//     infowindow.open(map, marker);
//   });
// }