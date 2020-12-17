// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [{
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];


// Variable de numerotation des questions
let i = 1;

// Boucle sur chaque element du tableau de question
questions.forEach((question) => {

    // Titre de la question
    let titleElement = document.createElement("strong");
    titleElement.textContent = "Question " + i + " : ";

    // Enonce de la question
    let textEnonceElement = document.createElement("i");
    textEnonceElement.textContent = question.enonce;

    // Enonce de la question regroupant le titleElement + textEnonceElement
    let enonceElement = document.createElement("div");
    enonceElement.appendChild(titleElement);
    enonceElement.appendChild(textEnonceElement);

    // La zone de réponse contient initialement un bouton que l'on met dans une div
    let zoneDeReponseElement = document.createElement("div");
    let boutonElement = document.createElement("button");
    boutonElement.textContent = "Afficher la réponse";
    zoneDeReponseElement.appendChild(boutonElement);


    // Gestion de l'event click bouton Afficher la réponse
    boutonElement.addEventListener("click", function() {
        let reponseElement = document.createElement("div");
        reponseElement.textContent = question.reponse;
        // On retire le bouton
        zoneDeReponseElement.innerHTML = "";
        // On ajoute la reponse
        zoneDeReponseElement.appendChild(reponseElement);
        boutonElement.addEventListener("click", change)

    })

    // La question regroupe l'énoncé de la questionet la zone de réponse
    let questionElement = document.createElement("p");
    questionElement.appendChild(enonceElement);
    questionElement.appendChild(zoneDeReponseElement);
    document.getElementById("contenu").appendChild(questionElement);


    i++;
})