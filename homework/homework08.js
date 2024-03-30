//Task 1

/*
Requirement:
Write a function named hasLowerCase() which takes a string argument and 
returns true if there is a lowercase letter and false if it there isn’t. 

Examples:
hasLowerCase("")  -> false
hasLowerCase("JAVASCRIPT")  -> false
hasLowerCase("hello")  -> true
hasLowerCase("125$")  -> false
hasLowerCase("   a   ")  -> true
*/


function hasLowerCase(str) {
    str = str.trim().split('')

    for (const lowerCase of str) {
        if (lowerCase >= 'a' && lowerCase <= 'z') {
            return true;
        }
    }
    return false;
}

console.log(hasLowerCase(""));// -> false
console.log(hasLowerCase("JAVASCRIPT"));// -> false
console.log(hasLowerCase("hello"));// -> true
console.log(hasLowerCase("125$")); //-> false
console.log(hasLowerCase("   a   "));// -> true


//Task-2

/*
Requirement:
Write a function named noZero() which takes an array of numbers as argument 
and returns the array back with all zeros removed.
Examples:
noZero([1])  -> [1]
noZero( [1, 1, 10] )  -> [1, 1, 10] 
noZero([0, 1, 10])  -> [1, 10]
noZero([0, 0, 0])  -> []
noZero([10, 100 0]) -> [10, 100]
*/

function noZero(arr) {
    newArr = [];

    for (const number of arr) {
        if (number !== 0) {
            newArr.push(number)
        }
    }
    return newArr;
}

console.log(noZero([1])); //   -> [1]
console.log(noZero([1, 1, 10, 0])); //   -> [1, 1, 10] 
console.log(noZero([0, 1, 10, 0])); //   -> [1, 10]
console.log(noZero([0, 0, 0])); //   -> []
console.log(noZero([10, 100, 0])); //   -> [10, 100]

//2nd solution 
function noZero(arr){
    return arr.filter(num => num !== 0)
 }
 console.log(noZero([1])); //   -> [1]
console.log(noZero([1, 1, 10, 0])); //   -> [1, 1, 10] 
console.log(noZero([0, 1, 10, 0])); //   -> [1, 10]
console.log(noZero([0, 0, 0])); //   -> []
console.log(noZero([10, 100, 0])); //   -> [10, 100]



//Task-3 
/*
Requirement:
Write a function named numberAndSquare() which takes an array of numbers 
as argument and returns a multidimensional array with all numbers squared. 

Examples:
numberAndSquare([1, 2, 3])  -> [[1, 1], [2, 4], [3, 9]]
numberAndSquare([0, 3, -6])  -> [[0, 0], [3, 9], [-6, 36]]
numberAndSquare([1, 4])  -> [[1,1], [4, 16]]
numberAndSquare([0, 0, 0])  -> [[0, 0], [0, 0], [0, 0]]
numberAndSquare([0, 1, -10])  -> [[0, 0], [1, 1], [-10, 100]]
*/


function numberAndSquare(num) {
    let newArr = [];

    for (let i = 0; i < num.length; i++) {
        
        newArr.push([num[i], num[i] * num[i]])
    }
    return newArr
}
//Examples:
console.log(numberAndSquare([1, 2, 3])); //-> [[1, 1], [2, 4], [3, 9]]
console.log(numberAndSquare([0, 3, -6])); //-> [[0, 0], [3, 9], [-6, 36]]
console.log(numberAndSquare([1, 4])); //-> [[1,1], [4, 16]]
console.log(numberAndSquare([0, 0, 0])); //-> [[0, 0], [0, 0], [0, 0]]
console.log(numberAndSquare([0, 1, -10])); //-> [[0, 0], [1, 1], [-10, 100]]


//Task-4

/*
Requirement:
Write a function named containsValue() which takes a string array and a 
string as arguments and returns a boolean value. Search the string variable 
inside of the array and return true if it exists in the array. If it doesn’t exist, 
return false.  

NOTE: Assume that array size is at least 1. 
NOTE: The method is case-sensitive.

Examples:
containsValue(["abc", "foo", "javascript"], "hello")  -> false
containsValue(["abc", "def", "123"], "Abc")  -> false
containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")  -> true
*/

function containsValue(arr, arg) {
    for (const word of arr) {
        if (word === arg) {
            return true;
        }
    }
    return false;
}

//Examples:
console.log(containsValue(["abc", "foo", "javascript"], "hello")); //-> false
console.log(containsValue(["abc", "def", "123"], "Abc")); //-> false
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")); //-> true


//Task-5 

/*
Requirement:
Write a function named reverseSentence() which takes a string as argument 
and returns the words in reverse order.  If there is no enough words reverse, 
return "There is not enough words!".

Examples:
reverseSentence("Hello")  -> "There is not enough words!"
reverseSentence("Javascript is fun")  -> "Fun is javascript"
reverseSentence("This is a sentence")  -> "Sentence a is this"
*/

