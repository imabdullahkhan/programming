var jump = function (nums) {
  if (nums.length == 1) {
    return 0;
  }
  let output = Array(nums.length).fill(Number.POSITIVE_INFINITY);
  output[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    let jumpCount = nums[i];
    let checkIndex = i + 1;
    while (jumpCount != 0) {
      output[checkIndex] = Math.min(output[checkIndex], i + 1);
      jumpCount = jumpCount - 1;
      checkIndex = checkIndex + 1;
      if (checkIndex >= nums.length) {
        break;
      }
    }
  }
  return output[nums.length - 1]
};
console.log(jump([1, 2, 1, 1, 1]));