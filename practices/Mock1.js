
//1.Find if a number is even or not.


let randomNumber = (Math.floor(Math.random() * 10 - 1 + 1) + 1);

let result = (randomNumber % 2 === 0);

console.log(`${randomNumber}  is  ${result}.`);


//2.Find if number is odd or not.

let num1 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);

let result1 = num1 % 2 !== 0;

console.log(num1);
console.log(result1);

//3. Find if a number is positive or not.

let num2 = (Math.floor(Math.random() * 11) - 5);

let result2 = num2 >= 0;

console.log(num2);
console.log(result2);


// 4. Find if a number is negative or not.

let num4 = (Math.floor(Math.random() * 11) - 5);

// r1=Math.floor(Math.random()*(5+5+1))-5;
// console.log(r1);
// generate random number from -5 to 5
let result4 = num4 <= 0;

console.log(num4);
console.log(result4);


// 5. Find if a number is divisible by 5 or not.

let num5 = (Math.floor(Math.random() * 50 - 1 + 1) + 1);

let result5 = num5 % 5 === 0;

console.log(`${num5} -> ${result5}`);



// 6. Find if a number is divisible by 7 or not.

let num6 = (Math.floor(Math.random() * 50 - 1 + 1) + 1);

let result6 = num6 % 7 === 0;

console.log(`${num6} -> ${result6}`);


// 7. Calculate the sum of 2 random numbers.

let num7 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);
let num8 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);

console.log(`${num7}, ${num8}`);
console.log(num7 + num8);


// 8. Calculate the absolute difference of 2 random numbers.

let num11 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);
let num12 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);

console.log(`${num11}, ${num12}`);
console.log(num11 - num12);




// 9. Calculate the product of 2 random numbers.

let num9 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);
let num10 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);

console.log(`${num9}, ${num10}`);
console.log(num9 * num10);




// 10. Calculate the square of a number.

let num3 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);

let squerOfNum = num3 * num3;

console.log(num3);
console.log(squerOfNum);



// 11. Calculate the cube of a number.

let num13 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);

let cubeOfNum = num13 ** 3;

console.log(num13);
console.log(cubeOfNum);


// 12. Convert miles to kilomiters.

let mi = (Math.floor(Math.random() * 10 - 1 + 1) + 1);
let km = (mi * 1.6);

console.log(mi);
console.log(km);


//13.Convert kilogram to pounds

let kg = (Math.floor(Math.random() * 100 - 1 + 1) + 1);
let lb = (kg * 2.2);

console.log(`${kg} -> ${lb}`);


// 14. Find if numbers are equal or not

let num14 = (Math.floor(Math.random() * 3 - 1 + 1) + 1);
let num15 = (Math.floor(Math.random() * 3 - 1 + 1) + 1);

let equal = num14 === num15;

console.log(`${num14} ${num15}`);
console.log(equal);


// 15. Find if numbers are equal or not

let num16 = (Math.floor(Math.random() * 100 - 1 + 1) + 1);

let equal1 = (num16 >= 16);
console.log(num16);
console.log(equal1);

// 16. Find the greatest number between 2 random numbers.

let num17 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);
let num18 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);

let n1 = Math.max(num17, num18);

console.log(`${num17}, ${num18} -> ${n1}`);



// 17. Find the greatest number between 3 random numbers.

let num19 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);
let num20 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);
let num21 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);

let n2 = Math.max(num19, num20, num21);

console.log(`${num19}, ${num20}, ${num21} -> ${n2}`);


// 18. Find the smaller number between 2 random numbers.

let num22 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);
let num23 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);

let n3 = Math.min(num22, num23);

console.log(`${num22}, ${num23} -> ${n3}`);


// 19. find the smallest number between 3 random numbers.

let num24 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);
let num25 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);
let num26 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);

let n4 = Math.min(num24, num25, num26);

console.log(`${num24}, ${num25}, ${num26} -> ${n4}`);



// 20. Calculate the average of 3 random numbers.

let num28 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);
let num29 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);
let num30 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);

let averege = ((num28 + num29 + num30) / 3);
console.log(`${num28}, ${num29}, ${num30} `);
console.log(averege);

// 21. Calculate the absolute difference between max and min of 3 random numbers.

let num31 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);
let num32 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);
let num33 = (Math.floor(Math.random() * 10 - 1 + 1) + 1);

let gr1 = Math.max(num31, num32, num33);
let min1 = Math.min(num31, num32, num33);
let absolutDiff = (gr1 - min1);


console.log(`${num31},${num32},${num33} -> ${absolutDiff}`);



// Task 22 

let rnum = Math.floor(Math.random() * 101) + 1;

console.log(rnum);


if (rnum <= 25) {
    console.log('1st quater is 1-25');
}
else if (rnum <= 50) {
    console.log('2st quater is 25-50');
}
else if (rnum <= 75) {
    console.log('3st quater is 50-75');
}
else {
    console.log('4st quater is 75-100');
}



//Task23 

