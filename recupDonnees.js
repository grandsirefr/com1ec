var borneElecAjax;


//fonction pour récuperer les bornes electrique environnante
function getData(coordun,coorddeux){
    console.log(event);
    
    borneElecAjax='https://opendata.paris.fr/api/records/1.0/search/?dataset=bornes-de-recharge-pour-vehicules-electriques&rows=130&facet=adresse_cp&facet=adresse_ville&facet=reseau&facet=tarif_general&facet=tarif_autopartage&facet=paiement&facet=puissance_pdc_kw&facet=type_connecteur_pdc&facet=type_courant_pdc&refine.reseau=Belib%27&geofilter.distance='+coordun+'%2C'+coorddeux+'%2C1500';
    
    $.get(borneElecAjax,function(data){
    console.log(data);
    browseObject(data);
    });
}
// fonction pour récuperer l'adresse de l'utilisateur et creer l'évènement quand les coordonnées sont récuperer
function getAdress(){
    var adress = document.getElementById('name');
    var cp=document.getElementById('cp');
    
    var adressDataAjax;
    var valueadress=adress.value;
    var valuecp=cp.value;
    
    adressDataAjax='https://api-adresse.data.gouv.fr/search/?q='+encodeURI(valueadress)+'&postcode='+valuecp;
    //console.log(valueadress);
    $.get(adressDataAjax,function(adress){
        console.log(adress);
       var event = new CustomEvent("gps-ok", {
           detail: {
           coordgps:adress.features[0].geometry.coordinates
           }
       });
    document.dispatchEvent(event);
      console.log(event);  
    var coordun=event.detail.coordgps[1];
    var coorddeux=event.detail.coordgps[0];
    
    getData(coordun,coorddeux);
    });
    
}
//fonction pour parcourir l'objet data et afficher les marqueur de borne electrique
function browseObject(data){
    var infos =trieData(data);
    var lenght= infos.length;
    var coordun;
    var coorddeux;
    var ul= document.getElementById("list");
    
    var utilisateur=0;
    console.log(infos);
    console.log(data);
    //var dataTrier=trieData(data);
    //console.log(lenght);
    ul.innerHTML="";
    for(var i=0; i < lenght; i++){
        coordun=infos[i].long;
        coorddeux=infos[i].lat;
        //infos=data.records[i].fields;
        placedMarq(coordun,coorddeux,utilisateur);
        console.log(i);
        showElectricBorn(infos[i]);
        
        
        //console.log(coordun);
        //console.log(coorddeux);
    }

    
   
}
// fonction pour afficher le marqueur ou l'utilisateur se trouve
function onEventPlacedMarker(event){
    var utilisateur=1;
    var coordun=event.detail.coordgps[1];
    var coorddeux=event.detail.coordgps[0];
    console.log(tabMarker);
    if(tabMarker.length != 0){
        deleteMarq(tabMarker);
    }
    map.setCenter(new google.maps.LatLng(coordun,coorddeux));
    
    
    placedMarq(coordun,coorddeux,utilisateur);
    
}

