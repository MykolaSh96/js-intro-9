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


// Task- 7
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
    let count = 0;
    for (const positive of num) {
        if (positive > 0) count++;
    }
    return count;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

//2nd solution
function countPos(arr) {
    return arr.filter(num => num > 0).length
};

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


function removeExtraSpaces(str) {
    const word = str.split(' ');

    return word.filter(word => word !== '').join(' ');
}

// Test cases
console.log(removeExtraSpaces("Hello  ")); // Output: "Hello"
console.log(removeExtraSpaces("   Hello  World   ")); // Output: "Hello World"
console.log(removeExtraSpaces("    JavaScript is fun")); // Output: "JavaScript is fun"
console.log(removeExtraSpaces("")); // Output: ""


// Second Solution

function removeExtraSpaces(str) {

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

function middleInt(num1, num2, num3) {
    const max = Math.max(num1, num2, num3)
    const min = Math.min(num1, num2, num3)
    const midle = num1 + num2 + num3 - max - min;

    return midle;
}
// Test cases
console.log(middleInt(1, 2, 2)); // Output: 2
console.log(middleInt(5, 5, 8)); // Output: 5
console.log(middleInt(5, 3, 5)); // Output: 5
console.log(middleInt(1, 1, 1)); // Output: 1
console.log(middleInt(-1, 25, 10)); // Output: 10


function middleInt(num1, num2, num3) {
    const nums = [num1, num2, num3];

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




//Examples:
console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));  //-> 3
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));  //-> 5
console.log(firstDuplicate([5, '5', 3, 7, 4]));  //-> -1
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));  //-> 'abc'
console.log(firstDuplicate([1, 2, 3]));  //-> -1
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));  //-> -1



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


//Examples:
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])                ); //-> [ 0, -7 ]
console.log(getDuplicates([ 1, 2, 5, 0, 7 ])                                 ); //-> [ ]
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ])  ); //-> [ 'foo', 'a’ ]
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])                  ); //-> [ ]

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
function countVowels(str) {
    let count = 0;

    const words = str.toLowerCase();

    for (const vovels of words) {
        if (vovels.includes('a') || vovels.includes('e') || vovels.includes('o') || vovels.includes('u') || vovels.includes('i')) count++;
    }
    return count;
}

console.log(countVowels("Hello")); // 2
console.log(countVowels("Hello World"));// 3
console.log(countVowels("JavaScript is fun")); // 5
console.log(countVowels(""));// 0


// Second solution
function countVowels(string) {
    let count2 = 0;
    let vowel = 'AEOUIaeoui';
    for (const vowels of string) {
        if (vowel.includes(vowels)) count2++;
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

function reverseStringWords(str) {
    const words = str.split('')
    const reversedWords = words.map(word => word.split('')).reverse().join('');

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
function countConsonants(str) {
    let vovel = 'AEOUIaeoui';
    str = str.split('');
    let count = 0;

    for (i = 0; i < str.length; i++) {
        if (!vovel.includes(str[i])) {
            count++;
        }
    }
    return count;
}

// Test cases
console.log(countConsonants("Hello"));             // 3
console.log(countConsonants("Hello World"));       // 8
console.log(countConsonants("JavaScript is fun")); // 12
console.log(countConsonants(""));                 // 0

//Tack 24
/*
Count Multiple Words
Write a function named as countMultipleWords() which takes an array as an argument and 
returns the count of the elements that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after the array element.

Examples:
countMultipleWords([ "foo", "", " ", "foo bar", " foo" ]) -> 1
countMultipleWords([ "foo", "bar", "foobar", " foobar " ]) -> 0
countMultipleWords([ "f o o", "b a r", "foo bar", " foo bar " ]) -> 4
countMultipleWords([ ]) -> 0

*/
function countMultipleWords(arr) {
    let count = 0;

    for (const elrment of arr) {

        let word = elrment.trim().split(' ');
        if (word.length > 1) {
            count++;
        }
    }
    return count
}


// Test cases
console.log(countMultipleWords(["foo", "", " ", "foo bar", " foo"]));   // 1
console.log(countMultipleWords(["foo", "bar", "foobar", " foobar "])); // 0
console.log(countMultipleWords(["f o o", "b a r", "foo bar", " foo bar "])); // 4
console.log(countMultipleWords([])); // 0

//2nd Solution

function countMultipleWords(arr) {
    let countMulWord = 0
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].trim();
        if (word.includes(' ')) countMulWord++;
    }
    return countMulWord;
}

console.log(countMultipleWords(["foo", "", " ", "foo bar", " foo"]));   // 1
console.log(countMultipleWords(["foo", "bar", "foobar", " foobar "])); // 0
console.log(countMultipleWords(["f o o", "b a r", "foo bar", " foo bar "])); // 4
console.log(countMultipleWords([])); // 0  


//Task 25
/*
FizzBuzz
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string 
composed with below requirements when invoked.
• You need to find all the numbers within the range of given 2 numbers (both inclusive) 
and store them in a string from smallest to greatest number with a ' | ' separator for each 
number.
• You will need to convert numbers divisible by 3 to 'Fizz'
• You will need to convert numbers divisible by 5 to 'Buzz'
• You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
• The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
Examples:
fizzBuzz(13, 18) -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
fizzBuzz(12, 5) -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5) -> "Buzz"
fizzBuzz(9, 6) -> "Fizz | 7 | 8 | Fizz"
*/

function fizzBuzz(num1, num2) {

    let arr = [];

    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if (i % 5 === 0 && i % 3 === 0) arr.push('FizzBuzz');
        else if (i % 5 === 0) arr.push('Buzz');
        else if (i % 3 === 0) arr.push('Fizz');
        else arr.push(i);
    };

    return arr.join(" | ");
};
// Test cases
console.log(fizzBuzz(13, 18)); // "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
console.log(fizzBuzz(12, 5));  // "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
console.log(fizzBuzz(5, 5));   // "Buzz"
console.log(fizzBuzz(9, 6));   // "Fizz | 7 | 8 | Fizz"

