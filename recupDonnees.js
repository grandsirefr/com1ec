var borneElecAjax;


//fonction pour récuperer les bornes electrique environnante
function getData(coordun,coorddeux){
    console.log(event);
    
    borneElecAjax='https://opendata.paris.fr/api/records/1.0/search/?dataset=bornes-de-recharge-pour-vehicules-electriques&rows=130&facet=adresse_cp&facet=adresse_ville&facet=reseau&facet=tarif_general&facet=tarif_autopartage&facet=paiement&facet=puissance_pdc_kw&facet=type_connecteur_pdc&facet=type_courant_pdc&refine.reseau=Belib%27&geofilter.distance='+coordun+'%2C'+coorddeux+'%2C1500';
    
    $.get(borneElecAjax,function(data){
    //console.log(data);
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
//fontcion pour parcourir l'objet data et afficher les marqueur de borne electrique
function browseObject(data){
    var lenght= data.records.length;
    var coordun;
    var coorddeux;
    var infos;
    var utilisateur=0;
    console.log(lenght);
    console.log(data);
    for(var i=0; i < lenght; i++){
        coordun=data.records[i].geometry.coordinates[1];
        coorddeux=data.records[i].geometry.coordinates[0];
        infos=data.records[i].fields;
        placedMarq(coordun,coorddeux,utilisateur);
        showElectricBorn(infos);
        
        //console.log(coordun);
        //console.log(coorddeux);
    }
   map.fitBounds(bounds);
}
// fonction pour afficher le marqueur ou l'utilisateur se trouve
function onEventPlacedMarker(event){
    var coordun=event.detail.coordgps[1];
    var coorddeux=event.detail.coordgps[0];
    var utilisateur=1;
    placedMarq(coordun,coorddeux,utilisateur);
    map.fitBounds(bounds);
    
}

