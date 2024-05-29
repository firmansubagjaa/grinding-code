const sumArray = (nums: number[]) => {
  let sum: number = 0;

  for (let num of nums) {
    sum += num;
  }
  return sum;
};

console.log(sumArray([1, 2, 3, 4, 5]));
