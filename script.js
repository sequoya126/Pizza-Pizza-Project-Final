
let listPanier = document.getElementById('listPanier');
let total = document.querySelector('.total');
let totals = document.querySelector('#totals')
let tax = document.querySelector('.tax');
let soustotal = document.querySelector('.soustotal');
let panierContainer = document.getElementById("container-panier");
let montrer = document.getElementById('montrer');
let red = document.getElementById('red');
let prixTotal = 0;
let listStorage = [];
let btns = document.querySelectorAll("AjouterAuPanier")
document.addEventListener('DOMContentLoaded', function() {
    // Call the initItem function here

});



// Les liens entre les items de HTML et JavaScript

const itemList = document.querySelector('.items');
const panierCoursesKey = 'panierCourses';




let items = [
    {
        index: 1,
        quan: 0,
        nom: "Create Your Own",
        image: "ImagesMenu/create_your_own_2.jpg",
        prix: 50
    },
    {
        index: 2,
        quan: 0,
        nom: 'Meat Lover',
        image: "ImagesMenu/old_school_2.jpg",
        prix: 150
    },
    {
        index: 3,
        quan: 0,
        nom: 'Veggie Favourites',
        image: "ImagesMenu/gourme_zas_2.jpg",
        prix: 300
    },
    {
        index: 4,
        quan: 0,
        nom: 'Alternative Crust',
        image: "ImagesMenu/Cauli_Create_your_Own_1(1).jpg",
        prix: 300
    },
];
let panierCourses = JSON.parse(localStorage.getItem(panierCoursesKey)) || [];

function AjouterAuPanier(index) {
    const selectedItem = items[index];
    panierCourses.push(selectedItem);
    localStorage.setItem(panierCoursesKey, JSON.stringify(panierCourses));
    // 
}

// function initItem() {
//     const totals = document.getElementById('totals');
//       totals.innerHTML = listStorage.length;

//     for (let i = 0; i < items.length; i++) {
//         const value = items[i];
//         const card = document.createElement('div');
//         card.setAttribute('class', 'item-Afficher');
//         card.innerHTML = `
//             <img src="${value.image}" class="card-img-top" alt="...">
//             <div class="nom-prix-bouton"> 
//                 <h4 class="cart-h4">${value.nom} ${value.prix}$</h4>
//                 <button class="AjouterAuPanier" onclick="AjouterAuPanier(${i})">Ajouter au panier</button>
//             </div>`;
//         itemList.appendChild(card);
//     }
// }


// Code du travail3Unite5
// function initItem() {
//     totals.innerHTML = listStorage.length;
//     // Clear any existing items in the display
//     itemList.innerHTML = '';

//     // Loop through each item and create its representation
//     for (let i = 0; i < items.length; i++) {
//         let value = items[i];
//         let card = document.createElement('div');
//         card.setAttribute('class', 'item-Afficher');
//         card.innerHTML = `
//             <img src="${value.image}" class="card-img-top" alt="...">
//             <div class="nom-prix-bouton"> 
//                 <h4 class="cart-h4">${value.nom} ${value.prix}$</h4>
//                 <button class="AjouterAuPanier" id = "${i}" onclick="AjouterAuPanier(${i}, ${value.index})">Ajouter au panier</button>
//             </div>`;
//         // Append the item representation to the items container
//         itemList.appendChild(card);
//     //     btns = document.querySelectorAll("AjouterAuPanier")
//     }
//     updateTotalCount();
// }
// function updateTotalCount(){

// }
initItem();