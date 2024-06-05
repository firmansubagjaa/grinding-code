const averageTotal = (nums: number[]): number | void => {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
};
