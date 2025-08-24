"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// All properties of 'UserProfile' become optional
function updateProfile(profile, updates) {
    return { ...profile, ...updates };
}
const userProfile = { name: "Alice", email: "alice@example.com" };
const updated = updateProfile(userProfile, { bio: "Loves coding" });
console.log(updated);
const myCircle = { radius: 10 };
const summary = {
    name: "Laptop",
    price: 1200
};
console.log(summary);
const newProduct = {
    id: 1,
    name: "Mouse",
    price: 25
};
console.log(newProduct);
// --- RETURN TYPE<T> ---
function getUser() {
    return { name: "Bob", id: 123 };
}
const anotherUser = { name: "Charlie", id: 456 };
console.log(anotherUser);
//# sourceMappingURL=example.js.map