"use strict";

//Алгоритм - набор последовательных действий, решающих определённую задачу
//Стоит говорить о сложности и скорости алгоритма
// O(logN), O(n), O(nLogN) ,O(n**2), O(n!)

/**************
 *****SEARCH******
 ***************/
const arrayForMethodSearch = [1, 4, 9, 11, 22, 90];

//binarySearch O(LOG N)
const binarySearch = (arr, num) => {
  let start = 0;
  let end = arr.length;
  let mid;
  let flag = false;
  let position = -1;

  while (!flag && start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      flag = true;
      position = mid;
      return position;
    }
    if (num < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return position;
};

const recursiveBinarySearch = (arr, num, start, end) => {
  let mid = Math.floor((start + end) / 2);
  if (num === arr[mid]) {
    return mid;
  }
  if (num < arr[mid]) {
    return recursiveBinarySearch(arr, num, start, mid - 1);
  } else {
    return recursiveBinarySearch(arr, num, mid + 1, end);
  }
};

console.log(
  binarySearch([1, 3, 5, 7, 8, 13, 14, 15, 16, 17, 19, 30, 34, 39], 19)
); // 10

const arrBin = [1, 3, 5, 7, 8, 13, 14, 15, 16, 17, 19, 30, 34, 39];
console.log(recursiveBinarySearch(arrBin, 19, 0, arrBin.length)); // 10

//linearSearch
const linearSearch = (arr, num) => {
  let i = null;
  arr.forEach((item, index) => {
    if (item === num && i === null) {
      i = index;
    }
  });
  return i;
};

console.log(linearSearch([12, 354, 4, 18, 20, 44, 19, 44, 44, 24], 44)); // 5

/**************
 *****SORT******
 ***************/

//bubble sort O(n**2)
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
    }
  }
  return array;
};
console.log(bubbleSort([12, 354, 4, 18, 20, 44, 19, 44, 44, 24]));

//quick sort O(N*LogN)
const quickSort = (array) => {
  if (array.length <= 1) return array;

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
};
console.log(
  quickSort([
    12, 354, 4, 18, 20, 44, 19, 44, 44, 24, 12, 354, 4, 18, 20, 44, 19, 44, 44,
    24, 12, 354, 4, 18, 20, 44, 19, 44, 44, 24, 12, 354, 4, 18, 20, 44, 19, 44,
    44, 24,
  ])
);
//selection sort O(1/2 n**2)
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let index = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[index]) {
        index = j;
      }
    }
    [array[i], array[index]] = [array[index], array[i]];
  }
  return array;
};

console.log(selectionSort([12, 354, 4, 18, 20, 44, 19, 44, 44, 24]));