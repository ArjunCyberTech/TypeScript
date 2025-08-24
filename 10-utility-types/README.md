# 10 utility types

TypeScript provides a set of built-in utility types that help you transform existing types into new types in a convenient way. They are a powerful feature for writing more flexible and reusable code.

- **`Partial<T>`**: Constructs a type with all properties of `T` set to optional.
- **`Readonly<T>`**: Constructs a type with all properties of `T` set to `readonly`, meaning they cannot be reassigned.
- **`Pick<T, K>`**: Constructs a type by picking a set of properties `K` from a type `T`.
- **`Omit<T, K>`**: Constructs a type by omitting a set of properties `K` from a type `T`.
- **`Exclude<T, U>`**: Constructs a type by excluding from `T` all union members that are assignable to `U`.
- **`ReturnType<T>`**: Constructs a type consisting of the return type of function `T`.