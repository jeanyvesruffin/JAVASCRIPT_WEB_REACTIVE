// Permet d'afficher le contenu de l'element du DOM enfant "Merveilles du monde antique"
console.log(document.body.childNodes[5].childNodes[1]);
// Tous les titres h2
let titresElts = document.getElementsByTagName("h2");
// Affiche le premier titre h2
console.log(titresElts[0]);
// Affiche 3
console.log(titresElts.length);
// Tous les elements ayant la classe "merveilles"
let merveillesElts = document.getElementsByClassName("merveilles");
for (let i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}
// Element portant l'identifiant "nouvelles"
console.log(document.getElementById("nouvelles"));
// Tous les elements fils de l'elements d'identifiant "antiques" ayant la classe "existe"
// Affiche 1
console.log(document.getElementById("antiques").getElementsByClassName("existe").length);
// Tous les paragraphes
// Affiche 3
console.log(document.querySelectorAll("p").length);
// Tous les paragraphes à l'interieur de l'elements identifie par "contenu"
// Affiche 2
console.log(document.querySelectorAll("#contenu p").length);
// Tous les elements ayant la classe "existe"
// Affiche 8
console.log(document.querySelectorAll(".existe").length);
// Tous les elements fils de l'element identifie par "antiques" ayant la classe "existe"
// Affiche 1
console.log(document.querySelectorAll("#antiques > .existe").length);
// Le premier paragraphe
console.log(document.querySelector("p"));
// Le contenu HTML de l'element identifie par "contenu"
console.log(document.getElementById("contenu").innerHTML);
// Le contenu textuel de l'element identifie par "contenu"
console.log(document.getElementById("contenu").textContent);
// L'attribut href du premier lien
console.log(document.querySelector("a").getAttribute("href"));
// L'identifiant de la premiere liste
console.log(document.querySelector("ul").id);
// L'attribut href du premier lien
console.log(document.querySelector("a").href);
if (document.querySelector("a").hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.log("Le premier lien ne possède pas l'attribut target");
}
// Liste des classes de l'element identifie par "antiques"
var classes = document.getElementById("antiques").classList;
// Affiche 1 : l'element possède une seule classe
console.log(classes.length);
// Affiche "merveilles"
console.log(classes[0]);
if (document.getElementById("antiques").classList.contains("merveille")) {
    console.log("L'element identifie par antiques possède la classe merveille");
} else {
    console.log("L'element identifie par antiques ne possède pas la classe merveille");
}