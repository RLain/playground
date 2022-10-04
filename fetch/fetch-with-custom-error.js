const fetch = require('node-fetch');
require('dotenv').config();

//🔗 Serverless App endpoints to return specific error codes
const BAD_REQUEST = process.env.URL_400
const OK_REQUEST = process.env.URL_200

const checkError = (res) => {
    if (res.status >= 200 && res.status <= 299) {
      return res.json();
    } else {
      throw new Error(`Status: ${res.status}: ${res.statusText} to url ${res.url}`);
    }
  };

//🐦 Function to test fetch try/catch responses
const checkHTTPResponse = async () => {
try {
    const response = await fetch(BAD_REQUEST)
    const json = await checkError(response);
    //✅ The following will only execute if a 200-299 is returned
    console.log(json); //Returns the data object the API will return
    return json 

} catch(error) {
    console.log(error) //Returns the throw new Error response e.g. Error: Status: 400: Bad Request to url BAD_REQUEST
    // console.log(error.response.status) //⚠️You cannot access the status code with fetch! This returns an error.
    // console.log(error.response.statusText) //⚠️You cannot access the status text with fetch! This returns an error.
    return error  
}
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

//⛔️ This is the error output which is the thrown error being handled by the logic.
// There is no way to access the code or status text! 
//   Error: Status: 400: Bad Request to url https://a8u974q43l.execute-api.af-south-1.amazonaws.com/400
//       at checkError (/Users/rebeccalain/Documents/coding-practise/playground/fetch/tempCodeRunnerFile.js:17:13)
//       at checkHTTPResponse (/Users/rebeccalain/Documents/coding-practise/playground/fetch/tempCodeRunnerFile.js:25:24)
//       at processTicksAndRejections (internal/process/task_queues.js:93:5)