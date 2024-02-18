/*
Теоретичне питання

1. Поясніть своїми словами, як ви розумієте, як працює прототипне наслідування в Javascript
1. Прототипное наследование работает как ссылка на объект. Когда мы хотим прочитать свойство из object, а оно отсутствует, JavaScript автоматически берёт его из прототипа.
Смысл прототипного наследования в том, что один объект можно сделать прототипом другого.

2. Для чого потрібно викликати super() у конструкторі класу-нащадка?
2. super – это ключевое слово, которое используется для вызова методов родительского класса в дочернем классе.

Завдання

1. Створити клас Employee, у якому будуть такі характеристики - name (ім'я), age (вік), salary (зарплата). Зробіть так, щоб ці характеристики заповнювалися під час створення об'єкта.
2. Створіть гетери та сеттери для цих властивостей.
3. Створіть клас Programmer, який успадковуватиметься від класу Employee, і який матиме властивість lang (список мов).
4. Для класу Programmer перезапишіть гетер для властивості salary. Нехай він повертає властивість salary, помножену на 3.
5. Створіть кілька екземплярів об'єкта Programmer, виведіть їх у консоль.


Примітка
Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.
*/

class Employee {
    constructor(name, age, salary) {
        this._name = name;
        this._age = age;
        this._salary = salary;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        newName = newName.trim();
        if (newName === "") {
            throw "Имя не может быть пустым";
        }
        this._name = newName;
    }
    get age() {
        return this._name;
    }
    set age(newAge) {
        newAge = newAge.trim();
        if (newAge === "") {
            throw "Возраст не может быть пустым";
        }
        this._age = newAge;
    }
    get salary() {
        return this._salary;
    }
    set salary(newSalary) {
        newSalary = newSalary.trim();
        if (newSalary === "") {
            throw "Зарплата не может быть пустой";
        }
        this._salary = newSalary;
    }
}

class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this._lang = lang;
    }
    get salary() {
        return this._salary * 3;
    }
}

const nick = new Programmer("Nick", 19, 2500, "German");
const job = new Programmer("Job", 24, 3000, "Ukranian");
const jack = new Programmer("Jack", 30, 6000, "English");

console.log(nick.salary); // 7500

console.log(nick);
console.log(job);
console.log(jack);
