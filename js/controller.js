let posicion, pyrmont;
let range = rangeInput.value
let defaultSearch = inputGroupSelect01.value

// inicializar con la posicion incial
navigator.geolocation.getCurrentPosition(inicializate, error)

function inicializate(pos){
    posicion = pos
    generateMap(posicion)
    currentPosition(pos)
    let request = {
        location: {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
        },
        radius: range,
        type: ['restaurant'],
        keyword: defaultSearch,
    }
    let places = getPlaces(request)
    console.log(places)
    for (var i = 0; i < places.length; i++) {
        //createMarker(results[i]);
       // showSites(results[i])
    }
}

inputGroupSelect01.addEventListener("change", function () {
    places.innerHTML = ''
    defaultSearch = inputGroupSelect01.value
    inicializate(posicion)
});
rangeInput.addEventListener("change", function (ev) {
    places.innerHTML = ''
    range = ev.currentTarget.value
    inicializate(posicion)
}, true);

function error(err) {
    alert(err.message);
};