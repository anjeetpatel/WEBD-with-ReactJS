// Create a parent class named Vehicle inside a function
// this class should have a constructor that takes make and model as parameters, private fields for make and model and a mrethod getDetails that returns a string with the make and model.
// function createVehicleClass() {
//     class Vehicle {
//         #make;
//         #model;

//         constructor(make, model) {
//             this.#make = make;
//             this.#model = model;
//         }

//         getDetails() {
//             return `Make: ${this.#make}, Model: ${this.#model}`;
//         }
//     }

//     return Vehicle;
// }

// // Example usage:
// const Vehicle = createVehicleClass();
// const vehicle = new Vehicle("Toyota", "Corolla");
// console.log(vehicle.getDetails()); // Output: Make: Toyota, Model: Corolla

//Add a static method compareVehicles that takes two vehicle instances and returns true if they have the same make and model
// function createVehicleClass() {
//     class Vehicle {
//         #make;
//         #model;

//         constructor(make, model) {
//             this.#make = make;
//             this.#model = model;
//         }

//         getDetails() {
//             return `Make: ${this.#make}, Model: ${this.#model}`;
//         }

//         // Getter methods for private fields
//         get make() {
//             return this.#make;
//         }

//         get model() {
//             return this.#model;
//         }

//         // Static method to compare two vehicle instances
//         static compareVehicles(vehicle1, vehicle2) {
//             if (!(vehicle1 instanceof Vehicle) || !(vehicle2 instanceof Vehicle)) {
//                 throw new Error("Both arguments must be instances of Vehicle.");
//             }
//             return vehicle1.make === vehicle2.make && vehicle1.model === vehicle2.model;
//         }
//     }

//     return Vehicle;
// }

// // Example usage:
// const Vehicle = createVehicleClass();
// const vehicle1 = new Vehicle("Toyota", "Corolla");
// const vehicle2 = new Vehicle("Toyota", "Corolla");
// const vehicle3 = new Vehicle("Honda", "Civic");

// console.log(Vehicle.compareVehicles(vehicle1, vehicle2)); // Output: true
// console.log(Vehicle.compareVehicles(vehicle1, vehicle3)); // Output: false


//then create a child class named Car that extends Vehicle and adds new properties year and mileage.


function createVehicleClass() {
    class Vehicle {
        #make;
        #model;

        constructor(make, model) {
            this.#make = make;
            this.#model = model;
        }

        getDetails() {
            return `Make: ${this.#make}, Model: ${this.#model}`;
        }

        // Getter methods for private fields
        get make() {
            return this.#make;
        }

        get model() {
            return this.#model;
        }

        // Static method to compare two vehicle instances
        static compareVehicles(vehicle1, vehicle2) {
            if (!(vehicle1 instanceof Vehicle) || !(vehicle2 instanceof Vehicle)) {
                throw new Error("Both arguments must be instances of Vehicle.");
            }
            return vehicle1.make === vehicle2.make && vehicle1.model === vehicle2.model;
        }
    }

    return Vehicle;
}

// Create the Car class that extends Vehicle
function createCarClass() {
    const Vehicle = createVehicleClass();

    class Car extends Vehicle {
        #year;
        #mileage;

        constructor(make, model, year, mileage) {
            super(make, model); // Call the parent class constructor
            this.#year = year;
            this.#mileage = mileage;
        }

        getDetails() {
            return `${super.getDetails()}, Year: ${this.#year}, Mileage: ${this.#mileage}`;
        }

        // Getter methods for private fields
        get year() {
            return this.#year;
        }

        get mileage() {
            return this.#mileage;
        }
    }

    return Car;
}

// Example usage:
const Car = createCarClass();
const car1 = new Car("Toyota", "Corolla", 2020, 15000);
const car2 = new Car("Toyota", "Corolla", 2020, 15000);
const car3 = new Car("Honda", "Civic", 2021, 10000);

console.log(car1.getDetails()); // Output: Make: Toyota, Model: Corolla, Year: 2020, Mileage: 15000
console.log(Car.compareVehicles(car1, car2)); // Output: true
console.log(Car.compareVehicles(car1, car3)); // Output: false

//the car class should override the getdetails method to include the year and mileage in the returned string. Add a method drive that increases the mileage by a given amount.
//finally create an instance of the car class, log the details to the console