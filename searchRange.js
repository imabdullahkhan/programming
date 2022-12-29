var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let targetIndex = -1;
  if (nums[left] == target) {
    targetIndex = left;
  } else if (nums[right] == target) {
    targetIndex = right;
  }
  while (left <= right && targetIndex == -1) {
    if (nums[left] == target) {
      targetIndex = left;
    }
    if (nums[right] == target) {
      targetIndex = right;
    }
    let mid = Math.floor((left + right) / 2);
    // console.log(mid);
    if (nums[mid] == target) {
      targetIndex = mid;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  if (targetIndex == -1) {
    return [-1, -1]
  } else {
    let leftRange = targetIndex;
    let rightRange = targetIndex;
    let i = targetIndex;
    while (i >= 0 && target == nums[i]) {
      i--;
    }
    leftRange = i;
    i = targetIndex;
    while (i < nums.length && target == nums[i]) {
      i++;
    }
    rightRange = i
    return [parseInt(leftRange + 1), parseInt(rightRange - 1)]
  }


};
console.log(searchRange([5, 7, 7, 8, 8, 10], 8))