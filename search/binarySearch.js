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
