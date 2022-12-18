import { default as toNumber } from "../src/toNumber.js"
import { expect } from "chai"

describe("toNumber.js. Should convert value to a number", () => {
  it("Testing with proper input", () => {
    expect(toNumber("3.2")).to.equal(3.2)
    expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324)
    expect(toNumber(Infinity)).to.equal(Infinity)
    expect(toNumber("3.2")).to.equal(3.2)
  })
  it("Testing with empty argument", () => {
    expect(toNumber()).to.be.NaN
  })
  it("Testing with null value", () => {
    expect(toNumber(null)).to.equal(0)
  })
  it("Testing with undefined value", () => {
    expect(toNumber(undefined)).to.be.NaN
  })
  it("Testing with string value", () => {
    expect(toNumber("abc")).to.be.NaN
  })
  it("Testing with boolean value", () => {
    expect(toNumber(true)).to.equal(1)
  })
})
