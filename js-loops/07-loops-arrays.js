const names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];
// looping array elements with for loop
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


console.log('\n--------for...of loop j start--------\n');

let countJ1 = 0;

for(const name of names){
    if(name.toLocaleLowerCase().startsWith('j')) countJ1++;
}

console.log('The total count of names starting with j is = ', countJ1);




let countJ2 = 0;

for(i = 0; i < names.length; i++){
    if(names[i].toLocaleLowerCase().startsWith('j')) countJ2++;
}
console.log('The total count of names starting with j is = ', countJ2);







// looping array elements with for...of loop
for(const name of names) {
    console.log(name);
}








