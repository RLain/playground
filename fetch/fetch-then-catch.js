const fetch = require('node-fetch');
require('dotenv').config();

//🔗 Serverless App endpoints to return specific error codes
const BAD_REQUEST = process.env.URL_400
const OK_REQUEST = process.env.URL_200

//🐦 Function to test fetch then/catch responses
const checkHTTPResponse = async () => {
await fetch(OK_REQUEST)
.then(response => {
    //😱 The following will execute for all server side responses
    console.log(response); //Returns = see below rows 27-52
    return response 
})
.catch(error => {
    //This section won't invoke for 4XX and 5XX issues unless a custom function is written. 
    //Only network issues client side.
})
}

const executeGet = checkHTTPResponse();
console.log('executeGet' + executeGet) //Returns [object Promise]


//😱  The console.log(response) returns the following
// Response {
//     size: 0,
//     timeout: 0,
//     [Symbol(Body internals)]: {
//       body: PassThrough {
//         _readableState: [ReadableState],
//         _events: [Object: null prototype],
//         _eventsCount: 2,
//         _maxListeners: undefined,
//         _writableState: [WritableState],
//         allowHalfOpen: true,
//         [Symbol(kCapture)]: false,
//         [Symbol(kTransformState)]: [Object]
//       },
//       disturbed: false,
//       error: null
//     },
//     [Symbol(Response internals)]: {
//       url: 'https://a8u974q43l.execute-api.af-south-1.amazonaws.com/400',
//       status: 400,
//       statusText: 'Bad Request',
//       headers: Headers { [Symbol(map)]: [Object: null prototype] },
//       counter: 0
//     }
//   }