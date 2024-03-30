const { characterHelper } = require('../utils/CharacterHelper.js')

// Task 1 
/*
Requirement:
Write a function named hasUpperCase() which takes a string argument and return true if there is an uppercase letter and false otherwise.

Examples:
hasUpperCase("javascript") 	-> false
hasUpperCase("John") 		-> true
hasUpperCase("$125.0") 	-> false
hasUpperCase("") 		-> false
*/

const hasUpperCase = str => str.split('').filter(x => x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90).length > 0;


console.log(hasUpperCase("javascript")); // false
console.log(hasUpperCase("John")); // true
console.log(hasUpperCase("$125.0")); // false
console.log(hasUpperCase("AA")); // true
console.log(hasUpperCase("")); // false

//2nd solution
function hasUpperCase(str) {
    str = str.split('');
    for (const char of str) {
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            return true;
        }
    }
    return false
}

console.log(hasUpperCase("javascript")); // false
console.log(hasUpperCase("John")); // true
console.log(hasUpperCase("$125.0")); // false
console.log(hasUpperCase("AA")); // true
console.log(hasUpperCase("")); // false


const hasUpperCase = str => {
    if (str.split('').filter(x => x >= 'A' && x <= 'Z').length > 0) return true
    else return false;
}

console.log(hasUpperCase("javascript")); // false
console.log(hasUpperCase("John")); // true
console.log(hasUpperCase("$125.0")); // false
console.log(hasUpperCase("")); // false


// Tack 2
/*
Requirement:
Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from the original string​.

Examples:
noDigit("") 			-> ""
noDigit("Javascript") 		-> "Javascript"
noDigit("123Hello") 		-> "Hello"
noDigit("123Hello World149") 	-> "Hello World”
noDigit("123Tech456Global149") 	-> "TechGlobal"
*/


function noDigit(str) {
    str = str.split('');
    const newArr = [];
    for (const digit of str) {
        if (!(digit.charCodeAt(0) >= 48 && digit.charCodeAt(0) <= 57)) {
            newArr.push(digit);
        }
    }
    return newArr.join('')
}
console.log(noDigit(""));                      // ""
console.log(noDigit("Javascript"));            // "Javascript"
console.log(noDigit("123Hello"));              // "Hello"
console.log(noDigit("123Hello World149"));     // "Hello World"
console.log(noDigit("123Tech456Global149"));   // "TechGlobal"


// Task 3

/*
Requirement:
Write a function named noVowel() which takes a string argument and returns a new string with all vowels removed from the original string​.

Examples:
noVowel("TechGlobal") 	-> "TchGlbl"
noVowel("AEOxyz") 	-> "xyz"
noVowel("Javascript") 	-> "Jvscrpt"
noVowel("") 	-> ""
noVowel("125$") 	-> "125$"
*/

function noVowel(str) {
    const vowels = 'aeiouAEIOU';
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

console.log(noVowel("TechGlobal"));  // "TchGlbl"
console.log(noVowel("AEOxyz"));      // "xyz"
console.log(noVowel("Javascript"));  // "Jvscrpt"
console.log(noVowel(""));            // ""
console.log(noVowel("125$"));        // "125$"


// Task 4

/*
Requirement:
Write a function named no13() which takes an array of numbers as argument and return a new array with all 13s replaced with 0s. ​

Examples:
no13([1, 2, 3 ,4]) 		-> [1, 2, 3 ,4] 
no13([13, 2, 3]) 		-> [0, 2, 3]
no13([13, 13, 13 , 13, 13]) 	-> [0, 0, 0, 0, 0]
no13([]) 			-> []
*/

const no13 = arr => {
    return arr.map(num => num === 13 ? 0 : num);
};

console.log(no13([1, 2, 3, 4]));            // [1, 2, 3 ,4]
console.log(no13([13, 2, 3]));              // [0, 2, 3]
console.log(no13([13, 13, 13, 13, 13]));    // [0, 0, 0, 0, 0]
console.log(no13([]));                      // []


//2nd solution

function no13(nums) {

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 13) {
            result.push(0);
        } else {
            result.push(nums[i]);
        }
    }

    return result;
}

