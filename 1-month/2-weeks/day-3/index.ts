/*
 *Input: nums = [1, 2, 3, 4, 5], left = 2, right = 4
Output: 9
Penjelasan: Elemen-elemen dalam rentang adalah 2, 3, dan 4. Jumlahnya adalah 2 + 3 + 4 = 9.

Input: nums = [-1, 0, 1, 2], left = 0, right = 1
Output: 1
Penjelasan: Elemen-elemen dalam rentang adalah 0 dan 1. Jumlahnya adalah 0 + 1 = 1.
 
 */

const sumOfRange = (
  nums: number[],
  left: number,
  right: number
): number | void => {
  let sum: number = 0;

  for (let num of nums) {
    if (num >= left && num <= right) {
      sum += num;
    }
  }

  return sum;
};

console.log(sumOfRange([1, 2, 3, 4, 5], 2, 4));
