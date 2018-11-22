module.exports = bubbleSort

const swapNumbers = require('./swap');
const unsortedArray = [5, 0, 1, 3, 4, 2];
const sortedArray = bubbleSort(unsortedArray);

function bubbleSort(unsortedArray) {
  const lastIndexToSort = unsortedArray.length - 1

  for(let currentIndex = 0; currentIndex < lastIndexToSort; currentIndex++) {
    let nextIndex = currentIndex + 1;

    if (unsortedArray[currentIndex] > unsortedArray[nextIndex]) {
      swapNumbers(unsortedArray, currentIndex, nextIndex)
    }
  }
  return unsortedArray
}

console.log(bubbleSort(unsortedArray))
