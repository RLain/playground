const axios = require('axios');
require('dotenv').config();


//🔗 Serverless App endpoints to return specific error codes
const BAD_REQUEST = process.env.URL_400
const OK_REQUEST = process.env.URL_200

//🐦 Function to test axios async/await only responses
const checkHTTPResponse = async () => {
const response = await axios.get(OK_REQUEST)
return response.data

}

//The folllowing invokes the checkHTTPResponse function and utilises the output
const returnOutput = async () => {

//💡 If async/await is not used, executeGet returns [object Promise], and the return of this function DOES work
// If async/await IS used, executeGet returns [object Object] but is empty, and the return of this function does not work as returns [object Promise]
const executeGet = await checkHTTPResponse();
console.log('executeGet' + executeGet) //Returns [object Promise] !!Cannot access the response data here! E.g. response.data does not work.

return {
    statusCode: 200,
    data: {
        hey: "hello"
    }
}

// if (executeGet.hasOwnProperty('error')){
//     return {
//         statusCode: executeGet.response.status,
//         statusText: executeGet.response.statusText
//     }

// }
// else {
//     return {
//         statusCode: 200,
//         data: {
//             api_response: executeGet.data

//         }
//     }
// }
}


const logOutput = returnOutput();
console.log('logOutput' + logOutput)//Returns [object Promise]


