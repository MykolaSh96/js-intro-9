// 1. sring
let favCoffee = 'Mocha'; //"Mocha" or 'Mocha'
let itemName = 'Mouse';

// 2. number -> floating num & absolute munber
let favCoffeePrice = 4.00;
let itemPrice = 16.99;

let age = 25;


// 3. boolean

let b1 = true;
let b2 = false;

let isThereMocha = true;
let isItRainingToday = false;




// 4. undefined

let favBook;
concole.log(favBook); // undefined

// 5. null

let middleName = null;
console.log(middleName);

// 6. bigint 

let num1 = 9234567891234563453246324632463463463463263636266136n;
let num2 = BigInt(9234567891234563453246324632463463463463263636n);

console.log(num1 + 1n);
console.log(num2);

// 7. symbol

let star = Symbol('*');

console.log(star);

// typeof operator
console.log(typeof 5); // number
consolr.log(typeof 5n);//bigint
console.log(typeof true); //boolen
console.log(typeof !fslse);//boolean
console.log(typeof (3 == 3 && 5 !=5));//boolen -false
console.log(typeof '123');//srting
console.log(typeof null);//object
console.log(typeof undefined);//undefined
