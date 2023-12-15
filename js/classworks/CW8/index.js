// const textLine = "I try to find some tea";

// const upperCaseAndDoubly = (simbol) => {
//     console.log(simbol.toUpperCase());
// };

// upperCaseAndDoubly(textLine);

const addZeroToStart = (str) => {
    if (str.toString().length === 1) {
        return `0${str}`;
    }
    return str;
};

const now = new Date();
console.log(now);
console.log(
    `${addZeroToStart(now.getHours())}:${addZeroToStart(
        now.getMinutes()
    )}:${addZeroToStart(now.getSeconds())} ${addZeroToStart(
        now.getDate()
    )}.${addZeroToStart(now.getMonth() + 1)}.${now.getFullYear()}`
);
