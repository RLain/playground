const axios = require('axios');
require('dotenv').config();


//⚠️ NB: This is not working and gets stuck in an endless loop of not returning the actual values from checkHTTPResponse.
//Going to try using then/catch on another file to see if any success.

//🔗 Serverless App endpoints to return specific error codes
const BAD_REQUEST = process.env.URL_400
const OK_REQUEST = process.env.URL_200

//🐦 Function to test axios try/catch responses
const checkHTTPResponse = async () => {
try {
    const response = await axios.get(OK_REQUEST)

    //✅ The following will only execute if a 200-299 is returned
    console.log('success path')
    return response

    //💡 This is unecessary and has the same output as above.
    const json = await response //No need to await.
    return json 

     //😱 This creates an error!
     const json2 = await response.json() //Don't append .json() when using axios try/catch, or use JSON.parse(). Both create errors.
     return json2

} catch(error) {
    console.log('error path')
    //⛔️ This section will execute if an error is caught including HTTP Server side issues 4XX/5XX
    // console.log(error.response.status) //Returns HTTP code e.g. 400
    // console.log(error.response.statusText) //Returns HTTP response e.g. Bad Request
    return error  
}
}

//The folllowing invokes the checkHTTPResponse function and utilises the output
const returnOutput = async () => {

//💡 If async/await is not used, this returns [object Promise]
// If async/await IS used, this returns [object Object] but is empty.
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
console.log('logOutput' + JSON.stringify(logOutput)) //Returns 


