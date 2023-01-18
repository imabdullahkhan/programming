var subArrayRanges = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let subArray = nums.slice(i, j+1);
      let min = Math.min(...subArray);
      let max = Math.max(...subArray);
      sum = sum + (max - min);
    }
  }
  return sum
};
console.log(subArrayRanges([1, 2, 3]));