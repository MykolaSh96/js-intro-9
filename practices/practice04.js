let f1num1 = 0;
let f1num2 = 0;
let f1num3 =  f1num1 === f1num2;
console.log(f1num3);


let t2character = '7';

let t2ascii = t2character.charCodeAt(0);

// if else solution
if(48 <= t2ascii && t2ascii <= 57) console.log(`"${t2character}" is a digit`);
else if((65 <= t2ascii && t2ascii <= 90) || (97 <= t2ascii && t2ascii <= 122)) console.log(`"${t2character}" is a letter`);
else console.log('INVALID INPUT');

// ternary solution
48 <= t2ascii && t2ascii <= 57
? console.log(`"${t2character}" is a digit`)
: (65 <= t2ascii && t2ascii <= 90) || (97 <= t2ascii && t2ascii <= 122) 
? console.log(`"${t2character}" is a letter`)
: console.log('INVALID INPUT');

// switch solution
switch(true) {
    case 48 <= t2ascii && t2ascii <= 57:
        console.log(`"${t2character}" is a digit`);
        break;
    case (65 <= t2ascii && t2ascii <= 90) || (97 <= t2ascii && t2ascii <= 122):
        console.log(`"${t2character}" is a letter`);
        break;
    default:
        console.log('INVALID INPUT');
}


// Task 3 
let t3character1 = "A"
let t3ascii1 = t3character1.charCodeAt(0);
if ((65 <= t3ascii1 && t3ascii1 <= 90)) console.log(`"${t3character1}" is an uppercase latter`);
else if (97 <= t3ascii1 && t3ascii1 <= 122) console.log(`"${t3character1}" is lowercase leter`);
else console.log('INVALID INPUT');




let t4character1 = "^"
let t4ascii1 = t4character1.charCodeAt(0);
if ((65 <= t4ascii1 && t4ascii1 <= 90)) console.log(`"${t4character1}" is not a special charakter`);
else if (97 <= t4ascii1 && t4ascii1 <= 122) console.log(`"${t4character1}" is not a special charakter`);
else if (48 <= t4ascii1 && t4ascii1 <= 57) console.log(`"${t4character1}" is not a special charakter`);
else console.log(`"${t4character1}" is a Special character`);



let t5character = "a"

if (firstCharislater );

let t5ascii1 = t5character1.charCodeAt(0);

if ((65 <= t5ascii1 && t5ascii1 <= 90) ||(97 <= t5ascii1 && t5ascii1 <= 122)){
   let vovel = t5ascii1 === 'A' || t5ascii1 === 'a' ||
   t5ascii1 == 'E' || t5ascii1 == 'e' ||
   t5ascii1 == 'O' || t5ascii1 == 'o' ||
   t5ascii1 =='U' || t5ascii1 == 'u' ||
   t5ascii1 == 'I' || t5ascii1 == 'i';
   
   
   console.log(vovel);
}
else {
    console.log(` INVALID INPUT `);
}

(48 <= t4ascii1 && t5ascii1 <= 57)



function isUpperCase(char) {
    let charAscii = char.charCodeAt(0);
    return 65 <= t4ascii1 && t4ascii1 <= 90;
}
function isLowerCase(char){
    let charAscii = char.charCodeAt(0);
    return 97 <= charAscii && charAscii <= 122;
}

function isLetter(char){
    let charAscii = char.charCodeAt(0);
    return (65 <= charAscii && charAscii <= 90) ||(97 <= charAscii && charAscii <= 122)
}
console.log(isLetter('4'))

function isLetteeOrDigit(char){
   return isDigit(char) || isLetter(char);
}

console.log(isLetteeOrDigit('5'));
console.log(isLetteeOrDigit('A'));
console.log(isLetteeOrDigit('j'));
console.log(isLetteeOrDigit(' '));
console.log(isLetteeOrDigit('1'));


const {CharacterHelper} = require('../utils/CharacterHelper')
const {generateRandomNumber} = require('../utils/MathHelper')
