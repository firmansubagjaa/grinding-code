const removeDuplicat = (nums: number[]): number => {
  let numSet = new Set();
  let index: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!numSet.has(nums[i])) {
      numSet.add(nums[i]);
      nums[index++] = nums[i];
    }
  }

  return index;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const len1 = removeDuplicat(nums);
console.log(nums.slice(0, len1));
