const frequencySort = (strs: string) => {
  const frequency: { [key: string]: number } = {};

  for (let str of strs) {
    frequency[str] = (frequency[str] || 0) + 1;
  }

  console.log(Object.keys(frequency));

  const sortedChars = Object.keys(frequency).sort((a: string, b: string) => {
    if (frequency[b] === frequency[a]) {
      return a.localeCompare(b);
    }
    return frequency[b] - frequency[a];
  });

  let result: string = "";
  for (let char of sortedChars) {
    result += char.repeat(frequency[char]);
  }
  return result;
};

console.log(frequencySort("tree"));
