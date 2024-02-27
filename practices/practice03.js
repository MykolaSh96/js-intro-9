// Task 1

function tripleWord(triple){
return triple + triple + triple;
}
console.log(tripleWord('Mykola'));



// Task 2

function has4(str){

    return str.length >= 4;
}
console.log(has4('Techsdgdgdf'));


// Task 3
function celciusToFahrenheit(number){
    return (number * 9) / 5 + 32;
    
}
console.log(celciusToFahrenheit(25));

// Task 4 

function kgToPounds(number){
 let pount = number * 2.2;
 return pount
}
console.log(kgToPounds(4));


// Task 5

function rectangleArea(x, y){
    
let area = x * y
    return  area;
}
// console.log(rectangleArea(5,5));



function rectanglePerimeter(x, y){


    let perimeter = 2  *(x + y);
    return  perimeter;
}
console.log(rectangleArea(5,5));
console.log(rectanglePerimeter(5,5));


function  squareArea(x){
    let area = x * x;
    return area;
}
console.log(squareArea(5));

function squarePerimeter(x){
     let perimeter = 4 * x;
     return perimeter;
}

console.log(squarePerimeter(5));


