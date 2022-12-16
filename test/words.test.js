import { default as words } from "../src/words.js";
import { expect } from 'chai';


describe('words.js. Splits string into an array of its words', () => {
    it('1. Testing with proper input', () => {
        expect(words('fred, barney, & pebbles')).to.deep.equal(['fred', 'barney', 'pebbles']);
        expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
    });
    it('2. Testing with empty string', () => {
        expect(words('')).to.deep.equal([]);
    });
    it('3. Testing with empty argument', () => {
        expect(words()).to.deep.equal([]);
    });
    
});