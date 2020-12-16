// Liste des mots du dictionnaire
let mots = [{
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];
let lienElem = document.createElement("dl");

for (let index = 0; index < mots.length; index++) {
    // Creation de nouveau noeud
    let dtElem = document.createElement("dt");
    let strongMot = document.createElement("strong");
    strongMot.textContent = mots[index].terme;
    let ddElem = document.createElement("dd");
    // Creation du contenu text entre balise dt
    dtElem.textContent = mots[index].terme;
    // Creation du contenu text entre balise dl
    ddElem.textContent = mots[index].definition;
    // Ajoute un dt
    document.getElementById("contenu").appendChild(strongMot);
    // Ajoute un dl
    document.getElementById("contenu").appendChild(ddElem);
}

// Autres solution

let dlElt = document.createElement("dl"); // Création de la liste

// Pour chaque mot, on construit une balise <dt> avec le terme et une balise <dd> avec sa définition
mots.forEach(function(mot) {
    let dtElt = document.createElement("dt");
    let strongElt = document.createElement("strong");
    strongElt.textContent = mot.terme;
    let ddElt = document.createElement("dd");
    ddElt.textContent = mot.definition;

    dtElt.appendChild(strongElt);
    dlElt.appendChild(dtElt);
    dlElt.appendChild(ddElt);
});

document.getElementById("contenu").appendChild(dlElt); // Ajout de la liste à la page