const fs = require('fs');

// ANDREAI
function question1() {
	fs.readFile('./day1.txt', (err, data) => {
		console.time('q1-andreai');

		const directions = data.toString();
		const directionsArray = directions.split('');
		const answer =  directionsArray.reduce((acc, currentValue) => {
			if (currentValue === '(') {
				return acc += 1;
			} else if (currentValue === ')') {
				return acc -= 1;
			}
		}, 0);
		console.timeEnd('q1-andreai');
		console.log('floor: ', answer);
	});
}

question1();

function question2() {
	fs.readFile('./day1.txt', (err, data) => {
		console.time('q2-andreai');

		const directions = data.toString();
		const directionsArray = directions.split('');
		let accumulator = 0;
		let counter = 0;
		const answer =  directionsArray.some((currentItem) => {
			if (currentItem === '(') {
				accumulator += 1;
			} else if (currentItem === ')') {
				accumulator -= 1;
			}
			counter ++;
			return accumulator < 0;
		});
		console.timeEnd('q2-andreai');
		console.log('basement entered  at: ', counter);
	});
}

question2();

// MAARUF M. ADAMU
function question1n2() {
	fs.readFile('./day1.txt', (err, data) => {
		console.time('maaruf');
		if (err) {
			console.log('ReadAsync', 'errrooorrr');
		}
		
		let counter = 0;
		let floor = 0;
		let firstBasementStep = 0
		let basement = false;
	
		// for (let index = 0; index < data.length; index++) {
		// 	if (floor === -1 && basement === false) {
		// 		basement = true;
		// 		firstCharacter = index;
		// 	}

		// 	if (data[index] === 40) {
		// 		floor ++;
		// 	} else {
		// 		floor --;
		// 	}
		// }

		for (const currentItem of data) {
			counter ++;
			if (currentItem === 40) {
				floor ++;
			} else {
				floor --;
			}

			if (floor === -1 && basement === false) {
				basement = true;
				firstBasementStep = counter;
			}
		}
	
		console.timeEnd('maaruf');
		console.log('Floor: ', floor);
		console.log('Basement entered at: ', firstBasementStep);
	});
}

question1n2();