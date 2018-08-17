const assert = require('chai').assert;
global.window = global;

require('../src/js/places/model');
describe('deberia entregar una lista de sitios cercanos a esta ubicación', () => {
  let request = {
    location: {
      lat: -33.4188419,
      lng: -70.6423191
    },
    radius: 500,
    type: ['restaurant'],
    keyword: 'restaurantes',
  };

  it('debería retornar objeto con la informacion del sitio',
    (done) => {
      getPlaces(request).then((places)=>{
        places.forEach(place => {
          assert.exists(place);
        });
        done();
      }).catch((error)=>{
        done(error);
      });
    }).timeout(10000);
  /* it('debería obtener la información del sitio dado su id',
    (done) => {
      getPlaces(request).then((places) => {
        places.forEach(place => {
          assert.exists(place);
          done();
        });
      });
    }); */
});