let rnum1 = Math.floor(Math.random() * 101) + 1;

console.log(rnum1)

if (rnum1 <= 50) {
    console.log('1st half is 1-50');
}
else {
    console.log('2st half is 50-100');
}

//Task 24 

let num40 = Math.floor(Math.random() * 10 + 1 - 1) + 1;
let num41 = Math.floor(Math.random() * 10 + 1 - 1) + 1;
let sum = (num40 + num41);
let isEven = (sum % 2 === 0);
console.log(num40);
console.log(num41);
console.log(isEven);



//Task 25 

let num43 = Math.floor(Math.random() * 10 + 1 - 1) + 1;
let num44 = Math.floor(Math.random() * 10 + 1 - 1) + 1;
let sum1 = (num43 + num44);
let isEven1 = (sum1 % 2 !== 0);
console.log(num43);
console.log(num44);
console.log(isEven1);

// Task 26

function rectangleArea(x, y) {
    let area = x * y;
    return area;
}

console.log(rectangleArea(10, 5));

// Task 27

function rectanglePerimeter(x, y) {
    let perimeter = 2 * (x + y);
    return perimeter;
}
console.log(rectanglePerimeter(5, 7));




// Task 28

function squareArea(x) {
    let area = x * x;
    return area;
}
console.log(squareArea(5));
console.log(squareArea(10));
console.log(squareArea(15));
console.log(squareArea(78));


// Task 29
function squarePerimeter(x) {
    let perimeter = 4 * x;
    return perimeter;
}
console.log(squarePerimeter(5));
console.log(squarePerimeter(10));
console.log(squarePerimeter(15));
console.log(squarePerimeter(100));


//Task 30 

function dobleWord(word) {
    let dobleWor1 = word + word;
    return dobleWor1
}

console.log(dobleWord('Hi'))
console.log(dobleWord('World'))
console.log(dobleWord('Tech'))

// Task 31 

function firstCharacter(word) {
    let fcharacter = word.charAt(0);
    return fcharacter;
}
console.log(firstCharacter('Hi'))
console.log(firstCharacter('World'))
console.log(firstCharacter('Tech'))

// Task35

function firstLast(word) {
    if (word.length < 2) {
        return word;
    } else {
        let firstCharacter = word.charAt(0);
        let lastCharacter = word.charAt(word.length - 1);
        return firstCharacter + lastCharacter;
    }
}

console.log(firstLast("Tech"));       // Output: "Th"


function firstLas(word) {
    if (word.length < 2) {
        return word;
    }
    else {
        return word[0] + word[word.length - 1];
    }
}




// Task 36 

function hasFive(str) {
    let str1 = str.length >= 5;
    return str1;
}
console.log(hasFive('Tech'))
console.log(hasFive('Global'))
console.log(hasFive(''))
console.log(hasFive('12345'))
console.log(hasFive('Hello'))

//Task 37
function middle(word) {

    if (word.length === 0) {
        return "";
    } else if (word.length % 2 === 0) {
        return word.substring(word.length / 2 - 1, word.length / 2 + 1);
    } else {
        return word.charAt(word.length / 2);
    }
}

console.log(middle('Cat'));
console.log(middle('Global'));
console.log(middle('3'));
console.log(middle('a'));
console.log(middle(' '));
console.log(middle(''));
console.log(middle('Mykolakdfkdflkdfkldflfkld'));


// Task 38

function longer(word1, word2) {
    if (word1.length > word2.length) {
        return word1;
    }
    else {
        return word2
    }

}

console.log(longer("Tech", "Global"))
console.log(longer("G11111", "Global"))
console.log(longer("G11111", "Tech"))
console.log(longer("Hi", "Hello"))


// TAsk 39

function shorter(word1, word2) {
    if (word1.length < word2.length) {
        return word1;
    }
    else {
        return word2
    }

}

console.log(shorter("Tech", "Global"))
console.log(shorter("G11111", "Global"))
console.log(shorter("G11111", "Tech"))
console.log(shorter("Hi", "Hello"))

// Task 40
function concat(word, word1) {
    let word_concat = word.concat(word1);
    return word_concat;
}
console.log(concat("Tech", "Global"))
console.log(concat("G11111", "Tech"))
console.log(concat("Hi", "Hello"))
console.log(concat("67890", "12345"))
console.log(concat("", "abc"))


// Task 41 

function startVowel(string) {
    let firstChar = string.charAt(0).toLowerCase();
    return firstChar === 'A' || firstChar === 'a' ||
        firstChar === 'E' || firstChar === 'e' ||
        firstChar === 'O' || firstChar === 'o' ||
        firstChar === 'U' || firstChar === 'u' ||
        firstChar === 'I' || firstChar === 'i';
}

console.log(startVowel("Im"));
console.log(startVowel("Hello World"));
console.log(startVowel("Javabluescript"));
console.log(startVowel("Tech Blue Global"));
console.log(startVowel("1234"));
console.log(startVowel("ABLUEC"));




function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
console.log(rectangleArea(0, 0));