console.log('--------Task1--------');

/*
Requirement:

Write a function named noSpace() which takes a string as argument and returns a new string with all the spaces removed.

Examples:
noSpace("") 			->  ""
noSpace("Javascript") 		->  "Javascript"
noSpace("    Hello   ") 		-> "Hello"
noSpace(" Hello World   ") 	-> "HelloWorld”
noSpace("Tech Global") 		-> "TechGlobal"
*/

const noSpace = (string) => {
   return string.trim().split('').filter(char => char !== ' ').join('');
};

console.log(noSpace(""));
console.log(noSpace("Javascript"));
console.log(noSpace("    Hello   ") );
console.log(noSpace(" Hello World   ") );
console.log(noSpace("Tech Global") );



console.log('--------Task2--------');
/*
Requirement:
Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.

Examples:
replaceFirstLast("") 		->  ""
replaceFirstLast("Hello") 		->  "oellH"
replaceFirstLast("Tech Global") 	-> "lech GlobaT"
replaceFirstLast("A") 		-> ""
replaceFirstLast("    A      ") 	-> ""
*/

function replaceFirstLast(str) {
   str = str.trim();

   if (str.length < 2) {
       return "";
   }
else
   return str.charAt(str.length - 1) + str.substring(1, str.length - 1) + str.charAt(0);
}

// 2nd Solution
const replaceFirstLast = (string) => {
   if(string.trim().length < 2) return "";
   let middle = string.slice(1, string.length - 1);
   return string[string.length-1] + middle + string[0];
  };



console.log(replaceFirstLast(""));  
console.log(replaceFirstLast("Hello"));  
console.log(replaceFirstLast("Tech Global"));  
console.log(replaceFirstLast("A")); 
console.log(replaceFirstLast("    A      "));  




console.log('--------Task3--------');
/*
Requirement:
Write a function named hasVowel() which takes a string argument and returns true if the string has a vowel,
returns false if the string doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.

Examples:
hasVowel("") 		-> false
hasVowel("Javascript") 		-> true
hasVowel("Tech Global") 		-> true
hasVowel("1234") 		-> false
hasVowel("ABC") 		-> true
*/


function hasVowel(str) {
   str = str.toLowerCase();
   let vowels = 'aeiou';
   for (const char of str) {
       if (vowels.includes(char)) {
           return true;
       }
   }
   return false;
}


// 2nd Solution 

const hasVowel = (string) => {
   const stringArr = string.toLowerCase().split('');
   return stringArr.some(x => 'aeoui'.includes(x))
};

console.log(hasVowel("")); 
console.log(hasVowel("Javascript")); 
console.log(hasVowel("Tech Global")); 
console.log(hasVowel("1234")); 
console.log(hasVowel("ABC")); 
console.log(hasVowel("javaskript")); 

 

console.log('--------Task4--------');
/*
Requirement:

Write a function named checkAge() which takes a number argument to be 
considered as the yearOfBirth and returns a message below based on the given 
year.
If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.

Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID"

*/
function checkAge(yearOfBirth){
   let curentYear = 2023;
   let age = curentYear - yearOfBirth;
   
   if( age < 0 || age > 120) return 'AGE IS NOT VALID';
   else if (age < 16) return 'AGE IS NOT ALLOWED';
   else return 'AGE IS ALLOWED';
   }
   
   // 2nd Solution

   const checkAge = (yearOfBirth) => {
   let currentYear = new Date().getFullYear();
   let age = currentYear - yearOfBirth;  
   if(age >= 0 && age < 16) return "AGE IS NOT ALLOWED";
   else if(age >= 16 && age <120) return "AGE IS ALLOWED";
   else return "AGE IS NOT VALID";
};
   
   console.log(checkAge(1999));
   console.log(checkAge(2015));
   console.log(checkAge(2007));
   console.log(checkAge(2050));
   console.log(checkAge(1920));
   console.log(checkAge(1800));



console.log('--------Task5--------');
/*
Requirement:
Write a function named averageOfEdges() which takes three number 
arguments and will return average of min and max numbers .

Examples:
averageOfEdges(0, 0, 0)  -> 0
averageOfEdges(0, 0, 6)  -> 3
averageOfEdges(-2, -2, 10)  -> 4
averageOfEdges(-3, 15, -3)  -> 6
averageOfEdges(10, 13, 20)  -> 15
*/
function averegeOfEdges(num1, num2, num3){
   let max = Math.max(num1, num2, num3);
   let min = Math.min(num1, num2, num3);

   let averege = (max + min)/ 2;

   return averege;
}

// 2nd Solution with arrow function

const averageOfEdges = (num1, num2, num3) => {
   let min = Math.max(num1, num2, num3);
   let max = Math.min(num1, num2, num3);
   average = (min + max) / 2;
   return average;
};


console.log(averegeOfEdges(0, 0, 0));
console.log(averegeOfEdges(0, 0, 6));
console.log(averegeOfEdges(-2, -2, 10));
console.log(averegeOfEdges(-3, 15, -3));
console.log(averegeOfEdges(10, 13, 20));



