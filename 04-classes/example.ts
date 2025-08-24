// Code examples for 04 classes
class Animal {
  // Public by default, can be accessed anywhere
  public name: string;
  // Can only be accessed within this class
  private species: string;
  // Can be accessed within this class and its subclasses
  protected age: number;

  constructor(name: string, species: string, age: number) {
    this.name = name;
    this.species = species;
    this.age = age;
  }

  // Public method
  makeSound(sound: string): void {
    console.log(`${this.name} (${this.species}) says ${sound}`);
  }

  // Private method
  private getDetails(): string {
    return `${this.name}, a ${this.age}-year-old ${this.species}.`;
  }

  public showDetails(): void {
    console.log(this.getDetails());
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, "Dog", age);
  }

  // Method overriding
  makeSound(): void {
    // Accessing protected property from parent class
    console.log(`${this.name} barks! (Age: ${this.age})`);
  }
}

const lion = new Animal("Simba", "Lion", 5);
lion.makeSound("Roar");
lion.showDetails();

const myDog = new Dog("Rex", 3);
myDog.makeSound();