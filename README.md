# TypeScript Learning Project

Welcome to the **TypeScript Learning Project**! This repository is a beginner-friendly guide to understanding and using TypeScript. It's structured to cover fundamental concepts with clear, simple examples.

This project uses **TypeScript** and **Node.js**.

## 🚀 Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites

You need to have **Node.js** and **npm** installed. You can download them from the official [Node.js website](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:
   git clone https://github.com/ArjunCyberTech/TypeScript

2. Navigate into the project directory:
   cd TypeScript

3. Install the project dependencies, including TypeScript:
   npm install

## 📚 Project Structure

The project is organized into folders, with each folder dedicated to a specific TypeScript topic.

* `01-basic-types`: Demonstrates `string`, `number`, `boolean`, `array`, and `tuple`.

* `02-functions`: Examples of typed parameters, return types, and overloads.

* `03-interfaces-and-type-aliases`: Defines custom object types.

* `04-classes`: Covers OOP principles like classes, inheritance, and access modifiers.

* `05-generics`: Shows how to create reusable components.

* `06-union-and-intersection-types`: Combines types for more flexible code.

* `07-modules`: Explains how to organize code into separate files.

* `08-enums`: An introduction to enumerations.

* `09-type-guards`: How to perform runtime type checks.

* `10-utility-types`: Shows how to transform existing types.

Each topic folder contains a `README.md` with a definition and an `example.ts` file with a working code example.

## ▶️ How to Run the Code

To run the examples, you need to compile the TypeScript files into JavaScript first.

### Compiling the Project

Run the following command to compile all TypeScript files in the project, based on the `tsconfig.json` configuration:


npm run build

This will create a `dist` folder containing the compiled JavaScript files.

### Starting the Project

Once the project is compiled, you can run the main entry point:

npm start

This command will execute the `dist/index.js` file, which should run all the examples in the project.

### Additional Useful Commands

* **Watch for changes**: To automatically recompile your TypeScript files every time you save a change, use the watch flag:
  npm run build -- --watch

* **Test**: Run tests (currently not configured):
  npm test
