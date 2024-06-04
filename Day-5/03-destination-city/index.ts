/**
 * input = path = [['London', 'New York'], ['New York', 'Lima'], ['Lima', 'Sao Paulo']]
 * output = 'Sao Paulo'
 */

const path = [
  ["London", "New York"],
  ["New York", "Lima"],
  ["Lima", "Sao Paulo"],
];

const lastCityDestination = (path: string[][]): string | void => {
  let arr = [];
  for (let i = 0; i < path.length; i++) {
    for (let j = 0; j < path[i].length; j++) arr.push(path[i][j]);
  }

  arr = [...new Set(arr)];
  return arr[arr.length - 1];
};

console.log(lastCityDestination(path));
