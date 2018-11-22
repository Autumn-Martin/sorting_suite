const chai = require('chai')
const assert = chai.assert;
const expect = chai.expect;
const swapNumbers = require('../swap');
var stdout = require("test-console").stdout;

var output = stdout.inspectSync(() => {swapNumbers([5, 0, 1, 3, 4, 2], 0, 1)});

describe('swap functionality', () => {
  context('swap function', () => {
    it('can swap two unsorted numbers', () => {
      const unsortedArray = [5, 0, 1, 3, 4, 2];
      assert.deepEqual(swapNumbers(unsortedArray, 0, 1), [0, 5, 1, 3, 4, 2])
    });
    it('is a function', () => {
      expect(swapNumbers).to.be.a('Function');
    })
    it('says hello', () => {

      assert.deepEqual(output, [ "hi\n"]);
    })
  });
});
