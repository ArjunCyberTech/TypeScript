"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Code examples for 04 classes
class Animal {
    // Public by default, can be accessed anywhere
    name;
    // Can only be accessed within this class
    species;
    // Can be accessed within this class and its subclasses
    age;
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }
    // Public method
    makeSound(sound) {
        console.log(`${this.name} (${this.species}) says ${sound}`);
    }
    // Private method
    getDetails() {
        return `${this.name}, a ${this.age}-year-old ${this.species}.`;
    }
    showDetails() {
        console.log(this.getDetails());
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super(name, "Dog", age);
    }
    // Method overriding
    makeSound() {
        // Accessing protected property from parent class
        console.log(`${this.name} barks! (Age: ${this.age})`);
    }
}
const lion = new Animal("Simba", "Lion", 5);
lion.makeSound("Roar");
lion.showDetails();
const myDog = new Dog("Rex", 3);
myDog.makeSound();
//# sourceMappingURL=example.js.map