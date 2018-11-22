module.exports = bubbleSort

const swapNumbers = require('./swap');
const unsortedArray = [5, 0, 1, 3, 4, 2];
const sortedArray = bubbleSort(unsortedArray);

function bubbleSort(unsortedArray) {
  let sorted = false;

  while(!sorted) {
    let lastIndexToSort = unsortedArray.length - 1;

    sorted = true;
    for(let currentIndex = 0; currentIndex < lastIndexToSort; currentIndex++) {
      let nextIndex = currentIndex + 1;

      if (unsortedArray[currentIndex] > unsortedArray[nextIndex]) {
        swapNumbers(unsortedArray, currentIndex, nextIndex)
        console.log(unsortedArray)
        sorted = false;
      }
      console.log(currentIndex)
    }
    var runNum = typeof runNum == "undefined" ? runNum = 1 : runNum = runNum;
    runNum += 1
    console.log(`run ${runNum}`)
  }
  console.log("break")
  return unsortedArray
}

console.log(sortedArray)
