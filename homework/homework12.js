console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 1');
console.log('\n-------------------------------------------------------------------------------\n');
/* Task-1
Write a function named makeNegative() that takes a number and returns its negative value.
NOTE: The number can be negative already, in which case no change is required.
NOTE: Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. So, zero will stay as zero.
Examples
makeNegative(10)      	-> -10
makeNegative( -7)     	-> -7
makeNegative( 0)       	-> 0
makeNegative(0.45)   	-> -0.45
*/

//const makeNegative = num => num > 0 ? -num : num;

const makeNegative = (num) =>{
   if(num <= 0)return num;
   else return -num;

} 

console.log(makeNegative(10));// 	      -> -10
console.log(makeNegative( -7));//	      -> -7
console.log(makeNegative( 0));// 	      -> 0
console.log(makeNegative(0.45));//      -> -0.45


console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 2');
console.log('\n-------------------------------------------------------------------------------\n');
/* Task-2
Write a function isSumEvenOrOdd() which takes three numbers as arguments and determines if the sum of these numbers is odd or even.
Examples:
isSumEvenOrOdd(0, 1, 4) 	-> "odd"
isSumEvenOrOdd(0, -1, -5)      	-> "even"
isSumEvenOrOdd(0, 0, 0) 	-> "even"
isSumEvenOrOdd(7, 1, 9)       	-> "odd"
isSumEvenOrOdd(1, 1, 1)       	-> "odd"
*/
//const isSumEvenOrOdd = (num1, num2, num3) => (num1 + num2 + num3) % 2 === 0 ? 'even' : 'odd';


const isSumEvenOrOdd = (num1,num2,num3) =>{
   if((num1 + num2 + num3)  % 2 === 0) return 'even';
   else{
      return 'odd'
   }  
}

console.log(isSumEvenOrOdd(0, 1, 4));// 	-> "odd"
console.log(isSumEvenOrOdd(0, -1, -5));// -> "even"
console.log(isSumEvenOrOdd(0, 0, 0));// 	->"even"
console.log(isSumEvenOrOdd(7, 1, 9));// 	->"odd"
console.log(isSumEvenOrOdd(1, 1, 1));// 	-> "odd"


console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 3');
console.log('\n-------------------------------------------------------------------------------\n');
/* Task-3
Write a function named decimal2() which takes an array of numbers as an argument
 and returns the array with the same numbers rounded up or down
and represented with only two decimals.
Examples:
decimal2( [94.356, 8.9752] ) 		-> [ 94.36, 8.98 ]
decimal2( [76.62, 128.4, 84] ) 		-> [ 76.62, 128.4, 84 ]
decimal2( [20987, 3.53245, 12.345, 32.9] ) 	-> [ 20987, 3.53, 12.35, 32.90 ]
decimal2( [ ] ) 			-> [  ]
decimal2( [4.35623, 8.9742] ) 		-> [ 4.36, 8.97 ]
*/

const decimal2 = arr => arr.map(num => Number(num.toFixed(2)));

console.log(decimal2( [94.356, 8.9752] ));// 		            -> [ 94.36, 8.98 ]
console.log(decimal2( [76.62, 128.4, 84] ));// 		          -> [ 76.62, 128.4, 84 ]
console.log(decimal2( [20987, 3.53245, 12.345, 32.9] ));// 	-> [ 20987, 3.53, 12.35, 32.90 ]
console.log(decimal2( [ ] ));// 			-> [  ]
console.log(decimal2( [4.35623, 8.9742] ));// 		           -> [ 4.36, 8.97 ]


console.log('\n============Task-3============\n');


console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 4');
console.log('\n-------------------------------------------------------------------------------\n');
/* Task-4
Write a function named myPow() which takes two numbers, x and n, as its arguments and returns x to the power of n without using Math.pow().
3 to the power of 3 is 3*3*3 = 27. 
NOTE: Any number to the power of 0 equals 1. Any number to the power of 1 equals the number itself.
myPow(3, 3) 	-> 27.
myPow(10, 1) 	-> 10
myPow(100, 0) 	-> 1
myPow(1, 1) 	-> 1
myPow(4, 2)  ​	-> 16
myPow(0, 0)  	​-> 1
myPow(5, 3)  ​	-> 125
*/

const myPow = (x, n) => {
let result = 1;
 if(n === 0) return 1 
 else if(n === 1) return x;
 else for(let i = 1; i <= n; i++)  result *= x;
 return result;
}


console.log(myPow(3, 3));// 	  -> 27
console.log(myPow(10, 1));//  	-> 10
console.log(myPow(100, 0));// 	-> 1
console.log(myPow(1, 1));// 	  -> 1
console.log(myPow(4, 2));//	    -> 16
console.log(myPow(0, 0));//     -> 1
console.log(myPow(5, 3));//	    -> 125


console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 5');
console.log('\n-------------------------------------------------------------------------------\n');
/* Task-5
Write a function named findLongestWord() which takes a string as input and returns the longest word in the string.
NOTE: If the string is empty or consists of spaces only, then return empty string.
NOTE: If the string consists of multiple words having the longest word, then return the first occurrence.
findLongestWord("The quick brown fox jumped over the lazy dog") 	-> "jumped"
findLongestWord("This is a sample string for testing") 		->"testing" 
findLongestWord("One two ten") 				-> "One"
findLongestWord("") 					-> ""
findLongestWord("      ") 	
*/

// const findLongestWord = str => {
//   let strArr = str.trim().split(' ');
//   let longestW = '';
//   for(const w of strArr) {
//     if(w.length > longestW.length) longestW = w;
//     else longestW;
//   }
//   return longestW;
// }

const findLongestWord = str => str.trim().split(' ').reduce((longest, word) => word.length > longest.length ? longest = word : longest, '');

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));//     -> "jumped"
console.log(findLongestWord("This is a sample string for testing"));// 		          ->"testing"
console.log(findLongestWord("One two ten"));// 				                              -> "One"
console.log(findLongestWord(""));// 				                                      	-> ""
console.log(findLongestWord("    "));// 