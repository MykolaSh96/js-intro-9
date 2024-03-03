
const {generateRandomNumber} = require('../utils/MathHelper.js');


console.log('--------Task 1---------');

for( i = 1; i <= 100; i++ ){
    if(i % 7 === 0)
     console.log(i);
    
}


console.log('--------Task 2---------');

for(i = 1; i <= 50; i++){
    if(i % 2 ===0 && i % 3 === 0) console.log(i);
}




console.log('--------Task 3---------');

for(i = 100; i >= 50; i--){
    if(i % 5 ===0) console.log(i);
}



console.log('--------Task 4---------');

for(i = 0; i <= 7; i++){
   console.log(i * i);
}



console.log('--------Task 5---------');

let sum = 0;

for(i = 1; i <= 10; i++ ){
sum += i;
}
console.log(sum);



console.log('--------Task 6---------');

let randomNumber = generateRandomNumber(1, 10);

console.log('The random number is =', randomNumber);
let sum1 = 1;
for(i = 1; i<=randomNumber; i++){
    sum1 *= i;
}

console.log("Factorial of", randomNumber, "->", sum1);



console.log('--------Task 7---------');//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let randomNumber1 = generateRandomNumber(1, 100);

for( i = 1; i <= randomNumber1; i++ ){
    if(randomNumber1 % 5 === 0 )
    console.log(`The random number is ${randomNumber1} and it took 
        {attempts} attempt/s to generate it.`);
}



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



console.log('--------Task 11---------');//?????????????????????????????????????????????????????????



let numbersArray = [10.5, 20.75, 70, 80, 15.75];
console.log(numbersArray);

for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
}





console.log('--------Task 12---------');//??????????????????????????????????????????????


const objects = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ];







console.log('--------Task 13---------');//??????????????????????????????????????????????????

const numbers2 = [ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ];

console.log(numbers2);
console.log(numbers2);
console.log(numbers2);





















