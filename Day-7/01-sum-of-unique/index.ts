/*
  Input: nums = [1,2,3,2]
Output: 4
Penjelasan: Elemen unik adalah [1,3], jadi jumlahnya adalah 1 + 3 = 4.

Input: nums = [1,1,1,1,1]
Output: 0
Penjelasan: Tidak ada elemen unik, jadi jumlahnya adalah 0.

Input: nums = [1,2,3,4,5]
Output: 15
Penjelasan: Semua elemen unik, jadi jumlahnya adalah 1 + 2 + 3 + 4 + 5 = 15.

*/

const sumOfUnique = (nums: number[]): number | void => {
  const numMap = new Map<number, number>();

  for (let num of nums) {
    numMap.set(num, (numMap.get(num) || 0) + 1);
  }

  let sum: number = 0;
  for (const [num, count] of numMap.entries()) {
    if (count === 1) {
      sum += num;
    }
  }
  return sum;
};

console.log(sumOfUnique([1, 2, 3, 2]));
console.log(sumOfUnique([1, 1, 1, 1, 1]));
console.log(sumOfUnique([1, 2, 3, 4, 5]));
