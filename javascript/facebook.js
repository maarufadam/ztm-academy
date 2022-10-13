var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    },
    {
        username: "mitch",
        password: "mmm"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "JavaScript is soooo coool!"
    },
    {
        username: "Mitch",
        timeline: "JavaScript is preetyy coool!"
    }
];

function isUserValid(username, password) {
    for (i=0; i < database.length; i++) {
        if (username === database[i].username && password === database[i].password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);