// Task-26
/*
Palindrome
Write a function named as isPalindrome() which takes a string word as an argument and 
returns true if the word is palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity

Examples:
isPalindrome("Hello") -> false
isPalindrome("Kayak") -> true
isPalindrome("civic") -> true
isPalindrome("abba") -> true
isPalindrome("ab a") -> false
isPalindrome("123454321") -> true
isPalindrome("A") -> true
isPalindrome("") -> true

*/
function isPalindrome(str) {
    str = str.toLowerCase();
    let palidrome = str.split('').reverse().join('');
    return str === palidrome
}

console.log(isPalindrome("Hello")); //-> false
console.log(isPalindrome("Kayak")); //-> true
console.log(isPalindrome("civic")); //-> true
console.log(isPalindrome("abba")); //-> true
console.log(isPalindrome("ab a")); //-> false
console.log(isPalindrome("123454321")); //-> true
console.log(isPalindrome("A")); //-> true
console.log(isPalindrome("")); //-> true

//Task-27

/*
Prime Number
Write a function named as isPrime() which takes a number as an argument and returns true if 
the number is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It 
cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even 
prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.

Examples:
isPrime(5) -> true
isPrime(2) -> true
isPrime(29) -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false
*/


function isPrime(num) {
    let countDiv = 0;
    if (num <= 1) return false;
    else {
        for (let i = 3; i < num; i++) {
            if (num % i === 0) countDiv++;
        }
    }
    return countDiv === 0;
}



//Examples:
console.log(isPrime(5)); //-> true
console.log(isPrime(2)); //-> true
console.log(isPrime(29)); //-> true
console.log(isPrime(-5)); //-> false
console.log(isPrime(0)); //-> false
console.log(isPrime(1)); //-> false
console.log(isPrime(31)); //-> true
console.log(isPrime(19)); //-> true



// Task - 28

/*
Add Two Arrays
Write a function named add() which takes two array of numbers as argument and returns a new 
array with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different.

Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]) -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) -> [16, 11, 9, 3, 2, 7, 5, 10, 34]
add([-5, 6, -3, 11], [5, -6, 3, -11]) -> [0, 0, 0, 0]
*/


function add(arr1, arr2) {
    let newArr = [];
    const maxLength = Math.max(arr1.length, arr2.length);

    for(let i = 0; i < arr1.length; i++){
        const sum =(arr1[i] || 0) + (arr2[i] || 0);
        newArr.push(sum);
    }
    return newArr
 }

//Examples:
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));                   //-> [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));  //-> [16, 11, 9, 3, 2, 7, 5, 10, 34]
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));                 //-> [0, 0, 0, 0]


//Task-29

