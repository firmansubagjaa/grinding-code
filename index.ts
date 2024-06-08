/*
  Memeriksa Palindrom Permutasi
  Deskripsi:
  Diberikan sebuah string s, periksa apakah string tersebut bisa diatur ulang 
  (permutasi) menjadi sebuah palindrom. Sebuah palindrom adalah kata atau frasa 
  yang sama ketika dibaca dari depan maupun belakang.

  Input: s = "code"
  Output: false

  Input: s = "aab"
  Output: true

  Input: s = "carerac"
  Output: true
*/

const canPermutePalindrome = (str: string): boolean | void => {
  /*
    membuat sebuah variable count dengan struktur data object untuk menampung: 
    - key berupa huruf 
    - value berupa number

    contoh gambaran :
    {"a" : 1 }
  */
  let count: { [key: string]: number } = {};

  /*
    lalu melakukan for of dimana akan mengambil value didalam str berdasarkan index
  */
  for (let char of str) {
    // menampung berapa banyak char/huruf dan disimpan di object count
    count[char] = (count[char] || 0) + 1;
  }

  // membuat variable addCount yang bertipe data number untuk melakukan validasi
  let addCount: number = 0;

  // melakukan for in untuk mengambil value di struktur data object count
  for (let key in count) {
    /*
      skenario
      - jika nilai banyak variable hasil bagi 2 tidak menghasilkan nilai 0
        maka addCount akan bertambah
      - jika nilai banyak variable hasil bagi 2 menghasilkan nilai 0,
        maka addCount tidak berubah 
    */
    if (count[key] % 2 !== 0) {
      addCount++;
    }

    /*
      skenario
      - jika nilai addCount lebih dari 1, maka returnkan false
      - jika nilai addCount kurang dari 1, maka returnkan true
    */
    if (addCount > 1) {
      return false;
    }
  }
  return true;
};

console.log(canPermutePalindrome("code")); // Output: false
// console.log(canPermutePalindrome("aab")); // Output: true
// console.log(canPermutePalindrome("carerac")); // Output: true
