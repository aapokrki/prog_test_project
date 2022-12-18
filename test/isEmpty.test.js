import { default as isEmpty } from "../src/isEmpty.js"
import { expect } from "chai"

describe("isEmpty.js. Checks if value is en empty object, collection, map or set", () => {
  it("Testing with input", () => {
    expect(isEmpty(null)).to.equal(true)
    expect(isEmpty(true)).to.equal(true)
    expect(isEmpty(1)).to.equal(true)
    expect(isEmpty([1, 2, 3])).to.equal(false)
    expect(isEmpty("abc")).to.equal(false)
    expect(isEmpty({ "a": 1 })).to.equal(false)
  })
  it("Testing with empty argument", () => {
    expect(isEmpty()).to.equal(true)
  })
  it(" Testing with empty object", () => {
    expect(isEmpty({})).to.equal(true)
  })
  it("Testing with empty array", () => {
    expect(isEmpty([])).to.equal(true)
  })
  it("Testing with empty string", () => {
    expect(isEmpty("")).to.equal(true)
  })
  it("Testing with empty map", () => {
    expect(isEmpty(new Map())).to.equal(true)
  })
  it("Testing with empty set", () => {
    expect(isEmpty(new Set())).to.equal(true)
  })
})
