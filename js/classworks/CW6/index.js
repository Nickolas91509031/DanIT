"use strict";

/*

const student = {
    name: "Nick",
    surname: "Marchenko",
    age: 19,
    faculty: "Economic",
    course: "M10-3",
};

const pe26 = {
    nickMarchenko: {
        name: "Nick",
        surname: "Marchenko",
        age: 19,
        faculty: "Economic",
        course: "M10-3",
    },

    stanislavChyrva: {
        name: "Stanislav",
        surname: "Chyrva",
        age: 34,
        fcaulty: "Economic",
        course: "M10-3",
    },
};

student.age = 20;
student.middleMark = 4.0;

for (let key in pe26) {
    console.log(pe26[key]);

    for (let studentKey in pe26[key]) {
        console.log(pe26[key][studentKey]);
    }
}

*/

const createStudent = () => {
    const userName = prompt("Введите имя пользователя");
    const userAge = prompt("Введите возраст пользователя");

    const student = {
        userName,
        userAge,

        showStudenData() {
            console.log(
                `I'm ${this.userName} and I'm ${this.userAge} years old`
            );
        },
    };
    return student;
};

const user1 = createStudent();
user1.showStudenData();
