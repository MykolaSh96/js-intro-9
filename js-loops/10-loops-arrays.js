
const numbers = [3, 4, 7, 3, 2, 2, 7];
 let sum = 0;
for(let i = 0; i < numbers.length; i++ ){
    if(i % 2 === 0) sum += numbers[i];
    
}
console.log(sum);




const numbers1 = [3, 4, 7, 3, 2, 2, 7];
 let productOfOddIndex = 1;
for(let i = 0; i < numbers.length; i++ ){
    if(i % 2 !== 0) productOfOddIndex *= numbers1[i];
    
}
console.log(productOfOddIndex);



const arr11 = [ 5, 8, 2, 1, 2 ];
const arr22 = [ 9, 3, 5, 1, 0 ];

const arr33 = [arr11[0] * arr22[0],arr11[1] * arr22[1],arr11[2] * arr22[2],arr11[3] * arr22[3],arr11[4] * arr22[4]];

console.log(arr11);
console.log(arr22);

console.log(arr33); 



const arr1 = [ 5, 8, 2, 1, 2 ];
const arr2 = [ 9, 3, 5, 1, 0 ];
console.log(arr1);
console.log(arr2);
const arr3 = [];
for(let i = 0; i < arr2.length; i++) {
   arr3.push(arr1[i] * arr2[i]);
}
console.log(arr3);


const array1 = [ 5, 8 ];
const array2 = [ 9, 3, 5, 1, 0 ];
// [ 45, 24, 5, 1, 0 ]
const array3 = [];

const shortArray = array1.length < array2.length ? array1 : array2;
const longArray = array1.length > array2.length ? array1 : array2;
for(let i = 0; i < shortArray.length; i++) {
    array3.push(array1[i] * array2[i]);
}
console.log(array3.concat(longArray.slice(shortArray.length)));



const a1 = [10, 3, 7];
const a2 = [3, 5, 1];
const a3 = [0, 9, 4, 3];
// Put together all these elements from a1, a2 and a3 in a descending order -> [10, 9, 7, 5, 4, 3, 3, 3, 1, 0]
/*
1. create a new array and store all the elements in it
2. sort this new array in a descending order
*/
// const allNumbers = a1.concat(a2, a3);
// const allNumbers = [a1, a2, a3].flat();
const allNumbers = [...a1, ...a2, ...a3];
allNumbers.sort((a, b) => b - a);
console.log(allNumbers);




const nums = [-1, 1, 3, 0, 2, 6, 8];
// Please find the first even number from the array -> 0

let biggestOdd1;

for(const number of nums){
    if(number % 2 !== 0 && (biggestOdd === undefined || number > biggestOdd)){
         biggestOdd = number;
    }
}
console.log(biggestOdd);

// Please find the biggest odd number from the array -> 3
let biggestOdd; // 3
for(const number of nums) { // 0
    if(number % 2 !== 0 && (biggestOdd === undefined || number > biggestOdd)) {
        biggestOdd = number;
    }
}
console.log(biggestOdd); // 3