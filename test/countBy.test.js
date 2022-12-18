import { default as countBy } from "../src/countBy.js"
import { assert, AssertionError, expect } from "chai"

const users = [
  { "user": "barney", "active": true },
  { "user": "betty", "active": true },
  { "user": "fred", "active": false },
]

// Faulty code: Does not work as intended. Does not count false values
describe("Testing countBy.js. Should show number of times each value occurs behind key", () => {
  it("Testing with existing keys", () => {
    expect(countBy(users, (value) => value.active)).to.equal({
      "true": 2,
      "false": 1,
    })
    expect(countBy(users, (value) => value.user)).to.equal({
      "barney": 1,
      "betty": 1,
      "fred": 1,
    })
  })

  // Unexisting key should return undefined the amount of objects in array
  // FAULTY CODE: Does not work as intended. returns 2 instead of 3
  it("Testing with unexisting keys", () => {
    expect(countBy(users, (value) => value.passive)).to.deep.equal({ "undefined": 3 })
  })
  it("Testing with empty vector", () => {
    expect(countBy([], (value) => value.active)).to.deep.equal({})
  })
})
