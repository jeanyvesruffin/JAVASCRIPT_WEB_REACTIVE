let pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "MonPseudo";

// Affichage d'un message pour la saisie du pseudo
focus = () => {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
}
pseudoElt.addEventListener("focus", focus);
// suppression d'un message pour la saisie du pseudo
blur = (eventBlur) => {
    console.info("Event Blur " + eventBlur);
    document.getElementById("aidePseudo").textContent = "";
}
pseudoElt.addEventListener("blur", blur);

// Affichage de la demande de confirmation d'inscription
change = (eventChange) => {
    console.info("Demande de confirmation " + eventChange.target.checked)
}

document.getElementById("confirmation").addEventListener("change", change);

// Affichage du type d'abonnement choisi
abonnement = (eventAbonnement) => {
    console.info("Formule d'abonnement choisi : " + eventAbonnement.target.value);
}
let abonnementElt = document.getElementsByName("abonnement");
for (let index = 0; index < abonnementElt.length; index++) {
    abonnementElt[index].addEventListener("change", abonnement);

}

// Affichage du code de nationalite choisie
nationalite = (eventNationalite) => {
    console.info("Code de nationalite : " + eventNationalite.target.value);
}
document.getElementById("nationalite").addEventListener("change", nationalite);

// Acceder aux champs du formulaire
let formulaire = document.querySelector("form");
console.info("Nombre de champs saisie : " + formulaire.elements.length); // affiche 10
console.info(formulaire.elements[0].name); // affiche pseudo
console.info(formulaire.elements.mdp.type); // affiche password

// Soumission du formulaire
// affichage des elements du formulaire soumis
submit = (eventSubmit) => {
    let pseudo = formulaire.elements.pseudo.value;
    let mdp = formulaire.elements.mdp.value;
    let courriel = formulaire.elements.courriel.value;
    console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " + mdp + " et le courriel " + courriel);
    if (formulaire.elements.confirmation.checked) {
        console.info("Vous avez demandé une confirmation d'inscription par courriel");
    } else {
        console.info("Vous n'avez pas demandé de confirmation d'inscription par courriel");
    }
    switch (formulaire.elements.abonnement.value) {
        case "abonewspromo":
            console.info("Vous êtes abonné(e) à la newsletter et aux promotions");
            break;
        case "abonews":
            console.info("Vous êtes abonné(e) à la newsletter");
            break;
        case "aborien":
            console.info("Vous n'êtes abonné(e) à rien");
            break;
        default:
            console.info("Erreur : code d'abonnement non reconnu");
    }
    switch (formulaire.elements.nationalite.value) {
        case "FR":
            console.info("Vous êtes français(e)");
            break;
        case "BE":
            console.info("Vous êtes belge");
            break;
        case "SUI":
            console.info("Vous êtes suisse");
            break;
        default:
            console.info("Erreur : code de nationalité non reconnu");
    }
    eventSubmit.preventDefault();
}
formulaire.addEventListener("submit", submit);

// Verification de la longueur du mot de passe saisi
checkLengthPassword = (eventCheckLengthPassword) => {
    let mdp = eventCheckLengthPassword.target.value;
    let longueurMdp = "faible";
    let couleurMsg = "red";
    if (mdp.length >= 8) {
        longueurMdp = "suffisant";
        couleurMsg = "green";
    } else if (mdp.length >= 4) {
        longueurMdp = "moyenne";
        couleurMsg = "orange";
    }
    let aideMdpElt = document.getElementById("aideMdp");
    aideMdpElt.textContent = "Longueur : " + longueurMdp;
    aideMdpElt.style.color = couleurMsg;
}
document.getElementById("mdp").addEventListener("input", checkLengthPassword)

// Verification adresse email
/*checkEmail = (eventCheckEmail) => {
    let validiteCourriel = "";
    if (eventCheckEmail.target.value.indexOf("@") === -1) {
        validiteCourriel = "Adresse invalide";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
}
document.getElementById("courriel").addEventListener("blur", checkEmail);
*/
// Verification adresse email a l'aide d'expression reguliere

/*checkEmail2 = (eventCheckEmail) => {
    let regex = /@/;
    console.log(regex.test(""));
    console.log(regex.test("@"));
    console.log(regex.test("sophie&mail.fr"));
    console.log(regex.test("sophie@mail.fr"));
    let validiteCourriel = "";
    if (eventCheckEmail.target.value.indexOf("@") === -1) {
        validiteCourriel = "Adresse invalide";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
}
document.getElementById("courriel").addEventListener("blur", checkEmail2);
*/
// Verification adresse email a l'aide d'expression reguliere

checkEmail3 = (eventCheckEmail) => {
    // Correspond à une chaîne de la forme xxx@yyy.zzz
    let regexCourriel = /.+@.+\..+/;
    let validiteCourriel = "";
    if (!regexCourriel.test(eventCheckEmail.target.value)) {
        validiteCourriel = "Adresse invalide";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
}
document.getElementById("courriel").addEventListener("blur", checkEmail3);