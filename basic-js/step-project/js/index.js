"use strict";

const DATA = [
    {
        "first name": "Олексій",
        "last name": "Петров",
        photo: "./img/trainers/trainer-m1.jpg",
        specialization: "Басейн",
        category: "майстер",
        experience: "8 років",
        description:
            "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
    },
    {
        "first name": "Марина",
        "last name": "Іванова",
        photo: "./img/trainers/trainer-f1.png",
        specialization: "Тренажерний зал",
        category: "спеціаліст",
        experience: "2 роки",
        description:
            "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
    },
    {
        "first name": "Ігор",
        "last name": "Сидоренко",
        photo: "./img/trainers/trainer-m2.jpg",
        specialization: "Дитячий клуб",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
    },
    {
        "first name": "Тетяна",
        "last name": "Мороз",
        photo: "./img/trainers/trainer-f2.jpg",
        specialization: "Бійцівський клуб",
        category: "майстер",
        experience: "10 років",
        description:
            "Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
    },
    {
        "first name": "Сергій",
        "last name": "Коваленко",
        photo: "./img/trainers/trainer-m3.jpg",
        specialization: "Тренажерний зал",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
    },
    {
        "first name": "Олена",
        "last name": "Лисенко",
        photo: "./img/trainers/trainer-f3.jpg",
        specialization: "Басейн",
        category: "спеціаліст",
        experience: "4 роки",
        description:
            "Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
    },
    {
        "first name": "Андрій",
        "last name": "Волков",
        photo: "./img/trainers/trainer-m4.jpg",
        specialization: "Бійцівський клуб",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
    },
    {
        "first name": "Наталія",
        "last name": "Романенко",
        photo: "./img/trainers/trainer-f4.jpg",
        specialization: "Дитячий клуб",
        category: "спеціаліст",
        experience: "3 роки",
        description:
            "Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
    },
    {
        "first name": "Віталій",
        "last name": "Козлов",
        photo: "./img/trainers/trainer-m5.jpg",
        specialization: "Тренажерний зал",
        category: "майстер",
        experience: "10 років",
        description:
            "Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
    },
    {
        "first name": "Юлія",
        "last name": "Кравченко",
        photo: "./img/trainers/trainer-f5.jpg",
        specialization: "Басейн",
        category: "спеціаліст",
        experience: "4 роки",
        description:
            "Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
    },
    {
        "first name": "Олег",
        "last name": "Мельник",
        photo: "./img/trainers/trainer-m6.jpg",
        specialization: "Бійцівський клуб",
        category: "майстер",
        experience: "12 років",
        description:
            "Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
    },
    {
        "first name": "Лідія",
        "last name": "Попова",
        photo: "./img/trainers/trainer-f6.jpg",
        specialization: "Дитячий клуб",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
    },
    {
        "first name": "Роман",
        "last name": "Семенов",
        photo: "./img/trainers/trainer-m7.jpg",
        specialization: "Тренажерний зал",
        category: "спеціаліст",
        experience: "2 роки",
        description:
            "Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
    },
    {
        "first name": "Анастасія",
        "last name": "Гончарова",
        photo: "./img/trainers/trainer-f7.jpg",
        specialization: "Басейн",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
    },
    {
        "first name": "Валентин",
        "last name": "Ткаченко",
        photo: "./img/trainers/trainer-m8.jpg",
        specialization: "Бійцівський клуб",
        category: "спеціаліст",
        experience: "2 роки",
        description:
            "Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
    },
    {
        "first name": "Лариса",
        "last name": "Петренко",
        photo: "./img/trainers/trainer-f8.jpg",
        specialization: "Дитячий клуб",
        category: "майстер",
        experience: "7 років",
        description:
            "Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
    },
    {
        "first name": "Олексій",
        "last name": "Петров",
        photo: "./img/trainers/trainer-m9.jpg",
        specialization: "Басейн",
        category: "майстер",
        experience: "11 років",
        description:
            "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
    },
    {
        "first name": "Марина",
        "last name": "Іванова",
        photo: "./img/trainers/trainer-f9.jpg",
        specialization: "Тренажерний зал",
        category: "спеціаліст",
        experience: "2 роки",
        description:
            "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
    },
    {
        "first name": "Ігор",
        "last name": "Сидоренко",
        photo: "./img/trainers/trainer-m10.jpg",
        specialization: "Дитячий клуб",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
    },
    {
        "first name": "Наталія",
        "last name": "Бондаренко",
        photo: "./img/trainers/trainer-f10.jpg",
        specialization: "Бійцівський клуб",
        category: "майстер",
        experience: "8 років",
        description:
            "Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
    },
    {
        "first name": "Андрій",
        "last name": "Семенов",
        photo: "./img/trainers/trainer-m11.jpg",
        specialization: "Тренажерний зал",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
    },
    {
        "first name": "Софія",
        "last name": "Мельник",
        photo: "./img/trainers/trainer-f11.jpg",
        specialization: "Басейн",
        category: "спеціаліст",
        experience: "6 років",
        description:
            "Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
    },
    {
        "first name": "Дмитро",
        "last name": "Ковальчук",
        photo: "./img/trainers/trainer-m12.png",
        specialization: "Дитячий клуб",
        category: "майстер",
        experience: "10 років",
        description:
            "Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
    },
    {
        "first name": "Олена",
        "last name": "Ткаченко",
        photo: "./img/trainers/trainer-f12.jpg",
        specialization: "Бійцівський клуб",
        category: "спеціаліст",
        experience: "5 років",
        description:
            "Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
    },
];

