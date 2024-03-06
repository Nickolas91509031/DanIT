"use strict";

/*
Теоретичне питання

1. Поясніть своїми словами, що таке AJAX і чим він корисний при розробці Javascript.
1. AJAX - асинхронная технология, позволяющая без перезагрузки страницы получать и отсылать данные на веб-сервер.

Завдання
Отримати список фільмів серії Зоряні війни та вивести на екран список персонажів для кожного з них.

Технічні вимоги:

Надіслати AJAX запит на адресу https://ajax.test-danit.com/api/swapi/films та отримати список усіх фільмів серії Зоряні війни

Для кожного фільму отримати з сервера список персонажів, які були показані у цьому фільмі. Список персонажів можна отримати з властивості characters.

Як тільки з сервера буде отримана інформація про фільми, відразу вивести список усіх фільмів на екрані. Необхідно вказати номер епізоду, назву фільму, а також короткий зміст (поля episodeId, name, openingCrawl).

Як тільки з сервера буде отримано інформацію про персонажів будь-якого фільму, вивести цю інформацію на екран під назвою фільму.


Необов'язкове завдання підвищеної складності

Поки завантажуються персонажі фільму, прокручувати під назвою фільму анімацію завантаження. Анімацію можна використовувати будь-яку. Бажано знайти варіант на чистому CSS без використання JavaScript.

"characters": [
            "https://ajax.test-danit.com/api/swapi/people/1",
            "https://ajax.test-danit.com/api/swapi/people/2",
            "https://ajax.test-danit.com/api/swapi/people/3",
            "https://ajax.test-danit.com/api/swapi/people/4",
            "https://ajax.test-danit.com/api/swapi/people/5",
            "https://ajax.test-danit.com/api/swapi/people/6",
            "https://ajax.test-danit.com/api/swapi/people/7",
            "https://ajax.test-danit.com/api/swapi/people/8",
            "https://ajax.test-danit.com/api/swapi/people/9",
            "https://ajax.test-danit.com/api/swapi/people/10",
            "https://ajax.test-danit.com/api/swapi/people/12",
            "https://ajax.test-danit.com/api/swapi/people/13",
            "https://ajax.test-danit.com/api/swapi/people/14",
            "https://ajax.test-danit.com/api/swapi/people/15",
            "https://ajax.test-danit.com/api/swapi/people/16",
            "https://ajax.test-danit.com/api/swapi/people/18",
            "https://ajax.test-danit.com/api/swapi/people/19",
            "https://ajax.test-danit.com/api/swapi/people/81"
        ],
        "director": "George Lucas",
        "episodeId": 4,
        "openingCrawl": "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.\r\nDuring the battle, Rebel spies managed to steal secret plans to the Empire`s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.\r\nPursued by the Empire`s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy...",
        "planets": [
            "https://ajax.test-danit.com/api/swapi/planets/1",
            "https://ajax.test-danit.com/api/swapi/planets/2",
            "https://ajax.test-danit.com/api/swapi/planets/3"
        ],
        "producer": "Gary Kurtz, Rick McCallum",
        "releaseDate": "1977-05-25",
        "species": [
            "https://ajax.test-danit.com/api/swapi/species/1",
            "https://ajax.test-danit.com/api/swapi/species/2",
            "https://ajax.test-danit.com/api/swapi/species/3",
            "https://ajax.test-danit.com/api/swapi/species/4",
            "https://ajax.test-danit.com/api/swapi/species/5"
        ],
        "starships": [
            "https://ajax.test-danit.com/api/swapi/starships/2",
            "https://ajax.test-danit.com/api/swapi/starships/3",
            "https://ajax.test-danit.com/api/swapi/starships/5",
            "https://ajax.test-danit.com/api/swapi/starships/9",
            "https://ajax.test-danit.com/api/swapi/starships/10",
            "https://ajax.test-danit.com/api/swapi/starships/11",
            "https://ajax.test-danit.com/api/swapi/starships/12",
            "https://ajax.test-danit.com/api/swapi/starships/13"
        ],
        "name": "A New Hope",
        "url": "https://ajax.test-danit.com/api/swapi/films/1",
        "vehicles": [
            "https://ajax.test-danit.com/api/swapi/vehicles/4",
            "https://ajax.test-danit.com/api/swapi/vehicles/6",
            "https://ajax.test-danit.com/api/swapi/vehicles/7",
            "https://ajax.test-danit.com/api/swapi/vehicles/8"
        ]

Примітка
Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.
*/

const url = "https://ajax.test-danit.com/api/swapi/films";

const moviesContainer = document.createElement("ul");
document.body.appendChild(moviesContainer);

fetch(url)
    .then((res) => res.json())
    .catch((err) => {
        console.log(err);
    })
    .then((data) => {
        const movies = data.map((elem) => {
            const { episodeId, name, openingCrawl, characters } = elem;
            let characterList = [];

            const charactersPromises = characters.map((elem) => {
                return fetch(elem)
                    .then((res) => res.json())
                    .catch((err) => console.log(err))
                    .then(({ name }) => {
                        characterList.push(name);
                    });
            });
            return Promise.all(charactersPromises).then(() => {
                return { episodeId, name, openingCrawl, characterList };
            });
        });
        return Promise.all(movies);
    })
    .then((movies) => {
        movies.forEach((movie) => {
            const { episodeId, name, openingCrawl, characterList } = movie;
            console.log(characterList);
            moviesContainer.insertAdjacentHTML(
                "beforeend",
                `
                <li>
                <p class="episode-id">Эпизод: ${episodeId}</p>
                <p class="name">Название: ${name}</p>
                <p class="characters">Персонажи: <span>${characterList.join(
                    ", "
                )}</span></p>
                <p class="opening-crawl">Краткое описание: ${openingCrawl}</p>
                </li>
                `
            );
        });
    });