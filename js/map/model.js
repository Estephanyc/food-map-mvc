let map;
function generateMap(pos) {  
  if (!map) {
    map = new google.maps.Map(document.getElementById('map'), {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      },
      zoom: 14
    });
  }   
}

function currentPosition(pos) {
  let punto = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
  let marker = new google.maps.Marker({
    icon: 'img/placeholder.png',
    map: map,
    position: punto,
    title: 'Mi ubicacion'
  });
}

