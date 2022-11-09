## Rebecca's Playground

Welcome to my playground. Here lies random things I am testing. 🤓 To run things, select the code
then use the CTRL + CMD + N command to execute.

## Some things I am playing around with:

### 1. Typescript

🎬 TypeScript Crash course: https://www.youtube.com/watch?v=BCg4U1FzODs&ab_channel=TraversyMedia

#### Notable things:

1. Defining types is `optional`. You can have a .ts file with vanilla javascript in.
2. Can be `used for both front-end and backend` with node.js.
3. Main value of Typescript > Javascript is the `ability to add static types`.
   a. Dynamically typed languages have types associated with run time values that are no explictly named in your code. e.g. Javascript, Python, Rub, PHP
   b. Statically typed languages you explictly define types to variable, function parameters, return values etc. e.g. Java, C, C++, Rust, Go.
4. `Pros` of Typescript: Code more robust, debugging easier, predictable, readability
5. `Cons` of Typescript: More code to write, more to learn, compilation required (browsers don't read .ts files. Needs to compile to .js), not a true static language due to compilation to .js
6. `TSC` (TypeScript compiler) is used to compile .ts files to Javascript. To install $ `sudo npm i -g typescript`. To check version: $ `tsc -v`
7. To compile a specific .ts file, cd into the directory with the file and then run $ `tsc {{file_name}}` e.g. `tsc index`. This will then create an index.js file which defaults to ES5 which uses var instead of const/let. This can be changed in the tsconfig.json file. To run all .ts files in the directory simply run $ `tsc`.
8. To watch a file run $ `tsc --watch {{file_name}}` e.g. `tsc --watch index` to continally watch the ts compilation as changes are made to a file.
9. To create a `tsconfig.json` file run $ `tsc --init`. This file is massive and most on the information not important to understand. To change the default Javascript setting update target to ES6 e.g. `"target": "es2016"` --> `"target": "es6",`. This will then compile the .js file with const/let.
10. To create separate source code vs production code, create separate directories eg. /src and /dist respectively. Then on the `tsconfig.json` file update the following:
    a. "rootDirs": ["./src"] to inform the compiler when to find the .ts code
    b. "outDir": "./dist" to specify where to store the .js outputs

#### Things to clarify:

#### Additional reading:

---

### 2. HTTP Requests

`axios`

Understanding promise responses and error handling when using the axios HTTP client.

URL: https://axios-http.com/docs/intro

`fetch`

Understanding promise responses and error handling when using fetch.

URL: https://javascript.info/fetch-api

#### Notable things:

1. then/catch returns `undefined` with axios and `[object Promise]` with fetch
2. try/catch returns `[object Promise]` for _both_ axios and fetch
3. The error responses from axios vs fetch are very different. Axios's seems better, more detailed and easier to access values.
4. `fetch does not consider server side issues as errors!` BIG difference to axios. Custom function or logic is required to turn 4XX and 5XX into errors.

#### Things to clarify:

1. Axios promise functions will not return the actual values when invoking a function that returns a promise e.g. invoking checkHTTPResponse() inside returnOutput()
2. Axios responses do not need .json() nor JSON.parse() whereas fetch requires the former
3. Using fetch to return the raw response (either error or success) and handling the errors in the first function ergo returnOutput() seems to be the easiet and allows for access to the actual data.

#### Additional reading:

1. https://jasonwatmore.com/post/2021/10/09/fetch-error-handling-for-failed-http-responses-and-network-errors#:~:text=The%20fetch()%20function%20will,reject(error)%3B%20.
2. https://dev.to/anchobies/when-that-s-not-so-fetch-error-handling-with-fetch-4cce
3. https://medium.com/trabe/fetch-api-errors-and-the-principle-of-least-surprise-66bbba3e4cc2
