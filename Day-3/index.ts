const mergedSortedArray = (nums1: number[], nums2: number[]) => {
  const mergedArray: number[] = [];
  let i: number = 0,
    j: number = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      mergedArray.push(nums1[i]);
      i++;
    }
    if (nums1[i] > nums2[j]) {
      mergedArray.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    mergedArray.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    mergedArray.push(nums2[j]);
    j++;
  }
  return mergedArray;
};

console.log(mergedSortedArray([1, 3, 5], [2, 4, 6]));
