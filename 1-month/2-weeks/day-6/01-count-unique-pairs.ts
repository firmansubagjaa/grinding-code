const countUniquePairs = (nums: number[], target: number): number | void => {
  let count: number = 0;
  const checked = new Set<string>();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        let pairs = [nums[i], nums[j]].sort().toString();
        if (!checked.has(pairs)) {
          checked.add(pairs);
          count++;
        }
      }
    }
  }
  return count;
};

console.log(countUniquePairs([1, 2, 3, 4, 3], 6));
