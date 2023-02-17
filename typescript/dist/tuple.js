"use strict";
/* In TypeScript, a tuple is a type that represents an array with a fixed number of elements,
where each element may have a different type.

For example, you can define a tuple type that represents a 2D point with x and y coordinates,
where the x coordinate is a number and the y coordinate is a string: */
const point = [10, "20"];
console.log(point[0]); // 10
console.log(point[1]); // "20"
/* In this example, the Point type is defined as a tuple with two elements,
where the first element is a number and the second element is a string.
The point variable is initialized as an instance of the Point type,
and its first element is accessed using the index [0] and its second element is accessed using the index [1].

Tuples can be useful when you want to represent a fixed set of values with different types.
They can provide a more specific type safety and help catch errors at compile time, rather than at runtime. */
