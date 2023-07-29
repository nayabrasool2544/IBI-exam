const arr = [1, 2, 3, 4, 5];
const reversedArr = arr.reduce((acc, curr) => {
  return [curr, ...acc];
}, []);

console.log(reversedArr);
