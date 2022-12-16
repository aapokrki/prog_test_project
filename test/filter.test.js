import { default as filter } from "../src/filter.js";
import { expect } from 'chai';

const users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred', 'active': false }
]


describe('filter.js. Returns an array of all elements`predicate` returns truthy for', () => {
    it('1. Testing with proper input', () => {
        expect(filter(users, ({ active }) => active)).to.deep.equal([{ user: 'barney', active: true }]);
        expect(filter(users, ({ active }) => active==false)).to.deep.equal([{ user: 'fred', active: false }]);

    });
    it('2. Testing with unexisting key, should return empty array', () => {
        expect(filter(users, ({ passive }) => passive)).to.deep.equal([[]]);
    });
});