/*
   find second largest number in an array

   langkah-langkah
   1. kita siapkan sebuah function yang bernama 'findSecondLargest dengan memiliki parameter
      -  nums: number[] => menerima tipe data array number
   2. kita buat variable 'firstLargest' dan 'secondLargest' yang bernilai 0 atau nilai minimal yang bisa ditampung
   3. kita melakukan perulangan dengan menggunakan 'for of'

*/

function findSecondLargest(nums: number[]): number {
  let firstLargest: number = Number.MIN_SAFE_INTEGER;
  let secondLargest: number = Number.MIN_SAFE_INTEGER;

  for (let num of nums) {
    if (num > firstLargest) {
      [secondLargest, firstLargest] = [firstLargest, num];
    }
    if (num > secondLargest && num < firstLargest) {
      secondLargest = num;
    }
  }
  return secondLargest;
}

console.log(findSecondLargest([1, 2, 3, 4, 5]));
console.log(findSecondLargest([10, -2, 3, 0, 7]));
console.log(findSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
