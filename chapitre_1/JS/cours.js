let headerHtml = document.head;
console.log(headerHtml);
let bodyHtml = document.body;
console.log(bodyHtml);

if (document.body.nodeType === document.ELEMENT_NODE) {
    console.log('Body est un noeud element, de type balise html : ' + document.body.nodeType);
} else {
    console.log('Body est un noeud textuel, de type contenu entre les balises html : ' + document.ELEMENT_NODE);
}
console.log("Acces au premier enfant du noeud body : " + document.body.childNodes[0])
console.log(document.body.childNodes[0]);
console.log("Acces au deuxième enfant du noeud body : " + document.body.childNodes[1])
console.log(document.body.childNodes[1]);
console.log("Enfant nodes header : ");
for (let index = 0; index < document.head.childNodes.length; index++) {
    console.log(document.head.childNodes[index]);
}
console.log("Enfant nodes body : ");
for (let index = 0; index < document.body.childNodes.length; index++) {
    console.log(document.body.childNodes[index]);
}
let noeud1 = document.body.childNodes[1];
console.log("Affichage du noeud body, parent de l'enfant document.body.childNodes[1]");
console.log(noeud1.parentNode);