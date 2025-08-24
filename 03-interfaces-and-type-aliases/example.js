"use strict";
// Code examples for 03 interfaces and type aliases
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 1,
    name: "Jane Doe"
};
console.log(`User ID: ${user.id}, Name: ${user.name}`);
const employee = {
    id: 2,
    name: "John Smith",
    role: "Developer"
};
console.log(`Employee role: ${employee.role}`);
let userId = "user-123";
let userPoint = { x: 10, y: 20 };
console.log(`User ID type: ${typeof userId}`);
console.log(`Point coordinates: (${userPoint.x}, ${userPoint.y})`);
let requestStatus = "success";
console.log(`Request status: ${requestStatus}`);
//# sourceMappingURL=example.js.map