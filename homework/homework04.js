
const {generateRandomNumber} = require('../utils/MathHelper.js');


console.log('--------Task 1---------');

for( let i = 1; i <= 100; i++ ){
    if(i % 7 === 0)
     console.log(i);
    
}


console.log('--------Task 2---------');

for( let i = 1; i <= 50; i++){
    if(i % 2 ===0 && i % 3 === 0) console.log(i);
}




console.log('--------Task 3---------');

for( let i = 100; i >= 50; i--){
    if(i % 5 ===0) console.log(i);
}



console.log('--------Task 4---------');

for( let i = 0; i <= 7; i++){
   console.log(i * i);
}



console.log('--------Task 5---------');

let sum = 0;

for(let i = 1; i <= 10; i++ ){
sum += i;
}
console.log(sum);



console.log('--------Task 6---------');

let randomNumber = generateRandomNumber(1, 10);

console.log('The random number is =', randomNumber);
let sum1 = 1;
for( let i = 1; i<=randomNumber; i++){
    sum1 *= i;
}

console.log("Factorial of", randomNumber, "->", sum1);



console.log('--------Task 7---------');

let randomNumber1 = generateRandomNumber(1, 100);
let attempts = 0;
for(let i = 1; i <= randomNumber1; i++ ){
    if(randomNumber1 % 5 === 0 );
    attempts++;
  
}
console.log(`The random number is ${randomNumber1} and it took 
        ${attempts} attempt/s to generate it.`);






console.log('--------Task 8---------');

const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania' ];

console.log(countries); // [ 'Germany', 'Argentina', 'Ukraine', 'Romania' ]

console.log(countries.sort());// [ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]




console.log('--------Task 9---------');


const cartoonDogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(cartoonDogs);
console.log(cartoonDogs.includes('Pluto'));




console.log('--------Task 10---------');

const cartoonCats = ['Garfield', 'Tom', 'Sylvester', 'Azral'];

console.log(cartoonCats.sort());
console.log(cartoonCats.includes('Garfield' && 'Felix'));



console.log('--------Task 11---------');


let numbersArray = [10.5, 20.75, 70, 80, 15.75];
console.log(numbersArray);

for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
}




console.log('--------Task 12---------');

const items = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
let startsWithBorPCount = 0;
let containsBookOrPenCount = 0;

for (const item of items) {

    console.log(item);

    
    if (item.charAt(0).toLowerCase() === 'b' || item.charAt(0).toLowerCase() === 'p') {
        startsWithBorPCount++;
    }

    if (item.toLowerCase().includes('book') || item.toLowerCase().includes('pen')) {
        containsBookOrPenCount++;
    }
}

console.log("Elements starting with 'B' or 'P' = " + startsWithBorPCount);
console.log("Elements having 'book' or 'pen' = " + containsBookOrPenCount);





console.log('--------Task 13---------');

const numbers2 = [ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ];

countElements1 = 0;
countElements2 = 0;
countElements3 = 0;

for(const num of numbers2){

    if(num > 10 ){
        countElements1++;
    
    }
    if(num < 10){
        countElements2++;
    }
    if(num === 10 ){
        countElements3++;
    }

}


console.log("Elements that are more than 10 =", countElements1);
console.log("Elements that are less than 10 =", countElements2);
console.log("Elements that are 10 = ", countElements3);




console.log('--------Task 14---------');

const num1 = [5, 8, 13, 1, 2];
const num2 = [9, 3, 67, 1, 0];

console.log("1st array is = ", num1);
console.log("2nd array is = ", num2);

const num3 = [];

for(let i = 0; i < num1.length; i++){
num3.push(Math.max(num1[i], num2[i]));
}

console.log("3rd array is = ", num3);




console.log('--------Task 15---------');


function firstDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return -1;
}


console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));  
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));   
console.log(firstDuplicate([5, '5', 3, 7, 4]));     
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));  
console.log(firstDuplicate([1, 2, 3]));           
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));  



