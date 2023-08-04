class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
    this.owner = null;
  }

  assignOwner(owner) {
    if (owner.age > 18) {
      this.owner = owner;
    } else {
      console.log(`The owner must be at least 18 years old.`);
    }
  }

  getInfo() {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, License Plate: ${this.licensePlate}`
    );
    if (this.owner) {
      console.log(`Owner Info:`);
      this.owner.getInfo();
    } else {
      console.log(`Owner: Not Assigned`);
    }
  }
}

// Демонстрація:
const person1 = new Human("Ivan", 45);
const person2 = new Human("Olya", 23);
const person3 = new Human("Igor", 14);

const car1 = new Car("Toyota", "Camry", 2012, "ABC777");
const car2 = new Car("Opel", "Astra", 2004, "DFG999");
const car3 = new Car("BMW", "X5", 2015, "HIK123");

car1.assignOwner(person1);
car2.assignOwner(person2);
car3.assignOwner(person3); // Має вивести повідомлення, оскільки власнику менше 18 років

car1.getInfo();
car2.getInfo();
car3.getInfo();
