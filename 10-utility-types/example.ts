// Code examples for 10 utility types
// --- PARTIAL<T> ---
interface UserProfile {
  name: string;
  email: string;
  bio?: string;
}

// All properties of 'UserProfile' become optional
function updateProfile(profile: UserProfile, updates: Partial<UserProfile>) {
  return { ...profile, ...updates };
}

const userProfile: UserProfile = { name: "Alice", email: "alice@example.com" };
const updated = updateProfile(userProfile, { bio: "Loves coding" });
console.log(updated);

// --- READONLY<T> ---
interface Circle {
  radius: number;
}
const myCircle: Readonly<Circle> = { radius: 10 };
// myCircle.radius = 20; // Error: Cannot assign to 'radius' because it is a read-only property.

// --- PICK<T, K> ---
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

// Pick 'name' and 'price' from Product
type ProductSummary = Pick<Product, 'name' | 'price'>;
const summary: ProductSummary = {
  name: "Laptop",
  price: 1200
};
console.log(summary);

// --- OMIT<T, K> ---
// Omit 'description' from Product
type ProductWithoutDesc = Omit<Product, 'description'>;
const newProduct: ProductWithoutDesc = {
  id: 1,
  name: "Mouse",
  price: 25
};
console.log(newProduct);

// --- RETURN TYPE<T> ---
function getUser() {
  return { name: "Bob", id: 123 };
}

// Get the return type of the `getUser` function
type NewUser = ReturnType<typeof getUser>;
const anotherUser: NewUser = { name: "Charlie", id: 456 };
console.log(anotherUser);