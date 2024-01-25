/* Теоритичні питання:
1. В чому відмінність між setInterval та setTimeout?
1. setTimeout позволяет вызвать функцию один раз через определённый интервал времени, а setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.

2. Як припинити виконання функції, яка була запланована для виклику з використанням setTimeout та setInterval?
2. Для остановки функции setTimeout или setInterval, нужно использовать функции clearTimeout/clearInterval со значениями, которые передавали setTimeout/setInterval.

Практичне завдання 1: 

-Створіть HTML-файл із кнопкою та елементом div.
-При натисканні кнопки використовуйте setTimeout, щоб змінити текстовий вміст елемента div через затримку 3 секунди. Новий текст повинен вказувати,
що операція виконана успішно.

Практичне завдання 2: 

Реалізуйте таймер зворотного відліку, використовуючи setInterval. При завантаженні сторінки виведіть зворотний відлік від 10 до 1 в елементі div. 
Після досягнення 1 змініть текст на "Зворотній відлік завершено".
*/

"use strict";

const changeTextButton = document.querySelector(".btn-change-text");
const element = document.querySelector(".element");
let timeNummer = 10;

const timer = setInterval(changeTextByTimer, 1000);

changeTextButton.addEventListener("click", () => {
    setTimeout(() => {
        element.innerText = "Text was changed!";
    }, 3000);
});

function changeTextByTimer() {
    if (timeNummer === 1) {
        element.innerText = "Зворотній відлік завершено";
        clearInterval(timer);
    }
    timeNummer--;
}
