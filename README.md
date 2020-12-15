# JAVASCRIPT_WEB_REACTIVE

# Le DOM (Document Object Model)

Le DOM definit la structure d'une page et le moyen d'interagir avec elle : il s'agit d'une interface de programmation, ou API (Application Programming Interface).

* Creation de la **page html** du chapitre_1. Une page html a la structure suivante:

![dom_html](./resources/com_html.bmp)

* Chaque entite de l'arborescence est appelee un noeud (node). On distingue deux types de noeud :
    * Ceux (en bleu) qui correspondent à des elements HTML, comme `<body>` ou `<p>`. Ces noeud peuvent avoir des sous-noeud, appeles fils ou enfants(children).
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
