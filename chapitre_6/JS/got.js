// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
let maisons = [{
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
getPersonnages = (codeMaison) => {
        switch (codeMaison) {
            case "ST":
                return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
            case "LA":
                return ["Tywin", "Cersei", "Jaime", "Tyrion"];
            case "BA":
                return ["Robert", "Stannis", "Renly"];
            case "TA":
                return ["Aerys", "Daenerys", "Viserys"];
            default:
                return [];
        }
    }
    // Creer et renvoi un element HTML <option>
createElementOption = (texte, valeur) => {
    let optionMaisonElement = document.createElement("option");
    optionMaisonElement.textContent = texte;
    optionMaisonElement.value = valeur;
    return optionMaisonElement;
}

// Creer et renvoi un element HTML <li>
createElementList = (texte) => {
    let listMaisonElement = document.createElement("option");
    listMaisonElement.textContent = texte;
    return listMaisonElement;
}

// Remplit la liste déroulante des maisons
addMaison = (maison) => {
    let maisonElement = document.querySelector("select");
    maisonElement.appendChild(createElementOption(maison.nom, maison.code));
}
maisons.forEach(addMaison);

// Mise a jour de la liste
changeList = (eventChangeList) => {
    // La valeur cible de l'évènement est le code de la maison
    let persos = getPersonnages(eventChangeList.target.value);
    let persosElt = document.getElementById("persos");
    persosElt.innerHTML = ""; // Vidage de la liste
    // Ajout de chaque personnage à la liste
    persos.forEach((perso) => {
        persosElt.appendChild(createElementList(perso));
    });
}
let maisonElement = document.querySelector("select");
maisonElement.addEventListener("change", changeList);