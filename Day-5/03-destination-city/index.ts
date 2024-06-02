/**
 * input = path = [['London', 'New York'], ['New York', 'Lima'], ['Lima', 'Sao Paulo']]
 * output = 'Sao Paulo'
 */

const path = [
  ["London", "New York"],
  ["New York", "Lima"],
  ["Lima", "Sao Paulo"],
];

function findCity(paths: string[][]): string | void {
  let lastCity: string | undefined = undefined;

  for (let i = 0; i < paths.length && !lastCity; i++) {
    const from = paths[i][0];
    const to = paths[i][1];

    if (from === lastCity) {
      lastCity = to;
    } else if (to === lastCity) {
      lastCity = from;
    }
  }

  return lastCity || "Insert a valid path";
}

console.log(findCity(path));
