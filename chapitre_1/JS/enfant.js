/* TP:1 */

function afficherEnfant(noeud, indice) {
    // Condition si c'est un noeud du DOM
    if (noeud.nodeType === document.ELEMENT_NODE) {
        // console.log("Je suis un noeud du DOM");
        // Condition de validation l'indice doit etre sup ou egale a 0 et l'indice doit etre inf a la taille des enfants du noeud
        if (indice >= 0 && indice < noeud.childNodes.length) {
            console.log("Afficher enfant");
            console.log(noeud.childNodes[indice]);
        } else {
            console.error("Indice incorrect");
        }
    } else {
        console.error("Type de noeud incorrect");
    }

}

// Doit afficher le noeud h1
afficherEnfant(document.body, 1);

// Doit afficher l'erreur "Indice incorrect"
// L'indice demandé est négatif
afficherEnfant(document.body, -1);

// Doit afficher l'erreur "Indice incorrect"
// Le noeud body a moins de 9 noeuds enfants
afficherEnfant(document.body, 8);

// Doit afficher l'erreur "Type de noeud incorrect"
// Le premier noeud enfant de body est textuel et n'a donc pas d'enfants
afficherEnfant(document.body.childNodes[0], 0);