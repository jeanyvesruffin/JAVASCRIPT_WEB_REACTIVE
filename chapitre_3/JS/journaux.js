// Liste des journaux
let journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

for (let index = 0; index < journaux.length; index++) {
    // Creation de nouveau noeud
    let lienElem = document.createElement("a");
    // Creation du contenu text entre balise a
    lienElem.textContent = journaux[index];
    // Creation du lien href
    lienElem.href = journaux[index];
    // Ajoute un lien
    document.getElementById("contenu").appendChild(lienElem);
    // Ajoute une balise <br>
    document.getElementById("contenu").appendChild(document.createElement("br"));
}