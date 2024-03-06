
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

















