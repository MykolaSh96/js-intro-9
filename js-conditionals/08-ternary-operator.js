 let gender = 'femaile';
// let fname;

// if (gender === 'male'){
//     fmale = 'Alex';
// }
// else{
//     fname= 'Emma';
// }

// console.log(fname);


gender === 'male' ? fname ='Alex': fname ='Emma';
console.log(fname);



let mood; //GREAT(70) or GOOD(<70)

let mock_score =60;

mood = mock_score >= 70 ? mood ="GREAT" : mood="GOOD";
console.log(mood);
 
const date = new Date(); 

let day = date.getDay();

const date = new Date();
let day = date.getDay(); // returns 0 to 6 inclusive

switch (5) {
    case 0:
        day = 'WEEKEND';
        break;
    case 1:
        day = 'WEEKDAY';
        break;
    case 2:
        day = 'WEEKDAY';
        break;
    case 3:
        day = 'WEEKDAY';
        break;
    case 4:
        day = 'WEEKDAY';
        break;
    case 5:
        day = 'WEEKDAY';
        break;
    case 6:
        day = 'WEEKEND';
        break;
}
console.log(day);


let r1 = Math.floor(Math.random() * 100) + 1;

switch (true) {
    case r1 <= 25:  
    console.log("FIRST");
        break
    case r1 <= 50:
        console.log("SECOND");
        break
    case r1 <= 75:
        console.log("THIRT");
        break
    default:
        console.log("FOURTH")
}




let num1 = Math.floor(Math.random()* 10 - 1 + 1 ) + 1;
let num2 = Math.floor(Math.random()* 10 - 1 + 1 ) + 1;
let num3 = Math.floor(Math.random()* 10 - 1 + 1 ) + 1;

let smallest_num = Math.min(num1, num2, num3);

console.log(` ${num1}, ${num2} ,${num3} -> ${smallest_num}`);




function startsVovel(str){
    let firstChar= str.charAt(0)
    return (firstChar ==='A' ||   firstChar ==='a' || firstChar ==='E' || firstChar ==='e' || firstChar ==='O' || firstChar ==='o' || firstChar ==='U' || firstChar ==='u' || firstChar ==='I' || firstChar ==='i');
    }
    
    console.log(startsVovel("Tech"))
    console.log(startsVovel("Apple"))
    console.log(startsVovel("abs"))





// function startVovel(word) {
//     let startVovel = word.charAt(0);
//     return startVovel.includes('A') || startVovel.includes('a') ||
//         startVovel.includes('E') || startVovel.includes('e') ||
//         startVovel.includes('O') || startVovel.includes('o') ||
//         startVovel.includes('U') || startVovel.includes('u') ||
//         startVovel.includes('I') || startVovel.includes('i');
// }

// console.log(startVovel('Tech'));
// console.log(startVovel('Apple'));
// console.log(startVovel('abc'));

// function startVovel(word) {
//     let startVovel = word.toLowerCase().charAt(0);
//     return startVovel.includes('a') || startVovel.includes('e') ||
//         startVovel.includes('o') || startVovel.includes('u') || startVovel.includes('i');
// }
// console.log(startVovel('Tech'));
// console.log(startVovel('Apple'));
// console.log(startVovel('abc'));
// console.log(startVovel('1'));



 r1 = 5;
//console.log(parseInt(r1));
console.log(r1);


console.log( ' ' == false);
console.log("" === 0);







