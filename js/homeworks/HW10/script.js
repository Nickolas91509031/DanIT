/* 
Теоретичні питання
1. Які способи JavaScript можна використовувати для створення та додавання нових DOM-елементів?
1. Чтобы создать новый элемент можно использовать: createElement(elementName), createTextNode(text). Чтобы добавить элемент, нужно использовать: append(), appendChild(), insertBefore(newNode, referenceNode), elem.insertAdjacentHTML(where, html). 

2. Опишіть покроково процес видалення одного елементу (умовно клас "navigation") зі сторінки.

2.
const nav = document.createElement("nav");
nav.className = 'div';
nav.style.fontSize = "25px";
nav.innerText = "Hello!"
document.body.append(nav);
// Создали и добавили элемент с классом, стилями и текстом.

const body = document.querySelector("body");
// Нашли родительский элемент

console.log(nav);

body.removeChild(nav);
// Удалили из родительского элемента дочерний элемент

3. Які є методи для вставки DOM-елементів перед/після іншого DOM-елемента?
3. Для вставки элементов перед\после другого элемента используют такие способы: before, prepend, append, after. А также elem.insertAdjacentHTML(where, html), где в 'where' используется: beforebegin, afterbegin, beforeend, afterend.

Практичні завдання
1. Створіть новий елемент <a>, задайте йому текст "Learn More" і атрибут href з посиланням на "#". Додайте цей елемент в footer після параграфу.

2. Створіть новий елемент <select>. Задайте йому ідентифікатор "rating", і додайте його в тег main перед секцією "Features".
Створіть новий елемент <option> зі значенням "4" і текстом "4 Stars", і додайте його до списку вибору рейтингу.
Створіть новий елемент <option> зі значенням "3" і текстом "3 Stars", і додайте його до списку вибору рейтингу.
Створіть новий елемент <option> зі значенням "2" і текстом "2 Stars", і додайте його до списку вибору рейтингу.
Створіть новий елемент <option> зі значенням "1" і текстом "1 Star", і додайте його до списку вибору рейтингу.
 */

// 1.

const paragraph = document.querySelector("footer p");
const elementA = document.createElement("a");
elementA.innerText = "Learn More";
elementA.setAttribute("href", "#");
paragraph.after(elementA);

console.log(elementA);

// 2.

const elementSelect = document.createElement("select");
const sectionFeatures = document.querySelector(".features");
elementSelect.setAttribute("id", "rating");
sectionFeatures.before(elementSelect);

console.log(elementSelect);

let option;

for (let i = 1; i <= 4; i++) {
    option = document.createElement("option");
    option.value = `${i}`;
    option.innerText = `${i} ${setStar(i)}`;
    elementSelect.append(option);
}

function setStar(i) {
    return i === 1 ? " Star" : " Stars";
}
