let boutonElementClic = document.getElementById("clic");
let boutonElementClicDesactive = document.getElementById("desactiver");

let compteurClic = document.querySelector("#compteurClics");
let resultNbrClics = 0;


// Fonction affichage et incrementation compteur resultNbrClics
incrementCompteurClic = () => {
    resultNbrClics++;
    compteurClic.textContent = resultNbrClics;
}

// Fonction desactivation/ arret eventListener comptage
stopIncremente = () => {
    boutonElementClic.removeEventListener("click", incrementCompteurClic);
}


boutonElementClic.addEventListener("click", incrementCompteurClic);
boutonElementClicDesactive.addEventListener("click", stopIncremente)