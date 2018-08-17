// Poner en el mapa solo los que coinciden con la busqueda
function getPlaces(request) {
    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, function (results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            console.log(results)
            //return results
            for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
            showSites(results[i])
            }
        }
    });
}
function createMarker(placeMarker) {
    let infowindow = new google.maps.InfoWindow();
    let marker = new google.maps.Marker({
        icon: "img/restaurant.png",
        map: map,
        position: placeMarker.geometry.location
    });
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(placeMarker.name);
        infowindow.open(map, this);
    });
}