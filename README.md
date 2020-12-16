# JAVASCRIPT_WEB_REACTIVE

# Le DOM (Document Object Model)

## Le DOM (chapitre_1)
Le DOM definit la structure d'une page et le moyen d'interagir avec elle : il s'agit d'une interface de programmation, ou API (Application Programming Interface).

* Creation de la **page html** du chapitre_1. Une page html a la structure suivante:

![dom_html](./resources/com_html.bmp)

* Chaque entite de l'arborescence est appelee un noeud (node). On distingue deux types de noeud :
    * Ceux (en bleu) qui correspondent a des elements HTML, comme `<body>` ou `<p>`. Ces noeud peuvent avoir des sous-noeud, appeles fils ou enfants(children).
    * Ceux (en rouge) qui correspondent au contenu textuel de la page. Ces noeud ne peuvent pas avoir de fils.


* Acceder au DOM a l'aide de la variable js `document`, correspondant a l'element `<html>`. 
    * Cette variable est de type Object
    * Et possede les  proprietes `<head>` et `<body>`
    * Creation du **script javascript** et integration de celui-ci a notre html a l'aide de la balise `<script>`, place a la fin de notre page html avant fermeture de la derniere balise `</body>`.
    Lors de l'execution de la page html dans notre navigateur avec la console de debug ouverte nous pouvons constater :

![console_debug](./resources/script.bmp)

* Decouvrer le type de noeud: Chaque type de noeud a une propriete `nodeType` qui indique son type. La valeur de cette propriete est `document.ELEMENT_NODE` pour un noeud "element" (balise HTML) et `document.TEXT_NODE` pour un noeud textuel. Testons cela, dans notre fichier .js. Ci-dessous les descriptions des possibles retour:

![node_type](./resources/node_type.bmp)

![result_node_type](./resources/result_1.bmp)

* Acceder aux enfants d'un noeud d'un element.
<span style="color:red">Comme nous l'avons vu precedemment, seuls les noeuds de type element peuvent avoir des sous-noeuds (appeles enfants).</span>

Exemple d'acces au premier enfant du noeud body

```js
console.log(document.body.childNodes[0])
```
![children_node](./resources/chidren_node.bmp)

* Parcourir la liste des noeuds enfants. A l'aide de boucle :

```js
for (let index = 0; index < document.body.childNodes.length; index++) {
    console.log(document.body.childNodes[index]);
}
```

![nodes_childrens](./resources/nodes_childrens.bmp)

* Acceder au parent d'un noeud d'un element.

Exemple d'acces au parent du noeud 1 du body

```js
let noeud1 = document.body.childNodes[1]
console.log(noeud1.parentNode)

```
![children_node](./resources/chidren_node.bmp)

* Autres proprietes (`firstChild`, `lastChild`, `nextSibling`)

[node_MDN](https://developer.mozilla.org/fr/docs/Web/API/Node)

## TP 1

```js
function afficherEnfant(noeud, indice) {
    if (noeud.nodeType === document.ELEMENT_NODE) {
        if (indice >= 0 && indice < noeud.childNodes.length) {
            console.log("Afficher enfant");
            console.log(noeud.childNodes[indice]);
        } else {
            console.error("Indice incorrect");
        }
    } else {
        console.error("Type de noeud incorrect");
    }
}
afficherEnfant(document.body, 1);
afficherEnfant(document.body, -1);
afficherEnfant(document.body, 8);
afficherEnfant(document.body.childNodes[0], 0);
```
![tp1](./resources/tp1.bmp)

## Parcourir le DOM (chapitre_2)

* Plutot que de parcourir le DOM noeud par noeud, on peut acceder rapidement a un ou plusieurs elements en utilisant des methodes de selection.
* Les methodes `getElementsByTagName`, `getElementsByClassName` et `getElementById` permettent respectivement de rechercher des elements par nom de balise, par classe et par identifiant. Les deux premieres methodes renvoient une liste, la derniere renvoie un seul element.
* Les methodes `querySelectorAll` et `querySelector` permettent de rechercher des elements en utilisant un selecteur CSS. La premiere methode renvoie tous les elements correspondants, la seconde renvoie uniquement le premier.
* La propriete `innerHTML` renvoie le contenu HTML d'un element. La propriete `textContent` renvoie son contenu textuel, sans le balisage HTML.
* Les methodes `getAttribute` et `hasAttribute` permettent d'acceder aux attributs d'un element.
* La propriete `classList` et sa methode `contains` permettent d'acceder aux classes d'un element.

![tp2](./resources/chap_2.bmp)
![tp2_bis](./resources/chap_2_bis.bmp)

## Modifier la structure de la page

* Les proprietes `innerHTML`, `textContent` et `classList` ainsi que la methode `setAttribute` permettent de modifier les informations d'un element du DOM.
* La creation d'un nouveau noeud s'effectue avec les methodes `createTextNode` pour un noeud textuel et `createElement` pour un element.
* La methode `appendChild` permet d'inserer un nouveau noeud comme dernier enfant d'un element du DOM.
* Les methodes `insertBefore` et `insertAdjacentHTML` offrent des possibilites alternatives pour ajouter du contenu.
* On peut remplacer un noeud existant avec la methode `replaceChild` ou le supprimer avec `removeChild`.
* La manipulation du DOM en JavaScript doit se faire de maniere raisonnee afin de ne pas degrader les performances.

[journaux TP_3.html](./chapitre_3/HTML/journaux.html)
[journaux TP_3.JS](./chapitre_3/JS/journaux.js)

[dictionnaire TP_3.html](./chapitre_3/HTML/dictionnaire.html)
[dictionnaire TP_3.JS](./chapitre_3/JS/dictionnaire.js)


## Donner du style a vos elements

* La propriete JavaScript `style` represente l'attribut `style` d'un element du DOM. Elle permet de modifier le style de cet element en definissant la valeur de ses proprietes CSS.
* Les proprietes CSS composees s'ecrivent avec la norme `camelCase` en JavaScript. Par exemple, `font-family` devient `fontFamily`.
* La propriete JavaScript `style` est insuffisante pour acceder au style d'un element. Pour cela, on utilise la fonction `getComputedStyle`.