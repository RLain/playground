import chai from "chai";
import assert from "assert";
import { retrievePolicy } from "./test.js";
export const { expect } = chai;
import sinon from "sinon";
import request from "request";

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

describe("Stubbed - Sinon policy", function () {
  before(function () {
    // entry point of sinon, creating a sandbox
    let sandbox = sinon.createSandbox();
    // restore all the stubs; remove all the existing stubs
    sandbox.restore();
  });
  it("stubbed policy", async function () {
    beforeEach(() => {
      const responseObject = {
        statusCode: 200,
        headers: {
          "content-type": "application/json",
        },
      };
      const responseBody = {
        status: "success",
        data: [{ output: "This is a policy" }],
      };
      this.get = sinon.stub(request, "get");
    });
    // afterEach(() => {});
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
