

const numbers = [3, 4, 7, 3, 2, 2, 7];
let sum = 1;

for(let i = 3; i < numbers.length; i++) {
   sum *= numbers[i];
}
console.log(sum);


const nums = [ 1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ];
let sum1 = 0; 
 
for(let i = 0; i <= 2; i++) {

    //sum2 +=nums[nums.length - (i + 1)];
    sum1 += nums[i] + nums.at(-i-1);
}
  console.log(sum1);
