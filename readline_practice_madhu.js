const readline = require('readline-sync');

let info = readline.question("Question text... ");
let name = readline.question("What is your name? ");

console.log(`Hello:${name} Nice to meet you.`);


const answer1 = readline.question("1. What is the data type of a variable declared with 'let example = true'? ");
const answer2 = readline.question("2. What keyword is used to define a function in JavaScript? ");
const answer3 = readline.question("3. What is the result of '5' + 3 in JavaScript? ");
const answer4 = readline.question("4. What symbol is used for logical AND operation in JavaScript? ");
const answer5 = readline.questionInt("5. What is the output of 20 / 5? (Enter a number) ");
console.log(`1. Data type of 'let example = true': ${answer1}`);
console.log(`2. Function declaration keyword: ${answer2}`);
console.log(`3. Result of '5' + 3: ${answer3}`);
console.log(`4. Logical AND operator: ${answer4}`);
console.log(`5. Result of 20 / 5: ${answer5}`);
