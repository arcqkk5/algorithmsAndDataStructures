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
