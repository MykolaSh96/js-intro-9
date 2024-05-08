/* 
Task 1

Requirement:
Write a function named countPalindrome() which takes a string and returns the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and backwards. Example: level, radar, deed, refer.

Examples:
countPalindrome("Mom and Dad"​) 			-> 2
countPalindrome("See you at noon") 			-> 1
countPalindrome("Kayak races attracts racecar drivers") 	-> 2
countPalindrome("") 				-> 0
countPalindrome("No palindrome here") 		-> 0

*/
const countPalindrome = str => str.trim().split(' ').reduce((acc, elem) => (elem.length > 0 && elem.toLowerCase() === elem.toLowerCase().split('').reverse().join('')) ? acc + 1 : acc, 0);

console.log(countPalindrome("Mom and Dad"));// 			                      -> 2
console.log(countPalindrome("See you at noon"));// 			                  -> 1
console.log(countPalindrome("Kayak races attracts racecar drivers"));// 	-> 2
console.log(countPalindrome(""));// 				                              -> 0
console.log(countPalindrome("No palindrome here"));// 		                -> 0


/*
Task 2

Requirement:
Write a function named sum() which takes an array of numbers and a boolean value as arguments.
 It will return the sum of the numbers positioned at even indexes if true. And, return sum of numbers positioned at odd indexes if false.

 Examples:
sum([1, 5, 10], true) 		-> 11
sum([3, 7, 2, 5, 10], false) 	-> 12
sum([-1, 1, -2, 2], true) 		-> -3
sum([0, -1, 15, 1], false) 		-> 0
sum([1, 2, 3, 4, -4], true) 		-> 0

*/

const sum = (arr, isEven) =>{
  let count = 0;
  if (isEven === true) {
  for(let i = 0; i < arr.length; i += 2) {
    count += arr[i];
  }
  }
  else {
    for(let i = 1; i < arr.length; i += 2) 
    count += arr[i];
  }
  return count;
  }
  
  console.log(sum([1, 5, 10], true));// 		    -> 11
  console.log(sum([3, 7, 2, 5, 10], false));// 	-> 12
  console.log(sum([-1, 1, -2, 2], true));// 		-> -3
  console.log(sum([0, -1, 15, 1], false));// 		-> 0
  console.log(sum([1, 2, 3, 4, -4], true));// 	-> 0

/*
Task 3

Requirement:
Write a function named nthChars() which takes a string and a number as arguments and returns the string back with every nth characters.​

Examples:
nthChars("Java", 2) 		-> "aa"
nthChars("JavaScript", 5)​ 	-> "St"
nthChars("Java", 3)​ 		-> "v"
nthChars("Hi", 4)​ 		-> ""
nthChars("0123456789", 2) 	-> "13579" 

*/
const nthChars = (str, num) => {
  let newStr = '';
for(let i = num - 1; i < str.length; i += num) {
  newStr += str[i];
}
return newStr;
}

console.log(nthChars("Java", 2));// 		  -> "aa"
console.log(nthChars("JavaScript", 5));//​ -> "St"
console.log(nthChars("Java", 3));// 	     -> "v"
console.log(nthChars("Hi", 4));//​ 		     -> ""
console.log(nthChars("0123456789", 2));// -> "13579" 


/*
Task 4

Requirement:
Write a function named canFormString() which takes two string arguments and returns true if the second string can be formed by rearranging the characters of first string. Return false otherwise.
NOTE: This method is case-insensitive and ignore the white spaces.

Examples:
canFormString("Hello", "Hi")​ 			-> false
canFormString("programming", "gaming")​ 		-> true
canFormString("halogen", "hello")​ 			-> false
canFormString("CONVERSATION", "voices rant on")​ 	-> true
canFormString("12", "123") 			-> false

*/
const canFormString = (str1, str2) => str1.toLowerCase().trim().split('').filter(elem => str2.toLowerCase().includes(elem)).join('').length >= str2.trim().split(' ').join('').length


console.log(canFormString("Hello", "Hi")); // 			             -> false
console.log(canFormString("programming", "gaming")); //​ 		      -> true
console.log(canFormString("halogen", "hello")); //​ 		        	-> false
console.log(canFormString("CONVERSATION", "voices rant on")); //​ -> true
console.log(canFormString("12", "123")); // 			               -> false


