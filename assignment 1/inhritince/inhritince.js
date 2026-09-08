// Single Inheritance
console.log("\n===== SINGLE INHERITANCE =====");

class Animal {
    eat() {
        console.log("Animal eats food.");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks.");
    }
}

const dog = new Dog();

dog.eat();
dog.bark();


// Multilevel Inheritance
console.log("\n===== MULTILEVEL INHERITANCE =====");

class GrandParent {
    house() {
        console.log("Grandparent owns a house.");
    }
}

class Parent extends GrandParent {
    car() {
        console.log("Parent owns a car.");
    }
}

class Child extends Parent {
    bike() {
        console.log("Child owns a bike.");
    }
}

const child = new Child();

child.house();
child.car();
child.bike();


// Hierarchical Inheritance
console.log("\n===== HIERARCHICAL INHERITANCE =====");

class Vehicle {
    start() {
        console.log("Vehicle starts.");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car is driving.");
    }
}

class Bike extends Vehicle {
    ride() {
        console.log("Bike is riding.");
    }
}

const car = new Car();
const bike = new Bike();

car.start();
car.drive();

bike.start();
bike.ride();


// Multiple Inheritance
console.log("\n===== MULTIPLE INHERITANCE =====");

// Using Mixins

const Father = {
    fatherProperty() {
        console.log("Property inherited from Father.");
    }
};

const Mother = {
    motherProperty() {
        console.log("Property inherited from Mother.");
    }
};

class ChildMultiple {
}

Object.assign(ChildMultiple.prototype, Father, Mother);

const childMultiple = new ChildMultiple();

childMultiple.fatherProperty();
childMultiple.motherProperty();


// Hybrid Inheritance
console.log("\n===== HYBRID INHERITANCE =====");

class Person {
    showPerson() {
        console.log("This is a person.");
    }
}

class Student extends Person {
    study() {
        console.log("Student studies.");
    }
}

class Teacher extends Person {
    teach() {
        console.log("Teacher teaches.");
    }
}

class ResearchStudent extends Student {
    research() {
        console.log("Research student does research.");
    }
}

const researchStudent = new ResearchStudent();

researchStudent.showPerson();
researchStudent.study();
researchStudent.research();