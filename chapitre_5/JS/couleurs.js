// variables
let keyPress = "";
let colorSelect = "white";
let colorDivs = document.getElementsByTagName("div");

// fonction retournant la touche appuye
eventClicClavier = (event) => {
    keyPress = String.fromCharCode(event.charCode).toLowerCase();
    // controle
    console.log("press : " + keyPress);
    switch (keyPress) {
        case "r":
            colorSelect = "red";
            break;
        case "j":
            colorSelect = "yellow";
            break;
        case "v":
            colorSelect = "green";
            break;
        case "b":
            colorSelect = "black";
            break;
        default:
            alert("Cette touche n'a aucun effet");
            break;
    }
    for (let index = 0; index < colorDivs.length; index++) {
        colorDivs[index].style.background = colorSelect;
    }
}

// Gestion de l'appui sur une touche du clavier retourne la touche
document.addEventListener("keypress", eventClicClavier);