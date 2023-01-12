var maxProfitAssignment = function (difficulty, profit, worker) {
  let BinarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[left] == target) {
        return left;
      }
      if (arr[right] == target) {
        return right;
      }
      let mid = Math.floor((left + right+1) / 2);
      if (arr[mid] == target) {
        return mid;
      }
      if (arr[mid] > target) {
        right = mid - 1
      }
      if (arr[mid] < target) {
        left = mid ;
      }

    }
    return left
  }
  let sum = 0;
  for (let i = 0; i < worker.length; i++) {
    let nearestDifficultJobIndex = BinarySearch(difficulty, worker[i]);
    if (difficulty[nearestDifficultJobIndex] <= worker[i]) {
      sum = sum + profit[nearestDifficultJobIndex];
    }
  }
  return sum
};
console.log(maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7])); // 100