// Test cases
console.log(no13([1, 2, 3, 4]));            // [1, 2, 3 ,4]
console.log(no13([13, 2, 3]));              // [0, 2, 3]
console.log(no13([13, 13, 13, 13, 13]));    // [0, 0, 0, 0, 0]
console.log(no13([]));                      // []


// Task 5

/*
Requirement:
Write a function named middleInt() which takes three number arguments and return the middle number. ​

Examples:
middleInt(1, 2, 2) 	-> 2
middleInt(5, 5, 8) 	-> 5
middleInt(5, 3, 5) 	-> 5
middleInt(1, 1, 1) 	-> 1
middleInt(-1, 25, 10) 	-> 10
*/

function middleInt(num1, num2, num3) {
    const number = [num1, num2, num3];

    number.sort((a, b) => a - b);
    return number[1];
}

// Test cases
console.log(middleInt(1, 2, 2)); // Output: 2
console.log(middleInt(5, 5, 8)); // Output: 5
console.log(middleInt(5, 3, 5)); // Output: 5
console.log(middleInt(1, 1, 1)); // Output: 1
console.log(middleInt(-1, 25, 10)); // Output: 10


//Task 6

/*
Requirement:
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string. ​

Examples:
sumOfDigits("Javascript") 	-> 0
sumOfDigits("John’s age is 29") 	-> 11
sumOfDigits("$125.0") 		-> 8
sumOfDigits("") 		-> 0

*/
function sumOfDigits(str) {

    let sum = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            sum += parseInt(str[i])
        }

    }
    return sum;
}

// Test cases
console.log(sumOfDigits("Javascript"));        // 0
console.log(sumOfDigits("John’s age is 29"));  // 11
console.log(sumOfDigits("$125.0"));           // 8
console.log(sumOfDigits(""));                  // 0

//Task 7 
/*
Requirement:
Write a function named arrFactorial() which takes an array of numbers as argument and return the array with every number replaced with their factorials.

Examples:
arrFactorial([1, 2, 3 ,4]) 		->  [1, 2, 6, 24]
arrFactorial([0, 5]) 		-> [1,120]
arrFactorial([5 , 0, 6]) 		-> [120, 1, 720]
arrFactorial([]) 		-> []
*/
function arrFactorial(arr) {

    function factorial(x) {
        if (x === 0 || x === 1) return 1;
        let result = 1;
        for (let i = 2; i <= x; i++) {
            result *= i;
        }
        return result;
    }


    return arr.map(num => factorial(num));
}

// Test cases
console.log(arrFactorial([1, 2, 3, 4]));  // [1, 2, 6, 24]
console.log(arrFactorial([0, 5]));        // [1, 120]
console.log(arrFactorial([5, 0, 6]));    // [120, 1, 720]
console.log(arrFactorial([]));            // []


//Task 8 

/*
Requirement:
Write a function named categorizeCharacters() which takes a string word as argument 
and return an array as letters at index of 0,digits at index of 1 and specials at index of 2. 

Examples:
categorizeCharacters("1234") 	-> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%") 	-> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") 	-> [ 'abc', '123', '$%%' ]

*/

function categorizeCharacters(str) {
    let numbers = '';
    let leters = '';
    let specials = '';

    for (let char of str) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            leters += char;
        } else if (char >= '0' && char <= '9') {
            numbers += char;
        } else {
            specials += char;
        }
    }
    return [numbers, leters, specials];

}

console.log(categorizeCharacters("1234"));       // [ '' , '1234', '' ]
console.log(categorizeCharacters("abc123$#%"));  // [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%")); // [ 'abc', '123', '$%%' ]

