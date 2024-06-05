/*
  Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/

const reverseStr = (str: string[]): string[] | void => {
  let left: number = 0;
  let right: number = str.length - 1;

  while (left < right) {
    [str[left], str[right]] = [str[right], str[left]];
    left++;
    right--;
  }

  return str;
};

console.log(reverseStr(["h", "e", "l", "l", "o"]));

console.log(reverseStr(["H", "a", "n", "n", "a", "h"]));
