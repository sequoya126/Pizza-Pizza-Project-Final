let items = [
    {
        index: 1,
        quan: 0,
        nom: "Souris",
        image: "Images/Souris.png",
        prix: 50
    },
    {
        index: 2,
        quan: 0,
        nom: 'Clavier',
        image: "Images/clavier.png",
        prix: 150
    },
    {
        index: 3,
        quan: 0,
        nom: 'ecran',
        image: "Images/ecran.png",
        prix: 300
    },
    {
        index: 4,
        quan: 0,
        nom: 'Speakers',
        image: "Images/Speakers.png",
        prix: 20
    },
    {
        index: 5,
        quan: 0,
        nom: 'Tour',
        image: "Images/la tour.png",
        prix: 200
    },
    {
        index: 6,
        quan: 0,
        nom: 'Laptop',
        image: "Images/laptop.png",
        prix: 1000
    }
];

function initItem() {
    totals.innerHTML = listStorage.length;
    // Clear any existing items in the display
    itemList.innerHTML = '';

    // Loop through each item and create its representation
    for (let i = 0; i < items.length; i++) {
        let value = items[i];
        let card = document.createElement('div');
        card.setAttribute('class', 'item-Afficher');
        card.innerHTML = `
            <img src="${value.image}" class="card-img-top" alt="...">
            <div class="nom-prix-bouton"> 
                <h4 class="cart-h4">${value.nom} ${value.prix}$</h4>
                <button class="AjouterAuPanier" id = "${i}" onclick="AjouterAuPanier(${i}, ${value.index})">Ajouter au panier</button>
            </div>`;
        // Append the item representation to the items container
        itemList.appendChild(card);
    //     btns = document.querySelectorAll("AjouterAuPanier")
    }
    
}
initItem();