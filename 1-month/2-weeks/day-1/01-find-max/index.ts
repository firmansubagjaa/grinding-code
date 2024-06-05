const findMax = (nums: number[]): number | void => {
  let max: number = 0;
  for (let num of nums) {
    if (num > max) {
      max += num;
    }
  }
  return max;
};
