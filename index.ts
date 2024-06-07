const majorityEl = (nums: number[]): number | void => {
  let count: number = 0;
  let candidate: number = 0;

  for (let num of nums) {
    if (count !== 0) {
      console.log(candidate);
      candidate = num;
    }
    if (num === candidate) {
      count += 1;
    } else {
      count -= 1;
    }
  }
  return candidate;
};

console.log(majorityEl([3, 2, 3]));
// console.log(majorityEl([1, 1, 2]));
