"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Code examples for 08 enums
// --- NUMERIC ENUM ---
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
let userDirection = Direction.Up;
console.log(`User's direction: ${userDirection}`); // Logs: 0
console.log(`Direction name: ${Direction[userDirection]}`); // Logs: "Up"
// You can also manually initialize a numeric enum
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["Success"] = 200] = "Success";
    StatusEnum[StatusEnum["NotFound"] = 404] = "NotFound";
    StatusEnum[StatusEnum["ServerError"] = 500] = "ServerError";
})(StatusEnum || (StatusEnum = {}));
let responseStatus = StatusEnum.Success;
console.log(`Response status code: ${responseStatus}`); // Logs: 200
// --- STRING ENUM ---
var Colors;
(function (Colors) {
    Colors["Red"] = "RED";
    Colors["Green"] = "GREEN";
    Colors["Blue"] = "BLUE";
})(Colors || (Colors = {}));
let myColor = Colors.Red;
console.log(`My favorite color: ${myColor}`); // Logs: "RED"
//# sourceMappingURL=example.js.map