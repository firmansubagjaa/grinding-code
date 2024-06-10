export const isSubstring = (s: string, t: string): boolean | void => {
  if (!t || t.length === 0) return false;
  return s.includes(t);
};

console.log(isSubstring("hello", "llo"));
console.log(isSubstring("helloworld", "world"));
console.log(isSubstring("apple", "banana"));

export const countUniqueCharacter = (strs: string): number => {
  let charSets = new Set<string>();
  for (let char of strs) {
    charSets.add(char);
  }

  return charSets.size;
};

console.log(countUniqueCharacter("hello"));
console.log(countUniqueCharacter("aaabbbccc"));
