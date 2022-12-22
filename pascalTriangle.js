var generate = function (numRows) {
  let arr = [];
  if (!numRows) {
    return arr;
  }
  if (numRows == 1) {
    return [[1]];
  }
  if (numRows == 2) {
    return [[1], [1, 1]];
  }
  arr = [[1], [1, 1]];
  for (let i = 1; i < numRows -1; i++) {
    let outputArray = [1];
    for (let j = 0; j < arr[i].length - 1; j++) {
      outputArray.push(arr[i][j] + arr[i][j + 1])
    }
    outputArray.push(1);
    arr.push(outputArray);
  }
  return arr



};
