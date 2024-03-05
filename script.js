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
]
function init(){
   // document.getElementById('menuArea').innerHTML = ``; //clear menuArea
    for (let i = 0; i < articles.length; i++){
        document.getElementById('menuArea').innerHTML += `<div class="mealCard">
        <div>
            <h2>${articles[i].name}</h2>
            <p>${articles[i].description}</p>
            <h3>${articles[i].price.toFixed(2)}</h3>
        </div>
        <button onclick="addToShoppingBasket(${i})" class="small-icon"><img src="img/plus.png" alt="plus"></button>
    </div>`
    };
}
function addToShoppingBasket(i){
    document.getElementById('itemsinShoppingBasket').innerHTML += `<div>
    <h2>${articles[i].name}</h2>
    <h2>${articles[i].price}</h2>
</div>`
}