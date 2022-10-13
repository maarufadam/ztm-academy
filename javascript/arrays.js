// using this array,
var fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
var result1;
// 1. Remove the Banana from the array.
result1 = fruits.shift();

// 2. Sort the array in order.
result1 = fruits.sort();

// 3. Put "Kiwi" at the end of the array.
result1 = fruits.push('Kiwi');

// 4. Remove "Apples" from the array.
result1 = fruits.shift(); // fruits.splice(0, 1);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
var temp = [];
fruits.forEach(fruit => {
    temp.unshift(fruit);
});
result1 = temp;  // fruits.reverse();

//you should have at the end:
["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// access "Oranges".
var result2 = array2[1][1];  // array2[1][1][0];

console.log('Array: ' + fruits);
console.log('Result1: ' + result1);
console.log('Result2: ' + result2);