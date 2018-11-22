const assert = require('chai').assert;
const expect = require('chai').expect;
const bubbleSort = require('../bubble-sort');

describe('bubble sort functionality', () => {
  context('bubbleSort function', () => {
    it('can sort an unsorted array', () => {
      let unsortedArray = [5, 0, 1, 3, 4, 2];

      expect(bubbleSort(unsortedArray)).to.be.an('array');
      assert.deepEqual(bubbleSort(unsortedArray), [0, 1, 2, 3, 4, 5]);

      unsortedArray = [5, 4, 3, 2, 1, 0];

      expect(bubbleSort(unsortedArray)).to.be.an('array');
      assert.deepEqual(bubbleSort(unsortedArray), [0, 1, 2, 3, 4, 5]);

      unsortedArray = [42, 32, 70, 0, -9];

      expect(bubbleSort(unsortedArray)).to.be.an('array');
      assert.deepEqual(bubbleSort(unsortedArray), [-9, 0, 32, 42, 70]);
    });
    
    it('displays expected output', () => {

    })
  });
});
