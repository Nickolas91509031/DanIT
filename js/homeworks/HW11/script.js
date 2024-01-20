/* 
Теоретичні питання
1. Що таке події в JavaScript і для чого вони використовуються?
1. События в JavaScript - это сигналы от браузера, что что-то произошло. События нужны для написания логики использования сайта.

2. Які події миші доступні в JavaScript? Наведіть кілька прикладів.
2. Можно отслеживать одиночный и двойной клики, наведение мыши на объект и наоборот, клик правой кнопки мыши, кнопка мыши нажата или отпускается над элементом. Названия: click, dblclick, contextmenu, mouseover / mouseout, mousedown / mouseup, mousemove.

3. Що таке подія "contextmenu" і як вона використовується для контекстного меню?
3. Событие "contextmenu" - когда пользователь правой кнопкой мыши кликает на элемент. В веб-разработке это событие часто используют для управления показом контекстного меню или выполнения определенных действий при открытии меню.

Практичні завдання
1. Додати новий абзац по кліку на кнопку:
По кліку на кнопку <button id="btn-click">Click Me</button>, створіть новий елемент <p> з текстом "New Paragraph" і додайте його до розділу <section id="content">

2. Додати новий елемент форми із атрибутами:
Створіть кнопку з id "btn-input-create", додайте її на сторінку в section перед footer.
    По кліку на створену кнопку, створіть новий елемент <input> і додайте до нього власні атрибути, наприклад, type, placeholder, і name. та додайте його під кнопкою.
 */

// 1.

"use strict";

const section = document.querySelector("#content");
const firstParagraph = document.querySelector("#content>p");
const addParagraphBtn = document.querySelector("#btn-click");
const inputAttributes = {
    type: "input",
    placeholder: "Enter text",
    name: "input",
};

addParagraphBtn.addEventListener("click", () => {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = "New Paragraph";
    firstParagraph.after(newParagraph);
});

const btnInputCreate = document.createElement("button");
btnInputCreate.setAttribute("id", "btn-input-create");
btnInputCreate.innerText = "Create input";
section.append(btnInputCreate);

btnInputCreate.addEventListener("click", () => {
    const newInput = document.createElement("input");
    for (const key in inputAttributes) {
        newInput.setAttribute(key, inputAttributes[key]);
    }
    btnInputCreate.after(newInput);
});
