let articles = [
    {
        'name': 'Pizza Salami',
        'description': 'Pizza mit Tomatensauce, Salami und Käse',
        'price': 9.60,
        'amount': 0,
    },
    {
        'name': 'Pizza Salmone',
        'description': 'Pizza mit Tomatensauce, Lachs und Käse',
        'price': 15.60,
        'amount': 0,
    },
    {
        'name': 'Pizza Napoli',
        'description': 'Pizza mit Tomatensauce, Mais, Pepperoni, Speck und Käse',
        'price': 12.90,
        'amount': 0,
    },
]
function init(){
    document.getElementById('menuArea').innerHTML = ``; //clear menuArea
    for (let i = 0; i < articles.length; i++){
        document.getElementById('menuArea').innerHTML += `<div id="oneArticle">
        <h2 id="nameOfArticle">${articles[i].name}</h2>
        <p id="descriptionOfArticle">${articles[i].description}</p>
        <h2 id="priceOfArticle">${articles[i].price}</h2>
    </div>`
    };
}