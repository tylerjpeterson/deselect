'use strict';

var chai = require('chai');
var deselect = require('./../../');
var assert = chai.assert;

/**
 * deselect mocha tests
 * @see https://mochajs.org/
 */
describe('deselect', function () {
	it('should be a function', function () {
		assert.equal(typeof deselect, 'function');
	});

	it('should return selector excluding all passed selectors', function () {
		assert.equal(deselect(['p','a','h2']), '*:not(p),*:not(a),*:not(h2)');
	});

	it('should handle strings gracefully', function () {
		assert.equal(deselect('p'), '*:not(p)');
	});

	it('should return empty string if parameters are invalid', function () {
		assert.equal(deselect(), '');
	});

	it('should split a string on commas', function () {
		assert.equal(deselect('p,a,h2'), '*:not(p),*:not(a),*:not(h2)');
	});
});
