let couleurTexte = prompt("Entrez la couleur du texte :");
let couleurFond = prompt("Entrez la couleur du fond :");


let divsElements = document.getElementsByTagName("div");
for (let i = 0; i < divsElements.length; i++) {
    divsElements[i].style.color = couleurTexte;
    divsElements[i].style.backgroundColor = couleurFond;
}