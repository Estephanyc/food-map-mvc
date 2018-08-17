let posicion, pyrmont;
let range = rangeInput.value;
let defaultSearch = inputGroupSelect01.value;

navigator.geolocation.getCurrentPosition(inicializate, error);

function inicializate(pos) {
  posicion = pos;
  generateMap(posicion);
  currentPosition(pos);
  let request = {
    location: {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
    },
    radius: range,
    type: ['restaurant'],
    keyword: defaultSearch,
  };
  console.log(request)
  getPlaces(request).then((places)=>{
    console.log(places)
    places.forEach(place => {
      createMarker(place);
      showSites(place);
    });
  });
}

inputGroupSelect01.addEventListener('change', function() {
  places.innerHTML = '';
  defaultSearch = inputGroupSelect01.value;
  inicializate(posicion);
});
rangeInput.addEventListener('change', function(ev) {
  places.innerHTML = '';
  range = ev.currentTarget.value;
  inicializate(posicion);
}, true);

function error(err) {
  alert(err.message);
};