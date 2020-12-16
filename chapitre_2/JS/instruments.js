nbreLink = (elem) => {
    return document.querySelectorAll(elem).length
};

infosLiens = () => {
    console.log(nbreLink("a"));
    let liensElem = document.getElementsByTagName("a");
    if (nbreLink("a") > 0) {
        console.log(liensElem[0].getAttribute("href"));
        console.log(liensElem[nbreLink("a") - 1].getAttribute("href"));
    }
}
possede = (instrument, type) => {
    let idInstrument = document.getElementById(instrument);
    if (idInstrument !== null) {
        console.log(idInstrument.classList.contains(type));
    } else {
        console.log("Aucun élément ne possède l'identifiant " + instrument);
    }

}

infosLiens();
possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur