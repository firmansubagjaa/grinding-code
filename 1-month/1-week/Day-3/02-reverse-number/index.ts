const reversedNum = (nums: number) => {
  let reversed: number = 0;

  while (nums > 0) {
    let digit = nums % 10;
    reversed = reversed * 10 + digit;
    nums = Math.floor(nums / 10);
  }
  return reversed;
};

console.log(reversedNum(123));
