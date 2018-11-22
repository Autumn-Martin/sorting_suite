module.exports = bubbleSort

const swapNumbers = require('./swap');
const unsortedArray = [5, 4, 3, 2, 1, 0];
const sortedArray = bubbleSort(unsortedArray);

function bubbleSort(unsortedArray) {
  let sorted = false;

  console.log('run 1 - sort 5')
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
    var sortNum = typeof sortNum == "undefined" ? sortNum = 5 : sortNum = sortNum
    sortNum -= 1
    runNum += 1
    if (sortNum < 0) {
      console.log('runs finished')
    } else {
      console.log(`run ${runNum} - sort ${sortNum}`)
    }
  }
  console.log("bubble sort complete")
  return unsortedArray
}

console.log(sortedArray)
