const fs = require('fs');

// READ
fs.readFile('./public/hello.txt', (err, data) => {
	console.time('funchallenge');
	if (err) {
		console.log('ReadAsync', 'errrooorrr');
	}
	console.log('ReadAsync', data.toString('utf8'));
	console.timeEnd('funchallenge');
});

const file = fs.readFileSync('./public/hello.txt');
console.log('ReadSync', file.toString());

/* 
// APPEND
fs.appendFile('./public/hello.txt', ' This is so cool!', err => {
	if (err) {
		console.log('Append', err);
	}
});
*/

/* 
// WRITE
fs.writeFile('./public/bye.txt', 'Sad to see you go', err => {
	if (err) {
		console.log('Write', err);
	}
});
 */


/*
// DELETE
fs.unlink('./public/bye.txt', err => {
	if (err) {
		console.log('Delete', err);
	}
	console.log('Delete', 'Inception');
});
 */