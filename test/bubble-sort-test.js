const assert = require('chai').assert;
const expect = require('chai').expect;
const bubbleSort = require('../bubble-sort');
const stdout = require('test-console').stdout;

const output = stdout.inspectSync(() => {bubbleSort([5, 0, 1, 3, 4, 2])})

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
    it('is a function', () => {
      expect(bubbleSort).to.be.a('Function');
    });
    it('displays expected console output', () => {
      assert.deepInclude(output, '\u001b[35mBegin sorting:\u001b[39m\n');
      assert.deepInclude(output, 'Index 5 is sorted.\n')
      assert.deepInclude(output, 'Index 4 is sorted.\n')
      assert.deepInclude(output, 'Index 3 is sorted.\n')
      assert.deepInclude(output, 'Index 2 is sorted.\n')
      assert.deepInclude(output, '\u001b[32mBubble sort complete.\u001b[39m\n')
    });
  });
});
