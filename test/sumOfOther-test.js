'use strict'
let assert = require('assert');
const sumOfOther = require('../sumOfOther');

describe('sumOfOther', function() {

	it('Resulting array is [8, 7, 6, 9]', function() {
		assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
	})

	it('Resulting array is [9, 8, 7, 6]', function() {
		assert.deepEqual(sumOfOther([1, 2, 3, 4]), [9, 8, 7, 6]);
	})

	it('Resulting array is [90, 80, 70, 60]', function() {
		assert.deepEqual(sumOfOther([10, 20, 30, 40]), [90, 80, 70, 60]);
	})

	it('Resulting array is [15, 13, 20, 21]', function() {
		assert.deepEqual(sumOfOther([8, 10, 3, 2]), [15, 13, 20, 21]);
	})

})