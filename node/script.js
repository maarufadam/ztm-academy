const script2 = require('./script2.js');

const a = script2.largeNumber;
const b = 5;

setTimeout(() => {
	console.log('a + b = ', a + b);
	console.log(__dirname);
}, 100);