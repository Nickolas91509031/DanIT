const weekDay = +prompt("Введіть число від 1 до 7");

switch (weekDay) {
    case 1: {
        alert("Понеділок");
        break;
    }
    case 2: {
        alert("Вівторок");
        break;
    }
    case 3: {
        alert("Середа");
        break;
    }
    case 4: {
        alert("Чотвірг");
        break;
    }
    case 5: {
        alert("П/'ятниця");
        break;
    }
    case 6: {
        alert("Субота");
        break;
    }
    case 7: {
        alert("Тиждень");
        break;
    }
    default: {
        alert("Щось не те");
        break;
    }
}
