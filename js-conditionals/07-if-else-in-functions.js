function startE(fname){
    if(fname[0]==='E'|| fname[0] === 'e'){
        return true;
    }
    else{
        return false;
    }
}
console.log(startE('Emily'));
console.log(startE('emily'));
console.log(startE('Alex'));
console.log(startE(''));


function divisible5(number){
    if (number  % 5 === 0 ){
    return true;
}
else{
    return false;
}
}
console.log(divisible5(25));
console.log(divisible5(20));
console.log(divisible5(17));
console.log(divisible5(13));
console.log(divisible5(10));


function getGrate(number1){
    if(number1 >= 90 && number1 <= 100 )return 'A';
   else if(number1 >= 80 && number1 <= 89 )return 'B';
   else if(number1 >= 70 && number1 <= 79 )return 'C';
   else if(number1 >= 60 && number1 <= 69 )return 'D';
   
   return 'F';
}

console.log(getGrate(99));
console.log(getGrate(85));
console.log(getGrate(65));