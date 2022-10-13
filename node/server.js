const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + "/public"));

app.listen(3000);

/*
// #4
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/:id', (req, res) => {
	// console.log(req.query);
	// req.body;
	// console.log(req.headers);
	// console.log(req.params);
	res.send('getting root');
});

// #3
app.use((req, res, next) => {
	console.log('<h1>HELLLOOOOOO</h1>');
	next();
});

// #2
app.get('/', (req, res) => {
	res.send("getting root");
});

app.get('/profile', (req, res) => {
	res.send("getting profile");
});

app.post('/profile', (req, res) => {
	const user = {
		name: 'Sally',
		hobby: 'soccer'
	}
	res.send(user);
});

// #1
app.get('/', (req, res) => {
	// res.send('<h1>heellloooo</h1>');
	const user = {
		name: 'Sally',
		hobby: 'soccer'
	}
	res.send(user);
});
 */