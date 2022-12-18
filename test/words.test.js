import { default as words } from "../src/words.js"
import { assert, expect } from "chai"

describe("words.js. Splits string into an array of its words", () => {
  it("Testing with proper input", () => {
    expect(words("fred, barney, & pebbles")).to.deep.equal(["fred", "barney", "pebbles"])
    expect(words("fred, barney, & pebbles", /[^, ]+/g)).to.deep.equal(["fred", "barney", "&", "pebbles"])
  })
  it("Testing with empty string", () => {
    expect(words("")).to.deep.equal([])
  })
  it("Testing with empty argument", () => {
    assert.throw(() => words(), TypeError)
  })
})
