# 09 type guards

Type guards are expressions that perform a runtime check to guarantee the type of a variable within some scope. This allows you to safely use methods and properties that are only available on a specific type.

- **`typeof` type guard**: Checks if a variable is a primitive type (`string`, `number`, `boolean`, `symbol`, `bigint`, `undefined`).
- **`instanceof` type guard**: Checks if an object is an instance of a specific class.
- **`in` operator type guard**: Checks if a property exists on an object.
- **Custom Type Guard**: A function that returns a boolean, where the return type is a type predicate (`arg is SomeType`).