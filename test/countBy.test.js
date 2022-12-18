import { default as countBy } from "../src/countBy.js"
import { assert, AssertionError, expect } from "chai"

const users = [
  { "user": "barney", "active": true },
  { "user": "betty", "active": true },
  { "user": "fred", "active": false },
]

// Faulty code: Does not work as intended. Does not count false values
describe("Testing countBy.js. Should show number of times each value occurs behind key", () => {
  it("1. Testing with existing key", () => {
    expect(countBy(users, (value) => value.active)).to.equal({
      "true": 2,
      "false": 1,
    })
  })
  it("2. Testing with existing key", () => {
    expect(countBy(users, (value) => value.user)).to.equal({
      "barney": 1,
      "betty": 1,
      "fred": 1,
    })
  })
  it("3. Testing with unexisting key", () => {
    assert.throws(() => {
      countBy(users, (value) => value.passive)
    }, AssertionError)
  })

  it('4. Testing with nothing as "iteratee" argument', () => {
    expect(countBy(users)).to.throw(TypeError)
  })
})
