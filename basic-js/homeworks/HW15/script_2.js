"use strict";

const element = document.querySelector(".element");
let timeNummer = 10;

const timer = setInterval(() => {
    element.innerText = timeNummer;

    if (timeNummer === 0) {
        element.innerText = "Зворотній відлік завершено";
        clearInterval(timer);
    }
    timeNummer--;
}, 1000);
