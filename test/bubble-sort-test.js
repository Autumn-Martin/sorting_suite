const assert = require('chai').assert;
const bubbleSort = require('../bubble-sort');

describe('bubble sort functionality', () => {
  context('bubbleSort function', () => {
    it('can sort an unsorted array', () => {
      let unsortedArray = [5, 0, 1, 3, 4, 2];
      assert.deepEqual(bubbleSort(unsortedArray), [0, 1, 2, 3, 4, 5])

      unsortedArray = [5, 4, 3, 2, 1, 0]
      assert.deepEqual(bubbleSort(unsortedArray), [0, 1, 2, 3, 4, 5])

      unsortedArray = [42, 32, 70, 0, -9]
      assert.deepEqual(bubbleSort(unsortedArray), [-9, 0, 32, 42, 70])
    });
  });
});
