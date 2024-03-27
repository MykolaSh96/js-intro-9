// Task 1

/*
Double or Triple the Word
Write a function named as doubleOrTripleWord() which takes a string word as an argument 
and returns the given word back tripled if the string length is even or doubled if the string length 
is odd when invoked.

Examples:
doubleOrTripleWord("Tech") -> "TechTechTech"
doubleOrTripleWord("Apple") -> "AppleApple”
doubleOrTripleWord("") -> ""
doubleOrTripleWord(" ") -> " "
doubleOrTripleWord("1") -> "11"
doubleOrTripleWord("22") -> "222222"

*/

function doubleOrTripleWord(str) {
    if (str.length % 2 === 0) return str + str + str;
    else return str + str;
}


console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));


// Task 2 

/* 
First and Last Word
Write a function named as firstlastWord() which takes a string word as an argument and 
returns the first and last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.
Examples:
firstLastWord("Hello World") -> "HelloWorld"
firstLastWord("I like JavaScript") -> "IJavaScript”
firstLastWord("Hello") -> "HelloHello"
firstLastWord("") -> ""
firstLastWord(" ") -> ""

*/

function firstlastWord(str) {
    const srt = str.trim();
    const words = str.split(" ");
    if (words.length === 0) {
        return "";
    }
    //    const firstWord = words[0];
    //    const lastWords = words[words.length - 1];
    //    const result = firstWord + lastWords;

    //    return result;
    return words[0] + words[words.length - 1];
}



console.log(firstlastWord("Hello World"));         // Output: "HelloWorld"
console.log(firstlastWord("I like JavaScript"));   // Output: "IJavaScript"
console.log(firstlastWord("Hello"));              // Output: "HelloHello"
console.log(firstlastWord(""));                   // Output: ""
console.log(firstlastWord(" "));                  // Output: ""




// Task 3

/*
Has Vowel
Write a function named hasVowel() which takes a string argument and returns true if the 
string has a vowel, returns false if the string doesn’t contain any vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("") -> false
hasVowel("Javascript") -> true
hasVowel("Tech Global") -> true
hasVowel("1234") -> false
hasVowel("ABC") -> true
*/


// 1st Solution with arrow function
const hasVowel = (string) => {
    const stringArr = string.toLowerCase().split('');
    return stringArr.some(x => 'aeoui'.includes(x))
};

// 2nd solution with for loop

function hasVovel(str) {
    str = str.toLowerCase();

    for (i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'o' || str[i] === 'i') return true;
    }
    return false;
}
console.log(hasVovel("Hello"));// -> true
console.log(hasVovel("Apple"));// -> true
console.log(hasVovel("orange"));// -> true
console.log(hasVovel(""));// -> false
console.log(hasVovel(" "));// -> false
console.log(hasVovel("123"));// -> false
console.log(hasVovel("I"));// -> true



// Task 4 

/*
Start Vowel
Write a function named as startVowel() which takes a string word as an argument and returns 
true if given string starts with a vowel, and false otherwise when invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U

Examples:
startVowel("Hello") -> false
startVowel("Apple") -> true
startVowel("orange") -> true
startVowel("") -> false
startVowel(" ") -> false
startVowel("123") -> false

*/

function startVowel(str) {
    let firstLetter = str.charAt(0).toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
}


console.log(startVowel("Hello"));// -> false
console.log(startVowel("Apple"));// -> true
console.log(startVowel("orange"));// -> true
console.log(startVowel(""));// -> false
console.log(startVowel(" "));// -> false
console.log(startVowel("123"));// -> false
console.log(startVowel("I"));// -> false


// Task 5 

/*
Average of Edges
Write a function named averageOfEdges() which takes three number arguments and will 
return average of min and max numbers.
Examples:
averageOfEdges(0, 0, 0) -> 0
averageOfEdges(0, 0, 6) -> 3
averageOfEdges(-2, -2, 10) -> 4
averageOfEdges(-3, 15, -3) -> 6
averageOfEdges(10, 13, 20) -> 15

*/

