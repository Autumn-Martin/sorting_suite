const assert = require('chai').assert;
const swapNumbers = require('../swap');

describe('swap functionality', () => {
  context('swap function', () => {
    it('can swap two unsorted numbers', () => {
      // const unsortedArray = [5, 0, 1, 3, 4, 2];
      assert.deepEqual(swapNumbers.swap(swapNumbers.unsortedArray, 0, 1), [0, 5, 1, 3, 4, 2])
    });
  });
});