/*
Task 5

Requirement:
Write a function named isAnagram() which takes two string arguments and returns true if the given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or phrase. In the context of strings, checking if two strings are anagrams of each other means verifying if they contain the same characters in the same quantities, regardless of the order of those characters.
NOTE: This method is case-insensitive and ignore the white spaces.


Examples:
isAnagram("Apple", "Peach")​ 		-> false
isAnagram("listen", "silent")​ 		-> true
isAnagram("astronomer", "moon starer")​ 	-> true
isAnagram("CINEMA", "iceman")​ 		-> true
isAnagram("123", "1234") 		-> false

*/

const isAnagram = (str1, str2) => str1.toLowerCase().trim().split('').filter(elem => str2.toLowerCase().includes(elem)).join('').length === str2.trim().split(' ').join('').length

console.log(isAnagram("Apple", "Peach"));//​ 		        -> false
console.log(isAnagram("listen", "silent"));// 		     -> true
console.log(isAnagram("astronomer", "moon starer"));//​ -> true
console.log(isAnagram("CINEMA", "iceman"));//​ 		      -> true
console.log(isAnagram("123", "1234"));// 		           -> false




/*
Task 6

Requirement:
Write a function named count() which takes an array of numbers and a boolean value as arguments. 
It will return the total count of the even numbers if the boolean value is true. 
And return the total count of the odd numbers if the boolean value is false. 

Examples:
count([1, 5, 10], true) 		-> 1
count([3, 7, 2, 5, 10], false) 	-> 3
count([-1, 1, -2, 2], true) 		-> 2
count([0, -1, 15, 1], false) 	-> 3
count([1, 2, 3, 4, -4], true) 	-> 3

*/


/*
Task 6

Requirement:
Write a function named sumDigitsDouble() which takes a string and returns the sum of the digits in the given String multiplied by 2. Return -1 if the given string does not have any digits. Ignore negative numbers.

Examples:
sumDigitsDouble("Javascript") 	-> -1
sumDigitsDouble("23abc45")​ 	-> 28
sumDigitsDouble("Hi-23") 	-> 10
sumDigitsDouble("ab12") 	-> 6
sumDigitsDouble("n0numh3r3") 	-> 12

*/
const count = (arr, isEven) => isEven === true ? arr.filter(num => num % 2 === 0).length : arr.filter(num => num % 2 !== 0).length

console.log(count([1, 5, 10], true));// 		    -> 1
console.log(count([3, 7, 2, 5, 10], false));// 	-> 3
console.log(count([-1, 1, -2, 2], true));// 		-> 2
console.log(count([0, -1, 15, 1], false));// 	  -> 3
console.log(count([1, 2, 3, 4, -4], true));// 	-> 3


/*
Task 7

Requirement:
Write a function named sumDigitsDouble() which takes a string and returns the sum of the digits in the given String multiplied by 2. Return -1 if the given string does not have any digits. Ignore negative numbers.

Examples:
sumDigitsDouble("Javascript") 	-> -1
sumDigitsDouble("23abc45")​ 	-> 28
sumDigitsDouble("Hi-23") 	-> 10
sumDigitsDouble("ab12") 	-> 6
sumDigitsDouble("n0numh3r3") 	-> 12

*/
const sumDigitsDouble = str => [...str].filter(ele => ele >= '0' && ele <= '9').length > 0 ? [...str].filter(ele => ele >= '0' && ele <= '9').reduce((sum, num) => sum + Number(num) * 2, 0) : -1

console.log(sumDigitsDouble("Javascript")); // 	-> -1
console.log(sumDigitsDouble("23abc45")); //	    -> 28
console.log(sumDigitsDouble("Hi-23")); // 	    -> 10
console.log(sumDigitsDouble("ab12")); // 	      -> 6
console.log(sumDigitsDouble("n0numh3r3")); // 	-> 12

/*
Task 8

Requirement:
Write a function named countOccurrence() which takes two string arguments 
and returns how many times that the first string can form the second string.

Examples:
countOccurrence("Javascript", "Java") 	-> 1
countOccurrence("Hello", "World") 		-> 0
countOccurrence("Can I can a can", "anc")​ 	-> 3
countOccurrence("Hello", "l")​ 		-> 2
countOccurrence("IT conversations", "IT")​ 	-> 2

*/