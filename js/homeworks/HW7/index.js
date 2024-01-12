"use strict";

/* 
Теоретичні питання
1. Як можна створити рядок у JavaScript?
1. В JavaScript ви можете створювати рядки, обгортаючи текст одинарними
('), подвійними (") або обертками (`).
Рядки, створені таким чином, як у прикладі вище, обробляються
однаково. Є ще один спосіб створення рядків в JavaScript, це використання
конструктора String().

2. Яка різниця між одинарними (''), подвійними ("") та зворотніми (``) лапками в JavaScript?
2. Між ("") та ('') немає різниці. При використанні (``) ми можемо використовувати змінні: (`${variable}`).

3. Як перевірити, чи два рядки рівні між собою?
3. Ви можете порівнювати рядки на основі їх алфавітного порядку та довжини за допомогою операторів арифметичного порівняння. Результатом буде значення типу boolean.

4. Що пове-ртає Date.now()?
4. Date.now() — возвращает количество миллисекунд, прошедших с полуночи 1 января 1970 года по всемирному координированному времени.

5. Чим відрізняється Date.now() від new Date()?
5. new Date() — создает объект Date, представляющий текущую дату/время.
Date.now() — возвращает количество миллисекунд, прошедших с полуночи 1 января 1970 года по всемирному координированному времени.

Практичні завдання 
1. Перевірити, чи є рядок паліндромом. Створіть функцію isPalindrome, яка приймає рядок str і повертає true, якщо рядок є паліндромом 
(читається однаково зліва направо і справа наліво), або false в іншому випадку.

2. Створіть функцію, яка  перевіряє довжину рядка. Вона приймає рядок, який потрібно перевірити, максимальну довжину і повертає true, якщо рядок менше або дорівнює вказаній довжині, і false, якщо рядок довший. Ця функція стане в нагоді для валідації форми. Приклади використання функції:
// Рядок коротше 20 символів
funcName('checked string', 20); // true
// Довжина рядка дорівнює 18 символів
funcName('checked string', 10); // false

3. Створіть функцію, яка визначає скільки повних років користувачу. 
    Отримайте дату народження користувача через prompt. 
    Функція повина повертати значення повних років на дату виклику функцію.
*/

// 1.

// let firstString = "Pop";
// let secondString = "Hello";

// function isPalindrome(str) {
//     str = str.toLowerCase();

//     return str === str.split("").reverse().join("");
// }

// console.log(isPalindrome(firstString));
// console.log(isPalindrome(secondString));

// 2.

// const funcName = (str, value) => str.length <= value;

// console.log(funcName("checked string", 20));
// console.log(funcName("checked string", 10));

// 3.

const now = new Date();
let userBirthday = prompt("Введіть дату народження у форматі: YYYY-MM-DD");

const getUserBirthday = (birthday) => {
    birthday = new Date(birthday);
    const differenceYears = now.getFullYear() - birthday.getFullYear();
    const differenceMonths = now.getMonth() - birthday.getMonth();
    const differenceDays = now.getDate() - birthday.getDate();

    return differenceMonths < 0 ||
        (differenceMonths === 0 && differenceDays < 0)
        ? differenceYears - 1
        : differenceYears;
};

console.log(getUserBirthday(userBirthday));