/*
No Elements With A
Write a function named noA() which takes an array of strings as argument and will return a 
new array with all elements starting with "A" or "a" replaced with "###".

Examples:
noA(["javascript", "hello", "123", "xyz"]) -> ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"]) -> ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"]) -> ["###", "###", "###", "###", "###"]

*/

function noA(arr) {
    let newArr = [];

    for (const word of arr) {
        if (word.charAt(0) === 'A' || word.charAt(0) === 'a') {
            newArr.push('###')
        } else {
            newArr.push(word)
        }
    }
    return newArr
}


// Examples:
console.log(noA(["javascript", "hello", "123", "xyz"]));  // -> ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"]));  //  -> ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));  //  -> ["###", "###", "###", "###", "###"]



function noA(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === 'A' || arr[i][0] === 'a') {
            newArr.push('###')
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

// Examples:
console.log(noA(["javascript", "hello", "123", "xyz"]));  // -> ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"]));  //  -> ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));  //  -> ["###", "###", "###", "###", "###"]


//Task-30

/*
No Elements Divisible By 3 and 5
Write a function named no3and5() which takes an array of integer numbers as argument and 
will return a new array with elements replaced by conditions below.

If element can be divided by 5, replace it with 99
If element can be divided by 3, replace it with 100
If element can be divided by both 3 and 5, replace it with 101

Examples:
no3and5([7, 4, 11, 23, 17]) -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6]) -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15]) -> [99, 11, 100, 13, 14, 101]
*/

function no3and5(arr) {
    let newArr = [];

    for (const num of arr) {
        if (num % 3 === 0 && num % 5 === 0) {
            newArr.push(101);
        } else if (num % 5 === 0) {
            newArr.push(99);
        } else if (num % 3 === 0) {
            newArr.push(100);
        } else {
            newArr.push(num);
        }
    }
    return newArr;
}

//Examples:
console.log(no3and5([7, 4, 11, 23, 17])); // -> [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6])); // -> [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15])); // -> [99, 11, 100, 13, 14, 101]


// Task 31

/*
No Elements Equals 13
Write a function named no13() which takes an array of numbers as argument and return a new 
array with all 13s replaced with 0s. 

Examples:
no13([1, 2, 3 ,4]) -> [1, 2, 3 ,4]
no13([13, 2, 3]) -> [0, 2, 3]
no13([13, 13, 13 , 13, 13]) -> [0, 0, 0, 0, 0]
no13([]) -> []
*/

function no13(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 13) {
            newArr.push(0);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//Examples:
console.log(no13([1, 2, 3, 4]));//-> [1, 2, 3 ,4]
console.log(no13([13, 2, 3]));//-> [0, 2, 3]
console.log(no13([13, 13, 13, 13, 13]));//-> [0, 0, 0, 0, 0]
console.log(no13([]));//-> []



// Task-32

/*
Remove Duplicates
Write a function named removeDuplicates() which takes an array argument and returns a new 
array with all the duplicates removed.

Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) -> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3]) -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1]) -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) -> ["1", "2", "3"]
*/

function removeDuplicates(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

Examples:
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));// -> [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3]));// -> [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1]));// -> [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));// -> ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));// -> ["1", "2", "3"]


//Task-33 

/*
No Digits
Write a function named noDigit() which takes a string argument and returns a new string with 
all digits removed from the original string.

Examples:
noDigit("") -> ""
noDigit("Javascript") -> "Javascript"
noDigit("123Hello") -> "Hello"
noDigit("123Hello World149") -> "Hello World”
noDigit("123Tech456Global149") -> "TechGlobal"
*/

function noDigit(str) {
    str = str.split('');
    const newArr = [];;

    for (const digit of str) {
        if (!(digit.charCodeAt(0) >= 48  && digit.charCodeAt(0) <= 57)) {
            newArr.push(digit);
        }
    }
    return newArr.join('');

}

//Examples:
console.log(noDigit(""));//-> ""
console.log(noDigit("Javascript"));//-> "Javascript"
console.log(noDigit("123Hello"));//-> "Hello"
console.log(noDigit("123Hello World149"));//-> "Hello World”
console.log(noDigit("123Tech456Global149"));//-> "TechGlobal"


// Task- 34

/*
No Vowel
Write a function named noVowel() which takes a string argument and returns a new string 
with all vowels removed from the original string.

Examples:
noVowel("TechGlobal") -> "TchGlbl"
noVowel("AEOxyz") -> "xyz"
noVowel("Javascript") -> "Jvscrpt"
noVowel("") -> ""
noVowel("125$") -> "125$"
*/

function noVowel(str) {
    let word = str.split('')
    let vovel = 'aeiouAEIOU'
    let newArr = [];
    for (const char of word) {
        if (!vovel.includes(char)) {
            newArr.push(char);
        }
    }
    return newArr.join('');
}

//Examples:
console.log(noVowel("TechGlobal")); // -> "TchGlbl"
console.log(noVowel("AEOxyz")); // -> "xyz"
console.log(noVowel("Javascript")); // -> "Jvscrpt"
console.log(noVowel("")); // -> ""
console.log(noVowel("125$")); // -> "125$"


//2nd solution

function noVowel(str){
  
    let newStr = '';
    let vowel = 'aeiouAEIOU'

    for(let i = 0; i < str.length; i++){
        if(!vowel.includes(str[i])){
            newStr += str[i]
        }
    }
return newStr;
}

console.log(noVowel("TechGlobal")); // -> "TchGlbl"
console.log(noVowel("AEOxyz")); // -> "xyz"
console.log(noVowel("Javascript")); // -> "Jvscrpt"
console.log(noVowel("")); // -> ""
console.log(noVowel("125$")); // -> "125$"



// Task 35

/*
Sum Of Digits
Write a function named sumOfDigits() which takes a string argument and returns sum of all 
digits from the original string. 

Examples:
sumOfDigits("Javascript") -> 0
sumOfDigits("John’s age is 29") -> 11
sumOfDigits("$125.0") -> 8
sumOfDigits("") -> 0

*/
function sumOfDigits(str){
    let sum = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] >= '0' && str[i] <= '9'){
            sum += parseInt(str[i]);
        }
    }
    return sum;
}
    
