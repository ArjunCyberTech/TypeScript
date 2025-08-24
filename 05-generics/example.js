"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Code examples for 05 generics
// --- GENERIC FUNCTION ---
// The type `T` is a placeholder that will be determined when the function is called.
function identity(arg) {
    return arg;
}
let output1 = identity("hello"); // Type is explicitly a string
let output2 = identity(123); // TypeScript infers the type as a number
console.log(`Output 1: ${output1} (type: ${typeof output1})`);
console.log(`Output 2: ${output2} (type: ${typeof output2})`);
const numberBox = { value: 42 };
const stringBox = { value: "Hello World" };
console.log(`Number box value: ${numberBox.value}`);
console.log(`String box value: ${stringBox.value}`);
// --- GENERIC CLASS ---
class KeyValuePair {
    key;
    value;
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const pair = new KeyValuePair("age", 30);
console.log(`Key: ${pair.key}, Value: ${pair.value}`);
// --- GENERIC CONSTRAINTS ---
// 'K extends keyof T' ensures that K is a key of T
function getProperty(obj, key) {
    return obj[key];
}
let myObject = { a: 1, b: "two", c: true };
console.log(`Value of key 'b' is: ${getProperty(myObject, "b")}`);
//# sourceMappingURL=example.js.map