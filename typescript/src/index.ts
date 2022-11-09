//Normal Javascript
let foo = 5;

//Typescript
let fooy: number = 5;

//Typescript immediatly gives VSCode an error: Type 'string' is not assignable to type 'number'.ts
//fooy = "5";

console.log("Fooy", fooy);

//_____________________________-

// 1️⃣ Basic Types

let id: number = 5;
let company: string = "Root Pty LTD";
let hasReachedAnniversary: boolean = true;
let x: any = "Hello"; //Allows any types

//Can define types for an array
let ids: number[] = [1, 2, 3, 4, 5]; //Only allows numbers
let arr: any[] = [1, true, "Hello"]; //Allows an array with all types e.g. integer, boolean, string

// 2️⃣ Tuple
let random: [number, string, boolean] = [1, "Apple", true]; //Can define specific types in the array positions
//let randomBad: [number, string, boolean] = [true, "Apple", 1]; //This will return an error as the positions do not match the types required e.g. Type 'number' is not assignable to type 'boolean'.

// 3️⃣ Tuple Array
let employee: [number, string][];

//Will allow the following data structure [number, string] elements nested within an array
employee = [
  [1, "Becca"],
  [2, "Royden"],
  [3, "Dionne"],
  //[true, "Hello"], Not allowed due to Type 'boolean' is not assignable to type 'number'.
];

// 4️⃣ Union

let productId: string | number; //Allows productID to be either a string or number

// 5️⃣ Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction1.Left);

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
console.log(Direction2.Left);

// 6️⃣ Objects

const user: {
  id: number;
  name: string;
} = {
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
let custId: any = 1;
let customerId = <number>custId; // or let customerId = custId as number = Both work the same.

// 8️⃣ Functions

//This isn't happy and raising Parameter 'x' implicitly has an 'any' type.ts
// const addNumber = (x, y) => {
//   return x + y;
// };

//Defining the argument type:
const addNumberAgain = (x: number, y: number): number => {
  return x + y;
};

const messageFunction = (message: string | number): void => {
  console.log(message);
};

messageFunction(1);
messageFunction("hey");
// messageFunction(true); Will return and error = Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

// 9️⃣ Interfaces

//a. You can't use an interface with primitives or unions, but it works great for objects!
interface userInterface {
  id: number;
  name: string;
}

const userNew: userInterface = {
  id: 1,
  name: "Becca",
};

//b. The interface will also flag an error is a type is missing e.g.:
interface userInterface2 {
  id: number;
  name: string;
  age: number;
}

//Due to the missing age this returns Property 'age' is missing in type '{ id: number; name: string; }' but required in type 'userInterface'.
// const userNewAgain: userInterface2 = {
//   id: 1,
//   name: "Becca",
// };

//c. You can also make types option e.g.
interface userInterface3 {
  id: number;
  name: string;
  age?: number; //The ? makes this optional
}

const userNewAgain: userInterface3 = {
  id: 1,
  name: "Becca",
};

//d. You can also make read only types
interface userInterface4 {
  readonly id: number; //This won't allow the property to be changed
  name: string;
  age?: number; //The ? makes this optional
}

const userNewMore: userInterface4 = {
  id: 1,
  name: "Becca",
};

// This is not allowed due to the readonly definition and returns  error TS2540: Cannot assign to 'id' because it is a read-only property.
//userNewMore.id = 5;

//e. Can also use interfaces with functions

interface MathFunction {
  (x: number, y: number): number;
}

//This is allowed
const add: MathFunction = (x: number, y: number): number => x + y;
const sub: MathFunction = (x: number, y: number): number => x - y;

//This is not allowed and returns  Type 'string' is not assignable to type 'number'.
//const add2: MathFunction = (x: number, y: string): number => x + y;

//🔟 Classes

//a. Setting up classes:
class Person {
  id: number; //This is the same thing as public id: number.
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const becca = new Person(1, "Becca Lain");
console.log(becca);

//b. Making properties private
class Person2 {
  private id: number; //This prevents someone reading just this value
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const becca2 = new Person2(1, "Becca Lain");
//This failes due to the private declaration and returns Property 'id' is private and only accessible within class 'Person2
//console.log(becca2.id);

//c. Making properties protected
class Person3 {
  protected id: number; //This prevents someone reading just this value
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const becca3 = new Person3(1, "Becca Lain");
//This failes due to the private declaration and returns Property 'id' is protected and only accessible within class 'Person3' and its subclasses.
//console.log(becca3.id);

//d. Adding methods to the class
class Person4 {
  id: number; //This is the same thing as public id: number.
  name: string;
  constructor(id: number, name: string) {
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

//e. Adding interfaces to methods
interface userInterface5 {
  id: number;
  name: string;
  register(): string;
}
class Person5 implements userInterface5 {
  id: number; //This is the same thing as public id: number.
  name: string;
  constructor(id: number, name: string) {
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
  role: string;

  constructor(id: number, name: string, role: string) {
    super(id, name); //Replaces the need to redefine these e.g. this.id = id, this.name = name etc
    this.role = role;
  }
}

const newEmployee = new Employee(3, "Rodney", "Solution Engineer");
console.log(newEmployee.register()); //We can invoke the register() method as it is defined in the Person5 class that this sub-class is extending

//1️⃣1️⃣ Generics

//a. Defining types in functions when using arrays

const getArray = (items: any[]): any[] => {
  return new Array().concat(items);
};

let numberArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(["apple", "banana", "carrot", "dragonfruit"]);

//This is allowed as despite nmumberArray containing numbers, the getArray function allows the elements to be any type
numberArray.push("egg");

//b. Making the function generic types but specifying types when calling the function

const getArray2 = <T>(items: T[]): T[] => {
  return new Array().concat(items);
};

let numberArray2 = getArray2<number>([1, 2, 3, 4]);
let stringArray2 = getArray2<string>([
  "apple",
  "banana",
  "carrot",
  "dragonfruit",
]);

//This is no longer allowed as the numberArray2 has specified the type of number and will return  Argument of type 'string' is not assignable to parameter of type 'number'.
//numberArray2.push("egg");

//1️⃣2️⃣ Using TypeScript with React

//Works well with the create-react-app
//To setup a react app with typescript templates run $ npx create-react-app --template typescript
