// task 1
let r1 = Math.floor(Math.random() * 100) + 1
if (r1 <=50)
console.log(`${r1} is in the 1st half`);
else console.log(`${r1} in the 2nd half`)
if (r1 <=25)
console.log(`${r1} is in the 1st quarter`)
else if (r1 >= 26 && r1 <= 50)
console.log(`${r1} is in the 2nd quarter`)
else if (r1 >= 51 && r1 <= 75)
console.log(`${r1} is in the 3rd quarter`)
else 
console.log(`${r1} is in the 4th quarter`)


// task 2
let ran1 = Math.floor(Math.random() * 100) + 1
let ran2 = Math.floor(Math.random() * 100) + 1
let ran3 = Math.floor(Math.random() * 100) + 1
console.log(ran1,ran2,ran3)
let ran4 = (ran1 % 2 === 0 && ran2 % 2 === 0 && ran3 % 2 === 0)
console.log(ran4)

//task 3
let t2character = 'a' 
if (t2character.charCodeAt() <= 57 && t2character.charCodeAt() >= 48)
console.log(`"${t2character}" is a digit`)
else if (t2character.charCodeAt() >= 65 && t2character.charCodeAt() <=90 || 
t2character.charCodeAt() >= 97 && t2character.charCodeAt() <= 122)
console.log(`"${t2character}" is a letter`)
else if (t2character.charCodeAt() === 32)
console.log(`"${t2character}" is a whitespace`)
else console.log(`${t2character} is a special character`);

//task 4
function hasBlue(str) {
    return str.toLowerCase().includes('blue');
}
console.log(hasBlue("Hello World"));         // false
console.log(hasBlue("Javabluescript"));      // true
console.log(hasBlue("Tech Blue Global"));    // true
console.log(hasBlue("1234"));                // false
console.log(hasBlue("ABLUEC"));              // true



//task 5
// Task - 5
function startT(str) {
    return str.toLowerCase().startsWith('t');
}
console.log(startT("Hello World"));    //false
console.log(startT("typescript"));    // true
console.log(startT("TechGlobal"));    //true
console.log(startT("1234"));    // false
console.log(startT("ABC"));    // false