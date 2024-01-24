"use strict";

// 1.

// const brends = ["bMw", "Audi", "teSla", "toYOTA"];

// const newBrends = brends.map((brand) => ({
//     type: "car",
//     brand,
//     isElectric: brand.toLowerCase() === "tesla",
// }));

// const isElectricCars = newBrends.filter((el) => el.isElectric);

// console.log(newBrends);

// const data = [0, 1, false, 3, undefined, "", 4, null];

// const filterArr = (arr) => {
//     if (Array.isArray(arr)) {
//         return arr.filter((el) => !!el);
//     } else {
//         console.warn("This is not an array!");
//     }
// };

// console.log(filterArr(data));

// 2.

// const arr1 = [1, 3, 4, 5, 6];
// const arr2 = [5, 6, 6];

// const arr3 = arr1.map((num, index) => num + (arr2[index] || 0)).sort((a, b) => b - a);
// console.log(arr3);

// 3.

// let storage = [
//     "apple",
//     "water",
//     "banana",
//     "pineapple",
//     "tea",
//     "cheese",
//     "coffee",
// ];

// const moveProduct = (productName, newProduct) => {
//     const index = storage.indexOf(productName);

//     if (index === -1) {
//         alert("False, the product doesn't exist");
//         return;
//     }

//     if (!newProduct) {
//         storage.splice(index, 1);
//     } else {
//         storage.splice(index, 1, newProduct);
//     }

//     storage.sort((a, b) => {
//         return a.localeCompare(b);
//     });
// };

// moveProduct("cheese");

// console.log(storage);

// 4.

const mergeArrays = (...arr) => {
    console.log(arr);

    const resultArray = arr.reduce((acc, item) => {
        acc.push(...item);
        return acc;
    });

    console.log(resultArray);
};

mergeArrays([1, 2, 3, 4], ["a", "b", "c"], [true, null]);
