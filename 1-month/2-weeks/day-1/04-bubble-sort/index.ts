const descendingSorting = (nums: number[]): number[] => {
  let swapped: boolean;
  while (true) {
    swapped = false;
    for (let i: number = nums.length - 1; i > 0; i--) {
      if (nums[i] > nums[i - 1]) {
        [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return nums;
};
