const parentheses = (str: string): boolean | void => {
  let stack: string[] = [];
  let map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  for (let i: number = 0; i < str.length; i++) {
    const topElement = stack.length > 0 ? stack[stack.length - 1] : null;
    if (map.has(str[i])) {
      stack.push(str[i]);
    }

    if (map.has(topElement!) && map.get(topElement!) === str[i]) {
      stack.pop();
    }
  }
  console.log(stack);
  return stack.length === 0;
};

console.log(parentheses("()[]{}"));

console.log(parentheses("()[]{}("));
