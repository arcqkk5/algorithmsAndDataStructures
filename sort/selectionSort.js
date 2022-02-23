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
