var peakIndexInMountainArray = function (arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end+1) / 2)
    if (arr[mid] >= arr[start]) {
      start = mid;
    } else {
      end = mid;
    }
  }
  return start;
};
console.log(peakIndexInMountainArray([0, 10, 5, 2]))

