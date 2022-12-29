var maxArea = function (height) {
  var maxWater = -1;
  var start = 0;
  var end = height.length - 1;
  while (start < end) {
    let minHeight = Math.min(height[start], height[end])
    let totalWaterCalculate = (end - start) * minHeight;
    if (maxWater < totalWaterCalculate) {
      maxWater = totalWaterCalculate;
      
    }
    if (minHeight == height[start]) {
      start = start + 1;
    } else {
      end = end - 1;
    }

  }
  let minHeights = Math.min(height[start], height[end])
  let totalWaterCalculates = (end - start) * minHeights;
  if (maxWater < totalWaterCalculates) {
    maxWater = totalWaterCalculates;
  }
  return maxWater
};
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));