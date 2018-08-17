function openModal(id) {
  getPlaceDetails(id).then((place)=>{
    showModal(place);
  });
}

