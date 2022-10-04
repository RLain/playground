const axios = require('axios');
require('dotenv').config();

//🔗 Serverless App endpoints to return specific error codes
const BAD_REQUEST = process.env.URL_400
const OK_REQUEST = process.env.URL_200

//🐦 Function to test then/catch responses
const checkHTTPResponse = () => {
axios.get(OK_REQUEST)
.then(resp => {
    console.log(resp.data);
    return resp //Returns the full response from the Serverless app = { statusCode: 200, status: 'OK (app)', message: 'Success' }
})
.catch(error => {
    // console.log(error)
    console.log("Oh no an error")
    const errorOutput = error
    return errorOutput  //Returns a reduced sentece of the issue = 'Error: Request failed with status code 400'
})
}

const executeGet = checkHTTPResponse();
console.log('executeGet' + executeGet)

