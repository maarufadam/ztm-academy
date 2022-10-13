//reference type

var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};

// context vs scope
const object4 = {
    a: function() {
        console.log(this);
    }
}

// instantiation
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEEEEE I'm a ${this.type}`);
    }
}


const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

// Classical Ingeritance
var Player2 = function(name, type) {
    this.name = name;
    this.type = type;
}

Player2.prototype.introduce = function() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
}

var wizard3 = new Player2('Shelly', 'healer');
var wizard4 = new Player2('Shawn', 'dark magic');

wizard3.play = function() {
    console.log(`WEEEEEEE I'm a ${this.type}`);
}

wizard4.play = function() {
    console.log(`WEEEEEEE I'm a ${this.type}`);
}