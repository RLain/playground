"use strict";
//Normal Javascript
let foo = 5;
//Typescript
let fooy = 5;
//Typescript immediatly gives VSCode an error: Type 'string' is not assignable to type 'number'.ts
//fooy = "5";
console.log("Fooy", fooy);
//_____________________________-
// 1️⃣ Basic Types
let id = 5;
let company = "Root Pty LTD";
let hasReachedAnniversary = true;
let x = "Hello"; //Allows any types
//Can define types for an array
let ids = [1, 2, 3, 4, 5]; //Only allows numbers
let arr = [1, true, "Hello"]; //Allows an array with all types e.g. integer, boolean, string
// 2️⃣ Tuple
let random = [1, "Apple", true]; //Can define specific types in the array positions
//let randomBad: [number, string, boolean] = [true, "Apple", 1]; //This will return an error as the positions do not match the types required e.g. Type 'number' is not assignable to type 'boolean'.
// 3️⃣ Tuple Array
let employee;
//Will allow the following data structure [number, string] elements nested within an array
employee = [
  [1, "Becca"],
  [2, "Royden"],
  [3, "Dionne"],
  //[true, "Hello"], Not allowed due to Type 'boolean' is not assignable to type 'number'.
];
// 4️⃣ Union
let productId; //Allows productID to be either a string or number
// 5️⃣ Enum
var Direction1;
(function (Direction1) {
  Direction1[(Direction1["Up"] = 0)] = "Up";
  Direction1[(Direction1["Down"] = 1)] = "Down";
  Direction1[(Direction1["Left"] = 2)] = "Left";
  Direction1[(Direction1["Right"] = 3)] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
var Direction2;
(function (Direction2) {
  Direction2["Up"] = "Up";
  Direction2["Down"] = "Down";
  Direction2["Left"] = "Left";
  Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
// 6️⃣ Objects
const user = {
  id: 42,
  name: "Gandalf",
};
//Will return Type 'string' is not assignable to type 'number'.
// const userBroken: {
//   id: number;
//   name: string;
// } = {
//   id: "42",
//   name: "Gandalf",
// };
// 7️⃣ Type Assertion
//Tells the compiler to treat an entity as a different type
let custId = 1;
let customerId = custId; // or let customerId = custId as number = Both work the same.
// 8️⃣ Functions
//This isn't happy and raising Parameter 'x' implicitly has an 'any' type.ts
// const addNumber = (x, y) => {
//   return x + y;
// };
//Defining the argument type:
const addNumberAgain = (x, y) => {
  return x + y;
};
const messageFunction = (message) => {
  console.log(message);
};
messageFunction(1);
messageFunction("hey");
const userNew = {
  id: 1,
  name: "Becca",
};
const userNewAgain = {
  id: 1,
  name: "Becca",
};
const userNewMore = {
  id: 1,
  name: "Becca",
};
//This is allowed
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//This is not allowed and returns  Type 'string' is not assignable to type 'number'.
//const add2: MathFunction = (x: number, y: string): number => x + y;
//🔟 Classes
//a. Setting up classes:
class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
const becca = new Person(1, "Becca Lain");
console.log(becca);
//b. Making properties private
class Person2 {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
const becca2 = new Person2(1, "Becca Lain");
//This failes due to the private declaration and returns Property 'id' is private and only accessible within class 'Person2
//console.log(becca2.id);
//c. Making properties protected
class Person3 {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
const becca3 = new Person3(1, "Becca Lain");
//This failes due to the private declaration and returns Property 'id' is protected and only accessible within class 'Person3' and its subclasses.
//console.log(becca3.id);
//d. Adding methods to the class
class Person4 {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  //This adds a custom method:
  register() {
    return `${this.name} is now registered`;
  }
}
const becca4 = new Person4(1, "Becca Lain");
console.log(becca4.register());
class Person5 {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  //This adds a custom method:
  register() {
    return `${this.name} is now registered`;
  }
}
const becca5 = new Person5(1, "Becca Lain");
console.log(becca5.register());
//f. Extending classes using sub classes
//This is a sub class:
class Employee extends Person5 {
  constructor(id, name, role) {
    super(id, name); //Replaces the need to redefine these e.g. this.id = id, this.name = name etc
    this.role = role;
  }
}
const newEmployee = new Employee(3, "Rodney", "Solution Engineer");
console.log(newEmployee.register()); //We can invoke the register() method as it is defined in the Person5 class that this sub-class is extending
//1️⃣1️⃣ Generics
//a. Defining types in functions when using arrays
const getArray = (items) => {
  return new Array().concat(items);
};
let numberArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(["apple", "banana", "carrot", "dragonfruit"]);
//This is allowed as despite nmumberArray containing numbers, the getArray function allows the elements to be any type
numberArray.push("egg");
//b. Making the function generic types but specifying types when calling the function
const getArray2 = (items) => {
  return new Array().concat(items);
};
let numberArray2 = getArray2([1, 2, 3, 4]);
let stringArray2 = getArray2(["apple", "banana", "carrot", "dragonfruit"]);
//This is no longer allowed as the numberArray2 has specified the type of number and will return  Argument of type 'string' is not assignable to parameter of type 'number'.
//numberArray2.push("egg");
//1️⃣2️⃣ Using TypeScript with React
//Works well with the create-react-app
//To setup a react app with typescript templates run $ npx create-react-app --template typescript
