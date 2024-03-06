// const numbers1 = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
// attempt = 0;
// for(i = 0; i < numbers1.length; i++){
// if(numbers1[i] > 0) attempt++;
// }
// console.log(attempt);



//  const numbers2 = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
//  attempt = 0;
//  for(let i = 0; i < numbers2.length; i++){
//  if(numbers2[i] < 0) attempt++;
//  }
//  console.log(attempt);


// const numbers3 = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
// attempt = 0;
// for(let i = 0; i < numbers3.length; i++){
// if(numbers3[i] === 0) attempt++;
// }
// console.log(attempt);

// const numbers4 = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
// attempt = 0;
// for(let i = 0; i < numbers4.length; i++){
// if(numbers4[i] % 2 === 0) attempt++;
// }
// console.log(attempt);




const numbers4 = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
attempt = 0;
for(let i = 0; i < numbers4.length; i++){
if(numbers4[i] % 2 === 0 && numbers4[i] >= 0) attempt++;
}
console.log(attempt);


attempt = 0;
for(const n of numbers4){
    if(n % 2 === 0 && n >= 0) attempt++; 
}
console.log(attempt); 