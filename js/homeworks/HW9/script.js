/* 
Теоретичні питання
1. Опишіть своїми словами що таке Document Object Model (DOM)
1. DOM - дерево, которое отображает теги HTML кода в виде узлов.

2. Яка різниця між властивостями HTML-елементів innerHTML та innerText?
2. InnerHTML читает теги и всю разметку HTML, а innerText - только текст внутри тегов.

3. Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?
3. К элементу страницы с помощью JS можно связаться через ID, class, tag. В JS есть: document. querySelector(". class") - возвращает первый соответствующий элемент на странице, или null , если ничего не найдет.

4. Яка різниця між nodeList та HTMLCollection?
4. HTMLCollection обновляется и является динамической, в то время, как nodeList - статическая колекция и не обновляется.

Практичні завдання
1. Знайдіть всі елементи з класом "feature", запишіть в змінну, вивести в консоль.
Використайте 2 способи для пошуку елементів. 
Задайте кожному елементу з класом "feature" вирівнювання тексту по - центру(text-align: center).

2. Змініть текст усіх елементів h2 на "Awesome feature".

3. Знайдіть всі елементи з класом "feature-title" та додайте в кінець тексту елементу знак оклику "!".
*/

// 1.

const featureElementByGet = document.getElementsByClassName("feature");
const featureElementByQuery = document.querySelectorAll(".feature");

console.log(featureElementByGet);
console.log(featureElementByQuery);

// 2.

const largeTextList = document.getElementsByTagName("h2");
const largeTextArray = Array.from(largeTextList);

console.log(largeTextArray);

largeTextArray.forEach((elem) => {
    console.log(elem);
    elem.innerText = "Awesome feature";
});

// 3.

const featureTitleElements = document.querySelectorAll(".feature-title");
console.log(featureTitleElements);

featureTitleElements.forEach((elem) => {
    elem.innerText += "!";
    console.log(elem.innerText);
});