function averageOfEdges(num1, num2, num3) {
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);

    let averege = (max + min) / 2;
    return averege;
}

console.log(averageOfEdges(0, 0, 0));// 0
console.log(averageOfEdges(0, 0, 6));// 3
console.log(averageOfEdges(-2, -2, 10));// 4
console.log(averageOfEdges(-3, 15, -3));// 6
console.log(averageOfEdges(10, 13, 20));// 15



// Task 6 

/*
Swap First and Last Characters 
Write a function named replaceFirstLast() which takes a string argument and returns a new 
string with the first and last characters replaced. 
NOTE: If the length is less than 2, return an empty string. 
NOTE: Ignore extra spaces before and after the string. 
 
Examples: 
replaceFirstLast("")         ->  "" 
replaceFirstLast("Hello")       ->  "oellH" 
replaceFirstLast("Tech Global")     -> "lech GlobaT" 
replaceFirstLast("A")       -> "" 
replaceFirstLast("    A      ")      -> ""
*/

function replaceFirstLast(str) {
    str = str.trim();
    if (str.length < 2) {
        return "";
    }
    return str.charAt(str.length - 1) + str.substring(1, str.length - 1) + str.charAt(0);

}
console.log(replaceFirstLast(""));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("    A   "));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));



/*
Swap First and Last Four Characters 
Write a function named as swap4() which takes a string word as an argument and returns the 
string back with its first and last 4 characters swapped when invoked. 
NOTE: Return empty string if the given string does not have 8 or more characters. 
 
Examples: 
swap4("abc")       -> "" 
swap4("JavaScript")      -> "riptScJava" 
swap4("TechGlobal")     -> "obalGlTech" 
swap4("")         -> "" 
swap4("  ")       -> "" 
swap4("Apple")       -> ""
*/

function swap4(word) {
    if (word.length < 8) {
        return "";
    }
    const firstPart = word.slice(0, 4);
    const lastPart = word.slice(word.length - 4);
    const midlPart = word.slice(4, -4);
    const swappedWord = lastPart + midlPart + firstPart;
    return swappedWord;
}

console.log(swap4('TechGlobal'))
console.log(swap4('JavaSkript'))
console.log(swap4('J'))
console.log(swap4(''))
console.log(swap4('java'))

// Task 8

/*
Swap First and Last Words 
Write a function named as swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked. 
NOTE: Return empty string if the given string does not have 2 or more words. 
 
Examples: 
swapFirstLastWord("Hello World")      -> "World Hello" 
swapFirstLastWord("I like JavaScript")   -> "JavaScript like I" 
swapFirstLastWord("foo bar foo bar")     -> "bar bar foo foo" 
swapFirstLastWord("")         -> "" 
swapFirstLastWord("  ")         -> "" 
swapFirstLastWord("Hello")        -> "" 
swapFirstLastWord("Hello   ")       -> "" 
*/

function swapFirstLastWord(str) {

    str = str.trim();
    const words = str.split(" ");

    if (words.length < 2) {
        return "";
    }

    const firstWord = words[0];
    const lastWord = words[words.length - 1];
    words[0] = lastWord;
    words[words.length - 1] = firstWord;


    return words.join(" ");
}

// Test cases
console.log(swapFirstLastWord("Hello World"));           // Output: "World Hello"
console.log(swapFirstLastWord("I like JavaScript"));    // Output: "JavaScript like I"
console.log(swapFirstLastWord("foo bar foo bar"));      // Output: "bar bar foo foo"
console.log(swapFirstLastWord(""));                     // Output: ""
console.log(swapFirstLastWord("  "));                   // Output: ""
console.log(swapFirstLastWord("Hello"));                // Output: ""
console.log(swapFirstLastWord("Hello   "));             // Output: ""




// Task 9 

/*
Count Positive Numbers 
Write a function named countPos() which takes an array of numbers as an argument and 
returns how many elements are positive when invoked.  
 
Examples: 
countPos([-45, 0, 0, 34, 5, 67])     -> 3 
countPos([-23, -4, 0, 2, 5, 90, 123])   -> 4 
countPos([0, -1, -2, -3])       -> 0 
*/

