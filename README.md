# Sorting Suite
Module 4 | 2019.11.21 - 2019.11.22

## About
This project is a challenge to implement one of the four following fundamental algorithms: bubble sort, insertion sort, merge sort, or quick sort.

The goal is to practice testing & writing JavaScript.

I chose to implement bubble sort, and sort from lowest to highest (left to right). Bubble sort is a sorting algorithm that repeatedly steps through a list, swaps adjacent pairs as it finds them out of order, and has the visual effect of bubbling larger elements to the top of a list.  

#### Tech Stack
JavaScript, Node.js, Mocha, Chai

## Expectations
[X] Choose **one** of the fundamental sorting algorithms to complete

[X] Use Node.js to run your code

[X] Use Mocha/Chai to run your tests

## Getting Started
This project uses Node.js, which can be downloaded [here](https://nodejs.org/en/).

Perform the following in the CLI to run the program:
`$ node bubble-sort.js`

The following output will appear: 

![](https://user-images.githubusercontent.com/36902512/48919361-35f2e680-ee47-11e8-88d1-d22ee8e94a74.png)

## Testing
[Mocha](https://mochajs.org/), a JavaScript test framework, runs this project's test suite. Mocha can be installed via the CLI: `$ npm install mocha -g`. This project's test suite also requires [Chai](https://www.chaijs.com/), a JavaScript assertion library, which has been installed via the CLI (`$ npm install chai`).

Perform the following in the CLI to run the test suite:
`$ mocha test`

-------------------------------------------------------------------
# [Turing Lesson on Sorting Algorithms](http://frontend.turing.io/projects/sorting-suite.html)

## Bubble Sort
You can see a [graphical run of the algorithm here](https://www.youtube.com/watch?v=6eA3FrFbO8Q).

For a high level understanding check out the [wikipedia article](https://en.wikipedia.org/wiki/Bubble_sort).

Bubble sort works by moving through an array of data and iteratively moving the largest number to the end of the array.

Our goal is always to move the largest number to the end of the array. We can accomplish this by starting at the beginning of the array and checking the first two elements to see if the first element is larger than the second element.

```
|  |
v  v
5  0  1  3  4  2
```

Since 5 is larger than 0 the numbers would be swapped.

```
|  |
v  v
0  5  1  3  4  2
```

Now the next two numbers can be compared

```
   |  |
   v  v
0  5  1  3  4  2
```

As we move down the array the 5 bubbles up until it is at the end of the array.

```
0  5  1  3  4  2
0  1  5  3  4  2
0  1  3  5  4  2
0  1  3  4  5  2
0  1  3  4  2  5
```

Richer Example
Let’s look at the sequence for a more out-of-order sequence:

Each iteration the largest number bubbles to the top

```
[ 5, 4, 3, 2, 1 ]
[ 4, 5, 3, 2, 1 ]
[ 4, 3, 5, 2, 1 ]
[ 4, 3, 2, 5, 1 ]
[ 4, 3, 2, 1, 5 ]
```

```
[ 4, 3, 2, 1, 5 ]
[ 3, 4, 2, 1, 5 ]
[ 3, 2, 4, 1, 5 ]
[ 3, 2, 1, 4, 5 ]
[ 3, 2, 1, 4, 5 ]
```

```
[ 3, 2, 1, 4, 5 ]
[ 2, 3, 1, 4, 5 ]
[ 2, 1, 3, 4, 5 ]
[ 2, 1, 3, 4, 5 ]
[ 2, 1, 3, 4, 5 ]
```

```
[ 2, 1, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
```