function reverseSentence(str) {
    
    let word = str.split(' ');
    
    if(word.length <= 1){
        return 'There is not enough words!'
    }
    return word.reverse().join(' ')
}
console.log(reverseSentence("Hello"));// -> "There is not enough words!"
console.log(reverseSentence("Javascript is fun"));// -> "Fun is javascript"
console.log(reverseSentence("This is a sentence"));// -> "Sentence a is this"


//Task-6

/*
Requirement:
Write a function named removeStringSpecialsDigits() which takes a string 
as argument and return a string without the special characters or digits.

Examples:
console.log(removeStringSpecialsDigits("123Javascript #$%is fun") );// -> "Javascript is fun" 
console.log(removeStringSpecialsDigits("Automation123#$% is fun")        );// -> "Automation is fun"
console.log(removeStringSpecialsDigits("Cypress is fun ")                 );// -> "Cypress is fun"

*/

function removeStringSpecialsDigits(str) {
    str = str.split('');
    let newArr = [];
    for (const char of str) {
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || char === ' ') {
            newArr.push(char);
        }
    }
    return newArr.join('');
}
console.log(removeStringSpecialsDigits("123Javascript #$%is fun"));// -> "Javascript is fun" 
console.log(removeStringSpecialsDigits("Automation123#$% "));// -> "Automation "
console.log(removeStringSpecialsDigits("Cypress"));// -> "Cypress "


//2nd solution
function removeStringSpecialsDigits(str) {
    let result = '';
    for (const char of str) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === ' ') {
            result += char;
        }
    }
    return result;
}

// Test cases
console.log(removeStringSpecialsDigits("123Javascript #$%is fun")); // -> "Javascript is fun" 
console.log(removeStringSpecialsDigits("Cypress"));                 // -> "Cypress"
console.log(removeStringSpecialsDigits("Automation123#$%"));        // -> "Automation"



// Task-7

/*
Requirement:
Write a function named removeArraySpecialsDigits() which takes a string 
array as argument and return back without the special characters or digits.

Examples:
removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])  -> ["Javascript", "is", "fun"]
removeArraySpecialsDigits(["Cypress", "123$%", "###"])  -> ["Cypress", "", ""]
removeArraySpecialsDigits(["Automation", "123#$%tool"])  -> ["Automation", "tool"]
*/

function removeArraySpecialsDigits(arr) {
    let result = [];
    for (const str of arr) {
        let string = '';
        for (const char of str) {
            if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
                string += char;
            }
        }
        result.push(string);
    }
    return result;
}

// Test cases
console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])); // -> ["Javascript", "is", "fun"]
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]));       // -> ["Cypress", "", ""]
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]));      // -> ["Automation", "tool"]




// Task-8

/*
Requirement:
Write a function named getCommons() which takes two string arrays as 
arguments and returns all the common words.

Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] )          -> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) -> ["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )         -> ["C#"]
*/
function getCommons(str, str1) {
    let newArr = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(str1[i])) {
            newArr.push(str[i])
        }
    }
    return newArr
}

//Examples:
console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"])); //-> []
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"])); //-> ["Javascript"]
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"])); //-> ["C#"]

// For of solution
function getCommons(str1, str2){
    let newArr = [];
    for(const words of str1){
        if(str2.includes(words)){
            newArr.push(words)
        }
    }
    return newArr;
}
//Examples:
console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"])); //-> []
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"])); //-> ["Javascript"]
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"])); //-> ["C#"]

// 3th solution

function getCommons(arr1, arr2) {
    return arr1.filter(word => arr2.includes(word));
}

// Examples:
console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"])); // -> []
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"])); // -> ["Javascript"]
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"])); // -> ["C#"]


//Task 9

/*
Requirement:
Write a function named noXInVariables() which takes an array as argument and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove the element.

Examples:
noXInVariables(["abc", 123, "#$%"])        -> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"])        -> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"]) 		   -> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"])    -> ["yyy", "ABC"]

*/

function noXInVariables(arr) {
    let newArr = [];

    for (const element of arr) {
        if (typeof element === 'string') { 
            let string = '';

            for (const char of element) {
                if (char !== 'X' && char !== 'x') {
                    string += char;
                }
            }

            newArr.push(string);
        } else { 
            newArr.push(element);
        }
    }

    return newArr;
}

// Examples:
console.log(noXInVariables(["abc", 123, "#$%"]));    // -> ["abc", 123, "#$%"]
console.log(noXInVariables(["xyz", 123, "#$%"]));    // -> ["yz", 123, "#$%"]
console.log(noXInVariables(["x", 123, "#$%"]));      // -> ["", 123, "#$%"]
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]));// -> ["yyyy", "", "ABC"]
