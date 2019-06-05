
function showElectricBorn(infos){
    
    //console.log(infos);
    var li = document.createElement("li");
    var text = document.createTextNode('Horaire:'+infos.acces_lieu+', adresse complète:'+infos.adresse_rue+infos.adresse_ville+', paiement: '+infos.paiement+', tarif: '+infos.tarif_general+', type de charge:'+infos.type_charge);
    li.appendChild(text);
    document.getElementById("list").appendChild(li);
    
    
}