const cloneData = [...DATA];
const trainerCardContainer = document.querySelector(
    ".trainers-cards__container"
);
const trainerCardSample = document.querySelector("#trainer-card").content;
const modalTemplate = document.querySelector("#modal-template").content;
const sortSection = document.querySelector(".sorting");
const sortSectionList = document.querySelectorAll(".sorting__btn");
const sidebar = document.querySelector(".sidebar");
const filterButton = document.querySelector(".filters__submit");
const preloaderElement = document.querySelector(".content");
const savedData = sessionStorage.getItem("savedData");
const parsedData = JSON.parse(savedData);
const savedSortButton = sessionStorage.getItem("savedSortButton");
const savedCategoryFilter = sessionStorage.getItem("savedCategoryFilter");
const savedSpecializationFilter = sessionStorage.getItem(
    "savedSpecializationFilter"
);
let sortSectionId = 0;

// Блокировка скрола странички

const disableScroll = function (scrollPosition) {
    const body = document.body;

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.width = "100%";
    body.style.top = `-${scrollPosition}px`;
};

// Возобновление скрола странички

const enableScroll = function (scrollPosition) {
    const body = document.body;

    body.style.overflow = "";
    body.style.position = "";
    body.style.width = "auto";
    body.style.top = "";

    window.scrollTo(0, scrollPosition);
};

// Выведение карточек на экран

const addingCard = function (data) {
    const jsonData = JSON.stringify(data);
    sessionStorage.setItem("savedData", jsonData);
    preloaderElement.hidden = false;
    setTimeout(() => {
        preloaderElement.hidden = true;
    }, 1500);
    setTimeout(() => {
        data.forEach((card) => {
            const trainerCard = trainerCardSample.cloneNode(true);
            trainerCard.querySelector(".trainer__img").src = card.photo;
            trainerCard.querySelector(".trainer__name").innerText =
                card["last name"] + " " + card["first name"];
            trainerCardContainer.append(trainerCard);
        });
    }, 1500);
};

if (parsedData) {
    addingCard(parsedData);
} else {
    addingCard(DATA);
}

// Выведение меню сортировки и фильтрации карточек

sidebar.hidden = false;
sortSection.hidden = false;

// Выведение модульного окна для нажатой карточки тренера

trainerCardContainer.addEventListener("click", (event) => {
    const modal = modalTemplate.cloneNode(true);
    const modalClose = modal.querySelector(".modal__close");
    // const protocol = window.location.protocol;
    // const host = window.location.host;

    if (event.target.classList.contains("trainer__show-more")) {
        DATA.forEach((elem) => {
            // console.log(
            //     elem.photo.split(".")[1] + "." + elem.photo.split(".")[2]
            // );
            // console.log(
            //     event.target.parentElement
            //         .querySelector(".trainer__img")
            //         .src.split(
            //             location.origin +
            //                 location.pathname.split("/index.html")[0]
            //         )[1]
            // );
            // console.log(
            //     location.origin + location.pathname.split("/index.html")[0]
            // );
            if (
                elem.photo.split(".")[1] + "." + elem.photo.split(".")[2] ===
                event.target.parentElement
                    .querySelector(".trainer__img")
                    .src.split(
                        location.origin +
                            location.pathname.split("/index.html")[0]
                    )[1]
            ) {
                const scrollPosition = window.scrollY;
                disableScroll(scrollPosition);
                modal.querySelector(".modal__img").src = elem.photo;
                modal.querySelector(".modal__name").innerText =
                    elem["last name"] + " " + elem["first name"];
                modal.querySelector(
                    ".modal__point--category"
                ).innerText = `Категорія: ${elem.category}`;
                modal.querySelector(
                    ".modal__point--experience"
                ).innerText = `Досвід: ${elem.experience}`;
                modal.querySelector(
                    ".modal__point--specialization"
                ).innerText = `Напрям тренера: ${elem.specialization}`;
                modal.querySelector(".modal__text").innerText =
                    elem.description;

                document.body.append(modal);

                modalClose.addEventListener("click", () => {
                    enableScroll(scrollPosition);
                    const modalTemplate = document.querySelector(".modal");
                    modalTemplate.remove();
                });
            }
        });
    }
});

// Добавление идентификаторов для сортирующих кнопок

sortSectionList.forEach((elem) => {
    elem.dataset.id = sortSectionId++;
});

// Удаление карточек

