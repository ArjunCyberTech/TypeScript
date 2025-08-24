"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Code examples for 06 union and intersection types
// --- UNION TYPES ---
// A value that can be a string or a number
let myId;
myId = "123-abc";
console.log(`My ID is a string: ${myId}`);
myId = 456;
console.log(`My ID is now a number: ${myId}`);
// A function that works with multiple types
function printId(id) {
    // We can narrow the type to use specific methods
    if (typeof id === 'string') {
        console.log(`Your ID (uppercase): ${id.toUpperCase()}`);
    }
    else {
        console.log(`Your ID: ${id}`);
    }
}
printId("abc-123");
printId(101);
const newEmployee = {
    name: "Mike",
    job: "Manager"
};
console.log(`Employee name: ${newEmployee.name}, Job: ${newEmployee.job}`);
//# sourceMappingURL=example.js.map