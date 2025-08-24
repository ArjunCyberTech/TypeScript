// Code examples for 03 interfaces and type aliases

// --- INTERFACES ---
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

const user: User = {
  id: 1,
  name: "Jane Doe"
};
console.log(`User ID: ${user.id}, Name: ${user.name}`);

// Extending an interface
interface Employee extends User {
  role: string;
}

const employee: Employee = {
  id: 2,
  name: "John Smith",
  role: "Developer"
};
console.log(`Employee role: ${employee.role}`);

// --- TYPE ALIASES ---
type ID = number | string;
type Point = {
  x: number;
  y: number;
};

let userId: ID = "user-123";
let userPoint: Point = { x: 10, y: 20 };

console.log(`User ID type: ${typeof userId}`);
console.log(`Point coordinates: (${userPoint.x}, ${userPoint.y})`);

// Union type with a type alias
type Status = "pending" | "success" | "error";
let requestStatus: Status = "success";
console.log(`Request status: ${requestStatus}`);