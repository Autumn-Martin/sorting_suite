module.exports = swap

const unsortedArray = [5, 0, 1, 3, 4, 2]
let currentIndex = 0
let nextIndex = currentIndex + 1

function swap(unsortedArray, currentIndex, nextIndex) {
  if (unsortedArray[currentIndex] > unsortedArray[nextIndex]) {
    var briefHolder = unsortedArray[nextIndex];

    unsortedArray[nextIndex] = unsortedArray[currentIndex];
    unsortedArray[currentIndex] = briefHolder;

    return unsortedArray;
  }
}
