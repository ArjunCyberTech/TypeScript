# 03 interfaces and type aliases

Both interfaces and type aliases are used to create custom types for objects and functions. While they are similar in many ways, they have key differences.

- **Interfaces**: Used to define the shape of an object. They can be extended and implemented by classes. Interfaces are often preferred for defining object types because they can be "merged" (declaration merging), which is useful for libraries.
- **Type Aliases**: Can be used for primitive types, unions, intersections, and tuples. They are more versatile and are used to create a new name for an existing type.