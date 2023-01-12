var summaryRange = function (nums) {
  let output = [];
  let starting = nums[0];
  let ending = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == ending || nums[i] == ending + 1) {
      ending = nums[i];
    } else {
      if (starting == ending) {
        output.push(`${starting}`);
        starting = nums[i];
        ending = nums[i];
      } else {
        output.push(`${starting}->${ending}`);
        starting = nums[i];
        ending = nums[i];
      }
    }
  }
  if (starting == ending) {
    output.push(`${starting}`);
  } else {
    output.push(`${starting}->${ending}`);
  
  }
  return output
}
console.log(summaryRange([0, 2, 3, 4, 6, 8, 9])); // ["0","2->4","6","8->9"]