function countPos(num) {
    count = 0;
    for (const positive of num) {
        if (positive > 0) count++;
    }
    return count;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));


// Task 10

/*
Find Even Numbers 
Write a function named as getEvens() which takes 2 number arguments and returns all the 
even numbers as an array stored from smallest even number to greatest even number when 
invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers. 
 
Examples: 
getEvens(2, 7)    -> [ 2, 4, 6 ] 
getEvens(17, 5)    -> [ 6, 8, 10, 12, 14, 16 ] 
getEvens(4, 4)    -> [ 4 ] 
getEvens(3, 3)    -> [ ] 
  
*/
function getEvens(start, end) {
    const evens = [];


    for (let i = start; i <= end; i++) {

        if (i % 2 === 0) {
            evens.push(i);
        }
    }

    return evens;
}

// Test cases
console.log(getEvens(2, 7));   // Output: [2, 4, 6]
console.log(getEvens(17, 5));  // Output: [6, 8, 10, 12, 14, 16]
console.log(getEvens(4, 4));   // Output: [4]
console.log(getEvens(3, 3));   // Output: []



// Task 11

/*
Find Numbers Divisible By 5 
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the 
numbers divisible by 5 as an array stored from first found match to last found match when 
invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers. 
Examples: 
getMultipleOf5(3, 17)    -> [ 5, 10, 15] 
getMultipleOf5(23, 5)    -> [ 20, 15, 10, 5 ] 
getMultipleOf5(5, 5)      -> [ 5 ] 
getMultipleOf5(2, 4)      -> [ ] 
*/


function getMultipleOf5(num1, num2) {
    const multiplesOf5 = [];
    for (let i = num1; i <= num2; i++) {
        if (i % 5 === 0) {
            multiplesOf5.push(i);
        }
    }
    return multiplesOf5;
}

console.log(getMultipleOf5(3, 17));   // Output: [5, 10, 15]
console.log(getMultipleOf5(23, 5));   // Output: [20, 15, 10, 5]
console.log(getMultipleOf5(5, 5));    // Output: [5]
console.log(getMultipleOf5(2, 4));    // Output: []



// Task 12

/*
Count Negative Numbers 
Write a function named countNeg() which takes an array of numbers as an argument and 
returns how many elements are negative when invoked.  
 
Examples: 
countNeg([-45, 0, 0, 34, 5, 67])     -> 1 
countNeg([-23, -4, 0, 2, 5, 90, 123])   -> 2 
countNeg([0, -1, -2, -3])       -> 3 
*/

function countNeg(number) {

    let count = 0;
    for (const negative of number) {
        if (negative < 0) count++;
    }
    return count;
}

console.log(countNeg([-45, 0, 0, 34, 5, 67]));
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]));
console.log(countNeg([0, -1, -2, -3]));



// Task 13 

/*
Count A 
Write a function named countA() which takes a string argument and returns how many A or a 
there are in the given string when invoked. 
NOTE: Ignore case sensitivity.  
 
Examples: 
countA("TechGlobal is a QA bootcamp")       -> 4 
countA("QA stands for Quality Assurance")     -> 5 
countA("Cypress")             -> 0
*/


function countA(str) {
    let count = 0;
    str = str.toLowerCase().split('');
    for (const hasA of str) {
        if (hasA === 'a') count++;
    }
    return count;
}

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));


// Task 14 

/*
Count Words 
Write a function named countWords() which takes a string argument and returns the total 
count of words in the given string when invoked. 
NOTE: Be careful about the extra whitespaces before and after the string. 
 
Examples: 
countWords("     Javascript is fun       ")         -> 3 
countWords("Cypress is an UI automation tool.    ")     -> 6  
countWords("1 2 3 4")             -> 4 
*/

