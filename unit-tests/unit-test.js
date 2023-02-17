import chai from "chai";
import assert from "assert";
import { mainAPIRequest, retrievePolicy } from "./test.js";
export const { expect } = chai;
import sinon from "sinon";

//________________________________________________
// Basic Sinon testing: Stubbing date value

const greet = (name) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const now = new Date();
  const formattedDate = now.toLocaleDateString("en-US", options);
  return `Hello, ${name}! Today is ${formattedDate}`;
};

describe("testing the greeter", function () {
  it("checks the greet function", function () {
    const clock = sinon.useFakeTimers(new Date(2021, 0, 15));
    assert.equal(
      greet("Alice"),
      "Hello, Alice! Today is Friday, January 15, 2021"
    );
    clock.restore();
  });
});

//________________________________________________
// Attempting to use Sinon in PM imitation when using HTTP request

// Paused due to Sinon not working on Platform due to PM string conversion for VM.

describe("Stubbed - Sinon policy", function () {
  before(function () {});
  it("stubbed policy", async function () {
    beforeEach(() => {});
    afterEach(() => {});
  });
});

/*💡 This type of test has side effects. It is retrieveing a physical policy from the Root platform
Tests of this side effect nature may also effect change on the system*/

describe("Not stubbed - Fetch policy", function () {
  it("successfully retreived the policy", async function () {
    const policyId = "bb11100c-ed1b-4328-b213-6868843e6872";
    const policy = await retrievePolicy(policyId);
    assert.equal(policy.package_name, "Be Protected");
  });
});

/// Chat GPT - attempting to stub HTTP requests without using Sinon due to platform limitation

// Example function that makes a request to an API endpoint
function getDataFromApi() {
  return fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then((response) => response.json())
    .then((data) => data);
}

// Wrapper function that calls getDataFromApi
function processData() {
  return getDataFromApi().then((data) => {
    // Process the data
    return data;
  });
}

describe("Chat GPT #2 - processData", function () {
  let originalGetDataFromApi;

  beforeEach(function () {
    // Save a reference to the original function
    originalGetDataFromApi = getDataFromApi;

    // Create a stub function that returns a mock response object
    const stubGetDataFromApi = () => {
      return Promise.resolve({ data: "mocked data" });
    };

    // Replace the original function with the stub function
    getDataFromApi = stubGetDataFromApi;
  });

  afterEach(function () {
    // Restore the original function
    getDataFromApi = originalGetDataFromApi;
  });

  it("should return the expected data", function () {
    // Call the function and verify the result
    return processData().then((data) => {
      expect(data).to.deep.equal({ data: "mocked data" });
    });
  });
});

/* The above works */

describe.only("Becca attempt - retrievePolicy", function () {
  let originalGetDataFromApi;

  beforeEach(function () {
    // Save a reference to the original function
    originalGetDataFromApi = mainAPIRequest;

    // Create a stub function that returns a mock response object
    const stubGetDataFromApi = () => {
      return Promise.resolve({ data: "mocked data" });
    };

    // Replace the original function with the stub function
    mainAPIRequest = stubGetDataFromApi;
  });

  afterEach(function () {
    // Restore the original function
    mainAPIRequest = originalGetDataFromApi;
  });

  it("should return the expected data", function () {
    // Call the function and verify the result
    return retrievePolicy().then((data) => {
      expect(data).to.deep.equal({ data: "mocked data" });
    });
  });
});

/*
The above fails:

  2 failing

  1) Becca attempt - retrievePolicy
       "before each" hook for "should return the expected data":
     TypeError: Assignment to constant variable.
      at Context.<anonymous> (file:///Users/rebeccalain/Documents/coding-practise/playground/unit-tests/unit-test.js:114:20)
      at process.processImmediate (node:internal/timers:471:21)

  2) Becca attempt - retrievePolicy
       "after each" hook for "should return the expected data":
     TypeError: Assignment to constant variable.
      at Context.<anonymous> (file:///Users/rebeccalain/Documents/coding-practise/playground/unit-tests/unit-test.js:119:20)
      at process.processImmediate (node:internal/timers:471:21)
*/
