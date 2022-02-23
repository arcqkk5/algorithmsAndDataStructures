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
