

// Find the first city that has the odd length  -> Chicago

const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];
let firstOddLengthCity;
for(const city of cities ){
    if(city.length % 2 !== 0  ){
        firstOddLengthCity = city;
break;
}
}

console.log(firstOddLengthCity);


const moreThen6 = [];
for(const city of cities ){
    if(city.length >= 6 ) moreThen6.push(city);
       
}

console.log(moreThen6);


const includI = [];

for(const city of cities) {
    if( city.toLowerCase(). city.includes('i')); includI.push(city)
}
console.log(includI);