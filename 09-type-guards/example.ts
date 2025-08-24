// Code examples for 09 type guards
// --- TYPEOF TYPE GUARD ---
function printValue(value: string | number) {
  if (typeof value === 'string') {
    // TypeScript knows `value` is a string here
    console.log(`The string is: ${value.toUpperCase()}`);
  } else {
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

function move(animal: Bird | Fish) {
  if (animal instanceof Bird) {
    animal.fly();
  } else {
    animal.swim();
  }
}
move(new Bird());
move(new Fish());

// --- CUSTOM TYPE GUARD ---
interface Car {
  drive: () => void;
}
interface Boat {
  sail: () => void;
}

// Type predicate: `vehicle is Car`
function isCar(vehicle: Car | Boat): vehicle is Car {
  return (vehicle as Car).drive !== undefined;
}

function operateVehicle(vehicle: Car | Boat) {
  if (isCar(vehicle)) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}
operateVehicle({ drive: () => console.log('Driving a car!') });
operateVehicle({ sail: () => console.log('Sailing a boat!') });