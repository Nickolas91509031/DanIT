/*
1. Наведіть кілька прикладів, коли доречно використовувати в коді конструкцію try...catch.
1. Если сайт получает данные от третьего лица, нужно сделать проверку, в случае, если "catch" не найдет нужного, скрипт остановится. try – определяет блок кода, в котором может произойти исключение; catch – определяет блок кода, в котором происходит обработка исключения.

2. Виведіть цей масив на екран у вигляді списку (тег ul – список має бути згенерований за допомогою Javascript).

На сторінці повинен знаходитись div з id="root", куди і потрібно буде додати цей список (схоже завдання виконувалось в модулі basic).

Перед додаванням об'єкта на сторінку потрібно перевірити його на коректність (в об'єкті повинні міститися всі три властивості - author, name, price). Якщо якоїсь із цих властивостей немає, в консолі має висвітитися помилка із зазначенням - якої властивості немає в об'єкті.

Ті елементи масиву, які не є коректними за умовами попереднього пункту, не повинні з'явитися на сторінці.

Примітка
Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.
*/

const books = [
    {
        author: "Люсі Фолі",
        name: "Список запрошених",
        price: 70,
    },
    {
        author: "Сюзанна Кларк",
        name: "Джонатан Стрейндж і м-р Норрелл",
    },
    {
        name: "Дизайн. Книга для недизайнерів.",
        price: 70,
    },
    {
        author: "Алан Мур",
        name: "Неономікон",
        price: 70,
    },
    {
        author: "Террі Пратчетт",
        name: "Рухомі картинки",
        price: 40,
    },
    {
        author: "Анґус Гайленд",
        name: "Коти в мистецтві",
    },
];

class BookError extends Error {
    constructor(elem) {
        super(`${elem} doesn't exist`);
        this.name = "BookError";
    }
}

books.forEach((elem) => {
    const container = document.querySelector("#root");
    try {
        if (elem.author && elem.name && elem.price) {
            container.insertAdjacentHTML(
                "beforeend",
                `
                <ul>
                    <li>${elem.author}</li>
                    <li>${elem.name}</li>
                    <li>${elem.price}</li>
                </ul>
            `
            );
        } else if (!elem.author) {
            throw new BookError("author");
        } else if (!elem.name) {
            throw new BookError("name");
        } else if (!elem.price) {
            throw new BookError("price");
        }
    } catch (err) {
        if (err.name === "BookError") {
            console.log(err);
        } else {
            throw err;
        }
    }
});
