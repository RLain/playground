import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

/**
 * Makes an API request
 * @param {string} uri The uri where the request will be made
 * @param {string} method The type of request ['PUT','PATCH','GET', 'POST']
 * @param {string} data The request body
 * @param {string} api_key Either a Sandbox or Production api key. Stored on a env.js file not saved on Github.
 * @return {object} The response from the API request
 */
export async function mainAPIRequest(uri, method, data, api_key) {
  let response;
  if (method === "GET") {
    response = await fetch(`${uri}`, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(api_key).toString("base64")}`,
      },
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log("error", error);
      });
  } else {
    response = await fetch(`${uri}`, {
      method: `${method}`,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(api_key).toString("base64")}`,
      },
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log("error", error);
      });
  }

  return response;
}

let apiKey = process.env.API_KEY;
let uri = process.env.SANDBOX_URI;

/*Fetch a policy from platform*/
export async function retrievePolicy(policy_id) {
  const response = await mainAPIRequest(
    uri + `/v1/insurance/policies/${policy_id}`,
    "GET",
    "", //Empty body
    apiKey
  );
  return response;
}
