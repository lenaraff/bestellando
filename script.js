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
    },
    {
        'name': 'Thunfisch Salat',
        'description': 'Salat mit Thunfisch',
        'price': 13.00,
        'category': 'salad',
    },
    {
        'name': 'kleiner Beilagensalat',
        'description': 'kleiner gemischter Beilagensalt',
        'price': 3.10,
        'category': 'salad',
    },
    {
        'name': 'Spagetti Bolognese',
        'description': 'Spagetti mit Bolognesesauce',
        'price': 15.30,
        'category': 'pasta',
    },
];

let shoppingBasketNames = [];
let shoppingBasketPrices = [];
let shoppingBasketAmount = [];

let total = 0;

function init() {
    loadItemsFromLocalStorage();
    showShoppingBasket();
    document.getElementById('menuArea').innerHTML = ``;
    for (let i = 0; i < articles.length; i++)
        if (articles[i].category === 'pizza') {
            showPizzaArea(i);
        }
        else if (articles[i].category === 'pasta') {
            showPastaArea(i)
        }
        else if (articles[i].category === 'salad') {
            showSaladArea(i)
        };

}

function showPizzaArea(i) {
    document.getElementById('menuAreaPizza').innerHTML +=
        `<div class="mealCard">
            <div>
                <h2>${articles[i].name}</h2>
                <p>${articles[i].description}</p>
                <h3>${articles[i].price.toFixed(2)}</h3>
            </div>
            <button onclick="storeInShoppingBasket(${i})" class="smallIcon"><img src="img/plus.png" alt="plus"></button>
        </div>`;
}

function showPastaArea(i) {
    document.getElementById('menuAreaPasta').innerHTML +=
        `<div class="mealCard">
            <div>
                <h2>${articles[i].name}</h2>
                <p>${articles[i].description}</p>
                <h3>${articles[i].price.toFixed(2)}</h3>
            </div>
            <button onclick="storeInShoppingBasket(${i})" class="smallIcon"><img src="img/plus.png" alt="plus"></button>
        </div>`;
}

function showSaladArea(i) {
    document.getElementById('menuAreaSalad').innerHTML +=
        `<div class="mealCard">
            <div>
                <h2>${articles[i].name}</h2>
                <p>${articles[i].description}</p>
                <h3>${articles[i].price.toFixed(2)}</h3>
            </div>
            <button onclick="storeInShoppingBasket(${i})" class="smallIcon"><img src="img/plus.png" alt="plus"></button>
        </div>`;
}

function showShoppingBasket() {
    loadItemsInShoppinBasket();
    showTotal();
    checkShoppingBaketLength();
    storeItemsInLocalStorage()
};

function loadItemsInShoppinBasket() {
    document.getElementById('itemsinShoppingBasket').innerHTML = ``;
    for (let i = 0; i < shoppingBasketNames.length; i++) {
        document.getElementById('itemsinShoppingBasket').innerHTML += `<div class="oneItemInShoppingBasket">
            <div>
            <p>${shoppingBasketNames[i]}</p>
            <div class="pices smallIcon">
            <button onclick= "addOne('${shoppingBasketNames[i]}')" class="smallIcon"><img src="img/plus_rund.png" alt="Plus"></button>
            <p>${shoppingBasketAmount[i]} Sück</p>
            <button onclick= "deleteOne('${shoppingBasketNames[i]}')"><img src="img/minus_rund.png" alt="Plus"></button>
            <button onclick= "deleteAll('${shoppingBasketNames[i]}')"><img src="img/trash.png" alt="Plus"></button>
            </div>
            </div>
            <p>${(shoppingBasketPrices[i] * shoppingBasketAmount[i]).toFixed(2)} €</p>
            </div>`
    };
};

function showTotal() {
    document.getElementById('total').innerHTML = `${total.toFixed(2)} €`;
};

function checkShoppingBaketLength() {
    if (shoppingBasketNames.length >= 1) {
        document.getElementById('shoppinBasketEmpty').style.display = "none";
    }
    else {
        document.getElementById('shoppinBasketEmpty').style.display = "";
    };
};

function storeInShoppingBasket(i) {
    if (shoppingBasketNames.includes(articles[i].name)) {
        positionOfMealinShoppingBasket = shoppingBasketNames.indexOf(articles[i].name)
        shoppingBasketAmount[positionOfMealinShoppingBasket]++
    }
    else {
        shoppingBasketNames.push(articles[i].name);
        shoppingBasketPrices.push(articles[i].price);
        shoppingBasketAmount.push(1);
    };
    findTotal();
    showShoppingBasket();
};

function findTotal() {
    total = 0;
    for (let i = 0; i < shoppingBasketNames.length; i++) {
        total = total + shoppingBasketPrices[i] * shoppingBasketAmount[i];
    };
};

function addOne(article) {
    positionOfMealinShoppingBasket = shoppingBasketNames.indexOf(article);
    shoppingBasketAmount[positionOfMealinShoppingBasket]++;
    findTotal();
    showShoppingBasket();
};

function deleteOne(article) {
    positionOfMealinShoppingBasket = shoppingBasketNames.indexOf(article);
    if (shoppingBasketAmount[positionOfMealinShoppingBasket] == 1) {
        shoppingBasketNames.splice(positionOfMealinShoppingBasket, 1);
        shoppingBasketPrices.splice(positionOfMealinShoppingBasket, 1);
        shoppingBasketAmount.splice(positionOfMealinShoppingBasket, 1);
        findTotal();
        showShoppingBasket();
    }
    else {
        positionOfMealinShoppingBasket = shoppingBasketNames.indexOf(article)
        shoppingBasketAmount[positionOfMealinShoppingBasket]--
        findTotal();
        showShoppingBasket();
    };
};

function deleteAll(article) {
    positionOfMealinShoppingBasket = shoppingBasketNames.indexOf(article);
    shoppingBasketNames.splice(positionOfMealinShoppingBasket, 1);
    shoppingBasketPrices.splice(positionOfMealinShoppingBasket, 1);
    shoppingBasketAmount.splice(positionOfMealinShoppingBasket, 1);
    findTotal();
    showShoppingBasket();

};

function order() {
    if (shoppingBasketNames.length == 0) {
        alert('Füge bitte Gerichte zum Warenkorb hinzu, bevor du deine Bestellung absendest!')
    }
    else {
        alert('Deine Testbestellung wurde abgesendet!');
        shoppingBasketNames = [];
        shoppingBasketPrices = [];
        shoppingBasketAmount = [];
        findTotal();
        showShoppingBasket();
    }
}

function openShoppingBasket() {
    document.getElementById('shoppingBasket').classList.toggle("hiddenShoppingBasket");
}

function storeItemsInLocalStorage() {
    localStorage.setItem("articlesNames", JSON.stringify(shoppingBasketNames));
    localStorage.setItem("articlesPrices", JSON.stringify(shoppingBasketPrices));
    localStorage.setItem("articlesAmounts", JSON.stringify(shoppingBasketAmount));
}

function loadItemsFromLocalStorage() {
    StringOfshoppingBasketNames = localStorage.getItem("articlesNames");
    StringOfshoppingBasketPrices = localStorage.getItem("articlesPrices");
    StringOfhoppingBasketAmount = localStorage.getItem("articlesAmounts");
    shoppingBasketNames = JSON.parse(StringOfshoppingBasketNames);
    shoppingBasketPrices = JSON.parse(StringOfshoppingBasketPrices);
    shoppingBasketAmount = JSON.parse(StringOfhoppingBasketAmount);
}