let styleElement = getComputedStyle(document.getElementById("contenu"));
let listeElement = document.createElement("ul");
let longueurElement = document.createElement("li");
longueurElement.textContent = "Longueur : " + styleElement.width;
let hauteurElement = document.createElement("li");
hauteurElement.textContent = "Hauteur : " + styleElement.height;
listeElement.appendChild(hauteurElement);
listeElement.appendChild(longueurElement);
document.getElementById("infos").appendChild(document.createTextNode("Informatrion sur l'element :"));
document.getElementById("infos").appendChild(listeElement);