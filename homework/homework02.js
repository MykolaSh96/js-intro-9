// Task 1 

let str1 = "5";
let str2 = "2";

console.log(`The sum of 5 and 2 is = ${Number(str1) + Number(str2)}`);
console.log(`The produkt of 5 and 2 is = ${Number(str1) * Number(str2)}`);
console.log(`The division of 5 and 2 is = ${Number(str1) / Number(str2)}`);
console.log(`The subtraction of 5 and 2 is = ${Number(str1) - Number(str2)}`);
console.log(`The remainder of 5 and 2 is = ${Number(str1) % Number(str2)}`);
console.log(`The exponentiation of 5 and 2 is = ${Number(str1) ** Number(str2)}`);


//Task 2

let s1 = "200";
let s2 = "-50";

console.log(`The greatest value is = ${Math.max(Number(s1), Number(s2))}`);
console.log(`The smallest value is = ${Math.min(Number(s1), Number(s2))}`);
console.log(`The averege  is = ${Math.abs((Number(s1) + Number(s2)) / 2 )}`);
console.log(`The absolut difference  is = ${Math.abs(Number(s1) - Number(s2))}`);


//Task 3 

 
console.log(`The random number  = ${(Math.floor(Math.random() * (50 - 1 + 1)) + 1) }`); 
let t1 = (Math.floor(Math.random() * (50 - 1 + 1)) + 1);
let t2 = (Math.floor(Math.random() * (50 - 1 + 1)) + 1);
console.log(t1 , t2)
console.log(`The absolute difference between numbers is = ${t1 - t2}`);

//Task 4

console.log(`The random number  = ${(Math.floor(Math.random() * (50 - 1 + 1)) + 1) }`); 

let r1 = (Math.floor(Math.random() * (50 - 1 + 1)) + 1);
let r2 = (Math.floor(Math.random() * (50 - 1 + 1)) + 1);
let r3 = (Math.floor(Math.random() * (50 - 1 + 1)) + 1);
let r4 = (Math.floor(Math.random() * (50 - 1 + 1)) + 1);
let r5 = (Math.floor(Math.random() * (50 - 1 + 1)) + 1);

console.log(r1, r2, r3, r4, r5);

console.log(`The max value = ${Math.max(r1, r2, r3, r4, r5)}`);
console.log(`The min value = ${Math.min(r1, r2, r3, r4, r5)}`);


// Task 5


 
let n1 = (Math.floor(Math.random() * (100 - 50 + 1)) + 50);
let n2 = (Math.floor(Math.random() * (100 - 50 + 1)) + 50);
let n3 = (Math.floor(Math.random() * (100 - 50 + 1)) + 50);

console.log(`The number 1 = ${n1}`);
console.log(`The number 2 = ${n2}`);
console.log(`The number 3 = ${n3}`);
console.log(`The sum of numbers is = ${n1 + n2 + n3}`);

// Task 6

   let num1 =(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
   let num2 =(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
   let num3 =(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

   console.log(num1);
   console.log(num2);
   console.log(num3);

   console.log(num1 >= 25);
   console.log(num2 >= 25);
   console.log(num3 >= 25);


   //Task 7
   
   
   let name1 = 'David';

   console.log(`The leanght of the name is = ${name1.length}`);
   console.log(`The first character in the name is = ${name1.charAt(0)}`);  
   console.log(`The last character in the name is = ${name1.charAt(4)}`);  
   console.log(`The first 3 characters in the name is = ${name1.slice(0, 3)}`);  
   console.log(`The last 3 characters in the name is = ${name1.slice(-3)}`);  





