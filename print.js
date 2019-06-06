
function showElectricBorn(infos){
    
    //console.log(infos);
    var li = document.createElement("li");
    var div=document.createElement("div");
    div.innerHTML="<ul><li>Horaire:"+infos.acces_lieu+"</li><li> adresse complète:"+infos.adresse_rue+' '+infos.adresse_ville+"</li><li>paiement: "+infos.paiement+"</li><li>tarif:"+infos.tarif_general+"</li><li>type de charge:"+infos.type_charge+"</li></ul>";

    
    li.appendChild(div);
    div.classList.add('information');
    document.getElementById("list").appendChild(li);
    
    
}