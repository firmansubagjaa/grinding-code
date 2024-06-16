const checkBrackets = (str: string): boolean => {
  const stack: string[] = [];
  const openingBrackets: string[] = ["(", "[", "{"];
  const closingBrackets: string[] = [")", "]", "}"];

  for (const char of str) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const topElement = stack.pop();
      if (
        topElement === undefined ||
        openingBrackets.indexOf(topElement) !== closingBrackets.indexOf(char)
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(checkBrackets("()[]{}"));
console.log(checkBrackets("()[]{}("));
console.log(checkBrackets("[]"));
