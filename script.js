// Les liens entre les items de HTML et JavaScript
let itemList = document.querySelector('.items');
localStorage.setItem('panierCourses', JSON.stringify(listStorage));


const items = [
    { nom: "Create Your Own", prix: 10, image: "create_your_own_2.jpg", index: 0 },
    { nom: "Meat Lover", prix: 12, image: "old_school_2.jpg", index: 1 },
    // 
];

const listStorage = []; 

function AjouterAuPanier(index, itemIndex) {
    // 
}

function initItem() {
    const totals = document.getElementById('totals');
    const itemList = document.getElementById('itemList');

    totals.innerHTML = listStorage.length;
    //
    itemList.innerHTML = '';

    // L
    for (let i = 0; i < items.length; i++) {
        let value = items[i];
        let card = document.createElement('div');
        card.setAttribute('class', 'item-Afficher');
        card.innerHTML = `
            <img src="${value.image}" class="card-img-top" alt="...">
            <div class="nom-prix-bouton"> 
                <h4 class="cart-h4">${value.nom} ${value.prix}$</h4>
                <button class="AjouterAuPanier" id="${i}" onclick="AjouterAuPanier(${i}, ${value.index})">Ajouter au panier</button>
            </div>`;
        // 
        itemList.appendChild(card);
    }
}

initItem();