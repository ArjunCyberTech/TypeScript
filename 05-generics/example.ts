// Code examples for 05 generics
// --- GENERIC FUNCTION ---
// The type `T` is a placeholder that will be determined when the function is called.
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("hello"); // Type is explicitly a string
let output2 = identity(123); // TypeScript infers the type as a number
console.log(`Output 1: ${output1} (type: ${typeof output1})`);
console.log(`Output 2: ${output2} (type: ${typeof output2})`);

// --- GENERIC INTERFACE ---
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 42 };
const stringBox: Box<string> = { value: "Hello World" };

console.log(`Number box value: ${numberBox.value}`);
console.log(`String box value: ${stringBox.value}`);

// --- GENERIC CLASS ---
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

const pair = new KeyValuePair<string, number>("age", 30);
console.log(`Key: ${pair.key}, Value: ${pair.value}`);

// --- GENERIC CONSTRAINTS ---
// 'K extends keyof T' ensures that K is a key of T
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let myObject = { a: 1, b: "two", c: true };
console.log(`Value of key 'b' is: ${getProperty(myObject, "b")}`);