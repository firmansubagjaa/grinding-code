/*
  Input: nums = [3, 2, 3]
Output: 3

Input: nums = [2, 2, 1, 1, 1, 2, 2]
Output: 2
*/

const majorityEl = (nums: number[]): number | void => {
  let count: number = 0;
  let candidate: number = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};

// console.log(majorityEl([3, 2, 3]));
// console.log(majorityEl([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityEl([1, 1, 1, 2, 2]));
