/*

// #1

let car = {
    make: "Tayota",
    model: "Camry",
    year: 2020,
};

// #2

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new Person("John", 20);
let person2 = new Person("John", 30);

// #3

const personPrototype = {
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};

let person = Object.create(personPrototype);
person.name = "John";

// #4

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    sound() {
        return `Making a soumd`;
    }
}

let dog = new Animal("Buddy", "Dog");

*/

const product = {
    imgLink: "https://images.unsplash.com/photo-15073491",
    title: "T-Shirt",
    oldPrice: 2999,
    _newPrice: 1999,
    colors: ["gray", "black"],

    set newPrice(value) {
        if (value > 0) {
            this._newPrice = value;
        }
    },

    get newPrice() {
        return this._newPrice;
    },

    setNewPrice(value) {
        if (value > 0) {
            this.newPrice = value;
        }
    },

    getPriceDiff: function() {
        return this.oldPrice - this.newPrice;
    },
};

product.setNewPrice(-1);
console.log(product.newPrice);