function countWords(string) {
    string = string.trim().split(' ');
    let count4 = 0;
    for (const word of string) {
        if (word.length > 0) {
            count4++;
        }
    }
    return count4;
}

console.log(countWords("     Javascript is fun   "));
console.log(countWords("Cypress is an UI automation tool.   "));
console.log(countWords("1 2 3 4"));
console.log(countWords(""));



// Task 15 

/*
Factorial 
Write a function named as factorial() which takes a number as an argument and returns the 
factorial of the number when invoked. 
NOTE: Mathematically, the factorial of a non-negative integer n is defined as: 
n! = n × (n-1) × (n-2) × ... × 2 × 1 
Assume you will not be given a negative number. 
 
Examples: 
factorial(5)     -> 120 
factorial(4)    -> 24 
factorial(0)    -> 1 
factorial(1)    -> 1 
*/

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    let sum = 1;

    for (let i = 2; i <= number; i++) {
        sum *= i;
    }
    return sum;
}

console.log(factorial(6)); // Output: 720
console.log(factorial(5)); // Output: 120
console.log(factorial(4)); // Output: 24
console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1


// Task 16 

/*
Count 3 or Less
Write a function named as count3OrLess() which takes a string word as an argument and 
returns the count of the words that has 3 characters or less when invoked.

Examples:
count3OrLess("Hello") -> 0
count3OrLess("Hi John") -> 1
count3OrLess("JavaScript is fun") -> 2
count3OrLess("My name is John Doe") -> 3
count3OrLess("") -> 0
*/

function count3OrLess(str) {
    
    const words = str.trim().split(' ');
    let count = 0;
    
    
    for (const word of words) {
        if (word.length <= 3) {
            count++;
        }
    }
    return count;
}


// Test cases
console.log(count3OrLess("Hello")); // Output: 0
console.log(count3OrLess("Hi John")); // Output: 1
console.log(count3OrLess("JavaScript is fun")); // Output: 2
console.log(count3OrLess("My name is John Doe")); // Output: 3
console.log(count3OrLess("")); // Output: 1


// Task 17 

/*
Remove Extra Spaces
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked.

Examples:
removeExtraSpaces("Hello") -> "Hello"
removeExtraSpaces(" Hello World ") -> "Hello World"
removeExtraSpaces(" JavaScript    is fun") -> "JavaScript is fun”
removeExtraSpaces("") -> ""
*/


function removeExtraSpaces(str){
    const word = str.split(' ');

    return word.filter(word => word !== '').join(' ');
}

// Test cases
console.log(removeExtraSpaces("Hello  ")); // Output: "Hello"
console.log(removeExtraSpaces("   Hello  World   ")); // Output: "Hello World"
console.log(removeExtraSpaces("    JavaScript is fun")); // Output: "JavaScript is fun"
console.log(removeExtraSpaces("")); // Output: ""


// Second Solution

function removeExtraSpaces(str){
 
    return str.trim();
    }
    
    // Test cases
    console.log(removeExtraSpaces("Hello  ")); // Output: "Hello"
    console.log(removeExtraSpaces("   Hello  World   ")); // Output: "Hello World"
    console.log(removeExtraSpaces("    JavaScript is fun")); // Output: "JavaScript is fun"
    console.log(removeExtraSpaces("")); // Output: ""



    // Task 18 

/*
Middle Number
Write a function named middleInt() which takes three number arguments and return the middle 
number. 

Examples:
middleInt(1, 2, 2) -> 2
middleInt(5, 5, 8) -> 5
middleInt(5, 3, 5) -> 5
middleInt(1, 1, 1) -> 1
middleInt(-1, 25, 10) -> 10
*/

function middleInt(num1, num2,num3){
    const max = Math.max(num1, num2, num3)
    const min = Math.min(num1, num2, num3)
    const midle = num1 + num2 + num3 -max - min;
    
    return midle;
}
// Test cases
console.log(middleInt(1, 2, 2)); // Output: 2
console.log(middleInt(5, 5, 8)); // Output: 5
console.log(middleInt(5, 3, 5)); // Output: 5
console.log(middleInt(1, 1, 1)); // Output: 1
console.log(middleInt(-1, 25, 10)); // Output: 10


