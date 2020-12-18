// Controle mdp1 et mdp2 identique

let formulaire = document.querySelector("form");
/*checksimilaireMdp = (eventContaintPassword) => {
    let mdpTarget = eventContaintPassword.target;
    let mdp1;
    let mdp2;
    if (mdpTarget.name === "mdp1") {
        console.log("Mot de pass 1");
        console.log(mdpTarget.value);
        mdp1 = mdpTarget.value;
    } else {
        console.log("Mot de passe 2")
        console.log(mdpTarget.value);
        mdp2 = mdpTarget.value;
    }
    /* let mdp2Value = eventContaintPassword.target.value;
     console.log(mdp2);
     if (mdp1 === mdp2) {
         console.log("mdp identique");
     } else {
         console.log("mdp different");
     }
} */
submit = (eventSubmit) => {
    console.log("envoi")
    let mdp = formulaire.elements.mdp1.value;
    let mdp2 = formulaire.elements.mdp2.value;
    let msg = "Mots de pase OK";
    let infoMdp = document.getElementById("infoMdp");
    let regex = /\d+/;

    if (mdp === mdp2) {
        if (mdp.length >= 6) {

        }
    }



    if (mdp != mdp2) {
        infoMdp.textContent = "Erreur: Les mots de passes sont differents veuillez re-saisir vos mots de passe."
    } else {
        infoMdp.textContent = "Mot de passe identiques.";
    }
    if (mdp.length < 6) {
        infoMdp.textContent += "La longueur minimale du mot de passe doit etre de 6 caracteres.";
    } else {
        infoMdp.textContent += "La longueur du mot de passe est bon.";
    }

    // console.log(mdp.target.value);
    if (!regex.test(mdp)) {
        infoMdp.textContent += " Le mot de passe doit contenir un chiffre.";
    } else {
        infoMdp.textContent += " Le mot de passe contient un chiffre.";
    }
    eventSubmit.preventDefault();
}

// document.getElementById("mdp1").addEventListener("input", checksimilaireMdp);
// document.getElementById("mdp2").addEventListener("input", checksimilaireMdp);
formulaire.addEventListener("submit", submit);