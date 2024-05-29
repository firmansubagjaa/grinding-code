const isPalindrome = (s: string) => {
  const cleanedStr: string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(cleanedStr);
  const reversed: string = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversed;
};
