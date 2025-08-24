"use strict";
// Code examples for 02 functions
Object.defineProperty(exports, "__esModule", { value: true });
// Function with typed parameters and return value
function add(a, b) {
    return a + b;
}
console.log(`3 + 5 = ${add(3, 5)}`);
// Optional and Default Parameters
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greet("Alice")); // Uses default
console.log(greet("Bob", "Hi"));
// Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(`Sum of 1, 2, 3, 4 is ${sumAll(1, 2, 3, 4)}`);
function reverse(input) {
    if (typeof input === "string") {
        return input.split('').reverse().join('');
    }
    else {
        return input.slice().reverse();
    }
}
console.log(`Reversed string 'hello': ${reverse("hello")}`);
console.log(`Reversed array [1, 2, 3]: ${reverse([1, 2, 3])}`);
//# sourceMappingURL=example.js.map