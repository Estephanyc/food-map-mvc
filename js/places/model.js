let service;
function createMarker(placeMarker) {
  let infowindow = new google.maps.InfoWindow();
  let marker = new google.maps.Marker({
    icon: 'img/restaurant.png',
    map: map,
    position: placeMarker.geometry.location
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(placeMarker.name);
    infowindow.open(map, this);
  });
}
function getPlaces(request) {
  return new Promise((resolve, reject) => {  
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, function(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        resolve(results);
      }
    });
  });
}
function getPlaceDetails(id) {
  return new Promise((resolve, reject) => {  
    service.getDetails({
      placeId: `${id}`,
    }, function(results, statusD) {
      if (statusD == google.maps.places.PlacesServiceStatus.OK) {
        resolve(results);
      }
    });
  });
}
