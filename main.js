var button=document.querySelector('button');
var map= new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(48.8534,2.3488),
    mapTypeId: 'terrain'
  });





// RECUPERATION DES DONNEES DE FORMULAIRE/////
button.addEventListener('click',getAdress);
document.addEventListener('gps-ok',onEventPlacedMarker);



//////////////////////  AFFICHAGE DE LA MAP GOOGLE/////////////////////////////
window.eqfeed_callback = function(results) {
  for (var i = 0; i < results.features.length; i++) {
    var coords = results.features[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[1],coords[0]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
}