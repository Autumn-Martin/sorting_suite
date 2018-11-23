module.exports = bubbleSort

const chalk = require('chalk')
const swapNumbers = require('./swap');
const unsortedArray = [5, 4, 3, 2, 1, 0];
const sortedArray = bubbleSort(unsortedArray);

function bubbleSort(unsortedArray) {
  let sorted = false;

  console.log(unsortedArray)
  console.log(chalk.magenta(`Begin sorting:`))

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
    }
    var sortedIndex = typeof sortedIndex == 'undefined' ? sortedIndex = lastIndexToSort : sortedIndex -= 1;
    console.log(`Index ${sortedIndex} is sorted.`)
  }
  console.log(chalk.green('Bubble sort complete.'))
  return unsortedArray
}

console.log(sortedArray)
