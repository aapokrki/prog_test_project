import { default as countBy } from "../src/countBy.js"
import { assert, AssertionError, expect } from "chai"

const users = [
  { "user": "barney", "active": true },
  { "user": "betty", "active": true },
  { "user": "fred", "active": false },
]

// Faulty code: Does not work as intended. Does not count false values
describe("Testing countBy.js. Should show number of times each value occurs behind key", () => {
  it("1. Testing with existing keys", () => {
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
  //Tästä en tiiä mitä ton pitäs equalaa ku ei oo annettu dokumentaatios
  it("3. Testing with unexisting keys", () => {
    assert.throws(() => {
      countBy(users, (value) => value.passive)
    }, AssertionError)
  })
  //Seuraavakaan ei toimi ku tuo errori tapahtuu jossai tuol countBy.js tiedostos
  it('2. Testing with nothing as "iteratee" argument', () => {
    expect(countBy(users)).to.throw(TypeError)
  })
})
