let pElements = document.querySelector("p");
pElements.style.color = "red";
pElements.style.margin = "50px";

pElements.style.fontFamily = "Arial";
pElements.style.backgroundColor = "black";

let paragraphesElements = document.getElementsByTagName("p");
console.log(paragraphesElements[0].style.color); // Affiche "red"
console.log(paragraphesElements[1].style.color); // Affiche "green"
console.log(paragraphesElements[2].style.color); // N'affiche rien

let stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle); // Affiche "italic"
console.log(stylePara.color); // Affiche la couleur bleue en valeurs RGB