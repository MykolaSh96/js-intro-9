// class Author{
//     constructor(firstName, lastName, country,books){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.country = country;
//         this.books = books;
//     }
//     getFullName(){
//         return(`${this.firstName} ${this.lastName}`);
//     }

//     getBooks(){
//        return(`${this.books}`);
//     }
// }



// class Book {
//     constructor(title, genre,page){
// this.title = title;
// this.genre = genre;
// this.page = page;
//     }

// }





// const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694);
// const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768);
// const book3 = new Book('A Storm of Swords', 'Epic Fantasy',973);


// const author = new Author('George R. R','Martin','United States'['A Game of Thrones','A Clash of Kings','A Storm of Swords']);

// console.log(author.getFullName());

// const bookLoop = [book1, book2, book3];

// for(const books of bookLoop){
//     console.log(books);

// }
// //--------------------------------------------------------------------
// function Author (firstName, lastName, country,books){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.country = country;
//         this.books = books;
//     }

//     Author.prototype.getFullName = function(){
//         return(`${this.firstName} ${this.lastName}`)
//     }

//     Author.prototype.getBooks = function(){
//        return(`${this.books}`)
//     }




// function Book (title, genre,page){
//     this.title = title;
// this.genre = genre;
// this.page = page;
// }

// const book4 = new Book('A Game of Thrones', 'Epic Fantasy', 694);
// const book5= new Book('A Clash of Kings', 'Epic Fantasy', 768);
// const book6 = new Book('A Storm of Swords', 'Epic Fantasy',973);


// const author1 = new Author('George R. R','Martin','United States'['A Game of Thrones','A Clash of Kings','A Storm of Swords']);

// console.log(author1.getFullName());

// const bookLoop1 = [book4, book5, book6];

// for(const books of bookLoop1){
//     console.log(books);
// }


class Author{
    constructor(firstName, lastName, country, books ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.books = books;
    }
    getFullName(){
        return (`${this.firstName} ${this.lastName}`);
    }
    getBooks(){
        return this.books;
    }

}

class Book{
    constructor(title, genre, page){
        this.title = title;
        this.genre = genre;
        this.page = page;
    }
}


const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694);
const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768);
const book3 = new Book('A Storm of Swords', 'Epic Fantasy',973);


const author = new Author('George R.R','Martin','United States',[book1, book2, book3]);

console.log(author.getFullName());


for(const books of author.getBooks()){
    console.log(books);
}


//________________________________________________________________

function Author (firstName, lastName, country,books){
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.books = books;
}

Author.prototype.getFullName = function(){
    return(`${this.firstName} ${this.lastName}`)
}

Author.prototype.getBooks = function(){
   return this.books;
}




function Book (title, genre,page){
this.title = title;
this.genre = genre;
this.page = page;
}

const book4 = new Book('A Game of Thrones', 'Epic Fantasy', 694);
const book5= new Book('A Clash of Kings', 'Epic Fantasy', 768);
const book6 = new Book('A Storm of Swords', 'Epic Fantasy',973);


const author1 = new Author('George R. R','Martin','United States',[book4, book5, book6]);

console.log(author1.getFullName());

for(const books of author1.getBooks()){
console.log(books);
}






function Cat(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
}

Cat.prototype.getName = function() {
    return (`His name is ${this.name}`);
}


Cat.prototype.getAge = function(){
    return this.age;
}

Cat.prototype.getColor = function(){
    return this.color
}

const cat = new Cat('Lucky', 5, 'Brown');

console.log(cat.getName());
console.log(cat.getAge());
console.log(cat.getColor());