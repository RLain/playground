import chai from "chai";
import assert from "assert";
import { retrievePolicy } from "./test.js";
export const { expect } = chai;
import sinon from "sinon";
import request from "request";

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
