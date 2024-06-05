const descendingOrder = (nums: number) => {
  return Number(
    nums
      .toString()
      .split("")
      .sort((a: any, b: any) => a - b)
      .reverse()
      .join("")
  );
};

console.log(descendingOrder(1321432));
