let headerHtml = document.head;
console.log(headerHtml);
let bodyHtml = document.body;
console.log(bodyHtml);

if (document.body.nodeType === document.ELEMENT_NODE) {
    console.log('Body est un noeud element, balise html : ' + document.body.nodeType);
} else {
    console.log('Body est un noeud textuel, contenu entre les balises html : ' + document.ELEMENT_NODE);
}