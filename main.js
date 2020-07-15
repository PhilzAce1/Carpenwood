//import dom elements
const mapElement = document.querySelector('#map');
const mapDirection = document.querySelector('#driving-direction');
// maps
function createDrivingDirectionsMap() {
  if (navigator.geolocation) {
    // console.log('working');
    // const navvi = navigator.geolocation.getCurrentPosition();
    // navvi.then((x) => console.log(x));
    // return;
    navigator.geolocation.getCurrentPosition(OnSuccess, OnError, {
      enableHighAccuracy: true,
      maximumAge: 1000,
      timeout: 3000,
    });
  } else {
    mapElement.innerHTML = 'Sorry Map is unavailble , Please use google chrome';
  }
}
function OnSuccess(position) {
  console.log(position);
  showMap(position.coords.latitude, position.coords.longitude);
}
function OnError(error) {
  console.log(error);
  switch (error.code) {
    case error.PERMISSOIN_DENIED:
      mapElement.innerHTML =
        'since you denied permission to your location map disabled';
      break;
    case error.POSITION_UNAVAILABLE:
      mapElement.innerHTML = 'Location information is Unavalable';
      break;
    case error.TIMEOUT:
      mapElement.innerHTML = 'The request to get location timeout';
      break;
    default:
      mapElement.innerHTML = 'An unknown error occured';
      break;
  }
}
function showMap(lat, lng) {
  const directionService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const route = {
    origin: new google.maps.LatLng(lat, lng),
    destination: 'Carpenwood HQ',
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
  };
  const mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(50.85045, 4.3487),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  const map = new google.maps.Map(mapElement, mapOptions);
  directionsRenderer.setMap(map);
  directionService.route(route, function (result, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(result);
    }
  });
}
document.addEventListener(
  'DOMContentLoaded',
  createDrivingDirectionsMap,
  false
);
// animation :- native

// animation :- nav

// animation :- GSAP
// animation :- GSAP - scroll
// animation :- GSAP - text
