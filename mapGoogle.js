

function initMap() {
  
  
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(48.8534,2.3488),
    mapTypeId: 'terrain'
  });

  
  var script = document.createElement('script');

  
  document.getElementsByTagName('head')[0].appendChild(script);
  
}


function placedMarq(coordun,coorddeux,utilisateur){
 //console.log(utilisateur);
  //console.log(coorddeux);
  //console.log(coordun);
  let marker;
  if(utilisateur==1){
     marker = new google.maps.Marker({
    position: {lat:coordun, lng: coorddeux },
    icon: {path: google.maps.SymbolPath.CIRCLE,scale : 10},
    map: map});
    console.log(marker);
  }
  else{
    marker = new google.maps.Marker({
    position: {lat:coordun, lng: coorddeux },
     icon: {path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
            scale: 5,
           strokeColor : "red"},
    map: map});
    console.log(marker);
  }
 
  
  tabMarker.push(marker);
  
  
  /*var mypoints=new google.maps.LatLng(coordun, coorddeux);
  console.log(mypoints);
  bounds.extend(mypoints);*/
  
}
function deleteMarq(tabmarker){
  for(var i=0; i<tabmarker.length;i++){
    //console.log(tabmarker[i]);
    tabMarker[i].setMap(null);
  }
}

