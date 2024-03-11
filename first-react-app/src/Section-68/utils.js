function d6() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice(num) {
   return Array.from({length: num}, () => d6());
}

function sum(arr) {
    return arr.reduce((prev, curr) => prev + curr);
}

export {d6, rollDice, sum};