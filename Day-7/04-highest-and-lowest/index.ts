const highAndLow = (nums: string): string | void => {
  let toNumber = nums.split(" ").map((num) => parseInt(num));
  let max: number = Math.max(...toNumber);
  let min: number = Math.min(...toNumber);

  return `${max} ${min}`;
};

console.log(highAndLow("1 2 -3 4 5"));
