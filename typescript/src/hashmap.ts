const config = new Map<string, any>();
config.set("debug", true);
config.set("port", 3000);
config.set("database", { host: "localhost", port: 5432, database: "myapp" });

console.log(config.get("debug")); // Output: true
console.log(config.get("port")); // Output: 3000
console.log(config.get("database")); // Output: { host: 'localhost', port: 5432, database: 'myapp' }

/* The Map constructor is a built-in object in JavaScript that creates a new Map object. 
The Map object is a collection of key-value pairs, similar to a dictionary or a hash table.
The Map constructor can be called with or without arguments. When called without arguments, 
it creates an empty Map object. When called with an iterable argument, such as an array or another Map object, it creates a new Map object that contains the key-value pairs from the iterable.
Here are some examples of using the Map constructor: */

// Create an empty Map
const myMap = new Map();
console.log(myMap); // Map(0) {}

// Create a Map from an array of key-value pairs
const myArray: [string, string][] = [
  ["key1", "value1"],
  ["key2", "value2"],
];
const myMap2 = new Map(myArray);
console.log(myMap2); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

// Create a Map from another Map object
const myMap3 = new Map(myMap2);
console.log(myMap3); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

/* In addition to creating Map objects, the Map constructor also has several methods 
for working with Map objects. Some of the most commonly used methods include set, get, 
has, and delete, which allow you to add, retrieve, check for the existence of, and remove 
key-value pairs from the Map, respectively.

Here is an example of using these methods: */

const myMap4 = new Map();
myMap4.set("key1", "value1");
myMap4.set("key2", "value2");

console.log(myMap4.get("key1")); // "value1"
console.log(myMap4.has("key2")); // true
