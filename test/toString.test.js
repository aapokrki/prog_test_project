import { default as toString } from "../src/toString.js";
import { expect } from 'chai';

describe('toString.js. Converts value to a string', () => {
    it('1. Testing with proper input', () => {
        expect(toString(-0)).to.equal('-0');
        expect(toString([1, 2, 3])).to.equal('1,2,3');
    });
    //Actually returns 'undefined', but documentation says empty string
    it('2. Testing with empty argument', () => {
        expect(toString()).to.equal('');
    });
    //Actually returns 'null', but documentation says empty string
    it('3. Testing with null value', () => {
        expect(toString(null)).to.equal('');
    });
});