module.exports = bubbleSort

const swapNumbers = require('./swap');
const unsortedArray = [5, 0, 1, 3, 4, 2];
const sortedArray = bubbleSort(unsortedArray);

function bubbleSort(unsortedArray) {
  let currentIndex = 0;
  let nextIndex = currentIndex + 1;
  swapNumbers(unsortedArray, currentIndex, nextIndex)
  return unsortedArray
}

console.log(bubbleSort(unsortedArray))
