import { default as capitalize } from "../src/capitalize.js"
import { expect } from "chai"

describe("Testing capitalize.js", () => {
  it("Should convert the first character of a string to upper case and the remaining characters to lower case", () => {
    expect(capitalize("TEST")).to.equal("Test")
    expect(capitalize("test")).to.equal("Test")
    expect(capitalize("tESt")).to.equal("Test")
    expect(capitalize("TEsT")).to.equal("Test")
  })

  it("Should return an empty string if empty string is provided", () => {
    expect(capitalize("")).to.equal("")
  })

  it("Should return turn input number into a string", () => {
    var number = 1221

    expect(capitalize(number)).to.equal("1221")
  })

  // FAULTY CODE: toString.js used by capitalize.js should return empty string with null input
  it("Should return emptry string on null input", () => {
    expect(capitalize(null)).to.equal("")
  })

  // FAULTY CODE: toString.js used by capitalize.js should empty string with undefined input
  it("Should return emptry string on undefined input", () => {
    expect(capitalize(undefined)).to.equal("")
  })
})