// Task16
/*
Requirement:
Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.

NOTE: Make your code dynamic that works for any array and 
return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data 
types of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]) -> [ 'foo', 'a' ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -> [ ]
*/
function getDuplicates(array) {

    // const duplicates = [];
    // for (let i = 0; i < array.length; i++) {
    //     for (let j = i + 1; j < array.length; j++) {
    //         if (array[i] === array[j] && !duplicates.includes(array[i])) duplicates.push(array[i]);
    //     }
    // }

    const container = [];
    const duplicates = [];

    for(let obj of array){
        if(container.includes(obj) && !duplicates.includes(obj)) duplicates.push(obj)
        else container.push(obj)
    }
    return duplicates;



};

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicates([1, 2, 5, 0, 7]));
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo']));
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a']));


// Task17
/*
Requirement:
Write a function named as reverseStringWords() which takes a string 
as an argument and returns string back with each word separately 
reversed when invoked.

NOTE: Make your code dynamic that works for any string. Make sure you 
consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World")  -> "olleH dlroW"
reverseStringWords("I like JavaScript")  -> "I ekil tpircSavaJ"
reverseStringWords("Hello")  -> "olleH"
reverseStringWords("")  -> ""
reverseStringWords("    ")  -> ""
*/
function reverseStringWords(str) {

    let strAsArr = str.trim().split(" ");

    for(let i = 0; i < strAsArr.length; i++) {
        strAsArr[i] = strAsArr[i].split("").reverse().join("");
    }

    return strAsArr.join(" ");
}

console.log(reverseStringWords("Hello World"));


// Task18
/*
Requirement:
Write a function named as getEvens() which takes 2 number 
arguments and returns all the even numbers as an array 
stored from smallest even number to greatest even number 
when invoked.

NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no even numbers in the 
range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getEvens(2, 7) -> [ 2, 4, 6 ]
getEvens(17, 5) -> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4) -> [ 4 ]
getEvens(3, 3) -> [ ]
*/
function getEvens(num1, num2){

    let evens = [];
    let greaterNumber = Math.min(num1, num2);
    let smallerNumber = Math.max(num1, num2)

    for(let i = smallerNumber; i <= greaterNumber; i++){
        if(i % 2 === 0) evens.push(i);
    };

    return evens;
};

console.log(getEvens(2,7));
console.log(getEvens(17,5));
console.log(getEvens(4,4));
console.log(getEvens(3,3));


// Task19
/*
Requirement:
Write a function named as getMultipleOf5() which takes 2 
number arguments and returns all the numbers divisible by 5 
as an array stored from first found match to last found match 
when invoked.

NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no numbers divisible by 5 
in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getMultipleOf5(3, 17) -> [ 5, 10, 15]
getMultipleOf5(23, 5) -> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5) -> [ 5 ]
getMultipleOf5(2, 4) -> [ ]
*/
function getMultipleOf5(num1, num2) {

    let divisibleBy5 = [];

    for(i = Math.max(num1, num2); i >= Math.min(num1, num2); i--){
        if(i % 5 === 0) divisibleBy5.push(i);
    };

    return divisibleBy5;
};

console.log(getMultipleOf5(3,17));
console.log(getMultipleOf5(23,5));
console.log(getMultipleOf5(5,5));
console.log(getMultipleOf5(2,4));


// Task20
/*
Requirement:
Write a function named as fizzBuzz() which takes 2 number 
arguments and returns a string composed with below 
requirements when invoked.
•You need to find all the numbers within the range of given 2 
numbers (both inclusive) and store them in a string from 
smallest to greatest number with a ' | ' separator for each 
number.

•You will need to convert numbers divisible by 3 to 'Fizz'
•You will need to convert numbers divisible by 5 to 'Buzz'
•You will need to convert numbers divisible by both 3 and 5 
to 'FizzBuzz'
•The rest will stay the same.

NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.

Examples:
fizzBuzz(13, 18) -> 13 | 14 | FizzBuzz | 16 | 17 | Fizz 
fizzBuzz(12, 5) -> Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz
fizzBuzz(5, 5) -> Buzz
fizzBuzz(9, 6) -> Fizz | 7 | 8 | Fizz
*/
function fizzBuzz(num1, num2) {

    let arr = [];

    for(let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++){
        if(i % 5 === 0 && i % 3 === 0) arr.push('FizzBuzz');
        else if(i % 5 === 0) arr.push('Buzz');
        else if(i % 3 === 0) arr.push('Fizz');
        else arr.push(i);
    };

    return arr.join(" | ");
};

console.log(fizzBuzz(13,18));
console.log(fizzBuzz(12,5));
console.log(fizzBuzz(5,5));
console.log(fizzBuzz(9,6));













