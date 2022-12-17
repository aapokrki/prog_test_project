import { default as toNumber } from "../src/toNumber.js"
import { expect } from "chai"

describe("toNumber.js. Should convert value to a number", () => {
  it("1. Testing with proper input", () => {
    expect(toNumber("3.2")).to.equal(3.2)
    expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324)
    expect(toNumber(Infinity)).to.equal(Infinity)
    expect(toNumber("3.2")).to.equal(3.2)
  })
  it("2. Testing with empty argument", () => {
    expect(toNumber()).to.be.NaN
  })
  it("3. Testing with null value", () => {
    expect(toNumber(null)).to.equal(0)
  })
  it("4. Testing with undefined value", () => {
    expect(toNumber(undefined)).to.be.NaN
  })
  it("5. Testing with string value", () => {
    expect(toNumber("abc")).to.be.NaN
  })
  it("6. Testing with boolean value", () => {
    expect(toNumber(true)).to.equal(1)
  })
})
