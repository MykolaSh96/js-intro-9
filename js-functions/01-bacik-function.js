
function startTheClass() {
    console.log('Hey students! Please send "here" in the chat!');
    console.log('RECAP!');
    console.log('Start with the new topic!');
}

startTheClass(); // invoke the function - execute or run the function
startTheClass();
startTheClass();


function generateRandomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomNumber(5, 3));
console.log(generateRandomNumber(1, 3));














let num1 = Math.floor(Math.random() * 10 -1 + 1 )+ 1;

let num2 = Math.floor(Math.random() * 10 -1 + 1 )+ 1;

let num3 = Math.floor(Math.random() * 10 -1 + 1 )+ 1;

let greatest_num = Math.max(num1, num2,num3);

let smallest_num =Math.min(num1, num2,num3); 

let difference = (greatest_num - smallest_num);

console.log(`${num1} ${num2} ${num3} -> ${difference}`);






function firstLast(str) {
    if (str.length < 2) {
        return str;
    }
    else {
        let f_charakter = str.charAt(0);
        let l_charakter = str.slice(-1);
        let firstLast = f_charakter + l_charakter;
        return firstLast;
    }
}
    console.log(firstLast("Tech"));
    console.log(firstLast("Global"));
    console.log(firstLast(""));
    console.log(firstLast("3"));

function hasFive(str){
let str1 = str.length > 5;
}