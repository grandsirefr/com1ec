

function initMap(utilisateur,coordun,coorddeux) {
  
  if(utilisateur==1){
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(coordun,coorddeux),
    mapTypeId: 'terrain'
  });

  
  var script = document.createElement('script');

  
  document.getElementsByTagName('head')[0].appendChild(script);
  }else{
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(48.8534,2.3488),
    mapTypeId: 'terrain'
  });

  
  var script = document.createElement('script');

  
  document.getElementsByTagName('head')[0].appendChild(script);
  }
}


function placedMarq(coordun,coorddeux,utilisateur){
 console.log(utilisateur);
  console.log(coorddeux);
  console.log(coordun);
  if(utilisateur==1){
    var marker = new google.maps.Marker({
    position: {lat:coordun, lng: coorddeux },
    icon: {path: google.maps.SymbolPath.CIRCLE,scale : 10},
    map: map});
  }
  else{
   var marker = new google.maps.Marker({
    position: {lat:coordun, lng: coorddeux },
     icon: {path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
            scale: 5,
           strokeColor : "red"},
    map: map});
  }
  
 
  //console.log(marker);
  /*var mypoints=new google.maps.LatLng(coordun, coorddeux);
  console.log(mypoints);
  bounds.extend(mypoints);*/
  
}

