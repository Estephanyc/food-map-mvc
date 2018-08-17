function showSites(place) {
  let urlPhoto = place.photos[0].getUrl({ maxHeight: 200 });
  places.innerHTML += `             
    <div class="col-6 col-md-4 places">
    <img src="${urlPhoto}" class="figure-img img-fluid rounded placesImg" onclick="openModal('${place.place_id}')" >
    <figcaption class="figure-caption">${place.name}</figcaption>
    </div>`;
}
function showModal(resultsD) {
  $('#exampleModal').modal('show');
  let open;
  let urlPhoto = resultsD.photos[0].getUrl({ maxHeight: 200 });
  let urlPhoto2 = resultsD.photos[1].getUrl({ maxHeight: 200 });
  let urlPhoto3 = resultsD.photos[2].getUrl({ maxHeight: 200 });

  // condicional open para que no salga false o true
  if (resultsD.opening_hours.open_now === false) {
    open = 'cerrado';
  } else if (resultsD.opening_hours.open_now === true) {
    open = 'Abierto';
  } else {
    open = 'no registra';
  }
  // mostrar informacion del lugar en el modal
  titleModal.innerHTML = resultsD.name;
  direcction.innerHTML = resultsD.formatted_address;
  photos.innerHTML = ` 
    <div class="col-4 col-md-4 left"><img src="${urlPhoto}" class="img-thumbnail" width="100%"></div>
    <div class="col-4 col-md-4 left"><img src="${urlPhoto2}" class="img-thumbnail" width="100%"></div>
    <div class="col-4 col-md-4 left"> <img src="${urlPhoto3}" class="img-thumbnail" width="100%"></div>`;
  openingH.innerHTML = open;
  rating.innerHTML = resultsD.rating;
  website.innerHTML = ` <a href="${resultsD.url}">Web Site</a>`;
  phone.innerHTML = resultsD.formatted_phone_number;
}