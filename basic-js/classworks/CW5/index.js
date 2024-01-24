// const square = (num) => num * num;

// console.log(square(5));

// const greetWithDefault = (name, message = "Hello") => {
//     return `${message} ${name}`;
// };

// console.log(greetWithDefault("John", "Hi"));
// console.log(greetWithDefault("John"));

const logName = (logger) => {
    let name = prompt("Впишите имя");
    logger(name);
};