console.log('--------Task6--------');

/*
Requirement:
Write a function named noA() which takes an array of strings as argument and 
will return a new array with all elements starting with "A" or "a" replaced with 
"###".

Examples:
noA(["javascript", "hello", "123", "xyz"])  ->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"])  ->  ["###", "123", "###", 
"javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"])  -> ["###", "###", "###", "###", 
"###"]
*/

function noA(arr){
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
   if(arr[i][0].toLowerCase() === 'a'){
      newArr.push("###");
   }else {
      newArr.push(arr[i]);
   }
  }
  return newArr;
}

// 2nd Solution with arrow function 

const noA = (strArray) => strArray.map(x => {
   if(x.toLowerCase().startsWith('a')) return '###';
   else return x;
});


console.log(noA(["javascript", "hello", "123", "xyz"])); 
console.log(noA(["apple", "123", "ABC", "javascript"]));  
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));



console.log('--------Task7--------');
/*
Requirement:
Write a function named no3and5() which takes an array of integer numbers as 
argument and will return a new array with elements replaced by conditions 
below.

If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101

Examples:
no3and5([7, 4, 11, 23, 17])  -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6])  -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15])  -> [99, 11, 100, 13, 14, 101]
*/

function no3and5(arr){
   let numbers = [];

   for(let i = 0; i < arr.length; i++ ){
      if(arr[i] % 3 === 0 && arr[i] % 5 === 0) numbers.push(101);
      else if(arr[i] % 3 === 0) numbers.push(100);
      else if(arr[i] % 5 === 0) numbers.push(99);
      else numbers.push(arr[i]);
   }
   return numbers;
}

//Solution with for/of loop
const no3And5 = (numArray) => {
   const newArray = [];
   for(const x of numArray){
       if(x % 15 === 0) newArray.push('101');
       else if(x % 5 === 0) newArray.push('99');
       else if(x % 3 === 0) newArray.push('100');
       else newArray.push(x);
      };
      return newArray;
  };

  //Solution with map() method
const no3and5 = (numArray) => {
   return numArray.map(x => {
          if(x % 15 === 0) return 101;
          if(x % 5 === 0) return 99;
          if(x % 3 === 0) return 100;
          else return x;
      });
  };
  
console.log(no3and5([7, 4, 11, 23, 17]));// -> [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6]));// -> [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15]));// -> [99, 11, 100, 13, 14, 101]


console.log('--------Task8--------');
/*
Requirement:
Write a function named countPrimes() which takes an array of integer 
numbers as argument and will return the number of the prime numbers in the 
given array.

NOTE: Prime number is a number that can be divided only by 1 and itself .
NOTE: Negative numbers cannot be prime .
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc. 
NOTE: Smallest prime number is 2.

Examples:
countPrimes([-10, -3, 0, 1])  -> 0
countPrimes([7, 4, 11, 23, 17])  -> 4
countPrimes([41, 53, 19, 47, 67])  -> 5
*/

const countPrimes = (array) => {
   let count = 0;
   for(const number of array){
       if(number < 2) continue;
       if(number === 2 || number === 3) count++;
       if(number % 2 === 0 || number % 3 === 0) continue;
           
       for (let i = 5; i < number; i += 2) {
           if(number % i === 0) continue;  
           }
       count++;
   };
   return count;
};

console.log(countPrimes([-10, -3, 0, 1]));
console.log(countPrimes([7, 4, 11, 23, 17]));
console.log(countPrimes([41, 53, 19, 47, 67]));
console.log(countPrimes([2, 3]));


console.log('--------Task9--------');
/*

Requirement:
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.


Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])  -> [10, 20, 35, 60, 
70]
removeDuplicates([1, 2, 5, 2, 3])  -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])  -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])  -> ["abc", "xyz", 
"123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"])  -> ["1", "2", "3"]
*/

function removeDuplicates(arr){
   let newArr = [];
   for(let i = 0; i < arr.length; i++){
      if(!newArr.includes(arr[i])){
         newArr.push(arr[i]);
      }
   }
return newArr;
}
 
// Second solution with array function 

// const removeDuplicates = (array) => {
//    let newArray = [];
//    for(const element of array){
//        if ((array.indexOf(element) === array.lastIndexOf(element))) newArray.push(element);
//        if((array.indexOf(element) !== array.lastIndexOf(element)) && !(newArray.includes(element))) newArray.push(element);
//    }
//    return newArray;
// };

 console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); // [10, 20, 35, 60, 70]
 console.log(removeDuplicates([1, 2, 5, 2, 3])); // [1, 2, 5, 3]
 console.log(removeDuplicates([0, -1, -2, -2, -1])); // [0, -1, -2]
 console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); // ["abc", "xyz", "123", "ab", "ABC"]
 console.log(removeDuplicates(["1", "2", "3", "2", "3"])); // ["1", "2", "3"]



