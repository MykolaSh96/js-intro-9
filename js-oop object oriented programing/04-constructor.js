/*
Create a constructor called Car
and define 4 properties as below

year
make
model
price

Create and add 2 prototype function the Car prototype
drive -> {year make model} drives.
stop  -> {year make model} stops.
*/

/*
// BEFORE ES6
function Car(year, make, model, price) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.price = price;
}


Car.prototype.drive = function () {
    console.log(`${this.year} ${this.make} ${this.model} drives.`);
}

Car.prototype.stop = function () {
    console.log(`${this.year} ${this.make} ${this.model} stops.`);
}


const car1 = new Car(2023, 'Tesla', 'X', 80000);
const car2 = new Car(2022, 'BMW', 'X7', 60000);
const car3 = new Car(2023, 'Tesla', 'Y', 27000);

const allCars = [car1, car2, car3];

for(const car of allCars){
    console.log(car);
    car.drive();
    car.stop();
    console.log(`${car.year} ${car.make} is $ ${car.price}.`);
}

console.log(car1);
car1.drive();
car1.stop();
console.log(`${car1.year} ${car1.make} is $ ${car1.price}.`);

*/


//AFTER ES6

class Car {
    // create a constructor 
    constructor(year, make, model, price){
        this.year = year;
        this.make = make;
        this.model = model;
        this.price = price;
    }
    drive(){
        console.log(`${this.year} ${this.make} is $ ${this.price}.`);
    }
    stop(){
        console.log(`${this.year} ${this.make} is $ ${this.price}.`);
    }
}

const car1 = new Car(2023, 'Tesla', 'X', 80000);
const car2 = new Car(2022, 'BMW', 'X7', 60000);
const car3 = new Car(2023, 'Tesla', 'Y', 27000);

const allCars = [car1, car2, car3];

for(const car of allCars){
    console.log(car);
    car.drive();
    car.stop();
    console.log(`${car.year} ${car.make} is $ ${car.price}.`);
}


