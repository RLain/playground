const axios = require("axios");
require("dotenv").config();

//⚠️ NB: This is not working and gets stuck in an endless loop of not returning the actual values from checkHTTPResponse.
//Using try/catch also didn't work. 
//Going to try using async/await only

//🔗 Serverless App endpoints to return specific error codes
const BAD_REQUEST = process.env.URL_400;
const OK_REQUEST = process.env.URL_200;

//🐦 Function to test axios try/catch responses
const checkHTTPResponse = async () => {
  await axios.get(OK_REQUEST) //This is a promise
    .then((res) => {
      //✅ The following will only execute if a 200-299 is returned
      console.log("success path");
      return res
    })
    .catch((error) => {
      console.log("error path");
      //⛔️ This section will execute if an error is caught including HTTP Server side issues 4XX/5XX
      // console.log(error.response.status) //Returns HTTP code e.g. 400
      // console.log(error.response.statusText) //Returns HTTP response e.g. Bad Request
      return error;
    });
};

//The folllowing invokes the checkHTTPResponse function and utilises the output
const returnOutput = () => {
  //💡 If async/await is not used, executeGet returns [object Promise]
  // If async/await IS used, executeGet returns undefined.
  const executeGet = checkHTTPResponse(); //This is a promise
  console.log("executeGet" + executeGet); 

  return {
    statusCode: 200,
    data: {
      test: {...executeGet},
      hey: "hello",
    },
  };

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
};

const logOutput = returnOutput();
console.log("logOutput" + JSON.stringify(logOutput)); //Returns
