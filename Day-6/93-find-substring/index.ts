const findSubstring = (str: string, subString: string): boolean | void => {
  if (subString.length > str.length) return false;
  return str.includes(subString);
};

console.log(findSubstring("hello", "llo"));
console.log(findSubstring("helloworld", "world"));
console.log(findSubstring("apple", "banana"));
