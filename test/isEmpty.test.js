import { default as isEmpty } from "../src/isEmpty.js";
import { expect } from 'chai';

describe('isEmpty.js. Checks if value is en empty object, collection, map or set', () => {
    it('1. Testing with input', () => {
        expect(isEmpty(null)).to.equal(true);
        expect(isEmpty(true)).to.equal(true);
        expect(isEmpty(1)).to.equal(true);
        expect(isEmpty([1, 2, 3])).to.equal(false);
        expect(isEmpty('abc')).to.equal(false);
        expect(isEmpty({ 'a': 1 })).to.equal(false);

    });
    it('2. Testing with empty argument', () => {
        expect(isEmpty()).to.equal(true);
    });
});