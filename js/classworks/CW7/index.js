"use strict";

/*

const userFirstName = prompt("What is your first name?");
const userLastName = prompt("What is your last name?");
const userAge = prompt("What is your age?");

if (isNaN(userAge)) {
    alert("Please enter a number");
} else {
    while (userAge < 15 || userAge > 100) {
        alert("Your age isn't valudated. Please try again.");
        userAge = prompt("What is your age?");
    }
}

const userChildren = confirm("Do you have any children?");
const userEyes = prompt("What is your eyes color?");

const userData = {
    userFirstName,

    showInfo() {
        for (let key in userData) {
            if (typeof this[key] !== "function") {
                console.log(`${key}: ${userData[key]}`);
            }
        }
    },

    getFullName() {
        return `${this.userFirstName} ${this.userLastName}`;
    },

    userLastName,
    userAge,
    userChildren,
    userEyes,
};

userData.showInfo();
console.log(userData.getFullName());

*/

const priceList = {
    sizes: {
        small: {
            price: 15,
            calories: 250,
        },
        medium: {
            price: 25,
            calories: 340,
        },
        large: {
            price: 35,
            calories: 440,
        },
    },
    types: {
        breakfast: {
            price: 4,
            calories: 25,
        },
        lunch: {
            price: 5,
            calories: 5,
        },
        dinner: {
            price: 10,
            calories: 50,
        },
    },
};

function calcTotalParams(size, types) {
    return {
        totalSizes: priceList.sizes[size],
        totalTypes: priceList.types[types],
    }
}

calcTotalParams("large", "dinner");
