const romanToInt = (str: string): number | void => {
  const roman = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let total: number = 0;

  for (let i: number = 0; i < str.toUpperCase().length; i++) {
    let currentValue = roman.get(str[i]) || 0;
    let nextValue = roman.get(str[i + 1]) || 0;

    if (currentValue < nextValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }

  return total;
};

console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("v"));
