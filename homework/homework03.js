console.log('\n---------------Task 1-----------------');

let num1 = Math.floor(Math.random() * 100 + 1 - 1) + 1;
let num2 = Math.floor(Math.random() * 100 + 1 - 1) + 1;
let num3 = Math.floor(Math.random() * 100 + 1 - 1) + 1;

let averege = (num1 + num2 + num3) / 3;
console.log(averege);
console.log(num1, num2, num3);
console.log(averege >= 50);



console.log('\n---------------Task 2-----------------');

let num4 = Math.floor(Math.random() * 3 + 1 - 1) + 1;
let num5 = Math.floor(Math.random() * 3 + 1 - 1) + 1;
let num6 = Math.floor(Math.random() * 3 + 1 - 1) + 1;

console.log(num4, num5, num6);

if (num4 === num5 && num5 === num6) {
    console.log("TRIPLE MATCH");
}
else if (num4 === num5 || num4 === num6 || num5 === num6) {
    console.log("DOBLE MATCH");
}
else {
    console.log("NO MATCH");
}


console.log('\n---------------Task 3-----------------\n');

function hasA(str) {
    return (str.includes('A') || str.includes('a'));

}

console.log(hasA("Apple"));
console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));



console.log('\n---------------Task 4-----------------');


function dobleOrTripleWord(str) {
    if (str.length % 2 === 0) {
        return str + str + str;
    }
    else {
        return str + str;
    }
}
console.log(dobleOrTripleWord("Tech"))
console.log(dobleOrTripleWord("Apple"))
console.log(dobleOrTripleWord(""))
console.log(dobleOrTripleWord(" "))
console.log(dobleOrTripleWord("1"))
console.log(dobleOrTripleWord("22"))



console.log('\n---------------Task 5-----------------');

function firstWord(string) {
    let word = string.slice(0, string.indexOf(' '));
    return word;

}
console.log(firstWord("Hello World"));
console.log(firstWord("I like JavaScript"));
console.log(firstWord("My name is..."));
console.log(firstWord("Hello"));
console.log(firstWord(""));






console.log('\n---------------Task 6-----------------');

function lastWord(string1) {
    let lastWord = string1.slice(string1.lastIndexOf(' ') + 1);
    return lastWord;

}
console.log(lastWord("Hello World"));
console.log(lastWord("I like JavaScript"));
console.log(lastWord("My name is..."));



console.log('\n---------------Task 7-----------------');

function firstlastWord(string2) {
    let firstWord1 = string2.slice(0, string2.indexOf(' '));
    let lasttword2 = string2.slice(string2.lastIndexOf(' ') + 1);
    return firstWord1 + lasttword2;
}

console.log(firstlastWord("Hello World"));
console.log(firstlastWord("I like JavaScript"));
console.log(firstlastWord("My name is..."));


console.log('\n---------------Task 8-----------------');

function startVowel(string3) {
    let firstChar = string3.charAt(0);
    return firstChar === 'A' || firstChar === 'a' ||
        firstChar === 'E' || firstChar === 'e' ||
        firstChar === 'I' || firstChar === 'i' ||
        firstChar === 'O' || firstChar === 'o' ||
        firstChar === 'U' || firstChar === 'u';
}

console.log(startVowel("Apple"));
console.log(startVowel("Tech"));
console.log(startVowel("abc"));
console.log(startVowel("Aruba"));
console.log(startVowel("Omar"));
console.log(startVowel("I'm"));


console.log('\n---------------Task 9-----------------');

function swap4(string4) {
    if (string4.length < 8) {
        return '';
    }
    else {
        let firstFour = string4.slice(0, 4)
        let lastFour = string4.slice(-4);
        let middle = string4.slice(4, -4)

        return lastFour + middle + firstFour
    }
}
console.log(swap4('JavaScript'))
console.log(swap4('TechGlobal'))
console.log(swap4('Apple'))
console.log(swap4('bb'))



console.log('\n---------------Task 10-----------------');

function swapfirstLastWord(string) {
    let fword = string.slice(0, string.indexOf(' '));
    let middle = string.slice(string.indexOf(' ') + 1, string.lastIndexOf(' '));
    let lastWord = string.slice(string.lastIndexOf(' ') + 1);
    return `${lastWord}  ${middle}  ${fword}`;
}


console.log(swapfirstLastWord("foo bar foo bar"));
console.log(swapfirstLastWord("I like JavaScript"));
console.log(swapfirstLastWord("My name is..."));
console.log(swapfirstLastWord(" "));
console.log(swapfirstLastWord(""));
console.log(swapfirstLastWord("Hello"));





console.log('\n---------------Task 5-----------------');

function firstWord(word) {
     word = word.trim();
    let spaceIndex = word.indexOf(' ');
    if (spaceIndex === -1) {
        return word;
    }
    return word.substring(0, spaceIndex);
}

console.log(firstWord("Hello World")); 
console.log(firstWord("I like JavaScript")); 
console.log(firstWord("Hello"));
console.log(firstWord("")); 
console.log(firstWord("    ")); 


