/*

Теоретичне питання
Поясніть своїми словами, як ви розумієте поняття асинхронності у Javascript

Завдання
Написати програму "Я тебе знайду по IP"

Технічні вимоги:

Створити просту HTML-сторінку з кнопкою Знайти по IP.
Натиснувши кнопку - надіслати AJAX запит за адресою https://api.ipify.org/?format=json, отримати звідти IP адресу клієнта.
Дізнавшись IP адресу, надіслати запит на сервіс https://ip-api.com/ та отримати інформацію про фізичну адресу.
під кнопкою вивести на сторінку інформацію, отриману з останнього запиту – континент, країна, регіон, місто, район.
Усі запити на сервер необхідно виконати за допомогою async await.


Примітка
Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.

*/

const btnIp = document.querySelector(".btn-ip");

btnIp.addEventListener("click", async () => {
    try {
        const fetchData = await fetch("https://api.ipify.org/?format=json");
        const data = await fetchData.json();
        console.log(data);
        try {
            const fetchIp = await fetch(
                `http://ip-api.com/json/${data.ip}?fields=1699839`
            );
            const dataIp = await fetchIp.json();
            console.log(dataIp);

            const { continent, country, regionName, city, district } = dataIp;

            document.body.insertAdjacentHTML(
                "beforeend",
                `
            <p>Континент: ${continent}</p>
            <p>Страна: ${country}</p>
            <p>Регион: ${regionName}</p>
            <p>Город: ${city}</p>
            <p>Район: ${district}</p>
            `
            );
        } catch (err) {
            console.log(err);
        }
    } catch (err) {
        console.log(err);
    }
});
