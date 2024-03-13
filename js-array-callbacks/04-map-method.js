
const  sentences = ['Good Morning', 'I like Arrays', 'It is Sunday'];

// const  newArr = [];

// for(const sentence of sentenses){
//     newArr.push(sentence.split(' ')[0]);
// }


// sentenses.map(function(sent) {
//     return sent.split(' ')[0]
// });


const newArr = sentences.map(x =>  x.split(' ')[0]);

console.log(sentences)
console.log(newArr)



const lastWord = sentences.map(sentence => sentence.split(' ').slice(-1)).flat();
const lastWord1 = sentences.map(sentence => sentence.split(' ').at(-1));

console.log(lastWord)
console.log(lastWord1)


const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];
// Create a new array storing the given salaries with 2 decimals -> [1000.23, 5234.35, 721.98, 3452.50]

const newArr3 = salaries.map(salary => Number(salary.toFixed(2)))

console.log(newArr3)