//Examples:
console.log(sumOfDigits("Javascript")       ); //-> 0
console.log(sumOfDigits("John’s age is 29") ); //-> 11
console.log(sumOfDigits("$125.0")           ); //-> 8
console.log(sumOfDigits("")                 ); //-> 0


//Task-36

/*
Array Factorial
Write a function named arrFactorial() which takes an array of numbers as argument and return 
the array with every number replaced with their factorials.

Examples:
arrFactorial([1, 2, 3 ,4]) -> [1, 2, 6, 24]
arrFactorial([0, 5]) -> [1,120]
arrFactorial([5 , 0, 6]) -> [120, 1, 720]
arrFactorial([]) -> []
*/

const arrFactorial = (arr) => {
    return arr.map(num => {
        let fac = 1;
        for (let i = 2; i <= num; i++) {
            fac *= i
        }
        return fac;
    })
}

// Examples:
console.log(arrFactorial([1, 2, 3, 4])); // -> [1, 2, 6, 24]
console.log(arrFactorial([0, 5]));       // -> [1, 120]
console.log(arrFactorial([5, 0, 6]));    // -> [120, 1, 720]
console.log(arrFactorial([]));           // -> []


function count3OrLess(string){
    string = string.split(' ')
    let newStr = 0;
    for(const word of string){
          if(word.length >= 3) newStr++;
    }
      return newStr;
  }

 // Examples:
console.log(count3OrLess("Hello")   			);//-> 0
console.log(count3OrLess("Hi John")   			);//-> 1
console.log(count3OrLess("JavaScript is fun")   );//-> 2
console.log(count3OrLess("My name is John Doe") );//-> 3
console.log(count3OrLess("")   				    );//-> 0		

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const num = [2, 4, 9, 5, 1 ];
num.sort();
console.log(num)

const add = (x, y) => x + y;

console.log(add(5, 10))


// Example of a callback function using Promises
function getData(callback) {
    return new Promise((resolve, reject) => {
        // Simulating fetching data asynchronously
        setTimeout(() => {
            const data = [1, 2, 3, 4, 5];
            resolve(data);
        }, 2000);
    });
}

getData().then(data => {
    console.log("Data fetched successfully:", data);
}).catch(error => {
    console.error("Error fetching data:", error);
});


let x = 10;
let y = 20;
obj = {x, y};
console.log(obj);


const arr = [1, 2, 3];
const newArr = [...arr, 4, 5, 6,];
console.log(newArr);

const newArr1 = [ 4, 5, 6, ...arr];
console.log(newArr1);

function HelloW(){
    console.log('Hello World!')
};


HelloW()