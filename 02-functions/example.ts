// Code examples for 02 functions

// Function with typed parameters and return value
function add(a: number, b: number): number {
  return a + b;
}
console.log(`3 + 5 = ${add(3, 5)}`);

// Optional and Default Parameters
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}
console.log(greet("Alice")); // Uses default
console.log(greet("Bob", "Hi"));

// Rest Parameters
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(`Sum of 1, 2, 3, 4 is ${sumAll(1, 2, 3, 4)}`);

// Function Overloads
function reverse(input: string): string;
function reverse(input: number[]): number[];
function reverse(input: string | number[]): string | number[] {
  if (typeof input === "string") {
    return input.split('').reverse().join('');
  } else {
    return input.slice().reverse();
  }
}
console.log(`Reversed string 'hello': ${reverse("hello")}`);
console.log(`Reversed array [1, 2, 3]: ${reverse([1, 2, 3])}`);