const deleteCards = (trainerCardList) => {
    for (const elem of trainerCardList) {
        elem.remove();
    }
};

// Сортировка карточек

const sortCards = (data) => {
    if (savedSortButton) {
        sortSectionList[savedSortButton].classList.toggle(
            "sorting__btn--active"
        );
        sortSectionList[0].classList.toggle("sorting__btn--active");
    }

    sortSection.addEventListener("click", (event) => {
        const sortingButtonActive = document.querySelector(
            ".sorting__btn--active"
        );
        const trainerCardList = document.querySelectorAll(".trainer");
        const specializationInputAll = document.querySelector(
            ".filters__input[name='direction']"
        );
        const categoryInputAll = document.querySelector(
            ".filters__input[name='category']"
        );

        if (event.target.classList.contains("sorting__btn")) {
            if (!event.target.classList.contains("sorting__btn--active")) {
                const sortButtonActiveId = event.target.dataset.id;
                sessionStorage.setItem("savedSortButton", sortButtonActiveId);
                sortingButtonActive.classList.toggle("sorting__btn--active");
                event.target.classList.toggle("sorting__btn--active");

                switch (event.target.dataset.id) {
                    case "0": {
                        deleteCards(trainerCardList);
                        const DATA = cloneData;
                        addingCard(DATA);
                        break;
                    }
                    case "1": {
                        deleteCards(trainerCardList);
                        data.sort((a, b) =>
                            a["last name"].localeCompare(b["last name"])
                        );
                        addingCard(data);
                        break;
                    }
                    case "2": {
                        deleteCards(trainerCardList);
                        data.sort(
                            (a, b) =>
                                b.experience.split(" ")[0] -
                                a.experience.split(" ")[0]
                        );
                        addingCard(data);
                        break;
                    }
                }
                specializationInputAll.checked = true;
                categoryInputAll.checked = true;
            }
        }
    });
};

sortCards(DATA);

// Фильтрация карточек

const filterCards = (data) => {
    if (savedSpecializationFilter !== (null && "all")) {
        document.querySelector(
            `.filters__input[name='direction'][value='${savedSpecializationFilter}']`
        ).checked = true;
    }

    if (savedCategoryFilter !== (null && "all")) {
        document.querySelector(
            `.filters__input[name='category'][value='${savedCategoryFilter}']`
        ).checked = true;
    }

    filterButton.addEventListener("click", (event) => {
        const choosedSpecializationFilter = document.querySelector(
            ".filters__input[name='direction']:checked"
        );
        const choosedCategoryFilter = document.querySelector(
            ".filters__input[name='category']:checked"
        );
        const trainerCardList = document.querySelectorAll(".trainer");
        const choosedSpecializationFilterValue =
            choosedSpecializationFilter.value;
        const choosedCategoryFilterValue = choosedCategoryFilter.value;
        sessionStorage.setItem(
            "savedSpecializationFilter",
            choosedSpecializationFilterValue
        );
        sessionStorage.setItem(
            "savedCategoryFilter",
            choosedCategoryFilterValue
        );

        const filterCategories = (filteredData) => {
            switch (choosedCategoryFilter.value) {
                case "all": {
                    deleteCards(trainerCardList);
                    addingCard(filteredData);
                    break;
                }
                case "master": {
                    deleteCards(trainerCardList);
                    const DATA = filteredData.filter(
                        (elem) => elem.category === "майстер"
                    );
                    addingCard(DATA);
                    break;
                }
                case "specialist": {
                    deleteCards(trainerCardList);
                    const DATA = filteredData.filter(
                        (elem) => elem.category === "спеціаліст"
                    );
                    addingCard(DATA);
                    break;
                }
                case "instructor": {
                    deleteCards(trainerCardList);
                    const DATA = filteredData.filter(
                        (elem) => elem.category === "інструктор"
                    );
                    addingCard(DATA);
                    break;
                }
            }
        };

        event.preventDefault();

        switch (choosedSpecializationFilter.value) {
            case "all": {
                deleteCards(trainerCardList);
                filterCategories(data);
                break;
            }
            case "gym": {
                deleteCards(trainerCardList);
                const DATA = data.filter(
                    (elem) => elem.specialization === "Тренажерний зал"
                );
                filterCategories(DATA);
                break;
            }
            case "fight club": {
                deleteCards(trainerCardList);
                const DATA = data.filter(
                    (elem) => elem.specialization === "Бійцівський клуб"
                );
                filterCategories(DATA);
                break;
            }
            case "kids club": {
                deleteCards(trainerCardList);
                const DATA = data.filter(
                    (elem) => elem.specialization === "Дитячий клуб"
                );
                filterCategories(DATA);
                break;
            }
            case "swimming pool": {
                deleteCards(trainerCardList);
                const DATA = data.filter(
                    (elem) => elem.specialization === "Басейн"
                );
                filterCategories(DATA);
                break;
            }
        }
    });
};

filterCards(DATA);
