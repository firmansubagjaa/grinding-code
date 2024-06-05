// version 1: add two array's with built in method concat() and then sort().
export const mergeSortedArrV1 = (arr1: number[], arr2: number[]): number[] => {
  return arr1.concat(arr2).sort();
};

// version 2: destructuring array with built in method sort().
export const mergeSortedArrV2 = (arr1: number[], arr2: number[]): number[] => {
  return [...arr1, ...arr2].sort();
};

/* 
    version 3: best perfomance by Time Complexity with two pointers algorithm for
    large-scale solution.
 */
export const mergeSortedArrV3 = (arr1: number[], arr2: number[]): number[] => {
  const mergeSorted: number[] = [];
  let left: number = 0,
    right: number = 0;

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      mergeSorted.push(arr1[left]);
      left++;
    }
    if (arr1[left] > arr2[right]) {
      mergeSorted.push(arr2[right]);
      right++;
    }
  }

  while (left < arr1.length) {
    mergeSorted.push(arr1[left]);
    left++;
  }

  while (right < arr2.length) {
    mergeSorted.push(arr2[right]);
    right++;
  }

  return mergeSorted;
};

console.log(mergeSortedArrV3([2, 4, 6], [1, 3, 5]));
console.log(mergeSortedArrV1([2, 4, 6], [1, 3, 5]));
console.log(mergeSortedArrV2([2, 4, 6], [1, 3, 5]));
