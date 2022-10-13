const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
};

//1 for
for (let i=0; i < basket.length; i++) {
    console.log(basket[i]);
}

//2 forEach
basket.forEach(fruit => {
    console.log(fruit);
});

//3 for of
// Iterating - arrays, strings
for(fruit of basket) {
    console.log(fruit);
}

//4 for in
// enumerating - Objects - properties
for(fruit in detailedBasket) {
    console.log(fruit);
}