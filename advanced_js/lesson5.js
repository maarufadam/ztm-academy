// Advanced Array

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach(element => double.push(element * 2));

console.log('forEach', double);

// maps
const mapArray = array.map(num => num * 2);

console.log('map', mapArray);

// filter
const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);

// reduce
const reduceArray = array.reduce(
    (accumulator, num) => {return accumulator + num},
    0);

console.log('reduce', reduceArray);