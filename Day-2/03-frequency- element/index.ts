const frequencyEl = (arr: number[]) => {
  const frequency: { [key: number]: number } = {};
  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }
  return frequency;
};

console.log(frequencyEl([1, 1, 2, 3, 5, 5]));
