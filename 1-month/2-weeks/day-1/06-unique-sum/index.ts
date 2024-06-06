const uniqueSum = (nums: number[]): boolean | void => {
  const numMap = new Set(nums);
  return numMap.size === nums.length;
};

const numbers1 = [10, 2, 5, 7, 3]; // No Duplicates
const numbers2 = [10, 2, 5, 5, 3]; // Duplicates

console.log(uniqueSum(numbers1));
console.log(uniqueSum(numbers2));
