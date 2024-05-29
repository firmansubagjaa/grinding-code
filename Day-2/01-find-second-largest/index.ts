const findSecondLargest = (nums: number[]) => {
  nums.sort((a, b) => a - b);
  let firstLargest: number = -Infinity;
  let secondLargest: number = -Infinity;

  for (let num of nums) {
    if (num > firstLargest) [secondLargest, firstLargest] = [firstLargest, num];
    if (num > secondLargest && num < firstLargest) secondLargest = num;
  }
  return secondLargest;
};
