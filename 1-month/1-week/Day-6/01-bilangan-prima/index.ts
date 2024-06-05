const bilanganPrima = (nums: number): string | void => {
  for (let i = 2; i < nums; i++) {
    if (nums % i === 0) return `${nums} bukan bilangan prima.`;
  }
  return `${nums} adalah bilangan prima.`;
};

console.log(bilanganPrima(12));
