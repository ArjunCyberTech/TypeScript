"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Code examples for 07 modules
// --- IMPORTING ---
const utils_1 = require("./utils");
const utils_2 = __importDefault(require("./utils"));
// Using named exports
console.log(`The value of PI is: ${utils_1.PI}`);
console.log(`5 * 10 = ${(0, utils_1.multiply)(5, 10)}`);
// Using default export
const calculator = new utils_2.default();
console.log(`10 + 20 = ${calculator.add(10, 20)}`);
//# sourceMappingURL=example.js.map