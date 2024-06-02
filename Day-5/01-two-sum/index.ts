const twoSums = (nums: number[], target: number): number[] => {
  const numMap: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }

  return [];
};

console.log(twoSums([2, 7, 11, 15], 9));
console.log(twoSums([3, 2, 4], 6));
console.log(twoSums([3, 3], 6));
