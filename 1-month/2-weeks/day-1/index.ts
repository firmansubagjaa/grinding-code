const findMax = (nums: number[]): number | void => {
  let max: number = 0;
  for (let num of nums) {
    if (num > max) {
      max += num;
    }
  }
  return max;
};

console.log(findMax([10, 2, 5, 7, 3]));
const sumOfEven = (nums: number[]): number => {
  let total: number = 0;
  for (let num of nums) {
    if (num % 2 === 0) {
      total += num;
    }
  }

  return total;
};

const averageTotal = (nums: number[]): number | void => {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
};

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

const numbers: number[] = [10, 2, 5, 7, 3];
console.log(sumOfEven(numbers));
console.log(averageTotal(numbers));
console.log(descendingSorting(numbers));
