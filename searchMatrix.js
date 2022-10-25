var searchMatrix = function (matrix, target) {

  let row = matrix.length;
  let col = matrix[0].length;

  let rowArray = [];
  for (let i = 0; i < row; i++) {
    rowArray.push(matrix[i][0]);
  }
  let left = 0;
  let right = rowArray.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (rowArray[mid] === target) {
      return true;
    } else if (rowArray[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  let rowTarget = right;
  let colArray = matrix[rowTarget];
  left = 0;
  right = colArray.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (colArray[mid] === target) {
      return true;
    } else if (colArray[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;


};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));