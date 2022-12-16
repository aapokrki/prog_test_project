import { default as capitalize } from "../src/capitalize.js";
import { expect } from 'chai';


describe('Testing capitalize.js', () => {
    it('Should convert the first character of a string to upper case and the remaining characters to lower case', () => {
        expect(capitalize('TEST')).to.equal('Test');
        expect(capitalize('test')).to.equal('Test');
        expect(capitalize('tESt')).to.equal('Test');
        expect(capitalize('TEsT')).to.equal('Test');
    });

    /*it('Should return an empty string if no argument is provided', () => {
        expect(capitalize(null)).to.equal('');
    });*/

});
