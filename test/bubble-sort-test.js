const assert = require('chai').assert;
const bubbleSort = require('../bubble-sort');

describe('bubble sort functionality', () => {
  context('bubbleSort function', () => {
    it('can sort an unsorted array', () => {
      const unsortedArray = [5, 0, 1, 3, 4, 2];
      assert.deepEqual(bubbleSort(unsortedArray), [0,1,2,3,4,5])
    });
  });
});
