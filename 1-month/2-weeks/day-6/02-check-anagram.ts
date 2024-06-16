const checkAnagram = (str1: string, str2: string): boolean | void => {
  if (str1.length !== str1.length) return false;

  const reversed1: string = str1.split("").sort().join("");
  const reversed2: string = str2.split("").sort().join("");

  return reversed1 === reversed2;
};

console.log(checkAnagram("listen", "silent"));
console.log(checkAnagram("hello", "bello"));