function middleInt(num1, num2, num3){
    const nums = [ num1, num2, num3];

    nums.sort((a, b) => a - b);

    return nums[1];
}

// Test cases
console.log(middleInt(1, 2, 2)); // Output: 2
console.log(middleInt(5, 5, 8)); // Output: 5
console.log(middleInt(5, 3, 5)); // Output: 5
console.log(middleInt(1, 1, 1)); // Output: 1
console.log(middleInt(-1, 25, 10)); // Output: 10


function middleInt(num1, num2, num3) {
    const nums = [num1, num2, num3];

    const middleNums = nums.filter(num => num !== Math.min(...nums) && num !== Math.max(...nums));

    return middleNums[0];
}

// Test cases
console.log(middleInt(1, 2, 2));    // Output: 2
console.log(middleInt(5, 5, 8));    // Output: 5
console.log(middleInt(5, 3, 5));    // Output: 5
console.log(middleInt(1, 1, 1));    // Output: 1
console.log(middleInt(-1, 25, 10)); // Output: 10






// Task 19 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*
First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument and returns the first 
duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates 
in the array. For two elements to be considered as duplicated, value and data types of the 
elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) -> -1
*/

// Task 20 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*
Find All Duplicate Elements
Write a function named as getDuplicates() which takes an array argument and returns all the 
duplicated elements in the array when invoked.
NOTE: Make your code dynamic that works for any array and return empty array if there are no 
duplicates in the array. For two elements to be considered as duplicated, value and data types 
of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -> [ ]
*/


// Task 21 

/*
Requirement: 
Write a function named as countVowels() which takes a string word as an argument and returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i

Examples:
countVowels("Hello") 		-> 2
countVowels("Hello World") 		-> 3
countVowels("JavaScript is fun") 		-> 5
countVowels("") 			-> 0

*/
function countVowels(str){
    let count = 0;
    
    const words = str.toLowerCase();

    for(const vovels of words){
        if(vovels.includes('a') || vovels.includes('e') ||vovels.includes('o') ||vovels.includes('u') ||vovels.includes('i') ) count ++;
    }
    return count;
}

console.log(countVowels("Hello")); // 2
console.log(countVowels("Hello World"));// 3
console.log(countVowels("JavaScript is fun")); // 5
console.log(countVowels(""));// 0


// Second solution
function countVowels(string){
    let count2 = 0;
    let vowel = 'AEOUIaeoui';
    for(const vowels of string){ 
        if( vowel.includes(vowels)) count2++;
        }
    
return count2;
}

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));;
console.log(countVowels(""));


// Task 22 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*
Reverse String Words
Write a function named as reverseStringWords() which takes a string as an argument and 
returns string back with each word separately reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces 
before and after words in the given string.

Examples:
reverseStringWords("Hello World") -> "olleH dlroW"
reverseStringWords("I like JavaScript") -> "I ekil tpircSavaJ"
reverseStringWords("Hello") -> "olleH"
reverseStringWords("") -> ""
reverseStringWords(" ") -> ""
*/



function reverseStringWords(str){
 const words = str.split('')
const reversedWords = words. map( word => word.split('')).reverse().join('');
 
return reversedWords;
}

console.log(reverseStringWords("Hello World")); // Output: "olleH dlroW"
console.log(reverseStringWords("I like JavaScript")); // Output: "I ekil tpircSavaJ"
console.log(reverseStringWords("Hello")); // Output: "olleH"
console.log(reverseStringWords("")); // Output: ""
console.log(reverseStringWords(" ")); // Output: ""



// Task 23 

/*
Count Consonants
Write a function named as countConsonants() which takes a string word as an argument and 
returns the count of the consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant letter.
Examples:
countConsonants("Hello") -> 3
countConsonants("Hello World") -> 8
countConsonants("JavaScript is fun") -> 12
countConsonants("") -> 0
*/








