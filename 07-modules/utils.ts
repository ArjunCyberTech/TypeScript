// This file will act as the entry point (`main.ts` or similar)
// The `utils.ts` file would contain the exported code.

// To make this example work, assume there's a file `utils.ts` with the following content:
//
// // utils.ts

export const PI = 3.14159;

export function multiply(a: number, b: number): number {
  return a * b;
}

export default class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}