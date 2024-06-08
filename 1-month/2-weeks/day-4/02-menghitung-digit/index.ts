const countDivisibleDigits = (nums: number): number | void => {
  /*
     menyiapkan variable:
     count : number = 0
     temp : number nums 
   */
  let count: number = 0;
  let temp: number = nums;

  /*
     selama nilai temp dari num masih diatas nilai 0, maka pengoperasian
     while akan terus berjalan hingga bernilai 0
   */
  while (temp > 0) {
    let digit = temp % 10; // mengambil nilai paling belakang belakang

    /*
        skenario
        - jika nilai digit tidak bernilai 0 dan 
          hasil bagi dari nilai nums digit sama dengan 0, maka count akan ditambah 1
        - jika nilai digit bernilai 0 dan 
          hasil bagi dari nilai nums digit tidak bernilai 0, maka count tidak ditambahkan 1
     */
    if (digit !== 0 && nums % digit === 0) {
      count++;
    }
    // membuang angka terakhir dengan melakukan pembulatan (Math.floor())
    temp = Math.floor(temp / 10);
  }
  // menghasilkan hasil count banyaknya nilai setiap nums yang bisa dibagikan
  return count;
};

console.log(countDivisibleDigits(124)); // Output: 3
console.log(countDivisibleDigits(1012)); // Output: 3
console.log(countDivisibleDigits(111)); // Output: 3
