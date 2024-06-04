/*
  vending machine
*/

const vendingMachine = (
  change: number
): (string | number)[] | string | void => {
  const products = [
    { product: "cola", price: 1000 },
    { product: "chips", price: 500 },
    { product: "candy", price: 250 },
  ];

  let result: { product: string; price: number }[] = [];
  let total: number = 0;
  for (const product of products) {
    total += product.price;
    if (total <= change) {
      result.push({
        ...product,
        product: product.product,
        price: product.price,
      });
    }
  }

  return result.map((v) => `${v.product} - ${v.price}`).join("\n");
};

console.log(vendingMachine(1500));
