/*
   Langkah-langkah:
   1. kita siapakan sebuah function yang bernama 'sumArray'
      dengan memiliki parameter untuk menerima tipe data array
   2. lalu kita membuat variable 'total' yang bernilai 0
   3. lalu kita melakukan perulangan dengan menggunakan 'for'
   4. lalu kita menambahkan kedalam variable 'total' setiap elemen array
   5. lalu kita return 'total'
*/

const nums: number[] = [1, 2, 3, 4, 5];

// brute force
function sumArrayV1(nums: number[]): number {
  let sum: number = 0;
  for (let i: number = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

// menggunakan reduce
function sumArrayV2(nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(`
   Input: [1, 2, 3, 4, 5]

   ***Menggunakan brute force***
   Output: ${sumArrayV1(nums)}

   ***Menggunakan built-in reduce***
   Output: ${sumArrayV2(nums)}
`);
