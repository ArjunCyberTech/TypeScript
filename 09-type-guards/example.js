"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Code examples for 09 type guards
// --- TYPEOF TYPE GUARD ---
function printValue(value) {
    if (typeof value === 'string') {
        // TypeScript knows `value` is a string here
        console.log(`The string is: ${value.toUpperCase()}`);
    }
    else {
        // TypeScript knows `value` is a number here
        console.log(`The number is: ${value.toFixed(2)}`);
    }
}
printValue("hello world");
printValue(123.456);
// --- INSTANCEOF TYPE GUARD ---
class Bird {
    fly() { console.log('I can fly!'); }
}
class Fish {
    swim() { console.log('I can swim!'); }
}
function move(animal) {
    if (animal instanceof Bird) {
        animal.fly();
    }
    else {
        animal.swim();
    }
}
move(new Bird());
move(new Fish());
// Type predicate: `vehicle is Car`
function isCar(vehicle) {
    return vehicle.drive !== undefined;
}
function operateVehicle(vehicle) {
    if (isCar(vehicle)) {
        vehicle.drive();
    }
    else {
        vehicle.sail();
    }
}
operateVehicle({ drive: () => console.log('Driving a car!') });
operateVehicle({ sail: () => console.log('Sailing a boat!') });
//# sourceMappingURL=example.js.map