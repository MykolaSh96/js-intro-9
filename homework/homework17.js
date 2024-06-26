console.log("\n----------Task01----------\n")

/** 
 * Requirement:
Write a function named findMedian() which takes two arrays of numbers as its arguments and return the median of the two sorted arrays. 

NOTE: The median is the middle number of a sorted array. So the median of [1,3], [2] would be 2. If the array has an even length, you are to find the average of the 2 middle numbers
findMedian([1, 3], [2]) 		-> 2
findMedian([1, 2], [3, 4]) 		-> 2.5
findMedian([4], [3]) 		-> 3.5
findMedian([4], [])  		-> 4
findMedian([0], [0,1])  		​-> 0

*/

function findMedian(nums1, nums2) {
  let mergedArray = nums1.concat(nums2);
  mergedArray.sort((a, b) => a - b);
  let n = mergedArray.length;
  
  if (n % 2 === 1) {
      return mergedArray[Math.floor(n / 2)];
  } else {
      let mid1 = mergedArray[Math.floor((n - 1) / 2)];
      let mid2 = mergedArray[Math.floor(n / 2)];
      return (mid1 + mid2) / 2;
  }
}

console.log(findMedian([1, 3], [2]));      // -> 2
console.log(findMedian([1, 2], [3, 4]));   // -> 2.5
console.log(findMedian([4], [3]));         // -> 3.5
console.log(findMedian([4], []));          // -> 4
console.log(findMedian([0], [0, 1]));      // -> 0




console.log("\n----------Task02----------\n")
/**
 * Requirement:
Write a function named calculateFactorial() which takes a number as an argument and returns the factorial of that number.
Note: Factorial is the product of all positive integers less than or equal to a given positive integer and denoted by that integer and an exclamation point. Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial zero is defined as equal to 1.
calculateFactorial(0) 	-> 1
calculateFactorial(1) 	-> 1
calculateFactorial(5) 	-> 120
calculateFactorial(6) 	-> 720
calculateFactorial(10) 	-> 3628800
calculateFactorial(4) 	-> 24

 */
function calculateFactorial(num){
  if (num === 0 || num === 1){
    return 1;
  }
  let factorial = 1;
  for (let i = 2; i <= num; i++){
    factorial *=i;
  }
  return factorial;
}
console.log(calculateFactorial(0));  // -> 1
console.log(calculateFactorial(1));  // -> 1
console.log(calculateFactorial(5));  // -> 120
console.log(calculateFactorial(6));  // -> 720
console.log(calculateFactorial(10)); // -> 3628800
console.log(calculateFactorial(4));  // -> 24


console.log("\n----------Task03----------\n")
/**
 * Requirement:
Write a function named calculateGCD() which takes two numbers as arguments and returns the greatest common divisor of the two numbers.
NOTE: GCD is a mathematical concept used to describe the largest number that divides two or more integers without leaving a remainder. In other words, it is the largest number that is a common factor of two or more numbers.
Examples:
calculateGCD(8, 12) 	-> 4
calculateGCD(17, 5) 	-> 1
calculateGCD(48, 18) 	-> 6
calculateGCD(0, 5) 	-> 5
calculateGCD(21, 14) 	-> 7
calculateGCD(60, 48) 	-> 12

 */

const calculateGCD = (a, b) => {
  if(b === 0){
    return a;
  }
  return calculateGCD(b, a % b);
};

console.log(calculateGCD(8, 12));  // -> 4
console.log(calculateGCD(17, 5));  // -> 1
console.log(calculateGCD(48, 18)); // -> 6
console.log(calculateGCD(0, 5));   // -> 5
console.log(calculateGCD(21, 14)); // -> 7
console.log(calculateGCD(60, 48)); // -> 12

console.log("\n----------Task04----------\n")
/**
 * Requirement:
Write a function named calculateLCM() which takes two numbers as arguments and returns the least common multiple of the two numbers.
NOTE: LCM is a mathematical concept used to describe the largest number that divides two or more integers without leaving a remainder. In other words, it is the largest number that is a common factor of two or more numbers.
Examples:
calculateLCM(8, 12) 	-> 24
calculateLCM(17, 5) 	-> 85
calculateLCM(48, 18) 	-> 144
calculateLCM(0, 5) 	-> 0
calculateLCM(21, 14) 	-> 42
calculateLCM(60, 48) 	-> 240

 */

const calculateGCD1 = (a, b) => {
  if (b === 0) {
      return a;
  }
  return calculateGCD1(b, a % b);
};

const calculateLCM = (a, b) => {
  if (a === 0 || b === 0) {
      return 0;
  }
  return Math.abs(a * b) / calculateGCD1(a, b);
};

console.log(calculateLCM(8, 12));  // -> 24
console.log(calculateLCM(17, 5));  // -> 85
console.log(calculateLCM(48, 18)); // -> 144
console.log(calculateLCM(0, 5));   // -> 0
console.log(calculateLCM(21, 14)); // -> 42
console.log(calculateLCM(60, 48)); // -> 240
