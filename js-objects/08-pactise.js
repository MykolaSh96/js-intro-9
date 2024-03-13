/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer - Watching movies
exam_scores : midterm: 60 and final: 90

Output your object to the console
*/
const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: [ 'Soccer', 'Watching movies'],
    exam_scores: {
        midterm: 60,
        final: 90
    }

};

console.log(student);

/*
Print hobbies -> [ 'Soccer', 'Watching Movies' ]
Print exam_scores -> { midterm: 60, final: 90 }
Print first hobby -> Soccer
*/

console.log(student.hobbies); // [ 'Soccer', 'Watching Movies' ]
console.log(student.exam_scores); //  { midterm: 60, final: 90 }
console.log(student.hobbies[0]); // Soccer



console.log((student.exam_scores.midterm + student.exam_scores.final) / 2);



const book = {
    name: 'Amok',
    author: {
        fname: 'Stefan',
        lname: 'Zweig'
    },
    genre: 'Novella'
};
console.log(book);
console.log(book.author);


const books = [
    {
        name: 'Amok',
        author: {
            fname: 'Stefan',
            lname: 'Zweig'
        },
        genre: 'Novella'
    },
    {
        name: 'My Name Is Red',
        author: {
            fname: 'Orhan',
            lname: 'Pamuk'
        },
        genre: 'Historical Novel'
    },
    {
        name: '1984',
        author: {
            fname: 'George',
            lname: 'Orwell'
        },
        genre: 'Dystopian Literature'
    }
];
let countNamesWithA = 0;
for(let i = 0; i < books.length; i++) {
    if(books[i].author.fname.toLowerCase().indexOf('a') >= 0) countNamesWithA++;
}
console.log(countNamesWithA); // 2
countNamesWithA = 0;


for(const book of books) {
    if(book.author.fname.toUpperCase().includes('A')) countNamesWithA++;
}
console.log(countNamesWithA);

const  titles = [];
for(const book of books){
    titles.push(book.name);
}

console.log(titles);