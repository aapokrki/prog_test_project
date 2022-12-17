import { default as reduce } from "../src/reduce.js"
import { expect } from "chai"

describe("reduce.js", () => {
  it("1. Testing with proper input", () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.equal(3)
    expect(
      reduce(
        { "a": 1, "b": 2, "c": 1 },
        (result, value, key) => {
          ;(result[value] || (result[value] = [])).push(key)
          return result
        },
        {}
      )
    ).to.deep.equal({ "1": ["a", "c"], "2": ["b"] })
  })
  it
  it("2. Testing with empty argument", () => {
    expect(reduce()).to.equal(undefined)
  })
})
