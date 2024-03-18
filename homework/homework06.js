console.log('--------Task1--------');

/*
Requirement:

Write a function named noSpace() which takes a string as argument and returns a new string with all the spaces removed.

Examples:
noSpace("") 			->  ""
noSpace("Javascript") 		->  "Javascript"
noSpace("    Hello   ") 		-> "Hello"
noSpace(" Hello World   ") 	-> "HelloWorld”
noSpace("Tech Global") 		-> "TechGlobal"
*/

function noSpace(string){
   return string.trim();
}

console.log(noSpace(""));
console.log(noSpace("Javascript"));
console.log(noSpace("    Hello   ") );
console.log(noSpace(" Hello World   ") );
console.log(noSpace("Tech Global") );



console.log('--------Task2--------');
/*
Requirement:
Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.

Examples:
replaceFirstLast("") 		->  ""
replaceFirstLast("Hello") 		->  "oellH"
replaceFirstLast("Tech Global") 	-> "lech GlobaT"
replaceFirstLast("A") 		-> ""
replaceFirstLast("    A      ") 	-> ""
*/

function replaceFirstLast(str) {
   str = str.trim();

   if (str.length < 2) {
       return "";
   }
else
   return str.charAt(str.length - 1) + str.substring(1, str.length - 1) + str.charAt(0);
}

console.log(replaceFirstLast(""));  
console.log(replaceFirstLast("Hello"));  
console.log(replaceFirstLast("Tech Global"));  
console.log(replaceFirstLast("A")); 
console.log(replaceFirstLast("    A      "));  




console.log('--------Task3--------');
/*
Requirement:
Write a function named hasVowel() which takes a string argument and returns true if the string has a vowel,
returns false if the string doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.

Examples:
hasVowel("") 		-> false
hasVowel("Javascript") 		-> true
hasVowel("Tech Global") 		-> true
hasVowel("1234") 		-> false
hasVowel("ABC") 		-> true
*/

function hasVowel(str){
   str = str.toLowerCase()
   let vovel = 'aeoui' 
 if(str.includes(vovel)){
   return true;
 }   
}


function hasVowel(str) {
   str = str.toLowerCase();
   let vowels = 'aeiou';
   for (const char of str) {
       if (vowels.includes(char)) {
           return true;
       }
   }
   return false;
}

console.log(hasVowel("")); 
console.log(hasVowel("Javascript")); 
console.log(hasVowel("Tech Global")); 
console.log(hasVowel("1234")); 
console.log(hasVowel("ABC")); 
console.log(hasVowel("javaskript")); 

 

console.log('--------Task4--------');
/*
Requirement:

Write a function named checkAge() which takes a number argument to be 
considered as the yearOfBirth and returns a message below based on the given 
year.
If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.

Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID"

*/
function checkAge(yearOfBirth){
   const curentYear = 2023;
   const age = curentYear - yearOfBirth;
   
   if( age < 0 || age > 120){
      return 'AGE IS NOT VALID';
   }else if (age < 16){
      return 'AGE IS NOT ALLOWED';
   }else{
      return 'AGE IS ALLOWED';
   }
   }
   console.log(checkAge(1999));
   console.log(checkAge(2015));
   console.log(checkAge(2007));
   console.log(checkAge(2050));
   console.log(checkAge(1920));
   console.log(checkAge(1800));



console.log('--------Task5--------');
/*
Requirement:
Write a function named averageOfEdges() which takes three number 
arguments and will return average of min and max numbers .

Examples:
averageOfEdges(0, 0, 0)  -> 0
averageOfEdges(0, 0, 6)  -> 3
averageOfEdges(-2, -2, 10)  -> 4
averageOfEdges(-3, 15, -3)  -> 6
averageOfEdges(10, 13, 20)  -> 15
*/
function averegeOfEdges(num1, num2, num3){
   let max = Math.max(num1, num2, num3);
   let min = Math.min(num1, num2, num3);

   const averege = (max + min)/ 2;

   return averege;
}

console.log(averegeOfEdges(0, 0, 0));
console.log(averegeOfEdges(0, 0, 6));
console.log(averegeOfEdges(-2, -2, 10));
console.log(averegeOfEdges(-3, 15, -3));
console.log(averegeOfEdges(10, 13, 20));



console.log('--------Task6--------');

/*
Requirement:
Write a function named noA() which takes an array of strings as argument and 
will return a new array with all elements starting with "A" or "a" replaced with 
"###".

Examples:
noA(["javascript", "hello", "123", "xyz"])  ->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"])  ->  ["###", "123", "###", 
"javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"])  -> ["###", "###", "###", "###", 
"###"]
*/


console.log('--------Task7--------');
console.log('--------Task8--------');
console.log('--------Task9--------');
console.log('--------Task10--------');
console.log('--------Task11--------');
console.log('--------Task12--------');
console.log('--------Task13--------');





