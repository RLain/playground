## Rebecca's Playground

Welcome to my playground. Here lies random things I am testing. 🤓 To run things, select the code
then use the CTRL + CMD + N command to execute.

## Some things I am playing around with:

### 1. Typescript

🎬 TypeScript Crash course: https://www.youtube.com/watch?v=BCg4U1FzODs&ab_channel=TraversyMedia

#### Notable things:

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
