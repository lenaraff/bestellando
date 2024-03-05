let articles = [
    {
        'name': 'Pizza Salami',
        'description': 'Pizza mit Tomatensauce, Salami und Käse',
        'price': 9.60,
        'category': 'pizza',
    },
    {
        'name': 'Pizza Salmone',
        'description': 'Pizza mit Tomatensauce, Lachs und Käse',
        'price': 15.60,
        'category': 'pizza',
    },
    {
        'name': 'Pizza Napoli',
        'description': 'Pizza mit Tomatensauce, Mais, Pepperoni, Speck und Käse',
        'price': 12.90,
        'category': 'pizza',
    },
    {
        'name': 'Pasta Funghi',
        'description': 'Penne mit Pilzen',
        'price': 11.90,
        'category': 'pasta',
    },
    {
        'name': 'Pasta Carbonara',
        'description': 'Spaghetti mit Schinken, Oberssauce und Ei',
        'price': 14.90,
        'category': 'pasta',
    },
    {
        'name': 'Cesar Salat',
        'description': 'Römersalat, Parmesan,Croutons, Hähnchenbrust und cremiges Dressing mit Kapern und Sardellen',
        'price': 8.60,
        'category': 'salad',
    }
];

let shoppingBasketNames = [];
let shoppingBasketPrices = [];
let shoppingBasketAmount = [];

let total = 0;

function init() {
    document.getElementById('menuArea').innerHTML = ``; //clear menuArea
    for (let i = 0; i < articles.length; i++) {
        document.getElementById('menuArea').innerHTML += `<div class="mealCard">
        <div>
            <h2>${articles[i].name}</h2>
            <p>${articles[i].description}</p>
            <h3>${articles[i].price.toFixed(2)}</h3>
        </div>
        <button onclick="storeInShoppingBasket(${i})" class="smallIcon"><img src="img/plus.png" alt="plus"></button>
    </div>`
    };
}
function showShoppingBasket() {
    document.getElementById('shoppinBasketEmpty').style.display = "none"
    document.getElementById('itemsinShoppingBasket').innerHTML = ``
    for (let i = 0; i < shoppingBasketNames.length; i++) {
        document.getElementById('itemsinShoppingBasket').innerHTML += `<div class="oneItemInShoppingBasket">
        <div>
    <h2>${shoppingBasketNames[i]}</h2>
    <div class="pices smallIcon">
    <button class="smallIcon"><img src="img/plus_rund.png" alt="Plus"></button>
    <p>${shoppingBasketAmount[i]} Sück</p>
    <button><img src="img/minus_rund.png" alt="Plus"></button>
    </div>
    </div>
    <h3>${(shoppingBasketPrices[i]*shoppingBasketAmount[i]).toFixed(2)} €</h3>
</div>`
showTotal();
    };
function showTotal(){
    document.getElementById('total').innerHTML = `${total.toFixed(2)} €`;
}

}
function storeInShoppingBasket(i) {
    if (shoppingBasketNames.includes(articles[i].name)) {
        positionOfMealinShoppingBasket = shoppingBasketNames.indexOf(articles[i].name)
        shoppingBasketAmount[positionOfMealinShoppingBasket]++
    }
    else {
        shoppingBasketNames.push(articles[i].name);
        shoppingBasketPrices.push(articles[i].price);
        shoppingBasketAmount.push(1);
    }
    findTotal();
    showShoppingBasket();
}
function findTotal(){
    total = 0;
    for(let i = 0; i < shoppingBasketNames.length; i++){
        total = total + shoppingBasketPrices[i]*shoppingBasketAmount[i];
    }

}

