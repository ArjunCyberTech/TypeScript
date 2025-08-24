// Code examples for 01 basic types

// --- STRING ---
let myName: string = "Alice";
console.log(`My name is ${myName}`);

// --- NUMBER ---
let age: number = 30;
let pi: number = 3.14;
console.log(`I am ${age} years old.`);

// --- BOOLEAN ---
let isAdult: boolean = age >= 18;
console.log(`Am I an adult? ${isAdult}`);

// --- ARRAY ---
let hobbies: string[] = ["reading", "coding", "hiking"];
console.log(`My hobbies are: ${hobbies.join(', ')}`);

// --- TUPLE ---
// A tuple is an array with a fixed number of elements
// and a known type for each element.
let person: [string, number, boolean] = ["Bob", 42, true];
console.log(`Person info: Name=${person[0]}, Age=${person[1]}, IsStudent=${person[2]}`);

// --- ANY (use with caution) ---
let mixedBag: any = "Hello";
console.log(`Initial value: ${mixedBag}`);
mixedBag = 123;
console.log(`Updated value: ${mixedBag}`);