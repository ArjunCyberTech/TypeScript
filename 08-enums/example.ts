// Code examples for 08 enums
// --- NUMERIC ENUM ---
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let userDirection: Direction = Direction.Up;
console.log(`User's direction: ${userDirection}`); // Logs: 0
console.log(`Direction name: ${Direction[userDirection]}`); // Logs: "Up"

// You can also manually initialize a numeric enum
enum StatusEnum {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

let responseStatus: StatusEnum = StatusEnum.Success;
console.log(`Response status code: ${responseStatus}`); // Logs: 200

// --- STRING ENUM ---
enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

let myColor: Colors = Colors.Red;
console.log(`My favorite color: ${myColor}`); // Logs: "RED"