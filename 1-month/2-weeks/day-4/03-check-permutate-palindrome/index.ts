const checkPermutatePalindrome = (str: string): boolean | void => {
  let count: { [key: string]: number } = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  let addCount: number = 0;
  for (let key in count) {
    if (count[key] % 2 === 0) {
      addCount++;
    }
    if (addCount > 1) {
      return false;
    }
  }
  return true;
};

console.log(checkPermutatePalindrome("tactcoa"));
