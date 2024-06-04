const checkAnagram = (str1: string, str2: string): boolean | void => {
  if (str1.length !== str2.length) return false;

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
};

console.log(checkAnagram("hello", "lloeh"));
