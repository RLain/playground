const fetch = require('node-fetch');
require('dotenv').config();

//🔗 Serverless App endpoints to return specific error codes
const BAD_REQUEST = process.env.URL_400
const OK_REQUEST = process.env.URL_200

//🐦 Function to test fetch try/catch responses
const checkHTTPResponse = async () => {
try {
    const response = await fetch(BAD_REQUEST)

    //✅ The following will only execute if a 200-299 is returned
    console.log(response); //Returns = see below rows 28-244
    console.log(response.data) //Returns the data object the API will return
    return response 

} catch(error) {
    //⛔️ This section will execute if an error is caught including HTTP Server side issues 4XX/5XX
    const errorOutput = error
    console.log(errorOutput) //Returns full error response = see below rows 247-536
    console.log(errorOutput.response.status) //Returns HTTP code e.g. 400
    console.log(errorOutput.response.statusText) //Returns HTTP response e.g. Bad Request
    return errorOutput  
}
}

const executeGet = checkHTTPResponse();
console.log('executeGet' + executeGet) //Returns [object Promise]
