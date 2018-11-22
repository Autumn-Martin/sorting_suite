module.exports = swap

function swap(unsortedArray, currentIndex, nextIndex) {
    var briefHolder = unsortedArray[nextIndex];

    unsortedArray[nextIndex] = unsortedArray[currentIndex];
    unsortedArray[currentIndex] = briefHolder;
    console.log("hi")
    return unsortedArray;
}
