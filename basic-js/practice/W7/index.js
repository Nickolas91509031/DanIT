"use strict";

const userData = {
    name: "John",
    _age: 30,

    set age(value) {
        if (value > 0) {
            this._age = value;
        }
    },
    get age() {
        return this._age;
    },
};

userData.age = 0;

console.log(userData.age);
