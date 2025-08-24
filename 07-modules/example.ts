// Code examples for 07 modules
// --- IMPORTING ---
import { PI, multiply } from './utils';
import Calculator from './utils';

// Using named exports
console.log(`The value of PI is: ${PI}`);
console.log(`5 * 10 = ${multiply(5, 10)}`);

// Using default export
const calculator = new Calculator();
console.log(`10 + 20 = ${calculator.add(10, 20)}`);