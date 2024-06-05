const removeElement = (nums: number[], val: number) => {
  let k = 0;
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

const nums1 = [0, 1, 2, 2, 3, 0, 2];
const result1 = removeElement(nums1, 2);
console.log(`length: ${result1}\n nums: ${nums1.slice(0, result1)}`);
console.log(nums1.slice(0, 4));
