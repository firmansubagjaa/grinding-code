const findMedianSortedArray = (
  nums1: number[],
  nums2: number[]
): number | void => {
  const mergedSortedNums: number[] = [];
  let left: number = 0;
  let right: number = 0;

  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] < nums2[right]) {
      mergedSortedNums.push(nums1[left]);
      left++;
    }
    if (nums1[left] > nums2[right]) {
      mergedSortedNums.push(nums2[right]);
      right++;
    }
  }

  while (left < nums1.length) {
    mergedSortedNums.push(nums1[left]);
    left++;
  }

  while (right < nums2.length) {
    mergedSortedNums.push(nums2[right]);
    right++;
  }

  const length = mergedSortedNums.length;
  if (length % 2 === 0) {
    return (
      (mergedSortedNums[length / 2 - 1] + mergedSortedNums[length / 2]) / 2
    );
  } else {
    return mergedSortedNums[Math.floor(length / 2)];
  }
};

console.log(findMedianSortedArray([1, 3], [2, 4, 5, 6]));
