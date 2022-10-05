const fetch = require("node-fetch");
require("dotenv").config();

//🔗 Serverless App endpoints to return specific error codes
const BAD_REQUEST = process.env.URL_400;
const OK_REQUEST = process.env.URL_200;

//🐦 Function to test axios async/await only responses
const checkHTTPResponse = async () => {
  const response = await fetch(BAD_REQUEST);
  const json = response.json(); ///If .json() is included the output is [object Object], else if not then [object Response]
  return json;
};

//The folllowing invokes the checkHTTPResponse function and utilises the output
const returnOutput = async () => {
  //Adding/removing async/await from this function doesn't change the outputs the way axios does.
  const executeGet = await checkHTTPResponse();
  console.log("executeGet" + JSON.stringify(executeGet)); //Returns [object Promise] !!Cannot access the response data here! E.g. response.data does not work.

  //Can be used to return HTTP responses
  if (executeGet.hasOwnProperty("error")) {
    console.log('reached error path')
    const error = {
        statusCode: 500,
        body: {
          message: { ...executeGet },
        },
      };
    console.log(error)
    return error
  } else {
    console.log('reached success path')
    const response = {
        statusCode: 200,
        body: {
          message: {...executeGet},
        },
      };
    console.log(response)
    return response
  }

  //💡 Returns the raw response from the API
  const output = {
    test: { ...executeGet },
    data: {
      hey: "hello",
    },
  };
  console.log(output);
  return output;
};

console.log(returnOutput()); //Returns Promise { <pending> }
