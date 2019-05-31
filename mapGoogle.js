

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(48.8534,2.3488),
    mapTypeId: 'terrain'
  });


  var script = document.createElement('script');

  
  document.getElementsByTagName('head')[0].appendChild(script);
}


function placedMarq(coordun,coorddeux){
 
   var marker = new google.maps.Marker({
    position: {lat:coordun, lng: coorddeux },
    map: map});
  
  //console.log(event.detail.coordgps[0]);
  //console.log(myLatlng);
  
}

