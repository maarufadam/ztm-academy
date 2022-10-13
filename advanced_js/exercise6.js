//Evaluate these:
//#1
[2] === [2]; // false
{} === {}; // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { a: 5};
object1.a = 4;

"a in Objects 1, 2 and 3 all change to 4 while object4's remains 5"

//#3 create two classes: an Animal class and a Mamal class. 
class Animal {
    constructor(species) {
        console.log('animal', this);
        this.species = species;
    }

    toString() {console.log('animal', this.species);}
}

class Mammal extends Animal {
    constructor(name, type, color, sound) {
        super('mammal');
        this.name = name;
        this.type = type;
        this.color = color;
        this.sound = sound;
        console.log('mammal', this);
    }

    makeSound() {
        console.log(`${this.sound}, My name is ${this.name}, I am a ${this.type} cow, My color is/are ${this.color}.`);
    }
}

// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

const cow1 = new Mammal('Linda', 'Swiss', 'brown and white', 'mooooo');
