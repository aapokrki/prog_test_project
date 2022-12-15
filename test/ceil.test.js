import { default as ceil } from "../src/ceil.js";
import { expect } from 'chai';

describe('Ceil.js', () => {
    it('Should round number up to precision', () => {
        expect(ceil(4.006)).to.equal(5);
        expect(ceil(6.004, 2)).to.equal(6.01);
        expect(ceil(6040, -2)).to.equal(6100);
        expect(ceil(-12.3456, 3)).to.equal(-12.345);
    });

    /*it('Should return an empty string if no argument is provided', () => {
        expect(capitalize(null)).to.equal('');
    });*/

});