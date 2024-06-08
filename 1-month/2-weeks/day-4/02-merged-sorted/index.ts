const mergeSorted = (arr1: number[], arr2: number[]): number[] | void => {
  let mergedArr: number[] = [];
  let left: number = 0;
  let right: number = 0;

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      mergedArr.push(arr1[left]);
      left++;
    } else {
      mergedArr.push(arr2[right]);
      right++;
    }
  }

  while (left < arr1.length) {
    mergedArr.push(arr1[left]);
    left++;
  }

  while (right < arr2.length) {
    mergedArr.push(arr2[right]);
    right++;
  }

  return mergedArr;
};

console.log(mergeSorted([2, 4, 6], [1, 3, 5]));
