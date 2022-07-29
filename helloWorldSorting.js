// input: 012221210020
// output: 000011122222

// one way
// get count of 0's, 1's, 2's and at last print them that many number of times

// 2nd way
// loop through the numbers
// loop again to check with next numbers
// if the next number is grater, then swap
// continue

const nums = [0, 1, 2, 2, 2, 1, 2, 1, 0, 0, 2, 0];
console.log("nums1: ", nums);

for (let i = 0; i <= nums.length; i++) {
  for (let j = 0; j <= nums.length - i; j++) {
    if (nums[j] > nums[j + 1]) {
      let temp = nums[j];
      nums[j] = nums[j + 1];
      nums[j + 1] = temp;
    //   console.log("i: ", i, nums);
    }
  }
}

console.log(nums);