// 3rd  solution
function removeDuplicates(arr) {
   return [...new Set(arr)];
 }
 
 console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); // [10, 20, 35, 60, 70]
 console.log(removeDuplicates([1, 2, 5, 2, 3])); // [1, 2, 5, 3]
 console.log(removeDuplicates([0, -1, -2, -2, -1])); // [0, -1, -2]
 console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); // ["abc", "xyz", "123", "ab", "ABC"]
 console.log(removeDuplicates(["1", "2", "3", "2", "3"])); // ["1", "2", "3"]
 
console.log('--------Task10--------');
/*
Requirement: 
Write a method named isDateFormatValid() that takes a 
string as an argument and returns true if the given date is 
valid or returns false otherwise.

Expected Format: nn/nn/nnnn
So, it must be presented as 
<2digits>/<2digits>/<4digits>

Examples:
isDateFormatValid("")  -> false
isDateFormatValid("15/30/2020")  -> false
isDateFormatValid("10-30-2020 ")  -> false
isDateFormatValid("10.30.2020")  -> false
isDateFormatValid("5/30/2020")  -> false
isDateFormatValid("05/30/2020 ")  -> true
isDateFormatValid("10/2/2020")  -> false
isDateFormatValid("10/02/2020 ")  -> true
*/
const isDateFormatValid = (string) => {
   if(string.length !== 10) return false;

   let beginning = string.split('/')[0];
   let middle = string.split('/')[1];
   let end = string.split('/')[2];

   if(beginning.length !== 2 || middle.length !== 2 || end.length !== 4) return false;
   if((beginning >= 1 && beginning <= 12) && (middle >= 1 && middle <= 31) && (end >= 0 && end <= 9999)) return true;
   return false;
   
};

isDateFormatValid("");  //  false
isDateFormatValid("15/30/2020"); //  false
isDateFormatValid("10-30-2020 "); // false
isDateFormatValid("10.30.2020");//   false
isDateFormatValid("5/30/2020"); //   false
isDateFormatValid("05/30/2020 ");//  true
isDateFormatValid("10/2/2020"); //   false
isDateFormatValid("10/02/2020 "); // true


console.log('--------Task11--------');
/*
Requirement: 
Write a method named secondMax() takes an array argument 
and returns the second max number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second max 
number.

NOTE: Be careful when there is multiple max numbers.

Examples:
secondMax([7, 4, 4, 4, 23, 23, 23])  -> 7
secondMax([3, 4, 5, 6])  -> 5
secondMax([10])  -> 10
*/
const secondMax = (array) => {
   let newArray = [];
   if(array.length === 1) return array[0];

   for(const element of array){
       if((array.indexOf(element) === array.lastIndexOf(element))) newArray.push(element);
       if((array.indexOf(element) !== array.lastIndexOf(element)) && !(newArray.includes(element))) newArray.push(element);
   };

   newArray.splice(newArray.indexOf(Math.max(...newArray)), 1);
   return Math.max(...newArray);
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMax([3, 4, 5, 6]));
console.log(secondMax([10]));




console.log('--------Task12--------');
/*
Requirement: 
Write a method named secondMin() takes an array argument 
and returns the second min number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second min 
number.
NOTE: Be careful when there is multiple min numbers.
Examples:
secondMax([7, 4, 4, 4, 23, 23, 23])  -> 7
secondMax([3, 4, 5, 6])  -> 4
secondMax([10])  -> 10
*/
const secondMin = (array) => {
   let newArray = [];
   if(array.length === 1) return array[0];

   for(const element of array){
       if((array.indexOf(element) === array.lastIndexOf(element))) newArray.push(element);
       if((array.indexOf(element) !== array.lastIndexOf(element)) && !(newArray.includes(element))) newArray.push(element);
   };

   newArray.splice(newArray.indexOf(Math.min(...newArray)), 1);
   return newArray.reduce((prev, curr) => prev < curr ? prev : curr);
}

console.log(secondMin([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMin([3, 4, 5, 6]));
console.log(secondMin([10]));


console.log('--------Task13--------');
/*
Requirement: 
Write a method named mostRepeated() takes an array argument and 
returns the most counted element from the array.
NOTE: Assume that you will not be given empty array and the count of one 
element will always be more than the others.

Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])  -> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])  -> 
"pen"
mostRepeated([10])  -> 10
mostRepeated(["TechGlobal"])  -> 
"TechGlobal
*/
const mostRepeated = (array) => {
   let highestCount = 0;
   let mostReptElement;
   for(let i = 0; i < array.length; i++){
       let count = 0;
       for(let j = 0; j < array.length; j++){
           if(array[i] === array[j]) count++;
       }
       if(count > highestCount) {
       highestCount = count;
       mostReptElement = array[i];
   }
       return mostReptElement;
   }
}


console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]));
console.log(mostRepeated([10]));
console.log(mostRepeated(["TechGlobal"]));




