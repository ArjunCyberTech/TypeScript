# 06 union and intersection types

These types are powerful tools for creating complex and flexible type compositions.

- **Union Types**: Combine two or more types. A variable of a union type can hold a value of any of the combined types. For example, `string | number` can be a string OR a number.
- **Intersection Types**: Combine multiple types into a single type. A variable of an intersection type must have all the properties of all the combined types. For example, `A & B` must have all properties from type A AND all properties from type B.