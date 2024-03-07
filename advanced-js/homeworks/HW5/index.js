/*

Завдання

Створити сторінку, яка імітує стрічку новин соціальної мережі Twitter.


Технічні вимоги:

При відкритті сторінки необхідно отримати з сервера список всіх користувачів та загальний список публікацій. Для цього потрібно надіслати GET запит на наступні дві адреси:

https://ajax.test-danit.com/api/json/users
https://ajax.test-danit.com/api/json/posts


Після завантаження всіх користувачів та їх публікацій необхідно відобразити всі публікації на сторінці.
Кожна публікація має бути відображена у вигляді картки (приклад в папці), та включати заголовок, текст, а також ім'я, прізвище та імейл користувача, який її розмістив.

На кожній картці повинна бути іконка або кнопка, яка дозволить видалити цю картку зі сторінки. При натисканні на неї необхідно надіслати DELETE запит на адресу https://ajax.test-danit.com/api/json/posts/${postId}. Після отримання підтвердження із сервера (запит пройшов успішно), картку можна видалити зі сторінки, використовуючи JavaScript.

Більш детальну інформацію щодо використання кожного з цих зазначених вище API можна знайти тут.
Цей сервер є тестовим. Після перезавантаження сторінки всі зміни, які надсилалися на сервер, не будуть там збережені. Це нормально, все так і має працювати.

Картки обов'язково мають бути реалізовані у вигляді ES6 класів. Для цього необхідно створити клас Card. При необхідності ви можете додавати також інші класи.


Необов'язкове завдання підвищеної складності

Поки з сервера під час відкриття сторінки завантажується інформація, показувати анімацію завантаження. Анімацію можна використовувати будь-яку. Бажано знайти варіант на чистому CSS без використання JavaScript.

Додати зверху сторінки кнопку Додати публікацію. При натисканні на кнопку відкривати модальне вікно, в якому користувач зможе ввести заголовок та текст публікації. Після створення публікації дані про неї необхідно надіслати в POST запиті на адресу:  https://ajax.test-danit.com/api/json/posts. Нова публікація має бути додана зверху сторінки (сортування у зворотному хронологічному порядку). Автором можна присвоїти публікації користувача з id: 1.

Додати функціонал (іконку) для редагування вмісту картки. Після редагування картки для підтвердження змін необхідно надіслати PUT запит на адресу https://ajax.test-danit.com/api/json/posts/${postId}.

*/

const usersUrl = "https://ajax.test-danit.com/api/json/users";
const postsUrl = "https://ajax.test-danit.com/api/json/posts";

const fetchPost = async () => {
    const res = await fetch(postsUrl)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    return res;
};

const fetchUser = async () => {
    const res = await fetch(usersUrl)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    return res;
};

class Card {
    constructor(posts, users) {
        this.posts = posts;
        this.users = users;
    }

    render() {
        let postId = 1;
        this.posts.forEach(({ body, title, userId }) => {
            document.body.insertAdjacentHTML(
                "beforeend",
                `
            <div class="post" data-id="${postId}">
            <div class="user-container" data-id="${userId}">
                <p class="name"></p><a class="user-name" href=""></a><a class="email" href=""></a><button class="btn-delete" data-id="${postId++}">delete</button>
            </div>
            <p class="title">Title: "${title}"</p>
            <p class="body">${body}</p>
            </div>
            `
            );
        });
    }

    renderUsersInfo() {
        this.users.forEach(({ name, username, email, id }) => {
            document
                .querySelectorAll(`.user-container[data-id="${id}"]`)
                .forEach((elem) => {
                    elem.querySelector(
                        ".name"
                    ).innerText = `Posted by: ${name}`;
                    elem.querySelector(".user-name").innerText = `@${username}`;
                    elem.querySelector(".email").innerText = `Email: ${email}`;
                });
        });
    }

    deletePost() {
        document.body.addEventListener("click", (event) => {
            if (event.target.className === "btn-delete") {
                fetch(
                    `https://ajax.test-danit.com/api/json/posts/${event.target.dataset.id}`,
                    {
                        method: "DELETE",
                    }
                )
                    .then((res) => res.json())
                    .catch(() => {
                        console.log("Hello World!");
                    });

                const post = document.querySelector(
                    `.post[data-id="${event.target.dataset.id}"]`
                );
                post.remove();
            }
        });
    }
}

(async () => {
    const posts = await fetchPost();
    const users = await fetchUser();
    new Card(posts, users).render();
    new Card(posts, users).renderUsersInfo();
    new Card(posts, users).deletePost();
    console.log(users);
    console.log(posts);
})();
