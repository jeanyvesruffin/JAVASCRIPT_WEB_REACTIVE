// Fonction ajout desserts
addDesert = () => {
        let dessertElement = document.createElement("li");
        let nomDessert = prompt("Veuillez indiquer le dessert a ajouter : ");
        dessertElement.textContent = nomDessert;
        document.getElementById("desserts").appendChild(dessertElement);
        dessertElement.addEventListener("click", updateDesert)
    }
    // Fonction modification desserts
updateDesert = (event) => {
        let nomDesserttoModified = prompt("Veuillez indiquer le nouveau nom du dessert à mettre à jour : ");
        event.target.textContent = nomDesserttoModified;
    }
    // Affichage resultat
document.querySelector("button").addEventListener("click", addDesert);