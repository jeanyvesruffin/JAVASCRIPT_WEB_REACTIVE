// Ajout d'un gestionnaire pour l'événement click

clic = () => {
    console.log("Clic !");
}
let boutonElement = document.getElementById("bouton");
boutonElement.addEventListener("click", clic);

// Ajout d'un gestionnaire qui affiche le type et la cible de l'événement

eventClicType = (event) => {
    console.log("Evenement de type : " + event.type + " ,texte de la cible (bouton) cliquée : " + event.target.textContent)
}
document.getElementById("bouton").addEventListener("click", eventClicType);

// Gestion de l'appui sur une touche du clavier produisant un caractère

eventClicClavier = (event) => {
    console.log("Vous avez appuyé sur la touche : " + String.fromCharCode(event.charCode))
};
document.addEventListener("keypress", eventClicClavier);



// Renvoi le nom du bouton souris
let log = document.querySelector('#log');
getBoutonSouris = (event) => {
    let boutonSouris = "inconnu"
    if (typeof event === 'object') {
        switch (event.button) {
            case 0: // code du clic gauche
                log.textContent = 'Bouton gauche clic !';
                boutonSouris = 'gauche';
                break;
            case 1: // code du clic milieu
                log.textContent = 'Bouton milieu clic !';
                boutonSouris = 'milieu';
                break;
            case 2: // code du clic droit
                log.textContent = 'Bouton droit clic !';
                boutonSouris = 'droit';
                break;
            default:
                log.textContent = `Code du bouton inconnu : ${event.button}`;
        }
        return boutonSouris;
    }
}

// Affichage des informations sur un evenement souris
infosSouris = (event) => {
        console.log("Evenement souris de type : " + event.type + " ,bouton " + getBoutonSouris(event) + " , X : " + event.clientX + " , Y : " + event.clientY);
    }
    //Gestion du clic souris
    // button.addEventListener("mouseup", getBoutonSouris);
document.addEventListener("mouseup", infosSouris);
document.addEventListener("mousedown", infosSouris);

// gestion de la fin du chargement de la page web
window.addEventListener("load", () => {
    console.log("Page entièrement chargée")
})

// gestion de la fermeture de la page web
window.addEventListener("beforeunload", (event) => {
    let message = "On est bien ici !!";
    event.returnValue = message; // provoque une demande de confirmation
    return message; // provoque une demande de confirmation
})

// gestion du clic sur le cocument
document.addEventListener("click", () => {
    console.log("Gestionnaire document");
})

// Gestion du clic sur le paragraphe
document.getElementById("para").addEventListener("click", () => {
    console.log("Gestionnaire paragraphe");
})

// Gestion du clic sur le bouton sans arret de propagation
/*
document.getElementById("propogation").addEventListener("click", () => {
    console.log("Gestionnaire bouton");
})
*/

// Gestion du clic sur le bouton sans arret de propagation
document.getElementById("propogation").addEventListener("click", (event) => {
    console.log("Gestionnaire bouton");
    event.stopPropagation(); // Annulation de la navigation vers la cible du lien
})

// Gestion du clic sur le lien
document.getElementById("interdit").addEventListener("click", (event) => {
    console.log("Continuer plutot à lire le cours");
    event.preventDefault(); // Annulation de la navigation vers la cible du lien
})