/* Теоритичні питання:
1. В чому полягає відмінність localStorage і sessionStorage?
1. Данные записанные в localStorage не исчезают после перезагрузки страницы и перезапуска браузера, а данные записанные в sessionStorage в случае перезапуска браузера исчезнут.

2. Які аспекти безпеки слід враховувати при збереженні чутливої інформації, такої як паролі, за допомогою localStorage чи sessionStorage?
2. При сохранении информации в localStorage и sessionStorage нельзя записывать личные данные юзера.

3. Що відбувається з даними, збереженими в sessionStorage, коли завершується сеанс браузера?
3. В момент завершения сеанса браузера, все данные sessionStorage очищаются.

Практичне завдання:

Реалізувати можливість зміни колірної теми користувача.

Технічні вимоги:

- Взяти готове домашнє завдання HW-4 "Price cards" з блоку Basic HMTL/CSS.
- Додати на макеті кнопку "Змінити тему".
- При натисканні на кнопку - змінювати колірну гаму сайту (кольори кнопок, фону тощо) на ваш розсуд. 
    При повторному натискання - повертати все як було спочатку - начебто для сторінки доступні дві колірні теми.
- Вибрана тема повинна зберігатися після перезавантаження сторінки.

Примітки: 
- при виконанні завдання перебирати та задавати стилі всім елементам за допомогою js буде вважатись помилкою;
- зміна інших стилів сторінки, окрім кольорів буде вважатись помилкою.

Додаткові матеріали: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties.
*/

"use strict";

const toggleButton = document.querySelector(".toggle-theme-btn");
const savedTheme = sessionStorage.getItem("toggleClass");

document.body.className = savedTheme;

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    sessionStorage.setItem("toggleClass", document.body.className);
});
