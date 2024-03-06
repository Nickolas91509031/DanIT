"use strict";

const password = 123123;
const input = document.querySelector(".password");
const congratulation = document.querySelector(".congratulation");
const submit = document.querySelector(".submit");
const btnTry = document.querySelector(".try");

btnTry.addEventListener("click", () => {
    let i = 0;

    do {
        console.log(i);
        input.value = i++;
        submit = new MouseEvent("click", submit);
    } while (i.hidden === true || i < 1000000);
});

submit.addEventListener("click", (event) => {
    event.preventDefault();

    console.log(input.value);

    if (input.value === password) {
        congratulation.hidden = false;
    }
});
