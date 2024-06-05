const sumOfEven = (nums: number[]): number => {
  let total: number = 0;
  for (let num of nums) {
    if (num % 2 === 0) {
      total += num;
    }
  }

  return total;
};
