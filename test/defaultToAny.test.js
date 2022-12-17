import { default as defaultToAny } from "../src/defaultToAny.js"
import { expect } from "chai"

describe("defaultToAny.js. Should return value. If value is NaN, null or undefined, returns first defaultValue that is not one of the mentioned", () => {
  it("1. Testing with proper input (containing atleast one number)", () => {
    expect(defaultToAny(1, 10, 20)).to.equal(1)
    expect(defaultToAny(undefined, 10, 20)).to.equal(10)
    expect(defaultToAny(undefined, null, 20)).to.equal(20)
  })
  it("2. Testing with only undefined, null or NaN values", () => {
    expect(defaultToAny(undefined, null, NaN)).to.be.NaN
  })

  it("3. Testing with various combinations with NaN, null or undefined as first value", () => {
    expect(defaultToAny(undefined, "text", NaN)).to.equal("text")
    expect(defaultToAny(null, "null", null)).to.equal("null")

    //Faulty code: Should return -10101, not NaN
    expect(defaultToAny(NaN, -10101, undefined)).to.equal(-10101)
    expect(defaultToAny(null, NaN, 999)).to.equal(999)
  })

  it("3. Testing with various combinations with string values ", () => {
    expect(defaultToAny(undefined, "text", NaN)).to.equal("text")
    expect(defaultToAny(null, "null", null)).to.equal("null")
    expect(defaultToAny(999, "text", NaN)).to.equal(999)
  })
})
