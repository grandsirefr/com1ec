
function showElectricBorn(infos){
    
    //console.log(infos);
    var li = document.createElement("li");
    var div=document.createElement("div");
    var text = document.createTextNode("<ul><li>Horaire:"+infos.acces_lieu+"</li><li> adressecomplète:"+infos.adresse_rue+infos.adresse_ville+"</li><li>paiement: "+infos.paiement+"</li>              <li>tarif:"+infos.tarif_general+"</li><li>type de charge:"+infos.type_charge+"</li></ul>");

    
    li.appendChild(div);
    div.appendChild(text);
    document.getElementById("list").appendChild(li);
    
    
}