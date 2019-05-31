var borneElecAjax;


function getData(coordun,coorddeux){
    console.log(event);
    
    borneElecAjax='https://opendata.paris.fr/api/records/1.0/search/?dataset=bornes-de-recharge-pour-vehicules-electriques&facet=adresse_cp&facet=adresse_ville&facet=reseau&facet=tarif_general&facet=tarif_autopartage&facet=paiement&facet=puissance_pdc_kw&facet=type_connecteur_pdc&facet=type_courant_pdc&refine.reseau=Belib%27&geofilter.distance='+coordun+'%2C'+coorddeux+'%2C1500';
    
    $.get(borneElecAjax,function(data){
    //console.log(data);
    browseObject(data);
});
}

function getAdress(){
    var adress = document.getElementById('name');
    var cp=document.getElementById('cp');
    //var ville=document.getElementById('ville');
    var adressDataAjax;
    var valueadress=adress.value;
    var valuecp=cp.value;
    //var valueville=ville.value;
    adressDataAjax='https://api-adresse.data.gouv.fr/search/?q='+encodeURI(valueadress)+'&postcode='+valuecp;
    //console.log(valueadress);
    $.get(adressDataAjax,function(adress){
        
       var event = new CustomEvent("gps-ok", {
           detail: {
           coordgps:adress.features[0].geometry.coordinates
           }
       });
        document.dispatchEvent(event);
      //console.log(event);  
        var coordun=event.detail.coordgps[1];
    var coorddeux=event.detail.coordgps[0];
    getData(coordun,coorddeux);
    });
    
}

function browseObject(data){
    var lenght= data.nhits;
    var coordun;
    var coorddeux;
    var info = data.
    console.log(lenght);
    console.log(data);
    for(var i=0; i < lenght; i++){
        coordun=data.records[i].geometry.coordinates[1];
        coorddeux=data.records[i].geometry.coordinates[0];
        placedMarq(coordun,coorddeux);
        console.log(coordun);
        console.log(coorddeux);
    }
    
}

function onEventPlacedMarker(event){
    var coordun=event.detail.coordgps[1];
    var coorddeux=event.detail.coordgps[0];
    
    placedMarq(coordun,coorddeux);
}

