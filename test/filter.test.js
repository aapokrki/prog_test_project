import { default as filter } from "../src/filter.js"
import { expect } from "chai"
import storeProducts from "./testUtils.js"
const users = [
  { "user": "barney", "active": true },
  { "user": "fred", "active": false },
]

describe("filter.js. Returns an array of all elements`predicate` returns truthy for", () => {
  it("1. Testing with proper input", () => {
    expect(filter(users, ({ active }) => active)).to.deep.equal([{ user: "barney", active: true }])
    expect(filter(users, ({ active }) => active == false)).to.deep.equal([{ user: "fred", active: false }])
  })
  it("2. Testing with unexisting key, should return empty array", () => {
    expect(filter(users, ({ passive }) => passive)).to.deep.equal([[]])
  })

  describe("Filter parameters on store products with VALID inputs", () => {
    it("Filter category correctly", () => {
      const filteredProducts = filter(storeProducts, ({ category }) => category == "Vegetable")
      filteredProducts.forEach(({ category }) => {
        expect(category).to.equal("Vegetable")
      })
    })

    it("Filter price correctly (0.00 - 5.00 €)", () => {
      const filteredProducts = filter(storeProducts, ({ price }) => price >= 0.0 && price <= 5.0)
      filteredProducts.forEach(({ price }) => {
        expect(price).to.be.above(0.0).and.below(5.0)
      })
    })
    it("Filter producer correctly", () => {
      const filteredProducts = filter(storeProducts, ({ producer }) => producer == "Olio Santo")
      filteredProducts.forEach(({ producer }) => {
        expect(producer).to.equal("Olio Santo")
      })
    })
    it("Filter contents correctly (anything that contains soy)", () => {
      const filteredProducts = filter(storeProducts, ({ contents }) => contents.includes("Soy"))
      filteredProducts.forEach(({ contents }) => {
        expect(contents).to.contain("Soy")
      })
    })
  })
  describe("Filter parameters on store products with inputs that don't exist", () => {
    it("Nonexistant category", () => {
      const filteredProducts = filter(storeProducts, ({ category }) => category == "Smoking")
      expect(filteredProducts).to.deep.equal([[]])
    })

    it("Impossible price range (x>10.00  x<5.00 €)", () => {
      const filteredProducts = filter(storeProducts, ({ price }) => price >= 10.0 && price <= 5.0)
      expect(filteredProducts).to.deep.equal([[]])
    })

    it("Nonexistant producer", () => {
      const filteredProducts = filter(storeProducts, ({ producer }) => producer == "Aapon ja Ilarin kotikeittiö")
      expect(filteredProducts).to.deep.equal([[]])
    })
    it("Nonexistant content", () => {
      const filteredProducts = filter(storeProducts, ({ contents }) => contents.includes("Cheeto"))
      expect(filteredProducts).to.deep.equal([[]])
    })
  })
})
