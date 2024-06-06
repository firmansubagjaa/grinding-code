const lengthWord = (words: string[]): number => {
  let count: number = 0;
  for (let word of words) {
    if (word.length >= 0 && word.length >= 5) {
      count += 1;
    }
  }
  return count;
};

console.log(lengthWord(["hello", "world", "this", "is", "great"]));
